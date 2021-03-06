use datapack_common::vfs::{Directory, FsElement};
use debris_lang::{
    debris_backends::{Backend, DatapackBackend},
    debris_common::Code,
    debris_core::{self, BuildMode},
    get_std_module,
    CompileConfig,
};
use serde_json::json;
use std::fmt::Write;
use wasm_bindgen::prelude::*;
// use wee_alloc::WeeAlloc;

// #[global_allocator]
// static ALLOC: WeeAlloc = WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace=console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub struct CompileResult(Result<String, String>);

#[wasm_bindgen]
impl CompileResult {
    #[wasm_bindgen(getter)]
    pub fn data(&self) -> JsValue {
        match self.0.as_ref() {
            Ok(result) => JsValue::from_str(&result),
            Err(_) => JsValue::null(),
        }
    }

    #[wasm_bindgen(getter)]
    pub fn error(&self) -> JsValue {
        match self.0.as_ref() {
            Ok(_) => JsValue::null(),
            Err(e) => JsValue::from_str(&e),
        }
    }
}

#[wasm_bindgen]
pub fn compile_and_run(source: String) -> CompileResult {
    let mut config = CompileConfig::new(get_std_module().into(), ".".into());
    config
        .compile_context
        .config
        .update_build_mode(BuildMode::Release);
    let pack = match compile_inner(source, &mut config) {
        Ok(pack) => pack,
        Err(err) => return CompileResult(Err(err.format(&config.compile_context))),
    };

    let funcs = datapack_common::functions::get_functions(&pack).unwrap();

    let idx = funcs
        .iter()
        .enumerate()
        .find(|(_, f)| f.id.path == "main")
        .unwrap_or_else(|| {
            eprintln!("Failed to find {:?}", "main");
            panic!();
        })
        .0;

    let mut i = datapack_vm::Interpreter::new(funcs, idx);
    let result = i.run_to_end();
    if let Err(e) = result {
        return CompileResult(Err(e.to_string()));
    }

    let output = i.output.join("\n");
    return CompileResult(Ok(output))
}

#[wasm_bindgen]
pub fn compile(source: String, build_mode: u8) -> CompileResult {
    let mut config = CompileConfig::new(get_std_module().into(), ".".into());
    let build_mode = match build_mode {
        0 => debris_core::BuildMode::Debug,
        1 => debris_core::BuildMode::Release,
        _ => return CompileResult(Err("Invalid Build Mode".to_string())),
    };
    config.compile_context.config.update_build_mode(build_mode);
    match compile_inner(source, &mut config) {
        Ok(mut result) => {
            let function_folder = match result
                .resolve_path(&["data", "debris_project", "functions"])
                .unwrap()
            {
                FsElement::Directoy(dir) => dir,
                _ => panic!("Expected dir"),
            };
            CompileResult(Ok(stringify_dir(function_folder)))
        }
        Err(error) => CompileResult(Err(error.format(&config.compile_context))),
    }
}

/// Compiles the source and returns the full datapack as a json string
#[wasm_bindgen]
pub fn compile_full(source: String) -> Option<String> {
    fn dir_to_json(dir: Directory) -> serde_json::Value {
        let sub_dirs: serde_json::Value = dir
            .directories
            .into_iter()
            .map(|(name, dir)| json!({"name": name, "content": dir_to_json(dir)}))
            .collect();
        let sub_files: serde_json::Value = dir
            .files
            .into_iter()
            .map(|(name, file)| json!({"name": name, "content": file.contents}))
            .collect();
        json!({
            "dirs": sub_dirs,
            "files": sub_files,
        })
    }

    let mut config = CompileConfig::new(get_std_module().into(), ".".into());
    config
        .compile_context
        .config
        .update_build_mode(BuildMode::Release);
    match compile_inner(source, &mut config) {
        Ok(dir) => Some(dir_to_json(dir).to_string()),
        Err(_) => None,
    }
}

fn compile_inner(
    source: String,
    config: &mut CompileConfig,
) -> debris_core::error::Result<Directory> {
    let id = config
        .compile_context
        .input_files
        .add_input(Code { path: None, source });

    let hir = config.get_hir(id)?;
    let mut mir = config.get_mir(&hir)?;
    let llir = config.get_llir(&mir.contexts, &mut mir.namespaces)?;

    let result = DatapackBackend.generate(&llir, &config.compile_context);

    Ok(result)
}

fn stringify_dir(dir: &Directory) -> String {
    let mut result = String::new();
    let mut sorted: Vec<_> = dir.files.iter().collect();
    sorted.sort_by(|a, b| alphanumeric_sort::compare_str(&a.0, &b.0));
    for (name, file) in sorted {
        result
            .write_fmt(format_args!("## {} ##\n{}\n\n", name, &file.contents))
            .unwrap();
    }

    result
}
