function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const l=parseInt(document.querySelector("input[name=delay]").value),u=(parseInt(document.querySelector("input[name=step]").value),parseInt(document.querySelector("input[name=amount]").value));var a,d;document.querySelector("button[type=submit]").addEventListener("click",(e=>{e.preventDefault(),setTimeout((()=>{for(let e=1;e<=u;e++)console.log(e)}),l)})),new Promise(((e,t)=>{setTimeout((()=>{Math.random()>.3?e({position:a,delay:d}):t({position:a,delay:d})}),d)})).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.warning(`❌ Rejected promise ${t} in ${n}ms`)}));
//# sourceMappingURL=03-promises.0c415cb2.js.map
