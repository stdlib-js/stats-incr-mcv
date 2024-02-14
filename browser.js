// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):p.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var x=String.fromCharCode,S=isNaN,_=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,t,a,o,l,p,u,f;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(t=e[u]))l+=t;else{if(r=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,S(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),l+=t.arg||"",p+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,i,t,n;for(i=[],n=0,t=I.exec(e);t;)(r=e.slice(n,I.lastIndex-t[0].length)).length&&i.push(r),i.push(T(t)),n=I.lastIndex,t=I.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function A(e){return"string"==typeof e}function $(e){var r,i;if(!A(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return F.apply(null,r)}var j=Object.prototype,O=j.toString,C=j.__defineGetter__,R=j.__defineSetter__,P=j.__lookupGetter__,Z=j.__lookupSetter__,W=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===O.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(P.call(e,r)||Z.call(e,r)?(t=e.__proto__,e.__proto__=j,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,i.get),o&&R&&R.call(e,r,i.set),e};function G(e,r,i){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function L(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,z=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",B=U()?function(e){var r,i,t,n,a;if(null==e)return X.call(e);i=e[q],a=q,r=null!=(n=e)&&z.call(n,a);try{e[q]=void 0}catch(r){return X.call(e)}return t=X.call(e),r?e[q]=i:delete e[q],t}:function(e){return X.call(e)},D=Number,H=D.prototype.toString,J=U();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function Q(e){return L(e)||K(e)}G(Q,"isPrimitive",L),G(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=D.NEGATIVE_INFINITY,ie=Math.floor;function te(e){return e<ee&&e>re&&ie(r=e)===r;var r}function ne(e){return L(e)&&te(e)}function ae(e){return K(e)&&te(e.valueOf())}function oe(e){return ne(e)||ae(e)}function ce(e){return ne(e)&&e>0}function se(e){return ae(e)&&e.valueOf()>0}function le(e){return ce(e)||se(e)}function pe(e){return e!=e}G(oe,"isPrimitive",ne),G(oe,"isObject",ae),G(le,"isPrimitive",ce),G(le,"isObject",se);var ue=Math.sqrt,fe="function"==typeof Float64Array,ge="function"==typeof Float64Array?Float64Array:null,de="function"==typeof Float64Array?Float64Array:void 0,he=function(){var e,r,i;if("function"!=typeof ge)return!1;try{r=new ge([1,3.14,-3.14,NaN]),i=r,e=(fe&&i instanceof Float64Array||"[object Float64Array]"===B(i))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")};function we(e){return"number"==typeof e}function be(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ve(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+be(n):be(n)+e,t&&(e="-"+e)),e}var ye=String.prototype.toLowerCase,me=String.prototype.toUpperCase;function Ee(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!we(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ve(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ve(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===me.call(e.specifier)?me.call(i):ye.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ke(e){return"string"==typeof e}var xe=Math.abs,Se=String.prototype.toLowerCase,_e=String.prototype.toUpperCase,Ne=String.prototype.replace,Fe=/e\+(\d)$/,Ie=/e-(\d)$/,Te=/^(\d+)$/,Ve=/^(\d+)e/,Ae=/\.0$/,$e=/\.0*e/,je=/(\..*[^0])0*e/;function Oe(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!we(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":xe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Ne.call(i,je,"$1e"),i=Ne.call(i,$e,"e"),i=Ne.call(i,Ae,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ne.call(i,Fe,"e+0$1"),i=Ne.call(i,Ie,"e-0$1"),e.alternate&&(i=Ne.call(i,Te,"$1."),i=Ne.call(i,Ve,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===_e.call(e.specifier)?_e.call(i):Se.call(i)}function Ce(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Re(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ce(t):Ce(t)+e}var Pe=String.fromCharCode,Ze=isNaN,We=Array.isArray;function Ge(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Le(e){var r,i,t,n,a,o,c,s,l;if(!We(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ke(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=Ge(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Ze(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Ze(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Ee(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ze(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ze(a)?String(t.arg):Pe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Oe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ve(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Re(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ue(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Xe(e){var r,i,t,n;for(i=[],n=0,t=Me.exec(e);t;)(r=e.slice(n,Me.lastIndex-t[0].length)).length&&i.push(r),i.push(Ue(t)),n=Me.lastIndex,t=Me.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function ze(e){return"string"==typeof e}function Ye(e){var r,i,t;if(!ze(e))throw new TypeError(Ye("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Xe(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Le.apply(null,i)}return function(e,r){var i,t,n,a,o,c,s,l;if(!ce(e))throw new TypeError(Ye("invalid argument. Must provide a positive integer. Value: `%s`.",e));if(t=new he(e),s=e-1,a=0,l=-1,c=0,arguments.length>1){if(!L(r))throw new TypeError(Ye("invalid argument. Must provide a number. Value: `%s`.",r));return o=r,u}return o=0,p;function p(r){var p,u;if(0===arguments.length)return 0===c?null:1===c?pe(a)?NaN:0/o:c<e?ue(a/(c-1))/o:ue(a/s)/o;if(l=(l+1)%e,pe(r))c=e,o=NaN,a=NaN;else{if(c<e)return t[l]=r,a+=(i=r-o)*(r-(o+=i/(c+=1))),1===c?0/o:ue(a/(c-1))/o;if(1===c)return(a=0)/(o=r);if(pe(t[l])){for(c=1,o=r,a=0,p=0;p<e;p++)if(p!==l){if(pe(u=t[p])){c=e,o=NaN,a=NaN;break}a+=(i=u-o)*(u-(o+=i/(c+=1)))}}else!1===pe(a)&&(n=t[l],a+=(i=r-n)*(n-o+(r-(o+=i/e))))}return t[l]=r,ue(a/s)/o}function u(r){var s;if(0===arguments.length)return 0===c?null:c<e?ue(a/c)/o:ue(a/e)/o;if(l=(l+1)%e,pe(r))c=e,a=NaN;else{if(c<e)return t[l]=r,ue((a+=(i=r-o)*i)/(c+=1))/o;if(pe(t[l])){for(a=0,s=0;s<e;s++)if(s!==l){if(pe(t[s])){c=e,a=NaN;break}i=t[s]-o,a+=i*i}}else!1===pe(a)&&(n=t[l],a+=(r-n)*(r-o+n-o))}return t[l]=r,ue(a/e)/o}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmcv=r();
//# sourceMappingURL=browser.js.map
