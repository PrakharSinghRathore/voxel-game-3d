(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ng={exports:{}},nu={},ig={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),v_=Symbol.for("react.portal"),__=Symbol.for("react.fragment"),y_=Symbol.for("react.strict_mode"),x_=Symbol.for("react.profiler"),S_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),E_=Symbol.for("react.forward_ref"),T_=Symbol.for("react.suspense"),w_=Symbol.for("react.memo"),A_=Symbol.for("react.lazy"),nd=Symbol.iterator;function C_(n){return n===null||typeof n!="object"?null:(n=nd&&n[nd]||n["@@iterator"],typeof n=="function"?n:null)}var rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sg=Object.assign,og={};function js(n,e,t){this.props=n,this.context=e,this.refs=og,this.updater=t||rg}js.prototype.isReactComponent={};js.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};js.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ag(){}ag.prototype=js.prototype;function Kf(n,e,t){this.props=n,this.context=e,this.refs=og,this.updater=t||rg}var qf=Kf.prototype=new ag;qf.constructor=Kf;sg(qf,js.prototype);qf.isPureReactComponent=!0;var id=Array.isArray,lg=Object.prototype.hasOwnProperty,$f={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function cg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lg.call(e,i)&&!ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:n,key:s,ref:o,props:r,_owner:$f.current}}function R_(n,e){return{$$typeof:ra,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Zf(n){return typeof n=="object"&&n!==null&&n.$$typeof===ra}function b_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var rd=/\/+/g;function Lu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?b_(""+n.key):e.toString(36)}function hl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ra:case v_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Lu(o,0):i,id(r)?(t="",n!=null&&(t=n.replace(rd,"$&/")+"/"),hl(r,e,t,"",function(u){return u})):r!=null&&(Zf(r)&&(r=R_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(rd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",id(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Lu(s,a);o+=hl(s,e,t,l,r)}else if(l=C_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Lu(s,a++),o+=hl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(n,e,t){if(n==null)return n;var i=[],r=0;return hl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function P_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var yn={current:null},dl={transition:null},L_={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:dl,ReactCurrentOwner:$f};function fg(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:ya,forEach:function(n,e,t){ya(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ya(n,function(){e++}),e},toArray:function(n){return ya(n,function(e){return e})||[]},only:function(n){if(!Zf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ot.Component=js;ot.Fragment=__;ot.Profiler=x_;ot.PureComponent=Kf;ot.StrictMode=y_;ot.Suspense=T_;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L_;ot.act=fg;ot.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=sg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$f.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)lg.call(e,l)&&!ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ra,type:n.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(n){return n={$$typeof:M_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:S_,_context:n},n.Consumer=n};ot.createElement=cg;ot.createFactory=function(n){var e=cg.bind(null,n);return e.type=n,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(n){return{$$typeof:E_,render:n}};ot.isValidElement=Zf;ot.lazy=function(n){return{$$typeof:A_,_payload:{_status:-1,_result:n},_init:P_}};ot.memo=function(n,e){return{$$typeof:w_,type:n,compare:e===void 0?null:e}};ot.startTransition=function(n){var e=dl.transition;dl.transition={};try{n()}finally{dl.transition=e}};ot.unstable_act=fg;ot.useCallback=function(n,e){return yn.current.useCallback(n,e)};ot.useContext=function(n){return yn.current.useContext(n)};ot.useDebugValue=function(){};ot.useDeferredValue=function(n){return yn.current.useDeferredValue(n)};ot.useEffect=function(n,e){return yn.current.useEffect(n,e)};ot.useId=function(){return yn.current.useId()};ot.useImperativeHandle=function(n,e,t){return yn.current.useImperativeHandle(n,e,t)};ot.useInsertionEffect=function(n,e){return yn.current.useInsertionEffect(n,e)};ot.useLayoutEffect=function(n,e){return yn.current.useLayoutEffect(n,e)};ot.useMemo=function(n,e){return yn.current.useMemo(n,e)};ot.useReducer=function(n,e,t){return yn.current.useReducer(n,e,t)};ot.useRef=function(n){return yn.current.useRef(n)};ot.useState=function(n){return yn.current.useState(n)};ot.useSyncExternalStore=function(n,e,t){return yn.current.useSyncExternalStore(n,e,t)};ot.useTransition=function(){return yn.current.useTransition()};ot.version="18.3.1";ig.exports=ot;var Ft=ig.exports;const hg=Yf(Ft);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_=Ft,N_=Symbol.for("react.element"),I_=Symbol.for("react.fragment"),U_=Object.prototype.hasOwnProperty,F_=D_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O_={key:!0,ref:!0,__self:!0,__source:!0};function dg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)U_.call(e,i)&&!O_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:N_,type:n,key:s,ref:o,props:r,_owner:F_.current}}nu.Fragment=I_;nu.jsx=dg;nu.jsxs=dg;ng.exports=nu;var oe=ng.exports,Gc={},pg={exports:{}},Bn={},mg={exports:{}},gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(O,V){var X=O.length;O.push(V);e:for(;0<X;){var ee=X-1>>>1,se=O[ee];if(0<r(se,V))O[ee]=V,O[X]=se,X=ee;else break e}}function t(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var V=O[0],X=O.pop();if(X!==V){O[0]=X;e:for(var ee=0,se=O.length,Z=se>>>1;ee<Z;){var re=2*(ee+1)-1,ve=O[re],Ee=re+1,we=O[Ee];if(0>r(ve,X))Ee<se&&0>r(we,ve)?(O[ee]=we,O[Ee]=X,ee=Ee):(O[ee]=ve,O[re]=X,ee=re);else if(Ee<se&&0>r(we,X))O[ee]=we,O[Ee]=X,ee=Ee;else break e}}return V}function r(O,V){var X=O.sortIndex-V.sortIndex;return X!==0?X:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var V=t(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=O)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=t(u)}}function S(O){if(y=!1,_(O),!g)if(t(l)!==null)g=!0,Q(T);else{var V=t(u);V!==null&&ne(S,V.startTime-O)}}function T(O,V){g=!1,y&&(y=!1,c(F),F=-1),p=!0;var X=d;try{for(_(V),f=t(l);f!==null&&(!(f.expirationTime>V)||O&&!H());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,d=f.priorityLevel;var se=ee(f.expirationTime<=V);V=n.unstable_now(),typeof se=="function"?f.callback=se:f===t(l)&&i(l),_(V)}else i(l);f=t(l)}if(f!==null)var Z=!0;else{var re=t(u);re!==null&&ne(S,re.startTime-V),Z=!1}return Z}finally{f=null,d=X,p=!1}}var A=!1,w=null,F=-1,M=5,C=-1;function H(){return!(n.unstable_now()-C<M)}function q(){if(w!==null){var O=n.unstable_now();C=O;var V=!0;try{V=w(!0,O)}finally{V?ie():(A=!1,w=null)}}else A=!1}var ie;if(typeof v=="function")ie=function(){v(q)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,G=U.port2;U.port1.onmessage=q,ie=function(){G.postMessage(null)}}else ie=function(){m(q,0)};function Q(O){w=O,A||(A=!0,ie())}function ne(O,V){F=m(function(){O(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,Q(T))},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(O){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var X=d;d=V;try{return O()}finally{d=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var X=d;d=O;try{return V()}finally{d=X}},n.unstable_scheduleCallback=function(O,V,X){var ee=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ee+X:ee):X=ee,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=X+se,O={id:h++,callback:V,priorityLevel:O,startTime:X,expirationTime:se,sortIndex:-1},X>ee?(O.sortIndex=X,e(u,O),t(l)===null&&O===t(u)&&(y?(c(F),F=-1):y=!0,ne(S,X-ee))):(O.sortIndex=se,e(l,O),g||p||(g=!0,Q(T))),O},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(O){var V=d;return function(){var X=d;d=V;try{return O.apply(this,arguments)}finally{d=X}}}})(gg);mg.exports=gg;var k_=mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=Ft,zn=k_;function de(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg=new Set,zo={};function Gr(n,e){Is(n,e),Is(n+"Capture",e)}function Is(n,e){for(zo[n]=e,n=0;n<e.length;n++)vg.add(e[n])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,B_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sd={},od={};function H_(n){return Vc.call(od,n)?!0:Vc.call(sd,n)?!1:B_.test(n)?od[n]=!0:(sd[n]=!0,!1)}function G_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function V_(n,e,t,i){if(e===null||typeof e>"u"||G_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ln[n]=new xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ln[e]=new xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ln[n]=new xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ln[n]=new xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ln[n]=new xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ln[n]=new xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ln[n]=new xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ln[n]=new xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ln[n]=new xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function Jf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Qf,Jf);ln[e]=new xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Qf,Jf);ln[e]=new xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Qf,Jf);ln[e]=new xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ln[n]=new xn(n,1,!1,n.toLowerCase(),null,!1,!1)});ln.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ln[n]=new xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function eh(n,e,t,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V_(e,t,r,i)&&(t=null),i||r===null?H_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Bi=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),yg=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),ih=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),xg=Symbol.for("react.offscreen"),ad=Symbol.iterator;function no(n){return n===null||typeof n!="object"?null:(n=ad&&n[ad]||n["@@iterator"],typeof n=="function"?n:null)}var Ut=Object.assign,Du;function Mo(n){if(Du===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+n}var Nu=!1;function Iu(n,e){if(!n||Nu)return"";Nu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Mo(n):""}function W_(n){switch(n.tag){case 5:return Mo(n.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return n=Iu(n.type,!1),n;case 11:return n=Iu(n.type.render,!1),n;case 1:return n=Iu(n.type,!0),n;default:return""}}function Yc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case hs:return"Fragment";case fs:return"Portal";case Wc:return"Profiler";case th:return"StrictMode";case Xc:return"Suspense";case jc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case yg:return(n.displayName||"Context")+".Consumer";case _g:return(n._context.displayName||"Context")+".Provider";case nh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ih:return e=n.displayName||null,e!==null?e:Yc(n.type)||"Memo";case Yi:e=n._payload,n=n._init;try{return Yc(n(e))}catch{}}return null}function X_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yc(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Sg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function j_(n){var e=Sg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Sa(n){n._valueTracker||(n._valueTracker=j_(n))}function Mg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Sg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function wl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Kc(n,e){var t=e.checked;return Ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function ld(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=hr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Eg(n,e){e=e.checked,e!=null&&eh(n,"checked",e,!1)}function qc(n,e){Eg(n,e);var t=hr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?$c(n,e.type,t):e.hasOwnProperty("defaultValue")&&$c(n,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ud(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function $c(n,e,t){(e!=="number"||wl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Eo=Array.isArray;function ws(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+hr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Zc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Ut({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function cd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(de(92));if(Eo(t)){if(1<t.length)throw Error(de(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:hr(t)}}function Tg(n,e){var t=hr(e.value),i=hr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function fd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function wg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?wg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ma,Ag=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Bo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y_=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(n){Y_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Co[e]=Co[n]})});function Cg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Co.hasOwnProperty(n)&&Co[n]?(""+e).trim():e+"px"}function Rg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Cg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var K_=Ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(n,e){if(e){if(K_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function ef(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=null;function rh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var nf=null,As=null,Cs=null;function hd(n){if(n=aa(n)){if(typeof nf!="function")throw Error(de(280));var e=n.stateNode;e&&(e=au(e),nf(n.stateNode,n.type,e))}}function bg(n){As?Cs?Cs.push(n):Cs=[n]:As=n}function Pg(){if(As){var n=As,e=Cs;if(Cs=As=null,hd(n),e)for(n=0;n<e.length;n++)hd(e[n])}}function Lg(n,e){return n(e)}function Dg(){}var Uu=!1;function Ng(n,e,t){if(Uu)return n(e,t);Uu=!0;try{return Lg(n,e,t)}finally{Uu=!1,(As!==null||Cs!==null)&&(Dg(),Pg())}}function Ho(n,e){var t=n.stateNode;if(t===null)return null;var i=au(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(de(231,e,typeof t));return t}var rf=!1;if(Ni)try{var io={};Object.defineProperty(io,"passive",{get:function(){rf=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{rf=!1}function q_(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(h){this.onError(h)}}var Ro=!1,Al=null,Cl=!1,sf=null,$_={onError:function(n){Ro=!0,Al=n}};function Z_(n,e,t,i,r,s,o,a,l){Ro=!1,Al=null,q_.apply($_,arguments)}function Q_(n,e,t,i,r,s,o,a,l){if(Z_.apply(this,arguments),Ro){if(Ro){var u=Al;Ro=!1,Al=null}else throw Error(de(198));Cl||(Cl=!0,sf=u)}}function Vr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ig(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function dd(n){if(Vr(n)!==n)throw Error(de(188))}function J_(n){var e=n.alternate;if(!e){if(e=Vr(n),e===null)throw Error(de(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return dd(r),n;if(s===i)return dd(r),e;s=s.sibling}throw Error(de(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(t.alternate!==i)throw Error(de(190))}if(t.tag!==3)throw Error(de(188));return t.stateNode.current===t?n:e}function Ug(n){return n=J_(n),n!==null?Fg(n):null}function Fg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Fg(n);if(e!==null)return e;n=n.sibling}return null}var Og=zn.unstable_scheduleCallback,pd=zn.unstable_cancelCallback,ey=zn.unstable_shouldYield,ty=zn.unstable_requestPaint,zt=zn.unstable_now,ny=zn.unstable_getCurrentPriorityLevel,sh=zn.unstable_ImmediatePriority,kg=zn.unstable_UserBlockingPriority,Rl=zn.unstable_NormalPriority,iy=zn.unstable_LowPriority,zg=zn.unstable_IdlePriority,iu=null,_i=null;function ry(n){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(iu,n,void 0,(n.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:ay,sy=Math.log,oy=Math.LN2;function ay(n){return n>>>=0,n===0?32:31-(sy(n)/oy|0)|0}var Ea=64,Ta=4194304;function To(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=t&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ui(e),r=1<<t,i|=n[t],e&=~r;return i}function ly(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ui(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=ly(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function of(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bg(){var n=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),n}function Fu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function sa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ui(e),n[e]=t}function cy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ui(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function oh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ui(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var pt=0;function Hg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Gg,ah,Vg,Wg,Xg,af=!1,wa=[],tr=null,nr=null,ir=null,Go=new Map,Vo=new Map,qi=[],fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(n,e){switch(n){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function ro(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=aa(e),e!==null&&ah(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function hy(n,e,t,i,r){switch(e){case"focusin":return tr=ro(tr,n,e,t,i,r),!0;case"dragenter":return nr=ro(nr,n,e,t,i,r),!0;case"mouseover":return ir=ro(ir,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,ro(Go.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Vo.set(s,ro(Vo.get(s)||null,n,e,t,i,r)),!0}return!1}function jg(n){var e=Rr(n.target);if(e!==null){var t=Vr(e);if(t!==null){if(e=t.tag,e===13){if(e=Ig(t),e!==null){n.blockedOn=e,Xg(n.priority,function(){Vg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=lf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);tf=i,t.target.dispatchEvent(i),tf=null}else return e=aa(t),e!==null&&ah(e),n.blockedOn=t,!1;e.shift()}return!0}function gd(n,e,t){pl(n)&&t.delete(e)}function dy(){af=!1,tr!==null&&pl(tr)&&(tr=null),nr!==null&&pl(nr)&&(nr=null),ir!==null&&pl(ir)&&(ir=null),Go.forEach(gd),Vo.forEach(gd)}function so(n,e){n.blockedOn===e&&(n.blockedOn=null,af||(af=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,dy)))}function Wo(n){function e(r){return so(r,n)}if(0<wa.length){so(wa[0],n);for(var t=1;t<wa.length;t++){var i=wa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(tr!==null&&so(tr,n),nr!==null&&so(nr,n),ir!==null&&so(ir,n),Go.forEach(e),Vo.forEach(e),t=0;t<qi.length;t++)i=qi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<qi.length&&(t=qi[0],t.blockedOn===null);)jg(t),t.blockedOn===null&&qi.shift()}var Rs=Bi.ReactCurrentBatchConfig,Pl=!0;function py(n,e,t,i){var r=pt,s=Rs.transition;Rs.transition=null;try{pt=1,lh(n,e,t,i)}finally{pt=r,Rs.transition=s}}function my(n,e,t,i){var r=pt,s=Rs.transition;Rs.transition=null;try{pt=4,lh(n,e,t,i)}finally{pt=r,Rs.transition=s}}function lh(n,e,t,i){if(Pl){var r=lf(n,e,t,i);if(r===null)ju(n,e,i,Ll,t),md(n,i);else if(hy(r,n,e,t,i))i.stopPropagation();else if(md(n,i),e&4&&-1<fy.indexOf(n)){for(;r!==null;){var s=aa(r);if(s!==null&&Gg(s),s=lf(n,e,t,i),s===null&&ju(n,e,i,Ll,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(n,e,i,null,t)}}var Ll=null;function lf(n,e,t,i){if(Ll=null,n=rh(i),n=Rr(n),n!==null)if(e=Vr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ig(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ll=n,null}function Yg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ny()){case sh:return 1;case kg:return 4;case Rl:case iy:return 16;case zg:return 536870912;default:return 16}default:return 16}}var Zi=null,uh=null,ml=null;function Kg(){if(ml)return ml;var n,e=uh,t=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ml=r.slice(n,1<i?1-i:void 0)}function gl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Aa(){return!0}function vd(){return!1}function Hn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Aa:vd,this.isPropagationStopped=vd,this}return Ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ch=Hn(Ys),oa=Ut({},Ys,{view:0,detail:0}),gy=Hn(oa),Ou,ku,oo,ru=Ut({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oo&&(oo&&n.type==="mousemove"?(Ou=n.screenX-oo.screenX,ku=n.screenY-oo.screenY):ku=Ou=0,oo=n),Ou)},movementY:function(n){return"movementY"in n?n.movementY:ku}}),_d=Hn(ru),vy=Ut({},ru,{dataTransfer:0}),_y=Hn(vy),yy=Ut({},oa,{relatedTarget:0}),zu=Hn(yy),xy=Ut({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Sy=Hn(xy),My=Ut({},Ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ey=Hn(My),Ty=Ut({},Ys,{data:0}),yd=Hn(Ty),wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ry(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Cy[n])?!!e[n]:!1}function fh(){return Ry}var by=Ut({},oa,{key:function(n){if(n.key){var e=wy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=gl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ay[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(n){return n.type==="keypress"?gl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Py=Hn(by),Ly=Ut({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=Hn(Ly),Dy=Ut({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),Ny=Hn(Dy),Iy=Ut({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=Hn(Iy),Fy=Ut({},ru,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=Hn(Fy),ky=[9,13,27,32],hh=Ni&&"CompositionEvent"in window,bo=null;Ni&&"documentMode"in document&&(bo=document.documentMode);var zy=Ni&&"TextEvent"in window&&!bo,qg=Ni&&(!hh||bo&&8<bo&&11>=bo),Sd=" ",Md=!1;function $g(n,e){switch(n){case"keyup":return ky.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function By(n,e){switch(n){case"compositionend":return Zg(e);case"keypress":return e.which!==32?null:(Md=!0,Sd);case"textInput":return n=e.data,n===Sd&&Md?null:n;default:return null}}function Hy(n,e){if(ds)return n==="compositionend"||!hh&&$g(n,e)?(n=Kg(),ml=uh=Zi=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qg&&e.locale!=="ko"?null:e.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Gy[n.type]:e==="textarea"}function Qg(n,e,t,i){bg(i),e=Dl(e,"onChange"),0<e.length&&(t=new ch("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Po=null,Xo=null;function Vy(n){uv(n,0)}function su(n){var e=gs(n);if(Mg(e))return n}function Wy(n,e){if(n==="change")return e}var Jg=!1;if(Ni){var Bu;if(Ni){var Hu="oninput"in document;if(!Hu){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),Hu=typeof Td.oninput=="function"}Bu=Hu}else Bu=!1;Jg=Bu&&(!document.documentMode||9<document.documentMode)}function wd(){Po&&(Po.detachEvent("onpropertychange",ev),Xo=Po=null)}function ev(n){if(n.propertyName==="value"&&su(Xo)){var e=[];Qg(e,Xo,n,rh(n)),Ng(Vy,e)}}function Xy(n,e,t){n==="focusin"?(wd(),Po=e,Xo=t,Po.attachEvent("onpropertychange",ev)):n==="focusout"&&wd()}function jy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return su(Xo)}function Yy(n,e){if(n==="click")return su(e)}function Ky(n,e){if(n==="input"||n==="change")return su(e)}function qy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var fi=typeof Object.is=="function"?Object.is:qy;function jo(n,e){if(fi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Vc.call(e,r)||!fi(n[r],e[r]))return!1}return!0}function Ad(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Cd(n,e){var t=Ad(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ad(t)}}function tv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?tv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var n=window,e=wl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wl(n.document)}return e}function dh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function $y(n){var e=nv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&tv(t.ownerDocument.documentElement,t)){if(i!==null&&dh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Cd(t,s);var o=Cd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zy=Ni&&"documentMode"in document&&11>=document.documentMode,ps=null,uf=null,Lo=null,cf=!1;function Rd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;cf||ps==null||ps!==wl(i)||(i=ps,"selectionStart"in i&&dh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Lo&&jo(Lo,i)||(Lo=i,i=Dl(uf,"onSelect"),0<i.length&&(e=new ch("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ps)))}function Ca(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ms={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Gu={},iv={};Ni&&(iv=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function ou(n){if(Gu[n])return Gu[n];if(!ms[n])return n;var e=ms[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in iv)return Gu[n]=e[t];return n}var rv=ou("animationend"),sv=ou("animationiteration"),ov=ou("animationstart"),av=ou("transitionend"),lv=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,e){lv.set(n,e),Gr(e,[n])}for(var Vu=0;Vu<bd.length;Vu++){var Wu=bd[Vu],Qy=Wu.toLowerCase(),Jy=Wu[0].toUpperCase()+Wu.slice(1);pr(Qy,"on"+Jy)}pr(rv,"onAnimationEnd");pr(sv,"onAnimationIteration");pr(ov,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(av,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Pd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Q_(i,e,void 0,n),n.currentTarget=null}function uv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Pd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Pd(r,a,u),s=l}}}if(Cl)throw n=sf,Cl=!1,sf=null,n}function wt(n,e){var t=e[mf];t===void 0&&(t=e[mf]=new Set);var i=n+"__bubble";t.has(i)||(cv(e,n,2,!1),t.add(i))}function Xu(n,e,t){var i=0;e&&(i|=4),cv(t,n,i,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Yo(n){if(!n[Ra]){n[Ra]=!0,vg.forEach(function(t){t!=="selectionchange"&&(ex.has(t)||Xu(t,!1,n),Xu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Xu("selectionchange",!1,e))}}function cv(n,e,t,i){switch(Yg(e)){case 1:var r=py;break;case 4:r=my;break;default:r=lh}t=r.bind(null,e,t,n),r=void 0,!rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ju(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ng(function(){var u=s,h=rh(t),f=[];e:{var d=lv.get(n);if(d!==void 0){var p=ch,g=n;switch(n){case"keypress":if(gl(t)===0)break e;case"keydown":case"keyup":p=Py;break;case"focusin":g="focus",p=zu;break;case"focusout":g="blur",p=zu;break;case"beforeblur":case"afterblur":p=zu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ny;break;case rv:case sv:case ov:p=Sy;break;case av:p=Uy;break;case"scroll":p=gy;break;case"wheel":p=Oy;break;case"copy":case"cut":case"paste":p=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xd}var y=(e&4)!==0,m=!y&&n==="scroll",c=y?d!==null?d+"Capture":null:d;y=[];for(var v=u,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,c!==null&&(S=Ho(v,c),S!=null&&y.push(Ko(v,S,_)))),m)break;v=v.return}0<y.length&&(d=new p(d,g,null,t,h),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==tf&&(g=t.relatedTarget||t.fromElement)&&(Rr(g)||g[Ii]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?Rr(g):null,g!==null&&(m=Vr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=_d,S="onMouseLeave",c="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(y=xd,S="onPointerLeave",c="onPointerEnter",v="pointer"),m=p==null?d:gs(p),_=g==null?d:gs(g),d=new y(S,v+"leave",p,t,h),d.target=m,d.relatedTarget=_,S=null,Rr(h)===u&&(y=new y(c,v+"enter",g,t,h),y.target=_,y.relatedTarget=m,S=y),m=S,p&&g)t:{for(y=p,c=g,v=0,_=y;_;_=Yr(_))v++;for(_=0,S=c;S;S=Yr(S))_++;for(;0<v-_;)y=Yr(y),v--;for(;0<_-v;)c=Yr(c),_--;for(;v--;){if(y===c||c!==null&&y===c.alternate)break t;y=Yr(y),c=Yr(c)}y=null}else y=null;p!==null&&Ld(f,d,p,y,!1),g!==null&&m!==null&&Ld(f,m,g,y,!0)}}e:{if(d=u?gs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=Wy;else if(Ed(d))if(Jg)T=Ky;else{T=jy;var A=Xy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=Yy);if(T&&(T=T(n,u))){Qg(f,T,t,h);break e}A&&A(n,d,u),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&$c(d,"number",d.value)}switch(A=u?gs(u):window,n){case"focusin":(Ed(A)||A.contentEditable==="true")&&(ps=A,uf=u,Lo=null);break;case"focusout":Lo=uf=ps=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Rd(f,t,h);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":Rd(f,t,h)}var w;if(hh)e:{switch(n){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ds?$g(n,t)&&(F="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(F="onCompositionStart");F&&(qg&&t.locale!=="ko"&&(ds||F!=="onCompositionStart"?F==="onCompositionEnd"&&ds&&(w=Kg()):(Zi=h,uh="value"in Zi?Zi.value:Zi.textContent,ds=!0)),A=Dl(u,F),0<A.length&&(F=new yd(F,n,null,t,h),f.push({event:F,listeners:A}),w?F.data=w:(w=Zg(t),w!==null&&(F.data=w)))),(w=zy?By(n,t):Hy(n,t))&&(u=Dl(u,"onBeforeInput"),0<u.length&&(h=new yd("onBeforeInput","beforeinput",null,t,h),f.push({event:h,listeners:u}),h.data=w))}uv(f,e)})}function Ko(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Dl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ho(n,t),s!=null&&i.unshift(Ko(n,s,r)),s=Ho(n,e),s!=null&&i.push(Ko(n,s,r))),n=n.return}return i}function Yr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ld(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ho(t,s),l!=null&&o.unshift(Ko(t,l,a))):r||(l=Ho(t,s),l!=null&&o.push(Ko(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function Dd(n){return(typeof n=="string"?n:""+n).replace(tx,`
`).replace(nx,"")}function ba(n,e,t){if(e=Dd(e),Dd(n)!==e&&t)throw Error(de(425))}function Nl(){}var ff=null,hf=null;function df(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(n){return Nd.resolve(null).then(n).catch(sx)}:pf;function sx(n){setTimeout(function(){throw n})}function Yu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Wo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Wo(e)}function rr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Id(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),gi="__reactFiber$"+Ks,qo="__reactProps$"+Ks,Ii="__reactContainer$"+Ks,mf="__reactEvents$"+Ks,ox="__reactListeners$"+Ks,ax="__reactHandles$"+Ks;function Rr(n){var e=n[gi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ii]||t[gi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Id(n);n!==null;){if(t=n[gi])return t;n=Id(n)}return e}n=t,t=n.parentNode}return null}function aa(n){return n=n[gi]||n[Ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(de(33))}function au(n){return n[qo]||null}var gf=[],vs=-1;function mr(n){return{current:n}}function Rt(n){0>vs||(n.current=gf[vs],gf[vs]=null,vs--)}function Et(n,e){vs++,gf[vs]=n.current,n.current=e}var dr={},pn=mr(dr),Cn=mr(!1),Fr=dr;function Us(n,e){var t=n.type.contextTypes;if(!t)return dr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Rn(n){return n=n.childContextTypes,n!=null}function Il(){Rt(Cn),Rt(pn)}function Ud(n,e,t){if(pn.current!==dr)throw Error(de(168));Et(pn,e),Et(Cn,t)}function fv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,X_(n)||"Unknown",r));return Ut({},t,i)}function Ul(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Fr=pn.current,Et(pn,n),Et(Cn,Cn.current),!0}function Fd(n,e,t){var i=n.stateNode;if(!i)throw Error(de(169));t?(n=fv(n,e,Fr),i.__reactInternalMemoizedMergedChildContext=n,Rt(Cn),Rt(pn),Et(pn,n)):Rt(Cn),Et(Cn,t)}var Ri=null,lu=!1,Ku=!1;function hv(n){Ri===null?Ri=[n]:Ri.push(n)}function lx(n){lu=!0,hv(n)}function gr(){if(!Ku&&Ri!==null){Ku=!0;var n=0,e=pt;try{var t=Ri;for(pt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ri=null,lu=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(n+1)),Og(sh,gr),r}finally{pt=e,Ku=!1}}return null}var _s=[],ys=0,Fl=null,Ol=0,Xn=[],jn=0,Or=null,bi=1,Pi="";function Mr(n,e){_s[ys++]=Ol,_s[ys++]=Fl,Fl=n,Ol=e}function dv(n,e,t){Xn[jn++]=bi,Xn[jn++]=Pi,Xn[jn++]=Or,Or=n;var i=bi;n=Pi;var r=32-ui(i)-1;i&=~(1<<r),t+=1;var s=32-ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,bi=1<<32-ui(e)+r|t<<r|i,Pi=s+n}else bi=1<<s|t<<r|i,Pi=n}function ph(n){n.return!==null&&(Mr(n,1),dv(n,1,0))}function mh(n){for(;n===Fl;)Fl=_s[--ys],_s[ys]=null,Ol=_s[--ys],_s[ys]=null;for(;n===Or;)Or=Xn[--jn],Xn[jn]=null,Pi=Xn[--jn],Xn[jn]=null,bi=Xn[--jn],Xn[jn]=null}var kn=null,On=null,Pt=!1,oi=null;function pv(n,e){var t=qn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Od(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,kn=n,On=rr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,kn=n,On=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Or!==null?{id:bi,overflow:Pi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=qn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,kn=n,On=null,!0):!1;default:return!1}}function vf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _f(n){if(Pt){var e=On;if(e){var t=e;if(!Od(n,e)){if(vf(n))throw Error(de(418));e=rr(t.nextSibling);var i=kn;e&&Od(n,e)?pv(i,t):(n.flags=n.flags&-4097|2,Pt=!1,kn=n)}}else{if(vf(n))throw Error(de(418));n.flags=n.flags&-4097|2,Pt=!1,kn=n}}}function kd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Pa(n){if(n!==kn)return!1;if(!Pt)return kd(n),Pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!df(n.type,n.memoizedProps)),e&&(e=On)){if(vf(n))throw mv(),Error(de(418));for(;e;)pv(n,e),e=rr(e.nextSibling)}if(kd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(de(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){On=rr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}On=null}}else On=kn?rr(n.stateNode.nextSibling):null;return!0}function mv(){for(var n=On;n;)n=rr(n.nextSibling)}function Fs(){On=kn=null,Pt=!1}function gh(n){oi===null?oi=[n]:oi.push(n)}var ux=Bi.ReactCurrentBatchConfig;function ao(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(de(309));var i=t.stateNode}if(!i)throw Error(de(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(de(284));if(!t._owner)throw Error(de(290,n))}return n}function La(n,e){throw n=Object.prototype.toString.call(e),Error(de(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function zd(n){var e=n._init;return e(n._payload)}function gv(n){function e(c,v){if(n){var _=c.deletions;_===null?(c.deletions=[v],c.flags|=16):_.push(v)}}function t(c,v){if(!n)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=lr(c,v),c.index=0,c.sibling=null,c}function s(c,v,_){return c.index=_,n?(_=c.alternate,_!==null?(_=_.index,_<v?(c.flags|=2,v):_):(c.flags|=2,v)):(c.flags|=1048576,v)}function o(c){return n&&c.alternate===null&&(c.flags|=2),c}function a(c,v,_,S){return v===null||v.tag!==6?(v=tc(_,c.mode,S),v.return=c,v):(v=r(v,_),v.return=c,v)}function l(c,v,_,S){var T=_.type;return T===hs?h(c,v,_.props.children,S,_.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yi&&zd(T)===v.type)?(S=r(v,_.props),S.ref=ao(c,v,_),S.return=c,S):(S=El(_.type,_.key,_.props,null,c.mode,S),S.ref=ao(c,v,_),S.return=c,S)}function u(c,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=nc(_,c.mode,S),v.return=c,v):(v=r(v,_.children||[]),v.return=c,v)}function h(c,v,_,S,T){return v===null||v.tag!==7?(v=Dr(_,c.mode,S,T),v.return=c,v):(v=r(v,_),v.return=c,v)}function f(c,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=tc(""+v,c.mode,_),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:return _=El(v.type,v.key,v.props,null,c.mode,_),_.ref=ao(c,null,v),_.return=c,_;case fs:return v=nc(v,c.mode,_),v.return=c,v;case Yi:var S=v._init;return f(c,S(v._payload),_)}if(Eo(v)||no(v))return v=Dr(v,c.mode,_,null),v.return=c,v;La(c,v)}return null}function d(c,v,_,S){var T=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:a(c,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case xa:return _.key===T?l(c,v,_,S):null;case fs:return _.key===T?u(c,v,_,S):null;case Yi:return T=_._init,d(c,v,T(_._payload),S)}if(Eo(_)||no(_))return T!==null?null:h(c,v,_,S,null);La(c,_)}return null}function p(c,v,_,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(_)||null,a(v,c,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xa:return c=c.get(S.key===null?_:S.key)||null,l(v,c,S,T);case fs:return c=c.get(S.key===null?_:S.key)||null,u(v,c,S,T);case Yi:var A=S._init;return p(c,v,_,A(S._payload),T)}if(Eo(S)||no(S))return c=c.get(_)||null,h(v,c,S,T,null);La(v,S)}return null}function g(c,v,_,S){for(var T=null,A=null,w=v,F=v=0,M=null;w!==null&&F<_.length;F++){w.index>F?(M=w,w=null):M=w.sibling;var C=d(c,w,_[F],S);if(C===null){w===null&&(w=M);break}n&&w&&C.alternate===null&&e(c,w),v=s(C,v,F),A===null?T=C:A.sibling=C,A=C,w=M}if(F===_.length)return t(c,w),Pt&&Mr(c,F),T;if(w===null){for(;F<_.length;F++)w=f(c,_[F],S),w!==null&&(v=s(w,v,F),A===null?T=w:A.sibling=w,A=w);return Pt&&Mr(c,F),T}for(w=i(c,w);F<_.length;F++)M=p(w,c,F,_[F],S),M!==null&&(n&&M.alternate!==null&&w.delete(M.key===null?F:M.key),v=s(M,v,F),A===null?T=M:A.sibling=M,A=M);return n&&w.forEach(function(H){return e(c,H)}),Pt&&Mr(c,F),T}function y(c,v,_,S){var T=no(_);if(typeof T!="function")throw Error(de(150));if(_=T.call(_),_==null)throw Error(de(151));for(var A=T=null,w=v,F=v=0,M=null,C=_.next();w!==null&&!C.done;F++,C=_.next()){w.index>F?(M=w,w=null):M=w.sibling;var H=d(c,w,C.value,S);if(H===null){w===null&&(w=M);break}n&&w&&H.alternate===null&&e(c,w),v=s(H,v,F),A===null?T=H:A.sibling=H,A=H,w=M}if(C.done)return t(c,w),Pt&&Mr(c,F),T;if(w===null){for(;!C.done;F++,C=_.next())C=f(c,C.value,S),C!==null&&(v=s(C,v,F),A===null?T=C:A.sibling=C,A=C);return Pt&&Mr(c,F),T}for(w=i(c,w);!C.done;F++,C=_.next())C=p(w,c,F,C.value,S),C!==null&&(n&&C.alternate!==null&&w.delete(C.key===null?F:C.key),v=s(C,v,F),A===null?T=C:A.sibling=C,A=C);return n&&w.forEach(function(q){return e(c,q)}),Pt&&Mr(c,F),T}function m(c,v,_,S){if(typeof _=="object"&&_!==null&&_.type===hs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case xa:e:{for(var T=_.key,A=v;A!==null;){if(A.key===T){if(T=_.type,T===hs){if(A.tag===7){t(c,A.sibling),v=r(A,_.props.children),v.return=c,c=v;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yi&&zd(T)===A.type){t(c,A.sibling),v=r(A,_.props),v.ref=ao(c,A,_),v.return=c,c=v;break e}t(c,A);break}else e(c,A);A=A.sibling}_.type===hs?(v=Dr(_.props.children,c.mode,S,_.key),v.return=c,c=v):(S=El(_.type,_.key,_.props,null,c.mode,S),S.ref=ao(c,v,_),S.return=c,c=S)}return o(c);case fs:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(c,v.sibling),v=r(v,_.children||[]),v.return=c,c=v;break e}else{t(c,v);break}else e(c,v);v=v.sibling}v=nc(_,c.mode,S),v.return=c,c=v}return o(c);case Yi:return A=_._init,m(c,v,A(_._payload),S)}if(Eo(_))return g(c,v,_,S);if(no(_))return y(c,v,_,S);La(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(c,v.sibling),v=r(v,_),v.return=c,c=v):(t(c,v),v=tc(_,c.mode,S),v.return=c,c=v),o(c)):t(c,v)}return m}var Os=gv(!0),vv=gv(!1),kl=mr(null),zl=null,xs=null,vh=null;function _h(){vh=xs=zl=null}function yh(n){var e=kl.current;Rt(kl),n._currentValue=e}function yf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function bs(n,e){zl=n,vh=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(wn=!0),n.firstContext=null)}function Zn(n){var e=n._currentValue;if(vh!==n)if(n={context:n,memoizedValue:e,next:null},xs===null){if(zl===null)throw Error(de(308));xs=n,zl.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return e}var br=null;function xh(n){br===null?br=[n]:br.push(n)}function _v(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,xh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ui(n,i)}function Ui(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ki=!1;function Sh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Di(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(n,t)}return r=i.interleaved,r===null?(e.next=e,xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(n,t)}function vl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,oh(n,t)}}function Bd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Bl(n,e,t,i){var r=n.updateQueue;Ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,y=a;switch(d=e,p=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=Ut({},f,d);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,n.lanes=o,n.memoizedState=f}}function Hd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var la={},yi=mr(la),$o=mr(la),Zo=mr(la);function Pr(n){if(n===la)throw Error(de(174));return n}function Mh(n,e){switch(Et(Zo,e),Et($o,n),Et(yi,la),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Qc(e,n)}Rt(yi),Et(yi,e)}function ks(){Rt(yi),Rt($o),Rt(Zo)}function xv(n){Pr(Zo.current);var e=Pr(yi.current),t=Qc(e,n.type);e!==t&&(Et($o,n),Et(yi,t))}function Eh(n){$o.current===n&&(Rt(yi),Rt($o))}var Nt=mr(0);function Hl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function Th(){for(var n=0;n<qu.length;n++)qu[n]._workInProgressVersionPrimary=null;qu.length=0}var _l=Bi.ReactCurrentDispatcher,$u=Bi.ReactCurrentBatchConfig,kr=0,It=null,jt=null,Zt=null,Gl=!1,Do=!1,Qo=0,cx=0;function un(){throw Error(de(321))}function wh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!fi(n[t],e[t]))return!1;return!0}function Ah(n,e,t,i,r,s){if(kr=s,It=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=n===null||n.memoizedState===null?px:mx,n=t(i,r),Do){s=0;do{if(Do=!1,Qo=0,25<=s)throw Error(de(301));s+=1,Zt=jt=null,e.updateQueue=null,_l.current=gx,n=t(i,r)}while(Do)}if(_l.current=Vl,e=jt!==null&&jt.next!==null,kr=0,Zt=jt=It=null,Gl=!1,e)throw Error(de(300));return n}function Ch(){var n=Qo!==0;return Qo=0,n}function pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?It.memoizedState=Zt=n:Zt=Zt.next=n,Zt}function Qn(){if(jt===null){var n=It.alternate;n=n!==null?n.memoizedState:null}else n=jt.next;var e=Zt===null?It.memoizedState:Zt.next;if(e!==null)Zt=e,jt=n;else{if(n===null)throw Error(de(310));jt=n,n={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Zt===null?It.memoizedState=Zt=n:Zt=Zt.next=n}return Zt}function Jo(n,e){return typeof e=="function"?e(n):e}function Zu(n){var e=Qn(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((kr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,It.lanes|=h,zr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,It.lanes|=s,zr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Qu(n){var e=Qn(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Sv(){}function Mv(n,e){var t=It,i=Qn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,wn=!0),i=i.queue,Rh(wv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(t.flags|=2048,ea(9,Tv.bind(null,t,i,r,e),void 0,null),Jt===null)throw Error(de(349));kr&30||Ev(t,e,r)}return r}function Ev(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Tv(n,e,t,i){e.value=t,e.getSnapshot=i,Av(e)&&Cv(n)}function wv(n,e,t){return t(function(){Av(e)&&Cv(n)})}function Av(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!fi(n,t)}catch{return!0}}function Cv(n){var e=Ui(n,1);e!==null&&ci(e,n,1,-1)}function Gd(n){var e=pi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:n},e.queue=n,n=n.dispatch=dx.bind(null,It,n),[e.memoizedState,n]}function ea(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Rv(){return Qn().memoizedState}function yl(n,e,t,i){var r=pi();It.flags|=n,r.memoizedState=ea(1|e,t,void 0,i===void 0?null:i)}function uu(n,e,t,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(jt!==null){var o=jt.memoizedState;if(s=o.destroy,i!==null&&wh(i,o.deps)){r.memoizedState=ea(e,t,s,i);return}}It.flags|=n,r.memoizedState=ea(1|e,t,s,i)}function Vd(n,e){return yl(8390656,8,n,e)}function Rh(n,e){return uu(2048,8,n,e)}function bv(n,e){return uu(4,2,n,e)}function Pv(n,e){return uu(4,4,n,e)}function Lv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Dv(n,e,t){return t=t!=null?t.concat([n]):null,uu(4,4,Lv.bind(null,e,n),t)}function bh(){}function Nv(n,e){var t=Qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&wh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Iv(n,e){var t=Qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&wh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Uv(n,e,t){return kr&21?(fi(t,e)||(t=Bg(),It.lanes|=t,zr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,wn=!0),n.memoizedState=t)}function fx(n,e){var t=pt;pt=t!==0&&4>t?t:4,n(!0);var i=$u.transition;$u.transition={};try{n(!1),e()}finally{pt=t,$u.transition=i}}function Fv(){return Qn().memoizedState}function hx(n,e,t){var i=ar(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Ov(n))kv(e,t);else if(t=_v(n,e,t,i),t!==null){var r=vn();ci(t,n,i,r),zv(t,e,i)}}function dx(n,e,t){var i=ar(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ov(n))kv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=_v(n,e,r,i),t!==null&&(r=vn(),ci(t,n,i,r),zv(t,e,i))}}function Ov(n){var e=n.alternate;return n===It||e!==null&&e===It}function kv(n,e){Do=Gl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function zv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,oh(n,t)}}var Vl={readContext:Zn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},px={readContext:Zn,useCallback:function(n,e){return pi().memoizedState=[n,e===void 0?null:e],n},useContext:Zn,useEffect:Vd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,yl(4194308,4,Lv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return yl(4194308,4,n,e)},useInsertionEffect:function(n,e){return yl(4,2,n,e)},useMemo:function(n,e){var t=pi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=pi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=hx.bind(null,It,n),[i.memoizedState,n]},useRef:function(n){var e=pi();return n={current:n},e.memoizedState=n},useState:Gd,useDebugValue:bh,useDeferredValue:function(n){return pi().memoizedState=n},useTransition:function(){var n=Gd(!1),e=n[0];return n=fx.bind(null,n[1]),pi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=It,r=pi();if(Pt){if(t===void 0)throw Error(de(407));t=t()}else{if(t=e(),Jt===null)throw Error(de(349));kr&30||Ev(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Vd(wv.bind(null,i,s,n),[n]),i.flags|=2048,ea(9,Tv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=pi(),e=Jt.identifierPrefix;if(Pt){var t=Pi,i=bi;t=(i&~(1<<32-ui(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Qo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=cx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},mx={readContext:Zn,useCallback:Nv,useContext:Zn,useEffect:Rh,useImperativeHandle:Dv,useInsertionEffect:bv,useLayoutEffect:Pv,useMemo:Iv,useReducer:Zu,useRef:Rv,useState:function(){return Zu(Jo)},useDebugValue:bh,useDeferredValue:function(n){var e=Qn();return Uv(e,jt.memoizedState,n)},useTransition:function(){var n=Zu(Jo)[0],e=Qn().memoizedState;return[n,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Fv,unstable_isNewReconciler:!1},gx={readContext:Zn,useCallback:Nv,useContext:Zn,useEffect:Rh,useImperativeHandle:Dv,useInsertionEffect:bv,useLayoutEffect:Pv,useMemo:Iv,useReducer:Qu,useRef:Rv,useState:function(){return Qu(Jo)},useDebugValue:bh,useDeferredValue:function(n){var e=Qn();return jt===null?e.memoizedState=n:Uv(e,jt.memoizedState,n)},useTransition:function(){var n=Qu(Jo)[0],e=Qn().memoizedState;return[n,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Fv,unstable_isNewReconciler:!1};function ri(n,e){if(n&&n.defaultProps){e=Ut({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function xf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ut({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var cu={isMounted:function(n){return(n=n._reactInternals)?Vr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=vn(),r=ar(n),s=Di(i,r);s.payload=e,t!=null&&(s.callback=t),e=sr(n,s,r),e!==null&&(ci(e,n,r,i),vl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=vn(),r=ar(n),s=Di(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=sr(n,s,r),e!==null&&(ci(e,n,r,i),vl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=vn(),i=ar(n),r=Di(t,i);r.tag=2,e!=null&&(r.callback=e),e=sr(n,r,i),e!==null&&(ci(e,n,i,t),vl(e,n,i))}};function Wd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(t,i)||!jo(r,s):!0}function Bv(n,e,t){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=Rn(e)?Fr:pn.current,i=e.contextTypes,s=(i=i!=null)?Us(n,r):dr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Xd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&cu.enqueueReplaceState(e,e.state,null)}function Sf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Sh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=Rn(e)?Fr:pn.current,r.context=Us(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cu.enqueueReplaceState(r,r.state,null),Bl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,e){try{var t="",i=e;do t+=W_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Ju(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Mf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function Hv(n,e,t){t=Di(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Xl||(Xl=!0,Df=i),Mf(n,e)},t}function Gv(n,e,t){t=Di(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Mf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Mf(n,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function jd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new vx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Lx.bind(null,n,e,t),e.then(n,n))}function Yd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Kd(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Di(-1,1),e.tag=2,sr(t,e,1))),t.lanes|=1),n)}var _x=Bi.ReactCurrentOwner,wn=!1;function gn(n,e,t,i){e.child=n===null?vv(e,null,t,i):Os(e,n.child,t,i)}function qd(n,e,t,i,r){t=t.render;var s=e.ref;return bs(e,r),i=Ah(n,e,t,i,s,r),t=Ch(),n!==null&&!wn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Fi(n,e,r)):(Pt&&t&&ph(e),e.flags|=1,gn(n,e,i,r),e.child)}function $d(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Oh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Vv(n,e,s,i,r)):(n=El(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:jo,t(o,i)&&n.ref===e.ref)return Fi(n,e,r)}return e.flags|=1,n=lr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Vv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(jo(s,i)&&n.ref===e.ref)if(wn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(wn=!0);else return e.lanes=n.lanes,Fi(n,e,r)}return Ef(n,e,t,i,r)}function Wv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(Ms,In),In|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Et(Ms,In),In|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Et(Ms,In),In|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Et(Ms,In),In|=i;return gn(n,e,r,t),e.child}function Xv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ef(n,e,t,i,r){var s=Rn(t)?Fr:pn.current;return s=Us(e,s),bs(e,r),t=Ah(n,e,t,i,s,r),i=Ch(),n!==null&&!wn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Fi(n,e,r)):(Pt&&i&&ph(e),e.flags|=1,gn(n,e,t,r),e.child)}function Zd(n,e,t,i,r){if(Rn(t)){var s=!0;Ul(e)}else s=!1;if(bs(e,r),e.stateNode===null)xl(n,e),Bv(e,t,i),Sf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zn(u):(u=Rn(t)?Fr:pn.current,u=Us(e,u));var h=t.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Xd(e,o,i,u),Ki=!1;var d=e.memoizedState;o.state=d,Bl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Cn.current||Ki?(typeof h=="function"&&(xf(e,t,h,i),l=e.memoizedState),(a=Ki||Wd(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,yv(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ri(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=Rn(t)?Fr:pn.current,l=Us(e,l));var p=t.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Xd(e,o,i,l),Ki=!1,d=e.memoizedState,o.state=d,Bl(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||Cn.current||Ki?(typeof p=="function"&&(xf(e,t,p,i),g=e.memoizedState),(u=Ki||Wd(e,t,u,i,d,g,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Tf(n,e,t,i,s,r)}function Tf(n,e,t,i,r,s){Xv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Fd(e,t,!1),Fi(n,e,s);i=e.stateNode,_x.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Os(e,n.child,null,s),e.child=Os(e,null,a,s)):gn(n,e,a,s),e.memoizedState=i.state,r&&Fd(e,t,!0),e.child}function jv(n){var e=n.stateNode;e.pendingContext?Ud(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ud(n,e.context,!1),Mh(n,e.containerInfo)}function Qd(n,e,t,i,r){return Fs(),gh(r),e.flags|=256,gn(n,e,t,i),e.child}var wf={dehydrated:null,treeContext:null,retryLane:0};function Af(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yv(n,e,t){var i=e.pendingProps,r=Nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Et(Nt,r&1),n===null)return _f(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=du(o,i,0,null),n=Dr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Af(t),e.memoizedState=wf,n):Ph(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return yx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=Dr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Af(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=wf,i}return s=n.child,n=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ph(n,e){return e=du({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Da(n,e,t,i){return i!==null&&gh(i),Os(e,n.child,null,t),n=Ph(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function yx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Ju(Error(de(422))),Da(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=du({mode:"visible",children:i.children},r,0,null),s=Dr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Os(e,n.child,null,o),e.child.memoizedState=Af(o),e.memoizedState=wf,s);if(!(e.mode&1))return Da(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=Ju(s,i,void 0),Da(n,e,o,i)}if(a=(o&n.childLanes)!==0,wn||a){if(i=Jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(n,r),ci(i,n,r,-1))}return Fh(),i=Ju(Error(de(421))),Da(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Dx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,On=rr(r.nextSibling),kn=e,Pt=!0,oi=null,n!==null&&(Xn[jn++]=bi,Xn[jn++]=Pi,Xn[jn++]=Or,bi=n.id,Pi=n.overflow,Or=e),e=Ph(e,i.children),e.flags|=4096,e)}function Jd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),yf(n.return,e,t)}function ec(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Kv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(n,e,i.children,t),i=Nt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jd(n,t,e);else if(n.tag===19)Jd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Et(Nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Hl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ec(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Hl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ec(e,!0,t,null,s);break;case"together":ec(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Fi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),zr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(de(153));if(e.child!==null){for(n=e.child,t=lr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=lr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function xx(n,e,t){switch(e.tag){case 3:jv(e),Fs();break;case 5:xv(e);break;case 1:Rn(e.type)&&Ul(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Et(kl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Et(Nt,Nt.current&1),e.flags|=128,null):t&e.child.childLanes?Yv(n,e,t):(Et(Nt,Nt.current&1),n=Fi(n,e,t),n!==null?n.sibling:null);Et(Nt,Nt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Kv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Et(Nt,Nt.current),i)break;return null;case 22:case 23:return e.lanes=0,Wv(n,e,t)}return Fi(n,e,t)}var qv,Cf,$v,Zv;qv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Cf=function(){};$v=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Pr(yi.current);var s=null;switch(t){case"input":r=Kc(n,r),i=Kc(n,i),s=[];break;case"select":r=Ut({},r,{value:void 0}),i=Ut({},i,{value:void 0}),s=[];break;case"textarea":r=Zc(n,r),i=Zc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Nl)}Jc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&wt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Zv=function(n,e,t,i){t!==i&&(e.flags|=4)};function lo(n,e){if(!Pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function cn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Sx(n,e,t){var i=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Rn(e.type)&&Il(),cn(e),null;case 3:return i=e.stateNode,ks(),Rt(Cn),Rt(pn),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Pa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(Uf(oi),oi=null))),Cf(n,e),cn(e),null;case 5:Eh(e);var r=Pr(Zo.current);if(t=e.type,n!==null&&e.stateNode!=null)$v(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return cn(e),null}if(n=Pr(yi.current),Pa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[qo]=s,n=(e.mode&1)!==0,t){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)wt(wo[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":ld(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":cd(i,s),wt("invalid",i)}Jc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,n),r=["children",""+a]):zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(t){case"input":Sa(i),ud(i,s,!0);break;case"textarea":Sa(i),fd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=wg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[gi]=e,n[qo]=i,qv(n,e,!1,!1),e.stateNode=n;e:{switch(o=ef(t,i),t){case"dialog":wt("cancel",n),wt("close",n),r=i;break;case"iframe":case"object":case"embed":wt("load",n),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)wt(wo[r],n);r=i;break;case"source":wt("error",n),r=i;break;case"img":case"image":case"link":wt("error",n),wt("load",n),r=i;break;case"details":wt("toggle",n),r=i;break;case"input":ld(n,i),r=Kc(n,i),wt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ut({},i,{value:void 0}),wt("invalid",n);break;case"textarea":cd(n,i),r=Zc(n,i),wt("invalid",n);break;default:r=i}Jc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ag(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Bo(n,l):typeof l=="number"&&Bo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",n):l!=null&&eh(n,s,l,o))}switch(t){case"input":Sa(n),ud(n,i,!1);break;case"textarea":Sa(n),fd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+hr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ws(n,!!i.multiple,s,!1):i.defaultValue!=null&&ws(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Nl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(n&&e.stateNode!=null)Zv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(t=Pr(Zo.current),Pr(yi.current),Pa(e)){if(i=e.stateNode,t=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==t)&&(n=kn,n!==null))switch(n.tag){case 3:ba(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ba(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return cn(e),null;case 13:if(Rt(Nt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Pt&&On!==null&&e.mode&1&&!(e.flags&128))mv(),Fs(),e.flags|=98560,s=!1;else if(s=Pa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[gi]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else oi!==null&&(Uf(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Nt.current&1?Yt===0&&(Yt=3):Fh())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return ks(),Cf(n,e),n===null&&Yo(e.stateNode.containerInfo),cn(e),null;case 10:return yh(e.type._context),cn(e),null;case 17:return Rn(e.type)&&Il(),cn(e),null;case 19:if(Rt(Nt),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)lo(s,!1);else{if(Yt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Hl(n),o!==null){for(e.flags|=128,lo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Et(Nt,Nt.current&1|2),e.child}n=n.sibling}s.tail!==null&&zt()>Bs&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Hl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pt)return cn(e),null}else 2*zt()-s.renderingStartTime>Bs&&t!==1073741824&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,t=Nt.current,Et(Nt,i?t&1|2:t&1),e):(cn(e),null);case 22:case 23:return Uh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function Mx(n,e){switch(mh(e),e.tag){case 1:return Rn(e.type)&&Il(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ks(),Rt(Cn),Rt(pn),Th(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(Rt(Nt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Fs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Rt(Nt),null;case 4:return ks(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var Na=!1,dn=!1,Ex=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Ss(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ot(n,e,i)}else t.current=null}function Rf(n,e,t){try{t()}catch(i){Ot(n,e,i)}}var ep=!1;function Tx(n,e){if(ff=Pl,n=nv(),dh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(hf={focusedElem:n,selectionRange:t},Pl=!1,Ae=e;Ae!==null;)if(e=Ae,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ae=n;else for(;Ae!==null;){e=Ae;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:ri(e.type,y),m);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){Ot(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}return g=ep,ep=!1,g}function No(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rf(e,t,s)}r=r.next}while(r!==i)}}function fu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function bf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Qv(n){var e=n.alternate;e!==null&&(n.alternate=null,Qv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[gi],delete e[qo],delete e[mf],delete e[ox],delete e[ax])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jv(n){return n.tag===5||n.tag===3||n.tag===4}function tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Nl));else if(i!==4&&(n=n.child,n!==null))for(Pf(n,e,t),n=n.sibling;n!==null;)Pf(n,e,t),n=n.sibling}function Lf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Lf(n,e,t),n=n.sibling;n!==null;)Lf(n,e,t),n=n.sibling}var sn=null,si=!1;function Hi(n,e,t){for(t=t.child;t!==null;)e0(n,e,t),t=t.sibling}function e0(n,e,t){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(iu,t)}catch{}switch(t.tag){case 5:dn||Ss(t,e);case 6:var i=sn,r=si;sn=null,Hi(n,e,t),sn=i,si=r,sn!==null&&(si?(n=sn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):sn.removeChild(t.stateNode));break;case 18:sn!==null&&(si?(n=sn,t=t.stateNode,n.nodeType===8?Yu(n.parentNode,t):n.nodeType===1&&Yu(n,t),Wo(n)):Yu(sn,t.stateNode));break;case 4:i=sn,r=si,sn=t.stateNode.containerInfo,si=!0,Hi(n,e,t),sn=i,si=r;break;case 0:case 11:case 14:case 15:if(!dn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rf(t,e,o),r=r.next}while(r!==i)}Hi(n,e,t);break;case 1:if(!dn&&(Ss(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ot(t,e,a)}Hi(n,e,t);break;case 21:Hi(n,e,t);break;case 22:t.mode&1?(dn=(i=dn)||t.memoizedState!==null,Hi(n,e,t),dn=i):Hi(n,e,t);break;default:Hi(n,e,t)}}function np(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Ex),e.forEach(function(i){var r=Nx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ei(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:sn=a.stateNode,si=!1;break e;case 3:sn=a.stateNode.containerInfo,si=!0;break e;case 4:sn=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(sn===null)throw Error(de(160));e0(s,o,r),sn=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ot(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t0(e,n),e=e.sibling}function t0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ei(e,n),hi(n),i&4){try{No(3,n,n.return),fu(3,n)}catch(y){Ot(n,n.return,y)}try{No(5,n,n.return)}catch(y){Ot(n,n.return,y)}}break;case 1:ei(e,n),hi(n),i&512&&t!==null&&Ss(t,t.return);break;case 5:if(ei(e,n),hi(n),i&512&&t!==null&&Ss(t,t.return),n.flags&32){var r=n.stateNode;try{Bo(r,"")}catch(y){Ot(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Eg(r,s),ef(a,o);var u=ef(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?Rg(r,f):h==="dangerouslySetInnerHTML"?Ag(r,f):h==="children"?Bo(r,f):eh(r,h,f,u)}switch(a){case"input":qc(r,s);break;case"textarea":Tg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ws(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ws(r,!!s.multiple,s.defaultValue,!0):ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[qo]=s}catch(y){Ot(n,n.return,y)}}break;case 6:if(ei(e,n),hi(n),i&4){if(n.stateNode===null)throw Error(de(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){Ot(n,n.return,y)}}break;case 3:if(ei(e,n),hi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(y){Ot(n,n.return,y)}break;case 4:ei(e,n),hi(n);break;case 13:ei(e,n),hi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nh=zt())),i&4&&np(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(dn=(u=dn)||h,ei(e,n),dn=u):ei(e,n),hi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!h&&n.mode&1)for(Ae=n,h=n.child;h!==null;){for(f=Ae=h;Ae!==null;){switch(d=Ae,p=d.child,d.tag){case 0:case 11:case 14:case 15:No(4,d,d.return);break;case 1:Ss(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Ot(i,t,y)}}break;case 5:Ss(d,d.return);break;case 22:if(d.memoizedState!==null){rp(f);continue}}p!==null?(p.return=d,Ae=p):rp(f)}h=h.sibling}e:for(h=null,f=n;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cg("display",o))}catch(y){Ot(n,n.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Ot(n,n.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ei(e,n),hi(n),i&4&&np(n);break;case 21:break;default:ei(e,n),hi(n)}}function hi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Jv(t)){var i=t;break e}t=t.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Bo(r,""),i.flags&=-33);var s=tp(n);Lf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=tp(n);Pf(n,a,o);break;default:throw Error(de(161))}}catch(l){Ot(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function wx(n,e,t){Ae=n,n0(n)}function n0(n,e,t){for(var i=(n.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||dn;a=Na;var u=dn;if(Na=o,(dn=l)&&!u)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?sp(r):l!==null?(l.return=o,Ae=l):sp(r);for(;s!==null;)Ae=s,n0(s),s=s.sibling;Ae=r,Na=a,dn=u}ip(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):ip(n)}}function ip(n){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!dn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ri(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Hd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Wo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}dn||e.flags&512&&bf(e)}catch(d){Ot(e,e.return,d)}}if(e===n){Ae=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function rp(n){for(;Ae!==null;){var e=Ae;if(e===n){Ae=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function sp(n){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{fu(4,e)}catch(l){Ot(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ot(e,r,l)}}var s=e.return;try{bf(e)}catch(l){Ot(e,s,l)}break;case 5:var o=e.return;try{bf(e)}catch(l){Ot(e,o,l)}}}catch(l){Ot(e,e.return,l)}if(e===n){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var Ax=Math.ceil,Wl=Bi.ReactCurrentDispatcher,Lh=Bi.ReactCurrentOwner,$n=Bi.ReactCurrentBatchConfig,ut=0,Jt=null,Wt=null,an=0,In=0,Ms=mr(0),Yt=0,ta=null,zr=0,hu=0,Dh=0,Io=null,Mn=null,Nh=0,Bs=1/0,Ci=null,Xl=!1,Df=null,or=null,Ia=!1,Qi=null,jl=0,Uo=0,Nf=null,Sl=-1,Ml=0;function vn(){return ut&6?zt():Sl!==-1?Sl:Sl=zt()}function ar(n){return n.mode&1?ut&2&&an!==0?an&-an:ux.transition!==null?(Ml===0&&(Ml=Bg()),Ml):(n=pt,n!==0||(n=window.event,n=n===void 0?16:Yg(n.type)),n):1}function ci(n,e,t,i){if(50<Uo)throw Uo=0,Nf=null,Error(de(185));sa(n,t,i),(!(ut&2)||n!==Jt)&&(n===Jt&&(!(ut&2)&&(hu|=t),Yt===4&&$i(n,an)),bn(n,i),t===1&&ut===0&&!(e.mode&1)&&(Bs=zt()+500,lu&&gr()))}function bn(n,e){var t=n.callbackNode;uy(n,e);var i=bl(n,n===Jt?an:0);if(i===0)t!==null&&pd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&pd(t),e===1)n.tag===0?lx(op.bind(null,n)):hv(op.bind(null,n)),rx(function(){!(ut&6)&&gr()}),t=null;else{switch(Hg(i)){case 1:t=sh;break;case 4:t=kg;break;case 16:t=Rl;break;case 536870912:t=zg;break;default:t=Rl}t=c0(t,i0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function i0(n,e){if(Sl=-1,Ml=0,ut&6)throw Error(de(327));var t=n.callbackNode;if(Ps()&&n.callbackNode!==t)return null;var i=bl(n,n===Jt?an:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Yl(n,i);else{e=i;var r=ut;ut|=2;var s=s0();(Jt!==n||an!==e)&&(Ci=null,Bs=zt()+500,Lr(n,e));do try{bx();break}catch(a){r0(n,a)}while(!0);_h(),Wl.current=s,ut=r,Wt!==null?e=0:(Jt=null,an=0,e=Yt)}if(e!==0){if(e===2&&(r=of(n),r!==0&&(i=r,e=If(n,r))),e===1)throw t=ta,Lr(n,0),$i(n,i),bn(n,zt()),t;if(e===6)$i(n,i);else{if(r=n.current.alternate,!(i&30)&&!Cx(r)&&(e=Yl(n,i),e===2&&(s=of(n),s!==0&&(i=s,e=If(n,s))),e===1))throw t=ta,Lr(n,0),$i(n,i),bn(n,zt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Er(n,Mn,Ci);break;case 3:if($i(n,i),(i&130023424)===i&&(e=Nh+500-zt(),10<e)){if(bl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=pf(Er.bind(null,n,Mn,Ci),e);break}Er(n,Mn,Ci);break;case 4:if($i(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ax(i/1960))-i,10<i){n.timeoutHandle=pf(Er.bind(null,n,Mn,Ci),i);break}Er(n,Mn,Ci);break;case 5:Er(n,Mn,Ci);break;default:throw Error(de(329))}}}return bn(n,zt()),n.callbackNode===t?i0.bind(null,n):null}function If(n,e){var t=Io;return n.current.memoizedState.isDehydrated&&(Lr(n,e).flags|=256),n=Yl(n,e),n!==2&&(e=Mn,Mn=t,e!==null&&Uf(e)),n}function Uf(n){Mn===null?Mn=n:Mn.push.apply(Mn,n)}function Cx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(n,e){for(e&=~Dh,e&=~hu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ui(e),i=1<<t;n[t]=-1,e&=~i}}function op(n){if(ut&6)throw Error(de(327));Ps();var e=bl(n,0);if(!(e&1))return bn(n,zt()),null;var t=Yl(n,e);if(n.tag!==0&&t===2){var i=of(n);i!==0&&(e=i,t=If(n,i))}if(t===1)throw t=ta,Lr(n,0),$i(n,e),bn(n,zt()),t;if(t===6)throw Error(de(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Er(n,Mn,Ci),bn(n,zt()),null}function Ih(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(Bs=zt()+500,lu&&gr())}}function Br(n){Qi!==null&&Qi.tag===0&&!(ut&6)&&Ps();var e=ut;ut|=1;var t=$n.transition,i=pt;try{if($n.transition=null,pt=1,n)return n()}finally{pt=i,$n.transition=t,ut=e,!(ut&6)&&gr()}}function Uh(){In=Ms.current,Rt(Ms)}function Lr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ix(t)),Wt!==null)for(t=Wt.return;t!==null;){var i=t;switch(mh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Il();break;case 3:ks(),Rt(Cn),Rt(pn),Th();break;case 5:Eh(i);break;case 4:ks();break;case 13:Rt(Nt);break;case 19:Rt(Nt);break;case 10:yh(i.type._context);break;case 22:case 23:Uh()}t=t.return}if(Jt=n,Wt=n=lr(n.current,null),an=In=e,Yt=0,ta=null,Dh=hu=zr=0,Mn=Io=null,br!==null){for(e=0;e<br.length;e++)if(t=br[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}br=null}return n}function r0(n,e){do{var t=Wt;try{if(_h(),_l.current=Vl,Gl){for(var i=It.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gl=!1}if(kr=0,Zt=jt=It=null,Do=!1,Qo=0,Lh.current=null,t===null||t.return===null){Yt=1,ta=e,Wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=an,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Yd(o);if(p!==null){p.flags&=-257,Kd(p,o,a,s,e),p.mode&1&&jd(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){jd(s,u,e),Fh();break e}l=Error(de(426))}}else if(Pt&&a.mode&1){var m=Yd(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kd(m,o,a,s,e),gh(zs(l,a));break e}}s=l=zs(l,a),Yt!==4&&(Yt=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Hv(s,l,e);Bd(s,c);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(or===null||!or.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Gv(s,a,e);Bd(s,S);break e}}s=s.return}while(s!==null)}a0(t)}catch(T){e=T,Wt===t&&t!==null&&(Wt=t=t.return);continue}break}while(!0)}function s0(){var n=Wl.current;return Wl.current=Vl,n===null?Vl:n}function Fh(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Jt===null||!(zr&268435455)&&!(hu&268435455)||$i(Jt,an)}function Yl(n,e){var t=ut;ut|=2;var i=s0();(Jt!==n||an!==e)&&(Ci=null,Lr(n,e));do try{Rx();break}catch(r){r0(n,r)}while(!0);if(_h(),ut=t,Wl.current=i,Wt!==null)throw Error(de(261));return Jt=null,an=0,Yt}function Rx(){for(;Wt!==null;)o0(Wt)}function bx(){for(;Wt!==null&&!ey();)o0(Wt)}function o0(n){var e=u0(n.alternate,n,In);n.memoizedProps=n.pendingProps,e===null?a0(n):Wt=e,Lh.current=null}function a0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Mx(t,e),t!==null){t.flags&=32767,Wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Yt=6,Wt=null;return}}else if(t=Sx(t,e,In),t!==null){Wt=t;return}if(e=e.sibling,e!==null){Wt=e;return}Wt=e=n}while(e!==null);Yt===0&&(Yt=5)}function Er(n,e,t){var i=pt,r=$n.transition;try{$n.transition=null,pt=1,Px(n,e,t,i)}finally{$n.transition=r,pt=i}return null}function Px(n,e,t,i){do Ps();while(Qi!==null);if(ut&6)throw Error(de(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(de(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(cy(n,s),n===Jt&&(Wt=Jt=null,an=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ia||(Ia=!0,c0(Rl,function(){return Ps(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=pt;pt=1;var a=ut;ut|=4,Lh.current=null,Tx(n,t),t0(t,n),$y(hf),Pl=!!ff,hf=ff=null,n.current=t,wx(t),ty(),ut=a,pt=o,$n.transition=s}else n.current=t;if(Ia&&(Ia=!1,Qi=n,jl=r),s=n.pendingLanes,s===0&&(or=null),ry(t.stateNode),bn(n,zt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xl)throw Xl=!1,n=Df,Df=null,n;return jl&1&&n.tag!==0&&Ps(),s=n.pendingLanes,s&1?n===Nf?Uo++:(Uo=0,Nf=n):Uo=0,gr(),null}function Ps(){if(Qi!==null){var n=Hg(jl),e=$n.transition,t=pt;try{if($n.transition=null,pt=16>n?16:n,Qi===null)var i=!1;else{if(n=Qi,Qi=null,jl=0,ut&6)throw Error(de(331));var r=ut;for(ut|=4,Ae=n.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ae=u;Ae!==null;){var h=Ae;switch(h.tag){case 0:case 11:case 15:No(8,h,s)}var f=h.child;if(f!==null)f.return=h,Ae=f;else for(;Ae!==null;){h=Ae;var d=h.sibling,p=h.return;if(Qv(h),h===u){Ae=null;break}if(d!==null){d.return=p,Ae=d;break}Ae=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,Ae=c;break e}Ae=s.return}}var v=n.current;for(Ae=v;Ae!==null;){o=Ae;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ae=_;else e:for(o=v;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fu(9,a)}}catch(T){Ot(a,a.return,T)}if(a===o){Ae=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ae=S;break e}Ae=a.return}}if(ut=r,gr(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(iu,n)}catch{}i=!0}return i}finally{pt=t,$n.transition=e}}return!1}function ap(n,e,t){e=zs(t,e),e=Hv(n,e,1),n=sr(n,e,1),e=vn(),n!==null&&(sa(n,1,e),bn(n,e))}function Ot(n,e,t){if(n.tag===3)ap(n,n,t);else for(;e!==null;){if(e.tag===3){ap(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){n=zs(t,n),n=Gv(e,n,1),e=sr(e,n,1),n=vn(),e!==null&&(sa(e,1,n),bn(e,n));break}}e=e.return}}function Lx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=vn(),n.pingedLanes|=n.suspendedLanes&t,Jt===n&&(an&t)===t&&(Yt===4||Yt===3&&(an&130023424)===an&&500>zt()-Nh?Lr(n,0):Dh|=t),bn(n,e)}function l0(n,e){e===0&&(n.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var t=vn();n=Ui(n,e),n!==null&&(sa(n,e,t),bn(n,t))}function Dx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),l0(n,t)}function Nx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),l0(n,t)}var u0;u0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Cn.current)wn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return wn=!1,xx(n,e,t);wn=!!(n.flags&131072)}else wn=!1,Pt&&e.flags&1048576&&dv(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xl(n,e),n=e.pendingProps;var r=Us(e,pn.current);bs(e,t),r=Ah(null,e,i,n,r,t);var s=Ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rn(i)?(s=!0,Ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sh(e),r.updater=cu,e.stateNode=r,r._reactInternals=e,Sf(e,i,n,t),e=Tf(null,e,i,!0,s,t)):(e.tag=0,Pt&&s&&ph(e),gn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(xl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ux(i),n=ri(i,n),r){case 0:e=Ef(null,e,i,n,t);break e;case 1:e=Zd(null,e,i,n,t);break e;case 11:e=qd(null,e,i,n,t);break e;case 14:e=$d(null,e,i,ri(i.type,n),t);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Ef(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Zd(n,e,i,r,t);case 3:e:{if(jv(e),n===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yv(n,e),Bl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=zs(Error(de(423)),e),e=Qd(n,e,i,t,r);break e}else if(i!==r){r=zs(Error(de(424)),e),e=Qd(n,e,i,t,r);break e}else for(On=rr(e.stateNode.containerInfo.firstChild),kn=e,Pt=!0,oi=null,t=vv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Fs(),i===r){e=Fi(n,e,t);break e}gn(n,e,i,t)}e=e.child}return e;case 5:return xv(e),n===null&&_f(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,df(i,r)?o=null:s!==null&&df(i,s)&&(e.flags|=32),Xv(n,e),gn(n,e,o,t),e.child;case 6:return n===null&&_f(e),null;case 13:return Yv(n,e,t);case 4:return Mh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Os(e,null,i,t):gn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),qd(n,e,i,r,t);case 7:return gn(n,e,e.pendingProps,t),e.child;case 8:return gn(n,e,e.pendingProps.children,t),e.child;case 12:return gn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Et(kl,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!Cn.current){e=Fi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),yf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),yf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bs(e,t),r=Zn(r),i=i(r),e.flags|=1,gn(n,e,i,t),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),$d(n,e,i,r,t);case 15:return Vv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),xl(n,e),e.tag=1,Rn(i)?(n=!0,Ul(e)):n=!1,bs(e,t),Bv(e,i,r),Sf(e,i,r,t),Tf(null,e,i,!0,n,t);case 19:return Kv(n,e,t);case 22:return Wv(n,e,t)}throw Error(de(156,e.tag))};function c0(n,e){return Og(n,e)}function Ix(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,e,t,i){return new Ix(n,e,t,i)}function Oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ux(n){if(typeof n=="function")return Oh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===nh)return 11;if(n===ih)return 14}return 2}function lr(n,e){var t=n.alternate;return t===null?(t=qn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function El(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Oh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case hs:return Dr(t.children,r,s,e);case th:o=8,r|=8;break;case Wc:return n=qn(12,t,e,r|2),n.elementType=Wc,n.lanes=s,n;case Xc:return n=qn(13,t,e,r),n.elementType=Xc,n.lanes=s,n;case jc:return n=qn(19,t,e,r),n.elementType=jc,n.lanes=s,n;case xg:return du(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _g:o=10;break e;case yg:o=9;break e;case nh:o=11;break e;case ih:o=14;break e;case Yi:o=16,i=null;break e}throw Error(de(130,n==null?n:typeof n,""))}return e=qn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Dr(n,e,t,i){return n=qn(7,n,i,e),n.lanes=t,n}function du(n,e,t,i){return n=qn(22,n,i,e),n.elementType=xg,n.lanes=t,n.stateNode={isHidden:!1},n}function tc(n,e,t){return n=qn(6,n,null,e),n.lanes=t,n}function nc(n,e,t){return e=qn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Fx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kh(n,e,t,i,r,s,o,a,l){return n=new Fx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sh(s),n}function Ox(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function f0(n){if(!n)return dr;n=n._reactInternals;e:{if(Vr(n)!==n||n.tag!==1)throw Error(de(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(n.tag===1){var t=n.type;if(Rn(t))return fv(n,t,e)}return e}function h0(n,e,t,i,r,s,o,a,l){return n=kh(t,i,!0,n,r,s,o,a,l),n.context=f0(null),t=n.current,i=vn(),r=ar(t),s=Di(i,r),s.callback=e??null,sr(t,s,r),n.current.lanes=r,sa(n,r,i),bn(n,i),n}function pu(n,e,t,i){var r=e.current,s=vn(),o=ar(r);return t=f0(t),e.context===null?e.context=t:e.pendingContext=t,e=Di(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=sr(r,e,o),n!==null&&(ci(n,r,o,s),vl(n,r,o)),o}function Kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function lp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function zh(n,e){lp(n,e),(n=n.alternate)&&lp(n,e)}function kx(){return null}var d0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bh(n){this._internalRoot=n}mu.prototype.render=Bh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(de(409));pu(n,e,null,null)};mu.prototype.unmount=Bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Br(function(){pu(null,n,null,null)}),e[Ii]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var e=Wg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<qi.length&&e!==0&&e<qi[t].priority;t++);qi.splice(t,0,n),t===0&&jg(n)}};function Hh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function up(){}function zx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Kl(o);s.call(u)}}var o=h0(e,i,n,0,null,!1,!1,"",up);return n._reactRootContainer=o,n[Ii]=o.current,Yo(n.nodeType===8?n.parentNode:n),Br(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Kl(l);a.call(u)}}var l=kh(n,0,!1,null,null,!1,!1,"",up);return n._reactRootContainer=l,n[Ii]=l.current,Yo(n.nodeType===8?n.parentNode:n),Br(function(){pu(e,l,t,i)}),l}function vu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Kl(o);a.call(l)}}pu(e,o,n,r)}else o=zx(t,e,n,r,i);return Kl(o)}Gg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=To(e.pendingLanes);t!==0&&(oh(e,t|1),bn(e,zt()),!(ut&6)&&(Bs=zt()+500,gr()))}break;case 13:Br(function(){var i=Ui(n,1);if(i!==null){var r=vn();ci(i,n,1,r)}}),zh(n,1)}};ah=function(n){if(n.tag===13){var e=Ui(n,134217728);if(e!==null){var t=vn();ci(e,n,134217728,t)}zh(n,134217728)}};Vg=function(n){if(n.tag===13){var e=ar(n),t=Ui(n,e);if(t!==null){var i=vn();ci(t,n,e,i)}zh(n,e)}};Wg=function(){return pt};Xg=function(n,e){var t=pt;try{return pt=n,e()}finally{pt=t}};nf=function(n,e,t){switch(e){case"input":if(qc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=au(i);if(!r)throw Error(de(90));Mg(i),qc(i,r)}}}break;case"textarea":Tg(n,t);break;case"select":e=t.value,e!=null&&ws(n,!!t.multiple,e,!1)}};Lg=Ih;Dg=Br;var Bx={usingClientEntryPoint:!1,Events:[aa,gs,au,bg,Pg,Ih]},uo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hx={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ug(n),n===null?null:n.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{iu=Ua.inject(Hx),_i=Ua}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;Bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(de(200));return Ox(n,e,null,t)};Bn.createRoot=function(n,e){if(!Hh(n))throw Error(de(299));var t=!1,i="",r=d0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kh(n,1,!1,null,null,t,!1,i,r),n[Ii]=e.current,Yo(n.nodeType===8?n.parentNode:n),new Bh(e)};Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(de(188)):(n=Object.keys(n).join(","),Error(de(268,n)));return n=Ug(e),n=n===null?null:n.stateNode,n};Bn.flushSync=function(n){return Br(n)};Bn.hydrate=function(n,e,t){if(!gu(e))throw Error(de(200));return vu(null,n,e,!0,t)};Bn.hydrateRoot=function(n,e,t){if(!Hh(n))throw Error(de(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=d0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=h0(e,null,n,1,t??null,r,!1,s,o),n[Ii]=e.current,Yo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new mu(e)};Bn.render=function(n,e,t){if(!gu(e))throw Error(de(200));return vu(null,n,e,!1,t)};Bn.unmountComponentAtNode=function(n){if(!gu(n))throw Error(de(40));return n._reactRootContainer?(Br(function(){vu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ii]=null})}),!0):!1};Bn.unstable_batchedUpdates=Ih;Bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!gu(t))throw Error(de(200));if(n==null||n._reactInternals===void 0)throw Error(de(38));return vu(n,e,t,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function p0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0)}catch(n){console.error(n)}}p0(),pg.exports=Bn;var Gx=pg.exports,cp=Gx;Gc.createRoot=cp.createRoot,Gc.hydrateRoot=cp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="160",Vx=0,fp=1,Wx=2,m0=1,Xx=2,Ai=3,Oi=0,_n=1,vi=2,ur=0,Ls=1,hp=2,dp=3,pp=4,jx=5,Ar=100,Yx=101,Kx=102,mp=103,gp=104,qx=200,$x=201,Zx=202,Qx=203,Ff=204,Of=205,Jx=206,eS=207,tS=208,nS=209,iS=210,rS=211,sS=212,oS=213,aS=214,lS=0,uS=1,cS=2,ql=3,fS=4,hS=5,dS=6,pS=7,Vh=0,mS=1,gS=2,cr=0,vS=1,_S=2,yS=3,g0=4,xS=5,SS=6,v0=300,Hs=301,Gs=302,kf=303,zf=304,_u=306,Bf=1e3,Fn=1001,Hf=1002,on=1003,vp=1004,ic=1005,Yn=1006,MS=1007,na=1008,fr=1009,ES=1010,TS=1011,Wh=1012,_0=1013,Ji=1014,er=1015,ia=1016,y0=1017,x0=1018,Nr=1020,wS=1021,li=1023,AS=1024,CS=1025,Ir=1026,Vs=1027,RS=1028,S0=1029,bS=1030,M0=1031,E0=1033,rc=33776,sc=33777,oc=33778,ac=33779,_p=35840,yp=35841,xp=35842,Sp=35843,T0=36196,Mp=37492,Ep=37496,Tp=37808,wp=37809,Ap=37810,Cp=37811,Rp=37812,bp=37813,Pp=37814,Lp=37815,Dp=37816,Np=37817,Ip=37818,Up=37819,Fp=37820,Op=37821,lc=36492,kp=36494,zp=36495,PS=36283,Bp=36284,Hp=36285,Gp=36286,w0=3e3,Ur=3001,LS=3200,DS=3201,A0=0,NS=1,Kn="",Qt="srgb",ki="srgb-linear",Xh="display-p3",yu="display-p3-linear",$l="linear",At="srgb",Zl="rec709",Ql="p3",Kr=7680,Vp=519,IS=512,US=513,FS=514,C0=515,OS=516,kS=517,zS=518,BS=519,Wp=35044,Xp="300 es",Gf=1035,Li=2e3,Jl=2001;class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=Math.PI/180,Vf=180/Math.PI;function ua(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function HS(n,e){return(n%e+e)%e}function cc(n,e,t){return(1-t)*n+t*e}function jp(n){return(n&n-1)===0&&n!==0}function Wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function co(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,r,s,o,a,l,u){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],f=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],c=r[6],v=r[1],_=r[4],S=r[7],T=r[2],A=r[5],w=r[8];return s[0]=o*y+a*v+l*T,s[3]=o*m+a*_+l*A,s[6]=o*c+a*S+l*w,s[1]=u*y+h*v+f*T,s[4]=u*m+h*_+f*A,s[7]=u*c+h*S+f*w,s[2]=d*y+p*v+g*T,s[5]=d*m+p*_+g*A,s[8]=d*c+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=h*o-a*u,d=a*l-h*s,p=u*s-o*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*u-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-u*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new st;function R0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function GS(){const n=eu("canvas");return n.style.display="block",n}const Yp={};function Fo(n){n in Yp||(Yp[n]=!0,console.warn(n))}const Kp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fa={[ki]:{transfer:$l,primaries:Zl,toReference:n=>n,fromReference:n=>n},[Qt]:{transfer:At,primaries:Zl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[yu]:{transfer:$l,primaries:Ql,toReference:n=>n.applyMatrix3(qp),fromReference:n=>n.applyMatrix3(Kp)},[Xh]:{transfer:At,primaries:Ql,toReference:n=>n.convertSRGBToLinear().applyMatrix3(qp),fromReference:n=>n.applyMatrix3(Kp).convertLinearToSRGB()}},VS=new Set([ki,yu]),_t={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!VS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Fa[e].toReference,r=Fa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Fa[n].primaries},getTransfer:function(n){return n===Kn?$l:Fa[n].transfer}};function Ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qr;class b0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=eu("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ds(t[i]/255)*255):t[i]=Ds(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WS=0;class P0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=ua(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dc(r[o].image)):s.push(dc(r[o]))}else s=dc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XS=0;class Pn extends qs{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=Fn,r=Fn,s=Yn,o=na,a=li,l=fr,u=Pn.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=ua(),this.name="",this.source=new P0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ur?Qt:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bf:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bf:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?Ur:w0}set encoding(e){Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?Qt:Kn}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=v0;Pn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,S=(p+1)/2,T=(c+1)/2,A=(h+d)/4,w=(f+y)/4,F=(g+m)/4;return _>S&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=w/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=F/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=F/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-y)/v,this.z=(d-h)/v,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jS extends qs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ur?Qt:Kn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new P0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends jS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class L0 extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class YS extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(f!==y||l!==d||u!==p||h!==g){let m=1-a;const c=l*d+u*p+h*g+f*y,v=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const T=Math.sqrt(_),A=Math.atan2(T,c*v);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const S=a*v;if(l=l*m+d*S,u=u*m+p*S,h=h*m+g*S,f=f*m+y*S,m===1-a){const T=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=T,u*=T,h*=T,f*=T}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*p-u*d,e[t+1]=l*g+h*d+u*f-a*p,e[t+2]=u*g+h*p+a*d-l*f,e[t+3]=h*g-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"YZX":this._x=d*h*f+u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f-d*p*g;break;case"XZY":this._x=d*h*f-u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($p.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),h=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*h,this.y=i+l*h+a*u-s*f,this.z=r+l*f+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new B,$p=new ca;class Wr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),ka.subVectors(this.max,fo),$r.subVectors(e.a,fo),Zr.subVectors(e.b,fo),Qr.subVectors(e.c,fo),Gi.subVectors(Zr,$r),Vi.subVectors(Qr,Zr),vr.subVectors($r,Qr);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-vr.z,vr.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,vr.z,0,-vr.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-vr.y,vr.x,0];return!mc(t,$r,Zr,Qr,ka)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,$r,Zr,Qr,ka))?!1:(za.crossVectors(Gi,Vi),t=[za.x,za.y,za.z],mc(t,$r,Zr,Qr,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new B,new B,new B,new B,new B,new B,new B,new B],ti=new B,Oa=new Wr,$r=new B,Zr=new B,Qr=new B,Gi=new B,Vi=new B,vr=new B,fo=new B,ka=new B,za=new B,_r=new B;function mc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_r.fromArray(n,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),u=t.dot(_r),h=i.dot(_r);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const KS=new Wr,ho=new B,gc=new B;class $s{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):KS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const t=ho.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(gc)),this.expandByPoint(ho.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new B,vc=new B,Ba=new B,Wi=new B,_c=new B,Ha=new B,yc=new B;class D0{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vc.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(vc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ba),a=Wi.dot(this.direction),l=-Wi.dot(Ba),u=Wi.lengthSq(),h=Math.abs(1-o*o);let f,d,p,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const y=1/h;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vc).addScaledVector(Ba,d),p}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,r,s){_c.subVectors(t,e),Ha.subVectors(i,e),yc.crossVectors(_c,Ha);let o=this.direction.dot(yc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(Wi,Ha));if(l<0)return null;const u=a*this.direction.dot(_c.cross(Wi));if(u<0||l+u>o)return null;const h=-a*Wi.dot(yc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,i,r,s,o,a,l,u,h,f,d,p,g,y,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,h,f,d,p,g,y,m)}set(e,t,i,r,s,o,a,l,u,h,f,d,p,g,y,m){const c=this.elements;return c[0]=e,c[4]=t,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=h,c[10]=f,c[14]=d,c[3]=p,c[7]=g,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,g=a*h,y=a*f;t[0]=l*h,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=d-y*u,t[9]=-a*l,t[2]=y-d*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,g=u*h,y=u*f;t[0]=d+y*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,g=u*h,y=u*f;t[0]=d-y*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,g=a*h,y=a*f;t[0]=l*h,t[4]=g*u-p,t[8]=d*u+y,t[1]=l*f,t[5]=y*u+d,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,y=a*u;t[0]=l*h,t[4]=y-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=p*f+g,t[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,y=a*u;t[0]=l*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qS,e,$S)}lookAt(e,t,i){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Xi.crossVectors(i,Dn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Xi.crossVectors(i,Dn)),Xi.normalize(),Ga.crossVectors(Dn,Xi),r[0]=Xi.x,r[4]=Ga.x,r[8]=Dn.x,r[1]=Xi.y,r[5]=Ga.y,r[9]=Dn.y,r[2]=Xi.z,r[6]=Ga.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],f=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],c=i[14],v=i[3],_=i[7],S=i[11],T=i[15],A=r[0],w=r[4],F=r[8],M=r[12],C=r[1],H=r[5],q=r[9],ie=r[13],U=r[2],G=r[6],Q=r[10],ne=r[14],O=r[3],V=r[7],X=r[11],ee=r[15];return s[0]=o*A+a*C+l*U+u*O,s[4]=o*w+a*H+l*G+u*V,s[8]=o*F+a*q+l*Q+u*X,s[12]=o*M+a*ie+l*ne+u*ee,s[1]=h*A+f*C+d*U+p*O,s[5]=h*w+f*H+d*G+p*V,s[9]=h*F+f*q+d*Q+p*X,s[13]=h*M+f*ie+d*ne+p*ee,s[2]=g*A+y*C+m*U+c*O,s[6]=g*w+y*H+m*G+c*V,s[10]=g*F+y*q+m*Q+c*X,s[14]=g*M+y*ie+m*ne+c*ee,s[3]=v*A+_*C+S*U+T*O,s[7]=v*w+_*H+S*G+T*V,s[11]=v*F+_*q+S*Q+T*X,s[15]=v*M+_*ie+S*ne+T*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],c=e[15];return g*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*h-s*l*h)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*h-i*u*h)+c*(-r*a*h-t*l*f+t*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],c=e[15],v=f*m*u-y*d*u+y*l*p-a*m*p-f*l*c+a*d*c,_=g*d*u-h*m*u-g*l*p+o*m*p+h*l*c-o*d*c,S=h*y*u-g*f*u+g*a*p-o*y*p-h*a*c+o*f*c,T=g*f*l-h*y*l-g*a*d+o*y*d+h*a*m-o*f*m,A=t*v+i*_+r*S+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*c-i*d*c)*w,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*c+i*l*c)*w,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*c+t*d*c)*w,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*c-t*l*c)*w,e[7]=(o*d*s-h*l*s+h*r*u-t*d*u-o*r*p+t*l*p)*w,e[8]=S*w,e[9]=(g*f*s-h*y*s-g*i*p+t*y*p+h*i*c-t*f*c)*w,e[10]=(o*y*s-g*a*s+g*i*u-t*y*u-o*i*c+t*a*c)*w,e[11]=(h*a*s-o*f*s-h*i*u+t*f*u+o*i*p-t*a*p)*w,e[12]=T*w,e[13]=(h*y*r-g*f*r+g*i*d-t*y*d-h*i*m+t*f*m)*w,e[14]=(g*a*r-o*y*r-g*i*l+t*y*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-h*a*r+h*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,h=o+o,f=a+a,d=s*u,p=s*h,g=s*f,y=o*h,m=o*f,c=a*f,v=l*u,_=l*h,S=l*f,T=i.x,A=i.y,w=i.z;return r[0]=(1-(y+c))*T,r[1]=(p+S)*T,r[2]=(g-_)*T,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+c))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+_)*w,r[9]=(m-v)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ni.copy(this);const u=1/s,h=1/o,f=1/a;return ni.elements[0]*=u,ni.elements[1]*=u,ni.elements[2]*=u,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,t.setFromRotationMatrix(ni),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Li){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Li)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Jl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Li){const l=this.elements,u=1/(t-e),h=1/(i-r),f=1/(o-s),d=(t+e)*u,p=(i+r)*h;let g,y;if(a===Li)g=(o+s)*f,y=-2*f;else if(a===Jl)g=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Jr=new B,ni=new Dt,qS=new B(0,0,0),$S=new B(1,1,1),Xi=new B,Ga=new B,Dn=new B,Zp=new Dt,Qp=new ca;class xu{constructor(e=0,t=0,i=0,r=xu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xu.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZS=0;const Jp=new B,es=new ca,Ei=new Dt,Va=new B,po=new B,QS=new B,JS=new ca,em=new B(1,0,0),tm=new B(0,1,0),nm=new B(0,0,1),eM={type:"added"},tM={type:"removed"};class Xt extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new B,t=new xu,i=new ca,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new st}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,t){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Va.copy(e):Va.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(po,Va,this.up):Ei.lookAt(Va,po,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Ei),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,QS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,JS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new B(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new B,Ti=new B,xc=new B,wi=new B,ts=new B,ns=new B,im=new B,Sc=new B,Mc=new B,Ec=new B;let Wa=!1;class ai{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ii.subVectors(e,t),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ii.subVectors(r,t),Ti.subVectors(i,t),xc.subVectors(e,t);const o=ii.dot(ii),a=ii.dot(Ti),l=ii.dot(xc),u=Ti.dot(Ti),h=Ti.dot(xc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,t,i,r){return ii.subVectors(i,t),Ti.subVectors(e,t),ii.cross(Ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ii.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),ai.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ts.subVectors(r,i),ns.subVectors(s,i),Sc.subVectors(e,i);const l=ts.dot(Sc),u=ns.dot(Sc);if(l<=0&&u<=0)return t.copy(i);Mc.subVectors(e,r);const h=ts.dot(Mc),f=ns.dot(Mc);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ts,o);Ec.subVectors(e,s);const p=ts.dot(Ec),g=ns.dot(Ec);if(g>=0&&p<=g)return t.copy(s);const y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(ns,a);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return im.subVectors(s,r),a=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(im,a);const c=1/(m+y+d);return o=y*c,a=d*c,t.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=HS(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Tc(o,s,e+1/3),this.g=Tc(o,s,e),this.b=Tc(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=I0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=hc(e.r),this.g=hc(e.g),this.b=hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return _t.fromWorkingColorSpace(hn.copy(this),e),Math.round(En(hn.r*255,0,255))*65536+Math.round(En(hn.g*255,0,255))*256+Math.round(En(hn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(hn.copy(this),t);const i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Qt){_t.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,i=hn.g,r=hn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Xa);const i=cc(ji.h,Xa.h,t),r=cc(ji.s,Xa.s,t),s=cc(ji.l,Xa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new nt;nt.NAMES=I0;let nM=0;class Zs extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=Ls,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Of,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ff&&(i.blendSrc=this.blendSrc),this.blendDst!==Of&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ql&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jh extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new B,ja=new ct;class Ct{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=co(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=co(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=co(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=co(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=co(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class U0 extends Ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class F0 extends Ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xi extends Ct{constructor(e,t,i){super(new Float32Array(e),t,i)}}let iM=0;const Wn=new Dt,wc=new Xt,is=new B,Nn=new Wr,mo=new Wr,$t=new B;class Ln extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R0(e)?F0:U0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new st().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];mo.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Nn.min,mo.min),Nn.expandByPoint($t),$t.addVectors(Nn.max,mo.max),Nn.expandByPoint($t)):(Nn.expandByPoint(mo.min),Nn.expandByPoint(mo.max))}Nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)$t.fromBufferAttribute(a,u),l&&(is.fromBufferAttribute(e,u),$t.add(is)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let C=0;C<a;C++)u[C]=new B,h[C]=new B;const f=new B,d=new B,p=new B,g=new ct,y=new ct,m=new ct,c=new B,v=new B;function _(C,H,q){f.fromArray(r,C*3),d.fromArray(r,H*3),p.fromArray(r,q*3),g.fromArray(o,C*2),y.fromArray(o,H*2),m.fromArray(o,q*2),d.sub(f),p.sub(f),y.sub(g),m.sub(g);const ie=1/(y.x*m.y-m.x*y.y);isFinite(ie)&&(c.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(ie),v.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(ie),u[C].add(c),u[H].add(c),u[q].add(c),h[C].add(v),h[H].add(v),h[q].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let C=0,H=S.length;C<H;++C){const q=S[C],ie=q.start,U=q.count;for(let G=ie,Q=ie+U;G<Q;G+=3)_(i[G+0],i[G+1],i[G+2])}const T=new B,A=new B,w=new B,F=new B;function M(C){w.fromArray(s,C*3),F.copy(w);const H=u[C];T.copy(H),T.sub(w.multiplyScalar(w.dot(H))).normalize(),A.crossVectors(F,H);const ie=A.dot(h[C])<0?-1:1;l[C*4]=T.x,l[C*4+1]=T.y,l[C*4+2]=T.z,l[C*4+3]=ie}for(let C=0,H=S.length;C<H;++C){const q=S[C],ie=q.start,U=q.count;for(let G=ie,Q=ie+U;G<Q;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,h=new B,f=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(h),l.add(h),u.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,f=a.normalized,d=new u.constructor(l.length*h);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let c=0;c<h;c++)d[g++]=u[p++]}return new Ct(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,f=u.length;h<f;h++){const d=u[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new Dt,yr=new D0,Ya=new $s,sm=new B,rs=new B,ss=new B,os=new B,Ac=new B,Ka=new B,qa=new ct,$a=new ct,Za=new ct,om=new B,am=new B,lm=new B,Qa=new B,Ja=new B;class An extends Xt{constructor(e=new Ln,t=new jh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ka.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],f=s[l];h!==0&&(Ac.fromBufferAttribute(f,e),o?Ka.addScaledVector(Ac,h):Ka.addScaledVector(Ac.sub(t),h))}t.add(Ka)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(Ya.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Ya,sm)===null||yr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),yr.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],c=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=_;S<T;S+=3){const A=a.getX(S),w=a.getX(S+1),F=a.getX(S+2);r=el(this,c,e,i,u,h,f,A,w,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,c=y;m<c;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=el(this,o,e,i,u,h,f,v,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],c=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=_;S<T;S+=3){const A=S,w=S+1,F=S+2;r=el(this,c,e,i,u,h,f,A,w,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,c=y;m<c;m+=3){const v=m,_=m+1,S=m+2;r=el(this,o,e,i,u,h,f,v,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function rM(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Oi,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ja);return u<t.near||u>t.far?null:{distance:u,point:Ja.clone(),object:n}}function el(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,rs),n.getVertexPosition(l,ss),n.getVertexPosition(u,os);const h=rM(n,e,t,i,rs,ss,os,Qa);if(h){r&&(qa.fromBufferAttribute(r,a),$a.fromBufferAttribute(r,l),Za.fromBufferAttribute(r,u),h.uv=ai.getInterpolation(Qa,rs,ss,os,qa,$a,Za,new ct)),s&&(qa.fromBufferAttribute(s,a),$a.fromBufferAttribute(s,l),Za.fromBufferAttribute(s,u),h.uv1=ai.getInterpolation(Qa,rs,ss,os,qa,$a,Za,new ct),h.uv2=h.uv1),o&&(om.fromBufferAttribute(o,a),am.fromBufferAttribute(o,l),lm.fromBufferAttribute(o,u),h.normal=ai.getInterpolation(Qa,rs,ss,os,om,am,lm,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new B,materialIndex:0};ai.getNormal(rs,ss,os,f.normal),h.face=f}return h}class Qs extends Ln{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(u,3)),this.setAttribute("normal",new xi(h,3)),this.setAttribute("uv",new xi(f,2));function g(y,m,c,v,_,S,T,A,w,F,M){const C=S/w,H=T/F,q=S/2,ie=T/2,U=A/2,G=w+1,Q=F+1;let ne=0,O=0;const V=new B;for(let X=0;X<Q;X++){const ee=X*H-ie;for(let se=0;se<G;se++){const Z=se*C-q;V[y]=Z*v,V[m]=ee*_,V[c]=U,u.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[c]=A>0?1:-1,h.push(V.x,V.y,V.z),f.push(se/w),f.push(1-X/F),ne+=1}}for(let X=0;X<F;X++)for(let ee=0;ee<w;ee++){const se=d+ee+G*X,Z=d+ee+G*(X+1),re=d+(ee+1)+G*(X+1),ve=d+(ee+1)+G*X;l.push(se,Z,ve),l.push(Z,re,ve),O+=6}a.addGroup(p,O,M),p+=O,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mn(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const r in i)e[r]=i[r]}return e}function sM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function O0(n){return n.getRenderTarget()===null?n.outputColorSpace:_t.workingColorSpace}const oM={clone:Ws,merge:mn};var aM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aM,this.fragmentShader=lM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=sM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let k0=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Tn extends k0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vf*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,ls=1;class uM extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(as,ls,e,t);r.layers=this.layers,this.add(r);const s=new Tn(as,ls,e,t);s.layers=this.layers,this.add(s);const o=new Tn(as,ls,e,t);o.layers=this.layers,this.add(o);const a=new Tn(as,ls,e,t);a.layers=this.layers,this.add(a);const l=new Tn(as,ls,e,t);l.layers=this.layers,this.add(l);const u=new Tn(as,ls,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class z0 extends Pn{constructor(e,t,i,r,s,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cM extends Hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ur?Qt:Kn),this.texture=new z0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qs(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:ur});s.uniforms.tEquirect.value=t;const o=new An(r,s),a=t.minFilter;return t.minFilter===na&&(t.minFilter=Yn),new uM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Cc=new B,fM=new B,hM=new st;class Tr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cc.subVectors(i,t).cross(fM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hM.getNormalMatrix(e),r=this.coplanarPoint(Cc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new $s,tl=new B;class Yh{constructor(e=new Tr,t=new Tr,i=new Tr,r=new Tr,s=new Tr,o=new Tr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],c=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-c).normalize(),i[1].setComponents(l+s,d+u,m+p,S+c).normalize(),i[2].setComponents(l+o,d+h,m+g,S+v).normalize(),i[3].setComponents(l-o,d-h,m-g,S-v).normalize(),i[4].setComponents(l-a,d-f,m-y,S-_).normalize(),t===Li)i[5].setComponents(l+a,d+f,m+y,S+_).normalize();else if(t===Jl)i[5].setComponents(a,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function B0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,h){const f=u.array,d=u.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,f,d),u.onUploadCallback();let y;if(f instanceof Float32Array)y=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=n.SHORT;else if(f instanceof Uint32Array)y=n.UNSIGNED_INT;else if(f instanceof Int32Array)y=n.INT;else if(f instanceof Int8Array)y=n.BYTE;else if(f instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,h,f){const d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&g.length===0&&n.bufferSubData(f,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){const c=g[y];t?n.bufferSubData(f,c.start*d.BYTES_PER_ELEMENT,d,c.start,c.count):n.bufferSubData(f,c.start*d.BYTES_PER_ELEMENT,d.subarray(c.start,c.start+c.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(n.deleteBuffer(h.buffer),i.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,h),f.version=u.version}}return{get:o,remove:a,update:l}}class Kh extends Ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,f=e/a,d=t/l,p=[],g=[],y=[],m=[];for(let c=0;c<h;c++){const v=c*d-o;for(let _=0;_<u;_++){const S=_*f-s;g.push(S,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const _=v+u*c,S=v+u*(c+1),T=v+1+u*(c+1),A=v+1+u*c;p.push(_,S,A),p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new xi(g,3)),this.setAttribute("normal",new xi(y,3)),this.setAttribute("uv",new xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kh(e.width,e.height,e.widthSegments,e.heightSegments)}}var pM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,TM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_E=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,SE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,PE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,i1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,S1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,M1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,k1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,X1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:pM,alphahash_pars_fragment:mM,alphamap_fragment:gM,alphamap_pars_fragment:vM,alphatest_fragment:_M,alphatest_pars_fragment:yM,aomap_fragment:xM,aomap_pars_fragment:SM,batching_pars_vertex:MM,batching_vertex:EM,begin_vertex:TM,beginnormal_vertex:wM,bsdfs:AM,iridescence_fragment:CM,bumpmap_pars_fragment:RM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:PM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:DM,color_fragment:NM,color_pars_fragment:IM,color_pars_vertex:UM,color_vertex:FM,common:OM,cube_uv_reflection_fragment:kM,defaultnormal_vertex:zM,displacementmap_pars_vertex:BM,displacementmap_vertex:HM,emissivemap_fragment:GM,emissivemap_pars_fragment:VM,colorspace_fragment:WM,colorspace_pars_fragment:XM,envmap_fragment:jM,envmap_common_pars_fragment:YM,envmap_pars_fragment:KM,envmap_pars_vertex:qM,envmap_physical_pars_fragment:aE,envmap_vertex:$M,fog_vertex:ZM,fog_pars_vertex:QM,fog_fragment:JM,fog_pars_fragment:eE,gradientmap_pars_fragment:tE,lightmap_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:rE,lights_lambert_pars_fragment:sE,lights_pars_begin:oE,lights_toon_fragment:lE,lights_toon_pars_fragment:uE,lights_phong_fragment:cE,lights_phong_pars_fragment:fE,lights_physical_fragment:hE,lights_physical_pars_fragment:dE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:vE,logdepthbuf_pars_fragment:_E,logdepthbuf_pars_vertex:yE,logdepthbuf_vertex:xE,map_fragment:SE,map_pars_fragment:ME,map_particle_fragment:EE,map_particle_pars_fragment:TE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:AE,morphcolor_vertex:CE,morphnormal_vertex:RE,morphtarget_pars_vertex:bE,morphtarget_vertex:PE,normal_fragment_begin:LE,normal_fragment_maps:DE,normal_pars_fragment:NE,normal_pars_vertex:IE,normal_vertex:UE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:kE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:BE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:VE,project_vertex:WE,dithering_fragment:XE,dithering_pars_fragment:jE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:KE,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:$E,shadowmap_vertex:ZE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:e1,skinning_vertex:t1,skinnormal_vertex:n1,specularmap_fragment:i1,specularmap_pars_fragment:r1,tonemapping_fragment:s1,tonemapping_pars_fragment:o1,transmission_fragment:a1,transmission_pars_fragment:l1,uv_pars_fragment:u1,uv_pars_vertex:c1,uv_vertex:f1,worldpos_vertex:h1,background_vert:d1,background_frag:p1,backgroundCube_vert:m1,backgroundCube_frag:g1,cube_vert:v1,cube_frag:_1,depth_vert:y1,depth_frag:x1,distanceRGBA_vert:S1,distanceRGBA_frag:M1,equirect_vert:E1,equirect_frag:T1,linedashed_vert:w1,linedashed_frag:A1,meshbasic_vert:C1,meshbasic_frag:R1,meshlambert_vert:b1,meshlambert_frag:P1,meshmatcap_vert:L1,meshmatcap_frag:D1,meshnormal_vert:N1,meshnormal_frag:I1,meshphong_vert:U1,meshphong_frag:F1,meshphysical_vert:O1,meshphysical_frag:k1,meshtoon_vert:z1,meshtoon_frag:B1,points_vert:H1,points_frag:G1,shadow_vert:V1,shadow_frag:W1,sprite_vert:X1,sprite_frag:j1},_e={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},mi={basic:{uniforms:mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:mn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:mn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:mn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:mn([_e.points,_e.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:mn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:mn([_e.common,_e.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:mn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:mn([_e.sprite,_e.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:mn([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:mn([_e.lights,_e.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};mi.physical={uniforms:mn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const nl={r:0,b:0,g:0};function Y1(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,u,h,f=null,d=0,p=null;function g(m,c){let v=!1,_=c.isScene===!0?c.background:null;_&&_.isTexture&&(_=(c.backgroundBlurriness>0?t:e).get(_)),_===null?y(a,l):_&&_.isColor&&(y(_,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===_u)?(h===void 0&&(h=new An(new Qs(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Ws(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=_t.getTransfer(_.colorSpace)!==At,(f!==_||d!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new An(new Kh(2,2),new zi({name:"BackgroundMaterial",uniforms:Ws(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=_t.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,c){m.getRGB(nl,O0(n)),i.buffers.color.setClear(nl.r,nl.g,nl.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:g}}function K1(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,h=!1;function f(U,G,Q,ne,O){let V=!1;if(o){const X=y(ne,Q,G);u!==X&&(u=X,p(u.object)),V=c(U,ne,Q,O),V&&v(U,ne,Q,O)}else{const X=G.wireframe===!0;(u.geometry!==ne.id||u.program!==Q.id||u.wireframe!==X)&&(u.geometry=ne.id,u.program=Q.id,u.wireframe=X,V=!0)}O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,F(U,G,Q,ne),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function y(U,G,Q){const ne=Q.wireframe===!0;let O=a[U.id];O===void 0&&(O={},a[U.id]=O);let V=O[G.id];V===void 0&&(V={},O[G.id]=V);let X=V[ne];return X===void 0&&(X=m(d()),V[ne]=X),X}function m(U){const G=[],Q=[],ne=[];for(let O=0;O<r;O++)G[O]=0,Q[O]=0,ne[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:ne,object:U,attributes:{},index:null}}function c(U,G,Q,ne){const O=u.attributes,V=G.attributes;let X=0;const ee=Q.getAttributes();for(const se in ee)if(ee[se].location>=0){const re=O[se];let ve=V[se];if(ve===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor)),re===void 0||re.attribute!==ve||ve&&re.data!==ve.data)return!0;X++}return u.attributesNum!==X||u.index!==ne}function v(U,G,Q,ne){const O={},V=G.attributes;let X=0;const ee=Q.getAttributes();for(const se in ee)if(ee[se].location>=0){let re=V[se];re===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));const ve={};ve.attribute=re,re&&re.data&&(ve.data=re.data),O[se]=ve,X++}u.attributes=O,u.attributesNum=X,u.index=ne}function _(){const U=u.newAttributes;for(let G=0,Q=U.length;G<Q;G++)U[G]=0}function S(U){T(U,0)}function T(U,G){const Q=u.newAttributes,ne=u.enabledAttributes,O=u.attributeDivisors;Q[U]=1,ne[U]===0&&(n.enableVertexAttribArray(U),ne[U]=1),O[U]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,G),O[U]=G)}function A(){const U=u.newAttributes,G=u.enabledAttributes;for(let Q=0,ne=G.length;Q<ne;Q++)G[Q]!==U[Q]&&(n.disableVertexAttribArray(Q),G[Q]=0)}function w(U,G,Q,ne,O,V,X){X===!0?n.vertexAttribIPointer(U,G,Q,O,V):n.vertexAttribPointer(U,G,Q,ne,O,V)}function F(U,G,Q,ne){if(i.isWebGL2===!1&&(U.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const O=ne.attributes,V=Q.getAttributes(),X=G.defaultAttributeValues;for(const ee in V){const se=V[ee];if(se.location>=0){let Z=O[ee];if(Z===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),Z!==void 0){const re=Z.normalized,ve=Z.itemSize,Ee=t.get(Z);if(Ee===void 0)continue;const we=Ee.buffer,Ge=Ee.type,We=Ee.bytesPerElement,Ce=i.isWebGL2===!0&&(Ge===n.INT||Ge===n.UNSIGNED_INT||Z.gpuType===_0);if(Z.isInterleavedBufferAttribute){const at=Z.data,j=at.stride,en=Z.offset;if(at.isInstancedInterleavedBuffer){for(let Ue=0;Ue<se.locationSize;Ue++)T(se.location+Ue,at.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ue=0;Ue<se.locationSize;Ue++)S(se.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Ue=0;Ue<se.locationSize;Ue++)w(se.location+Ue,ve/se.locationSize,Ge,re,j*We,(en+ve/se.locationSize*Ue)*We,Ce)}else{if(Z.isInstancedBufferAttribute){for(let at=0;at<se.locationSize;at++)T(se.location+at,Z.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let at=0;at<se.locationSize;at++)S(se.location+at);n.bindBuffer(n.ARRAY_BUFFER,we);for(let at=0;at<se.locationSize;at++)w(se.location+at,ve/se.locationSize,Ge,re,ve*We,ve/se.locationSize*at*We,Ce)}}else if(X!==void 0){const re=X[ee];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(se.location,re);break;case 3:n.vertexAttrib3fv(se.location,re);break;case 4:n.vertexAttrib4fv(se.location,re);break;default:n.vertexAttrib1fv(se.location,re)}}}}A()}function M(){q();for(const U in a){const G=a[U];for(const Q in G){const ne=G[Q];for(const O in ne)g(ne[O].object),delete ne[O];delete G[Q]}delete a[U]}}function C(U){if(a[U.id]===void 0)return;const G=a[U.id];for(const Q in G){const ne=G[Q];for(const O in ne)g(ne[O].object),delete ne[O];delete G[Q]}delete a[U.id]}function H(U){for(const G in a){const Q=a[G];if(Q[U.id]===void 0)continue;const ne=Q[U.id];for(const O in ne)g(ne[O].object),delete ne[O];delete Q[U.id]}}function q(){ie(),h=!0,u!==l&&(u=l,p(u.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:H,initAttributes:_,enableAttribute:S,disableUnusedAttributes:A}}function q1(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,f){n.drawArrays(s,h,f),t.update(f,s,1)}function l(h,f,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,h,f,d),t.update(f,s,d)}function u(h,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{p.multiDrawArraysWEBGL(s,h,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=f[y];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function $1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),c=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,S=o||e.has("OES_texture_float"),T=_&&S,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:A}}function Z1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Tr,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,c=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):u();else{const v=s?0:i,_=v*4;let S=c.clippingState||null;l.value=S,S=h(g,d,_,p);for(let T=0;T!==_;++T)S[T]=t[T];c.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const c=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,S=p;_!==y;++_,S+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Q1(n){let e=new WeakMap;function t(o,a){return a===kf?o.mapping=Hs:a===zf&&(o.mapping=Gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kf||a===zf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new cM(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class H0 extends k0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,um=[.125,.215,.35,.446,.526,.582],Cr=20,Rc=new H0,cm=new nt;let bc=null,Pc=0,Lc=0;const wr=(1+Math.sqrt(5))/2,us=1/wr,fm=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,wr,us),new B(0,wr,-us),new B(us,0,wr),new B(-us,0,wr),new B(wr,us,0),new B(-wr,us,0)];class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Pc,Lc),e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:ia,format:li,colorSpace:ki,depthBuffer:!1},r=dm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J1(s)),this._blurMaterial=eT(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,Rc)}_sceneToCubeUV(e,t,i,r){const a=new Tn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(cm),h.toneMapping=cr,h.autoClear=!1;const p=new jh({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new An(new Qs,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(cm),y=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;il(r,v*_,c>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;il(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Rc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fm[(r-1)%fm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new An(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):Cr;m>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);const c=[];let v=0;for(let w=0;w<Cr;++w){const F=w/y,M=Math.exp(-F*F/2);c.push(M),w===0?v+=M:w<m&&(v+=2*M)}for(let w=0;w<c.length;w++)c[w]=c[w]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const S=this._sizeLods[r],T=3*S*(r>_-Es?r-_+Es:0),A=4*(this._cubeSize-S);il(t,T,A,3*S,2*S),l.setRenderTarget(t),l.render(f,Rc)}}function J1(n){const e=[],t=[],i=[];let r=n;const s=n-Es+1+um.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Es?l=um[o-n+Es-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,y=3,m=2,c=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),S=new Float32Array(c*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,F=A>2?0:-1,M=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];v.set(M,y*g*A),_.set(d,m*g*A);const C=[A,A,A,A,A,A];S.set(C,c*g*A)}const T=new Ln;T.setAttribute("position",new Ct(v,y)),T.setAttribute("uv",new Ct(_,m)),T.setAttribute("faceIndex",new Ct(S,c)),e.push(T),r>Es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dm(n,e,t){const i=new Hr(n,e,t);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function eT(n,e,t){const i=new Float32Array(Cr),r=new B(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function pm(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function mm(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===kf||l===zf,h=l===Hs||l===Gs;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new hm(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new hm(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iT(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,c=y.length;m<c;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,c=y.length;m<c;m++)e.update(y[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,S=v.length;_<S;_+=3){const T=v[_+0],A=v[_+1],w=v[_+2];d.push(T,A,A,w,w,T)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const T=_+0,A=_+1,w=_+2;d.push(T,A,A,w,w,T)}}else return;const m=new(R0(d)?F0:U0)(d,1);m.version=y;const c=s.get(f);c&&e.remove(c),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function rT(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function f(p,g,y){if(y===0)return;let m,c;if(r)m=n,c="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[c](s,g,a,p*l,y),t.update(g,s,y)}function d(p,g,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<y;c++)this.render(p[c]/l,g[c]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,y);let c=0;for(let v=0;v<y;v++)c+=g[v];t.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function sT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function oT(n,e){return n[0]-e[0]}function aT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function lT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Lt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==y){let G=function(){ie.dispose(),s.delete(h),h.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const _=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),T===!0&&(M=3);let C=h.attributes.position.count*M,H=1;C>e.maxTextureSize&&(H=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const q=new Float32Array(C*H*4*y),ie=new L0(q,C,H,y);ie.type=er,ie.needsUpdate=!0;const U=M*4;for(let Q=0;Q<y;Q++){const ne=A[Q],O=w[Q],V=F[Q],X=C*H*4*Q;for(let ee=0;ee<ne.count;ee++){const se=ee*U;_===!0&&(o.fromBufferAttribute(ne,ee),q[X+se+0]=o.x,q[X+se+1]=o.y,q[X+se+2]=o.z,q[X+se+3]=0),S===!0&&(o.fromBufferAttribute(O,ee),q[X+se+4]=o.x,q[X+se+5]=o.y,q[X+se+6]=o.z,q[X+se+7]=0),T===!0&&(o.fromBufferAttribute(V,ee),q[X+se+8]=o.x,q[X+se+9]=o.y,q[X+se+10]=o.z,q[X+se+11]=V.itemSize===4?o.w:1)}}m={count:y,texture:ie,size:new ct(C,H)},s.set(h,m),h.addEventListener("dispose",G)}let c=0;for(let _=0;_<d.length;_++)c+=d[_];const v=h.morphTargetsRelative?1:1-c;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let y=i[h.id];if(y===void 0||y.length!==g){y=[];for(let S=0;S<g;S++)y[S]=[S,0];i[h.id]=y}for(let S=0;S<g;S++){const T=y[S];T[0]=S,T[1]=d[S]}y.sort(aT);for(let S=0;S<8;S++)S<g&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(oT);const m=h.morphAttributes.position,c=h.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const T=a[S],A=T[0],w=T[1];A!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+S)!==m[A]&&h.setAttribute("morphTarget"+S,m[A]),c&&h.getAttribute("morphNormal"+S)!==c[A]&&h.setAttribute("morphNormal"+S,c[A]),r[S]=w,v+=w):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),c&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const _=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function uT(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class G0 extends Pn{constructor(e,t,i,r,s,o,a,l,u,h){if(h=h!==void 0?h:Ir,h!==Ir&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ir&&(i=Ji),i===void 0&&h===Vs&&(i=Nr),super(null,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const V0=new Pn,W0=new G0(1,1);W0.compareFunction=C0;const X0=new L0,j0=new YS,Y0=new z0,gm=[],vm=[],_m=new Float32Array(16),ym=new Float32Array(9),xm=new Float32Array(4);function Js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Su(n,e){let t=vm[e];t===void 0&&(t=new Int32Array(e),vm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function hT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function dT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function pT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Kt(t,i))return;xm.set(i),n.uniformMatrix2fv(this.addr,!1,xm),qt(t,i)}}function mT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Kt(t,i))return;ym.set(i),n.uniformMatrix3fv(this.addr,!1,ym),qt(t,i)}}function gT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Kt(t,i))return;_m.set(i),n.uniformMatrix4fv(this.addr,!1,_m),qt(t,i)}}function vT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function yT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function ST(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function ET(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function TT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function wT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?W0:V0;t.setTexture2D(e||s,r)}function AT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||j0,r)}function CT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Y0,r)}function RT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||X0,r)}function bT(n){switch(n){case 5126:return cT;case 35664:return fT;case 35665:return hT;case 35666:return dT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return vT;case 35667:case 35671:return _T;case 35668:case 35672:return yT;case 35669:case 35673:return xT;case 5125:return ST;case 36294:return MT;case 36295:return ET;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return RT}}function PT(n,e){n.uniform1fv(this.addr,e)}function LT(n,e){const t=Js(e,this.size,2);n.uniform2fv(this.addr,t)}function DT(n,e){const t=Js(e,this.size,3);n.uniform3fv(this.addr,t)}function NT(n,e){const t=Js(e,this.size,4);n.uniform4fv(this.addr,t)}function IT(n,e){const t=Js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UT(n,e){const t=Js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function FT(n,e){const t=Js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function OT(n,e){n.uniform1iv(this.addr,e)}function kT(n,e){n.uniform2iv(this.addr,e)}function zT(n,e){n.uniform3iv(this.addr,e)}function BT(n,e){n.uniform4iv(this.addr,e)}function HT(n,e){n.uniform1uiv(this.addr,e)}function GT(n,e){n.uniform2uiv(this.addr,e)}function VT(n,e){n.uniform3uiv(this.addr,e)}function WT(n,e){n.uniform4uiv(this.addr,e)}function XT(n,e,t){const i=this.cache,r=e.length,s=Su(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||V0,s[o])}function jT(n,e,t){const i=this.cache,r=e.length,s=Su(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||j0,s[o])}function YT(n,e,t){const i=this.cache,r=e.length,s=Su(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Y0,s[o])}function KT(n,e,t){const i=this.cache,r=e.length,s=Su(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||X0,s[o])}function qT(n){switch(n){case 5126:return PT;case 35664:return LT;case 35665:return DT;case 35666:return NT;case 35674:return IT;case 35675:return UT;case 35676:return FT;case 5124:case 35670:return OT;case 35667:case 35671:return kT;case 35668:case 35672:return zT;case 35669:case 35673:return BT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return KT}}class $T{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bT(t.type)}}class ZT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qT(t.type)}}class QT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Dc=/(\w+)(\])?(\[|\.)?/g;function Sm(n,e){n.seq.push(e),n.map[e.id]=e}function JT(n,e,t){const i=n.name,r=i.length;for(Dc.lastIndex=0;;){const s=Dc.exec(i),o=Dc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Sm(t,u===void 0?new $T(a,n,e):new ZT(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new QT(a),Sm(t,f)),t=f}}}class Tl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);JT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Mm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ew=37297;let tw=0;function nw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iw(n){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(n);let i;switch(e===t?i="":e===Ql&&t===Zl?i="LinearDisplayP3ToLinearSRGB":e===Zl&&t===Ql&&(i="LinearSRGBToLinearDisplayP3"),n){case ki:case yu:return[i,"LinearTransferOETF"];case Qt:case Xh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Em(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nw(n.getShaderSource(e),o)}else return r}function rw(n,e){const t=iw(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sw(n,e){let t;switch(e){case vS:t="Linear";break;case _S:t="Reinhard";break;case yS:t="OptimizedCineon";break;case g0:t="ACESFilmic";break;case SS:t="AgX";break;case xS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ow(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function aw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ts).join(`
`)}function lw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ts(n){return n!==""}function Tm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(n){return n.replace(cw,hw)}const fw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hw(n,e){let t=tt[e];if(t===void 0){const i=fw.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xf(t)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(n){return n.replace(dw,pw)}function pw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function gw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function _w(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case mS:e="ENVMAP_BLENDING_MIX";break;case gS:e="ENVMAP_BLENDING_ADD";break}return e}function yw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mw(t),u=gw(t),h=vw(t),f=_w(t),d=yw(t),p=t.isWebGL2?"":ow(t),g=aw(t),y=lw(s),m=r.createProgram();let c,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ts).join(`
`),c.length>0&&(c+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ts).join(`
`),v.length>0&&(v+=`
`)):(c=[Cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),v=[p,Cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?tt.tonemapping_pars_fragment:"",t.toneMapping!==cr?sw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,rw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=Xf(o),o=Tm(o,t),o=wm(o,t),a=Xf(a),a=Tm(a,t),a=wm(a,t),o=Am(o),a=Am(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,c=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=_+c+o,T=_+v+a,A=Mm(r,r.VERTEX_SHADER,S),w=Mm(r,r.FRAGMENT_SHADER,T);r.attachShader(m,A),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function F(q){if(n.debug.checkShaderErrors){const ie=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(A).trim(),G=r.getShaderInfoLog(w).trim();let Q=!0,ne=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,A,w);else{const O=Em(r,A,"vertex"),V=Em(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+O+`
`+V)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(U===""||G==="")&&(ne=!1);ne&&(q.diagnostics={runnable:Q,programLog:ie,vertexShader:{log:U,prefix:c},fragmentShader:{log:G,prefix:v}})}r.deleteShader(A),r.deleteShader(w),M=new Tl(r,m),C=uw(r,m)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(m,ew)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=w,this}let Sw=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ew(e),t.set(e,i)),i}}class Ew{constructor(e){this.id=Sw++,this.code=e,this.usedTimes=0}}function Tw(n,e,t,i,r,s,o){const a=new N0,l=new Mw,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,C,H,q,ie){const U=q.fog,G=ie.geometry,Q=M.isMeshStandardMaterial?q.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),O=ne&&ne.mapping===_u?ne.image.height:null,V=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const X=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=X!==void 0?X.length:0;let se=0;G.morphAttributes.position!==void 0&&(se=1),G.morphAttributes.normal!==void 0&&(se=2),G.morphAttributes.color!==void 0&&(se=3);let Z,re,ve,Ee;if(V){const tn=mi[V];Z=tn.vertexShader,re=tn.fragmentShader}else Z=M.vertexShader,re=M.fragmentShader,l.update(M),ve=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const we=n.getRenderTarget(),Ge=ie.isInstancedMesh===!0,We=ie.isBatchedMesh===!0,Ce=!!M.map,at=!!M.matcap,j=!!ne,en=!!M.aoMap,Ue=!!M.lightMap,Fe=!!M.bumpMap,Le=!!M.normalMap,xt=!!M.displacementMap,Ye=!!M.emissiveMap,P=!!M.metalnessMap,E=!!M.roughnessMap,W=M.anisotropy>0,fe=M.clearcoat>0,ce=M.iridescence>0,pe=M.sheen>0,De=M.transmission>0,Se=W&&!!M.anisotropyMap,Re=fe&&!!M.clearcoatMap,Be=fe&&!!M.clearcoatNormalMap,qe=fe&&!!M.clearcoatRoughnessMap,ue=ce&&!!M.iridescenceMap,ft=ce&&!!M.iridescenceThicknessMap,Qe=pe&&!!M.sheenColorMap,je=pe&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,be=!!M.specularColorMap,$e=!!M.specularIntensityMap,lt=De&&!!M.transmissionMap,Tt=De&&!!M.thicknessMap,Je=!!M.gradientMap,me=!!M.alphaMap,N=M.alphaTest>0,xe=!!M.alphaHash,ye=!!M.extensions,Xe=!!G.attributes.uv1,Oe=!!G.attributes.uv2,mt=!!G.attributes.uv3;let gt=cr;return M.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(gt=n.toneMapping),{isWebGL2:h,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:re,defines:M.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:We,instancing:Ge,instancingColor:Ge&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:ki,map:Ce,matcap:at,envMap:j,envMapMode:j&&ne.mapping,envMapCubeUVHeight:O,aoMap:en,lightMap:Ue,bumpMap:Fe,normalMap:Le,displacementMap:d&&xt,emissiveMap:Ye,normalMapObjectSpace:Le&&M.normalMapType===NS,normalMapTangentSpace:Le&&M.normalMapType===A0,metalnessMap:P,roughnessMap:E,anisotropy:W,anisotropyMap:Se,clearcoat:fe,clearcoatMap:Re,clearcoatNormalMap:Be,clearcoatRoughnessMap:qe,iridescence:ce,iridescenceMap:ue,iridescenceThicknessMap:ft,sheen:pe,sheenColorMap:Qe,sheenRoughnessMap:je,specularMap:Ie,specularColorMap:be,specularIntensityMap:$e,transmission:De,transmissionMap:lt,thicknessMap:Tt,gradientMap:Je,opaque:M.transparent===!1&&M.blending===Ls,alphaMap:me,alphaTest:N,alphaHash:xe,combine:M.combine,mapUv:Ce&&y(M.map.channel),aoMapUv:en&&y(M.aoMap.channel),lightMapUv:Ue&&y(M.lightMap.channel),bumpMapUv:Fe&&y(M.bumpMap.channel),normalMapUv:Le&&y(M.normalMap.channel),displacementMapUv:xt&&y(M.displacementMap.channel),emissiveMapUv:Ye&&y(M.emissiveMap.channel),metalnessMapUv:P&&y(M.metalnessMap.channel),roughnessMapUv:E&&y(M.roughnessMap.channel),anisotropyMapUv:Se&&y(M.anisotropyMap.channel),clearcoatMapUv:Re&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Be&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&y(M.sheenRoughnessMap.channel),specularMapUv:Ie&&y(M.specularMap.channel),specularColorMapUv:be&&y(M.specularColorMap.channel),specularIntensityMapUv:$e&&y(M.specularIntensityMap.channel),transmissionMapUv:lt&&y(M.transmissionMap.channel),thicknessMapUv:Tt&&y(M.thicknessMap.channel),alphaMapUv:me&&y(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Xe,vertexUv2s:Oe,vertexUv3s:mt,pointsUvs:ie.isPoints===!0&&!!G.attributes.uv&&(Ce||me),fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===At,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vi,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ye&&M.extensions.derivatives===!0,extensionFragDepth:ye&&M.extensions.fragDepth===!0,extensionDrawBuffers:ye&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)C.push(H),C.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(v(C,M),_(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function v(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function _(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const C=g[M.type];let H;if(C){const q=mi[C];H=oM.clone(q.uniforms)}else H=M.uniforms;return H}function T(M,C){let H;for(let q=0,ie=u.length;q<ie;q++){const U=u[q];if(U.cacheKey===C){H=U,++H.usedTimes;break}}return H===void 0&&(H=new xw(n,C,M,s),u.push(H)),H}function A(M){if(--M.usedTimes===0){const C=u.indexOf(M);u[C]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:F}}function ww(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Aw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,y,m){let c=n[e];return c===void 0?(c={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},n[e]=c):(c.id=f.id,c.object=f,c.geometry=d,c.material=p,c.groupOrder=g,c.renderOrder=f.renderOrder,c.z=y,c.group=m),e++,c}function a(f,d,p,g,y,m){const c=o(f,d,p,g,y,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):t.push(c)}function l(f,d,p,g,y,m){const c=o(f,d,p,g,y,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):t.unshift(c)}function u(f,d){t.length>1&&t.sort(f||Aw),i.length>1&&i.sort(d||Rm),r.length>1&&r.sort(d||Rm)}function h(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function Cw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new bm,n.set(i,[o])):r>=s.length?(o=new bm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new nt};break;case"SpotLight":t={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function bw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Pw=0;function Lw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dw(n,e){const t=new Rw,i=bw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new B);const s=new B,o=new Dt,a=new Dt;function l(h,f){let d=0,p=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let y=0,m=0,c=0,v=0,_=0,S=0,T=0,A=0,w=0,F=0,M=0;h.sort(Lw);const C=f===!0?Math.PI:1;for(let q=0,ie=h.length;q<ie;q++){const U=h[q],G=U.color,Q=U.intensity,ne=U.distance,O=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=G.r*Q*C,p+=G.g*Q*C,g+=G.b*Q*C;else if(U.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(U.sh.coefficients[V],Q);M++}else if(U.isDirectionalLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const X=U.shadow,ee=i.get(U);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,r.directionalShadow[y]=ee,r.directionalShadowMap[y]=O,r.directionalShadowMatrix[y]=U.shadow.matrix,S++}r.directional[y]=V,y++}else if(U.isSpotLight){const V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(G).multiplyScalar(Q*C),V.distance=ne,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,r.spot[c]=V;const X=U.shadow;if(U.map&&(r.spotLightMap[w]=U.map,w++,X.updateMatrices(U),U.castShadow&&F++),r.spotLightMatrix[c]=X.matrix,U.castShadow){const ee=i.get(U);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,r.spotShadow[c]=ee,r.spotShadowMap[c]=O,A++}c++}else if(U.isRectAreaLight){const V=t.get(U);V.color.copy(G).multiplyScalar(Q),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=V,v++}else if(U.isPointLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*C),V.distance=U.distance,V.decay=U.decay,U.castShadow){const X=U.shadow,ee=i.get(U);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,r.pointShadow[m]=ee,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=U.shadow.matrix,T++}r.point[m]=V,m++}else if(U.isHemisphereLight){const V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(Q*C),V.groundColor.copy(U.groundColor).multiplyScalar(Q*C),r.hemi[_]=V,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const H=r.hash;(H.directionalLength!==y||H.pointLength!==m||H.spotLength!==c||H.rectAreaLength!==v||H.hemiLength!==_||H.numDirectionalShadows!==S||H.numPointShadows!==T||H.numSpotShadows!==A||H.numSpotMaps!==w||H.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=c,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=A+w-F,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=M,H.directionalLength=y,H.pointLength=m,H.spotLength=c,H.rectAreaLength=v,H.hemiLength=_,H.numDirectionalShadows=S,H.numPointShadows=T,H.numSpotShadows=A,H.numSpotMaps=w,H.numLightProbes=M,r.version=Pw++)}function u(h,f){let d=0,p=0,g=0,y=0,m=0;const c=f.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){const S=h[v];if(S.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),d++}else if(S.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),g++}else if(S.isRectAreaLight){const T=r.rectArea[y];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),a.identity(),o.copy(S.matrixWorld),o.premultiply(c),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),p++}else if(S.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:r}}function Pm(n,e){const t=new Dw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Nw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Pm(n,e),t.set(s,[l])):o>=a.length?(l=new Pm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Iw extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uw extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ow=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kw(n,e,t){let i=new Yh;const r=new ct,s=new ct,o=new Lt,a=new Iw({depthPacking:DS}),l=new Uw,u={},h=t.maxTextureSize,f={[Oi]:_n,[_n]:Oi,[vi]:vi},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Fw,fragmentShader:Ow}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new An(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m0;let c=this.type;this.render=function(A,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),C=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),q=n.state;q.setBlending(ur),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ie=c!==Ai&&this.type===Ai,U=c===Ai&&this.type!==Ai;for(let G=0,Q=A.length;G<Q;G++){const ne=A[G],O=ne.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const V=O.getFrameExtents();if(r.multiply(V),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/V.x),r.x=s.x*V.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/V.y),r.y=s.y*V.y,O.mapSize.y=s.y)),O.map===null||ie===!0||U===!0){const ee=this.type!==Ai?{minFilter:on,magFilter:on}:{};O.map!==null&&O.map.dispose(),O.map=new Hr(r.x,r.y,ee),O.map.texture.name=ne.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const X=O.getViewportCount();for(let ee=0;ee<X;ee++){const se=O.getViewport(ee);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),q.viewport(o),O.updateMatrices(ne,ee),i=O.getFrustum(),S(w,F,O.camera,ne,this.type)}O.isPointLightShadow!==!0&&this.type===Ai&&v(O,F),O.needsUpdate=!1}c=this.type,m.needsUpdate=!1,n.setRenderTarget(M,C,H)};function v(A,w){const F=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,F,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,F,p,y,null)}function _(A,w,F,M){let C=null;const H=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)C=H;else if(C=F.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const q=C.uuid,ie=w.uuid;let U=u[q];U===void 0&&(U={},u[q]=U);let G=U[ie];G===void 0&&(G=C.clone(),U[ie]=G,w.addEventListener("dispose",T)),C=G}if(C.visible=w.visible,C.wireframe=w.wireframe,M===Ai?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:f[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=n.properties.get(C);q.light=F}return C}function S(A,w,F,M,C){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===Ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const ie=e.update(A),U=A.material;if(Array.isArray(U)){const G=ie.groups;for(let Q=0,ne=G.length;Q<ne;Q++){const O=G[Q],V=U[O.materialIndex];if(V&&V.visible){const X=_(A,V,M,C);A.onBeforeShadow(n,A,w,F,ie,X,O),n.renderBufferDirect(F,null,ie,X,A,O),A.onAfterShadow(n,A,w,F,ie,X,O)}}}else if(U.visible){const G=_(A,U,M,C);A.onBeforeShadow(n,A,w,F,ie,G,null),n.renderBufferDirect(F,null,ie,G,A,null),A.onAfterShadow(n,A,w,F,ie,G,null)}}const q=A.children;for(let ie=0,U=q.length;ie<U;ie++)S(q[ie],w,F,M,C)}function T(A){A.target.removeEventListener("dispose",T);for(const F in u){const M=u[F],C=A.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}function zw(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const xe=new Lt;let ye=null;const Xe=new Lt(0,0,0,0);return{setMask:function(Oe){ye!==Oe&&!N&&(n.colorMask(Oe,Oe,Oe,Oe),ye=Oe)},setLocked:function(Oe){N=Oe},setClear:function(Oe,mt,gt,Bt,tn){tn===!0&&(Oe*=Bt,mt*=Bt,gt*=Bt),xe.set(Oe,mt,gt,Bt),Xe.equals(xe)===!1&&(n.clearColor(Oe,mt,gt,Bt),Xe.copy(xe))},reset:function(){N=!1,ye=null,Xe.set(-1,0,0,0)}}}function s(){let N=!1,xe=null,ye=null,Xe=null;return{setTest:function(Oe){Oe?We(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Oe){xe!==Oe&&!N&&(n.depthMask(Oe),xe=Oe)},setFunc:function(Oe){if(ye!==Oe){switch(Oe){case lS:n.depthFunc(n.NEVER);break;case uS:n.depthFunc(n.ALWAYS);break;case cS:n.depthFunc(n.LESS);break;case ql:n.depthFunc(n.LEQUAL);break;case fS:n.depthFunc(n.EQUAL);break;case hS:n.depthFunc(n.GEQUAL);break;case dS:n.depthFunc(n.GREATER);break;case pS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Oe}},setLocked:function(Oe){N=Oe},setClear:function(Oe){Xe!==Oe&&(n.clearDepth(Oe),Xe=Oe)},reset:function(){N=!1,xe=null,ye=null,Xe=null}}}function o(){let N=!1,xe=null,ye=null,Xe=null,Oe=null,mt=null,gt=null,Bt=null,tn=null;return{setTest:function(vt){N||(vt?We(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(vt){xe!==vt&&!N&&(n.stencilMask(vt),xe=vt)},setFunc:function(vt,nn,Gn){(ye!==vt||Xe!==nn||Oe!==Gn)&&(n.stencilFunc(vt,nn,Gn),ye=vt,Xe=nn,Oe=Gn)},setOp:function(vt,nn,Gn){(mt!==vt||gt!==nn||Bt!==Gn)&&(n.stencilOp(vt,nn,Gn),mt=vt,gt=nn,Bt=Gn)},setLocked:function(vt){N=vt},setClear:function(vt){tn!==vt&&(n.clearStencil(vt),tn=vt)},reset:function(){N=!1,xe=null,ye=null,Xe=null,Oe=null,mt=null,gt=null,Bt=null,tn=null}}}const a=new r,l=new s,u=new o,h=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,y=[],m=null,c=!1,v=null,_=null,S=null,T=null,A=null,w=null,F=null,M=new nt(0,0,0),C=0,H=!1,q=null,ie=null,U=null,G=null,Q=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=V>=2);let ee=null,se={};const Z=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),ve=new Lt().fromArray(Z),Ee=new Lt().fromArray(re);function we(N,xe,ye,Xe){const Oe=new Uint8Array(4),mt=n.createTexture();n.bindTexture(N,mt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<ye;gt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,Xe,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(xe+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return mt}const Ge={};Ge[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),Ge[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ge[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),We(n.DEPTH_TEST),l.setFunc(ql),Ye(!1),P(fp),We(n.CULL_FACE),Le(ur);function We(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Ce(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function at(N,xe){return p[N]!==xe?(n.bindFramebuffer(N,xe),p[N]=xe,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=xe),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function j(N,xe){let ye=y,Xe=!1;if(N)if(ye=g.get(xe),ye===void 0&&(ye=[],g.set(xe,ye)),N.isWebGLMultipleRenderTargets){const Oe=N.texture;if(ye.length!==Oe.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,gt=Oe.length;mt<gt;mt++)ye[mt]=n.COLOR_ATTACHMENT0+mt;ye.length=Oe.length,Xe=!0}}else ye[0]!==n.COLOR_ATTACHMENT0&&(ye[0]=n.COLOR_ATTACHMENT0,Xe=!0);else ye[0]!==n.BACK&&(ye[0]=n.BACK,Xe=!0);Xe&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function en(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const Ue={[Ar]:n.FUNC_ADD,[Yx]:n.FUNC_SUBTRACT,[Kx]:n.FUNC_REVERSE_SUBTRACT};if(i)Ue[mp]=n.MIN,Ue[gp]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ue[mp]=N.MIN_EXT,Ue[gp]=N.MAX_EXT)}const Fe={[qx]:n.ZERO,[$x]:n.ONE,[Zx]:n.SRC_COLOR,[Ff]:n.SRC_ALPHA,[iS]:n.SRC_ALPHA_SATURATE,[tS]:n.DST_COLOR,[Jx]:n.DST_ALPHA,[Qx]:n.ONE_MINUS_SRC_COLOR,[Of]:n.ONE_MINUS_SRC_ALPHA,[nS]:n.ONE_MINUS_DST_COLOR,[eS]:n.ONE_MINUS_DST_ALPHA,[rS]:n.CONSTANT_COLOR,[sS]:n.ONE_MINUS_CONSTANT_COLOR,[oS]:n.CONSTANT_ALPHA,[aS]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(N,xe,ye,Xe,Oe,mt,gt,Bt,tn,vt){if(N===ur){c===!0&&(Ce(n.BLEND),c=!1);return}if(c===!1&&(We(n.BLEND),c=!0),N!==jx){if(N!==v||vt!==H){if((_!==Ar||A!==Ar)&&(n.blendEquation(n.FUNC_ADD),_=Ar,A=Ar),vt)switch(N){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hp:n.blendFunc(n.ONE,n.ONE);break;case dp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,T=null,w=null,F=null,M.set(0,0,0),C=0,v=N,H=vt}return}Oe=Oe||xe,mt=mt||ye,gt=gt||Xe,(xe!==_||Oe!==A)&&(n.blendEquationSeparate(Ue[xe],Ue[Oe]),_=xe,A=Oe),(ye!==S||Xe!==T||mt!==w||gt!==F)&&(n.blendFuncSeparate(Fe[ye],Fe[Xe],Fe[mt],Fe[gt]),S=ye,T=Xe,w=mt,F=gt),(Bt.equals(M)===!1||tn!==C)&&(n.blendColor(Bt.r,Bt.g,Bt.b,tn),M.copy(Bt),C=tn),v=N,H=!1}function xt(N,xe){N.side===vi?Ce(n.CULL_FACE):We(n.CULL_FACE);let ye=N.side===_n;xe&&(ye=!ye),Ye(ye),N.blending===Ls&&N.transparent===!1?Le(ur):Le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Xe=N.stencilWrite;u.setTest(Xe),Xe&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),W(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?We(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(N){q!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),q=N)}function P(N){N!==Vx?(We(n.CULL_FACE),N!==ie&&(N===fp?n.cullFace(n.BACK):N===Wx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),ie=N}function E(N){N!==U&&(O&&n.lineWidth(N),U=N)}function W(N,xe,ye){N?(We(n.POLYGON_OFFSET_FILL),(G!==xe||Q!==ye)&&(n.polygonOffset(xe,ye),G=xe,Q=ye)):Ce(n.POLYGON_OFFSET_FILL)}function fe(N){N?We(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function ce(N){N===void 0&&(N=n.TEXTURE0+ne-1),ee!==N&&(n.activeTexture(N),ee=N)}function pe(N,xe,ye){ye===void 0&&(ee===null?ye=n.TEXTURE0+ne-1:ye=ee);let Xe=se[ye];Xe===void 0&&(Xe={type:void 0,texture:void 0},se[ye]=Xe),(Xe.type!==N||Xe.texture!==xe)&&(ee!==ye&&(n.activeTexture(ye),ee=ye),n.bindTexture(N,xe||Ge[N]),Xe.type=N,Xe.texture=xe)}function De(){const N=se[ee];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(N){ve.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ve.copy(N))}function lt(N){Ee.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ee.copy(N))}function Tt(N,xe){let ye=f.get(xe);ye===void 0&&(ye=new WeakMap,f.set(xe,ye));let Xe=ye.get(N);Xe===void 0&&(Xe=n.getUniformBlockIndex(xe,N.name),ye.set(N,Xe))}function Je(N,xe){const Xe=f.get(xe).get(N);h.get(xe)!==Xe&&(n.uniformBlockBinding(xe,Xe,N.__bindingPointIndex),h.set(xe,Xe))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,se={},p={},g=new WeakMap,y=[],m=null,c=!1,v=null,_=null,S=null,T=null,A=null,w=null,F=null,M=new nt(0,0,0),C=0,H=!1,q=null,ie=null,U=null,G=null,Q=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:We,disable:Ce,bindFramebuffer:at,drawBuffers:j,useProgram:en,setBlending:Le,setMaterial:xt,setFlipSided:Ye,setCullFace:P,setLineWidth:E,setPolygonOffset:W,setScissorTest:fe,activeTexture:ce,bindTexture:pe,unbindTexture:De,compressedTexImage2D:Se,compressedTexImage3D:Re,texImage2D:Ie,texImage3D:be,updateUBOMapping:Tt,uniformBlockBinding:Je,texStorage2D:Qe,texStorage3D:je,texSubImage2D:Be,texSubImage3D:qe,compressedTexSubImage2D:ue,compressedTexSubImage3D:ft,scissor:$e,viewport:lt,reset:me}}function Bw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):eu("canvas")}function y(P,E,W,fe){let ce=1;if((P.width>fe||P.height>fe)&&(ce=fe/Math.max(P.width,P.height)),ce<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const pe=E?Wf:Math.floor,De=pe(ce*P.width),Se=pe(ce*P.height);f===void 0&&(f=g(De,Se));const Re=W?g(De,Se):f;return Re.width=De,Re.height=Se,Re.getContext("2d").drawImage(P,0,0,De,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+De+"x"+Se+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return jp(P.width)&&jp(P.height)}function c(P){return a?!1:P.wrapS!==Fn||P.wrapT!==Fn||P.minFilter!==on&&P.minFilter!==Yn}function v(P,E){return P.generateMipmaps&&E&&P.minFilter!==on&&P.minFilter!==Yn}function _(P){n.generateMipmap(P)}function S(P,E,W,fe,ce=!1){if(a===!1)return E;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=E;if(E===n.RED&&(W===n.FLOAT&&(pe=n.R32F),W===n.HALF_FLOAT&&(pe=n.R16F),W===n.UNSIGNED_BYTE&&(pe=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(pe=n.R8UI),W===n.UNSIGNED_SHORT&&(pe=n.R16UI),W===n.UNSIGNED_INT&&(pe=n.R32UI),W===n.BYTE&&(pe=n.R8I),W===n.SHORT&&(pe=n.R16I),W===n.INT&&(pe=n.R32I)),E===n.RG&&(W===n.FLOAT&&(pe=n.RG32F),W===n.HALF_FLOAT&&(pe=n.RG16F),W===n.UNSIGNED_BYTE&&(pe=n.RG8)),E===n.RGBA){const De=ce?$l:_t.getTransfer(fe);W===n.FLOAT&&(pe=n.RGBA32F),W===n.HALF_FLOAT&&(pe=n.RGBA16F),W===n.UNSIGNED_BYTE&&(pe=De===At?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function T(P,E,W){return v(P,W)===!0||P.isFramebufferTexture&&P.minFilter!==on&&P.minFilter!==Yn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){return P===on||P===vp||P===ic?n.NEAREST:n.LINEAR}function w(P){const E=P.target;E.removeEventListener("dispose",w),M(E),E.isVideoTexture&&h.delete(E)}function F(P){const E=P.target;E.removeEventListener("dispose",F),H(E)}function M(P){const E=i.get(P);if(E.__webglInit===void 0)return;const W=P.source,fe=d.get(W);if(fe){const ce=fe[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&C(P),Object.keys(fe).length===0&&d.delete(W)}i.remove(P)}function C(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const W=P.source,fe=d.get(W);delete fe[E.__cacheKey],o.memory.textures--}function H(P){const E=P.texture,W=i.get(P),fe=i.get(E);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(W.__webglFramebuffer[ce]))for(let pe=0;pe<W.__webglFramebuffer[ce].length;pe++)n.deleteFramebuffer(W.__webglFramebuffer[ce][pe]);else n.deleteFramebuffer(W.__webglFramebuffer[ce]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[ce])}else{if(Array.isArray(W.__webglFramebuffer))for(let ce=0;ce<W.__webglFramebuffer.length;ce++)n.deleteFramebuffer(W.__webglFramebuffer[ce]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ce=0;ce<W.__webglColorRenderbuffer.length;ce++)W.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[ce]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ce=0,pe=E.length;ce<pe;ce++){const De=i.get(E[ce]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(E[ce])}i.remove(E),i.remove(P)}let q=0;function ie(){q=0}function U(){const P=q;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),q+=1,P}function G(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Q(P,E){const W=i.get(P);if(P.isVideoTexture&&xt(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const fe=P.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(W,P,E);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function ne(P,E){const W=i.get(P);if(P.version>0&&W.__version!==P.version){ve(W,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function O(P,E){const W=i.get(P);if(P.version>0&&W.__version!==P.version){ve(W,P,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function V(P,E){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Ee(W,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}const X={[Bf]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Hf]:n.MIRRORED_REPEAT},ee={[on]:n.NEAREST,[vp]:n.NEAREST_MIPMAP_NEAREST,[ic]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[MS]:n.LINEAR_MIPMAP_NEAREST,[na]:n.LINEAR_MIPMAP_LINEAR},se={[IS]:n.NEVER,[BS]:n.ALWAYS,[US]:n.LESS,[C0]:n.LEQUAL,[FS]:n.EQUAL,[zS]:n.GEQUAL,[OS]:n.GREATER,[kS]:n.NOTEQUAL};function Z(P,E,W){if(W?(n.texParameteri(P,n.TEXTURE_WRAP_S,X[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,X[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,X[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ee[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ee[E.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Fn||E.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,A(E.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==on&&E.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===on||E.minFilter!==ic&&E.minFilter!==na||E.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ia&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(P,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function re(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const fe=E.source;let ce=d.get(fe);ce===void 0&&(ce={},d.set(fe,ce));const pe=G(E);if(pe!==P.__cacheKey){ce[pe]===void 0&&(ce[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ce[pe].usedTimes++;const De=ce[P.__cacheKey];De!==void 0&&(ce[P.__cacheKey].usedTimes--,De.usedTimes===0&&C(E)),P.__cacheKey=pe,P.__webglTexture=ce[pe].texture}return W}function ve(P,E,W){let fe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=n.TEXTURE_3D);const ce=re(P,E),pe=E.source;t.bindTexture(fe,P.__webglTexture,n.TEXTURE0+W);const De=i.get(pe);if(pe.version!==De.__version||ce===!0){t.activeTexture(n.TEXTURE0+W);const Se=_t.getPrimaries(_t.workingColorSpace),Re=E.colorSpace===Kn?null:_t.getPrimaries(E.colorSpace),Be=E.colorSpace===Kn||Se===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const qe=c(E)&&m(E.image)===!1;let ue=y(E.image,qe,!1,r.maxTextureSize);ue=Ye(E,ue);const ft=m(ue)||a,Qe=s.convert(E.format,E.colorSpace);let je=s.convert(E.type),Ie=S(E.internalFormat,Qe,je,E.colorSpace,E.isVideoTexture);Z(fe,E,ft);let be;const $e=E.mipmaps,lt=a&&E.isVideoTexture!==!0&&Ie!==T0,Tt=De.__version===void 0||ce===!0,Je=T(E,ue,ft);if(E.isDepthTexture)Ie=n.DEPTH_COMPONENT,a?E.type===er?Ie=n.DEPTH_COMPONENT32F:E.type===Ji?Ie=n.DEPTH_COMPONENT24:E.type===Nr?Ie=n.DEPTH24_STENCIL8:Ie=n.DEPTH_COMPONENT16:E.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ir&&Ie===n.DEPTH_COMPONENT&&E.type!==Wh&&E.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ji,je=s.convert(E.type)),E.format===Vs&&Ie===n.DEPTH_COMPONENT&&(Ie=n.DEPTH_STENCIL,E.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Nr,je=s.convert(E.type))),Tt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,Ie,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Qe,je,null));else if(E.isDataTexture)if($e.length>0&&ft){lt&&Tt&&t.texStorage2D(n.TEXTURE_2D,Je,Ie,$e[0].width,$e[0].height);for(let me=0,N=$e.length;me<N;me++)be=$e[me],lt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,Qe,je,be.data):t.texImage2D(n.TEXTURE_2D,me,Ie,be.width,be.height,0,Qe,je,be.data);E.generateMipmaps=!1}else lt?(Tt&&t.texStorage2D(n.TEXTURE_2D,Je,Ie,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Qe,je,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Qe,je,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){lt&&Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Ie,$e[0].width,$e[0].height,ue.depth);for(let me=0,N=$e.length;me<N;me++)be=$e[me],E.format!==li?Qe!==null?lt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ue.depth,Qe,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Ie,be.width,be.height,ue.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ue.depth,Qe,je,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Ie,be.width,be.height,ue.depth,0,Qe,je,be.data)}else{lt&&Tt&&t.texStorage2D(n.TEXTURE_2D,Je,Ie,$e[0].width,$e[0].height);for(let me=0,N=$e.length;me<N;me++)be=$e[me],E.format!==li?Qe!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,Qe,be.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Ie,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,Qe,je,be.data):t.texImage2D(n.TEXTURE_2D,me,Ie,be.width,be.height,0,Qe,je,be.data)}else if(E.isDataArrayTexture)lt?(Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Ie,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Qe,je,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,Qe,je,ue.data);else if(E.isData3DTexture)lt?(Tt&&t.texStorage3D(n.TEXTURE_3D,Je,Ie,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Qe,je,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,Qe,je,ue.data);else if(E.isFramebufferTexture){if(Tt)if(lt)t.texStorage2D(n.TEXTURE_2D,Je,Ie,ue.width,ue.height);else{let me=ue.width,N=ue.height;for(let xe=0;xe<Je;xe++)t.texImage2D(n.TEXTURE_2D,xe,Ie,me,N,0,Qe,je,null),me>>=1,N>>=1}}else if($e.length>0&&ft){lt&&Tt&&t.texStorage2D(n.TEXTURE_2D,Je,Ie,$e[0].width,$e[0].height);for(let me=0,N=$e.length;me<N;me++)be=$e[me],lt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Qe,je,be):t.texImage2D(n.TEXTURE_2D,me,Ie,Qe,je,be);E.generateMipmaps=!1}else lt?(Tt&&t.texStorage2D(n.TEXTURE_2D,Je,Ie,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Qe,je,ue)):t.texImage2D(n.TEXTURE_2D,0,Ie,Qe,je,ue);v(E,ft)&&_(fe),De.__version=pe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ee(P,E,W){if(E.image.length!==6)return;const fe=re(P,E),ce=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);const pe=i.get(ce);if(ce.version!==pe.__version||fe===!0){t.activeTexture(n.TEXTURE0+W);const De=_t.getPrimaries(_t.workingColorSpace),Se=E.colorSpace===Kn?null:_t.getPrimaries(E.colorSpace),Re=E.colorSpace===Kn||De===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Be=E.isCompressedTexture||E.image[0].isCompressedTexture,qe=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let me=0;me<6;me++)!Be&&!qe?ue[me]=y(E.image[me],!1,!0,r.maxCubemapSize):ue[me]=qe?E.image[me].image:E.image[me],ue[me]=Ye(E,ue[me]);const ft=ue[0],Qe=m(ft)||a,je=s.convert(E.format,E.colorSpace),Ie=s.convert(E.type),be=S(E.internalFormat,je,Ie,E.colorSpace),$e=a&&E.isVideoTexture!==!0,lt=pe.__version===void 0||fe===!0;let Tt=T(E,ft,Qe);Z(n.TEXTURE_CUBE_MAP,E,Qe);let Je;if(Be){$e&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,be,ft.width,ft.height);for(let me=0;me<6;me++){Je=ue[me].mipmaps;for(let N=0;N<Je.length;N++){const xe=Je[N];E.format!==li?je!==null?$e?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,xe.width,xe.height,je,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,xe.width,xe.height,je,Ie,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,be,xe.width,xe.height,0,je,Ie,xe.data)}}}else{Je=E.mipmaps,$e&&lt&&(Je.length>0&&Tt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,be,ue[0].width,ue[0].height));for(let me=0;me<6;me++)if(qe){$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ue[me].width,ue[me].height,je,Ie,ue[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,be,ue[me].width,ue[me].height,0,je,Ie,ue[me].data);for(let N=0;N<Je.length;N++){const ye=Je[N].image[me].image;$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,ye.width,ye.height,je,Ie,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,be,ye.width,ye.height,0,je,Ie,ye.data)}}else{$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,je,Ie,ue[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,be,je,Ie,ue[me]);for(let N=0;N<Je.length;N++){const xe=Je[N];$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,je,Ie,xe.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,be,je,Ie,xe.image[me])}}}v(E,Qe)&&_(n.TEXTURE_CUBE_MAP),pe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function we(P,E,W,fe,ce,pe){const De=s.convert(W.format,W.colorSpace),Se=s.convert(W.type),Re=S(W.internalFormat,De,Se,W.colorSpace);if(!i.get(E).__hasExternalTextures){const qe=Math.max(1,E.width>>pe),ue=Math.max(1,E.height>>pe);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,pe,Re,qe,ue,E.depth,0,De,Se,null):t.texImage2D(ce,pe,Re,qe,ue,0,De,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Le(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ce,i.get(W).__webglTexture,0,Fe(E)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,ce,i.get(W).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(P,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let fe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||Le(E)){const ce=E.depthTexture;ce&&ce.isDepthTexture&&(ce.type===er?fe=n.DEPTH_COMPONENT32F:ce.type===Ji&&(fe=n.DEPTH_COMPONENT24));const pe=Fe(E);Le(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,fe,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,fe,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const fe=Fe(E);W&&Le(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,E.width,E.height):Le(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const fe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ce=0;ce<fe.length;ce++){const pe=fe[ce],De=s.convert(pe.format,pe.colorSpace),Se=s.convert(pe.type),Re=S(pe.internalFormat,De,Se,pe.colorSpace),Be=Fe(E);W&&Le(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Re,E.width,E.height):Le(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,Re,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Re,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const fe=i.get(E.depthTexture).__webglTexture,ce=Fe(E);if(E.depthTexture.format===Ir)Le(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Vs)Le(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const E=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");We(E.__webglFramebuffer,P)}else if(W){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]=n.createRenderbuffer(),Ge(E.__webglDepthbuffer[fe],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ge(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(P,E,W){const fe=i.get(P);E!==void 0&&we(fe.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ce(P)}function j(P){const E=P.texture,W=i.get(P),fe=i.get(E);P.addEventListener("dispose",F),P.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=E.version,o.memory.textures++);const ce=P.isWebGLCubeRenderTarget===!0,pe=P.isWebGLMultipleRenderTargets===!0,De=m(P)||a;if(ce){W.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Se]=[];for(let Re=0;Re<E.mipmaps.length;Re++)W.__webglFramebuffer[Se][Re]=n.createFramebuffer()}else W.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)W.__webglFramebuffer[Se]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(pe)if(r.drawBuffers){const Se=P.texture;for(let Re=0,Be=Se.length;Re<Be;Re++){const qe=i.get(Se[Re]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Le(P)===!1){const Se=pe?E:[E];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Re=0;Re<Se.length;Re++){const Be=Se[Re];W.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Re]);const qe=s.convert(Be.format,Be.colorSpace),ue=s.convert(Be.type),ft=S(Be.internalFormat,qe,ue,Be.colorSpace,P.isXRRenderTarget===!0),Qe=Fe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,ft,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,W.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),Z(n.TEXTURE_CUBE_MAP,E,De);for(let Se=0;Se<6;Se++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)we(W.__webglFramebuffer[Se][Re],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re);else we(W.__webglFramebuffer[Se],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);v(E,De)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const Se=P.texture;for(let Re=0,Be=Se.length;Re<Be;Re++){const qe=Se[Re],ue=i.get(qe);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Z(n.TEXTURE_2D,qe,De),we(W.__webglFramebuffer,P,qe,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),v(qe,De)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?Se=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,fe.__webglTexture),Z(Se,E,De),a&&E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)we(W.__webglFramebuffer[Re],P,E,n.COLOR_ATTACHMENT0,Se,Re);else we(W.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,Se,0);v(E,De)&&_(Se),t.unbindTexture()}P.depthBuffer&&Ce(P)}function en(P){const E=m(P)||a,W=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let fe=0,ce=W.length;fe<ce;fe++){const pe=W[fe];if(v(pe,E)){const De=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(pe).__webglTexture;t.bindTexture(De,Se),_(De),t.unbindTexture()}}}function Ue(P){if(a&&P.samples>0&&Le(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],W=P.width,fe=P.height;let ce=n.COLOR_BUFFER_BIT;const pe=[],De=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(P),Re=P.isWebGLMultipleRenderTargets===!0;if(Re)for(let Be=0;Be<E.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Be=0;Be<E.length;Be++){pe.push(n.COLOR_ATTACHMENT0+Be),P.depthBuffer&&pe.push(De);const qe=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(qe===!1&&(P.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Be]),qe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[De]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[De])),Re){const ue=i.get(E[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,W,fe,0,0,W,fe,ce,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Be=0;Be<E.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Be]);const qe=i.get(E[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function Fe(P){return Math.min(r.maxSamples,P.samples)}function Le(P){const E=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Ye(P,E){const W=P.colorSpace,fe=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Gf||W!==ki&&W!==Kn&&(_t.getTransfer(W)===At?a===!1?e.has("EXT_sRGB")===!0&&fe===li?(P.format=Gf,P.minFilter=Yn,P.generateMipmaps=!1):E=b0.sRGBToLinear(E):(fe!==li||ce!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=U,this.resetTextureUnits=ie,this.setTexture2D=Q,this.setTexture2DArray=ne,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=at,this.setupRenderTarget=j,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Le}function Hw(n,e,t){const i=t.isWebGL2;function r(s,o=Kn){let a;const l=_t.getTransfer(o);if(s===fr)return n.UNSIGNED_BYTE;if(s===y0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===x0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ES)return n.BYTE;if(s===TS)return n.SHORT;if(s===Wh)return n.UNSIGNED_SHORT;if(s===_0)return n.INT;if(s===Ji)return n.UNSIGNED_INT;if(s===er)return n.FLOAT;if(s===ia)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wS)return n.ALPHA;if(s===li)return n.RGBA;if(s===AS)return n.LUMINANCE;if(s===CS)return n.LUMINANCE_ALPHA;if(s===Ir)return n.DEPTH_COMPONENT;if(s===Vs)return n.DEPTH_STENCIL;if(s===Gf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===RS)return n.RED;if(s===S0)return n.RED_INTEGER;if(s===bS)return n.RG;if(s===M0)return n.RG_INTEGER;if(s===E0)return n.RGBA_INTEGER;if(s===rc||s===sc||s===oc||s===ac)if(l===At)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_p||s===yp||s===xp||s===Sp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_p)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===T0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mp||s===Ep)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Mp)return l===At?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ep)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Tp||s===wp||s===Ap||s===Cp||s===Rp||s===bp||s===Pp||s===Lp||s===Dp||s===Np||s===Ip||s===Up||s===Fp||s===Op)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Tp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ap)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Np)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ip)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Up)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Op)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lc||s===kp||s===zp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lc)return l===At?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===PS||s===Bp||s===Hp||s===Gp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Gw extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rl extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vw={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ww extends qs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,f=null,d=null,p=null,g=null;const y=t.getContextAttributes();let m=null,c=null;const v=[],_=[],S=new ct;let T=null;const A=new Tn;A.layers.enable(1),A.viewport=new Lt;const w=new Tn;w.layers.enable(2),w.viewport=new Lt;const F=[A,w],M=new Gw;M.layers.enable(1),M.layers.enable(2);let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=v[Z];return re===void 0&&(re=new Nc,v[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=v[Z];return re===void 0&&(re=new Nc,v[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=v[Z];return re===void 0&&(re=new Nc,v[Z]=re),re.getHandSpace()};function q(Z){const re=_.indexOf(Z.inputSource);if(re===-1)return;const ve=v[re];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,u||o),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ie(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",U);for(let Z=0;Z<v.length;Z++){const re=_[Z];re!==null&&(_[Z]=null,v[Z].disconnect(re))}C=null,H=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,c=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),c=new Hr(p.framebufferWidth,p.framebufferHeight,{format:li,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let re=null,ve=null,Ee=null;y.depth&&(Ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?Vs:Ir,ve=y.stencil?Nr:Ji);const we={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),c=new Hr(d.textureWidth,d.textureHeight,{format:li,type:fr,depthTexture:new G0(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ge=e.properties.get(c);Ge.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(Z){for(let re=0;re<Z.removed.length;re++){const ve=Z.removed[re],Ee=_.indexOf(ve);Ee>=0&&(_[Ee]=null,v[Ee].disconnect(ve))}for(let re=0;re<Z.added.length;re++){const ve=Z.added[re];let Ee=_.indexOf(ve);if(Ee===-1){for(let Ge=0;Ge<v.length;Ge++)if(Ge>=_.length){_.push(ve),Ee=Ge;break}else if(_[Ge]===null){_[Ge]=ve,Ee=Ge;break}if(Ee===-1)break}const we=v[Ee];we&&we.connect(ve)}}const G=new B,Q=new B;function ne(Z,re,ve){G.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(ve.matrixWorld);const Ee=G.distanceTo(Q),we=re.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,We=we[14]/(we[10]-1),Ce=we[14]/(we[10]+1),at=(we[9]+1)/we[5],j=(we[9]-1)/we[5],en=(we[8]-1)/we[0],Ue=(Ge[8]+1)/Ge[0],Fe=We*en,Le=We*Ue,xt=Ee/(-en+Ue),Ye=xt*-en;re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ye),Z.translateZ(xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const P=We+xt,E=Ce+xt,W=Fe-Ye,fe=Le+(Ee-Ye),ce=at*Ce/E*P,pe=j*Ce/E*P;Z.projectionMatrix.makePerspective(W,fe,ce,pe,P,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function O(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;M.near=w.near=A.near=Z.near,M.far=w.far=A.far=Z.far,(C!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far);const re=Z.parent,ve=M.cameras;O(M,re);for(let Ee=0;Ee<ve.length;Ee++)O(ve[Ee],re);ve.length===2?ne(M,A,w):M.projectionMatrix.copy(A.projectionMatrix),V(Z,M,re)};function V(Z,re,ve){ve===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)};let X=null;function ee(Z,re){if(h=re.getViewerPose(u||o),g=re,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let Ee=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,Ee=!0);for(let we=0;we<ve.length;we++){const Ge=ve[we];let We=null;if(p!==null)We=p.getViewport(Ge);else{const at=f.getViewSubImage(d,Ge);We=at.viewport,we===0&&(e.setRenderTargetTextures(c,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(c))}let Ce=F[we];Ce===void 0&&(Ce=new Tn,Ce.layers.enable(we),Ce.viewport=new Lt,F[we]=Ce),Ce.matrix.fromArray(Ge.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ge.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(We.x,We.y,We.width,We.height),we===0&&(M.matrix.copy(Ce.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ee===!0&&M.cameras.push(Ce)}}for(let ve=0;ve<v.length;ve++){const Ee=_[ve],we=v[ve];Ee!==null&&we!==void 0&&we.update(Ee,re,u||o)}X&&X(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const se=new B0;se.setAnimationLoop(ee),this.setAnimationLoop=function(Z){X=Z},this.dispose=function(){}}}function Xw(n,e){function t(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,O0(n)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,v,_,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),f(m,c)):c.isMeshPhongMaterial?(s(m,c),h(m,c)):c.isMeshStandardMaterial?(s(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,S)):c.isMeshMatcapMaterial?(s(m,c),g(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),y(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,t(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,t(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,t(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===_n&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,t(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===_n&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,t(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,t(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*_,t(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,t(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=_*.5,c.map&&(m.map.value=c.map,t(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,t(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,t(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,t(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function h(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function f(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===_n&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function u(v,_){let S=r[v.id];S===void 0&&(g(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",m));const T=_.program;i.updateUBOMapping(v,T);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function h(v){const _=f();v.__bindingPointIndex=_;const S=n.createBuffer(),T=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],S=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,w=S.length;A<w;A++){const F=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,C=F.length;M<C;M++){const H=F[M];if(p(H,A,M,T)===!0){const q=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let U=0;for(let G=0;G<ie.length;G++){const Q=ie[G],ne=y(Q);typeof Q=="number"||typeof Q=="boolean"?(H.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,q+U,H.__data)):Q.isMatrix3?(H.__data[0]=Q.elements[0],H.__data[1]=Q.elements[1],H.__data[2]=Q.elements[2],H.__data[3]=0,H.__data[4]=Q.elements[3],H.__data[5]=Q.elements[4],H.__data[6]=Q.elements[5],H.__data[7]=0,H.__data[8]=Q.elements[6],H.__data[9]=Q.elements[7],H.__data[10]=Q.elements[8],H.__data[11]=0):(Q.toArray(H.__data,U),U+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,S,T){const A=v.value,w=_+"_"+S;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{const F=T[w];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return T[w]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(v){const _=v.uniforms;let S=0;const T=16;for(let w=0,F=_.length;w<F;w++){const M=Array.isArray(_[w])?_[w]:[_[w]];for(let C=0,H=M.length;C<H;C++){const q=M[C],ie=Array.isArray(q.value)?q.value:[q.value];for(let U=0,G=ie.length;U<G;U++){const Q=ie[U],ne=y(Q),O=S%T;O!==0&&T-O<ne.boundary&&(S+=T-O),q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=ne.storage}}}const A=S%T;return A>0&&(S+=T-A),v.__size=S,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class K0{constructor(e={}){const{canvas:t=GS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const c=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const _=this;let S=!1,T=0,A=0,w=null,F=-1,M=null;const C=new Lt,H=new Lt;let q=null;const ie=new nt(0);let U=0,G=t.width,Q=t.height,ne=1,O=null,V=null;const X=new Lt(0,0,G,Q),ee=new Lt(0,0,G,Q);let se=!1;const Z=new Yh;let re=!1,ve=!1,Ee=null;const we=new Dt,Ge=new ct,We=new B,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return w===null?ne:1}let j=i;function en(R,z){for(let K=0;K<R.length;K++){const $=R[K],Y=t.getContext($,z);if(Y!==null)return Y}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gh}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",xe,!1),j===null){const z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),j=en(z,R),j===null)throw en(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ue,Fe,Le,xt,Ye,P,E,W,fe,ce,pe,De,Se,Re,Be,qe,ue,ft,Qe,je,Ie,be,$e,lt;function Tt(){Ue=new nT(j),Fe=new $1(j,Ue,e),Ue.init(Fe),be=new Hw(j,Ue,Fe),Le=new zw(j,Ue,Fe),xt=new sT(j),Ye=new ww,P=new Bw(j,Ue,Le,Ye,Fe,be,xt),E=new Q1(_),W=new tT(_),fe=new dM(j,Fe),$e=new K1(j,Ue,fe,Fe),ce=new iT(j,fe,xt,$e),pe=new uT(j,ce,fe,xt),Qe=new lT(j,Fe,P),qe=new Z1(Ye),De=new Tw(_,E,W,Ue,Fe,$e,qe),Se=new Xw(_,Ye),Re=new Cw,Be=new Nw(Ue,Fe),ft=new Y1(_,E,W,Le,pe,d,l),ue=new kw(_,pe,Fe),lt=new jw(j,xt,Fe,Le),je=new q1(j,Ue,xt,Fe),Ie=new rT(j,Ue,xt,Fe),xt.programs=De.programs,_.capabilities=Fe,_.extensions=Ue,_.properties=Ye,_.renderLists=Re,_.shadowMap=ue,_.state=Le,_.info=xt}Tt();const Je=new Ww(_,j);this.xr=Je,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(G,Q,!1))},this.getSize=function(R){return R.set(G,Q)},this.setSize=function(R,z,K=!0){if(Je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,Q=z,t.width=Math.floor(R*ne),t.height=Math.floor(z*ne),K===!0&&(t.style.width=R+"px",t.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(G*ne,Q*ne).floor()},this.setDrawingBufferSize=function(R,z,K){G=R,Q=z,ne=K,t.width=Math.floor(R*K),t.height=Math.floor(z*K),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(X)},this.setViewport=function(R,z,K,$){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,z,K,$),Le.viewport(C.copy(X).multiplyScalar(ne).floor())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,z,K,$){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,z,K,$),Le.scissor(H.copy(ee).multiplyScalar(ne).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(R){Le.setScissorTest(se=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(R=!0,z=!0,K=!0){let $=0;if(R){let Y=!1;if(w!==null){const Te=w.texture.format;Y=Te===E0||Te===M0||Te===S0}if(Y){const Te=w.texture.type,Ne=Te===fr||Te===Ji||Te===Wh||Te===Nr||Te===y0||Te===x0,ke=ft.getClearColor(),ze=ft.getClearAlpha(),Ze=ke.r,Ve=ke.g,Ke=ke.b;Ne?(p[0]=Ze,p[1]=Ve,p[2]=Ke,p[3]=ze,j.clearBufferuiv(j.COLOR,0,p)):(g[0]=Ze,g[1]=Ve,g[2]=Ke,g[3]=ze,j.clearBufferiv(j.COLOR,0,g))}else $|=j.COLOR_BUFFER_BIT}z&&($|=j.DEPTH_BUFFER_BIT),K&&($|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Re.dispose(),Be.dispose(),Ye.dispose(),E.dispose(),W.dispose(),pe.dispose(),$e.dispose(),lt.dispose(),De.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",tn),Je.removeEventListener("sessionend",vt),Ee&&(Ee.dispose(),Ee=null),nn.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=xt.autoReset,z=ue.enabled,K=ue.autoUpdate,$=ue.needsUpdate,Y=ue.type;Tt(),xt.autoReset=R,ue.enabled=z,ue.autoUpdate=K,ue.needsUpdate=$,ue.type=Y}function xe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){const z=R.target;z.removeEventListener("dispose",ye),Xe(z)}function Xe(R){Oe(R),Ye.remove(R)}function Oe(R){const z=Ye.get(R).programs;z!==void 0&&(z.forEach(function(K){De.releaseProgram(K)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,K,$,Y,Te){z===null&&(z=Ce);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,ke=Au(R,z,K,$,Y);Le.setMaterial($,Ne);let ze=K.index,Ze=1;if($.wireframe===!0){if(ze=ce.getWireframeAttribute(K),ze===void 0)return;Ze=2}const Ve=K.drawRange,Ke=K.attributes.position;let St=Ve.start*Ze,rn=(Ve.start+Ve.count)*Ze;Te!==null&&(St=Math.max(St,Te.start*Ze),rn=Math.min(rn,(Te.start+Te.count)*Ze)),ze!==null?(St=Math.max(St,0),rn=Math.min(rn,ze.count)):Ke!=null&&(St=Math.max(St,0),rn=Math.min(rn,Ke.count));const Ht=rn-St;if(Ht<0||Ht===1/0)return;$e.setup(Y,$,ke,K,ze);let Jn,yt=je;if(ze!==null&&(Jn=fe.get(ze),yt=Ie,yt.setIndex(Jn)),Y.isMesh)$.wireframe===!0?(Le.setLineWidth($.wireframeLinewidth*at()),yt.setMode(j.LINES)):yt.setMode(j.TRIANGLES);else if(Y.isLine){let et=$.linewidth;et===void 0&&(et=1),Le.setLineWidth(et*at()),Y.isLineSegments?yt.setMode(j.LINES):Y.isLineLoop?yt.setMode(j.LINE_LOOP):yt.setMode(j.LINE_STRIP)}else Y.isPoints?yt.setMode(j.POINTS):Y.isSprite&&yt.setMode(j.TRIANGLES);if(Y.isBatchedMesh)yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)yt.renderInstances(St,Ht,Y.count);else if(K.isInstancedBufferGeometry){const et=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,eo=Math.min(K.instanceCount,et);yt.renderInstances(St,Ht,eo)}else yt.render(St,Ht)};function mt(R,z,K){R.transparent===!0&&R.side===vi&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,jr(R,z,K),R.side=Oi,R.needsUpdate=!0,jr(R,z,K),R.side=vi):jr(R,z,K)}this.compile=function(R,z,K=null){K===null&&(K=R),m=Be.get(K),m.init(),v.push(m),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),R!==K&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(_._useLegacyLights);const $=new Set;return R.traverse(function(Y){const Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const ke=Te[Ne];mt(ke,K,Y),$.add(ke)}else mt(Te,K,Y),$.add(Te)}),v.pop(),m=null,$},this.compileAsync=function(R,z,K=null){const $=this.compile(R,z,K);return new Promise(Y=>{function Te(){if($.forEach(function(Ne){Ye.get(Ne).currentProgram.isReady()&&$.delete(Ne)}),$.size===0){Y(R);return}setTimeout(Te,10)}Ue.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let gt=null;function Bt(R){gt&&gt(R)}function tn(){nn.stop()}function vt(){nn.start()}const nn=new B0;nn.setAnimationLoop(Bt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(R){gt=R,Je.setAnimationLoop(R),R===null?nn.stop():nn.start()},Je.addEventListener("sessionstart",tn),Je.addEventListener("sessionend",vt),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(z),z=Je.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,z,w),m=Be.get(R,v.length),m.init(),v.push(m),we.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(we),ve=this.localClippingEnabled,re=qe.init(this.clippingPlanes,ve),y=Re.get(R,c.length),y.init(),c.push(y),Gn(R,z,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(O,V),this.info.render.frame++,re===!0&&qe.beginShadows();const K=m.state.shadowsArray;if(ue.render(K,R,z),re===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ft.render(y,R),m.setupLights(_._useLegacyLights),z.isArrayCamera){const $=z.cameras;for(let Y=0,Te=$.length;Y<Te;Y++){const Ne=$[Y];da(y,R,Ne,Ne.viewport)}}else da(y,R,z);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(_,R,z),$e.resetDefaultState(),F=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,c.pop(),c.length>0?y=c[c.length-1]:y=null};function Gn(R,z,K,$){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){$&&We.setFromMatrixPosition(R.matrixWorld).applyMatrix4(we);const Ne=pe.update(R),ke=R.material;ke.visible&&y.push(R,Ne,ke,K,We.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Ne=pe.update(R),ke=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),We.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),We.copy(Ne.boundingSphere.center)),We.applyMatrix4(R.matrixWorld).applyMatrix4(we)),Array.isArray(ke)){const ze=Ne.groups;for(let Ze=0,Ve=ze.length;Ze<Ve;Ze++){const Ke=ze[Ze],St=ke[Ke.materialIndex];St&&St.visible&&y.push(R,Ne,St,K,We.z,Ke)}}else ke.visible&&y.push(R,Ne,ke,K,We.z,null)}}const Te=R.children;for(let Ne=0,ke=Te.length;Ne<ke;Ne++)Gn(Te[Ne],z,K,$)}function da(R,z,K,$){const Y=R.opaque,Te=R.transmissive,Ne=R.transparent;m.setupLightsView(K),re===!0&&qe.setGlobalState(_.clippingPlanes,K),Te.length>0&&pa(Y,Te,z,K),$&&Le.viewport(C.copy($)),Y.length>0&&Xr(Y,z,K),Te.length>0&&Xr(Te,z,K),Ne.length>0&&Xr(Ne,z,K),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function pa(R,z,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Te=Fe.isWebGL2;Ee===null&&(Ee=new Hr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?ia:fr,minFilter:na,samples:Te?4:0})),_.getDrawingBufferSize(Ge),Te?Ee.setSize(Ge.x,Ge.y):Ee.setSize(Wf(Ge.x),Wf(Ge.y));const Ne=_.getRenderTarget();_.setRenderTarget(Ee),_.getClearColor(ie),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();const ke=_.toneMapping;_.toneMapping=cr,Xr(R,K,$),P.updateMultisampleRenderTarget(Ee),P.updateRenderTargetMipmap(Ee);let ze=!1;for(let Ze=0,Ve=z.length;Ze<Ve;Ze++){const Ke=z[Ze],St=Ke.object,rn=Ke.geometry,Ht=Ke.material,Jn=Ke.group;if(Ht.side===vi&&St.layers.test($.layers)){const yt=Ht.side;Ht.side=_n,Ht.needsUpdate=!0,ma(St,K,$,rn,Ht,Jn),Ht.side=yt,Ht.needsUpdate=!0,ze=!0}}ze===!0&&(P.updateMultisampleRenderTarget(Ee),P.updateRenderTargetMipmap(Ee)),_.setRenderTarget(Ne),_.setClearColor(ie,U),_.toneMapping=ke}function Xr(R,z,K){const $=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Te=R.length;Y<Te;Y++){const Ne=R[Y],ke=Ne.object,ze=Ne.geometry,Ze=$===null?Ne.material:$,Ve=Ne.group;ke.layers.test(K.layers)&&ma(ke,z,K,ze,Ze,Ve)}}function ma(R,z,K,$,Y,Te){R.onBeforeRender(_,z,K,$,Y,Te),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(_,z,K,$,R,Te),Y.transparent===!0&&Y.side===vi&&Y.forceSinglePass===!1?(Y.side=_n,Y.needsUpdate=!0,_.renderBufferDirect(K,z,$,Y,R,Te),Y.side=Oi,Y.needsUpdate=!0,_.renderBufferDirect(K,z,$,Y,R,Te),Y.side=vi):_.renderBufferDirect(K,z,$,Y,R,Te),R.onAfterRender(_,z,K,$,Y,Te)}function jr(R,z,K){z.isScene!==!0&&(z=Ce);const $=Ye.get(R),Y=m.state.lights,Te=m.state.shadowsArray,Ne=Y.state.version,ke=De.getParameters(R,Y.state,Te,z,K),ze=De.getProgramCacheKey(ke);let Ze=$.programs;$.environment=R.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(R.isMeshStandardMaterial?W:E).get(R.envMap||$.environment),Ze===void 0&&(R.addEventListener("dispose",ye),Ze=new Map,$.programs=Ze);let Ve=Ze.get(ze);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Ne)return va(R,ke),Ve}else ke.uniforms=De.getUniforms(R),R.onBuild(K,ke,_),R.onBeforeCompile(ke,_),Ve=De.acquireProgram(ke,ze),Ze.set(ze,Ve),$.uniforms=ke.uniforms;const Ke=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=qe.uniform),va(R,ke),$.needsLights=Ru(R),$.lightsStateVersion=Ne,$.needsLights&&(Ke.ambientLightColor.value=Y.state.ambient,Ke.lightProbe.value=Y.state.probe,Ke.directionalLights.value=Y.state.directional,Ke.directionalLightShadows.value=Y.state.directionalShadow,Ke.spotLights.value=Y.state.spot,Ke.spotLightShadows.value=Y.state.spotShadow,Ke.rectAreaLights.value=Y.state.rectArea,Ke.ltc_1.value=Y.state.rectAreaLTC1,Ke.ltc_2.value=Y.state.rectAreaLTC2,Ke.pointLights.value=Y.state.point,Ke.pointLightShadows.value=Y.state.pointShadow,Ke.hemisphereLights.value=Y.state.hemi,Ke.directionalShadowMap.value=Y.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ke.spotShadowMap.value=Y.state.spotShadowMap,Ke.spotLightMatrix.value=Y.state.spotLightMatrix,Ke.spotLightMap.value=Y.state.spotLightMap,Ke.pointShadowMap.value=Y.state.pointShadowMap,Ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function ga(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Tl.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function va(R,z){const K=Ye.get(R);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Au(R,z,K,$,Y){z.isScene!==!0&&(z=Ce),P.resetTextureUnits();const Te=z.fog,Ne=$.isMeshStandardMaterial?z.environment:null,ke=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ki,ze=($.isMeshStandardMaterial?W:E).get($.envMap||Ne),Ze=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ke=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,rn=!!K.morphAttributes.color;let Ht=cr;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ht=_.toneMapping);const Jn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=Jn!==void 0?Jn.length:0,et=Ye.get($),eo=m.state.lights;if(re===!0&&(ve===!0||R!==M)){const ae=R===M&&$.id===F;qe.setState($,R,ae)}let x=!1;$.version===et.__version?(et.needsLights&&et.lightsStateVersion!==eo.state.version||et.outputColorSpace!==ke||Y.isBatchedMesh&&et.batching===!1||!Y.isBatchedMesh&&et.batching===!0||Y.isInstancedMesh&&et.instancing===!1||!Y.isInstancedMesh&&et.instancing===!0||Y.isSkinnedMesh&&et.skinning===!1||!Y.isSkinnedMesh&&et.skinning===!0||Y.isInstancedMesh&&et.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&et.instancingColor===!1&&Y.instanceColor!==null||et.envMap!==ze||$.fog===!0&&et.fog!==Te||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==qe.numPlanes||et.numIntersection!==qe.numIntersection)||et.vertexAlphas!==Ze||et.vertexTangents!==Ve||et.morphTargets!==Ke||et.morphNormals!==St||et.morphColors!==rn||et.toneMapping!==Ht||Fe.isWebGL2===!0&&et.morphTargetsCount!==yt)&&(x=!0):(x=!0,et.__version=$.version);let L=et.currentProgram;x===!0&&(L=jr($,z,Y));let b=!1,I=!1,k=!1;const D=L.getUniforms(),J=et.uniforms;if(Le.useProgram(L.program)&&(b=!0,I=!0,k=!0),$.id!==F&&(F=$.id,I=!0),b||M!==R){D.setValue(j,"projectionMatrix",R.projectionMatrix),D.setValue(j,"viewMatrix",R.matrixWorldInverse);const ae=D.map.cameraPosition;ae!==void 0&&ae.setValue(j,We.setFromMatrixPosition(R.matrixWorld)),Fe.logarithmicDepthBuffer&&D.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&D.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,I=!0,k=!0)}if(Y.isSkinnedMesh){D.setOptional(j,Y,"bindMatrix"),D.setOptional(j,Y,"bindMatrixInverse");const ae=Y.skeleton;ae&&(Fe.floatVertexTextures?(ae.boneTexture===null&&ae.computeBoneTexture(),D.setValue(j,"boneTexture",ae.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(D.setOptional(j,Y,"batchingTexture"),D.setValue(j,"batchingTexture",Y._matricesTexture,P));const le=K.morphAttributes;if((le.position!==void 0||le.normal!==void 0||le.color!==void 0&&Fe.isWebGL2===!0)&&Qe.update(Y,K,L),(I||et.receiveShadow!==Y.receiveShadow)&&(et.receiveShadow=Y.receiveShadow,D.setValue(j,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(J.envMap.value=ze,J.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),I&&(D.setValue(j,"toneMappingExposure",_.toneMappingExposure),et.needsLights&&Cu(J,k),Te&&$.fog===!0&&Se.refreshFogUniforms(J,Te),Se.refreshMaterialUniforms(J,$,ne,Q,Ee),Tl.upload(j,ga(et),J,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Tl.upload(j,ga(et),J,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&D.setValue(j,"center",Y.center),D.setValue(j,"modelViewMatrix",Y.modelViewMatrix),D.setValue(j,"normalMatrix",Y.normalMatrix),D.setValue(j,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ae=$.uniformsGroups;for(let he=0,ge=ae.length;he<ge;he++)if(Fe.isWebGL2){const Pe=ae[he];lt.update(Pe,L),lt.bind(Pe,L)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return L}function Cu(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Ru(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,z,K){Ye.get(R.texture).__webglTexture=z,Ye.get(R.depthTexture).__webglTexture=K;const $=Ye.get(R);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,z){const K=Ye.get(R);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,K=0){w=R,T=z,A=K;let $=!0,Y=null,Te=!1,Ne=!1;if(R){const ze=Ye.get(R);ze.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(j.FRAMEBUFFER,null),$=!1):ze.__webglFramebuffer===void 0?P.setupRenderTarget(R):ze.__hasExternalTextures&&P.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ne=!0);const Ve=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?Y=Ve[z][K]:Y=Ve[z],Te=!0):Fe.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?Y=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?Y=Ve[K]:Y=Ve,C.copy(R.viewport),H.copy(R.scissor),q=R.scissorTest}else C.copy(X).multiplyScalar(ne).floor(),H.copy(ee).multiplyScalar(ne).floor(),q=se;if(Le.bindFramebuffer(j.FRAMEBUFFER,Y)&&Fe.drawBuffers&&$&&Le.drawBuffers(R,Y),Le.viewport(C),Le.scissor(H),Le.setScissorTest(q),Te){const ze=Ye.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+z,ze.__webglTexture,K)}else if(Ne){const ze=Ye.get(R.texture),Ze=z||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,ze.__webglTexture,K||0,Ze)}F=-1},this.readRenderTargetPixels=function(R,z,K,$,Y,Te,Ne){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){Le.bindFramebuffer(j.FRAMEBUFFER,ke);try{const ze=R.texture,Ze=ze.format,Ve=ze.type;if(Ze!==li&&be.convert(Ze)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ve===ia&&(Ue.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(Ve!==fr&&be.convert(Ve)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===er&&(Fe.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-$&&K>=0&&K<=R.height-Y&&j.readPixels(z,K,$,Y,be.convert(Ze),be.convert(Ve),Te)}finally{const ze=w!==null?Ye.get(w).__webglFramebuffer:null;Le.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(R,z,K=0){const $=Math.pow(2,-K),Y=Math.floor(z.image.width*$),Te=Math.floor(z.image.height*$);P.setTexture2D(z,0),j.copyTexSubImage2D(j.TEXTURE_2D,K,0,0,R.x,R.y,Y,Te),Le.unbindTexture()},this.copyTextureToTexture=function(R,z,K,$=0){const Y=z.image.width,Te=z.image.height,Ne=be.convert(K.format),ke=be.convert(K.type);P.setTexture2D(K,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment),z.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,$,R.x,R.y,Y,Te,Ne,ke,z.image.data):z.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,$,R.x,R.y,z.mipmaps[0].width,z.mipmaps[0].height,Ne,z.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,$,R.x,R.y,Ne,ke,z.image),$===0&&K.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(R,z,K,$,Y=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=R.max.x-R.min.x+1,Ne=R.max.y-R.min.y+1,ke=R.max.z-R.min.z+1,ze=be.convert($.format),Ze=be.convert($.type);let Ve;if($.isData3DTexture)P.setTexture3D($,0),Ve=j.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)P.setTexture2DArray($,0),Ve=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);const Ke=j.getParameter(j.UNPACK_ROW_LENGTH),St=j.getParameter(j.UNPACK_IMAGE_HEIGHT),rn=j.getParameter(j.UNPACK_SKIP_PIXELS),Ht=j.getParameter(j.UNPACK_SKIP_ROWS),Jn=j.getParameter(j.UNPACK_SKIP_IMAGES),yt=K.isCompressedTexture?K.mipmaps[Y]:K.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,yt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,R.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,R.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?j.texSubImage3D(Ve,Y,z.x,z.y,z.z,Te,Ne,ke,ze,Ze,yt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ve,Y,z.x,z.y,z.z,Te,Ne,ke,ze,yt.data)):j.texSubImage3D(Ve,Y,z.x,z.y,z.z,Te,Ne,ke,ze,Ze,yt),j.pixelStorei(j.UNPACK_ROW_LENGTH,Ke),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,St),j.pixelStorei(j.UNPACK_SKIP_PIXELS,rn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ht),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Jn),Y===0&&$.generateMipmaps&&j.generateMipmap(Ve),Le.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Le.unbindTexture()},this.resetState=function(){T=0,A=0,w=null,Le.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xh?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===yu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?Ur:w0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?Qt:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Yw extends K0{}Yw.prototype.isWebGL1Renderer=!0;class tu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(e),this.density=t}clone(){return new tu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lm extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Dm extends Ct{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new Dt,Nm=new Dt,sl=[],Im=new Wr,Kw=new Dt,go=new An,vo=new $s;class q0 extends An{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Kw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cs),Im.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(Im)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $s),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cs),vo.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(i),e.ray.intersectsSphere(vo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cs),Nm.multiplyMatrices(i,cs),go.matrixWorld=Nm,go.raycast(e,sl);for(let o=0,a=sl.length;o<a;o++){const l=sl[o];l.instanceId=s,l.object=this,t.push(l)}sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Mu extends Zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Um=new Dt,jf=new D0,ol=new $s,al=new B;class $h extends Xt{constructor(e=new Ln,t=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(r),ol.radius+=s,e.ray.intersectsSphere(ol)===!1)return;Um.copy(r).invert(),jf.copy(e.ray).applyMatrix4(Um);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++){const m=u.getX(g);al.fromBufferAttribute(f,m),Fm(al,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,y=p;g<y;g++)al.fromBufferAttribute(f,g),Fm(al,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fm(n,e,t,i,r,s,o){const a=jf.distanceSqToPoint(n);if(a<t){const l=new B;jf.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class qw extends Pn{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eu extends Ln{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const h=[],f=new B,d=new B,p=[],g=[],y=[],m=[];for(let c=0;c<=i;c++){const v=[],_=c/i;let S=0;c===0&&o===0?S=.5/t:c===i&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const A=T/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),m.push(A+S,1-_),v.push(u++)}h.push(v)}for(let c=0;c<i;c++)for(let v=0;v<t;v++){const _=h[c][v+1],S=h[c][v],T=h[c+1][v],A=h[c+1][v+1];(c!==0||o>0)&&p.push(_,S,A),(c!==i-1||l<Math.PI)&&p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new xi(g,3)),this.setAttribute("normal",new xi(y,3)),this.setAttribute("uv",new xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $0 extends Zs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A0,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tu extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class $w extends Tu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ic=new Dt,Om=new B,km=new B;class Z0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Om.setFromMatrixPosition(e.matrixWorld),t.position.copy(Om),km.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(km),t.updateMatrixWorld(),Ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zm=new Dt,_o=new B,Uc=new B;class Zw extends Z0{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_o.setFromMatrixPosition(e.matrixWorld),i.position.copy(_o),Uc.copy(i.position),Uc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uc),i.updateMatrixWorld(),r.makeTranslation(-_o.x,-_o.y,-_o.z),zm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zm)}}class Qw extends Tu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Zw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jw extends Z0{constructor(){super(new H0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eA extends Tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Jw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tA extends Tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);const nA={},Bm=n=>{let e;const t=new Set,i=(h,f)=>{const d=typeof h=="function"?h(e):h;if(!Object.is(d,e)){const p=e;e=f??(typeof d!="object"||d===null)?d:Object.assign({},e,d),t.forEach(g=>g(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>u,subscribe:h=>(t.add(h),()=>t.delete(h)),destroy:()=>{(nA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},u=e=n(i,r,l);return l},iA=n=>n?Bm(n):Bm;var Q0={exports:{}},J0={},e_={exports:{}},t_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=Ft;function rA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var sA=typeof Object.is=="function"?Object.is:rA,oA=Xs.useState,aA=Xs.useEffect,lA=Xs.useLayoutEffect,uA=Xs.useDebugValue;function cA(n,e){var t=e(),i=oA({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return lA(function(){r.value=t,r.getSnapshot=e,Fc(r)&&s({inst:r})},[n,t,e]),aA(function(){return Fc(r)&&s({inst:r}),n(function(){Fc(r)&&s({inst:r})})},[n]),uA(t),t}function Fc(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!sA(n,t)}catch{return!0}}function fA(n,e){return e()}var hA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?fA:cA;t_.useSyncExternalStore=Xs.useSyncExternalStore!==void 0?Xs.useSyncExternalStore:hA;e_.exports=t_;var dA=e_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=Ft,pA=dA;function mA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var gA=typeof Object.is=="function"?Object.is:mA,vA=pA.useSyncExternalStore,_A=wu.useRef,yA=wu.useEffect,xA=wu.useMemo,SA=wu.useDebugValue;J0.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=_A(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=xA(function(){function l(p){if(!u){if(u=!0,h=p,p=i(p),r!==void 0&&o.hasValue){var g=o.value;if(r(g,p))return f=g}return f=p}if(g=f,gA(h,p))return g;var y=i(p);return r!==void 0&&r(g,y)?(h=p,g):(h=p,f=y)}var u=!1,h,f,d=t===void 0?null:t;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,t,i,r]);var a=vA(n,s[0],s[1]);return yA(function(){o.hasValue=!0,o.value=a},[a]),SA(a),a};Q0.exports=J0;var MA=Q0.exports;const EA=Yf(MA),n_={},{useDebugValue:TA}=hg,{useSyncExternalStoreWithSelector:wA}=EA;let Hm=!1;const AA=n=>n;function CA(n,e=AA,t){(n_?"production":void 0)!=="production"&&t&&!Hm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Hm=!0);const i=wA(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return TA(i),i}const Gm=n=>{(n_?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?iA(n):n,t=(i,r)=>CA(e,i,r);return Object.assign(t,e),t},RA=n=>n?Gm(n):Gm,Oc=64,Ns=RA((n,e)=>({slots:new Array(36).fill(null),selected:0,addItem:(t,i)=>{n(r=>{const s=[...r.slots];let o=i;for(let a=0;a<36&&o>0;a++){const l=s[a];if(l&&l.id===t&&l.count<Oc){const u=Math.min(o,Oc-l.count);s[a]={id:t,count:l.count+u},o-=u}}for(let a=0;a<36&&o>0;a++)if(!s[a]){const l=Math.min(o,Oc);s[a]={id:t,count:l},o-=l}return{slots:s}})},removeItem:(t,i)=>{n(r=>{const s=[...r.slots],o=s[t];return o?(o.count<=i?s[t]=null:s[t]={id:o.id,count:o.count-i},{slots:s}):r})},swapSlots:(t,i)=>{n(r=>{const s=[...r.slots],o=s[t];return s[t]=s[i],s[i]=o,{slots:s}})},selectSlot:t=>n({selected:Math.max(0,Math.min(8,t))}),getSelectedItem:()=>{const t=e();return t.slots[t.selected]},setSlots:t=>n({slots:t})}));class bA{renderer;mainScene;mainCamera;weaponScene;weaponCamera;constructor(){this.mainScene=new Lm,this.mainCamera=new Tn(75,window.innerWidth/window.innerHeight,.1,400),this.weaponScene=new Lm,this.weaponCamera=new Tn(55,window.innerWidth/window.innerHeight,.05,20),this.renderer=new K0({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.autoClear=!1,this.renderer.outputColorSpace=Qt,this.renderer.toneMapping=g0,this.renderer.toneMappingExposure=1,window.addEventListener("resize",this.onResize.bind(this))}onResize(){const e=window.innerWidth,t=window.innerHeight;this.mainCamera.aspect=e/t,this.mainCamera.updateProjectionMatrix(),this.weaponCamera.aspect=e/t,this.weaponCamera.updateProjectionMatrix(),this.renderer.setSize(e,t)}getDomElement(){return this.renderer.domElement}render(){this.renderer.clear(),this.renderer.render(this.mainScene,this.mainCamera),this.renderer.clearDepth(),this.renderer.render(this.weaponScene,this.weaponCamera)}setMainCameraPosition(e,t,i){this.mainCamera.position.set(e,t,i)}setMainCameraRotation(e,t){this.mainCamera.rotation.order="YXZ",this.mainCamera.rotation.y=e,this.mainCamera.rotation.x=t}setFOV(e){this.mainCamera.fov=e,this.mainCamera.updateProjectionMatrix()}destroy(){this.renderer.dispose(),window.removeEventListener("resize",this.onResize.bind(this))}}const PA=`varying vec3 vWorldPos;
void main() {
  vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,LA=`uniform vec3 uTopColor;
uniform vec3 uHorizonColor;
uniform vec3 uSunDir;
uniform float uStarIntensity;
uniform float uTime;
varying vec3 vWorldPos;
void main() {
  vec3 dir = normalize(vWorldPos);
  float h = dir.y;
  vec3 sky = mix(uHorizonColor, uTopColor, smoothstep(0.0, 0.5, h));
  float sunDot = max(dot(dir, uSunDir), 0.0);
  float sun = pow(sunDot, 512.0);
  sky += vec3(1.0, 0.9, 0.6) * sun;
  float moonDot = max(dot(dir, -uSunDir), 0.0);
  float moon = pow(moonDot, 512.0);
  sky += vec3(0.8, 0.85, 0.9) * moon * uStarIntensity;
  gl_FragColor = vec4(sky, 1.0);
}
`;class DA{skyMesh;starField;uniforms;constructor(e){const t=new Eu(380,32,32);this.uniforms={uTopColor:{value:new nt(1713022)},uHorizonColor:{value:new nt(16740419)},uSunDir:{value:new B(0,1,0)},uStarIntensity:{value:0},uTime:{value:0}};const i=new zi({vertexShader:PA,fragmentShader:LA,uniforms:this.uniforms,side:_n,depthWrite:!1});this.skyMesh=new An(t,i),this.skyMesh.renderOrder=-1e3,e.add(this.skyMesh);const r=2e3,s=new Float32Array(r*3);for(let l=0;l<r;l++){const u=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1),f=370;s[l*3]=f*Math.sin(h)*Math.cos(u),s[l*3+1]=f*Math.sin(h)*Math.sin(u),s[l*3+2]=f*Math.cos(h)}const o=new Ln;o.setAttribute("position",new Ct(s,3));const a=new Mu({color:16777215,size:1.5,transparent:!0,opacity:0,depthWrite:!1});this.starField=new $h(o,a),this.starField.renderOrder=-999,e.add(this.starField)}update(e,t,i,r){this.uniforms.uTime.value=e,this.uniforms.uSunDir.value.copy(t),r&&(this.skyMesh.position.set(r.x,r.y,r.z),this.starField.position.set(r.x,r.y,r.z));const s=t.y;s>.1?(this.uniforms.uTopColor.value.setHex(1402304),this.uniforms.uHorizonColor.value.setHex(12312315)):s>-.1?(this.uniforms.uTopColor.value.setHex(4854924),this.uniforms.uHorizonColor.value.setHex(16740419)):(this.uniforms.uTopColor.value.setHex(858922),this.uniforms.uHorizonColor.value.setHex(1713022));const o=Math.max(0,-s*3);this.starField.material.opacity=Math.min(1,o)}}const NA=`uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec3 pos = position;
  pos.y += sin(pos.x * 2.0 + uTime) * 0.04 + sin(pos.z * 1.7 + uTime * 1.3) * 0.04;
  vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
  vNormal = normalMatrix * normal;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,IA=`uniform float uTime;
uniform vec3 uCamPos;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec3 deep = vec3(0.05, 0.2, 0.5);
  vec3 shallow = vec3(0.1, 0.5, 0.8);
  vec3 viewDir = normalize(uCamPos - vWorldPos);
  vec3 norm = normalize(vNormal);
  float fresnel = pow(1.0 - max(dot(viewDir, norm), 0.0), 3.0);
  vec3 color = mix(deep, shallow, fresnel);
  float spec = pow(max(dot(reflect(-uSunDir, norm), viewDir), 0.0), 64.0);
  color += vec3(1.0) * spec * 0.4;
  gl_FragColor = vec4(color, 0.72);
}
`;class UA{waterMaterial;waterMeshes=new Map;constructor(){this.waterMaterial=new zi({vertexShader:NA,fragmentShader:IA,uniforms:{uTime:{value:0},uCamPos:{value:new B},uSunDir:{value:new B(0,1,0)}},transparent:!0,side:vi,depthWrite:!1})}getMaterial(){return this.waterMaterial}addWaterMesh(e,t,i){const r=new An(t,this.waterMaterial);r.frustumCulled=!0,r.renderOrder=100,this.waterMeshes.set(e,r),i.add(r)}removeWaterMesh(e,t){const i=this.waterMeshes.get(e);i&&(t.remove(i),i.geometry.dispose(),this.waterMeshes.delete(e))}updateUniforms(e,t,i){this.waterMaterial.uniforms.uTime.value=e,this.waterMaterial.uniforms.uCamPos.value.copy(t),this.waterMaterial.uniforms.uSunDir.value.copy(i)}}var it=(n=>(n[n.PLAINS=0]="PLAINS",n[n.DESERT=1]="DESERT",n[n.TUNDRA=2]="TUNDRA",n[n.MARSH=3]="MARSH",n[n.CRYSTAL_CAVERNS=4]="CRYSTAL_CAVERNS",n))(it||{});const i_={0:{id:0,name:"Verdant Plains",surfaceBlock:1,subSurfaceBlock:2,underwaterBlock:2,amplitude:12,treeType:"oak",treeDensity:.02,waterLevel:-1,fogColor:[.784,.902,.788],fogDensity:.012,temperature:.2},1:{id:1,name:"Desert",surfaceBlock:4,subSurfaceBlock:5,underwaterBlock:4,amplitude:8,treeType:"cactus",treeDensity:.008,waterLevel:-1,fogColor:[1,.976,.769],fogDensity:.01,temperature:.9},2:{id:2,name:"Frozen Tundra",surfaceBlock:6,subSurfaceBlock:2,underwaterBlock:23,amplitude:4,treeType:"spruce",treeDensity:.01,waterLevel:-1,fogColor:[.89,.945,.992],fogDensity:.018,temperature:-.8},3:{id:3,name:"Sunken Marsh",surfaceBlock:8,subSurfaceBlock:8,underwaterBlock:8,amplitude:3,treeType:"none",treeDensity:0,waterLevel:22,fogColor:[.306,.204,.18],fogDensity:.028,temperature:.1},4:{id:4,name:"Crystal Caverns",surfaceBlock:9,subSurfaceBlock:3,underwaterBlock:3,amplitude:10,treeType:"crystal",treeDensity:.012,waterLevel:-1,fogColor:[.29,.078,.549],fogDensity:.022,temperature:0}};class FA{scene;targetColor=new nt;targetDensity=.012;currentColor=new nt;currentDensity=.012;constructor(e){this.scene=e,e.fog=new tu(13166281,.012),this.currentColor.set(13166281),this.targetColor.set(13166281)}setBiomeFog(e){const t=i_[e];this.targetColor.setRGB(t.fogColor[0],t.fogColor[1],t.fogColor[2]),this.targetDensity=t.fogDensity}setCaveFog(){this.targetColor.setHex(1118481),this.targetDensity=.04}update(e){const t=e*2;this.currentColor.lerp(this.targetColor,t),this.currentDensity+=(this.targetDensity-this.currentDensity)*t,this.scene.fog instanceof tu&&(this.scene.fog.color.copy(this.currentColor),this.scene.fog.density=this.currentDensity)}}const He=16,Un=64,Vm=22,Sr=6,OA=8,kA=-28,Wm=.6,Xm=1.8,jm=1.6,zA=5,ll=12e5,BA=6,Ym=32,kc=200,yo=5e3,HA=3e4,Ao=512,GA=16,te=Ao/GA;class VA{particles=[];geometry;material;points;positions;colors;sizes;constructor(e){this.positions=new Float32Array(yo*3),this.colors=new Float32Array(yo*3),this.sizes=new Float32Array(yo),this.geometry=new Ln,this.geometry.setAttribute("position",new Ct(this.positions,3)),this.geometry.setAttribute("color",new Ct(this.colors,3)),this.geometry.setAttribute("size",new Ct(this.sizes,1)),this.material=new Mu({size:.15,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1,sizeAttenuation:!0}),this.points=new $h(this.geometry,this.material),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,r,s={}){const{speed:o=2,color:a=[1,1,1],life:l=1,size:u=.15,spread:h=1}=s;for(let f=0;f<r&&!(this.particles.length>=yo);f++){const d=Math.random()*Math.PI*2,p=(Math.random()-.5)*Math.PI,g=o*(.5+Math.random()*.5);this.particles.push({x:e+(Math.random()-.5)*h,y:t+(Math.random()-.5)*h,z:i+(Math.random()-.5)*h,vx:Math.cos(d)*Math.cos(p)*g,vy:Math.sin(p)*g,vz:Math.sin(d)*Math.cos(p)*g,life:l,maxLife:l,r:a[0],g:a[1],b:a[2],size:u})}}update(e){let t=0;for(let i=this.particles.length-1;i>=0;i--){const r=this.particles[i];if(r.life-=e,r.life<=0){this.particles.splice(i,1);continue}r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.vy-=5*e;const s=r.life/r.maxLife;this.positions[t*3]=r.x,this.positions[t*3+1]=r.y,this.positions[t*3+2]=r.z,this.colors[t*3]=r.r*s,this.colors[t*3+1]=r.g*s,this.colors[t*3+2]=r.b*s,this.sizes[t]=r.size*s,t++}for(let i=t;i<yo;i++)this.positions[i*3+1]=-1e3,this.sizes[i]=0;this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.setDrawRange(0,t)}}class WA{sunLight;ambientLight;sunDirection=new B(0,1,0);elapsed=0;constructor(e){this.sunLight=new eA(16774624,1.2),this.sunLight.position.set(0,100,0),e.add(this.sunLight),this.ambientLight=new tA(16777215,.6),e.add(this.ambientLight);const t=new $w(8900331,5592405,.4);e.add(t)}update(e){this.elapsed+=e*1e3;const i=this.elapsed%ll/ll*Math.PI*2,r=Math.cos(i)*100,s=Math.sin(i)*100;this.sunLight.position.set(r,s,0),this.sunDirection.set(r,s,0).normalize();const o=Math.sin(i);if(o>.2)this.sunLight.color.setHex(16774624),this.sunLight.intensity=1,this.ambientLight.intensity=.6;else if(o>-.1){const a=(o+.1)/.3;this.sunLight.color.lerpColors(new nt(1713022),new nt(16740419),a),this.sunLight.intensity=.3+a*.7,this.ambientLight.intensity=.08+a*.52}else this.sunLight.color.setHex(1713022),this.sunLight.intensity=.1,this.ambientLight.intensity=.08}getSunDirection(){return this.sunDirection}getDayProgress(){return this.elapsed%ll/ll}}class XA{scene;assetManager;chunks=new Map;material;maxChunks=200;constructor(e,t){this.scene=e,this.assetManager=t,this.material=new $0({map:t.getTexture(),vertexColors:!0,side:Oi})}uploadChunk(e,t,i){if(this.removeChunk(e),this.chunks.size>=this.maxChunks){let a="",l=1/0;this.chunks.forEach((u,h)=>{u.lastAccessed<l&&(l=u.lastAccessed,a=h)}),a&&this.removeChunk(a)}const r=new Ln;r.setAttribute("position",new Ct(t.positions,3)),r.setAttribute("normal",new Ct(t.normals,3)),r.setAttribute("uv",new Ct(t.uvs,2)),r.setAttribute("color",new Ct(t.colors,3)),r.setIndex(new Ct(t.indices,1)),r.computeBoundingSphere();const s=new An(r,this.material);s.frustumCulled=!0,this.scene.add(s);let o=null;if(t.waterIndices.length>0){const a=new Ln;a.setAttribute("position",new Ct(t.waterPositions,3)),a.setAttribute("normal",new Ct(t.waterNormals,3)),a.setAttribute("uv",new Ct(t.waterUvs,2)),a.setIndex(new Ct(t.waterIndices,1)),a.computeBoundingSphere(),o=new An(a,i),o.frustumCulled=!0,o.renderOrder=100,this.scene.add(o)}this.chunks.set(e,{solid:s,water:o,lastAccessed:performance.now(),key:e})}removeChunk(e){const t=this.chunks.get(e);t&&(this.scene.remove(t.solid),t.solid.geometry.dispose(),t.water&&(this.scene.remove(t.water),t.water.geometry.dispose()),this.chunks.delete(e))}hasChunk(e){return this.chunks.has(e)}getChunkCount(){return this.chunks.size}clear(){this.chunks.forEach((e,t)=>this.removeChunk(t))}}class jA{overlay;vignetteStrength=.3;constructor(){this.overlay=document.createElement("div"),this.overlay.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10;background:radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",document.body.appendChild(this.overlay)}setVignetteStrength(e){this.vignetteStrength=e;const t=e*.6;this.overlay.style.background=`radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${t}) 100%)`}fadeIn(e,t){this.overlay.style.transition=`background ${e}ms`,this.overlay.style.background="rgba(0,0,0,1)",t&&setTimeout(t,e)}fadeOut(e,t){this.overlay.style.transition=`background ${e}ms`;const i=this.vignetteStrength*.6;this.overlay.style.background=`radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${i}) 100%)`,t&&setTimeout(t,e)}destroy(){document.body.removeChild(this.overlay)}}var Me=(n=>(n[n.AIR=0]="AIR",n[n.GRASS=1]="GRASS",n[n.DIRT=2]="DIRT",n[n.STONE=3]="STONE",n[n.SAND=4]="SAND",n[n.SANDSTONE=5]="SANDSTONE",n[n.SNOW=6]="SNOW",n[n.ICE=7]="ICE",n[n.MUD=8]="MUD",n[n.CRYSTAL=9]="CRYSTAL",n[n.GLOWSTONE=10]="GLOWSTONE",n[n.LAVA=11]="LAVA",n[n.WATER=12]="WATER",n[n.WOOD=13]="WOOD",n[n.LEAVES=14]="LEAVES",n[n.CACTUS=15]="CACTUS",n[n.BEDROCK=16]="BEDROCK",n[n.COAL_ORE=17]="COAL_ORE",n[n.IRON_ORE=18]="IRON_ORE",n[n.GOLD_ORE=19]="GOLD_ORE",n[n.DIAMOND_ORE=20]="DIAMOND_ORE",n[n.PORTAL_FRAME=21]="PORTAL_FRAME",n[n.PORTAL_ACTIVE=22]="PORTAL_ACTIVE",n[n.LILY_PAD=23]="LILY_PAD",n[n.SPRUCE_WOOD=24]="SPRUCE_WOOD",n[n.SPRUCE_LEAVES=25]="SPRUCE_LEAVES",n[n.PACKED_ICE=26]="PACKED_ICE",n))(Me||{});const Zh={0:{id:0,name:"Air",solid:!1,transparent:!0,hardness:0,atlasTileX:0,atlasTileY:0,lightEmission:0},1:{id:1,name:"Grass",solid:!0,transparent:!1,hardness:.6,atlasTileX:0,atlasTileY:0,sideAtlasX:1,sideAtlasY:0,bottomAtlasX:2,bottomAtlasY:0,lightEmission:0},2:{id:2,name:"Dirt",solid:!0,transparent:!1,hardness:.5,atlasTileX:2,atlasTileY:0,lightEmission:0},3:{id:3,name:"Stone",solid:!0,transparent:!1,hardness:1.5,atlasTileX:3,atlasTileY:0,lightEmission:0},4:{id:4,name:"Sand",solid:!0,transparent:!1,hardness:.5,atlasTileX:4,atlasTileY:0,lightEmission:0},5:{id:5,name:"Sandstone",solid:!0,transparent:!1,hardness:2,atlasTileX:5,atlasTileY:0,lightEmission:0},6:{id:6,name:"Snow",solid:!0,transparent:!1,hardness:.2,atlasTileX:6,atlasTileY:0,lightEmission:0},7:{id:7,name:"Ice",solid:!0,transparent:!0,hardness:.5,atlasTileX:7,atlasTileY:0,lightEmission:0},8:{id:8,name:"Mud",solid:!0,transparent:!1,hardness:.4,atlasTileX:8,atlasTileY:0,lightEmission:0},9:{id:9,name:"Crystal",solid:!0,transparent:!1,hardness:1,atlasTileX:9,atlasTileY:0,lightEmission:12},10:{id:10,name:"Glowstone",solid:!0,transparent:!1,hardness:.3,atlasTileX:10,atlasTileY:0,lightEmission:15},11:{id:11,name:"Lava",solid:!1,transparent:!0,hardness:-1,atlasTileX:11,atlasTileY:0,lightEmission:15},12:{id:12,name:"Water",solid:!1,transparent:!0,hardness:-1,atlasTileX:0,atlasTileY:0,lightEmission:0},13:{id:13,name:"Wood",solid:!0,transparent:!1,hardness:2,atlasTileX:12,atlasTileY:0,lightEmission:0},14:{id:14,name:"Leaves",solid:!0,transparent:!0,hardness:.2,atlasTileX:13,atlasTileY:0,lightEmission:0},15:{id:15,name:"Cactus",solid:!0,transparent:!1,hardness:.4,atlasTileX:14,atlasTileY:0,lightEmission:0},16:{id:16,name:"Bedrock",solid:!0,transparent:!1,hardness:-1,atlasTileX:15,atlasTileY:0,lightEmission:0},17:{id:17,name:"Coal Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:0,atlasTileY:1,lightEmission:0},18:{id:18,name:"Iron Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:1,atlasTileY:1,lightEmission:0},19:{id:19,name:"Gold Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:2,atlasTileY:1,lightEmission:0},20:{id:20,name:"Diamond Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:3,atlasTileY:1,lightEmission:0},21:{id:21,name:"Portal Frame",solid:!0,transparent:!1,hardness:-1,atlasTileX:4,atlasTileY:1,lightEmission:5},22:{id:22,name:"Portal",solid:!1,transparent:!0,hardness:-1,atlasTileX:5,atlasTileY:1,lightEmission:15},23:{id:23,name:"Lily Pad",solid:!1,transparent:!0,hardness:0,atlasTileX:6,atlasTileY:1,lightEmission:0},24:{id:24,name:"Spruce Wood",solid:!0,transparent:!1,hardness:2,atlasTileX:7,atlasTileY:1,lightEmission:0},25:{id:25,name:"Spruce Leaves",solid:!0,transparent:!0,hardness:.2,atlasTileX:8,atlasTileY:1,lightEmission:0},26:{id:26,name:"Packed Ice",solid:!0,transparent:!1,hardness:.5,atlasTileX:9,atlasTileY:1,lightEmission:0}};function fa(n){return Zh[n]?.solid??!1}class YA{atlas=null;canvas=null;init(){this.canvas=document.createElement("canvas"),this.canvas.width=Ao,this.canvas.height=Ao;const e=this.canvas.getContext("2d");e.fillStyle="#FF00FF",e.fillRect(0,0,Ao,Ao),this.drawTile(e,Me.GRASS,(t,i,r)=>{t.fillStyle="#4CAF50",t.fillRect(i,r,te,te);for(let s=0;s<20;s++){t.fillStyle="#388E3C";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,2,2)}for(let s=0;s<5;s++){t.fillStyle="#81C784";const o=i+Math.floor(Math.random()*(te-6)),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,6,1)}}),this.drawTile(e,Me.DIRT,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,te,te);for(let s=0;s<25;s++){t.fillStyle=Math.random()>.5?"#6D4C41":"#8D6E63";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,2,2)}}),this.drawTileAt(e,1,0,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,te,te),t.fillStyle="#4CAF50",t.fillRect(i,r,te,Math.floor(te*.4));for(let s=0;s<10;s++){t.fillStyle="#388E3C";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te*.4);t.fillRect(o,a,2,2)}}),this.drawTileAt(e,2,0,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,te,te);for(let s=0;s<20;s++){t.fillStyle="#6D4C41";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,3,2)}}),this.drawTile(e,Me.STONE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<4;s++)t.strokeStyle="#757575",t.lineWidth=1,t.beginPath(),t.moveTo(i+Math.random()*te,r+Math.random()*te),t.quadraticCurveTo(i+Math.random()*te,r+Math.random()*te,i+Math.random()*te,r+Math.random()*te),t.stroke()}),this.drawTile(e,Me.SAND,(t,i,r)=>{t.fillStyle="#FDD835",t.fillRect(i,r,te,te);for(let s=0;s<6;s++){t.fillStyle="#F9A825";const o=r+Math.floor(Math.random()*te);t.fillRect(i,o,te,1)}}),this.drawTile(e,Me.SANDSTONE,(t,i,r)=>{t.fillStyle="#E8C86A",t.fillRect(i,r,te,te);for(let s=0;s<3;s++){t.fillStyle="#D4B04A";const o=r+Math.floor(Math.random()*te);t.fillRect(i,o,te,2)}}),this.drawTile(e,Me.SNOW,(t,i,r)=>{t.fillStyle="#FAFAFA",t.fillRect(i,r,te,te);for(let s=0;s<15;s++){t.fillStyle="#BBDEFB";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,2,2)}}),this.drawTile(e,Me.ICE,(t,i,r)=>{t.fillStyle="#B3E5FC",t.fillRect(i,r,te,te),t.fillStyle="#E1F5FE",t.fillRect(i+8,r+8,16,16)}),this.drawTile(e,Me.MUD,(t,i,r)=>{t.fillStyle="#4E342E",t.fillRect(i,r,te,te);for(let s=0;s<8;s++){t.fillStyle="#3E2723";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,4,3)}}),this.drawTile(e,Me.CRYSTAL,(t,i,r)=>{t.fillStyle="#7B1FA2",t.fillRect(i,r,te,te),t.strokeStyle="#FFFFFF",t.lineWidth=2,t.beginPath(),t.moveTo(i,r),t.lineTo(i+te,r+te),t.stroke(),t.beginPath(),t.moveTo(i+te,r),t.lineTo(i,r+te),t.stroke()}),this.drawTile(e,Me.GLOWSTONE,(t,i,r)=>{t.fillStyle="#FF8F00",t.fillRect(i,r,te,te),t.fillStyle="#FFD54F",t.fillRect(i+10,r+10,12,12),t.fillStyle="#FFFFFF",t.fillRect(i+14,r+14,4,4)}),this.drawTile(e,Me.LAVA,(t,i,r)=>{t.fillStyle="#E65100",t.fillRect(i,r,te,te),t.fillStyle="#FF6D00",t.fillRect(i+4,r+4,24,24),t.fillStyle="#FFAB00",t.fillRect(i+10,r+10,12,12)}),this.drawTile(e,Me.WOOD,(t,i,r)=>{t.fillStyle="#6D4C41",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#5D4037";const o=i+Math.floor(Math.random()*te);t.fillRect(o,r,1,te)}}),this.drawTile(e,Me.LEAVES,(t,i,r)=>{t.fillStyle="#2E7D32",t.fillRect(i,r,te,te);for(let s=0;s<30;s++){t.fillStyle="#1B5E20";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,3,3)}}),this.drawTile(e,Me.CACTUS,(t,i,r)=>{t.fillStyle="#2E7D32",t.fillRect(i,r,te,te),t.fillStyle="#1B5E20",t.fillRect(i+2,r,1,te),t.fillRect(i+te-3,r,1,te)}),this.drawTile(e,Me.BEDROCK,(t,i,r)=>{t.fillStyle="#212121",t.fillRect(i,r,te,te);for(let s=0;s<10;s++){t.fillStyle="#424242";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,4,3)}}),this.drawTile(e,Me.COAL_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#212121";const o=i+Math.floor(Math.random()*(te-4)),a=r+Math.floor(Math.random()*(te-4));t.fillRect(o,a,4,4)}}),this.drawTile(e,Me.IRON_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#E8C86A";const o=i+Math.floor(Math.random()*(te-3)),a=r+Math.floor(Math.random()*(te-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,Me.GOLD_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#FFD700";const o=i+Math.floor(Math.random()*(te-3)),a=r+Math.floor(Math.random()*(te-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,Me.DIAMOND_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#00BCD4";const o=i+Math.floor(Math.random()*(te-3)),a=r+Math.floor(Math.random()*(te-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,Me.PORTAL_FRAME,(t,i,r)=>{t.fillStyle="#6A1B9A",t.fillRect(i,r,te,te),t.strokeStyle="#CE93D8",t.lineWidth=2,t.strokeRect(i+4,r+4,te-8,te-8)}),this.drawTile(e,Me.PORTAL_ACTIVE,(t,i,r)=>{t.fillStyle="#AA00FF",t.fillRect(i,r,te,te);for(let s=0;s<10;s++){t.fillStyle="#E040FB";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,2,2)}}),this.drawTile(e,Me.LILY_PAD,(t,i,r)=>{t.fillStyle="#1B5E20",t.fillRect(i+4,r+4,te-8,te-8)}),this.drawTile(e,Me.SPRUCE_WOOD,(t,i,r)=>{t.fillStyle="#4E342E",t.fillRect(i,r,te,te);for(let s=0;s<6;s++){t.fillStyle="#3E2723";const o=i+Math.floor(Math.random()*te);t.fillRect(o,r,1,te)}}),this.drawTile(e,Me.SPRUCE_LEAVES,(t,i,r)=>{t.fillStyle="#1B5E20",t.fillRect(i,r,te,te);for(let s=0;s<20;s++){t.fillStyle="#0D3B0F";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,3,3)}}),this.drawTile(e,Me.PACKED_ICE,(t,i,r)=>{t.fillStyle="#81D4FA",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#B3E5FC";const o=i+Math.floor(Math.random()*(te-4)),a=r+Math.floor(Math.random()*(te-4));t.fillRect(o,a,4,4)}}),this.atlas=new qw(this.canvas),this.atlas.magFilter=on,this.atlas.minFilter=on,this.atlas.wrapS=Fn,this.atlas.wrapT=Fn}drawTile(e,t,i){const r=Zh[t],s=r.atlasTileX*te,o=r.atlasTileY*te;i(e,s,o)}drawTileAt(e,t,i,r){const s=t*te,o=i*te;r(e,s,o)}getTexture(){return this.atlas||this.init(),this.atlas}}class KA{keys=new Map;mouseButtons=new Map;mouseDeltaX=0;mouseDeltaY=0;scrollDelta=0;keyJustPressed=new Map;canvas=null;init(e){this.canvas=e,document.addEventListener("keydown",t=>{this.keys.get(t.code)||this.keyJustPressed.set(t.code,!0),this.keys.set(t.code,!0)}),document.addEventListener("keyup",t=>{this.keys.set(t.code,!1)}),document.addEventListener("mousedown",t=>{this.mouseButtons.set(t.button,!0)}),document.addEventListener("mouseup",t=>{this.mouseButtons.set(t.button,!1)}),document.addEventListener("mousemove",t=>{this.mouseDeltaX+=t.movementX,this.mouseDeltaY+=t.movementY}),document.addEventListener("wheel",t=>{this.scrollDelta+=t.deltaY}),e.addEventListener("contextmenu",t=>t.preventDefault())}flush(){this.mouseDeltaX=0,this.mouseDeltaY=0,this.scrollDelta=0,this.keyJustPressed.clear()}isKeyDown(e){return this.keys.get(e)??!1}isKeyJustPressed(e){return this.keyJustPressed.get(e)??!1}isMouseButtonDown(e){return this.mouseButtons.get(e)??!1}getMouseDeltaX(){return this.mouseDeltaX}getMouseDeltaY(){return this.mouseDeltaY}getScrollDelta(){return this.scrollDelta}isPointerLocked(){return document.pointerLockElement===this.canvas}requestPointerLock(){this.canvas?.requestPointerLock()}exitPointerLock(){document.exitPointerLock()}destroy(){}}const qA=`
// Since this is a worker, we need to inline the logic

const CHUNK_SIZE = 16;
const CHUNK_HEIGHT = 64;
const ATLAS_TILES = 16;

const FACE_DIRS = [
  { x: 1, y: 0, z: 0 },
  { x: -1, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: -1, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 0, y: 0, z: -1 },
];

const FACE_VERTICES = [
  [[1,0,0],[1,1,0],[1,1,1],[1,0,1]],
  [[0,0,1],[0,1,1],[0,1,0],[0,0,0]],
  [[0,1,0],[0,1,1],[1,1,1],[1,1,0]],
  [[0,0,1],[0,0,0],[1,0,0],[1,0,1]],
  [[1,0,1],[1,1,1],[0,1,1],[0,0,1]],
  [[0,0,0],[0,1,0],[1,1,0],[1,0,0]],
];

const FACE_NORMALS = [
  [1,0,0], [-1,0,0], [0,1,0], [0,-1,0], [0,0,1], [0,0,-1],
];

const BASE_UVS = [[0,0],[0,1],[1,1],[1,0]];

// Block properties (simplified for worker)
const TRANSPARENT_BLOCKS = new Set([0, 7, 11, 12, 13, 22, 23, 25]);
const SOLID_BLOCKS = new Set([1,2,3,4,5,6,8,9,10,14,15,16,17,18,19,20,21,24,26]);

function isTransparent(id) { return TRANSPARENT_BLOCKS.has(id); }
function isSolid(id) { return SOLID_BLOCKS.has(id); }

function getVoxel(voxels, x, y, z) {
  if (x < 0 || x >= CHUNK_SIZE || y < 0 || y >= CHUNK_HEIGHT || z < 0 || z >= CHUNK_SIZE) return 0;
  return voxels[x + z * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE];
}

function getVoxelSafe(voxels, neighbors, x, y, z) {
  if (y < 0 || y >= CHUNK_HEIGHT) return 0;
  if (x >= 0 && x < CHUNK_SIZE && z >= 0 && z < CHUNK_SIZE) {
    return voxels[x + z * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE];
  }
  const nIdx = x < 0 ? 1 : x >= CHUNK_SIZE ? 0 : z < 0 ? 3 : 2;
  const nVoxels = neighbors[nIdx];
  if (!nVoxels) return 0;
  const lx = ((x % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const lz = ((z % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  return nVoxels[lx + lz * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE];
}

// Atlas tile mapping
const ATLAS_MAP = {
  0: [0,0], 1: [0,0], 2: [2,0], 3: [3,0], 4: [4,0], 5: [5,0],
  6: [6,0], 7: [7,0], 8: [8,0], 9: [9,0], 10: [10,0], 11: [11,0],
  12: [0,0], 13: [13,0], 14: [14,0], 15: [15,0], 16: [0,1],
  17: [1,1], 18: [2,1], 19: [3,1], 20: [4,1], 21: [5,1], 22: [6,1],
  23: [7,1], 24: [8,1], 25: [9,1], 26: [10,1],
};
const SIDE_MAP = { 1: [1,0] }; // grass side
const BOTTOM_MAP = { 1: [2,0] }; // grass bottom

self.onmessage = function(e) {
  const { chunkX, chunkZ, voxels, neighbors } = e.data;

  const positions = [];
  const normals = [];
  const uvs = [];
  const colors = [];
  const indices = [];
  const waterPositions = [];
  const waterNormals = [];
  const waterUvs = [];
  const waterIndices = [];
  let vc = 0;
  let wvc = 0;

  for (let y = 0; y < CHUNK_HEIGHT; y++) {
    for (let z = 0; z < CHUNK_SIZE; z++) {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        const block = getVoxel(voxels, x, y, z);
        if (block === 0) continue; // AIR

        const isWater = block === 12; // WATER

        for (let fi = 0; fi < 6; fi++) {
          const dir = FACE_DIRS[fi];
          const nx = x + dir.x;
          const ny = y + dir.y;
          const nz = z + dir.z;

          let neighbor;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) {
            const nIdx = nx < 0 ? 1 : nx >= CHUNK_SIZE ? 0 : nz < 0 ? 3 : 2;
            const nV = neighbors[nIdx];
            if (nV) {
              const lnx = ((nx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
              const lnz = ((nz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
              neighbor = getVoxel(nV, lnx, ny, lnz);
            } else {
              neighbor = 0;
            }
          } else if (ny < 0 || ny >= CHUNK_HEIGHT) {
            neighbor = 0;
          } else {
            neighbor = getVoxel(voxels, nx, ny, nz);
          }

          if (isWater) {
            if (fi !== 2) continue;
            if (neighbor !== 0) continue;
          } else {
            if (isSolid(neighbor) && !isTransparent(neighbor)) continue;
            if (neighbor === block) continue;
          }

          // AO
          const ao = [1.0, 1.0, 1.0, 1.0];
          for (let v = 0; v < 4; v++) {
            const verts = FACE_VERTICES[fi];
            const vx = x + verts[v][0];
            const vy = y + verts[v][1];
            const vz = z + verts[v][2];
            const s1 = isSolid(getVoxelSafe(voxels, neighbors, vx + dir.x, vy, vz)) ? 1 : 0;
            const s2 = isSolid(getVoxelSafe(voxels, neighbors, vx, vy + dir.y, vz)) ? 1 : 0;
            const cn = isSolid(getVoxelSafe(voxels, neighbors, vx + dir.x, vy + dir.y, vz)) ? 1 : 0;
            ao[v] = 1.0 - (s1 + s2 + cn) * 0.2;
          }

          // UV
          let atlasInfo = ATLAS_MAP[block] || [0, 0];
          if (fi >= 1 && fi <= 4 && SIDE_MAP[block]) atlasInfo = SIDE_MAP[block];
          if (fi === 3 && BOTTOM_MAP[block]) atlasInfo = BOTTOM_MAP[block];
          const uvOffX = atlasInfo[0] / ATLAS_TILES;
          const uvOffY = atlasInfo[1] / ATLAS_TILES;
          const uvSz = 1 / ATLAS_TILES;

          const tPos = isWater ? waterPositions : positions;
          const tNorm = isWater ? waterNormals : normals;
          const tUv = isWater ? waterUvs : uvs;
          const tIdx = isWater ? waterIndices : indices;
          const cvc = isWater ? wvc : vc;

          const verts = FACE_VERTICES[fi];
          const normal = FACE_NORMALS[fi];

          for (let v = 0; v < 4; v++) {
            let vx = chunkX * CHUNK_SIZE + x + verts[v][0];
            let vy = y + verts[v][1];
            if (isWater) vy = y + 0.93;
            let vz = chunkZ * CHUNK_SIZE + z + verts[v][2];
            tPos.push(vx, vy, vz);
            tNorm.push(normal[0], normal[1], normal[2]);
            tUv.push(uvOffX + BASE_UVS[v][0] * uvSz, uvOffY + BASE_UVS[v][1] * uvSz);
            if (!isWater) colors.push(ao[v], ao[v], ao[v]);
          }

          tIdx.push(cvc, cvc + 1, cvc + 2);
          tIdx.push(cvc, cvc + 2, cvc + 3);

          if (isWater) wvc += 4; else vc += 4;
        }
      }
    }
  }

  // Create typed arrays FIRST, then transfer their buffers
  const posArr = new Float32Array(positions);
  const normArr = new Float32Array(normals);
  const uvArr = new Float32Array(uvs);
  const colorArr = new Float32Array(colors);
  const idxArr = new Uint32Array(indices);
  const wPosArr = new Float32Array(waterPositions);
  const wNormArr = new Float32Array(waterNormals);
  const wUvArr = new Float32Array(waterUvs);
  const wIdxArr = new Uint32Array(waterIndices);

  self.postMessage({
    chunkX: chunkX,
    chunkZ: chunkZ,
    positions: posArr,
    normals: normArr,
    uvs: uvArr,
    colors: colorArr,
    indices: idxArr,
    waterPositions: wPosArr,
    waterNormals: wNormArr,
    waterUvs: wUvArr,
    waterIndices: wIdxArr,
  }, [
    posArr.buffer, normArr.buffer, uvArr.buffer, colorArr.buffer, idxArr.buffer,
    wPosArr.buffer, wNormArr.buffer, wUvArr.buffer, wIdxArr.buffer,
  ]);
};
`;let Km=null,zc=null;function $A(){return zc||(Km=new Blob([qA],{type:"application/javascript"}),zc=URL.createObjectURL(Km)),new Worker(zc)}class Qh{chunkX;chunkZ;voxels;dirty=!0;constructor(e,t){this.chunkX=e,this.chunkZ=t,this.voxels=new Uint8Array(He*Un*He)}index(e,t,i){return e+i*He+t*He*He}getBlock(e,t,i){return e<0||e>=He||t<0||t>=Un||i<0||i>=He?0:this.voxels[this.index(e,t,i)]}setBlock(e,t,i,r){e<0||e>=He||t<0||t>=Un||i<0||i>=He||(this.voxels[this.index(e,t,i)]=r,this.dirty=!0)}getBlockWorld(e,t,i){const r=e-this.chunkX*He,s=i-this.chunkZ*He;return this.getBlock(r,t,s)}setBlockWorld(e,t,i,r){const s=e-this.chunkX*He,o=i-this.chunkZ*He;this.setBlock(s,t,o,r)}isOnEdge(e,t){return e===0||e===He-1||t===0||t===He-1}get worldX(){return this.chunkX*He}get worldZ(){return this.chunkZ*He}fill(e){this.voxels.fill(e)}}const r_=Math.sqrt(3),ZA=.5*(r_-1),xo=(3-r_)/6,QA=1/3,di=1/6,Oo=n=>Math.floor(n)|0,qm=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),Bc=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function $m(n=Math.random){const e=s_(n),t=new Float64Array(e).map(r=>qm[r%12*2]),i=new Float64Array(e).map(r=>qm[r%12*2+1]);return function(s,o){let a=0,l=0,u=0;const h=(s+o)*ZA,f=Oo(s+h),d=Oo(o+h),p=(f+d)*xo,g=f-p,y=d-p,m=s-g,c=o-y;let v,_;m>c?(v=1,_=0):(v=0,_=1);const S=m-v+xo,T=c-_+xo,A=m-1+2*xo,w=c-1+2*xo,F=f&255,M=d&255;let C=.5-m*m-c*c;if(C>=0){const ie=F+e[M],U=t[ie],G=i[ie];C*=C,a=C*C*(U*m+G*c)}let H=.5-S*S-T*T;if(H>=0){const ie=F+v+e[M+_],U=t[ie],G=i[ie];H*=H,l=H*H*(U*S+G*T)}let q=.5-A*A-w*w;if(q>=0){const ie=F+1+e[M+1],U=t[ie],G=i[ie];q*=q,u=q*q*(U*A+G*w)}return 70*(a+l+u)}}function Zm(n=Math.random){const e=s_(n),t=new Float64Array(e).map(s=>Bc[s%12*3]),i=new Float64Array(e).map(s=>Bc[s%12*3+1]),r=new Float64Array(e).map(s=>Bc[s%12*3+2]);return function(o,a,l){let u,h,f,d;const p=(o+a+l)*QA,g=Oo(o+p),y=Oo(a+p),m=Oo(l+p),c=(g+y+m)*di,v=g-c,_=y-c,S=m-c,T=o-v,A=a-_,w=l-S;let F,M,C,H,q,ie;T>=A?A>=w?(F=1,M=0,C=0,H=1,q=1,ie=0):T>=w?(F=1,M=0,C=0,H=1,q=0,ie=1):(F=0,M=0,C=1,H=1,q=0,ie=1):A<w?(F=0,M=0,C=1,H=0,q=1,ie=1):T<w?(F=0,M=1,C=0,H=0,q=1,ie=1):(F=0,M=1,C=0,H=1,q=1,ie=0);const U=T-F+di,G=A-M+di,Q=w-C+di,ne=T-H+2*di,O=A-q+2*di,V=w-ie+2*di,X=T-1+3*di,ee=A-1+3*di,se=w-1+3*di,Z=g&255,re=y&255,ve=m&255;let Ee=.6-T*T-A*A-w*w;if(Ee<0)u=0;else{const Ce=Z+e[re+e[ve]];Ee*=Ee,u=Ee*Ee*(t[Ce]*T+i[Ce]*A+r[Ce]*w)}let we=.6-U*U-G*G-Q*Q;if(we<0)h=0;else{const Ce=Z+F+e[re+M+e[ve+C]];we*=we,h=we*we*(t[Ce]*U+i[Ce]*G+r[Ce]*Q)}let Ge=.6-ne*ne-O*O-V*V;if(Ge<0)f=0;else{const Ce=Z+H+e[re+q+e[ve+ie]];Ge*=Ge,f=Ge*Ge*(t[Ce]*ne+i[Ce]*O+r[Ce]*V)}let We=.6-X*X-ee*ee-se*se;if(We<0)d=0;else{const Ce=Z+1+e[re+1+e[ve+1]];We*=We,d=We*We*(t[Ce]*X+i[Ce]*ee+r[Ce]*se)}return 32*(u+h+f+d)}}function s_(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}let o_=0;function JA(n){o_=n}function eC(){let n=o_;return()=>(n=n*1664525+1013904223&4294967295,(n>>>0)/4294967295)}let a_,l_,u_,c_;function tC(){const n=eC();a_=$m(n),l_=Zm(n),u_=Zm(n),c_=$m(n)}function f_(){return a_}function ul(){return l_}function nC(){return u_}function Qm(){return c_}class iC{seed;constructor(e){this.seed=e}generateChunk(e,t){const i=e.chunkX,r=e.chunkZ;for(let s=0;s<He;s++)for(let o=0;o<He;o++){const a=i*He+s,l=r*He+o,u=s+o*He,h=t[u],f=this.getHeight(a,l,h),d=Math.floor(f);for(let p=0;p<Un;p++){let g=Me.AIR;p===0?g=Me.BEDROCK:p<6?ul()(a*.1,p*.1,l*.1)>.55?g=Me.LAVA:ul()(a*.15,p*.15,l*.15+100)>.65?g=Me.GLOWSTONE:g=Me.STONE:p<=d?this.isCave(a,p,l)?p<6?g=Me.LAVA:g=Me.AIR:(g=Me.STONE,p===d?g=this.getSurfaceBlock(h):p>d-4&&(g=this.getSubSurfaceBlock(h)),g===Me.STONE&&(g=this.getOre(a,p,l))):p<=Vm&&p>d&&(h===it.TUNDRA?g=Me.ICE:g=Me.WATER),e.setBlock(s,p,o,g)}}e.dirty=!1}getHeight(e,t,i){const r=f_(),s=Vm;let o=12;switch(i){case it.PLAINS:o=12;break;case it.DESERT:o=8;break;case it.TUNDRA:o=4;break;case it.MARSH:o=3;break;case it.CRYSTAL_CAVERNS:o=10;break}const a=r(e*.005,t*.005)*o,l=r(e*.02,t*.02)*o*.3,u=r(e*.05,t*.05)*o*.1;return s+a+l+u}isCave(e,t,i){if(t<=0)return!1;const r=ul(),s=nC(),o=r(e*.04,t*.04,i*.04),a=s(e*.04+500,t*.04,i*.04+500);let l=o>.42&&a>.42;if(t<20){const u=1+(20-t)*.02,h=r(e*.04,t*.04*u,i*.04),f=s(e*.04+500,t*.04*u,i*.04+500);l=h>.35&&f>.35}return l}getSurfaceBlock(e){switch(e){case it.PLAINS:return Me.GRASS;case it.DESERT:return Me.SAND;case it.TUNDRA:return Me.SNOW;case it.MARSH:return Me.MUD;case it.CRYSTAL_CAVERNS:return Me.CRYSTAL;default:return Me.GRASS}}getSubSurfaceBlock(e){switch(e){case it.PLAINS:return Me.DIRT;case it.DESERT:return Me.SANDSTONE;case it.TUNDRA:return Me.DIRT;case it.MARSH:return Me.MUD;case it.CRYSTAL_CAVERNS:return Me.STONE;default:return Me.DIRT}}getOre(e,t,i){const r=ul();return t<50&&r(e*.15+1e3,t*.15,i*.15+1e3)>.75?Me.COAL_ORE:t<40&&r(e*.15+2e3,t*.15,i*.15+2e3)>.82?Me.IRON_ORE:t<25&&r(e*.15+3e3,t*.15,i*.15+3e3)>.9?Me.GOLD_ORE:t<12&&r(e*.15+4e3,t*.15,i*.15+4e3)>.96?Me.DIAMOND_ORE:Me.STONE}generateChunkRaw(e,t,i){const r=new Qh(e,t);return this.generateChunk(r,i),r}}class rC{generateBiomeMap(e,t){const i=new Array(He*He),r=Qm();for(let s=0;s<He;s++)for(let o=0;o<He;o++){const a=e*He+s,l=t*He+o,u=r(a*.002,l*.002),h=r(a*.003+5e3,l*.003+5e3);i[s+o*He]=this.getBiome(u,h)}return i}getBiome(e,t){return e<-.3?it.TUNDRA:e>.4&&t<-.1?it.DESERT:t>.35?it.MARSH:e>.2&&t>0?it.CRYSTAL_CAVERNS:it.PLAINS}getBiomeAt(e,t){const i=Qm(),r=i(e*.002,t*.002),s=i(e*.003+5e3,t*.003+5e3);return this.getBiome(r,s)}}class sC{generateStructures(e,t){const i=f_(),r=e.chunkX,s=e.chunkZ;for(let o=2;o<He-2;o++)for(let a=2;a<He-2;a++){const l=r*He+o,u=s*He+a,h=t[o+a*He];let f=-1;for(let g=Un-1;g>=0;g--){const y=e.getBlock(o,g,a);if(y!==Me.AIR&&y!==Me.WATER&&y!==Me.ICE){f=g;break}}if(f<1||f>Un-10)continue;const d=i(l*.5,u*.5),p=this.getTreeDensity(h);if(d>1-p*2)switch(h){case it.PLAINS:this.placeOakTree(e,o,f+1,a);break;case it.DESERT:this.placeCactus(e,o,f+1,a);break;case it.TUNDRA:this.placeSpruceTree(e,o,f+1,a);break;case it.CRYSTAL_CAVERNS:this.placeCrystalPillar(e,o,f+1,a);break}}}getTreeDensity(e){switch(e){case it.PLAINS:return .02;case it.DESERT:return .008;case it.TUNDRA:return .01;case it.MARSH:return 0;case it.CRYSTAL_CAVERNS:return .012;default:return 0}}placeOakTree(e,t,i,r){const s=5+Math.floor(Math.random()*3);for(let a=0;a<s;a++)i+a<Un&&e.setBlock(t,i+a,r,Me.WOOD);const o=s-3;for(let a=o;a<=s+1;a++){const l=a<=s-1?2:1;for(let u=-l;u<=l;u++)for(let h=-l;h<=l;h++){if(u===0&&h===0&&a<s||Math.abs(u)+Math.abs(h)>l+1)continue;const f=t+u,d=i+a,p=r+h;f>=0&&f<He&&d>=0&&d<Un&&p>=0&&p<He&&e.getBlock(f,d,p)===Me.AIR&&e.setBlock(f,d,p,Me.LEAVES)}}}placeSpruceTree(e,t,i,r){const s=6+Math.floor(Math.random()*3);for(let o=0;o<s;o++)i+o<Un&&e.setBlock(t,i+o,r,Me.SPRUCE_WOOD);for(let o=2;o<=s;o++){const a=s-o,l=Math.min(Math.floor(a/2)+1,2);for(let u=-l;u<=l;u++)for(let h=-l;h<=l;h++){if(u===0&&h===0&&o<s)continue;const f=t+u,d=i+o,p=r+h;f>=0&&f<He&&d>=0&&d<Un&&p>=0&&p<He&&e.getBlock(f,d,p)===Me.AIR&&e.setBlock(f,d,p,Me.SPRUCE_LEAVES)}}}placeCactus(e,t,i,r){const s=2+Math.floor(Math.random()*3);for(let o=0;o<s;o++)i+o<Un&&e.setBlock(t,i+o,r,Me.CACTUS)}placeCrystalPillar(e,t,i,r){const s=3+Math.floor(Math.random()*6);for(let o=0;o<s;o++)i+o<Un&&e.setBlock(t,i+o,r,Me.CRYSTAL)}}class oC{chunks=new Map;terrainGenerator;biomeGenerator;structureGenerator;dirtyQueue=new Set;seed;constructor(e){this.seed=e,this.terrainGenerator=new iC(e),this.biomeGenerator=new rC,this.structureGenerator=new sC}chunkKey(e,t){return`${e},${t}`}getChunk(e,t){return this.chunks.get(this.chunkKey(e,t))}getBlock(e,t,i){const r=Math.floor(e/He),s=Math.floor(i/He),o=this.chunks.get(this.chunkKey(r,s));return o?o.getBlockWorld(e,t,i):0}setBlock(e,t,i,r){const s=Math.floor(e/He),o=Math.floor(i/He),a=this.chunks.get(this.chunkKey(s,o));if(!a)return;a.setBlockWorld(e,t,i,r),this.dirtyQueue.add(this.chunkKey(s,o));const l=e-s*He,u=i-o*He;l===0&&this.dirtyQueue.add(this.chunkKey(s-1,o)),l===He-1&&this.dirtyQueue.add(this.chunkKey(s+1,o)),u===0&&this.dirtyQueue.add(this.chunkKey(s,o-1)),u===He-1&&this.dirtyQueue.add(this.chunkKey(s,o+1))}getBiomeAt(e,t){return this.biomeGenerator.getBiomeAt(e,t)}update(e,t){const i=Math.floor(e/He),r=Math.floor(t/He);for(let l=-Sr;l<=Sr;l++)for(let u=-Sr;u<=Sr;u++){if(l*l+u*u>Sr*Sr)continue;const h=i+l,f=r+u,d=this.chunkKey(h,f);if(!this.chunks.has(d)){const p=new Qh(h,f),g=this.biomeGenerator.generateBiomeMap(h,f);this.terrainGenerator.generateChunk(p,g),this.structureGenerator.generateStructures(p,g),this.chunks.set(d,p),this.dirtyQueue.add(d)}}const s=Sr+2;for(const[l,u]of this.chunks){const h=u.chunkX-i,f=u.chunkZ-r;h*h+f*f>s*s&&(this.chunks.delete(l),this.dirtyQueue.delete(l))}const o=[];let a=0;for(const l of this.dirtyQueue){if(a>=OA)break;o.push(l),this.dirtyQueue.delete(l),a++}return o}getDirtyChunkKeys(){return this.dirtyQueue}markDirty(e,t){this.dirtyQueue.add(this.chunkKey(e,t))}getAllChunks(){return this.chunks}getTerrainGenerator(){return this.terrainGenerator}getBiomeGenerator(){return this.biomeGenerator}getSeed(){return this.seed}getNeighborVoxels(e,t){return[this.chunks.get(this.chunkKey(e+1,t))?.voxels??null,this.chunks.get(this.chunkKey(e-1,t))?.voxels??null,this.chunks.get(this.chunkKey(e,t+1))?.voxels??null,this.chunks.get(this.chunkKey(e,t-1))?.voxels??null]}}function Jm(n,e,t,i,r,s){return{minX:n-i,minY:e-r,minZ:t-s,maxX:n+i,maxY:e+r,maxZ:t+s}}function aC(n,e){return n.minX<e.maxX&&n.maxX>e.minX&&n.minY<e.maxY&&n.maxY>e.minY&&n.minZ<e.maxZ&&n.maxZ>e.minZ}function Jh(n,e,t,i){const r=e.x,s=e.y,o=e.z;let a=Math.floor(n.x),l=Math.floor(n.y),u=Math.floor(n.z);const h=r>0?1:-1,f=s>0?1:-1,d=o>0?1:-1,p=r!==0?Math.abs(1/r):1/0,g=s!==0?Math.abs(1/s):1/0,y=o!==0?Math.abs(1/o):1/0;let m=r!==0?(r>0?a+1-n.x:n.x-a)*p:1/0,c=s!==0?(s>0?l+1-n.y:n.y-l)*g:1/0,v=o!==0?(o>0?u+1-n.z:n.z-u)*y:1/0,_=a,S=l,T=u,A=0;for(let w=0;w<t*3;w++){if(i(a,l,u))return{hit:!0,blockX:a,blockY:l,blockZ:u,prevX:_,prevY:S,prevZ:T,normalX:_-a,normalY:S-l,normalZ:T-u,distance:A};if(_=a,S=l,T=u,m<c)if(m<v){if(A=m,A>t)break;a+=h,m+=p}else{if(A=v,A>t)break;u+=d,v+=y}else if(c<v){if(A=c,A>t)break;l+=f,c+=g}else{if(A=v,A>t)break;u+=d,v+=y}}return{hit:!1,blockX:a,blockY:l,blockZ:u,prevX:_,prevY:S,prevZ:T,normalX:0,normalY:0,normalZ:0,distance:A}}class lC{position={x:0,y:40,z:0};velocity={x:0,y:0,z:0};yaw=0;pitch=0;onGround=!1;isSwimming=!1;isSprinting=!1;getBlock;constructor(e){this.getBlock=e}getAABB(){return Jm(this.position.x,this.position.y+Xm/2,this.position.z,Wm/2,Xm/2,Wm/2)}getEyePosition(){return{x:this.position.x,y:this.position.y+jm,z:this.position.z}}getLookDirection(){return{x:-Math.sin(this.yaw)*Math.cos(this.pitch),y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*Math.cos(this.pitch)}}update(e){const t=this.getBlock(Math.floor(this.position.x),Math.floor(this.position.y+jm),Math.floor(this.position.z));this.isSwimming=t===Me.WATER,this.isSwimming?(this.velocity.y*=.9,this.velocity.y+=2*e):this.velocity.y+=kA*e,this.velocity.y=Math.max(this.velocity.y,-50),this.moveWithCollision(e)}moveWithCollision(e){const t=this.velocity.x*e,i=this.velocity.y*e,r=this.velocity.z*e;this.position.x+=t,this.checkCollision()&&(this.position.x-=t,this.velocity.x=0),this.position.y+=i,this.checkCollision()?(this.position.y-=i,i<0&&(this.onGround=!0),this.velocity.y=0):this.onGround=!1,this.position.z+=r,this.checkCollision()&&(this.position.z-=r,this.velocity.z=0)}checkCollision(){const e=this.getAABB(),t=Math.floor(e.minX),i=Math.floor(e.maxX),r=Math.floor(e.minY),s=Math.floor(e.maxY),o=Math.floor(e.minZ),a=Math.floor(e.maxZ);for(let l=t;l<=i;l++)for(let u=r;u<=s;u++)for(let h=o;h<=a;h++)if(fa(this.getBlock(l,u,h))){const f=Jm(l+.5,u+.5,h+.5,.5,.5,.5);if(aC(e,f))return!0}return!1}jump(){this.onGround?(this.velocity.y=8,this.onGround=!1):this.isSwimming&&(this.velocity.y=4)}}class uC{player;input;renderer;walkSpeed=5;sprintSpeed=8;swimSpeed=3;mouseSensitivity=.002;targetFov=75;constructor(e,t,i){this.player=e,this.input=t,this.renderer=i}update(e){if(!this.input.isPointerLocked())return;this.player.yaw-=this.input.getMouseDeltaX()*this.mouseSensitivity,this.player.pitch-=this.input.getMouseDeltaY()*this.mouseSensitivity,this.player.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.player.pitch)),this.player.isSprinting=this.input.isKeyDown("ShiftLeft")&&!this.player.isSwimming;const t=this.player.isSwimming?this.swimSpeed:this.player.isSprinting?this.sprintSpeed:this.walkSpeed,i={x:-Math.sin(this.player.yaw),z:-Math.cos(this.player.yaw)},r={x:Math.cos(this.player.yaw),z:-Math.sin(this.player.yaw)};let s=0,o=0;this.input.isKeyDown("KeyW")&&(s+=i.x,o+=i.z),this.input.isKeyDown("KeyS")&&(s-=i.x,o-=i.z),this.input.isKeyDown("KeyA")&&(s-=r.x,o-=r.z),this.input.isKeyDown("KeyD")&&(s+=r.x,o+=r.z);const a=Math.sqrt(s*s+o*o);a>0&&(s=s/a*t,o=o/a*t),this.player.velocity.x=s,this.player.velocity.z=o,this.input.isKeyDown("Space")&&this.player.jump(),this.targetFov=this.player.isSprinting?82:75;const l=this.renderer.mainCamera.fov;this.renderer.setFOV(l+(this.targetFov-l)*e*8);const u=this.player.getEyePosition();this.renderer.setMainCameraPosition(u.x,u.y,u.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch)}}class cC{player;input;renderer;headBobPhase=0;headBobAmplitude=.04;constructor(e,t,i){this.player=e,this.input=t,this.renderer=i,i.getDomElement().addEventListener("click",()=>{t.isPointerLocked()||t.requestPointerLock()})}update(e){const t=this.player.velocity;if(Math.sqrt(t.x*t.x+t.z*t.z)>.5&&this.player.onGround){const s=this.player.isSprinting?12:8;this.headBobPhase+=e*s;const o=Math.sin(this.headBobPhase)*this.headBobAmplitude,a=Math.cos(this.headBobPhase*.5)*this.headBobAmplitude*.5,l=this.player.getEyePosition();this.renderer.setMainCameraPosition(l.x+a,l.y+o,l.z)}}}class fC{player;input;worldManager;survivalStats=null;breakProgress=0;targetBlock=null;constructor(e,t,i){this.player=e,this.input=t,this.worldManager=i}setSurvivalStats(e){this.survivalStats=e}update(e){if(!this.input.isPointerLocked())return;const t=this.player.getEyePosition(),i=this.player.getLookDirection();if(this.targetBlock=Jh(t,i,zA,(r,s,o)=>fa(this.worldManager.getBlock(r,s,o))),this.input.isMouseButtonDown(0)&&this.targetBlock.hit){const r=this.worldManager.getBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ),s=Zh[r];s&&s.hardness>0&&(this.breakProgress+=e/s.hardness,this.breakProgress>=1&&(this.worldManager.setBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ,Me.AIR),this.breakProgress=0))}else this.breakProgress=0;if(this.input.isKeyJustPressed("KeyE")&&this.targetBlock.hit){const r=this.targetBlock.prevX,s=this.targetBlock.prevY,o=this.targetBlock.prevZ,a=this.player.getAABB(),l={minX:r,minY:s,minZ:o,maxX:r+1,maxY:s+1,maxZ:o+1};!(a.maxX<l.minX||a.minX>l.maxX||a.maxY<l.minY||a.minY>l.maxY||a.maxZ<l.minZ||a.minZ>l.maxZ)||this.worldManager.setBlock(r,s,o,Me.STONE)}this.input.isKeyJustPressed("KeyF")&&this.targetBlock.hit&&this.worldManager.getBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ)===Me.WATER&&this.survivalStats&&this.survivalStats.addThirst(15)}getBreakProgress(){return this.breakProgress}getTargetBlock(){return this.targetBlock}}class hC{health=100;hunger=100;thirst=100;stamina=100;temperature=.2;mana=100;maxMana=100;isDead=!1;currentBiome=it.PLAINS;isSprinting=!1;update(e){if(this.isDead)return;this.hunger-=1*e/60,this.thirst-=1.5*e/60,this.isSprinting?this.stamina-=20*e:this.stamina+=10*e;const t=i_[this.currentBiome].temperature;this.temperature+=(t-this.temperature)*e*.1,this.mana=Math.min(this.maxMana,this.mana+5*e),this.hunger=Math.max(0,Math.min(100,this.hunger)),this.thirst=Math.max(0,Math.min(100,this.thirst)),this.stamina=Math.max(0,Math.min(100,this.stamina)),this.hunger<20&&(this.health-=2*e),this.thirst<20&&(this.health-=2*e),this.health=Math.max(0,Math.min(100,this.health)),this.health<=0&&(this.isDead=!0)}setBiome(e){this.currentBiome=e}setSprinting(e){this.isSprinting=e}canSprint(){return this.stamina>=5}addThirst(e){this.thirst=Math.min(100,this.thirst+e)}addHealth(e){this.health=Math.min(100,this.health+e)}respawn(){this.health=100,this.hunger=100,this.thirst=100,this.stamina=100,this.isDead=!1}}var bt=(n=>(n[n.IDLE=0]="IDLE",n[n.WANDER=1]="WANDER",n[n.CHASE=2]="CHASE",n[n.ATTACK=3]="ATTACK",n[n.DEAD=4]="DEAD",n))(bt||{}),Mt=(n=>(n[n.CRAWLER=0]="CRAWLER",n[n.SLIME=1]="SLIME",n[n.ASH_WRAITH=2]="ASH_WRAITH",n[n.CRYSTAL_GOLEM=3]="CRYSTAL_GOLEM",n[n.FROST_WOLF=4]="FROST_WOLF",n))(Mt||{});const eg={0:{maxHp:20,attackDamage:6,attackCooldown:1,wanderSpeed:1.5,chaseSpeed:4,aggroRange:16,deaggroRange:24,hitboxWidth:.6,hitboxHeight:.4},1:{maxHp:16,attackDamage:4,attackCooldown:1.5,wanderSpeed:1,chaseSpeed:3,aggroRange:12,deaggroRange:20,hitboxWidth:.8,hitboxHeight:.8},2:{maxHp:40,attackDamage:12,attackCooldown:1.2,wanderSpeed:2,chaseSpeed:5.5,aggroRange:20,deaggroRange:30,hitboxWidth:.6,hitboxHeight:1.6},3:{maxHp:80,attackDamage:20,attackCooldown:2,wanderSpeed:.8,chaseSpeed:2.5,aggroRange:14,deaggroRange:22,hitboxWidth:1,hitboxHeight:2},4:{maxHp:35,attackDamage:10,attackCooldown:.8,wanderSpeed:3,chaseSpeed:7,aggroRange:20,deaggroRange:32,hitboxWidth:.7,hitboxHeight:.8}};class ha{type;hp;maxHp;state=bt.IDLE;position;target={x:0,y:0,z:0};instanceId=-1;stateTimer=0;attackCooldownTimer=0;deadTimer=0;constructor(e,t){this.type=e;const i=eg[e];this.hp=i.maxHp,this.maxHp=i.maxHp,this.position={...t},this.stateTimer=3+Math.random()*5}updateFSM(e,t,i){if(this.state===bt.DEAD){this.deadTimer+=e;return}const r=eg[this.type],s=Math.sqrt((this.position.x-t.x)**2+(this.position.y-t.y)**2+(this.position.z-t.z)**2);switch(this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-e),this.stateTimer-=e,this.state){case bt.IDLE:this.stateTimer<=0&&(this.state=bt.WANDER,this.stateTimer=3+Math.random()*5,this.target={x:this.position.x+(Math.random()-.5)*10,y:this.position.y,z:this.position.z+(Math.random()-.5)*10}),s<r.aggroRange&&i(this.position,t)&&(this.state=bt.CHASE);break;case bt.WANDER:this.stateTimer<=0&&(this.state=bt.IDLE,this.stateTimer=2+Math.random()*6),s<r.aggroRange&&i(this.position,t)&&(this.state=bt.CHASE);break;case bt.CHASE:this.target={...t},s<1.5&&(this.state=bt.ATTACK),s>r.deaggroRange&&(this.state=bt.WANDER,this.stateTimer=3+Math.random()*4,this.target={x:this.position.x+(Math.random()-.5)*10,y:this.position.y,z:this.position.z+(Math.random()-.5)*10});break;case bt.ATTACK:this.attackCooldownTimer<=0&&(this.attackCooldownTimer=this.getAttackCooldown(),this.state=bt.CHASE),s>2&&(this.state=bt.CHASE);break}this.hp<=0&&(this.state=bt.DEAD,this.deadTimer=0)}getSpeed(){switch(this.state){case bt.WANDER:return this.getWanderSpeed();case bt.CHASE:return this.getChaseSpeed();default:return 0}}takeDamage(e){this.hp-=e,this.hp<=0&&(this.hp=0,this.state=bt.DEAD,this.deadTimer=0)}}class dC extends ha{constructor(e){super(Mt.CRAWLER,e)}getAttackDamage(){return 6}getAttackCooldown(){return 1}getWanderSpeed(){return 1.5}getChaseSpeed(){return 4}onDeath(){}}class pC extends ha{constructor(e){super(Mt.SLIME,e)}getAttackDamage(){return 4}getAttackCooldown(){return 1.5}getWanderSpeed(){return 1}getChaseSpeed(){return 3}onDeath(){}}class mC extends ha{constructor(e){super(Mt.ASH_WRAITH,e)}getAttackDamage(){return 12}getAttackCooldown(){return 1.2}getWanderSpeed(){return 2}getChaseSpeed(){return 5.5}onDeath(){}}class gC extends ha{constructor(e){super(Mt.CRYSTAL_GOLEM,e)}getAttackDamage(){return 20}getAttackCooldown(){return 2}getWanderSpeed(){return .8}getChaseSpeed(){return 2.5}onDeath(){}}class vC extends ha{constructor(e){super(Mt.FROST_WOLF,e)}getAttackDamage(){return 10}getAttackCooldown(){return .8}getWanderSpeed(){return 3}getChaseSpeed(){return 7}onDeath(){}}class ed{static table={[Mt.CRAWLER]:[{itemId:106,minCount:1,maxCount:3,chance:.5},{itemId:102,minCount:1,maxCount:2,chance:.3}],[Mt.SLIME]:[{itemId:112,minCount:1,maxCount:1,chance:1}],[Mt.ASH_WRAITH]:[{itemId:108,minCount:2,maxCount:4,chance:.4},{itemId:104,minCount:1,maxCount:1,chance:.25}],[Mt.CRYSTAL_GOLEM]:[{itemId:109,minCount:3,maxCount:6,chance:.7},{itemId:105,minCount:1,maxCount:1,chance:.2}],[Mt.FROST_WOLF]:[{itemId:110,minCount:1,maxCount:2,chance:.6},{itemId:111,minCount:1,maxCount:2,chance:.5}]};static rollLoot(e){const t=ed.table[e]||[],i=[];for(const r of t)if(Math.random()<r.chance){const s=r.minCount+Math.floor(Math.random()*(r.maxCount-r.minCount+1));i.push({itemId:r.itemId,count:s})}return i}}class _C{creatures=[];frameCount=0;instancedMeshes=new Map;getBlock;playerPos={x:0,y:0,z:0};onLootDrop=null;constructor(e,t){this.getBlock=t;const i={[Mt.CRAWLER]:5025616,[Mt.SLIME]:7798531,[Mt.ASH_WRAITH]:16733986,[Mt.CRYSTAL_GOLEM]:10233776,[Mt.FROST_WOLF]:9489145};for(const r of[Mt.CRAWLER,Mt.SLIME,Mt.ASH_WRAITH,Mt.CRYSTAL_GOLEM,Mt.FROST_WOLF]){const s=new Qs(.6,.6,.6),o=new $0({color:i[r]}),a=new q0(s,o,Ym);a.count=0,a.frustumCulled=!1,e.add(a),this.instancedMeshes.set(r,a)}}setPlayerPosition(e){this.playerPos=e}setOnLootDrop(e){this.onLootDrop=e}spawnCreature(e,t){if(this.creatures.length>=Ym*5)return;let i;switch(e){case Mt.CRAWLER:i=new dC(t);break;case Mt.SLIME:i=new pC(t);break;case Mt.ASH_WRAITH:i=new mC(t);break;case Mt.CRYSTAL_GOLEM:i=new gC(t);break;case Mt.FROST_WOLF:i=new vC(t);break;default:return}this.creatures.push(i)}update(e){this.frameCount++;const t=this.frameCount%BA===0,i=(r,s)=>{const o={x:s.x-r.x,y:s.y-r.y,z:s.z-r.z},a=Math.sqrt(o.x*o.x+o.y*o.y+o.z*o.z);return a===0?!0:(o.x/=a,o.y/=a,o.z/=a,!Jh(r,o,a,(u,h,f)=>fa(this.getBlock(u,h,f))).hit)};for(let r=this.creatures.length-1;r>=0;r--){const s=this.creatures[r];t&&s.updateFSM(e,this.playerPos,i);const o=s.getSpeed()*e;if(o>0&&s.state!==bt.DEAD&&s.state!==bt.IDLE){const a=s.target.x-s.position.x,l=s.target.z-s.position.z,u=Math.sqrt(a*a+l*l);u>.5&&(s.position.x+=a/u*o,s.position.z+=l/u*o)}if(s.state===bt.DEAD&&s.deadTimer>.5){const a=ed.rollLoot(s.type);if(this.onLootDrop)for(const l of a)this.onLootDrop(l.itemId,l.count);s.onDeath(),this.creatures.splice(r,1)}}this.updateInstancedMeshes()}updateInstancedMeshes(){const e=new Xt;for(const[t,i]of this.instancedMeshes){const r=this.creatures.filter(s=>s.type===t&&s.state!==bt.DEAD);i.count=r.length;for(let s=0;s<r.length;s++){const o=r[s];if(e.position.set(o.position.x,o.position.y,o.position.z),o.state===bt.DEAD){const a=Math.max(0,1-o.deadTimer*2);e.scale.set(1,a,1)}else e.scale.set(1,1,1);e.updateMatrix(),i.setMatrixAt(s,e.matrix)}i.instanceMatrix.needsUpdate=!0}}getCreatures(){return this.creatures}getCreatureAt(e,t,i){for(const r of this.creatures){const s=r.position.x-e,o=r.position.z-t;if(s*s+o*o<i*i)return r}return null}}class yC{bullets=[];mesh;ringIndex=0;constructor(e){const t=new Eu(.05,4,4),i=new jh({color:16739584});this.mesh=new q0(t,i,kc),this.mesh.count=0,this.mesh.frustumCulled=!1,e.add(this.mesh);for(let r=0;r<kc;r++)this.bullets.push({x:0,y:-1e3,z:0,vx:0,vy:0,vz:0,alive:!1,life:0})}fire(e,t,i=80){const r=this.bullets[this.ringIndex];r.x=e.x,r.y=e.y,r.z=e.z,r.vx=t.x*i,r.vy=t.y*i,r.vz=t.z*i,r.alive=!0,r.life=3,this.ringIndex=(this.ringIndex+1)%kc}update(e,t){const i=new Xt;let r=0;for(const s of this.bullets)if(s.alive){if(s.life-=e,s.life<=0){s.alive=!1;continue}if(s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,t(s.x,s.y,s.z)){s.alive=!1;continue}i.position.set(s.x,s.y,s.z),i.updateMatrix(),this.mesh.setMatrixAt(r,i.matrix),r++}this.mesh.count=r,r>0&&(this.mesh.instanceMatrix.needsUpdate=!0)}getActiveBullets(){return this.bullets.filter(e=>e.alive)}}const xC={name:"Fist",type:"melee",damage:5,range:2.5,cooldown:.8,ammoPerShot:0,manaCost:0};class SC{currentWeapon=xC;cooldownTimer=0;input;player;bulletPool;particleSystem;renderer;weaponBobPhase=0;weaponMesh=null;constructor(e,t,i,r,s){this.input=e,this.player=t,this.bulletPool=i,this.particleSystem=r,this.renderer=s}equip(e){this.currentWeapon=e}update(e,t){this.cooldownTimer=Math.max(0,this.cooldownTimer-e),this.input.isMouseButtonDown(0)&&this.cooldownTimer<=0&&this.attack(t);const i=this.player.velocity;if(Math.sqrt(i.x*i.x+i.z*i.z)>.5&&this.player.onGround){this.weaponBobPhase+=e*8;const s=Math.sin(this.weaponBobPhase)*.03,o=Math.cos(this.weaponBobPhase*.5)*.02;this.renderer.weaponCamera.position.set(.3+o,-.3+s,-.5)}else this.renderer.weaponCamera.position.set(.3,-.3,-.5)}attack(e){this.cooldownTimer=this.currentWeapon.cooldown;const t=this.player.getEyePosition(),i=this.player.getLookDirection();switch(this.currentWeapon.type){case"melee":this.meleeAttack(t,i,e);break;case"hitscan":this.hitscanAttack(t,i,e);break;case"magic":this.magicAttack(t,i);break}}meleeAttack(e,t,i){const r=Jh(e,t,this.currentWeapon.range,(s,o,a)=>fa(i(s,o,a)));r.hit&&this.particleSystem.emit(r.blockX+.5,r.blockY+.5,r.blockZ+.5,5,{speed:1,color:[.7,.7,.7],life:.3})}hitscanAttack(e,t,i){this.bulletPool.fire(e,t),this.particleSystem.emit(e.x,e.y,e.z,3,{speed:.5,color:[1,.5,0],life:.1,size:.05})}magicAttack(e,t){this.particleSystem.emit(e.x+t.x,e.y+t.y,e.z+t.z,40,{speed:5,color:[.6,.2,1],life:1.5,size:.1,spread:.3})}getCurrentWeapon(){return this.currentWeapon}getCooldownProgress(){return 1-this.cooldownTimer/this.currentWeapon.cooldown}}class MC{entityManager;player;survivalStats;bulletPool;constructor(e,t,i,r){this.entityManager=e,this.player=t,this.survivalStats=i,this.bulletPool=r}update(e){const t=this.entityManager.getCreatures();for(const r of t){if(r.state!==2)continue;const s=r.position.x-this.player.position.x,o=r.position.z-this.player.position.z;Math.sqrt(s*s+o*o)<1.5&&r.attackCooldownTimer<=0&&this.survivalStats.addHealth(-r.getAttackDamage())}const i=this.bulletPool.getActiveBullets();for(const r of i)for(const s of t){if(s.state===4)continue;const o=s.position.x-r.x,a=s.position.y-r.y,l=s.position.z-r.z;if(Math.sqrt(o*o+a*a+l*l)<1){s.takeDamage(30),r.alive=!1;break}}}}function cl(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var h_={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,s){function o(u,h){if(!r[u]){if(!i[u]){var f=typeof cl=="function"&&cl;if(!h&&f)return f(u,!0);if(a)return a(u,!0);var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d}var p=r[u]={exports:{}};i[u][0].call(p.exports,function(g){var y=i[u][1][g];return o(y||g)},p,p.exports,t,i,r,s)}return r[u].exports}for(var a=typeof cl=="function"&&cl,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(t,i,r){(function(s){var o=s.MutationObserver||s.WebKitMutationObserver,a;if(o){var l=0,u=new o(g),h=s.document.createTextNode("");u.observe(h,{characterData:!0}),a=function(){h.data=l=++l%2}}else if(!s.setImmediate&&typeof s.MessageChannel<"u"){var f=new s.MessageChannel;f.port1.onmessage=g,a=function(){f.port2.postMessage(0)}}else"document"in s&&"onreadystatechange"in s.document.createElement("script")?a=function(){var m=s.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},s.document.documentElement.appendChild(m)}:a=function(){setTimeout(g,0)};var d,p=[];function g(){d=!0;for(var m,c,v=p.length;v;){for(c=p,p=[],m=-1;++m<v;)c[m]();v=p.length}d=!1}i.exports=y;function y(m){p.push(m)===1&&!d&&a()}}).call(this,typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,i,r){var s=t(1);function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],h=["PENDING"];i.exports=f;function f(T){if(typeof T!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,T!==o&&y(this,T)}f.prototype.catch=function(T){return this.then(null,T)},f.prototype.then=function(T,A){if(typeof T!="function"&&this.state===u||typeof A!="function"&&this.state===l)return this;var w=new this.constructor(o);if(this.state!==h){var F=this.state===u?T:A;p(w,F,this.outcome)}else this.queue.push(new d(w,T,A));return w};function d(T,A,w){this.promise=T,typeof A=="function"&&(this.onFulfilled=A,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}d.prototype.callFulfilled=function(T){a.resolve(this.promise,T)},d.prototype.otherCallFulfilled=function(T){p(this.promise,this.onFulfilled,T)},d.prototype.callRejected=function(T){a.reject(this.promise,T)},d.prototype.otherCallRejected=function(T){p(this.promise,this.onRejected,T)};function p(T,A,w){s(function(){var F;try{F=A(w)}catch(M){return a.reject(T,M)}F===T?a.reject(T,new TypeError("Cannot resolve promise with itself")):a.resolve(T,F)})}a.resolve=function(T,A){var w=m(g,A);if(w.status==="error")return a.reject(T,w.value);var F=w.value;if(F)y(T,F);else{T.state=u,T.outcome=A;for(var M=-1,C=T.queue.length;++M<C;)T.queue[M].callFulfilled(A)}return T},a.reject=function(T,A){T.state=l,T.outcome=A;for(var w=-1,F=T.queue.length;++w<F;)T.queue[w].callRejected(A);return T};function g(T){var A=T&&T.then;if(T&&(typeof T=="object"||typeof T=="function")&&typeof A=="function")return function(){A.apply(T,arguments)}}function y(T,A){var w=!1;function F(q){w||(w=!0,a.reject(T,q))}function M(q){w||(w=!0,a.resolve(T,q))}function C(){A(M,F)}var H=m(C);H.status==="error"&&F(H.value)}function m(T,A){var w={};try{w.value=T(A),w.status="success"}catch(F){w.status="error",w.value=F}return w}f.resolve=c;function c(T){return T instanceof this?T:a.resolve(new this(o),T)}f.reject=v;function v(T){var A=new this(o);return a.reject(A,T)}f.all=_;function _(T){var A=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=T.length,F=!1;if(!w)return this.resolve([]);for(var M=new Array(w),C=0,H=-1,q=new this(o);++H<w;)ie(T[H],H);return q;function ie(U,G){A.resolve(U).then(Q,function(ne){F||(F=!0,a.reject(q,ne))});function Q(ne){M[G]=ne,++C===w&&!F&&(F=!0,a.resolve(q,M))}}}f.race=S;function S(T){var A=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=T.length,F=!1;if(!w)return this.resolve([]);for(var M=-1,C=new this(o);++M<w;)H(T[M]);return C;function H(q){A.resolve(q).then(function(ie){F||(F=!0,a.resolve(C,ie))},function(ie){F||(F=!0,a.reject(C,ie))})}}},{1:1}],3:[function(t,i,r){(function(s){typeof s.Promise!="function"&&(s.Promise=t(2))}).call(this,typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(t,i,r){var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x};function o(x,L){if(!(x instanceof L))throw new TypeError("Cannot call a class as a function")}function a(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var l=a();function u(){try{if(!l||!l.open)return!1;var x=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),L=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!x||L)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function h(x,L){x=x||[],L=L||{};try{return new Blob(x,L)}catch(D){if(D.name!=="TypeError")throw D;for(var b=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,I=new b,k=0;k<x.length;k+=1)I.append(x[k]);return I.getBlob(L.type)}}typeof Promise>"u"&&t(3);var f=Promise;function d(x,L){L&&x.then(function(b){L(null,b)},function(b){L(b)})}function p(x,L,b){typeof L=="function"&&x.then(L),typeof b=="function"&&x.catch(b)}function g(x){return typeof x!="string"&&(console.warn(x+" used as a key, but it is not a string."),x=String(x)),x}function y(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var m="local-forage-detect-blob-support",c=void 0,v={},_=Object.prototype.toString,S="readonly",T="readwrite";function A(x){for(var L=x.length,b=new ArrayBuffer(L),I=new Uint8Array(b),k=0;k<L;k++)I[k]=x.charCodeAt(k);return b}function w(x){return new f(function(L){var b=x.transaction(m,T),I=h([""]);b.objectStore(m).put(I,"key"),b.onabort=function(k){k.preventDefault(),k.stopPropagation(),L(!1)},b.oncomplete=function(){var k=navigator.userAgent.match(/Chrome\/(\d+)/),D=navigator.userAgent.match(/Edge\//);L(D||!k||parseInt(k[1],10)>=43)}}).catch(function(){return!1})}function F(x){return typeof c=="boolean"?f.resolve(c):w(x).then(function(L){return c=L,c})}function M(x){var L=v[x.name],b={};b.promise=new f(function(I,k){b.resolve=I,b.reject=k}),L.deferredOperations.push(b),L.dbReady?L.dbReady=L.dbReady.then(function(){return b.promise}):L.dbReady=b.promise}function C(x){var L=v[x.name],b=L.deferredOperations.pop();if(b)return b.resolve(),b.promise}function H(x,L){var b=v[x.name],I=b.deferredOperations.pop();if(I)return I.reject(L),I.promise}function q(x,L){return new f(function(b,I){if(v[x.name]=v[x.name]||se(),x.db)if(L)M(x),x.db.close();else return b(x.db);var k=[x.name];L&&k.push(x.version);var D=l.open.apply(l,k);L&&(D.onupgradeneeded=function(J){var le=D.result;try{le.createObjectStore(x.storeName),J.oldVersion<=1&&le.createObjectStore(m)}catch(ae){if(ae.name==="ConstraintError")console.warn('The database "'+x.name+'" has been upgraded from version '+J.oldVersion+" to version "+J.newVersion+', but the storage "'+x.storeName+'" already exists.');else throw ae}}),D.onerror=function(J){J.preventDefault(),I(D.error)},D.onsuccess=function(){var J=D.result;J.onversionchange=function(le){le.target.close()},b(J),C(x)}})}function ie(x){return q(x,!1)}function U(x){return q(x,!0)}function G(x,L){if(!x.db)return!0;var b=!x.db.objectStoreNames.contains(x.storeName),I=x.version<x.db.version,k=x.version>x.db.version;if(I&&(x.version!==L&&console.warn('The database "'+x.name+`" can't be downgraded from version `+x.db.version+" to version "+x.version+"."),x.version=x.db.version),k||b){if(b){var D=x.db.version+1;D>x.version&&(x.version=D)}return!0}return!1}function Q(x){return new f(function(L,b){var I=new FileReader;I.onerror=b,I.onloadend=function(k){var D=btoa(k.target.result||"");L({__local_forage_encoded_blob:!0,data:D,type:x.type})},I.readAsBinaryString(x)})}function ne(x){var L=A(atob(x.data));return h([L],{type:x.type})}function O(x){return x&&x.__local_forage_encoded_blob}function V(x){var L=this,b=L._initReady().then(function(){var I=v[L._dbInfo.name];if(I&&I.dbReady)return I.dbReady});return p(b,x,x),b}function X(x){M(x);for(var L=v[x.name],b=L.forages,I=0;I<b.length;I++){var k=b[I];k._dbInfo.db&&(k._dbInfo.db.close(),k._dbInfo.db=null)}return x.db=null,ie(x).then(function(D){return x.db=D,G(x)?U(x):D}).then(function(D){x.db=L.db=D;for(var J=0;J<b.length;J++)b[J]._dbInfo.db=D}).catch(function(D){throw H(x,D),D})}function ee(x,L,b,I){I===void 0&&(I=1);try{var k=x.db.transaction(x.storeName,L);b(null,k)}catch(D){if(I>0&&(!x.db||D.name==="InvalidStateError"||D.name==="NotFoundError"))return f.resolve().then(function(){if(!x.db||D.name==="NotFoundError"&&!x.db.objectStoreNames.contains(x.storeName)&&x.version<=x.db.version)return x.db&&(x.version=x.db.version+1),U(x)}).then(function(){return X(x).then(function(){ee(x,L,b,I-1)})}).catch(b);b(D)}}function se(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Z(x){var L=this,b={db:null};if(x)for(var I in x)b[I]=x[I];var k=v[b.name];k||(k=se(),v[b.name]=k),k.forages.push(L),L._initReady||(L._initReady=L.ready,L.ready=V);var D=[];function J(){return f.resolve()}for(var le=0;le<k.forages.length;le++){var ae=k.forages[le];ae!==L&&D.push(ae._initReady().catch(J))}var he=k.forages.slice(0);return f.all(D).then(function(){return b.db=k.db,ie(b)}).then(function(ge){return b.db=ge,G(b,L._defaultConfig.version)?U(b):ge}).then(function(ge){b.db=k.db=ge,L._dbInfo=b;for(var Pe=0;Pe<he.length;Pe++){var rt=he[Pe];rt!==L&&(rt._dbInfo.db=b.db,rt._dbInfo.version=b.version)}})}function re(x,L){var b=this;x=g(x);var I=new f(function(k,D){b.ready().then(function(){ee(b._dbInfo,S,function(J,le){if(J)return D(J);try{var ae=le.objectStore(b._dbInfo.storeName),he=ae.get(x);he.onsuccess=function(){var ge=he.result;ge===void 0&&(ge=null),O(ge)&&(ge=ne(ge)),k(ge)},he.onerror=function(){D(he.error)}}catch(ge){D(ge)}})}).catch(D)});return d(I,L),I}function ve(x,L){var b=this,I=new f(function(k,D){b.ready().then(function(){ee(b._dbInfo,S,function(J,le){if(J)return D(J);try{var ae=le.objectStore(b._dbInfo.storeName),he=ae.openCursor(),ge=1;he.onsuccess=function(){var Pe=he.result;if(Pe){var rt=Pe.value;O(rt)&&(rt=ne(rt));var ht=x(rt,Pe.key,ge++);ht!==void 0?k(ht):Pe.continue()}else k()},he.onerror=function(){D(he.error)}}catch(Pe){D(Pe)}})}).catch(D)});return d(I,L),I}function Ee(x,L,b){var I=this;x=g(x);var k=new f(function(D,J){var le;I.ready().then(function(){return le=I._dbInfo,_.call(L)==="[object Blob]"?F(le.db).then(function(ae){return ae?L:Q(L)}):L}).then(function(ae){ee(I._dbInfo,T,function(he,ge){if(he)return J(he);try{var Pe=ge.objectStore(I._dbInfo.storeName);ae===null&&(ae=void 0);var rt=Pe.put(ae,x);ge.oncomplete=function(){ae===void 0&&(ae=null),D(ae)},ge.onabort=ge.onerror=function(){var ht=rt.error?rt.error:rt.transaction.error;J(ht)}}catch(ht){J(ht)}})}).catch(J)});return d(k,b),k}function we(x,L){var b=this;x=g(x);var I=new f(function(k,D){b.ready().then(function(){ee(b._dbInfo,T,function(J,le){if(J)return D(J);try{var ae=le.objectStore(b._dbInfo.storeName),he=ae.delete(x);le.oncomplete=function(){k()},le.onerror=function(){D(he.error)},le.onabort=function(){var ge=he.error?he.error:he.transaction.error;D(ge)}}catch(ge){D(ge)}})}).catch(D)});return d(I,L),I}function Ge(x){var L=this,b=new f(function(I,k){L.ready().then(function(){ee(L._dbInfo,T,function(D,J){if(D)return k(D);try{var le=J.objectStore(L._dbInfo.storeName),ae=le.clear();J.oncomplete=function(){I()},J.onabort=J.onerror=function(){var he=ae.error?ae.error:ae.transaction.error;k(he)}}catch(he){k(he)}})}).catch(k)});return d(b,x),b}function We(x){var L=this,b=new f(function(I,k){L.ready().then(function(){ee(L._dbInfo,S,function(D,J){if(D)return k(D);try{var le=J.objectStore(L._dbInfo.storeName),ae=le.count();ae.onsuccess=function(){I(ae.result)},ae.onerror=function(){k(ae.error)}}catch(he){k(he)}})}).catch(k)});return d(b,x),b}function Ce(x,L){var b=this,I=new f(function(k,D){if(x<0){k(null);return}b.ready().then(function(){ee(b._dbInfo,S,function(J,le){if(J)return D(J);try{var ae=le.objectStore(b._dbInfo.storeName),he=!1,ge=ae.openKeyCursor();ge.onsuccess=function(){var Pe=ge.result;if(!Pe){k(null);return}x===0||he?k(Pe.key):(he=!0,Pe.advance(x))},ge.onerror=function(){D(ge.error)}}catch(Pe){D(Pe)}})}).catch(D)});return d(I,L),I}function at(x){var L=this,b=new f(function(I,k){L.ready().then(function(){ee(L._dbInfo,S,function(D,J){if(D)return k(D);try{var le=J.objectStore(L._dbInfo.storeName),ae=le.openKeyCursor(),he=[];ae.onsuccess=function(){var ge=ae.result;if(!ge){I(he);return}he.push(ge.key),ge.continue()},ae.onerror=function(){k(ae.error)}}catch(ge){k(ge)}})}).catch(k)});return d(b,x),b}function j(x,L){L=y.apply(this,arguments);var b=this.config();x=typeof x!="function"&&x||{},x.name||(x.name=x.name||b.name,x.storeName=x.storeName||b.storeName);var I=this,k;if(!x.name)k=f.reject("Invalid arguments");else{var D=x.name===b.name&&I._dbInfo.db,J=D?f.resolve(I._dbInfo.db):ie(x).then(function(le){var ae=v[x.name],he=ae.forages;ae.db=le;for(var ge=0;ge<he.length;ge++)he[ge]._dbInfo.db=le;return le});x.storeName?k=J.then(function(le){if(le.objectStoreNames.contains(x.storeName)){var ae=le.version+1;M(x);var he=v[x.name],ge=he.forages;le.close();for(var Pe=0;Pe<ge.length;Pe++){var rt=ge[Pe];rt._dbInfo.db=null,rt._dbInfo.version=ae}var ht=new f(function(dt,Gt){var kt=l.open(x.name,ae);kt.onerror=function(Vn){var to=kt.result;to.close(),Gt(Vn)},kt.onupgradeneeded=function(){var Vn=kt.result;Vn.deleteObjectStore(x.storeName)},kt.onsuccess=function(){var Vn=kt.result;Vn.close(),dt(Vn)}});return ht.then(function(dt){he.db=dt;for(var Gt=0;Gt<ge.length;Gt++){var kt=ge[Gt];kt._dbInfo.db=dt,C(kt._dbInfo)}}).catch(function(dt){throw(H(x,dt)||f.resolve()).catch(function(){}),dt})}}):k=J.then(function(le){M(x);var ae=v[x.name],he=ae.forages;le.close();for(var ge=0;ge<he.length;ge++){var Pe=he[ge];Pe._dbInfo.db=null}var rt=new f(function(ht,dt){var Gt=l.deleteDatabase(x.name);Gt.onerror=function(){var kt=Gt.result;kt&&kt.close(),dt(Gt.error)},Gt.onblocked=function(){console.warn('dropInstance blocked for database "'+x.name+'" until all open connections are closed')},Gt.onsuccess=function(){var kt=Gt.result;kt&&kt.close(),ht(kt)}});return rt.then(function(ht){ae.db=ht;for(var dt=0;dt<he.length;dt++){var Gt=he[dt];C(Gt._dbInfo)}}).catch(function(ht){throw(H(x,ht)||f.resolve()).catch(function(){}),ht})})}return d(k,L),k}var en={_driver:"asyncStorage",_initStorage:Z,_support:u(),iterate:ve,getItem:re,setItem:Ee,removeItem:we,clear:Ge,length:We,key:Ce,keys:at,dropInstance:j};function Ue(){return typeof openDatabase=="function"}var Fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Le="~~local_forage_type~",xt=/^~~local_forage_type~([^~]+)~/,Ye="__lfsc__:",P=Ye.length,E="arbf",W="blob",fe="si08",ce="ui08",pe="uic8",De="si16",Se="si32",Re="ur16",Be="ui32",qe="fl32",ue="fl64",ft=P+E.length,Qe=Object.prototype.toString;function je(x){var L=x.length*.75,b=x.length,I,k=0,D,J,le,ae;x[x.length-1]==="="&&(L--,x[x.length-2]==="="&&L--);var he=new ArrayBuffer(L),ge=new Uint8Array(he);for(I=0;I<b;I+=4)D=Fe.indexOf(x[I]),J=Fe.indexOf(x[I+1]),le=Fe.indexOf(x[I+2]),ae=Fe.indexOf(x[I+3]),ge[k++]=D<<2|J>>4,ge[k++]=(J&15)<<4|le>>2,ge[k++]=(le&3)<<6|ae&63;return he}function Ie(x){var L=new Uint8Array(x),b="",I;for(I=0;I<L.length;I+=3)b+=Fe[L[I]>>2],b+=Fe[(L[I]&3)<<4|L[I+1]>>4],b+=Fe[(L[I+1]&15)<<2|L[I+2]>>6],b+=Fe[L[I+2]&63];return L.length%3===2?b=b.substring(0,b.length-1)+"=":L.length%3===1&&(b=b.substring(0,b.length-2)+"=="),b}function be(x,L){var b="";if(x&&(b=Qe.call(x)),x&&(b==="[object ArrayBuffer]"||x.buffer&&Qe.call(x.buffer)==="[object ArrayBuffer]")){var I,k=Ye;x instanceof ArrayBuffer?(I=x,k+=E):(I=x.buffer,b==="[object Int8Array]"?k+=fe:b==="[object Uint8Array]"?k+=ce:b==="[object Uint8ClampedArray]"?k+=pe:b==="[object Int16Array]"?k+=De:b==="[object Uint16Array]"?k+=Re:b==="[object Int32Array]"?k+=Se:b==="[object Uint32Array]"?k+=Be:b==="[object Float32Array]"?k+=qe:b==="[object Float64Array]"?k+=ue:L(new Error("Failed to get type for BinaryArray"))),L(k+Ie(I))}else if(b==="[object Blob]"){var D=new FileReader;D.onload=function(){var J=Le+x.type+"~"+Ie(this.result);L(Ye+W+J)},D.readAsArrayBuffer(x)}else try{L(JSON.stringify(x))}catch(J){console.error("Couldn't convert value into a JSON string: ",x),L(null,J)}}function $e(x){if(x.substring(0,P)!==Ye)return JSON.parse(x);var L=x.substring(ft),b=x.substring(P,ft),I;if(b===W&&xt.test(L)){var k=L.match(xt);I=k[1],L=L.substring(k[0].length)}var D=je(L);switch(b){case E:return D;case W:return h([D],{type:I});case fe:return new Int8Array(D);case ce:return new Uint8Array(D);case pe:return new Uint8ClampedArray(D);case De:return new Int16Array(D);case Re:return new Uint16Array(D);case Se:return new Int32Array(D);case Be:return new Uint32Array(D);case qe:return new Float32Array(D);case ue:return new Float64Array(D);default:throw new Error("Unkown type: "+b)}}var lt={serialize:be,deserialize:$e,stringToBuffer:je,bufferToString:Ie};function Tt(x,L,b,I){x.executeSql("CREATE TABLE IF NOT EXISTS "+L.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],b,I)}function Je(x){var L=this,b={db:null};if(x)for(var I in x)b[I]=typeof x[I]!="string"?x[I].toString():x[I];var k=new f(function(D,J){try{b.db=openDatabase(b.name,String(b.version),b.description,b.size)}catch(le){return J(le)}b.db.transaction(function(le){Tt(le,b,function(){L._dbInfo=b,D()},function(ae,he){J(he)})},J)});return b.serializer=lt,k}function me(x,L,b,I,k,D){x.executeSql(b,I,k,function(J,le){le.code===le.SYNTAX_ERR?J.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[L.storeName],function(ae,he){he.rows.length?D(ae,le):Tt(ae,L,function(){ae.executeSql(b,I,k,D)},D)},D):D(J,le)},D)}function N(x,L){var b=this;x=g(x);var I=new f(function(k,D){b.ready().then(function(){var J=b._dbInfo;J.db.transaction(function(le){me(le,J,"SELECT * FROM "+J.storeName+" WHERE key = ? LIMIT 1",[x],function(ae,he){var ge=he.rows.length?he.rows.item(0).value:null;ge&&(ge=J.serializer.deserialize(ge)),k(ge)},function(ae,he){D(he)})})}).catch(D)});return d(I,L),I}function xe(x,L){var b=this,I=new f(function(k,D){b.ready().then(function(){var J=b._dbInfo;J.db.transaction(function(le){me(le,J,"SELECT * FROM "+J.storeName,[],function(ae,he){for(var ge=he.rows,Pe=ge.length,rt=0;rt<Pe;rt++){var ht=ge.item(rt),dt=ht.value;if(dt&&(dt=J.serializer.deserialize(dt)),dt=x(dt,ht.key,rt+1),dt!==void 0){k(dt);return}}k()},function(ae,he){D(he)})})}).catch(D)});return d(I,L),I}function ye(x,L,b,I){var k=this;x=g(x);var D=new f(function(J,le){k.ready().then(function(){L===void 0&&(L=null);var ae=L,he=k._dbInfo;he.serializer.serialize(L,function(ge,Pe){Pe?le(Pe):he.db.transaction(function(rt){me(rt,he,"INSERT OR REPLACE INTO "+he.storeName+" (key, value) VALUES (?, ?)",[x,ge],function(){J(ae)},function(ht,dt){le(dt)})},function(rt){if(rt.code===rt.QUOTA_ERR){if(I>0){J(ye.apply(k,[x,ae,b,I-1]));return}le(rt)}})})}).catch(le)});return d(D,b),D}function Xe(x,L,b){return ye.apply(this,[x,L,b,1])}function Oe(x,L){var b=this;x=g(x);var I=new f(function(k,D){b.ready().then(function(){var J=b._dbInfo;J.db.transaction(function(le){me(le,J,"DELETE FROM "+J.storeName+" WHERE key = ?",[x],function(){k()},function(ae,he){D(he)})})}).catch(D)});return d(I,L),I}function mt(x){var L=this,b=new f(function(I,k){L.ready().then(function(){var D=L._dbInfo;D.db.transaction(function(J){me(J,D,"DELETE FROM "+D.storeName,[],function(){I()},function(le,ae){k(ae)})})}).catch(k)});return d(b,x),b}function gt(x){var L=this,b=new f(function(I,k){L.ready().then(function(){var D=L._dbInfo;D.db.transaction(function(J){me(J,D,"SELECT COUNT(key) as c FROM "+D.storeName,[],function(le,ae){var he=ae.rows.item(0).c;I(he)},function(le,ae){k(ae)})})}).catch(k)});return d(b,x),b}function Bt(x,L){var b=this,I=new f(function(k,D){b.ready().then(function(){var J=b._dbInfo;J.db.transaction(function(le){me(le,J,"SELECT key FROM "+J.storeName+" WHERE id = ? LIMIT 1",[x+1],function(ae,he){var ge=he.rows.length?he.rows.item(0).key:null;k(ge)},function(ae,he){D(he)})})}).catch(D)});return d(I,L),I}function tn(x){var L=this,b=new f(function(I,k){L.ready().then(function(){var D=L._dbInfo;D.db.transaction(function(J){me(J,D,"SELECT key FROM "+D.storeName,[],function(le,ae){for(var he=[],ge=0;ge<ae.rows.length;ge++)he.push(ae.rows.item(ge).key);I(he)},function(le,ae){k(ae)})})}).catch(k)});return d(b,x),b}function vt(x){return new f(function(L,b){x.transaction(function(I){I.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(k,D){for(var J=[],le=0;le<D.rows.length;le++)J.push(D.rows.item(le).name);L({db:x,storeNames:J})},function(k,D){b(D)})},function(I){b(I)})})}function nn(x,L){L=y.apply(this,arguments);var b=this.config();x=typeof x!="function"&&x||{},x.name||(x.name=x.name||b.name,x.storeName=x.storeName||b.storeName);var I=this,k;return x.name?k=new f(function(D){var J;x.name===b.name?J=I._dbInfo.db:J=openDatabase(x.name,"","",0),x.storeName?D({db:J,storeNames:[x.storeName]}):D(vt(J))}).then(function(D){return new f(function(J,le){D.db.transaction(function(ae){function he(ht){return new f(function(dt,Gt){ae.executeSql("DROP TABLE IF EXISTS "+ht,[],function(){dt()},function(kt,Vn){Gt(Vn)})})}for(var ge=[],Pe=0,rt=D.storeNames.length;Pe<rt;Pe++)ge.push(he(D.storeNames[Pe]));f.all(ge).then(function(){J()}).catch(function(ht){le(ht)})},function(ae){le(ae)})})}):k=f.reject("Invalid arguments"),d(k,L),k}var Gn={_driver:"webSQLStorage",_initStorage:Je,_support:Ue(),iterate:xe,getItem:N,setItem:Xe,removeItem:Oe,clear:mt,length:gt,key:Bt,keys:tn,dropInstance:nn};function da(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function pa(x,L){var b=x.name+"/";return x.storeName!==L.storeName&&(b+=x.storeName+"/"),b}function Xr(){var x="_localforage_support_test";try{return localStorage.setItem(x,!0),localStorage.removeItem(x),!1}catch{return!0}}function ma(){return!Xr()||localStorage.length>0}function jr(x){var L=this,b={};if(x)for(var I in x)b[I]=x[I];return b.keyPrefix=pa(x,L._defaultConfig),ma()?(L._dbInfo=b,b.serializer=lt,f.resolve()):f.reject()}function ga(x){var L=this,b=L.ready().then(function(){for(var I=L._dbInfo.keyPrefix,k=localStorage.length-1;k>=0;k--){var D=localStorage.key(k);D.indexOf(I)===0&&localStorage.removeItem(D)}});return d(b,x),b}function va(x,L){var b=this;x=g(x);var I=b.ready().then(function(){var k=b._dbInfo,D=localStorage.getItem(k.keyPrefix+x);return D&&(D=k.serializer.deserialize(D)),D});return d(I,L),I}function Au(x,L){var b=this,I=b.ready().then(function(){for(var k=b._dbInfo,D=k.keyPrefix,J=D.length,le=localStorage.length,ae=1,he=0;he<le;he++){var ge=localStorage.key(he);if(ge.indexOf(D)===0){var Pe=localStorage.getItem(ge);if(Pe&&(Pe=k.serializer.deserialize(Pe)),Pe=x(Pe,ge.substring(J),ae++),Pe!==void 0)return Pe}}});return d(I,L),I}function Cu(x,L){var b=this,I=b.ready().then(function(){var k=b._dbInfo,D;try{D=localStorage.key(x)}catch{D=null}return D&&(D=D.substring(k.keyPrefix.length)),D});return d(I,L),I}function Ru(x){var L=this,b=L.ready().then(function(){for(var I=L._dbInfo,k=localStorage.length,D=[],J=0;J<k;J++){var le=localStorage.key(J);le.indexOf(I.keyPrefix)===0&&D.push(le.substring(I.keyPrefix.length))}return D});return d(b,x),b}function R(x){var L=this,b=L.keys().then(function(I){return I.length});return d(b,x),b}function z(x,L){var b=this;x=g(x);var I=b.ready().then(function(){var k=b._dbInfo;localStorage.removeItem(k.keyPrefix+x)});return d(I,L),I}function K(x,L,b){var I=this;x=g(x);var k=I.ready().then(function(){L===void 0&&(L=null);var D=L;return new f(function(J,le){var ae=I._dbInfo;ae.serializer.serialize(L,function(he,ge){if(ge)le(ge);else try{localStorage.setItem(ae.keyPrefix+x,he),J(D)}catch(Pe){(Pe.name==="QuotaExceededError"||Pe.name==="NS_ERROR_DOM_QUOTA_REACHED")&&le(Pe),le(Pe)}})})});return d(k,b),k}function $(x,L){if(L=y.apply(this,arguments),x=typeof x!="function"&&x||{},!x.name){var b=this.config();x.name=x.name||b.name,x.storeName=x.storeName||b.storeName}var I=this,k;return x.name?k=new f(function(D){x.storeName?D(pa(x,I._defaultConfig)):D(x.name+"/")}).then(function(D){for(var J=localStorage.length-1;J>=0;J--){var le=localStorage.key(J);le.indexOf(D)===0&&localStorage.removeItem(le)}}):k=f.reject("Invalid arguments"),d(k,L),k}var Y={_driver:"localStorageWrapper",_initStorage:jr,_support:da(),iterate:Au,getItem:va,setItem:K,removeItem:z,clear:ga,length:R,key:Cu,keys:Ru,dropInstance:$},Te=function(L,b){return L===b||typeof L=="number"&&typeof b=="number"&&isNaN(L)&&isNaN(b)},Ne=function(L,b){for(var I=L.length,k=0;k<I;){if(Te(L[k],b))return!0;k++}return!1},ke=Array.isArray||function(x){return Object.prototype.toString.call(x)==="[object Array]"},ze={},Ze={},Ve={INDEXEDDB:en,WEBSQL:Gn,LOCALSTORAGE:Y},Ke=[Ve.INDEXEDDB._driver,Ve.WEBSQL._driver,Ve.LOCALSTORAGE._driver],St=["dropInstance"],rn=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(St),Ht={description:"",driver:Ke.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Jn(x,L){x[L]=function(){var b=arguments;return x.ready().then(function(){return x[L].apply(x,b)})}}function yt(){for(var x=1;x<arguments.length;x++){var L=arguments[x];if(L)for(var b in L)L.hasOwnProperty(b)&&(ke(L[b])?arguments[0][b]=L[b].slice():arguments[0][b]=L[b])}return arguments[0]}var et=function(){function x(L){o(this,x);for(var b in Ve)if(Ve.hasOwnProperty(b)){var I=Ve[b],k=I._driver;this[b]=k,ze[k]||this.defineDriver(I)}this._defaultConfig=yt({},Ht),this._config=yt({},this._defaultConfig,L),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return x.prototype.config=function(b){if((typeof b>"u"?"undefined":s(b))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var I in b){if(I==="storeName"&&(b[I]=b[I].replace(/\W/g,"_")),I==="version"&&typeof b[I]!="number")return new Error("Database version must be a number.");this._config[I]=b[I]}return"driver"in b&&b.driver?this.setDriver(this._config.driver):!0}else return typeof b=="string"?this._config[b]:this._config},x.prototype.defineDriver=function(b,I,k){var D=new f(function(J,le){try{var ae=b._driver,he=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!b._driver){le(he);return}for(var ge=rn.concat("_initStorage"),Pe=0,rt=ge.length;Pe<rt;Pe++){var ht=ge[Pe],dt=!Ne(St,ht);if((dt||b[ht])&&typeof b[ht]!="function"){le(he);return}}var Gt=function(){for(var to=function(m_){return function(){var g_=new Error("Method "+m_+" is not implemented by the current driver"),td=f.reject(g_);return d(td,arguments[arguments.length-1]),td}},bu=0,p_=St.length;bu<p_;bu++){var Pu=St[bu];b[Pu]||(b[Pu]=to(Pu))}};Gt();var kt=function(to){ze[ae]&&console.info("Redefining LocalForage driver: "+ae),ze[ae]=b,Ze[ae]=to,J()};"_support"in b?b._support&&typeof b._support=="function"?b._support().then(kt,le):kt(!!b._support):kt(!0)}catch(Vn){le(Vn)}});return p(D,I,k),D},x.prototype.driver=function(){return this._driver||null},x.prototype.getDriver=function(b,I,k){var D=ze[b]?f.resolve(ze[b]):f.reject(new Error("Driver not found."));return p(D,I,k),D},x.prototype.getSerializer=function(b){var I=f.resolve(lt);return p(I,b),I},x.prototype.ready=function(b){var I=this,k=I._driverSet.then(function(){return I._ready===null&&(I._ready=I._initDriver()),I._ready});return p(k,b,b),k},x.prototype.setDriver=function(b,I,k){var D=this;ke(b)||(b=[b]);var J=this._getSupportedDrivers(b);function le(){D._config.driver=D.driver()}function ae(Pe){return D._extend(Pe),le(),D._ready=D._initStorage(D._config),D._ready}function he(Pe){return function(){var rt=0;function ht(){for(;rt<Pe.length;){var dt=Pe[rt];return rt++,D._dbInfo=null,D._ready=null,D.getDriver(dt).then(ae).catch(ht)}le();var Gt=new Error("No available storage method found.");return D._driverSet=f.reject(Gt),D._driverSet}return ht()}}var ge=this._driverSet!==null?this._driverSet.catch(function(){return f.resolve()}):f.resolve();return this._driverSet=ge.then(function(){var Pe=J[0];return D._dbInfo=null,D._ready=null,D.getDriver(Pe).then(function(rt){D._driver=rt._driver,le(),D._wrapLibraryMethodsWithReady(),D._initDriver=he(J)})}).catch(function(){le();var Pe=new Error("No available storage method found.");return D._driverSet=f.reject(Pe),D._driverSet}),p(this._driverSet,I,k),this._driverSet},x.prototype.supports=function(b){return!!Ze[b]},x.prototype._extend=function(b){yt(this,b)},x.prototype._getSupportedDrivers=function(b){for(var I=[],k=0,D=b.length;k<D;k++){var J=b[k];this.supports(J)&&I.push(J)}return I},x.prototype._wrapLibraryMethodsWithReady=function(){for(var b=0,I=rn.length;b<I;b++)Jn(this,rn[b])},x.prototype.createInstance=function(b){return new x(b)},x}(),eo=new et;i.exports=eo},{3:3}]},{},[4])(4)})})(h_);var EC=h_.exports;const So=Yf(EC),fl="voxel_survival_save";class TC{player=null;survivalStats=null;terrainGenerator=null;biomeGenerator=null;chunks=null;lastAutoSave=0;init(e,t,i,r,s){this.player=e,this.survivalStats=t,this.terrainGenerator=i,this.biomeGenerator=r,this.chunks=s,So.config({name:"voxel_survival"})}async save(){if(!this.player||!this.survivalStats||!this.terrainGenerator||!this.biomeGenerator||!this.chunks)return;const e={};this.chunks.forEach((r,s)=>{const o=this.biomeGenerator.generateBiomeMap(r.chunkX,r.chunkZ),a=new Qh(r.chunkX,r.chunkZ);this.terrainGenerator.generateChunk(a,o);const l=[];for(let u=0;u<Un;u++)for(let h=0;h<He;h++)for(let f=0;f<He;f++){const d=r.getBlock(f,u,h),p=a.getBlock(f,u,h);d!==p&&l.push({x:r.worldX+f,y:u,z:r.worldZ+h,newBlock:d})}l.length>0&&(e[s]=l)});const t=Ns.getState(),i={version:2,seed:(this.terrainGenerator,0),timestamp:Date.now(),player:{position:[this.player.position.x,this.player.position.y,this.player.position.z],rotation:[this.player.yaw,this.player.pitch],stats:{health:this.survivalStats.health,hunger:this.survivalStats.hunger,thirst:this.survivalStats.thirst,stamina:this.survivalStats.stamina,temperature:this.survivalStats.temperature,mana:this.survivalStats.mana},dimension:"overworld"},inventory:t.slots,deltas:e,creatures:[]};await So.setItem(fl,i)}async load(){return await So.getItem(fl)}async hasSave(){return await So.getItem(fl)!==null}async deleteSave(){await So.removeItem(fl)}checkAutosave(e){e-this.lastAutoSave>HA&&(this.lastAutoSave=e,this.save().catch(console.error))}}class wC{geometry;material;points;positions;velocities;count=300;constructor(e){this.positions=new Float32Array(this.count*3),this.velocities=new Float32Array(this.count*3);for(let t=0;t<this.count;t++)this.positions[t*3]=(Math.random()-.5)*2,this.positions[t*3+1]=Math.random()*3,this.positions[t*3+2]=(Math.random()-.5)*2,this.velocities[t*3]=(Math.random()-.5)*.5,this.velocities[t*3+1]=Math.random()*2+.5,this.velocities[t*3+2]=(Math.random()-.5)*.5;this.geometry=new Ln,this.geometry.setAttribute("position",new Ct(this.positions,3)),this.material=new Mu({color:11141375,size:.1,transparent:!0,opacity:.8,depthWrite:!1}),this.points=new $h(this.geometry,this.material),this.points.visible=!1,e.add(this.points)}show(e,t,i){this.points.position.set(e,t,i),this.points.visible=!0}hide(){this.points.visible=!1}update(e){if(this.points.visible){for(let t=0;t<this.count;t++)this.positions[t*3+1]+=this.velocities[t*3+1]*e,this.positions[t*3+1]>3&&(this.positions[t*3+1]=0,this.positions[t*3]=(Math.random()-.5)*2,this.positions[t*3+2]=(Math.random()-.5)*2);this.geometry.attributes.position.needsUpdate=!0}}}class AC{worldManager;portalParticles;postProcess;voidRealm=null;player;activePortals=new Map;currentDimension="overworld";constructor(e,t,i,r){this.worldManager=t,this.player=i,this.postProcess=r,this.portalParticles=new wC(e)}checkPortalActivation(e,t,i){this.countAdjacentFrames(e,t,i)>=4&&(this.activePortals.set(`${e},${t},${i}`,{x:e,y:t,z:i}),this.portalParticles.show(e+.5,t,i+.5),this.worldManager.setBlock(e,t+1,i,Me.PORTAL_ACTIVE),this.worldManager.setBlock(e,t+2,i,Me.PORTAL_ACTIVE))}countAdjacentFrames(e,t,i){let r=0;const s=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0]];for(const[o,a,l]of s)this.worldManager.getBlock(e+o,t+a,i+l)===Me.PORTAL_FRAME&&r++;return r}update(e){if(this.portalParticles.update(e),this.currentDimension==="overworld"){const t=Math.floor(this.player.position.x),i=Math.floor(this.player.position.y),r=Math.floor(this.player.position.z);this.worldManager.getBlock(t,i,r)===Me.PORTAL_ACTIVE&&this.transitionToVoid()}}transitionToVoid(){this.postProcess.fadeIn(500,()=>{this.currentDimension="void",this.postProcess.fadeOut(500)})}isInVoid(){return this.currentDimension==="void"}getDimension(){return this.currentDimension}}class CC{renderer;skyRenderer;waterRenderer;fogSystem;particleSystem;dayNightCycle;chunkRenderer;postProcess;assetManager;inputManager;worldManager=null;player=null;playerController=null;camera=null;blockInteraction=null;survivalStats=null;entityManager=null;bulletPool=null;weaponManager=null;damageSystem=null;saveManager;portalManager=null;gameState="menu";animFrameId=0;lastTime=0;elapsed=0;seed=0;paused=!1;chunkWorker=null;pendingMeshes=new Map;onStateChange=null;onStatsUpdate=null;constructor(){this.renderer=new bA,this.assetManager=new YA,this.inputManager=new KA,this.saveManager=new TC}init(e){this.assetManager.init(),this.inputManager.init(e),this.skyRenderer=new DA(this.renderer.mainScene),this.waterRenderer=new UA,this.fogSystem=new FA(this.renderer.mainScene),this.particleSystem=new VA(this.renderer.mainScene),this.dayNightCycle=new WA(this.renderer.mainScene),this.chunkRenderer=new XA(this.renderer.mainScene,this.assetManager),this.postProcess=new jA;for(let t=0;t<8;t++){const i=new Qw(16748288,0,15);this.renderer.mainScene.add(i)}this.chunkWorker=$A(),this.chunkWorker.onmessage=t=>{const{chunkX:i,chunkZ:r,positions:s,normals:o,uvs:a,colors:l,indices:u,waterPositions:h,waterNormals:f,waterUvs:d,waterIndices:p}=t.data,g=`${i},${r}`;this.pendingMeshes.delete(g),this.chunkRenderer.uploadChunk(g,{positions:s,normals:o,uvs:a,colors:l,indices:u,waterPositions:h,waterNormals:f,waterUvs:d,waterIndices:p},this.waterRenderer.getMaterial())}}startGame(e){this.seed=e,JA(e),tC(),this.worldManager=new oC(e),this.player=new lC((i,r,s)=>this.worldManager.getBlock(i,r,s)),this.player.position={x:8,y:45,z:8},this.survivalStats=new hC,this.playerController=new uC(this.player,this.inputManager,this.renderer),this.camera=new cC(this.player,this.inputManager,this.renderer),this.blockInteraction=new fC(this.player,this.inputManager,this.worldManager),this.blockInteraction.setSurvivalStats(this.survivalStats);const t=this.player.getEyePosition();this.renderer.setMainCameraPosition(t.x,t.y,t.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch),this.entityManager=new _C(this.renderer.mainScene,(i,r,s)=>this.worldManager.getBlock(i,r,s)),this.entityManager.setPlayerPosition(this.player.position),this.bulletPool=new yC(this.renderer.mainScene),this.weaponManager=new SC(this.inputManager,this.player,this.bulletPool,this.particleSystem,this.renderer),this.damageSystem=new MC(this.entityManager,this.player,this.survivalStats,this.bulletPool),this.portalManager=new AC(this.renderer.mainScene,this.worldManager,this.player,this.postProcess),this.saveManager.init(this.player,this.survivalStats,this.worldManager.getTerrainGenerator(),this.worldManager.getBiomeGenerator(),this.worldManager.getAllChunks()),this.gameState="playing",this.onStateChange?.("playing"),this.worldManager.update(this.player.position.x,this.player.position.z);for(let i=0;i<5;i++)this.worldManager.update(this.player.position.x,this.player.position.z);this.rebuildAllVisibleChunks(),this.lastTime=performance.now(),this.gameLoop()}loadGame(){this.saveManager.load().then(e=>{e&&(this.startGame(e.seed),this.player&&this.survivalStats&&(this.player.position={x:e.player.position[0],y:e.player.position[1],z:e.player.position[2]},this.player.yaw=e.player.rotation[0],this.player.pitch=e.player.rotation[1],this.survivalStats.health=e.player.stats.health,this.survivalStats.hunger=e.player.stats.hunger,this.survivalStats.thirst=e.player.stats.thirst,this.survivalStats.stamina=e.player.stats.stamina,this.survivalStats.temperature=e.player.stats.temperature,this.survivalStats.mana=e.player.stats.mana))})}gameLoop=()=>{this.animFrameId=requestAnimationFrame(this.gameLoop);const e=performance.now(),t=(e-this.lastTime)/1e3;this.lastTime=e;const i=Math.min(t,.05);this.elapsed+=i,this.inputManager.flush(),this.inputManager.isKeyJustPressed("Tab")&&this.gameState==="playing"?(this.gameState="inventory",this.onStateChange?.("inventory"),this.inputManager.exitPointerLock()):this.inputManager.isKeyJustPressed("Tab")&&this.gameState==="inventory"&&(this.gameState="playing",this.onStateChange?.("playing"));for(let o=1;o<=9;o++)this.inputManager.isKeyJustPressed(`Digit${o}`)&&Ns.getState().selectSlot(o-1);const r=this.inputManager.getScrollDelta();if(r!==0){const a=(Ns.getState().selected+(r>0?1:-1)+9)%9;Ns.getState().selectSlot(a)}if(this.inputManager.isKeyJustPressed("F5")&&this.saveManager.save().catch(console.error),this.gameState==="playing"&&!this.paused){if(this.playerController?.update(i),this.player?.update(i),this.camera?.update(i),this.blockInteraction?.update(i),this.survivalStats&&this.player){const o=this.worldManager?.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z))??it.PLAINS;this.survivalStats.setBiome(o),this.survivalStats.setSprinting(this.player.isSprinting),this.survivalStats.update(i),this.survivalStats.isDead&&(this.gameState="dead",this.onStateChange?.("dead")),this.onStatsUpdate?.({health:this.survivalStats.health,hunger:this.survivalStats.hunger,thirst:this.survivalStats.thirst,stamina:this.survivalStats.stamina,temperature:this.survivalStats.temperature,mana:this.survivalStats.mana,maxMana:this.survivalStats.maxMana})}if(this.entityManager&&this.player&&(this.entityManager.setPlayerPosition(this.player.position),this.entityManager.update(i)),this.weaponManager?.update(i,(o,a,l)=>this.worldManager?.getBlock(o,a,l)??0),this.bulletPool?.update(i,(o,a,l)=>fa(this.worldManager?.getBlock(o,a,l)??0)),this.damageSystem?.update(i),this.worldManager&&this.player){const o=this.worldManager.update(this.player.position.x,this.player.position.z);for(const a of o)this.sendChunkToWorker(a)}if(this.fogSystem&&this.player&&this.worldManager){const o=this.worldManager.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z));this.player.position.y<30?this.fogSystem.setCaveFog():this.fogSystem.setBiomeFog(o),this.fogSystem.update(i)}this.portalManager?.update(i)}this.dayNightCycle.update(i),this.particleSystem.update(i);const s=this.dayNightCycle.getSunDirection();this.skyRenderer.update(this.elapsed,s,this.dayNightCycle.getDayProgress(),this.renderer.mainCamera.position),this.waterRenderer.updateUniforms(this.elapsed,this.renderer.mainCamera.position,s),this.renderer.render(),this.saveManager.checkAutosave(this.elapsed)};sendChunkToWorker(e){if(!this.worldManager||!this.chunkWorker||this.pendingMeshes.has(e))return;const t=this.worldManager.getChunk(parseInt(e.split(",")[0]),parseInt(e.split(",")[1]));if(!t)return;const i=this.worldManager.getNeighborVoxels(t.chunkX,t.chunkZ);this.pendingMeshes.set(e,!0),this.chunkWorker.postMessage({chunkX:t.chunkX,chunkZ:t.chunkZ,voxels:t.voxels,neighbors:i})}rebuildAllVisibleChunks(){if(this.worldManager)for(const[e]of this.worldManager.getAllChunks())this.sendChunkToWorker(e)}respawn(){if(this.survivalStats?.respawn(),this.player){this.player.position={x:8,y:45,z:8},this.player.velocity={x:0,y:0,z:0};const e=this.player.getEyePosition();this.renderer.setMainCameraPosition(e.x,e.y,e.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch)}this.gameState="playing",this.onStateChange?.("playing")}stop(){this.animFrameId&&cancelAnimationFrame(this.animFrameId)}getBiomeAt(e,t){return this.worldManager?.getBiomeAt(e,t)??it.PLAINS}}const tg=({health:n,hunger:e,thirst:t,stamina:i,temperature:r,mana:s,maxMana:o,hasStaff:a,breakProgress:l})=>{const{slots:u,selected:h}=Ns(),f=({value:d,max:p,color:g,icon:y})=>oe.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[oe.jsx("span",{className:"text-sm w-5 text-center",children:y}),oe.jsx("div",{className:"w-32 h-3 bg-gray-800 rounded overflow-hidden border border-gray-600",children:oe.jsx("div",{className:`h-full ${g} transition-all duration-200`,style:{width:`${d/p*100}%`}})})]});return oe.jsxs("div",{className:"fixed inset-0 pointer-events-none z-20",style:{fontFamily:"monospace"},children:[oe.jsxs("div",{className:"absolute top-4 left-4",children:[oe.jsx(f,{value:n,max:100,color:"bg-red-500",icon:"❤"}),oe.jsx(f,{value:e,max:100,color:"bg-orange-400",icon:"🍗"}),oe.jsx(f,{value:t,max:100,color:"bg-blue-400",icon:"💧"}),oe.jsx(f,{value:i,max:100,color:"bg-yellow-400",icon:"⚡"}),a&&oe.jsx(f,{value:s,max:o,color:"bg-purple-500",icon:"✦"}),r<-.5&&oe.jsx("div",{className:"text-cyan-300 text-sm",children:"❄ Cold"}),r>.7&&oe.jsx("div",{className:"text-red-300 text-sm",children:"🔥 Hot"})]}),l>0&&oe.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8",children:oe.jsx("div",{className:"w-16 h-1 bg-gray-700 rounded",children:oe.jsx("div",{className:"h-full bg-white rounded",style:{width:`${l*100}%`}})})}),oe.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1",children:u.slice(0,9).map((d,p)=>oe.jsxs("div",{className:`w-12 h-12 flex items-center justify-center border-2 ${p===h?"border-white bg-gray-700":"border-gray-600 bg-gray-800"} relative`,children:[d&&oe.jsxs(oe.Fragment,{children:[oe.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:RC(d.id)}}),oe.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:d.count>1?d.count:""})]}),oe.jsx("span",{className:"absolute top-0 left-0.5 text-xs text-gray-400",children:p+1})]},p))})]})};function RC(n){return{1:"#4CAF50",2:"#795548",3:"#9E9E9E",4:"#FDD835",5:"#E8C86A",6:"#FAFAFA",7:"#B3E5FC",8:"#4E342E",9:"#7B1FA2",10:"#FF8F00",14:"#6D4C41",15:"#2E7D32",16:"#212121",17:"#616161",101:"#C0C0C0",102:"#888888",103:"#555555",104:"#9C27B0"}[n]||"#666"}const d_=[{name:"Plank",pattern:[14,null,null,null,null,null,null,null,null],result:{id:113,count:4}},{name:"Stick",pattern:[113,null,null,113,null,null,null,null,null],result:{id:114,count:4}},{name:"Sword",pattern:[103,null,null,103,null,null,114,null,null],result:{id:101,count:1}},{name:"Pistol",pattern:[103,103,103,null,114,null,null,null,null],result:{id:102,count:1}},{name:"Rifle",pattern:[103,103,103,114,103,103,114,null,null],result:{id:103,count:1}},{name:"Magic Staff",pattern:[9,9,9,null,114,null,null,114,null],result:{id:104,count:1}},{name:"Ammo",pattern:[103,102,103,null,null,null,null,null,null],result:{id:106,count:16}},{name:"Portal Frame",pattern:[9,9,9,9,null,9,9,9,9],result:{id:21,count:1}},{name:"Igniter",pattern:[104,103,null,null,null,null,null,null,null],result:{id:115,count:1}}];class ko{static matchRecipe(e){for(const t of d_)if(ko.matchesPattern(e,t.pattern))return t;return null}static matchesPattern(e,t){const i=ko.getBounds(e),r=ko.getBounds(t);if(!i||!r||i.w!==r.w||i.h!==r.h)return!1;for(let s=0;s<i.h;s++)for(let o=0;o<i.w;o++){const a=(i.y+s)*3+(i.x+o),l=(r.y+s)*3+(r.x+o);if(e[a]!==t[l])return!1}return!0}static getBounds(e){let t=3,i=3,r=-1,s=-1;for(let o=0;o<9;o++)if(e[o]!==null){const a=o%3,l=Math.floor(o/3);t=Math.min(t,a),i=Math.min(i,l),r=Math.max(r,a),s=Math.max(s,l)}return r<0?null:{x:t,y:i,w:r-t+1,h:s-i+1}}}function Hc(n){return{1:"#4CAF50",2:"#795548",3:"#9E9E9E",4:"#FDD835",9:"#7B1FA2",14:"#6D4C41",101:"#C0C0C0",102:"#888888",103:"#555555",104:"#9C27B0",113:"#8D6E63",114:"#6D4C41"}[n]||"#666"}const bC=({isOpen:n,onClose:e})=>{const{slots:t,swapSlots:i,addItem:r,removeItem:s}=Ns(),[o,a]=Ft.useState(new Array(9).fill(null)),[l,u]=Ft.useState(null);if(!n)return null;const h=ko.matchRecipe(o),f=g=>{l!==null?(i(l,g),u(null)):t[g]&&u(g)},d=()=>{h&&(r(h.result.id,h.result.count),a(new Array(9).fill(null)))},p=g=>{if(l!==null&&t[l]){const y=[...o];y[g]=t[l].id,a(y),s(l,1),u(null)}};return oe.jsxs("div",{className:"fixed inset-0 z-30 flex items-center justify-center",style:{pointerEvents:"all"},children:[oe.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-70",onClick:e}),oe.jsxs("div",{className:"relative flex gap-6 p-4 bg-gray-900 border border-gray-600 rounded",children:[oe.jsxs("div",{children:[oe.jsx("h3",{className:"text-white text-sm mb-2 font-bold",children:"Inventory"}),oe.jsx("div",{className:"grid grid-cols-9 gap-1",children:t.map((g,y)=>oe.jsx("div",{onClick:()=>f(y),className:`w-12 h-12 flex items-center justify-center border cursor-pointer relative hover:bg-gray-700 ${l===y?"border-yellow-400 bg-gray-700":"border-gray-600 bg-gray-800"}`,children:g&&oe.jsxs(oe.Fragment,{children:[oe.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:Hc(g.id)}}),oe.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:g.count>1?g.count:""})]})},y))})]}),oe.jsxs("div",{children:[oe.jsx("h3",{className:"text-white text-sm mb-2 font-bold",children:"Crafting"}),oe.jsx("div",{className:"grid grid-cols-3 gap-1 mb-2",children:o.map((g,y)=>oe.jsx("div",{onClick:()=>p(y),className:"w-12 h-12 flex items-center justify-center border border-gray-600 bg-gray-800 cursor-pointer hover:bg-gray-700",children:g!==null&&oe.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:Hc(g)}})},y))}),oe.jsxs("div",{className:"flex items-center gap-2",children:[oe.jsx("span",{className:"text-white text-lg",children:"→"}),oe.jsx("div",{onClick:d,className:`w-12 h-12 flex items-center justify-center border ${h?"border-green-500 cursor-pointer hover:bg-gray-700":"border-gray-600"} bg-gray-800`,children:h&&oe.jsx("div",{className:"w-8 h-8 rounded-sm relative",style:{backgroundColor:Hc(h.result.id)},children:oe.jsx("span",{className:"absolute bottom-0 right-0 text-white text-xs",children:h.result.count})})})]}),oe.jsxs("div",{className:"mt-4 max-h-48 overflow-y-auto",children:[oe.jsx("h4",{className:"text-gray-400 text-xs mb-1",children:"Recipes:"}),d_.map((g,y)=>oe.jsx("div",{className:"text-gray-300 text-xs py-0.5",children:g.name},y))]})]})]})]})},PC={[it.PLAINS]:"#4CAF50",[it.DESERT]:"#FDD835",[it.TUNDRA]:"#E0E0E0",[it.MARSH]:"#4E342E",[it.CRYSTAL_CAVERNS]:"#9C27B0"},LC=({playerX:n,playerZ:e,getBiomeAt:t})=>{const i=Ft.useRef(null),r=Ft.useRef(0);return Ft.useEffect(()=>{if(r.current++,r.current%10!==0)return;const s=i.current;if(!s)return;const o=s.getContext("2d");if(!o)return;const a=64,l=32;for(let u=0;u<a;u++)for(let h=0;h<a;h++){const f=Math.floor(n)+(u-l),d=Math.floor(e)+(h-l),p=t(f,d);o.fillStyle=PC[p]||"#333",o.fillRect(u,h,1,1)}o.fillStyle="#FFFFFF",o.fillRect(l-1,l-1,3,3)}),oe.jsx("canvas",{ref:i,width:64,height:64,className:"fixed top-4 right-4 z-20 border border-gray-600 rounded",style:{imageRendering:"pixelated",width:"96px",height:"96px"}})},DC=({onRespawn:n})=>oe.jsxs("div",{className:"fixed inset-0 z-40 flex flex-col items-center justify-center",style:{background:"radial-gradient(ellipse at center, rgba(139,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)",pointerEvents:"all"},children:[oe.jsx("h1",{className:"text-6xl font-bold text-red-500 mb-8 tracking-widest",children:"YOU DIED"}),oe.jsx("button",{onClick:n,className:"px-8 py-3 bg-gray-800 text-white border border-gray-500 rounded hover:bg-gray-700 text-lg cursor-pointer",children:"Respawn"})]}),NC=({onNewGame:n,onLoadGame:e,hasSave:t})=>{const[i,r]=Ft.useState(""),s=()=>{const o=i?parseInt(i)||0:Math.floor(Math.random()*999999);n(o)};return oe.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950",style:{pointerEvents:"all"},children:[oe.jsx("h1",{className:"text-5xl font-bold text-white mb-2 tracking-wider",children:"VOXEL SURVIVAL"}),oe.jsx("p",{className:"text-gray-400 mb-8",children:"A block world awaits"}),oe.jsxs("div",{className:"flex flex-col items-center gap-4 mb-8",children:[oe.jsx("input",{type:"text",placeholder:"Seed (optional)",value:i,onChange:o=>r(o.target.value),className:"px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded w-64 text-center"}),oe.jsx("button",{onClick:s,className:"px-8 py-3 bg-green-700 text-white rounded hover:bg-green-600 text-lg font-bold w-64 cursor-pointer",children:"New Game"}),t&&oe.jsx("button",{onClick:e,className:"px-8 py-3 bg-blue-700 text-white rounded hover:bg-blue-600 text-lg font-bold w-64 cursor-pointer",children:"Load Game"})]}),oe.jsxs("div",{className:"text-gray-500 text-sm max-w-md text-center",children:[oe.jsx("h3",{className:"text-gray-400 font-bold mb-2",children:"Controls"}),oe.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-1 text-left",children:[oe.jsx("span",{children:"WASD"}),oe.jsx("span",{children:"Move"}),oe.jsx("span",{children:"Mouse"}),oe.jsx("span",{children:"Look"}),oe.jsx("span",{children:"Space"}),oe.jsx("span",{children:"Jump"}),oe.jsx("span",{children:"Shift"}),oe.jsx("span",{children:"Sprint"}),oe.jsx("span",{children:"LMB"}),oe.jsx("span",{children:"Break Block"}),oe.jsx("span",{children:"E"}),oe.jsx("span",{children:"Place Block"}),oe.jsx("span",{children:"F"}),oe.jsx("span",{children:"Drink Water"}),oe.jsx("span",{children:"Tab"}),oe.jsx("span",{children:"Inventory"}),oe.jsx("span",{children:"1-9"}),oe.jsx("span",{children:"Hotbar Slot"}),oe.jsx("span",{children:"Scroll"}),oe.jsx("span",{children:"Cycle Slot"}),oe.jsx("span",{children:"F5"}),oe.jsx("span",{children:"Save Game"})]})]})]})},IC=()=>oe.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none",children:oe.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:[oe.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),oe.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"14",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),oe.jsx("line",{x1:"2",y1:"8",x2:"6",y2:"8",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),oe.jsx("line",{x1:"10",y1:"8",x2:"14",y2:"8",stroke:"white",strokeWidth:"1.5",opacity:"0.8"})]})}),UC=()=>{const n=Ft.useRef(null),e=Ft.useRef(null),[t,i]=Ft.useState("menu"),[r,s]=Ft.useState(!1),[o,a]=Ft.useState({health:100,hunger:100,thirst:100,stamina:100,temperature:.2,mana:100,maxMana:100});Ft.useEffect(()=>{const y=new CC;return e.current=y,y.saveManager.hasSave().then(s),()=>{y.stop()}},[]);const l=Ft.useCallback(y=>{if(!y||!e.current)return;const m=e.current,c=m.renderer.getDomElement();y.appendChild(c),m.init(c),m.onStateChange=v=>{i(v)},m.onStatsUpdate=v=>{a(v)}},[]),u=Ft.useCallback(y=>{if(!e.current)return;const m=n.current;m&&l(m),e.current.startGame(y)},[l]),h=Ft.useCallback(()=>{if(!e.current)return;const y=n.current;y&&l(y),e.current.loadGame()},[l]),f=Ft.useCallback(()=>{e.current?.respawn()},[]),d=Ft.useCallback(()=>{e.current&&(e.current.gameState="playing",i("playing"))},[]),p=e.current?.player?.position.x??0,g=e.current?.player?.position.z??0;return oe.jsxs("div",{className:"w-full h-full relative",children:[oe.jsx("div",{ref:n,className:"w-full h-full"}),t==="menu"&&oe.jsx(NC,{onNewGame:u,onLoadGame:h,hasSave:r}),t==="playing"&&oe.jsxs(oe.Fragment,{children:[oe.jsx(tg,{health:o.health,hunger:o.hunger,thirst:o.thirst,stamina:o.stamina,temperature:o.temperature,mana:o.mana,maxMana:o.maxMana,hasStaff:!1,breakProgress:e.current?.blockInteraction?.getBreakProgress()??0}),oe.jsx(IC,{}),oe.jsx(LC,{playerX:p,playerZ:g,getBiomeAt:(y,m)=>e.current?.getBiomeAt(y,m)??0})]}),t==="inventory"&&oe.jsxs(oe.Fragment,{children:[oe.jsx(tg,{health:o.health,hunger:o.hunger,thirst:o.thirst,stamina:o.stamina,temperature:o.temperature,mana:o.mana,maxMana:o.maxMana,hasStaff:!1,breakProgress:0}),oe.jsx(bC,{isOpen:!0,onClose:d})]}),t==="dead"&&oe.jsx(DC,{onRespawn:f})]})};Gc.createRoot(document.getElementById("root")).render(oe.jsx(hg.StrictMode,{children:oe.jsx(UC,{})}));
//# sourceMappingURL=index-BRVmvhAQ.js.map
