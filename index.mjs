// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function f(f,m){var o,a,l,d,h,j,p,v;if(!e(f))throw new TypeError(n("1Hh8B,Hs",f));if(a=new i(f),p=f-1,d=0,v=-1,j=0,arguments.length>1){if(!r(m))throw new TypeError(n("1Hh9X,Hv",m));return h=m,N}return h=0,u;function u(e){var r,i;if(0===arguments.length)return 0===j?null:1===j?t(d)?NaN:0/h:j<f?s(d/(j-1))/h:s(d/p)/h;if(v=(v+1)%f,t(e))j=f,h=NaN,d=NaN;else{if(j<f)return a[v]=e,d+=(o=e-h)*(e-(h+=o/(j+=1))),1===j?0/h:s(d/(j-1))/h;if(1===j)return(d=0)/(h=e);if(t(a[v])){for(j=1,h=e,d=0,r=0;r<f;r++)if(r!==v){if(i=a[r],t(i)){j=f,h=NaN,d=NaN;break}d+=(o=i-h)*(i-(h+=o/(j+=1)))}}else!1===t(d)&&(l=a[v],d+=(o=e-l)*(l-h+(e-(h+=o/f))))}return a[v]=e,s(d/p)/h}function N(e){var r;if(0===arguments.length)return 0===j?null:j<f?s(d/j)/h:s(d/f)/h;if(v=(v+1)%f,t(e))j=f,d=NaN;else{if(j<f)return a[v]=e,s((d+=(o=e-h)*o)/(j+=1))/h;if(t(a[v])){for(d=0,r=0;r<f;r++)if(r!==v){if(t(a[r])){j=f,d=NaN;break}o=a[r]-h,d+=o*o}}else!1===t(d)&&(l=a[v],d+=(e-l)*(e-h+l-h))}return a[v]=e,s(d/f)/h}}export{f as default};
//# sourceMappingURL=index.mjs.map