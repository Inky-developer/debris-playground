(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n(3),c=n(26),i=n(5),a=n(11),s=n(25),l=n(24),d=n(10),u=n(29),f=n(22),p=n(23),b=n(13),h=n(12);const m=n(14);function g(e){for(var t={},n=e.split(" "),o=0;o<n.length;++o)t[n[o]]=!0;return t}let y=0;const w=document.getElementById("error_banner"),k=document.getElementById("build_mode");document.getElementById("btn_debug").onclick=()=>{y=0,k.innerText="Build Mode: Debug",T()},document.getElementById("btn_release").onclick=()=>{y=1,k.innerText="Build Mode: Release",T()};const _=[r.d.editable.of(()=>!1),d.a.fallback,f.a.define(Object(p.a)({keywords:g("advancement attribute ban ban-ip banlist bossbar clear clone data datapack debug defaultgamemode deop difficulty effect enchant execute experience fill forceload function gamemode gamerule give help kick kill list locate locatebiome loot me msg op pardon pardon-ip particle playsound publish recipe reload replaceitem save-all save-off save-on say schedule scoreboard seed setblock setidletimeout setworldspawn spawnpoint spectate spreadplayers stop stopsound summon tag team teammsg teleport tell tellraw time title tm tp trigger w weather whitelist worldborder xp"),types:g("if unless store result score entity block storage matches run objectives players set operation add remove"),atoms:g("debris")}))],v=new r.d({state:o.f.create({extensions:_}),parent:document.getElementById("code_output")});let x=localStorage.getItem("last_code");const I=new URLSearchParams(window.location.search).get("code");if(null!==I){fetch("https://debris-snippets.glitch.me/get/"+I,{}).then(e=>e.json()).then(e=>{if(e.success){let t=e.snippet;document.querySelector("meta[name=description]").setAttribute("content",t),B(t)}else alert("Invalid permalink: Could not load this code snippet")})}const E=new r.d({state:o.f.create({extensions:[r.d.updateListener.of(e=>{e.docChanged&&T()}),Object(u.a)(),Object(l.a)(),Object(i.g)(),d.a.fallback,Object(a.a)(),Object(s.a)(),Object(r.h)(),r.i.of([...s.b,...c.c,...l.b,{key:"Tab",run:c.b,shift:c.a}]),f.a.define(Object(p.a)({keywords:g("let comptime import mod fn struct interface loop while for if else return break continue not and or"),types:g("Any Int Bool Null StaticInt DynamicInt StaticBool DynamicBool String Module"),number:/-?[0-9]+/,blockKeywords:g("mod fn loop if else"),defKeywords:g("fn struct"),atoms:g("true false"),builtin:g("execute set_score print dbg register_ticking_function dyn_int"),typeFirstDefinitions:!1}))],doc:x}),parent:document.getElementById("code_input")});function B(e){E.dispatch({changes:{from:0,to:E.state.doc.length,insert:e}})}r.d.editable.of(()=>!1),d.a.fallback;const S=new r.d({state:o.f.create({extensions:_}),parent:document.getElementById("interpreter_output")});function T(){let e=E.state.doc.toString();try{const t=h.c(e,y);let n;const r=t.error;n=null!==r?r:t.data,v.setState(o.f.create({doc:n,extensions:_}))}catch(t){j(e,t,'Please consider reporting this error at the <a target="_blank" href=https://github.com/Inky-developer/debris/issues/new?assignees=&labels=ICE%2C+bug&body=%%%&title=ICE:>github repository</a>!')}}function j(e,t,n){console.log(t);const o=encodeURIComponent("The following code causes an internal compile error:\n```\n%%%\n```\n\n**Additional context**\nAdd any other relevant context about the problem here".replace("%%%",e)),r=`<div>The compiler crashed: "${t}".<br>This is a bug. ${n.replace("%%%",o)}</div>`;w.innerHTML=r,w.style.visibility="visible"}document.getElementById("interpret").onclick=()=>{let e=E.state.doc.toString();try{const t=h.d(e);let n;console.log(t);const r=t.error;n=null!=r?r:t.data,S.setState(o.f.create({doc:n,extensions:_}))}catch(t){j(e,t,'Please consider reporting this error at the <a target="_blank" href=https://github.com/SuperTails/datapackvm/issues/new?assignees=&labels=bug&body=%%%&title=Panic:>datapackvm github repository</a>!')}},fetch("https://api.github.com/repos/Inky-developer/debris/contents/examples").then(e=>e.json()).then(e=>{let t=[],n=[];for(let o of e){const e=o.name,r=o.download_url;n.push(fetch(r).then(e=>e.text()).then(n=>t.push({name:e,content:n})).catch(e=>console.log(e)))}Promise.all(n).then(()=>{const e=document.getElementById("example_dropdown_list");e.innerHTML="",t.sort((e,t)=>e>t?1:t>e?-1:0);for(let n of t){let t=document.createElement("a");t.innerText=n.name,t.onclick=()=>B(n.content),e.appendChild(t)}})}),T(),window.onunload=()=>localStorage.setItem("last_code",E.state.doc.toString()),document.getElementById("permalink").onclick=()=>{const e=document.getElementById("permalink");e.disabled=!0;const t=e.textContent;e.textContent="Please wait...",async function(){const e=E.state.doc.toString(),t=await fetch("https://debris-snippets.glitch.me/add/",{method:"POST",body:JSON.stringify({text:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json());return t.success?"https://inky-developer.github.io/debris-playground/?code="+t.id:(console.log(t),alert("Could not create a permalink!"),null)}().then(n=>{null!=n&&window.open(n,"_blank"),e.disabled=!1,e.textContent=t})},document.getElementById("download").onclick=()=>function(){let e=JSON.parse(h.e(E.state.doc.toString())),t=new m;!function e(t,n){for(let o of n.dirs){e(t.folder(o.name),o.content)}for(let e of n.files)t.file(e.name,e.content)}(t,e),t.generateAsync({type:"blob"}).then(e=>Object(b.saveAs)(e,"debris_playground.zip"))}()},12:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return w})),n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return v}));var o=n(28);let r=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});r.decode();let c=null;function i(){return null!==c&&c.buffer===o.k.buffer||(c=new Uint8Array(o.k.buffer)),c}function a(e,t){return r.decode(i().subarray(e,e+t))}const s=new Array(32).fill(void 0);s.push(void 0,null,!0,!1);let l=s.length;function d(e){const t=function(e){return s[e]}(e);return function(e){e<36||(s[e]=l,l=e)}(e),t}let u=0;let f=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof f.encodeInto?function(e,t){return f.encodeInto(e,t)}:function(e,t){const n=f.encode(e);return t.set(n),{read:e.length,written:n.length}};function b(e,t,n){if(void 0===n){const n=f.encode(e),o=t(n.length);return i().subarray(o,o+n.length).set(n),u=n.length,o}let o=e.length,r=t(o);const c=i();let a=0;for(;a<o;a++){const t=e.charCodeAt(a);if(t>127)break;c[r+a]=t}if(a!==o){0!==a&&(e=e.slice(a)),r=n(r,o,o=a+3*e.length);const t=i().subarray(r+a,r+o);a+=p(e,t).written}return u=a,r}function h(e){var t=b(e,o.d,o.e),n=u,r=o.g(t,n);return k.__wrap(r)}function m(e,t){var n=b(e,o.d,o.e),r=u,c=o.f(n,r,t);return k.__wrap(c)}let g=null;function y(){return null!==g&&g.buffer===o.k.buffer||(g=new Int32Array(o.k.buffer)),g}function w(e){try{const i=o.b(-16);var t=b(e,o.d,o.e),n=u;o.h(i,t,n);var r=y()[i/4+0],c=y()[i/4+1];let s;return 0!==r&&(s=a(r,c).slice(),o.c(r,1*c)),s}finally{o.b(16)}}class k{static __wrap(e){const t=Object.create(k.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.a(e)}get data(){return d(o.i(this.ptr))}get error(){return d(o.j(this.ptr))}}function _(e,t){return function(e){l===s.length&&s.push(s.length+1);const t=l;return l=s[t],s[t]=e,t}(a(e,t))}function v(e,t){throw new Error(a(e,t))}}).call(this,n(27)(e))},28:function(e,t,n){"use strict";var o=n.w[e.i];e.exports=o;n(12);o.l()}}]);