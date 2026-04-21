(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ug={exports:{}},ac={},fg={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),M_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),A_=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),b_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),P_=Symbol.for("react.memo"),D_=Symbol.for("react.lazy"),ud=Symbol.iterator;function I_(n){return n===null||typeof n!="object"?null:(n=ud&&n[ud]||n["@@iterator"],typeof n=="function"?n:null)}var hg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dg=Object.assign,pg={};function Js(n,e,t){this.props=n,this.context=e,this.refs=pg,this.updater=t||hg}Js.prototype.isReactComponent={};Js.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Js.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function mg(){}mg.prototype=Js.prototype;function Jf(n,e,t){this.props=n,this.context=e,this.refs=pg,this.updater=t||hg}var eh=Jf.prototype=new mg;eh.constructor=Jf;dg(eh,Js.prototype);eh.isPureReactComponent=!0;var fd=Array.isArray,gg=Object.prototype.hasOwnProperty,th={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function _g(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gg.call(e,i)&&!vg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ca,type:n,key:s,ref:o,props:r,_owner:th.current}}function N_(n,e){return{$$typeof:ca,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function nh(n){return typeof n=="object"&&n!==null&&n.$$typeof===ca}function O_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var hd=/\/+/g;function Uc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?O_(""+n.key):e.toString(36)}function gl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ca:case M_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Uc(o,0):i,fd(r)?(t="",n!=null&&(t=n.replace(hd,"$&/")+"/"),gl(r,e,t,"",function(c){return c})):r!=null&&(nh(r)&&(r=N_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fd(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Uc(s,a);o+=gl(s,e,t,l,r)}else if(l=I_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Uc(s,a++),o+=gl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ma(n,e,t){if(n==null)return n;var i=[],r=0;return gl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function U_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Sn={current:null},vl={transition:null},k_={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:vl,ReactCurrentOwner:th};function yg(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:Ma,forEach:function(n,e,t){Ma(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ma(n,function(){e++}),e},toArray:function(n){return Ma(n,function(e){return e})||[]},only:function(n){if(!nh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=Js;at.Fragment=T_;at.Profiler=A_;at.PureComponent=Jf;at.StrictMode=w_;at.Suspense=L_;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;at.act=yg;at.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=dg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=th.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)gg.call(e,l)&&!vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ca,type:n.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(n){return n={$$typeof:R_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:C_,_context:n},n.Consumer=n};at.createElement=_g;at.createFactory=function(n){var e=_g.bind(null,n);return e.type=n,e};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:b_,render:n}};at.isValidElement=nh;at.lazy=function(n){return{$$typeof:D_,_payload:{_status:-1,_result:n},_init:U_}};at.memo=function(n,e){return{$$typeof:P_,type:n,compare:e===void 0?null:e}};at.startTransition=function(n){var e=vl.transition;vl.transition={};try{n()}finally{vl.transition=e}};at.unstable_act=yg;at.useCallback=function(n,e){return Sn.current.useCallback(n,e)};at.useContext=function(n){return Sn.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return Sn.current.useDeferredValue(n)};at.useEffect=function(n,e){return Sn.current.useEffect(n,e)};at.useId=function(){return Sn.current.useId()};at.useImperativeHandle=function(n,e,t){return Sn.current.useImperativeHandle(n,e,t)};at.useInsertionEffect=function(n,e){return Sn.current.useInsertionEffect(n,e)};at.useLayoutEffect=function(n,e){return Sn.current.useLayoutEffect(n,e)};at.useMemo=function(n,e){return Sn.current.useMemo(n,e)};at.useReducer=function(n,e,t){return Sn.current.useReducer(n,e,t)};at.useRef=function(n){return Sn.current.useRef(n)};at.useState=function(n){return Sn.current.useState(n)};at.useSyncExternalStore=function(n,e,t){return Sn.current.useSyncExternalStore(n,e,t)};at.useTransition=function(){return Sn.current.useTransition()};at.version="18.3.1";fg.exports=at;var xt=fg.exports;const Sg=Qf(xt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=xt,B_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,G_=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V_={key:!0,ref:!0,__self:!0,__source:!0};function xg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H_.call(e,i)&&!V_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B_,type:n,key:s,ref:o,props:r,_owner:G_.current}}ac.Fragment=z_;ac.jsx=xg;ac.jsxs=xg;ug.exports=ac;var ee=ug.exports,Yu={},Eg={exports:{}},Hn={},Mg={exports:{}},Tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(B,X){var j=B.length;B.push(X);e:for(;0<j;){var ie=j-1>>>1,le=B[ie];if(0<r(le,X))B[ie]=X,B[j]=le,j=ie;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var X=B[0],j=B.pop();if(j!==X){B[0]=j;e:for(var ie=0,le=B.length,J=le>>>1;ie<J;){var ae=2*(ie+1)-1,ye=B[ae],we=ae+1,Ce=B[we];if(0>r(ye,j))we<le&&0>r(Ce,ye)?(B[ie]=Ce,B[we]=j,ie=we):(B[ie]=ye,B[ae]=j,ie=ae);else if(we<le&&0>r(Ce,j))B[ie]=Ce,B[we]=j,ie=we;else break e}}return X}function r(B,X){var j=B.sortIndex-X.sortIndex;return j!==0?j:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(B){for(var X=t(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=B)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(c)}}function E(B){if(y=!1,_(B),!v)if(t(l)!==null)v=!0,te(A);else{var X=t(c);X!==null&&se(E,X.startTime-B)}}function A(B,X){v=!1,y&&(y=!1,f(O),O=-1),p=!0;var j=d;try{for(_(X),h=t(l);h!==null&&(!(h.expirationTime>X)||B&&!V());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,d=h.priorityLevel;var le=ie(h.expirationTime<=X);X=n.unstable_now(),typeof le=="function"?h.callback=le:h===t(l)&&i(l),_(X)}else i(l);h=t(l)}if(h!==null)var J=!0;else{var ae=t(c);ae!==null&&se(E,ae.startTime-X),J=!1}return J}finally{h=null,d=j,p=!1}}var S=!1,T=null,O=-1,M=5,C=-1;function V(){return!(n.unstable_now()-C<M)}function Z(){if(T!==null){var B=n.unstable_now();C=B;var X=!0;try{X=T(!0,B)}finally{X?oe():(S=!1,T=null)}}else S=!1}var oe;if(typeof g=="function")oe=function(){g(Z)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,W=F.port2;F.port1.onmessage=Z,oe=function(){W.postMessage(null)}}else oe=function(){m(Z,0)};function te(B){T=B,S||(S=!0,oe())}function se(B,X){O=m(function(){B(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,te(A))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(B){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var j=d;d=X;try{return B()}finally{d=j}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=d;d=B;try{return X()}finally{d=j}},n.unstable_scheduleCallback=function(B,X,j){var ie=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ie+j:ie):j=ie,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=j+le,B={id:u++,callback:X,priorityLevel:B,startTime:j,expirationTime:le,sortIndex:-1},j>ie?(B.sortIndex=j,e(c,B),t(l)===null&&B===t(c)&&(y?(f(O),O=-1):y=!0,se(E,j-ie))):(B.sortIndex=le,e(l,B),v||p||(v=!0,te(A))),B},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(B){var X=d;return function(){var j=d;d=X;try{return B.apply(this,arguments)}finally{d=j}}}})(Tg);Mg.exports=Tg;var W_=Mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=xt,zn=W_;function me(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wg=new Set,Wo={};function Kr(n,e){Hs(n,e),Hs(n+"Capture",e)}function Hs(n,e){for(Wo[n]=e,n=0;n<e.length;n++)wg.add(e[n])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=Object.prototype.hasOwnProperty,Y_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dd={},pd={};function j_(n){return ju.call(pd,n)?!0:ju.call(dd,n)?!1:Y_.test(n)?pd[n]=!0:(dd[n]=!0,!1)}function K_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q_(n,e,t,i){if(e===null||typeof e>"u"||K_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var cn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){cn[n]=new xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];cn[e]=new xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){cn[n]=new xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){cn[n]=new xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){cn[n]=new xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){cn[n]=new xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){cn[n]=new xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){cn[n]=new xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){cn[n]=new xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var ih=/[\-:]([a-z])/g;function rh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ih,rh);cn[e]=new xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ih,rh);cn[e]=new xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ih,rh);cn[e]=new xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){cn[n]=new xn(n,1,!1,n.toLowerCase(),null,!1,!1)});cn.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){cn[n]=new xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function sh(n,e,t,i){var r=cn.hasOwnProperty(e)?cn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q_(e,t,r,i)&&(t=null),i||r===null?j_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Wi=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Ag=Symbol.for("react.provider"),Cg=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),lh=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),Rg=Symbol.for("react.offscreen"),md=Symbol.iterator;function lo(n){return n===null||typeof n!="object"?null:(n=md&&n[md]||n["@@iterator"],typeof n=="function"?n:null)}var kt=Object.assign,kc;function Ro(n){if(kc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);kc=e&&e[1]||""}return`
`+kc+n}var Fc=!1;function Bc(n,e){if(!n||Fc)return"";Fc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ro(n):""}function $_(n){switch(n.tag){case 5:return Ro(n.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return n=Bc(n.type,!1),n;case 11:return n=Bc(n.type.render,!1),n;case 1:return n=Bc(n.type,!0),n;default:return""}}function Zu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ss:return"Fragment";case ys:return"Portal";case Ku:return"Profiler";case oh:return"StrictMode";case qu:return"Suspense";case $u:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Cg:return(n.displayName||"Context")+".Consumer";case Ag:return(n._context.displayName||"Context")+".Provider";case ah:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case lh:return e=n.displayName||null,e!==null?e:Zu(n.type)||"Memo";case Zi:e=n._payload,n=n._init;try{return Zu(n(e))}catch{}}return null}function Z_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function bg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q_(n){var e=bg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function wa(n){n._valueTracker||(n._valueTracker=Q_(n))}function Lg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=bg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function bl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Qu(n,e){var t=e.checked;return kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function gd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=vr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pg(n,e){e=e.checked,e!=null&&sh(n,"checked",e,!1)}function Ju(n,e){Pg(n,e);var t=vr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ef(n,e.type,t):e.hasOwnProperty("defaultValue")&&ef(n,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function vd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ef(n,e,t){(e!=="number"||bl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var bo=Array.isArray;function Is(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+vr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function tf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return kt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _d(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(me(92));if(bo(t)){if(1<t.length)throw Error(me(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:vr(t)}}function Dg(n,e){var t=vr(e.value),i=vr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function yd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ig(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ig(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Aa,Ng=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Xo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J_=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(n){J_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Io[e]=Io[n]})});function Og(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Io.hasOwnProperty(n)&&Io[n]?(""+e).trim():e+"px"}function Ug(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Og(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ey=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(n,e){if(e){if(ey[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function sf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function ch(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var af=null,Ns=null,Os=null;function Sd(n){if(n=ha(n)){if(typeof af!="function")throw Error(me(280));var e=n.stateNode;e&&(e=hc(e),af(n.stateNode,n.type,e))}}function kg(n){Ns?Os?Os.push(n):Os=[n]:Ns=n}function Fg(){if(Ns){var n=Ns,e=Os;if(Os=Ns=null,Sd(n),e)for(n=0;n<e.length;n++)Sd(e[n])}}function Bg(n,e){return n(e)}function zg(){}var zc=!1;function Hg(n,e,t){if(zc)return n(e,t);zc=!0;try{return Bg(n,e,t)}finally{zc=!1,(Ns!==null||Os!==null)&&(zg(),Fg())}}function Yo(n,e){var t=n.stateNode;if(t===null)return null;var i=hc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(me(231,e,typeof t));return t}var lf=!1;if(ki)try{var co={};Object.defineProperty(co,"passive",{get:function(){lf=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{lf=!1}function ty(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var No=!1,Ll=null,Pl=!1,cf=null,ny={onError:function(n){No=!0,Ll=n}};function iy(n,e,t,i,r,s,o,a,l){No=!1,Ll=null,ty.apply(ny,arguments)}function ry(n,e,t,i,r,s,o,a,l){if(iy.apply(this,arguments),No){if(No){var c=Ll;No=!1,Ll=null}else throw Error(me(198));Pl||(Pl=!0,cf=c)}}function qr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Gg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function xd(n){if(qr(n)!==n)throw Error(me(188))}function sy(n){var e=n.alternate;if(!e){if(e=qr(n),e===null)throw Error(me(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return xd(r),n;if(s===i)return xd(r),e;s=s.sibling}throw Error(me(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(t.alternate!==i)throw Error(me(190))}if(t.tag!==3)throw Error(me(188));return t.stateNode.current===t?n:e}function Vg(n){return n=sy(n),n!==null?Wg(n):null}function Wg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Wg(n);if(e!==null)return e;n=n.sibling}return null}var Xg=zn.unstable_scheduleCallback,Ed=zn.unstable_cancelCallback,oy=zn.unstable_shouldYield,ay=zn.unstable_requestPaint,zt=zn.unstable_now,ly=zn.unstable_getCurrentPriorityLevel,uh=zn.unstable_ImmediatePriority,Yg=zn.unstable_UserBlockingPriority,Dl=zn.unstable_NormalPriority,cy=zn.unstable_LowPriority,jg=zn.unstable_IdlePriority,lc=null,Ei=null;function uy(n){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(lc,n,void 0,(n.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:dy,fy=Math.log,hy=Math.LN2;function dy(n){return n>>>=0,n===0?32:31-(fy(n)/hy|0)|0}var Ca=64,Ra=4194304;function Lo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Il(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Lo(a):(s&=o,s!==0&&(i=Lo(s)))}else o=t&~r,o!==0?i=Lo(o):s!==0&&(i=Lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-hi(e),r=1<<t,i|=n[t],e&=~r;return i}function py(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function my(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-hi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=py(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function uf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Kg(){var n=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),n}function Hc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ua(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-hi(e),n[e]=t}function gy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-hi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function fh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-hi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var mt=0;function qg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var $g,hh,Zg,Qg,Jg,ff=!1,ba=[],or=null,ar=null,lr=null,jo=new Map,Ko=new Map,er=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Md(n,e){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function uo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&hh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function _y(n,e,t,i,r){switch(e){case"focusin":return or=uo(or,n,e,t,i,r),!0;case"dragenter":return ar=uo(ar,n,e,t,i,r),!0;case"mouseover":return lr=uo(lr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return jo.set(s,uo(jo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ko.set(s,uo(Ko.get(s)||null,n,e,t,i,r)),!0}return!1}function e0(n){var e=Nr(n.target);if(e!==null){var t=qr(e);if(t!==null){if(e=t.tag,e===13){if(e=Gg(t),e!==null){n.blockedOn=e,Jg(n.priority,function(){Zg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _l(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=hf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);of=i,t.target.dispatchEvent(i),of=null}else return e=ha(t),e!==null&&hh(e),n.blockedOn=t,!1;e.shift()}return!0}function Td(n,e,t){_l(n)&&t.delete(e)}function yy(){ff=!1,or!==null&&_l(or)&&(or=null),ar!==null&&_l(ar)&&(ar=null),lr!==null&&_l(lr)&&(lr=null),jo.forEach(Td),Ko.forEach(Td)}function fo(n,e){n.blockedOn===e&&(n.blockedOn=null,ff||(ff=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,yy)))}function qo(n){function e(r){return fo(r,n)}if(0<ba.length){fo(ba[0],n);for(var t=1;t<ba.length;t++){var i=ba[t];i.blockedOn===n&&(i.blockedOn=null)}}for(or!==null&&fo(or,n),ar!==null&&fo(ar,n),lr!==null&&fo(lr,n),jo.forEach(e),Ko.forEach(e),t=0;t<er.length;t++)i=er[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<er.length&&(t=er[0],t.blockedOn===null);)e0(t),t.blockedOn===null&&er.shift()}var Us=Wi.ReactCurrentBatchConfig,Nl=!0;function Sy(n,e,t,i){var r=mt,s=Us.transition;Us.transition=null;try{mt=1,dh(n,e,t,i)}finally{mt=r,Us.transition=s}}function xy(n,e,t,i){var r=mt,s=Us.transition;Us.transition=null;try{mt=4,dh(n,e,t,i)}finally{mt=r,Us.transition=s}}function dh(n,e,t,i){if(Nl){var r=hf(n,e,t,i);if(r===null)Zc(n,e,i,Ol,t),Md(n,i);else if(_y(r,n,e,t,i))i.stopPropagation();else if(Md(n,i),e&4&&-1<vy.indexOf(n)){for(;r!==null;){var s=ha(r);if(s!==null&&$g(s),s=hf(n,e,t,i),s===null&&Zc(n,e,i,Ol,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zc(n,e,i,null,t)}}var Ol=null;function hf(n,e,t,i){if(Ol=null,n=ch(i),n=Nr(n),n!==null)if(e=qr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Gg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ol=n,null}function t0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ly()){case uh:return 1;case Yg:return 4;case Dl:case cy:return 16;case jg:return 536870912;default:return 16}default:return 16}}var nr=null,ph=null,yl=null;function n0(){if(yl)return yl;var n,e=ph,t=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return yl=r.slice(n,1<i?1-i:void 0)}function Sl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function La(){return!0}function wd(){return!1}function Gn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:wd,this.isPropagationStopped=wd,this}return kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mh=Gn(eo),fa=kt({},eo,{view:0,detail:0}),Ey=Gn(fa),Gc,Vc,ho,cc=kt({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ho&&(ho&&n.type==="mousemove"?(Gc=n.screenX-ho.screenX,Vc=n.screenY-ho.screenY):Vc=Gc=0,ho=n),Gc)},movementY:function(n){return"movementY"in n?n.movementY:Vc}}),Ad=Gn(cc),My=kt({},cc,{dataTransfer:0}),Ty=Gn(My),wy=kt({},fa,{relatedTarget:0}),Wc=Gn(wy),Ay=kt({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=Gn(Ay),Ry=kt({},eo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),by=Gn(Ry),Ly=kt({},eo,{data:0}),Cd=Gn(Ly),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ny(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Iy[n])?!!e[n]:!1}function gh(){return Ny}var Oy=kt({},fa,{key:function(n){if(n.key){var e=Py[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Sl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(n){return n.type==="keypress"?Sl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Uy=Gn(Oy),ky=kt({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=Gn(ky),Fy=kt({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),By=Gn(Fy),zy=kt({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=Gn(zy),Gy=kt({},cc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=Gn(Gy),Wy=[9,13,27,32],vh=ki&&"CompositionEvent"in window,Oo=null;ki&&"documentMode"in document&&(Oo=document.documentMode);var Xy=ki&&"TextEvent"in window&&!Oo,i0=ki&&(!vh||Oo&&8<Oo&&11>=Oo),bd=" ",Ld=!1;function r0(n,e){switch(n){case"keyup":return Wy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function Yy(n,e){switch(n){case"compositionend":return s0(e);case"keypress":return e.which!==32?null:(Ld=!0,bd);case"textInput":return n=e.data,n===bd&&Ld?null:n;default:return null}}function jy(n,e){if(xs)return n==="compositionend"||!vh&&r0(n,e)?(n=n0(),yl=ph=nr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return i0&&e.locale!=="ko"?null:e.data;default:return null}}var Ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ky[n.type]:e==="textarea"}function o0(n,e,t,i){kg(i),e=Ul(e,"onChange"),0<e.length&&(t=new mh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Uo=null,$o=null;function qy(n){v0(n,0)}function uc(n){var e=Ts(n);if(Lg(e))return n}function $y(n,e){if(n==="change")return e}var a0=!1;if(ki){var Xc;if(ki){var Yc="oninput"in document;if(!Yc){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Yc=typeof Dd.oninput=="function"}Xc=Yc}else Xc=!1;a0=Xc&&(!document.documentMode||9<document.documentMode)}function Id(){Uo&&(Uo.detachEvent("onpropertychange",l0),$o=Uo=null)}function l0(n){if(n.propertyName==="value"&&uc($o)){var e=[];o0(e,$o,n,ch(n)),Hg(qy,e)}}function Zy(n,e,t){n==="focusin"?(Id(),Uo=e,$o=t,Uo.attachEvent("onpropertychange",l0)):n==="focusout"&&Id()}function Qy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return uc($o)}function Jy(n,e){if(n==="click")return uc(e)}function eS(n,e){if(n==="input"||n==="change")return uc(e)}function tS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pi=typeof Object.is=="function"?Object.is:tS;function Zo(n,e){if(pi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ju.call(e,r)||!pi(n[r],e[r]))return!1}return!0}function Nd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Od(n,e){var t=Nd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Nd(t)}}function c0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?c0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function u0(){for(var n=window,e=bl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=bl(n.document)}return e}function _h(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function nS(n){var e=u0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&c0(t.ownerDocument.documentElement,t)){if(i!==null&&_h(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Od(t,s);var o=Od(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var iS=ki&&"documentMode"in document&&11>=document.documentMode,Es=null,df=null,ko=null,pf=!1;function Ud(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pf||Es==null||Es!==bl(i)||(i=Es,"selectionStart"in i&&_h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&Zo(ko,i)||(ko=i,i=Ul(df,"onSelect"),0<i.length&&(e=new mh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Es)))}function Pa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ms={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},jc={},f0={};ki&&(f0=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function fc(n){if(jc[n])return jc[n];if(!Ms[n])return n;var e=Ms[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in f0)return jc[n]=e[t];return n}var h0=fc("animationend"),d0=fc("animationiteration"),p0=fc("animationstart"),m0=fc("transitionend"),g0=new Map,kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(n,e){g0.set(n,e),Kr(e,[n])}for(var Kc=0;Kc<kd.length;Kc++){var qc=kd[Kc],rS=qc.toLowerCase(),sS=qc[0].toUpperCase()+qc.slice(1);yr(rS,"on"+sS)}yr(h0,"onAnimationEnd");yr(d0,"onAnimationIteration");yr(p0,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(m0,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Fd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ry(i,e,void 0,n),n.currentTarget=null}function v0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fd(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fd(r,a,c),s=l}}}if(Pl)throw n=cf,Pl=!1,cf=null,n}function Rt(n,e){var t=e[yf];t===void 0&&(t=e[yf]=new Set);var i=n+"__bubble";t.has(i)||(_0(e,n,2,!1),t.add(i))}function $c(n,e,t){var i=0;e&&(i|=4),_0(t,n,i,e)}var Da="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[Da]){n[Da]=!0,wg.forEach(function(t){t!=="selectionchange"&&(oS.has(t)||$c(t,!1,n),$c(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Da]||(e[Da]=!0,$c("selectionchange",!1,e))}}function _0(n,e,t,i){switch(t0(e)){case 1:var r=Sy;break;case 4:r=xy;break;default:r=dh}t=r.bind(null,e,t,n),r=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Zc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Hg(function(){var c=s,u=ch(t),h=[];e:{var d=g0.get(n);if(d!==void 0){var p=mh,v=n;switch(n){case"keypress":if(Sl(t)===0)break e;case"keydown":case"keyup":p=Uy;break;case"focusin":v="focus",p=Wc;break;case"focusout":v="blur",p=Wc;break;case"beforeblur":case"afterblur":p=Wc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=By;break;case h0:case d0:case p0:p=Cy;break;case m0:p=Hy;break;case"scroll":p=Ey;break;case"wheel":p=Vy;break;case"copy":case"cut":case"paste":p=by;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rd}var y=(e&4)!==0,m=!y&&n==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var g=c,_;g!==null;){_=g;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,f!==null&&(E=Yo(g,f),E!=null&&y.push(Jo(g,E,_)))),m)break;g=g.return}0<y.length&&(d=new p(d,v,null,t,u),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==of&&(v=t.relatedTarget||t.fromElement)&&(Nr(v)||v[Fi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?Nr(v):null,v!==null&&(m=qr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=Ad,E="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(y=Rd,E="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?d:Ts(p),_=v==null?d:Ts(v),d=new y(E,g+"leave",p,t,u),d.target=m,d.relatedTarget=_,E=null,Nr(u)===c&&(y=new y(f,g+"enter",v,t,u),y.target=_,y.relatedTarget=m,E=y),m=E,p&&v)t:{for(y=p,f=v,g=0,_=y;_;_=es(_))g++;for(_=0,E=f;E;E=es(E))_++;for(;0<g-_;)y=es(y),g--;for(;0<_-g;)f=es(f),_--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=es(y),f=es(f)}y=null}else y=null;p!==null&&Bd(h,d,p,y,!1),v!==null&&m!==null&&Bd(h,m,v,y,!0)}}e:{if(d=c?Ts(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=$y;else if(Pd(d))if(a0)A=eS;else{A=Qy;var S=Zy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=Jy);if(A&&(A=A(n,c))){o0(h,A,t,u);break e}S&&S(n,d,c),n==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&ef(d,"number",d.value)}switch(S=c?Ts(c):window,n){case"focusin":(Pd(S)||S.contentEditable==="true")&&(Es=S,df=c,ko=null);break;case"focusout":ko=df=Es=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Ud(h,t,u);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":Ud(h,t,u)}var T;if(vh)e:{switch(n){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else xs?r0(n,t)&&(O="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(i0&&t.locale!=="ko"&&(xs||O!=="onCompositionStart"?O==="onCompositionEnd"&&xs&&(T=n0()):(nr=u,ph="value"in nr?nr.value:nr.textContent,xs=!0)),S=Ul(c,O),0<S.length&&(O=new Cd(O,n,null,t,u),h.push({event:O,listeners:S}),T?O.data=T:(T=s0(t),T!==null&&(O.data=T)))),(T=Xy?Yy(n,t):jy(n,t))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(u=new Cd("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=T))}v0(h,e)})}function Jo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ul(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Yo(n,t),s!=null&&i.unshift(Jo(n,s,r)),s=Yo(n,e),s!=null&&i.push(Jo(n,s,r))),n=n.return}return i}function es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bd(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Yo(t,s),l!=null&&o.unshift(Jo(t,l,a))):r||(l=Yo(t,s),l!=null&&o.push(Jo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function zd(n){return(typeof n=="string"?n:""+n).replace(aS,`
`).replace(lS,"")}function Ia(n,e,t){if(e=zd(e),zd(n)!==e&&t)throw Error(me(425))}function kl(){}var mf=null,gf=null;function vf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(n){return Hd.resolve(null).then(n).catch(fS)}:_f;function fS(n){setTimeout(function(){throw n})}function Qc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),qo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);qo(e)}function cr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Gd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var to=Math.random().toString(36).slice(2),yi="__reactFiber$"+to,ea="__reactProps$"+to,Fi="__reactContainer$"+to,yf="__reactEvents$"+to,hS="__reactListeners$"+to,dS="__reactHandles$"+to;function Nr(n){var e=n[yi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Fi]||t[yi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Gd(n);n!==null;){if(t=n[yi])return t;n=Gd(n)}return e}n=t,t=n.parentNode}return null}function ha(n){return n=n[yi]||n[Fi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(me(33))}function hc(n){return n[ea]||null}var Sf=[],ws=-1;function Sr(n){return{current:n}}function Lt(n){0>ws||(n.current=Sf[ws],Sf[ws]=null,ws--)}function At(n,e){ws++,Sf[ws]=n.current,n.current=e}var _r={},mn=Sr(_r),Rn=Sr(!1),Gr=_r;function Gs(n,e){var t=n.type.contextTypes;if(!t)return _r;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function bn(n){return n=n.childContextTypes,n!=null}function Fl(){Lt(Rn),Lt(mn)}function Vd(n,e,t){if(mn.current!==_r)throw Error(me(168));At(mn,e),At(Rn,t)}function y0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,Z_(n)||"Unknown",r));return kt({},t,i)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Gr=mn.current,At(mn,n),At(Rn,Rn.current),!0}function Wd(n,e,t){var i=n.stateNode;if(!i)throw Error(me(169));t?(n=y0(n,e,Gr),i.__reactInternalMemoizedMergedChildContext=n,Lt(Rn),Lt(mn),At(mn,n)):Lt(Rn),At(Rn,t)}var Di=null,dc=!1,Jc=!1;function S0(n){Di===null?Di=[n]:Di.push(n)}function pS(n){dc=!0,S0(n)}function xr(){if(!Jc&&Di!==null){Jc=!0;var n=0,e=mt;try{var t=Di;for(mt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Di=null,dc=!1}catch(r){throw Di!==null&&(Di=Di.slice(n+1)),Xg(uh,xr),r}finally{mt=e,Jc=!1}}return null}var As=[],Cs=0,zl=null,Hl=0,jn=[],Kn=0,Vr=null,Ii=1,Ni="";function Cr(n,e){As[Cs++]=Hl,As[Cs++]=zl,zl=n,Hl=e}function x0(n,e,t){jn[Kn++]=Ii,jn[Kn++]=Ni,jn[Kn++]=Vr,Vr=n;var i=Ii;n=Ni;var r=32-hi(i)-1;i&=~(1<<r),t+=1;var s=32-hi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-hi(e)+r|t<<r|i,Ni=s+n}else Ii=1<<s|t<<r|i,Ni=n}function yh(n){n.return!==null&&(Cr(n,1),x0(n,1,0))}function Sh(n){for(;n===zl;)zl=As[--Cs],As[Cs]=null,Hl=As[--Cs],As[Cs]=null;for(;n===Vr;)Vr=jn[--Kn],jn[Kn]=null,Ni=jn[--Kn],jn[Kn]=null,Ii=jn[--Kn],jn[Kn]=null}var Bn=null,Fn=null,Dt=!1,li=null;function E0(n,e){var t=Zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Xd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Bn=n,Fn=cr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Bn=n,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Vr!==null?{id:Ii,overflow:Ni}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Bn=n,Fn=null,!0):!1;default:return!1}}function xf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ef(n){if(Dt){var e=Fn;if(e){var t=e;if(!Xd(n,e)){if(xf(n))throw Error(me(418));e=cr(t.nextSibling);var i=Bn;e&&Xd(n,e)?E0(i,t):(n.flags=n.flags&-4097|2,Dt=!1,Bn=n)}}else{if(xf(n))throw Error(me(418));n.flags=n.flags&-4097|2,Dt=!1,Bn=n}}}function Yd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Na(n){if(n!==Bn)return!1;if(!Dt)return Yd(n),Dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!vf(n.type,n.memoizedProps)),e&&(e=Fn)){if(xf(n))throw M0(),Error(me(418));for(;e;)E0(n,e),e=cr(e.nextSibling)}if(Yd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(me(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Fn=cr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Fn=null}}else Fn=Bn?cr(n.stateNode.nextSibling):null;return!0}function M0(){for(var n=Fn;n;)n=cr(n.nextSibling)}function Vs(){Fn=Bn=null,Dt=!1}function xh(n){li===null?li=[n]:li.push(n)}var mS=Wi.ReactCurrentBatchConfig;function po(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(me(309));var i=t.stateNode}if(!i)throw Error(me(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(me(284));if(!t._owner)throw Error(me(290,n))}return n}function Oa(n,e){throw n=Object.prototype.toString.call(e),Error(me(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function jd(n){var e=n._init;return e(n._payload)}function T0(n){function e(f,g){if(n){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=dr(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,n?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,g,_,E){return g===null||g.tag!==6?(g=ou(_,f.mode,E),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,E){var A=_.type;return A===Ss?u(f,g,_.props.children,E,_.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Zi&&jd(A)===g.type)?(E=r(g,_.props),E.ref=po(f,g,_),E.return=f,E):(E=Cl(_.type,_.key,_.props,null,f.mode,E),E.ref=po(f,g,_),E.return=f,E)}function c(f,g,_,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=au(_,f.mode,E),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function u(f,g,_,E,A){return g===null||g.tag!==7?(g=Fr(_,f.mode,E,A),g.return=f,g):(g=r(g,_),g.return=f,g)}function h(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ou(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ta:return _=Cl(g.type,g.key,g.props,null,f.mode,_),_.ref=po(f,null,g),_.return=f,_;case ys:return g=au(g,f.mode,_),g.return=f,g;case Zi:var E=g._init;return h(f,E(g._payload),_)}if(bo(g)||lo(g))return g=Fr(g,f.mode,_,null),g.return=f,g;Oa(f,g)}return null}function d(f,g,_,E){var A=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(f,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ta:return _.key===A?l(f,g,_,E):null;case ys:return _.key===A?c(f,g,_,E):null;case Zi:return A=_._init,d(f,g,A(_._payload),E)}if(bo(_)||lo(_))return A!==null?null:u(f,g,_,E,null);Oa(f,_)}return null}function p(f,g,_,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(_)||null,a(g,f,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ta:return f=f.get(E.key===null?_:E.key)||null,l(g,f,E,A);case ys:return f=f.get(E.key===null?_:E.key)||null,c(g,f,E,A);case Zi:var S=E._init;return p(f,g,_,S(E._payload),A)}if(bo(E)||lo(E))return f=f.get(_)||null,u(g,f,E,A,null);Oa(g,E)}return null}function v(f,g,_,E){for(var A=null,S=null,T=g,O=g=0,M=null;T!==null&&O<_.length;O++){T.index>O?(M=T,T=null):M=T.sibling;var C=d(f,T,_[O],E);if(C===null){T===null&&(T=M);break}n&&T&&C.alternate===null&&e(f,T),g=s(C,g,O),S===null?A=C:S.sibling=C,S=C,T=M}if(O===_.length)return t(f,T),Dt&&Cr(f,O),A;if(T===null){for(;O<_.length;O++)T=h(f,_[O],E),T!==null&&(g=s(T,g,O),S===null?A=T:S.sibling=T,S=T);return Dt&&Cr(f,O),A}for(T=i(f,T);O<_.length;O++)M=p(T,f,O,_[O],E),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?O:M.key),g=s(M,g,O),S===null?A=M:S.sibling=M,S=M);return n&&T.forEach(function(V){return e(f,V)}),Dt&&Cr(f,O),A}function y(f,g,_,E){var A=lo(_);if(typeof A!="function")throw Error(me(150));if(_=A.call(_),_==null)throw Error(me(151));for(var S=A=null,T=g,O=g=0,M=null,C=_.next();T!==null&&!C.done;O++,C=_.next()){T.index>O?(M=T,T=null):M=T.sibling;var V=d(f,T,C.value,E);if(V===null){T===null&&(T=M);break}n&&T&&V.alternate===null&&e(f,T),g=s(V,g,O),S===null?A=V:S.sibling=V,S=V,T=M}if(C.done)return t(f,T),Dt&&Cr(f,O),A;if(T===null){for(;!C.done;O++,C=_.next())C=h(f,C.value,E),C!==null&&(g=s(C,g,O),S===null?A=C:S.sibling=C,S=C);return Dt&&Cr(f,O),A}for(T=i(f,T);!C.done;O++,C=_.next())C=p(T,f,O,C.value,E),C!==null&&(n&&C.alternate!==null&&T.delete(C.key===null?O:C.key),g=s(C,g,O),S===null?A=C:S.sibling=C,S=C);return n&&T.forEach(function(Z){return e(f,Z)}),Dt&&Cr(f,O),A}function m(f,g,_,E){if(typeof _=="object"&&_!==null&&_.type===Ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ta:e:{for(var A=_.key,S=g;S!==null;){if(S.key===A){if(A=_.type,A===Ss){if(S.tag===7){t(f,S.sibling),g=r(S,_.props.children),g.return=f,f=g;break e}}else if(S.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Zi&&jd(A)===S.type){t(f,S.sibling),g=r(S,_.props),g.ref=po(f,S,_),g.return=f,f=g;break e}t(f,S);break}else e(f,S);S=S.sibling}_.type===Ss?(g=Fr(_.props.children,f.mode,E,_.key),g.return=f,f=g):(E=Cl(_.type,_.key,_.props,null,f.mode,E),E.ref=po(f,g,_),E.return=f,f=E)}return o(f);case ys:e:{for(S=_.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){t(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{t(f,g);break}else e(f,g);g=g.sibling}g=au(_,f.mode,E),g.return=f,f=g}return o(f);case Zi:return S=_._init,m(f,g,S(_._payload),E)}if(bo(_))return v(f,g,_,E);if(lo(_))return y(f,g,_,E);Oa(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(t(f,g.sibling),g=r(g,_),g.return=f,f=g):(t(f,g),g=ou(_,f.mode,E),g.return=f,f=g),o(f)):t(f,g)}return m}var Ws=T0(!0),w0=T0(!1),Gl=Sr(null),Vl=null,Rs=null,Eh=null;function Mh(){Eh=Rs=Vl=null}function Th(n){var e=Gl.current;Lt(Gl),n._currentValue=e}function Mf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ks(n,e){Vl=n,Eh=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(An=!0),n.firstContext=null)}function Jn(n){var e=n._currentValue;if(Eh!==n)if(n={context:n,memoizedValue:e,next:null},Rs===null){if(Vl===null)throw Error(me(308));Rs=n,Vl.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return e}var Or=null;function wh(n){Or===null?Or=[n]:Or.push(n)}function A0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,wh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Bi(n,i)}function Bi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Qi=!1;function Ah(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(n,t)}return r=i.interleaved,r===null?(e.next=e,wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(n,t)}function xl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fh(n,t)}}function Kd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Wl(n,e,t,i){var r=n.updateQueue;Qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,y=a;switch(d=e,p=t,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=kt({},h,d);break e;case 2:Qi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,n.lanes=o,n.memoizedState=h}}function qd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var da={},Mi=Sr(da),ta=Sr(da),na=Sr(da);function Ur(n){if(n===da)throw Error(me(174));return n}function Ch(n,e){switch(At(na,e),At(ta,n),At(Mi,da),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=nf(e,n)}Lt(Mi),At(Mi,e)}function Xs(){Lt(Mi),Lt(ta),Lt(na)}function R0(n){Ur(na.current);var e=Ur(Mi.current),t=nf(e,n.type);e!==t&&(At(ta,n),At(Mi,t))}function Rh(n){ta.current===n&&(Lt(Mi),Lt(ta))}var Ot=Sr(0);function Xl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eu=[];function bh(){for(var n=0;n<eu.length;n++)eu[n]._workInProgressVersionPrimary=null;eu.length=0}var El=Wi.ReactCurrentDispatcher,tu=Wi.ReactCurrentBatchConfig,Wr=0,Ut=null,jt=null,Qt=null,Yl=!1,Fo=!1,ia=0,gS=0;function un(){throw Error(me(321))}function Lh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!pi(n[t],e[t]))return!1;return!0}function Ph(n,e,t,i,r,s){if(Wr=s,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,El.current=n===null||n.memoizedState===null?SS:xS,n=t(i,r),Fo){s=0;do{if(Fo=!1,ia=0,25<=s)throw Error(me(301));s+=1,Qt=jt=null,e.updateQueue=null,El.current=ES,n=t(i,r)}while(Fo)}if(El.current=jl,e=jt!==null&&jt.next!==null,Wr=0,Qt=jt=Ut=null,Yl=!1,e)throw Error(me(300));return n}function Dh(){var n=ia!==0;return ia=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Ut.memoizedState=Qt=n:Qt=Qt.next=n,Qt}function ei(){if(jt===null){var n=Ut.alternate;n=n!==null?n.memoizedState:null}else n=jt.next;var e=Qt===null?Ut.memoizedState:Qt.next;if(e!==null)Qt=e,jt=n;else{if(n===null)throw Error(me(310));jt=n,n={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Qt===null?Ut.memoizedState=Qt=n:Qt=Qt.next=n}return Qt}function ra(n,e){return typeof e=="function"?e(n):e}function nu(n){var e=ei(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ut.lanes|=u,Xr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ut.lanes|=s,Xr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function iu(n){var e=ei(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function b0(){}function L0(n,e){var t=Ut,i=ei(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,Ih(I0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(t.flags|=2048,sa(9,D0.bind(null,t,i,r,e),void 0,null),en===null)throw Error(me(349));Wr&30||P0(t,e,r)}return r}function P0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function D0(n,e,t,i){e.value=t,e.getSnapshot=i,N0(e)&&O0(n)}function I0(n,e,t){return t(function(){N0(e)&&O0(n)})}function N0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!pi(n,t)}catch{return!0}}function O0(n){var e=Bi(n,1);e!==null&&di(e,n,1,-1)}function $d(n){var e=vi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},e.queue=n,n=n.dispatch=yS.bind(null,Ut,n),[e.memoizedState,n]}function sa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function U0(){return ei().memoizedState}function Ml(n,e,t,i){var r=vi();Ut.flags|=n,r.memoizedState=sa(1|e,t,void 0,i===void 0?null:i)}function pc(n,e,t,i){var r=ei();i=i===void 0?null:i;var s=void 0;if(jt!==null){var o=jt.memoizedState;if(s=o.destroy,i!==null&&Lh(i,o.deps)){r.memoizedState=sa(e,t,s,i);return}}Ut.flags|=n,r.memoizedState=sa(1|e,t,s,i)}function Zd(n,e){return Ml(8390656,8,n,e)}function Ih(n,e){return pc(2048,8,n,e)}function k0(n,e){return pc(4,2,n,e)}function F0(n,e){return pc(4,4,n,e)}function B0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function z0(n,e,t){return t=t!=null?t.concat([n]):null,pc(4,4,B0.bind(null,e,n),t)}function Nh(){}function H0(n,e){var t=ei();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Lh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function G0(n,e){var t=ei();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Lh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function V0(n,e,t){return Wr&21?(pi(t,e)||(t=Kg(),Ut.lanes|=t,Xr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,An=!0),n.memoizedState=t)}function vS(n,e){var t=mt;mt=t!==0&&4>t?t:4,n(!0);var i=tu.transition;tu.transition={};try{n(!1),e()}finally{mt=t,tu.transition=i}}function W0(){return ei().memoizedState}function _S(n,e,t){var i=hr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},X0(n))Y0(e,t);else if(t=A0(n,e,t,i),t!==null){var r=_n();di(t,n,i,r),j0(t,e,i)}}function yS(n,e,t){var i=hr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(X0(n))Y0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=A0(n,e,r,i),t!==null&&(r=_n(),di(t,n,i,r),j0(t,e,i))}}function X0(n){var e=n.alternate;return n===Ut||e!==null&&e===Ut}function Y0(n,e){Fo=Yl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function j0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fh(n,t)}}var jl={readContext:Jn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},SS={readContext:Jn,useCallback:function(n,e){return vi().memoizedState=[n,e===void 0?null:e],n},useContext:Jn,useEffect:Zd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ml(4194308,4,B0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ml(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ml(4,2,n,e)},useMemo:function(n,e){var t=vi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=vi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=_S.bind(null,Ut,n),[i.memoizedState,n]},useRef:function(n){var e=vi();return n={current:n},e.memoizedState=n},useState:$d,useDebugValue:Nh,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=$d(!1),e=n[0];return n=vS.bind(null,n[1]),vi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ut,r=vi();if(Dt){if(t===void 0)throw Error(me(407));t=t()}else{if(t=e(),en===null)throw Error(me(349));Wr&30||P0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Zd(I0.bind(null,i,s,n),[n]),i.flags|=2048,sa(9,D0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=vi(),e=en.identifierPrefix;if(Dt){var t=Ni,i=Ii;t=(i&~(1<<32-hi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ia++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=gS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},xS={readContext:Jn,useCallback:H0,useContext:Jn,useEffect:Ih,useImperativeHandle:z0,useInsertionEffect:k0,useLayoutEffect:F0,useMemo:G0,useReducer:nu,useRef:U0,useState:function(){return nu(ra)},useDebugValue:Nh,useDeferredValue:function(n){var e=ei();return V0(e,jt.memoizedState,n)},useTransition:function(){var n=nu(ra)[0],e=ei().memoizedState;return[n,e]},useMutableSource:b0,useSyncExternalStore:L0,useId:W0,unstable_isNewReconciler:!1},ES={readContext:Jn,useCallback:H0,useContext:Jn,useEffect:Ih,useImperativeHandle:z0,useInsertionEffect:k0,useLayoutEffect:F0,useMemo:G0,useReducer:iu,useRef:U0,useState:function(){return iu(ra)},useDebugValue:Nh,useDeferredValue:function(n){var e=ei();return jt===null?e.memoizedState=n:V0(e,jt.memoizedState,n)},useTransition:function(){var n=iu(ra)[0],e=ei().memoizedState;return[n,e]},useMutableSource:b0,useSyncExternalStore:L0,useId:W0,unstable_isNewReconciler:!1};function oi(n,e){if(n&&n.defaultProps){e=kt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Tf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:kt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var mc={isMounted:function(n){return(n=n._reactInternals)?qr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=_n(),r=hr(n),s=Ui(i,r);s.payload=e,t!=null&&(s.callback=t),e=ur(n,s,r),e!==null&&(di(e,n,r,i),xl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=_n(),r=hr(n),s=Ui(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ur(n,s,r),e!==null&&(di(e,n,r,i),xl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=_n(),i=hr(n),r=Ui(t,i);r.tag=2,e!=null&&(r.callback=e),e=ur(n,r,i),e!==null&&(di(e,n,i,t),xl(e,n,i))}};function Qd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zo(t,i)||!Zo(r,s):!0}function K0(n,e,t){var i=!1,r=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=bn(e)?Gr:mn.current,i=e.contextTypes,s=(i=i!=null)?Gs(n,r):_r),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Jd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&mc.enqueueReplaceState(e,e.state,null)}function wf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ah(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=bn(e)?Gr:mn.current,r.context=Gs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Wl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,e){try{var t="",i=e;do t+=$_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ru(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Af(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function q0(n,e,t){t=Ui(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ql||(ql=!0,Uf=i),Af(n,e)},t}function $0(n,e,t){t=Ui(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Af(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Af(n,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function ep(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new MS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=kS.bind(null,n,e,t),e.then(n,n))}function tp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function np(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ui(-1,1),e.tag=2,ur(t,e,1))),t.lanes|=1),n)}var TS=Wi.ReactCurrentOwner,An=!1;function vn(n,e,t,i){e.child=n===null?w0(e,null,t,i):Ws(e,n.child,t,i)}function ip(n,e,t,i,r){t=t.render;var s=e.ref;return ks(e,r),i=Ph(n,e,t,i,s,r),t=Dh(),n!==null&&!An?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,zi(n,e,r)):(Dt&&t&&yh(e),e.flags|=1,vn(n,e,i,r),e.child)}function rp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Gh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Z0(n,e,s,i,r)):(n=Cl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Zo,t(o,i)&&n.ref===e.ref)return zi(n,e,r)}return e.flags|=1,n=dr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Z0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Zo(s,i)&&n.ref===e.ref)if(An=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(An=!0);else return e.lanes=n.lanes,zi(n,e,r)}return Cf(n,e,t,i,r)}function Q0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},At(Ls,On),On|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,At(Ls,On),On|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,At(Ls,On),On|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,At(Ls,On),On|=i;return vn(n,e,r,t),e.child}function J0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Cf(n,e,t,i,r){var s=bn(t)?Gr:mn.current;return s=Gs(e,s),ks(e,r),t=Ph(n,e,t,i,s,r),i=Dh(),n!==null&&!An?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,zi(n,e,r)):(Dt&&i&&yh(e),e.flags|=1,vn(n,e,t,r),e.child)}function sp(n,e,t,i,r){if(bn(t)){var s=!0;Bl(e)}else s=!1;if(ks(e,r),e.stateNode===null)Tl(n,e),K0(e,t,i),wf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Jn(c):(c=bn(t)?Gr:mn.current,c=Gs(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Jd(e,o,i,c),Qi=!1;var d=e.memoizedState;o.state=d,Wl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Rn.current||Qi?(typeof u=="function"&&(Tf(e,t,u,i),l=e.memoizedState),(a=Qi||Qd(e,t,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,C0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=bn(t)?Gr:mn.current,l=Gs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Jd(e,o,i,l),Qi=!1,d=e.memoizedState,o.state=d,Wl(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||Rn.current||Qi?(typeof p=="function"&&(Tf(e,t,p,i),v=e.memoizedState),(c=Qi||Qd(e,t,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Rf(n,e,t,i,s,r)}function Rf(n,e,t,i,r,s){J0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wd(e,t,!1),zi(n,e,s);i=e.stateNode,TS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ws(e,n.child,null,s),e.child=Ws(e,null,a,s)):vn(n,e,a,s),e.memoizedState=i.state,r&&Wd(e,t,!0),e.child}function ev(n){var e=n.stateNode;e.pendingContext?Vd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Vd(n,e.context,!1),Ch(n,e.containerInfo)}function op(n,e,t,i,r){return Vs(),xh(r),e.flags|=256,vn(n,e,t,i),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Lf(n){return{baseLanes:n,cachePool:null,transitions:null}}function tv(n,e,t){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),At(Ot,r&1),n===null)return Ef(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,i,0,null),n=Fr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Lf(t),e.memoizedState=bf,n):Oh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=Fr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Lf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=bf,i}return s=n.child,n=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Oh(n,e){return e=_c({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ua(n,e,t,i){return i!==null&&xh(i),Ws(e,n.child,null,t),n=Oh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function wS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ru(Error(me(422))),Ua(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ws(e,n.child,null,o),e.child.memoizedState=Lf(o),e.memoizedState=bf,s);if(!(e.mode&1))return Ua(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=ru(s,i,void 0),Ua(n,e,o,i)}if(a=(o&n.childLanes)!==0,An||a){if(i=en,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bi(n,r),di(i,n,r,-1))}return Hh(),i=ru(Error(me(421))),Ua(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=FS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Fn=cr(r.nextSibling),Bn=e,Dt=!0,li=null,n!==null&&(jn[Kn++]=Ii,jn[Kn++]=Ni,jn[Kn++]=Vr,Ii=n.id,Ni=n.overflow,Vr=e),e=Oh(e,i.children),e.flags|=4096,e)}function ap(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Mf(n.return,e,t)}function su(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function nv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(n,e,i.children,t),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ap(n,t,e);else if(n.tag===19)ap(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(At(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Xl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),su(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Xl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}su(e,!0,t,null,s);break;case"together":su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function zi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Xr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(me(153));if(e.child!==null){for(n=e.child,t=dr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=dr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function AS(n,e,t){switch(e.tag){case 3:ev(e),Vs();break;case 5:R0(e);break;case 1:bn(e.type)&&Bl(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;At(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(At(Ot,Ot.current&1),e.flags|=128,null):t&e.child.childLanes?tv(n,e,t):(At(Ot,Ot.current&1),n=zi(n,e,t),n!==null?n.sibling:null);At(Ot,Ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return nv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),At(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,Q0(n,e,t)}return zi(n,e,t)}var iv,Pf,rv,sv;iv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pf=function(){};rv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ur(Mi.current);var s=null;switch(t){case"input":r=Qu(n,r),i=Qu(n,i),s=[];break;case"select":r=kt({},r,{value:void 0}),i=kt({},i,{value:void 0}),s=[];break;case"textarea":r=tf(n,r),i=tf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=kl)}rf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sv=function(n,e,t,i){t!==i&&(e.flags|=4)};function mo(n,e){if(!Dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function fn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function CS(n,e,t){var i=e.pendingProps;switch(Sh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return bn(e.type)&&Fl(),fn(e),null;case 3:return i=e.stateNode,Xs(),Lt(Rn),Lt(mn),bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Na(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(Bf(li),li=null))),Pf(n,e),fn(e),null;case 5:Rh(e);var r=Ur(na.current);if(t=e.type,n!==null&&e.stateNode!=null)rv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return fn(e),null}if(n=Ur(Mi.current),Na(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[ea]=s,n=(e.mode&1)!==0,t){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<Po.length;r++)Rt(Po[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":gd(i,s),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Rt("invalid",i);break;case"textarea":_d(i,s),Rt("invalid",i)}rf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ia(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ia(i.textContent,a,n),r=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Rt("scroll",i)}switch(t){case"input":wa(i),vd(i,s,!0);break;case"textarea":wa(i),yd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ig(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[yi]=e,n[ea]=i,iv(n,e,!1,!1),e.stateNode=n;e:{switch(o=sf(t,i),t){case"dialog":Rt("cancel",n),Rt("close",n),r=i;break;case"iframe":case"object":case"embed":Rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Po.length;r++)Rt(Po[r],n);r=i;break;case"source":Rt("error",n),r=i;break;case"img":case"image":case"link":Rt("error",n),Rt("load",n),r=i;break;case"details":Rt("toggle",n),r=i;break;case"input":gd(n,i),r=Qu(n,i),Rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=kt({},i,{value:void 0}),Rt("invalid",n);break;case"textarea":_d(n,i),r=tf(n,i),Rt("invalid",n);break;default:r=i}rf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ug(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ng(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Xo(n,l):typeof l=="number"&&Xo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Rt("scroll",n):l!=null&&sh(n,s,l,o))}switch(t){case"input":wa(n),vd(n,i,!1);break;case"textarea":wa(n),yd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+vr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Is(n,!!i.multiple,s,!1):i.defaultValue!=null&&Is(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=kl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(n&&e.stateNode!=null)sv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(t=Ur(na.current),Ur(Mi.current),Na(e)){if(i=e.stateNode,t=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==t)&&(n=Bn,n!==null))switch(n.tag){case 3:Ia(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ia(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return fn(e),null;case 13:if(Lt(Ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Dt&&Fn!==null&&e.mode&1&&!(e.flags&128))M0(),Vs(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[yi]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;fn(e),s=!1}else li!==null&&(Bf(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ot.current&1?Kt===0&&(Kt=3):Hh())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return Xs(),Pf(n,e),n===null&&Qo(e.stateNode.containerInfo),fn(e),null;case 10:return Th(e.type._context),fn(e),null;case 17:return bn(e.type)&&Fl(),fn(e),null;case 19:if(Lt(Ot),s=e.memoizedState,s===null)return fn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)mo(s,!1);else{if(Kt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Xl(n),o!==null){for(e.flags|=128,mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return At(Ot,Ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&zt()>js&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Xl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Dt)return fn(e),null}else 2*zt()-s.renderingStartTime>js&&t!==1073741824&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,t=Ot.current,At(Ot,i?t&1|2:t&1),e):(fn(e),null);case 22:case 23:return zh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function RS(n,e){switch(Sh(e),e.tag){case 1:return bn(e.type)&&Fl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Xs(),Lt(Rn),Lt(mn),bh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Rh(e),null;case 13:if(Lt(Ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Vs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Lt(Ot),null;case 4:return Xs(),null;case 10:return Th(e.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var ka=!1,pn=!1,bS=typeof WeakSet=="function"?WeakSet:Set,Re=null;function bs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ft(n,e,i)}else t.current=null}function Df(n,e,t){try{t()}catch(i){Ft(n,e,i)}}var lp=!1;function LS(n,e){if(mf=Nl,n=u0(),_h(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(gf={focusedElem:n,selectionRange:t},Nl=!1,Re=e;Re!==null;)if(e=Re,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Re=n;else for(;Re!==null;){e=Re;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:oi(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(E){Ft(e,e.return,E)}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}return v=lp,lp=!1,v}function Bo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Df(e,t,s)}r=r.next}while(r!==i)}}function gc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function If(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ov(n){var e=n.alternate;e!==null&&(n.alternate=null,ov(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[yi],delete e[ea],delete e[yf],delete e[hS],delete e[dS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function av(n){return n.tag===5||n.tag===3||n.tag===4}function cp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||av(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(n=n.child,n!==null))for(Nf(n,e,t),n=n.sibling;n!==null;)Nf(n,e,t),n=n.sibling}function Of(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Of(n,e,t),n=n.sibling;n!==null;)Of(n,e,t),n=n.sibling}var on=null,ai=!1;function Xi(n,e,t){for(t=t.child;t!==null;)lv(n,e,t),t=t.sibling}function lv(n,e,t){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(lc,t)}catch{}switch(t.tag){case 5:pn||bs(t,e);case 6:var i=on,r=ai;on=null,Xi(n,e,t),on=i,ai=r,on!==null&&(ai?(n=on,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):on.removeChild(t.stateNode));break;case 18:on!==null&&(ai?(n=on,t=t.stateNode,n.nodeType===8?Qc(n.parentNode,t):n.nodeType===1&&Qc(n,t),qo(n)):Qc(on,t.stateNode));break;case 4:i=on,r=ai,on=t.stateNode.containerInfo,ai=!0,Xi(n,e,t),on=i,ai=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Df(t,e,o),r=r.next}while(r!==i)}Xi(n,e,t);break;case 1:if(!pn&&(bs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ft(t,e,a)}Xi(n,e,t);break;case 21:Xi(n,e,t);break;case 22:t.mode&1?(pn=(i=pn)||t.memoizedState!==null,Xi(n,e,t),pn=i):Xi(n,e,t);break;default:Xi(n,e,t)}}function up(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new bS),e.forEach(function(i){var r=BS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ni(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:on=a.stateNode,ai=!1;break e;case 3:on=a.stateNode.containerInfo,ai=!0;break e;case 4:on=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(on===null)throw Error(me(160));lv(s,o,r),on=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cv(e,n),e=e.sibling}function cv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(e,n),mi(n),i&4){try{Bo(3,n,n.return),gc(3,n)}catch(y){Ft(n,n.return,y)}try{Bo(5,n,n.return)}catch(y){Ft(n,n.return,y)}}break;case 1:ni(e,n),mi(n),i&512&&t!==null&&bs(t,t.return);break;case 5:if(ni(e,n),mi(n),i&512&&t!==null&&bs(t,t.return),n.flags&32){var r=n.stateNode;try{Xo(r,"")}catch(y){Ft(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pg(r,s),sf(a,o);var c=sf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Ug(r,h):u==="dangerouslySetInnerHTML"?Ng(r,h):u==="children"?Xo(r,h):sh(r,u,h,c)}switch(a){case"input":Ju(r,s);break;case"textarea":Dg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Is(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[ea]=s}catch(y){Ft(n,n.return,y)}}break;case 6:if(ni(e,n),mi(n),i&4){if(n.stateNode===null)throw Error(me(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){Ft(n,n.return,y)}}break;case 3:if(ni(e,n),mi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(y){Ft(n,n.return,y)}break;case 4:ni(e,n),mi(n);break;case 13:ni(e,n),mi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fh=zt())),i&4&&up(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(pn=(c=pn)||u,ni(e,n),pn=c):ni(e,n),mi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Re=n,u=n.child;u!==null;){for(h=Re=u;Re!==null;){switch(d=Re,p=d.child,d.tag){case 0:case 11:case 14:case 15:Bo(4,d,d.return);break;case 1:bs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Ft(i,t,y)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){hp(h);continue}}p!==null?(p.return=d,Re=p):hp(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Og("display",o))}catch(y){Ft(n,n.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Ft(n,n.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ni(e,n),mi(n),i&4&&up(n);break;case 21:break;default:ni(e,n),mi(n)}}function mi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(av(t)){var i=t;break e}t=t.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xo(r,""),i.flags&=-33);var s=cp(n);Of(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cp(n);Nf(n,a,o);break;default:throw Error(me(161))}}catch(l){Ft(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function PS(n,e,t){Re=n,uv(n)}function uv(n,e,t){for(var i=(n.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ka;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||pn;a=ka;var c=pn;if(ka=o,(pn=l)&&!c)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?dp(r):l!==null?(l.return=o,Re=l):dp(r);for(;s!==null;)Re=s,uv(s),s=s.sibling;Re=r,ka=a,pn=c}fp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):fp(n)}}function fp(n){for(;Re!==null;){var e=Re;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:oi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}qd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&qo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}pn||e.flags&512&&If(e)}catch(d){Ft(e,e.return,d)}}if(e===n){Re=null;break}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}}function hp(n){for(;Re!==null;){var e=Re;if(e===n){Re=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Re=t;break}Re=e.return}}function dp(n){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{gc(4,e)}catch(l){Ft(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ft(e,r,l)}}var s=e.return;try{If(e)}catch(l){Ft(e,s,l)}break;case 5:var o=e.return;try{If(e)}catch(l){Ft(e,o,l)}}}catch(l){Ft(e,e.return,l)}if(e===n){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var DS=Math.ceil,Kl=Wi.ReactCurrentDispatcher,Uh=Wi.ReactCurrentOwner,Qn=Wi.ReactCurrentBatchConfig,ut=0,en=null,Yt=null,ln=0,On=0,Ls=Sr(0),Kt=0,oa=null,Xr=0,vc=0,kh=0,zo=null,Mn=null,Fh=0,js=1/0,Pi=null,ql=!1,Uf=null,fr=null,Fa=!1,ir=null,$l=0,Ho=0,kf=null,wl=-1,Al=0;function _n(){return ut&6?zt():wl!==-1?wl:wl=zt()}function hr(n){return n.mode&1?ut&2&&ln!==0?ln&-ln:mS.transition!==null?(Al===0&&(Al=Kg()),Al):(n=mt,n!==0||(n=window.event,n=n===void 0?16:t0(n.type)),n):1}function di(n,e,t,i){if(50<Ho)throw Ho=0,kf=null,Error(me(185));ua(n,t,i),(!(ut&2)||n!==en)&&(n===en&&(!(ut&2)&&(vc|=t),Kt===4&&tr(n,ln)),Ln(n,i),t===1&&ut===0&&!(e.mode&1)&&(js=zt()+500,dc&&xr()))}function Ln(n,e){var t=n.callbackNode;my(n,e);var i=Il(n,n===en?ln:0);if(i===0)t!==null&&Ed(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Ed(t),e===1)n.tag===0?pS(pp.bind(null,n)):S0(pp.bind(null,n)),uS(function(){!(ut&6)&&xr()}),t=null;else{switch(qg(i)){case 1:t=uh;break;case 4:t=Yg;break;case 16:t=Dl;break;case 536870912:t=jg;break;default:t=Dl}t=_v(t,fv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function fv(n,e){if(wl=-1,Al=0,ut&6)throw Error(me(327));var t=n.callbackNode;if(Fs()&&n.callbackNode!==t)return null;var i=Il(n,n===en?ln:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Zl(n,i);else{e=i;var r=ut;ut|=2;var s=dv();(en!==n||ln!==e)&&(Pi=null,js=zt()+500,kr(n,e));do try{OS();break}catch(a){hv(n,a)}while(!0);Mh(),Kl.current=s,ut=r,Yt!==null?e=0:(en=null,ln=0,e=Kt)}if(e!==0){if(e===2&&(r=uf(n),r!==0&&(i=r,e=Ff(n,r))),e===1)throw t=oa,kr(n,0),tr(n,i),Ln(n,zt()),t;if(e===6)tr(n,i);else{if(r=n.current.alternate,!(i&30)&&!IS(r)&&(e=Zl(n,i),e===2&&(s=uf(n),s!==0&&(i=s,e=Ff(n,s))),e===1))throw t=oa,kr(n,0),tr(n,i),Ln(n,zt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Rr(n,Mn,Pi);break;case 3:if(tr(n,i),(i&130023424)===i&&(e=Fh+500-zt(),10<e)){if(Il(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){_n(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=_f(Rr.bind(null,n,Mn,Pi),e);break}Rr(n,Mn,Pi);break;case 4:if(tr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-hi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*DS(i/1960))-i,10<i){n.timeoutHandle=_f(Rr.bind(null,n,Mn,Pi),i);break}Rr(n,Mn,Pi);break;case 5:Rr(n,Mn,Pi);break;default:throw Error(me(329))}}}return Ln(n,zt()),n.callbackNode===t?fv.bind(null,n):null}function Ff(n,e){var t=zo;return n.current.memoizedState.isDehydrated&&(kr(n,e).flags|=256),n=Zl(n,e),n!==2&&(e=Mn,Mn=t,e!==null&&Bf(e)),n}function Bf(n){Mn===null?Mn=n:Mn.push.apply(Mn,n)}function IS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(n,e){for(e&=~kh,e&=~vc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-hi(e),i=1<<t;n[t]=-1,e&=~i}}function pp(n){if(ut&6)throw Error(me(327));Fs();var e=Il(n,0);if(!(e&1))return Ln(n,zt()),null;var t=Zl(n,e);if(n.tag!==0&&t===2){var i=uf(n);i!==0&&(e=i,t=Ff(n,i))}if(t===1)throw t=oa,kr(n,0),tr(n,e),Ln(n,zt()),t;if(t===6)throw Error(me(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Rr(n,Mn,Pi),Ln(n,zt()),null}function Bh(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(js=zt()+500,dc&&xr())}}function Yr(n){ir!==null&&ir.tag===0&&!(ut&6)&&Fs();var e=ut;ut|=1;var t=Qn.transition,i=mt;try{if(Qn.transition=null,mt=1,n)return n()}finally{mt=i,Qn.transition=t,ut=e,!(ut&6)&&xr()}}function zh(){On=Ls.current,Lt(Ls)}function kr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,cS(t)),Yt!==null)for(t=Yt.return;t!==null;){var i=t;switch(Sh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Xs(),Lt(Rn),Lt(mn),bh();break;case 5:Rh(i);break;case 4:Xs();break;case 13:Lt(Ot);break;case 19:Lt(Ot);break;case 10:Th(i.type._context);break;case 22:case 23:zh()}t=t.return}if(en=n,Yt=n=dr(n.current,null),ln=On=e,Kt=0,oa=null,kh=vc=Xr=0,Mn=zo=null,Or!==null){for(e=0;e<Or.length;e++)if(t=Or[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Or=null}return n}function hv(n,e){do{var t=Yt;try{if(Mh(),El.current=jl,Yl){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yl=!1}if(Wr=0,Qt=jt=Ut=null,Fo=!1,ia=0,Uh.current=null,t===null||t.return===null){Kt=1,oa=e,Yt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=ln,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=tp(o);if(p!==null){p.flags&=-257,np(p,o,a,s,e),p.mode&1&&ep(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){ep(s,c,e),Hh();break e}l=Error(me(426))}}else if(Dt&&a.mode&1){var m=tp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),np(m,o,a,s,e),xh(Ys(l,a));break e}}s=l=Ys(l,a),Kt!==4&&(Kt=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=q0(s,l,e);Kd(s,f);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(fr===null||!fr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=$0(s,a,e);Kd(s,E);break e}}s=s.return}while(s!==null)}mv(t)}catch(A){e=A,Yt===t&&t!==null&&(Yt=t=t.return);continue}break}while(!0)}function dv(){var n=Kl.current;return Kl.current=jl,n===null?jl:n}function Hh(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||!(Xr&268435455)&&!(vc&268435455)||tr(en,ln)}function Zl(n,e){var t=ut;ut|=2;var i=dv();(en!==n||ln!==e)&&(Pi=null,kr(n,e));do try{NS();break}catch(r){hv(n,r)}while(!0);if(Mh(),ut=t,Kl.current=i,Yt!==null)throw Error(me(261));return en=null,ln=0,Kt}function NS(){for(;Yt!==null;)pv(Yt)}function OS(){for(;Yt!==null&&!oy();)pv(Yt)}function pv(n){var e=vv(n.alternate,n,On);n.memoizedProps=n.pendingProps,e===null?mv(n):Yt=e,Uh.current=null}function mv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=RS(t,e),t!==null){t.flags&=32767,Yt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,Yt=null;return}}else if(t=CS(t,e,On),t!==null){Yt=t;return}if(e=e.sibling,e!==null){Yt=e;return}Yt=e=n}while(e!==null);Kt===0&&(Kt=5)}function Rr(n,e,t){var i=mt,r=Qn.transition;try{Qn.transition=null,mt=1,US(n,e,t,i)}finally{Qn.transition=r,mt=i}return null}function US(n,e,t,i){do Fs();while(ir!==null);if(ut&6)throw Error(me(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(me(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(gy(n,s),n===en&&(Yt=en=null,ln=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Fa||(Fa=!0,_v(Dl,function(){return Fs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=mt;mt=1;var a=ut;ut|=4,Uh.current=null,LS(n,t),cv(t,n),nS(gf),Nl=!!mf,gf=mf=null,n.current=t,PS(t),ay(),ut=a,mt=o,Qn.transition=s}else n.current=t;if(Fa&&(Fa=!1,ir=n,$l=r),s=n.pendingLanes,s===0&&(fr=null),uy(t.stateNode),Ln(n,zt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,n=Uf,Uf=null,n;return $l&1&&n.tag!==0&&Fs(),s=n.pendingLanes,s&1?n===kf?Ho++:(Ho=0,kf=n):Ho=0,xr(),null}function Fs(){if(ir!==null){var n=qg($l),e=Qn.transition,t=mt;try{if(Qn.transition=null,mt=16>n?16:n,ir===null)var i=!1;else{if(n=ir,ir=null,$l=0,ut&6)throw Error(me(331));var r=ut;for(ut|=4,Re=n.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:Bo(8,u,s)}var h=u.child;if(h!==null)h.return=u,Re=h;else for(;Re!==null;){u=Re;var d=u.sibling,p=u.return;if(ov(u),u===c){Re=null;break}if(d!==null){d.return=p,Re=d;break}Re=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Re=f;break e}Re=s.return}}var g=n.current;for(Re=g;Re!==null;){o=Re;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Re=_;else e:for(o=g;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(A){Ft(a,a.return,A)}if(a===o){Re=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Re=E;break e}Re=a.return}}if(ut=r,xr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(lc,n)}catch{}i=!0}return i}finally{mt=t,Qn.transition=e}}return!1}function mp(n,e,t){e=Ys(t,e),e=q0(n,e,1),n=ur(n,e,1),e=_n(),n!==null&&(ua(n,1,e),Ln(n,e))}function Ft(n,e,t){if(n.tag===3)mp(n,n,t);else for(;e!==null;){if(e.tag===3){mp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){n=Ys(t,n),n=$0(e,n,1),e=ur(e,n,1),n=_n(),e!==null&&(ua(e,1,n),Ln(e,n));break}}e=e.return}}function kS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=_n(),n.pingedLanes|=n.suspendedLanes&t,en===n&&(ln&t)===t&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>zt()-Fh?kr(n,0):kh|=t),Ln(n,e)}function gv(n,e){e===0&&(n.mode&1?(e=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):e=1);var t=_n();n=Bi(n,e),n!==null&&(ua(n,e,t),Ln(n,t))}function FS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),gv(n,t)}function BS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),gv(n,t)}var vv;vv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Rn.current)An=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return An=!1,AS(n,e,t);An=!!(n.flags&131072)}else An=!1,Dt&&e.flags&1048576&&x0(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Tl(n,e),n=e.pendingProps;var r=Gs(e,mn.current);ks(e,t),r=Ph(null,e,i,n,r,t);var s=Dh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ah(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,wf(e,i,n,t),e=Rf(null,e,i,!0,s,t)):(e.tag=0,Dt&&s&&yh(e),vn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Tl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HS(i),n=oi(i,n),r){case 0:e=Cf(null,e,i,n,t);break e;case 1:e=sp(null,e,i,n,t);break e;case 11:e=ip(null,e,i,n,t);break e;case 14:e=rp(null,e,i,oi(i.type,n),t);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Cf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),sp(n,e,i,r,t);case 3:e:{if(ev(e),n===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,C0(n,e),Wl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(me(423)),e),e=op(n,e,i,t,r);break e}else if(i!==r){r=Ys(Error(me(424)),e),e=op(n,e,i,t,r);break e}else for(Fn=cr(e.stateNode.containerInfo.firstChild),Bn=e,Dt=!0,li=null,t=w0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vs(),i===r){e=zi(n,e,t);break e}vn(n,e,i,t)}e=e.child}return e;case 5:return R0(e),n===null&&Ef(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,vf(i,r)?o=null:s!==null&&vf(i,s)&&(e.flags|=32),J0(n,e),vn(n,e,o,t),e.child;case 6:return n===null&&Ef(e),null;case 13:return tv(n,e,t);case 4:return Ch(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ws(e,null,i,t):vn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),ip(n,e,i,r,t);case 7:return vn(n,e,e.pendingProps,t),e.child;case 8:return vn(n,e,e.pendingProps.children,t),e.child;case 12:return vn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,At(Gl,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!Rn.current){e=zi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Mf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Mf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,t),r=Jn(r),i=i(r),e.flags|=1,vn(n,e,i,t),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),rp(n,e,i,r,t);case 15:return Z0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Tl(n,e),e.tag=1,bn(i)?(n=!0,Bl(e)):n=!1,ks(e,t),K0(e,i,r),wf(e,i,r,t),Rf(null,e,i,!0,n,t);case 19:return nv(n,e,t);case 22:return Q0(n,e,t)}throw Error(me(156,e.tag))};function _v(n,e){return Xg(n,e)}function zS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,e,t,i){return new zS(n,e,t,i)}function Gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function HS(n){if(typeof n=="function")return Gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ah)return 11;if(n===lh)return 14}return 2}function dr(n,e){var t=n.alternate;return t===null?(t=Zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Cl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Gh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ss:return Fr(t.children,r,s,e);case oh:o=8,r|=8;break;case Ku:return n=Zn(12,t,e,r|2),n.elementType=Ku,n.lanes=s,n;case qu:return n=Zn(13,t,e,r),n.elementType=qu,n.lanes=s,n;case $u:return n=Zn(19,t,e,r),n.elementType=$u,n.lanes=s,n;case Rg:return _c(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ag:o=10;break e;case Cg:o=9;break e;case ah:o=11;break e;case lh:o=14;break e;case Zi:o=16,i=null;break e}throw Error(me(130,n==null?n:typeof n,""))}return e=Zn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Fr(n,e,t,i){return n=Zn(7,n,i,e),n.lanes=t,n}function _c(n,e,t,i){return n=Zn(22,n,i,e),n.elementType=Rg,n.lanes=t,n.stateNode={isHidden:!1},n}function ou(n,e,t){return n=Zn(6,n,null,e),n.lanes=t,n}function au(n,e,t){return e=Zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function GS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vh(n,e,t,i,r,s,o,a,l){return n=new GS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ah(s),n}function VS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function yv(n){if(!n)return _r;n=n._reactInternals;e:{if(qr(n)!==n||n.tag!==1)throw Error(me(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(n.tag===1){var t=n.type;if(bn(t))return y0(n,t,e)}return e}function Sv(n,e,t,i,r,s,o,a,l){return n=Vh(t,i,!0,n,r,s,o,a,l),n.context=yv(null),t=n.current,i=_n(),r=hr(t),s=Ui(i,r),s.callback=e??null,ur(t,s,r),n.current.lanes=r,ua(n,r,i),Ln(n,i),n}function yc(n,e,t,i){var r=e.current,s=_n(),o=hr(r);return t=yv(t),e.context===null?e.context=t:e.pendingContext=t,e=Ui(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ur(r,e,o),n!==null&&(di(n,r,o,s),xl(n,r,o)),o}function Ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Wh(n,e){gp(n,e),(n=n.alternate)&&gp(n,e)}function WS(){return null}var xv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xh(n){this._internalRoot=n}Sc.prototype.render=Xh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(me(409));yc(n,e,null,null)};Sc.prototype.unmount=Xh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Yr(function(){yc(null,n,null,null)}),e[Fi]=null}};function Sc(n){this._internalRoot=n}Sc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Qg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<er.length&&e!==0&&e<er[t].priority;t++);er.splice(t,0,n),t===0&&e0(n)}};function Yh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vp(){}function XS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ql(o);s.call(c)}}var o=Sv(e,i,n,0,null,!1,!1,"",vp);return n._reactRootContainer=o,n[Fi]=o.current,Qo(n.nodeType===8?n.parentNode:n),Yr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ql(l);a.call(c)}}var l=Vh(n,0,!1,null,null,!1,!1,"",vp);return n._reactRootContainer=l,n[Fi]=l.current,Qo(n.nodeType===8?n.parentNode:n),Yr(function(){yc(e,l,t,i)}),l}function Ec(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ql(o);a.call(l)}}yc(e,o,n,r)}else o=XS(t,e,n,r,i);return Ql(o)}$g=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Lo(e.pendingLanes);t!==0&&(fh(e,t|1),Ln(e,zt()),!(ut&6)&&(js=zt()+500,xr()))}break;case 13:Yr(function(){var i=Bi(n,1);if(i!==null){var r=_n();di(i,n,1,r)}}),Wh(n,1)}};hh=function(n){if(n.tag===13){var e=Bi(n,134217728);if(e!==null){var t=_n();di(e,n,134217728,t)}Wh(n,134217728)}};Zg=function(n){if(n.tag===13){var e=hr(n),t=Bi(n,e);if(t!==null){var i=_n();di(t,n,e,i)}Wh(n,e)}};Qg=function(){return mt};Jg=function(n,e){var t=mt;try{return mt=n,e()}finally{mt=t}};af=function(n,e,t){switch(e){case"input":if(Ju(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=hc(i);if(!r)throw Error(me(90));Lg(i),Ju(i,r)}}}break;case"textarea":Dg(n,t);break;case"select":e=t.value,e!=null&&Is(n,!!t.multiple,e,!1)}};Bg=Bh;zg=Yr;var YS={usingClientEntryPoint:!1,Events:[ha,Ts,hc,kg,Fg,Bh]},go={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jS={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vg(n),n===null?null:n.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{lc=Ba.inject(jS),Ei=Ba}catch{}}Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YS;Hn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(e))throw Error(me(200));return VS(n,e,null,t)};Hn.createRoot=function(n,e){if(!Yh(n))throw Error(me(299));var t=!1,i="",r=xv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vh(n,1,!1,null,null,t,!1,i,r),n[Fi]=e.current,Qo(n.nodeType===8?n.parentNode:n),new Xh(e)};Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(me(188)):(n=Object.keys(n).join(","),Error(me(268,n)));return n=Vg(e),n=n===null?null:n.stateNode,n};Hn.flushSync=function(n){return Yr(n)};Hn.hydrate=function(n,e,t){if(!xc(e))throw Error(me(200));return Ec(null,n,e,!0,t)};Hn.hydrateRoot=function(n,e,t){if(!Yh(n))throw Error(me(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=xv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Sv(e,null,n,1,t??null,r,!1,s,o),n[Fi]=e.current,Qo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Sc(e)};Hn.render=function(n,e,t){if(!xc(e))throw Error(me(200));return Ec(null,n,e,!1,t)};Hn.unmountComponentAtNode=function(n){if(!xc(n))throw Error(me(40));return n._reactRootContainer?(Yr(function(){Ec(null,null,n,!1,function(){n._reactRootContainer=null,n[Fi]=null})}),!0):!1};Hn.unstable_batchedUpdates=Bh;Hn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!xc(t))throw Error(me(200));if(n==null||n._reactInternals===void 0)throw Error(me(38));return Ec(n,e,t,!1,i)};Hn.version="18.3.1-next-f1338f8080-20240426";function Ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ev)}catch(n){console.error(n)}}Ev(),Eg.exports=Hn;var KS=Eg.exports,_p=KS;Yu.createRoot=_p.createRoot,Yu.hydrateRoot=_p.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="160",qS=0,yp=1,$S=2,Mv=1,ZS=2,Li=3,Hi=0,yn=1,Si=2,pr=0,Bs=1,Sp=2,xp=3,Ep=4,QS=5,Pr=100,JS=101,ex=102,Mp=103,Tp=104,tx=200,nx=201,ix=202,rx=203,zf=204,Hf=205,sx=206,ox=207,ax=208,lx=209,cx=210,ux=211,fx=212,hx=213,dx=214,px=0,mx=1,gx=2,Jl=3,vx=4,_x=5,yx=6,Sx=7,Kh=0,xx=1,Ex=2,mr=0,Mx=1,Tx=2,wx=3,Tv=4,Ax=5,Cx=6,wv=300,Ks=301,qs=302,Gf=303,Vf=304,Mc=306,Wf=1e3,kn=1001,Xf=1002,an=1003,wp=1004,lu=1005,qn=1006,Rx=1007,aa=1008,gr=1009,bx=1010,Lx=1011,qh=1012,Av=1013,rr=1014,sr=1015,la=1016,Cv=1017,Rv=1018,Br=1020,Px=1021,ui=1023,Dx=1024,Ix=1025,zr=1026,$s=1027,Nx=1028,bv=1029,Ox=1030,Lv=1031,Pv=1033,cu=33776,uu=33777,fu=33778,hu=33779,Ap=35840,Cp=35841,Rp=35842,bp=35843,Dv=36196,Lp=37492,Pp=37496,Dp=37808,Ip=37809,Np=37810,Op=37811,Up=37812,kp=37813,Fp=37814,Bp=37815,zp=37816,Hp=37817,Gp=37818,Vp=37819,Wp=37820,Xp=37821,du=36492,Yp=36494,jp=36495,Ux=36283,Kp=36284,qp=36285,$p=36286,Iv=3e3,Hr=3001,kx=3200,Fx=3201,Nv=0,Bx=1,$n="",Jt="srgb",Gi="srgb-linear",$h="display-p3",Tc="display-p3-linear",ec="linear",bt="srgb",tc="rec709",nc="p3",ts=7680,Zp=519,zx=512,Hx=513,Gx=514,Ov=515,Vx=516,Wx=517,Xx=518,Yx=519,Qp=35044,Jp="300 es",Yf=1035,Oi=2e3,ic=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pu=Math.PI/180,jf=180/Math.PI;function pa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Tn(n,e,t){return Math.max(e,Math.min(t,n))}function jx(n,e){return(n%e+e)%e}function mu(n,e,t){return(1-t)*n+t*e}function em(n){return(n&n-1)===0&&n!==0}function Kf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,r,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],v=i[8],y=r[0],m=r[3],f=r[6],g=r[1],_=r[4],E=r[7],A=r[2],S=r[5],T=r[8];return s[0]=o*y+a*g+l*A,s[3]=o*m+a*_+l*S,s[6]=o*f+a*E+l*T,s[1]=c*y+u*g+h*A,s[4]=c*m+u*_+h*S,s[7]=c*f+u*E+h*T,s[2]=d*y+p*g+v*A,s[5]=d*m+p*_+v*S,s[8]=d*f+p*E+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=t*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gu.makeScale(e,t)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new ot;function Uv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kx(){const n=rc("canvas");return n.style.display="block",n}const tm={};function Go(n){n in tm||(tm[n]=!0,console.warn(n))}const nm=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),im=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),za={[Gi]:{transfer:ec,primaries:tc,toReference:n=>n,fromReference:n=>n},[Jt]:{transfer:bt,primaries:tc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Tc]:{transfer:ec,primaries:nc,toReference:n=>n.applyMatrix3(im),fromReference:n=>n.applyMatrix3(nm)},[$h]:{transfer:bt,primaries:nc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(im),fromReference:n=>n.applyMatrix3(nm).convertLinearToSRGB()}},qx=new Set([Gi,Tc]),yt={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=za[e].toReference,r=za[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return za[n].primaries},getTransfer:function(n){return n===$n?ec:za[n].transfer}};function zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ns;class kv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=rc("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zs(t[i]/255)*255):t[i]=zs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $x=0;class Fv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=pa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_u(r[o].image)):s.push(_u(r[o]))}else s=_u(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function _u(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zx=0;class Pn extends no{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=kn,r=kn,s=qn,o=aa,a=ui,l=gr,c=Pn.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=pa(),this.name="",this.source=new Fv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hr?Jt:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wf:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wf:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?Hr:Iv}set encoding(e){Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hr?Jt:$n}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=wv;Pn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,E=(p+1)/2,A=(f+1)/2,S=(u+d)/4,T=(h+y)/4,O=(v+m)/4;return _>E&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=S/i,s=T/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=S/r,s=O/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=O/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-v)*(m-v)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-y)/g,this.z=(d-u)/g,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qx extends no{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hr?Jt:$n),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends Qx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bv extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jx extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=y;return}if(h!==y||l!==d||c!==p||u!==v){let m=1-a;const f=l*d+c*p+u*v+h*y,g=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const A=Math.sqrt(_),S=Math.atan2(A,f*g);m=Math.sin(m*S)/A,a=Math.sin(a*S)/A}const E=a*g;if(l=l*m+d*E,c=c*m+p*E,u=u*m+v*E,h=h*m+y*E,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*p-c*d,e[t+1]=l*v+u*d+c*h-a*p,e[t+2]=c*v+u*p+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yu=new G,rm=new ma;class $r{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Ga.subVectors(this.max,_o),is.subVectors(e.a,_o),rs.subVectors(e.b,_o),ss.subVectors(e.c,_o),Yi.subVectors(rs,is),ji.subVectors(ss,rs),Er.subVectors(is,ss);let t=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-Er.z,Er.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,Er.z,0,-Er.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-Er.y,Er.x,0];return!Su(t,is,rs,ss,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Su(t,is,rs,ss,Ga))?!1:(Va.crossVectors(Yi,ji),t=[Va.x,Va.y,Va.z],Su(t,is,rs,ss,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new G,new G,new G,new G,new G,new G,new G,new G],ii=new G,Ha=new $r,is=new G,rs=new G,ss=new G,Yi=new G,ji=new G,Er=new G,_o=new G,Ga=new G,Va=new G,Mr=new G;function Su(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mr.fromArray(n,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const eE=new $r,yo=new G,xu=new G;class io{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):eE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const t=yo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(xu)),this.expandByPoint(yo.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new G,Eu=new G,Wa=new G,Ki=new G,Mu=new G,Xa=new G,Tu=new G;class zv{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Eu.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Eu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=Ki.dot(this.direction),l=-Ki.dot(Wa),c=Ki.lengthSq(),u=Math.abs(1-o*o);let h,d,p,v;if(u>0)if(h=o*l-a,d=o*a-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const y=1/u;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Eu).addScaledVector(Wa,d),p}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,r,s){Mu.subVectors(t,e),Xa.subVectors(i,e),Tu.crossVectors(Mu,Xa);let o=this.direction.dot(Tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(Xa.crossVectors(Ki,Xa));if(l<0)return null;const c=a*this.direction.dot(Mu.cross(Ki));if(c<0||l+c>o)return null;const u=-a*Ki.dot(Tu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,i,r,s,o,a,l,c,u,h,d,p,v,y,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,p,v,y,m)}set(e,t,i,r,s,o,a,l,c,u,h,d,p,v,y,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,v=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,v=c*u,y=c*h;t[0]=d+y*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,v=c*u,y=c*h;t[0]=d-y*a,t[4]=-o*h,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,v=a*u,y=a*h;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=y-d*h,t[8]=v*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+v,t[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=o*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tE,e,nE)}lookAt(e,t,i){const r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),qi.crossVectors(i,In),qi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),qi.crossVectors(i,In)),qi.normalize(),Ya.crossVectors(In,qi),r[0]=qi.x,r[4]=Ya.x,r[8]=In.x,r[1]=qi.y,r[5]=Ya.y,r[9]=In.y,r[2]=qi.z,r[6]=Ya.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],v=i[2],y=i[6],m=i[10],f=i[14],g=i[3],_=i[7],E=i[11],A=i[15],S=r[0],T=r[4],O=r[8],M=r[12],C=r[1],V=r[5],Z=r[9],oe=r[13],F=r[2],W=r[6],te=r[10],se=r[14],B=r[3],X=r[7],j=r[11],ie=r[15];return s[0]=o*S+a*C+l*F+c*B,s[4]=o*T+a*V+l*W+c*X,s[8]=o*O+a*Z+l*te+c*j,s[12]=o*M+a*oe+l*se+c*ie,s[1]=u*S+h*C+d*F+p*B,s[5]=u*T+h*V+d*W+p*X,s[9]=u*O+h*Z+d*te+p*j,s[13]=u*M+h*oe+d*se+p*ie,s[2]=v*S+y*C+m*F+f*B,s[6]=v*T+y*V+m*W+f*X,s[10]=v*O+y*Z+m*te+f*j,s[14]=v*M+y*oe+m*se+f*ie,s[3]=g*S+_*C+E*F+A*B,s[7]=g*T+_*V+E*W+A*X,s[11]=g*O+_*Z+E*te+A*j,s[15]=g*M+_*oe+E*se+A*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],y=e[7],m=e[11],f=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],y=e[13],m=e[14],f=e[15],g=h*m*c-y*d*c+y*l*p-a*m*p-h*l*f+a*d*f,_=v*d*c-u*m*c-v*l*p+o*m*p+u*l*f-o*d*f,E=u*y*c-v*h*c+v*a*p-o*y*p-u*a*f+o*h*f,A=v*h*l-u*y*l-v*a*d+o*y*d+u*a*m-o*h*m,S=t*g+i*_+r*E+s*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=g*T,e[1]=(y*d*s-h*m*s-y*r*p+i*m*p+h*r*f-i*d*f)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*f+i*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(u*m*s-v*d*s+v*r*p-t*m*p-u*r*f+t*d*f)*T,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*f-t*l*f)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*T,e[8]=E*T,e[9]=(v*h*s-u*y*s-v*i*p+t*y*p+u*i*f-t*h*f)*T,e[10]=(o*y*s-v*a*s+v*i*c-t*y*c-o*i*f+t*a*f)*T,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*T,e[12]=A*T,e[13]=(u*y*r-v*h*r+v*i*d-t*y*d-u*i*m+t*h*m)*T,e[14]=(v*a*r-o*y*r-v*i*l+t*y*l+o*i*m-t*a*m)*T,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,v=s*h,y=o*u,m=o*h,f=a*h,g=l*c,_=l*u,E=l*h,A=i.x,S=i.y,T=i.z;return r[0]=(1-(y+f))*A,r[1]=(p+E)*A,r[2]=(v-_)*A,r[3]=0,r[4]=(p-E)*S,r[5]=(1-(d+f))*S,r[6]=(m+g)*S,r[7]=0,r[8]=(v+_)*T,r[9]=(m-g)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const c=1/s,u=1/o,h=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Oi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,v;if(a===Oi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ic)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Oi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,p=(i+r)*u;let v,y;if(a===Oi)v=(o+s)*h,y=-2*h;else if(a===ic)v=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const os=new G,ri=new Nt,tE=new G(0,0,0),nE=new G(1,1,1),qi=new G,Ya=new G,In=new G,sm=new Nt,om=new ma;class wc{constructor(e=0,t=0,i=0,r=wc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wc.DEFAULT_ORDER="XYZ";class Hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iE=0;const am=new G,as=new ma,Ci=new Nt,ja=new G,So=new G,rE=new G,sE=new ma,lm=new G(1,0,0),cm=new G(0,1,0),um=new G(0,0,1),oE={type:"added"},aE={type:"removed"};class Ht extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new G,t=new wc,i=new ma,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new ot}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,t){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(So,ja,this.up):Ci.lookAt(ja,So,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Ci),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,rE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,sE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new G(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new G,Ri=new G,wu=new G,bi=new G,ls=new G,cs=new G,fm=new G,Au=new G,Cu=new G,Ru=new G;let Ka=!1;class ci{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),si.subVectors(e,t),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){si.subVectors(r,t),Ri.subVectors(i,t),wu.subVectors(e,t);const o=si.dot(si),a=si.dot(Ri),l=si.dot(wu),c=Ri.dot(Ri),u=Ri.dot(wu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static isFrontFacing(e,t,i,r){return si.subVectors(i,t),Ri.subVectors(e,t),si.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),si.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),Au.subVectors(e,i);const l=ls.dot(Au),c=cs.dot(Au);if(l<=0&&c<=0)return t.copy(i);Cu.subVectors(e,r);const u=ls.dot(Cu),h=cs.dot(Cu);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ls,o);Ru.subVectors(e,s);const p=ls.dot(Ru),v=cs.dot(Ru);if(v>=0&&p<=v)return t.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(cs,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return fm.subVectors(s,r),a=(h-u)/(h-u+(p-v)),t.copy(r).addScaledVector(fm,a);const f=1/(m+y+d);return o=y*f,a=d*f,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},qa={h:0,s:0,l:0};function bu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=jx(e,1),t=Tn(t,0,1),i=Tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=bu(o,s,e+1/3),this.g=bu(o,s,e),this.b=bu(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=Gv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=vu(e.r),this.g=vu(e.g),this.b=vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return yt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Tn(dn.r*255,0,255))*65536+Math.round(Tn(dn.g*255,0,255))*256+Math.round(Tn(dn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Jt){yt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(qa);const i=mu($i.h,qa.h,t),r=mu($i.s,qa.s,t),s=mu($i.l,qa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Te;Te.NAMES=Gv;let lE=0;class ro extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=Bs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Hf,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Hf&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zh extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new G,$a=new ft;class wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qp&&(e.usage=this.usage),e}}class Vv extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wv extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ti extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cE=0;const Xn=new Nt,Lu=new Ht,us=new G,Nn=new $r,xo=new $r,Zt=new G;class Dn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uv(e)?Wv:Vv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Nn.min,xo.min),Nn.expandByPoint(Zt),Zt.addVectors(Nn.max,xo.max),Nn.expandByPoint(Zt)):(Nn.expandByPoint(xo.min),Nn.expandByPoint(xo.max))}Nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),Zt.add(us)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new G,u[C]=new G;const h=new G,d=new G,p=new G,v=new ft,y=new ft,m=new ft,f=new G,g=new G;function _(C,V,Z){h.fromArray(r,C*3),d.fromArray(r,V*3),p.fromArray(r,Z*3),v.fromArray(o,C*2),y.fromArray(o,V*2),m.fromArray(o,Z*2),d.sub(h),p.sub(h),y.sub(v),m.sub(v);const oe=1/(y.x*m.y-m.x*y.y);isFinite(oe)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(oe),g.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(oe),c[C].add(f),c[V].add(f),c[Z].add(f),u[C].add(g),u[V].add(g),u[Z].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let C=0,V=E.length;C<V;++C){const Z=E[C],oe=Z.start,F=Z.count;for(let W=oe,te=oe+F;W<te;W+=3)_(i[W+0],i[W+1],i[W+2])}const A=new G,S=new G,T=new G,O=new G;function M(C){T.fromArray(s,C*3),O.copy(T);const V=c[C];A.copy(V),A.sub(T.multiplyScalar(T.dot(V))).normalize(),S.crossVectors(O,V);const oe=S.dot(u[C])<0?-1:1;l[C*4]=A.x,l[C*4+1]=A.y,l[C*4+2]=A.z,l[C*4+3]=oe}for(let C=0,V=E.length;C<V;++C){const Z=E[C],oe=Z.start,F=Z.count;for(let W=oe,te=oe+F;W<te;W+=3)M(i[W+0]),M(i[W+1]),M(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)d[v++]=c[p++]}return new wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new Nt,Tr=new zv,Za=new io,dm=new G,fs=new G,hs=new G,ds=new G,Pu=new G,Qa=new G,Ja=new ft,el=new ft,tl=new ft,pm=new G,mm=new G,gm=new G,nl=new G,il=new G;class Cn extends Ht{constructor(e=new Dn,t=new Zh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Pu.fromBufferAttribute(h,e),o?Qa.addScaledVector(Pu,u):Qa.addScaledVector(Pu.sub(t),u))}t.add(Qa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(Za.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Za,dm)===null||Tr.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(hm.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=g,A=_;E<A;E+=3){const S=a.getX(E),T=a.getX(E+1),O=a.getX(E+2);r=rl(this,f,e,i,c,u,h,S,T,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const g=a.getX(m),_=a.getX(m+1),E=a.getX(m+2);r=rl(this,o,e,i,c,u,h,g,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=g,A=_;E<A;E+=3){const S=E,T=E+1,O=E+2;r=rl(this,f,e,i,c,u,h,S,T,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const g=m,_=m+1,E=m+2;r=rl(this,o,e,i,c,u,h,g,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function uE(n,e,t,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hi,a),l===null)return null;il.copy(a),il.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(il);return c<t.near||c>t.far?null:{distance:c,point:il.clone(),object:n}}function rl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,fs),n.getVertexPosition(l,hs),n.getVertexPosition(c,ds);const u=uE(n,e,t,i,fs,hs,ds,nl);if(u){r&&(Ja.fromBufferAttribute(r,a),el.fromBufferAttribute(r,l),tl.fromBufferAttribute(r,c),u.uv=ci.getInterpolation(nl,fs,hs,ds,Ja,el,tl,new ft)),s&&(Ja.fromBufferAttribute(s,a),el.fromBufferAttribute(s,l),tl.fromBufferAttribute(s,c),u.uv1=ci.getInterpolation(nl,fs,hs,ds,Ja,el,tl,new ft),u.uv2=u.uv1),o&&(pm.fromBufferAttribute(o,a),mm.fromBufferAttribute(o,l),gm.fromBufferAttribute(o,c),u.normal=ci.getInterpolation(nl,fs,hs,ds,pm,mm,gm,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};ci.getNormal(fs,hs,ds,h.normal),u.face=h}return u}class Zr extends Dn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(h,2));function v(y,m,f,g,_,E,A,S,T,O,M){const C=E/T,V=A/O,Z=E/2,oe=A/2,F=S/2,W=T+1,te=O+1;let se=0,B=0;const X=new G;for(let j=0;j<te;j++){const ie=j*V-oe;for(let le=0;le<W;le++){const J=le*C-Z;X[y]=J*g,X[m]=ie*_,X[f]=F,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[f]=S>0?1:-1,u.push(X.x,X.y,X.z),h.push(le/T),h.push(1-j/O),se+=1}}for(let j=0;j<O;j++)for(let ie=0;ie<T;ie++){const le=d+ie+W*j,J=d+ie+W*(j+1),ae=d+(ie+1)+W*(j+1),ye=d+(ie+1)+W*j;l.push(le,J,ye),l.push(J,ae,ye),B+=6}a.addGroup(p,B,M),p+=B,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const r in i)e[r]=i[r]}return e}function fE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xv(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const hE={clone:Zs,merge:gn};var dE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dE,this.fragmentShader=pE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=fE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let Yv=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class wn extends Yv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class mE extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(ps,ms,e,t);r.layers=this.layers,this.add(r);const s=new wn(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new wn(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new wn(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new wn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new wn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class jv extends Pn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gE extends jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hr?Jt:$n),this.texture=new jv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zr(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:pr});s.uniforms.tEquirect.value=t;const o=new Cn(r,s),a=t.minFilter;return t.minFilter===aa&&(t.minFilter=qn),new mE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Du=new G,vE=new G,_E=new ot;class br{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Du.subVectors(i,t).cross(vE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_E.getNormalMatrix(e),r=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new io,sl=new G;class Qh{constructor(e=new br,t=new br,i=new br,r=new br,s=new br,o=new br){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],v=r[9],y=r[10],m=r[11],f=r[12],g=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,m-p,E-f).normalize(),i[1].setComponents(l+s,d+c,m+p,E+f).normalize(),i[2].setComponents(l+o,d+u,m+v,E+g).normalize(),i[3].setComponents(l-o,d-u,m-v,E-g).normalize(),i[4].setComponents(l-a,d-h,m-y,E-_).normalize(),t===Oi)i[5].setComponents(l+a,d+h,m+y,E+_).normalize();else if(t===ic)i[5].setComponents(a,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(sl.x=r.normal.x>0?e.max.x:e.min.x,sl.y=r.normal.y>0?e.max.y:e.min.y,sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,p=h.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,h,d),c.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const d=u.array,p=u._updateRange,v=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&v.length===0&&n.bufferSubData(h,0,d),v.length!==0){for(let y=0,m=v.length;y<m;y++){const f=v[y];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Jh extends Dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],v=[],y=[],m=[];for(let f=0;f<u;f++){const g=f*d-o;for(let _=0;_<c;_++){const E=_*h-s;v.push(E,-g,0),y.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const _=g+c*f,E=g+c*(f+1),A=g+1+c*(f+1),S=g+1+c*f;p.push(_,E,S),p.push(E,A,S)}this.setIndex(p),this.setAttribute("position",new Ti(v,3)),this.setAttribute("normal",new Ti(y,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.width,e.height,e.widthSegments,e.heightSegments)}}var SE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xE=`#ifdef USE_ALPHAHASH
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
#endif`,EE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ME=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AE=`#ifdef USE_AOMAP
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
#endif`,CE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RE=`#ifdef USE_BATCHING
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
#endif`,bE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,LE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IE=`#ifdef USE_IRIDESCENCE
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
#endif`,NE=`#ifdef USE_BUMPMAP
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
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,VE=`#define PI 3.141592653589793
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
} // validated`,WE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XE=`vec3 transformedNormal = objectNormal;
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
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$E="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZE=`
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
}`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aM=`#ifdef USE_GRADIENTMAP
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
}`,lM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
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
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
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
#endif`,yM=`struct PhysicalMaterial {
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
}`,SM=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,CM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
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
#endif`,OM=`#ifdef USE_MORPHTARGETS
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
#endif`,UM=`#ifdef USE_MORPHTARGETS
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
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GM=`#ifdef USE_NORMALMAP
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
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r1=`float getShadowMask() {
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
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,a1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S1=`uniform sampler2D t2D;
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`#include <common>
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
}`,A1=`#if DEPTH_PACKING == 3200
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
}`,C1=`#define DISTANCE
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
}`,R1=`#define DISTANCE
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,N1=`uniform vec3 diffuse;
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
}`,O1=`#define LAMBERT
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
}`,U1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,F1=`#define MATCAP
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
}`,B1=`#define NORMAL
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
}`,z1=`#define NORMAL
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
}`,H1=`#define PHONG
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
}`,G1=`#define PHONG
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
}`,V1=`#define STANDARD
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
}`,W1=`#define STANDARD
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
}`,X1=`#define TOON
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
}`,Y1=`#define TOON
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
}`,j1=`uniform float size;
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
}`,K1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,$1=`uniform vec3 color;
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
}`,Z1=`uniform float rotation;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:SE,alphahash_pars_fragment:xE,alphamap_fragment:EE,alphamap_pars_fragment:ME,alphatest_fragment:TE,alphatest_pars_fragment:wE,aomap_fragment:AE,aomap_pars_fragment:CE,batching_pars_vertex:RE,batching_vertex:bE,begin_vertex:LE,beginnormal_vertex:PE,bsdfs:DE,iridescence_fragment:IE,bumpmap_pars_fragment:NE,clipping_planes_fragment:OE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:kE,clipping_planes_vertex:FE,color_fragment:BE,color_pars_fragment:zE,color_pars_vertex:HE,color_vertex:GE,common:VE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:XE,displacementmap_pars_vertex:YE,displacementmap_vertex:jE,emissivemap_fragment:KE,emissivemap_pars_fragment:qE,colorspace_fragment:$E,colorspace_pars_fragment:ZE,envmap_fragment:QE,envmap_common_pars_fragment:JE,envmap_pars_fragment:eM,envmap_pars_vertex:tM,envmap_physical_pars_fragment:dM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:rM,fog_fragment:sM,fog_pars_fragment:oM,gradientmap_pars_fragment:aM,lightmap_fragment:lM,lightmap_pars_fragment:cM,lights_lambert_fragment:uM,lights_lambert_pars_fragment:fM,lights_pars_begin:hM,lights_toon_fragment:pM,lights_toon_pars_fragment:mM,lights_phong_fragment:gM,lights_phong_pars_fragment:vM,lights_physical_fragment:_M,lights_physical_pars_fragment:yM,lights_fragment_begin:SM,lights_fragment_maps:xM,lights_fragment_end:EM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:TM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:AM,map_fragment:CM,map_pars_fragment:RM,map_particle_fragment:bM,map_particle_pars_fragment:LM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:DM,morphcolor_vertex:IM,morphnormal_vertex:NM,morphtarget_pars_vertex:OM,morphtarget_vertex:UM,normal_fragment_begin:kM,normal_fragment_maps:FM,normal_pars_fragment:BM,normal_pars_vertex:zM,normal_vertex:HM,normalmap_pars_fragment:GM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:XM,iridescence_pars_fragment:YM,opaque_fragment:jM,packing:KM,premultiplied_alpha_fragment:qM,project_vertex:$M,dithering_fragment:ZM,dithering_pars_fragment:QM,roughnessmap_fragment:JM,roughnessmap_pars_fragment:e1,shadowmap_pars_fragment:t1,shadowmap_pars_vertex:n1,shadowmap_vertex:i1,shadowmask_pars_fragment:r1,skinbase_vertex:s1,skinning_pars_vertex:o1,skinning_vertex:a1,skinnormal_vertex:l1,specularmap_fragment:c1,specularmap_pars_fragment:u1,tonemapping_fragment:f1,tonemapping_pars_fragment:h1,transmission_fragment:d1,transmission_pars_fragment:p1,uv_pars_fragment:m1,uv_pars_vertex:g1,uv_vertex:v1,worldpos_vertex:_1,background_vert:y1,background_frag:S1,backgroundCube_vert:x1,backgroundCube_frag:E1,cube_vert:M1,cube_frag:T1,depth_vert:w1,depth_frag:A1,distanceRGBA_vert:C1,distanceRGBA_frag:R1,equirect_vert:b1,equirect_frag:L1,linedashed_vert:P1,linedashed_frag:D1,meshbasic_vert:I1,meshbasic_frag:N1,meshlambert_vert:O1,meshlambert_frag:U1,meshmatcap_vert:k1,meshmatcap_frag:F1,meshnormal_vert:B1,meshnormal_frag:z1,meshphong_vert:H1,meshphong_frag:G1,meshphysical_vert:V1,meshphysical_frag:W1,meshtoon_vert:X1,meshtoon_frag:Y1,points_vert:j1,points_frag:K1,shadow_vert:q1,shadow_frag:$1,sprite_vert:Z1,sprite_frag:Q1},Se={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Te(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:gn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:gn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Te(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:gn([Se.points,Se.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:gn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:gn([Se.common,Se.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:gn([Se.sprite,Se.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:gn([Se.common,Se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:gn([Se.lights,Se.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};_i.physical={uniforms:gn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const ol={r:0,b:0,g:0};function J1(n,e,t,i,r,s,o){const a=new Te(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function v(m,f){let g=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?y(a,l):_&&_.isColor&&(y(_,1),g=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Mc)?(u===void 0&&(u=new Cn(new Zr(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Zs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=yt.getTransfer(_.colorSpace)!==bt,(h!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Cn(new Jh(2,2),new Vi({name:"BackgroundMaterial",uniforms:Zs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=yt.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,f){m.getRGB(ol,Xv(n)),i.buffers.color.setClear(ol.r,ol.g,ol.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:v}}function eT(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(F,W,te,se,B){let X=!1;if(o){const j=y(se,te,W);c!==j&&(c=j,p(c.object)),X=f(F,se,te,B),X&&g(F,se,te,B)}else{const j=W.wireframe===!0;(c.geometry!==se.id||c.program!==te.id||c.wireframe!==j)&&(c.geometry=se.id,c.program=te.id,c.wireframe=j,X=!0)}B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,O(F,W,te,se),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function v(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function y(F,W,te){const se=te.wireframe===!0;let B=a[F.id];B===void 0&&(B={},a[F.id]=B);let X=B[W.id];X===void 0&&(X={},B[W.id]=X);let j=X[se];return j===void 0&&(j=m(d()),X[se]=j),j}function m(F){const W=[],te=[],se=[];for(let B=0;B<r;B++)W[B]=0,te[B]=0,se[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:te,attributeDivisors:se,object:F,attributes:{},index:null}}function f(F,W,te,se){const B=c.attributes,X=W.attributes;let j=0;const ie=te.getAttributes();for(const le in ie)if(ie[le].location>=0){const ae=B[le];let ye=X[le];if(ye===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor)),ae===void 0||ae.attribute!==ye||ye&&ae.data!==ye.data)return!0;j++}return c.attributesNum!==j||c.index!==se}function g(F,W,te,se){const B={},X=W.attributes;let j=0;const ie=te.getAttributes();for(const le in ie)if(ie[le].location>=0){let ae=X[le];ae===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));const ye={};ye.attribute=ae,ae&&ae.data&&(ye.data=ae.data),B[le]=ye,j++}c.attributes=B,c.attributesNum=j,c.index=se}function _(){const F=c.newAttributes;for(let W=0,te=F.length;W<te;W++)F[W]=0}function E(F){A(F,0)}function A(F,W){const te=c.newAttributes,se=c.enabledAttributes,B=c.attributeDivisors;te[F]=1,se[F]===0&&(n.enableVertexAttribArray(F),se[F]=1),B[F]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,W),B[F]=W)}function S(){const F=c.newAttributes,W=c.enabledAttributes;for(let te=0,se=W.length;te<se;te++)W[te]!==F[te]&&(n.disableVertexAttribArray(te),W[te]=0)}function T(F,W,te,se,B,X,j){j===!0?n.vertexAttribIPointer(F,W,te,B,X):n.vertexAttribPointer(F,W,te,se,B,X)}function O(F,W,te,se){if(i.isWebGL2===!1&&(F.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const B=se.attributes,X=te.getAttributes(),j=W.defaultAttributeValues;for(const ie in X){const le=X[ie];if(le.location>=0){let J=B[ie];if(J===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),J!==void 0){const ae=J.normalized,ye=J.itemSize,we=t.get(J);if(we===void 0)continue;const Ce=we.buffer,We=we.type,Ye=we.bytesPerElement,be=i.isWebGL2===!0&&(We===n.INT||We===n.UNSIGNED_INT||J.gpuType===Av);if(J.isInterleavedBufferAttribute){const lt=J.data,K=lt.stride,tn=J.offset;if(lt.isInstancedInterleavedBuffer){for(let ke=0;ke<le.locationSize;ke++)A(le.location+ke,lt.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ke=0;ke<le.locationSize;ke++)E(le.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ke=0;ke<le.locationSize;ke++)T(le.location+ke,ye/le.locationSize,We,ae,K*Ye,(tn+ye/le.locationSize*ke)*Ye,be)}else{if(J.isInstancedBufferAttribute){for(let lt=0;lt<le.locationSize;lt++)A(le.location+lt,J.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let lt=0;lt<le.locationSize;lt++)E(le.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let lt=0;lt<le.locationSize;lt++)T(le.location+lt,ye/le.locationSize,We,ae,ye*Ye,ye/le.locationSize*lt*Ye,be)}}else if(j!==void 0){const ae=j[ie];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(le.location,ae);break;case 3:n.vertexAttrib3fv(le.location,ae);break;case 4:n.vertexAttrib4fv(le.location,ae);break;default:n.vertexAttrib1fv(le.location,ae)}}}}S()}function M(){Z();for(const F in a){const W=a[F];for(const te in W){const se=W[te];for(const B in se)v(se[B].object),delete se[B];delete W[te]}delete a[F]}}function C(F){if(a[F.id]===void 0)return;const W=a[F.id];for(const te in W){const se=W[te];for(const B in se)v(se[B].object),delete se[B];delete W[te]}delete a[F.id]}function V(F){for(const W in a){const te=a[W];if(te[F.id]===void 0)continue;const se=te[F.id];for(const B in se)v(se[B].object),delete se[B];delete te[F.id]}}function Z(){oe(),u=!0,c!==l&&(c=l,p(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:oe,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:E,disableUnusedAttributes:S}}function tT(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let p,v;if(r)p=n,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d;v++)this.render(u[v],h[v]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=h[y];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function nT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,E=o||e.has("OES_texture_float"),A=_&&E,S=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:S}}function iT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new br,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let E=f.clippingState||null;l.value=E,E=u(v,d,_,p);for(let A=0;A!==_;++A)E[A]=t[A];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,v){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const f=p+y*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,E=p;_!==y;++_,E+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function rT(n){let e=new WeakMap;function t(o,a){return a===Gf?o.mapping=Ks:a===Vf&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gf||a===Vf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gE(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qv extends Yv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,vm=[.125,.215,.35,.446,.526,.582],Dr=20,Iu=new qv,_m=new Te;let Nu=null,Ou=0,Uu=0;const Lr=(1+Math.sqrt(5))/2,gs=1/Lr,ym=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Lr,gs),new G(0,Lr,-gs),new G(gs,0,Lr),new G(-gs,0,Lr),new G(Lr,gs,0),new G(-Lr,gs,0)];class Sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Nu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Ou,Uu),e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:la,format:ui,colorSpace:Gi,depthBuffer:!1},r=xm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(s)),this._blurMaterial=oT(s,e,t)}return r}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,Iu)}_sceneToCubeUV(e,t,i,r){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_m),u.toneMapping=mr,u.autoClear=!1;const p=new Zh({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),v=new Cn(new Zr,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(_m),y=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;al(r,g*_,f>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ks||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;al(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Iu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ym[(r-1)%ym.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Cn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):Dr;m>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);const f=[];let g=0;for(let T=0;T<Dr;++T){const O=T/y,M=Math.exp(-O*O/2);f.push(M),T===0?g+=M:T<m&&(g+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const E=this._sizeLods[r],A=3*E*(r>_-Ps?r-_+Ps:0),S=4*(this._cubeSize-E);al(t,A,S,3*E,2*E),l.setRenderTarget(t),l.render(h,Iu)}}function sT(n){const e=[],t=[],i=[];let r=n;const s=n-Ps+1+vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ps?l=vm[o-n+Ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,y=3,m=2,f=1,g=new Float32Array(y*v*p),_=new Float32Array(m*v*p),E=new Float32Array(f*v*p);for(let S=0;S<p;S++){const T=S%3*2/3-1,O=S>2?0:-1,M=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];g.set(M,y*v*S),_.set(d,m*v*S);const C=[S,S,S,S,S,S];E.set(C,f*v*S)}const A=new Dn;A.setAttribute("position",new wt(g,y)),A.setAttribute("uv",new wt(_,m)),A.setAttribute("faceIndex",new wt(E,f)),e.push(A),r>Ps&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xm(n,e,t){const i=new jr(n,e,t);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function oT(n,e,t){const i=new Float32Array(Dr),r=new G(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ed(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Em(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Mm(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function ed(){return`

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
	`}function aT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gf||l===Vf,u=l===Ks||l===qs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Sm(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Sm(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function lT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cT(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const y=p[v];for(let m=0,f=y.length;m<f;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let _=0,E=g.length;_<E;_+=3){const A=g[_+0],S=g[_+1],T=g[_+2];d.push(A,S,S,T,T,A)}}else if(v!==void 0){const g=v.array;y=v.version;for(let _=0,E=g.length/3-1;_<E;_+=3){const A=_+0,S=_+1,T=_+2;d.push(A,S,S,T,T,A)}}else return;const m=new(Uv(d)?Wv:Vv)(d,1);m.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function uT(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,v){n.drawElements(s,v,a,p*l),t.update(v,s,1)}function h(p,v,y){if(y===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,v,a,p*l,y),t.update(v,s,y)}function d(p,v,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<y;f++)this.render(p[f]/l,v[f]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,y);let f=0;for(let g=0;g<y;g++)f+=v[g];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function fT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hT(n,e){return n[0]-e[0]}function dT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function pT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==y){let W=function(){oe.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),E===!0&&(M=2),A===!0&&(M=3);let C=u.attributes.position.count*M,V=1;C>e.maxTextureSize&&(V=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const Z=new Float32Array(C*V*4*y),oe=new Bv(Z,C,V,y);oe.type=sr,oe.needsUpdate=!0;const F=M*4;for(let te=0;te<y;te++){const se=S[te],B=T[te],X=O[te],j=C*V*4*te;for(let ie=0;ie<se.count;ie++){const le=ie*F;_===!0&&(o.fromBufferAttribute(se,ie),Z[j+le+0]=o.x,Z[j+le+1]=o.y,Z[j+le+2]=o.z,Z[j+le+3]=0),E===!0&&(o.fromBufferAttribute(B,ie),Z[j+le+4]=o.x,Z[j+le+5]=o.y,Z[j+le+6]=o.z,Z[j+le+7]=0),A===!0&&(o.fromBufferAttribute(X,ie),Z[j+le+8]=o.x,Z[j+le+9]=o.y,Z[j+le+10]=o.z,Z[j+le+11]=X.itemSize===4?o.w:1)}}m={count:y,texture:oe,size:new ft(C,V)},s.set(u,m),u.addEventListener("dispose",W)}let f=0;for(let _=0;_<d.length;_++)f+=d[_];const g=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let y=i[u.id];if(y===void 0||y.length!==v){y=[];for(let E=0;E<v;E++)y[E]=[E,0];i[u.id]=y}for(let E=0;E<v;E++){const A=y[E];A[0]=E,A[1]=d[E]}y.sort(dT);for(let E=0;E<8;E++)E<v&&y[E][1]?(a[E][0]=y[E][0],a[E][1]=y[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(hT);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let g=0;for(let E=0;E<8;E++){const A=a[E],S=A[0],T=A[1];S!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+E)!==m[S]&&u.setAttribute("morphTarget"+E,m[S]),f&&u.getAttribute("morphNormal"+E)!==f[S]&&u.setAttribute("morphNormal"+E,f[S]),r[E]=T,g+=T):(m&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),f&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const _=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function mT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class $v extends Pn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:zr,u!==zr&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zr&&(i=rr),i===void 0&&u===$s&&(i=Br),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zv=new Pn,Qv=new $v(1,1);Qv.compareFunction=Ov;const Jv=new Bv,e_=new Jx,t_=new jv,Tm=[],wm=[],Am=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function so(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tm[r];if(s===void 0&&(s=new Float32Array(r),Tm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ac(n,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function _T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function yT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function ST(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Rm.set(i),n.uniformMatrix2fv(this.addr,!1,Rm),$t(t,i)}}function xT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Cm.set(i),n.uniformMatrix3fv(this.addr,!1,Cm),$t(t,i)}}function ET(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Am.set(i),n.uniformMatrix4fv(this.addr,!1,Am),$t(t,i)}}function MT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function CT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function bT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function LT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function PT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Qv:Zv;t.setTexture2D(e||s,r)}function DT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||e_,r)}function IT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||t_,r)}function NT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jv,r)}function OT(n){switch(n){case 5126:return gT;case 35664:return vT;case 35665:return _T;case 35666:return yT;case 35674:return ST;case 35675:return xT;case 35676:return ET;case 5124:case 35670:return MT;case 35667:case 35671:return TT;case 35668:case 35672:return wT;case 35669:case 35673:return AT;case 5125:return CT;case 36294:return RT;case 36295:return bT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return NT}}function UT(n,e){n.uniform1fv(this.addr,e)}function kT(n,e){const t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function FT(n,e){const t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function BT(n,e){const t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function zT(n,e){const t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HT(n,e){const t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function GT(n,e){const t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VT(n,e){n.uniform1iv(this.addr,e)}function WT(n,e){n.uniform2iv(this.addr,e)}function XT(n,e){n.uniform3iv(this.addr,e)}function YT(n,e){n.uniform4iv(this.addr,e)}function jT(n,e){n.uniform1uiv(this.addr,e)}function KT(n,e){n.uniform2uiv(this.addr,e)}function qT(n,e){n.uniform3uiv(this.addr,e)}function $T(n,e){n.uniform4uiv(this.addr,e)}function ZT(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zv,s[o])}function QT(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||e_,s[o])}function JT(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||t_,s[o])}function ew(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jv,s[o])}function tw(n){switch(n){case 5126:return UT;case 35664:return kT;case 35665:return FT;case 35666:return BT;case 35674:return zT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return WT;case 35668:case 35672:return XT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return KT;case 36295:return qT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return ew}}class nw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=OT(t.type)}}class iw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tw(t.type)}}class rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function bm(n,e){n.seq.push(e),n.map[e.id]=e}function sw(n,e,t){const i=n.name,r=i.length;for(ku.lastIndex=0;;){const s=ku.exec(i),o=ku.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bm(t,c===void 0?new nw(a,n,e):new iw(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new rw(a),bm(t,h)),t=h}}}class Rl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ow=37297;let aw=0;function lw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function cw(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===nc&&t===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&t===nc&&(i="LinearSRGBToLinearDisplayP3"),n){case Gi:case Tc:return[i,"LinearTransferOETF"];case Jt:case $h:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Pm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lw(n.getShaderSource(e),o)}else return r}function uw(n,e){const t=cw(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fw(n,e){let t;switch(e){case Mx:t="Linear";break;case Tx:t="Reinhard";break;case wx:t="OptimizedCineon";break;case Tv:t="ACESFilmic";break;case Cx:t="AgX";break;case Ax:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function dw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function pw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ds(n){return n!==""}function Dm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(n){return n.replace(gw,_w)}const vw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _w(n,e){let t=it[e];if(t===void 0){const i=vw.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qf(t)}const yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(n){return n.replace(yw,Sw)}function Sw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Om(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ZS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Ew(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ks:case qs:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function Tw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kh:e="ENVMAP_BLENDING_MULTIPLY";break;case xx:e="ENVMAP_BLENDING_MIX";break;case Ex:e="ENVMAP_BLENDING_ADD";break}return e}function ww(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Aw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xw(t),c=Ew(t),u=Mw(t),h=Tw(t),d=ww(t),p=t.isWebGL2?"":hw(t),v=dw(t),y=pw(s),m=r.createProgram();let f,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ds).join(`
`),f.length>0&&(f+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ds).join(`
`),g.length>0&&(g+=`
`)):(f=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),g=[p,Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?it.tonemapping_pars_fragment:"",t.toneMapping!==mr?fw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,uw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=qf(o),o=Dm(o,t),o=Im(o,t),a=qf(a),a=Dm(a,t),a=Im(a,t),o=Nm(o),a=Nm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=_+f+o,A=_+g+a,S=Lm(r,r.VERTEX_SHADER,E),T=Lm(r,r.FRAGMENT_SHADER,A);r.attachShader(m,S),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function O(Z){if(n.debug.checkShaderErrors){const oe=r.getProgramInfoLog(m).trim(),F=r.getShaderInfoLog(S).trim(),W=r.getShaderInfoLog(T).trim();let te=!0,se=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,S,T);else{const B=Pm(r,S,"vertex"),X=Pm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+B+`
`+X)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(F===""||W==="")&&(se=!1);se&&(Z.diagnostics={runnable:te,programLog:oe,vertexShader:{log:F,prefix:f},fragmentShader:{log:W,prefix:g}})}r.deleteShader(S),r.deleteShader(T),M=new Rl(r,m),C=mw(r,m)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(m,ow)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=T,this}let Cw=0;class Rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bw(e),t.set(e,i)),i}}class bw{constructor(e){this.id=Cw++,this.code=e,this.usedTimes=0}}function Lw(n,e,t,i,r,s,o){const a=new Hv,l=new Rw,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,C,V,Z,oe){const F=Z.fog,W=oe.geometry,te=M.isMeshStandardMaterial?Z.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),B=se&&se.mapping===Mc?se.image.height:null,X=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const j=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=j!==void 0?j.length:0;let le=0;W.morphAttributes.position!==void 0&&(le=1),W.morphAttributes.normal!==void 0&&(le=2),W.morphAttributes.color!==void 0&&(le=3);let J,ae,ye,we;if(X){const nn=_i[X];J=nn.vertexShader,ae=nn.fragmentShader}else J=M.vertexShader,ae=M.fragmentShader,l.update(M),ye=l.getVertexShaderID(M),we=l.getFragmentShaderID(M);const Ce=n.getRenderTarget(),We=oe.isInstancedMesh===!0,Ye=oe.isBatchedMesh===!0,be=!!M.map,lt=!!M.matcap,K=!!se,tn=!!M.aoMap,ke=!!M.lightMap,Fe=!!M.bumpMap,Ie=!!M.normalMap,Et=!!M.displacementMap,qe=!!M.emissiveMap,L=!!M.metalnessMap,w=!!M.roughnessMap,Y=M.anisotropy>0,de=M.clearcoat>0,he=M.iridescence>0,ge=M.sheen>0,Ne=M.transmission>0,Me=Y&&!!M.anisotropyMap,Le=de&&!!M.clearcoatMap,Ge=de&&!!M.clearcoatNormalMap,Ze=de&&!!M.clearcoatRoughnessMap,fe=he&&!!M.iridescenceMap,ht=he&&!!M.iridescenceThicknessMap,et=ge&&!!M.sheenColorMap,Ke=ge&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,Pe=!!M.specularColorMap,Qe=!!M.specularIntensityMap,ct=Ne&&!!M.transmissionMap,Ct=Ne&&!!M.thicknessMap,tt=!!M.gradientMap,ve=!!M.alphaMap,N=M.alphaTest>0,Ee=!!M.alphaHash,xe=!!M.extensions,je=!!W.attributes.uv1,Be=!!W.attributes.uv2,gt=!!W.attributes.uv3;let vt=mr;return M.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(vt=n.toneMapping),{isWebGL2:u,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:J,fragmentShader:ae,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ye,instancing:We,instancingColor:We&&oe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Gi,map:be,matcap:lt,envMap:K,envMapMode:K&&se.mapping,envMapCubeUVHeight:B,aoMap:tn,lightMap:ke,bumpMap:Fe,normalMap:Ie,displacementMap:d&&Et,emissiveMap:qe,normalMapObjectSpace:Ie&&M.normalMapType===Bx,normalMapTangentSpace:Ie&&M.normalMapType===Nv,metalnessMap:L,roughnessMap:w,anisotropy:Y,anisotropyMap:Me,clearcoat:de,clearcoatMap:Le,clearcoatNormalMap:Ge,clearcoatRoughnessMap:Ze,iridescence:he,iridescenceMap:fe,iridescenceThicknessMap:ht,sheen:ge,sheenColorMap:et,sheenRoughnessMap:Ke,specularMap:Ue,specularColorMap:Pe,specularIntensityMap:Qe,transmission:Ne,transmissionMap:ct,thicknessMap:Ct,gradientMap:tt,opaque:M.transparent===!1&&M.blending===Bs,alphaMap:ve,alphaTest:N,alphaHash:Ee,combine:M.combine,mapUv:be&&y(M.map.channel),aoMapUv:tn&&y(M.aoMap.channel),lightMapUv:ke&&y(M.lightMap.channel),bumpMapUv:Fe&&y(M.bumpMap.channel),normalMapUv:Ie&&y(M.normalMap.channel),displacementMapUv:Et&&y(M.displacementMap.channel),emissiveMapUv:qe&&y(M.emissiveMap.channel),metalnessMapUv:L&&y(M.metalnessMap.channel),roughnessMapUv:w&&y(M.roughnessMap.channel),anisotropyMapUv:Me&&y(M.anisotropyMap.channel),clearcoatMapUv:Le&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:et&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&y(M.sheenRoughnessMap.channel),specularMapUv:Ue&&y(M.specularMap.channel),specularColorMapUv:Pe&&y(M.specularColorMap.channel),specularIntensityMapUv:Qe&&y(M.specularIntensityMap.channel),transmissionMapUv:ct&&y(M.transmissionMap.channel),thicknessMapUv:Ct&&y(M.thicknessMap.channel),alphaMapUv:ve&&y(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ie||Y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:Be,vertexUv3s:gt,pointsUvs:oe.isPoints===!0&&!!W.attributes.uv&&(be||ve),fog:!!F,useFog:M.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:oe.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Si,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:xe&&M.extensions.derivatives===!0,extensionFragDepth:xe&&M.extensions.fragDepth===!0,extensionDrawBuffers:xe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)C.push(V),C.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(g(C,M),_(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function g(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function _(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){const C=v[M.type];let V;if(C){const Z=_i[C];V=hE.clone(Z.uniforms)}else V=M.uniforms;return V}function A(M,C){let V;for(let Z=0,oe=c.length;Z<oe;Z++){const F=c[Z];if(F.cacheKey===C){V=F,++V.usedTimes;break}}return V===void 0&&(V=new Aw(n,C,M,s),c.push(V)),V}function S(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:A,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:O}}function Pw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Dw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Um(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function km(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,v,y,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:y,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function a(h,d,p,v,y,m){const f=o(h,d,p,v,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,v,y,m){const f=o(h,d,p,v,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Dw),i.length>1&&i.sort(d||Um),r.length>1&&r.sort(d||Um)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Iw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new km,n.set(i,[o])):r>=s.length?(o=new km,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Nw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Te};break;case"SpotLight":t={position:new G,direction:new G,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function Ow(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Uw=0;function kw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fw(n,e){const t=new Nw,i=Ow(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,o=new Nt,a=new Nt;function l(u,h){let d=0,p=0,v=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let y=0,m=0,f=0,g=0,_=0,E=0,A=0,S=0,T=0,O=0,M=0;u.sort(kw);const C=h===!0?Math.PI:1;for(let Z=0,oe=u.length;Z<oe;Z++){const F=u[Z],W=F.color,te=F.intensity,se=F.distance,B=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=W.r*te*C,p+=W.g*te*C,v+=W.b*te*C;else if(F.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(F.sh.coefficients[X],te);M++}else if(F.isDirectionalLight){const X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){const j=F.shadow,ie=i.get(F);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,r.directionalShadow[y]=ie,r.directionalShadowMap[y]=B,r.directionalShadowMatrix[y]=F.shadow.matrix,E++}r.directional[y]=X,y++}else if(F.isSpotLight){const X=t.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(W).multiplyScalar(te*C),X.distance=se,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,r.spot[f]=X;const j=F.shadow;if(F.map&&(r.spotLightMap[T]=F.map,T++,j.updateMatrices(F),F.castShadow&&O++),r.spotLightMatrix[f]=j.matrix,F.castShadow){const ie=i.get(F);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,r.spotShadow[f]=ie,r.spotShadowMap[f]=B,S++}f++}else if(F.isRectAreaLight){const X=t.get(F);X.color.copy(W).multiplyScalar(te),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),r.rectArea[g]=X,g++}else if(F.isPointLight){const X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*C),X.distance=F.distance,X.decay=F.decay,F.castShadow){const j=F.shadow,ie=i.get(F);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,r.pointShadow[m]=ie,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=F.shadow.matrix,A++}r.point[m]=X,m++}else if(F.isHemisphereLight){const X=t.get(F);X.skyColor.copy(F.color).multiplyScalar(te*C),X.groundColor.copy(F.groundColor).multiplyScalar(te*C),r.hemi[_]=X,_++}}g>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==y||V.pointLength!==m||V.spotLength!==f||V.rectAreaLength!==g||V.hemiLength!==_||V.numDirectionalShadows!==E||V.numPointShadows!==A||V.numSpotShadows!==S||V.numSpotMaps!==T||V.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=g,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=S+T-O,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=M,V.directionalLength=y,V.pointLength=m,V.spotLength=f,V.rectAreaLength=g,V.hemiLength=_,V.numDirectionalShadows=E,V.numPointShadows=A,V.numSpotShadows=S,V.numSpotMaps=T,V.numLightProbes=M,r.version=Uw++)}function c(u,h){let d=0,p=0,v=0,y=0,m=0;const f=h.matrixWorldInverse;for(let g=0,_=u.length;g<_;g++){const E=u[g];if(E.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),d++}else if(E.isSpotLight){const A=r.spot[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),v++}else if(E.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(E.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Fm(n,e){const t=new Fw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Bw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Fm(n,e),t.set(s,[l])):o>=a.length?(l=new Fm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class zw extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hw extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vw=`uniform sampler2D shadow_pass;
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
}`;function Ww(n,e,t){let i=new Qh;const r=new ft,s=new ft,o=new It,a=new zw({depthPacking:Fx}),l=new Hw,c={},u=t.maxTextureSize,h={[Hi]:yn,[yn]:Hi,[Si]:Si},d=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Gw,fragmentShader:Vw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Dn;v.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Cn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mv;let f=this.type;this.render=function(S,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const M=n.getRenderTarget(),C=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(pr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const oe=f!==Li&&this.type===Li,F=f===Li&&this.type!==Li;for(let W=0,te=S.length;W<te;W++){const se=S[W],B=se.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const X=B.getFrameExtents();if(r.multiply(X),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,B.mapSize.y=s.y)),B.map===null||oe===!0||F===!0){const ie=this.type!==Li?{minFilter:an,magFilter:an}:{};B.map!==null&&B.map.dispose(),B.map=new jr(r.x,r.y,ie),B.map.texture.name=se.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const j=B.getViewportCount();for(let ie=0;ie<j;ie++){const le=B.getViewport(ie);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),Z.viewport(o),B.updateMatrices(se,ie),i=B.getFrustum(),E(T,O,B.camera,se,this.type)}B.isPointLightShadow!==!0&&this.type===Li&&g(B,O),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,C,V)};function g(S,T){const O=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new jr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,O,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,O,p,y,null)}function _(S,T,O,M){let C=null;const V=O.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)C=V;else if(C=O.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Z=C.uuid,oe=T.uuid;let F=c[Z];F===void 0&&(F={},c[Z]=F);let W=F[oe];W===void 0&&(W=C.clone(),F[oe]=W,T.addEventListener("dispose",A)),C=W}if(C.visible=T.visible,C.wireframe=T.wireframe,M===Li?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:h[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=n.properties.get(C);Z.light=O}return C}function E(S,T,O,M,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Li)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld);const oe=e.update(S),F=S.material;if(Array.isArray(F)){const W=oe.groups;for(let te=0,se=W.length;te<se;te++){const B=W[te],X=F[B.materialIndex];if(X&&X.visible){const j=_(S,X,M,C);S.onBeforeShadow(n,S,T,O,oe,j,B),n.renderBufferDirect(O,null,oe,j,S,B),S.onAfterShadow(n,S,T,O,oe,j,B)}}}else if(F.visible){const W=_(S,F,M,C);S.onBeforeShadow(n,S,T,O,oe,W,null),n.renderBufferDirect(O,null,oe,W,S,null),S.onAfterShadow(n,S,T,O,oe,W,null)}}const Z=S.children;for(let oe=0,F=Z.length;oe<F;oe++)E(Z[oe],T,O,M,C)}function A(S){S.target.removeEventListener("dispose",A);for(const O in c){const M=c[O],C=S.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}function Xw(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const Ee=new It;let xe=null;const je=new It(0,0,0,0);return{setMask:function(Be){xe!==Be&&!N&&(n.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){N=Be},setClear:function(Be,gt,vt,Gt,nn){nn===!0&&(Be*=Gt,gt*=Gt,vt*=Gt),Ee.set(Be,gt,vt,Gt),je.equals(Ee)===!1&&(n.clearColor(Be,gt,vt,Gt),je.copy(Ee))},reset:function(){N=!1,xe=null,je.set(-1,0,0,0)}}}function s(){let N=!1,Ee=null,xe=null,je=null;return{setTest:function(Be){Be?Ye(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Be){Ee!==Be&&!N&&(n.depthMask(Be),Ee=Be)},setFunc:function(Be){if(xe!==Be){switch(Be){case px:n.depthFunc(n.NEVER);break;case mx:n.depthFunc(n.ALWAYS);break;case gx:n.depthFunc(n.LESS);break;case Jl:n.depthFunc(n.LEQUAL);break;case vx:n.depthFunc(n.EQUAL);break;case _x:n.depthFunc(n.GEQUAL);break;case yx:n.depthFunc(n.GREATER);break;case Sx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=Be}},setLocked:function(Be){N=Be},setClear:function(Be){je!==Be&&(n.clearDepth(Be),je=Be)},reset:function(){N=!1,Ee=null,xe=null,je=null}}}function o(){let N=!1,Ee=null,xe=null,je=null,Be=null,gt=null,vt=null,Gt=null,nn=null;return{setTest:function(_t){N||(_t?Ye(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(_t){Ee!==_t&&!N&&(n.stencilMask(_t),Ee=_t)},setFunc:function(_t,rn,Vn){(xe!==_t||je!==rn||Be!==Vn)&&(n.stencilFunc(_t,rn,Vn),xe=_t,je=rn,Be=Vn)},setOp:function(_t,rn,Vn){(gt!==_t||vt!==rn||Gt!==Vn)&&(n.stencilOp(_t,rn,Vn),gt=_t,vt=rn,Gt=Vn)},setLocked:function(_t){N=_t},setClear:function(_t){nn!==_t&&(n.clearStencil(_t),nn=_t)},reset:function(){N=!1,Ee=null,xe=null,je=null,Be=null,gt=null,vt=null,Gt=null,nn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},v=new WeakMap,y=[],m=null,f=!1,g=null,_=null,E=null,A=null,S=null,T=null,O=null,M=new Te(0,0,0),C=0,V=!1,Z=null,oe=null,F=null,W=null,te=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=X>=2);let ie=null,le={};const J=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),ye=new It().fromArray(J),we=new It().fromArray(ae);function Ce(N,Ee,xe,je){const Be=new Uint8Array(4),gt=n.createTexture();n.bindTexture(N,gt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let vt=0;vt<xe;vt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,je,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Ee+vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return gt}const We={};We[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),We[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(We[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),We[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ye(n.DEPTH_TEST),l.setFunc(Jl),qe(!1),L(yp),Ye(n.CULL_FACE),Ie(pr);function Ye(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function be(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function lt(N,Ee){return p[N]!==Ee?(n.bindFramebuffer(N,Ee),p[N]=Ee,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Ee),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function K(N,Ee){let xe=y,je=!1;if(N)if(xe=v.get(Ee),xe===void 0&&(xe=[],v.set(Ee,xe)),N.isWebGLMultipleRenderTargets){const Be=N.texture;if(xe.length!==Be.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,vt=Be.length;gt<vt;gt++)xe[gt]=n.COLOR_ATTACHMENT0+gt;xe.length=Be.length,je=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,je=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,je=!0);je&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function tn(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const ke={[Pr]:n.FUNC_ADD,[JS]:n.FUNC_SUBTRACT,[ex]:n.FUNC_REVERSE_SUBTRACT};if(i)ke[Mp]=n.MIN,ke[Tp]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ke[Mp]=N.MIN_EXT,ke[Tp]=N.MAX_EXT)}const Fe={[tx]:n.ZERO,[nx]:n.ONE,[ix]:n.SRC_COLOR,[zf]:n.SRC_ALPHA,[cx]:n.SRC_ALPHA_SATURATE,[ax]:n.DST_COLOR,[sx]:n.DST_ALPHA,[rx]:n.ONE_MINUS_SRC_COLOR,[Hf]:n.ONE_MINUS_SRC_ALPHA,[lx]:n.ONE_MINUS_DST_COLOR,[ox]:n.ONE_MINUS_DST_ALPHA,[ux]:n.CONSTANT_COLOR,[fx]:n.ONE_MINUS_CONSTANT_COLOR,[hx]:n.CONSTANT_ALPHA,[dx]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(N,Ee,xe,je,Be,gt,vt,Gt,nn,_t){if(N===pr){f===!0&&(be(n.BLEND),f=!1);return}if(f===!1&&(Ye(n.BLEND),f=!0),N!==QS){if(N!==g||_t!==V){if((_!==Pr||S!==Pr)&&(n.blendEquation(n.FUNC_ADD),_=Pr,S=Pr),_t)switch(N){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sp:n.blendFunc(n.ONE,n.ONE);break;case xp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ep:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ep:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,A=null,T=null,O=null,M.set(0,0,0),C=0,g=N,V=_t}return}Be=Be||Ee,gt=gt||xe,vt=vt||je,(Ee!==_||Be!==S)&&(n.blendEquationSeparate(ke[Ee],ke[Be]),_=Ee,S=Be),(xe!==E||je!==A||gt!==T||vt!==O)&&(n.blendFuncSeparate(Fe[xe],Fe[je],Fe[gt],Fe[vt]),E=xe,A=je,T=gt,O=vt),(Gt.equals(M)===!1||nn!==C)&&(n.blendColor(Gt.r,Gt.g,Gt.b,nn),M.copy(Gt),C=nn),g=N,V=!1}function Et(N,Ee){N.side===Si?be(n.CULL_FACE):Ye(n.CULL_FACE);let xe=N.side===yn;Ee&&(xe=!xe),qe(xe),N.blending===Bs&&N.transparent===!1?Ie(pr):Ie(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const je=N.stencilWrite;c.setTest(je),je&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Y(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ye(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(N){Z!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),Z=N)}function L(N){N!==qS?(Ye(n.CULL_FACE),N!==oe&&(N===yp?n.cullFace(n.BACK):N===$S?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),oe=N}function w(N){N!==F&&(B&&n.lineWidth(N),F=N)}function Y(N,Ee,xe){N?(Ye(n.POLYGON_OFFSET_FILL),(W!==Ee||te!==xe)&&(n.polygonOffset(Ee,xe),W=Ee,te=xe)):be(n.POLYGON_OFFSET_FILL)}function de(N){N?Ye(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function he(N){N===void 0&&(N=n.TEXTURE0+se-1),ie!==N&&(n.activeTexture(N),ie=N)}function ge(N,Ee,xe){xe===void 0&&(ie===null?xe=n.TEXTURE0+se-1:xe=ie);let je=le[xe];je===void 0&&(je={type:void 0,texture:void 0},le[xe]=je),(je.type!==N||je.texture!==Ee)&&(ie!==xe&&(n.activeTexture(xe),ie=xe),n.bindTexture(N,Ee||We[N]),je.type=N,je.texture=Ee)}function Ne(){const N=le[ie];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qe(N){ye.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ye.copy(N))}function ct(N){we.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),we.copy(N))}function Ct(N,Ee){let xe=h.get(Ee);xe===void 0&&(xe=new WeakMap,h.set(Ee,xe));let je=xe.get(N);je===void 0&&(je=n.getUniformBlockIndex(Ee,N.name),xe.set(N,je))}function tt(N,Ee){const je=h.get(Ee).get(N);u.get(Ee)!==je&&(n.uniformBlockBinding(Ee,je,N.__bindingPointIndex),u.set(Ee,je))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ie=null,le={},p={},v=new WeakMap,y=[],m=null,f=!1,g=null,_=null,E=null,A=null,S=null,T=null,O=null,M=new Te(0,0,0),C=0,V=!1,Z=null,oe=null,F=null,W=null,te=null,ye.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ye,disable:be,bindFramebuffer:lt,drawBuffers:K,useProgram:tn,setBlending:Ie,setMaterial:Et,setFlipSided:qe,setCullFace:L,setLineWidth:w,setPolygonOffset:Y,setScissorTest:de,activeTexture:he,bindTexture:ge,unbindTexture:Ne,compressedTexImage2D:Me,compressedTexImage3D:Le,texImage2D:Ue,texImage3D:Pe,updateUBOMapping:Ct,uniformBlockBinding:tt,texStorage2D:et,texStorage3D:Ke,texSubImage2D:Ge,texSubImage3D:Ze,compressedTexSubImage2D:fe,compressedTexSubImage3D:ht,scissor:Qe,viewport:ct,reset:ve}}function Yw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,w){return p?new OffscreenCanvas(L,w):rc("canvas")}function y(L,w,Y,de){let he=1;if((L.width>de||L.height>de)&&(he=de/Math.max(L.width,L.height)),he<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ge=w?Kf:Math.floor,Ne=ge(he*L.width),Me=ge(he*L.height);h===void 0&&(h=v(Ne,Me));const Le=Y?v(Ne,Me):h;return Le.width=Ne,Le.height=Me,Le.getContext("2d").drawImage(L,0,0,Ne,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ne+"x"+Me+")."),Le}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return em(L.width)&&em(L.height)}function f(L){return a?!1:L.wrapS!==kn||L.wrapT!==kn||L.minFilter!==an&&L.minFilter!==qn}function g(L,w){return L.generateMipmaps&&w&&L.minFilter!==an&&L.minFilter!==qn}function _(L){n.generateMipmap(L)}function E(L,w,Y,de,he=!1){if(a===!1)return w;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ge=w;if(w===n.RED&&(Y===n.FLOAT&&(ge=n.R32F),Y===n.HALF_FLOAT&&(ge=n.R16F),Y===n.UNSIGNED_BYTE&&(ge=n.R8)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ge=n.R8UI),Y===n.UNSIGNED_SHORT&&(ge=n.R16UI),Y===n.UNSIGNED_INT&&(ge=n.R32UI),Y===n.BYTE&&(ge=n.R8I),Y===n.SHORT&&(ge=n.R16I),Y===n.INT&&(ge=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(ge=n.RG32F),Y===n.HALF_FLOAT&&(ge=n.RG16F),Y===n.UNSIGNED_BYTE&&(ge=n.RG8)),w===n.RGBA){const Ne=he?ec:yt.getTransfer(de);Y===n.FLOAT&&(ge=n.RGBA32F),Y===n.HALF_FLOAT&&(ge=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ge=Ne===bt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function A(L,w,Y){return g(L,Y)===!0||L.isFramebufferTexture&&L.minFilter!==an&&L.minFilter!==qn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function S(L){return L===an||L===wp||L===lu?n.NEAREST:n.LINEAR}function T(L){const w=L.target;w.removeEventListener("dispose",T),M(w),w.isVideoTexture&&u.delete(w)}function O(L){const w=L.target;w.removeEventListener("dispose",O),V(w)}function M(L){const w=i.get(L);if(w.__webglInit===void 0)return;const Y=L.source,de=d.get(Y);if(de){const he=de[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&C(L),Object.keys(de).length===0&&d.delete(Y)}i.remove(L)}function C(L){const w=i.get(L);n.deleteTexture(w.__webglTexture);const Y=L.source,de=d.get(Y);delete de[w.__cacheKey],o.memory.textures--}function V(L){const w=L.texture,Y=i.get(L),de=i.get(w);if(de.__webglTexture!==void 0&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(Y.__webglFramebuffer[he]))for(let ge=0;ge<Y.__webglFramebuffer[he].length;ge++)n.deleteFramebuffer(Y.__webglFramebuffer[he][ge]);else n.deleteFramebuffer(Y.__webglFramebuffer[he]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[he])}else{if(Array.isArray(Y.__webglFramebuffer))for(let he=0;he<Y.__webglFramebuffer.length;he++)n.deleteFramebuffer(Y.__webglFramebuffer[he]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let he=0;he<Y.__webglColorRenderbuffer.length;he++)Y.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[he]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let he=0,ge=w.length;he<ge;he++){const Ne=i.get(w[he]);Ne.__webglTexture&&(n.deleteTexture(Ne.__webglTexture),o.memory.textures--),i.remove(w[he])}i.remove(w),i.remove(L)}let Z=0;function oe(){Z=0}function F(){const L=Z;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),Z+=1,L}function W(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function te(L,w){const Y=i.get(L);if(L.isVideoTexture&&Et(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Y,L,w);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function se(L,w){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){ye(Y,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function B(L,w){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){ye(Y,L,w);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function X(L,w){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){we(Y,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}const j={[Wf]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[Xf]:n.MIRRORED_REPEAT},ie={[an]:n.NEAREST,[wp]:n.NEAREST_MIPMAP_NEAREST,[lu]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[Rx]:n.LINEAR_MIPMAP_NEAREST,[aa]:n.LINEAR_MIPMAP_LINEAR},le={[zx]:n.NEVER,[Yx]:n.ALWAYS,[Hx]:n.LESS,[Ov]:n.LEQUAL,[Gx]:n.EQUAL,[Xx]:n.GEQUAL,[Vx]:n.GREATER,[Wx]:n.NOTEQUAL};function J(L,w,Y){if(Y?(n.texParameteri(L,n.TEXTURE_WRAP_S,j[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,j[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,j[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ie[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ie[w.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==kn||w.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,S(w.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==an&&w.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===an||w.minFilter!==lu&&w.minFilter!==aa||w.type===sr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===la&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(L,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ae(L,w){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",T));const de=w.source;let he=d.get(de);he===void 0&&(he={},d.set(de,he));const ge=W(w);if(ge!==L.__cacheKey){he[ge]===void 0&&(he[ge]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),he[ge].usedTimes++;const Ne=he[L.__cacheKey];Ne!==void 0&&(he[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&C(w)),L.__cacheKey=ge,L.__webglTexture=he[ge].texture}return Y}function ye(L,w,Y){let de=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=n.TEXTURE_3D);const he=ae(L,w),ge=w.source;t.bindTexture(de,L.__webglTexture,n.TEXTURE0+Y);const Ne=i.get(ge);if(ge.version!==Ne.__version||he===!0){t.activeTexture(n.TEXTURE0+Y);const Me=yt.getPrimaries(yt.workingColorSpace),Le=w.colorSpace===$n?null:yt.getPrimaries(w.colorSpace),Ge=w.colorSpace===$n||Me===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Ze=f(w)&&m(w.image)===!1;let fe=y(w.image,Ze,!1,r.maxTextureSize);fe=qe(w,fe);const ht=m(fe)||a,et=s.convert(w.format,w.colorSpace);let Ke=s.convert(w.type),Ue=E(w.internalFormat,et,Ke,w.colorSpace,w.isVideoTexture);J(de,w,ht);let Pe;const Qe=w.mipmaps,ct=a&&w.isVideoTexture!==!0&&Ue!==Dv,Ct=Ne.__version===void 0||he===!0,tt=A(w,fe,ht);if(w.isDepthTexture)Ue=n.DEPTH_COMPONENT,a?w.type===sr?Ue=n.DEPTH_COMPONENT32F:w.type===rr?Ue=n.DEPTH_COMPONENT24:w.type===Br?Ue=n.DEPTH24_STENCIL8:Ue=n.DEPTH_COMPONENT16:w.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===zr&&Ue===n.DEPTH_COMPONENT&&w.type!==qh&&w.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=rr,Ke=s.convert(w.type)),w.format===$s&&Ue===n.DEPTH_COMPONENT&&(Ue=n.DEPTH_STENCIL,w.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Br,Ke=s.convert(w.type))),Ct&&(ct?t.texStorage2D(n.TEXTURE_2D,1,Ue,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ue,fe.width,fe.height,0,et,Ke,null));else if(w.isDataTexture)if(Qe.length>0&&ht){ct&&Ct&&t.texStorage2D(n.TEXTURE_2D,tt,Ue,Qe[0].width,Qe[0].height);for(let ve=0,N=Qe.length;ve<N;ve++)Pe=Qe[ve],ct?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,et,Ke,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ue,Pe.width,Pe.height,0,et,Ke,Pe.data);w.generateMipmaps=!1}else ct?(Ct&&t.texStorage2D(n.TEXTURE_2D,tt,Ue,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,et,Ke,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,fe.width,fe.height,0,et,Ke,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ct&&Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Ue,Qe[0].width,Qe[0].height,fe.depth);for(let ve=0,N=Qe.length;ve<N;ve++)Pe=Qe[ve],w.format!==ui?et!==null?ct?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,fe.depth,et,Pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ue,Pe.width,Pe.height,fe.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,fe.depth,et,Ke,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ue,Pe.width,Pe.height,fe.depth,0,et,Ke,Pe.data)}else{ct&&Ct&&t.texStorage2D(n.TEXTURE_2D,tt,Ue,Qe[0].width,Qe[0].height);for(let ve=0,N=Qe.length;ve<N;ve++)Pe=Qe[ve],w.format!==ui?et!==null?ct?t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,et,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,et,Ke,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ue,Pe.width,Pe.height,0,et,Ke,Pe.data)}else if(w.isDataArrayTexture)ct?(Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Ue,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,et,Ke,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,fe.width,fe.height,fe.depth,0,et,Ke,fe.data);else if(w.isData3DTexture)ct?(Ct&&t.texStorage3D(n.TEXTURE_3D,tt,Ue,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,et,Ke,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,fe.width,fe.height,fe.depth,0,et,Ke,fe.data);else if(w.isFramebufferTexture){if(Ct)if(ct)t.texStorage2D(n.TEXTURE_2D,tt,Ue,fe.width,fe.height);else{let ve=fe.width,N=fe.height;for(let Ee=0;Ee<tt;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Ue,ve,N,0,et,Ke,null),ve>>=1,N>>=1}}else if(Qe.length>0&&ht){ct&&Ct&&t.texStorage2D(n.TEXTURE_2D,tt,Ue,Qe[0].width,Qe[0].height);for(let ve=0,N=Qe.length;ve<N;ve++)Pe=Qe[ve],ct?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,et,Ke,Pe):t.texImage2D(n.TEXTURE_2D,ve,Ue,et,Ke,Pe);w.generateMipmaps=!1}else ct?(Ct&&t.texStorage2D(n.TEXTURE_2D,tt,Ue,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,et,Ke,fe)):t.texImage2D(n.TEXTURE_2D,0,Ue,et,Ke,fe);g(w,ht)&&_(de),Ne.__version=ge.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function we(L,w,Y){if(w.image.length!==6)return;const de=ae(L,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Y);const ge=i.get(he);if(he.version!==ge.__version||de===!0){t.activeTexture(n.TEXTURE0+Y);const Ne=yt.getPrimaries(yt.workingColorSpace),Me=w.colorSpace===$n?null:yt.getPrimaries(w.colorSpace),Le=w.colorSpace===$n||Ne===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ge=w.isCompressedTexture||w.image[0].isCompressedTexture,Ze=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let ve=0;ve<6;ve++)!Ge&&!Ze?fe[ve]=y(w.image[ve],!1,!0,r.maxCubemapSize):fe[ve]=Ze?w.image[ve].image:w.image[ve],fe[ve]=qe(w,fe[ve]);const ht=fe[0],et=m(ht)||a,Ke=s.convert(w.format,w.colorSpace),Ue=s.convert(w.type),Pe=E(w.internalFormat,Ke,Ue,w.colorSpace),Qe=a&&w.isVideoTexture!==!0,ct=ge.__version===void 0||de===!0;let Ct=A(w,ht,et);J(n.TEXTURE_CUBE_MAP,w,et);let tt;if(Ge){Qe&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Pe,ht.width,ht.height);for(let ve=0;ve<6;ve++){tt=fe[ve].mipmaps;for(let N=0;N<tt.length;N++){const Ee=tt[N];w.format!==ui?Ke!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,N,0,0,Ee.width,Ee.height,Ke,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,N,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,N,0,0,Ee.width,Ee.height,Ke,Ue,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,N,Pe,Ee.width,Ee.height,0,Ke,Ue,Ee.data)}}}else{tt=w.mipmaps,Qe&&ct&&(tt.length>0&&Ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Pe,fe[0].width,fe[0].height));for(let ve=0;ve<6;ve++)if(Ze){Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,fe[ve].width,fe[ve].height,Ke,Ue,fe[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Pe,fe[ve].width,fe[ve].height,0,Ke,Ue,fe[ve].data);for(let N=0;N<tt.length;N++){const xe=tt[N].image[ve].image;Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,N+1,0,0,xe.width,xe.height,Ke,Ue,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,N+1,Pe,xe.width,xe.height,0,Ke,Ue,xe.data)}}else{Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ke,Ue,fe[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Pe,Ke,Ue,fe[ve]);for(let N=0;N<tt.length;N++){const Ee=tt[N];Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,N+1,0,0,Ke,Ue,Ee.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,N+1,Pe,Ke,Ue,Ee.image[ve])}}}g(w,et)&&_(n.TEXTURE_CUBE_MAP),ge.__version=he.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ce(L,w,Y,de,he,ge){const Ne=s.convert(Y.format,Y.colorSpace),Me=s.convert(Y.type),Le=E(Y.internalFormat,Ne,Me,Y.colorSpace);if(!i.get(w).__hasExternalTextures){const Ze=Math.max(1,w.width>>ge),fe=Math.max(1,w.height>>ge);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,ge,Le,Ze,fe,w.depth,0,Ne,Me,null):t.texImage2D(he,ge,Le,Ze,fe,0,Ne,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Ie(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,he,i.get(Y).__webglTexture,0,Fe(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,he,i.get(Y).__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(L,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let de=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||Ie(w)){const he=w.depthTexture;he&&he.isDepthTexture&&(he.type===sr?de=n.DEPTH_COMPONENT32F:he.type===rr&&(de=n.DEPTH_COMPONENT24));const ge=Fe(w);Ie(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,de,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,de,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,de,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const de=Fe(w);Y&&Ie(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,w.width,w.height):Ie(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{const de=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let he=0;he<de.length;he++){const ge=de[he],Ne=s.convert(ge.format,ge.colorSpace),Me=s.convert(ge.type),Le=E(ge.internalFormat,Ne,Me,ge.colorSpace),Ge=Fe(w);Y&&Ie(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Le,w.width,w.height):Ie(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Le,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Le,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),te(w.depthTexture,0);const de=i.get(w.depthTexture).__webglTexture,he=Fe(w);if(w.depthTexture.format===zr)Ie(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(w.depthTexture.format===$s)Ie(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function be(L){const w=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ye(w.__webglFramebuffer,L)}else if(Y){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]=n.createRenderbuffer(),We(w.__webglDepthbuffer[de],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),We(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(L,w,Y){const de=i.get(L);w!==void 0&&Ce(de.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&be(L)}function K(L){const w=L.texture,Y=i.get(L),de=i.get(w);L.addEventListener("dispose",O),L.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=w.version,o.memory.textures++);const he=L.isWebGLCubeRenderTarget===!0,ge=L.isWebGLMultipleRenderTargets===!0,Ne=m(L)||a;if(he){Y.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(a&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Me]=[];for(let Le=0;Le<w.mipmaps.length;Le++)Y.__webglFramebuffer[Me][Le]=n.createFramebuffer()}else Y.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)Y.__webglFramebuffer[Me]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ge)if(r.drawBuffers){const Me=L.texture;for(let Le=0,Ge=Me.length;Le<Ge;Le++){const Ze=i.get(Me[Le]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Ie(L)===!1){const Me=ge?w:[w];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Le=0;Le<Me.length;Le++){const Ge=Me[Le];Y.__webglColorRenderbuffer[Le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Le]);const Ze=s.convert(Ge.format,Ge.colorSpace),fe=s.convert(Ge.type),ht=E(Ge.internalFormat,Ze,fe,Ge.colorSpace,L.isXRRenderTarget===!0),et=Fe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,ht,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Le])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),We(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),J(n.TEXTURE_CUBE_MAP,w,Ne);for(let Me=0;Me<6;Me++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)Ce(Y.__webglFramebuffer[Me][Le],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le);else Ce(Y.__webglFramebuffer[Me],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(w,Ne)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){const Me=L.texture;for(let Le=0,Ge=Me.length;Le<Ge;Le++){const Ze=Me[Le],fe=i.get(Ze);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),J(n.TEXTURE_2D,Ze,Ne),Ce(Y.__webglFramebuffer,L,Ze,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,0),g(Ze,Ne)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?Me=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,de.__webglTexture),J(Me,w,Ne),a&&w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)Ce(Y.__webglFramebuffer[Le],L,w,n.COLOR_ATTACHMENT0,Me,Le);else Ce(Y.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Me,0);g(w,Ne)&&_(Me),t.unbindTexture()}L.depthBuffer&&be(L)}function tn(L){const w=m(L)||a,Y=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let de=0,he=Y.length;de<he;de++){const ge=Y[de];if(g(ge,w)){const Ne=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(ge).__webglTexture;t.bindTexture(Ne,Me),_(Ne),t.unbindTexture()}}}function ke(L){if(a&&L.samples>0&&Ie(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Y=L.width,de=L.height;let he=n.COLOR_BUFFER_BIT;const ge=[],Ne=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(L),Le=L.isWebGLMultipleRenderTargets===!0;if(Le)for(let Ge=0;Ge<w.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ge=0;Ge<w.length;Ge++){ge.push(n.COLOR_ATTACHMENT0+Ge),L.depthBuffer&&ge.push(Ne);const Ze=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Ze===!1&&(L.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ge]),Ze===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ne])),Le){const fe=i.get(w[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,Y,de,0,0,Y,de,he,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Le)for(let Ge=0;Ge<w.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ge]);const Ze=i.get(w[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Fe(L){return Math.min(r.maxSamples,L.samples)}function Ie(L){const w=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Et(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function qe(L,w){const Y=L.colorSpace,de=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Yf||Y!==Gi&&Y!==$n&&(yt.getTransfer(Y)===bt?a===!1?e.has("EXT_sRGB")===!0&&de===ui?(L.format=Yf,L.minFilter=qn,L.generateMipmaps=!1):w=kv.sRGBToLinear(w):(de!==ui||he!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}this.allocateTextureUnit=F,this.resetTextureUnits=oe,this.setTexture2D=te,this.setTexture2DArray=se,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=lt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ie}function jw(n,e,t){const i=t.isWebGL2;function r(s,o=$n){let a;const l=yt.getTransfer(o);if(s===gr)return n.UNSIGNED_BYTE;if(s===Cv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Rv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===bx)return n.BYTE;if(s===Lx)return n.SHORT;if(s===qh)return n.UNSIGNED_SHORT;if(s===Av)return n.INT;if(s===rr)return n.UNSIGNED_INT;if(s===sr)return n.FLOAT;if(s===la)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Px)return n.ALPHA;if(s===ui)return n.RGBA;if(s===Dx)return n.LUMINANCE;if(s===Ix)return n.LUMINANCE_ALPHA;if(s===zr)return n.DEPTH_COMPONENT;if(s===$s)return n.DEPTH_STENCIL;if(s===Yf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Nx)return n.RED;if(s===bv)return n.RED_INTEGER;if(s===Ox)return n.RG;if(s===Lv)return n.RG_INTEGER;if(s===Pv)return n.RGBA_INTEGER;if(s===cu||s===uu||s===fu||s===hu)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===cu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===cu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ap||s===Cp||s===Rp||s===bp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ap)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lp||s===Pp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Lp)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Pp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dp||s===Ip||s===Np||s===Op||s===Up||s===kp||s===Fp||s===Bp||s===zp||s===Hp||s===Gp||s===Vp||s===Wp||s===Xp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Dp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ip)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Np)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Op)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Up)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===du||s===Yp||s===jp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===du)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ux||s===Kp||s===qp||s===$p)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===du)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Kp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$p)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Br?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Kw extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ll extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qw={type:"move"};class Fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ll;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $w extends no{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const y=t.getContextAttributes();let m=null,f=null;const g=[],_=[],E=new ft;let A=null;const S=new wn;S.layers.enable(1),S.viewport=new It;const T=new wn;T.layers.enable(2),T.viewport=new It;const O=[S,T],M=new Kw;M.layers.enable(1),M.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=g[J];return ae===void 0&&(ae=new Fu,g[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=g[J];return ae===void 0&&(ae=new Fu,g[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=g[J];return ae===void 0&&(ae=new Fu,g[J]=ae),ae.getHandSpace()};function Z(J){const ae=_.indexOf(J.inputSource);if(ae===-1)return;const ye=g[ae];ye!==void 0&&(ye.update(J.inputSource,J.frame,c||o),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function oe(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",F);for(let J=0;J<g.length;J++){const ae=_[J];ae!==null&&(_[J]=null,g[J].disconnect(ae))}C=null,V=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new jr(p.framebufferWidth,p.framebufferHeight,{format:ui,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ae=null,ye=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?$s:zr,ye=y.stencil?Br:rr);const Ce={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new jr(d.textureWidth,d.textureHeight,{format:ui,type:gr,depthTexture:new $v(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const We=e.properties.get(f);We.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(J){for(let ae=0;ae<J.removed.length;ae++){const ye=J.removed[ae],we=_.indexOf(ye);we>=0&&(_[we]=null,g[we].disconnect(ye))}for(let ae=0;ae<J.added.length;ae++){const ye=J.added[ae];let we=_.indexOf(ye);if(we===-1){for(let We=0;We<g.length;We++)if(We>=_.length){_.push(ye),we=We;break}else if(_[We]===null){_[We]=ye,we=We;break}if(we===-1)break}const Ce=g[we];Ce&&Ce.connect(ye)}}const W=new G,te=new G;function se(J,ae,ye){W.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(ye.matrixWorld);const we=W.distanceTo(te),Ce=ae.projectionMatrix.elements,We=ye.projectionMatrix.elements,Ye=Ce[14]/(Ce[10]-1),be=Ce[14]/(Ce[10]+1),lt=(Ce[9]+1)/Ce[5],K=(Ce[9]-1)/Ce[5],tn=(Ce[8]-1)/Ce[0],ke=(We[8]+1)/We[0],Fe=Ye*tn,Ie=Ye*ke,Et=we/(-tn+ke),qe=Et*-tn;ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qe),J.translateZ(Et),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const L=Ye+Et,w=be+Et,Y=Fe-qe,de=Ie+(we-qe),he=lt*be/w*L,ge=K*be/w*L;J.projectionMatrix.makePerspective(Y,de,he,ge,L,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function B(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;M.near=T.near=S.near=J.near,M.far=T.far=S.far=J.far,(C!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,V=M.far);const ae=J.parent,ye=M.cameras;B(M,ae);for(let we=0;we<ye.length;we++)B(ye[we],ae);ye.length===2?se(M,S,T):M.projectionMatrix.copy(S.projectionMatrix),X(J,M,ae)};function X(J,ae,ye){ye===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=jf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)};let j=null;function ie(J,ae){if(u=ae.getViewerPose(c||o),v=ae,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let we=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,we=!0);for(let Ce=0;Ce<ye.length;Ce++){const We=ye[Ce];let Ye=null;if(p!==null)Ye=p.getViewport(We);else{const lt=h.getViewSubImage(d,We);Ye=lt.viewport,Ce===0&&(e.setRenderTargetTextures(f,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(f))}let be=O[Ce];be===void 0&&(be=new wn,be.layers.enable(Ce),be.viewport=new It,O[Ce]=be),be.matrix.fromArray(We.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(We.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ce===0&&(M.matrix.copy(be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),we===!0&&M.cameras.push(be)}}for(let ye=0;ye<g.length;ye++){const we=_[ye],Ce=g[ye];we!==null&&Ce!==void 0&&Ce.update(we,ae,c||o)}j&&j(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),v=null}const le=new Kv;le.setAnimationLoop(ie),this.setAnimationLoop=function(J){j=J},this.dispose=function(){}}}function Zw(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Xv(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,_,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const E=_.program;i.uniformBlockBinding(g,E)}function c(g,_){let E=r[g.id];E===void 0&&(v(g),E=u(g),r[g.id]=E,g.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(g,A);const S=e.render.frame;s[g.id]!==S&&(d(g),s[g.id]=S)}function u(g){const _=h();g.__bindingPointIndex=_;const E=n.createBuffer(),A=g.__size,S=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],E=g.uniforms,A=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,T=E.length;S<T;S++){const O=Array.isArray(E[S])?E[S]:[E[S]];for(let M=0,C=O.length;M<C;M++){const V=O[M];if(p(V,S,M,A)===!0){const Z=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let F=0;for(let W=0;W<oe.length;W++){const te=oe[W],se=y(te);typeof te=="number"||typeof te=="boolean"?(V.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,Z+F,V.__data)):te.isMatrix3?(V.__data[0]=te.elements[0],V.__data[1]=te.elements[1],V.__data[2]=te.elements[2],V.__data[3]=0,V.__data[4]=te.elements[3],V.__data[5]=te.elements[4],V.__data[6]=te.elements[5],V.__data[7]=0,V.__data[8]=te.elements[6],V.__data[9]=te.elements[7],V.__data[10]=te.elements[8],V.__data[11]=0):(te.toArray(V.__data,F),F+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,_,E,A){const S=g.value,T=_+"_"+E;if(A[T]===void 0)return typeof S=="number"||typeof S=="boolean"?A[T]=S:A[T]=S.clone(),!0;{const O=A[T];if(typeof S=="number"||typeof S=="boolean"){if(O!==S)return A[T]=S,!0}else if(O.equals(S)===!1)return O.copy(S),!0}return!1}function v(g){const _=g.uniforms;let E=0;const A=16;for(let T=0,O=_.length;T<O;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let C=0,V=M.length;C<V;C++){const Z=M[C],oe=Array.isArray(Z.value)?Z.value:[Z.value];for(let F=0,W=oe.length;F<W;F++){const te=oe[F],se=y(te),B=E%A;B!==0&&A-B<se.boundary&&(E+=A-B),Z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=se.storage}}}const S=E%A;return S>0&&(E+=A-S),g.__size=E,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class n_{constructor(e={}){const{canvas:t=Kx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const _=this;let E=!1,A=0,S=0,T=null,O=-1,M=null;const C=new It,V=new It;let Z=null;const oe=new Te(0);let F=0,W=t.width,te=t.height,se=1,B=null,X=null;const j=new It(0,0,W,te),ie=new It(0,0,W,te);let le=!1;const J=new Qh;let ae=!1,ye=!1,we=null;const Ce=new Nt,We=new ft,Ye=new G,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return T===null?se:1}let K=i;function tn(R,H){for(let $=0;$<R.length;$++){const Q=R[$],q=t.getContext(Q,H);if(q!==null)return q}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jh}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),K===null){const H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),K=tn(H,R),K===null)throw tn(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ke,Fe,Ie,Et,qe,L,w,Y,de,he,ge,Ne,Me,Le,Ge,Ze,fe,ht,et,Ke,Ue,Pe,Qe,ct;function Ct(){ke=new lT(K),Fe=new nT(K,ke,e),ke.init(Fe),Pe=new jw(K,ke,Fe),Ie=new Xw(K,ke,Fe),Et=new fT(K),qe=new Pw,L=new Yw(K,ke,Ie,qe,Fe,Pe,Et),w=new rT(_),Y=new aT(_),de=new yE(K,Fe),Qe=new eT(K,ke,de,Fe),he=new cT(K,de,Et,Qe),ge=new mT(K,he,de,Et),et=new pT(K,Fe,L),Ze=new iT(qe),Ne=new Lw(_,w,Y,ke,Fe,Qe,Ze),Me=new Zw(_,qe),Le=new Iw,Ge=new Bw(ke,Fe),ht=new J1(_,w,Y,Ie,ge,d,l),fe=new Ww(_,ge,Fe),ct=new Qw(K,Et,Fe,Ie),Ke=new tT(K,ke,Et,Fe),Ue=new uT(K,ke,Et,Fe),Et.programs=Ne.programs,_.capabilities=Fe,_.extensions=ke,_.properties=qe,_.renderLists=Le,_.shadowMap=fe,_.state=Ie,_.info=Et}Ct();const tt=new $w(_,K);this.xr=tt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=ke.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ke.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(R){R!==void 0&&(se=R,this.setSize(W,te,!1))},this.getSize=function(R){return R.set(W,te)},this.setSize=function(R,H,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,te=H,t.width=Math.floor(R*se),t.height=Math.floor(H*se),$===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(W*se,te*se).floor()},this.setDrawingBufferSize=function(R,H,$){W=R,te=H,se=$,t.width=Math.floor(R*$),t.height=Math.floor(H*$),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,H,$,Q){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,H,$,Q),Ie.viewport(C.copy(j).multiplyScalar(se).floor())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,H,$,Q){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,H,$,Q),Ie.scissor(V.copy(ie).multiplyScalar(se).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){Ie.setScissorTest(le=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(R=!0,H=!0,$=!0){let Q=0;if(R){let q=!1;if(T!==null){const Ae=T.texture.format;q=Ae===Pv||Ae===Lv||Ae===bv}if(q){const Ae=T.texture.type,Oe=Ae===gr||Ae===rr||Ae===qh||Ae===Br||Ae===Cv||Ae===Rv,ze=ht.getClearColor(),He=ht.getClearAlpha(),Je=ze.r,Xe=ze.g,$e=ze.b;Oe?(p[0]=Je,p[1]=Xe,p[2]=$e,p[3]=He,K.clearBufferuiv(K.COLOR,0,p)):(v[0]=Je,v[1]=Xe,v[2]=$e,v[3]=He,K.clearBufferiv(K.COLOR,0,v))}else Q|=K.COLOR_BUFFER_BIT}H&&(Q|=K.DEPTH_BUFFER_BIT),$&&(Q|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Le.dispose(),Ge.dispose(),qe.dispose(),w.dispose(),Y.dispose(),ge.dispose(),Qe.dispose(),ct.dispose(),Ne.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",nn),tt.removeEventListener("sessionend",_t),we&&(we.dispose(),we=null),rn.stop()};function ve(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Et.autoReset,H=fe.enabled,$=fe.autoUpdate,Q=fe.needsUpdate,q=fe.type;Ct(),Et.autoReset=R,fe.enabled=H,fe.autoUpdate=$,fe.needsUpdate=Q,fe.type=q}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const H=R.target;H.removeEventListener("dispose",xe),je(H)}function je(R){Be(R),qe.remove(R)}function Be(R){const H=qe.get(R).programs;H!==void 0&&(H.forEach(function($){Ne.releaseProgram($)}),R.isShaderMaterial&&Ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,$,Q,q,Ae){H===null&&(H=be);const Oe=q.isMesh&&q.matrixWorld.determinant()<0,ze=Pc(R,H,$,Q,q);Ie.setMaterial(Q,Oe);let He=$.index,Je=1;if(Q.wireframe===!0){if(He=he.getWireframeAttribute($),He===void 0)return;Je=2}const Xe=$.drawRange,$e=$.attributes.position;let Mt=Xe.start*Je,sn=(Xe.start+Xe.count)*Je;Ae!==null&&(Mt=Math.max(Mt,Ae.start*Je),sn=Math.min(sn,(Ae.start+Ae.count)*Je)),He!==null?(Mt=Math.max(Mt,0),sn=Math.min(sn,He.count)):$e!=null&&(Mt=Math.max(Mt,0),sn=Math.min(sn,$e.count));const Vt=sn-Mt;if(Vt<0||Vt===1/0)return;Qe.setup(q,Q,ze,$,He);let ti,St=Ke;if(He!==null&&(ti=de.get(He),St=Ue,St.setIndex(ti)),q.isMesh)Q.wireframe===!0?(Ie.setLineWidth(Q.wireframeLinewidth*lt()),St.setMode(K.LINES)):St.setMode(K.TRIANGLES);else if(q.isLine){let nt=Q.linewidth;nt===void 0&&(nt=1),Ie.setLineWidth(nt*lt()),q.isLineSegments?St.setMode(K.LINES):q.isLineLoop?St.setMode(K.LINE_LOOP):St.setMode(K.LINE_STRIP)}else q.isPoints?St.setMode(K.POINTS):q.isSprite&&St.setMode(K.TRIANGLES);if(q.isBatchedMesh)St.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)St.renderInstances(Mt,Vt,q.count);else if($.isInstancedBufferGeometry){const nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,oo=Math.min($.instanceCount,nt);St.renderInstances(Mt,Vt,oo)}else St.render(Mt,Vt)};function gt(R,H,$){R.transparent===!0&&R.side===Si&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,Jr(R,H,$),R.side=Hi,R.needsUpdate=!0,Jr(R,H,$),R.side=Si):Jr(R,H,$)}this.compile=function(R,H,$=null){$===null&&($=R),m=Ge.get($),m.init(),g.push(m),$.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==$&&R.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(_._useLegacyLights);const Q=new Set;return R.traverse(function(q){const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const ze=Ae[Oe];gt(ze,$,q),Q.add(ze)}else gt(Ae,$,q),Q.add(Ae)}),g.pop(),m=null,Q},this.compileAsync=function(R,H,$=null){const Q=this.compile(R,H,$);return new Promise(q=>{function Ae(){if(Q.forEach(function(Oe){qe.get(Oe).currentProgram.isReady()&&Q.delete(Oe)}),Q.size===0){q(R);return}setTimeout(Ae,10)}ke.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let vt=null;function Gt(R){vt&&vt(R)}function nn(){rn.stop()}function _t(){rn.start()}const rn=new Kv;rn.setAnimationLoop(Gt),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(R){vt=R,tt.setAnimationLoop(R),R===null?rn.stop():rn.start()},tt.addEventListener("sessionstart",nn),tt.addEventListener("sessionend",_t),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(H),H=tt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,H,T),m=Ge.get(R,g.length),m.init(),g.push(m),Ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),J.setFromProjectionMatrix(Ce),ye=this.localClippingEnabled,ae=Ze.init(this.clippingPlanes,ye),y=Le.get(R,f.length),y.init(),f.push(y),Vn(R,H,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(B,X),this.info.render.frame++,ae===!0&&Ze.beginShadows();const $=m.state.shadowsArray;if(fe.render($,R,H),ae===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(y,R),m.setupLights(_._useLegacyLights),H.isArrayCamera){const Q=H.cameras;for(let q=0,Ae=Q.length;q<Ae;q++){const Oe=Q[q];va(y,R,Oe,Oe.viewport)}}else va(y,R,H);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(_,R,H),Qe.resetDefaultState(),O=-1,M=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Vn(R,H,$,Q){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){Q&&Ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ce);const Oe=ge.update(R),ze=R.material;ze.visible&&y.push(R,Oe,ze,$,Ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Oe=ge.update(R),ze=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ye.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ye.copy(Oe.boundingSphere.center)),Ye.applyMatrix4(R.matrixWorld).applyMatrix4(Ce)),Array.isArray(ze)){const He=Oe.groups;for(let Je=0,Xe=He.length;Je<Xe;Je++){const $e=He[Je],Mt=ze[$e.materialIndex];Mt&&Mt.visible&&y.push(R,Oe,Mt,$,Ye.z,$e)}}else ze.visible&&y.push(R,Oe,ze,$,Ye.z,null)}}const Ae=R.children;for(let Oe=0,ze=Ae.length;Oe<ze;Oe++)Vn(Ae[Oe],H,$,Q)}function va(R,H,$,Q){const q=R.opaque,Ae=R.transmissive,Oe=R.transparent;m.setupLightsView($),ae===!0&&Ze.setGlobalState(_.clippingPlanes,$),Ae.length>0&&_a(q,Ae,H,$),Q&&Ie.viewport(C.copy(Q)),q.length>0&&Qr(q,H,$),Ae.length>0&&Qr(Ae,H,$),Oe.length>0&&Qr(Oe,H,$),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function _a(R,H,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Ae=Fe.isWebGL2;we===null&&(we=new jr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")?la:gr,minFilter:aa,samples:Ae?4:0})),_.getDrawingBufferSize(We),Ae?we.setSize(We.x,We.y):we.setSize(Kf(We.x),Kf(We.y));const Oe=_.getRenderTarget();_.setRenderTarget(we),_.getClearColor(oe),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear();const ze=_.toneMapping;_.toneMapping=mr,Qr(R,$,Q),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we);let He=!1;for(let Je=0,Xe=H.length;Je<Xe;Je++){const $e=H[Je],Mt=$e.object,sn=$e.geometry,Vt=$e.material,ti=$e.group;if(Vt.side===Si&&Mt.layers.test(Q.layers)){const St=Vt.side;Vt.side=yn,Vt.needsUpdate=!0,ya(Mt,$,Q,sn,Vt,ti),Vt.side=St,Vt.needsUpdate=!0,He=!0}}He===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we)),_.setRenderTarget(Oe),_.setClearColor(oe,F),_.toneMapping=ze}function Qr(R,H,$){const Q=H.isScene===!0?H.overrideMaterial:null;for(let q=0,Ae=R.length;q<Ae;q++){const Oe=R[q],ze=Oe.object,He=Oe.geometry,Je=Q===null?Oe.material:Q,Xe=Oe.group;ze.layers.test($.layers)&&ya(ze,H,$,He,Je,Xe)}}function ya(R,H,$,Q,q,Ae){R.onBeforeRender(_,H,$,Q,q,Ae),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(_,H,$,Q,R,Ae),q.transparent===!0&&q.side===Si&&q.forceSinglePass===!1?(q.side=yn,q.needsUpdate=!0,_.renderBufferDirect($,H,Q,q,R,Ae),q.side=Hi,q.needsUpdate=!0,_.renderBufferDirect($,H,Q,q,R,Ae),q.side=Si):_.renderBufferDirect($,H,Q,q,R,Ae),R.onAfterRender(_,H,$,Q,q,Ae)}function Jr(R,H,$){H.isScene!==!0&&(H=be);const Q=qe.get(R),q=m.state.lights,Ae=m.state.shadowsArray,Oe=q.state.version,ze=Ne.getParameters(R,q.state,Ae,H,$),He=Ne.getProgramCacheKey(ze);let Je=Q.programs;Q.environment=R.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(R.isMeshStandardMaterial?Y:w).get(R.envMap||Q.environment),Je===void 0&&(R.addEventListener("dispose",xe),Je=new Map,Q.programs=Je);let Xe=Je.get(He);if(Xe!==void 0){if(Q.currentProgram===Xe&&Q.lightsStateVersion===Oe)return xa(R,ze),Xe}else ze.uniforms=Ne.getUniforms(R),R.onBuild($,ze,_),R.onBeforeCompile(ze,_),Xe=Ne.acquireProgram(ze,He),Je.set(He,Xe),Q.uniforms=ze.uniforms;const $e=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=Ze.uniform),xa(R,ze),Q.needsLights=Ic(R),Q.lightsStateVersion=Oe,Q.needsLights&&($e.ambientLightColor.value=q.state.ambient,$e.lightProbe.value=q.state.probe,$e.directionalLights.value=q.state.directional,$e.directionalLightShadows.value=q.state.directionalShadow,$e.spotLights.value=q.state.spot,$e.spotLightShadows.value=q.state.spotShadow,$e.rectAreaLights.value=q.state.rectArea,$e.ltc_1.value=q.state.rectAreaLTC1,$e.ltc_2.value=q.state.rectAreaLTC2,$e.pointLights.value=q.state.point,$e.pointLightShadows.value=q.state.pointShadow,$e.hemisphereLights.value=q.state.hemi,$e.directionalShadowMap.value=q.state.directionalShadowMap,$e.directionalShadowMatrix.value=q.state.directionalShadowMatrix,$e.spotShadowMap.value=q.state.spotShadowMap,$e.spotLightMatrix.value=q.state.spotLightMatrix,$e.spotLightMap.value=q.state.spotLightMap,$e.pointShadowMap.value=q.state.pointShadowMap,$e.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=Xe,Q.uniformsList=null,Xe}function Sa(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Rl.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function xa(R,H){const $=qe.get(R);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Pc(R,H,$,Q,q){H.isScene!==!0&&(H=be),L.resetTextureUnits();const Ae=H.fog,Oe=Q.isMeshStandardMaterial?H.environment:null,ze=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gi,He=(Q.isMeshStandardMaterial?Y:w).get(Q.envMap||Oe),Je=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),$e=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,sn=!!$.morphAttributes.color;let Vt=mr;Q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Vt=_.toneMapping);const ti=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=ti!==void 0?ti.length:0,nt=qe.get(Q),oo=m.state.lights;if(ae===!0&&(ye===!0||R!==M)){const ce=R===M&&Q.id===O;Ze.setState(Q,R,ce)}let x=!1;Q.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==oo.state.version||nt.outputColorSpace!==ze||q.isBatchedMesh&&nt.batching===!1||!q.isBatchedMesh&&nt.batching===!0||q.isInstancedMesh&&nt.instancing===!1||!q.isInstancedMesh&&nt.instancing===!0||q.isSkinnedMesh&&nt.skinning===!1||!q.isSkinnedMesh&&nt.skinning===!0||q.isInstancedMesh&&nt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&nt.instancingColor===!1&&q.instanceColor!==null||nt.envMap!==He||Q.fog===!0&&nt.fog!==Ae||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ze.numPlanes||nt.numIntersection!==Ze.numIntersection)||nt.vertexAlphas!==Je||nt.vertexTangents!==Xe||nt.morphTargets!==$e||nt.morphNormals!==Mt||nt.morphColors!==sn||nt.toneMapping!==Vt||Fe.isWebGL2===!0&&nt.morphTargetsCount!==St)&&(x=!0):(x=!0,nt.__version=Q.version);let D=nt.currentProgram;x===!0&&(D=Jr(Q,H,q));let b=!1,k=!1,z=!1;const I=D.getUniforms(),ne=nt.uniforms;if(Ie.useProgram(D.program)&&(b=!0,k=!0,z=!0),Q.id!==O&&(O=Q.id,k=!0),b||M!==R){I.setValue(K,"projectionMatrix",R.projectionMatrix),I.setValue(K,"viewMatrix",R.matrixWorldInverse);const ce=I.map.cameraPosition;ce!==void 0&&ce.setValue(K,Ye.setFromMatrixPosition(R.matrixWorld)),Fe.logarithmicDepthBuffer&&I.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&I.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,k=!0,z=!0)}if(q.isSkinnedMesh){I.setOptional(K,q,"bindMatrix"),I.setOptional(K,q,"bindMatrixInverse");const ce=q.skeleton;ce&&(Fe.floatVertexTextures?(ce.boneTexture===null&&ce.computeBoneTexture(),I.setValue(K,"boneTexture",ce.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(I.setOptional(K,q,"batchingTexture"),I.setValue(K,"batchingTexture",q._matricesTexture,L));const ue=$.morphAttributes;if((ue.position!==void 0||ue.normal!==void 0||ue.color!==void 0&&Fe.isWebGL2===!0)&&et.update(q,$,D),(k||nt.receiveShadow!==q.receiveShadow)&&(nt.receiveShadow=q.receiveShadow,I.setValue(K,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ne.envMap.value=He,ne.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),k&&(I.setValue(K,"toneMappingExposure",_.toneMappingExposure),nt.needsLights&&Dc(ne,z),Ae&&Q.fog===!0&&Me.refreshFogUniforms(ne,Ae),Me.refreshMaterialUniforms(ne,Q,se,te,we),Rl.upload(K,Sa(nt),ne,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Rl.upload(K,Sa(nt),ne,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&I.setValue(K,"center",q.center),I.setValue(K,"modelViewMatrix",q.modelViewMatrix),I.setValue(K,"normalMatrix",q.normalMatrix),I.setValue(K,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ce=Q.uniformsGroups;for(let pe=0,_e=ce.length;pe<_e;pe++)if(Fe.isWebGL2){const De=ce[pe];ct.update(De,D),ct.bind(De,D)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return D}function Dc(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Ic(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,H,$){qe.get(R.texture).__webglTexture=H,qe.get(R.depthTexture).__webglTexture=$;const Q=qe.get(R);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,H){const $=qe.get(R);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,$=0){T=R,A=H,S=$;let Q=!0,q=null,Ae=!1,Oe=!1;if(R){const He=qe.get(R);He.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(K.FRAMEBUFFER,null),Q=!1):He.__webglFramebuffer===void 0?L.setupRenderTarget(R):He.__hasExternalTextures&&L.rebindTextures(R,qe.get(R.texture).__webglTexture,qe.get(R.depthTexture).__webglTexture);const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Oe=!0);const Xe=qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[H])?q=Xe[H][$]:q=Xe[H],Ae=!0):Fe.isWebGL2&&R.samples>0&&L.useMultisampledRTT(R)===!1?q=qe.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?q=Xe[$]:q=Xe,C.copy(R.viewport),V.copy(R.scissor),Z=R.scissorTest}else C.copy(j).multiplyScalar(se).floor(),V.copy(ie).multiplyScalar(se).floor(),Z=le;if(Ie.bindFramebuffer(K.FRAMEBUFFER,q)&&Fe.drawBuffers&&Q&&Ie.drawBuffers(R,q),Ie.viewport(C),Ie.scissor(V),Ie.setScissorTest(Z),Ae){const He=qe.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+H,He.__webglTexture,$)}else if(Oe){const He=qe.get(R.texture),Je=H||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,He.__webglTexture,$||0,Je)}O=-1},this.readRenderTargetPixels=function(R,H,$,Q,q,Ae,Oe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){Ie.bindFramebuffer(K.FRAMEBUFFER,ze);try{const He=R.texture,Je=He.format,Xe=He.type;if(Je!==ui&&Pe.convert(Je)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Xe===la&&(ke.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&ke.has("EXT_color_buffer_float"));if(Xe!==gr&&Pe.convert(Xe)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===sr&&(Fe.isWebGL2||ke.has("OES_texture_float")||ke.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Q&&$>=0&&$<=R.height-q&&K.readPixels(H,$,Q,q,Pe.convert(Je),Pe.convert(Xe),Ae)}finally{const He=T!==null?qe.get(T).__webglFramebuffer:null;Ie.bindFramebuffer(K.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(R,H,$=0){const Q=Math.pow(2,-$),q=Math.floor(H.image.width*Q),Ae=Math.floor(H.image.height*Q);L.setTexture2D(H,0),K.copyTexSubImage2D(K.TEXTURE_2D,$,0,0,R.x,R.y,q,Ae),Ie.unbindTexture()},this.copyTextureToTexture=function(R,H,$,Q=0){const q=H.image.width,Ae=H.image.height,Oe=Pe.convert($.format),ze=Pe.convert($.type);L.setTexture2D($,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,$.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,$.unpackAlignment),H.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Q,R.x,R.y,q,Ae,Oe,ze,H.image.data):H.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Q,R.x,R.y,H.mipmaps[0].width,H.mipmaps[0].height,Oe,H.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,Q,R.x,R.y,Oe,ze,H.image),Q===0&&$.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(R,H,$,Q,q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=R.max.x-R.min.x+1,Oe=R.max.y-R.min.y+1,ze=R.max.z-R.min.z+1,He=Pe.convert(Q.format),Je=Pe.convert(Q.type);let Xe;if(Q.isData3DTexture)L.setTexture3D(Q,0),Xe=K.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)L.setTexture2DArray(Q,0),Xe=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Q.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Q.unpackAlignment);const $e=K.getParameter(K.UNPACK_ROW_LENGTH),Mt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),sn=K.getParameter(K.UNPACK_SKIP_PIXELS),Vt=K.getParameter(K.UNPACK_SKIP_ROWS),ti=K.getParameter(K.UNPACK_SKIP_IMAGES),St=$.isCompressedTexture?$.mipmaps[q]:$.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,St.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,St.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,R.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,R.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?K.texSubImage3D(Xe,q,H.x,H.y,H.z,Ae,Oe,ze,He,Je,St.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Xe,q,H.x,H.y,H.z,Ae,Oe,ze,He,St.data)):K.texSubImage3D(Xe,q,H.x,H.y,H.z,Ae,Oe,ze,He,Je,St),K.pixelStorei(K.UNPACK_ROW_LENGTH,$e),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Mt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,sn),K.pixelStorei(K.UNPACK_SKIP_ROWS,Vt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ti),q===0&&Q.generateMipmaps&&K.generateMipmap(Xe),Ie.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){A=0,S=0,T=null,Ie.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$h?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?Hr:Iv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hr?Jt:Gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Jw extends n_{}Jw.prototype.isWebGL1Renderer=!0;class sc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=i}clone(){return new sc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bm extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class $f extends wt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new Nt,zm=new Nt,cl=[],Hm=new $r,eA=new Nt,Eo=new Cn,Mo=new io;class td extends Cn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $f(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,eA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Hm.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Hm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new io),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Mo.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(i),e.ray.intersectsSphere(Mo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vs),zm.multiplyMatrices(i,vs),Eo.matrixWorld=zm,Eo.raycast(e,cl);for(let o=0,a=cl.length;o<a;o++){const l=cl[o];l.instanceId=s,l.object=this,t.push(l)}cl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $f(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Cc extends ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new Nt,Zf=new zv,ul=new io,fl=new G;class nd extends Ht{constructor(e=new Dn,t=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;Gm.copy(r).invert(),Zf.copy(e.ray).applyMatrix4(Gm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,y=p;v<y;v++){const m=c.getX(v);fl.fromBufferAttribute(h,m),Vm(fl,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,y=p;v<y;v++)fl.fromBufferAttribute(h,v),Vm(fl,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vm(n,e,t,i,r,s,o){const a=Zf.distanceSqToPoint(n);if(a<t){const l=new G;Zf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class tA extends Pn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rc extends Dn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new G,d=new G,p=[],v=[],y=[],m=[];for(let f=0;f<=i;f++){const g=[],_=f/i;let E=0;f===0&&o===0?E=.5/t:f===i&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const S=A/t;h.x=-e*Math.cos(r+S*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+S*s)*Math.sin(o+_*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(S+E,1-_),g.push(c++)}u.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){const _=u[f][g+1],E=u[f][g],A=u[f+1][g],S=u[f+1][g+1];(f!==0||o>0)&&p.push(_,E,S),(f!==i-1||l<Math.PI)&&p.push(E,A,S)}this.setIndex(p),this.setAttribute("position",new Ti(v,3)),this.setAttribute("normal",new Ti(y,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class id extends ro{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nv,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bc extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class nA extends bc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bu=new Nt,Wm=new G,Xm=new G;class i_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wm),Xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xm),t.updateMatrixWorld(),Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ym=new Nt,To=new G,zu=new G;class iA extends i_{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),To.setFromMatrixPosition(e.matrixWorld),i.position.copy(To),zu.copy(i.position),zu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zu),i.updateMatrixWorld(),r.makeTranslation(-To.x,-To.y,-To.z),Ym.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ym)}}class rA extends bc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new iA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sA extends i_{constructor(){super(new qv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oA extends bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new sA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aA extends bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);const lA={},jm=n=>{let e;const t=new Set,i=(u,h)=>{const d=typeof u=="function"?u(e):u;if(!Object.is(d,e)){const p=e;e=h??(typeof d!="object"||d===null)?d:Object.assign({},e,d),t.forEach(v=>v(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:u=>(t.add(u),()=>t.delete(u)),destroy:()=>{(lA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},c=e=n(i,r,l);return l},cA=n=>n?jm(n):jm;var r_={exports:{}},s_={},o_={exports:{}},a_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=xt;function uA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var fA=typeof Object.is=="function"?Object.is:uA,hA=Qs.useState,dA=Qs.useEffect,pA=Qs.useLayoutEffect,mA=Qs.useDebugValue;function gA(n,e){var t=e(),i=hA({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return pA(function(){r.value=t,r.getSnapshot=e,Hu(r)&&s({inst:r})},[n,t,e]),dA(function(){return Hu(r)&&s({inst:r}),n(function(){Hu(r)&&s({inst:r})})},[n]),mA(t),t}function Hu(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!fA(n,t)}catch{return!0}}function vA(n,e){return e()}var _A=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vA:gA;a_.useSyncExternalStore=Qs.useSyncExternalStore!==void 0?Qs.useSyncExternalStore:_A;o_.exports=a_;var yA=o_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=xt,SA=yA;function xA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var EA=typeof Object.is=="function"?Object.is:xA,MA=SA.useSyncExternalStore,TA=Lc.useRef,wA=Lc.useEffect,AA=Lc.useMemo,CA=Lc.useDebugValue;s_.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=TA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=AA(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&o.hasValue){var v=o.value;if(r(v,p))return h=v}return h=p}if(v=h,EA(u,p))return v;var y=i(p);return r!==void 0&&r(v,y)?(u=p,v):(u=p,h=y)}var c=!1,u,h,d=t===void 0?null:t;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,t,i,r]);var a=MA(n,s[0],s[1]);return wA(function(){o.hasValue=!0,o.value=a},[a]),CA(a),a};r_.exports=s_;var RA=r_.exports;const bA=Qf(RA),l_={},{useDebugValue:LA}=Sg,{useSyncExternalStoreWithSelector:PA}=bA;let Km=!1;const DA=n=>n;function IA(n,e=DA,t){(l_?"production":void 0)!=="production"&&t&&!Km&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Km=!0);const i=PA(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return LA(i),i}const qm=n=>{(l_?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?cA(n):n,t=(i,r)=>IA(e,i,r);return Object.assign(t,e),t},NA=n=>n?qm(n):qm;var U=(n=>(n[n.AIR=0]="AIR",n[n.GRASS=1]="GRASS",n[n.DIRT=2]="DIRT",n[n.STONE=3]="STONE",n[n.SAND=4]="SAND",n[n.SANDSTONE=5]="SANDSTONE",n[n.SNOW=6]="SNOW",n[n.ICE=7]="ICE",n[n.MUD=8]="MUD",n[n.CRYSTAL=9]="CRYSTAL",n[n.GLOWSTONE=10]="GLOWSTONE",n[n.LAVA=11]="LAVA",n[n.WATER=12]="WATER",n[n.WOOD=13]="WOOD",n[n.LEAVES=14]="LEAVES",n[n.CACTUS=15]="CACTUS",n[n.BEDROCK=16]="BEDROCK",n[n.COAL_ORE=17]="COAL_ORE",n[n.IRON_ORE=18]="IRON_ORE",n[n.GOLD_ORE=19]="GOLD_ORE",n[n.DIAMOND_ORE=20]="DIAMOND_ORE",n[n.PORTAL_FRAME=21]="PORTAL_FRAME",n[n.PORTAL_ACTIVE=22]="PORTAL_ACTIVE",n[n.LILY_PAD=23]="LILY_PAD",n[n.SPRUCE_WOOD=24]="SPRUCE_WOOD",n[n.SPRUCE_LEAVES=25]="SPRUCE_LEAVES",n[n.PACKED_ICE=26]="PACKED_ICE",n))(U||{});const rd={0:{id:0,name:"Air",solid:!1,transparent:!0,hardness:0,atlasTileX:0,atlasTileY:0,lightEmission:0},1:{id:1,name:"Grass",solid:!0,transparent:!1,hardness:.6,atlasTileX:0,atlasTileY:0,sideAtlasX:1,sideAtlasY:0,bottomAtlasX:2,bottomAtlasY:0,lightEmission:0},2:{id:2,name:"Dirt",solid:!0,transparent:!1,hardness:.5,atlasTileX:2,atlasTileY:0,lightEmission:0},3:{id:3,name:"Stone",solid:!0,transparent:!1,hardness:1.5,atlasTileX:3,atlasTileY:0,lightEmission:0},4:{id:4,name:"Sand",solid:!0,transparent:!1,hardness:.5,atlasTileX:4,atlasTileY:0,lightEmission:0},5:{id:5,name:"Sandstone",solid:!0,transparent:!1,hardness:2,atlasTileX:5,atlasTileY:0,lightEmission:0},6:{id:6,name:"Snow",solid:!0,transparent:!1,hardness:.2,atlasTileX:6,atlasTileY:0,lightEmission:0},7:{id:7,name:"Ice",solid:!0,transparent:!0,hardness:.5,atlasTileX:7,atlasTileY:0,lightEmission:0},8:{id:8,name:"Mud",solid:!0,transparent:!1,hardness:.4,atlasTileX:8,atlasTileY:0,lightEmission:0},9:{id:9,name:"Crystal",solid:!0,transparent:!1,hardness:1,atlasTileX:9,atlasTileY:0,lightEmission:12},10:{id:10,name:"Glowstone",solid:!0,transparent:!1,hardness:.3,atlasTileX:10,atlasTileY:0,lightEmission:15},11:{id:11,name:"Lava",solid:!1,transparent:!0,hardness:-1,atlasTileX:11,atlasTileY:0,lightEmission:15},12:{id:12,name:"Water",solid:!1,transparent:!0,hardness:-1,atlasTileX:0,atlasTileY:0,lightEmission:0},13:{id:13,name:"Wood",solid:!0,transparent:!1,hardness:2,atlasTileX:12,atlasTileY:0,lightEmission:0},14:{id:14,name:"Leaves",solid:!0,transparent:!0,hardness:.2,atlasTileX:13,atlasTileY:0,lightEmission:0},15:{id:15,name:"Cactus",solid:!0,transparent:!1,hardness:.4,atlasTileX:14,atlasTileY:0,lightEmission:0},16:{id:16,name:"Bedrock",solid:!0,transparent:!1,hardness:-1,atlasTileX:15,atlasTileY:0,lightEmission:0},17:{id:17,name:"Coal Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:0,atlasTileY:1,lightEmission:0},18:{id:18,name:"Iron Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:1,atlasTileY:1,lightEmission:0},19:{id:19,name:"Gold Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:2,atlasTileY:1,lightEmission:0},20:{id:20,name:"Diamond Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:3,atlasTileY:1,lightEmission:0},21:{id:21,name:"Portal Frame",solid:!0,transparent:!1,hardness:-1,atlasTileX:4,atlasTileY:1,lightEmission:5},22:{id:22,name:"Portal",solid:!1,transparent:!0,hardness:-1,atlasTileX:5,atlasTileY:1,lightEmission:15},23:{id:23,name:"Lily Pad",solid:!1,transparent:!0,hardness:0,atlasTileX:6,atlasTileY:1,lightEmission:0},24:{id:24,name:"Spruce Wood",solid:!0,transparent:!1,hardness:2,atlasTileX:7,atlasTileY:1,lightEmission:0},25:{id:25,name:"Spruce Leaves",solid:!0,transparent:!0,hardness:.2,atlasTileX:8,atlasTileY:1,lightEmission:0},26:{id:26,name:"Packed Ice",solid:!0,transparent:!1,hardness:.5,atlasTileX:9,atlasTileY:1,lightEmission:0}};function Yn(n){return rd[n]?.solid??!1}const P={DIRT:U.DIRT,STONE:U.STONE,SAND:U.SAND,SANDSTONE:U.SANDSTONE,SNOW:U.SNOW,ICE:U.ICE,MUD:U.MUD,CRYSTAL:U.CRYSTAL,GLOWSTONE:U.GLOWSTONE,WOOD:U.WOOD,LEAVES:U.LEAVES,CACTUS:U.CACTUS,COAL_ORE:U.COAL_ORE,IRON_ORE:U.IRON_ORE,GOLD_ORE:U.GOLD_ORE,DIAMOND_ORE:U.DIAMOND_ORE,SPRUCE_WOOD:U.SPRUCE_WOOD,SPRUCE_LEAVES:U.SPRUCE_LEAVES,PACKED_ICE:U.PACKED_ICE,PORTAL_FRAME:U.PORTAL_FRAME,GRASS:U.GRASS,SWORD:100,PISTOL:101,RIFLE:102,MAGIC_STAFF:103,AMMO:106,PLANK:113,STICK:114,IGNITER:115,IRON_INGOT:116,COAL:117,RAW_MEAT:118,LEATHER:119,SLIME_BALL:120,ASH:121,CRYSTAL_SHARD:122,DIAMOND:105,GOLD_INGOT:104,FURNACE:123,TORCH:124,CHEST:125,WOODEN_PICKAXE:126,STONE_PICKAXE:127,IRON_PICKAXE:128,WOODEN_AXE:129,STONE_AXE:130,WOODEN_SHOVEL:131,CRAFTING_TABLE:132,BOWL:133,MUSHROOM_STEW:134,BREAD:135,IRON_HELMET:136,IRON_CHESTPLATE:137,IRON_LEGGINGS:138,IRON_BOOTS:139},sd={[P.GRASS]:{name:"Grass",color:"#4CAF50",stackable:!0,maxStack:64,isBlock:!0,blockId:U.GRASS},[P.DIRT]:{name:"Dirt",color:"#795548",stackable:!0,maxStack:64,isBlock:!0,blockId:U.DIRT},[P.STONE]:{name:"Stone",color:"#9E9E9E",stackable:!0,maxStack:64,isBlock:!0,blockId:U.STONE},[P.SAND]:{name:"Sand",color:"#FDD835",stackable:!0,maxStack:64,isBlock:!0,blockId:U.SAND},[P.SANDSTONE]:{name:"Sandstone",color:"#E8C86A",stackable:!0,maxStack:64,isBlock:!0,blockId:U.SANDSTONE},[P.SNOW]:{name:"Snow",color:"#FAFAFA",stackable:!0,maxStack:64,isBlock:!0,blockId:U.SNOW},[P.ICE]:{name:"Ice",color:"#B3E5FC",stackable:!0,maxStack:64,isBlock:!0,blockId:U.ICE},[P.MUD]:{name:"Mud",color:"#4E342E",stackable:!0,maxStack:64,isBlock:!0,blockId:U.MUD},[P.CRYSTAL]:{name:"Crystal",color:"#7B1FA2",stackable:!0,maxStack:64,isBlock:!0,blockId:U.CRYSTAL},[P.GLOWSTONE]:{name:"Glowstone",color:"#FF8F00",stackable:!0,maxStack:64,isBlock:!0,blockId:U.GLOWSTONE},[P.WOOD]:{name:"Wood",color:"#6D4C41",stackable:!0,maxStack:64,isBlock:!0,blockId:U.WOOD},[P.LEAVES]:{name:"Leaves",color:"#2E7D32",stackable:!0,maxStack:64,isBlock:!0,blockId:U.LEAVES},[P.CACTUS]:{name:"Cactus",color:"#2E7D32",stackable:!0,maxStack:64,isBlock:!0,blockId:U.CACTUS},[P.COAL_ORE]:{name:"Coal Ore",color:"#424242",stackable:!0,maxStack:64,isBlock:!0,blockId:U.COAL_ORE},[P.IRON_ORE]:{name:"Iron Ore",color:"#E8C86A",stackable:!0,maxStack:64,isBlock:!0,blockId:U.IRON_ORE},[P.GOLD_ORE]:{name:"Gold Ore",color:"#FFD700",stackable:!0,maxStack:64,isBlock:!0,blockId:U.GOLD_ORE},[P.DIAMOND_ORE]:{name:"Diamond Ore",color:"#00BCD4",stackable:!0,maxStack:64,isBlock:!0,blockId:U.DIAMOND_ORE},[P.SPRUCE_WOOD]:{name:"Spruce Wood",color:"#4E342E",stackable:!0,maxStack:64,isBlock:!0,blockId:U.SPRUCE_WOOD},[P.SPRUCE_LEAVES]:{name:"Spruce Leaves",color:"#1B5E20",stackable:!0,maxStack:64,isBlock:!0,blockId:U.SPRUCE_LEAVES},[P.PACKED_ICE]:{name:"Packed Ice",color:"#81D4FA",stackable:!0,maxStack:64,isBlock:!0,blockId:U.PACKED_ICE},[P.PORTAL_FRAME]:{name:"Portal Frame",color:"#6A1B9A",stackable:!0,maxStack:64,isBlock:!0,blockId:U.PORTAL_FRAME},[P.PLANK]:{name:"Plank",color:"#8D6E63",stackable:!0,maxStack:64,isBlock:!0,blockId:U.WOOD},[P.STICK]:{name:"Stick",color:"#6D4C41",stackable:!0,maxStack:64,isBlock:!1},[P.COAL]:{name:"Coal",color:"#333333",stackable:!0,maxStack:64,isBlock:!1},[P.IRON_INGOT]:{name:"Iron Ingot",color:"#DDDDDD",stackable:!0,maxStack:64,isBlock:!1},[P.GOLD_INGOT]:{name:"Gold Ingot",color:"#FFD700",stackable:!0,maxStack:64,isBlock:!1},[P.DIAMOND]:{name:"Diamond",color:"#00E5FF",stackable:!0,maxStack:64,isBlock:!1},[P.CRYSTAL_SHARD]:{name:"Crystal Shard",color:"#CE93D8",stackable:!0,maxStack:64,isBlock:!1},[P.SLIME_BALL]:{name:"Slime Ball",color:"#76FF03",stackable:!0,maxStack:64,isBlock:!1},[P.ASH]:{name:"Ash",color:"#FF5722",stackable:!0,maxStack:64,isBlock:!1},[P.RAW_MEAT]:{name:"Raw Meat",color:"#FF6D00",stackable:!0,maxStack:16,isBlock:!1},[P.LEATHER]:{name:"Leather",color:"#8D6E63",stackable:!0,maxStack:64,isBlock:!1},[P.IGNITER]:{name:"Igniter",color:"#FF6D00",stackable:!0,maxStack:1,isBlock:!1},[P.SWORD]:{name:"Iron Sword",color:"#C0C0C0",stackable:!1,maxStack:1,isBlock:!1},[P.PISTOL]:{name:"Pistol",color:"#888888",stackable:!1,maxStack:1,isBlock:!1},[P.RIFLE]:{name:"Rifle",color:"#555555",stackable:!1,maxStack:1,isBlock:!1},[P.MAGIC_STAFF]:{name:"Magic Staff",color:"#9C27B0",stackable:!1,maxStack:1,isBlock:!1},[P.AMMO]:{name:"Ammo",color:"#FFD700",stackable:!0,maxStack:64,isBlock:!1},[P.WOODEN_PICKAXE]:{name:"Wooden Pickaxe",color:"#8D6E63",stackable:!1,maxStack:1,isBlock:!1},[P.STONE_PICKAXE]:{name:"Stone Pickaxe",color:"#9E9E9E",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_PICKAXE]:{name:"Iron Pickaxe",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1},[P.WOODEN_AXE]:{name:"Wooden Axe",color:"#8D6E63",stackable:!1,maxStack:1,isBlock:!1},[P.STONE_AXE]:{name:"Stone Axe",color:"#9E9E9E",stackable:!1,maxStack:1,isBlock:!1},[P.WOODEN_SHOVEL]:{name:"Wooden Shovel",color:"#8D6E63",stackable:!1,maxStack:1,isBlock:!1},[P.FURNACE]:{name:"Furnace",color:"#757575",stackable:!0,maxStack:64,isBlock:!0,blockId:U.STONE},[P.TORCH]:{name:"Torch",color:"#FFA726",stackable:!0,maxStack:64,isBlock:!1},[P.CHEST]:{name:"Chest",color:"#6D4C41",stackable:!0,maxStack:64,isBlock:!0,blockId:U.WOOD},[P.CRAFTING_TABLE]:{name:"Crafting Table",color:"#8D6E63",stackable:!0,maxStack:64,isBlock:!0,blockId:U.WOOD},[P.BREAD]:{name:"Bread",color:"#D4A04A",stackable:!0,maxStack:16,isBlock:!1},[P.BOWL]:{name:"Bowl",color:"#8D6E63",stackable:!0,maxStack:64,isBlock:!1},[P.MUSHROOM_STEW]:{name:"Mushroom Stew",color:"#A1887F",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_HELMET]:{name:"Iron Helmet",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_CHESTPLATE]:{name:"Iron Chestplate",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_LEGGINGS]:{name:"Iron Leggings",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_BOOTS]:{name:"Iron Boots",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1}},OA={[U.GRASS]:[{id:P.DIRT,count:1,chance:1}],[U.DIRT]:[{id:P.DIRT,count:1,chance:1}],[U.STONE]:[{id:P.STONE,count:1,chance:1}],[U.SAND]:[{id:P.SAND,count:1,chance:1}],[U.SANDSTONE]:[{id:P.SANDSTONE,count:1,chance:1}],[U.SNOW]:[{id:P.SNOW,count:1,chance:1}],[U.ICE]:[{id:P.ICE,count:1,chance:.8}],[U.MUD]:[{id:P.MUD,count:1,chance:1}],[U.CRYSTAL]:[{id:P.CRYSTAL_SHARD,count:2,chance:1},{id:P.CRYSTAL_SHARD,count:2,chance:.5}],[U.GLOWSTONE]:[{id:P.GLOWSTONE,count:1,chance:1}],[U.WOOD]:[{id:P.WOOD,count:1,chance:1}],[U.LEAVES]:[{id:P.LEAVES,count:1,chance:.4},{id:P.STICK,count:1,chance:.15}],[U.CACTUS]:[{id:P.CACTUS,count:1,chance:1}],[U.BEDROCK]:[],[U.COAL_ORE]:[{id:P.COAL,count:1,chance:1}],[U.IRON_ORE]:[{id:P.IRON_ORE,count:1,chance:1}],[U.GOLD_ORE]:[{id:P.GOLD_ORE,count:1,chance:1}],[U.DIAMOND_ORE]:[{id:P.DIAMOND,count:1,chance:1}],[U.SPRUCE_WOOD]:[{id:P.SPRUCE_WOOD,count:1,chance:1}],[U.SPRUCE_LEAVES]:[{id:P.SPRUCE_LEAVES,count:1,chance:.4},{id:P.STICK,count:1,chance:.2}],[U.PACKED_ICE]:[{id:P.PACKED_ICE,count:1,chance:1}],[U.PORTAL_FRAME]:[{id:P.PORTAL_FRAME,count:1,chance:1}]};function UA(n){const e=OA[n];if(!e)return[];const t=[];for(const i of e)Math.random()<i.chance&&t.push({id:i.id,count:i.count});return t}function Ji(n){return sd[n]?.name??"Unknown"}function _s(n){return sd[n]?.color??"#666"}function c_(n){return sd[n]}const kA=64,fi=NA((n,e)=>({slots:new Array(36).fill(null),selected:0,addItem:(t,i)=>{let r=!1;return n(s=>{const o=[...s.slots];let a=i;const c=c_(t)?.maxStack??kA;for(let u=0;u<36&&a>0;u++){const h=o[u];if(h&&h.id===t&&h.count<c){const d=Math.min(a,c-h.count);o[u]={id:t,count:h.count+d},a-=d,r=!0}}for(let u=0;u<36&&a>0;u++)if(!o[u]){const h=Math.min(a,c);o[u]={id:t,count:h},a-=h,r=!0}return{slots:o}}),r},removeItem:(t,i)=>{n(r=>{const s=[...r.slots],o=s[t];return o?(o.count<=i?s[t]=null:s[t]={id:o.id,count:o.count-i},{slots:s}):r})},swapSlots:(t,i)=>{n(r=>{const s=[...r.slots],o=s[t];return s[t]=s[i],s[i]=o,{slots:s}})},selectSlot:t=>n({selected:Math.max(0,Math.min(8,t))}),getSelectedItem:()=>{const t=e();return t.slots[t.selected]},setSlots:t=>n({slots:t}),getCountOfItem:t=>{const i=e();let r=0;for(const s of i.slots)s&&s.id===t&&(r+=s.count);return r}}));class FA{renderer;mainScene;mainCamera;weaponScene;weaponCamera;constructor(){this.mainScene=new Bm,this.mainCamera=new wn(75,window.innerWidth/window.innerHeight,.1,400),this.weaponScene=new Bm,this.weaponCamera=new wn(55,window.innerWidth/window.innerHeight,.05,20),this.renderer=new n_({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.autoClear=!1,this.renderer.outputColorSpace=Jt,this.renderer.toneMapping=Tv,this.renderer.toneMappingExposure=1,window.addEventListener("resize",this.onResize.bind(this))}onResize(){const e=window.innerWidth,t=window.innerHeight;this.mainCamera.aspect=e/t,this.mainCamera.updateProjectionMatrix(),this.weaponCamera.aspect=e/t,this.weaponCamera.updateProjectionMatrix(),this.renderer.setSize(e,t)}getDomElement(){return this.renderer.domElement}render(){this.renderer.clear(),this.renderer.render(this.mainScene,this.mainCamera),this.renderer.clearDepth(),this.renderer.render(this.weaponScene,this.weaponCamera)}setMainCameraPosition(e,t,i){this.mainCamera.position.set(e,t,i)}setMainCameraRotation(e,t){this.mainCamera.rotation.order="YXZ",this.mainCamera.rotation.y=e,this.mainCamera.rotation.x=t}setFOV(e){this.mainCamera.fov=e,this.mainCamera.updateProjectionMatrix()}destroy(){this.renderer.dispose(),window.removeEventListener("resize",this.onResize.bind(this))}}const BA=`varying vec3 vWorldPos;
varying vec2 vUv;
void main() {
  vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,zA=`uniform vec3 uTopColor;
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
`;class HA{skyMesh;starField;uniforms;constructor(e){const t=new Rc(380,32,32);this.uniforms={uTopColor:{value:new Te(1713022)},uHorizonColor:{value:new Te(16740419)},uSunDir:{value:new G(0,1,0)},uStarIntensity:{value:0},uTime:{value:0}};const i=new Vi({vertexShader:BA,fragmentShader:zA,uniforms:this.uniforms,side:yn,depthWrite:!1});this.skyMesh=new Cn(t,i),this.skyMesh.renderOrder=-1e3,e.add(this.skyMesh);const r=3e3,s=new Float32Array(r*3),o=new Float32Array(r);for(let c=0;c<r;c++){const u=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1),d=370;s[c*3]=d*Math.sin(h)*Math.cos(u),s[c*3+1]=Math.abs(d*Math.sin(h)*Math.sin(u)),s[c*3+2]=d*Math.cos(h),o[c]=.5+Math.random()*2}const a=new Dn;a.setAttribute("position",new wt(s,3)),a.setAttribute("size",new wt(o,1));const l=new Cc({color:16777215,size:1.5,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!1});this.starField=new nd(a,l),this.starField.renderOrder=-999,e.add(this.starField)}update(e,t,i,r){this.uniforms.uTime.value=e,this.uniforms.uSunDir.value.copy(t),r&&(this.skyMesh.position.set(r.x,r.y,r.z),this.starField.position.set(r.x,r.y,r.z));const s=t.y,o=new Te,a=new Te;if(s>.3)o.setHex(870305),a.setHex(12312315);else if(s>.1){const c=(s-.1)/.2;o.lerpColors(new Te(1402304),new Te(870305),c),a.lerpColors(new Te(16764032),new Te(12312315),c)}else if(s>0){const c=s/.1;o.lerpColors(new Te(15094016),new Te(1402304),c),a.lerpColors(new Te(16748288),new Te(16764032),c)}else if(s>-.1){const c=(s+.1)/.1;o.lerpColors(new Te(3218322),new Te(15094016),c),a.lerpColors(new Te(4854924),new Te(16748288),c)}else if(s>-.3){const c=(s+.3)/.2;o.lerpColors(new Te(858922),new Te(3218322),c),a.lerpColors(new Te(1713022),new Te(4854924),c)}else o.setHex(331034),a.setHex(858922);this.uniforms.uTopColor.value.copy(o),this.uniforms.uHorizonColor.value.copy(a);const l=Math.max(0,(-s-.1)*4);this.uniforms.uStarIntensity.value=Math.min(1,l),this.starField.material.opacity=Math.min(.8,l)}}const GA=`uniform float uTime;
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
`,VA=`uniform float uTime;
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
`;class WA{waterMaterial;waterMeshes=new Map;constructor(){this.waterMaterial=new Vi({vertexShader:GA,fragmentShader:VA,uniforms:{uTime:{value:0},uCamPos:{value:new G},uSunDir:{value:new G(0,1,0)}},transparent:!0,side:Si,depthWrite:!1})}getMaterial(){return this.waterMaterial}addWaterMesh(e,t,i){const r=new Cn(t,this.waterMaterial);r.frustumCulled=!0,r.renderOrder=100,this.waterMeshes.set(e,r),i.add(r)}removeWaterMesh(e,t){const i=this.waterMeshes.get(e);i&&(t.remove(i),i.geometry.dispose(),this.waterMeshes.delete(e))}updateUniforms(e,t,i){this.waterMaterial.uniforms.uTime.value=e,this.waterMaterial.uniforms.uCamPos.value.copy(t),this.waterMaterial.uniforms.uSunDir.value.copy(i)}}var rt=(n=>(n[n.PLAINS=0]="PLAINS",n[n.DESERT=1]="DESERT",n[n.TUNDRA=2]="TUNDRA",n[n.MARSH=3]="MARSH",n[n.CRYSTAL_CAVERNS=4]="CRYSTAL_CAVERNS",n))(rt||{});const u_={0:{id:0,name:"Verdant Plains",surfaceBlock:1,subSurfaceBlock:2,underwaterBlock:2,amplitude:12,treeType:"oak",treeDensity:.02,waterLevel:-1,fogColor:[.784,.902,.788],fogDensity:.012,temperature:.2},1:{id:1,name:"Desert",surfaceBlock:4,subSurfaceBlock:5,underwaterBlock:4,amplitude:8,treeType:"cactus",treeDensity:.008,waterLevel:-1,fogColor:[1,.976,.769],fogDensity:.01,temperature:.9},2:{id:2,name:"Frozen Tundra",surfaceBlock:6,subSurfaceBlock:2,underwaterBlock:23,amplitude:4,treeType:"spruce",treeDensity:.01,waterLevel:-1,fogColor:[.89,.945,.992],fogDensity:.018,temperature:-.8},3:{id:3,name:"Sunken Marsh",surfaceBlock:8,subSurfaceBlock:8,underwaterBlock:8,amplitude:3,treeType:"none",treeDensity:0,waterLevel:22,fogColor:[.306,.204,.18],fogDensity:.028,temperature:.1},4:{id:4,name:"Crystal Caverns",surfaceBlock:9,subSurfaceBlock:3,underwaterBlock:3,amplitude:10,treeType:"crystal",treeDensity:.012,waterLevel:-1,fogColor:[.29,.078,.549],fogDensity:.022,temperature:0}};class XA{scene;targetColor=new Te;targetNear=50;targetFar=250;currentColor=new Te;currentNear=50;currentFar=250;sunHeight=1;constructor(e){this.scene=e,e.fog=new sc(13166281,50,250),this.currentColor.set(13166281),this.targetColor.set(13166281)}setBiomeFog(e){const t=u_[e];this.targetColor.setRGB(t.fogColor[0],t.fogColor[1],t.fogColor[2]),this.targetNear=60,this.targetFar=220}setCaveFog(){this.targetColor.setHex(1118481),this.targetNear=5,this.targetFar=40}setSunHeight(e){this.sunHeight=e}update(e){const t=e*2;if(this.currentColor.lerp(this.targetColor,t),this.currentNear+=(this.targetNear-this.currentNear)*t,this.currentFar+=(this.targetFar-this.currentFar)*t,this.scene.fog instanceof sc){const i=this.currentColor.clone();if(this.sunHeight<0){const r=Math.min(1,-this.sunHeight*2);i.lerp(new Te(331034),r*.7)}else if(this.sunHeight<.2){const r=1-this.sunHeight/.2;i.lerp(new Te(16764032),r*.3)}this.scene.fog.color.copy(i),this.scene.fog.near=this.currentNear,this.scene.fog.far=this.currentFar}}}const Ve=16,Un=64,Ir=22,Ar=6,YA=8,$m=-28,Zm=.6,Qm=1.8,Jm=1.6,jA=5,hl=12e5,KA=6,eg=32,Gu=200,wo=5e3,qA=3e4,Do=512,$A=16,re=Do/$A;class ZA{particles=[];geometry;material;points;positions;colors;sizes;constructor(e){this.positions=new Float32Array(wo*3),this.colors=new Float32Array(wo*3),this.sizes=new Float32Array(wo),this.geometry=new Dn,this.geometry.setAttribute("position",new wt(this.positions,3)),this.geometry.setAttribute("color",new wt(this.colors,3)),this.geometry.setAttribute("size",new wt(this.sizes,1)),this.material=new Cc({size:.15,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1,sizeAttenuation:!0}),this.points=new nd(this.geometry,this.material),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,r,s={}){const{speed:o=2,color:a=[1,1,1],life:l=1,size:c=.15,spread:u=1}=s;for(let h=0;h<r&&!(this.particles.length>=wo);h++){const d=Math.random()*Math.PI*2,p=(Math.random()-.5)*Math.PI,v=o*(.5+Math.random()*.5);this.particles.push({x:e+(Math.random()-.5)*u,y:t+(Math.random()-.5)*u,z:i+(Math.random()-.5)*u,vx:Math.cos(d)*Math.cos(p)*v,vy:Math.sin(p)*v,vz:Math.sin(d)*Math.cos(p)*v,life:l,maxLife:l,r:a[0],g:a[1],b:a[2],size:c})}}update(e){let t=0;for(let i=this.particles.length-1;i>=0;i--){const r=this.particles[i];if(r.life-=e,r.life<=0){this.particles.splice(i,1);continue}r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.vy-=5*e;const s=r.life/r.maxLife;this.positions[t*3]=r.x,this.positions[t*3+1]=r.y,this.positions[t*3+2]=r.z,this.colors[t*3]=r.r*s,this.colors[t*3+1]=r.g*s,this.colors[t*3+2]=r.b*s,this.sizes[t]=r.size*s,t++}for(let i=t;i<wo;i++)this.positions[i*3+1]=-1e3,this.sizes[i]=0;this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.setDrawRange(0,t)}}class QA{sunLight;ambientLight;hemisphereLight;sunDirection=new G(0,1,0);elapsed=0;constructor(e){this.sunLight=new oA(16774624,1.5),this.sunLight.position.set(50,100,30),e.add(this.sunLight),this.ambientLight=new aA(8425664,.4),e.add(this.ambientLight),this.hemisphereLight=new nA(8900331,4473890,.5),e.add(this.hemisphereLight)}update(e){this.elapsed+=e*1e3;const i=this.elapsed%hl/hl*Math.PI*2,r=Math.cos(i)*100,s=Math.sin(i)*100,o=30;this.sunLight.position.set(r,s,o),this.sunDirection.set(r,s,o).normalize();const a=Math.sin(i);if(a>.3)this.sunLight.color.setHex(16775920),this.sunLight.intensity=1.5,this.ambientLight.color.setHex(8425664),this.ambientLight.intensity=.4,this.hemisphereLight.color.setHex(8900331),this.hemisphereLight.groundColor.setHex(4473890),this.hemisphereLight.intensity=.5;else if(a>.1){const l=(a-.1)/.2;this.sunLight.color.lerpColors(new Te(16747520),new Te(16775920),l),this.sunLight.intensity=.8+l*.7,this.ambientLight.intensity=.2+l*.2,this.hemisphereLight.intensity=.3+l*.2}else if(a>0){const l=a/.1;this.sunLight.color.lerpColors(new Te(15094016),new Te(16747520),l),this.sunLight.intensity=.5+l*.3,this.ambientLight.color.lerpColors(new Te(1713022),new Te(8425664),l),this.ambientLight.intensity=.1+l*.1,this.hemisphereLight.color.lerpColors(new Te(16740096),new Te(8900331),l),this.hemisphereLight.intensity=.15+l*.15}else if(a>-.1){const l=(a+.1)/.1;this.sunLight.color.lerpColors(new Te(1713022),new Te(15094016),l),this.sunLight.intensity=.1+l*.4,this.ambientLight.color.lerpColors(new Te(858922),new Te(1713022),l),this.ambientLight.intensity=.05+l*.05,this.hemisphereLight.color.lerpColors(new Te(1710654),new Te(16740096),l),this.hemisphereLight.intensity=.05+l*.1}else this.sunLight.color.setHex(4482730),this.sunLight.intensity=.15,this.ambientLight.color.setHex(858922),this.ambientLight.intensity=.05,this.hemisphereLight.color.setHex(1118515),this.hemisphereLight.groundColor.setHex(1118481),this.hemisphereLight.intensity=.05}getSunDirection(){return this.sunDirection}getDayProgress(){return this.elapsed%hl/hl}getSunHeight(){return this.sunDirection.y}}class JA{scene;assetManager;chunks=new Map;material;maxChunks=200;constructor(e,t){this.scene=e,this.assetManager=t,this.material=new id({map:t.getTexture(),vertexColors:!0,side:Hi})}uploadChunk(e,t,i){if(this.removeChunk(e),this.chunks.size>=this.maxChunks){let a="",l=1/0;this.chunks.forEach((c,u)=>{c.lastAccessed<l&&(l=c.lastAccessed,a=u)}),a&&this.removeChunk(a)}const r=new Dn;r.setAttribute("position",new wt(t.positions,3)),r.setAttribute("normal",new wt(t.normals,3)),r.setAttribute("uv",new wt(t.uvs,2)),r.setAttribute("color",new wt(t.colors,3)),r.setIndex(new wt(t.indices,1)),r.computeBoundingSphere();const s=new Cn(r,this.material);s.frustumCulled=!0,this.scene.add(s);let o=null;if(t.waterIndices.length>0){const a=new Dn;a.setAttribute("position",new wt(t.waterPositions,3)),a.setAttribute("normal",new wt(t.waterNormals,3)),a.setAttribute("uv",new wt(t.waterUvs,2)),a.setIndex(new wt(t.waterIndices,1)),a.computeBoundingSphere(),o=new Cn(a,i),o.frustumCulled=!0,o.renderOrder=100,this.scene.add(o)}this.chunks.set(e,{solid:s,water:o,lastAccessed:performance.now(),key:e})}removeChunk(e){const t=this.chunks.get(e);t&&(this.scene.remove(t.solid),t.solid.geometry.dispose(),t.water&&(this.scene.remove(t.water),t.water.geometry.dispose()),this.chunks.delete(e))}hasChunk(e){return this.chunks.has(e)}getChunkCount(){return this.chunks.size}clear(){this.chunks.forEach((e,t)=>this.removeChunk(t))}}class eC{overlay;vignetteStrength=.3;constructor(){this.overlay=document.createElement("div"),this.overlay.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10;background:radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",document.body.appendChild(this.overlay)}setVignetteStrength(e){this.vignetteStrength=e;const t=e*.6;this.overlay.style.background=`radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${t}) 100%)`}fadeIn(e,t){this.overlay.style.transition=`background ${e}ms`,this.overlay.style.background="rgba(0,0,0,1)",t&&setTimeout(t,e)}fadeOut(e,t){this.overlay.style.transition=`background ${e}ms`;const i=this.vignetteStrength*.6;this.overlay.style.background=`radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${i}) 100%)`,t&&setTimeout(t,e)}destroy(){document.body.removeChild(this.overlay)}}class tC{atlas=null;canvas=null;init(){this.canvas=document.createElement("canvas"),this.canvas.width=Do,this.canvas.height=Do;const e=this.canvas.getContext("2d");e.fillStyle="#FF00FF",e.fillRect(0,0,Do,Do),this.drawTile(e,U.GRASS,(t,i,r)=>{t.fillStyle="#4CAF50",t.fillRect(i,r,re,re);for(let s=0;s<20;s++){t.fillStyle="#388E3C";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,2,2)}for(let s=0;s<5;s++){t.fillStyle="#81C784";const o=i+Math.floor(Math.random()*(re-6)),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,6,1)}}),this.drawTile(e,U.DIRT,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,re,re);for(let s=0;s<25;s++){t.fillStyle=Math.random()>.5?"#6D4C41":"#8D6E63";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,2,2)}}),this.drawTileAt(e,1,0,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,re,re),t.fillStyle="#4CAF50",t.fillRect(i,r,re,Math.floor(re*.4));for(let s=0;s<10;s++){t.fillStyle="#388E3C";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re*.4);t.fillRect(o,a,2,2)}}),this.drawTileAt(e,2,0,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,re,re);for(let s=0;s<20;s++){t.fillStyle="#6D4C41";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,3,2)}}),this.drawTile(e,U.STONE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<4;s++)t.strokeStyle="#757575",t.lineWidth=1,t.beginPath(),t.moveTo(i+Math.random()*re,r+Math.random()*re),t.quadraticCurveTo(i+Math.random()*re,r+Math.random()*re,i+Math.random()*re,r+Math.random()*re),t.stroke()}),this.drawTile(e,U.SAND,(t,i,r)=>{t.fillStyle="#FDD835",t.fillRect(i,r,re,re);for(let s=0;s<6;s++){t.fillStyle="#F9A825";const o=r+Math.floor(Math.random()*re);t.fillRect(i,o,re,1)}}),this.drawTile(e,U.SANDSTONE,(t,i,r)=>{t.fillStyle="#E8C86A",t.fillRect(i,r,re,re);for(let s=0;s<3;s++){t.fillStyle="#D4B04A";const o=r+Math.floor(Math.random()*re);t.fillRect(i,o,re,2)}}),this.drawTile(e,U.SNOW,(t,i,r)=>{t.fillStyle="#FAFAFA",t.fillRect(i,r,re,re);for(let s=0;s<15;s++){t.fillStyle="#BBDEFB";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,2,2)}}),this.drawTile(e,U.ICE,(t,i,r)=>{t.fillStyle="#B3E5FC",t.fillRect(i,r,re,re),t.fillStyle="#E1F5FE",t.fillRect(i+8,r+8,16,16)}),this.drawTile(e,U.MUD,(t,i,r)=>{t.fillStyle="#4E342E",t.fillRect(i,r,re,re);for(let s=0;s<8;s++){t.fillStyle="#3E2723";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,4,3)}}),this.drawTile(e,U.CRYSTAL,(t,i,r)=>{t.fillStyle="#7B1FA2",t.fillRect(i,r,re,re),t.strokeStyle="#FFFFFF",t.lineWidth=2,t.beginPath(),t.moveTo(i,r),t.lineTo(i+re,r+re),t.stroke(),t.beginPath(),t.moveTo(i+re,r),t.lineTo(i,r+re),t.stroke()}),this.drawTile(e,U.GLOWSTONE,(t,i,r)=>{t.fillStyle="#FF8F00",t.fillRect(i,r,re,re),t.fillStyle="#FFD54F",t.fillRect(i+10,r+10,12,12),t.fillStyle="#FFFFFF",t.fillRect(i+14,r+14,4,4)}),this.drawTile(e,U.LAVA,(t,i,r)=>{t.fillStyle="#E65100",t.fillRect(i,r,re,re),t.fillStyle="#FF6D00",t.fillRect(i+4,r+4,24,24),t.fillStyle="#FFAB00",t.fillRect(i+10,r+10,12,12)}),this.drawTile(e,U.WOOD,(t,i,r)=>{t.fillStyle="#6D4C41",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#5D4037";const o=i+Math.floor(Math.random()*re);t.fillRect(o,r,1,re)}}),this.drawTile(e,U.LEAVES,(t,i,r)=>{t.fillStyle="#2E7D32",t.fillRect(i,r,re,re);for(let s=0;s<30;s++){t.fillStyle="#1B5E20";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,3,3)}}),this.drawTile(e,U.CACTUS,(t,i,r)=>{t.fillStyle="#2E7D32",t.fillRect(i,r,re,re),t.fillStyle="#1B5E20",t.fillRect(i+2,r,1,re),t.fillRect(i+re-3,r,1,re)}),this.drawTile(e,U.BEDROCK,(t,i,r)=>{t.fillStyle="#212121",t.fillRect(i,r,re,re);for(let s=0;s<10;s++){t.fillStyle="#424242";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,4,3)}}),this.drawTile(e,U.COAL_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#212121";const o=i+Math.floor(Math.random()*(re-4)),a=r+Math.floor(Math.random()*(re-4));t.fillRect(o,a,4,4)}}),this.drawTile(e,U.IRON_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#E8C86A";const o=i+Math.floor(Math.random()*(re-3)),a=r+Math.floor(Math.random()*(re-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,U.GOLD_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#FFD700";const o=i+Math.floor(Math.random()*(re-3)),a=r+Math.floor(Math.random()*(re-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,U.DIAMOND_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#00BCD4";const o=i+Math.floor(Math.random()*(re-3)),a=r+Math.floor(Math.random()*(re-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,U.PORTAL_FRAME,(t,i,r)=>{t.fillStyle="#6A1B9A",t.fillRect(i,r,re,re),t.strokeStyle="#CE93D8",t.lineWidth=2,t.strokeRect(i+4,r+4,re-8,re-8)}),this.drawTile(e,U.PORTAL_ACTIVE,(t,i,r)=>{t.fillStyle="#AA00FF",t.fillRect(i,r,re,re);for(let s=0;s<10;s++){t.fillStyle="#E040FB";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,2,2)}}),this.drawTile(e,U.LILY_PAD,(t,i,r)=>{t.fillStyle="#1B5E20",t.fillRect(i+4,r+4,re-8,re-8)}),this.drawTile(e,U.SPRUCE_WOOD,(t,i,r)=>{t.fillStyle="#4E342E",t.fillRect(i,r,re,re);for(let s=0;s<6;s++){t.fillStyle="#3E2723";const o=i+Math.floor(Math.random()*re);t.fillRect(o,r,1,re)}}),this.drawTile(e,U.SPRUCE_LEAVES,(t,i,r)=>{t.fillStyle="#1B5E20",t.fillRect(i,r,re,re);for(let s=0;s<20;s++){t.fillStyle="#0D3B0F";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,3,3)}}),this.drawTile(e,U.PACKED_ICE,(t,i,r)=>{t.fillStyle="#81D4FA",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#B3E5FC";const o=i+Math.floor(Math.random()*(re-4)),a=r+Math.floor(Math.random()*(re-4));t.fillRect(o,a,4,4)}}),this.atlas=new tA(this.canvas),this.atlas.magFilter=an,this.atlas.minFilter=an,this.atlas.wrapS=kn,this.atlas.wrapT=kn}drawTile(e,t,i){const r=rd[t],s=r.atlasTileX*re,o=r.atlasTileY*re;i(e,s,o)}drawTileAt(e,t,i,r){const s=t*re,o=i*re;r(e,s,o)}getTexture(){return this.atlas||this.init(),this.atlas}}class nC{keys=new Map;mouseButtons=new Map;mouseDeltaX=0;mouseDeltaY=0;prevMouseDeltaX=0;prevMouseDeltaY=0;scrollDelta=0;prevScrollDelta=0;keyJustPressed=new Map;canvas=null;init(e){this.canvas=e,document.addEventListener("keydown",t=>{this.keys.get(t.code)||this.keyJustPressed.set(t.code,!0),this.keys.set(t.code,!0),["Space","Tab","KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight"].includes(t.code)&&t.preventDefault()}),document.addEventListener("keyup",t=>{this.keys.set(t.code,!1)}),document.addEventListener("mousedown",t=>{this.mouseButtons.set(t.button,!0)}),document.addEventListener("mouseup",t=>{this.mouseButtons.set(t.button,!1)}),document.addEventListener("mousemove",t=>{document.pointerLockElement===this.canvas&&(this.mouseDeltaX+=t.movementX,this.mouseDeltaY+=t.movementY)}),document.addEventListener("wheel",t=>{this.scrollDelta+=t.deltaY}),e.addEventListener("contextmenu",t=>t.preventDefault())}flush(){this.prevMouseDeltaX=this.mouseDeltaX,this.prevMouseDeltaY=this.mouseDeltaY,this.mouseDeltaX=0,this.mouseDeltaY=0,this.prevScrollDelta=this.scrollDelta,this.scrollDelta=0,this.keyJustPressed.clear()}isKeyDown(e){return this.keys.get(e)??!1}isKeyJustPressed(e){return this.keyJustPressed.get(e)??!1}isMouseButtonDown(e){return this.mouseButtons.get(e)??!1}getMouseDeltaX(){return this.prevMouseDeltaX}getMouseDeltaY(){return this.prevMouseDeltaY}getScrollDelta(){return this.prevScrollDelta}isPointerLocked(){return document.pointerLockElement===this.canvas}requestPointerLock(){this.canvas?.requestPointerLock()}exitPointerLock(){document.exitPointerLock()}destroy(){}}const iC=`
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
`;let tg=null,Vu=null;function rC(){return Vu||(tg=new Blob([iC],{type:"application/javascript"}),Vu=URL.createObjectURL(tg)),new Worker(Vu)}class od{chunkX;chunkZ;voxels;dirty=!0;constructor(e,t){this.chunkX=e,this.chunkZ=t,this.voxels=new Uint8Array(Ve*Un*Ve)}index(e,t,i){return e+i*Ve+t*Ve*Ve}getBlock(e,t,i){return e<0||e>=Ve||t<0||t>=Un||i<0||i>=Ve?0:this.voxels[this.index(e,t,i)]}setBlock(e,t,i,r){e<0||e>=Ve||t<0||t>=Un||i<0||i>=Ve||(this.voxels[this.index(e,t,i)]=r,this.dirty=!0)}getBlockWorld(e,t,i){const r=e-this.chunkX*Ve,s=i-this.chunkZ*Ve;return this.getBlock(r,t,s)}setBlockWorld(e,t,i,r){const s=e-this.chunkX*Ve,o=i-this.chunkZ*Ve;this.setBlock(s,t,o,r)}isOnEdge(e,t){return e===0||e===Ve-1||t===0||t===Ve-1}get worldX(){return this.chunkX*Ve}get worldZ(){return this.chunkZ*Ve}fill(e){this.voxels.fill(e)}}const f_=Math.sqrt(3),sC=.5*(f_-1),Ao=(3-f_)/6,oC=1/3,gi=1/6,Vo=n=>Math.floor(n)|0,ng=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),Wu=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function ig(n=Math.random){const e=h_(n),t=new Float64Array(e).map(r=>ng[r%12*2]),i=new Float64Array(e).map(r=>ng[r%12*2+1]);return function(s,o){let a=0,l=0,c=0;const u=(s+o)*sC,h=Vo(s+u),d=Vo(o+u),p=(h+d)*Ao,v=h-p,y=d-p,m=s-v,f=o-y;let g,_;m>f?(g=1,_=0):(g=0,_=1);const E=m-g+Ao,A=f-_+Ao,S=m-1+2*Ao,T=f-1+2*Ao,O=h&255,M=d&255;let C=.5-m*m-f*f;if(C>=0){const oe=O+e[M],F=t[oe],W=i[oe];C*=C,a=C*C*(F*m+W*f)}let V=.5-E*E-A*A;if(V>=0){const oe=O+g+e[M+_],F=t[oe],W=i[oe];V*=V,l=V*V*(F*E+W*A)}let Z=.5-S*S-T*T;if(Z>=0){const oe=O+1+e[M+1],F=t[oe],W=i[oe];Z*=Z,c=Z*Z*(F*S+W*T)}return 70*(a+l+c)}}function rg(n=Math.random){const e=h_(n),t=new Float64Array(e).map(s=>Wu[s%12*3]),i=new Float64Array(e).map(s=>Wu[s%12*3+1]),r=new Float64Array(e).map(s=>Wu[s%12*3+2]);return function(o,a,l){let c,u,h,d;const p=(o+a+l)*oC,v=Vo(o+p),y=Vo(a+p),m=Vo(l+p),f=(v+y+m)*gi,g=v-f,_=y-f,E=m-f,A=o-g,S=a-_,T=l-E;let O,M,C,V,Z,oe;A>=S?S>=T?(O=1,M=0,C=0,V=1,Z=1,oe=0):A>=T?(O=1,M=0,C=0,V=1,Z=0,oe=1):(O=0,M=0,C=1,V=1,Z=0,oe=1):S<T?(O=0,M=0,C=1,V=0,Z=1,oe=1):A<T?(O=0,M=1,C=0,V=0,Z=1,oe=1):(O=0,M=1,C=0,V=1,Z=1,oe=0);const F=A-O+gi,W=S-M+gi,te=T-C+gi,se=A-V+2*gi,B=S-Z+2*gi,X=T-oe+2*gi,j=A-1+3*gi,ie=S-1+3*gi,le=T-1+3*gi,J=v&255,ae=y&255,ye=m&255;let we=.6-A*A-S*S-T*T;if(we<0)c=0;else{const be=J+e[ae+e[ye]];we*=we,c=we*we*(t[be]*A+i[be]*S+r[be]*T)}let Ce=.6-F*F-W*W-te*te;if(Ce<0)u=0;else{const be=J+O+e[ae+M+e[ye+C]];Ce*=Ce,u=Ce*Ce*(t[be]*F+i[be]*W+r[be]*te)}let We=.6-se*se-B*B-X*X;if(We<0)h=0;else{const be=J+V+e[ae+Z+e[ye+oe]];We*=We,h=We*We*(t[be]*se+i[be]*B+r[be]*X)}let Ye=.6-j*j-ie*ie-le*le;if(Ye<0)d=0;else{const be=J+1+e[ae+1+e[ye+1]];Ye*=Ye,d=Ye*Ye*(t[be]*j+i[be]*ie+r[be]*le)}return 32*(c+u+h+d)}}function h_(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}let d_=0;function aC(n){d_=n}function lC(){let n=d_;return()=>(n=n*1664525+1013904223&4294967295,(n>>>0)/4294967295)}let p_,m_,g_,v_;function cC(){const n=lC();p_=ig(n),m_=rg(n),g_=rg(n),v_=ig(n)}function __(){return p_}function dl(){return m_}function uC(){return g_}function sg(){return v_}class fC{seed;constructor(e){this.seed=e}generateChunk(e,t){const i=e.chunkX,r=e.chunkZ;for(let s=0;s<Ve;s++)for(let o=0;o<Ve;o++){const a=i*Ve+s,l=r*Ve+o,c=s+o*Ve,u=t[c],h=this.getHeight(a,l,u),d=Math.floor(h);for(let p=0;p<Un;p++){let v=U.AIR;p===0?v=U.BEDROCK:p<6?dl()(a*.1,p*.1,l*.1)>.55?v=U.LAVA:dl()(a*.15,p*.15,l*.15+100)>.65?v=U.GLOWSTONE:v=U.STONE:p<=d?this.isCave(a,p,l)?p<6?v=U.LAVA:v=U.AIR:(v=U.STONE,p===d?v=this.getSurfaceBlock(u):p>d-4&&(v=this.getSubSurfaceBlock(u)),v===U.STONE&&(v=this.getOre(a,p,l))):p<=Ir&&p>d&&(u===rt.TUNDRA?v=U.ICE:v=U.WATER),e.setBlock(s,p,o,v)}}e.dirty=!1}getHeight(e,t,i){const r=__(),s=Ir;let o=12;switch(i){case rt.PLAINS:o=12;break;case rt.DESERT:o=8;break;case rt.TUNDRA:o=4;break;case rt.MARSH:o=3;break;case rt.CRYSTAL_CAVERNS:o=10;break}const a=r(e*.005,t*.005)*o,l=r(e*.02,t*.02)*o*.3,c=r(e*.05,t*.05)*o*.1;return s+a+l+c}isCave(e,t,i){if(t<=0)return!1;const r=dl(),s=uC(),o=r(e*.04,t*.04,i*.04),a=s(e*.04+500,t*.04,i*.04+500);let l=o>.42&&a>.42;if(t<20){const c=1+(20-t)*.02,u=r(e*.04,t*.04*c,i*.04),h=s(e*.04+500,t*.04*c,i*.04+500);l=u>.35&&h>.35}return l}getSurfaceBlock(e){switch(e){case rt.PLAINS:return U.GRASS;case rt.DESERT:return U.SAND;case rt.TUNDRA:return U.SNOW;case rt.MARSH:return U.MUD;case rt.CRYSTAL_CAVERNS:return U.CRYSTAL;default:return U.GRASS}}getSubSurfaceBlock(e){switch(e){case rt.PLAINS:return U.DIRT;case rt.DESERT:return U.SANDSTONE;case rt.TUNDRA:return U.DIRT;case rt.MARSH:return U.MUD;case rt.CRYSTAL_CAVERNS:return U.STONE;default:return U.DIRT}}getOre(e,t,i){const r=dl();return t<50&&r(e*.15+1e3,t*.15,i*.15+1e3)>.75?U.COAL_ORE:t<40&&r(e*.15+2e3,t*.15,i*.15+2e3)>.82?U.IRON_ORE:t<25&&r(e*.15+3e3,t*.15,i*.15+3e3)>.9?U.GOLD_ORE:t<12&&r(e*.15+4e3,t*.15,i*.15+4e3)>.96?U.DIAMOND_ORE:U.STONE}generateChunkRaw(e,t,i){const r=new od(e,t);return this.generateChunk(r,i),r}}class hC{generateBiomeMap(e,t){const i=new Array(Ve*Ve),r=sg();for(let s=0;s<Ve;s++)for(let o=0;o<Ve;o++){const a=e*Ve+s,l=t*Ve+o,c=r(a*.002,l*.002),u=r(a*.003+5e3,l*.003+5e3);i[s+o*Ve]=this.getBiome(c,u)}return i}getBiome(e,t){return e<-.3?rt.TUNDRA:e>.4&&t<-.1?rt.DESERT:t>.35?rt.MARSH:e>.2&&t>0?rt.CRYSTAL_CAVERNS:rt.PLAINS}getBiomeAt(e,t){const i=sg(),r=i(e*.002,t*.002),s=i(e*.003+5e3,t*.003+5e3);return this.getBiome(r,s)}}class dC{generateStructures(e,t){const i=__(),r=e.chunkX,s=e.chunkZ;for(let o=2;o<Ve-2;o++)for(let a=2;a<Ve-2;a++){const l=r*Ve+o,c=s*Ve+a,u=t[o+a*Ve];let h=-1;for(let v=Un-1;v>=0;v--){const y=e.getBlock(o,v,a);if(y!==U.AIR&&y!==U.WATER&&y!==U.ICE){h=v;break}}if(h<1||h>Un-10)continue;const d=i(l*.5,c*.5),p=this.getTreeDensity(u);if(d>1-p*2)switch(u){case rt.PLAINS:this.placeOakTree(e,o,h+1,a);break;case rt.DESERT:this.placeCactus(e,o,h+1,a);break;case rt.TUNDRA:this.placeSpruceTree(e,o,h+1,a);break;case rt.CRYSTAL_CAVERNS:this.placeCrystalPillar(e,o,h+1,a);break}}}getTreeDensity(e){switch(e){case rt.PLAINS:return .02;case rt.DESERT:return .008;case rt.TUNDRA:return .01;case rt.MARSH:return 0;case rt.CRYSTAL_CAVERNS:return .012;default:return 0}}placeOakTree(e,t,i,r){const s=5+Math.floor(Math.random()*3);for(let a=0;a<s;a++)i+a<Un&&e.setBlock(t,i+a,r,U.WOOD);const o=s-3;for(let a=o;a<=s+1;a++){const l=a<=s-1?2:1;for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){if(c===0&&u===0&&a<s||Math.abs(c)+Math.abs(u)>l+1)continue;const h=t+c,d=i+a,p=r+u;h>=0&&h<Ve&&d>=0&&d<Un&&p>=0&&p<Ve&&e.getBlock(h,d,p)===U.AIR&&e.setBlock(h,d,p,U.LEAVES)}}}placeSpruceTree(e,t,i,r){const s=6+Math.floor(Math.random()*3);for(let o=0;o<s;o++)i+o<Un&&e.setBlock(t,i+o,r,U.SPRUCE_WOOD);for(let o=2;o<=s;o++){const a=s-o,l=Math.min(Math.floor(a/2)+1,2);for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){if(c===0&&u===0&&o<s)continue;const h=t+c,d=i+o,p=r+u;h>=0&&h<Ve&&d>=0&&d<Un&&p>=0&&p<Ve&&e.getBlock(h,d,p)===U.AIR&&e.setBlock(h,d,p,U.SPRUCE_LEAVES)}}}placeCactus(e,t,i,r){const s=2+Math.floor(Math.random()*3);for(let o=0;o<s;o++)i+o<Un&&e.setBlock(t,i+o,r,U.CACTUS)}placeCrystalPillar(e,t,i,r){const s=3+Math.floor(Math.random()*6);for(let o=0;o<s;o++)i+o<Un&&e.setBlock(t,i+o,r,U.CRYSTAL)}}class pC{chunks=new Map;terrainGenerator;biomeGenerator;structureGenerator;dirtyQueue=new Set;seed;constructor(e){this.seed=e,this.terrainGenerator=new fC(e),this.biomeGenerator=new hC,this.structureGenerator=new dC}chunkKey(e,t){return`${e},${t}`}getChunk(e,t){return this.chunks.get(this.chunkKey(e,t))}getBlock(e,t,i){const r=Math.floor(e/Ve),s=Math.floor(i/Ve),o=this.chunks.get(this.chunkKey(r,s));return o?o.getBlockWorld(e,t,i):0}setBlock(e,t,i,r){const s=Math.floor(e/Ve),o=Math.floor(i/Ve),a=this.chunks.get(this.chunkKey(s,o));if(!a)return;a.setBlockWorld(e,t,i,r),this.dirtyQueue.add(this.chunkKey(s,o));const l=e-s*Ve,c=i-o*Ve;l===0&&this.dirtyQueue.add(this.chunkKey(s-1,o)),l===Ve-1&&this.dirtyQueue.add(this.chunkKey(s+1,o)),c===0&&this.dirtyQueue.add(this.chunkKey(s,o-1)),c===Ve-1&&this.dirtyQueue.add(this.chunkKey(s,o+1))}getBiomeAt(e,t){return this.biomeGenerator.getBiomeAt(e,t)}update(e,t){const i=Math.floor(e/Ve),r=Math.floor(t/Ve);for(let l=-Ar;l<=Ar;l++)for(let c=-Ar;c<=Ar;c++){if(l*l+c*c>Ar*Ar)continue;const u=i+l,h=r+c,d=this.chunkKey(u,h);if(!this.chunks.has(d)){const p=new od(u,h),v=this.biomeGenerator.generateBiomeMap(u,h);this.terrainGenerator.generateChunk(p,v),this.structureGenerator.generateStructures(p,v),this.chunks.set(d,p),this.dirtyQueue.add(d)}}const s=Ar+2;for(const[l,c]of this.chunks){const u=c.chunkX-i,h=c.chunkZ-r;u*u+h*h>s*s&&(this.chunks.delete(l),this.dirtyQueue.delete(l))}const o=[];let a=0;for(const l of this.dirtyQueue){if(a>=YA)break;o.push(l),this.dirtyQueue.delete(l),a++}return o}getDirtyChunkKeys(){return this.dirtyQueue}markDirty(e,t){this.dirtyQueue.add(this.chunkKey(e,t))}getAllChunks(){return this.chunks}getTerrainGenerator(){return this.terrainGenerator}getBiomeGenerator(){return this.biomeGenerator}getSeed(){return this.seed}getNeighborVoxels(e,t){return[this.chunks.get(this.chunkKey(e+1,t))?.voxels??null,this.chunks.get(this.chunkKey(e-1,t))?.voxels??null,this.chunks.get(this.chunkKey(e,t+1))?.voxels??null,this.chunks.get(this.chunkKey(e,t-1))?.voxels??null]}}function og(n,e,t,i,r,s){return{minX:n-i,minY:e-r,minZ:t-s,maxX:n+i,maxY:e+r,maxZ:t+s}}function mC(n,e){return n.minX<e.maxX&&n.maxX>e.minX&&n.minY<e.maxY&&n.maxY>e.minY&&n.minZ<e.maxZ&&n.maxZ>e.minZ}function ad(n,e,t,i){const r=e.x,s=e.y,o=e.z;let a=Math.floor(n.x),l=Math.floor(n.y),c=Math.floor(n.z);const u=r>0?1:-1,h=s>0?1:-1,d=o>0?1:-1,p=r!==0?Math.abs(1/r):1/0,v=s!==0?Math.abs(1/s):1/0,y=o!==0?Math.abs(1/o):1/0;let m=r!==0?(r>0?a+1-n.x:n.x-a)*p:1/0,f=s!==0?(s>0?l+1-n.y:n.y-l)*v:1/0,g=o!==0?(o>0?c+1-n.z:n.z-c)*y:1/0,_=a,E=l,A=c,S=0;for(let T=0;T<t*3;T++){if(i(a,l,c))return{hit:!0,blockX:a,blockY:l,blockZ:c,prevX:_,prevY:E,prevZ:A,normalX:_-a,normalY:E-l,normalZ:A-c,distance:S};if(_=a,E=l,A=c,m<f)if(m<g){if(S=m,S>t)break;a+=u,m+=p}else{if(S=g,S>t)break;c+=d,g+=y}else if(f<g){if(S=f,S>t)break;l+=h,f+=v}else{if(S=g,S>t)break;c+=d,g+=y}}return{hit:!1,blockX:a,blockY:l,blockZ:c,prevX:_,prevY:E,prevZ:A,normalX:0,normalY:0,normalZ:0,distance:S}}class Xu{position={x:0,y:40,z:0};velocity={x:0,y:0,z:0};yaw=0;pitch=0;onGround=!1;isSwimming=!1;isSprinting=!1;isDiving=!1;inputAccel={x:0,y:0,z:0};getBlock;constructor(e){this.getBlock=e}getAABB(){return og(this.position.x,this.position.y+Qm/2,this.position.z,Zm/2,Qm/2,Zm/2)}getEyePosition(){return{x:this.position.x,y:this.position.y+Jm,z:this.position.z}}getLookDirection(){return{x:-Math.sin(this.yaw)*Math.cos(this.pitch),y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*Math.cos(this.pitch)}}static findSurfaceY(e,t,i){for(let s=0;s<=16;s++)for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++){if(Math.abs(o)!==s&&Math.abs(a)!==s&&s>0)continue;const l=Math.floor(t)+o,c=Math.floor(i)+a;for(let u=Ir+1;u<64;u++){const h=e(l,u,c);if(Yn(h)){const d=e(l,u+1,c),p=e(l,u+2,c);if(!Yn(d)&&!Yn(p))return u+1}}}for(let s=63;s>=0;s--){const o=e(Math.floor(t),s,Math.floor(i));if(Yn(o))return Math.max(s+1,Ir+1)}return Ir+2}static findLandSpawn(e,t,i){for(let s=0;s<=32;s++)for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++){if(Math.abs(o)!==s&&Math.abs(a)!==s&&s>0)continue;const l=Math.floor(t)+o,c=Math.floor(i)+a;for(let u=Ir+1;u<64;u++){const h=e(l,u,c);if(Yn(h)){const d=e(l,u+1,c),p=e(l,u+2,c);if(!Yn(d)&&!Yn(p))return{x:l+.5,y:u+1,z:c+.5}}}}return{x:t+.5,y:Ir+2,z:i+.5}}isInWater(e,t,i){return this.getBlock(Math.floor(e),Math.floor(t),Math.floor(i))===U.WATER}getWaterSurfaceY(){for(let e=63;e>=0;e--)if(this.getBlock(Math.floor(this.position.x),e,Math.floor(this.position.z))===U.WATER&&this.getBlock(Math.floor(this.position.x),e+1,Math.floor(this.position.z))!==U.WATER)return e+1;return-1/0}update(e){const t=this.position.y+.1,i=this.position.y+1,r=this.position.y+Jm,s=this.isInWater(this.position.x,t,this.position.z),o=this.isInWater(this.position.x,i,this.position.z),a=this.isInWater(this.position.x,r,this.position.z);this.isSwimming=o||a,this.isSwimming?this.updateSwimming(e,a):s?(this.velocity.y+=$m*e,this.velocity.y=Math.max(this.velocity.y,-50),this.velocity.x*=Math.max(0,1-1.5*e),this.velocity.z*=Math.max(0,1-1.5*e)):(this.velocity.y+=$m*e,this.velocity.y=Math.max(this.velocity.y,-50)),this.moveWithCollision(e)}updateSwimming(e,t){const i=this.getWaterSurfaceY(),r=4;this.velocity.x*=Math.max(0,1-r*e),this.velocity.y*=Math.max(0,1-r*e),this.velocity.z*=Math.max(0,1-r*e),this.velocity.x+=this.inputAccel.x*e,this.velocity.y+=this.inputAccel.y*e,this.velocity.z+=this.inputAccel.z*e;const s=i-this.position.y;if(s>0){const l=Math.min(12,4+s*2);this.velocity.y+=l*e}this.position.y>=i-.5&&this.velocity.y>0&&!t&&(this.velocity.y*=.8,this.position.y+this.velocity.y*e>i&&(this.velocity.y=Math.min(this.velocity.y,1)));const o=3.5,a=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z);a>o&&(this.velocity.x*=o/a,this.velocity.z*=o/a),this.velocity.y=Math.max(-5,Math.min(this.velocity.y,4)),this.onGround=!1}moveWithCollision(e){const t=this.velocity.x*e,i=this.velocity.y*e,r=this.velocity.z*e;this.position.x+=t,this.checkCollision()&&(this.tryStepUp(t,0,0)||(this.position.x-=t,this.velocity.x=0)),this.position.y+=i,this.checkCollision()?(this.position.y-=i,i<0&&(this.onGround=!0),this.velocity.y=0):this.isSwimming||(this.onGround=!1),this.position.z+=r,this.checkCollision()&&(this.tryStepUp(0,0,r)||(this.position.z-=r,this.velocity.z=0))}tryStepUp(e,t,i){if(Math.sqrt(e*e+i*i)<.001)return!1;const o=this.isInWater(this.position.x,this.position.y+.5,this.position.z)||this.isInWater(this.position.x,this.position.y+1.5,this.position.z)||this.isInWater(this.position.x,this.position.y-.5,this.position.z)?1.1:.6,a=this.position.y;return this.position.y+=o,this.checkCollision()?(this.position.y=a,!1):!0}checkCollision(){const e=this.getAABB(),t=Math.floor(e.minX),i=Math.floor(e.maxX),r=Math.floor(e.minY),s=Math.floor(e.maxY),o=Math.floor(e.minZ),a=Math.floor(e.maxZ);for(let l=t;l<=i;l++)for(let c=r;c<=s;c++)for(let u=o;u<=a;u++)if(Yn(this.getBlock(l,c,u))){const h=og(l+.5,c+.5,u+.5,.5,.5,.5);if(mC(e,h))return!0}return!1}jump(){this.isSwimming?this.velocity.y=3.5:this.onGround&&(this.velocity.y=8.5,this.onGround=!1)}dive(){this.isSwimming&&(this.velocity.y=-3.5)}}class gC{player;input;renderer;walkSpeed=4.317;sprintSpeed=5.612;swimSpeed=2.8;swimAccel=18;mouseSensitivity=.002;targetFov=75;currentFov=75;constructor(e,t,i){this.player=e,this.input=t,this.renderer=i,i.getDomElement().addEventListener("click",()=>{t.isPointerLocked()||t.requestPointerLock()})}update(e){this.input.isPointerLocked()&&(this.player.yaw-=this.input.getMouseDeltaX()*this.mouseSensitivity,this.player.pitch-=this.input.getMouseDeltaY()*this.mouseSensitivity,this.player.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.player.pitch))),this.player.isSprinting=this.input.isKeyDown("ShiftLeft")&&!this.player.isSwimming;const t={x:-Math.sin(this.player.yaw),z:-Math.cos(this.player.yaw)},i={x:Math.cos(this.player.yaw),z:-Math.sin(this.player.yaw)};let r=0,s=0;this.input.isKeyDown("KeyW")&&(r+=t.x,s+=t.z),this.input.isKeyDown("KeyS")&&(r-=t.x,s-=t.z),this.input.isKeyDown("KeyA")&&(r-=i.x,s-=i.z),this.input.isKeyDown("KeyD")&&(r+=i.x,s+=i.z);const o=Math.sqrt(r*r+s*s);if(this.player.isSwimming){o>0&&(r=r/o*this.swimAccel,s=s/o*this.swimAccel);let l=0;this.input.isKeyDown("Space")&&(l=this.swimAccel*.8),this.input.isKeyDown("ShiftLeft")&&(l=-this.swimAccel*.6),this.player.inputAccel={x:r,y:l,z:s}}else{const l=this.player.isSprinting?this.sprintSpeed:this.walkSpeed;o>0&&(r=r/o*l,s=s/o*l),this.player.velocity.x=r,this.player.velocity.z=s,this.player.inputAccel={x:0,y:0,z:0},this.input.isKeyDown("Space")&&this.player.jump()}this.targetFov=this.player.isSprinting?82:75,this.currentFov+=(this.targetFov-this.currentFov)*e*8,this.renderer.setFOV(this.currentFov);const a=this.player.getEyePosition();this.renderer.setMainCameraPosition(a.x,a.y,a.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch)}}class vC{player;input;renderer;headBobPhase=0;headBobAmplitude=.035;shakeIntensity=0;constructor(e,t,i){this.player=e,this.input=t,this.renderer=i}update(e){const t=this.player.velocity;if(Math.sqrt(t.x*t.x+t.z*t.z)>.5&&(this.player.onGround||this.player.isSwimming)){const s=this.player.isSprinting?11:8;this.headBobPhase+=e*s;const o=Math.sin(this.headBobPhase)*this.headBobAmplitude,a=Math.cos(this.headBobPhase*.5)*this.headBobAmplitude*.4,l=this.player.getEyePosition();this.renderer.setMainCameraPosition(l.x+a,l.y+o,l.z)}this.shakeIntensity*=.9}addShake(e){this.shakeIntensity=Math.min(this.shakeIntensity+e,.3)}}const ag={[U.GRASS]:[.3,.69,.31],[U.DIRT]:[.47,.33,.28],[U.STONE]:[.62,.62,.62],[U.SAND]:[.99,.85,.21],[U.SANDSTONE]:[.91,.78,.42],[U.SNOW]:[.98,.98,.98],[U.ICE]:[.7,.9,.99],[U.MUD]:[.31,.2,.18],[U.CRYSTAL]:[.48,.12,.64],[U.GLOWSTONE]:[1,.56,0],[U.WOOD]:[.43,.3,.25],[U.LEAVES]:[.18,.49,.2],[U.CACTUS]:[.18,.49,.2],[U.BEDROCK]:[.13,.13,.13],[U.COAL_ORE]:[.26,.26,.26],[U.IRON_ORE]:[.62,.62,.62],[U.GOLD_ORE]:[.62,.62,.62],[U.DIAMOND_ORE]:[.62,.62,.62],[U.SPRUCE_WOOD]:[.31,.2,.18],[U.SPRUCE_LEAVES]:[.11,.37,.13],[U.PACKED_ICE]:[.51,.83,.98],[U.PORTAL_FRAME]:[.42,.11,.6]};class _C{player;input;worldManager;survivalStats=null;particleSystem=null;itemDropManager=null;breakProgress=0;targetBlock=null;breakParticlesTimer=0;lastBreakBlockId=U.AIR;lastPlaceTime=0;constructor(e,t,i){this.player=e,this.input=t,this.worldManager=i}setSurvivalStats(e){this.survivalStats=e}setParticleSystem(e){this.particleSystem=e}setItemDropManager(e){this.itemDropManager=e}update(e){if(!this.input.isPointerLocked())return;const t=this.player.getEyePosition(),i=this.player.getLookDirection();if(this.targetBlock=ad(t,i,jA,(r,s,o)=>Yn(this.worldManager.getBlock(r,s,o))),this.input.isMouseButtonDown(0)&&this.targetBlock.hit){const r=this.worldManager.getBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ),s=rd[r];if(s&&s.hardness>0){if(r!==this.lastBreakBlockId&&(this.lastBreakBlockId=r),this.breakProgress+=e/s.hardness,this.breakParticlesTimer+=e,this.particleSystem&&this.breakParticlesTimer>.1){this.breakParticlesTimer=0;const o=ag[r]??[.5,.5,.5];this.particleSystem.emit(this.targetBlock.blockX+.5,this.targetBlock.blockY+.5,this.targetBlock.blockZ+.5,3,{speed:1.5,color:o,life:.6,size:.08,spread:.8})}this.breakProgress>=1&&(this.breakBlock(r),this.breakProgress=0)}}else this.breakProgress=0,this.breakParticlesTimer=0;if(this.input.isMouseButtonDown(2)&&this.targetBlock.hit){const r=performance.now()/1e3;r-this.lastPlaceTime>.25&&(this.placeBlock(),this.lastPlaceTime=r)}if(this.input.isKeyJustPressed("KeyE")&&this.targetBlock.hit&&this.placeBlock(),this.input.isKeyJustPressed("KeyF")&&this.targetBlock.hit&&this.worldManager.getBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ)===U.WATER&&this.survivalStats&&this.survivalStats.addThirst(15),this.input.isKeyJustPressed("KeyQ")){const r=fi.getState(),s=r.getSelectedItem();s&&this.itemDropManager&&(this.itemDropManager.dropItem(s.id,1,this.player.position.x,this.player.position.y+1.5,this.player.position.z,-Math.sin(this.player.yaw)*3,2,-Math.cos(this.player.yaw)*3),r.removeItem(r.selected,1))}}breakBlock(e){const t=this.targetBlock.blockX,i=this.targetBlock.blockY,r=this.targetBlock.blockZ;if(this.particleSystem){const s=ag[e]??[.5,.5,.5];this.particleSystem.emit(t+.5,i+.5,r+.5,20,{speed:3,color:s,life:.8,size:.12,spread:.5})}if(this.itemDropManager){const s=UA(e);this.itemDropManager.dropItems(s,t,i,r)}this.worldManager.setBlock(t,i,r,U.AIR)}placeBlock(){const e=fi.getState(),t=e.getSelectedItem();if(!t)return;const i=c_(t.id);if(!i||!i.isBlock||i.blockId===void 0)return;const r=this.targetBlock.prevX,s=this.targetBlock.prevY,o=this.targetBlock.prevZ,a=this.player.getAABB(),l={minX:r,minY:s,minZ:o,maxX:r+1,maxY:s+1,maxZ:o+1};(a.maxX<l.minX||a.minX>l.maxX||a.maxY<l.minY||a.minY>l.maxY||a.maxZ<l.minZ||a.minZ>l.maxZ)&&(this.worldManager.setBlock(r,s,o,i.blockId),e.removeItem(e.selected,1),this.particleSystem&&this.particleSystem.emit(r+.5,s+.5,o+.5,8,{speed:1,color:[.8,.8,.8],life:.4,size:.06,spread:.6}))}getBreakProgress(){return this.breakProgress}getTargetBlock(){return this.targetBlock}}class yC{health=100;hunger=100;thirst=100;stamina=100;temperature=.2;mana=100;maxMana=100;isDead=!1;currentBiome=rt.PLAINS;isSprinting=!1;update(e){if(this.isDead)return;this.hunger-=1*e/60,this.thirst-=1.5*e/60,this.isSprinting?this.stamina-=20*e:this.stamina+=10*e;const t=u_[this.currentBiome].temperature;this.temperature+=(t-this.temperature)*e*.1,this.mana=Math.min(this.maxMana,this.mana+5*e),this.hunger=Math.max(0,Math.min(100,this.hunger)),this.thirst=Math.max(0,Math.min(100,this.thirst)),this.stamina=Math.max(0,Math.min(100,this.stamina)),this.hunger<20&&(this.health-=2*e),this.thirst<20&&(this.health-=2*e),this.health=Math.max(0,Math.min(100,this.health)),this.health<=0&&(this.isDead=!0)}setBiome(e){this.currentBiome=e}setSprinting(e){this.isSprinting=e}canSprint(){return this.stamina>=5}addThirst(e){this.thirst=Math.min(100,this.thirst+e)}addHealth(e){this.health=Math.min(100,this.health+e)}respawn(){this.health=100,this.hunger=100,this.thirst=100,this.stamina=100,this.isDead=!1}}var Pt=(n=>(n[n.IDLE=0]="IDLE",n[n.WANDER=1]="WANDER",n[n.CHASE=2]="CHASE",n[n.ATTACK=3]="ATTACK",n[n.DEAD=4]="DEAD",n))(Pt||{}),Tt=(n=>(n[n.CRAWLER=0]="CRAWLER",n[n.SLIME=1]="SLIME",n[n.ASH_WRAITH=2]="ASH_WRAITH",n[n.CRYSTAL_GOLEM=3]="CRYSTAL_GOLEM",n[n.FROST_WOLF=4]="FROST_WOLF",n))(Tt||{});const lg={0:{maxHp:20,attackDamage:6,attackCooldown:1,wanderSpeed:1.5,chaseSpeed:4,aggroRange:16,deaggroRange:24,hitboxWidth:.6,hitboxHeight:.4},1:{maxHp:16,attackDamage:4,attackCooldown:1.5,wanderSpeed:1,chaseSpeed:3,aggroRange:12,deaggroRange:20,hitboxWidth:.8,hitboxHeight:.8},2:{maxHp:40,attackDamage:12,attackCooldown:1.2,wanderSpeed:2,chaseSpeed:5.5,aggroRange:20,deaggroRange:30,hitboxWidth:.6,hitboxHeight:1.6},3:{maxHp:80,attackDamage:20,attackCooldown:2,wanderSpeed:.8,chaseSpeed:2.5,aggroRange:14,deaggroRange:22,hitboxWidth:1,hitboxHeight:2},4:{maxHp:35,attackDamage:10,attackCooldown:.8,wanderSpeed:3,chaseSpeed:7,aggroRange:20,deaggroRange:32,hitboxWidth:.7,hitboxHeight:.8}};class ga{type;hp;maxHp;state=Pt.IDLE;position;target={x:0,y:0,z:0};instanceId=-1;stateTimer=0;attackCooldownTimer=0;deadTimer=0;constructor(e,t){this.type=e;const i=lg[e];this.hp=i.maxHp,this.maxHp=i.maxHp,this.position={...t},this.stateTimer=3+Math.random()*5}updateFSM(e,t,i){if(this.state===Pt.DEAD){this.deadTimer+=e;return}const r=lg[this.type],s=Math.sqrt((this.position.x-t.x)**2+(this.position.y-t.y)**2+(this.position.z-t.z)**2);switch(this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-e),this.stateTimer-=e,this.state){case Pt.IDLE:this.stateTimer<=0&&(this.state=Pt.WANDER,this.stateTimer=3+Math.random()*5,this.target={x:this.position.x+(Math.random()-.5)*10,y:this.position.y,z:this.position.z+(Math.random()-.5)*10}),s<r.aggroRange&&i(this.position,t)&&(this.state=Pt.CHASE);break;case Pt.WANDER:this.stateTimer<=0&&(this.state=Pt.IDLE,this.stateTimer=2+Math.random()*6),s<r.aggroRange&&i(this.position,t)&&(this.state=Pt.CHASE);break;case Pt.CHASE:this.target={...t},s<1.5&&(this.state=Pt.ATTACK),s>r.deaggroRange&&(this.state=Pt.WANDER,this.stateTimer=3+Math.random()*4,this.target={x:this.position.x+(Math.random()-.5)*10,y:this.position.y,z:this.position.z+(Math.random()-.5)*10});break;case Pt.ATTACK:this.attackCooldownTimer<=0&&(this.attackCooldownTimer=this.getAttackCooldown(),this.state=Pt.CHASE),s>2&&(this.state=Pt.CHASE);break}this.hp<=0&&(this.state=Pt.DEAD,this.deadTimer=0)}getSpeed(){switch(this.state){case Pt.WANDER:return this.getWanderSpeed();case Pt.CHASE:return this.getChaseSpeed();default:return 0}}takeDamage(e){this.hp-=e,this.hp<=0&&(this.hp=0,this.state=Pt.DEAD,this.deadTimer=0)}}class SC extends ga{constructor(e){super(Tt.CRAWLER,e)}getAttackDamage(){return 6}getAttackCooldown(){return 1}getWanderSpeed(){return 1.5}getChaseSpeed(){return 4}onDeath(){}}class xC extends ga{constructor(e){super(Tt.SLIME,e)}getAttackDamage(){return 4}getAttackCooldown(){return 1.5}getWanderSpeed(){return 1}getChaseSpeed(){return 3}onDeath(){}}class EC extends ga{constructor(e){super(Tt.ASH_WRAITH,e)}getAttackDamage(){return 12}getAttackCooldown(){return 1.2}getWanderSpeed(){return 2}getChaseSpeed(){return 5.5}onDeath(){}}class MC extends ga{constructor(e){super(Tt.CRYSTAL_GOLEM,e)}getAttackDamage(){return 20}getAttackCooldown(){return 2}getWanderSpeed(){return .8}getChaseSpeed(){return 2.5}onDeath(){}}class TC extends ga{constructor(e){super(Tt.FROST_WOLF,e)}getAttackDamage(){return 10}getAttackCooldown(){return .8}getWanderSpeed(){return 3}getChaseSpeed(){return 7}onDeath(){}}class ld{static table={[Tt.CRAWLER]:[{itemId:P.STICK,minCount:1,maxCount:3,chance:.5},{itemId:P.COAL,minCount:1,maxCount:2,chance:.3}],[Tt.SLIME]:[{itemId:P.SLIME_BALL,minCount:1,maxCount:2,chance:1}],[Tt.ASH_WRAITH]:[{itemId:P.ASH,minCount:2,maxCount:4,chance:.4},{itemId:P.GOLD_INGOT,minCount:1,maxCount:1,chance:.25}],[Tt.CRYSTAL_GOLEM]:[{itemId:P.CRYSTAL_SHARD,minCount:3,maxCount:6,chance:.7},{itemId:P.DIAMOND,minCount:1,maxCount:1,chance:.2}],[Tt.FROST_WOLF]:[{itemId:P.LEATHER,minCount:1,maxCount:2,chance:.6},{itemId:P.RAW_MEAT,minCount:1,maxCount:2,chance:.5}]};static rollLoot(e){const t=ld.table[e]||[],i=[];for(const r of t)if(Math.random()<r.chance){const s=r.minCount+Math.floor(Math.random()*(r.maxCount-r.minCount+1));i.push({itemId:r.itemId,count:s})}return i}}class wC{creatures=[];frameCount=0;instancedMeshes=new Map;getBlock;playerPos={x:0,y:0,z:0};onLootDrop=null;constructor(e,t){this.getBlock=t;const i={[Tt.CRAWLER]:5025616,[Tt.SLIME]:7798531,[Tt.ASH_WRAITH]:16733986,[Tt.CRYSTAL_GOLEM]:10233776,[Tt.FROST_WOLF]:9489145};for(const r of[Tt.CRAWLER,Tt.SLIME,Tt.ASH_WRAITH,Tt.CRYSTAL_GOLEM,Tt.FROST_WOLF]){const s=new Zr(.6,.6,.6),o=new id({color:i[r]}),a=new td(s,o,eg);a.count=0,a.frustumCulled=!1,e.add(a),this.instancedMeshes.set(r,a)}}setPlayerPosition(e){this.playerPos=e}setOnLootDrop(e){this.onLootDrop=e}spawnCreature(e,t){if(this.creatures.length>=eg*5)return;let i;switch(e){case Tt.CRAWLER:i=new SC(t);break;case Tt.SLIME:i=new xC(t);break;case Tt.ASH_WRAITH:i=new EC(t);break;case Tt.CRYSTAL_GOLEM:i=new MC(t);break;case Tt.FROST_WOLF:i=new TC(t);break;default:return}this.creatures.push(i)}update(e){this.frameCount++;const t=this.frameCount%KA===0,i=(r,s)=>{const o={x:s.x-r.x,y:s.y-r.y,z:s.z-r.z},a=Math.sqrt(o.x*o.x+o.y*o.y+o.z*o.z);return a===0?!0:(o.x/=a,o.y/=a,o.z/=a,!ad(r,o,a,(c,u,h)=>Yn(this.getBlock(c,u,h))).hit)};for(let r=this.creatures.length-1;r>=0;r--){const s=this.creatures[r];t&&s.updateFSM(e,this.playerPos,i);const o=s.getSpeed()*e;if(o>0&&s.state!==Pt.DEAD&&s.state!==Pt.IDLE){const a=s.target.x-s.position.x,l=s.target.z-s.position.z,c=Math.sqrt(a*a+l*l);c>.5&&(s.position.x+=a/c*o,s.position.z+=l/c*o)}if(s.state===Pt.DEAD&&s.deadTimer>.5){const a=ld.rollLoot(s.type);if(this.onLootDrop)for(const l of a)this.onLootDrop(l.itemId,l.count);s.onDeath(),this.creatures.splice(r,1)}}this.updateInstancedMeshes()}updateInstancedMeshes(){const e=new Ht;for(const[t,i]of this.instancedMeshes){const r=this.creatures.filter(s=>s.type===t&&s.state!==Pt.DEAD);i.count=r.length;for(let s=0;s<r.length;s++){const o=r[s];if(e.position.set(o.position.x,o.position.y,o.position.z),o.state===Pt.DEAD){const a=Math.max(0,1-o.deadTimer*2);e.scale.set(1,a,1)}else e.scale.set(1,1,1);e.updateMatrix(),i.setMatrixAt(s,e.matrix)}i.instanceMatrix.needsUpdate=!0}}getCreatures(){return this.creatures}getCreatureAt(e,t,i){for(const r of this.creatures){const s=r.position.x-e,o=r.position.z-t;if(s*s+o*o<i*i)return r}return null}}const AC={[U.GRASS]:5025616,[U.DIRT]:7951688,[U.STONE]:10395294,[U.SAND]:16635957,[U.SANDSTONE]:15255658,[U.SNOW]:16448250,[U.ICE]:11789820,[U.MUD]:5125166,[U.CRYSTAL]:8069026,[U.GLOWSTONE]:16748288,[U.WOOD]:7162945,[U.LEAVES]:3046706,[U.CACTUS]:3046706,[U.BEDROCK]:2171169,[U.COAL_ORE]:4342338,[U.IRON_ORE]:15255658,[U.GOLD_ORE]:16766720,[U.DIAMOND_ORE]:48340,[U.SPRUCE_WOOD]:5125166,[U.SPRUCE_LEAVES]:1793568,[U.PACKED_ICE]:8508666,100:12632256,101:8947848,102:5592405,103:10233776,104:8069026,105:48340,106:16766720,113:9268835,114:7162945,115:16739584,116:7162945,117:4342338,118:16739584,119:9268835,120:7798531,121:16733986,122:10233776};class CC{items=[];scene;instancedMesh;dummy;maxItems=200;pickupRadius=1.8;pickupDelay=.5;maxLife=300;onItemPickup=null;getBlock;constructor(e,t){this.scene=e,this.getBlock=t,this.dummy=new Ht;const i=new Zr(.3,.3,.3),r=new id({color:16777215});this.instancedMesh=new td(i,r,this.maxItems),this.instancedMesh.count=0,this.instancedMesh.frustumCulled=!1,this.instancedMesh.instanceColor=new $f(new Float32Array(this.maxItems*3),3),e.add(this.instancedMesh)}setOnItemPickup(e){this.onItemPickup=e}dropItem(e,t,i,r,s,o=0,a=0,l=0){this.items.length>=this.maxItems&&this.items.shift();const c=1.5,u=o+(Math.random()-.5)*c,h=a+Math.random()*2+1,d=l+(Math.random()-.5)*c;this.items.push({id:e,count:t,position:new G(i,r,s),velocity:new G(u,h,d),spawnTime:performance.now()/1e3,life:0,collected:!1})}dropItems(e,t,i,r){for(const s of e)this.dropItem(s.id,s.count,t+.5,i+.5,r+.5)}update(e,t,i,r){for(let o=this.items.length-1;o>=0;o--){const a=this.items[o];if(a.life+=e,a.life>this.maxLife){this.items.splice(o,1);continue}a.velocity.y+=-18*e,a.position.x+=a.velocity.x*e,a.position.y+=a.velocity.y*e,a.position.z+=a.velocity.z*e;const l=this.getGroundY(a.position.x,a.position.y,a.position.z);if(a.position.y<l+.15&&(a.position.y=l+.15,a.velocity.y=0,a.velocity.x*=.9,a.velocity.z*=.9),a.velocity.x*=1-2*e,a.velocity.z*=1-2*e,a.life>this.pickupDelay&&!a.collected){const c=a.position.x-t,u=a.position.y-i,h=a.position.z-r,d=Math.sqrt(c*c+u*u+h*h);if(d<this.pickupRadius)if(d>.3)a.position.x-=c/d*8*e,a.position.y-=u/d*8*e,a.position.z-=h/d*8*e;else{a.collected=!0,this.onItemPickup&&this.onItemPickup(a.id,a.count),this.items.splice(o,1);continue}}}for(let o=0;o<this.items.length;o++){const a=this.items[o],l=Math.sin(a.life*3+o)*.05,c=a.life*2;this.dummy.position.set(a.position.x,a.position.y+l,a.position.z),this.dummy.rotation.set(0,c,0),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(o,this.dummy.matrix);const u=new Te(AC[a.id]??6710886);this.instancedMesh.instanceColor.setXYZ(o,u.r,u.g,u.b)}this.instancedMesh.count=this.items.length,this.instancedMesh.count>0&&(this.instancedMesh.instanceMatrix.needsUpdate=!0,this.instancedMesh.instanceColor.needsUpdate=!0)}getGroundY(e,t,i){const r=Math.floor(e),s=Math.floor(i);for(let o=Math.floor(t);o>=0;o--){const a=this.getBlock(r,o,s);if(a!==0&&a!==U.WATER&&a!==U.LAVA&&a!==U.AIR&&a!==U.LILY_PAD&&a!==U.PORTAL_ACTIVE)return o+1}return 0}getItemCount(){return this.items.length}}class RC{bullets=[];mesh;ringIndex=0;constructor(e){const t=new Rc(.05,4,4),i=new Zh({color:16739584});this.mesh=new td(t,i,Gu),this.mesh.count=0,this.mesh.frustumCulled=!1,e.add(this.mesh);for(let r=0;r<Gu;r++)this.bullets.push({x:0,y:-1e3,z:0,vx:0,vy:0,vz:0,alive:!1,life:0})}fire(e,t,i=80){const r=this.bullets[this.ringIndex];r.x=e.x,r.y=e.y,r.z=e.z,r.vx=t.x*i,r.vy=t.y*i,r.vz=t.z*i,r.alive=!0,r.life=3,this.ringIndex=(this.ringIndex+1)%Gu}update(e,t){const i=new Ht;let r=0;for(const s of this.bullets)if(s.alive){if(s.life-=e,s.life<=0){s.alive=!1;continue}if(s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,t(s.x,s.y,s.z)){s.alive=!1;continue}i.position.set(s.x,s.y,s.z),i.updateMatrix(),this.mesh.setMatrixAt(r,i.matrix),r++}this.mesh.count=r,r>0&&(this.mesh.instanceMatrix.needsUpdate=!0)}getActiveBullets(){return this.bullets.filter(e=>e.alive)}}const bC={name:"Fist",type:"melee",damage:5,range:2.5,cooldown:.8,ammoPerShot:0,manaCost:0};class LC{currentWeapon=bC;cooldownTimer=0;input;player;bulletPool;particleSystem;renderer;weaponBobPhase=0;weaponMesh=null;constructor(e,t,i,r,s){this.input=e,this.player=t,this.bulletPool=i,this.particleSystem=r,this.renderer=s}equip(e){this.currentWeapon=e}update(e,t){this.cooldownTimer=Math.max(0,this.cooldownTimer-e),this.input.isMouseButtonDown(0)&&this.cooldownTimer<=0&&this.attack(t);const i=this.player.velocity;if(Math.sqrt(i.x*i.x+i.z*i.z)>.5&&this.player.onGround){this.weaponBobPhase+=e*8;const s=Math.sin(this.weaponBobPhase)*.03,o=Math.cos(this.weaponBobPhase*.5)*.02;this.renderer.weaponCamera.position.set(.3+o,-.3+s,-.5)}else this.renderer.weaponCamera.position.set(.3,-.3,-.5)}attack(e){this.cooldownTimer=this.currentWeapon.cooldown;const t=this.player.getEyePosition(),i=this.player.getLookDirection();switch(this.currentWeapon.type){case"melee":this.meleeAttack(t,i,e);break;case"hitscan":this.hitscanAttack(t,i,e);break;case"magic":this.magicAttack(t,i);break}}meleeAttack(e,t,i){const r=ad(e,t,this.currentWeapon.range,(s,o,a)=>Yn(i(s,o,a)));r.hit&&this.particleSystem.emit(r.blockX+.5,r.blockY+.5,r.blockZ+.5,5,{speed:1,color:[.7,.7,.7],life:.3})}hitscanAttack(e,t,i){this.bulletPool.fire(e,t),this.particleSystem.emit(e.x,e.y,e.z,3,{speed:.5,color:[1,.5,0],life:.1,size:.05})}magicAttack(e,t){this.particleSystem.emit(e.x+t.x,e.y+t.y,e.z+t.z,40,{speed:5,color:[.6,.2,1],life:1.5,size:.1,spread:.3})}getCurrentWeapon(){return this.currentWeapon}getCooldownProgress(){return 1-this.cooldownTimer/this.currentWeapon.cooldown}}class PC{entityManager;player;survivalStats;bulletPool;constructor(e,t,i,r){this.entityManager=e,this.player=t,this.survivalStats=i,this.bulletPool=r}update(e){const t=this.entityManager.getCreatures();for(const r of t){if(r.state!==2)continue;const s=r.position.x-this.player.position.x,o=r.position.z-this.player.position.z;Math.sqrt(s*s+o*o)<1.5&&r.attackCooldownTimer<=0&&this.survivalStats.addHealth(-r.getAttackDamage())}const i=this.bulletPool.getActiveBullets();for(const r of i)for(const s of t){if(s.state===4)continue;const o=s.position.x-r.x,a=s.position.y-r.y,l=s.position.z-r.z;if(Math.sqrt(o*o+a*a+l*l)<1){s.takeDamage(30),r.alive=!1;break}}}}function pl(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var y_={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,s){function o(c,u){if(!r[c]){if(!i[c]){var h=typeof pl=="function"&&pl;if(!u&&h)return h(c,!0);if(a)return a(c,!0);var d=new Error("Cannot find module '"+c+"'");throw d.code="MODULE_NOT_FOUND",d}var p=r[c]={exports:{}};i[c][0].call(p.exports,function(v){var y=i[c][1][v];return o(y||v)},p,p.exports,t,i,r,s)}return r[c].exports}for(var a=typeof pl=="function"&&pl,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(t,i,r){(function(s){var o=s.MutationObserver||s.WebKitMutationObserver,a;if(o){var l=0,c=new o(v),u=s.document.createTextNode("");c.observe(u,{characterData:!0}),a=function(){u.data=l=++l%2}}else if(!s.setImmediate&&typeof s.MessageChannel<"u"){var h=new s.MessageChannel;h.port1.onmessage=v,a=function(){h.port2.postMessage(0)}}else"document"in s&&"onreadystatechange"in s.document.createElement("script")?a=function(){var m=s.document.createElement("script");m.onreadystatechange=function(){v(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},s.document.documentElement.appendChild(m)}:a=function(){setTimeout(v,0)};var d,p=[];function v(){d=!0;for(var m,f,g=p.length;g;){for(f=p,p=[],m=-1;++m<g;)f[m]();g=p.length}d=!1}i.exports=y;function y(m){p.push(m)===1&&!d&&a()}}).call(this,typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,i,r){var s=t(1);function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];i.exports=h;function h(A){if(typeof A!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,A!==o&&y(this,A)}h.prototype.catch=function(A){return this.then(null,A)},h.prototype.then=function(A,S){if(typeof A!="function"&&this.state===c||typeof S!="function"&&this.state===l)return this;var T=new this.constructor(o);if(this.state!==u){var O=this.state===c?A:S;p(T,O,this.outcome)}else this.queue.push(new d(T,A,S));return T};function d(A,S,T){this.promise=A,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}d.prototype.callFulfilled=function(A){a.resolve(this.promise,A)},d.prototype.otherCallFulfilled=function(A){p(this.promise,this.onFulfilled,A)},d.prototype.callRejected=function(A){a.reject(this.promise,A)},d.prototype.otherCallRejected=function(A){p(this.promise,this.onRejected,A)};function p(A,S,T){s(function(){var O;try{O=S(T)}catch(M){return a.reject(A,M)}O===A?a.reject(A,new TypeError("Cannot resolve promise with itself")):a.resolve(A,O)})}a.resolve=function(A,S){var T=m(v,S);if(T.status==="error")return a.reject(A,T.value);var O=T.value;if(O)y(A,O);else{A.state=c,A.outcome=S;for(var M=-1,C=A.queue.length;++M<C;)A.queue[M].callFulfilled(S)}return A},a.reject=function(A,S){A.state=l,A.outcome=S;for(var T=-1,O=A.queue.length;++T<O;)A.queue[T].callRejected(S);return A};function v(A){var S=A&&A.then;if(A&&(typeof A=="object"||typeof A=="function")&&typeof S=="function")return function(){S.apply(A,arguments)}}function y(A,S){var T=!1;function O(Z){T||(T=!0,a.reject(A,Z))}function M(Z){T||(T=!0,a.resolve(A,Z))}function C(){S(M,O)}var V=m(C);V.status==="error"&&O(V.value)}function m(A,S){var T={};try{T.value=A(S),T.status="success"}catch(O){T.status="error",T.value=O}return T}h.resolve=f;function f(A){return A instanceof this?A:a.resolve(new this(o),A)}h.reject=g;function g(A){var S=new this(o);return a.reject(S,A)}h.all=_;function _(A){var S=this;if(Object.prototype.toString.call(A)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=A.length,O=!1;if(!T)return this.resolve([]);for(var M=new Array(T),C=0,V=-1,Z=new this(o);++V<T;)oe(A[V],V);return Z;function oe(F,W){S.resolve(F).then(te,function(se){O||(O=!0,a.reject(Z,se))});function te(se){M[W]=se,++C===T&&!O&&(O=!0,a.resolve(Z,M))}}}h.race=E;function E(A){var S=this;if(Object.prototype.toString.call(A)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=A.length,O=!1;if(!T)return this.resolve([]);for(var M=-1,C=new this(o);++M<T;)V(A[M]);return C;function V(Z){S.resolve(Z).then(function(oe){O||(O=!0,a.resolve(C,oe))},function(oe){O||(O=!0,a.reject(C,oe))})}}},{1:1}],3:[function(t,i,r){(function(s){typeof s.Promise!="function"&&(s.Promise=t(2))}).call(this,typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(t,i,r){var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x};function o(x,D){if(!(x instanceof D))throw new TypeError("Cannot call a class as a function")}function a(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var l=a();function c(){try{if(!l||!l.open)return!1;var x=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),D=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!x||D)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function u(x,D){x=x||[],D=D||{};try{return new Blob(x,D)}catch(I){if(I.name!=="TypeError")throw I;for(var b=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,k=new b,z=0;z<x.length;z+=1)k.append(x[z]);return k.getBlob(D.type)}}typeof Promise>"u"&&t(3);var h=Promise;function d(x,D){D&&x.then(function(b){D(null,b)},function(b){D(b)})}function p(x,D,b){typeof D=="function"&&x.then(D),typeof b=="function"&&x.catch(b)}function v(x){return typeof x!="string"&&(console.warn(x+" used as a key, but it is not a string."),x=String(x)),x}function y(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var m="local-forage-detect-blob-support",f=void 0,g={},_=Object.prototype.toString,E="readonly",A="readwrite";function S(x){for(var D=x.length,b=new ArrayBuffer(D),k=new Uint8Array(b),z=0;z<D;z++)k[z]=x.charCodeAt(z);return b}function T(x){return new h(function(D){var b=x.transaction(m,A),k=u([""]);b.objectStore(m).put(k,"key"),b.onabort=function(z){z.preventDefault(),z.stopPropagation(),D(!1)},b.oncomplete=function(){var z=navigator.userAgent.match(/Chrome\/(\d+)/),I=navigator.userAgent.match(/Edge\//);D(I||!z||parseInt(z[1],10)>=43)}}).catch(function(){return!1})}function O(x){return typeof f=="boolean"?h.resolve(f):T(x).then(function(D){return f=D,f})}function M(x){var D=g[x.name],b={};b.promise=new h(function(k,z){b.resolve=k,b.reject=z}),D.deferredOperations.push(b),D.dbReady?D.dbReady=D.dbReady.then(function(){return b.promise}):D.dbReady=b.promise}function C(x){var D=g[x.name],b=D.deferredOperations.pop();if(b)return b.resolve(),b.promise}function V(x,D){var b=g[x.name],k=b.deferredOperations.pop();if(k)return k.reject(D),k.promise}function Z(x,D){return new h(function(b,k){if(g[x.name]=g[x.name]||le(),x.db)if(D)M(x),x.db.close();else return b(x.db);var z=[x.name];D&&z.push(x.version);var I=l.open.apply(l,z);D&&(I.onupgradeneeded=function(ne){var ue=I.result;try{ue.createObjectStore(x.storeName),ne.oldVersion<=1&&ue.createObjectStore(m)}catch(ce){if(ce.name==="ConstraintError")console.warn('The database "'+x.name+'" has been upgraded from version '+ne.oldVersion+" to version "+ne.newVersion+', but the storage "'+x.storeName+'" already exists.');else throw ce}}),I.onerror=function(ne){ne.preventDefault(),k(I.error)},I.onsuccess=function(){var ne=I.result;ne.onversionchange=function(ue){ue.target.close()},b(ne),C(x)}})}function oe(x){return Z(x,!1)}function F(x){return Z(x,!0)}function W(x,D){if(!x.db)return!0;var b=!x.db.objectStoreNames.contains(x.storeName),k=x.version<x.db.version,z=x.version>x.db.version;if(k&&(x.version!==D&&console.warn('The database "'+x.name+`" can't be downgraded from version `+x.db.version+" to version "+x.version+"."),x.version=x.db.version),z||b){if(b){var I=x.db.version+1;I>x.version&&(x.version=I)}return!0}return!1}function te(x){return new h(function(D,b){var k=new FileReader;k.onerror=b,k.onloadend=function(z){var I=btoa(z.target.result||"");D({__local_forage_encoded_blob:!0,data:I,type:x.type})},k.readAsBinaryString(x)})}function se(x){var D=S(atob(x.data));return u([D],{type:x.type})}function B(x){return x&&x.__local_forage_encoded_blob}function X(x){var D=this,b=D._initReady().then(function(){var k=g[D._dbInfo.name];if(k&&k.dbReady)return k.dbReady});return p(b,x,x),b}function j(x){M(x);for(var D=g[x.name],b=D.forages,k=0;k<b.length;k++){var z=b[k];z._dbInfo.db&&(z._dbInfo.db.close(),z._dbInfo.db=null)}return x.db=null,oe(x).then(function(I){return x.db=I,W(x)?F(x):I}).then(function(I){x.db=D.db=I;for(var ne=0;ne<b.length;ne++)b[ne]._dbInfo.db=I}).catch(function(I){throw V(x,I),I})}function ie(x,D,b,k){k===void 0&&(k=1);try{var z=x.db.transaction(x.storeName,D);b(null,z)}catch(I){if(k>0&&(!x.db||I.name==="InvalidStateError"||I.name==="NotFoundError"))return h.resolve().then(function(){if(!x.db||I.name==="NotFoundError"&&!x.db.objectStoreNames.contains(x.storeName)&&x.version<=x.db.version)return x.db&&(x.version=x.db.version+1),F(x)}).then(function(){return j(x).then(function(){ie(x,D,b,k-1)})}).catch(b);b(I)}}function le(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function J(x){var D=this,b={db:null};if(x)for(var k in x)b[k]=x[k];var z=g[b.name];z||(z=le(),g[b.name]=z),z.forages.push(D),D._initReady||(D._initReady=D.ready,D.ready=X);var I=[];function ne(){return h.resolve()}for(var ue=0;ue<z.forages.length;ue++){var ce=z.forages[ue];ce!==D&&I.push(ce._initReady().catch(ne))}var pe=z.forages.slice(0);return h.all(I).then(function(){return b.db=z.db,oe(b)}).then(function(_e){return b.db=_e,W(b,D._defaultConfig.version)?F(b):_e}).then(function(_e){b.db=z.db=_e,D._dbInfo=b;for(var De=0;De<pe.length;De++){var st=pe[De];st!==D&&(st._dbInfo.db=b.db,st._dbInfo.version=b.version)}})}function ae(x,D){var b=this;x=v(x);var k=new h(function(z,I){b.ready().then(function(){ie(b._dbInfo,E,function(ne,ue){if(ne)return I(ne);try{var ce=ue.objectStore(b._dbInfo.storeName),pe=ce.get(x);pe.onsuccess=function(){var _e=pe.result;_e===void 0&&(_e=null),B(_e)&&(_e=se(_e)),z(_e)},pe.onerror=function(){I(pe.error)}}catch(_e){I(_e)}})}).catch(I)});return d(k,D),k}function ye(x,D){var b=this,k=new h(function(z,I){b.ready().then(function(){ie(b._dbInfo,E,function(ne,ue){if(ne)return I(ne);try{var ce=ue.objectStore(b._dbInfo.storeName),pe=ce.openCursor(),_e=1;pe.onsuccess=function(){var De=pe.result;if(De){var st=De.value;B(st)&&(st=se(st));var dt=x(st,De.key,_e++);dt!==void 0?z(dt):De.continue()}else z()},pe.onerror=function(){I(pe.error)}}catch(De){I(De)}})}).catch(I)});return d(k,D),k}function we(x,D,b){var k=this;x=v(x);var z=new h(function(I,ne){var ue;k.ready().then(function(){return ue=k._dbInfo,_.call(D)==="[object Blob]"?O(ue.db).then(function(ce){return ce?D:te(D)}):D}).then(function(ce){ie(k._dbInfo,A,function(pe,_e){if(pe)return ne(pe);try{var De=_e.objectStore(k._dbInfo.storeName);ce===null&&(ce=void 0);var st=De.put(ce,x);_e.oncomplete=function(){ce===void 0&&(ce=null),I(ce)},_e.onabort=_e.onerror=function(){var dt=st.error?st.error:st.transaction.error;ne(dt)}}catch(dt){ne(dt)}})}).catch(ne)});return d(z,b),z}function Ce(x,D){var b=this;x=v(x);var k=new h(function(z,I){b.ready().then(function(){ie(b._dbInfo,A,function(ne,ue){if(ne)return I(ne);try{var ce=ue.objectStore(b._dbInfo.storeName),pe=ce.delete(x);ue.oncomplete=function(){z()},ue.onerror=function(){I(pe.error)},ue.onabort=function(){var _e=pe.error?pe.error:pe.transaction.error;I(_e)}}catch(_e){I(_e)}})}).catch(I)});return d(k,D),k}function We(x){var D=this,b=new h(function(k,z){D.ready().then(function(){ie(D._dbInfo,A,function(I,ne){if(I)return z(I);try{var ue=ne.objectStore(D._dbInfo.storeName),ce=ue.clear();ne.oncomplete=function(){k()},ne.onabort=ne.onerror=function(){var pe=ce.error?ce.error:ce.transaction.error;z(pe)}}catch(pe){z(pe)}})}).catch(z)});return d(b,x),b}function Ye(x){var D=this,b=new h(function(k,z){D.ready().then(function(){ie(D._dbInfo,E,function(I,ne){if(I)return z(I);try{var ue=ne.objectStore(D._dbInfo.storeName),ce=ue.count();ce.onsuccess=function(){k(ce.result)},ce.onerror=function(){z(ce.error)}}catch(pe){z(pe)}})}).catch(z)});return d(b,x),b}function be(x,D){var b=this,k=new h(function(z,I){if(x<0){z(null);return}b.ready().then(function(){ie(b._dbInfo,E,function(ne,ue){if(ne)return I(ne);try{var ce=ue.objectStore(b._dbInfo.storeName),pe=!1,_e=ce.openKeyCursor();_e.onsuccess=function(){var De=_e.result;if(!De){z(null);return}x===0||pe?z(De.key):(pe=!0,De.advance(x))},_e.onerror=function(){I(_e.error)}}catch(De){I(De)}})}).catch(I)});return d(k,D),k}function lt(x){var D=this,b=new h(function(k,z){D.ready().then(function(){ie(D._dbInfo,E,function(I,ne){if(I)return z(I);try{var ue=ne.objectStore(D._dbInfo.storeName),ce=ue.openKeyCursor(),pe=[];ce.onsuccess=function(){var _e=ce.result;if(!_e){k(pe);return}pe.push(_e.key),_e.continue()},ce.onerror=function(){z(ce.error)}}catch(_e){z(_e)}})}).catch(z)});return d(b,x),b}function K(x,D){D=y.apply(this,arguments);var b=this.config();x=typeof x!="function"&&x||{},x.name||(x.name=x.name||b.name,x.storeName=x.storeName||b.storeName);var k=this,z;if(!x.name)z=h.reject("Invalid arguments");else{var I=x.name===b.name&&k._dbInfo.db,ne=I?h.resolve(k._dbInfo.db):oe(x).then(function(ue){var ce=g[x.name],pe=ce.forages;ce.db=ue;for(var _e=0;_e<pe.length;_e++)pe[_e]._dbInfo.db=ue;return ue});x.storeName?z=ne.then(function(ue){if(ue.objectStoreNames.contains(x.storeName)){var ce=ue.version+1;M(x);var pe=g[x.name],_e=pe.forages;ue.close();for(var De=0;De<_e.length;De++){var st=_e[De];st._dbInfo.db=null,st._dbInfo.version=ce}var dt=new h(function(pt,Wt){var Bt=l.open(x.name,ce);Bt.onerror=function(Wn){var ao=Bt.result;ao.close(),Wt(Wn)},Bt.onupgradeneeded=function(){var Wn=Bt.result;Wn.deleteObjectStore(x.storeName)},Bt.onsuccess=function(){var Wn=Bt.result;Wn.close(),pt(Wn)}});return dt.then(function(pt){pe.db=pt;for(var Wt=0;Wt<_e.length;Wt++){var Bt=_e[Wt];Bt._dbInfo.db=pt,C(Bt._dbInfo)}}).catch(function(pt){throw(V(x,pt)||h.resolve()).catch(function(){}),pt})}}):z=ne.then(function(ue){M(x);var ce=g[x.name],pe=ce.forages;ue.close();for(var _e=0;_e<pe.length;_e++){var De=pe[_e];De._dbInfo.db=null}var st=new h(function(dt,pt){var Wt=l.deleteDatabase(x.name);Wt.onerror=function(){var Bt=Wt.result;Bt&&Bt.close(),pt(Wt.error)},Wt.onblocked=function(){console.warn('dropInstance blocked for database "'+x.name+'" until all open connections are closed')},Wt.onsuccess=function(){var Bt=Wt.result;Bt&&Bt.close(),dt(Bt)}});return st.then(function(dt){ce.db=dt;for(var pt=0;pt<pe.length;pt++){var Wt=pe[pt];C(Wt._dbInfo)}}).catch(function(dt){throw(V(x,dt)||h.resolve()).catch(function(){}),dt})})}return d(z,D),z}var tn={_driver:"asyncStorage",_initStorage:J,_support:c(),iterate:ye,getItem:ae,setItem:we,removeItem:Ce,clear:We,length:Ye,key:be,keys:lt,dropInstance:K};function ke(){return typeof openDatabase=="function"}var Fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ie="~~local_forage_type~",Et=/^~~local_forage_type~([^~]+)~/,qe="__lfsc__:",L=qe.length,w="arbf",Y="blob",de="si08",he="ui08",ge="uic8",Ne="si16",Me="si32",Le="ur16",Ge="ui32",Ze="fl32",fe="fl64",ht=L+w.length,et=Object.prototype.toString;function Ke(x){var D=x.length*.75,b=x.length,k,z=0,I,ne,ue,ce;x[x.length-1]==="="&&(D--,x[x.length-2]==="="&&D--);var pe=new ArrayBuffer(D),_e=new Uint8Array(pe);for(k=0;k<b;k+=4)I=Fe.indexOf(x[k]),ne=Fe.indexOf(x[k+1]),ue=Fe.indexOf(x[k+2]),ce=Fe.indexOf(x[k+3]),_e[z++]=I<<2|ne>>4,_e[z++]=(ne&15)<<4|ue>>2,_e[z++]=(ue&3)<<6|ce&63;return pe}function Ue(x){var D=new Uint8Array(x),b="",k;for(k=0;k<D.length;k+=3)b+=Fe[D[k]>>2],b+=Fe[(D[k]&3)<<4|D[k+1]>>4],b+=Fe[(D[k+1]&15)<<2|D[k+2]>>6],b+=Fe[D[k+2]&63];return D.length%3===2?b=b.substring(0,b.length-1)+"=":D.length%3===1&&(b=b.substring(0,b.length-2)+"=="),b}function Pe(x,D){var b="";if(x&&(b=et.call(x)),x&&(b==="[object ArrayBuffer]"||x.buffer&&et.call(x.buffer)==="[object ArrayBuffer]")){var k,z=qe;x instanceof ArrayBuffer?(k=x,z+=w):(k=x.buffer,b==="[object Int8Array]"?z+=de:b==="[object Uint8Array]"?z+=he:b==="[object Uint8ClampedArray]"?z+=ge:b==="[object Int16Array]"?z+=Ne:b==="[object Uint16Array]"?z+=Le:b==="[object Int32Array]"?z+=Me:b==="[object Uint32Array]"?z+=Ge:b==="[object Float32Array]"?z+=Ze:b==="[object Float64Array]"?z+=fe:D(new Error("Failed to get type for BinaryArray"))),D(z+Ue(k))}else if(b==="[object Blob]"){var I=new FileReader;I.onload=function(){var ne=Ie+x.type+"~"+Ue(this.result);D(qe+Y+ne)},I.readAsArrayBuffer(x)}else try{D(JSON.stringify(x))}catch(ne){console.error("Couldn't convert value into a JSON string: ",x),D(null,ne)}}function Qe(x){if(x.substring(0,L)!==qe)return JSON.parse(x);var D=x.substring(ht),b=x.substring(L,ht),k;if(b===Y&&Et.test(D)){var z=D.match(Et);k=z[1],D=D.substring(z[0].length)}var I=Ke(D);switch(b){case w:return I;case Y:return u([I],{type:k});case de:return new Int8Array(I);case he:return new Uint8Array(I);case ge:return new Uint8ClampedArray(I);case Ne:return new Int16Array(I);case Le:return new Uint16Array(I);case Me:return new Int32Array(I);case Ge:return new Uint32Array(I);case Ze:return new Float32Array(I);case fe:return new Float64Array(I);default:throw new Error("Unkown type: "+b)}}var ct={serialize:Pe,deserialize:Qe,stringToBuffer:Ke,bufferToString:Ue};function Ct(x,D,b,k){x.executeSql("CREATE TABLE IF NOT EXISTS "+D.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],b,k)}function tt(x){var D=this,b={db:null};if(x)for(var k in x)b[k]=typeof x[k]!="string"?x[k].toString():x[k];var z=new h(function(I,ne){try{b.db=openDatabase(b.name,String(b.version),b.description,b.size)}catch(ue){return ne(ue)}b.db.transaction(function(ue){Ct(ue,b,function(){D._dbInfo=b,I()},function(ce,pe){ne(pe)})},ne)});return b.serializer=ct,z}function ve(x,D,b,k,z,I){x.executeSql(b,k,z,function(ne,ue){ue.code===ue.SYNTAX_ERR?ne.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[D.storeName],function(ce,pe){pe.rows.length?I(ce,ue):Ct(ce,D,function(){ce.executeSql(b,k,z,I)},I)},I):I(ne,ue)},I)}function N(x,D){var b=this;x=v(x);var k=new h(function(z,I){b.ready().then(function(){var ne=b._dbInfo;ne.db.transaction(function(ue){ve(ue,ne,"SELECT * FROM "+ne.storeName+" WHERE key = ? LIMIT 1",[x],function(ce,pe){var _e=pe.rows.length?pe.rows.item(0).value:null;_e&&(_e=ne.serializer.deserialize(_e)),z(_e)},function(ce,pe){I(pe)})})}).catch(I)});return d(k,D),k}function Ee(x,D){var b=this,k=new h(function(z,I){b.ready().then(function(){var ne=b._dbInfo;ne.db.transaction(function(ue){ve(ue,ne,"SELECT * FROM "+ne.storeName,[],function(ce,pe){for(var _e=pe.rows,De=_e.length,st=0;st<De;st++){var dt=_e.item(st),pt=dt.value;if(pt&&(pt=ne.serializer.deserialize(pt)),pt=x(pt,dt.key,st+1),pt!==void 0){z(pt);return}}z()},function(ce,pe){I(pe)})})}).catch(I)});return d(k,D),k}function xe(x,D,b,k){var z=this;x=v(x);var I=new h(function(ne,ue){z.ready().then(function(){D===void 0&&(D=null);var ce=D,pe=z._dbInfo;pe.serializer.serialize(D,function(_e,De){De?ue(De):pe.db.transaction(function(st){ve(st,pe,"INSERT OR REPLACE INTO "+pe.storeName+" (key, value) VALUES (?, ?)",[x,_e],function(){ne(ce)},function(dt,pt){ue(pt)})},function(st){if(st.code===st.QUOTA_ERR){if(k>0){ne(xe.apply(z,[x,ce,b,k-1]));return}ue(st)}})})}).catch(ue)});return d(I,b),I}function je(x,D,b){return xe.apply(this,[x,D,b,1])}function Be(x,D){var b=this;x=v(x);var k=new h(function(z,I){b.ready().then(function(){var ne=b._dbInfo;ne.db.transaction(function(ue){ve(ue,ne,"DELETE FROM "+ne.storeName+" WHERE key = ?",[x],function(){z()},function(ce,pe){I(pe)})})}).catch(I)});return d(k,D),k}function gt(x){var D=this,b=new h(function(k,z){D.ready().then(function(){var I=D._dbInfo;I.db.transaction(function(ne){ve(ne,I,"DELETE FROM "+I.storeName,[],function(){k()},function(ue,ce){z(ce)})})}).catch(z)});return d(b,x),b}function vt(x){var D=this,b=new h(function(k,z){D.ready().then(function(){var I=D._dbInfo;I.db.transaction(function(ne){ve(ne,I,"SELECT COUNT(key) as c FROM "+I.storeName,[],function(ue,ce){var pe=ce.rows.item(0).c;k(pe)},function(ue,ce){z(ce)})})}).catch(z)});return d(b,x),b}function Gt(x,D){var b=this,k=new h(function(z,I){b.ready().then(function(){var ne=b._dbInfo;ne.db.transaction(function(ue){ve(ue,ne,"SELECT key FROM "+ne.storeName+" WHERE id = ? LIMIT 1",[x+1],function(ce,pe){var _e=pe.rows.length?pe.rows.item(0).key:null;z(_e)},function(ce,pe){I(pe)})})}).catch(I)});return d(k,D),k}function nn(x){var D=this,b=new h(function(k,z){D.ready().then(function(){var I=D._dbInfo;I.db.transaction(function(ne){ve(ne,I,"SELECT key FROM "+I.storeName,[],function(ue,ce){for(var pe=[],_e=0;_e<ce.rows.length;_e++)pe.push(ce.rows.item(_e).key);k(pe)},function(ue,ce){z(ce)})})}).catch(z)});return d(b,x),b}function _t(x){return new h(function(D,b){x.transaction(function(k){k.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(z,I){for(var ne=[],ue=0;ue<I.rows.length;ue++)ne.push(I.rows.item(ue).name);D({db:x,storeNames:ne})},function(z,I){b(I)})},function(k){b(k)})})}function rn(x,D){D=y.apply(this,arguments);var b=this.config();x=typeof x!="function"&&x||{},x.name||(x.name=x.name||b.name,x.storeName=x.storeName||b.storeName);var k=this,z;return x.name?z=new h(function(I){var ne;x.name===b.name?ne=k._dbInfo.db:ne=openDatabase(x.name,"","",0),x.storeName?I({db:ne,storeNames:[x.storeName]}):I(_t(ne))}).then(function(I){return new h(function(ne,ue){I.db.transaction(function(ce){function pe(dt){return new h(function(pt,Wt){ce.executeSql("DROP TABLE IF EXISTS "+dt,[],function(){pt()},function(Bt,Wn){Wt(Wn)})})}for(var _e=[],De=0,st=I.storeNames.length;De<st;De++)_e.push(pe(I.storeNames[De]));h.all(_e).then(function(){ne()}).catch(function(dt){ue(dt)})},function(ce){ue(ce)})})}):z=h.reject("Invalid arguments"),d(z,D),z}var Vn={_driver:"webSQLStorage",_initStorage:tt,_support:ke(),iterate:Ee,getItem:N,setItem:je,removeItem:Be,clear:gt,length:vt,key:Gt,keys:nn,dropInstance:rn};function va(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function _a(x,D){var b=x.name+"/";return x.storeName!==D.storeName&&(b+=x.storeName+"/"),b}function Qr(){var x="_localforage_support_test";try{return localStorage.setItem(x,!0),localStorage.removeItem(x),!1}catch{return!0}}function ya(){return!Qr()||localStorage.length>0}function Jr(x){var D=this,b={};if(x)for(var k in x)b[k]=x[k];return b.keyPrefix=_a(x,D._defaultConfig),ya()?(D._dbInfo=b,b.serializer=ct,h.resolve()):h.reject()}function Sa(x){var D=this,b=D.ready().then(function(){for(var k=D._dbInfo.keyPrefix,z=localStorage.length-1;z>=0;z--){var I=localStorage.key(z);I.indexOf(k)===0&&localStorage.removeItem(I)}});return d(b,x),b}function xa(x,D){var b=this;x=v(x);var k=b.ready().then(function(){var z=b._dbInfo,I=localStorage.getItem(z.keyPrefix+x);return I&&(I=z.serializer.deserialize(I)),I});return d(k,D),k}function Pc(x,D){var b=this,k=b.ready().then(function(){for(var z=b._dbInfo,I=z.keyPrefix,ne=I.length,ue=localStorage.length,ce=1,pe=0;pe<ue;pe++){var _e=localStorage.key(pe);if(_e.indexOf(I)===0){var De=localStorage.getItem(_e);if(De&&(De=z.serializer.deserialize(De)),De=x(De,_e.substring(ne),ce++),De!==void 0)return De}}});return d(k,D),k}function Dc(x,D){var b=this,k=b.ready().then(function(){var z=b._dbInfo,I;try{I=localStorage.key(x)}catch{I=null}return I&&(I=I.substring(z.keyPrefix.length)),I});return d(k,D),k}function Ic(x){var D=this,b=D.ready().then(function(){for(var k=D._dbInfo,z=localStorage.length,I=[],ne=0;ne<z;ne++){var ue=localStorage.key(ne);ue.indexOf(k.keyPrefix)===0&&I.push(ue.substring(k.keyPrefix.length))}return I});return d(b,x),b}function R(x){var D=this,b=D.keys().then(function(k){return k.length});return d(b,x),b}function H(x,D){var b=this;x=v(x);var k=b.ready().then(function(){var z=b._dbInfo;localStorage.removeItem(z.keyPrefix+x)});return d(k,D),k}function $(x,D,b){var k=this;x=v(x);var z=k.ready().then(function(){D===void 0&&(D=null);var I=D;return new h(function(ne,ue){var ce=k._dbInfo;ce.serializer.serialize(D,function(pe,_e){if(_e)ue(_e);else try{localStorage.setItem(ce.keyPrefix+x,pe),ne(I)}catch(De){(De.name==="QuotaExceededError"||De.name==="NS_ERROR_DOM_QUOTA_REACHED")&&ue(De),ue(De)}})})});return d(z,b),z}function Q(x,D){if(D=y.apply(this,arguments),x=typeof x!="function"&&x||{},!x.name){var b=this.config();x.name=x.name||b.name,x.storeName=x.storeName||b.storeName}var k=this,z;return x.name?z=new h(function(I){x.storeName?I(_a(x,k._defaultConfig)):I(x.name+"/")}).then(function(I){for(var ne=localStorage.length-1;ne>=0;ne--){var ue=localStorage.key(ne);ue.indexOf(I)===0&&localStorage.removeItem(ue)}}):z=h.reject("Invalid arguments"),d(z,D),z}var q={_driver:"localStorageWrapper",_initStorage:Jr,_support:va(),iterate:Pc,getItem:xa,setItem:$,removeItem:H,clear:Sa,length:R,key:Dc,keys:Ic,dropInstance:Q},Ae=function(D,b){return D===b||typeof D=="number"&&typeof b=="number"&&isNaN(D)&&isNaN(b)},Oe=function(D,b){for(var k=D.length,z=0;z<k;){if(Ae(D[z],b))return!0;z++}return!1},ze=Array.isArray||function(x){return Object.prototype.toString.call(x)==="[object Array]"},He={},Je={},Xe={INDEXEDDB:tn,WEBSQL:Vn,LOCALSTORAGE:q},$e=[Xe.INDEXEDDB._driver,Xe.WEBSQL._driver,Xe.LOCALSTORAGE._driver],Mt=["dropInstance"],sn=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Mt),Vt={description:"",driver:$e.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function ti(x,D){x[D]=function(){var b=arguments;return x.ready().then(function(){return x[D].apply(x,b)})}}function St(){for(var x=1;x<arguments.length;x++){var D=arguments[x];if(D)for(var b in D)D.hasOwnProperty(b)&&(ze(D[b])?arguments[0][b]=D[b].slice():arguments[0][b]=D[b])}return arguments[0]}var nt=function(){function x(D){o(this,x);for(var b in Xe)if(Xe.hasOwnProperty(b)){var k=Xe[b],z=k._driver;this[b]=z,He[z]||this.defineDriver(k)}this._defaultConfig=St({},Vt),this._config=St({},this._defaultConfig,D),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return x.prototype.config=function(b){if((typeof b>"u"?"undefined":s(b))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var k in b){if(k==="storeName"&&(b[k]=b[k].replace(/\W/g,"_")),k==="version"&&typeof b[k]!="number")return new Error("Database version must be a number.");this._config[k]=b[k]}return"driver"in b&&b.driver?this.setDriver(this._config.driver):!0}else return typeof b=="string"?this._config[b]:this._config},x.prototype.defineDriver=function(b,k,z){var I=new h(function(ne,ue){try{var ce=b._driver,pe=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!b._driver){ue(pe);return}for(var _e=sn.concat("_initStorage"),De=0,st=_e.length;De<st;De++){var dt=_e[De],pt=!Oe(Mt,dt);if((pt||b[dt])&&typeof b[dt]!="function"){ue(pe);return}}var Wt=function(){for(var ao=function(x_){return function(){var E_=new Error("Method "+x_+" is not implemented by the current driver"),cd=h.reject(E_);return d(cd,arguments[arguments.length-1]),cd}},Nc=0,S_=Mt.length;Nc<S_;Nc++){var Oc=Mt[Nc];b[Oc]||(b[Oc]=ao(Oc))}};Wt();var Bt=function(ao){He[ce]&&console.info("Redefining LocalForage driver: "+ce),He[ce]=b,Je[ce]=ao,ne()};"_support"in b?b._support&&typeof b._support=="function"?b._support().then(Bt,ue):Bt(!!b._support):Bt(!0)}catch(Wn){ue(Wn)}});return p(I,k,z),I},x.prototype.driver=function(){return this._driver||null},x.prototype.getDriver=function(b,k,z){var I=He[b]?h.resolve(He[b]):h.reject(new Error("Driver not found."));return p(I,k,z),I},x.prototype.getSerializer=function(b){var k=h.resolve(ct);return p(k,b),k},x.prototype.ready=function(b){var k=this,z=k._driverSet.then(function(){return k._ready===null&&(k._ready=k._initDriver()),k._ready});return p(z,b,b),z},x.prototype.setDriver=function(b,k,z){var I=this;ze(b)||(b=[b]);var ne=this._getSupportedDrivers(b);function ue(){I._config.driver=I.driver()}function ce(De){return I._extend(De),ue(),I._ready=I._initStorage(I._config),I._ready}function pe(De){return function(){var st=0;function dt(){for(;st<De.length;){var pt=De[st];return st++,I._dbInfo=null,I._ready=null,I.getDriver(pt).then(ce).catch(dt)}ue();var Wt=new Error("No available storage method found.");return I._driverSet=h.reject(Wt),I._driverSet}return dt()}}var _e=this._driverSet!==null?this._driverSet.catch(function(){return h.resolve()}):h.resolve();return this._driverSet=_e.then(function(){var De=ne[0];return I._dbInfo=null,I._ready=null,I.getDriver(De).then(function(st){I._driver=st._driver,ue(),I._wrapLibraryMethodsWithReady(),I._initDriver=pe(ne)})}).catch(function(){ue();var De=new Error("No available storage method found.");return I._driverSet=h.reject(De),I._driverSet}),p(this._driverSet,k,z),this._driverSet},x.prototype.supports=function(b){return!!Je[b]},x.prototype._extend=function(b){St(this,b)},x.prototype._getSupportedDrivers=function(b){for(var k=[],z=0,I=b.length;z<I;z++){var ne=b[z];this.supports(ne)&&k.push(ne)}return k},x.prototype._wrapLibraryMethodsWithReady=function(){for(var b=0,k=sn.length;b<k;b++)ti(this,sn[b])},x.prototype.createInstance=function(b){return new x(b)},x}(),oo=new nt;i.exports=oo},{3:3}]},{},[4])(4)})})(y_);var DC=y_.exports;const Co=Qf(DC),ml="voxel_survival_save";class IC{player=null;survivalStats=null;terrainGenerator=null;biomeGenerator=null;chunks=null;lastAutoSave=0;init(e,t,i,r,s){this.player=e,this.survivalStats=t,this.terrainGenerator=i,this.biomeGenerator=r,this.chunks=s,Co.config({name:"voxel_survival"})}async save(){if(!this.player||!this.survivalStats||!this.terrainGenerator||!this.biomeGenerator||!this.chunks)return;const e={};this.chunks.forEach((r,s)=>{const o=this.biomeGenerator.generateBiomeMap(r.chunkX,r.chunkZ),a=new od(r.chunkX,r.chunkZ);this.terrainGenerator.generateChunk(a,o);const l=[];for(let c=0;c<Un;c++)for(let u=0;u<Ve;u++)for(let h=0;h<Ve;h++){const d=r.getBlock(h,c,u),p=a.getBlock(h,c,u);d!==p&&l.push({x:r.worldX+h,y:c,z:r.worldZ+u,newBlock:d})}l.length>0&&(e[s]=l)});const t=fi.getState(),i={version:2,seed:(this.terrainGenerator,0),timestamp:Date.now(),player:{position:[this.player.position.x,this.player.position.y,this.player.position.z],rotation:[this.player.yaw,this.player.pitch],stats:{health:this.survivalStats.health,hunger:this.survivalStats.hunger,thirst:this.survivalStats.thirst,stamina:this.survivalStats.stamina,temperature:this.survivalStats.temperature,mana:this.survivalStats.mana},dimension:"overworld"},inventory:t.slots,deltas:e,creatures:[]};await Co.setItem(ml,i)}async load(){return await Co.getItem(ml)}async hasSave(){return await Co.getItem(ml)!==null}async deleteSave(){await Co.removeItem(ml)}checkAutosave(e){e-this.lastAutoSave>qA&&(this.lastAutoSave=e,this.save().catch(console.error))}}class NC{geometry;material;points;positions;velocities;count=300;constructor(e){this.positions=new Float32Array(this.count*3),this.velocities=new Float32Array(this.count*3);for(let t=0;t<this.count;t++)this.positions[t*3]=(Math.random()-.5)*2,this.positions[t*3+1]=Math.random()*3,this.positions[t*3+2]=(Math.random()-.5)*2,this.velocities[t*3]=(Math.random()-.5)*.5,this.velocities[t*3+1]=Math.random()*2+.5,this.velocities[t*3+2]=(Math.random()-.5)*.5;this.geometry=new Dn,this.geometry.setAttribute("position",new wt(this.positions,3)),this.material=new Cc({color:11141375,size:.1,transparent:!0,opacity:.8,depthWrite:!1}),this.points=new nd(this.geometry,this.material),this.points.visible=!1,e.add(this.points)}show(e,t,i){this.points.position.set(e,t,i),this.points.visible=!0}hide(){this.points.visible=!1}update(e){if(this.points.visible){for(let t=0;t<this.count;t++)this.positions[t*3+1]+=this.velocities[t*3+1]*e,this.positions[t*3+1]>3&&(this.positions[t*3+1]=0,this.positions[t*3]=(Math.random()-.5)*2,this.positions[t*3+2]=(Math.random()-.5)*2);this.geometry.attributes.position.needsUpdate=!0}}}class OC{worldManager;portalParticles;postProcess;voidRealm=null;player;activePortals=new Map;currentDimension="overworld";constructor(e,t,i,r){this.worldManager=t,this.player=i,this.postProcess=r,this.portalParticles=new NC(e)}checkPortalActivation(e,t,i){this.countAdjacentFrames(e,t,i)>=4&&(this.activePortals.set(`${e},${t},${i}`,{x:e,y:t,z:i}),this.portalParticles.show(e+.5,t,i+.5),this.worldManager.setBlock(e,t+1,i,U.PORTAL_ACTIVE),this.worldManager.setBlock(e,t+2,i,U.PORTAL_ACTIVE))}countAdjacentFrames(e,t,i){let r=0;const s=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0]];for(const[o,a,l]of s)this.worldManager.getBlock(e+o,t+a,i+l)===U.PORTAL_FRAME&&r++;return r}update(e){if(this.portalParticles.update(e),this.currentDimension==="overworld"){const t=Math.floor(this.player.position.x),i=Math.floor(this.player.position.y),r=Math.floor(this.player.position.z);this.worldManager.getBlock(t,i,r)===U.PORTAL_ACTIVE&&this.transitionToVoid()}}transitionToVoid(){this.postProcess.fadeIn(500,()=>{this.currentDimension="void",this.postProcess.fadeOut(500)})}isInVoid(){return this.currentDimension==="void"}getDimension(){return this.currentDimension}}class UC{renderer;skyRenderer;waterRenderer;fogSystem;particleSystem;dayNightCycle;chunkRenderer;postProcess;assetManager;inputManager;worldManager=null;player=null;playerController=null;camera=null;blockInteraction=null;survivalStats=null;entityManager=null;itemDropManager=null;bulletPool=null;weaponManager=null;damageSystem=null;saveManager;portalManager=null;gameState="menu";animFrameId=0;lastTime=0;elapsed=0;seed=0;paused=!1;chunkWorker=null;pendingMeshes=new Map;pickupNotifications=[];onStateChange=null;onStatsUpdate=null;onPickupNotification=null;constructor(){this.renderer=new FA,this.assetManager=new tC,this.inputManager=new nC,this.saveManager=new IC}init(e){this.assetManager.init(),this.inputManager.init(e),this.skyRenderer=new HA(this.renderer.mainScene),this.waterRenderer=new WA,this.fogSystem=new XA(this.renderer.mainScene),this.particleSystem=new ZA(this.renderer.mainScene),this.dayNightCycle=new QA(this.renderer.mainScene),this.chunkRenderer=new JA(this.renderer.mainScene,this.assetManager),this.postProcess=new eC;for(let t=0;t<8;t++){const i=new rA(16748288,0,15);this.renderer.mainScene.add(i)}this.chunkWorker=rC(),this.chunkWorker.onmessage=t=>{const{chunkX:i,chunkZ:r,positions:s,normals:o,uvs:a,colors:l,indices:c,waterPositions:u,waterNormals:h,waterUvs:d,waterIndices:p}=t.data,v=`${i},${r}`;this.pendingMeshes.delete(v),this.chunkRenderer.uploadChunk(v,{positions:s,normals:o,uvs:a,colors:l,indices:c,waterPositions:u,waterNormals:h,waterUvs:d,waterIndices:p},this.waterRenderer.getMaterial())}}startGame(e){this.seed=e,aC(e),cC(),this.worldManager=new pC(e),this.worldManager.update(0,0);for(let r=0;r<5;r++)this.worldManager.update(0,0);this.player=new Xu((r,s,o)=>this.worldManager.getBlock(r,s,o));const t=Xu.findLandSpawn((r,s,o)=>this.worldManager.getBlock(r,s,o),8,8);this.player.position={x:t.x,y:t.y,z:t.z},this.survivalStats=new yC,this.playerController=new gC(this.player,this.inputManager,this.renderer),this.camera=new vC(this.player,this.inputManager,this.renderer),this.blockInteraction=new _C(this.player,this.inputManager,this.worldManager),this.blockInteraction.setSurvivalStats(this.survivalStats),this.blockInteraction.setParticleSystem(this.particleSystem);const i=this.player.getEyePosition();this.renderer.setMainCameraPosition(i.x,i.y,i.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch),this.itemDropManager=new CC(this.renderer.mainScene,(r,s,o)=>this.worldManager.getBlock(r,s,o)),this.itemDropManager.setOnItemPickup((r,s)=>{fi.getState().addItem(r,s),this.pickupNotifications.push({id:r,count:s,time:this.elapsed}),this.onPickupNotification?.(this.pickupNotifications)}),this.blockInteraction.setItemDropManager(this.itemDropManager),this.entityManager=new wC(this.renderer.mainScene,(r,s,o)=>this.worldManager.getBlock(r,s,o)),this.entityManager.setPlayerPosition(this.player.position),this.entityManager.setOnLootDrop((r,s)=>{this.player&&this.itemDropManager&&this.itemDropManager.dropItem(r,s,this.player.position.x,this.player.position.y+1,this.player.position.z,(Math.random()-.5)*2,2,(Math.random()-.5)*2)}),this.bulletPool=new RC(this.renderer.mainScene),this.weaponManager=new LC(this.inputManager,this.player,this.bulletPool,this.particleSystem,this.renderer),this.damageSystem=new PC(this.entityManager,this.player,this.survivalStats,this.bulletPool),this.portalManager=new OC(this.renderer.mainScene,this.worldManager,this.player,this.postProcess),this.saveManager.init(this.player,this.survivalStats,this.worldManager.getTerrainGenerator(),this.worldManager.getBiomeGenerator(),this.worldManager.getAllChunks()),this.gameState="playing",this.onStateChange?.("playing"),this.worldManager.update(this.player.position.x,this.player.position.z);for(let r=0;r<5;r++)this.worldManager.update(this.player.position.x,this.player.position.z);this.rebuildAllVisibleChunks(),this.lastTime=performance.now(),this.gameLoop()}loadGame(){this.saveManager.load().then(e=>{e&&(this.startGame(e.seed),this.player&&this.survivalStats&&(this.player.position={x:e.player.position[0],y:e.player.position[1],z:e.player.position[2]},this.player.yaw=e.player.rotation[0],this.player.pitch=e.player.rotation[1],this.survivalStats.health=e.player.stats.health,this.survivalStats.hunger=e.player.stats.hunger,this.survivalStats.thirst=e.player.stats.thirst,this.survivalStats.stamina=e.player.stats.stamina,this.survivalStats.temperature=e.player.stats.temperature,this.survivalStats.mana=e.player.stats.mana),e.inventory&&fi.getState().setSlots(e.inventory))})}gameLoop=()=>{this.animFrameId=requestAnimationFrame(this.gameLoop);const e=performance.now(),t=(e-this.lastTime)/1e3;this.lastTime=e;const i=Math.min(t,.05);this.elapsed+=i,this.pickupNotifications=this.pickupNotifications.filter(o=>this.elapsed-o.time<2),this.inputManager.flush(),this.inputManager.isKeyJustPressed("Tab")&&this.gameState==="playing"?(this.gameState="inventory",this.onStateChange?.("inventory"),this.inputManager.exitPointerLock()):this.inputManager.isKeyJustPressed("Tab")&&this.gameState==="inventory"&&(this.gameState="playing",this.onStateChange?.("playing"));for(let o=1;o<=9;o++)this.inputManager.isKeyJustPressed(`Digit${o}`)&&fi.getState().selectSlot(o-1);const r=this.inputManager.getScrollDelta();if(r!==0){const a=(fi.getState().selected+(r>0?1:-1)+9)%9;fi.getState().selectSlot(a)}if(this.inputManager.isKeyJustPressed("F5")&&this.saveManager.save().catch(console.error),this.gameState==="playing"&&!this.paused){if(this.playerController?.update(i),this.player?.update(i),this.camera?.update(i),this.blockInteraction?.update(i),this.itemDropManager&&this.player&&this.itemDropManager.update(i,this.player.position.x,this.player.position.y+.9,this.player.position.z),this.survivalStats&&this.player){const o=this.worldManager?.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z))??rt.PLAINS;this.survivalStats.setBiome(o),this.survivalStats.setSprinting(this.player.isSprinting),this.survivalStats.update(i),this.survivalStats.isDead&&(this.gameState="dead",this.onStateChange?.("dead")),this.onStatsUpdate?.({health:this.survivalStats.health,hunger:this.survivalStats.hunger,thirst:this.survivalStats.thirst,stamina:this.survivalStats.stamina,temperature:this.survivalStats.temperature,mana:this.survivalStats.mana,maxMana:this.survivalStats.maxMana})}if(this.entityManager&&this.player&&(this.entityManager.setPlayerPosition(this.player.position),this.entityManager.update(i)),this.weaponManager?.update(i,(o,a,l)=>this.worldManager?.getBlock(o,a,l)??0),this.bulletPool?.update(i,(o,a,l)=>Yn(this.worldManager?.getBlock(o,a,l)??0)),this.damageSystem?.update(i),this.worldManager&&this.player){const o=this.worldManager.update(this.player.position.x,this.player.position.z);for(const a of o)this.sendChunkToWorker(a)}if(this.fogSystem&&this.player&&this.worldManager){const o=this.worldManager.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z));this.player.position.y<30?this.fogSystem.setCaveFog():this.fogSystem.setBiomeFog(o),this.fogSystem.setSunHeight(this.dayNightCycle.getSunHeight()),this.fogSystem.update(i)}this.portalManager?.update(i)}this.dayNightCycle.update(i),this.particleSystem.update(i);const s=this.dayNightCycle.getSunDirection();this.skyRenderer.update(this.elapsed,s,this.dayNightCycle.getDayProgress(),this.renderer.mainCamera.position),this.waterRenderer.updateUniforms(this.elapsed,this.renderer.mainCamera.position,s),this.renderer.render(),this.saveManager.checkAutosave(this.elapsed)};sendChunkToWorker(e){if(!this.worldManager||!this.chunkWorker||this.pendingMeshes.has(e))return;const t=this.worldManager.getChunk(parseInt(e.split(",")[0]),parseInt(e.split(",")[1]));if(!t)return;const i=this.worldManager.getNeighborVoxels(t.chunkX,t.chunkZ);this.pendingMeshes.set(e,!0),this.chunkWorker.postMessage({chunkX:t.chunkX,chunkZ:t.chunkZ,voxels:t.voxels,neighbors:i})}rebuildAllVisibleChunks(){if(this.worldManager)for(const[e]of this.worldManager.getAllChunks())this.sendChunkToWorker(e)}respawn(){if(this.survivalStats?.respawn(),this.player&&this.worldManager){const e=Xu.findLandSpawn((i,r,s)=>this.worldManager.getBlock(i,r,s),8,8);this.player.position={x:e.x,y:e.y,z:e.z},this.player.velocity={x:0,y:0,z:0};const t=this.player.getEyePosition();this.renderer.setMainCameraPosition(t.x,t.y,t.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch)}this.gameState="playing",this.onStateChange?.("playing")}stop(){this.animFrameId&&cancelAnimationFrame(this.animFrameId)}getBiomeAt(e,t){return this.worldManager?.getBiomeAt(e,t)??rt.PLAINS}}const cg=({health:n,hunger:e,thirst:t,stamina:i,temperature:r,mana:s,maxMana:o,hasStaff:a,breakProgress:l,pickupNotifications:c})=>{const{slots:u,selected:h}=fi(),d=({value:v,max:y,color:m,icon:f})=>ee.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[ee.jsx("span",{className:"text-sm w-5 text-center",children:f}),ee.jsx("div",{className:"w-32 h-3 bg-gray-800 rounded overflow-hidden border border-gray-600",children:ee.jsx("div",{className:`h-full ${m} transition-all duration-200`,style:{width:`${v/y*100}%`}})})]}),p=u[h];return ee.jsxs("div",{className:"fixed inset-0 pointer-events-none z-20",style:{fontFamily:"monospace"},children:[ee.jsxs("div",{className:"absolute top-4 left-4",children:[ee.jsx(d,{value:n,max:100,color:"bg-red-500",icon:"❤"}),ee.jsx(d,{value:e,max:100,color:"bg-orange-400",icon:"🍗"}),ee.jsx(d,{value:t,max:100,color:"bg-blue-400",icon:"💧"}),ee.jsx(d,{value:i,max:100,color:"bg-yellow-400",icon:"⚡"}),a&&ee.jsx(d,{value:s,max:o,color:"bg-purple-500",icon:"✦"}),r<-.5&&ee.jsx("div",{className:"text-cyan-300 text-sm",children:"❄ Cold"}),r>.7&&ee.jsx("div",{className:"text-red-300 text-sm",children:"🔥 Hot"})]}),l>0&&ee.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8",children:ee.jsx("div",{className:"w-16 h-1 bg-gray-700 rounded",children:ee.jsx("div",{className:"h-full bg-white rounded",style:{width:`${l*100}%`}})})}),p&&ee.jsxs("div",{className:"absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded",children:[Ji(p.id)," ",p.count>1?`x${p.count}`:""]}),ee.jsx("div",{className:"absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1",children:c.slice(-5).map((v,y)=>ee.jsx(kC,{id:v.id,count:v.count,index:y},v.time))}),ee.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1",children:u.slice(0,9).map((v,y)=>ee.jsxs("div",{className:`w-12 h-12 flex items-center justify-center border-2 ${y===h?"border-white bg-gray-700":"border-gray-600 bg-gray-800"} relative`,children:[v&&ee.jsxs(ee.Fragment,{children:[ee.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:_s(v.id)}}),ee.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:v.count>1?v.count:""})]}),ee.jsx("span",{className:"absolute top-0 left-0.5 text-xs text-gray-400",children:y+1})]},y))}),ee.jsxs("div",{className:"absolute bottom-4 right-4 text-gray-500 text-xs space-y-0.5",children:[ee.jsx("div",{children:"LMB: Mine | RMB: Place"}),ee.jsx("div",{children:"Q: Drop | Tab: Inventory"}),ee.jsx("div",{children:"WASD: Move | Space: Jump"})]})]})},kC=({id:n,count:e,index:t})=>{const[i,r]=xt.useState(1);return xt.useEffect(()=>{const s=setTimeout(()=>r(0),1500);return()=>clearTimeout(s)},[]),ee.jsxs("div",{className:"text-sm text-white px-2 py-0.5 rounded transition-opacity duration-500",style:{opacity:i,backgroundColor:"rgba(0,0,0,0.6)",transform:`translateY(${t*-5}px)`},children:["+",e," ",Ji(n)]})},oc=[{name:"Plank",pattern:[P.WOOD,null,null,null,null,null,null,null,null],result:{id:P.PLANK,count:4},category:"materials"},{name:"Stick",pattern:[P.PLANK,null,null,P.PLANK,null,null,null,null,null],result:{id:P.STICK,count:4},category:"materials"},{name:"Iron Ingot (smelt)",pattern:[P.IRON_ORE,null,null,P.COAL,null,null,null,null,null],result:{id:P.IRON_INGOT,count:1},category:"materials"},{name:"Gold Ingot (smelt)",pattern:[P.GOLD_ORE,null,null,P.COAL,null,null,null,null,null],result:{id:P.GOLD_INGOT,count:1},category:"materials"},{name:"Crafting Table",pattern:[P.PLANK,P.PLANK,null,P.PLANK,P.PLANK,null,null,null,null],result:{id:P.CRAFTING_TABLE,count:1},category:"blocks"},{name:"Furnace",pattern:[P.STONE,P.STONE,P.STONE,P.STONE,null,P.STONE,P.STONE,P.STONE,P.STONE],result:{id:P.FURNACE,count:1},category:"blocks"},{name:"Chest",pattern:[P.PLANK,P.PLANK,P.PLANK,P.PLANK,null,P.PLANK,P.PLANK,P.PLANK,P.PLANK],result:{id:P.CHEST,count:1},category:"blocks"},{name:"Torch",pattern:[P.COAL,null,null,P.STICK,null,null,null,null,null],result:{id:P.TORCH,count:4},category:"blocks"},{name:"Portal Frame",pattern:[P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,null,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD],result:{id:P.PORTAL_FRAME,count:1},category:"blocks"},{name:"Wooden Pickaxe",pattern:[P.PLANK,P.PLANK,P.PLANK,null,P.STICK,null,null,P.STICK,null],result:{id:P.WOODEN_PICKAXE,count:1},category:"tools"},{name:"Stone Pickaxe",pattern:[P.STONE,P.STONE,P.STONE,null,P.STICK,null,null,P.STICK,null],result:{id:P.STONE_PICKAXE,count:1},category:"tools"},{name:"Iron Pickaxe",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,null,P.STICK,null,null,P.STICK,null],result:{id:P.IRON_PICKAXE,count:1},category:"tools"},{name:"Wooden Axe",pattern:[P.PLANK,P.PLANK,null,P.PLANK,P.STICK,null,null,P.STICK,null],result:{id:P.WOODEN_AXE,count:1},category:"tools"},{name:"Stone Axe",pattern:[P.STONE,P.STONE,null,P.STONE,P.STICK,null,null,P.STICK,null],result:{id:P.STONE_AXE,count:1},category:"tools"},{name:"Wooden Shovel",pattern:[P.PLANK,null,null,P.STICK,null,null,P.STICK,null,null],result:{id:P.WOODEN_SHOVEL,count:1},category:"tools"},{name:"Iron Sword",pattern:[P.IRON_INGOT,null,null,P.IRON_INGOT,null,null,P.STICK,null,null],result:{id:P.SWORD,count:1},category:"weapons"},{name:"Pistol",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,null,P.STICK,null,null,null,null],result:{id:P.PISTOL,count:1},category:"weapons"},{name:"Rifle",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.STICK,P.IRON_INGOT,P.IRON_INGOT,P.STICK,null,null],result:{id:P.RIFLE,count:1},category:"weapons"},{name:"Magic Staff",pattern:[P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,null,P.STICK,null,null,P.STICK,null],result:{id:P.MAGIC_STAFF,count:1},category:"weapons"},{name:"Ammo",pattern:[P.IRON_INGOT,P.COAL,P.IRON_INGOT,null,null,null,null,null,null],result:{id:P.AMMO,count:16},category:"weapons"},{name:"Igniter",pattern:[P.GOLD_INGOT,P.IRON_INGOT,null,null,null,null,null,null,null],result:{id:P.IGNITER,count:1},category:"weapons"},{name:"Bread",pattern:[P.SAND,P.SAND,P.SAND,null,null,null,null,null,null],result:{id:P.BREAD,count:1},category:"food"},{name:"Bowl",pattern:[P.PLANK,null,P.PLANK,null,P.PLANK,null,null,null,null],result:{id:P.BOWL,count:1},category:"food"},{name:"Iron Helmet",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,null,P.IRON_INGOT,null,null,null],result:{id:P.IRON_HELMET,count:1},category:"armor"},{name:"Iron Chestplate",pattern:[P.IRON_INGOT,null,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT],result:{id:P.IRON_CHESTPLATE,count:1},category:"armor"},{name:"Iron Leggings",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,null,P.IRON_INGOT,P.IRON_INGOT,null,P.IRON_INGOT],result:{id:P.IRON_LEGGINGS,count:1},category:"armor"},{name:"Iron Boots",pattern:[P.IRON_INGOT,null,P.IRON_INGOT,P.IRON_INGOT,null,P.IRON_INGOT,null,null,null],result:{id:P.IRON_BOOTS,count:1},category:"armor"}];class xi{static matchRecipe(e){for(const t of oc)if(xi.matchesPattern(e,t.pattern))return t;return null}static getAvailableRecipes(e){const t=[];for(const i of oc)xi.canCraft(i,e)&&t.push(i);return t}static canCraft(e,t){const i=new Map;for(const s of e.pattern)s!==null&&i.set(s,(i.get(s)??0)+1);const r=new Map;for(const s of t)s&&r.set(s.id,(r.get(s.id)??0)+s.count);for(const[s,o]of i)if((r.get(s)??0)<o)return!1;return!0}static getRequiredItems(e){const t=new Map;for(const i of e.pattern)i!==null&&t.set(i,(t.get(i)??0)+1);return t}static quickCraft(e,t,i){const r=xi.getRequiredItems(e),s=new Map;for(const o of i)o&&s.set(o.id,(s.get(o.id)??0)+o.count);for(const[o,a]of r)if((s.get(o)??0)<a)return!1;for(const[o,a]of r){let l=a;for(let c=0;c<i.length&&l>0;c++)if(i[c]&&i[c].id===o){const u=Math.min(l,i[c].count);t(c,u),l-=u}}return!0}static matchesPattern(e,t){const i=xi.getBounds(e),r=xi.getBounds(t);if(!i||!r||i.w!==r.w||i.h!==r.h)return!1;for(let s=0;s<i.h;s++)for(let o=0;o<i.w;o++){const a=(i.y+s)*3+(i.x+o),l=(r.y+s)*3+(r.x+o);if(e[a]!==t[l])return!1}return!0}static getBounds(e){let t=3,i=3,r=-1,s=-1;for(let o=0;o<9;o++)if(e[o]!==null){const a=o%3,l=Math.floor(o/3);t=Math.min(t,a),i=Math.min(i,l),r=Math.max(r,a),s=Math.max(s,l)}return r<0?null:{x:t,y:i,w:r-t+1,h:s-i+1}}}const FC=({isOpen:n,onClose:e})=>{const{slots:t,swapSlots:i,addItem:r,removeItem:s}=fi(),[o,a]=xt.useState(new Array(9).fill(null)),[l,c]=xt.useState(null),[u,h]=xt.useState("all"),[d,p]=xt.useState(!1);if(!n)return null;const v=xi.matchRecipe(o),y=u==="all"?oc:oc.filter(S=>S.category===u),m=S=>{l!==null?(i(l,S),c(null)):t[S]&&c(S)},f=()=>{v&&(r(v.result.id,v.result.count),a(new Array(9).fill(null)))},g=S=>{if(l!==null&&t[l]){const T=[...o];T[S]=t[l].id,a(T),s(l,1),c(null)}},_=S=>{xi.quickCraft(S,s,t)&&r(S.result.id,S.result.count)},E=()=>{for(const S of o)S!==null&&r(S,1);a(new Array(9).fill(null))},A=[{key:"all",label:"All"},{key:"materials",label:"Materials"},{key:"blocks",label:"Blocks"},{key:"tools",label:"Tools"},{key:"weapons",label:"Weapons"},{key:"food",label:"Food"},{key:"armor",label:"Armor"}];return ee.jsxs("div",{className:"fixed inset-0 z-30 flex items-center justify-center",style:{pointerEvents:"all",fontFamily:"monospace"},children:[ee.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-70",onClick:e}),ee.jsxs("div",{className:"relative flex gap-6 p-6 bg-gray-900 border border-gray-600 rounded-lg max-h-[90vh] overflow-y-auto",children:[ee.jsxs("div",{children:[ee.jsx("h3",{className:"text-white text-sm mb-2 font-bold",children:"Inventory"}),ee.jsx("div",{className:"grid grid-cols-9 gap-1 mb-2",children:t.slice(0,9).map((S,T)=>ee.jsx("div",{onClick:()=>m(T),title:S?Ji(S.id):"",className:`w-12 h-12 flex items-center justify-center border cursor-pointer relative hover:bg-gray-700 ${l===T?"border-yellow-400 bg-gray-700":"border-gray-600 bg-gray-800"}`,children:S&&ee.jsxs(ee.Fragment,{children:[ee.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:_s(S.id)}}),ee.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:S.count>1?S.count:""})]})},T))}),ee.jsx("div",{className:"grid grid-cols-9 gap-1",children:t.slice(9).map((S,T)=>{const O=T+9;return ee.jsx("div",{onClick:()=>m(O),title:S?Ji(S.id):"",className:`w-12 h-12 flex items-center justify-center border cursor-pointer relative hover:bg-gray-700 ${l===O?"border-yellow-400 bg-gray-700":"border-gray-600 bg-gray-800"}`,children:S&&ee.jsxs(ee.Fragment,{children:[ee.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:_s(S.id)}}),ee.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:S.count>1?S.count:""})]})},T)})})]}),ee.jsxs("div",{className:"flex flex-col",children:[ee.jsx("h3",{className:"text-white text-sm mb-2 font-bold",children:"Crafting Table"}),ee.jsx("div",{className:"grid grid-cols-3 gap-1 mb-2",children:o.map((S,T)=>ee.jsx("div",{onClick:()=>g(T),title:S!==null?Ji(S):"",className:"w-12 h-12 flex items-center justify-center border border-gray-600 bg-gray-800 cursor-pointer hover:bg-gray-700",children:S!==null&&ee.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:_s(S)}})},T))}),ee.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[ee.jsx("span",{className:"text-white text-lg",children:"→"}),ee.jsx("div",{onClick:f,title:v?`${Ji(v.result.id)} x${v.result.count}`:"",className:`w-12 h-12 flex items-center justify-center border ${v?"border-green-500 cursor-pointer hover:bg-gray-700 animate-pulse":"border-gray-600"} bg-gray-800`,children:v&&ee.jsx("div",{className:"w-8 h-8 rounded-sm relative",style:{backgroundColor:_s(v.result.id)},children:ee.jsx("span",{className:"absolute bottom-0 right-0 text-white text-xs",children:v.result.count>1?v.result.count:""})})}),v&&ee.jsx("span",{className:"text-green-400 text-xs",children:Ji(v.result.id)})]}),ee.jsx("button",{onClick:E,className:"text-xs text-gray-400 hover:text-white mb-3 cursor-pointer",children:"Clear Grid"}),ee.jsx("div",{className:"flex items-center gap-2 mb-2",children:ee.jsx("button",{onClick:()=>p(!d),className:`text-xs px-2 py-1 rounded cursor-pointer ${d?"bg-green-700 text-white":"bg-gray-700 text-gray-300"}`,children:"Quick Craft"})}),ee.jsx("div",{className:"flex flex-wrap gap-1 mb-2",children:A.map(S=>ee.jsx("button",{onClick:()=>h(S.key),className:`text-xs px-2 py-0.5 rounded cursor-pointer ${u===S.key?"bg-blue-600 text-white":"bg-gray-700 text-gray-400"}`,children:S.label},S.key))}),ee.jsx("div",{className:"max-h-64 overflow-y-auto space-y-1",children:y.map((S,T)=>{const O=xi.canCraft(S,t),M=xi.getRequiredItems(S);return ee.jsx("div",{onClick:()=>d&&O&&_(S),className:`text-xs p-2 rounded border ${O?"border-green-800 bg-gray-800 cursor-pointer hover:bg-gray-700":"border-gray-700 bg-gray-850 opacity-60"} ${d&&O?"hover:bg-green-900":""}`,children:ee.jsxs("div",{className:"flex items-center gap-2",children:[ee.jsx("div",{className:"w-6 h-6 rounded-sm flex-shrink-0",style:{backgroundColor:_s(S.result.id)}}),ee.jsxs("div",{children:[ee.jsxs("div",{className:`${O?"text-green-400":"text-gray-400"}`,children:[S.name," x",S.result.count]}),ee.jsx("div",{className:"text-gray-500 flex flex-wrap gap-x-2",children:Array.from(M.entries()).map(([C,V])=>ee.jsxs("span",{className:BC(C)>=V?"text-gray-400":"text-red-400",children:[Ji(C),":",V]},C))})]}),d&&O&&ee.jsx("span",{className:"text-green-400 ml-auto",children:"Craft"})]})},T)})})]})]})]})};function BC(n){const e=fi.getState().slots;let t=0;for(const i of e)i&&i.id===n&&(t+=i.count);return t}const zC={[rt.PLAINS]:"#4CAF50",[rt.DESERT]:"#FDD835",[rt.TUNDRA]:"#E0E0E0",[rt.MARSH]:"#4E342E",[rt.CRYSTAL_CAVERNS]:"#9C27B0"},HC=({playerX:n,playerZ:e,getBiomeAt:t})=>{const i=xt.useRef(null),r=xt.useRef(0);return xt.useEffect(()=>{if(r.current++,r.current%10!==0)return;const s=i.current;if(!s)return;const o=s.getContext("2d");if(!o)return;const a=64,l=32;for(let c=0;c<a;c++)for(let u=0;u<a;u++){const h=Math.floor(n)+(c-l),d=Math.floor(e)+(u-l),p=t(h,d);o.fillStyle=zC[p]||"#333",o.fillRect(c,u,1,1)}o.fillStyle="#FFFFFF",o.fillRect(l-1,l-1,3,3)}),ee.jsx("canvas",{ref:i,width:64,height:64,className:"fixed top-4 right-4 z-20 border border-gray-600 rounded",style:{imageRendering:"pixelated",width:"96px",height:"96px"}})},GC=({onRespawn:n})=>ee.jsxs("div",{className:"fixed inset-0 z-40 flex flex-col items-center justify-center",style:{background:"radial-gradient(ellipse at center, rgba(139,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)",pointerEvents:"all"},children:[ee.jsx("h1",{className:"text-6xl font-bold text-red-500 mb-8 tracking-widest",children:"YOU DIED"}),ee.jsx("button",{onClick:n,className:"px-8 py-3 bg-gray-800 text-white border border-gray-500 rounded hover:bg-gray-700 text-lg cursor-pointer",children:"Respawn"})]}),VC=({onNewGame:n,onLoadGame:e,hasSave:t})=>{const[i,r]=xt.useState(""),s=()=>{const o=i?parseInt(i)||0:Math.floor(Math.random()*999999);n(o)};return ee.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950",style:{pointerEvents:"all"},children:[ee.jsx("h1",{className:"text-5xl font-bold text-white mb-2 tracking-wider",children:"VOXEL SURVIVAL"}),ee.jsx("p",{className:"text-gray-400 mb-8",children:"A block world awaits"}),ee.jsxs("div",{className:"flex flex-col items-center gap-4 mb-8",children:[ee.jsx("input",{type:"text",placeholder:"Seed (optional)",value:i,onChange:o=>r(o.target.value),className:"px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded w-64 text-center"}),ee.jsx("button",{onClick:s,className:"px-8 py-3 bg-green-700 text-white rounded hover:bg-green-600 text-lg font-bold w-64 cursor-pointer",children:"New Game"}),t&&ee.jsx("button",{onClick:e,className:"px-8 py-3 bg-blue-700 text-white rounded hover:bg-blue-600 text-lg font-bold w-64 cursor-pointer",children:"Load Game"})]}),ee.jsxs("div",{className:"text-gray-500 text-sm max-w-md text-center",children:[ee.jsx("h3",{className:"text-gray-400 font-bold mb-2",children:"Controls"}),ee.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-1 text-left",children:[ee.jsx("span",{children:"WASD"}),ee.jsx("span",{children:"Move"}),ee.jsx("span",{children:"Mouse"}),ee.jsx("span",{children:"Look"}),ee.jsx("span",{children:"Space"}),ee.jsx("span",{children:"Jump"}),ee.jsx("span",{children:"Shift"}),ee.jsx("span",{children:"Sprint"}),ee.jsx("span",{children:"LMB"}),ee.jsx("span",{children:"Break Block"}),ee.jsx("span",{children:"E"}),ee.jsx("span",{children:"Place Block"}),ee.jsx("span",{children:"F"}),ee.jsx("span",{children:"Drink Water"}),ee.jsx("span",{children:"Tab"}),ee.jsx("span",{children:"Inventory"}),ee.jsx("span",{children:"1-9"}),ee.jsx("span",{children:"Hotbar Slot"}),ee.jsx("span",{children:"Scroll"}),ee.jsx("span",{children:"Cycle Slot"}),ee.jsx("span",{children:"F5"}),ee.jsx("span",{children:"Save Game"})]})]})]})},WC=()=>ee.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none",children:ee.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:[ee.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),ee.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"14",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),ee.jsx("line",{x1:"2",y1:"8",x2:"6",y2:"8",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),ee.jsx("line",{x1:"10",y1:"8",x2:"14",y2:"8",stroke:"white",strokeWidth:"1.5",opacity:"0.8"})]})}),XC=()=>{const n=xt.useRef(null),e=xt.useRef(null),[t,i]=xt.useState("menu"),[r,s]=xt.useState(!1),[o,a]=xt.useState({health:100,hunger:100,thirst:100,stamina:100,temperature:.2,mana:100,maxMana:100}),[l,c]=xt.useState([]);xt.useEffect(()=>{const f=new UC;return e.current=f,f.saveManager.hasSave().then(s),()=>{f.stop()}},[]);const u=xt.useCallback(f=>{if(!f||!e.current)return;const g=e.current,_=g.renderer.getDomElement();f.appendChild(_),g.init(_),g.onStateChange=E=>{i(E)},g.onStatsUpdate=E=>{a(E)},g.onPickupNotification=E=>{c([...E])}},[]),h=xt.useCallback(f=>{if(!e.current)return;const g=n.current;g&&u(g),e.current.startGame(f)},[u]),d=xt.useCallback(()=>{if(!e.current)return;const f=n.current;f&&u(f),e.current.loadGame()},[u]),p=xt.useCallback(()=>{e.current?.respawn()},[]),v=xt.useCallback(()=>{e.current&&(e.current.gameState="playing",i("playing"))},[]),y=e.current?.player?.position.x??0,m=e.current?.player?.position.z??0;return ee.jsxs("div",{className:"w-full h-full relative",children:[ee.jsx("div",{ref:n,className:"w-full h-full"}),t==="menu"&&ee.jsx(VC,{onNewGame:h,onLoadGame:d,hasSave:r}),t==="playing"&&ee.jsxs(ee.Fragment,{children:[ee.jsx(cg,{health:o.health,hunger:o.hunger,thirst:o.thirst,stamina:o.stamina,temperature:o.temperature,mana:o.mana,maxMana:o.maxMana,hasStaff:!1,breakProgress:e.current?.blockInteraction?.getBreakProgress()??0,pickupNotifications:l}),ee.jsx(WC,{}),ee.jsx(HC,{playerX:y,playerZ:m,getBiomeAt:(f,g)=>e.current?.getBiomeAt(f,g)??0})]}),t==="inventory"&&ee.jsxs(ee.Fragment,{children:[ee.jsx(cg,{health:o.health,hunger:o.hunger,thirst:o.thirst,stamina:o.stamina,temperature:o.temperature,mana:o.mana,maxMana:o.maxMana,hasStaff:!1,breakProgress:0,pickupNotifications:l}),ee.jsx(FC,{isOpen:!0,onClose:v})]}),t==="dead"&&ee.jsx(GC,{onRespawn:p})]})};Yu.createRoot(document.getElementById("root")).render(ee.jsx(Sg.StrictMode,{children:ee.jsx(XC,{})}));
//# sourceMappingURL=index-B8xKRybn.js.map
