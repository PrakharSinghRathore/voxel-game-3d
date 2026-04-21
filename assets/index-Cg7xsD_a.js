(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rg={exports:{}},iu={},sg={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),y_=Symbol.for("react.portal"),x_=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),M_=Symbol.for("react.profiler"),E_=Symbol.for("react.provider"),w_=Symbol.for("react.context"),T_=Symbol.for("react.forward_ref"),A_=Symbol.for("react.suspense"),C_=Symbol.for("react.memo"),R_=Symbol.for("react.lazy"),rd=Symbol.iterator;function b_(n){return n===null||typeof n!="object"?null:(n=rd&&n[rd]||n["@@iterator"],typeof n=="function"?n:null)}var og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,lg={};function Ks(n,e,t){this.props=n,this.context=e,this.refs=lg,this.updater=t||og}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ks.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ug(){}ug.prototype=Ks.prototype;function $f(n,e,t){this.props=n,this.context=e,this.refs=lg,this.updater=t||og}var Zf=$f.prototype=new ug;Zf.constructor=$f;ag(Zf,Ks.prototype);Zf.isPureReactComponent=!0;var sd=Array.isArray,cg=Object.prototype.hasOwnProperty,Qf={current:null},fg={key:!0,ref:!0,__self:!0,__source:!0};function hg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cg.call(e,i)&&!fg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:oa,type:n,key:s,ref:o,props:r,_owner:Qf.current}}function L_(n,e){return{$$typeof:oa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Jf(n){return typeof n=="object"&&n!==null&&n.$$typeof===oa}function P_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var od=/\/+/g;function Du(n,e){return typeof n=="object"&&n!==null&&n.key!=null?P_(""+n.key):e.toString(36)}function dl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case oa:case y_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Du(o,0):i,sd(r)?(t="",n!=null&&(t=n.replace(od,"$&/")+"/"),dl(r,e,t,"",function(u){return u})):r!=null&&(Jf(r)&&(r=L_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(od,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",sd(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Du(s,a);o+=dl(s,e,t,l,r)}else if(l=b_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Du(s,a++),o+=dl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(n,e,t){if(n==null)return n;var i=[],r=0;return dl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function D_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var yn={current:null},pl={transition:null},N_={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Qf};function dg(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:xa,forEach:function(n,e,t){xa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return xa(n,function(){e++}),e},toArray:function(n){return xa(n,function(e){return e})||[]},only:function(n){if(!Jf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ot.Component=Ks;ot.Fragment=x_;ot.Profiler=M_;ot.PureComponent=$f;ot.StrictMode=S_;ot.Suspense=A_;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_;ot.act=dg;ot.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=ag({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)cg.call(e,l)&&!fg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:oa,type:n.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(n){return n={$$typeof:w_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:E_,_context:n},n.Consumer=n};ot.createElement=hg;ot.createFactory=function(n){var e=hg.bind(null,n);return e.type=n,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(n){return{$$typeof:T_,render:n}};ot.isValidElement=Jf;ot.lazy=function(n){return{$$typeof:R_,_payload:{_status:-1,_result:n},_init:D_}};ot.memo=function(n,e){return{$$typeof:C_,type:n,compare:e===void 0?null:e}};ot.startTransition=function(n){var e=pl.transition;pl.transition={};try{n()}finally{pl.transition=e}};ot.unstable_act=dg;ot.useCallback=function(n,e){return yn.current.useCallback(n,e)};ot.useContext=function(n){return yn.current.useContext(n)};ot.useDebugValue=function(){};ot.useDeferredValue=function(n){return yn.current.useDeferredValue(n)};ot.useEffect=function(n,e){return yn.current.useEffect(n,e)};ot.useId=function(){return yn.current.useId()};ot.useImperativeHandle=function(n,e,t){return yn.current.useImperativeHandle(n,e,t)};ot.useInsertionEffect=function(n,e){return yn.current.useInsertionEffect(n,e)};ot.useLayoutEffect=function(n,e){return yn.current.useLayoutEffect(n,e)};ot.useMemo=function(n,e){return yn.current.useMemo(n,e)};ot.useReducer=function(n,e,t){return yn.current.useReducer(n,e,t)};ot.useRef=function(n){return yn.current.useRef(n)};ot.useState=function(n){return yn.current.useState(n)};ot.useSyncExternalStore=function(n,e,t){return yn.current.useSyncExternalStore(n,e,t)};ot.useTransition=function(){return yn.current.useTransition()};ot.version="18.3.1";sg.exports=ot;var Ft=sg.exports;const pg=qf(Ft);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=Ft,U_=Symbol.for("react.element"),F_=Symbol.for("react.fragment"),O_=Object.prototype.hasOwnProperty,k_=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z_={key:!0,ref:!0,__self:!0,__source:!0};function mg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)O_.call(e,i)&&!z_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:U_,type:n,key:s,ref:o,props:r,_owner:k_.current}}iu.Fragment=F_;iu.jsx=mg;iu.jsxs=mg;rg.exports=iu;var oe=rg.exports,Wc={},gg={exports:{}},Bn={},vg={exports:{}},_g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(O,V){var X=O.length;O.push(V);e:for(;0<X;){var ee=X-1>>>1,se=O[ee];if(0<r(se,V))O[ee]=V,O[X]=se,X=ee;else break e}}function t(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var V=O[0],X=O.pop();if(X!==V){O[0]=X;e:for(var ee=0,se=O.length,Z=se>>>1;ee<Z;){var re=2*(ee+1)-1,ve=O[re],we=re+1,Ae=O[we];if(0>r(ve,X))we<se&&0>r(Ae,ve)?(O[ee]=Ae,O[we]=X,ee=we):(O[ee]=ve,O[re]=X,ee=re);else if(we<se&&0>r(Ae,X))O[ee]=Ae,O[we]=X,ee=we;else break e}}return V}function r(O,V){var X=O.sortIndex-V.sortIndex;return X!==0?X:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,c=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var V=t(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=O)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=t(u)}}function S(O){if(y=!1,_(O),!g)if(t(l)!==null)g=!0,Q(w);else{var V=t(u);V!==null&&ne(S,V.startTime-O)}}function w(O,V){g=!1,y&&(y=!1,h(F),F=-1),p=!0;var X=d;try{for(_(V),c=t(l);c!==null&&(!(c.expirationTime>V)||O&&!H());){var ee=c.callback;if(typeof ee=="function"){c.callback=null,d=c.priorityLevel;var se=ee(c.expirationTime<=V);V=n.unstable_now(),typeof se=="function"?c.callback=se:c===t(l)&&i(l),_(V)}else i(l);c=t(l)}if(c!==null)var Z=!0;else{var re=t(u);re!==null&&ne(S,re.startTime-V),Z=!1}return Z}finally{c=null,d=X,p=!1}}var A=!1,T=null,F=-1,M=5,C=-1;function H(){return!(n.unstable_now()-C<M)}function q(){if(T!==null){var O=n.unstable_now();C=O;var V=!0;try{V=T(!0,O)}finally{V?ie():(A=!1,T=null)}}else A=!1}var ie;if(typeof v=="function")ie=function(){v(q)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,G=U.port2;U.port1.onmessage=q,ie=function(){G.postMessage(null)}}else ie=function(){m(q,0)};function Q(O){T=O,A||(A=!0,ie())}function ne(O,V){F=m(function(){O(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,Q(w))},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(O){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var X=d;d=V;try{return O()}finally{d=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var X=d;d=O;try{return V()}finally{d=X}},n.unstable_scheduleCallback=function(O,V,X){var ee=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ee+X:ee):X=ee,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=X+se,O={id:f++,callback:V,priorityLevel:O,startTime:X,expirationTime:se,sortIndex:-1},X>ee?(O.sortIndex=X,e(u,O),t(l)===null&&O===t(u)&&(y?(h(F),F=-1):y=!0,ne(S,X-ee))):(O.sortIndex=se,e(l,O),g||p||(g=!0,Q(w))),O},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(O){var V=d;return function(){var X=d;d=V;try{return O.apply(this,arguments)}finally{d=X}}}})(_g);vg.exports=_g;var B_=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=Ft,zn=B_;function de(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yg=new Set,Ho={};function Wr(n,e){Fs(n,e),Fs(n+"Capture",e)}function Fs(n,e){for(Ho[n]=e,n=0;n<e.length;n++)yg.add(e[n])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,G_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ad={},ld={};function V_(n){return Xc.call(ld,n)?!0:Xc.call(ad,n)?!1:G_.test(n)?ld[n]=!0:(ad[n]=!0,!1)}function W_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X_(n,e,t,i){if(e===null||typeof e>"u"||W_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ln[n]=new xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ln[e]=new xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ln[n]=new xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ln[n]=new xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ln[n]=new xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ln[n]=new xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ln[n]=new xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ln[n]=new xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ln[n]=new xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(eh,th);ln[e]=new xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(eh,th);ln[e]=new xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(eh,th);ln[e]=new xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ln[n]=new xn(n,1,!1,n.toLowerCase(),null,!1,!1)});ln.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ln[n]=new xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function nh(n,e,t,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X_(e,t,r,i)&&(t=null),i||r===null?V_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Hi=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),ds=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),rh=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Kc=Symbol.for("react.suspense_list"),sh=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),Mg=Symbol.for("react.offscreen"),ud=Symbol.iterator;function ro(n){return n===null||typeof n!="object"?null:(n=ud&&n[ud]||n["@@iterator"],typeof n=="function"?n:null)}var Ut=Object.assign,Nu;function wo(n){if(Nu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Nu=e&&e[1]||""}return`
`+Nu+n}var Iu=!1;function Uu(n,e){if(!n||Iu)return"";Iu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Iu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?wo(n):""}function Y_(n){switch(n.tag){case 5:return wo(n.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return n=Uu(n.type,!1),n;case 11:return n=Uu(n.type.render,!1),n;case 1:return n=Uu(n.type,!0),n;default:return""}}function qc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ps:return"Fragment";case ds:return"Portal";case Yc:return"Profiler";case ih:return"StrictMode";case jc:return"Suspense";case Kc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Sg:return(n.displayName||"Context")+".Consumer";case xg:return(n._context.displayName||"Context")+".Provider";case rh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case sh:return e=n.displayName||null,e!==null?e:qc(n.type)||"Memo";case Ki:e=n._payload,n=n._init;try{return qc(n(e))}catch{}}return null}function j_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(e);case 8:return e===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Eg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function K_(n){var e=Eg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ma(n){n._valueTracker||(n._valueTracker=K_(n))}function wg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Eg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Al(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function $c(n,e){var t=e.checked;return Ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function cd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=dr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tg(n,e){e=e.checked,e!=null&&nh(n,"checked",e,!1)}function Zc(n,e){Tg(n,e);var t=dr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Qc(n,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function fd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Qc(n,e,t){(e!=="number"||Al(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var To=Array.isArray;function Cs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+dr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Jc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Ut({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function hd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(de(92));if(To(t)){if(1<t.length)throw Error(de(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:dr(t)}}function Ag(n,e){var t=dr(e.value),i=dr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function dd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Cg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ef(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Cg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ea,Rg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Go(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q_=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(n){q_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),bo[e]=bo[n]})});function bg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||bo.hasOwnProperty(n)&&bo[n]?(""+e).trim():e+"px"}function Lg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=bg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var $_=Ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tf(n,e){if(e){if($_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function nf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rf=null;function oh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sf=null,Rs=null,bs=null;function pd(n){if(n=ua(n)){if(typeof sf!="function")throw Error(de(280));var e=n.stateNode;e&&(e=lu(e),sf(n.stateNode,n.type,e))}}function Pg(n){Rs?bs?bs.push(n):bs=[n]:Rs=n}function Dg(){if(Rs){var n=Rs,e=bs;if(bs=Rs=null,pd(n),e)for(n=0;n<e.length;n++)pd(e[n])}}function Ng(n,e){return n(e)}function Ig(){}var Fu=!1;function Ug(n,e,t){if(Fu)return n(e,t);Fu=!0;try{return Ng(n,e,t)}finally{Fu=!1,(Rs!==null||bs!==null)&&(Ig(),Dg())}}function Vo(n,e){var t=n.stateNode;if(t===null)return null;var i=lu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(de(231,e,typeof t));return t}var of=!1;if(Ii)try{var so={};Object.defineProperty(so,"passive",{get:function(){of=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{of=!1}function Z_(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var Lo=!1,Cl=null,Rl=!1,af=null,Q_={onError:function(n){Lo=!0,Cl=n}};function J_(n,e,t,i,r,s,o,a,l){Lo=!1,Cl=null,Z_.apply(Q_,arguments)}function ey(n,e,t,i,r,s,o,a,l){if(J_.apply(this,arguments),Lo){if(Lo){var u=Cl;Lo=!1,Cl=null}else throw Error(de(198));Rl||(Rl=!0,af=u)}}function Xr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Fg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function md(n){if(Xr(n)!==n)throw Error(de(188))}function ty(n){var e=n.alternate;if(!e){if(e=Xr(n),e===null)throw Error(de(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return md(r),n;if(s===i)return md(r),e;s=s.sibling}throw Error(de(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(t.alternate!==i)throw Error(de(190))}if(t.tag!==3)throw Error(de(188));return t.stateNode.current===t?n:e}function Og(n){return n=ty(n),n!==null?kg(n):null}function kg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=kg(n);if(e!==null)return e;n=n.sibling}return null}var zg=zn.unstable_scheduleCallback,gd=zn.unstable_cancelCallback,ny=zn.unstable_shouldYield,iy=zn.unstable_requestPaint,zt=zn.unstable_now,ry=zn.unstable_getCurrentPriorityLevel,ah=zn.unstable_ImmediatePriority,Bg=zn.unstable_UserBlockingPriority,bl=zn.unstable_NormalPriority,sy=zn.unstable_LowPriority,Hg=zn.unstable_IdlePriority,ru=null,yi=null;function oy(n){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(ru,n,void 0,(n.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:uy,ay=Math.log,ly=Math.LN2;function uy(n){return n>>>=0,n===0?32:31-(ay(n)/ly|0)|0}var wa=64,Ta=4194304;function Ao(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ll(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ao(a):(s&=o,s!==0&&(i=Ao(s)))}else o=t&~r,o!==0?i=Ao(o):s!==0&&(i=Ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ci(e),r=1<<t,i|=n[t],e&=~r;return i}function cy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=cy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function lf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gg(){var n=wa;return wa<<=1,!(wa&4194240)&&(wa=64),n}function Ou(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function aa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ci(e),n[e]=t}function hy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ci(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function lh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ci(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var pt=0;function Vg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Wg,uh,Xg,Yg,jg,uf=!1,Aa=[],nr=null,ir=null,rr=null,Wo=new Map,Xo=new Map,$i=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(n,e){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function oo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&uh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function py(n,e,t,i,r){switch(e){case"focusin":return nr=oo(nr,n,e,t,i,r),!0;case"dragenter":return ir=oo(ir,n,e,t,i,r),!0;case"mouseover":return rr=oo(rr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,oo(Wo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xo.set(s,oo(Xo.get(s)||null,n,e,t,i,r)),!0}return!1}function Kg(n){var e=Lr(n.target);if(e!==null){var t=Xr(e);if(t!==null){if(e=t.tag,e===13){if(e=Fg(t),e!==null){n.blockedOn=e,jg(n.priority,function(){Xg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ml(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=cf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);rf=i,t.target.dispatchEvent(i),rf=null}else return e=ua(t),e!==null&&uh(e),n.blockedOn=t,!1;e.shift()}return!0}function _d(n,e,t){ml(n)&&t.delete(e)}function my(){uf=!1,nr!==null&&ml(nr)&&(nr=null),ir!==null&&ml(ir)&&(ir=null),rr!==null&&ml(rr)&&(rr=null),Wo.forEach(_d),Xo.forEach(_d)}function ao(n,e){n.blockedOn===e&&(n.blockedOn=null,uf||(uf=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,my)))}function Yo(n){function e(r){return ao(r,n)}if(0<Aa.length){ao(Aa[0],n);for(var t=1;t<Aa.length;t++){var i=Aa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(nr!==null&&ao(nr,n),ir!==null&&ao(ir,n),rr!==null&&ao(rr,n),Wo.forEach(e),Xo.forEach(e),t=0;t<$i.length;t++)i=$i[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<$i.length&&(t=$i[0],t.blockedOn===null);)Kg(t),t.blockedOn===null&&$i.shift()}var Ls=Hi.ReactCurrentBatchConfig,Pl=!0;function gy(n,e,t,i){var r=pt,s=Ls.transition;Ls.transition=null;try{pt=1,ch(n,e,t,i)}finally{pt=r,Ls.transition=s}}function vy(n,e,t,i){var r=pt,s=Ls.transition;Ls.transition=null;try{pt=4,ch(n,e,t,i)}finally{pt=r,Ls.transition=s}}function ch(n,e,t,i){if(Pl){var r=cf(n,e,t,i);if(r===null)ju(n,e,i,Dl,t),vd(n,i);else if(py(r,n,e,t,i))i.stopPropagation();else if(vd(n,i),e&4&&-1<dy.indexOf(n)){for(;r!==null;){var s=ua(r);if(s!==null&&Wg(s),s=cf(n,e,t,i),s===null&&ju(n,e,i,Dl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(n,e,i,null,t)}}var Dl=null;function cf(n,e,t,i){if(Dl=null,n=oh(i),n=Lr(n),n!==null)if(e=Xr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Fg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Dl=n,null}function qg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ry()){case ah:return 1;case Bg:return 4;case bl:case sy:return 16;case Hg:return 536870912;default:return 16}default:return 16}}var Qi=null,fh=null,gl=null;function $g(){if(gl)return gl;var n,e=fh,t=e.length,i,r="value"in Qi?Qi.value:Qi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return gl=r.slice(n,1<i?1-i:void 0)}function vl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ca(){return!0}function yd(){return!1}function Hn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:yd,this.isPropagationStopped=yd,this}return Ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=Hn(qs),la=Ut({},qs,{view:0,detail:0}),_y=Hn(la),ku,zu,lo,su=Ut({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==lo&&(lo&&n.type==="mousemove"?(ku=n.screenX-lo.screenX,zu=n.screenY-lo.screenY):zu=ku=0,lo=n),ku)},movementY:function(n){return"movementY"in n?n.movementY:zu}}),xd=Hn(su),yy=Ut({},su,{dataTransfer:0}),xy=Hn(yy),Sy=Ut({},la,{relatedTarget:0}),Bu=Hn(Sy),My=Ut({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=Hn(My),wy=Ut({},qs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ty=Hn(wy),Ay=Ut({},qs,{data:0}),Sd=Hn(Ay),Cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ly(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=by[n])?!!e[n]:!1}function dh(){return Ly}var Py=Ut({},la,{key:function(n){if(n.key){var e=Cy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=vl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ry[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dh,charCode:function(n){return n.type==="keypress"?vl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Dy=Hn(Py),Ny=Ut({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=Hn(Ny),Iy=Ut({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dh}),Uy=Hn(Iy),Fy=Ut({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oy=Hn(Fy),ky=Ut({},su,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=Hn(ky),By=[9,13,27,32],ph=Ii&&"CompositionEvent"in window,Po=null;Ii&&"documentMode"in document&&(Po=document.documentMode);var Hy=Ii&&"TextEvent"in window&&!Po,Zg=Ii&&(!ph||Po&&8<Po&&11>=Po),Ed=" ",wd=!1;function Qg(n,e){switch(n){case"keyup":return By.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Gy(n,e){switch(n){case"compositionend":return Jg(e);case"keypress":return e.which!==32?null:(wd=!0,Ed);case"textInput":return n=e.data,n===Ed&&wd?null:n;default:return null}}function Vy(n,e){if(ms)return n==="compositionend"||!ph&&Qg(n,e)?(n=$g(),gl=fh=Qi=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zg&&e.locale!=="ko"?null:e.data;default:return null}}var Wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Wy[n.type]:e==="textarea"}function ev(n,e,t,i){Pg(i),e=Nl(e,"onChange"),0<e.length&&(t=new hh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Do=null,jo=null;function Xy(n){fv(n,0)}function ou(n){var e=_s(n);if(wg(e))return n}function Yy(n,e){if(n==="change")return e}var tv=!1;if(Ii){var Hu;if(Ii){var Gu="oninput"in document;if(!Gu){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Gu=typeof Ad.oninput=="function"}Hu=Gu}else Hu=!1;tv=Hu&&(!document.documentMode||9<document.documentMode)}function Cd(){Do&&(Do.detachEvent("onpropertychange",nv),jo=Do=null)}function nv(n){if(n.propertyName==="value"&&ou(jo)){var e=[];ev(e,jo,n,oh(n)),Ug(Xy,e)}}function jy(n,e,t){n==="focusin"?(Cd(),Do=e,jo=t,Do.attachEvent("onpropertychange",nv)):n==="focusout"&&Cd()}function Ky(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ou(jo)}function qy(n,e){if(n==="click")return ou(e)}function $y(n,e){if(n==="input"||n==="change")return ou(e)}function Zy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var hi=typeof Object.is=="function"?Object.is:Zy;function Ko(n,e){if(hi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Xc.call(e,r)||!hi(n[r],e[r]))return!1}return!0}function Rd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bd(n,e){var t=Rd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Rd(t)}}function iv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?iv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function rv(){for(var n=window,e=Al();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Al(n.document)}return e}function mh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Qy(n){var e=rv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&iv(t.ownerDocument.documentElement,t)){if(i!==null&&mh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=bd(t,s);var o=bd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Jy=Ii&&"documentMode"in document&&11>=document.documentMode,gs=null,ff=null,No=null,hf=!1;function Ld(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hf||gs==null||gs!==Al(i)||(i=gs,"selectionStart"in i&&mh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&Ko(No,i)||(No=i,i=Nl(ff,"onSelect"),0<i.length&&(e=new hh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=gs)))}function Ra(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var vs={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Vu={},sv={};Ii&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function au(n){if(Vu[n])return Vu[n];if(!vs[n])return n;var e=vs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in sv)return Vu[n]=e[t];return n}var ov=au("animationend"),av=au("animationiteration"),lv=au("animationstart"),uv=au("transitionend"),cv=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,e){cv.set(n,e),Wr(e,[n])}for(var Wu=0;Wu<Pd.length;Wu++){var Xu=Pd[Wu],ex=Xu.toLowerCase(),tx=Xu[0].toUpperCase()+Xu.slice(1);mr(ex,"on"+tx)}mr(ov,"onAnimationEnd");mr(av,"onAnimationIteration");mr(lv,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(uv,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Dd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ey(i,e,void 0,n),n.currentTarget=null}function fv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dd(r,a,u),s=l}}}if(Rl)throw n=af,Rl=!1,af=null,n}function At(n,e){var t=e[vf];t===void 0&&(t=e[vf]=new Set);var i=n+"__bubble";t.has(i)||(hv(e,n,2,!1),t.add(i))}function Yu(n,e,t){var i=0;e&&(i|=4),hv(t,n,i,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function qo(n){if(!n[ba]){n[ba]=!0,yg.forEach(function(t){t!=="selectionchange"&&(nx.has(t)||Yu(t,!1,n),Yu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ba]||(e[ba]=!0,Yu("selectionchange",!1,e))}}function hv(n,e,t,i){switch(qg(e)){case 1:var r=gy;break;case 4:r=vy;break;default:r=ch}t=r.bind(null,e,t,n),r=void 0,!of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ju(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ug(function(){var u=s,f=oh(t),c=[];e:{var d=cv.get(n);if(d!==void 0){var p=hh,g=n;switch(n){case"keypress":if(vl(t)===0)break e;case"keydown":case"keyup":p=Dy;break;case"focusin":g="focus",p=Bu;break;case"focusout":g="blur",p=Bu;break;case"beforeblur":case"afterblur":p=Bu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Uy;break;case ov:case av:case lv:p=Ey;break;case uv:p=Oy;break;case"scroll":p=_y;break;case"wheel":p=zy;break;case"copy":case"cut":case"paste":p=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Md}var y=(e&4)!==0,m=!y&&n==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=u,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=Vo(v,h),S!=null&&y.push($o(v,S,_)))),m)break;v=v.return}0<y.length&&(d=new p(d,g,null,t,f),c.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==rf&&(g=t.relatedTarget||t.fromElement)&&(Lr(g)||g[Ui]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?Lr(g):null,g!==null&&(m=Xr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=xd,S="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(y=Md,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:_s(p),_=g==null?d:_s(g),d=new y(S,v+"leave",p,t,f),d.target=m,d.relatedTarget=_,S=null,Lr(f)===u&&(y=new y(h,v+"enter",g,t,f),y.target=_,y.relatedTarget=m,S=y),m=S,p&&g)t:{for(y=p,h=g,v=0,_=y;_;_=qr(_))v++;for(_=0,S=h;S;S=qr(S))_++;for(;0<v-_;)y=qr(y),v--;for(;0<_-v;)h=qr(h),_--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=qr(y),h=qr(h)}y=null}else y=null;p!==null&&Nd(c,d,p,y,!1),g!==null&&m!==null&&Nd(c,m,g,y,!0)}}e:{if(d=u?_s(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=Yy;else if(Td(d))if(tv)w=$y;else{w=Ky;var A=jy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=qy);if(w&&(w=w(n,u))){ev(c,w,t,f);break e}A&&A(n,d,u),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Qc(d,"number",d.value)}switch(A=u?_s(u):window,n){case"focusin":(Td(A)||A.contentEditable==="true")&&(gs=A,ff=u,No=null);break;case"focusout":No=ff=gs=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Ld(c,t,f);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Ld(c,t,f)}var T;if(ph)e:{switch(n){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ms?Qg(n,t)&&(F="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(F="onCompositionStart");F&&(Zg&&t.locale!=="ko"&&(ms||F!=="onCompositionStart"?F==="onCompositionEnd"&&ms&&(T=$g()):(Qi=f,fh="value"in Qi?Qi.value:Qi.textContent,ms=!0)),A=Nl(u,F),0<A.length&&(F=new Sd(F,n,null,t,f),c.push({event:F,listeners:A}),T?F.data=T:(T=Jg(t),T!==null&&(F.data=T)))),(T=Hy?Gy(n,t):Vy(n,t))&&(u=Nl(u,"onBeforeInput"),0<u.length&&(f=new Sd("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=T))}fv(c,e)})}function $o(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Nl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Vo(n,t),s!=null&&i.unshift($o(n,s,r)),s=Vo(n,e),s!=null&&i.push($o(n,s,r))),n=n.return}return i}function qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nd(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Vo(t,s),l!=null&&o.unshift($o(t,l,a))):r||(l=Vo(t,s),l!=null&&o.push($o(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var ix=/\r\n?/g,rx=/\u0000|\uFFFD/g;function Id(n){return(typeof n=="string"?n:""+n).replace(ix,`
`).replace(rx,"")}function La(n,e,t){if(e=Id(e),Id(n)!==e&&t)throw Error(de(425))}function Il(){}var df=null,pf=null;function mf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(n){return Ud.resolve(null).then(n).catch(ax)}:gf;function ax(n){setTimeout(function(){throw n})}function Ku(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Yo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Yo(e)}function sr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Fd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),vi="__reactFiber$"+$s,Zo="__reactProps$"+$s,Ui="__reactContainer$"+$s,vf="__reactEvents$"+$s,lx="__reactListeners$"+$s,ux="__reactHandles$"+$s;function Lr(n){var e=n[vi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ui]||t[vi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Fd(n);n!==null;){if(t=n[vi])return t;n=Fd(n)}return e}n=t,t=n.parentNode}return null}function ua(n){return n=n[vi]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(de(33))}function lu(n){return n[Zo]||null}var _f=[],ys=-1;function gr(n){return{current:n}}function Rt(n){0>ys||(n.current=_f[ys],_f[ys]=null,ys--)}function wt(n,e){ys++,_f[ys]=n.current,n.current=e}var pr={},pn=gr(pr),Cn=gr(!1),kr=pr;function Os(n,e){var t=n.type.contextTypes;if(!t)return pr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Rn(n){return n=n.childContextTypes,n!=null}function Ul(){Rt(Cn),Rt(pn)}function Od(n,e,t){if(pn.current!==pr)throw Error(de(168));wt(pn,e),wt(Cn,t)}function dv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,j_(n)||"Unknown",r));return Ut({},t,i)}function Fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,kr=pn.current,wt(pn,n),wt(Cn,Cn.current),!0}function kd(n,e,t){var i=n.stateNode;if(!i)throw Error(de(169));t?(n=dv(n,e,kr),i.__reactInternalMemoizedMergedChildContext=n,Rt(Cn),Rt(pn),wt(pn,n)):Rt(Cn),wt(Cn,t)}var bi=null,uu=!1,qu=!1;function pv(n){bi===null?bi=[n]:bi.push(n)}function cx(n){uu=!0,pv(n)}function vr(){if(!qu&&bi!==null){qu=!0;var n=0,e=pt;try{var t=bi;for(pt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}bi=null,uu=!1}catch(r){throw bi!==null&&(bi=bi.slice(n+1)),zg(ah,vr),r}finally{pt=e,qu=!1}}return null}var xs=[],Ss=0,Ol=null,kl=0,Yn=[],jn=0,zr=null,Li=1,Pi="";function Er(n,e){xs[Ss++]=kl,xs[Ss++]=Ol,Ol=n,kl=e}function mv(n,e,t){Yn[jn++]=Li,Yn[jn++]=Pi,Yn[jn++]=zr,zr=n;var i=Li;n=Pi;var r=32-ci(i)-1;i&=~(1<<r),t+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Li=1<<32-ci(e)+r|t<<r|i,Pi=s+n}else Li=1<<s|t<<r|i,Pi=n}function gh(n){n.return!==null&&(Er(n,1),mv(n,1,0))}function vh(n){for(;n===Ol;)Ol=xs[--Ss],xs[Ss]=null,kl=xs[--Ss],xs[Ss]=null;for(;n===zr;)zr=Yn[--jn],Yn[jn]=null,Pi=Yn[--jn],Yn[jn]=null,Li=Yn[--jn],Yn[jn]=null}var kn=null,On=null,Lt=!1,ai=null;function gv(n,e){var t=$n(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function zd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,kn=n,On=sr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,kn=n,On=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=zr!==null?{id:Li,overflow:Pi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=$n(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,kn=n,On=null,!0):!1;default:return!1}}function yf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xf(n){if(Lt){var e=On;if(e){var t=e;if(!zd(n,e)){if(yf(n))throw Error(de(418));e=sr(t.nextSibling);var i=kn;e&&zd(n,e)?gv(i,t):(n.flags=n.flags&-4097|2,Lt=!1,kn=n)}}else{if(yf(n))throw Error(de(418));n.flags=n.flags&-4097|2,Lt=!1,kn=n}}}function Bd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Pa(n){if(n!==kn)return!1;if(!Lt)return Bd(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!mf(n.type,n.memoizedProps)),e&&(e=On)){if(yf(n))throw vv(),Error(de(418));for(;e;)gv(n,e),e=sr(e.nextSibling)}if(Bd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(de(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){On=sr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}On=null}}else On=kn?sr(n.stateNode.nextSibling):null;return!0}function vv(){for(var n=On;n;)n=sr(n.nextSibling)}function ks(){On=kn=null,Lt=!1}function _h(n){ai===null?ai=[n]:ai.push(n)}var fx=Hi.ReactCurrentBatchConfig;function uo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(de(309));var i=t.stateNode}if(!i)throw Error(de(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(de(284));if(!t._owner)throw Error(de(290,n))}return n}function Da(n,e){throw n=Object.prototype.toString.call(e),Error(de(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Hd(n){var e=n._init;return e(n._payload)}function _v(n){function e(h,v){if(n){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=ur(h,v),h.index=0,h.sibling=null,h}function s(h,v,_){return h.index=_,n?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,_,S){return v===null||v.tag!==6?(v=nc(_,h.mode,S),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,S){var w=_.type;return w===ps?f(h,v,_.props.children,S,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ki&&Hd(w)===v.type)?(S=r(v,_.props),S.ref=uo(h,v,_),S.return=h,S):(S=wl(_.type,_.key,_.props,null,h.mode,S),S.ref=uo(h,v,_),S.return=h,S)}function u(h,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=ic(_,h.mode,S),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function f(h,v,_,S,w){return v===null||v.tag!==7?(v=Ir(_,h.mode,S,w),v.return=h,v):(v=r(v,_),v.return=h,v)}function c(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=nc(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return _=wl(v.type,v.key,v.props,null,h.mode,_),_.ref=uo(h,null,v),_.return=h,_;case ds:return v=ic(v,h.mode,_),v.return=h,v;case Ki:var S=v._init;return c(h,S(v._payload),_)}if(To(v)||ro(v))return v=Ir(v,h.mode,_,null),v.return=h,v;Da(h,v)}return null}function d(h,v,_,S){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(h,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:return _.key===w?l(h,v,_,S):null;case ds:return _.key===w?u(h,v,_,S):null;case Ki:return w=_._init,d(h,v,w(_._payload),S)}if(To(_)||ro(_))return w!==null?null:f(h,v,_,S,null);Da(h,_)}return null}function p(h,v,_,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,a(v,h,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sa:return h=h.get(S.key===null?_:S.key)||null,l(v,h,S,w);case ds:return h=h.get(S.key===null?_:S.key)||null,u(v,h,S,w);case Ki:var A=S._init;return p(h,v,_,A(S._payload),w)}if(To(S)||ro(S))return h=h.get(_)||null,f(v,h,S,w,null);Da(v,S)}return null}function g(h,v,_,S){for(var w=null,A=null,T=v,F=v=0,M=null;T!==null&&F<_.length;F++){T.index>F?(M=T,T=null):M=T.sibling;var C=d(h,T,_[F],S);if(C===null){T===null&&(T=M);break}n&&T&&C.alternate===null&&e(h,T),v=s(C,v,F),A===null?w=C:A.sibling=C,A=C,T=M}if(F===_.length)return t(h,T),Lt&&Er(h,F),w;if(T===null){for(;F<_.length;F++)T=c(h,_[F],S),T!==null&&(v=s(T,v,F),A===null?w=T:A.sibling=T,A=T);return Lt&&Er(h,F),w}for(T=i(h,T);F<_.length;F++)M=p(T,h,F,_[F],S),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?F:M.key),v=s(M,v,F),A===null?w=M:A.sibling=M,A=M);return n&&T.forEach(function(H){return e(h,H)}),Lt&&Er(h,F),w}function y(h,v,_,S){var w=ro(_);if(typeof w!="function")throw Error(de(150));if(_=w.call(_),_==null)throw Error(de(151));for(var A=w=null,T=v,F=v=0,M=null,C=_.next();T!==null&&!C.done;F++,C=_.next()){T.index>F?(M=T,T=null):M=T.sibling;var H=d(h,T,C.value,S);if(H===null){T===null&&(T=M);break}n&&T&&H.alternate===null&&e(h,T),v=s(H,v,F),A===null?w=H:A.sibling=H,A=H,T=M}if(C.done)return t(h,T),Lt&&Er(h,F),w;if(T===null){for(;!C.done;F++,C=_.next())C=c(h,C.value,S),C!==null&&(v=s(C,v,F),A===null?w=C:A.sibling=C,A=C);return Lt&&Er(h,F),w}for(T=i(h,T);!C.done;F++,C=_.next())C=p(T,h,F,C.value,S),C!==null&&(n&&C.alternate!==null&&T.delete(C.key===null?F:C.key),v=s(C,v,F),A===null?w=C:A.sibling=C,A=C);return n&&T.forEach(function(q){return e(h,q)}),Lt&&Er(h,F),w}function m(h,v,_,S){if(typeof _=="object"&&_!==null&&_.type===ps&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:e:{for(var w=_.key,A=v;A!==null;){if(A.key===w){if(w=_.type,w===ps){if(A.tag===7){t(h,A.sibling),v=r(A,_.props.children),v.return=h,h=v;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ki&&Hd(w)===A.type){t(h,A.sibling),v=r(A,_.props),v.ref=uo(h,A,_),v.return=h,h=v;break e}t(h,A);break}else e(h,A);A=A.sibling}_.type===ps?(v=Ir(_.props.children,h.mode,S,_.key),v.return=h,h=v):(S=wl(_.type,_.key,_.props,null,h.mode,S),S.ref=uo(h,v,_),S.return=h,h=S)}return o(h);case ds:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=ic(_,h.mode,S),v.return=h,h=v}return o(h);case Ki:return A=_._init,m(h,v,A(_._payload),S)}if(To(_))return g(h,v,_,S);if(ro(_))return y(h,v,_,S);Da(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,_),v.return=h,h=v):(t(h,v),v=nc(_,h.mode,S),v.return=h,h=v),o(h)):t(h,v)}return m}var zs=_v(!0),yv=_v(!1),zl=gr(null),Bl=null,Ms=null,yh=null;function xh(){yh=Ms=Bl=null}function Sh(n){var e=zl.current;Rt(zl),n._currentValue=e}function Sf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ps(n,e){Bl=n,yh=Ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Tn=!0),n.firstContext=null)}function Qn(n){var e=n._currentValue;if(yh!==n)if(n={context:n,memoizedValue:e,next:null},Ms===null){if(Bl===null)throw Error(de(308));Ms=n,Bl.dependencies={lanes:0,firstContext:n}}else Ms=Ms.next=n;return e}var Pr=null;function Mh(n){Pr===null?Pr=[n]:Pr.push(n)}function xv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Mh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Fi(n,i)}function Fi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var qi=!1;function Eh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ni(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function or(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(n,t)}return r=i.interleaved,r===null?(e.next=e,Mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(n,t)}function _l(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,lh(n,t)}}function Gd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Hl(n,e,t,i){var r=n.updateQueue;qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=n.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,y=a;switch(d=e,p=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){c=g.call(p,c,d);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,c,d):g,d==null)break e;c=Ut({},c,d);break e;case 2:qi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=c):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hr|=o,n.lanes=o,n.memoizedState=c}}function Vd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var ca={},xi=gr(ca),Qo=gr(ca),Jo=gr(ca);function Dr(n){if(n===ca)throw Error(de(174));return n}function wh(n,e){switch(wt(Jo,e),wt(Qo,n),wt(xi,ca),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ef(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ef(e,n)}Rt(xi),wt(xi,e)}function Bs(){Rt(xi),Rt(Qo),Rt(Jo)}function Mv(n){Dr(Jo.current);var e=Dr(xi.current),t=ef(e,n.type);e!==t&&(wt(Qo,n),wt(xi,t))}function Th(n){Qo.current===n&&(Rt(xi),Rt(Qo))}var Nt=gr(0);function Gl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $u=[];function Ah(){for(var n=0;n<$u.length;n++)$u[n]._workInProgressVersionPrimary=null;$u.length=0}var yl=Hi.ReactCurrentDispatcher,Zu=Hi.ReactCurrentBatchConfig,Br=0,It=null,Yt=null,Zt=null,Vl=!1,Io=!1,ea=0,hx=0;function un(){throw Error(de(321))}function Ch(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!hi(n[t],e[t]))return!1;return!0}function Rh(n,e,t,i,r,s){if(Br=s,It=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=n===null||n.memoizedState===null?gx:vx,n=t(i,r),Io){s=0;do{if(Io=!1,ea=0,25<=s)throw Error(de(301));s+=1,Zt=Yt=null,e.updateQueue=null,yl.current=_x,n=t(i,r)}while(Io)}if(yl.current=Wl,e=Yt!==null&&Yt.next!==null,Br=0,Zt=Yt=It=null,Vl=!1,e)throw Error(de(300));return n}function bh(){var n=ea!==0;return ea=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?It.memoizedState=Zt=n:Zt=Zt.next=n,Zt}function Jn(){if(Yt===null){var n=It.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var e=Zt===null?It.memoizedState:Zt.next;if(e!==null)Zt=e,Yt=n;else{if(n===null)throw Error(de(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Zt===null?It.memoizedState=Zt=n:Zt=Zt.next=n}return Zt}function ta(n,e){return typeof e=="function"?e(n):e}function Qu(n){var e=Jn(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=Yt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Br&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=i):l=l.next=c,It.lanes|=f,Hr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,It.lanes|=s,Hr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ju(n){var e=Jn(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(Tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ev(){}function wv(n,e){var t=It,i=Jn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,Tn=!0),i=i.queue,Lh(Cv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(t.flags|=2048,na(9,Av.bind(null,t,i,r,e),void 0,null),Jt===null)throw Error(de(349));Br&30||Tv(t,e,r)}return r}function Tv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Av(n,e,t,i){e.value=t,e.getSnapshot=i,Rv(e)&&bv(n)}function Cv(n,e,t){return t(function(){Rv(e)&&bv(n)})}function Rv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!hi(n,t)}catch{return!0}}function bv(n){var e=Fi(n,1);e!==null&&fi(e,n,1,-1)}function Wd(n){var e=mi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},e.queue=n,n=n.dispatch=mx.bind(null,It,n),[e.memoizedState,n]}function na(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Lv(){return Jn().memoizedState}function xl(n,e,t,i){var r=mi();It.flags|=n,r.memoizedState=na(1|e,t,void 0,i===void 0?null:i)}function cu(n,e,t,i){var r=Jn();i=i===void 0?null:i;var s=void 0;if(Yt!==null){var o=Yt.memoizedState;if(s=o.destroy,i!==null&&Ch(i,o.deps)){r.memoizedState=na(e,t,s,i);return}}It.flags|=n,r.memoizedState=na(1|e,t,s,i)}function Xd(n,e){return xl(8390656,8,n,e)}function Lh(n,e){return cu(2048,8,n,e)}function Pv(n,e){return cu(4,2,n,e)}function Dv(n,e){return cu(4,4,n,e)}function Nv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Iv(n,e,t){return t=t!=null?t.concat([n]):null,cu(4,4,Nv.bind(null,e,n),t)}function Ph(){}function Uv(n,e){var t=Jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Fv(n,e){var t=Jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Ov(n,e,t){return Br&21?(hi(t,e)||(t=Gg(),It.lanes|=t,Hr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Tn=!0),n.memoizedState=t)}function dx(n,e){var t=pt;pt=t!==0&&4>t?t:4,n(!0);var i=Zu.transition;Zu.transition={};try{n(!1),e()}finally{pt=t,Zu.transition=i}}function kv(){return Jn().memoizedState}function px(n,e,t){var i=lr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},zv(n))Bv(e,t);else if(t=xv(n,e,t,i),t!==null){var r=vn();fi(t,n,i,r),Hv(t,e,i)}}function mx(n,e,t){var i=lr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(zv(n))Bv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,Mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=xv(n,e,r,i),t!==null&&(r=vn(),fi(t,n,i,r),Hv(t,e,i))}}function zv(n){var e=n.alternate;return n===It||e!==null&&e===It}function Bv(n,e){Io=Vl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Hv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,lh(n,t)}}var Wl={readContext:Qn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},gx={readContext:Qn,useCallback:function(n,e){return mi().memoizedState=[n,e===void 0?null:e],n},useContext:Qn,useEffect:Xd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,xl(4194308,4,Nv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return xl(4194308,4,n,e)},useInsertionEffect:function(n,e){return xl(4,2,n,e)},useMemo:function(n,e){var t=mi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=mi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=px.bind(null,It,n),[i.memoizedState,n]},useRef:function(n){var e=mi();return n={current:n},e.memoizedState=n},useState:Wd,useDebugValue:Ph,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=Wd(!1),e=n[0];return n=dx.bind(null,n[1]),mi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=It,r=mi();if(Lt){if(t===void 0)throw Error(de(407));t=t()}else{if(t=e(),Jt===null)throw Error(de(349));Br&30||Tv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Xd(Cv.bind(null,i,s,n),[n]),i.flags|=2048,na(9,Av.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=mi(),e=Jt.identifierPrefix;if(Lt){var t=Pi,i=Li;t=(i&~(1<<32-ci(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ea++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=hx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},vx={readContext:Qn,useCallback:Uv,useContext:Qn,useEffect:Lh,useImperativeHandle:Iv,useInsertionEffect:Pv,useLayoutEffect:Dv,useMemo:Fv,useReducer:Qu,useRef:Lv,useState:function(){return Qu(ta)},useDebugValue:Ph,useDeferredValue:function(n){var e=Jn();return Ov(e,Yt.memoizedState,n)},useTransition:function(){var n=Qu(ta)[0],e=Jn().memoizedState;return[n,e]},useMutableSource:Ev,useSyncExternalStore:wv,useId:kv,unstable_isNewReconciler:!1},_x={readContext:Qn,useCallback:Uv,useContext:Qn,useEffect:Lh,useImperativeHandle:Iv,useInsertionEffect:Pv,useLayoutEffect:Dv,useMemo:Fv,useReducer:Ju,useRef:Lv,useState:function(){return Ju(ta)},useDebugValue:Ph,useDeferredValue:function(n){var e=Jn();return Yt===null?e.memoizedState=n:Ov(e,Yt.memoizedState,n)},useTransition:function(){var n=Ju(ta)[0],e=Jn().memoizedState;return[n,e]},useMutableSource:Ev,useSyncExternalStore:wv,useId:kv,unstable_isNewReconciler:!1};function si(n,e){if(n&&n.defaultProps){e=Ut({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Mf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ut({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var fu={isMounted:function(n){return(n=n._reactInternals)?Xr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=vn(),r=lr(n),s=Ni(i,r);s.payload=e,t!=null&&(s.callback=t),e=or(n,s,r),e!==null&&(fi(e,n,r,i),_l(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=vn(),r=lr(n),s=Ni(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=or(n,s,r),e!==null&&(fi(e,n,r,i),_l(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=vn(),i=lr(n),r=Ni(t,i);r.tag=2,e!=null&&(r.callback=e),e=or(n,r,i),e!==null&&(fi(e,n,i,t),_l(e,n,i))}};function Yd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(t,i)||!Ko(r,s):!0}function Gv(n,e,t){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qn(s):(r=Rn(e)?kr:pn.current,i=e.contextTypes,s=(i=i!=null)?Os(n,r):pr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function jd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&fu.enqueueReplaceState(e,e.state,null)}function Ef(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Eh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Qn(s):(s=Rn(e)?kr:pn.current,r.context=Os(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fu.enqueueReplaceState(r,r.state,null),Hl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,e){try{var t="",i=e;do t+=Y_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ec(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function wf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function Vv(n,e,t){t=Ni(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Yl||(Yl=!0,If=i),wf(n,e)},t}function Wv(n,e,t){t=Ni(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){wf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){wf(n,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Kd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new yx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Nx.bind(null,n,e,t),e.then(n,n))}function qd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function $d(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ni(-1,1),e.tag=2,or(t,e,1))),t.lanes|=1),n)}var xx=Hi.ReactCurrentOwner,Tn=!1;function gn(n,e,t,i){e.child=n===null?yv(e,null,t,i):zs(e,n.child,t,i)}function Zd(n,e,t,i,r){t=t.render;var s=e.ref;return Ps(e,r),i=Rh(n,e,t,i,s,r),t=bh(),n!==null&&!Tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(Lt&&t&&gh(e),e.flags|=1,gn(n,e,i,r),e.child)}function Qd(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!zh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Xv(n,e,s,i,r)):(n=wl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ko,t(o,i)&&n.ref===e.ref)return Oi(n,e,r)}return e.flags|=1,n=ur(s,i),n.ref=e.ref,n.return=e,e.child=n}function Xv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ko(s,i)&&n.ref===e.ref)if(Tn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Tn=!0);else return e.lanes=n.lanes,Oi(n,e,r)}return Tf(n,e,t,i,r)}function Yv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(ws,In),In|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(ws,In),In|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(ws,In),In|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(ws,In),In|=i;return gn(n,e,r,t),e.child}function jv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Tf(n,e,t,i,r){var s=Rn(t)?kr:pn.current;return s=Os(e,s),Ps(e,r),t=Rh(n,e,t,i,s,r),i=bh(),n!==null&&!Tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(Lt&&i&&gh(e),e.flags|=1,gn(n,e,t,r),e.child)}function Jd(n,e,t,i,r){if(Rn(t)){var s=!0;Fl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)Sl(n,e),Gv(e,t,i),Ef(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Qn(u):(u=Rn(t)?kr:pn.current,u=Os(e,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&jd(e,o,i,u),qi=!1;var d=e.memoizedState;o.state=d,Hl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Cn.current||qi?(typeof f=="function"&&(Mf(e,t,f,i),l=e.memoizedState),(a=qi||Yd(e,t,a,i,d,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Sv(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:si(e.type,a),o.props=u,c=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Qn(l):(l=Rn(t)?kr:pn.current,l=Os(e,l));var p=t.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||d!==l)&&jd(e,o,i,l),qi=!1,d=e.memoizedState,o.state=d,Hl(e,i,o,r);var g=e.memoizedState;a!==c||d!==g||Cn.current||qi?(typeof p=="function"&&(Mf(e,t,p,i),g=e.memoizedState),(u=qi||Yd(e,t,u,i,d,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Af(n,e,t,i,s,r)}function Af(n,e,t,i,r,s){jv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&kd(e,t,!1),Oi(n,e,s);i=e.stateNode,xx.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=zs(e,n.child,null,s),e.child=zs(e,null,a,s)):gn(n,e,a,s),e.memoizedState=i.state,r&&kd(e,t,!0),e.child}function Kv(n){var e=n.stateNode;e.pendingContext?Od(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Od(n,e.context,!1),wh(n,e.containerInfo)}function ep(n,e,t,i,r){return ks(),_h(r),e.flags|=256,gn(n,e,t,i),e.child}var Cf={dehydrated:null,treeContext:null,retryLane:0};function Rf(n){return{baseLanes:n,cachePool:null,transitions:null}}function qv(n,e,t){var i=e.pendingProps,r=Nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(Nt,r&1),n===null)return xf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,i,0,null),n=Ir(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Rf(t),e.memoizedState=Cf,n):Dh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Sx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=Ir(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Rf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Cf,i}return s=n.child,n=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Dh(n,e){return e=pu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Na(n,e,t,i){return i!==null&&_h(i),zs(e,n.child,null,t),n=Dh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Sx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ec(Error(de(422))),Na(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pu({mode:"visible",children:i.children},r,0,null),s=Ir(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,n.child,null,o),e.child.memoizedState=Rf(o),e.memoizedState=Cf,s);if(!(e.mode&1))return Na(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=ec(s,i,void 0),Na(n,e,o,i)}if(a=(o&n.childLanes)!==0,Tn||a){if(i=Jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(n,r),fi(i,n,r,-1))}return kh(),i=ec(Error(de(421))),Na(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Ix.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,On=sr(r.nextSibling),kn=e,Lt=!0,ai=null,n!==null&&(Yn[jn++]=Li,Yn[jn++]=Pi,Yn[jn++]=zr,Li=n.id,Pi=n.overflow,zr=e),e=Dh(e,i.children),e.flags|=4096,e)}function tp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Sf(n.return,e,t)}function tc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function $v(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(n,e,i.children,t),i=Nt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tp(n,t,e);else if(n.tag===19)tp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(Nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Gl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),tc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Gl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}tc(e,!0,t,null,s);break;case"together":tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Oi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Hr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(de(153));if(e.child!==null){for(n=e.child,t=ur(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ur(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Mx(n,e,t){switch(e.tag){case 3:Kv(e),ks();break;case 5:Mv(e);break;case 1:Rn(e.type)&&Fl(e);break;case 4:wh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(Nt,Nt.current&1),e.flags|=128,null):t&e.child.childLanes?qv(n,e,t):(wt(Nt,Nt.current&1),n=Oi(n,e,t),n!==null?n.sibling:null);wt(Nt,Nt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return $v(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(Nt,Nt.current),i)break;return null;case 22:case 23:return e.lanes=0,Yv(n,e,t)}return Oi(n,e,t)}var Zv,bf,Qv,Jv;Zv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};bf=function(){};Qv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Dr(xi.current);var s=null;switch(t){case"input":r=$c(n,r),i=$c(n,i),s=[];break;case"select":r=Ut({},r,{value:void 0}),i=Ut({},i,{value:void 0}),s=[];break;case"textarea":r=Jc(n,r),i=Jc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Il)}tf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ho.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&At("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Jv=function(n,e,t,i){t!==i&&(e.flags|=4)};function co(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function cn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Ex(n,e,t){var i=e.pendingProps;switch(vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Rn(e.type)&&Ul(),cn(e),null;case 3:return i=e.stateNode,Bs(),Rt(Cn),Rt(pn),Ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Pa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(Of(ai),ai=null))),bf(n,e),cn(e),null;case 5:Th(e);var r=Dr(Jo.current);if(t=e.type,n!==null&&e.stateNode!=null)Qv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return cn(e),null}if(n=Dr(xi.current),Pa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[Zo]=s,n=(e.mode&1)!==0,t){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(r=0;r<Co.length;r++)At(Co[r],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":cd(i,s),At("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},At("invalid",i);break;case"textarea":hd(i,s),At("invalid",i)}tf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,n),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&At("scroll",i)}switch(t){case"input":Ma(i),fd(i,s,!0);break;case"textarea":Ma(i),dd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Cg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[vi]=e,n[Zo]=i,Zv(n,e,!1,!1),e.stateNode=n;e:{switch(o=nf(t,i),t){case"dialog":At("cancel",n),At("close",n),r=i;break;case"iframe":case"object":case"embed":At("load",n),r=i;break;case"video":case"audio":for(r=0;r<Co.length;r++)At(Co[r],n);r=i;break;case"source":At("error",n),r=i;break;case"img":case"image":case"link":At("error",n),At("load",n),r=i;break;case"details":At("toggle",n),r=i;break;case"input":cd(n,i),r=$c(n,i),At("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ut({},i,{value:void 0}),At("invalid",n);break;case"textarea":hd(n,i),r=Jc(n,i),At("invalid",n);break;default:r=i}tf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Lg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Go(n,l):typeof l=="number"&&Go(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&At("scroll",n):l!=null&&nh(n,s,l,o))}switch(t){case"input":Ma(n),fd(n,i,!1);break;case"textarea":Ma(n),dd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+dr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Cs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Il)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(n&&e.stateNode!=null)Jv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(t=Dr(Jo.current),Dr(xi.current),Pa(e)){if(i=e.stateNode,t=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==t)&&(n=kn,n!==null))switch(n.tag){case 3:La(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&La(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return cn(e),null;case 13:if(Rt(Nt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&On!==null&&e.mode&1&&!(e.flags&128))vv(),ks(),e.flags|=98560,s=!1;else if(s=Pa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[vi]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else ai!==null&&(Of(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Nt.current&1?jt===0&&(jt=3):kh())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return Bs(),bf(n,e),n===null&&qo(e.stateNode.containerInfo),cn(e),null;case 10:return Sh(e.type._context),cn(e),null;case 17:return Rn(e.type)&&Ul(),cn(e),null;case 19:if(Rt(Nt),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)co(s,!1);else{if(jt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Gl(n),o!==null){for(e.flags|=128,co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(Nt,Nt.current&1|2),e.child}n=n.sibling}s.tail!==null&&zt()>Gs&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304)}else{if(!i)if(n=Gl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return cn(e),null}else 2*zt()-s.renderingStartTime>Gs&&t!==1073741824&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,t=Nt.current,wt(Nt,i?t&1|2:t&1),e):(cn(e),null);case 22:case 23:return Oh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function wx(n,e){switch(vh(e),e.tag){case 1:return Rn(e.type)&&Ul(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Bs(),Rt(Cn),Rt(pn),Ah(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Th(e),null;case 13:if(Rt(Nt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(de(340));ks()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Rt(Nt),null;case 4:return Bs(),null;case 10:return Sh(e.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var Ia=!1,dn=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Es(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ot(n,e,i)}else t.current=null}function Lf(n,e,t){try{t()}catch(i){Ot(n,e,i)}}var np=!1;function Ax(n,e){if(df=Pl,n=rv(),mh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,f=0,c=n,d=null;t:for(;;){for(var p;c!==t||r!==0&&c.nodeType!==3||(a=o+r),c!==s||i!==0&&c.nodeType!==3||(l=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)d=c,c=p;for(;;){if(c===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(p=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(pf={focusedElem:n,selectionRange:t},Pl=!1,Ce=e;Ce!==null;)if(e=Ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ce=n;else for(;Ce!==null;){e=Ce;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:si(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){Ot(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}return g=np,np=!1,g}function Uo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lf(e,t,s)}r=r.next}while(r!==i)}}function hu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Pf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function e0(n){var e=n.alternate;e!==null&&(n.alternate=null,e0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[vi],delete e[Zo],delete e[vf],delete e[lx],delete e[ux])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function t0(n){return n.tag===5||n.tag===3||n.tag===4}function ip(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||t0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Df(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Il));else if(i!==4&&(n=n.child,n!==null))for(Df(n,e,t),n=n.sibling;n!==null;)Df(n,e,t),n=n.sibling}function Nf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Nf(n,e,t),n=n.sibling;n!==null;)Nf(n,e,t),n=n.sibling}var sn=null,oi=!1;function Gi(n,e,t){for(t=t.child;t!==null;)n0(n,e,t),t=t.sibling}function n0(n,e,t){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(ru,t)}catch{}switch(t.tag){case 5:dn||Es(t,e);case 6:var i=sn,r=oi;sn=null,Gi(n,e,t),sn=i,oi=r,sn!==null&&(oi?(n=sn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):sn.removeChild(t.stateNode));break;case 18:sn!==null&&(oi?(n=sn,t=t.stateNode,n.nodeType===8?Ku(n.parentNode,t):n.nodeType===1&&Ku(n,t),Yo(n)):Ku(sn,t.stateNode));break;case 4:i=sn,r=oi,sn=t.stateNode.containerInfo,oi=!0,Gi(n,e,t),sn=i,oi=r;break;case 0:case 11:case 14:case 15:if(!dn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lf(t,e,o),r=r.next}while(r!==i)}Gi(n,e,t);break;case 1:if(!dn&&(Es(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ot(t,e,a)}Gi(n,e,t);break;case 21:Gi(n,e,t);break;case 22:t.mode&1?(dn=(i=dn)||t.memoizedState!==null,Gi(n,e,t),dn=i):Gi(n,e,t);break;default:Gi(n,e,t)}}function rp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Tx),e.forEach(function(i){var r=Ux.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ti(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:sn=a.stateNode,oi=!1;break e;case 3:sn=a.stateNode.containerInfo,oi=!0;break e;case 4:sn=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if(sn===null)throw Error(de(160));n0(s,o,r),sn=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ot(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)i0(e,n),e=e.sibling}function i0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ti(e,n),di(n),i&4){try{Uo(3,n,n.return),hu(3,n)}catch(y){Ot(n,n.return,y)}try{Uo(5,n,n.return)}catch(y){Ot(n,n.return,y)}}break;case 1:ti(e,n),di(n),i&512&&t!==null&&Es(t,t.return);break;case 5:if(ti(e,n),di(n),i&512&&t!==null&&Es(t,t.return),n.flags&32){var r=n.stateNode;try{Go(r,"")}catch(y){Ot(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Tg(r,s),nf(a,o);var u=nf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?Lg(r,c):f==="dangerouslySetInnerHTML"?Rg(r,c):f==="children"?Go(r,c):nh(r,f,c,u)}switch(a){case"input":Zc(r,s);break;case"textarea":Ag(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Cs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(y){Ot(n,n.return,y)}}break;case 6:if(ti(e,n),di(n),i&4){if(n.stateNode===null)throw Error(de(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){Ot(n,n.return,y)}}break;case 3:if(ti(e,n),di(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(y){Ot(n,n.return,y)}break;case 4:ti(e,n),di(n);break;case 13:ti(e,n),di(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uh=zt())),i&4&&rp(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(dn=(u=dn)||f,ti(e,n),dn=u):ti(e,n),di(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!f&&n.mode&1)for(Ce=n,f=n.child;f!==null;){for(c=Ce=f;Ce!==null;){switch(d=Ce,p=d.child,d.tag){case 0:case 11:case 14:case 15:Uo(4,d,d.return);break;case 1:Es(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Ot(i,t,y)}}break;case 5:Es(d,d.return);break;case 22:if(d.memoizedState!==null){op(c);continue}}p!==null?(p.return=d,Ce=p):op(c)}f=f.sibling}e:for(f=null,c=n;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bg("display",o))}catch(y){Ot(n,n.return,y)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){Ot(n,n.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===n)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ti(e,n),di(n),i&4&&rp(n);break;case 21:break;default:ti(e,n),di(n)}}function di(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(t0(t)){var i=t;break e}t=t.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Go(r,""),i.flags&=-33);var s=ip(n);Nf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ip(n);Df(n,a,o);break;default:throw Error(de(161))}}catch(l){Ot(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Cx(n,e,t){Ce=n,r0(n)}function r0(n,e,t){for(var i=(n.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ia;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||dn;a=Ia;var u=dn;if(Ia=o,(dn=l)&&!u)for(Ce=r;Ce!==null;)o=Ce,l=o.child,o.tag===22&&o.memoizedState!==null?ap(r):l!==null?(l.return=o,Ce=l):ap(r);for(;s!==null;)Ce=s,r0(s),s=s.sibling;Ce=r,Ia=a,dn=u}sp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):sp(n)}}function sp(n){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!dn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:si(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Vd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Yo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}dn||e.flags&512&&Pf(e)}catch(d){Ot(e,e.return,d)}}if(e===n){Ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function op(n){for(;Ce!==null;){var e=Ce;if(e===n){Ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function ap(n){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{hu(4,e)}catch(l){Ot(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ot(e,r,l)}}var s=e.return;try{Pf(e)}catch(l){Ot(e,s,l)}break;case 5:var o=e.return;try{Pf(e)}catch(l){Ot(e,o,l)}}}catch(l){Ot(e,e.return,l)}if(e===n){Ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ce=a;break}Ce=e.return}}var Rx=Math.ceil,Xl=Hi.ReactCurrentDispatcher,Nh=Hi.ReactCurrentOwner,Zn=Hi.ReactCurrentBatchConfig,ut=0,Jt=null,Wt=null,an=0,In=0,ws=gr(0),jt=0,ia=null,Hr=0,du=0,Ih=0,Fo=null,Mn=null,Uh=0,Gs=1/0,Ri=null,Yl=!1,If=null,ar=null,Ua=!1,Ji=null,jl=0,Oo=0,Uf=null,Ml=-1,El=0;function vn(){return ut&6?zt():Ml!==-1?Ml:Ml=zt()}function lr(n){return n.mode&1?ut&2&&an!==0?an&-an:fx.transition!==null?(El===0&&(El=Gg()),El):(n=pt,n!==0||(n=window.event,n=n===void 0?16:qg(n.type)),n):1}function fi(n,e,t,i){if(50<Oo)throw Oo=0,Uf=null,Error(de(185));aa(n,t,i),(!(ut&2)||n!==Jt)&&(n===Jt&&(!(ut&2)&&(du|=t),jt===4&&Zi(n,an)),bn(n,i),t===1&&ut===0&&!(e.mode&1)&&(Gs=zt()+500,uu&&vr()))}function bn(n,e){var t=n.callbackNode;fy(n,e);var i=Ll(n,n===Jt?an:0);if(i===0)t!==null&&gd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&gd(t),e===1)n.tag===0?cx(lp.bind(null,n)):pv(lp.bind(null,n)),ox(function(){!(ut&6)&&vr()}),t=null;else{switch(Vg(i)){case 1:t=ah;break;case 4:t=Bg;break;case 16:t=bl;break;case 536870912:t=Hg;break;default:t=bl}t=h0(t,s0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function s0(n,e){if(Ml=-1,El=0,ut&6)throw Error(de(327));var t=n.callbackNode;if(Ds()&&n.callbackNode!==t)return null;var i=Ll(n,n===Jt?an:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Kl(n,i);else{e=i;var r=ut;ut|=2;var s=a0();(Jt!==n||an!==e)&&(Ri=null,Gs=zt()+500,Nr(n,e));do try{Px();break}catch(a){o0(n,a)}while(!0);xh(),Xl.current=s,ut=r,Wt!==null?e=0:(Jt=null,an=0,e=jt)}if(e!==0){if(e===2&&(r=lf(n),r!==0&&(i=r,e=Ff(n,r))),e===1)throw t=ia,Nr(n,0),Zi(n,i),bn(n,zt()),t;if(e===6)Zi(n,i);else{if(r=n.current.alternate,!(i&30)&&!bx(r)&&(e=Kl(n,i),e===2&&(s=lf(n),s!==0&&(i=s,e=Ff(n,s))),e===1))throw t=ia,Nr(n,0),Zi(n,i),bn(n,zt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:wr(n,Mn,Ri);break;case 3:if(Zi(n,i),(i&130023424)===i&&(e=Uh+500-zt(),10<e)){if(Ll(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=gf(wr.bind(null,n,Mn,Ri),e);break}wr(n,Mn,Ri);break;case 4:if(Zi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rx(i/1960))-i,10<i){n.timeoutHandle=gf(wr.bind(null,n,Mn,Ri),i);break}wr(n,Mn,Ri);break;case 5:wr(n,Mn,Ri);break;default:throw Error(de(329))}}}return bn(n,zt()),n.callbackNode===t?s0.bind(null,n):null}function Ff(n,e){var t=Fo;return n.current.memoizedState.isDehydrated&&(Nr(n,e).flags|=256),n=Kl(n,e),n!==2&&(e=Mn,Mn=t,e!==null&&Of(e)),n}function Of(n){Mn===null?Mn=n:Mn.push.apply(Mn,n)}function bx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(n,e){for(e&=~Ih,e&=~du,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ci(e),i=1<<t;n[t]=-1,e&=~i}}function lp(n){if(ut&6)throw Error(de(327));Ds();var e=Ll(n,0);if(!(e&1))return bn(n,zt()),null;var t=Kl(n,e);if(n.tag!==0&&t===2){var i=lf(n);i!==0&&(e=i,t=Ff(n,i))}if(t===1)throw t=ia,Nr(n,0),Zi(n,e),bn(n,zt()),t;if(t===6)throw Error(de(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,wr(n,Mn,Ri),bn(n,zt()),null}function Fh(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(Gs=zt()+500,uu&&vr())}}function Gr(n){Ji!==null&&Ji.tag===0&&!(ut&6)&&Ds();var e=ut;ut|=1;var t=Zn.transition,i=pt;try{if(Zn.transition=null,pt=1,n)return n()}finally{pt=i,Zn.transition=t,ut=e,!(ut&6)&&vr()}}function Oh(){In=ws.current,Rt(ws)}function Nr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,sx(t)),Wt!==null)for(t=Wt.return;t!==null;){var i=t;switch(vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ul();break;case 3:Bs(),Rt(Cn),Rt(pn),Ah();break;case 5:Th(i);break;case 4:Bs();break;case 13:Rt(Nt);break;case 19:Rt(Nt);break;case 10:Sh(i.type._context);break;case 22:case 23:Oh()}t=t.return}if(Jt=n,Wt=n=ur(n.current,null),an=In=e,jt=0,ia=null,Ih=du=Hr=0,Mn=Fo=null,Pr!==null){for(e=0;e<Pr.length;e++)if(t=Pr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Pr=null}return n}function o0(n,e){do{var t=Wt;try{if(xh(),yl.current=Wl,Vl){for(var i=It.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vl=!1}if(Br=0,Zt=Yt=It=null,Io=!1,ea=0,Nh.current=null,t===null||t.return===null){jt=1,ia=e,Wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=an,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=qd(o);if(p!==null){p.flags&=-257,$d(p,o,a,s,e),p.mode&1&&Kd(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Kd(s,u,e),kh();break e}l=Error(de(426))}}else if(Lt&&a.mode&1){var m=qd(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),$d(m,o,a,s,e),_h(Hs(l,a));break e}}s=l=Hs(l,a),jt!==4&&(jt=2),Fo===null?Fo=[s]:Fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Vv(s,l,e);Gd(s,h);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ar===null||!ar.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Wv(s,a,e);Gd(s,S);break e}}s=s.return}while(s!==null)}u0(t)}catch(w){e=w,Wt===t&&t!==null&&(Wt=t=t.return);continue}break}while(!0)}function a0(){var n=Xl.current;return Xl.current=Wl,n===null?Wl:n}function kh(){(jt===0||jt===3||jt===2)&&(jt=4),Jt===null||!(Hr&268435455)&&!(du&268435455)||Zi(Jt,an)}function Kl(n,e){var t=ut;ut|=2;var i=a0();(Jt!==n||an!==e)&&(Ri=null,Nr(n,e));do try{Lx();break}catch(r){o0(n,r)}while(!0);if(xh(),ut=t,Xl.current=i,Wt!==null)throw Error(de(261));return Jt=null,an=0,jt}function Lx(){for(;Wt!==null;)l0(Wt)}function Px(){for(;Wt!==null&&!ny();)l0(Wt)}function l0(n){var e=f0(n.alternate,n,In);n.memoizedProps=n.pendingProps,e===null?u0(n):Wt=e,Nh.current=null}function u0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=wx(t,e),t!==null){t.flags&=32767,Wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jt=6,Wt=null;return}}else if(t=Ex(t,e,In),t!==null){Wt=t;return}if(e=e.sibling,e!==null){Wt=e;return}Wt=e=n}while(e!==null);jt===0&&(jt=5)}function wr(n,e,t){var i=pt,r=Zn.transition;try{Zn.transition=null,pt=1,Dx(n,e,t,i)}finally{Zn.transition=r,pt=i}return null}function Dx(n,e,t,i){do Ds();while(Ji!==null);if(ut&6)throw Error(de(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(de(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(hy(n,s),n===Jt&&(Wt=Jt=null,an=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ua||(Ua=!0,h0(bl,function(){return Ds(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Zn.transition,Zn.transition=null;var o=pt;pt=1;var a=ut;ut|=4,Nh.current=null,Ax(n,t),i0(t,n),Qy(pf),Pl=!!df,pf=df=null,n.current=t,Cx(t),iy(),ut=a,pt=o,Zn.transition=s}else n.current=t;if(Ua&&(Ua=!1,Ji=n,jl=r),s=n.pendingLanes,s===0&&(ar=null),oy(t.stateNode),bn(n,zt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yl)throw Yl=!1,n=If,If=null,n;return jl&1&&n.tag!==0&&Ds(),s=n.pendingLanes,s&1?n===Uf?Oo++:(Oo=0,Uf=n):Oo=0,vr(),null}function Ds(){if(Ji!==null){var n=Vg(jl),e=Zn.transition,t=pt;try{if(Zn.transition=null,pt=16>n?16:n,Ji===null)var i=!1;else{if(n=Ji,Ji=null,jl=0,ut&6)throw Error(de(331));var r=ut;for(ut|=4,Ce=n.current;Ce!==null;){var s=Ce,o=s.child;if(Ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ce=u;Ce!==null;){var f=Ce;switch(f.tag){case 0:case 11:case 15:Uo(8,f,s)}var c=f.child;if(c!==null)c.return=f,Ce=c;else for(;Ce!==null;){f=Ce;var d=f.sibling,p=f.return;if(e0(f),f===u){Ce=null;break}if(d!==null){d.return=p,Ce=d;break}Ce=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ce=o;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ce=h;break e}Ce=s.return}}var v=n.current;for(Ce=v;Ce!==null;){o=Ce;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ce=_;else e:for(o=v;Ce!==null;){if(a=Ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hu(9,a)}}catch(w){Ot(a,a.return,w)}if(a===o){Ce=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ce=S;break e}Ce=a.return}}if(ut=r,vr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(ru,n)}catch{}i=!0}return i}finally{pt=t,Zn.transition=e}}return!1}function up(n,e,t){e=Hs(t,e),e=Vv(n,e,1),n=or(n,e,1),e=vn(),n!==null&&(aa(n,1,e),bn(n,e))}function Ot(n,e,t){if(n.tag===3)up(n,n,t);else for(;e!==null;){if(e.tag===3){up(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){n=Hs(t,n),n=Wv(e,n,1),e=or(e,n,1),n=vn(),e!==null&&(aa(e,1,n),bn(e,n));break}}e=e.return}}function Nx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=vn(),n.pingedLanes|=n.suspendedLanes&t,Jt===n&&(an&t)===t&&(jt===4||jt===3&&(an&130023424)===an&&500>zt()-Uh?Nr(n,0):Ih|=t),bn(n,e)}function c0(n,e){e===0&&(n.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var t=vn();n=Fi(n,e),n!==null&&(aa(n,e,t),bn(n,t))}function Ix(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),c0(n,t)}function Ux(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),c0(n,t)}var f0;f0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Cn.current)Tn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Tn=!1,Mx(n,e,t);Tn=!!(n.flags&131072)}else Tn=!1,Lt&&e.flags&1048576&&mv(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(n,e),n=e.pendingProps;var r=Os(e,pn.current);Ps(e,t),r=Rh(null,e,i,n,r,t);var s=bh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rn(i)?(s=!0,Fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Eh(e),r.updater=fu,e.stateNode=r,r._reactInternals=e,Ef(e,i,n,t),e=Af(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&gh(e),gn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ox(i),n=si(i,n),r){case 0:e=Tf(null,e,i,n,t);break e;case 1:e=Jd(null,e,i,n,t);break e;case 11:e=Zd(null,e,i,n,t);break e;case 14:e=Qd(null,e,i,si(i.type,n),t);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Tf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Jd(n,e,i,r,t);case 3:e:{if(Kv(e),n===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Sv(n,e),Hl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(de(423)),e),e=ep(n,e,i,t,r);break e}else if(i!==r){r=Hs(Error(de(424)),e),e=ep(n,e,i,t,r);break e}else for(On=sr(e.stateNode.containerInfo.firstChild),kn=e,Lt=!0,ai=null,t=yv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ks(),i===r){e=Oi(n,e,t);break e}gn(n,e,i,t)}e=e.child}return e;case 5:return Mv(e),n===null&&xf(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,mf(i,r)?o=null:s!==null&&mf(i,s)&&(e.flags|=32),jv(n,e),gn(n,e,o,t),e.child;case 6:return n===null&&xf(e),null;case 13:return qv(n,e,t);case 4:return wh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=zs(e,null,i,t):gn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Zd(n,e,i,r,t);case 7:return gn(n,e,e.pendingProps,t),e.child;case 8:return gn(n,e,e.pendingProps.children,t),e.child;case 12:return gn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(zl,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!Cn.current){e=Oi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Sf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Sf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,t),r=Qn(r),i=i(r),e.flags|=1,gn(n,e,i,t),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),Qd(n,e,i,r,t);case 15:return Xv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Sl(n,e),e.tag=1,Rn(i)?(n=!0,Fl(e)):n=!1,Ps(e,t),Gv(e,i,r),Ef(e,i,r,t),Af(null,e,i,!0,n,t);case 19:return $v(n,e,t);case 22:return Yv(n,e,t)}throw Error(de(156,e.tag))};function h0(n,e){return zg(n,e)}function Fx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,e,t,i){return new Fx(n,e,t,i)}function zh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ox(n){if(typeof n=="function")return zh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===rh)return 11;if(n===sh)return 14}return 2}function ur(n,e){var t=n.alternate;return t===null?(t=$n(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function wl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")zh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ps:return Ir(t.children,r,s,e);case ih:o=8,r|=8;break;case Yc:return n=$n(12,t,e,r|2),n.elementType=Yc,n.lanes=s,n;case jc:return n=$n(13,t,e,r),n.elementType=jc,n.lanes=s,n;case Kc:return n=$n(19,t,e,r),n.elementType=Kc,n.lanes=s,n;case Mg:return pu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case xg:o=10;break e;case Sg:o=9;break e;case rh:o=11;break e;case sh:o=14;break e;case Ki:o=16,i=null;break e}throw Error(de(130,n==null?n:typeof n,""))}return e=$n(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ir(n,e,t,i){return n=$n(7,n,i,e),n.lanes=t,n}function pu(n,e,t,i){return n=$n(22,n,i,e),n.elementType=Mg,n.lanes=t,n.stateNode={isHidden:!1},n}function nc(n,e,t){return n=$n(6,n,null,e),n.lanes=t,n}function ic(n,e,t){return e=$n(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function kx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bh(n,e,t,i,r,s,o,a,l){return n=new kx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),n}function zx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function d0(n){if(!n)return pr;n=n._reactInternals;e:{if(Xr(n)!==n||n.tag!==1)throw Error(de(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(n.tag===1){var t=n.type;if(Rn(t))return dv(n,t,e)}return e}function p0(n,e,t,i,r,s,o,a,l){return n=Bh(t,i,!0,n,r,s,o,a,l),n.context=d0(null),t=n.current,i=vn(),r=lr(t),s=Ni(i,r),s.callback=e??null,or(t,s,r),n.current.lanes=r,aa(n,r,i),bn(n,i),n}function mu(n,e,t,i){var r=e.current,s=vn(),o=lr(r);return t=d0(t),e.context===null?e.context=t:e.pendingContext=t,e=Ni(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=or(r,e,o),n!==null&&(fi(n,r,o,s),_l(n,r,o)),o}function ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Hh(n,e){cp(n,e),(n=n.alternate)&&cp(n,e)}function Bx(){return null}var m0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gh(n){this._internalRoot=n}gu.prototype.render=Gh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(de(409));mu(n,e,null,null)};gu.prototype.unmount=Gh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Gr(function(){mu(null,n,null,null)}),e[Ui]=null}};function gu(n){this._internalRoot=n}gu.prototype.unstable_scheduleHydration=function(n){if(n){var e=Yg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<$i.length&&e!==0&&e<$i[t].priority;t++);$i.splice(t,0,n),t===0&&Kg(n)}};function Vh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fp(){}function Hx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ql(o);s.call(u)}}var o=p0(e,i,n,0,null,!1,!1,"",fp);return n._reactRootContainer=o,n[Ui]=o.current,qo(n.nodeType===8?n.parentNode:n),Gr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ql(l);a.call(u)}}var l=Bh(n,0,!1,null,null,!1,!1,"",fp);return n._reactRootContainer=l,n[Ui]=l.current,qo(n.nodeType===8?n.parentNode:n),Gr(function(){mu(e,l,t,i)}),l}function _u(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ql(o);a.call(l)}}mu(e,o,n,r)}else o=Hx(t,e,n,r,i);return ql(o)}Wg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ao(e.pendingLanes);t!==0&&(lh(e,t|1),bn(e,zt()),!(ut&6)&&(Gs=zt()+500,vr()))}break;case 13:Gr(function(){var i=Fi(n,1);if(i!==null){var r=vn();fi(i,n,1,r)}}),Hh(n,1)}};uh=function(n){if(n.tag===13){var e=Fi(n,134217728);if(e!==null){var t=vn();fi(e,n,134217728,t)}Hh(n,134217728)}};Xg=function(n){if(n.tag===13){var e=lr(n),t=Fi(n,e);if(t!==null){var i=vn();fi(t,n,e,i)}Hh(n,e)}};Yg=function(){return pt};jg=function(n,e){var t=pt;try{return pt=n,e()}finally{pt=t}};sf=function(n,e,t){switch(e){case"input":if(Zc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=lu(i);if(!r)throw Error(de(90));wg(i),Zc(i,r)}}}break;case"textarea":Ag(n,t);break;case"select":e=t.value,e!=null&&Cs(n,!!t.multiple,e,!1)}};Ng=Fh;Ig=Gr;var Gx={usingClientEntryPoint:!1,Events:[ua,_s,lu,Pg,Dg,Fh]},fo={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vx={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Og(n),n===null?null:n.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{ru=Fa.inject(Vx),yi=Fa}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gx;Bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(de(200));return zx(n,e,null,t)};Bn.createRoot=function(n,e){if(!Vh(n))throw Error(de(299));var t=!1,i="",r=m0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bh(n,1,!1,null,null,t,!1,i,r),n[Ui]=e.current,qo(n.nodeType===8?n.parentNode:n),new Gh(e)};Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(de(188)):(n=Object.keys(n).join(","),Error(de(268,n)));return n=Og(e),n=n===null?null:n.stateNode,n};Bn.flushSync=function(n){return Gr(n)};Bn.hydrate=function(n,e,t){if(!vu(e))throw Error(de(200));return _u(null,n,e,!0,t)};Bn.hydrateRoot=function(n,e,t){if(!Vh(n))throw Error(de(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=m0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=p0(e,null,n,1,t??null,r,!1,s,o),n[Ui]=e.current,qo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new gu(e)};Bn.render=function(n,e,t){if(!vu(e))throw Error(de(200));return _u(null,n,e,!1,t)};Bn.unmountComponentAtNode=function(n){if(!vu(n))throw Error(de(40));return n._reactRootContainer?(Gr(function(){_u(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1};Bn.unstable_batchedUpdates=Fh;Bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!vu(t))throw Error(de(200));if(n==null||n._reactInternals===void 0)throw Error(de(38));return _u(n,e,t,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function g0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g0)}catch(n){console.error(n)}}g0(),gg.exports=Bn;var Wx=gg.exports,hp=Wx;Wc.createRoot=hp.createRoot,Wc.hydrateRoot=hp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="160",Xx=0,dp=1,Yx=2,v0=1,jx=2,Ci=3,ki=0,_n=1,_i=2,cr=0,Ns=1,pp=2,mp=3,gp=4,Kx=5,Cr=100,qx=101,$x=102,vp=103,_p=104,Zx=200,Qx=201,Jx=202,eS=203,kf=204,zf=205,tS=206,nS=207,iS=208,rS=209,sS=210,oS=211,aS=212,lS=213,uS=214,cS=0,fS=1,hS=2,$l=3,dS=4,pS=5,mS=6,gS=7,Xh=0,vS=1,_S=2,fr=0,yS=1,xS=2,SS=3,_0=4,MS=5,ES=6,y0=300,Vs=301,Ws=302,Bf=303,Hf=304,yu=306,Gf=1e3,Fn=1001,Vf=1002,on=1003,yp=1004,rc=1005,Kn=1006,wS=1007,ra=1008,hr=1009,TS=1010,AS=1011,Yh=1012,x0=1013,er=1014,tr=1015,sa=1016,S0=1017,M0=1018,Ur=1020,CS=1021,ui=1023,RS=1024,bS=1025,Fr=1026,Xs=1027,LS=1028,E0=1029,PS=1030,w0=1031,T0=1033,sc=33776,oc=33777,ac=33778,lc=33779,xp=35840,Sp=35841,Mp=35842,Ep=35843,A0=36196,wp=37492,Tp=37496,Ap=37808,Cp=37809,Rp=37810,bp=37811,Lp=37812,Pp=37813,Dp=37814,Np=37815,Ip=37816,Up=37817,Fp=37818,Op=37819,kp=37820,zp=37821,uc=36492,Bp=36494,Hp=36495,DS=36283,Gp=36284,Vp=36285,Wp=36286,C0=3e3,Or=3001,NS=3200,IS=3201,R0=0,US=1,qn="",Qt="srgb",zi="srgb-linear",jh="display-p3",xu="display-p3-linear",Zl="linear",Ct="srgb",Ql="rec709",Jl="p3",$r=7680,Xp=519,FS=512,OS=513,kS=514,b0=515,zS=516,BS=517,HS=518,GS=519,Yp=35044,jp="300 es",Wf=1035,Di=2e3,eu=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=Math.PI/180,Xf=180/Math.PI;function fa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function VS(n,e){return(n%e+e)%e}function fc(n,e,t){return(1-t)*n+t*e}function Kp(n){return(n&n-1)===0&&n!==0}function Yf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ho(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,r,s,o,a,l,u){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],c=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],h=r[6],v=r[1],_=r[4],S=r[7],w=r[2],A=r[5],T=r[8];return s[0]=o*y+a*v+l*w,s[3]=o*m+a*_+l*A,s[6]=o*h+a*S+l*T,s[1]=u*y+f*v+c*w,s[4]=u*m+f*_+c*A,s[7]=u*h+f*S+c*T,s[2]=d*y+p*v+g*w,s[5]=d*m+p*_+g*A,s[8]=d*h+p*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=f*o-a*u,d=a*l-f*s,p=u*s-o*l,g=t*c+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=c*y,e[1]=(r*u-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(f*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-u*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hc.makeScale(e,t)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new st;function L0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function tu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function WS(){const n=tu("canvas");return n.style.display="block",n}const qp={};function ko(n){n in qp||(qp[n]=!0,console.warn(n))}const $p=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[zi]:{transfer:Zl,primaries:Ql,toReference:n=>n,fromReference:n=>n},[Qt]:{transfer:Ct,primaries:Ql,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[xu]:{transfer:Zl,primaries:Jl,toReference:n=>n.applyMatrix3(Zp),fromReference:n=>n.applyMatrix3($p)},[jh]:{transfer:Ct,primaries:Jl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zp),fromReference:n=>n.applyMatrix3($p).convertLinearToSRGB()}},XS=new Set([zi,xu]),_t={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!XS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Oa[e].toReference,r=Oa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Oa[n].primaries},getTransfer:function(n){return n===qn?Zl:Oa[n].transfer}};function Is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zr;class P0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=tu("canvas")),Zr.width=e.width,Zr.height=e.height;const i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Is(t[i]/255)*255):t[i]=Is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YS=0;class D0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=fa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pc(r[o].image)):s.push(pc(r[o]))}else s=pc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?P0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jS=0;class Ln extends Zs{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,i=Fn,r=Fn,s=Kn,o=ra,a=ui,l=hr,u=Ln.DEFAULT_ANISOTROPY,f=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=fa(),this.name="",this.source=new D0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Or?Qt:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gf:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gf:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?Or:C0}set encoding(e){ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Or?Qt:qn}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=y0;Ln.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],f=l[4],c=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(f-d)<.01&&Math.abs(c-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(c+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,S=(p+1)/2,w=(h+1)/2,A=(f+d)/4,T=(c+y)/4,F=(g+m)/4;return _>S&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=F/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=F/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(c-y)*(c-y)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(c-y)/v,this.z=(d-f)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KS extends Zs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ko("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Or?Qt:qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new D0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends KS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class N0 extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qS extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ha{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],c=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(c!==y||l!==d||u!==p||f!==g){let m=1-a;const h=l*d+u*p+f*g+c*y,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const w=Math.sqrt(_),A=Math.atan2(w,h*v);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const S=a*v;if(l=l*m+d*S,u=u*m+p*S,f=f*m+g*S,c=c*m+y*S,m===1-a){const w=1/Math.sqrt(l*l+u*u+f*f+c*c);l*=w,u*=w,f*=w,c*=w}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],c=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+f*c+l*p-u*d,e[t+1]=l*g+f*d+u*c-a*p,e[t+2]=u*g+f*p+a*d-l*c,e[t+3]=f*g-a*c-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),c=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*f*c+u*p*g,this._y=u*p*c-d*f*g,this._z=u*f*g+d*p*c,this._w=u*f*c-d*p*g;break;case"YXZ":this._x=d*f*c+u*p*g,this._y=u*p*c-d*f*g,this._z=u*f*g-d*p*c,this._w=u*f*c+d*p*g;break;case"ZXY":this._x=d*f*c-u*p*g,this._y=u*p*c+d*f*g,this._z=u*f*g+d*p*c,this._w=u*f*c-d*p*g;break;case"ZYX":this._x=d*f*c-u*p*g,this._y=u*p*c+d*f*g,this._z=u*f*g-d*p*c,this._w=u*f*c+d*p*g;break;case"YZX":this._x=d*f*c+u*p*g,this._y=u*p*c+d*f*g,this._z=u*f*g-d*p*c,this._w=u*f*c-d*p*g;break;case"XZY":this._x=d*f*c-u*p*g,this._y=u*p*c-d*f*g,this._z=u*f*g+d*p*c,this._w=u*f*c+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],f=t[6],c=t[10],d=i+a+c;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>c){const p=2*Math.sqrt(1+i-a-c);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>c){const p=2*Math.sqrt(1+a-i-c);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+c-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),c=Math.sin((1-t)*f)/u,d=Math.sin(t*f)/u;return this._w=o*c+this._w*d,this._x=i*c+this._x*d,this._y=r*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*t-s*r),c=2*(s*i-o*t);return this.x=t+l*u+o*c-a*f,this.y=i+l*f+a*u-s*c,this.z=r+l*c+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new B,Qp=new ha;class Yr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),za.subVectors(this.max,po),Qr.subVectors(e.a,po),Jr.subVectors(e.b,po),es.subVectors(e.c,po),Vi.subVectors(Jr,Qr),Wi.subVectors(es,Jr),_r.subVectors(Qr,es);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-_r.z,_r.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,_r.z,0,-_r.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-_r.y,_r.x,0];return!gc(t,Qr,Jr,es,za)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,Qr,Jr,es,za))?!1:(Ba.crossVectors(Vi,Wi),t=[Ba.x,Ba.y,Ba.z],gc(t,Qr,Jr,es,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new B,new B,new B,new B,new B,new B,new B,new B],ni=new B,ka=new Yr,Qr=new B,Jr=new B,es=new B,Vi=new B,Wi=new B,_r=new B,po=new B,za=new B,Ba=new B,yr=new B;function gc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){yr.fromArray(n,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),u=t.dot(yr),f=i.dot(yr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const $S=new Yr,mo=new B,vc=new B;class Qs{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$S.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const t=mo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(vc)),this.expandByPoint(mo.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new B,_c=new B,Ha=new B,Xi=new B,yc=new B,Ga=new B,xc=new B;class I0{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_c.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(_c);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ha),a=Xi.dot(this.direction),l=-Xi.dot(Ha),u=Xi.lengthSq(),f=Math.abs(1-o*o);let c,d,p,g;if(f>0)if(c=o*l-a,d=o*a-l,g=s*f,c>=0)if(d>=-g)if(d<=g){const y=1/f;c*=y,d*=y,p=c*(c+o*d+2*a)+d*(o*c+d+2*l)+u}else d=s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;else d=-s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;else d<=-g?(c=Math.max(0,-(-o*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+u):d<=g?(c=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(c=Math.max(0,-(o*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+u);else d=o>0?-s:s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(_c).addScaledVector(Ha,d),p}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,r,s){yc.subVectors(t,e),Ga.subVectors(i,e),xc.crossVectors(yc,Ga);let o=this.direction.dot(xc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(Ga.crossVectors(Xi,Ga));if(l<0)return null;const u=a*this.direction.dot(yc.cross(Xi));if(u<0||l+u>o)return null;const f=-a*Xi.dot(xc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,i,r,s,o,a,l,u,f,c,d,p,g,y,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,f,c,d,p,g,y,m)}set(e,t,i,r,s,o,a,l,u,f,c,d,p,g,y,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=f,h[10]=c,h[14]=d,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*c,g=a*f,y=a*c;t[0]=l*f,t[4]=-l*c,t[8]=u,t[1]=p+g*u,t[5]=d-y*u,t[9]=-a*l,t[2]=y-d*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*c,g=u*f,y=u*c;t[0]=d+y*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*c,t[5]=o*f,t[9]=-a,t[2]=p*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*c,g=u*f,y=u*c;t[0]=d-y*a,t[4]=-o*c,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*f,t[9]=y-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*c,g=a*f,y=a*c;t[0]=l*f,t[4]=g*u-p,t[8]=d*u+y,t[1]=l*c,t[5]=y*u+d,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,y=a*u;t[0]=l*f,t[4]=y-d*c,t[8]=g*c+p,t[1]=c,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=p*c+g,t[10]=d-y*c}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,y=a*u;t[0]=l*f,t[4]=-c,t[8]=u*f,t[1]=d*c+y,t[5]=o*f,t[9]=p*c-g,t[2]=g*c-p,t[6]=a*f,t[10]=y*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZS,e,QS)}lookAt(e,t,i){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Yi.crossVectors(i,Dn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Yi.crossVectors(i,Dn)),Yi.normalize(),Va.crossVectors(Dn,Yi),r[0]=Yi.x,r[4]=Va.x,r[8]=Dn.x,r[1]=Yi.y,r[5]=Va.y,r[9]=Dn.y,r[2]=Yi.z,r[6]=Va.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],c=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],h=i[14],v=i[3],_=i[7],S=i[11],w=i[15],A=r[0],T=r[4],F=r[8],M=r[12],C=r[1],H=r[5],q=r[9],ie=r[13],U=r[2],G=r[6],Q=r[10],ne=r[14],O=r[3],V=r[7],X=r[11],ee=r[15];return s[0]=o*A+a*C+l*U+u*O,s[4]=o*T+a*H+l*G+u*V,s[8]=o*F+a*q+l*Q+u*X,s[12]=o*M+a*ie+l*ne+u*ee,s[1]=f*A+c*C+d*U+p*O,s[5]=f*T+c*H+d*G+p*V,s[9]=f*F+c*q+d*Q+p*X,s[13]=f*M+c*ie+d*ne+p*ee,s[2]=g*A+y*C+m*U+h*O,s[6]=g*T+y*H+m*G+h*V,s[10]=g*F+y*q+m*Q+h*X,s[14]=g*M+y*ie+m*ne+h*ee,s[3]=v*A+_*C+S*U+w*O,s[7]=v*T+_*H+S*G+w*V,s[11]=v*F+_*q+S*Q+w*X,s[15]=v*M+_*ie+S*ne+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],c=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+s*l*c-r*u*c-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*f-s*l*f)+m*(+t*u*c-t*a*p-s*o*c+i*o*p+s*a*f-i*u*f)+h*(-r*a*f-t*l*c+t*a*d+r*o*c-i*o*d+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],v=c*m*u-y*d*u+y*l*p-a*m*p-c*l*h+a*d*h,_=g*d*u-f*m*u-g*l*p+o*m*p+f*l*h-o*d*h,S=f*y*u-g*c*u+g*a*p-o*y*p-f*a*h+o*c*h,w=g*c*l-f*y*l-g*a*d+o*y*d+f*a*m-o*c*m,A=t*v+i*_+r*S+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(y*d*s-c*m*s-y*r*p+i*m*p+c*r*h-i*d*h)*T,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*h+i*l*h)*T,e[3]=(c*l*s-a*d*s-c*r*u+i*d*u+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(f*m*s-g*d*s+g*r*p-t*m*p-f*r*h+t*d*h)*T,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*h-t*l*h)*T,e[7]=(o*d*s-f*l*s+f*r*u-t*d*u-o*r*p+t*l*p)*T,e[8]=S*T,e[9]=(g*c*s-f*y*s-g*i*p+t*y*p+f*i*h-t*c*h)*T,e[10]=(o*y*s-g*a*s+g*i*u-t*y*u-o*i*h+t*a*h)*T,e[11]=(f*a*s-o*c*s-f*i*u+t*c*u+o*i*p-t*a*p)*T,e[12]=w*T,e[13]=(f*y*r-g*c*r+g*i*d-t*y*d-f*i*m+t*c*m)*T,e[14]=(g*a*r-o*y*r-g*i*l+t*y*l+o*i*m-t*a*m)*T,e[15]=(o*c*r-f*a*r+f*i*l-t*c*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,f=o+o,c=a+a,d=s*u,p=s*f,g=s*c,y=o*f,m=o*c,h=a*c,v=l*u,_=l*f,S=l*c,w=i.x,A=i.y,T=i.z;return r[0]=(1-(y+h))*w,r[1]=(p+S)*w,r[2]=(g-_)*w,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+h))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+_)*T,r[9]=(m-v)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const o=ts.set(r[4],r[5],r[6]).length(),a=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);const u=1/s,f=1/o,c=1/a;return ii.elements[0]*=u,ii.elements[1]*=u,ii.elements[2]*=u,ii.elements[4]*=f,ii.elements[5]*=f,ii.elements[6]*=f,ii.elements[8]*=c,ii.elements[9]*=c,ii.elements[10]*=c,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Di){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Di)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===eu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Di){const l=this.elements,u=1/(t-e),f=1/(i-r),c=1/(o-s),d=(t+e)*u,p=(i+r)*f;let g,y;if(a===Di)g=(o+s)*c,y=-2*c;else if(a===eu)g=s*c,y=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new B,ii=new Dt,ZS=new B(0,0,0),QS=new B(1,1,1),Yi=new B,Va=new B,Dn=new B,Jp=new Dt,em=new ha;class Su{constructor(e=0,t=0,i=0,r=Su.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],c=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Su.DEFAULT_ORDER="XYZ";class U0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JS=0;const tm=new B,ns=new ha,wi=new Dt,Wa=new B,go=new B,eM=new B,tM=new ha,nm=new B(1,0,0),im=new B(0,1,0),rm=new B(0,0,1),nM={type:"added"},iM={type:"removed"};class Xt extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new B,t=new Su,i=new ha,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new st}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new U0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,t){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(go,Wa,this.up):wi.lookAt(Wa,go,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(wi),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,eM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,tM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),c=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new B(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new B,Ti=new B,Sc=new B,Ai=new B,is=new B,rs=new B,sm=new B,Mc=new B,Ec=new B,wc=new B;let Xa=!1;class li{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),Ti.subVectors(i,t),Sc.subVectors(e,t);const o=ri.dot(ri),a=ri.dot(Ti),l=ri.dot(Sc),u=Ti.dot(Ti),f=Ti.dot(Sc),c=o*u-a*a;if(c===0)return s.set(0,0,0),null;const d=1/c,p=(u*l-a*f)*d,g=(o*f-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,i,r,s,o,a,l){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),Ti.subVectors(e,t),ri.cross(Ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ri.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),li.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;is.subVectors(r,i),rs.subVectors(s,i),Mc.subVectors(e,i);const l=is.dot(Mc),u=rs.dot(Mc);if(l<=0&&u<=0)return t.copy(i);Ec.subVectors(e,r);const f=is.dot(Ec),c=rs.dot(Ec);if(f>=0&&c<=f)return t.copy(r);const d=l*c-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(is,o);wc.subVectors(e,s);const p=is.dot(wc),g=rs.dot(wc);if(g>=0&&p<=g)return t.copy(s);const y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(rs,a);const m=f*g-p*c;if(m<=0&&c-f>=0&&p-g>=0)return sm.subVectors(s,r),a=(c-f)/(c-f+(p-g)),t.copy(r).addScaledVector(sm,a);const h=1/(m+y+d);return o=y*h,a=d*h,t.copy(i).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ee{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=VS(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Tc(o,s,e+1/3),this.g=Tc(o,s,e),this.b=Tc(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=dc(e.r),this.g=dc(e.g),this.b=dc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return _t.fromWorkingColorSpace(hn.copy(this),e),Math.round(En(hn.r*255,0,255))*65536+Math.round(En(hn.g*255,0,255))*256+Math.round(En(hn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(hn.copy(this),t);const i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=f<=.5?c/(o+a):c/(2-o-a),o){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Qt){_t.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,i=hn.g,r=hn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Ya);const i=fc(ji.h,Ya.h,t),r=fc(ji.s,Ya.s,t),s=fc(ji.l,Ya.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Ee;Ee.NAMES=F0;let rM=0;class Js extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=Ns,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=zf,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=$l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kf&&(i.blendSrc=this.blendSrc),this.blendDst!==zf&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$l&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kh extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new B,ja=new ct;class Et{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ho(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}}class O0 extends Et{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class k0 extends Et{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Si extends Et{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sM=0;const Wn=new Dt,Ac=new Xt,ss=new B,Nn=new Yr,vo=new Yr,$t=new B;class Pn extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L0(e)?k0:O0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new st().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Nn.min,vo.min),Nn.expandByPoint($t),$t.addVectors(Nn.max,vo.max),Nn.expandByPoint($t)):(Nn.expandByPoint(vo.min),Nn.expandByPoint(vo.max))}Nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)$t.fromBufferAttribute(a,u),l&&(ss.fromBufferAttribute(e,u),$t.add(ss)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let C=0;C<a;C++)u[C]=new B,f[C]=new B;const c=new B,d=new B,p=new B,g=new ct,y=new ct,m=new ct,h=new B,v=new B;function _(C,H,q){c.fromArray(r,C*3),d.fromArray(r,H*3),p.fromArray(r,q*3),g.fromArray(o,C*2),y.fromArray(o,H*2),m.fromArray(o,q*2),d.sub(c),p.sub(c),y.sub(g),m.sub(g);const ie=1/(y.x*m.y-m.x*y.y);isFinite(ie)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(ie),v.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(ie),u[C].add(h),u[H].add(h),u[q].add(h),f[C].add(v),f[H].add(v),f[q].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let C=0,H=S.length;C<H;++C){const q=S[C],ie=q.start,U=q.count;for(let G=ie,Q=ie+U;G<Q;G+=3)_(i[G+0],i[G+1],i[G+2])}const w=new B,A=new B,T=new B,F=new B;function M(C){T.fromArray(s,C*3),F.copy(T);const H=u[C];w.copy(H),w.sub(T.multiplyScalar(T.dot(H))).normalize(),A.crossVectors(F,H);const ie=A.dot(f[C])<0?-1:1;l[C*4]=w.x,l[C*4+1]=w.y,l[C*4+2]=w.z,l[C*4+3]=ie}for(let C=0,H=S.length;C<H;++C){const q=S[C],ie=q.start,U=q.count;for(let G=ie,Q=ie+U;G<Q;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,f=new B,c=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,c=a.normalized,d=new u.constructor(l.length*f);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let h=0;h<f;h++)d[g++]=u[p++]}return new Et(d,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,c=u.length;f<c;f++){const d=u[f],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let c=0,d=u.length;c<d;c++){const p=u[c];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],c=s[u];for(let d=0,p=c.length;d<p;d++)f.push(c[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new Dt,xr=new I0,Ka=new Qs,am=new B,os=new B,as=new B,ls=new B,Cc=new B,qa=new B,$a=new ct,Za=new ct,Qa=new ct,lm=new B,um=new B,cm=new B,Ja=new B,el=new B;class An extends Xt{constructor(e=new Pn,t=new Kh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],c=s[l];f!==0&&(Cc.fromBufferAttribute(c,e),o?qa.addScaledVector(Cc,f):qa.addScaledVector(Cc.sub(t),f))}t.add(qa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Ka.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ka,am)===null||xr.origin.distanceToSquared(am)>(e.far-e.near)**2))&&(om.copy(s).invert(),xr.copy(e.ray).applyMatrix4(om),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,c=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=_;S<w;S+=3){const A=a.getX(S),T=a.getX(S+1),F=a.getX(S+2);r=tl(this,h,e,i,u,f,c,A,T,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=tl(this,o,e,i,u,f,c,v,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=_;S<w;S+=3){const A=S,T=S+1,F=S+2;r=tl(this,h,e,i,u,f,c,A,T,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=m,_=m+1,S=m+2;r=tl(this,o,e,i,u,f,c,v,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function oM(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;el.copy(a),el.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(el);return u<t.near||u>t.far?null:{distance:u,point:el.clone(),object:n}}function tl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,os),n.getVertexPosition(l,as),n.getVertexPosition(u,ls);const f=oM(n,e,t,i,os,as,ls,Ja);if(f){r&&($a.fromBufferAttribute(r,a),Za.fromBufferAttribute(r,l),Qa.fromBufferAttribute(r,u),f.uv=li.getInterpolation(Ja,os,as,ls,$a,Za,Qa,new ct)),s&&($a.fromBufferAttribute(s,a),Za.fromBufferAttribute(s,l),Qa.fromBufferAttribute(s,u),f.uv1=li.getInterpolation(Ja,os,as,ls,$a,Za,Qa,new ct),f.uv2=f.uv1),o&&(lm.fromBufferAttribute(o,a),um.fromBufferAttribute(o,l),cm.fromBufferAttribute(o,u),f.normal=li.getInterpolation(Ja,os,as,ls,lm,um,cm,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const c={a,b:l,c:u,normal:new B,materialIndex:0};li.getNormal(os,as,ls,c.normal),f.face=c}return f}class eo extends Pn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],c=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Si(u,3)),this.setAttribute("normal",new Si(f,3)),this.setAttribute("uv",new Si(c,2));function g(y,m,h,v,_,S,w,A,T,F,M){const C=S/T,H=w/F,q=S/2,ie=w/2,U=A/2,G=T+1,Q=F+1;let ne=0,O=0;const V=new B;for(let X=0;X<Q;X++){const ee=X*H-ie;for(let se=0;se<G;se++){const Z=se*C-q;V[y]=Z*v,V[m]=ee*_,V[h]=U,u.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[h]=A>0?1:-1,f.push(V.x,V.y,V.z),c.push(se/T),c.push(1-X/F),ne+=1}}for(let X=0;X<F;X++)for(let ee=0;ee<T;ee++){const se=d+ee+G*X,Z=d+ee+G*(X+1),re=d+(ee+1)+G*(X+1),ve=d+(ee+1)+G*X;l.push(se,Z,ve),l.push(Z,re,ve),O+=6}a.addGroup(p,O,M),p+=O,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mn(n){const e={};for(let t=0;t<n.length;t++){const i=Ys(n[t]);for(const r in i)e[r]=i[r]}return e}function aM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function z0(n){return n.getRenderTarget()===null?n.outputColorSpace:_t.workingColorSpace}const lM={clone:Ys,merge:mn};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let B0=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class wn extends B0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xf*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,cs=1;class fM extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(us,cs,e,t);r.layers=this.layers,this.add(r);const s=new wn(us,cs,e,t);s.layers=this.layers,this.add(s);const o=new wn(us,cs,e,t);o.layers=this.layers,this.add(o);const a=new wn(us,cs,e,t);a.layers=this.layers,this.add(a);const l=new wn(us,cs,e,t);l.layers=this.layers,this.add(l);const u=new wn(us,cs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(c,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class H0 extends Ln{constructor(e,t,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hM extends Vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ko("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Or?Qt:qn),this.texture=new H0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new eo(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:cr});s.uniforms.tEquirect.value=t;const o=new An(r,s),a=t.minFilter;return t.minFilter===ra&&(t.minFilter=Kn),new fM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Rc=new B,dM=new B,pM=new st;class Tr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Rc.subVectors(i,t).cross(dM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pM.getNormalMatrix(e),r=this.coplanarPoint(Rc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Qs,nl=new B;class qh{constructor(e=new Tr,t=new Tr,i=new Tr,r=new Tr,s=new Tr,o=new Tr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],c=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],h=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-h).normalize(),i[1].setComponents(l+s,d+u,m+p,S+h).normalize(),i[2].setComponents(l+o,d+f,m+g,S+v).normalize(),i[3].setComponents(l-o,d-f,m-g,S-v).normalize(),i[4].setComponents(l-a,d-c,m-y,S-_).normalize(),t===Di)i[5].setComponents(l+a,d+c,m+y,S+_).normalize();else if(t===eu)i[5].setComponents(a,c,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,f){const c=u.array,d=u.usage,p=c.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,c,d),u.onUploadCallback();let y;if(c instanceof Float32Array)y=n.FLOAT;else if(c instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)y=n.SHORT;else if(c instanceof Uint32Array)y=n.UNSIGNED_INT;else if(c instanceof Int32Array)y=n.INT;else if(c instanceof Int8Array)y=n.BYTE;else if(c instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:y,bytesPerElement:c.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,f,c){const d=f.array,p=f._updateRange,g=f.updateRanges;if(n.bindBuffer(c,u),p.count===-1&&g.length===0&&n.bufferSubData(c,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){const h=g[y];t?n.bufferSubData(c,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(c,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}f.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(c,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(c,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(n.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);if(c===void 0)i.set(u,r(u,f));else if(c.version<u.version){if(c.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(c.buffer,u,f),c.version=u.version}}return{get:o,remove:a,update:l}}class $h extends Pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,c=e/a,d=t/l,p=[],g=[],y=[],m=[];for(let h=0;h<f;h++){const v=h*d-o;for(let _=0;_<u;_++){const S=_*c-s;g.push(S,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const _=v+u*h,S=v+u*(h+1),w=v+1+u*(h+1),A=v+1+u*h;p.push(_,S,A),p.push(S,w,A)}this.setIndex(p),this.setAttribute("position",new Si(g,3)),this.setAttribute("normal",new Si(y,3)),this.setAttribute("uv",new Si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.width,e.height,e.widthSegments,e.heightSegments)}}var gM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
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
#endif`,_M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,SM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MM=`#ifdef USE_AOMAP
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
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wM=`#ifdef USE_BATCHING
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
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bM=`#ifdef USE_IRIDESCENCE
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
#endif`,LM=`#ifdef USE_BUMPMAP
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zM=`#define PI 3.141592653589793
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
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HM=`vec3 transformedNormal = objectNormal;
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
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`
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
}`,KM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
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
}`,rE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
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
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
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
#endif`,mE=`struct PhysicalMaterial {
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
}`,gE=`
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AE=`#if defined( USE_POINTS_UV )
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
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
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
#endif`,PE=`#ifdef USE_MORPHTARGETS
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
#endif`,DE=`#ifdef USE_MORPHTARGETS
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
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
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
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e1=`float getShadowMask() {
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
}`,t1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
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
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
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
}`,M1=`#if DEPTH_PACKING == 3200
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
}`,E1=`#define DISTANCE
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
}`,w1=`#define DISTANCE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`uniform float scale;
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
}`,R1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,L1=`uniform vec3 diffuse;
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
}`,P1=`#define LAMBERT
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
}`,D1=`#define LAMBERT
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
}`,N1=`#define MATCAP
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
}`,I1=`#define MATCAP
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
}`,U1=`#define NORMAL
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
}`,F1=`#define NORMAL
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
}`,O1=`#define PHONG
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
}`,k1=`#define PHONG
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
}`,z1=`#define STANDARD
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
}`,B1=`#define STANDARD
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
}`,H1=`#define TOON
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
}`,G1=`#define TOON
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
}`,V1=`uniform float size;
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,Y1=`uniform vec3 color;
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
}`,j1=`uniform float rotation;
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
}`,K1=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:gM,alphahash_pars_fragment:vM,alphamap_fragment:_M,alphamap_pars_fragment:yM,alphatest_fragment:xM,alphatest_pars_fragment:SM,aomap_fragment:MM,aomap_pars_fragment:EM,batching_pars_vertex:wM,batching_vertex:TM,begin_vertex:AM,beginnormal_vertex:CM,bsdfs:RM,iridescence_fragment:bM,bumpmap_pars_fragment:LM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:DM,clipping_planes_pars_vertex:NM,clipping_planes_vertex:IM,color_fragment:UM,color_pars_fragment:FM,color_pars_vertex:OM,color_vertex:kM,common:zM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:HM,displacementmap_pars_vertex:GM,displacementmap_vertex:VM,emissivemap_fragment:WM,emissivemap_pars_fragment:XM,colorspace_fragment:YM,colorspace_pars_fragment:jM,envmap_fragment:KM,envmap_common_pars_fragment:qM,envmap_pars_fragment:$M,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:uE,envmap_vertex:QM,fog_vertex:JM,fog_pars_vertex:eE,fog_fragment:tE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:aE,lights_pars_begin:lE,lights_toon_fragment:cE,lights_toon_pars_fragment:fE,lights_phong_fragment:hE,lights_phong_pars_fragment:dE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:vE,lights_fragment_end:_E,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:xE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:wE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:RE,morphcolor_vertex:bE,morphnormal_vertex:LE,morphtarget_pars_vertex:PE,morphtarget_vertex:DE,normal_fragment_begin:NE,normal_fragment_maps:IE,normal_pars_fragment:UE,normal_pars_vertex:FE,normal_vertex:OE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:BE,clearcoat_pars_fragment:HE,iridescence_pars_fragment:GE,opaque_fragment:VE,packing:WE,premultiplied_alpha_fragment:XE,project_vertex:YE,dithering_fragment:jE,dithering_pars_fragment:KE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:ZE,shadowmap_pars_vertex:QE,shadowmap_vertex:JE,shadowmask_pars_fragment:e1,skinbase_vertex:t1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:r1,specularmap_fragment:s1,specularmap_pars_fragment:o1,tonemapping_fragment:a1,tonemapping_pars_fragment:l1,transmission_fragment:u1,transmission_pars_fragment:c1,uv_pars_fragment:f1,uv_pars_vertex:h1,uv_vertex:d1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:v1,backgroundCube_frag:_1,cube_vert:y1,cube_frag:x1,depth_vert:S1,depth_frag:M1,distanceRGBA_vert:E1,distanceRGBA_frag:w1,equirect_vert:T1,equirect_frag:A1,linedashed_vert:C1,linedashed_frag:R1,meshbasic_vert:b1,meshbasic_frag:L1,meshlambert_vert:P1,meshlambert_frag:D1,meshmatcap_vert:N1,meshmatcap_frag:I1,meshnormal_vert:U1,meshnormal_frag:F1,meshphong_vert:O1,meshphong_frag:k1,meshphysical_vert:z1,meshphysical_frag:B1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:V1,points_frag:W1,shadow_vert:X1,shadow_frag:Y1,sprite_vert:j1,sprite_frag:K1},_e={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},gi={basic:{uniforms:mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:mn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:mn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:mn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:mn([_e.points,_e.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:mn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:mn([_e.common,_e.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:mn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:mn([_e.sprite,_e.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:mn([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:mn([_e.lights,_e.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const il={r:0,b:0,g:0};function q1(n,e,t,i,r,s,o){const a=new Ee(0);let l=s===!0?0:1,u,f,c=null,d=0,p=null;function g(m,h){let v=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?y(a,l):_&&_.isColor&&(y(_,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===yu)?(f===void 0&&(f=new An(new eo(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Ys(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,f.material.toneMapped=_t.getTransfer(_.colorSpace)!==Ct,(c!==_||d!==_.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,c=_,d=_.version,p=n.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new An(new $h(2,2),new Bi({name:"BackgroundMaterial",uniforms:Ys(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=_t.getTransfer(_.colorSpace)!==Ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,c=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,h){m.getRGB(il,z0(n)),i.buffers.color.setClear(il.r,il.g,il.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:g}}function $1(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,f=!1;function c(U,G,Q,ne,O){let V=!1;if(o){const X=y(ne,Q,G);u!==X&&(u=X,p(u.object)),V=h(U,ne,Q,O),V&&v(U,ne,Q,O)}else{const X=G.wireframe===!0;(u.geometry!==ne.id||u.program!==Q.id||u.wireframe!==X)&&(u.geometry=ne.id,u.program=Q.id,u.wireframe=X,V=!0)}O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(V||f)&&(f=!1,F(U,G,Q,ne),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function y(U,G,Q){const ne=Q.wireframe===!0;let O=a[U.id];O===void 0&&(O={},a[U.id]=O);let V=O[G.id];V===void 0&&(V={},O[G.id]=V);let X=V[ne];return X===void 0&&(X=m(d()),V[ne]=X),X}function m(U){const G=[],Q=[],ne=[];for(let O=0;O<r;O++)G[O]=0,Q[O]=0,ne[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:ne,object:U,attributes:{},index:null}}function h(U,G,Q,ne){const O=u.attributes,V=G.attributes;let X=0;const ee=Q.getAttributes();for(const se in ee)if(ee[se].location>=0){const re=O[se];let ve=V[se];if(ve===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor)),re===void 0||re.attribute!==ve||ve&&re.data!==ve.data)return!0;X++}return u.attributesNum!==X||u.index!==ne}function v(U,G,Q,ne){const O={},V=G.attributes;let X=0;const ee=Q.getAttributes();for(const se in ee)if(ee[se].location>=0){let re=V[se];re===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));const ve={};ve.attribute=re,re&&re.data&&(ve.data=re.data),O[se]=ve,X++}u.attributes=O,u.attributesNum=X,u.index=ne}function _(){const U=u.newAttributes;for(let G=0,Q=U.length;G<Q;G++)U[G]=0}function S(U){w(U,0)}function w(U,G){const Q=u.newAttributes,ne=u.enabledAttributes,O=u.attributeDivisors;Q[U]=1,ne[U]===0&&(n.enableVertexAttribArray(U),ne[U]=1),O[U]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,G),O[U]=G)}function A(){const U=u.newAttributes,G=u.enabledAttributes;for(let Q=0,ne=G.length;Q<ne;Q++)G[Q]!==U[Q]&&(n.disableVertexAttribArray(Q),G[Q]=0)}function T(U,G,Q,ne,O,V,X){X===!0?n.vertexAttribIPointer(U,G,Q,O,V):n.vertexAttribPointer(U,G,Q,ne,O,V)}function F(U,G,Q,ne){if(i.isWebGL2===!1&&(U.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const O=ne.attributes,V=Q.getAttributes(),X=G.defaultAttributeValues;for(const ee in V){const se=V[ee];if(se.location>=0){let Z=O[ee];if(Z===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),Z!==void 0){const re=Z.normalized,ve=Z.itemSize,we=t.get(Z);if(we===void 0)continue;const Ae=we.buffer,Ve=we.type,Xe=we.bytesPerElement,Re=i.isWebGL2===!0&&(Ve===n.INT||Ve===n.UNSIGNED_INT||Z.gpuType===x0);if(Z.isInterleavedBufferAttribute){const at=Z.data,Y=at.stride,en=Z.offset;if(at.isInstancedInterleavedBuffer){for(let Fe=0;Fe<se.locationSize;Fe++)w(se.location+Fe,at.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Fe=0;Fe<se.locationSize;Fe++)S(se.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Fe=0;Fe<se.locationSize;Fe++)T(se.location+Fe,ve/se.locationSize,Ve,re,Y*Xe,(en+ve/se.locationSize*Fe)*Xe,Re)}else{if(Z.isInstancedBufferAttribute){for(let at=0;at<se.locationSize;at++)w(se.location+at,Z.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let at=0;at<se.locationSize;at++)S(se.location+at);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let at=0;at<se.locationSize;at++)T(se.location+at,ve/se.locationSize,Ve,re,ve*Xe,ve/se.locationSize*at*Xe,Re)}}else if(X!==void 0){const re=X[ee];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(se.location,re);break;case 3:n.vertexAttrib3fv(se.location,re);break;case 4:n.vertexAttrib4fv(se.location,re);break;default:n.vertexAttrib1fv(se.location,re)}}}}A()}function M(){q();for(const U in a){const G=a[U];for(const Q in G){const ne=G[Q];for(const O in ne)g(ne[O].object),delete ne[O];delete G[Q]}delete a[U]}}function C(U){if(a[U.id]===void 0)return;const G=a[U.id];for(const Q in G){const ne=G[Q];for(const O in ne)g(ne[O].object),delete ne[O];delete G[Q]}delete a[U.id]}function H(U){for(const G in a){const Q=a[G];if(Q[U.id]===void 0)continue;const ne=Q[U.id];for(const O in ne)g(ne[O].object),delete ne[O];delete Q[U.id]}}function q(){ie(),f=!0,u!==l&&(u=l,p(u.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:q,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:H,initAttributes:_,enableAttribute:S,disableUnusedAttributes:A}}function Z1(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,c){n.drawArrays(s,f,c),t.update(c,s,1)}function l(f,c,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,f,c,d),t.update(c,s,d)}function u(f,c,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(f[g],c[g]);else{p.multiDrawArraysWEBGL(s,f,0,c,0,d);let g=0;for(let y=0;y<d;y++)g+=c[y];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function Q1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,S=o||e.has("OES_texture_float"),w=_&&S,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:c,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:A}}function J1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Tr,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const p=c.length!==0||d||i!==0||r;return r=d,i=c.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){t=f(c,d,0)},this.setState=function(c,d,p){const g=c.clippingPlanes,y=c.clipIntersection,m=c.clipShadows,h=n.get(c);if(!r||g===null||g.length===0||s&&!m)s?f(null):u();else{const v=s?0:i,_=v*4;let S=h.clippingState||null;l.value=S,S=f(g,d,_,p);for(let w=0;w!==_;++w)S[w]=t[w];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(c,d,p,g){const y=c!==null?c.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const h=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,S=p;_!==y;++_,S+=4)o.copy(c[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function ew(n){let e=new WeakMap;function t(o,a){return a===Bf?o.mapping=Vs:a===Hf&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bf||a===Hf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new hM(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class V0 extends B0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,fm=[.125,.215,.35,.446,.526,.582],Rr=20,bc=new V0,hm=new Ee;let Lc=null,Pc=0,Dc=0;const Ar=(1+Math.sqrt(5))/2,fs=1/Ar,dm=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Ar,fs),new B(0,Ar,-fs),new B(fs,0,Ar),new B(-fs,0,Ar),new B(Ar,fs,0),new B(-Ar,fs,0)];class pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Lc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Pc,Dc),e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:sa,format:ui,colorSpace:zi,depthBuffer:!1},r=mm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tw(s)),this._blurMaterial=nw(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,i,r){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,d=f.toneMapping;f.getClearColor(hm),f.toneMapping=fr,f.autoClear=!1;const p=new Kh({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new An(new eo,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(hm),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const _=this._cubeSize;rl(r,v*_,h>2?_:0,_,_),f.setRenderTarget(r),y&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=c,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Vs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,bc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dm[(r-1)%dm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new An(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),y=s/g,m=isFinite(s)?1+Math.floor(f*y):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const h=[];let v=0;for(let T=0;T<Rr;++T){const F=T/y,M=Math.exp(-F*F/2);h.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const S=this._sizeLods[r],w=3*S*(r>_-Ts?r-_+Ts:0),A=4*(this._cubeSize-S);rl(t,w,A,3*S,2*S),l.setRenderTarget(t),l.render(c,bc)}}function tw(n){const e=[],t=[],i=[];let r=n;const s=n-Ts+1+fm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ts?l=fm[o-n+Ts-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,c=1+u,d=[f,f,c,f,c,c,f,f,c,c,f,c],p=6,g=6,y=3,m=2,h=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,F=A>2?0:-1,M=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];v.set(M,y*g*A),_.set(d,m*g*A);const C=[A,A,A,A,A,A];S.set(C,h*g*A)}const w=new Pn;w.setAttribute("position",new Et(v,y)),w.setAttribute("uv",new Et(_,m)),w.setAttribute("faceIndex",new Et(S,h)),e.push(w),r>Ts&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mm(n,e,t){const i=new Vr(n,e,t);return i.texture.mapping=yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function nw(n,e,t){const i=new Float32Array(Rr),r=new B(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function gm(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function vm(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Zh(){return`

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
	`}function iw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Bf||l===Hf,f=l===Vs||l===Ws;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=e.get(a);return t===null&&(t=new pm(n)),c=u?t.fromEquirectangular(a,c):t.fromCubemap(a,c),e.set(a,c),c.texture}else{if(e.has(a))return e.get(a).texture;{const c=a.image;if(u&&c&&c.height>0||f&&c&&r(c)){t===null&&(t=new pm(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sw(n,e,t,i){const r={},s=new WeakMap;function o(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=c.morphAttributes;for(const g in p){const y=p[g];for(let m=0,h=y.length;m<h;m++)e.update(y[m],n.ARRAY_BUFFER)}}function u(c){const d=[],p=c.index,g=c.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,S=v.length;_<S;_+=3){const w=v[_+0],A=v[_+1],T=v[_+2];d.push(w,A,A,T,T,w)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const w=_+0,A=_+1,T=_+2;d.push(w,A,A,T,T,w)}}else return;const m=new(L0(d)?k0:O0)(d,1);m.version=y;const h=s.get(c);h&&e.remove(h),s.set(c,m)}function f(c){const d=s.get(c);if(d){const p=c.index;p!==null&&d.version<p.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:f}}function ow(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function f(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function c(p,g,y){if(y===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*l,y),t.update(g,s,y)}function d(p,g,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<y;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,y);let h=0;for(let v=0;v<y;v++)h+=g[v];t.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=c,this.renderMultiDraw=d}function aw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lw(n,e){return n[0]-e[0]}function uw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function cw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Pt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,c){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=g!==void 0?g.length:0;let m=s.get(f);if(m===void 0||m.count!==y){let G=function(){ie.dispose(),s.delete(f),f.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const _=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),w===!0&&(M=3);let C=f.attributes.position.count*M,H=1;C>e.maxTextureSize&&(H=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const q=new Float32Array(C*H*4*y),ie=new N0(q,C,H,y);ie.type=tr,ie.needsUpdate=!0;const U=M*4;for(let Q=0;Q<y;Q++){const ne=A[Q],O=T[Q],V=F[Q],X=C*H*4*Q;for(let ee=0;ee<ne.count;ee++){const se=ee*U;_===!0&&(o.fromBufferAttribute(ne,ee),q[X+se+0]=o.x,q[X+se+1]=o.y,q[X+se+2]=o.z,q[X+se+3]=0),S===!0&&(o.fromBufferAttribute(O,ee),q[X+se+4]=o.x,q[X+se+5]=o.y,q[X+se+6]=o.z,q[X+se+7]=0),w===!0&&(o.fromBufferAttribute(V,ee),q[X+se+8]=o.x,q[X+se+9]=o.y,q[X+se+10]=o.z,q[X+se+11]=V.itemSize===4?o.w:1)}}m={count:y,texture:ie,size:new ct(C,H)},s.set(f,m),f.addEventListener("dispose",G)}let h=0;for(let _=0;_<d.length;_++)h+=d[_];const v=f.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",d),c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let y=i[f.id];if(y===void 0||y.length!==g){y=[];for(let S=0;S<g;S++)y[S]=[S,0];i[f.id]=y}for(let S=0;S<g;S++){const w=y[S];w[0]=S,w[1]=d[S]}y.sort(uw);for(let S=0;S<8;S++)S<g&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(lw);const m=f.morphAttributes.position,h=f.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const w=a[S],A=w[0],T=w[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&f.getAttribute("morphTarget"+S)!==m[A]&&f.setAttribute("morphTarget"+S,m[A]),h&&f.getAttribute("morphNormal"+S)!==h[A]&&f.setAttribute("morphNormal"+S,h[A]),r[S]=T,v+=T):(m&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),h&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const _=f.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function fw(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,c=e.get(l,f);if(r.get(c)!==u&&(e.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return c}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class W0 extends Ln{constructor(e,t,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:Fr,f!==Fr&&f!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Fr&&(i=er),i===void 0&&f===Xs&&(i=Ur),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const X0=new Ln,Y0=new W0(1,1);Y0.compareFunction=b0;const j0=new N0,K0=new qS,q0=new H0,_m=[],ym=[],xm=new Float32Array(16),Sm=new Float32Array(9),Mm=new Float32Array(4);function to(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_m[r];if(s===void 0&&(s=new Float32Array(r),_m[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Mu(n,e){let t=ym[e];t===void 0&&(t=new Int32Array(e),ym[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function gw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Kt(t,i))return;Mm.set(i),n.uniformMatrix2fv(this.addr,!1,Mm),qt(t,i)}}function vw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Kt(t,i))return;Sm.set(i),n.uniformMatrix3fv(this.addr,!1,Sm),qt(t,i)}}function _w(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Kt(t,i))return;xm.set(i),n.uniformMatrix4fv(this.addr,!1,xm),qt(t,i)}}function yw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Sw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Ew(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ww(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Cw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Y0:X0;t.setTexture2D(e||s,r)}function Rw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||K0,r)}function bw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||q0,r)}function Lw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||j0,r)}function Pw(n){switch(n){case 5126:return hw;case 35664:return dw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return vw;case 35676:return _w;case 5124:case 35670:return yw;case 35667:case 35671:return xw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return ww;case 36295:return Tw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Lw}}function Dw(n,e){n.uniform1fv(this.addr,e)}function Nw(n,e){const t=to(e,this.size,2);n.uniform2fv(this.addr,t)}function Iw(n,e){const t=to(e,this.size,3);n.uniform3fv(this.addr,t)}function Uw(n,e){const t=to(e,this.size,4);n.uniform4fv(this.addr,t)}function Fw(n,e){const t=to(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ow(n,e){const t=to(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kw(n,e){const t=to(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zw(n,e){n.uniform1iv(this.addr,e)}function Bw(n,e){n.uniform2iv(this.addr,e)}function Hw(n,e){n.uniform3iv(this.addr,e)}function Gw(n,e){n.uniform4iv(this.addr,e)}function Vw(n,e){n.uniform1uiv(this.addr,e)}function Ww(n,e){n.uniform2uiv(this.addr,e)}function Xw(n,e){n.uniform3uiv(this.addr,e)}function Yw(n,e){n.uniform4uiv(this.addr,e)}function jw(n,e,t){const i=this.cache,r=e.length,s=Mu(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||X0,s[o])}function Kw(n,e,t){const i=this.cache,r=e.length,s=Mu(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||K0,s[o])}function qw(n,e,t){const i=this.cache,r=e.length,s=Mu(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||q0,s[o])}function $w(n,e,t){const i=this.cache,r=e.length,s=Mu(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||j0,s[o])}function Zw(n){switch(n){case 5126:return Dw;case 35664:return Nw;case 35665:return Iw;case 35666:return Uw;case 35674:return Fw;case 35675:return Ow;case 35676:return kw;case 5124:case 35670:return zw;case 35667:case 35671:return Bw;case 35668:case 35672:return Hw;case 35669:case 35673:return Gw;case 5125:return Vw;case 36294:return Ww;case 36295:return Xw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return $w}}class Qw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pw(t.type)}}class Jw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zw(t.type)}}class eT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Nc=/(\w+)(\])?(\[|\.)?/g;function Em(n,e){n.seq.push(e),n.map[e.id]=e}function tT(n,e,t){const i=n.name,r=i.length;for(Nc.lastIndex=0;;){const s=Nc.exec(i),o=Nc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Em(t,u===void 0?new Qw(a,n,e):new Jw(a,n,e));break}else{let c=t.map[a];c===void 0&&(c=new eT(a),Em(t,c)),t=c}}}class Tl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);tT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function wm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nT=37297;let iT=0;function rT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function sT(n){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(n);let i;switch(e===t?i="":e===Jl&&t===Ql?i="LinearDisplayP3ToLinearSRGB":e===Ql&&t===Jl&&(i="LinearSRGBToLinearDisplayP3"),n){case zi:case xu:return[i,"LinearTransferOETF"];case Qt:case jh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Tm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rT(n.getShaderSource(e),o)}else return r}function oT(n,e){const t=sT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function aT(n,e){let t;switch(e){case yS:t="Linear";break;case xS:t="Reinhard";break;case SS:t="OptimizedCineon";break;case _0:t="ACESFilmic";break;case ES:t="AgX";break;case MS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function uT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function cT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function As(n){return n!==""}function Am(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(n){return n.replace(hT,pT)}const dT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pT(n,e){let t=nt[e];if(t===void 0){const i=dT.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jf(t)}const mT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(n){return n.replace(mT,gT)}function gT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function _T(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Ws:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function xT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xh:e="ENVMAP_BLENDING_MULTIPLY";break;case vS:e="ENVMAP_BLENDING_MIX";break;case _S:e="ENVMAP_BLENDING_ADD";break}return e}function ST(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function MT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vT(t),u=_T(t),f=yT(t),c=xT(t),d=ST(t),p=t.isWebGL2?"":lT(t),g=uT(t),y=cT(s),m=r.createProgram();let h,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(As).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(As).join(`
`),v.length>0&&(v+=`
`)):(h=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),v=[p,bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?nt.tonemapping_pars_fragment:"",t.toneMapping!==fr?aT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,oT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=jf(o),o=Am(o,t),o=Cm(o,t),a=jf(a),a=Am(a,t),a=Cm(a,t),o=Rm(o),a=Rm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=_+h+o,w=_+v+a,A=wm(r,r.VERTEX_SHADER,S),T=wm(r,r.FRAGMENT_SHADER,w);r.attachShader(m,A),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function F(q){if(n.debug.checkShaderErrors){const ie=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(A).trim(),G=r.getShaderInfoLog(T).trim();let Q=!0,ne=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,A,T);else{const O=Tm(r,A,"vertex"),V=Tm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+O+`
`+V)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(U===""||G==="")&&(ne=!1);ne&&(q.diagnostics={runnable:Q,programLog:ie,vertexShader:{log:U,prefix:h},fragmentShader:{log:G,prefix:v}})}r.deleteShader(A),r.deleteShader(T),M=new Tl(r,m),C=fT(r,m)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(m,nT)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let ET=0;class wT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new TT(e),t.set(e,i)),i}}class TT{constructor(e){this.id=ET++,this.code=e,this.usedTimes=0}}function AT(n,e,t,i,r,s,o){const a=new U0,l=new wT,u=[],f=r.isWebGL2,c=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,C,H,q,ie){const U=q.fog,G=ie.geometry,Q=M.isMeshStandardMaterial?q.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),O=ne&&ne.mapping===yu?ne.image.height:null,V=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const X=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=X!==void 0?X.length:0;let se=0;G.morphAttributes.position!==void 0&&(se=1),G.morphAttributes.normal!==void 0&&(se=2),G.morphAttributes.color!==void 0&&(se=3);let Z,re,ve,we;if(V){const tn=gi[V];Z=tn.vertexShader,re=tn.fragmentShader}else Z=M.vertexShader,re=M.fragmentShader,l.update(M),ve=l.getVertexShaderID(M),we=l.getFragmentShaderID(M);const Ae=n.getRenderTarget(),Ve=ie.isInstancedMesh===!0,Xe=ie.isBatchedMesh===!0,Re=!!M.map,at=!!M.matcap,Y=!!ne,en=!!M.aoMap,Fe=!!M.lightMap,Oe=!!M.bumpMap,De=!!M.normalMap,xt=!!M.displacementMap,Ke=!!M.emissiveMap,L=!!M.metalnessMap,E=!!M.roughnessMap,W=M.anisotropy>0,fe=M.clearcoat>0,ce=M.iridescence>0,pe=M.sheen>0,Ne=M.transmission>0,Me=W&&!!M.anisotropyMap,be=fe&&!!M.clearcoatMap,He=fe&&!!M.clearcoatNormalMap,$e=fe&&!!M.clearcoatRoughnessMap,ue=ce&&!!M.iridescenceMap,ft=ce&&!!M.iridescenceThicknessMap,Je=pe&&!!M.sheenColorMap,je=pe&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,Le=!!M.specularColorMap,Ze=!!M.specularIntensityMap,lt=Ne&&!!M.transmissionMap,Tt=Ne&&!!M.thicknessMap,et=!!M.gradientMap,me=!!M.alphaMap,N=M.alphaTest>0,xe=!!M.alphaHash,ye=!!M.extensions,Ye=!!G.attributes.uv1,ke=!!G.attributes.uv2,mt=!!G.attributes.uv3;let gt=fr;return M.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(gt=n.toneMapping),{isWebGL2:f,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:re,defines:M.defines,customVertexShaderID:ve,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Xe,instancing:Ve,instancingColor:Ve&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:zi,map:Re,matcap:at,envMap:Y,envMapMode:Y&&ne.mapping,envMapCubeUVHeight:O,aoMap:en,lightMap:Fe,bumpMap:Oe,normalMap:De,displacementMap:d&&xt,emissiveMap:Ke,normalMapObjectSpace:De&&M.normalMapType===US,normalMapTangentSpace:De&&M.normalMapType===R0,metalnessMap:L,roughnessMap:E,anisotropy:W,anisotropyMap:Me,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:He,clearcoatRoughnessMap:$e,iridescence:ce,iridescenceMap:ue,iridescenceThicknessMap:ft,sheen:pe,sheenColorMap:Je,sheenRoughnessMap:je,specularMap:Ue,specularColorMap:Le,specularIntensityMap:Ze,transmission:Ne,transmissionMap:lt,thicknessMap:Tt,gradientMap:et,opaque:M.transparent===!1&&M.blending===Ns,alphaMap:me,alphaTest:N,alphaHash:xe,combine:M.combine,mapUv:Re&&y(M.map.channel),aoMapUv:en&&y(M.aoMap.channel),lightMapUv:Fe&&y(M.lightMap.channel),bumpMapUv:Oe&&y(M.bumpMap.channel),normalMapUv:De&&y(M.normalMap.channel),displacementMapUv:xt&&y(M.displacementMap.channel),emissiveMapUv:Ke&&y(M.emissiveMap.channel),metalnessMapUv:L&&y(M.metalnessMap.channel),roughnessMapUv:E&&y(M.roughnessMap.channel),anisotropyMapUv:Me&&y(M.anisotropyMap.channel),clearcoatMapUv:be&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&y(M.sheenRoughnessMap.channel),specularMapUv:Ue&&y(M.specularMap.channel),specularColorMapUv:Le&&y(M.specularColorMap.channel),specularIntensityMapUv:Ze&&y(M.specularIntensityMap.channel),transmissionMapUv:lt&&y(M.transmissionMap.channel),thicknessMapUv:Tt&&y(M.thicknessMap.channel),alphaMapUv:me&&y(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(De||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ye,vertexUv2s:ke,vertexUv3s:mt,pointsUvs:ie.isPoints===!0&&!!G.attributes.uv&&(Re||me),fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:ie.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===Ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_i,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ye&&M.extensions.derivatives===!0,extensionFragDepth:ye&&M.extensions.fragDepth===!0,extensionDrawBuffers:ye&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)C.push(H),C.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(v(C,M),_(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function v(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function _(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const C=g[M.type];let H;if(C){const q=gi[C];H=lM.clone(q.uniforms)}else H=M.uniforms;return H}function w(M,C){let H;for(let q=0,ie=u.length;q<ie;q++){const U=u[q];if(U.cacheKey===C){H=U,++H.usedTimes;break}}return H===void 0&&(H=new MT(n,C,M,s),u.push(H)),H}function A(M){if(--M.usedTimes===0){const C=u.indexOf(M);u[C]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:F}}function CT(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function RT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(c,d,p,g,y,m){let h=n[e];return h===void 0?(h={id:c.id,object:c,geometry:d,material:p,groupOrder:g,renderOrder:c.renderOrder,z:y,group:m},n[e]=h):(h.id=c.id,h.object=c,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=c.renderOrder,h.z=y,h.group=m),e++,h}function a(c,d,p,g,y,m){const h=o(c,d,p,g,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(c,d,p,g,y,m){const h=o(c,d,p,g,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(c,d){t.length>1&&t.sort(c||RT),i.length>1&&i.sort(d||Lm),r.length>1&&r.sort(d||Lm)}function f(){for(let c=e,d=n.length;c<d;c++){const p=n[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function bT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Pm,n.set(i,[o])):r>=s.length?(o=new Pm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function LT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ee};break;case"SpotLight":t={position:new B,direction:new B,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function PT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DT=0;function NT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IT(n,e){const t=new LT,i=PT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new B);const s=new B,o=new Dt,a=new Dt;function l(f,c){let d=0,p=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let y=0,m=0,h=0,v=0,_=0,S=0,w=0,A=0,T=0,F=0,M=0;f.sort(NT);const C=c===!0?Math.PI:1;for(let q=0,ie=f.length;q<ie;q++){const U=f[q],G=U.color,Q=U.intensity,ne=U.distance,O=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=G.r*Q*C,p+=G.g*Q*C,g+=G.b*Q*C;else if(U.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(U.sh.coefficients[V],Q);M++}else if(U.isDirectionalLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const X=U.shadow,ee=i.get(U);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,r.directionalShadow[y]=ee,r.directionalShadowMap[y]=O,r.directionalShadowMatrix[y]=U.shadow.matrix,S++}r.directional[y]=V,y++}else if(U.isSpotLight){const V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(G).multiplyScalar(Q*C),V.distance=ne,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,r.spot[h]=V;const X=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,X.updateMatrices(U),U.castShadow&&F++),r.spotLightMatrix[h]=X.matrix,U.castShadow){const ee=i.get(U);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,r.spotShadow[h]=ee,r.spotShadowMap[h]=O,A++}h++}else if(U.isRectAreaLight){const V=t.get(U);V.color.copy(G).multiplyScalar(Q),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=V,v++}else if(U.isPointLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*C),V.distance=U.distance,V.decay=U.decay,U.castShadow){const X=U.shadow,ee=i.get(U);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,r.pointShadow[m]=ee,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=U.shadow.matrix,w++}r.point[m]=V,m++}else if(U.isHemisphereLight){const V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(Q*C),V.groundColor.copy(U.groundColor).multiplyScalar(Q*C),r.hemi[_]=V,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const H=r.hash;(H.directionalLength!==y||H.pointLength!==m||H.spotLength!==h||H.rectAreaLength!==v||H.hemiLength!==_||H.numDirectionalShadows!==S||H.numPointShadows!==w||H.numSpotShadows!==A||H.numSpotMaps!==T||H.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+T-F,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=M,H.directionalLength=y,H.pointLength=m,H.spotLength=h,H.rectAreaLength=v,H.hemiLength=_,H.numDirectionalShadows=S,H.numPointShadows=w,H.numSpotShadows=A,H.numSpotMaps=T,H.numLightProbes=M,r.version=DT++)}function u(f,c){let d=0,p=0,g=0,y=0,m=0;const h=c.matrixWorldInverse;for(let v=0,_=f.length;v<_;v++){const S=f[v];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),d++}else if(S.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),g++}else if(S.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(h),a.identity(),o.copy(S.matrixWorld),o.premultiply(h),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function Dm(n,e){const t=new IT(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(c){i.push(c)}function a(c){r.push(c)}function l(c){t.setup(i,c)}function u(c){t.setupView(i,c)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function UT(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Dm(n,e),t.set(s,[l])):o>=a.length?(l=new Dm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class FT extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OT extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
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
}`;function BT(n,e,t){let i=new qh;const r=new ct,s=new ct,o=new Pt,a=new FT({depthPacking:IS}),l=new OT,u={},f=t.maxTextureSize,c={[ki]:_n,[_n]:ki,[_i]:_i},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:kT,fragmentShader:zT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new An(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let h=this.type;this.render=function(A,T,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),C=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),q=n.state;q.setBlending(cr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ie=h!==Ci&&this.type===Ci,U=h===Ci&&this.type!==Ci;for(let G=0,Q=A.length;G<Q;G++){const ne=A[G],O=ne.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const V=O.getFrameExtents();if(r.multiply(V),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,O.mapSize.y=s.y)),O.map===null||ie===!0||U===!0){const ee=this.type!==Ci?{minFilter:on,magFilter:on}:{};O.map!==null&&O.map.dispose(),O.map=new Vr(r.x,r.y,ee),O.map.texture.name=ne.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const X=O.getViewportCount();for(let ee=0;ee<X;ee++){const se=O.getViewport(ee);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),q.viewport(o),O.updateMatrices(ne,ee),i=O.getFrustum(),S(T,F,O.camera,ne,this.type)}O.isPointLightShadow!==!0&&this.type===Ci&&v(O,F),O.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,C,H)};function v(A,T){const F=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,F,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,F,p,y,null)}function _(A,T,F,M){let C=null;const H=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)C=H;else if(C=F.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=C.uuid,ie=T.uuid;let U=u[q];U===void 0&&(U={},u[q]=U);let G=U[ie];G===void 0&&(G=C.clone(),U[ie]=G,T.addEventListener("dispose",w)),C=G}if(C.visible=T.visible,C.wireframe=T.wireframe,M===Ci?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:c[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=n.properties.get(C);q.light=F}return C}function S(A,T,F,M,C){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===Ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const ie=e.update(A),U=A.material;if(Array.isArray(U)){const G=ie.groups;for(let Q=0,ne=G.length;Q<ne;Q++){const O=G[Q],V=U[O.materialIndex];if(V&&V.visible){const X=_(A,V,M,C);A.onBeforeShadow(n,A,T,F,ie,X,O),n.renderBufferDirect(F,null,ie,X,A,O),A.onAfterShadow(n,A,T,F,ie,X,O)}}}else if(U.visible){const G=_(A,U,M,C);A.onBeforeShadow(n,A,T,F,ie,G,null),n.renderBufferDirect(F,null,ie,G,A,null),A.onAfterShadow(n,A,T,F,ie,G,null)}}const q=A.children;for(let ie=0,U=q.length;ie<U;ie++)S(q[ie],T,F,M,C)}function w(A){A.target.removeEventListener("dispose",w);for(const F in u){const M=u[F],C=A.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}function HT(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const xe=new Pt;let ye=null;const Ye=new Pt(0,0,0,0);return{setMask:function(ke){ye!==ke&&!N&&(n.colorMask(ke,ke,ke,ke),ye=ke)},setLocked:function(ke){N=ke},setClear:function(ke,mt,gt,Bt,tn){tn===!0&&(ke*=Bt,mt*=Bt,gt*=Bt),xe.set(ke,mt,gt,Bt),Ye.equals(xe)===!1&&(n.clearColor(ke,mt,gt,Bt),Ye.copy(xe))},reset:function(){N=!1,ye=null,Ye.set(-1,0,0,0)}}}function s(){let N=!1,xe=null,ye=null,Ye=null;return{setTest:function(ke){ke?Xe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ke){xe!==ke&&!N&&(n.depthMask(ke),xe=ke)},setFunc:function(ke){if(ye!==ke){switch(ke){case cS:n.depthFunc(n.NEVER);break;case fS:n.depthFunc(n.ALWAYS);break;case hS:n.depthFunc(n.LESS);break;case $l:n.depthFunc(n.LEQUAL);break;case dS:n.depthFunc(n.EQUAL);break;case pS:n.depthFunc(n.GEQUAL);break;case mS:n.depthFunc(n.GREATER);break;case gS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=ke}},setLocked:function(ke){N=ke},setClear:function(ke){Ye!==ke&&(n.clearDepth(ke),Ye=ke)},reset:function(){N=!1,xe=null,ye=null,Ye=null}}}function o(){let N=!1,xe=null,ye=null,Ye=null,ke=null,mt=null,gt=null,Bt=null,tn=null;return{setTest:function(vt){N||(vt?Xe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(vt){xe!==vt&&!N&&(n.stencilMask(vt),xe=vt)},setFunc:function(vt,nn,Gn){(ye!==vt||Ye!==nn||ke!==Gn)&&(n.stencilFunc(vt,nn,Gn),ye=vt,Ye=nn,ke=Gn)},setOp:function(vt,nn,Gn){(mt!==vt||gt!==nn||Bt!==Gn)&&(n.stencilOp(vt,nn,Gn),mt=vt,gt=nn,Bt=Gn)},setLocked:function(vt){N=vt},setClear:function(vt){tn!==vt&&(n.clearStencil(vt),tn=vt)},reset:function(){N=!1,xe=null,ye=null,Ye=null,ke=null,mt=null,gt=null,Bt=null,tn=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,c=new WeakMap;let d={},p={},g=new WeakMap,y=[],m=null,h=!1,v=null,_=null,S=null,w=null,A=null,T=null,F=null,M=new Ee(0,0,0),C=0,H=!1,q=null,ie=null,U=null,G=null,Q=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=V>=2);let ee=null,se={};const Z=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),ve=new Pt().fromArray(Z),we=new Pt().fromArray(re);function Ae(N,xe,ye,Ye){const ke=new Uint8Array(4),mt=n.createTexture();n.bindTexture(N,mt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<ye;gt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,Ye,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(xe+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return mt}const Ve={};Ve[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ve[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ve[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ve[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Xe(n.DEPTH_TEST),l.setFunc($l),Ke(!1),L(dp),Xe(n.CULL_FACE),De(cr);function Xe(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Re(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function at(N,xe){return p[N]!==xe?(n.bindFramebuffer(N,xe),p[N]=xe,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=xe),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function Y(N,xe){let ye=y,Ye=!1;if(N)if(ye=g.get(xe),ye===void 0&&(ye=[],g.set(xe,ye)),N.isWebGLMultipleRenderTargets){const ke=N.texture;if(ye.length!==ke.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,gt=ke.length;mt<gt;mt++)ye[mt]=n.COLOR_ATTACHMENT0+mt;ye.length=ke.length,Ye=!0}}else ye[0]!==n.COLOR_ATTACHMENT0&&(ye[0]=n.COLOR_ATTACHMENT0,Ye=!0);else ye[0]!==n.BACK&&(ye[0]=n.BACK,Ye=!0);Ye&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function en(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const Fe={[Cr]:n.FUNC_ADD,[qx]:n.FUNC_SUBTRACT,[$x]:n.FUNC_REVERSE_SUBTRACT};if(i)Fe[vp]=n.MIN,Fe[_p]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Fe[vp]=N.MIN_EXT,Fe[_p]=N.MAX_EXT)}const Oe={[Zx]:n.ZERO,[Qx]:n.ONE,[Jx]:n.SRC_COLOR,[kf]:n.SRC_ALPHA,[sS]:n.SRC_ALPHA_SATURATE,[iS]:n.DST_COLOR,[tS]:n.DST_ALPHA,[eS]:n.ONE_MINUS_SRC_COLOR,[zf]:n.ONE_MINUS_SRC_ALPHA,[rS]:n.ONE_MINUS_DST_COLOR,[nS]:n.ONE_MINUS_DST_ALPHA,[oS]:n.CONSTANT_COLOR,[aS]:n.ONE_MINUS_CONSTANT_COLOR,[lS]:n.CONSTANT_ALPHA,[uS]:n.ONE_MINUS_CONSTANT_ALPHA};function De(N,xe,ye,Ye,ke,mt,gt,Bt,tn,vt){if(N===cr){h===!0&&(Re(n.BLEND),h=!1);return}if(h===!1&&(Xe(n.BLEND),h=!0),N!==Kx){if(N!==v||vt!==H){if((_!==Cr||A!==Cr)&&(n.blendEquation(n.FUNC_ADD),_=Cr,A=Cr),vt)switch(N){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pp:n.blendFunc(n.ONE,n.ONE);break;case mp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,w=null,T=null,F=null,M.set(0,0,0),C=0,v=N,H=vt}return}ke=ke||xe,mt=mt||ye,gt=gt||Ye,(xe!==_||ke!==A)&&(n.blendEquationSeparate(Fe[xe],Fe[ke]),_=xe,A=ke),(ye!==S||Ye!==w||mt!==T||gt!==F)&&(n.blendFuncSeparate(Oe[ye],Oe[Ye],Oe[mt],Oe[gt]),S=ye,w=Ye,T=mt,F=gt),(Bt.equals(M)===!1||tn!==C)&&(n.blendColor(Bt.r,Bt.g,Bt.b,tn),M.copy(Bt),C=tn),v=N,H=!1}function xt(N,xe){N.side===_i?Re(n.CULL_FACE):Xe(n.CULL_FACE);let ye=N.side===_n;xe&&(ye=!ye),Ke(ye),N.blending===Ns&&N.transparent===!1?De(cr):De(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Ye=N.stencilWrite;u.setTest(Ye),Ye&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),W(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Xe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(N){q!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),q=N)}function L(N){N!==Xx?(Xe(n.CULL_FACE),N!==ie&&(N===dp?n.cullFace(n.BACK):N===Yx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),ie=N}function E(N){N!==U&&(O&&n.lineWidth(N),U=N)}function W(N,xe,ye){N?(Xe(n.POLYGON_OFFSET_FILL),(G!==xe||Q!==ye)&&(n.polygonOffset(xe,ye),G=xe,Q=ye)):Re(n.POLYGON_OFFSET_FILL)}function fe(N){N?Xe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function ce(N){N===void 0&&(N=n.TEXTURE0+ne-1),ee!==N&&(n.activeTexture(N),ee=N)}function pe(N,xe,ye){ye===void 0&&(ee===null?ye=n.TEXTURE0+ne-1:ye=ee);let Ye=se[ye];Ye===void 0&&(Ye={type:void 0,texture:void 0},se[ye]=Ye),(Ye.type!==N||Ye.texture!==xe)&&(ee!==ye&&(n.activeTexture(ye),ee=ye),n.bindTexture(N,xe||Ve[N]),Ye.type=N,Ye.texture=xe)}function Ne(){const N=se[ee];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(N){ve.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ve.copy(N))}function lt(N){we.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),we.copy(N))}function Tt(N,xe){let ye=c.get(xe);ye===void 0&&(ye=new WeakMap,c.set(xe,ye));let Ye=ye.get(N);Ye===void 0&&(Ye=n.getUniformBlockIndex(xe,N.name),ye.set(N,Ye))}function et(N,xe){const Ye=c.get(xe).get(N);f.get(xe)!==Ye&&(n.uniformBlockBinding(xe,Ye,N.__bindingPointIndex),f.set(xe,Ye))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,se={},p={},g=new WeakMap,y=[],m=null,h=!1,v=null,_=null,S=null,w=null,A=null,T=null,F=null,M=new Ee(0,0,0),C=0,H=!1,q=null,ie=null,U=null,G=null,Q=null,ve.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Xe,disable:Re,bindFramebuffer:at,drawBuffers:Y,useProgram:en,setBlending:De,setMaterial:xt,setFlipSided:Ke,setCullFace:L,setLineWidth:E,setPolygonOffset:W,setScissorTest:fe,activeTexture:ce,bindTexture:pe,unbindTexture:Ne,compressedTexImage2D:Me,compressedTexImage3D:be,texImage2D:Ue,texImage3D:Le,updateUBOMapping:Tt,uniformBlockBinding:et,texStorage2D:Je,texStorage3D:je,texSubImage2D:He,texSubImage3D:$e,compressedTexSubImage2D:ue,compressedTexSubImage3D:ft,scissor:Ze,viewport:lt,reset:me}}function GT(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let c;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return p?new OffscreenCanvas(L,E):tu("canvas")}function y(L,E,W,fe){let ce=1;if((L.width>fe||L.height>fe)&&(ce=fe/Math.max(L.width,L.height)),ce<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const pe=E?Yf:Math.floor,Ne=pe(ce*L.width),Me=pe(ce*L.height);c===void 0&&(c=g(Ne,Me));const be=W?g(Ne,Me):c;return be.width=Ne,be.height=Me,be.getContext("2d").drawImage(L,0,0,Ne,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ne+"x"+Me+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return Kp(L.width)&&Kp(L.height)}function h(L){return a?!1:L.wrapS!==Fn||L.wrapT!==Fn||L.minFilter!==on&&L.minFilter!==Kn}function v(L,E){return L.generateMipmaps&&E&&L.minFilter!==on&&L.minFilter!==Kn}function _(L){n.generateMipmap(L)}function S(L,E,W,fe,ce=!1){if(a===!1)return E;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pe=E;if(E===n.RED&&(W===n.FLOAT&&(pe=n.R32F),W===n.HALF_FLOAT&&(pe=n.R16F),W===n.UNSIGNED_BYTE&&(pe=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(pe=n.R8UI),W===n.UNSIGNED_SHORT&&(pe=n.R16UI),W===n.UNSIGNED_INT&&(pe=n.R32UI),W===n.BYTE&&(pe=n.R8I),W===n.SHORT&&(pe=n.R16I),W===n.INT&&(pe=n.R32I)),E===n.RG&&(W===n.FLOAT&&(pe=n.RG32F),W===n.HALF_FLOAT&&(pe=n.RG16F),W===n.UNSIGNED_BYTE&&(pe=n.RG8)),E===n.RGBA){const Ne=ce?Zl:_t.getTransfer(fe);W===n.FLOAT&&(pe=n.RGBA32F),W===n.HALF_FLOAT&&(pe=n.RGBA16F),W===n.UNSIGNED_BYTE&&(pe=Ne===Ct?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function w(L,E,W){return v(L,W)===!0||L.isFramebufferTexture&&L.minFilter!==on&&L.minFilter!==Kn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function A(L){return L===on||L===yp||L===rc?n.NEAREST:n.LINEAR}function T(L){const E=L.target;E.removeEventListener("dispose",T),M(E),E.isVideoTexture&&f.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),H(E)}function M(L){const E=i.get(L);if(E.__webglInit===void 0)return;const W=L.source,fe=d.get(W);if(fe){const ce=fe[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&C(L),Object.keys(fe).length===0&&d.delete(W)}i.remove(L)}function C(L){const E=i.get(L);n.deleteTexture(E.__webglTexture);const W=L.source,fe=d.get(W);delete fe[E.__cacheKey],o.memory.textures--}function H(L){const E=L.texture,W=i.get(L),fe=i.get(E);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(W.__webglFramebuffer[ce]))for(let pe=0;pe<W.__webglFramebuffer[ce].length;pe++)n.deleteFramebuffer(W.__webglFramebuffer[ce][pe]);else n.deleteFramebuffer(W.__webglFramebuffer[ce]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[ce])}else{if(Array.isArray(W.__webglFramebuffer))for(let ce=0;ce<W.__webglFramebuffer.length;ce++)n.deleteFramebuffer(W.__webglFramebuffer[ce]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ce=0;ce<W.__webglColorRenderbuffer.length;ce++)W.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[ce]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ce=0,pe=E.length;ce<pe;ce++){const Ne=i.get(E[ce]);Ne.__webglTexture&&(n.deleteTexture(Ne.__webglTexture),o.memory.textures--),i.remove(E[ce])}i.remove(E),i.remove(L)}let q=0;function ie(){q=0}function U(){const L=q;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),q+=1,L}function G(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Q(L,E){const W=i.get(L);if(L.isVideoTexture&&xt(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(W,L,E);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function ne(L,E){const W=i.get(L);if(L.version>0&&W.__version!==L.version){ve(W,L,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function O(L,E){const W=i.get(L);if(L.version>0&&W.__version!==L.version){ve(W,L,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function V(L,E){const W=i.get(L);if(L.version>0&&W.__version!==L.version){we(W,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}const X={[Gf]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Vf]:n.MIRRORED_REPEAT},ee={[on]:n.NEAREST,[yp]:n.NEAREST_MIPMAP_NEAREST,[rc]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[wS]:n.LINEAR_MIPMAP_NEAREST,[ra]:n.LINEAR_MIPMAP_LINEAR},se={[FS]:n.NEVER,[GS]:n.ALWAYS,[OS]:n.LESS,[b0]:n.LEQUAL,[kS]:n.EQUAL,[HS]:n.GEQUAL,[zS]:n.GREATER,[BS]:n.NOTEQUAL};function Z(L,E,W){if(W?(n.texParameteri(L,n.TEXTURE_WRAP_S,X[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,X[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,X[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ee[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ee[E.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Fn||E.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,A(E.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==on&&E.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===on||E.minFilter!==rc&&E.minFilter!==ra||E.type===tr&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===sa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(L,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function re(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T));const fe=E.source;let ce=d.get(fe);ce===void 0&&(ce={},d.set(fe,ce));const pe=G(E);if(pe!==L.__cacheKey){ce[pe]===void 0&&(ce[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ce[pe].usedTimes++;const Ne=ce[L.__cacheKey];Ne!==void 0&&(ce[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&C(E)),L.__cacheKey=pe,L.__webglTexture=ce[pe].texture}return W}function ve(L,E,W){let fe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=n.TEXTURE_3D);const ce=re(L,E),pe=E.source;t.bindTexture(fe,L.__webglTexture,n.TEXTURE0+W);const Ne=i.get(pe);if(pe.version!==Ne.__version||ce===!0){t.activeTexture(n.TEXTURE0+W);const Me=_t.getPrimaries(_t.workingColorSpace),be=E.colorSpace===qn?null:_t.getPrimaries(E.colorSpace),He=E.colorSpace===qn||Me===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const $e=h(E)&&m(E.image)===!1;let ue=y(E.image,$e,!1,r.maxTextureSize);ue=Ke(E,ue);const ft=m(ue)||a,Je=s.convert(E.format,E.colorSpace);let je=s.convert(E.type),Ue=S(E.internalFormat,Je,je,E.colorSpace,E.isVideoTexture);Z(fe,E,ft);let Le;const Ze=E.mipmaps,lt=a&&E.isVideoTexture!==!0&&Ue!==A0,Tt=Ne.__version===void 0||ce===!0,et=w(E,ue,ft);if(E.isDepthTexture)Ue=n.DEPTH_COMPONENT,a?E.type===tr?Ue=n.DEPTH_COMPONENT32F:E.type===er?Ue=n.DEPTH_COMPONENT24:E.type===Ur?Ue=n.DEPTH24_STENCIL8:Ue=n.DEPTH_COMPONENT16:E.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Fr&&Ue===n.DEPTH_COMPONENT&&E.type!==Yh&&E.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=er,je=s.convert(E.type)),E.format===Xs&&Ue===n.DEPTH_COMPONENT&&(Ue=n.DEPTH_STENCIL,E.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ur,je=s.convert(E.type))),Tt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,Ue,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ue.width,ue.height,0,Je,je,null));else if(E.isDataTexture)if(Ze.length>0&&ft){lt&&Tt&&t.texStorage2D(n.TEXTURE_2D,et,Ue,Ze[0].width,Ze[0].height);for(let me=0,N=Ze.length;me<N;me++)Le=Ze[me],lt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Le.width,Le.height,Je,je,Le.data):t.texImage2D(n.TEXTURE_2D,me,Ue,Le.width,Le.height,0,Je,je,Le.data);E.generateMipmaps=!1}else lt?(Tt&&t.texStorage2D(n.TEXTURE_2D,et,Ue,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Je,je,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ue.width,ue.height,0,Je,je,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){lt&&Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,Ue,Ze[0].width,Ze[0].height,ue.depth);for(let me=0,N=Ze.length;me<N;me++)Le=Ze[me],E.format!==ui?Je!==null?lt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Le.width,Le.height,ue.depth,Je,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Ue,Le.width,Le.height,ue.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Le.width,Le.height,ue.depth,Je,je,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Ue,Le.width,Le.height,ue.depth,0,Je,je,Le.data)}else{lt&&Tt&&t.texStorage2D(n.TEXTURE_2D,et,Ue,Ze[0].width,Ze[0].height);for(let me=0,N=Ze.length;me<N;me++)Le=Ze[me],E.format!==ui?Je!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Le.width,Le.height,Je,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Le.width,Le.height,Je,je,Le.data):t.texImage2D(n.TEXTURE_2D,me,Ue,Le.width,Le.height,0,Je,je,Le.data)}else if(E.isDataArrayTexture)lt?(Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,Ue,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Je,je,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ue.width,ue.height,ue.depth,0,Je,je,ue.data);else if(E.isData3DTexture)lt?(Tt&&t.texStorage3D(n.TEXTURE_3D,et,Ue,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Je,je,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ue.width,ue.height,ue.depth,0,Je,je,ue.data);else if(E.isFramebufferTexture){if(Tt)if(lt)t.texStorage2D(n.TEXTURE_2D,et,Ue,ue.width,ue.height);else{let me=ue.width,N=ue.height;for(let xe=0;xe<et;xe++)t.texImage2D(n.TEXTURE_2D,xe,Ue,me,N,0,Je,je,null),me>>=1,N>>=1}}else if(Ze.length>0&&ft){lt&&Tt&&t.texStorage2D(n.TEXTURE_2D,et,Ue,Ze[0].width,Ze[0].height);for(let me=0,N=Ze.length;me<N;me++)Le=Ze[me],lt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Je,je,Le):t.texImage2D(n.TEXTURE_2D,me,Ue,Je,je,Le);E.generateMipmaps=!1}else lt?(Tt&&t.texStorage2D(n.TEXTURE_2D,et,Ue,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Je,je,ue)):t.texImage2D(n.TEXTURE_2D,0,Ue,Je,je,ue);v(E,ft)&&_(fe),Ne.__version=pe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function we(L,E,W){if(E.image.length!==6)return;const fe=re(L,E),ce=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+W);const pe=i.get(ce);if(ce.version!==pe.__version||fe===!0){t.activeTexture(n.TEXTURE0+W);const Ne=_t.getPrimaries(_t.workingColorSpace),Me=E.colorSpace===qn?null:_t.getPrimaries(E.colorSpace),be=E.colorSpace===qn||Ne===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const He=E.isCompressedTexture||E.image[0].isCompressedTexture,$e=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let me=0;me<6;me++)!He&&!$e?ue[me]=y(E.image[me],!1,!0,r.maxCubemapSize):ue[me]=$e?E.image[me].image:E.image[me],ue[me]=Ke(E,ue[me]);const ft=ue[0],Je=m(ft)||a,je=s.convert(E.format,E.colorSpace),Ue=s.convert(E.type),Le=S(E.internalFormat,je,Ue,E.colorSpace),Ze=a&&E.isVideoTexture!==!0,lt=pe.__version===void 0||fe===!0;let Tt=w(E,ft,Je);Z(n.TEXTURE_CUBE_MAP,E,Je);let et;if(He){Ze&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Le,ft.width,ft.height);for(let me=0;me<6;me++){et=ue[me].mipmaps;for(let N=0;N<et.length;N++){const xe=et[N];E.format!==ui?je!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,xe.width,xe.height,je,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,xe.width,xe.height,je,Ue,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,Le,xe.width,xe.height,0,je,Ue,xe.data)}}}else{et=E.mipmaps,Ze&&lt&&(et.length>0&&Tt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Le,ue[0].width,ue[0].height));for(let me=0;me<6;me++)if($e){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ue[me].width,ue[me].height,je,Ue,ue[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Le,ue[me].width,ue[me].height,0,je,Ue,ue[me].data);for(let N=0;N<et.length;N++){const ye=et[N].image[me].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,ye.width,ye.height,je,Ue,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,Le,ye.width,ye.height,0,je,Ue,ye.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,je,Ue,ue[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Le,je,Ue,ue[me]);for(let N=0;N<et.length;N++){const xe=et[N];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,je,Ue,xe.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,Le,je,Ue,xe.image[me])}}}v(E,Je)&&_(n.TEXTURE_CUBE_MAP),pe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ae(L,E,W,fe,ce,pe){const Ne=s.convert(W.format,W.colorSpace),Me=s.convert(W.type),be=S(W.internalFormat,Ne,Me,W.colorSpace);if(!i.get(E).__hasExternalTextures){const $e=Math.max(1,E.width>>pe),ue=Math.max(1,E.height>>pe);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,pe,be,$e,ue,E.depth,0,Ne,Me,null):t.texImage2D(ce,pe,be,$e,ue,0,Ne,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),De(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ce,i.get(W).__webglTexture,0,Oe(E)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,ce,i.get(W).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(L,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer&&!E.stencilBuffer){let fe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||De(E)){const ce=E.depthTexture;ce&&ce.isDepthTexture&&(ce.type===tr?fe=n.DEPTH_COMPONENT32F:ce.type===er&&(fe=n.DEPTH_COMPONENT24));const pe=Oe(E);De(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,fe,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,fe,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(E.depthBuffer&&E.stencilBuffer){const fe=Oe(E);W&&De(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,E.width,E.height):De(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{const fe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ce=0;ce<fe.length;ce++){const pe=fe[ce],Ne=s.convert(pe.format,pe.colorSpace),Me=s.convert(pe.type),be=S(pe.internalFormat,Ne,Me,pe.colorSpace),He=Oe(E);W&&De(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,be,E.width,E.height):De(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,be,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,be,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const fe=i.get(E.depthTexture).__webglTexture,ce=Oe(E);if(E.depthTexture.format===Fr)De(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Xs)De(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Re(L){const E=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Xe(E.__webglFramebuffer,L)}else if(W){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]=n.createRenderbuffer(),Ve(E.__webglDepthbuffer[fe],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ve(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(L,E,W){const fe=i.get(L);E!==void 0&&Ae(fe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Re(L)}function Y(L){const E=L.texture,W=i.get(L),fe=i.get(E);L.addEventListener("dispose",F),L.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=E.version,o.memory.textures++);const ce=L.isWebGLCubeRenderTarget===!0,pe=L.isWebGLMultipleRenderTargets===!0,Ne=m(L)||a;if(ce){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let be=0;be<E.mipmaps.length;be++)W.__webglFramebuffer[Me][be]=n.createFramebuffer()}else W.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)W.__webglFramebuffer[Me]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(pe)if(r.drawBuffers){const Me=L.texture;for(let be=0,He=Me.length;be<He;be++){const $e=i.get(Me[be]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&De(L)===!1){const Me=pe?E:[E];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let be=0;be<Me.length;be++){const He=Me[be];W.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[be]);const $e=s.convert(He.format,He.colorSpace),ue=s.convert(He.type),ft=S(He.internalFormat,$e,ue,He.colorSpace,L.isXRRenderTarget===!0),Je=Oe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,ft,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,W.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),Z(n.TEXTURE_CUBE_MAP,E,Ne);for(let Me=0;Me<6;Me++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)Ae(W.__webglFramebuffer[Me][be],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,be);else Ae(W.__webglFramebuffer[Me],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);v(E,Ne)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const Me=L.texture;for(let be=0,He=Me.length;be<He;be++){const $e=Me[be],ue=i.get($e);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Z(n.TEXTURE_2D,$e,Ne),Ae(W.__webglFramebuffer,L,$e,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,0),v($e,Ne)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?Me=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,fe.__webglTexture),Z(Me,E,Ne),a&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)Ae(W.__webglFramebuffer[be],L,E,n.COLOR_ATTACHMENT0,Me,be);else Ae(W.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,Me,0);v(E,Ne)&&_(Me),t.unbindTexture()}L.depthBuffer&&Re(L)}function en(L){const E=m(L)||a,W=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let fe=0,ce=W.length;fe<ce;fe++){const pe=W[fe];if(v(pe,E)){const Ne=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(pe).__webglTexture;t.bindTexture(Ne,Me),_(Ne),t.unbindTexture()}}}function Fe(L){if(a&&L.samples>0&&De(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],W=L.width,fe=L.height;let ce=n.COLOR_BUFFER_BIT;const pe=[],Ne=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(L),be=L.isWebGLMultipleRenderTargets===!0;if(be)for(let He=0;He<E.length;He++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let He=0;He<E.length;He++){pe.push(n.COLOR_ATTACHMENT0+He),L.depthBuffer&&pe.push(Ne);const $e=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if($e===!1&&(L.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),be&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[He]),$e===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ne])),be){const ue=i.get(E[He]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,W,fe,0,0,W,fe,ce,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let He=0;He<E.length;He++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,Me.__webglColorRenderbuffer[He]);const $e=i.get(E[He]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Oe(L){return Math.min(r.maxSamples,L.samples)}function De(L){const E=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(L){const E=o.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function Ke(L,E){const W=L.colorSpace,fe=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Wf||W!==zi&&W!==qn&&(_t.getTransfer(W)===Ct?a===!1?e.has("EXT_sRGB")===!0&&fe===ui?(L.format=Wf,L.minFilter=Kn,L.generateMipmaps=!1):E=P0.sRGBToLinear(E):(fe!==ui||ce!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=U,this.resetTextureUnits=ie,this.setTexture2D=Q,this.setTexture2DArray=ne,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=at,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=De}function VT(n,e,t){const i=t.isWebGL2;function r(s,o=qn){let a;const l=_t.getTransfer(o);if(s===hr)return n.UNSIGNED_BYTE;if(s===S0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===M0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===TS)return n.BYTE;if(s===AS)return n.SHORT;if(s===Yh)return n.UNSIGNED_SHORT;if(s===x0)return n.INT;if(s===er)return n.UNSIGNED_INT;if(s===tr)return n.FLOAT;if(s===sa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===CS)return n.ALPHA;if(s===ui)return n.RGBA;if(s===RS)return n.LUMINANCE;if(s===bS)return n.LUMINANCE_ALPHA;if(s===Fr)return n.DEPTH_COMPONENT;if(s===Xs)return n.DEPTH_STENCIL;if(s===Wf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===LS)return n.RED;if(s===E0)return n.RED_INTEGER;if(s===PS)return n.RG;if(s===w0)return n.RG_INTEGER;if(s===T0)return n.RGBA_INTEGER;if(s===sc||s===oc||s===ac||s===lc)if(l===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xp||s===Sp||s===Mp||s===Ep)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===xp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ep)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===A0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wp||s===Tp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wp)return l===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Tp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ap||s===Cp||s===Rp||s===bp||s===Lp||s===Pp||s===Dp||s===Np||s===Ip||s===Up||s===Fp||s===Op||s===kp||s===zp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ap)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Np)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ip)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Up)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Op)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uc||s===Bp||s===Hp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===uc)return l===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===DS||s===Gp||s===Vp||s===Wp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Gp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class WT extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sl extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XT={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=f.position.distanceTo(c.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class YT extends Zs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,c=null,d=null,p=null,g=null;const y=t.getContextAttributes();let m=null,h=null;const v=[],_=[],S=new ct;let w=null;const A=new wn;A.layers.enable(1),A.viewport=new Pt;const T=new wn;T.layers.enable(2),T.viewport=new Pt;const F=[A,T],M=new WT;M.layers.enable(1),M.layers.enable(2);let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=v[Z];return re===void 0&&(re=new Ic,v[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=v[Z];return re===void 0&&(re=new Ic,v[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=v[Z];return re===void 0&&(re=new Ic,v[Z]=re),re.getHandSpace()};function q(Z){const re=_.indexOf(Z.inputSource);if(re===-1)return;const ve=v[re];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,u||o),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ie(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",U);for(let Z=0;Z<v.length;Z++){const re=_[Z];re!==null&&(_[Z]=null,v[Z].disconnect(re))}C=null,H=null,e.setRenderTarget(m),p=null,d=null,c=null,r=null,h=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Vr(p.framebufferWidth,p.framebufferHeight,{format:ui,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let re=null,ve=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?Xs:Fr,ve=y.stencil?Ur:er);const Ae={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};c=new XRWebGLBinding(r,t),d=c.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Vr(d.textureWidth,d.textureHeight,{format:ui,type:hr,depthTexture:new W0(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ve=e.properties.get(h);Ve.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(Z){for(let re=0;re<Z.removed.length;re++){const ve=Z.removed[re],we=_.indexOf(ve);we>=0&&(_[we]=null,v[we].disconnect(ve))}for(let re=0;re<Z.added.length;re++){const ve=Z.added[re];let we=_.indexOf(ve);if(we===-1){for(let Ve=0;Ve<v.length;Ve++)if(Ve>=_.length){_.push(ve),we=Ve;break}else if(_[Ve]===null){_[Ve]=ve,we=Ve;break}if(we===-1)break}const Ae=v[we];Ae&&Ae.connect(ve)}}const G=new B,Q=new B;function ne(Z,re,ve){G.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(ve.matrixWorld);const we=G.distanceTo(Q),Ae=re.projectionMatrix.elements,Ve=ve.projectionMatrix.elements,Xe=Ae[14]/(Ae[10]-1),Re=Ae[14]/(Ae[10]+1),at=(Ae[9]+1)/Ae[5],Y=(Ae[9]-1)/Ae[5],en=(Ae[8]-1)/Ae[0],Fe=(Ve[8]+1)/Ve[0],Oe=Xe*en,De=Xe*Fe,xt=we/(-en+Fe),Ke=xt*-en;re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ke),Z.translateZ(xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const L=Xe+xt,E=Re+xt,W=Oe-Ke,fe=De+(we-Ke),ce=at*Re/E*L,pe=Y*Re/E*L;Z.projectionMatrix.makePerspective(W,fe,ce,pe,L,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function O(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;M.near=T.near=A.near=Z.near,M.far=T.far=A.far=Z.far,(C!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far);const re=Z.parent,ve=M.cameras;O(M,re);for(let we=0;we<ve.length;we++)O(ve[we],re);ve.length===2?ne(M,A,T):M.projectionMatrix.copy(A.projectionMatrix),V(Z,M,re)};function V(Z,re,ve){ve===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Xf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)};let X=null;function ee(Z,re){if(f=re.getViewerPose(u||o),g=re,f!==null){const ve=f.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let we=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,we=!0);for(let Ae=0;Ae<ve.length;Ae++){const Ve=ve[Ae];let Xe=null;if(p!==null)Xe=p.getViewport(Ve);else{const at=c.getViewSubImage(d,Ve);Xe=at.viewport,Ae===0&&(e.setRenderTargetTextures(h,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(h))}let Re=F[Ae];Re===void 0&&(Re=new wn,Re.layers.enable(Ae),Re.viewport=new Pt,F[Ae]=Re),Re.matrix.fromArray(Ve.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ve.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ae===0&&(M.matrix.copy(Re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),we===!0&&M.cameras.push(Re)}}for(let ve=0;ve<v.length;ve++){const we=_[ve],Ae=v[ve];we!==null&&Ae!==void 0&&Ae.update(we,re,u||o)}X&&X(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const se=new G0;se.setAnimationLoop(ee),this.setAnimationLoop=function(Z){X=Z},this.dispose=function(){}}}function jT(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,z0(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,_,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),c(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===_n&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===_n&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function c(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KT(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function u(v,_){let S=r[v.id];S===void 0&&(g(v),S=f(v),r[v.id]=S,v.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(v,w);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function f(v){const _=c();v.__bindingPointIndex=_;const S=n.createBuffer(),w=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function c(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],S=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,T=S.length;A<T;A++){const F=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,C=F.length;M<C;M++){const H=F[M];if(p(H,A,M,w)===!0){const q=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let U=0;for(let G=0;G<ie.length;G++){const Q=ie[G],ne=y(Q);typeof Q=="number"||typeof Q=="boolean"?(H.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,q+U,H.__data)):Q.isMatrix3?(H.__data[0]=Q.elements[0],H.__data[1]=Q.elements[1],H.__data[2]=Q.elements[2],H.__data[3]=0,H.__data[4]=Q.elements[3],H.__data[5]=Q.elements[4],H.__data[6]=Q.elements[5],H.__data[7]=0,H.__data[8]=Q.elements[6],H.__data[9]=Q.elements[7],H.__data[10]=Q.elements[8],H.__data[11]=0):(Q.toArray(H.__data,U),U+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,S,w){const A=v.value,T=_+"_"+S;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const F=w[T];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return w[T]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(v){const _=v.uniforms;let S=0;const w=16;for(let T=0,F=_.length;T<F;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let C=0,H=M.length;C<H;C++){const q=M[C],ie=Array.isArray(q.value)?q.value:[q.value];for(let U=0,G=ie.length;U<G;U++){const Q=ie[U],ne=y(Q),O=S%w;O!==0&&w-O<ne.boundary&&(S+=w-O),q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=ne.storage}}}const A=S%w;return A>0&&(S+=w-A),v.__size=S,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class $0{constructor(e={}){const{canvas:t=WS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const _=this;let S=!1,w=0,A=0,T=null,F=-1,M=null;const C=new Pt,H=new Pt;let q=null;const ie=new Ee(0);let U=0,G=t.width,Q=t.height,ne=1,O=null,V=null;const X=new Pt(0,0,G,Q),ee=new Pt(0,0,G,Q);let se=!1;const Z=new qh;let re=!1,ve=!1,we=null;const Ae=new Dt,Ve=new ct,Xe=new B,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return T===null?ne:1}let Y=i;function en(R,z){for(let K=0;K<R.length;K++){const $=R[K],j=t.getContext($,z);if(j!==null)return j}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wh}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",xe,!1),Y===null){const z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),Y=en(z,R),Y===null)throw en(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,Oe,De,xt,Ke,L,E,W,fe,ce,pe,Ne,Me,be,He,$e,ue,ft,Je,je,Ue,Le,Ze,lt;function Tt(){Fe=new rw(Y),Oe=new Q1(Y,Fe,e),Fe.init(Oe),Le=new VT(Y,Fe,Oe),De=new HT(Y,Fe,Oe),xt=new aw(Y),Ke=new CT,L=new GT(Y,Fe,De,Ke,Oe,Le,xt),E=new ew(_),W=new iw(_),fe=new mM(Y,Oe),Ze=new $1(Y,Fe,fe,Oe),ce=new sw(Y,fe,xt,Ze),pe=new fw(Y,ce,fe,xt),Je=new cw(Y,Oe,L),$e=new J1(Ke),Ne=new AT(_,E,W,Fe,Oe,Ze,$e),Me=new jT(_,Ke),be=new bT,He=new UT(Fe,Oe),ft=new q1(_,E,W,De,pe,d,l),ue=new BT(_,pe,Oe),lt=new KT(Y,xt,Oe,De),je=new Z1(Y,Fe,xt,Oe),Ue=new ow(Y,Fe,xt,Oe),xt.programs=Ne.programs,_.capabilities=Oe,_.extensions=Fe,_.properties=Ke,_.renderLists=be,_.shadowMap=ue,_.state=De,_.info=xt}Tt();const et=new YT(_,Y);this.xr=et,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(G,Q,!1))},this.getSize=function(R){return R.set(G,Q)},this.setSize=function(R,z,K=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,Q=z,t.width=Math.floor(R*ne),t.height=Math.floor(z*ne),K===!0&&(t.style.width=R+"px",t.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(G*ne,Q*ne).floor()},this.setDrawingBufferSize=function(R,z,K){G=R,Q=z,ne=K,t.width=Math.floor(R*K),t.height=Math.floor(z*K),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(X)},this.setViewport=function(R,z,K,$){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,z,K,$),De.viewport(C.copy(X).multiplyScalar(ne).floor())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,z,K,$){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,z,K,$),De.scissor(H.copy(ee).multiplyScalar(ne).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(R){De.setScissorTest(se=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(R=!0,z=!0,K=!0){let $=0;if(R){let j=!1;if(T!==null){const Te=T.texture.format;j=Te===T0||Te===w0||Te===E0}if(j){const Te=T.texture.type,Ie=Te===hr||Te===er||Te===Yh||Te===Ur||Te===S0||Te===M0,ze=ft.getClearColor(),Be=ft.getClearAlpha(),Qe=ze.r,We=ze.g,qe=ze.b;Ie?(p[0]=Qe,p[1]=We,p[2]=qe,p[3]=Be,Y.clearBufferuiv(Y.COLOR,0,p)):(g[0]=Qe,g[1]=We,g[2]=qe,g[3]=Be,Y.clearBufferiv(Y.COLOR,0,g))}else $|=Y.COLOR_BUFFER_BIT}z&&($|=Y.DEPTH_BUFFER_BIT),K&&($|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),be.dispose(),He.dispose(),Ke.dispose(),E.dispose(),W.dispose(),pe.dispose(),Ze.dispose(),lt.dispose(),Ne.dispose(),et.dispose(),et.removeEventListener("sessionstart",tn),et.removeEventListener("sessionend",vt),we&&(we.dispose(),we=null),nn.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=xt.autoReset,z=ue.enabled,K=ue.autoUpdate,$=ue.needsUpdate,j=ue.type;Tt(),xt.autoReset=R,ue.enabled=z,ue.autoUpdate=K,ue.needsUpdate=$,ue.type=j}function xe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){const z=R.target;z.removeEventListener("dispose",ye),Ye(z)}function Ye(R){ke(R),Ke.remove(R)}function ke(R){const z=Ke.get(R).programs;z!==void 0&&(z.forEach(function(K){Ne.releaseProgram(K)}),R.isShaderMaterial&&Ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,K,$,j,Te){z===null&&(z=Re);const Ie=j.isMesh&&j.matrixWorld.determinant()<0,ze=Cu(R,z,K,$,j);De.setMaterial($,Ie);let Be=K.index,Qe=1;if($.wireframe===!0){if(Be=ce.getWireframeAttribute(K),Be===void 0)return;Qe=2}const We=K.drawRange,qe=K.attributes.position;let St=We.start*Qe,rn=(We.start+We.count)*Qe;Te!==null&&(St=Math.max(St,Te.start*Qe),rn=Math.min(rn,(Te.start+Te.count)*Qe)),Be!==null?(St=Math.max(St,0),rn=Math.min(rn,Be.count)):qe!=null&&(St=Math.max(St,0),rn=Math.min(rn,qe.count));const Ht=rn-St;if(Ht<0||Ht===1/0)return;Ze.setup(j,$,ze,K,Be);let ei,yt=je;if(Be!==null&&(ei=fe.get(Be),yt=Ue,yt.setIndex(ei)),j.isMesh)$.wireframe===!0?(De.setLineWidth($.wireframeLinewidth*at()),yt.setMode(Y.LINES)):yt.setMode(Y.TRIANGLES);else if(j.isLine){let tt=$.linewidth;tt===void 0&&(tt=1),De.setLineWidth(tt*at()),j.isLineSegments?yt.setMode(Y.LINES):j.isLineLoop?yt.setMode(Y.LINE_LOOP):yt.setMode(Y.LINE_STRIP)}else j.isPoints?yt.setMode(Y.POINTS):j.isSprite&&yt.setMode(Y.TRIANGLES);if(j.isBatchedMesh)yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)yt.renderInstances(St,Ht,j.count);else if(K.isInstancedBufferGeometry){const tt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,no=Math.min(K.instanceCount,tt);yt.renderInstances(St,Ht,no)}else yt.render(St,Ht)};function mt(R,z,K){R.transparent===!0&&R.side===_i&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,Kr(R,z,K),R.side=ki,R.needsUpdate=!0,Kr(R,z,K),R.side=_i):Kr(R,z,K)}this.compile=function(R,z,K=null){K===null&&(K=R),m=He.get(K),m.init(),v.push(m),K.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),R!==K&&R.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(_._useLegacyLights);const $=new Set;return R.traverse(function(j){const Te=j.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const ze=Te[Ie];mt(ze,K,j),$.add(ze)}else mt(Te,K,j),$.add(Te)}),v.pop(),m=null,$},this.compileAsync=function(R,z,K=null){const $=this.compile(R,z,K);return new Promise(j=>{function Te(){if($.forEach(function(Ie){Ke.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){j(R);return}setTimeout(Te,10)}Fe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let gt=null;function Bt(R){gt&&gt(R)}function tn(){nn.stop()}function vt(){nn.start()}const nn=new G0;nn.setAnimationLoop(Bt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(R){gt=R,et.setAnimationLoop(R),R===null?nn.stop():nn.start()},et.addEventListener("sessionstart",tn),et.addEventListener("sessionend",vt),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(z),z=et.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,z,T),m=He.get(R,v.length),m.init(),v.push(m),Ae.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,re=$e.init(this.clippingPlanes,ve),y=be.get(R,h.length),y.init(),h.push(y),Gn(R,z,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(O,V),this.info.render.frame++,re===!0&&$e.beginShadows();const K=m.state.shadowsArray;if(ue.render(K,R,z),re===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),ft.render(y,R),m.setupLights(_._useLegacyLights),z.isArrayCamera){const $=z.cameras;for(let j=0,Te=$.length;j<Te;j++){const Ie=$[j];pa(y,R,Ie,Ie.viewport)}}else pa(y,R,z);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(_,R,z),Ze.resetDefaultState(),F=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Gn(R,z,K,$){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){$&&Xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);const Ie=pe.update(R),ze=R.material;ze.visible&&y.push(R,Ie,ze,K,Xe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Ie=pe.update(R),ze=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xe.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Xe.copy(Ie.boundingSphere.center)),Xe.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)),Array.isArray(ze)){const Be=Ie.groups;for(let Qe=0,We=Be.length;Qe<We;Qe++){const qe=Be[Qe],St=ze[qe.materialIndex];St&&St.visible&&y.push(R,Ie,St,K,Xe.z,qe)}}else ze.visible&&y.push(R,Ie,ze,K,Xe.z,null)}}const Te=R.children;for(let Ie=0,ze=Te.length;Ie<ze;Ie++)Gn(Te[Ie],z,K,$)}function pa(R,z,K,$){const j=R.opaque,Te=R.transmissive,Ie=R.transparent;m.setupLightsView(K),re===!0&&$e.setGlobalState(_.clippingPlanes,K),Te.length>0&&ma(j,Te,z,K),$&&De.viewport(C.copy($)),j.length>0&&jr(j,z,K),Te.length>0&&jr(Te,z,K),Ie.length>0&&jr(Ie,z,K),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function ma(R,z,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Te=Oe.isWebGL2;we===null&&(we=new Vr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?sa:hr,minFilter:ra,samples:Te?4:0})),_.getDrawingBufferSize(Ve),Te?we.setSize(Ve.x,Ve.y):we.setSize(Yf(Ve.x),Yf(Ve.y));const Ie=_.getRenderTarget();_.setRenderTarget(we),_.getClearColor(ie),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();const ze=_.toneMapping;_.toneMapping=fr,jr(R,K,$),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we);let Be=!1;for(let Qe=0,We=z.length;Qe<We;Qe++){const qe=z[Qe],St=qe.object,rn=qe.geometry,Ht=qe.material,ei=qe.group;if(Ht.side===_i&&St.layers.test($.layers)){const yt=Ht.side;Ht.side=_n,Ht.needsUpdate=!0,ga(St,K,$,rn,Ht,ei),Ht.side=yt,Ht.needsUpdate=!0,Be=!0}}Be===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we)),_.setRenderTarget(Ie),_.setClearColor(ie,U),_.toneMapping=ze}function jr(R,z,K){const $=z.isScene===!0?z.overrideMaterial:null;for(let j=0,Te=R.length;j<Te;j++){const Ie=R[j],ze=Ie.object,Be=Ie.geometry,Qe=$===null?Ie.material:$,We=Ie.group;ze.layers.test(K.layers)&&ga(ze,z,K,Be,Qe,We)}}function ga(R,z,K,$,j,Te){R.onBeforeRender(_,z,K,$,j,Te),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(_,z,K,$,R,Te),j.transparent===!0&&j.side===_i&&j.forceSinglePass===!1?(j.side=_n,j.needsUpdate=!0,_.renderBufferDirect(K,z,$,j,R,Te),j.side=ki,j.needsUpdate=!0,_.renderBufferDirect(K,z,$,j,R,Te),j.side=_i):_.renderBufferDirect(K,z,$,j,R,Te),R.onAfterRender(_,z,K,$,j,Te)}function Kr(R,z,K){z.isScene!==!0&&(z=Re);const $=Ke.get(R),j=m.state.lights,Te=m.state.shadowsArray,Ie=j.state.version,ze=Ne.getParameters(R,j.state,Te,z,K),Be=Ne.getProgramCacheKey(ze);let Qe=$.programs;$.environment=R.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(R.isMeshStandardMaterial?W:E).get(R.envMap||$.environment),Qe===void 0&&(R.addEventListener("dispose",ye),Qe=new Map,$.programs=Qe);let We=Qe.get(Be);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===Ie)return _a(R,ze),We}else ze.uniforms=Ne.getUniforms(R),R.onBuild(K,ze,_),R.onBeforeCompile(ze,_),We=Ne.acquireProgram(ze,Be),Qe.set(Be,We),$.uniforms=ze.uniforms;const qe=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=$e.uniform),_a(R,ze),$.needsLights=bu(R),$.lightsStateVersion=Ie,$.needsLights&&(qe.ambientLightColor.value=j.state.ambient,qe.lightProbe.value=j.state.probe,qe.directionalLights.value=j.state.directional,qe.directionalLightShadows.value=j.state.directionalShadow,qe.spotLights.value=j.state.spot,qe.spotLightShadows.value=j.state.spotShadow,qe.rectAreaLights.value=j.state.rectArea,qe.ltc_1.value=j.state.rectAreaLTC1,qe.ltc_2.value=j.state.rectAreaLTC2,qe.pointLights.value=j.state.point,qe.pointLightShadows.value=j.state.pointShadow,qe.hemisphereLights.value=j.state.hemi,qe.directionalShadowMap.value=j.state.directionalShadowMap,qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qe.spotShadowMap.value=j.state.spotShadowMap,qe.spotLightMatrix.value=j.state.spotLightMatrix,qe.spotLightMap.value=j.state.spotLightMap,qe.pointShadowMap.value=j.state.pointShadowMap,qe.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=We,$.uniformsList=null,We}function va(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Tl.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function _a(R,z){const K=Ke.get(R);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Cu(R,z,K,$,j){z.isScene!==!0&&(z=Re),L.resetTextureUnits();const Te=z.fog,Ie=$.isMeshStandardMaterial?z.environment:null,ze=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zi,Be=($.isMeshStandardMaterial?W:E).get($.envMap||Ie),Qe=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,We=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,rn=!!K.morphAttributes.color;let Ht=fr;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ht=_.toneMapping);const ei=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=ei!==void 0?ei.length:0,tt=Ke.get($),no=m.state.lights;if(re===!0&&(ve===!0||R!==M)){const ae=R===M&&$.id===F;$e.setState($,R,ae)}let x=!1;$.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==no.state.version||tt.outputColorSpace!==ze||j.isBatchedMesh&&tt.batching===!1||!j.isBatchedMesh&&tt.batching===!0||j.isInstancedMesh&&tt.instancing===!1||!j.isInstancedMesh&&tt.instancing===!0||j.isSkinnedMesh&&tt.skinning===!1||!j.isSkinnedMesh&&tt.skinning===!0||j.isInstancedMesh&&tt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&tt.instancingColor===!1&&j.instanceColor!==null||tt.envMap!==Be||$.fog===!0&&tt.fog!==Te||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==$e.numPlanes||tt.numIntersection!==$e.numIntersection)||tt.vertexAlphas!==Qe||tt.vertexTangents!==We||tt.morphTargets!==qe||tt.morphNormals!==St||tt.morphColors!==rn||tt.toneMapping!==Ht||Oe.isWebGL2===!0&&tt.morphTargetsCount!==yt)&&(x=!0):(x=!0,tt.__version=$.version);let P=tt.currentProgram;x===!0&&(P=Kr($,z,j));let b=!1,I=!1,k=!1;const D=P.getUniforms(),J=tt.uniforms;if(De.useProgram(P.program)&&(b=!0,I=!0,k=!0),$.id!==F&&(F=$.id,I=!0),b||M!==R){D.setValue(Y,"projectionMatrix",R.projectionMatrix),D.setValue(Y,"viewMatrix",R.matrixWorldInverse);const ae=D.map.cameraPosition;ae!==void 0&&ae.setValue(Y,Xe.setFromMatrixPosition(R.matrixWorld)),Oe.logarithmicDepthBuffer&&D.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&D.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,I=!0,k=!0)}if(j.isSkinnedMesh){D.setOptional(Y,j,"bindMatrix"),D.setOptional(Y,j,"bindMatrixInverse");const ae=j.skeleton;ae&&(Oe.floatVertexTextures?(ae.boneTexture===null&&ae.computeBoneTexture(),D.setValue(Y,"boneTexture",ae.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(D.setOptional(Y,j,"batchingTexture"),D.setValue(Y,"batchingTexture",j._matricesTexture,L));const le=K.morphAttributes;if((le.position!==void 0||le.normal!==void 0||le.color!==void 0&&Oe.isWebGL2===!0)&&Je.update(j,K,P),(I||tt.receiveShadow!==j.receiveShadow)&&(tt.receiveShadow=j.receiveShadow,D.setValue(Y,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(J.envMap.value=Be,J.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),I&&(D.setValue(Y,"toneMappingExposure",_.toneMappingExposure),tt.needsLights&&Ru(J,k),Te&&$.fog===!0&&Me.refreshFogUniforms(J,Te),Me.refreshMaterialUniforms(J,$,ne,Q,we),Tl.upload(Y,va(tt),J,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Tl.upload(Y,va(tt),J,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&D.setValue(Y,"center",j.center),D.setValue(Y,"modelViewMatrix",j.modelViewMatrix),D.setValue(Y,"normalMatrix",j.normalMatrix),D.setValue(Y,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ae=$.uniformsGroups;for(let he=0,ge=ae.length;he<ge;he++)if(Oe.isWebGL2){const Pe=ae[he];lt.update(Pe,P),lt.bind(Pe,P)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return P}function Ru(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function bu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,z,K){Ke.get(R.texture).__webglTexture=z,Ke.get(R.depthTexture).__webglTexture=K;const $=Ke.get(R);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,z){const K=Ke.get(R);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,K=0){T=R,w=z,A=K;let $=!0,j=null,Te=!1,Ie=!1;if(R){const Be=Ke.get(R);Be.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(Y.FRAMEBUFFER,null),$=!1):Be.__webglFramebuffer===void 0?L.setupRenderTarget(R):Be.__hasExternalTextures&&L.rebindTextures(R,Ke.get(R.texture).__webglTexture,Ke.get(R.depthTexture).__webglTexture);const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ie=!0);const We=Ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[z])?j=We[z][K]:j=We[z],Te=!0):Oe.isWebGL2&&R.samples>0&&L.useMultisampledRTT(R)===!1?j=Ke.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?j=We[K]:j=We,C.copy(R.viewport),H.copy(R.scissor),q=R.scissorTest}else C.copy(X).multiplyScalar(ne).floor(),H.copy(ee).multiplyScalar(ne).floor(),q=se;if(De.bindFramebuffer(Y.FRAMEBUFFER,j)&&Oe.drawBuffers&&$&&De.drawBuffers(R,j),De.viewport(C),De.scissor(H),De.setScissorTest(q),Te){const Be=Ke.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+z,Be.__webglTexture,K)}else if(Ie){const Be=Ke.get(R.texture),Qe=z||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Be.__webglTexture,K||0,Qe)}F=-1},this.readRenderTargetPixels=function(R,z,K,$,j,Te,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){De.bindFramebuffer(Y.FRAMEBUFFER,ze);try{const Be=R.texture,Qe=Be.format,We=Be.type;if(Qe!==ui&&Le.convert(Qe)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=We===sa&&(Fe.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(We!==hr&&Le.convert(We)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===tr&&(Oe.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-$&&K>=0&&K<=R.height-j&&Y.readPixels(z,K,$,j,Le.convert(Qe),Le.convert(We),Te)}finally{const Be=T!==null?Ke.get(T).__webglFramebuffer:null;De.bindFramebuffer(Y.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(R,z,K=0){const $=Math.pow(2,-K),j=Math.floor(z.image.width*$),Te=Math.floor(z.image.height*$);L.setTexture2D(z,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,K,0,0,R.x,R.y,j,Te),De.unbindTexture()},this.copyTextureToTexture=function(R,z,K,$=0){const j=z.image.width,Te=z.image.height,Ie=Le.convert(K.format),ze=Le.convert(K.type);L.setTexture2D(K,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment),z.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,$,R.x,R.y,j,Te,Ie,ze,z.image.data):z.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,$,R.x,R.y,z.mipmaps[0].width,z.mipmaps[0].height,Ie,z.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,$,R.x,R.y,Ie,ze,z.image),$===0&&K.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(R,z,K,$,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=R.max.x-R.min.x+1,Ie=R.max.y-R.min.y+1,ze=R.max.z-R.min.z+1,Be=Le.convert($.format),Qe=Le.convert($.type);let We;if($.isData3DTexture)L.setTexture3D($,0),We=Y.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)L.setTexture2DArray($,0),We=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,$.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,$.unpackAlignment);const qe=Y.getParameter(Y.UNPACK_ROW_LENGTH),St=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),rn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ht=Y.getParameter(Y.UNPACK_SKIP_ROWS),ei=Y.getParameter(Y.UNPACK_SKIP_IMAGES),yt=K.isCompressedTexture?K.mipmaps[j]:K.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,yt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,yt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,R.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,R.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?Y.texSubImage3D(We,j,z.x,z.y,z.z,Te,Ie,ze,Be,Qe,yt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(We,j,z.x,z.y,z.z,Te,Ie,ze,Be,yt.data)):Y.texSubImage3D(We,j,z.x,z.y,z.z,Te,Ie,ze,Be,Qe,yt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,qe),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,St),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,rn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ht),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ei),j===0&&$.generateMipmaps&&Y.generateMipmap(We),De.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),De.unbindTexture()},this.resetState=function(){w=0,A=0,T=null,De.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jh?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===xu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?Or:C0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Or?Qt:zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qT extends $0{}qT.prototype.isWebGL1Renderer=!0;class nu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=i}clone(){return new nu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nm extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Im extends Et{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new Dt,Um=new Dt,ol=[],Fm=new Yr,$T=new Dt,_o=new An,yo=new Qs;class Z0 extends An{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Im(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,$T)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hs),Fm.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(Fm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hs),yo.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(i),e.ray.intersectsSphere(yo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,hs),Um.multiplyMatrices(i,hs),_o.matrixWorld=Um,_o.raycast(e,ol);for(let o=0,a=ol.length;o<a;o++){const l=ol[o];l.instanceId=s,l.object=this,t.push(l)}ol.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Im(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Eu extends Js{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Om=new Dt,Kf=new I0,al=new Qs,ll=new B;class Qh extends Xt{constructor(e=new Pn,t=new Eu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=s,e.ray.intersectsSphere(al)===!1)return;Om.copy(r).invert(),Kf.copy(e.ray).applyMatrix4(Om);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,c=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++){const m=u.getX(g);ll.fromBufferAttribute(c,m),km(ll,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++)ll.fromBufferAttribute(c,g),km(ll,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function km(n,e,t,i,r,s,o){const a=Kf.distanceSqToPoint(n);if(a<t){const l=new B;Kf.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ZT extends Ln{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wu extends Pn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],c=new B,d=new B,p=[],g=[],y=[],m=[];for(let h=0;h<=i;h++){const v=[],_=h/i;let S=0;h===0&&o===0?S=.5/t:h===i&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const A=w/t;c.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),c.y=e*Math.cos(o+_*a),c.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),g.push(c.x,c.y,c.z),d.copy(c).normalize(),y.push(d.x,d.y,d.z),m.push(A+S,1-_),v.push(u++)}f.push(v)}for(let h=0;h<i;h++)for(let v=0;v<t;v++){const _=f[h][v+1],S=f[h][v],w=f[h+1][v],A=f[h+1][v+1];(h!==0||o>0)&&p.push(_,S,A),(h!==i-1||l<Math.PI)&&p.push(S,w,A)}this.setIndex(p),this.setAttribute("position",new Si(g,3)),this.setAttribute("normal",new Si(y,3)),this.setAttribute("uv",new Si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Q0 extends Js{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=R0,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tu extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class QT extends Tu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Uc=new Dt,zm=new B,Bm=new B;class J0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;zm.setFromMatrixPosition(e.matrixWorld),t.position.copy(zm),Bm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bm),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hm=new Dt,xo=new B,Fc=new B;class JT extends J0{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),Fc.copy(i.position),Fc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fc),i.updateMatrixWorld(),r.makeTranslation(-xo.x,-xo.y,-xo.z),Hm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hm)}}class eA extends Tu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new JT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tA extends J0{constructor(){super(new V0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nA extends Tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new tA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iA extends Tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);const rA={},Gm=n=>{let e;const t=new Set,i=(f,c)=>{const d=typeof f=="function"?f(e):f;if(!Object.is(d,e)){const p=e;e=c??(typeof d!="object"||d===null)?d:Object.assign({},e,d),t.forEach(g=>g(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>u,subscribe:f=>(t.add(f),()=>t.delete(f)),destroy:()=>{(rA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},u=e=n(i,r,l);return l},sA=n=>n?Gm(n):Gm;var e_={exports:{}},t_={},n_={exports:{}},i_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Ft;function oA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var aA=typeof Object.is=="function"?Object.is:oA,lA=js.useState,uA=js.useEffect,cA=js.useLayoutEffect,fA=js.useDebugValue;function hA(n,e){var t=e(),i=lA({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return cA(function(){r.value=t,r.getSnapshot=e,Oc(r)&&s({inst:r})},[n,t,e]),uA(function(){return Oc(r)&&s({inst:r}),n(function(){Oc(r)&&s({inst:r})})},[n]),fA(t),t}function Oc(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!aA(n,t)}catch{return!0}}function dA(n,e){return e()}var pA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?dA:hA;i_.useSyncExternalStore=js.useSyncExternalStore!==void 0?js.useSyncExternalStore:pA;n_.exports=i_;var mA=n_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au=Ft,gA=mA;function vA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var _A=typeof Object.is=="function"?Object.is:vA,yA=gA.useSyncExternalStore,xA=Au.useRef,SA=Au.useEffect,MA=Au.useMemo,EA=Au.useDebugValue;t_.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=xA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=MA(function(){function l(p){if(!u){if(u=!0,f=p,p=i(p),r!==void 0&&o.hasValue){var g=o.value;if(r(g,p))return c=g}return c=p}if(g=c,_A(f,p))return g;var y=i(p);return r!==void 0&&r(g,y)?(f=p,g):(f=p,c=y)}var u=!1,f,c,d=t===void 0?null:t;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,t,i,r]);var a=yA(n,s[0],s[1]);return SA(function(){o.hasValue=!0,o.value=a},[a]),EA(a),a};e_.exports=t_;var wA=e_.exports;const TA=qf(wA),r_={},{useDebugValue:AA}=pg,{useSyncExternalStoreWithSelector:CA}=TA;let Vm=!1;const RA=n=>n;function bA(n,e=RA,t){(r_?"production":void 0)!=="production"&&t&&!Vm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Vm=!0);const i=CA(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return AA(i),i}const Wm=n=>{(r_?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?sA(n):n,t=(i,r)=>bA(e,i,r);return Object.assign(t,e),t},LA=n=>n?Wm(n):Wm,kc=64,Us=LA((n,e)=>({slots:new Array(36).fill(null),selected:0,addItem:(t,i)=>{n(r=>{const s=[...r.slots];let o=i;for(let a=0;a<36&&o>0;a++){const l=s[a];if(l&&l.id===t&&l.count<kc){const u=Math.min(o,kc-l.count);s[a]={id:t,count:l.count+u},o-=u}}for(let a=0;a<36&&o>0;a++)if(!s[a]){const l=Math.min(o,kc);s[a]={id:t,count:l},o-=l}return{slots:s}})},removeItem:(t,i)=>{n(r=>{const s=[...r.slots],o=s[t];return o?(o.count<=i?s[t]=null:s[t]={id:o.id,count:o.count-i},{slots:s}):r})},swapSlots:(t,i)=>{n(r=>{const s=[...r.slots],o=s[t];return s[t]=s[i],s[i]=o,{slots:s}})},selectSlot:t=>n({selected:Math.max(0,Math.min(8,t))}),getSelectedItem:()=>{const t=e();return t.slots[t.selected]},setSlots:t=>n({slots:t})}));class PA{renderer;mainScene;mainCamera;weaponScene;weaponCamera;constructor(){this.mainScene=new Nm,this.mainCamera=new wn(75,window.innerWidth/window.innerHeight,.1,400),this.weaponScene=new Nm,this.weaponCamera=new wn(55,window.innerWidth/window.innerHeight,.05,20),this.renderer=new $0({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.autoClear=!1,this.renderer.outputColorSpace=Qt,this.renderer.toneMapping=_0,this.renderer.toneMappingExposure=1,window.addEventListener("resize",this.onResize.bind(this))}onResize(){const e=window.innerWidth,t=window.innerHeight;this.mainCamera.aspect=e/t,this.mainCamera.updateProjectionMatrix(),this.weaponCamera.aspect=e/t,this.weaponCamera.updateProjectionMatrix(),this.renderer.setSize(e,t)}getDomElement(){return this.renderer.domElement}render(){this.renderer.clear(),this.renderer.render(this.mainScene,this.mainCamera),this.renderer.clearDepth(),this.renderer.render(this.weaponScene,this.weaponCamera)}setMainCameraPosition(e,t,i){this.mainCamera.position.set(e,t,i)}setMainCameraRotation(e,t){this.mainCamera.rotation.order="YXZ",this.mainCamera.rotation.y=e,this.mainCamera.rotation.x=t}setFOV(e){this.mainCamera.fov=e,this.mainCamera.updateProjectionMatrix()}destroy(){this.renderer.dispose(),window.removeEventListener("resize",this.onResize.bind(this))}}const DA=`varying vec3 vWorldPos;
varying vec2 vUv;
void main() {
  vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,NA=`uniform vec3 uTopColor;
uniform vec3 uHorizonColor;
uniform vec3 uSunDir;
uniform float uStarIntensity;
uniform float uTime;
varying vec3 vWorldPos;
varying vec2 vUv;

// Simple hash for procedural stars
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec3 dir = normalize(vWorldPos);
  float h = dir.y;

  // ═══════════════════════════════
  // ATMOSPHERIC SCATTERING (simplified Rayleigh)
  // ═══════════════════════════════
  float horizonBlend = smoothstep(-0.05, 0.4, h);
  vec3 sky = mix(uHorizonColor, uTopColor, horizonBlend);

  // Add subtle gradient band near horizon (atmospheric haze)
  float hazeBand = exp(-abs(h) * 8.0) * 0.3;
  sky = mix(sky, uHorizonColor * 1.1, hazeBand);

  // ═══════════════════════════════
  // SUN DISC + GLOW
  // ═══════════════════════════════
  float sunDot = max(dot(dir, uSunDir), 0.0);

  // Sharp sun disc
  float sunDisc = smoothstep(0.998, 0.9995, sunDot);
  sky += vec3(1.0, 0.95, 0.8) * sunDisc * 2.0;

  // Inner glow (corona)
  float innerGlow = pow(sunDot, 64.0);
  sky += vec3(1.0, 0.85, 0.5) * innerGlow * 0.6;

  // Outer atmospheric glow
  float outerGlow = pow(sunDot, 8.0);
  sky += vec3(1.0, 0.7, 0.3) * outerGlow * 0.15;

  // Subtle forward scattering (bright halo around sun)
  float scatter = pow(sunDot, 3.0) * 0.08;
  sky += uHorizonColor * scatter;

  // ═══════════════════════════════
  // MOON (opposite to sun)
  // ═══════════════════════════════
  float moonDot = max(dot(dir, -uSunDir), 0.0);
  float moonDisc = smoothstep(0.997, 0.999, moonDot);
  sky += vec3(0.85, 0.88, 0.95) * moonDisc * uStarIntensity * 1.5;

  // Moon glow
  float moonGlow = pow(moonDot, 32.0);
  sky += vec3(0.5, 0.55, 0.7) * moonGlow * 0.15 * uStarIntensity;

  // ═══════════════════════════════
  // STARS (procedural)
  // ═══════════════════════════════
  if (uStarIntensity > 0.01 && h > 0.05) {
    vec2 starUV = dir.xz / (dir.y + 0.001) * 50.0;
    float starVal = hash(floor(starUV));
    float starBright = step(0.985, starVal);
    float twinkle = sin(uTime * (2.0 + starVal * 4.0) + starVal * 100.0) * 0.3 + 0.7;
    float starFade = smoothstep(0.05, 0.3, h);
    sky += vec3(starBright * twinkle * starFade * uStarIntensity);
  }

  // ═══════════════════════════════
  // BELOW HORIZON - dark ground color
  // ═══════════════════════════════
  if (h < 0.0) {
    float groundBlend = smoothstep(0.0, -0.15, h);
    sky = mix(sky, vec3(0.15, 0.12, 0.1), groundBlend);
  }

  gl_FragColor = vec4(sky, 1.0);
}
`;class IA{skyMesh;starField;uniforms;constructor(e){const t=new wu(380,32,32);this.uniforms={uTopColor:{value:new Ee(1713022)},uHorizonColor:{value:new Ee(16740419)},uSunDir:{value:new B(0,1,0)},uStarIntensity:{value:0},uTime:{value:0}};const i=new Bi({vertexShader:DA,fragmentShader:NA,uniforms:this.uniforms,side:_n,depthWrite:!1});this.skyMesh=new An(t,i),this.skyMesh.renderOrder=-1e3,e.add(this.skyMesh);const r=3e3,s=new Float32Array(r*3),o=new Float32Array(r);for(let u=0;u<r;u++){const f=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),d=370;s[u*3]=d*Math.sin(c)*Math.cos(f),s[u*3+1]=Math.abs(d*Math.sin(c)*Math.sin(f)),s[u*3+2]=d*Math.cos(c),o[u]=.5+Math.random()*2}const a=new Pn;a.setAttribute("position",new Et(s,3)),a.setAttribute("size",new Et(o,1));const l=new Eu({color:16777215,size:1.5,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!1});this.starField=new Qh(a,l),this.starField.renderOrder=-999,e.add(this.starField)}update(e,t,i,r){this.uniforms.uTime.value=e,this.uniforms.uSunDir.value.copy(t),r&&(this.skyMesh.position.set(r.x,r.y,r.z),this.starField.position.set(r.x,r.y,r.z));const s=t.y,o=new Ee,a=new Ee;if(s>.3)o.setHex(870305),a.setHex(12312315);else if(s>.1){const u=(s-.1)/.2;o.lerpColors(new Ee(1402304),new Ee(870305),u),a.lerpColors(new Ee(16764032),new Ee(12312315),u)}else if(s>0){const u=s/.1;o.lerpColors(new Ee(15094016),new Ee(1402304),u),a.lerpColors(new Ee(16748288),new Ee(16764032),u)}else if(s>-.1){const u=(s+.1)/.1;o.lerpColors(new Ee(3218322),new Ee(15094016),u),a.lerpColors(new Ee(4854924),new Ee(16748288),u)}else if(s>-.3){const u=(s+.3)/.2;o.lerpColors(new Ee(858922),new Ee(3218322),u),a.lerpColors(new Ee(1713022),new Ee(4854924),u)}else o.setHex(331034),a.setHex(858922);this.uniforms.uTopColor.value.copy(o),this.uniforms.uHorizonColor.value.copy(a);const l=Math.max(0,(-s-.1)*4);this.uniforms.uStarIntensity.value=Math.min(1,l),this.starField.material.opacity=Math.min(.8,l)}}const UA=`uniform float uTime;
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
`,FA=`uniform float uTime;
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
`;class OA{waterMaterial;waterMeshes=new Map;constructor(){this.waterMaterial=new Bi({vertexShader:UA,fragmentShader:FA,uniforms:{uTime:{value:0},uCamPos:{value:new B},uSunDir:{value:new B(0,1,0)}},transparent:!0,side:_i,depthWrite:!1})}getMaterial(){return this.waterMaterial}addWaterMesh(e,t,i){const r=new An(t,this.waterMaterial);r.frustumCulled=!0,r.renderOrder=100,this.waterMeshes.set(e,r),i.add(r)}removeWaterMesh(e,t){const i=this.waterMeshes.get(e);i&&(t.remove(i),i.geometry.dispose(),this.waterMeshes.delete(e))}updateUniforms(e,t,i){this.waterMaterial.uniforms.uTime.value=e,this.waterMaterial.uniforms.uCamPos.value.copy(t),this.waterMaterial.uniforms.uSunDir.value.copy(i)}}var it=(n=>(n[n.PLAINS=0]="PLAINS",n[n.DESERT=1]="DESERT",n[n.TUNDRA=2]="TUNDRA",n[n.MARSH=3]="MARSH",n[n.CRYSTAL_CAVERNS=4]="CRYSTAL_CAVERNS",n))(it||{});const s_={0:{id:0,name:"Verdant Plains",surfaceBlock:1,subSurfaceBlock:2,underwaterBlock:2,amplitude:12,treeType:"oak",treeDensity:.02,waterLevel:-1,fogColor:[.784,.902,.788],fogDensity:.012,temperature:.2},1:{id:1,name:"Desert",surfaceBlock:4,subSurfaceBlock:5,underwaterBlock:4,amplitude:8,treeType:"cactus",treeDensity:.008,waterLevel:-1,fogColor:[1,.976,.769],fogDensity:.01,temperature:.9},2:{id:2,name:"Frozen Tundra",surfaceBlock:6,subSurfaceBlock:2,underwaterBlock:23,amplitude:4,treeType:"spruce",treeDensity:.01,waterLevel:-1,fogColor:[.89,.945,.992],fogDensity:.018,temperature:-.8},3:{id:3,name:"Sunken Marsh",surfaceBlock:8,subSurfaceBlock:8,underwaterBlock:8,amplitude:3,treeType:"none",treeDensity:0,waterLevel:22,fogColor:[.306,.204,.18],fogDensity:.028,temperature:.1},4:{id:4,name:"Crystal Caverns",surfaceBlock:9,subSurfaceBlock:3,underwaterBlock:3,amplitude:10,treeType:"crystal",treeDensity:.012,waterLevel:-1,fogColor:[.29,.078,.549],fogDensity:.022,temperature:0}};class kA{scene;targetColor=new Ee;targetNear=50;targetFar=250;currentColor=new Ee;currentNear=50;currentFar=250;sunHeight=1;constructor(e){this.scene=e,e.fog=new nu(13166281,50,250),this.currentColor.set(13166281),this.targetColor.set(13166281)}setBiomeFog(e){const t=s_[e];this.targetColor.setRGB(t.fogColor[0],t.fogColor[1],t.fogColor[2]),this.targetNear=60,this.targetFar=220}setCaveFog(){this.targetColor.setHex(1118481),this.targetNear=5,this.targetFar=40}setSunHeight(e){this.sunHeight=e}update(e){const t=e*2;if(this.currentColor.lerp(this.targetColor,t),this.currentNear+=(this.targetNear-this.currentNear)*t,this.currentFar+=(this.targetFar-this.currentFar)*t,this.scene.fog instanceof nu){const i=this.currentColor.clone();if(this.sunHeight<0){const r=Math.min(1,-this.sunHeight*2);i.lerp(new Ee(331034),r*.7)}else if(this.sunHeight<.2){const r=1-this.sunHeight/.2;i.lerp(new Ee(16764032),r*.3)}this.scene.fog.color.copy(i),this.scene.fog.near=this.currentNear,this.scene.fog.far=this.currentFar}}}const Ge=16,Un=64,br=22,Mr=6,zA=8,Xm=-28,Ym=.6,jm=1.8,Km=1.6,BA=5,ul=12e5,HA=6,qm=32,zc=200,So=5e3,GA=3e4,Ro=512,VA=16,te=Ro/VA;class WA{particles=[];geometry;material;points;positions;colors;sizes;constructor(e){this.positions=new Float32Array(So*3),this.colors=new Float32Array(So*3),this.sizes=new Float32Array(So),this.geometry=new Pn,this.geometry.setAttribute("position",new Et(this.positions,3)),this.geometry.setAttribute("color",new Et(this.colors,3)),this.geometry.setAttribute("size",new Et(this.sizes,1)),this.material=new Eu({size:.15,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1,sizeAttenuation:!0}),this.points=new Qh(this.geometry,this.material),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,r,s={}){const{speed:o=2,color:a=[1,1,1],life:l=1,size:u=.15,spread:f=1}=s;for(let c=0;c<r&&!(this.particles.length>=So);c++){const d=Math.random()*Math.PI*2,p=(Math.random()-.5)*Math.PI,g=o*(.5+Math.random()*.5);this.particles.push({x:e+(Math.random()-.5)*f,y:t+(Math.random()-.5)*f,z:i+(Math.random()-.5)*f,vx:Math.cos(d)*Math.cos(p)*g,vy:Math.sin(p)*g,vz:Math.sin(d)*Math.cos(p)*g,life:l,maxLife:l,r:a[0],g:a[1],b:a[2],size:u})}}update(e){let t=0;for(let i=this.particles.length-1;i>=0;i--){const r=this.particles[i];if(r.life-=e,r.life<=0){this.particles.splice(i,1);continue}r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.vy-=5*e;const s=r.life/r.maxLife;this.positions[t*3]=r.x,this.positions[t*3+1]=r.y,this.positions[t*3+2]=r.z,this.colors[t*3]=r.r*s,this.colors[t*3+1]=r.g*s,this.colors[t*3+2]=r.b*s,this.sizes[t]=r.size*s,t++}for(let i=t;i<So;i++)this.positions[i*3+1]=-1e3,this.sizes[i]=0;this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.setDrawRange(0,t)}}class XA{sunLight;ambientLight;hemisphereLight;sunDirection=new B(0,1,0);elapsed=0;constructor(e){this.sunLight=new nA(16774624,1.5),this.sunLight.position.set(50,100,30),e.add(this.sunLight),this.ambientLight=new iA(8425664,.4),e.add(this.ambientLight),this.hemisphereLight=new QT(8900331,4473890,.5),e.add(this.hemisphereLight)}update(e){this.elapsed+=e*1e3;const i=this.elapsed%ul/ul*Math.PI*2,r=Math.cos(i)*100,s=Math.sin(i)*100,o=30;this.sunLight.position.set(r,s,o),this.sunDirection.set(r,s,o).normalize();const a=Math.sin(i);if(a>.3)this.sunLight.color.setHex(16775920),this.sunLight.intensity=1.5,this.ambientLight.color.setHex(8425664),this.ambientLight.intensity=.4,this.hemisphereLight.color.setHex(8900331),this.hemisphereLight.groundColor.setHex(4473890),this.hemisphereLight.intensity=.5;else if(a>.1){const l=(a-.1)/.2;this.sunLight.color.lerpColors(new Ee(16747520),new Ee(16775920),l),this.sunLight.intensity=.8+l*.7,this.ambientLight.intensity=.2+l*.2,this.hemisphereLight.intensity=.3+l*.2}else if(a>0){const l=a/.1;this.sunLight.color.lerpColors(new Ee(15094016),new Ee(16747520),l),this.sunLight.intensity=.5+l*.3,this.ambientLight.color.lerpColors(new Ee(1713022),new Ee(8425664),l),this.ambientLight.intensity=.1+l*.1,this.hemisphereLight.color.lerpColors(new Ee(16740096),new Ee(8900331),l),this.hemisphereLight.intensity=.15+l*.15}else if(a>-.1){const l=(a+.1)/.1;this.sunLight.color.lerpColors(new Ee(1713022),new Ee(15094016),l),this.sunLight.intensity=.1+l*.4,this.ambientLight.color.lerpColors(new Ee(858922),new Ee(1713022),l),this.ambientLight.intensity=.05+l*.05,this.hemisphereLight.color.lerpColors(new Ee(1710654),new Ee(16740096),l),this.hemisphereLight.intensity=.05+l*.1}else this.sunLight.color.setHex(4482730),this.sunLight.intensity=.15,this.ambientLight.color.setHex(858922),this.ambientLight.intensity=.05,this.hemisphereLight.color.setHex(1118515),this.hemisphereLight.groundColor.setHex(1118481),this.hemisphereLight.intensity=.05}getSunDirection(){return this.sunDirection}getDayProgress(){return this.elapsed%ul/ul}getSunHeight(){return this.sunDirection.y}}class YA{scene;assetManager;chunks=new Map;material;maxChunks=200;constructor(e,t){this.scene=e,this.assetManager=t,this.material=new Q0({map:t.getTexture(),vertexColors:!0,side:ki})}uploadChunk(e,t,i){if(this.removeChunk(e),this.chunks.size>=this.maxChunks){let a="",l=1/0;this.chunks.forEach((u,f)=>{u.lastAccessed<l&&(l=u.lastAccessed,a=f)}),a&&this.removeChunk(a)}const r=new Pn;r.setAttribute("position",new Et(t.positions,3)),r.setAttribute("normal",new Et(t.normals,3)),r.setAttribute("uv",new Et(t.uvs,2)),r.setAttribute("color",new Et(t.colors,3)),r.setIndex(new Et(t.indices,1)),r.computeBoundingSphere();const s=new An(r,this.material);s.frustumCulled=!0,this.scene.add(s);let o=null;if(t.waterIndices.length>0){const a=new Pn;a.setAttribute("position",new Et(t.waterPositions,3)),a.setAttribute("normal",new Et(t.waterNormals,3)),a.setAttribute("uv",new Et(t.waterUvs,2)),a.setIndex(new Et(t.waterIndices,1)),a.computeBoundingSphere(),o=new An(a,i),o.frustumCulled=!0,o.renderOrder=100,this.scene.add(o)}this.chunks.set(e,{solid:s,water:o,lastAccessed:performance.now(),key:e})}removeChunk(e){const t=this.chunks.get(e);t&&(this.scene.remove(t.solid),t.solid.geometry.dispose(),t.water&&(this.scene.remove(t.water),t.water.geometry.dispose()),this.chunks.delete(e))}hasChunk(e){return this.chunks.has(e)}getChunkCount(){return this.chunks.size}clear(){this.chunks.forEach((e,t)=>this.removeChunk(t))}}class jA{overlay;vignetteStrength=.3;constructor(){this.overlay=document.createElement("div"),this.overlay.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10;background:radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",document.body.appendChild(this.overlay)}setVignetteStrength(e){this.vignetteStrength=e;const t=e*.6;this.overlay.style.background=`radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${t}) 100%)`}fadeIn(e,t){this.overlay.style.transition=`background ${e}ms`,this.overlay.style.background="rgba(0,0,0,1)",t&&setTimeout(t,e)}fadeOut(e,t){this.overlay.style.transition=`background ${e}ms`;const i=this.vignetteStrength*.6;this.overlay.style.background=`radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${i}) 100%)`,t&&setTimeout(t,e)}destroy(){document.body.removeChild(this.overlay)}}var Se=(n=>(n[n.AIR=0]="AIR",n[n.GRASS=1]="GRASS",n[n.DIRT=2]="DIRT",n[n.STONE=3]="STONE",n[n.SAND=4]="SAND",n[n.SANDSTONE=5]="SANDSTONE",n[n.SNOW=6]="SNOW",n[n.ICE=7]="ICE",n[n.MUD=8]="MUD",n[n.CRYSTAL=9]="CRYSTAL",n[n.GLOWSTONE=10]="GLOWSTONE",n[n.LAVA=11]="LAVA",n[n.WATER=12]="WATER",n[n.WOOD=13]="WOOD",n[n.LEAVES=14]="LEAVES",n[n.CACTUS=15]="CACTUS",n[n.BEDROCK=16]="BEDROCK",n[n.COAL_ORE=17]="COAL_ORE",n[n.IRON_ORE=18]="IRON_ORE",n[n.GOLD_ORE=19]="GOLD_ORE",n[n.DIAMOND_ORE=20]="DIAMOND_ORE",n[n.PORTAL_FRAME=21]="PORTAL_FRAME",n[n.PORTAL_ACTIVE=22]="PORTAL_ACTIVE",n[n.LILY_PAD=23]="LILY_PAD",n[n.SPRUCE_WOOD=24]="SPRUCE_WOOD",n[n.SPRUCE_LEAVES=25]="SPRUCE_LEAVES",n[n.PACKED_ICE=26]="PACKED_ICE",n))(Se||{});const Jh={0:{id:0,name:"Air",solid:!1,transparent:!0,hardness:0,atlasTileX:0,atlasTileY:0,lightEmission:0},1:{id:1,name:"Grass",solid:!0,transparent:!1,hardness:.6,atlasTileX:0,atlasTileY:0,sideAtlasX:1,sideAtlasY:0,bottomAtlasX:2,bottomAtlasY:0,lightEmission:0},2:{id:2,name:"Dirt",solid:!0,transparent:!1,hardness:.5,atlasTileX:2,atlasTileY:0,lightEmission:0},3:{id:3,name:"Stone",solid:!0,transparent:!1,hardness:1.5,atlasTileX:3,atlasTileY:0,lightEmission:0},4:{id:4,name:"Sand",solid:!0,transparent:!1,hardness:.5,atlasTileX:4,atlasTileY:0,lightEmission:0},5:{id:5,name:"Sandstone",solid:!0,transparent:!1,hardness:2,atlasTileX:5,atlasTileY:0,lightEmission:0},6:{id:6,name:"Snow",solid:!0,transparent:!1,hardness:.2,atlasTileX:6,atlasTileY:0,lightEmission:0},7:{id:7,name:"Ice",solid:!0,transparent:!0,hardness:.5,atlasTileX:7,atlasTileY:0,lightEmission:0},8:{id:8,name:"Mud",solid:!0,transparent:!1,hardness:.4,atlasTileX:8,atlasTileY:0,lightEmission:0},9:{id:9,name:"Crystal",solid:!0,transparent:!1,hardness:1,atlasTileX:9,atlasTileY:0,lightEmission:12},10:{id:10,name:"Glowstone",solid:!0,transparent:!1,hardness:.3,atlasTileX:10,atlasTileY:0,lightEmission:15},11:{id:11,name:"Lava",solid:!1,transparent:!0,hardness:-1,atlasTileX:11,atlasTileY:0,lightEmission:15},12:{id:12,name:"Water",solid:!1,transparent:!0,hardness:-1,atlasTileX:0,atlasTileY:0,lightEmission:0},13:{id:13,name:"Wood",solid:!0,transparent:!1,hardness:2,atlasTileX:12,atlasTileY:0,lightEmission:0},14:{id:14,name:"Leaves",solid:!0,transparent:!0,hardness:.2,atlasTileX:13,atlasTileY:0,lightEmission:0},15:{id:15,name:"Cactus",solid:!0,transparent:!1,hardness:.4,atlasTileX:14,atlasTileY:0,lightEmission:0},16:{id:16,name:"Bedrock",solid:!0,transparent:!1,hardness:-1,atlasTileX:15,atlasTileY:0,lightEmission:0},17:{id:17,name:"Coal Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:0,atlasTileY:1,lightEmission:0},18:{id:18,name:"Iron Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:1,atlasTileY:1,lightEmission:0},19:{id:19,name:"Gold Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:2,atlasTileY:1,lightEmission:0},20:{id:20,name:"Diamond Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:3,atlasTileY:1,lightEmission:0},21:{id:21,name:"Portal Frame",solid:!0,transparent:!1,hardness:-1,atlasTileX:4,atlasTileY:1,lightEmission:5},22:{id:22,name:"Portal",solid:!1,transparent:!0,hardness:-1,atlasTileX:5,atlasTileY:1,lightEmission:15},23:{id:23,name:"Lily Pad",solid:!1,transparent:!0,hardness:0,atlasTileX:6,atlasTileY:1,lightEmission:0},24:{id:24,name:"Spruce Wood",solid:!0,transparent:!1,hardness:2,atlasTileX:7,atlasTileY:1,lightEmission:0},25:{id:25,name:"Spruce Leaves",solid:!0,transparent:!0,hardness:.2,atlasTileX:8,atlasTileY:1,lightEmission:0},26:{id:26,name:"Packed Ice",solid:!0,transparent:!1,hardness:.5,atlasTileX:9,atlasTileY:1,lightEmission:0}};function Xn(n){return Jh[n]?.solid??!1}class KA{atlas=null;canvas=null;init(){this.canvas=document.createElement("canvas"),this.canvas.width=Ro,this.canvas.height=Ro;const e=this.canvas.getContext("2d");e.fillStyle="#FF00FF",e.fillRect(0,0,Ro,Ro),this.drawTile(e,Se.GRASS,(t,i,r)=>{t.fillStyle="#4CAF50",t.fillRect(i,r,te,te);for(let s=0;s<20;s++){t.fillStyle="#388E3C";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,2,2)}for(let s=0;s<5;s++){t.fillStyle="#81C784";const o=i+Math.floor(Math.random()*(te-6)),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,6,1)}}),this.drawTile(e,Se.DIRT,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,te,te);for(let s=0;s<25;s++){t.fillStyle=Math.random()>.5?"#6D4C41":"#8D6E63";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,2,2)}}),this.drawTileAt(e,1,0,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,te,te),t.fillStyle="#4CAF50",t.fillRect(i,r,te,Math.floor(te*.4));for(let s=0;s<10;s++){t.fillStyle="#388E3C";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te*.4);t.fillRect(o,a,2,2)}}),this.drawTileAt(e,2,0,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,te,te);for(let s=0;s<20;s++){t.fillStyle="#6D4C41";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,3,2)}}),this.drawTile(e,Se.STONE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<4;s++)t.strokeStyle="#757575",t.lineWidth=1,t.beginPath(),t.moveTo(i+Math.random()*te,r+Math.random()*te),t.quadraticCurveTo(i+Math.random()*te,r+Math.random()*te,i+Math.random()*te,r+Math.random()*te),t.stroke()}),this.drawTile(e,Se.SAND,(t,i,r)=>{t.fillStyle="#FDD835",t.fillRect(i,r,te,te);for(let s=0;s<6;s++){t.fillStyle="#F9A825";const o=r+Math.floor(Math.random()*te);t.fillRect(i,o,te,1)}}),this.drawTile(e,Se.SANDSTONE,(t,i,r)=>{t.fillStyle="#E8C86A",t.fillRect(i,r,te,te);for(let s=0;s<3;s++){t.fillStyle="#D4B04A";const o=r+Math.floor(Math.random()*te);t.fillRect(i,o,te,2)}}),this.drawTile(e,Se.SNOW,(t,i,r)=>{t.fillStyle="#FAFAFA",t.fillRect(i,r,te,te);for(let s=0;s<15;s++){t.fillStyle="#BBDEFB";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,2,2)}}),this.drawTile(e,Se.ICE,(t,i,r)=>{t.fillStyle="#B3E5FC",t.fillRect(i,r,te,te),t.fillStyle="#E1F5FE",t.fillRect(i+8,r+8,16,16)}),this.drawTile(e,Se.MUD,(t,i,r)=>{t.fillStyle="#4E342E",t.fillRect(i,r,te,te);for(let s=0;s<8;s++){t.fillStyle="#3E2723";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,4,3)}}),this.drawTile(e,Se.CRYSTAL,(t,i,r)=>{t.fillStyle="#7B1FA2",t.fillRect(i,r,te,te),t.strokeStyle="#FFFFFF",t.lineWidth=2,t.beginPath(),t.moveTo(i,r),t.lineTo(i+te,r+te),t.stroke(),t.beginPath(),t.moveTo(i+te,r),t.lineTo(i,r+te),t.stroke()}),this.drawTile(e,Se.GLOWSTONE,(t,i,r)=>{t.fillStyle="#FF8F00",t.fillRect(i,r,te,te),t.fillStyle="#FFD54F",t.fillRect(i+10,r+10,12,12),t.fillStyle="#FFFFFF",t.fillRect(i+14,r+14,4,4)}),this.drawTile(e,Se.LAVA,(t,i,r)=>{t.fillStyle="#E65100",t.fillRect(i,r,te,te),t.fillStyle="#FF6D00",t.fillRect(i+4,r+4,24,24),t.fillStyle="#FFAB00",t.fillRect(i+10,r+10,12,12)}),this.drawTile(e,Se.WOOD,(t,i,r)=>{t.fillStyle="#6D4C41",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#5D4037";const o=i+Math.floor(Math.random()*te);t.fillRect(o,r,1,te)}}),this.drawTile(e,Se.LEAVES,(t,i,r)=>{t.fillStyle="#2E7D32",t.fillRect(i,r,te,te);for(let s=0;s<30;s++){t.fillStyle="#1B5E20";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,3,3)}}),this.drawTile(e,Se.CACTUS,(t,i,r)=>{t.fillStyle="#2E7D32",t.fillRect(i,r,te,te),t.fillStyle="#1B5E20",t.fillRect(i+2,r,1,te),t.fillRect(i+te-3,r,1,te)}),this.drawTile(e,Se.BEDROCK,(t,i,r)=>{t.fillStyle="#212121",t.fillRect(i,r,te,te);for(let s=0;s<10;s++){t.fillStyle="#424242";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,4,3)}}),this.drawTile(e,Se.COAL_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#212121";const o=i+Math.floor(Math.random()*(te-4)),a=r+Math.floor(Math.random()*(te-4));t.fillRect(o,a,4,4)}}),this.drawTile(e,Se.IRON_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#E8C86A";const o=i+Math.floor(Math.random()*(te-3)),a=r+Math.floor(Math.random()*(te-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,Se.GOLD_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#FFD700";const o=i+Math.floor(Math.random()*(te-3)),a=r+Math.floor(Math.random()*(te-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,Se.DIAMOND_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#00BCD4";const o=i+Math.floor(Math.random()*(te-3)),a=r+Math.floor(Math.random()*(te-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,Se.PORTAL_FRAME,(t,i,r)=>{t.fillStyle="#6A1B9A",t.fillRect(i,r,te,te),t.strokeStyle="#CE93D8",t.lineWidth=2,t.strokeRect(i+4,r+4,te-8,te-8)}),this.drawTile(e,Se.PORTAL_ACTIVE,(t,i,r)=>{t.fillStyle="#AA00FF",t.fillRect(i,r,te,te);for(let s=0;s<10;s++){t.fillStyle="#E040FB";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,2,2)}}),this.drawTile(e,Se.LILY_PAD,(t,i,r)=>{t.fillStyle="#1B5E20",t.fillRect(i+4,r+4,te-8,te-8)}),this.drawTile(e,Se.SPRUCE_WOOD,(t,i,r)=>{t.fillStyle="#4E342E",t.fillRect(i,r,te,te);for(let s=0;s<6;s++){t.fillStyle="#3E2723";const o=i+Math.floor(Math.random()*te);t.fillRect(o,r,1,te)}}),this.drawTile(e,Se.SPRUCE_LEAVES,(t,i,r)=>{t.fillStyle="#1B5E20",t.fillRect(i,r,te,te);for(let s=0;s<20;s++){t.fillStyle="#0D3B0F";const o=i+Math.floor(Math.random()*te),a=r+Math.floor(Math.random()*te);t.fillRect(o,a,3,3)}}),this.drawTile(e,Se.PACKED_ICE,(t,i,r)=>{t.fillStyle="#81D4FA",t.fillRect(i,r,te,te);for(let s=0;s<5;s++){t.fillStyle="#B3E5FC";const o=i+Math.floor(Math.random()*(te-4)),a=r+Math.floor(Math.random()*(te-4));t.fillRect(o,a,4,4)}}),this.atlas=new ZT(this.canvas),this.atlas.magFilter=on,this.atlas.minFilter=on,this.atlas.wrapS=Fn,this.atlas.wrapT=Fn}drawTile(e,t,i){const r=Jh[t],s=r.atlasTileX*te,o=r.atlasTileY*te;i(e,s,o)}drawTileAt(e,t,i,r){const s=t*te,o=i*te;r(e,s,o)}getTexture(){return this.atlas||this.init(),this.atlas}}class qA{keys=new Map;mouseButtons=new Map;mouseDeltaX=0;mouseDeltaY=0;prevMouseDeltaX=0;prevMouseDeltaY=0;scrollDelta=0;prevScrollDelta=0;keyJustPressed=new Map;canvas=null;init(e){this.canvas=e,document.addEventListener("keydown",t=>{this.keys.get(t.code)||this.keyJustPressed.set(t.code,!0),this.keys.set(t.code,!0),["Space","Tab","KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight"].includes(t.code)&&t.preventDefault()}),document.addEventListener("keyup",t=>{this.keys.set(t.code,!1)}),document.addEventListener("mousedown",t=>{this.mouseButtons.set(t.button,!0)}),document.addEventListener("mouseup",t=>{this.mouseButtons.set(t.button,!1)}),document.addEventListener("mousemove",t=>{document.pointerLockElement===this.canvas&&(this.mouseDeltaX+=t.movementX,this.mouseDeltaY+=t.movementY)}),document.addEventListener("wheel",t=>{this.scrollDelta+=t.deltaY}),e.addEventListener("contextmenu",t=>t.preventDefault())}flush(){this.prevMouseDeltaX=this.mouseDeltaX,this.prevMouseDeltaY=this.mouseDeltaY,this.mouseDeltaX=0,this.mouseDeltaY=0,this.prevScrollDelta=this.scrollDelta,this.scrollDelta=0,this.keyJustPressed.clear()}isKeyDown(e){return this.keys.get(e)??!1}isKeyJustPressed(e){return this.keyJustPressed.get(e)??!1}isMouseButtonDown(e){return this.mouseButtons.get(e)??!1}getMouseDeltaX(){return this.prevMouseDeltaX}getMouseDeltaY(){return this.prevMouseDeltaY}getScrollDelta(){return this.prevScrollDelta}isPointerLocked(){return document.pointerLockElement===this.canvas}requestPointerLock(){this.canvas?.requestPointerLock()}exitPointerLock(){document.exitPointerLock()}destroy(){}}const $A=`
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
`;let $m=null,Bc=null;function ZA(){return Bc||($m=new Blob([$A],{type:"application/javascript"}),Bc=URL.createObjectURL($m)),new Worker(Bc)}class ed{chunkX;chunkZ;voxels;dirty=!0;constructor(e,t){this.chunkX=e,this.chunkZ=t,this.voxels=new Uint8Array(Ge*Un*Ge)}index(e,t,i){return e+i*Ge+t*Ge*Ge}getBlock(e,t,i){return e<0||e>=Ge||t<0||t>=Un||i<0||i>=Ge?0:this.voxels[this.index(e,t,i)]}setBlock(e,t,i,r){e<0||e>=Ge||t<0||t>=Un||i<0||i>=Ge||(this.voxels[this.index(e,t,i)]=r,this.dirty=!0)}getBlockWorld(e,t,i){const r=e-this.chunkX*Ge,s=i-this.chunkZ*Ge;return this.getBlock(r,t,s)}setBlockWorld(e,t,i,r){const s=e-this.chunkX*Ge,o=i-this.chunkZ*Ge;this.setBlock(s,t,o,r)}isOnEdge(e,t){return e===0||e===Ge-1||t===0||t===Ge-1}get worldX(){return this.chunkX*Ge}get worldZ(){return this.chunkZ*Ge}fill(e){this.voxels.fill(e)}}const o_=Math.sqrt(3),QA=.5*(o_-1),Mo=(3-o_)/6,JA=1/3,pi=1/6,zo=n=>Math.floor(n)|0,Zm=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),Hc=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function Qm(n=Math.random){const e=a_(n),t=new Float64Array(e).map(r=>Zm[r%12*2]),i=new Float64Array(e).map(r=>Zm[r%12*2+1]);return function(s,o){let a=0,l=0,u=0;const f=(s+o)*QA,c=zo(s+f),d=zo(o+f),p=(c+d)*Mo,g=c-p,y=d-p,m=s-g,h=o-y;let v,_;m>h?(v=1,_=0):(v=0,_=1);const S=m-v+Mo,w=h-_+Mo,A=m-1+2*Mo,T=h-1+2*Mo,F=c&255,M=d&255;let C=.5-m*m-h*h;if(C>=0){const ie=F+e[M],U=t[ie],G=i[ie];C*=C,a=C*C*(U*m+G*h)}let H=.5-S*S-w*w;if(H>=0){const ie=F+v+e[M+_],U=t[ie],G=i[ie];H*=H,l=H*H*(U*S+G*w)}let q=.5-A*A-T*T;if(q>=0){const ie=F+1+e[M+1],U=t[ie],G=i[ie];q*=q,u=q*q*(U*A+G*T)}return 70*(a+l+u)}}function Jm(n=Math.random){const e=a_(n),t=new Float64Array(e).map(s=>Hc[s%12*3]),i=new Float64Array(e).map(s=>Hc[s%12*3+1]),r=new Float64Array(e).map(s=>Hc[s%12*3+2]);return function(o,a,l){let u,f,c,d;const p=(o+a+l)*JA,g=zo(o+p),y=zo(a+p),m=zo(l+p),h=(g+y+m)*pi,v=g-h,_=y-h,S=m-h,w=o-v,A=a-_,T=l-S;let F,M,C,H,q,ie;w>=A?A>=T?(F=1,M=0,C=0,H=1,q=1,ie=0):w>=T?(F=1,M=0,C=0,H=1,q=0,ie=1):(F=0,M=0,C=1,H=1,q=0,ie=1):A<T?(F=0,M=0,C=1,H=0,q=1,ie=1):w<T?(F=0,M=1,C=0,H=0,q=1,ie=1):(F=0,M=1,C=0,H=1,q=1,ie=0);const U=w-F+pi,G=A-M+pi,Q=T-C+pi,ne=w-H+2*pi,O=A-q+2*pi,V=T-ie+2*pi,X=w-1+3*pi,ee=A-1+3*pi,se=T-1+3*pi,Z=g&255,re=y&255,ve=m&255;let we=.6-w*w-A*A-T*T;if(we<0)u=0;else{const Re=Z+e[re+e[ve]];we*=we,u=we*we*(t[Re]*w+i[Re]*A+r[Re]*T)}let Ae=.6-U*U-G*G-Q*Q;if(Ae<0)f=0;else{const Re=Z+F+e[re+M+e[ve+C]];Ae*=Ae,f=Ae*Ae*(t[Re]*U+i[Re]*G+r[Re]*Q)}let Ve=.6-ne*ne-O*O-V*V;if(Ve<0)c=0;else{const Re=Z+H+e[re+q+e[ve+ie]];Ve*=Ve,c=Ve*Ve*(t[Re]*ne+i[Re]*O+r[Re]*V)}let Xe=.6-X*X-ee*ee-se*se;if(Xe<0)d=0;else{const Re=Z+1+e[re+1+e[ve+1]];Xe*=Xe,d=Xe*Xe*(t[Re]*X+i[Re]*ee+r[Re]*se)}return 32*(u+f+c+d)}}function a_(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}let l_=0;function eC(n){l_=n}function tC(){let n=l_;return()=>(n=n*1664525+1013904223&4294967295,(n>>>0)/4294967295)}let u_,c_,f_,h_;function nC(){const n=tC();u_=Qm(n),c_=Jm(n),f_=Jm(n),h_=Qm(n)}function d_(){return u_}function cl(){return c_}function iC(){return f_}function eg(){return h_}class rC{seed;constructor(e){this.seed=e}generateChunk(e,t){const i=e.chunkX,r=e.chunkZ;for(let s=0;s<Ge;s++)for(let o=0;o<Ge;o++){const a=i*Ge+s,l=r*Ge+o,u=s+o*Ge,f=t[u],c=this.getHeight(a,l,f),d=Math.floor(c);for(let p=0;p<Un;p++){let g=Se.AIR;p===0?g=Se.BEDROCK:p<6?cl()(a*.1,p*.1,l*.1)>.55?g=Se.LAVA:cl()(a*.15,p*.15,l*.15+100)>.65?g=Se.GLOWSTONE:g=Se.STONE:p<=d?this.isCave(a,p,l)?p<6?g=Se.LAVA:g=Se.AIR:(g=Se.STONE,p===d?g=this.getSurfaceBlock(f):p>d-4&&(g=this.getSubSurfaceBlock(f)),g===Se.STONE&&(g=this.getOre(a,p,l))):p<=br&&p>d&&(f===it.TUNDRA?g=Se.ICE:g=Se.WATER),e.setBlock(s,p,o,g)}}e.dirty=!1}getHeight(e,t,i){const r=d_(),s=br;let o=12;switch(i){case it.PLAINS:o=12;break;case it.DESERT:o=8;break;case it.TUNDRA:o=4;break;case it.MARSH:o=3;break;case it.CRYSTAL_CAVERNS:o=10;break}const a=r(e*.005,t*.005)*o,l=r(e*.02,t*.02)*o*.3,u=r(e*.05,t*.05)*o*.1;return s+a+l+u}isCave(e,t,i){if(t<=0)return!1;const r=cl(),s=iC(),o=r(e*.04,t*.04,i*.04),a=s(e*.04+500,t*.04,i*.04+500);let l=o>.42&&a>.42;if(t<20){const u=1+(20-t)*.02,f=r(e*.04,t*.04*u,i*.04),c=s(e*.04+500,t*.04*u,i*.04+500);l=f>.35&&c>.35}return l}getSurfaceBlock(e){switch(e){case it.PLAINS:return Se.GRASS;case it.DESERT:return Se.SAND;case it.TUNDRA:return Se.SNOW;case it.MARSH:return Se.MUD;case it.CRYSTAL_CAVERNS:return Se.CRYSTAL;default:return Se.GRASS}}getSubSurfaceBlock(e){switch(e){case it.PLAINS:return Se.DIRT;case it.DESERT:return Se.SANDSTONE;case it.TUNDRA:return Se.DIRT;case it.MARSH:return Se.MUD;case it.CRYSTAL_CAVERNS:return Se.STONE;default:return Se.DIRT}}getOre(e,t,i){const r=cl();return t<50&&r(e*.15+1e3,t*.15,i*.15+1e3)>.75?Se.COAL_ORE:t<40&&r(e*.15+2e3,t*.15,i*.15+2e3)>.82?Se.IRON_ORE:t<25&&r(e*.15+3e3,t*.15,i*.15+3e3)>.9?Se.GOLD_ORE:t<12&&r(e*.15+4e3,t*.15,i*.15+4e3)>.96?Se.DIAMOND_ORE:Se.STONE}generateChunkRaw(e,t,i){const r=new ed(e,t);return this.generateChunk(r,i),r}}class sC{generateBiomeMap(e,t){const i=new Array(Ge*Ge),r=eg();for(let s=0;s<Ge;s++)for(let o=0;o<Ge;o++){const a=e*Ge+s,l=t*Ge+o,u=r(a*.002,l*.002),f=r(a*.003+5e3,l*.003+5e3);i[s+o*Ge]=this.getBiome(u,f)}return i}getBiome(e,t){return e<-.3?it.TUNDRA:e>.4&&t<-.1?it.DESERT:t>.35?it.MARSH:e>.2&&t>0?it.CRYSTAL_CAVERNS:it.PLAINS}getBiomeAt(e,t){const i=eg(),r=i(e*.002,t*.002),s=i(e*.003+5e3,t*.003+5e3);return this.getBiome(r,s)}}class oC{generateStructures(e,t){const i=d_(),r=e.chunkX,s=e.chunkZ;for(let o=2;o<Ge-2;o++)for(let a=2;a<Ge-2;a++){const l=r*Ge+o,u=s*Ge+a,f=t[o+a*Ge];let c=-1;for(let g=Un-1;g>=0;g--){const y=e.getBlock(o,g,a);if(y!==Se.AIR&&y!==Se.WATER&&y!==Se.ICE){c=g;break}}if(c<1||c>Un-10)continue;const d=i(l*.5,u*.5),p=this.getTreeDensity(f);if(d>1-p*2)switch(f){case it.PLAINS:this.placeOakTree(e,o,c+1,a);break;case it.DESERT:this.placeCactus(e,o,c+1,a);break;case it.TUNDRA:this.placeSpruceTree(e,o,c+1,a);break;case it.CRYSTAL_CAVERNS:this.placeCrystalPillar(e,o,c+1,a);break}}}getTreeDensity(e){switch(e){case it.PLAINS:return .02;case it.DESERT:return .008;case it.TUNDRA:return .01;case it.MARSH:return 0;case it.CRYSTAL_CAVERNS:return .012;default:return 0}}placeOakTree(e,t,i,r){const s=5+Math.floor(Math.random()*3);for(let a=0;a<s;a++)i+a<Un&&e.setBlock(t,i+a,r,Se.WOOD);const o=s-3;for(let a=o;a<=s+1;a++){const l=a<=s-1?2:1;for(let u=-l;u<=l;u++)for(let f=-l;f<=l;f++){if(u===0&&f===0&&a<s||Math.abs(u)+Math.abs(f)>l+1)continue;const c=t+u,d=i+a,p=r+f;c>=0&&c<Ge&&d>=0&&d<Un&&p>=0&&p<Ge&&e.getBlock(c,d,p)===Se.AIR&&e.setBlock(c,d,p,Se.LEAVES)}}}placeSpruceTree(e,t,i,r){const s=6+Math.floor(Math.random()*3);for(let o=0;o<s;o++)i+o<Un&&e.setBlock(t,i+o,r,Se.SPRUCE_WOOD);for(let o=2;o<=s;o++){const a=s-o,l=Math.min(Math.floor(a/2)+1,2);for(let u=-l;u<=l;u++)for(let f=-l;f<=l;f++){if(u===0&&f===0&&o<s)continue;const c=t+u,d=i+o,p=r+f;c>=0&&c<Ge&&d>=0&&d<Un&&p>=0&&p<Ge&&e.getBlock(c,d,p)===Se.AIR&&e.setBlock(c,d,p,Se.SPRUCE_LEAVES)}}}placeCactus(e,t,i,r){const s=2+Math.floor(Math.random()*3);for(let o=0;o<s;o++)i+o<Un&&e.setBlock(t,i+o,r,Se.CACTUS)}placeCrystalPillar(e,t,i,r){const s=3+Math.floor(Math.random()*6);for(let o=0;o<s;o++)i+o<Un&&e.setBlock(t,i+o,r,Se.CRYSTAL)}}class aC{chunks=new Map;terrainGenerator;biomeGenerator;structureGenerator;dirtyQueue=new Set;seed;constructor(e){this.seed=e,this.terrainGenerator=new rC(e),this.biomeGenerator=new sC,this.structureGenerator=new oC}chunkKey(e,t){return`${e},${t}`}getChunk(e,t){return this.chunks.get(this.chunkKey(e,t))}getBlock(e,t,i){const r=Math.floor(e/Ge),s=Math.floor(i/Ge),o=this.chunks.get(this.chunkKey(r,s));return o?o.getBlockWorld(e,t,i):0}setBlock(e,t,i,r){const s=Math.floor(e/Ge),o=Math.floor(i/Ge),a=this.chunks.get(this.chunkKey(s,o));if(!a)return;a.setBlockWorld(e,t,i,r),this.dirtyQueue.add(this.chunkKey(s,o));const l=e-s*Ge,u=i-o*Ge;l===0&&this.dirtyQueue.add(this.chunkKey(s-1,o)),l===Ge-1&&this.dirtyQueue.add(this.chunkKey(s+1,o)),u===0&&this.dirtyQueue.add(this.chunkKey(s,o-1)),u===Ge-1&&this.dirtyQueue.add(this.chunkKey(s,o+1))}getBiomeAt(e,t){return this.biomeGenerator.getBiomeAt(e,t)}update(e,t){const i=Math.floor(e/Ge),r=Math.floor(t/Ge);for(let l=-Mr;l<=Mr;l++)for(let u=-Mr;u<=Mr;u++){if(l*l+u*u>Mr*Mr)continue;const f=i+l,c=r+u,d=this.chunkKey(f,c);if(!this.chunks.has(d)){const p=new ed(f,c),g=this.biomeGenerator.generateBiomeMap(f,c);this.terrainGenerator.generateChunk(p,g),this.structureGenerator.generateStructures(p,g),this.chunks.set(d,p),this.dirtyQueue.add(d)}}const s=Mr+2;for(const[l,u]of this.chunks){const f=u.chunkX-i,c=u.chunkZ-r;f*f+c*c>s*s&&(this.chunks.delete(l),this.dirtyQueue.delete(l))}const o=[];let a=0;for(const l of this.dirtyQueue){if(a>=zA)break;o.push(l),this.dirtyQueue.delete(l),a++}return o}getDirtyChunkKeys(){return this.dirtyQueue}markDirty(e,t){this.dirtyQueue.add(this.chunkKey(e,t))}getAllChunks(){return this.chunks}getTerrainGenerator(){return this.terrainGenerator}getBiomeGenerator(){return this.biomeGenerator}getSeed(){return this.seed}getNeighborVoxels(e,t){return[this.chunks.get(this.chunkKey(e+1,t))?.voxels??null,this.chunks.get(this.chunkKey(e-1,t))?.voxels??null,this.chunks.get(this.chunkKey(e,t+1))?.voxels??null,this.chunks.get(this.chunkKey(e,t-1))?.voxels??null]}}function tg(n,e,t,i,r,s){return{minX:n-i,minY:e-r,minZ:t-s,maxX:n+i,maxY:e+r,maxZ:t+s}}function lC(n,e){return n.minX<e.maxX&&n.maxX>e.minX&&n.minY<e.maxY&&n.maxY>e.minY&&n.minZ<e.maxZ&&n.maxZ>e.minZ}function td(n,e,t,i){const r=e.x,s=e.y,o=e.z;let a=Math.floor(n.x),l=Math.floor(n.y),u=Math.floor(n.z);const f=r>0?1:-1,c=s>0?1:-1,d=o>0?1:-1,p=r!==0?Math.abs(1/r):1/0,g=s!==0?Math.abs(1/s):1/0,y=o!==0?Math.abs(1/o):1/0;let m=r!==0?(r>0?a+1-n.x:n.x-a)*p:1/0,h=s!==0?(s>0?l+1-n.y:n.y-l)*g:1/0,v=o!==0?(o>0?u+1-n.z:n.z-u)*y:1/0,_=a,S=l,w=u,A=0;for(let T=0;T<t*3;T++){if(i(a,l,u))return{hit:!0,blockX:a,blockY:l,blockZ:u,prevX:_,prevY:S,prevZ:w,normalX:_-a,normalY:S-l,normalZ:w-u,distance:A};if(_=a,S=l,w=u,m<h)if(m<v){if(A=m,A>t)break;a+=f,m+=p}else{if(A=v,A>t)break;u+=d,v+=y}else if(h<v){if(A=h,A>t)break;l+=c,h+=g}else{if(A=v,A>t)break;u+=d,v+=y}}return{hit:!1,blockX:a,blockY:l,blockZ:u,prevX:_,prevY:S,prevZ:w,normalX:0,normalY:0,normalZ:0,distance:A}}class Gc{position={x:0,y:40,z:0};velocity={x:0,y:0,z:0};yaw=0;pitch=0;onGround=!1;isSwimming=!1;isSprinting=!1;isDiving=!1;inputAccel={x:0,y:0,z:0};getBlock;constructor(e){this.getBlock=e}getAABB(){return tg(this.position.x,this.position.y+jm/2,this.position.z,Ym/2,jm/2,Ym/2)}getEyePosition(){return{x:this.position.x,y:this.position.y+Km,z:this.position.z}}getLookDirection(){return{x:-Math.sin(this.yaw)*Math.cos(this.pitch),y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*Math.cos(this.pitch)}}static findSurfaceY(e,t,i){for(let s=0;s<=16;s++)for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++){if(Math.abs(o)!==s&&Math.abs(a)!==s&&s>0)continue;const l=Math.floor(t)+o,u=Math.floor(i)+a;for(let f=br+1;f<64;f++){const c=e(l,f,u);if(Xn(c)){const d=e(l,f+1,u),p=e(l,f+2,u);if(!Xn(d)&&!Xn(p))return f+1}}}for(let s=63;s>=0;s--){const o=e(Math.floor(t),s,Math.floor(i));if(Xn(o))return Math.max(s+1,br+1)}return br+2}static findLandSpawn(e,t,i){for(let s=0;s<=32;s++)for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++){if(Math.abs(o)!==s&&Math.abs(a)!==s&&s>0)continue;const l=Math.floor(t)+o,u=Math.floor(i)+a;for(let f=br+1;f<64;f++){const c=e(l,f,u);if(Xn(c)){const d=e(l,f+1,u),p=e(l,f+2,u);if(!Xn(d)&&!Xn(p))return{x:l+.5,y:f+1,z:u+.5}}}}return{x:t+.5,y:br+2,z:i+.5}}isInWater(e,t,i){return this.getBlock(Math.floor(e),Math.floor(t),Math.floor(i))===Se.WATER}getWaterSurfaceY(){for(let e=63;e>=0;e--)if(this.getBlock(Math.floor(this.position.x),e,Math.floor(this.position.z))===Se.WATER&&this.getBlock(Math.floor(this.position.x),e+1,Math.floor(this.position.z))!==Se.WATER)return e+1;return-1/0}update(e){const t=this.position.y+.1,i=this.position.y+1,r=this.position.y+Km,s=this.isInWater(this.position.x,t,this.position.z),o=this.isInWater(this.position.x,i,this.position.z),a=this.isInWater(this.position.x,r,this.position.z);this.isSwimming=o||a,this.isSwimming?this.updateSwimming(e,a):s?(this.velocity.y+=Xm*e,this.velocity.y=Math.max(this.velocity.y,-50),this.velocity.x*=Math.max(0,1-1.5*e),this.velocity.z*=Math.max(0,1-1.5*e)):(this.velocity.y+=Xm*e,this.velocity.y=Math.max(this.velocity.y,-50)),this.moveWithCollision(e)}updateSwimming(e,t){const i=this.getWaterSurfaceY(),r=4;this.velocity.x*=Math.max(0,1-r*e),this.velocity.y*=Math.max(0,1-r*e),this.velocity.z*=Math.max(0,1-r*e),this.velocity.x+=this.inputAccel.x*e,this.velocity.y+=this.inputAccel.y*e,this.velocity.z+=this.inputAccel.z*e;const s=i-this.position.y;if(s>0){const l=Math.min(12,4+s*2);this.velocity.y+=l*e}this.position.y>=i-.5&&this.velocity.y>0&&!t&&(this.velocity.y*=.8,this.position.y+this.velocity.y*e>i&&(this.velocity.y=Math.min(this.velocity.y,1)));const o=3.5,a=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z);a>o&&(this.velocity.x*=o/a,this.velocity.z*=o/a),this.velocity.y=Math.max(-5,Math.min(this.velocity.y,4)),this.onGround=!1}moveWithCollision(e){const t=this.velocity.x*e,i=this.velocity.y*e,r=this.velocity.z*e;this.position.x+=t,this.checkCollision()&&(this.tryStepUp(t,0,0)||(this.position.x-=t,this.velocity.x=0)),this.position.y+=i,this.checkCollision()?(this.position.y-=i,i<0&&(this.onGround=!0),this.velocity.y=0):this.isSwimming||(this.onGround=!1),this.position.z+=r,this.checkCollision()&&(this.tryStepUp(0,0,r)||(this.position.z-=r,this.velocity.z=0))}tryStepUp(e,t,i){if(Math.sqrt(e*e+i*i)<.001)return!1;const o=this.isInWater(this.position.x,this.position.y+.5,this.position.z)||this.isInWater(this.position.x,this.position.y+1.5,this.position.z)||this.isInWater(this.position.x,this.position.y-.5,this.position.z)?1.1:.6,a=this.position.y;return this.position.y+=o,this.checkCollision()?(this.position.y=a,!1):!0}checkCollision(){const e=this.getAABB(),t=Math.floor(e.minX),i=Math.floor(e.maxX),r=Math.floor(e.minY),s=Math.floor(e.maxY),o=Math.floor(e.minZ),a=Math.floor(e.maxZ);for(let l=t;l<=i;l++)for(let u=r;u<=s;u++)for(let f=o;f<=a;f++)if(Xn(this.getBlock(l,u,f))){const c=tg(l+.5,u+.5,f+.5,.5,.5,.5);if(lC(e,c))return!0}return!1}jump(){this.isSwimming?this.velocity.y=3.5:this.onGround&&(this.velocity.y=8.5,this.onGround=!1)}dive(){this.isSwimming&&(this.velocity.y=-3.5)}}class uC{player;input;renderer;walkSpeed=4.317;sprintSpeed=5.612;swimSpeed=2.8;swimAccel=18;mouseSensitivity=.002;targetFov=75;currentFov=75;constructor(e,t,i){this.player=e,this.input=t,this.renderer=i,i.getDomElement().addEventListener("click",()=>{t.isPointerLocked()||t.requestPointerLock()})}update(e){this.input.isPointerLocked()&&(this.player.yaw-=this.input.getMouseDeltaX()*this.mouseSensitivity,this.player.pitch-=this.input.getMouseDeltaY()*this.mouseSensitivity,this.player.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.player.pitch))),this.player.isSprinting=this.input.isKeyDown("ShiftLeft")&&!this.player.isSwimming;const t={x:-Math.sin(this.player.yaw),z:-Math.cos(this.player.yaw)},i={x:Math.cos(this.player.yaw),z:-Math.sin(this.player.yaw)};let r=0,s=0;this.input.isKeyDown("KeyW")&&(r+=t.x,s+=t.z),this.input.isKeyDown("KeyS")&&(r-=t.x,s-=t.z),this.input.isKeyDown("KeyA")&&(r-=i.x,s-=i.z),this.input.isKeyDown("KeyD")&&(r+=i.x,s+=i.z);const o=Math.sqrt(r*r+s*s);if(this.player.isSwimming){o>0&&(r=r/o*this.swimAccel,s=s/o*this.swimAccel);let l=0;this.input.isKeyDown("Space")&&(l=this.swimAccel*.8),this.input.isKeyDown("ShiftLeft")&&(l=-this.swimAccel*.6),this.player.inputAccel={x:r,y:l,z:s}}else{const l=this.player.isSprinting?this.sprintSpeed:this.walkSpeed;o>0&&(r=r/o*l,s=s/o*l),this.player.velocity.x=r,this.player.velocity.z=s,this.player.inputAccel={x:0,y:0,z:0},this.input.isKeyDown("Space")&&this.player.jump()}this.targetFov=this.player.isSprinting?82:75,this.currentFov+=(this.targetFov-this.currentFov)*e*8,this.renderer.setFOV(this.currentFov);const a=this.player.getEyePosition();this.renderer.setMainCameraPosition(a.x,a.y,a.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch)}}class cC{player;input;renderer;headBobPhase=0;headBobAmplitude=.035;shakeIntensity=0;constructor(e,t,i){this.player=e,this.input=t,this.renderer=i}update(e){const t=this.player.velocity;if(Math.sqrt(t.x*t.x+t.z*t.z)>.5&&(this.player.onGround||this.player.isSwimming)){const s=this.player.isSprinting?11:8;this.headBobPhase+=e*s;const o=Math.sin(this.headBobPhase)*this.headBobAmplitude,a=Math.cos(this.headBobPhase*.5)*this.headBobAmplitude*.4,l=this.player.getEyePosition();this.renderer.setMainCameraPosition(l.x+a,l.y+o,l.z)}this.shakeIntensity*=.9}addShake(e){this.shakeIntensity=Math.min(this.shakeIntensity+e,.3)}}class fC{player;input;worldManager;survivalStats=null;breakProgress=0;targetBlock=null;constructor(e,t,i){this.player=e,this.input=t,this.worldManager=i}setSurvivalStats(e){this.survivalStats=e}update(e){if(!this.input.isPointerLocked())return;const t=this.player.getEyePosition(),i=this.player.getLookDirection();if(this.targetBlock=td(t,i,BA,(r,s,o)=>Xn(this.worldManager.getBlock(r,s,o))),this.input.isMouseButtonDown(0)&&this.targetBlock.hit){const r=this.worldManager.getBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ),s=Jh[r];s&&s.hardness>0&&(this.breakProgress+=e/s.hardness,this.breakProgress>=1&&(this.worldManager.setBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ,Se.AIR),this.breakProgress=0))}else this.breakProgress=0;if(this.input.isKeyJustPressed("KeyE")&&this.targetBlock.hit){const r=this.targetBlock.prevX,s=this.targetBlock.prevY,o=this.targetBlock.prevZ,a=this.player.getAABB(),l={minX:r,minY:s,minZ:o,maxX:r+1,maxY:s+1,maxZ:o+1};!(a.maxX<l.minX||a.minX>l.maxX||a.maxY<l.minY||a.minY>l.maxY||a.maxZ<l.minZ||a.minZ>l.maxZ)||this.worldManager.setBlock(r,s,o,Se.STONE)}this.input.isKeyJustPressed("KeyF")&&this.targetBlock.hit&&this.worldManager.getBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ)===Se.WATER&&this.survivalStats&&this.survivalStats.addThirst(15)}getBreakProgress(){return this.breakProgress}getTargetBlock(){return this.targetBlock}}class hC{health=100;hunger=100;thirst=100;stamina=100;temperature=.2;mana=100;maxMana=100;isDead=!1;currentBiome=it.PLAINS;isSprinting=!1;update(e){if(this.isDead)return;this.hunger-=1*e/60,this.thirst-=1.5*e/60,this.isSprinting?this.stamina-=20*e:this.stamina+=10*e;const t=s_[this.currentBiome].temperature;this.temperature+=(t-this.temperature)*e*.1,this.mana=Math.min(this.maxMana,this.mana+5*e),this.hunger=Math.max(0,Math.min(100,this.hunger)),this.thirst=Math.max(0,Math.min(100,this.thirst)),this.stamina=Math.max(0,Math.min(100,this.stamina)),this.hunger<20&&(this.health-=2*e),this.thirst<20&&(this.health-=2*e),this.health=Math.max(0,Math.min(100,this.health)),this.health<=0&&(this.isDead=!0)}setBiome(e){this.currentBiome=e}setSprinting(e){this.isSprinting=e}canSprint(){return this.stamina>=5}addThirst(e){this.thirst=Math.min(100,this.thirst+e)}addHealth(e){this.health=Math.min(100,this.health+e)}respawn(){this.health=100,this.hunger=100,this.thirst=100,this.stamina=100,this.isDead=!1}}var bt=(n=>(n[n.IDLE=0]="IDLE",n[n.WANDER=1]="WANDER",n[n.CHASE=2]="CHASE",n[n.ATTACK=3]="ATTACK",n[n.DEAD=4]="DEAD",n))(bt||{}),Mt=(n=>(n[n.CRAWLER=0]="CRAWLER",n[n.SLIME=1]="SLIME",n[n.ASH_WRAITH=2]="ASH_WRAITH",n[n.CRYSTAL_GOLEM=3]="CRYSTAL_GOLEM",n[n.FROST_WOLF=4]="FROST_WOLF",n))(Mt||{});const ng={0:{maxHp:20,attackDamage:6,attackCooldown:1,wanderSpeed:1.5,chaseSpeed:4,aggroRange:16,deaggroRange:24,hitboxWidth:.6,hitboxHeight:.4},1:{maxHp:16,attackDamage:4,attackCooldown:1.5,wanderSpeed:1,chaseSpeed:3,aggroRange:12,deaggroRange:20,hitboxWidth:.8,hitboxHeight:.8},2:{maxHp:40,attackDamage:12,attackCooldown:1.2,wanderSpeed:2,chaseSpeed:5.5,aggroRange:20,deaggroRange:30,hitboxWidth:.6,hitboxHeight:1.6},3:{maxHp:80,attackDamage:20,attackCooldown:2,wanderSpeed:.8,chaseSpeed:2.5,aggroRange:14,deaggroRange:22,hitboxWidth:1,hitboxHeight:2},4:{maxHp:35,attackDamage:10,attackCooldown:.8,wanderSpeed:3,chaseSpeed:7,aggroRange:20,deaggroRange:32,hitboxWidth:.7,hitboxHeight:.8}};class da{type;hp;maxHp;state=bt.IDLE;position;target={x:0,y:0,z:0};instanceId=-1;stateTimer=0;attackCooldownTimer=0;deadTimer=0;constructor(e,t){this.type=e;const i=ng[e];this.hp=i.maxHp,this.maxHp=i.maxHp,this.position={...t},this.stateTimer=3+Math.random()*5}updateFSM(e,t,i){if(this.state===bt.DEAD){this.deadTimer+=e;return}const r=ng[this.type],s=Math.sqrt((this.position.x-t.x)**2+(this.position.y-t.y)**2+(this.position.z-t.z)**2);switch(this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-e),this.stateTimer-=e,this.state){case bt.IDLE:this.stateTimer<=0&&(this.state=bt.WANDER,this.stateTimer=3+Math.random()*5,this.target={x:this.position.x+(Math.random()-.5)*10,y:this.position.y,z:this.position.z+(Math.random()-.5)*10}),s<r.aggroRange&&i(this.position,t)&&(this.state=bt.CHASE);break;case bt.WANDER:this.stateTimer<=0&&(this.state=bt.IDLE,this.stateTimer=2+Math.random()*6),s<r.aggroRange&&i(this.position,t)&&(this.state=bt.CHASE);break;case bt.CHASE:this.target={...t},s<1.5&&(this.state=bt.ATTACK),s>r.deaggroRange&&(this.state=bt.WANDER,this.stateTimer=3+Math.random()*4,this.target={x:this.position.x+(Math.random()-.5)*10,y:this.position.y,z:this.position.z+(Math.random()-.5)*10});break;case bt.ATTACK:this.attackCooldownTimer<=0&&(this.attackCooldownTimer=this.getAttackCooldown(),this.state=bt.CHASE),s>2&&(this.state=bt.CHASE);break}this.hp<=0&&(this.state=bt.DEAD,this.deadTimer=0)}getSpeed(){switch(this.state){case bt.WANDER:return this.getWanderSpeed();case bt.CHASE:return this.getChaseSpeed();default:return 0}}takeDamage(e){this.hp-=e,this.hp<=0&&(this.hp=0,this.state=bt.DEAD,this.deadTimer=0)}}class dC extends da{constructor(e){super(Mt.CRAWLER,e)}getAttackDamage(){return 6}getAttackCooldown(){return 1}getWanderSpeed(){return 1.5}getChaseSpeed(){return 4}onDeath(){}}class pC extends da{constructor(e){super(Mt.SLIME,e)}getAttackDamage(){return 4}getAttackCooldown(){return 1.5}getWanderSpeed(){return 1}getChaseSpeed(){return 3}onDeath(){}}class mC extends da{constructor(e){super(Mt.ASH_WRAITH,e)}getAttackDamage(){return 12}getAttackCooldown(){return 1.2}getWanderSpeed(){return 2}getChaseSpeed(){return 5.5}onDeath(){}}class gC extends da{constructor(e){super(Mt.CRYSTAL_GOLEM,e)}getAttackDamage(){return 20}getAttackCooldown(){return 2}getWanderSpeed(){return .8}getChaseSpeed(){return 2.5}onDeath(){}}class vC extends da{constructor(e){super(Mt.FROST_WOLF,e)}getAttackDamage(){return 10}getAttackCooldown(){return .8}getWanderSpeed(){return 3}getChaseSpeed(){return 7}onDeath(){}}class nd{static table={[Mt.CRAWLER]:[{itemId:106,minCount:1,maxCount:3,chance:.5},{itemId:102,minCount:1,maxCount:2,chance:.3}],[Mt.SLIME]:[{itemId:112,minCount:1,maxCount:1,chance:1}],[Mt.ASH_WRAITH]:[{itemId:108,minCount:2,maxCount:4,chance:.4},{itemId:104,minCount:1,maxCount:1,chance:.25}],[Mt.CRYSTAL_GOLEM]:[{itemId:109,minCount:3,maxCount:6,chance:.7},{itemId:105,minCount:1,maxCount:1,chance:.2}],[Mt.FROST_WOLF]:[{itemId:110,minCount:1,maxCount:2,chance:.6},{itemId:111,minCount:1,maxCount:2,chance:.5}]};static rollLoot(e){const t=nd.table[e]||[],i=[];for(const r of t)if(Math.random()<r.chance){const s=r.minCount+Math.floor(Math.random()*(r.maxCount-r.minCount+1));i.push({itemId:r.itemId,count:s})}return i}}class _C{creatures=[];frameCount=0;instancedMeshes=new Map;getBlock;playerPos={x:0,y:0,z:0};onLootDrop=null;constructor(e,t){this.getBlock=t;const i={[Mt.CRAWLER]:5025616,[Mt.SLIME]:7798531,[Mt.ASH_WRAITH]:16733986,[Mt.CRYSTAL_GOLEM]:10233776,[Mt.FROST_WOLF]:9489145};for(const r of[Mt.CRAWLER,Mt.SLIME,Mt.ASH_WRAITH,Mt.CRYSTAL_GOLEM,Mt.FROST_WOLF]){const s=new eo(.6,.6,.6),o=new Q0({color:i[r]}),a=new Z0(s,o,qm);a.count=0,a.frustumCulled=!1,e.add(a),this.instancedMeshes.set(r,a)}}setPlayerPosition(e){this.playerPos=e}setOnLootDrop(e){this.onLootDrop=e}spawnCreature(e,t){if(this.creatures.length>=qm*5)return;let i;switch(e){case Mt.CRAWLER:i=new dC(t);break;case Mt.SLIME:i=new pC(t);break;case Mt.ASH_WRAITH:i=new mC(t);break;case Mt.CRYSTAL_GOLEM:i=new gC(t);break;case Mt.FROST_WOLF:i=new vC(t);break;default:return}this.creatures.push(i)}update(e){this.frameCount++;const t=this.frameCount%HA===0,i=(r,s)=>{const o={x:s.x-r.x,y:s.y-r.y,z:s.z-r.z},a=Math.sqrt(o.x*o.x+o.y*o.y+o.z*o.z);return a===0?!0:(o.x/=a,o.y/=a,o.z/=a,!td(r,o,a,(u,f,c)=>Xn(this.getBlock(u,f,c))).hit)};for(let r=this.creatures.length-1;r>=0;r--){const s=this.creatures[r];t&&s.updateFSM(e,this.playerPos,i);const o=s.getSpeed()*e;if(o>0&&s.state!==bt.DEAD&&s.state!==bt.IDLE){const a=s.target.x-s.position.x,l=s.target.z-s.position.z,u=Math.sqrt(a*a+l*l);u>.5&&(s.position.x+=a/u*o,s.position.z+=l/u*o)}if(s.state===bt.DEAD&&s.deadTimer>.5){const a=nd.rollLoot(s.type);if(this.onLootDrop)for(const l of a)this.onLootDrop(l.itemId,l.count);s.onDeath(),this.creatures.splice(r,1)}}this.updateInstancedMeshes()}updateInstancedMeshes(){const e=new Xt;for(const[t,i]of this.instancedMeshes){const r=this.creatures.filter(s=>s.type===t&&s.state!==bt.DEAD);i.count=r.length;for(let s=0;s<r.length;s++){const o=r[s];if(e.position.set(o.position.x,o.position.y,o.position.z),o.state===bt.DEAD){const a=Math.max(0,1-o.deadTimer*2);e.scale.set(1,a,1)}else e.scale.set(1,1,1);e.updateMatrix(),i.setMatrixAt(s,e.matrix)}i.instanceMatrix.needsUpdate=!0}}getCreatures(){return this.creatures}getCreatureAt(e,t,i){for(const r of this.creatures){const s=r.position.x-e,o=r.position.z-t;if(s*s+o*o<i*i)return r}return null}}class yC{bullets=[];mesh;ringIndex=0;constructor(e){const t=new wu(.05,4,4),i=new Kh({color:16739584});this.mesh=new Z0(t,i,zc),this.mesh.count=0,this.mesh.frustumCulled=!1,e.add(this.mesh);for(let r=0;r<zc;r++)this.bullets.push({x:0,y:-1e3,z:0,vx:0,vy:0,vz:0,alive:!1,life:0})}fire(e,t,i=80){const r=this.bullets[this.ringIndex];r.x=e.x,r.y=e.y,r.z=e.z,r.vx=t.x*i,r.vy=t.y*i,r.vz=t.z*i,r.alive=!0,r.life=3,this.ringIndex=(this.ringIndex+1)%zc}update(e,t){const i=new Xt;let r=0;for(const s of this.bullets)if(s.alive){if(s.life-=e,s.life<=0){s.alive=!1;continue}if(s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,t(s.x,s.y,s.z)){s.alive=!1;continue}i.position.set(s.x,s.y,s.z),i.updateMatrix(),this.mesh.setMatrixAt(r,i.matrix),r++}this.mesh.count=r,r>0&&(this.mesh.instanceMatrix.needsUpdate=!0)}getActiveBullets(){return this.bullets.filter(e=>e.alive)}}const xC={name:"Fist",type:"melee",damage:5,range:2.5,cooldown:.8,ammoPerShot:0,manaCost:0};class SC{currentWeapon=xC;cooldownTimer=0;input;player;bulletPool;particleSystem;renderer;weaponBobPhase=0;weaponMesh=null;constructor(e,t,i,r,s){this.input=e,this.player=t,this.bulletPool=i,this.particleSystem=r,this.renderer=s}equip(e){this.currentWeapon=e}update(e,t){this.cooldownTimer=Math.max(0,this.cooldownTimer-e),this.input.isMouseButtonDown(0)&&this.cooldownTimer<=0&&this.attack(t);const i=this.player.velocity;if(Math.sqrt(i.x*i.x+i.z*i.z)>.5&&this.player.onGround){this.weaponBobPhase+=e*8;const s=Math.sin(this.weaponBobPhase)*.03,o=Math.cos(this.weaponBobPhase*.5)*.02;this.renderer.weaponCamera.position.set(.3+o,-.3+s,-.5)}else this.renderer.weaponCamera.position.set(.3,-.3,-.5)}attack(e){this.cooldownTimer=this.currentWeapon.cooldown;const t=this.player.getEyePosition(),i=this.player.getLookDirection();switch(this.currentWeapon.type){case"melee":this.meleeAttack(t,i,e);break;case"hitscan":this.hitscanAttack(t,i,e);break;case"magic":this.magicAttack(t,i);break}}meleeAttack(e,t,i){const r=td(e,t,this.currentWeapon.range,(s,o,a)=>Xn(i(s,o,a)));r.hit&&this.particleSystem.emit(r.blockX+.5,r.blockY+.5,r.blockZ+.5,5,{speed:1,color:[.7,.7,.7],life:.3})}hitscanAttack(e,t,i){this.bulletPool.fire(e,t),this.particleSystem.emit(e.x,e.y,e.z,3,{speed:.5,color:[1,.5,0],life:.1,size:.05})}magicAttack(e,t){this.particleSystem.emit(e.x+t.x,e.y+t.y,e.z+t.z,40,{speed:5,color:[.6,.2,1],life:1.5,size:.1,spread:.3})}getCurrentWeapon(){return this.currentWeapon}getCooldownProgress(){return 1-this.cooldownTimer/this.currentWeapon.cooldown}}class MC{entityManager;player;survivalStats;bulletPool;constructor(e,t,i,r){this.entityManager=e,this.player=t,this.survivalStats=i,this.bulletPool=r}update(e){const t=this.entityManager.getCreatures();for(const r of t){if(r.state!==2)continue;const s=r.position.x-this.player.position.x,o=r.position.z-this.player.position.z;Math.sqrt(s*s+o*o)<1.5&&r.attackCooldownTimer<=0&&this.survivalStats.addHealth(-r.getAttackDamage())}const i=this.bulletPool.getActiveBullets();for(const r of i)for(const s of t){if(s.state===4)continue;const o=s.position.x-r.x,a=s.position.y-r.y,l=s.position.z-r.z;if(Math.sqrt(o*o+a*a+l*l)<1){s.takeDamage(30),r.alive=!1;break}}}}function fl(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var p_={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,s){function o(u,f){if(!r[u]){if(!i[u]){var c=typeof fl=="function"&&fl;if(!f&&c)return c(u,!0);if(a)return a(u,!0);var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d}var p=r[u]={exports:{}};i[u][0].call(p.exports,function(g){var y=i[u][1][g];return o(y||g)},p,p.exports,t,i,r,s)}return r[u].exports}for(var a=typeof fl=="function"&&fl,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(t,i,r){(function(s){var o=s.MutationObserver||s.WebKitMutationObserver,a;if(o){var l=0,u=new o(g),f=s.document.createTextNode("");u.observe(f,{characterData:!0}),a=function(){f.data=l=++l%2}}else if(!s.setImmediate&&typeof s.MessageChannel<"u"){var c=new s.MessageChannel;c.port1.onmessage=g,a=function(){c.port2.postMessage(0)}}else"document"in s&&"onreadystatechange"in s.document.createElement("script")?a=function(){var m=s.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},s.document.documentElement.appendChild(m)}:a=function(){setTimeout(g,0)};var d,p=[];function g(){d=!0;for(var m,h,v=p.length;v;){for(h=p,p=[],m=-1;++m<v;)h[m]();v=p.length}d=!1}i.exports=y;function y(m){p.push(m)===1&&!d&&a()}}).call(this,typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,i,r){var s=t(1);function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],f=["PENDING"];i.exports=c;function c(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,w!==o&&y(this,w)}c.prototype.catch=function(w){return this.then(null,w)},c.prototype.then=function(w,A){if(typeof w!="function"&&this.state===u||typeof A!="function"&&this.state===l)return this;var T=new this.constructor(o);if(this.state!==f){var F=this.state===u?w:A;p(T,F,this.outcome)}else this.queue.push(new d(T,w,A));return T};function d(w,A,T){this.promise=w,typeof A=="function"&&(this.onFulfilled=A,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}d.prototype.callFulfilled=function(w){a.resolve(this.promise,w)},d.prototype.otherCallFulfilled=function(w){p(this.promise,this.onFulfilled,w)},d.prototype.callRejected=function(w){a.reject(this.promise,w)},d.prototype.otherCallRejected=function(w){p(this.promise,this.onRejected,w)};function p(w,A,T){s(function(){var F;try{F=A(T)}catch(M){return a.reject(w,M)}F===w?a.reject(w,new TypeError("Cannot resolve promise with itself")):a.resolve(w,F)})}a.resolve=function(w,A){var T=m(g,A);if(T.status==="error")return a.reject(w,T.value);var F=T.value;if(F)y(w,F);else{w.state=u,w.outcome=A;for(var M=-1,C=w.queue.length;++M<C;)w.queue[M].callFulfilled(A)}return w},a.reject=function(w,A){w.state=l,w.outcome=A;for(var T=-1,F=w.queue.length;++T<F;)w.queue[T].callRejected(A);return w};function g(w){var A=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof A=="function")return function(){A.apply(w,arguments)}}function y(w,A){var T=!1;function F(q){T||(T=!0,a.reject(w,q))}function M(q){T||(T=!0,a.resolve(w,q))}function C(){A(M,F)}var H=m(C);H.status==="error"&&F(H.value)}function m(w,A){var T={};try{T.value=w(A),T.status="success"}catch(F){T.status="error",T.value=F}return T}c.resolve=h;function h(w){return w instanceof this?w:a.resolve(new this(o),w)}c.reject=v;function v(w){var A=new this(o);return a.reject(A,w)}c.all=_;function _(w){var A=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=w.length,F=!1;if(!T)return this.resolve([]);for(var M=new Array(T),C=0,H=-1,q=new this(o);++H<T;)ie(w[H],H);return q;function ie(U,G){A.resolve(U).then(Q,function(ne){F||(F=!0,a.reject(q,ne))});function Q(ne){M[G]=ne,++C===T&&!F&&(F=!0,a.resolve(q,M))}}}c.race=S;function S(w){var A=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=w.length,F=!1;if(!T)return this.resolve([]);for(var M=-1,C=new this(o);++M<T;)H(w[M]);return C;function H(q){A.resolve(q).then(function(ie){F||(F=!0,a.resolve(C,ie))},function(ie){F||(F=!0,a.reject(C,ie))})}}},{1:1}],3:[function(t,i,r){(function(s){typeof s.Promise!="function"&&(s.Promise=t(2))}).call(this,typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(t,i,r){var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x};function o(x,P){if(!(x instanceof P))throw new TypeError("Cannot call a class as a function")}function a(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var l=a();function u(){try{if(!l||!l.open)return!1;var x=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),P=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!x||P)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function f(x,P){x=x||[],P=P||{};try{return new Blob(x,P)}catch(D){if(D.name!=="TypeError")throw D;for(var b=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,I=new b,k=0;k<x.length;k+=1)I.append(x[k]);return I.getBlob(P.type)}}typeof Promise>"u"&&t(3);var c=Promise;function d(x,P){P&&x.then(function(b){P(null,b)},function(b){P(b)})}function p(x,P,b){typeof P=="function"&&x.then(P),typeof b=="function"&&x.catch(b)}function g(x){return typeof x!="string"&&(console.warn(x+" used as a key, but it is not a string."),x=String(x)),x}function y(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var m="local-forage-detect-blob-support",h=void 0,v={},_=Object.prototype.toString,S="readonly",w="readwrite";function A(x){for(var P=x.length,b=new ArrayBuffer(P),I=new Uint8Array(b),k=0;k<P;k++)I[k]=x.charCodeAt(k);return b}function T(x){return new c(function(P){var b=x.transaction(m,w),I=f([""]);b.objectStore(m).put(I,"key"),b.onabort=function(k){k.preventDefault(),k.stopPropagation(),P(!1)},b.oncomplete=function(){var k=navigator.userAgent.match(/Chrome\/(\d+)/),D=navigator.userAgent.match(/Edge\//);P(D||!k||parseInt(k[1],10)>=43)}}).catch(function(){return!1})}function F(x){return typeof h=="boolean"?c.resolve(h):T(x).then(function(P){return h=P,h})}function M(x){var P=v[x.name],b={};b.promise=new c(function(I,k){b.resolve=I,b.reject=k}),P.deferredOperations.push(b),P.dbReady?P.dbReady=P.dbReady.then(function(){return b.promise}):P.dbReady=b.promise}function C(x){var P=v[x.name],b=P.deferredOperations.pop();if(b)return b.resolve(),b.promise}function H(x,P){var b=v[x.name],I=b.deferredOperations.pop();if(I)return I.reject(P),I.promise}function q(x,P){return new c(function(b,I){if(v[x.name]=v[x.name]||se(),x.db)if(P)M(x),x.db.close();else return b(x.db);var k=[x.name];P&&k.push(x.version);var D=l.open.apply(l,k);P&&(D.onupgradeneeded=function(J){var le=D.result;try{le.createObjectStore(x.storeName),J.oldVersion<=1&&le.createObjectStore(m)}catch(ae){if(ae.name==="ConstraintError")console.warn('The database "'+x.name+'" has been upgraded from version '+J.oldVersion+" to version "+J.newVersion+', but the storage "'+x.storeName+'" already exists.');else throw ae}}),D.onerror=function(J){J.preventDefault(),I(D.error)},D.onsuccess=function(){var J=D.result;J.onversionchange=function(le){le.target.close()},b(J),C(x)}})}function ie(x){return q(x,!1)}function U(x){return q(x,!0)}function G(x,P){if(!x.db)return!0;var b=!x.db.objectStoreNames.contains(x.storeName),I=x.version<x.db.version,k=x.version>x.db.version;if(I&&(x.version!==P&&console.warn('The database "'+x.name+`" can't be downgraded from version `+x.db.version+" to version "+x.version+"."),x.version=x.db.version),k||b){if(b){var D=x.db.version+1;D>x.version&&(x.version=D)}return!0}return!1}function Q(x){return new c(function(P,b){var I=new FileReader;I.onerror=b,I.onloadend=function(k){var D=btoa(k.target.result||"");P({__local_forage_encoded_blob:!0,data:D,type:x.type})},I.readAsBinaryString(x)})}function ne(x){var P=A(atob(x.data));return f([P],{type:x.type})}function O(x){return x&&x.__local_forage_encoded_blob}function V(x){var P=this,b=P._initReady().then(function(){var I=v[P._dbInfo.name];if(I&&I.dbReady)return I.dbReady});return p(b,x,x),b}function X(x){M(x);for(var P=v[x.name],b=P.forages,I=0;I<b.length;I++){var k=b[I];k._dbInfo.db&&(k._dbInfo.db.close(),k._dbInfo.db=null)}return x.db=null,ie(x).then(function(D){return x.db=D,G(x)?U(x):D}).then(function(D){x.db=P.db=D;for(var J=0;J<b.length;J++)b[J]._dbInfo.db=D}).catch(function(D){throw H(x,D),D})}function ee(x,P,b,I){I===void 0&&(I=1);try{var k=x.db.transaction(x.storeName,P);b(null,k)}catch(D){if(I>0&&(!x.db||D.name==="InvalidStateError"||D.name==="NotFoundError"))return c.resolve().then(function(){if(!x.db||D.name==="NotFoundError"&&!x.db.objectStoreNames.contains(x.storeName)&&x.version<=x.db.version)return x.db&&(x.version=x.db.version+1),U(x)}).then(function(){return X(x).then(function(){ee(x,P,b,I-1)})}).catch(b);b(D)}}function se(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Z(x){var P=this,b={db:null};if(x)for(var I in x)b[I]=x[I];var k=v[b.name];k||(k=se(),v[b.name]=k),k.forages.push(P),P._initReady||(P._initReady=P.ready,P.ready=V);var D=[];function J(){return c.resolve()}for(var le=0;le<k.forages.length;le++){var ae=k.forages[le];ae!==P&&D.push(ae._initReady().catch(J))}var he=k.forages.slice(0);return c.all(D).then(function(){return b.db=k.db,ie(b)}).then(function(ge){return b.db=ge,G(b,P._defaultConfig.version)?U(b):ge}).then(function(ge){b.db=k.db=ge,P._dbInfo=b;for(var Pe=0;Pe<he.length;Pe++){var rt=he[Pe];rt!==P&&(rt._dbInfo.db=b.db,rt._dbInfo.version=b.version)}})}function re(x,P){var b=this;x=g(x);var I=new c(function(k,D){b.ready().then(function(){ee(b._dbInfo,S,function(J,le){if(J)return D(J);try{var ae=le.objectStore(b._dbInfo.storeName),he=ae.get(x);he.onsuccess=function(){var ge=he.result;ge===void 0&&(ge=null),O(ge)&&(ge=ne(ge)),k(ge)},he.onerror=function(){D(he.error)}}catch(ge){D(ge)}})}).catch(D)});return d(I,P),I}function ve(x,P){var b=this,I=new c(function(k,D){b.ready().then(function(){ee(b._dbInfo,S,function(J,le){if(J)return D(J);try{var ae=le.objectStore(b._dbInfo.storeName),he=ae.openCursor(),ge=1;he.onsuccess=function(){var Pe=he.result;if(Pe){var rt=Pe.value;O(rt)&&(rt=ne(rt));var ht=x(rt,Pe.key,ge++);ht!==void 0?k(ht):Pe.continue()}else k()},he.onerror=function(){D(he.error)}}catch(Pe){D(Pe)}})}).catch(D)});return d(I,P),I}function we(x,P,b){var I=this;x=g(x);var k=new c(function(D,J){var le;I.ready().then(function(){return le=I._dbInfo,_.call(P)==="[object Blob]"?F(le.db).then(function(ae){return ae?P:Q(P)}):P}).then(function(ae){ee(I._dbInfo,w,function(he,ge){if(he)return J(he);try{var Pe=ge.objectStore(I._dbInfo.storeName);ae===null&&(ae=void 0);var rt=Pe.put(ae,x);ge.oncomplete=function(){ae===void 0&&(ae=null),D(ae)},ge.onabort=ge.onerror=function(){var ht=rt.error?rt.error:rt.transaction.error;J(ht)}}catch(ht){J(ht)}})}).catch(J)});return d(k,b),k}function Ae(x,P){var b=this;x=g(x);var I=new c(function(k,D){b.ready().then(function(){ee(b._dbInfo,w,function(J,le){if(J)return D(J);try{var ae=le.objectStore(b._dbInfo.storeName),he=ae.delete(x);le.oncomplete=function(){k()},le.onerror=function(){D(he.error)},le.onabort=function(){var ge=he.error?he.error:he.transaction.error;D(ge)}}catch(ge){D(ge)}})}).catch(D)});return d(I,P),I}function Ve(x){var P=this,b=new c(function(I,k){P.ready().then(function(){ee(P._dbInfo,w,function(D,J){if(D)return k(D);try{var le=J.objectStore(P._dbInfo.storeName),ae=le.clear();J.oncomplete=function(){I()},J.onabort=J.onerror=function(){var he=ae.error?ae.error:ae.transaction.error;k(he)}}catch(he){k(he)}})}).catch(k)});return d(b,x),b}function Xe(x){var P=this,b=new c(function(I,k){P.ready().then(function(){ee(P._dbInfo,S,function(D,J){if(D)return k(D);try{var le=J.objectStore(P._dbInfo.storeName),ae=le.count();ae.onsuccess=function(){I(ae.result)},ae.onerror=function(){k(ae.error)}}catch(he){k(he)}})}).catch(k)});return d(b,x),b}function Re(x,P){var b=this,I=new c(function(k,D){if(x<0){k(null);return}b.ready().then(function(){ee(b._dbInfo,S,function(J,le){if(J)return D(J);try{var ae=le.objectStore(b._dbInfo.storeName),he=!1,ge=ae.openKeyCursor();ge.onsuccess=function(){var Pe=ge.result;if(!Pe){k(null);return}x===0||he?k(Pe.key):(he=!0,Pe.advance(x))},ge.onerror=function(){D(ge.error)}}catch(Pe){D(Pe)}})}).catch(D)});return d(I,P),I}function at(x){var P=this,b=new c(function(I,k){P.ready().then(function(){ee(P._dbInfo,S,function(D,J){if(D)return k(D);try{var le=J.objectStore(P._dbInfo.storeName),ae=le.openKeyCursor(),he=[];ae.onsuccess=function(){var ge=ae.result;if(!ge){I(he);return}he.push(ge.key),ge.continue()},ae.onerror=function(){k(ae.error)}}catch(ge){k(ge)}})}).catch(k)});return d(b,x),b}function Y(x,P){P=y.apply(this,arguments);var b=this.config();x=typeof x!="function"&&x||{},x.name||(x.name=x.name||b.name,x.storeName=x.storeName||b.storeName);var I=this,k;if(!x.name)k=c.reject("Invalid arguments");else{var D=x.name===b.name&&I._dbInfo.db,J=D?c.resolve(I._dbInfo.db):ie(x).then(function(le){var ae=v[x.name],he=ae.forages;ae.db=le;for(var ge=0;ge<he.length;ge++)he[ge]._dbInfo.db=le;return le});x.storeName?k=J.then(function(le){if(le.objectStoreNames.contains(x.storeName)){var ae=le.version+1;M(x);var he=v[x.name],ge=he.forages;le.close();for(var Pe=0;Pe<ge.length;Pe++){var rt=ge[Pe];rt._dbInfo.db=null,rt._dbInfo.version=ae}var ht=new c(function(dt,Gt){var kt=l.open(x.name,ae);kt.onerror=function(Vn){var io=kt.result;io.close(),Gt(Vn)},kt.onupgradeneeded=function(){var Vn=kt.result;Vn.deleteObjectStore(x.storeName)},kt.onsuccess=function(){var Vn=kt.result;Vn.close(),dt(Vn)}});return ht.then(function(dt){he.db=dt;for(var Gt=0;Gt<ge.length;Gt++){var kt=ge[Gt];kt._dbInfo.db=dt,C(kt._dbInfo)}}).catch(function(dt){throw(H(x,dt)||c.resolve()).catch(function(){}),dt})}}):k=J.then(function(le){M(x);var ae=v[x.name],he=ae.forages;le.close();for(var ge=0;ge<he.length;ge++){var Pe=he[ge];Pe._dbInfo.db=null}var rt=new c(function(ht,dt){var Gt=l.deleteDatabase(x.name);Gt.onerror=function(){var kt=Gt.result;kt&&kt.close(),dt(Gt.error)},Gt.onblocked=function(){console.warn('dropInstance blocked for database "'+x.name+'" until all open connections are closed')},Gt.onsuccess=function(){var kt=Gt.result;kt&&kt.close(),ht(kt)}});return rt.then(function(ht){ae.db=ht;for(var dt=0;dt<he.length;dt++){var Gt=he[dt];C(Gt._dbInfo)}}).catch(function(ht){throw(H(x,ht)||c.resolve()).catch(function(){}),ht})})}return d(k,P),k}var en={_driver:"asyncStorage",_initStorage:Z,_support:u(),iterate:ve,getItem:re,setItem:we,removeItem:Ae,clear:Ve,length:Xe,key:Re,keys:at,dropInstance:Y};function Fe(){return typeof openDatabase=="function"}var Oe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",De="~~local_forage_type~",xt=/^~~local_forage_type~([^~]+)~/,Ke="__lfsc__:",L=Ke.length,E="arbf",W="blob",fe="si08",ce="ui08",pe="uic8",Ne="si16",Me="si32",be="ur16",He="ui32",$e="fl32",ue="fl64",ft=L+E.length,Je=Object.prototype.toString;function je(x){var P=x.length*.75,b=x.length,I,k=0,D,J,le,ae;x[x.length-1]==="="&&(P--,x[x.length-2]==="="&&P--);var he=new ArrayBuffer(P),ge=new Uint8Array(he);for(I=0;I<b;I+=4)D=Oe.indexOf(x[I]),J=Oe.indexOf(x[I+1]),le=Oe.indexOf(x[I+2]),ae=Oe.indexOf(x[I+3]),ge[k++]=D<<2|J>>4,ge[k++]=(J&15)<<4|le>>2,ge[k++]=(le&3)<<6|ae&63;return he}function Ue(x){var P=new Uint8Array(x),b="",I;for(I=0;I<P.length;I+=3)b+=Oe[P[I]>>2],b+=Oe[(P[I]&3)<<4|P[I+1]>>4],b+=Oe[(P[I+1]&15)<<2|P[I+2]>>6],b+=Oe[P[I+2]&63];return P.length%3===2?b=b.substring(0,b.length-1)+"=":P.length%3===1&&(b=b.substring(0,b.length-2)+"=="),b}function Le(x,P){var b="";if(x&&(b=Je.call(x)),x&&(b==="[object ArrayBuffer]"||x.buffer&&Je.call(x.buffer)==="[object ArrayBuffer]")){var I,k=Ke;x instanceof ArrayBuffer?(I=x,k+=E):(I=x.buffer,b==="[object Int8Array]"?k+=fe:b==="[object Uint8Array]"?k+=ce:b==="[object Uint8ClampedArray]"?k+=pe:b==="[object Int16Array]"?k+=Ne:b==="[object Uint16Array]"?k+=be:b==="[object Int32Array]"?k+=Me:b==="[object Uint32Array]"?k+=He:b==="[object Float32Array]"?k+=$e:b==="[object Float64Array]"?k+=ue:P(new Error("Failed to get type for BinaryArray"))),P(k+Ue(I))}else if(b==="[object Blob]"){var D=new FileReader;D.onload=function(){var J=De+x.type+"~"+Ue(this.result);P(Ke+W+J)},D.readAsArrayBuffer(x)}else try{P(JSON.stringify(x))}catch(J){console.error("Couldn't convert value into a JSON string: ",x),P(null,J)}}function Ze(x){if(x.substring(0,L)!==Ke)return JSON.parse(x);var P=x.substring(ft),b=x.substring(L,ft),I;if(b===W&&xt.test(P)){var k=P.match(xt);I=k[1],P=P.substring(k[0].length)}var D=je(P);switch(b){case E:return D;case W:return f([D],{type:I});case fe:return new Int8Array(D);case ce:return new Uint8Array(D);case pe:return new Uint8ClampedArray(D);case Ne:return new Int16Array(D);case be:return new Uint16Array(D);case Me:return new Int32Array(D);case He:return new Uint32Array(D);case $e:return new Float32Array(D);case ue:return new Float64Array(D);default:throw new Error("Unkown type: "+b)}}var lt={serialize:Le,deserialize:Ze,stringToBuffer:je,bufferToString:Ue};function Tt(x,P,b,I){x.executeSql("CREATE TABLE IF NOT EXISTS "+P.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],b,I)}function et(x){var P=this,b={db:null};if(x)for(var I in x)b[I]=typeof x[I]!="string"?x[I].toString():x[I];var k=new c(function(D,J){try{b.db=openDatabase(b.name,String(b.version),b.description,b.size)}catch(le){return J(le)}b.db.transaction(function(le){Tt(le,b,function(){P._dbInfo=b,D()},function(ae,he){J(he)})},J)});return b.serializer=lt,k}function me(x,P,b,I,k,D){x.executeSql(b,I,k,function(J,le){le.code===le.SYNTAX_ERR?J.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[P.storeName],function(ae,he){he.rows.length?D(ae,le):Tt(ae,P,function(){ae.executeSql(b,I,k,D)},D)},D):D(J,le)},D)}function N(x,P){var b=this;x=g(x);var I=new c(function(k,D){b.ready().then(function(){var J=b._dbInfo;J.db.transaction(function(le){me(le,J,"SELECT * FROM "+J.storeName+" WHERE key = ? LIMIT 1",[x],function(ae,he){var ge=he.rows.length?he.rows.item(0).value:null;ge&&(ge=J.serializer.deserialize(ge)),k(ge)},function(ae,he){D(he)})})}).catch(D)});return d(I,P),I}function xe(x,P){var b=this,I=new c(function(k,D){b.ready().then(function(){var J=b._dbInfo;J.db.transaction(function(le){me(le,J,"SELECT * FROM "+J.storeName,[],function(ae,he){for(var ge=he.rows,Pe=ge.length,rt=0;rt<Pe;rt++){var ht=ge.item(rt),dt=ht.value;if(dt&&(dt=J.serializer.deserialize(dt)),dt=x(dt,ht.key,rt+1),dt!==void 0){k(dt);return}}k()},function(ae,he){D(he)})})}).catch(D)});return d(I,P),I}function ye(x,P,b,I){var k=this;x=g(x);var D=new c(function(J,le){k.ready().then(function(){P===void 0&&(P=null);var ae=P,he=k._dbInfo;he.serializer.serialize(P,function(ge,Pe){Pe?le(Pe):he.db.transaction(function(rt){me(rt,he,"INSERT OR REPLACE INTO "+he.storeName+" (key, value) VALUES (?, ?)",[x,ge],function(){J(ae)},function(ht,dt){le(dt)})},function(rt){if(rt.code===rt.QUOTA_ERR){if(I>0){J(ye.apply(k,[x,ae,b,I-1]));return}le(rt)}})})}).catch(le)});return d(D,b),D}function Ye(x,P,b){return ye.apply(this,[x,P,b,1])}function ke(x,P){var b=this;x=g(x);var I=new c(function(k,D){b.ready().then(function(){var J=b._dbInfo;J.db.transaction(function(le){me(le,J,"DELETE FROM "+J.storeName+" WHERE key = ?",[x],function(){k()},function(ae,he){D(he)})})}).catch(D)});return d(I,P),I}function mt(x){var P=this,b=new c(function(I,k){P.ready().then(function(){var D=P._dbInfo;D.db.transaction(function(J){me(J,D,"DELETE FROM "+D.storeName,[],function(){I()},function(le,ae){k(ae)})})}).catch(k)});return d(b,x),b}function gt(x){var P=this,b=new c(function(I,k){P.ready().then(function(){var D=P._dbInfo;D.db.transaction(function(J){me(J,D,"SELECT COUNT(key) as c FROM "+D.storeName,[],function(le,ae){var he=ae.rows.item(0).c;I(he)},function(le,ae){k(ae)})})}).catch(k)});return d(b,x),b}function Bt(x,P){var b=this,I=new c(function(k,D){b.ready().then(function(){var J=b._dbInfo;J.db.transaction(function(le){me(le,J,"SELECT key FROM "+J.storeName+" WHERE id = ? LIMIT 1",[x+1],function(ae,he){var ge=he.rows.length?he.rows.item(0).key:null;k(ge)},function(ae,he){D(he)})})}).catch(D)});return d(I,P),I}function tn(x){var P=this,b=new c(function(I,k){P.ready().then(function(){var D=P._dbInfo;D.db.transaction(function(J){me(J,D,"SELECT key FROM "+D.storeName,[],function(le,ae){for(var he=[],ge=0;ge<ae.rows.length;ge++)he.push(ae.rows.item(ge).key);I(he)},function(le,ae){k(ae)})})}).catch(k)});return d(b,x),b}function vt(x){return new c(function(P,b){x.transaction(function(I){I.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(k,D){for(var J=[],le=0;le<D.rows.length;le++)J.push(D.rows.item(le).name);P({db:x,storeNames:J})},function(k,D){b(D)})},function(I){b(I)})})}function nn(x,P){P=y.apply(this,arguments);var b=this.config();x=typeof x!="function"&&x||{},x.name||(x.name=x.name||b.name,x.storeName=x.storeName||b.storeName);var I=this,k;return x.name?k=new c(function(D){var J;x.name===b.name?J=I._dbInfo.db:J=openDatabase(x.name,"","",0),x.storeName?D({db:J,storeNames:[x.storeName]}):D(vt(J))}).then(function(D){return new c(function(J,le){D.db.transaction(function(ae){function he(ht){return new c(function(dt,Gt){ae.executeSql("DROP TABLE IF EXISTS "+ht,[],function(){dt()},function(kt,Vn){Gt(Vn)})})}for(var ge=[],Pe=0,rt=D.storeNames.length;Pe<rt;Pe++)ge.push(he(D.storeNames[Pe]));c.all(ge).then(function(){J()}).catch(function(ht){le(ht)})},function(ae){le(ae)})})}):k=c.reject("Invalid arguments"),d(k,P),k}var Gn={_driver:"webSQLStorage",_initStorage:et,_support:Fe(),iterate:xe,getItem:N,setItem:Ye,removeItem:ke,clear:mt,length:gt,key:Bt,keys:tn,dropInstance:nn};function pa(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function ma(x,P){var b=x.name+"/";return x.storeName!==P.storeName&&(b+=x.storeName+"/"),b}function jr(){var x="_localforage_support_test";try{return localStorage.setItem(x,!0),localStorage.removeItem(x),!1}catch{return!0}}function ga(){return!jr()||localStorage.length>0}function Kr(x){var P=this,b={};if(x)for(var I in x)b[I]=x[I];return b.keyPrefix=ma(x,P._defaultConfig),ga()?(P._dbInfo=b,b.serializer=lt,c.resolve()):c.reject()}function va(x){var P=this,b=P.ready().then(function(){for(var I=P._dbInfo.keyPrefix,k=localStorage.length-1;k>=0;k--){var D=localStorage.key(k);D.indexOf(I)===0&&localStorage.removeItem(D)}});return d(b,x),b}function _a(x,P){var b=this;x=g(x);var I=b.ready().then(function(){var k=b._dbInfo,D=localStorage.getItem(k.keyPrefix+x);return D&&(D=k.serializer.deserialize(D)),D});return d(I,P),I}function Cu(x,P){var b=this,I=b.ready().then(function(){for(var k=b._dbInfo,D=k.keyPrefix,J=D.length,le=localStorage.length,ae=1,he=0;he<le;he++){var ge=localStorage.key(he);if(ge.indexOf(D)===0){var Pe=localStorage.getItem(ge);if(Pe&&(Pe=k.serializer.deserialize(Pe)),Pe=x(Pe,ge.substring(J),ae++),Pe!==void 0)return Pe}}});return d(I,P),I}function Ru(x,P){var b=this,I=b.ready().then(function(){var k=b._dbInfo,D;try{D=localStorage.key(x)}catch{D=null}return D&&(D=D.substring(k.keyPrefix.length)),D});return d(I,P),I}function bu(x){var P=this,b=P.ready().then(function(){for(var I=P._dbInfo,k=localStorage.length,D=[],J=0;J<k;J++){var le=localStorage.key(J);le.indexOf(I.keyPrefix)===0&&D.push(le.substring(I.keyPrefix.length))}return D});return d(b,x),b}function R(x){var P=this,b=P.keys().then(function(I){return I.length});return d(b,x),b}function z(x,P){var b=this;x=g(x);var I=b.ready().then(function(){var k=b._dbInfo;localStorage.removeItem(k.keyPrefix+x)});return d(I,P),I}function K(x,P,b){var I=this;x=g(x);var k=I.ready().then(function(){P===void 0&&(P=null);var D=P;return new c(function(J,le){var ae=I._dbInfo;ae.serializer.serialize(P,function(he,ge){if(ge)le(ge);else try{localStorage.setItem(ae.keyPrefix+x,he),J(D)}catch(Pe){(Pe.name==="QuotaExceededError"||Pe.name==="NS_ERROR_DOM_QUOTA_REACHED")&&le(Pe),le(Pe)}})})});return d(k,b),k}function $(x,P){if(P=y.apply(this,arguments),x=typeof x!="function"&&x||{},!x.name){var b=this.config();x.name=x.name||b.name,x.storeName=x.storeName||b.storeName}var I=this,k;return x.name?k=new c(function(D){x.storeName?D(ma(x,I._defaultConfig)):D(x.name+"/")}).then(function(D){for(var J=localStorage.length-1;J>=0;J--){var le=localStorage.key(J);le.indexOf(D)===0&&localStorage.removeItem(le)}}):k=c.reject("Invalid arguments"),d(k,P),k}var j={_driver:"localStorageWrapper",_initStorage:Kr,_support:pa(),iterate:Cu,getItem:_a,setItem:K,removeItem:z,clear:va,length:R,key:Ru,keys:bu,dropInstance:$},Te=function(P,b){return P===b||typeof P=="number"&&typeof b=="number"&&isNaN(P)&&isNaN(b)},Ie=function(P,b){for(var I=P.length,k=0;k<I;){if(Te(P[k],b))return!0;k++}return!1},ze=Array.isArray||function(x){return Object.prototype.toString.call(x)==="[object Array]"},Be={},Qe={},We={INDEXEDDB:en,WEBSQL:Gn,LOCALSTORAGE:j},qe=[We.INDEXEDDB._driver,We.WEBSQL._driver,We.LOCALSTORAGE._driver],St=["dropInstance"],rn=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(St),Ht={description:"",driver:qe.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function ei(x,P){x[P]=function(){var b=arguments;return x.ready().then(function(){return x[P].apply(x,b)})}}function yt(){for(var x=1;x<arguments.length;x++){var P=arguments[x];if(P)for(var b in P)P.hasOwnProperty(b)&&(ze(P[b])?arguments[0][b]=P[b].slice():arguments[0][b]=P[b])}return arguments[0]}var tt=function(){function x(P){o(this,x);for(var b in We)if(We.hasOwnProperty(b)){var I=We[b],k=I._driver;this[b]=k,Be[k]||this.defineDriver(I)}this._defaultConfig=yt({},Ht),this._config=yt({},this._defaultConfig,P),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return x.prototype.config=function(b){if((typeof b>"u"?"undefined":s(b))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var I in b){if(I==="storeName"&&(b[I]=b[I].replace(/\W/g,"_")),I==="version"&&typeof b[I]!="number")return new Error("Database version must be a number.");this._config[I]=b[I]}return"driver"in b&&b.driver?this.setDriver(this._config.driver):!0}else return typeof b=="string"?this._config[b]:this._config},x.prototype.defineDriver=function(b,I,k){var D=new c(function(J,le){try{var ae=b._driver,he=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!b._driver){le(he);return}for(var ge=rn.concat("_initStorage"),Pe=0,rt=ge.length;Pe<rt;Pe++){var ht=ge[Pe],dt=!Ie(St,ht);if((dt||b[ht])&&typeof b[ht]!="function"){le(he);return}}var Gt=function(){for(var io=function(v_){return function(){var __=new Error("Method "+v_+" is not implemented by the current driver"),id=c.reject(__);return d(id,arguments[arguments.length-1]),id}},Lu=0,g_=St.length;Lu<g_;Lu++){var Pu=St[Lu];b[Pu]||(b[Pu]=io(Pu))}};Gt();var kt=function(io){Be[ae]&&console.info("Redefining LocalForage driver: "+ae),Be[ae]=b,Qe[ae]=io,J()};"_support"in b?b._support&&typeof b._support=="function"?b._support().then(kt,le):kt(!!b._support):kt(!0)}catch(Vn){le(Vn)}});return p(D,I,k),D},x.prototype.driver=function(){return this._driver||null},x.prototype.getDriver=function(b,I,k){var D=Be[b]?c.resolve(Be[b]):c.reject(new Error("Driver not found."));return p(D,I,k),D},x.prototype.getSerializer=function(b){var I=c.resolve(lt);return p(I,b),I},x.prototype.ready=function(b){var I=this,k=I._driverSet.then(function(){return I._ready===null&&(I._ready=I._initDriver()),I._ready});return p(k,b,b),k},x.prototype.setDriver=function(b,I,k){var D=this;ze(b)||(b=[b]);var J=this._getSupportedDrivers(b);function le(){D._config.driver=D.driver()}function ae(Pe){return D._extend(Pe),le(),D._ready=D._initStorage(D._config),D._ready}function he(Pe){return function(){var rt=0;function ht(){for(;rt<Pe.length;){var dt=Pe[rt];return rt++,D._dbInfo=null,D._ready=null,D.getDriver(dt).then(ae).catch(ht)}le();var Gt=new Error("No available storage method found.");return D._driverSet=c.reject(Gt),D._driverSet}return ht()}}var ge=this._driverSet!==null?this._driverSet.catch(function(){return c.resolve()}):c.resolve();return this._driverSet=ge.then(function(){var Pe=J[0];return D._dbInfo=null,D._ready=null,D.getDriver(Pe).then(function(rt){D._driver=rt._driver,le(),D._wrapLibraryMethodsWithReady(),D._initDriver=he(J)})}).catch(function(){le();var Pe=new Error("No available storage method found.");return D._driverSet=c.reject(Pe),D._driverSet}),p(this._driverSet,I,k),this._driverSet},x.prototype.supports=function(b){return!!Qe[b]},x.prototype._extend=function(b){yt(this,b)},x.prototype._getSupportedDrivers=function(b){for(var I=[],k=0,D=b.length;k<D;k++){var J=b[k];this.supports(J)&&I.push(J)}return I},x.prototype._wrapLibraryMethodsWithReady=function(){for(var b=0,I=rn.length;b<I;b++)ei(this,rn[b])},x.prototype.createInstance=function(b){return new x(b)},x}(),no=new tt;i.exports=no},{3:3}]},{},[4])(4)})})(p_);var EC=p_.exports;const Eo=qf(EC),hl="voxel_survival_save";class wC{player=null;survivalStats=null;terrainGenerator=null;biomeGenerator=null;chunks=null;lastAutoSave=0;init(e,t,i,r,s){this.player=e,this.survivalStats=t,this.terrainGenerator=i,this.biomeGenerator=r,this.chunks=s,Eo.config({name:"voxel_survival"})}async save(){if(!this.player||!this.survivalStats||!this.terrainGenerator||!this.biomeGenerator||!this.chunks)return;const e={};this.chunks.forEach((r,s)=>{const o=this.biomeGenerator.generateBiomeMap(r.chunkX,r.chunkZ),a=new ed(r.chunkX,r.chunkZ);this.terrainGenerator.generateChunk(a,o);const l=[];for(let u=0;u<Un;u++)for(let f=0;f<Ge;f++)for(let c=0;c<Ge;c++){const d=r.getBlock(c,u,f),p=a.getBlock(c,u,f);d!==p&&l.push({x:r.worldX+c,y:u,z:r.worldZ+f,newBlock:d})}l.length>0&&(e[s]=l)});const t=Us.getState(),i={version:2,seed:(this.terrainGenerator,0),timestamp:Date.now(),player:{position:[this.player.position.x,this.player.position.y,this.player.position.z],rotation:[this.player.yaw,this.player.pitch],stats:{health:this.survivalStats.health,hunger:this.survivalStats.hunger,thirst:this.survivalStats.thirst,stamina:this.survivalStats.stamina,temperature:this.survivalStats.temperature,mana:this.survivalStats.mana},dimension:"overworld"},inventory:t.slots,deltas:e,creatures:[]};await Eo.setItem(hl,i)}async load(){return await Eo.getItem(hl)}async hasSave(){return await Eo.getItem(hl)!==null}async deleteSave(){await Eo.removeItem(hl)}checkAutosave(e){e-this.lastAutoSave>GA&&(this.lastAutoSave=e,this.save().catch(console.error))}}class TC{geometry;material;points;positions;velocities;count=300;constructor(e){this.positions=new Float32Array(this.count*3),this.velocities=new Float32Array(this.count*3);for(let t=0;t<this.count;t++)this.positions[t*3]=(Math.random()-.5)*2,this.positions[t*3+1]=Math.random()*3,this.positions[t*3+2]=(Math.random()-.5)*2,this.velocities[t*3]=(Math.random()-.5)*.5,this.velocities[t*3+1]=Math.random()*2+.5,this.velocities[t*3+2]=(Math.random()-.5)*.5;this.geometry=new Pn,this.geometry.setAttribute("position",new Et(this.positions,3)),this.material=new Eu({color:11141375,size:.1,transparent:!0,opacity:.8,depthWrite:!1}),this.points=new Qh(this.geometry,this.material),this.points.visible=!1,e.add(this.points)}show(e,t,i){this.points.position.set(e,t,i),this.points.visible=!0}hide(){this.points.visible=!1}update(e){if(this.points.visible){for(let t=0;t<this.count;t++)this.positions[t*3+1]+=this.velocities[t*3+1]*e,this.positions[t*3+1]>3&&(this.positions[t*3+1]=0,this.positions[t*3]=(Math.random()-.5)*2,this.positions[t*3+2]=(Math.random()-.5)*2);this.geometry.attributes.position.needsUpdate=!0}}}class AC{worldManager;portalParticles;postProcess;voidRealm=null;player;activePortals=new Map;currentDimension="overworld";constructor(e,t,i,r){this.worldManager=t,this.player=i,this.postProcess=r,this.portalParticles=new TC(e)}checkPortalActivation(e,t,i){this.countAdjacentFrames(e,t,i)>=4&&(this.activePortals.set(`${e},${t},${i}`,{x:e,y:t,z:i}),this.portalParticles.show(e+.5,t,i+.5),this.worldManager.setBlock(e,t+1,i,Se.PORTAL_ACTIVE),this.worldManager.setBlock(e,t+2,i,Se.PORTAL_ACTIVE))}countAdjacentFrames(e,t,i){let r=0;const s=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0]];for(const[o,a,l]of s)this.worldManager.getBlock(e+o,t+a,i+l)===Se.PORTAL_FRAME&&r++;return r}update(e){if(this.portalParticles.update(e),this.currentDimension==="overworld"){const t=Math.floor(this.player.position.x),i=Math.floor(this.player.position.y),r=Math.floor(this.player.position.z);this.worldManager.getBlock(t,i,r)===Se.PORTAL_ACTIVE&&this.transitionToVoid()}}transitionToVoid(){this.postProcess.fadeIn(500,()=>{this.currentDimension="void",this.postProcess.fadeOut(500)})}isInVoid(){return this.currentDimension==="void"}getDimension(){return this.currentDimension}}class CC{renderer;skyRenderer;waterRenderer;fogSystem;particleSystem;dayNightCycle;chunkRenderer;postProcess;assetManager;inputManager;worldManager=null;player=null;playerController=null;camera=null;blockInteraction=null;survivalStats=null;entityManager=null;bulletPool=null;weaponManager=null;damageSystem=null;saveManager;portalManager=null;gameState="menu";animFrameId=0;lastTime=0;elapsed=0;seed=0;paused=!1;chunkWorker=null;pendingMeshes=new Map;onStateChange=null;onStatsUpdate=null;constructor(){this.renderer=new PA,this.assetManager=new KA,this.inputManager=new qA,this.saveManager=new wC}init(e){this.assetManager.init(),this.inputManager.init(e),this.skyRenderer=new IA(this.renderer.mainScene),this.waterRenderer=new OA,this.fogSystem=new kA(this.renderer.mainScene),this.particleSystem=new WA(this.renderer.mainScene),this.dayNightCycle=new XA(this.renderer.mainScene),this.chunkRenderer=new YA(this.renderer.mainScene,this.assetManager),this.postProcess=new jA;for(let t=0;t<8;t++){const i=new eA(16748288,0,15);this.renderer.mainScene.add(i)}this.chunkWorker=ZA(),this.chunkWorker.onmessage=t=>{const{chunkX:i,chunkZ:r,positions:s,normals:o,uvs:a,colors:l,indices:u,waterPositions:f,waterNormals:c,waterUvs:d,waterIndices:p}=t.data,g=`${i},${r}`;this.pendingMeshes.delete(g),this.chunkRenderer.uploadChunk(g,{positions:s,normals:o,uvs:a,colors:l,indices:u,waterPositions:f,waterNormals:c,waterUvs:d,waterIndices:p},this.waterRenderer.getMaterial())}}startGame(e){this.seed=e,eC(e),nC(),this.worldManager=new aC(e),this.worldManager.update(0,0);for(let r=0;r<5;r++)this.worldManager.update(0,0);this.player=new Gc((r,s,o)=>this.worldManager.getBlock(r,s,o));const t=Gc.findLandSpawn((r,s,o)=>this.worldManager.getBlock(r,s,o),8,8);this.player.position={x:t.x,y:t.y,z:t.z},this.survivalStats=new hC,this.playerController=new uC(this.player,this.inputManager,this.renderer),this.camera=new cC(this.player,this.inputManager,this.renderer),this.blockInteraction=new fC(this.player,this.inputManager,this.worldManager),this.blockInteraction.setSurvivalStats(this.survivalStats);const i=this.player.getEyePosition();this.renderer.setMainCameraPosition(i.x,i.y,i.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch),this.entityManager=new _C(this.renderer.mainScene,(r,s,o)=>this.worldManager.getBlock(r,s,o)),this.entityManager.setPlayerPosition(this.player.position),this.bulletPool=new yC(this.renderer.mainScene),this.weaponManager=new SC(this.inputManager,this.player,this.bulletPool,this.particleSystem,this.renderer),this.damageSystem=new MC(this.entityManager,this.player,this.survivalStats,this.bulletPool),this.portalManager=new AC(this.renderer.mainScene,this.worldManager,this.player,this.postProcess),this.saveManager.init(this.player,this.survivalStats,this.worldManager.getTerrainGenerator(),this.worldManager.getBiomeGenerator(),this.worldManager.getAllChunks()),this.gameState="playing",this.onStateChange?.("playing"),this.worldManager.update(this.player.position.x,this.player.position.z);for(let r=0;r<5;r++)this.worldManager.update(this.player.position.x,this.player.position.z);this.rebuildAllVisibleChunks(),this.lastTime=performance.now(),this.gameLoop()}loadGame(){this.saveManager.load().then(e=>{e&&(this.startGame(e.seed),this.player&&this.survivalStats&&(this.player.position={x:e.player.position[0],y:e.player.position[1],z:e.player.position[2]},this.player.yaw=e.player.rotation[0],this.player.pitch=e.player.rotation[1],this.survivalStats.health=e.player.stats.health,this.survivalStats.hunger=e.player.stats.hunger,this.survivalStats.thirst=e.player.stats.thirst,this.survivalStats.stamina=e.player.stats.stamina,this.survivalStats.temperature=e.player.stats.temperature,this.survivalStats.mana=e.player.stats.mana))})}gameLoop=()=>{this.animFrameId=requestAnimationFrame(this.gameLoop);const e=performance.now(),t=(e-this.lastTime)/1e3;this.lastTime=e;const i=Math.min(t,.05);this.elapsed+=i,this.inputManager.flush(),this.inputManager.isKeyJustPressed("Tab")&&this.gameState==="playing"?(this.gameState="inventory",this.onStateChange?.("inventory"),this.inputManager.exitPointerLock()):this.inputManager.isKeyJustPressed("Tab")&&this.gameState==="inventory"&&(this.gameState="playing",this.onStateChange?.("playing"));for(let o=1;o<=9;o++)this.inputManager.isKeyJustPressed(`Digit${o}`)&&Us.getState().selectSlot(o-1);const r=this.inputManager.getScrollDelta();if(r!==0){const a=(Us.getState().selected+(r>0?1:-1)+9)%9;Us.getState().selectSlot(a)}if(this.inputManager.isKeyJustPressed("F5")&&this.saveManager.save().catch(console.error),this.gameState==="playing"&&!this.paused){if(this.playerController?.update(i),this.player?.update(i),this.camera?.update(i),this.blockInteraction?.update(i),this.survivalStats&&this.player){const o=this.worldManager?.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z))??it.PLAINS;this.survivalStats.setBiome(o),this.survivalStats.setSprinting(this.player.isSprinting),this.survivalStats.update(i),this.survivalStats.isDead&&(this.gameState="dead",this.onStateChange?.("dead")),this.onStatsUpdate?.({health:this.survivalStats.health,hunger:this.survivalStats.hunger,thirst:this.survivalStats.thirst,stamina:this.survivalStats.stamina,temperature:this.survivalStats.temperature,mana:this.survivalStats.mana,maxMana:this.survivalStats.maxMana})}if(this.entityManager&&this.player&&(this.entityManager.setPlayerPosition(this.player.position),this.entityManager.update(i)),this.weaponManager?.update(i,(o,a,l)=>this.worldManager?.getBlock(o,a,l)??0),this.bulletPool?.update(i,(o,a,l)=>Xn(this.worldManager?.getBlock(o,a,l)??0)),this.damageSystem?.update(i),this.worldManager&&this.player){const o=this.worldManager.update(this.player.position.x,this.player.position.z);for(const a of o)this.sendChunkToWorker(a)}if(this.fogSystem&&this.player&&this.worldManager){const o=this.worldManager.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z));this.player.position.y<30?this.fogSystem.setCaveFog():this.fogSystem.setBiomeFog(o),this.fogSystem.setSunHeight(this.dayNightCycle.getSunHeight()),this.fogSystem.update(i)}this.portalManager?.update(i)}this.dayNightCycle.update(i),this.particleSystem.update(i);const s=this.dayNightCycle.getSunDirection();this.skyRenderer.update(this.elapsed,s,this.dayNightCycle.getDayProgress(),this.renderer.mainCamera.position),this.waterRenderer.updateUniforms(this.elapsed,this.renderer.mainCamera.position,s),this.renderer.render(),this.saveManager.checkAutosave(this.elapsed)};sendChunkToWorker(e){if(!this.worldManager||!this.chunkWorker||this.pendingMeshes.has(e))return;const t=this.worldManager.getChunk(parseInt(e.split(",")[0]),parseInt(e.split(",")[1]));if(!t)return;const i=this.worldManager.getNeighborVoxels(t.chunkX,t.chunkZ);this.pendingMeshes.set(e,!0),this.chunkWorker.postMessage({chunkX:t.chunkX,chunkZ:t.chunkZ,voxels:t.voxels,neighbors:i})}rebuildAllVisibleChunks(){if(this.worldManager)for(const[e]of this.worldManager.getAllChunks())this.sendChunkToWorker(e)}respawn(){if(this.survivalStats?.respawn(),this.player&&this.worldManager){const e=Gc.findLandSpawn((i,r,s)=>this.worldManager.getBlock(i,r,s),8,8);this.player.position={x:e.x,y:e.y,z:e.z},this.player.velocity={x:0,y:0,z:0};const t=this.player.getEyePosition();this.renderer.setMainCameraPosition(t.x,t.y,t.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch)}this.gameState="playing",this.onStateChange?.("playing")}stop(){this.animFrameId&&cancelAnimationFrame(this.animFrameId)}getBiomeAt(e,t){return this.worldManager?.getBiomeAt(e,t)??it.PLAINS}}const ig=({health:n,hunger:e,thirst:t,stamina:i,temperature:r,mana:s,maxMana:o,hasStaff:a,breakProgress:l})=>{const{slots:u,selected:f}=Us(),c=({value:d,max:p,color:g,icon:y})=>oe.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[oe.jsx("span",{className:"text-sm w-5 text-center",children:y}),oe.jsx("div",{className:"w-32 h-3 bg-gray-800 rounded overflow-hidden border border-gray-600",children:oe.jsx("div",{className:`h-full ${g} transition-all duration-200`,style:{width:`${d/p*100}%`}})})]});return oe.jsxs("div",{className:"fixed inset-0 pointer-events-none z-20",style:{fontFamily:"monospace"},children:[oe.jsxs("div",{className:"absolute top-4 left-4",children:[oe.jsx(c,{value:n,max:100,color:"bg-red-500",icon:"❤"}),oe.jsx(c,{value:e,max:100,color:"bg-orange-400",icon:"🍗"}),oe.jsx(c,{value:t,max:100,color:"bg-blue-400",icon:"💧"}),oe.jsx(c,{value:i,max:100,color:"bg-yellow-400",icon:"⚡"}),a&&oe.jsx(c,{value:s,max:o,color:"bg-purple-500",icon:"✦"}),r<-.5&&oe.jsx("div",{className:"text-cyan-300 text-sm",children:"❄ Cold"}),r>.7&&oe.jsx("div",{className:"text-red-300 text-sm",children:"🔥 Hot"})]}),l>0&&oe.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8",children:oe.jsx("div",{className:"w-16 h-1 bg-gray-700 rounded",children:oe.jsx("div",{className:"h-full bg-white rounded",style:{width:`${l*100}%`}})})}),oe.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1",children:u.slice(0,9).map((d,p)=>oe.jsxs("div",{className:`w-12 h-12 flex items-center justify-center border-2 ${p===f?"border-white bg-gray-700":"border-gray-600 bg-gray-800"} relative`,children:[d&&oe.jsxs(oe.Fragment,{children:[oe.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:RC(d.id)}}),oe.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:d.count>1?d.count:""})]}),oe.jsx("span",{className:"absolute top-0 left-0.5 text-xs text-gray-400",children:p+1})]},p))})]})};function RC(n){return{1:"#4CAF50",2:"#795548",3:"#9E9E9E",4:"#FDD835",5:"#E8C86A",6:"#FAFAFA",7:"#B3E5FC",8:"#4E342E",9:"#7B1FA2",10:"#FF8F00",14:"#6D4C41",15:"#2E7D32",16:"#212121",17:"#616161",101:"#C0C0C0",102:"#888888",103:"#555555",104:"#9C27B0"}[n]||"#666"}const m_=[{name:"Plank",pattern:[14,null,null,null,null,null,null,null,null],result:{id:113,count:4}},{name:"Stick",pattern:[113,null,null,113,null,null,null,null,null],result:{id:114,count:4}},{name:"Sword",pattern:[103,null,null,103,null,null,114,null,null],result:{id:101,count:1}},{name:"Pistol",pattern:[103,103,103,null,114,null,null,null,null],result:{id:102,count:1}},{name:"Rifle",pattern:[103,103,103,114,103,103,114,null,null],result:{id:103,count:1}},{name:"Magic Staff",pattern:[9,9,9,null,114,null,null,114,null],result:{id:104,count:1}},{name:"Ammo",pattern:[103,102,103,null,null,null,null,null,null],result:{id:106,count:16}},{name:"Portal Frame",pattern:[9,9,9,9,null,9,9,9,9],result:{id:21,count:1}},{name:"Igniter",pattern:[104,103,null,null,null,null,null,null,null],result:{id:115,count:1}}];class Bo{static matchRecipe(e){for(const t of m_)if(Bo.matchesPattern(e,t.pattern))return t;return null}static matchesPattern(e,t){const i=Bo.getBounds(e),r=Bo.getBounds(t);if(!i||!r||i.w!==r.w||i.h!==r.h)return!1;for(let s=0;s<i.h;s++)for(let o=0;o<i.w;o++){const a=(i.y+s)*3+(i.x+o),l=(r.y+s)*3+(r.x+o);if(e[a]!==t[l])return!1}return!0}static getBounds(e){let t=3,i=3,r=-1,s=-1;for(let o=0;o<9;o++)if(e[o]!==null){const a=o%3,l=Math.floor(o/3);t=Math.min(t,a),i=Math.min(i,l),r=Math.max(r,a),s=Math.max(s,l)}return r<0?null:{x:t,y:i,w:r-t+1,h:s-i+1}}}function Vc(n){return{1:"#4CAF50",2:"#795548",3:"#9E9E9E",4:"#FDD835",9:"#7B1FA2",14:"#6D4C41",101:"#C0C0C0",102:"#888888",103:"#555555",104:"#9C27B0",113:"#8D6E63",114:"#6D4C41"}[n]||"#666"}const bC=({isOpen:n,onClose:e})=>{const{slots:t,swapSlots:i,addItem:r,removeItem:s}=Us(),[o,a]=Ft.useState(new Array(9).fill(null)),[l,u]=Ft.useState(null);if(!n)return null;const f=Bo.matchRecipe(o),c=g=>{l!==null?(i(l,g),u(null)):t[g]&&u(g)},d=()=>{f&&(r(f.result.id,f.result.count),a(new Array(9).fill(null)))},p=g=>{if(l!==null&&t[l]){const y=[...o];y[g]=t[l].id,a(y),s(l,1),u(null)}};return oe.jsxs("div",{className:"fixed inset-0 z-30 flex items-center justify-center",style:{pointerEvents:"all"},children:[oe.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-70",onClick:e}),oe.jsxs("div",{className:"relative flex gap-6 p-4 bg-gray-900 border border-gray-600 rounded",children:[oe.jsxs("div",{children:[oe.jsx("h3",{className:"text-white text-sm mb-2 font-bold",children:"Inventory"}),oe.jsx("div",{className:"grid grid-cols-9 gap-1",children:t.map((g,y)=>oe.jsx("div",{onClick:()=>c(y),className:`w-12 h-12 flex items-center justify-center border cursor-pointer relative hover:bg-gray-700 ${l===y?"border-yellow-400 bg-gray-700":"border-gray-600 bg-gray-800"}`,children:g&&oe.jsxs(oe.Fragment,{children:[oe.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:Vc(g.id)}}),oe.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:g.count>1?g.count:""})]})},y))})]}),oe.jsxs("div",{children:[oe.jsx("h3",{className:"text-white text-sm mb-2 font-bold",children:"Crafting"}),oe.jsx("div",{className:"grid grid-cols-3 gap-1 mb-2",children:o.map((g,y)=>oe.jsx("div",{onClick:()=>p(y),className:"w-12 h-12 flex items-center justify-center border border-gray-600 bg-gray-800 cursor-pointer hover:bg-gray-700",children:g!==null&&oe.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:Vc(g)}})},y))}),oe.jsxs("div",{className:"flex items-center gap-2",children:[oe.jsx("span",{className:"text-white text-lg",children:"→"}),oe.jsx("div",{onClick:d,className:`w-12 h-12 flex items-center justify-center border ${f?"border-green-500 cursor-pointer hover:bg-gray-700":"border-gray-600"} bg-gray-800`,children:f&&oe.jsx("div",{className:"w-8 h-8 rounded-sm relative",style:{backgroundColor:Vc(f.result.id)},children:oe.jsx("span",{className:"absolute bottom-0 right-0 text-white text-xs",children:f.result.count})})})]}),oe.jsxs("div",{className:"mt-4 max-h-48 overflow-y-auto",children:[oe.jsx("h4",{className:"text-gray-400 text-xs mb-1",children:"Recipes:"}),m_.map((g,y)=>oe.jsx("div",{className:"text-gray-300 text-xs py-0.5",children:g.name},y))]})]})]})]})},LC={[it.PLAINS]:"#4CAF50",[it.DESERT]:"#FDD835",[it.TUNDRA]:"#E0E0E0",[it.MARSH]:"#4E342E",[it.CRYSTAL_CAVERNS]:"#9C27B0"},PC=({playerX:n,playerZ:e,getBiomeAt:t})=>{const i=Ft.useRef(null),r=Ft.useRef(0);return Ft.useEffect(()=>{if(r.current++,r.current%10!==0)return;const s=i.current;if(!s)return;const o=s.getContext("2d");if(!o)return;const a=64,l=32;for(let u=0;u<a;u++)for(let f=0;f<a;f++){const c=Math.floor(n)+(u-l),d=Math.floor(e)+(f-l),p=t(c,d);o.fillStyle=LC[p]||"#333",o.fillRect(u,f,1,1)}o.fillStyle="#FFFFFF",o.fillRect(l-1,l-1,3,3)}),oe.jsx("canvas",{ref:i,width:64,height:64,className:"fixed top-4 right-4 z-20 border border-gray-600 rounded",style:{imageRendering:"pixelated",width:"96px",height:"96px"}})},DC=({onRespawn:n})=>oe.jsxs("div",{className:"fixed inset-0 z-40 flex flex-col items-center justify-center",style:{background:"radial-gradient(ellipse at center, rgba(139,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)",pointerEvents:"all"},children:[oe.jsx("h1",{className:"text-6xl font-bold text-red-500 mb-8 tracking-widest",children:"YOU DIED"}),oe.jsx("button",{onClick:n,className:"px-8 py-3 bg-gray-800 text-white border border-gray-500 rounded hover:bg-gray-700 text-lg cursor-pointer",children:"Respawn"})]}),NC=({onNewGame:n,onLoadGame:e,hasSave:t})=>{const[i,r]=Ft.useState(""),s=()=>{const o=i?parseInt(i)||0:Math.floor(Math.random()*999999);n(o)};return oe.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950",style:{pointerEvents:"all"},children:[oe.jsx("h1",{className:"text-5xl font-bold text-white mb-2 tracking-wider",children:"VOXEL SURVIVAL"}),oe.jsx("p",{className:"text-gray-400 mb-8",children:"A block world awaits"}),oe.jsxs("div",{className:"flex flex-col items-center gap-4 mb-8",children:[oe.jsx("input",{type:"text",placeholder:"Seed (optional)",value:i,onChange:o=>r(o.target.value),className:"px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded w-64 text-center"}),oe.jsx("button",{onClick:s,className:"px-8 py-3 bg-green-700 text-white rounded hover:bg-green-600 text-lg font-bold w-64 cursor-pointer",children:"New Game"}),t&&oe.jsx("button",{onClick:e,className:"px-8 py-3 bg-blue-700 text-white rounded hover:bg-blue-600 text-lg font-bold w-64 cursor-pointer",children:"Load Game"})]}),oe.jsxs("div",{className:"text-gray-500 text-sm max-w-md text-center",children:[oe.jsx("h3",{className:"text-gray-400 font-bold mb-2",children:"Controls"}),oe.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-1 text-left",children:[oe.jsx("span",{children:"WASD"}),oe.jsx("span",{children:"Move"}),oe.jsx("span",{children:"Mouse"}),oe.jsx("span",{children:"Look"}),oe.jsx("span",{children:"Space"}),oe.jsx("span",{children:"Jump"}),oe.jsx("span",{children:"Shift"}),oe.jsx("span",{children:"Sprint"}),oe.jsx("span",{children:"LMB"}),oe.jsx("span",{children:"Break Block"}),oe.jsx("span",{children:"E"}),oe.jsx("span",{children:"Place Block"}),oe.jsx("span",{children:"F"}),oe.jsx("span",{children:"Drink Water"}),oe.jsx("span",{children:"Tab"}),oe.jsx("span",{children:"Inventory"}),oe.jsx("span",{children:"1-9"}),oe.jsx("span",{children:"Hotbar Slot"}),oe.jsx("span",{children:"Scroll"}),oe.jsx("span",{children:"Cycle Slot"}),oe.jsx("span",{children:"F5"}),oe.jsx("span",{children:"Save Game"})]})]})]})},IC=()=>oe.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none",children:oe.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:[oe.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),oe.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"14",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),oe.jsx("line",{x1:"2",y1:"8",x2:"6",y2:"8",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),oe.jsx("line",{x1:"10",y1:"8",x2:"14",y2:"8",stroke:"white",strokeWidth:"1.5",opacity:"0.8"})]})}),UC=()=>{const n=Ft.useRef(null),e=Ft.useRef(null),[t,i]=Ft.useState("menu"),[r,s]=Ft.useState(!1),[o,a]=Ft.useState({health:100,hunger:100,thirst:100,stamina:100,temperature:.2,mana:100,maxMana:100});Ft.useEffect(()=>{const y=new CC;return e.current=y,y.saveManager.hasSave().then(s),()=>{y.stop()}},[]);const l=Ft.useCallback(y=>{if(!y||!e.current)return;const m=e.current,h=m.renderer.getDomElement();y.appendChild(h),m.init(h),m.onStateChange=v=>{i(v)},m.onStatsUpdate=v=>{a(v)}},[]),u=Ft.useCallback(y=>{if(!e.current)return;const m=n.current;m&&l(m),e.current.startGame(y)},[l]),f=Ft.useCallback(()=>{if(!e.current)return;const y=n.current;y&&l(y),e.current.loadGame()},[l]),c=Ft.useCallback(()=>{e.current?.respawn()},[]),d=Ft.useCallback(()=>{e.current&&(e.current.gameState="playing",i("playing"))},[]),p=e.current?.player?.position.x??0,g=e.current?.player?.position.z??0;return oe.jsxs("div",{className:"w-full h-full relative",children:[oe.jsx("div",{ref:n,className:"w-full h-full"}),t==="menu"&&oe.jsx(NC,{onNewGame:u,onLoadGame:f,hasSave:r}),t==="playing"&&oe.jsxs(oe.Fragment,{children:[oe.jsx(ig,{health:o.health,hunger:o.hunger,thirst:o.thirst,stamina:o.stamina,temperature:o.temperature,mana:o.mana,maxMana:o.maxMana,hasStaff:!1,breakProgress:e.current?.blockInteraction?.getBreakProgress()??0}),oe.jsx(IC,{}),oe.jsx(PC,{playerX:p,playerZ:g,getBiomeAt:(y,m)=>e.current?.getBiomeAt(y,m)??0})]}),t==="inventory"&&oe.jsxs(oe.Fragment,{children:[oe.jsx(ig,{health:o.health,hunger:o.hunger,thirst:o.thirst,stamina:o.stamina,temperature:o.temperature,mana:o.mana,maxMana:o.maxMana,hasStaff:!1,breakProgress:0}),oe.jsx(bC,{isOpen:!0,onClose:d})]}),t==="dead"&&oe.jsx(DC,{onRespawn:c})]})};Wc.createRoot(document.getElementById("root")).render(oe.jsx(pg.StrictMode,{children:oe.jsx(UC,{})}));
//# sourceMappingURL=index-Cg7xsD_a.js.map
