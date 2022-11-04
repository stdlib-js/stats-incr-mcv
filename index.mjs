// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function f(f,m){var d,o,a,l,h,j,p,u;if(!e(f))throw new TypeError(n("0dk8T",f));if(o=new i(f),p=f-1,l=0,u=-1,j=0,arguments.length>1){if(!r(m))throw new TypeError(n("0dkA8",m));return h=m,v}return h=0,N;function N(e){var r,i;if(0===arguments.length)return 0===j?null:1===j?t(l)?NaN:0/h:j<f?s(l/(j-1))/h:s(l/p)/h;if(u=(u+1)%f,t(e))j=f,h=NaN,l=NaN;else{if(j<f)return o[u]=e,l+=(d=e-h)*(e-(h+=d/(j+=1))),1===j?0/h:s(l/(j-1))/h;if(1===j)return(l=0)/(h=e);if(t(o[u])){for(j=1,h=e,l=0,r=0;r<f;r++)if(r!==u){if(i=o[r],t(i)){j=f,h=NaN,l=NaN;break}l+=(d=i-h)*(i-(h+=d/(j+=1)))}}else!1===t(l)&&(a=o[u],l+=(d=e-a)*(a-h+(e-(h+=d/f))))}return o[u]=e,s(l/p)/h}function v(e){var r;if(0===arguments.length)return 0===j?null:j<f?s(l/j)/h:s(l/f)/h;if(u=(u+1)%f,t(e))j=f,l=NaN;else{if(j<f)return o[u]=e,s((l+=(d=e-h)*d)/(j+=1))/h;if(t(o[u])){for(l=0,r=0;r<f;r++)if(r!==u){if(t(o[r])){j=f,l=NaN;break}d=o[r]-h,l+=d*d}}else!1===t(l)&&(a=o[u],l+=(e-a)*(e-h+a-h))}return o[u]=e,s(l/f)/h}}export{f as default};
//# sourceMappingURL=index.mjs.map
