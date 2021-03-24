(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/debris_wasm_test.js":
/*!**********************************!*\
  !*** ../pkg/debris_wasm_test.js ***!
  \**********************************/
/*! exports provided: compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debris_wasm_test_bg.wasm */ \"../pkg/debris_wasm_test_bg.wasm\");\n/* harmony import */ var _debris_wasm_test_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debris_wasm_test_bg.js */ \"../pkg/debris_wasm_test_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compile\", function() { return _debris_wasm_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"compile\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/debris_wasm_test.js?");

/***/ }),

/***/ "../pkg/debris_wasm_test_bg.js":
/*!*************************************!*\
  !*** ../pkg/debris_wasm_test_bg.js ***!
  \*************************************/
/*! exports provided: compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compile\", function() { return compile; });\n/* harmony import */ var _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debris_wasm_test_bg.wasm */ \"../pkg/debris_wasm_test_bg.wasm\");\n\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n* @param {string} source\n* @returns {string}\n*/\nfunction compile(source) {\n    try {\n        const retptr = _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        var ptr0 = passStringToWasm0(source, _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"compile\"](retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        _debris_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n    }\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/debris_wasm_test_bg.js?");

/***/ }),

/***/ "../pkg/debris_wasm_test_bg.wasm":
/*!***************************************!*\
  !*** ../pkg/debris_wasm_test_bg.wasm ***!
  \***************************************/
/*! exports provided: memory, compile, __wbindgen_add_to_stack_pointer, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/debris_wasm_test_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var debris_wasm_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debris_wasm_test */ \"../pkg/debris_wasm_test.js\");\n/* harmony import */ var codejar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codejar */ \"./node_modules/codejar/codejar.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ \"./node_modules/prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst code_input = document.getElementById(\"code_input\");\nconst inpt = Object(codejar__WEBPACK_IMPORTED_MODULE_1__[\"CodeJar\"])(code_input, prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlightElement, { tab: \"  \" });\n\nconst code_output = document.getElementById(\"code_output\");\nObject(codejar__WEBPACK_IMPORTED_MODULE_1__[\"CodeJar\"])(code_output, prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlightElement);\n\ninpt.onUpdate((code) => {\n    let result = debris_wasm_test__WEBPACK_IMPORTED_MODULE_0__[\"compile\"](code);\n    code_output.innerText = result;\n})\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);