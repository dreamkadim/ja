!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r,u,a=i("iU1Pc"),c=parseInt(document.querySelector("input[name=delay]").value),l=(parseInt(document.querySelector("input[name=step]").value),parseInt(document.querySelector("input[name=amount]").value));document.querySelector("button[type=submit]").addEventListener("click",(function(){setTimeout((function(){for(var e=1;e<=l;e++)console.log(e)}),c)})),new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:r,delay:u}):n({position:r,delay:u})}),u)})).then((function(n){var t=n.position,o=n.delay;e(a).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(a).Notify.warning("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}();
//# sourceMappingURL=03-promises.3328447f.js.map
