(()=>{"use strict";var e={7856:(e,t,n)=>{function o(e,t,n){var o=(n||{}).atBegin;return function(e,t,n){var o,r=n||{},i=r.noTrailing,c=void 0!==i&&i,a=r.noLeading,u=void 0!==a&&a,d=r.debounceMode,v=void 0===d?void 0:d,l=!1,s=0;function f(){o&&clearTimeout(o)}function p(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=this,d=Date.now()-s;function p(){s=Date.now(),t.apply(a,r)}function g(){o=void 0}l||(u||!v||o||p(),f(),void 0===v&&d>e?u?(s=Date.now(),c||(o=setTimeout(v?g:p,e))):p():!0!==c&&(o=setTimeout(v?g:p,void 0===v?e-d:e)))}return p.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;f(),l=!n},p}(e,t,{debounceMode:!1!==(void 0!==o&&o)})}n.d(t,{D:()=>o})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;(0,n(7856).D)(700,(()=>{t(function(){let t="";return e.getSelection?t=e.getSelection().toString():e.document.selection&&"Control"!==e.document.selection.type&&(t=e.document.selection.createRange().text),t}())}));const t=e=>{var t=new CustomEvent("selectionEnd",{bubbles:!0,cancelable:!1});t.selectedText=e,document.dispatchEvent(t)}})()})();