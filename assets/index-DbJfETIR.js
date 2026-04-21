(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function th(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dg={exports:{}},uc={},pg={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),w_=Symbol.for("react.portal"),C_=Symbol.for("react.fragment"),R_=Symbol.for("react.strict_mode"),b_=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),D_=Symbol.for("react.forward_ref"),N_=Symbol.for("react.suspense"),I_=Symbol.for("react.memo"),O_=Symbol.for("react.lazy"),pd=Symbol.iterator;function U_(n){return n===null||typeof n!="object"?null:(n=pd&&n[pd]||n["@@iterator"],typeof n=="function"?n:null)}var mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gg=Object.assign,vg={};function Js(n,e,t){this.props=n,this.context=e,this.refs=vg,this.updater=t||mg}Js.prototype.isReactComponent={};Js.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Js.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function _g(){}_g.prototype=Js.prototype;function nh(n,e,t){this.props=n,this.context=e,this.refs=vg,this.updater=t||mg}var ih=nh.prototype=new _g;ih.constructor=nh;gg(ih,Js.prototype);ih.isPureReactComponent=!0;var md=Array.isArray,yg=Object.prototype.hasOwnProperty,rh={current:null},Sg={key:!0,ref:!0,__self:!0,__source:!0};function xg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yg.call(e,i)&&!Sg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:fa,type:n,key:s,ref:o,props:r,_owner:rh.current}}function k_(n,e){return{$$typeof:fa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function sh(n){return typeof n=="object"&&n!==null&&n.$$typeof===fa}function F_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var gd=/\/+/g;function Bc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?F_(""+n.key):e.toString(36)}function _l(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case fa:case w_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Bc(o,0):i,md(r)?(t="",n!=null&&(t=n.replace(gd,"$&/")+"/"),_l(r,e,t,"",function(c){return c})):r!=null&&(sh(r)&&(r=k_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",md(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Bc(s,a);o+=_l(s,e,t,l,r)}else if(l=U_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Bc(s,a++),o+=_l(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(n,e,t){if(n==null)return n;var i=[],r=0;return _l(n,i,"","",function(s){return e.call(t,s,r++)}),i}function B_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var En={current:null},yl={transition:null},z_={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:yl,ReactCurrentOwner:rh};function Eg(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:Aa,forEach:function(n,e,t){Aa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Aa(n,function(){e++}),e},toArray:function(n){return Aa(n,function(e){return e})||[]},only:function(n){if(!sh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=Js;at.Fragment=C_;at.Profiler=b_;at.PureComponent=nh;at.StrictMode=R_;at.Suspense=N_;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_;at.act=Eg;at.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=gg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)yg.call(e,l)&&!Sg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:fa,type:n.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(n){return n={$$typeof:P_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:L_,_context:n},n.Consumer=n};at.createElement=xg;at.createFactory=function(n){var e=xg.bind(null,n);return e.type=n,e};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:D_,render:n}};at.isValidElement=sh;at.lazy=function(n){return{$$typeof:O_,_payload:{_status:-1,_result:n},_init:B_}};at.memo=function(n,e){return{$$typeof:I_,type:n,compare:e===void 0?null:e}};at.startTransition=function(n){var e=yl.transition;yl.transition={};try{n()}finally{yl.transition=e}};at.unstable_act=Eg;at.useCallback=function(n,e){return En.current.useCallback(n,e)};at.useContext=function(n){return En.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return En.current.useDeferredValue(n)};at.useEffect=function(n,e){return En.current.useEffect(n,e)};at.useId=function(){return En.current.useId()};at.useImperativeHandle=function(n,e,t){return En.current.useImperativeHandle(n,e,t)};at.useInsertionEffect=function(n,e){return En.current.useInsertionEffect(n,e)};at.useLayoutEffect=function(n,e){return En.current.useLayoutEffect(n,e)};at.useMemo=function(n,e){return En.current.useMemo(n,e)};at.useReducer=function(n,e,t){return En.current.useReducer(n,e,t)};at.useRef=function(n){return En.current.useRef(n)};at.useState=function(n){return En.current.useState(n)};at.useSyncExternalStore=function(n,e,t){return En.current.useSyncExternalStore(n,e,t)};at.useTransition=function(){return En.current.useTransition()};at.version="18.3.1";pg.exports=at;var xt=pg.exports;const Mg=th(xt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=xt,G_=Symbol.for("react.element"),V_=Symbol.for("react.fragment"),W_=Object.prototype.hasOwnProperty,X_=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y_={key:!0,ref:!0,__self:!0,__source:!0};function Tg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)W_.call(e,i)&&!Y_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:G_,type:n,key:s,ref:o,props:r,_owner:X_.current}}uc.Fragment=V_;uc.jsx=Tg;uc.jsxs=Tg;dg.exports=uc;var ee=dg.exports,qu={},Ag={exports:{}},Gn={},wg={exports:{}},Cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(B,X){var j=B.length;B.push(X);e:for(;0<j;){var ie=j-1>>>1,le=B[ie];if(0<r(le,X))B[ie]=X,B[j]=le,j=ie;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var X=B[0],j=B.pop();if(j!==X){B[0]=j;e:for(var ie=0,le=B.length,J=le>>>1;ie<J;){var ae=2*(ie+1)-1,ye=B[ae],Ae=ae+1,Ce=B[Ae];if(0>r(ye,j))Ae<le&&0>r(Ce,ye)?(B[ie]=Ce,B[Ae]=j,ie=Ae):(B[ie]=ye,B[ae]=j,ie=ae);else if(Ae<le&&0>r(Ce,j))B[ie]=Ce,B[Ae]=j,ie=Ae;else break e}}return X}function r(B,X){var j=B.sortIndex-X.sortIndex;return j!==0?j:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(B){for(var X=t(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=B)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(c)}}function E(B){if(y=!1,_(B),!g)if(t(l)!==null)g=!0,te(w);else{var X=t(c);X!==null&&se(E,X.startTime-B)}}function w(B,X){g=!1,y&&(y=!1,d(U),U=-1),p=!0;var j=h;try{for(_(X),f=t(l);f!==null&&(!(f.expirationTime>X)||B&&!V());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var le=ie(f.expirationTime<=X);X=n.unstable_now(),typeof le=="function"?f.callback=le:f===t(l)&&i(l),_(X)}else i(l);f=t(l)}if(f!==null)var J=!0;else{var ae=t(c);ae!==null&&se(E,ae.startTime-X),J=!1}return J}finally{f=null,h=j,p=!1}}var S=!1,T=null,U=-1,M=5,C=-1;function V(){return!(n.unstable_now()-C<M)}function Z(){if(T!==null){var B=n.unstable_now();C=B;var X=!0;try{X=T(!0,B)}finally{X?oe():(S=!1,T=null)}}else S=!1}var oe;if(typeof v=="function")oe=function(){v(Z)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,W=F.port2;F.port1.onmessage=Z,oe=function(){W.postMessage(null)}}else oe=function(){m(Z,0)};function te(B){T=B,S||(S=!0,oe())}function se(B,X){U=m(function(){B(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,te(w))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(B){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var j=h;h=X;try{return B()}finally{h=j}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=h;h=B;try{return X()}finally{h=j}},n.unstable_scheduleCallback=function(B,X,j){var ie=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ie+j:ie):j=ie,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=j+le,B={id:u++,callback:X,priorityLevel:B,startTime:j,expirationTime:le,sortIndex:-1},j>ie?(B.sortIndex=j,e(c,B),t(l)===null&&B===t(c)&&(y?(d(U),U=-1):y=!0,se(E,j-ie))):(B.sortIndex=le,e(l,B),g||p||(g=!0,te(w))),B},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(B){var X=h;return function(){var j=h;h=X;try{return B.apply(this,arguments)}finally{h=j}}}})(Cg);wg.exports=Cg;var j_=wg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=xt,Hn=j_;function me(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rg=new Set,Xo={};function Kr(n,e){Hs(n,e),Hs(n+"Capture",e)}function Hs(n,e){for(Xo[n]=e,n=0;n<e.length;n++)Rg.add(e[n])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=Object.prototype.hasOwnProperty,q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},_d={};function $_(n){return $u.call(_d,n)?!0:$u.call(vd,n)?!1:q_.test(n)?_d[n]=!0:(vd[n]=!0,!1)}function Z_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q_(n,e,t,i){if(e===null||typeof e>"u"||Z_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var un={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){un[n]=new Mn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];un[e]=new Mn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){un[n]=new Mn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){un[n]=new Mn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){un[n]=new Mn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){un[n]=new Mn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){un[n]=new Mn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){un[n]=new Mn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){un[n]=new Mn(n,5,!1,n.toLowerCase(),null,!1,!1)});var oh=/[\-:]([a-z])/g;function ah(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(oh,ah);un[e]=new Mn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(oh,ah);un[e]=new Mn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(oh,ah);un[e]=new Mn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){un[n]=new Mn(n,1,!1,n.toLowerCase(),null,!1,!1)});un.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){un[n]=new Mn(n,1,!1,n.toLowerCase(),null,!0,!0)});function lh(n,e,t,i){var r=un.hasOwnProperty(e)?un[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q_(e,t,r,i)&&(t=null),i||r===null?$_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Yi=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),ch=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),bg=Symbol.for("react.provider"),Lg=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Ju=Symbol.for("react.suspense_list"),fh=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),Pg=Symbol.for("react.offscreen"),yd=Symbol.iterator;function lo(n){return n===null||typeof n!="object"?null:(n=yd&&n[yd]||n["@@iterator"],typeof n=="function"?n:null)}var kt=Object.assign,zc;function bo(n){if(zc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);zc=e&&e[1]||""}return`
`+zc+n}var Hc=!1;function Gc(n,e){if(!n||Hc)return"";Hc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?bo(n):""}function J_(n){switch(n.tag){case 5:return bo(n.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return n=Gc(n.type,!1),n;case 11:return n=Gc(n.type.render,!1),n;case 1:return n=Gc(n.type,!0),n;default:return""}}function ef(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ss:return"Fragment";case ys:return"Portal";case Zu:return"Profiler";case ch:return"StrictMode";case Qu:return"Suspense";case Ju:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Lg:return(n.displayName||"Context")+".Consumer";case bg:return(n._context.displayName||"Context")+".Provider";case uh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fh:return e=n.displayName||null,e!==null?e:ef(n.type)||"Memo";case Ji:e=n._payload,n=n._init;try{return ef(n(e))}catch{}}return null}function ey(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ef(e);case 8:return e===ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Dg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ty(n){var e=Dg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ca(n){n._valueTracker||(n._valueTracker=ty(n))}function Ng(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Dg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Pl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function tf(n,e){var t=e.checked;return kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Sd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=_r(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ig(n,e){e=e.checked,e!=null&&lh(n,"checked",e,!1)}function nf(n,e){Ig(n,e);var t=_r(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?rf(n,e.type,t):e.hasOwnProperty("defaultValue")&&rf(n,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function xd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function rf(n,e,t){(e!=="number"||Pl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Lo=Array.isArray;function Ns(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+_r(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function sf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return kt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ed(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(me(92));if(Lo(t)){if(1<t.length)throw Error(me(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:_r(t)}}function Og(n,e){var t=_r(e.value),i=_r(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Md(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ug(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function of(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ug(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ra,kg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Yo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ny=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(n){ny.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Io[e]=Io[n]})});function Fg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Io.hasOwnProperty(n)&&Io[n]?(""+e).trim():e+"px"}function Bg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Fg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var iy=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function af(n,e){if(e){if(iy[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function lf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function hh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var uf=null,Is=null,Os=null;function Td(n){if(n=pa(n)){if(typeof uf!="function")throw Error(me(280));var e=n.stateNode;e&&(e=mc(e),uf(n.stateNode,n.type,e))}}function zg(n){Is?Os?Os.push(n):Os=[n]:Is=n}function Hg(){if(Is){var n=Is,e=Os;if(Os=Is=null,Td(n),e)for(n=0;n<e.length;n++)Td(e[n])}}function Gg(n,e){return n(e)}function Vg(){}var Vc=!1;function Wg(n,e,t){if(Vc)return n(e,t);Vc=!0;try{return Gg(n,e,t)}finally{Vc=!1,(Is!==null||Os!==null)&&(Vg(),Hg())}}function jo(n,e){var t=n.stateNode;if(t===null)return null;var i=mc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(me(231,e,typeof t));return t}var ff=!1;if(Bi)try{var co={};Object.defineProperty(co,"passive",{get:function(){ff=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{ff=!1}function ry(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Oo=!1,Dl=null,Nl=!1,hf=null,sy={onError:function(n){Oo=!0,Dl=n}};function oy(n,e,t,i,r,s,o,a,l){Oo=!1,Dl=null,ry.apply(sy,arguments)}function ay(n,e,t,i,r,s,o,a,l){if(oy.apply(this,arguments),Oo){if(Oo){var c=Dl;Oo=!1,Dl=null}else throw Error(me(198));Nl||(Nl=!0,hf=c)}}function qr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Xg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Ad(n){if(qr(n)!==n)throw Error(me(188))}function ly(n){var e=n.alternate;if(!e){if(e=qr(n),e===null)throw Error(me(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Ad(r),n;if(s===i)return Ad(r),e;s=s.sibling}throw Error(me(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(t.alternate!==i)throw Error(me(190))}if(t.tag!==3)throw Error(me(188));return t.stateNode.current===t?n:e}function Yg(n){return n=ly(n),n!==null?jg(n):null}function jg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=jg(n);if(e!==null)return e;n=n.sibling}return null}var Kg=Hn.unstable_scheduleCallback,wd=Hn.unstable_cancelCallback,cy=Hn.unstable_shouldYield,uy=Hn.unstable_requestPaint,Ht=Hn.unstable_now,fy=Hn.unstable_getCurrentPriorityLevel,dh=Hn.unstable_ImmediatePriority,qg=Hn.unstable_UserBlockingPriority,Il=Hn.unstable_NormalPriority,hy=Hn.unstable_LowPriority,$g=Hn.unstable_IdlePriority,fc=null,Mi=null;function dy(n){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(fc,n,void 0,(n.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:gy,py=Math.log,my=Math.LN2;function gy(n){return n>>>=0,n===0?32:31-(py(n)/my|0)|0}var ba=64,La=4194304;function Po(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ol(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Po(a):(s&=o,s!==0&&(i=Po(s)))}else o=t&~r,o!==0?i=Po(o):s!==0&&(i=Po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-di(e),r=1<<t,i|=n[t],e&=~r;return i}function vy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _y(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=vy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function df(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Zg(){var n=ba;return ba<<=1,!(ba&4194240)&&(ba=64),n}function Wc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ha(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-di(e),n[e]=t}function yy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-di(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ph(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-di(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var mt=0;function Qg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Jg,mh,e0,t0,n0,pf=!1,Pa=[],lr=null,cr=null,ur=null,Ko=new Map,qo=new Map,nr=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(n,e){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function uo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=pa(e),e!==null&&mh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function xy(n,e,t,i,r){switch(e){case"focusin":return lr=uo(lr,n,e,t,i,r),!0;case"dragenter":return cr=uo(cr,n,e,t,i,r),!0;case"mouseover":return ur=uo(ur,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ko.set(s,uo(Ko.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qo.set(s,uo(qo.get(s)||null,n,e,t,i,r)),!0}return!1}function i0(n){var e=Ir(n.target);if(e!==null){var t=qr(e);if(t!==null){if(e=t.tag,e===13){if(e=Xg(t),e!==null){n.blockedOn=e,n0(n.priority,function(){e0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=mf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);cf=i,t.target.dispatchEvent(i),cf=null}else return e=pa(t),e!==null&&mh(e),n.blockedOn=t,!1;e.shift()}return!0}function Rd(n,e,t){Sl(n)&&t.delete(e)}function Ey(){pf=!1,lr!==null&&Sl(lr)&&(lr=null),cr!==null&&Sl(cr)&&(cr=null),ur!==null&&Sl(ur)&&(ur=null),Ko.forEach(Rd),qo.forEach(Rd)}function fo(n,e){n.blockedOn===e&&(n.blockedOn=null,pf||(pf=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,Ey)))}function $o(n){function e(r){return fo(r,n)}if(0<Pa.length){fo(Pa[0],n);for(var t=1;t<Pa.length;t++){var i=Pa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(lr!==null&&fo(lr,n),cr!==null&&fo(cr,n),ur!==null&&fo(ur,n),Ko.forEach(e),qo.forEach(e),t=0;t<nr.length;t++)i=nr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<nr.length&&(t=nr[0],t.blockedOn===null);)i0(t),t.blockedOn===null&&nr.shift()}var Us=Yi.ReactCurrentBatchConfig,Ul=!0;function My(n,e,t,i){var r=mt,s=Us.transition;Us.transition=null;try{mt=1,gh(n,e,t,i)}finally{mt=r,Us.transition=s}}function Ty(n,e,t,i){var r=mt,s=Us.transition;Us.transition=null;try{mt=4,gh(n,e,t,i)}finally{mt=r,Us.transition=s}}function gh(n,e,t,i){if(Ul){var r=mf(n,e,t,i);if(r===null)eu(n,e,i,kl,t),Cd(n,i);else if(xy(r,n,e,t,i))i.stopPropagation();else if(Cd(n,i),e&4&&-1<Sy.indexOf(n)){for(;r!==null;){var s=pa(r);if(s!==null&&Jg(s),s=mf(n,e,t,i),s===null&&eu(n,e,i,kl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else eu(n,e,i,null,t)}}var kl=null;function mf(n,e,t,i){if(kl=null,n=hh(i),n=Ir(n),n!==null)if(e=qr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Xg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return kl=n,null}function r0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fy()){case dh:return 1;case qg:return 4;case Il:case hy:return 16;case $g:return 536870912;default:return 16}default:return 16}}var rr=null,vh=null,xl=null;function s0(){if(xl)return xl;var n,e=vh,t=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return xl=r.slice(n,1<i?1-i:void 0)}function El(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Da(){return!0}function bd(){return!1}function Vn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:bd,this.isPropagationStopped=bd,this}return kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=Vn(eo),da=kt({},eo,{view:0,detail:0}),Ay=Vn(da),Xc,Yc,ho,hc=kt({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ho&&(ho&&n.type==="mousemove"?(Xc=n.screenX-ho.screenX,Yc=n.screenY-ho.screenY):Yc=Xc=0,ho=n),Xc)},movementY:function(n){return"movementY"in n?n.movementY:Yc}}),Ld=Vn(hc),wy=kt({},hc,{dataTransfer:0}),Cy=Vn(wy),Ry=kt({},da,{relatedTarget:0}),jc=Vn(Ry),by=kt({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=Vn(by),Py=kt({},eo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Dy=Vn(Py),Ny=kt({},eo,{data:0}),Pd=Vn(Ny),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Uy[n])?!!e[n]:!1}function yh(){return ky}var Fy=kt({},da,{key:function(n){if(n.key){var e=Iy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=El(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Oy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(n){return n.type==="keypress"?El(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?El(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),By=Vn(Fy),zy=kt({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=Vn(zy),Hy=kt({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),Gy=Vn(Hy),Vy=kt({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=Vn(Vy),Xy=kt({},hc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=Vn(Xy),jy=[9,13,27,32],Sh=Bi&&"CompositionEvent"in window,Uo=null;Bi&&"documentMode"in document&&(Uo=document.documentMode);var Ky=Bi&&"TextEvent"in window&&!Uo,o0=Bi&&(!Sh||Uo&&8<Uo&&11>=Uo),Nd=" ",Id=!1;function a0(n,e){switch(n){case"keyup":return jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function qy(n,e){switch(n){case"compositionend":return l0(e);case"keypress":return e.which!==32?null:(Id=!0,Nd);case"textInput":return n=e.data,n===Nd&&Id?null:n;default:return null}}function $y(n,e){if(xs)return n==="compositionend"||!Sh&&a0(n,e)?(n=s0(),xl=vh=rr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o0&&e.locale!=="ko"?null:e.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Zy[n.type]:e==="textarea"}function c0(n,e,t,i){zg(i),e=Fl(e,"onChange"),0<e.length&&(t=new _h("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ko=null,Zo=null;function Qy(n){S0(n,0)}function dc(n){var e=Ts(n);if(Ng(e))return n}function Jy(n,e){if(n==="change")return e}var u0=!1;if(Bi){var Kc;if(Bi){var qc="oninput"in document;if(!qc){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),qc=typeof Ud.oninput=="function"}Kc=qc}else Kc=!1;u0=Kc&&(!document.documentMode||9<document.documentMode)}function kd(){ko&&(ko.detachEvent("onpropertychange",f0),Zo=ko=null)}function f0(n){if(n.propertyName==="value"&&dc(Zo)){var e=[];c0(e,Zo,n,hh(n)),Wg(Qy,e)}}function eS(n,e,t){n==="focusin"?(kd(),ko=e,Zo=t,ko.attachEvent("onpropertychange",f0)):n==="focusout"&&kd()}function tS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return dc(Zo)}function nS(n,e){if(n==="click")return dc(e)}function iS(n,e){if(n==="input"||n==="change")return dc(e)}function rS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mi=typeof Object.is=="function"?Object.is:rS;function Qo(n,e){if(mi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!$u.call(e,r)||!mi(n[r],e[r]))return!1}return!0}function Fd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bd(n,e){var t=Fd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fd(t)}}function h0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?h0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function d0(){for(var n=window,e=Pl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Pl(n.document)}return e}function xh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function sS(n){var e=d0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&h0(t.ownerDocument.documentElement,t)){if(i!==null&&xh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Bd(t,s);var o=Bd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var oS=Bi&&"documentMode"in document&&11>=document.documentMode,Es=null,gf=null,Fo=null,vf=!1;function zd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;vf||Es==null||Es!==Pl(i)||(i=Es,"selectionStart"in i&&xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&Qo(Fo,i)||(Fo=i,i=Fl(gf,"onSelect"),0<i.length&&(e=new _h("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Es)))}function Na(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ms={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},$c={},p0={};Bi&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function pc(n){if($c[n])return $c[n];if(!Ms[n])return n;var e=Ms[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in p0)return $c[n]=e[t];return n}var m0=pc("animationend"),g0=pc("animationiteration"),v0=pc("animationstart"),_0=pc("transitionend"),y0=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,e){y0.set(n,e),Kr(e,[n])}for(var Zc=0;Zc<Hd.length;Zc++){var Qc=Hd[Zc],aS=Qc.toLowerCase(),lS=Qc[0].toUpperCase()+Qc.slice(1);Sr(aS,"on"+lS)}Sr(m0,"onAnimationEnd");Sr(g0,"onAnimationIteration");Sr(v0,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(_0,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Gd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ay(i,e,void 0,n),n.currentTarget=null}function S0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gd(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gd(r,a,c),s=l}}}if(Nl)throw n=hf,Nl=!1,hf=null,n}function Rt(n,e){var t=e[Ef];t===void 0&&(t=e[Ef]=new Set);var i=n+"__bubble";t.has(i)||(x0(e,n,2,!1),t.add(i))}function Jc(n,e,t){var i=0;e&&(i|=4),x0(t,n,i,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Jo(n){if(!n[Ia]){n[Ia]=!0,Rg.forEach(function(t){t!=="selectionchange"&&(cS.has(t)||Jc(t,!1,n),Jc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Jc("selectionchange",!1,e))}}function x0(n,e,t,i){switch(r0(e)){case 1:var r=My;break;case 4:r=Ty;break;default:r=gh}t=r.bind(null,e,t,n),r=void 0,!ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function eu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Wg(function(){var c=s,u=hh(t),f=[];e:{var h=y0.get(n);if(h!==void 0){var p=_h,g=n;switch(n){case"keypress":if(El(t)===0)break e;case"keydown":case"keyup":p=By;break;case"focusin":g="focus",p=jc;break;case"focusout":g="blur",p=jc;break;case"beforeblur":case"afterblur":p=jc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Gy;break;case m0:case g0:case v0:p=Ly;break;case _0:p=Wy;break;case"scroll":p=Ay;break;case"wheel":p=Yy;break;case"copy":case"cut":case"paste":p=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dd}var y=(e&4)!==0,m=!y&&n==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,_;v!==null;){_=v;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,d!==null&&(E=jo(v,d),E!=null&&y.push(ea(v,E,_)))),m)break;v=v.return}0<y.length&&(h=new p(h,g,null,t,u),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==cf&&(g=t.relatedTarget||t.fromElement)&&(Ir(g)||g[zi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Ir(g):null,g!==null&&(m=qr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Ld,E="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(y=Dd,E="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:Ts(p),_=g==null?h:Ts(g),h=new y(E,v+"leave",p,t,u),h.target=m,h.relatedTarget=_,E=null,Ir(u)===c&&(y=new y(d,v+"enter",g,t,u),y.target=_,y.relatedTarget=m,E=y),m=E,p&&g)t:{for(y=p,d=g,v=0,_=y;_;_=es(_))v++;for(_=0,E=d;E;E=es(E))_++;for(;0<v-_;)y=es(y),v--;for(;0<_-v;)d=es(d),_--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=es(y),d=es(d)}y=null}else y=null;p!==null&&Vd(f,h,p,y,!1),g!==null&&m!==null&&Vd(f,m,g,y,!0)}}e:{if(h=c?Ts(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=Jy;else if(Od(h))if(u0)w=iS;else{w=tS;var S=eS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=nS);if(w&&(w=w(n,c))){c0(f,w,t,u);break e}S&&S(n,h,c),n==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&rf(h,"number",h.value)}switch(S=c?Ts(c):window,n){case"focusin":(Od(S)||S.contentEditable==="true")&&(Es=S,gf=c,Fo=null);break;case"focusout":Fo=gf=Es=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,zd(f,t,u);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":zd(f,t,u)}var T;if(Sh)e:{switch(n){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else xs?a0(n,t)&&(U="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(U="onCompositionStart");U&&(o0&&t.locale!=="ko"&&(xs||U!=="onCompositionStart"?U==="onCompositionEnd"&&xs&&(T=s0()):(rr=u,vh="value"in rr?rr.value:rr.textContent,xs=!0)),S=Fl(c,U),0<S.length&&(U=new Pd(U,n,null,t,u),f.push({event:U,listeners:S}),T?U.data=T:(T=l0(t),T!==null&&(U.data=T)))),(T=Ky?qy(n,t):$y(n,t))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(u=new Pd("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=T))}S0(f,e)})}function ea(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Fl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jo(n,t),s!=null&&i.unshift(ea(n,s,r)),s=jo(n,e),s!=null&&i.push(ea(n,s,r))),n=n.return}return i}function es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vd(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=jo(t,s),l!=null&&o.unshift(ea(t,l,a))):r||(l=jo(t,s),l!=null&&o.push(ea(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var uS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function Wd(n){return(typeof n=="string"?n:""+n).replace(uS,`
`).replace(fS,"")}function Oa(n,e,t){if(e=Wd(e),Wd(n)!==e&&t)throw Error(me(425))}function Bl(){}var _f=null,yf=null;function Sf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(n){return Xd.resolve(null).then(n).catch(pS)}:xf;function pS(n){setTimeout(function(){throw n})}function tu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),$o(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);$o(e)}function fr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Yd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var to=Math.random().toString(36).slice(2),Si="__reactFiber$"+to,ta="__reactProps$"+to,zi="__reactContainer$"+to,Ef="__reactEvents$"+to,mS="__reactListeners$"+to,gS="__reactHandles$"+to;function Ir(n){var e=n[Si];if(e)return e;for(var t=n.parentNode;t;){if(e=t[zi]||t[Si]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Yd(n);n!==null;){if(t=n[Si])return t;n=Yd(n)}return e}n=t,t=n.parentNode}return null}function pa(n){return n=n[Si]||n[zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(me(33))}function mc(n){return n[ta]||null}var Mf=[],As=-1;function xr(n){return{current:n}}function Lt(n){0>As||(n.current=Mf[As],Mf[As]=null,As--)}function wt(n,e){As++,Mf[As]=n.current,n.current=e}var yr={},gn=xr(yr),Ln=xr(!1),Gr=yr;function Gs(n,e){var t=n.type.contextTypes;if(!t)return yr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Pn(n){return n=n.childContextTypes,n!=null}function zl(){Lt(Ln),Lt(gn)}function jd(n,e,t){if(gn.current!==yr)throw Error(me(168));wt(gn,e),wt(Ln,t)}function E0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,ey(n)||"Unknown",r));return kt({},t,i)}function Hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||yr,Gr=gn.current,wt(gn,n),wt(Ln,Ln.current),!0}function Kd(n,e,t){var i=n.stateNode;if(!i)throw Error(me(169));t?(n=E0(n,e,Gr),i.__reactInternalMemoizedMergedChildContext=n,Lt(Ln),Lt(gn),wt(gn,n)):Lt(Ln),wt(Ln,t)}var Ni=null,gc=!1,nu=!1;function M0(n){Ni===null?Ni=[n]:Ni.push(n)}function vS(n){gc=!0,M0(n)}function Er(){if(!nu&&Ni!==null){nu=!0;var n=0,e=mt;try{var t=Ni;for(mt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ni=null,gc=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(n+1)),Kg(dh,Er),r}finally{mt=e,nu=!1}}return null}var ws=[],Cs=0,Gl=null,Vl=0,Kn=[],qn=0,Vr=null,Ii=1,Oi="";function Rr(n,e){ws[Cs++]=Vl,ws[Cs++]=Gl,Gl=n,Vl=e}function T0(n,e,t){Kn[qn++]=Ii,Kn[qn++]=Oi,Kn[qn++]=Vr,Vr=n;var i=Ii;n=Oi;var r=32-di(i)-1;i&=~(1<<r),t+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-di(e)+r|t<<r|i,Oi=s+n}else Ii=1<<s|t<<r|i,Oi=n}function Eh(n){n.return!==null&&(Rr(n,1),T0(n,1,0))}function Mh(n){for(;n===Gl;)Gl=ws[--Cs],ws[Cs]=null,Vl=ws[--Cs],ws[Cs]=null;for(;n===Vr;)Vr=Kn[--qn],Kn[qn]=null,Oi=Kn[--qn],Kn[qn]=null,Ii=Kn[--qn],Kn[qn]=null}var zn=null,Bn=null,Dt=!1,ci=null;function A0(n,e){var t=Qn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function qd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,zn=n,Bn=fr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,zn=n,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Vr!==null?{id:Ii,overflow:Oi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Qn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,zn=n,Bn=null,!0):!1;default:return!1}}function Tf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Af(n){if(Dt){var e=Bn;if(e){var t=e;if(!qd(n,e)){if(Tf(n))throw Error(me(418));e=fr(t.nextSibling);var i=zn;e&&qd(n,e)?A0(i,t):(n.flags=n.flags&-4097|2,Dt=!1,zn=n)}}else{if(Tf(n))throw Error(me(418));n.flags=n.flags&-4097|2,Dt=!1,zn=n}}}function $d(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Ua(n){if(n!==zn)return!1;if(!Dt)return $d(n),Dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Sf(n.type,n.memoizedProps)),e&&(e=Bn)){if(Tf(n))throw w0(),Error(me(418));for(;e;)A0(n,e),e=fr(e.nextSibling)}if($d(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(me(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Bn=fr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Bn=null}}else Bn=zn?fr(n.stateNode.nextSibling):null;return!0}function w0(){for(var n=Bn;n;)n=fr(n.nextSibling)}function Vs(){Bn=zn=null,Dt=!1}function Th(n){ci===null?ci=[n]:ci.push(n)}var _S=Yi.ReactCurrentBatchConfig;function po(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(me(309));var i=t.stateNode}if(!i)throw Error(me(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(me(284));if(!t._owner)throw Error(me(290,n))}return n}function ka(n,e){throw n=Object.prototype.toString.call(e),Error(me(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Zd(n){var e=n._init;return e(n._payload)}function C0(n){function e(d,v){if(n){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=mr(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,n?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,_,E){return v===null||v.tag!==6?(v=cu(_,d.mode,E),v.return=d,v):(v=r(v,_),v.return=d,v)}function l(d,v,_,E){var w=_.type;return w===Ss?u(d,v,_.props.children,E,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ji&&Zd(w)===v.type)?(E=r(v,_.props),E.ref=po(d,v,_),E.return=d,E):(E=bl(_.type,_.key,_.props,null,d.mode,E),E.ref=po(d,v,_),E.return=d,E)}function c(d,v,_,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=uu(_,d.mode,E),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function u(d,v,_,E,w){return v===null||v.tag!==7?(v=Fr(_,d.mode,E,w),v.return=d,v):(v=r(v,_),v.return=d,v)}function f(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=cu(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return _=bl(v.type,v.key,v.props,null,d.mode,_),_.ref=po(d,null,v),_.return=d,_;case ys:return v=uu(v,d.mode,_),v.return=d,v;case Ji:var E=v._init;return f(d,E(v._payload),_)}if(Lo(v)||lo(v))return v=Fr(v,d.mode,_,null),v.return=d,v;ka(d,v)}return null}function h(d,v,_,E){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(d,v,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wa:return _.key===w?l(d,v,_,E):null;case ys:return _.key===w?c(d,v,_,E):null;case Ji:return w=_._init,h(d,v,w(_._payload),E)}if(Lo(_)||lo(_))return w!==null?null:u(d,v,_,E,null);ka(d,_)}return null}function p(d,v,_,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(_)||null,a(v,d,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case wa:return d=d.get(E.key===null?_:E.key)||null,l(v,d,E,w);case ys:return d=d.get(E.key===null?_:E.key)||null,c(v,d,E,w);case Ji:var S=E._init;return p(d,v,_,S(E._payload),w)}if(Lo(E)||lo(E))return d=d.get(_)||null,u(v,d,E,w,null);ka(v,E)}return null}function g(d,v,_,E){for(var w=null,S=null,T=v,U=v=0,M=null;T!==null&&U<_.length;U++){T.index>U?(M=T,T=null):M=T.sibling;var C=h(d,T,_[U],E);if(C===null){T===null&&(T=M);break}n&&T&&C.alternate===null&&e(d,T),v=s(C,v,U),S===null?w=C:S.sibling=C,S=C,T=M}if(U===_.length)return t(d,T),Dt&&Rr(d,U),w;if(T===null){for(;U<_.length;U++)T=f(d,_[U],E),T!==null&&(v=s(T,v,U),S===null?w=T:S.sibling=T,S=T);return Dt&&Rr(d,U),w}for(T=i(d,T);U<_.length;U++)M=p(T,d,U,_[U],E),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?U:M.key),v=s(M,v,U),S===null?w=M:S.sibling=M,S=M);return n&&T.forEach(function(V){return e(d,V)}),Dt&&Rr(d,U),w}function y(d,v,_,E){var w=lo(_);if(typeof w!="function")throw Error(me(150));if(_=w.call(_),_==null)throw Error(me(151));for(var S=w=null,T=v,U=v=0,M=null,C=_.next();T!==null&&!C.done;U++,C=_.next()){T.index>U?(M=T,T=null):M=T.sibling;var V=h(d,T,C.value,E);if(V===null){T===null&&(T=M);break}n&&T&&V.alternate===null&&e(d,T),v=s(V,v,U),S===null?w=V:S.sibling=V,S=V,T=M}if(C.done)return t(d,T),Dt&&Rr(d,U),w;if(T===null){for(;!C.done;U++,C=_.next())C=f(d,C.value,E),C!==null&&(v=s(C,v,U),S===null?w=C:S.sibling=C,S=C);return Dt&&Rr(d,U),w}for(T=i(d,T);!C.done;U++,C=_.next())C=p(T,d,U,C.value,E),C!==null&&(n&&C.alternate!==null&&T.delete(C.key===null?U:C.key),v=s(C,v,U),S===null?w=C:S.sibling=C,S=C);return n&&T.forEach(function(Z){return e(d,Z)}),Dt&&Rr(d,U),w}function m(d,v,_,E){if(typeof _=="object"&&_!==null&&_.type===Ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case wa:e:{for(var w=_.key,S=v;S!==null;){if(S.key===w){if(w=_.type,w===Ss){if(S.tag===7){t(d,S.sibling),v=r(S,_.props.children),v.return=d,d=v;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ji&&Zd(w)===S.type){t(d,S.sibling),v=r(S,_.props),v.ref=po(d,S,_),v.return=d,d=v;break e}t(d,S);break}else e(d,S);S=S.sibling}_.type===Ss?(v=Fr(_.props.children,d.mode,E,_.key),v.return=d,d=v):(E=bl(_.type,_.key,_.props,null,d.mode,E),E.ref=po(d,v,_),E.return=d,d=E)}return o(d);case ys:e:{for(S=_.key;v!==null;){if(v.key===S)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=uu(_,d.mode,E),v.return=d,d=v}return o(d);case Ji:return S=_._init,m(d,v,S(_._payload),E)}if(Lo(_))return g(d,v,_,E);if(lo(_))return y(d,v,_,E);ka(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,_),v.return=d,d=v):(t(d,v),v=cu(_,d.mode,E),v.return=d,d=v),o(d)):t(d,v)}return m}var Ws=C0(!0),R0=C0(!1),Wl=xr(null),Xl=null,Rs=null,Ah=null;function wh(){Ah=Rs=Xl=null}function Ch(n){var e=Wl.current;Lt(Wl),n._currentValue=e}function wf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ks(n,e){Xl=n,Ah=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Rn=!0),n.firstContext=null)}function ei(n){var e=n._currentValue;if(Ah!==n)if(n={context:n,memoizedValue:e,next:null},Rs===null){if(Xl===null)throw Error(me(308));Rs=n,Xl.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return e}var Or=null;function Rh(n){Or===null?Or=[n]:Or.push(n)}function b0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Rh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Hi(n,i)}function Hi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var er=!1;function bh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(n,t)}return r=i.interleaved,r===null?(e.next=e,Rh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(n,t)}function Ml(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ph(n,t)}}function Qd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Yl(n,e,t,i){var r=n.updateQueue;er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,y=a;switch(h=e,p=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=kt({},f,h);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,n.lanes=o,n.memoizedState=f}}function Jd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var ma={},Ti=xr(ma),na=xr(ma),ia=xr(ma);function Ur(n){if(n===ma)throw Error(me(174));return n}function Lh(n,e){switch(wt(ia,e),wt(na,n),wt(Ti,ma),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:of(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=of(e,n)}Lt(Ti),wt(Ti,e)}function Xs(){Lt(Ti),Lt(na),Lt(ia)}function P0(n){Ur(ia.current);var e=Ur(Ti.current),t=of(e,n.type);e!==t&&(wt(na,n),wt(Ti,t))}function Ph(n){na.current===n&&(Lt(Ti),Lt(na))}var Ot=xr(0);function jl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var iu=[];function Dh(){for(var n=0;n<iu.length;n++)iu[n]._workInProgressVersionPrimary=null;iu.length=0}var Tl=Yi.ReactCurrentDispatcher,ru=Yi.ReactCurrentBatchConfig,Wr=0,Ut=null,Kt=null,en=null,Kl=!1,Bo=!1,ra=0,yS=0;function fn(){throw Error(me(321))}function Nh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!mi(n[t],e[t]))return!1;return!0}function Ih(n,e,t,i,r,s){if(Wr=s,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=n===null||n.memoizedState===null?MS:TS,n=t(i,r),Bo){s=0;do{if(Bo=!1,ra=0,25<=s)throw Error(me(301));s+=1,en=Kt=null,e.updateQueue=null,Tl.current=AS,n=t(i,r)}while(Bo)}if(Tl.current=ql,e=Kt!==null&&Kt.next!==null,Wr=0,en=Kt=Ut=null,Kl=!1,e)throw Error(me(300));return n}function Oh(){var n=ra!==0;return ra=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Ut.memoizedState=en=n:en=en.next=n,en}function ti(){if(Kt===null){var n=Ut.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var e=en===null?Ut.memoizedState:en.next;if(e!==null)en=e,Kt=n;else{if(n===null)throw Error(me(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},en===null?Ut.memoizedState=en=n:en=en.next=n}return en}function sa(n,e){return typeof e=="function"?e(n):e}function su(n){var e=ti(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=Kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ut.lanes|=u,Xr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,mi(i,e.memoizedState)||(Rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ut.lanes|=s,Xr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ou(n){var e=ti(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);mi(s,e.memoizedState)||(Rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function D0(){}function N0(n,e){var t=Ut,i=ti(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,Rn=!0),i=i.queue,Uh(U0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||en!==null&&en.memoizedState.tag&1){if(t.flags|=2048,oa(9,O0.bind(null,t,i,r,e),void 0,null),tn===null)throw Error(me(349));Wr&30||I0(t,e,r)}return r}function I0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function O0(n,e,t,i){e.value=t,e.getSnapshot=i,k0(e)&&F0(n)}function U0(n,e,t){return t(function(){k0(e)&&F0(n)})}function k0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mi(n,t)}catch{return!0}}function F0(n){var e=Hi(n,1);e!==null&&pi(e,n,1,-1)}function ep(n){var e=_i();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},e.queue=n,n=n.dispatch=ES.bind(null,Ut,n),[e.memoizedState,n]}function oa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function B0(){return ti().memoizedState}function Al(n,e,t,i){var r=_i();Ut.flags|=n,r.memoizedState=oa(1|e,t,void 0,i===void 0?null:i)}function vc(n,e,t,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Kt!==null){var o=Kt.memoizedState;if(s=o.destroy,i!==null&&Nh(i,o.deps)){r.memoizedState=oa(e,t,s,i);return}}Ut.flags|=n,r.memoizedState=oa(1|e,t,s,i)}function tp(n,e){return Al(8390656,8,n,e)}function Uh(n,e){return vc(2048,8,n,e)}function z0(n,e){return vc(4,2,n,e)}function H0(n,e){return vc(4,4,n,e)}function G0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function V0(n,e,t){return t=t!=null?t.concat([n]):null,vc(4,4,G0.bind(null,e,n),t)}function kh(){}function W0(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function X0(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Y0(n,e,t){return Wr&21?(mi(t,e)||(t=Zg(),Ut.lanes|=t,Xr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=t)}function SS(n,e){var t=mt;mt=t!==0&&4>t?t:4,n(!0);var i=ru.transition;ru.transition={};try{n(!1),e()}finally{mt=t,ru.transition=i}}function j0(){return ti().memoizedState}function xS(n,e,t){var i=pr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},K0(n))q0(e,t);else if(t=b0(n,e,t,i),t!==null){var r=Sn();pi(t,n,i,r),$0(t,e,i)}}function ES(n,e,t){var i=pr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(K0(n))q0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,mi(a,o)){var l=e.interleaved;l===null?(r.next=r,Rh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=b0(n,e,r,i),t!==null&&(r=Sn(),pi(t,n,i,r),$0(t,e,i))}}function K0(n){var e=n.alternate;return n===Ut||e!==null&&e===Ut}function q0(n,e){Bo=Kl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function $0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ph(n,t)}}var ql={readContext:ei,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},MS={readContext:ei,useCallback:function(n,e){return _i().memoizedState=[n,e===void 0?null:e],n},useContext:ei,useEffect:tp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Al(4194308,4,G0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Al(4194308,4,n,e)},useInsertionEffect:function(n,e){return Al(4,2,n,e)},useMemo:function(n,e){var t=_i();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=_i();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=xS.bind(null,Ut,n),[i.memoizedState,n]},useRef:function(n){var e=_i();return n={current:n},e.memoizedState=n},useState:ep,useDebugValue:kh,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=ep(!1),e=n[0];return n=SS.bind(null,n[1]),_i().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ut,r=_i();if(Dt){if(t===void 0)throw Error(me(407));t=t()}else{if(t=e(),tn===null)throw Error(me(349));Wr&30||I0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,tp(U0.bind(null,i,s,n),[n]),i.flags|=2048,oa(9,O0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=_i(),e=tn.identifierPrefix;if(Dt){var t=Oi,i=Ii;t=(i&~(1<<32-di(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ra++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=yS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:ei,useCallback:W0,useContext:ei,useEffect:Uh,useImperativeHandle:V0,useInsertionEffect:z0,useLayoutEffect:H0,useMemo:X0,useReducer:su,useRef:B0,useState:function(){return su(sa)},useDebugValue:kh,useDeferredValue:function(n){var e=ti();return Y0(e,Kt.memoizedState,n)},useTransition:function(){var n=su(sa)[0],e=ti().memoizedState;return[n,e]},useMutableSource:D0,useSyncExternalStore:N0,useId:j0,unstable_isNewReconciler:!1},AS={readContext:ei,useCallback:W0,useContext:ei,useEffect:Uh,useImperativeHandle:V0,useInsertionEffect:z0,useLayoutEffect:H0,useMemo:X0,useReducer:ou,useRef:B0,useState:function(){return ou(sa)},useDebugValue:kh,useDeferredValue:function(n){var e=ti();return Kt===null?e.memoizedState=n:Y0(e,Kt.memoizedState,n)},useTransition:function(){var n=ou(sa)[0],e=ti().memoizedState;return[n,e]},useMutableSource:D0,useSyncExternalStore:N0,useId:j0,unstable_isNewReconciler:!1};function ai(n,e){if(n&&n.defaultProps){e=kt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Cf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:kt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var _c={isMounted:function(n){return(n=n._reactInternals)?qr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Sn(),r=pr(n),s=ki(i,r);s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(pi(e,n,r,i),Ml(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Sn(),r=pr(n),s=ki(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(pi(e,n,r,i),Ml(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Sn(),i=pr(n),r=ki(t,i);r.tag=2,e!=null&&(r.callback=e),e=hr(n,r,i),e!==null&&(pi(e,n,i,t),Ml(e,n,i))}};function np(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qo(t,i)||!Qo(r,s):!0}function Z0(n,e,t){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=Pn(e)?Gr:gn.current,i=e.contextTypes,s=(i=i!=null)?Gs(n,r):yr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function ip(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&_c.enqueueReplaceState(e,e.state,null)}function Rf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},bh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=Pn(e)?Gr:gn.current,r.context=Gs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_c.enqueueReplaceState(r,r.state,null),Yl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,e){try{var t="",i=e;do t+=J_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function au(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function bf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var wS=typeof WeakMap=="function"?WeakMap:Map;function Q0(n,e,t){t=ki(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Zl||(Zl=!0,Bf=i),bf(n,e)},t}function J0(n,e,t){t=ki(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){bf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){bf(n,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function rp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new wS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=zS.bind(null,n,e,t),e.then(n,n))}function sp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function op(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ki(-1,1),e.tag=2,hr(t,e,1))),t.lanes|=1),n)}var CS=Yi.ReactCurrentOwner,Rn=!1;function _n(n,e,t,i){e.child=n===null?R0(e,null,t,i):Ws(e,n.child,t,i)}function ap(n,e,t,i,r){t=t.render;var s=e.ref;return ks(e,r),i=Ih(n,e,t,i,s,r),t=Oh(),n!==null&&!Rn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gi(n,e,r)):(Dt&&t&&Eh(e),e.flags|=1,_n(n,e,i,r),e.child)}function lp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Xh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,ev(n,e,s,i,r)):(n=bl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Qo,t(o,i)&&n.ref===e.ref)return Gi(n,e,r)}return e.flags|=1,n=mr(s,i),n.ref=e.ref,n.return=e,e.child=n}function ev(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Qo(s,i)&&n.ref===e.ref)if(Rn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Rn=!0);else return e.lanes=n.lanes,Gi(n,e,r)}return Lf(n,e,t,i,r)}function tv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(Ls,kn),kn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(Ls,kn),kn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(Ls,kn),kn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(Ls,kn),kn|=i;return _n(n,e,r,t),e.child}function nv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Lf(n,e,t,i,r){var s=Pn(t)?Gr:gn.current;return s=Gs(e,s),ks(e,r),t=Ih(n,e,t,i,s,r),i=Oh(),n!==null&&!Rn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gi(n,e,r)):(Dt&&i&&Eh(e),e.flags|=1,_n(n,e,t,r),e.child)}function cp(n,e,t,i,r){if(Pn(t)){var s=!0;Hl(e)}else s=!1;if(ks(e,r),e.stateNode===null)wl(n,e),Z0(e,t,i),Rf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=Pn(t)?Gr:gn.current,c=Gs(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ip(e,o,i,c),er=!1;var h=e.memoizedState;o.state=h,Yl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Ln.current||er?(typeof u=="function"&&(Cf(e,t,u,i),l=e.memoizedState),(a=er||np(e,t,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,L0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=Pn(t)?Gr:gn.current,l=Gs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&ip(e,o,i,l),er=!1,h=e.memoizedState,o.state=h,Yl(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||Ln.current||er?(typeof p=="function"&&(Cf(e,t,p,i),g=e.memoizedState),(c=er||np(e,t,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Pf(n,e,t,i,s,r)}function Pf(n,e,t,i,r,s){nv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kd(e,t,!1),Gi(n,e,s);i=e.stateNode,CS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ws(e,n.child,null,s),e.child=Ws(e,null,a,s)):_n(n,e,a,s),e.memoizedState=i.state,r&&Kd(e,t,!0),e.child}function iv(n){var e=n.stateNode;e.pendingContext?jd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&jd(n,e.context,!1),Lh(n,e.containerInfo)}function up(n,e,t,i,r){return Vs(),Th(r),e.flags|=256,_n(n,e,t,i),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Nf(n){return{baseLanes:n,cachePool:null,transitions:null}}function rv(n,e,t){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(Ot,r&1),n===null)return Af(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xc(o,i,0,null),n=Fr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Nf(t),e.memoizedState=Df,n):Fh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return RS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Fr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Nf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Df,i}return s=n.child,n=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Fh(n,e){return e=xc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Fa(n,e,t,i){return i!==null&&Th(i),Ws(e,n.child,null,t),n=Fh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function RS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=au(Error(me(422))),Fa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ws(e,n.child,null,o),e.child.memoizedState=Nf(o),e.memoizedState=Df,s);if(!(e.mode&1))return Fa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=au(s,i,void 0),Fa(n,e,o,i)}if(a=(o&n.childLanes)!==0,Rn||a){if(i=tn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(n,r),pi(i,n,r,-1))}return Wh(),i=au(Error(me(421))),Fa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=HS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Bn=fr(r.nextSibling),zn=e,Dt=!0,ci=null,n!==null&&(Kn[qn++]=Ii,Kn[qn++]=Oi,Kn[qn++]=Vr,Ii=n.id,Oi=n.overflow,Vr=e),e=Fh(e,i.children),e.flags|=4096,e)}function fp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),wf(n.return,e,t)}function lu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function sv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(_n(n,e,i.children,t),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fp(n,t,e);else if(n.tag===19)fp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&jl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),lu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&jl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}lu(e,!0,t,null,s);break;case"together":lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Gi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Xr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(me(153));if(e.child!==null){for(n=e.child,t=mr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=mr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function bS(n,e,t){switch(e.tag){case 3:iv(e),Vs();break;case 5:P0(e);break;case 1:Pn(e.type)&&Hl(e);break;case 4:Lh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(Wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(Ot,Ot.current&1),e.flags|=128,null):t&e.child.childLanes?rv(n,e,t):(wt(Ot,Ot.current&1),n=Gi(n,e,t),n!==null?n.sibling:null);wt(Ot,Ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return sv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,tv(n,e,t)}return Gi(n,e,t)}var ov,If,av,lv;ov=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};If=function(){};av=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ur(Ti.current);var s=null;switch(t){case"input":r=tf(n,r),i=tf(n,i),s=[];break;case"select":r=kt({},r,{value:void 0}),i=kt({},i,{value:void 0}),s=[];break;case"textarea":r=sf(n,r),i=sf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Bl)}af(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};lv=function(n,e,t,i){t!==i&&(e.flags|=4)};function mo(n,e){if(!Dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function hn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function LS(n,e,t){var i=e.pendingProps;switch(Mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(e),null;case 1:return Pn(e.type)&&zl(),hn(e),null;case 3:return i=e.stateNode,Xs(),Lt(Ln),Lt(gn),Dh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ua(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(Gf(ci),ci=null))),If(n,e),hn(e),null;case 5:Ph(e);var r=Ur(ia.current);if(t=e.type,n!==null&&e.stateNode!=null)av(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return hn(e),null}if(n=Ur(Ti.current),Ua(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[ta]=s,n=(e.mode&1)!==0,t){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<Do.length;r++)Rt(Do[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":Sd(i,s),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Rt("invalid",i);break;case"textarea":Ed(i,s),Rt("invalid",i)}af(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Oa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Oa(i.textContent,a,n),r=["children",""+a]):Xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Rt("scroll",i)}switch(t){case"input":Ca(i),xd(i,s,!0);break;case"textarea":Ca(i),Md(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ug(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Si]=e,n[ta]=i,ov(n,e,!1,!1),e.stateNode=n;e:{switch(o=lf(t,i),t){case"dialog":Rt("cancel",n),Rt("close",n),r=i;break;case"iframe":case"object":case"embed":Rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Do.length;r++)Rt(Do[r],n);r=i;break;case"source":Rt("error",n),r=i;break;case"img":case"image":case"link":Rt("error",n),Rt("load",n),r=i;break;case"details":Rt("toggle",n),r=i;break;case"input":Sd(n,i),r=tf(n,i),Rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=kt({},i,{value:void 0}),Rt("invalid",n);break;case"textarea":Ed(n,i),r=sf(n,i),Rt("invalid",n);break;default:r=i}af(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Bg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Yo(n,l):typeof l=="number"&&Yo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Rt("scroll",n):l!=null&&lh(n,s,l,o))}switch(t){case"input":Ca(n),xd(n,i,!1);break;case"textarea":Ca(n),Md(n);break;case"option":i.value!=null&&n.setAttribute("value",""+_r(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ns(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Bl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return hn(e),null;case 6:if(n&&e.stateNode!=null)lv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(t=Ur(ia.current),Ur(Ti.current),Ua(e)){if(i=e.stateNode,t=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==t)&&(n=zn,n!==null))switch(n.tag){case 3:Oa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return hn(e),null;case 13:if(Lt(Ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Dt&&Bn!==null&&e.mode&1&&!(e.flags&128))w0(),Vs(),e.flags|=98560,s=!1;else if(s=Ua(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[Si]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;hn(e),s=!1}else ci!==null&&(Gf(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ot.current&1?$t===0&&($t=3):Wh())),e.updateQueue!==null&&(e.flags|=4),hn(e),null);case 4:return Xs(),If(n,e),n===null&&Jo(e.stateNode.containerInfo),hn(e),null;case 10:return Ch(e.type._context),hn(e),null;case 17:return Pn(e.type)&&zl(),hn(e),null;case 19:if(Lt(Ot),s=e.memoizedState,s===null)return hn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)mo(s,!1);else{if($t!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=jl(n),o!==null){for(e.flags|=128,mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(Ot,Ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ht()>js&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304)}else{if(!i)if(n=jl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Dt)return hn(e),null}else 2*Ht()-s.renderingStartTime>js&&t!==1073741824&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ht(),e.sibling=null,t=Ot.current,wt(Ot,i?t&1|2:t&1),e):(hn(e),null);case 22:case 23:return Vh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(hn(e),e.subtreeFlags&6&&(e.flags|=8192)):hn(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function PS(n,e){switch(Mh(e),e.tag){case 1:return Pn(e.type)&&zl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Xs(),Lt(Ln),Lt(gn),Dh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ph(e),null;case 13:if(Lt(Ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Vs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Lt(Ot),null;case 4:return Xs(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var Ba=!1,mn=!1,DS=typeof WeakSet=="function"?WeakSet:Set,Re=null;function bs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Bt(n,e,i)}else t.current=null}function Of(n,e,t){try{t()}catch(i){Bt(n,e,i)}}var hp=!1;function NS(n,e){if(_f=Ul,n=d0(),xh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(yf={focusedElem:n,selectionRange:t},Ul=!1,Re=e;Re!==null;)if(e=Re,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Re=n;else for(;Re!==null;){e=Re;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:ai(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(E){Bt(e,e.return,E)}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}return g=hp,hp=!1,g}function zo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Of(e,t,s)}r=r.next}while(r!==i)}}function yc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Uf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function cv(n){var e=n.alternate;e!==null&&(n.alternate=null,cv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Si],delete e[ta],delete e[Ef],delete e[mS],delete e[gS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function uv(n){return n.tag===5||n.tag===3||n.tag===4}function dp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||uv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Bl));else if(i!==4&&(n=n.child,n!==null))for(kf(n,e,t),n=n.sibling;n!==null;)kf(n,e,t),n=n.sibling}function Ff(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ff(n,e,t),n=n.sibling;n!==null;)Ff(n,e,t),n=n.sibling}var an=null,li=!1;function ji(n,e,t){for(t=t.child;t!==null;)fv(n,e,t),t=t.sibling}function fv(n,e,t){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(fc,t)}catch{}switch(t.tag){case 5:mn||bs(t,e);case 6:var i=an,r=li;an=null,ji(n,e,t),an=i,li=r,an!==null&&(li?(n=an,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):an.removeChild(t.stateNode));break;case 18:an!==null&&(li?(n=an,t=t.stateNode,n.nodeType===8?tu(n.parentNode,t):n.nodeType===1&&tu(n,t),$o(n)):tu(an,t.stateNode));break;case 4:i=an,r=li,an=t.stateNode.containerInfo,li=!0,ji(n,e,t),an=i,li=r;break;case 0:case 11:case 14:case 15:if(!mn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Of(t,e,o),r=r.next}while(r!==i)}ji(n,e,t);break;case 1:if(!mn&&(bs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Bt(t,e,a)}ji(n,e,t);break;case 21:ji(n,e,t);break;case 22:t.mode&1?(mn=(i=mn)||t.memoizedState!==null,ji(n,e,t),mn=i):ji(n,e,t);break;default:ji(n,e,t)}}function pp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new DS),e.forEach(function(i){var r=GS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ii(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:an=a.stateNode,li=!1;break e;case 3:an=a.stateNode.containerInfo,li=!0;break e;case 4:an=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(an===null)throw Error(me(160));fv(s,o,r),an=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hv(e,n),e=e.sibling}function hv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(e,n),gi(n),i&4){try{zo(3,n,n.return),yc(3,n)}catch(y){Bt(n,n.return,y)}try{zo(5,n,n.return)}catch(y){Bt(n,n.return,y)}}break;case 1:ii(e,n),gi(n),i&512&&t!==null&&bs(t,t.return);break;case 5:if(ii(e,n),gi(n),i&512&&t!==null&&bs(t,t.return),n.flags&32){var r=n.stateNode;try{Yo(r,"")}catch(y){Bt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ig(r,s),lf(a,o);var c=lf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Bg(r,f):u==="dangerouslySetInnerHTML"?kg(r,f):u==="children"?Yo(r,f):lh(r,u,f,c)}switch(a){case"input":nf(r,s);break;case"textarea":Og(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ns(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[ta]=s}catch(y){Bt(n,n.return,y)}}break;case 6:if(ii(e,n),gi(n),i&4){if(n.stateNode===null)throw Error(me(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){Bt(n,n.return,y)}}break;case 3:if(ii(e,n),gi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(y){Bt(n,n.return,y)}break;case 4:ii(e,n),gi(n);break;case 13:ii(e,n),gi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hh=Ht())),i&4&&pp(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(mn=(c=mn)||u,ii(e,n),mn=c):ii(e,n),gi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Re=n,u=n.child;u!==null;){for(f=Re=u;Re!==null;){switch(h=Re,p=h.child,h.tag){case 0:case 11:case 14:case 15:zo(4,h,h.return);break;case 1:bs(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Bt(i,t,y)}}break;case 5:bs(h,h.return);break;case 22:if(h.memoizedState!==null){gp(f);continue}}p!==null?(p.return=h,Re=p):gp(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fg("display",o))}catch(y){Bt(n,n.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Bt(n,n.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ii(e,n),gi(n),i&4&&pp(n);break;case 21:break;default:ii(e,n),gi(n)}}function gi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(uv(t)){var i=t;break e}t=t.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Yo(r,""),i.flags&=-33);var s=dp(n);Ff(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dp(n);kf(n,a,o);break;default:throw Error(me(161))}}catch(l){Bt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function IS(n,e,t){Re=n,dv(n)}function dv(n,e,t){for(var i=(n.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ba;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||mn;a=Ba;var c=mn;if(Ba=o,(mn=l)&&!c)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?vp(r):l!==null?(l.return=o,Re=l):vp(r);for(;s!==null;)Re=s,dv(s),s=s.sibling;Re=r,Ba=a,mn=c}mp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):mp(n)}}function mp(n){for(;Re!==null;){var e=Re;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mn||yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!mn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ai(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Jd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&$o(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}mn||e.flags&512&&Uf(e)}catch(h){Bt(e,e.return,h)}}if(e===n){Re=null;break}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}}function gp(n){for(;Re!==null;){var e=Re;if(e===n){Re=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Re=t;break}Re=e.return}}function vp(n){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{yc(4,e)}catch(l){Bt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Bt(e,r,l)}}var s=e.return;try{Uf(e)}catch(l){Bt(e,s,l)}break;case 5:var o=e.return;try{Uf(e)}catch(l){Bt(e,o,l)}}}catch(l){Bt(e,e.return,l)}if(e===n){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var OS=Math.ceil,$l=Yi.ReactCurrentDispatcher,Bh=Yi.ReactCurrentOwner,Jn=Yi.ReactCurrentBatchConfig,ut=0,tn=null,jt=null,cn=0,kn=0,Ls=xr(0),$t=0,aa=null,Xr=0,Sc=0,zh=0,Ho=null,An=null,Hh=0,js=1/0,Di=null,Zl=!1,Bf=null,dr=null,za=!1,sr=null,Ql=0,Go=0,zf=null,Cl=-1,Rl=0;function Sn(){return ut&6?Ht():Cl!==-1?Cl:Cl=Ht()}function pr(n){return n.mode&1?ut&2&&cn!==0?cn&-cn:_S.transition!==null?(Rl===0&&(Rl=Zg()),Rl):(n=mt,n!==0||(n=window.event,n=n===void 0?16:r0(n.type)),n):1}function pi(n,e,t,i){if(50<Go)throw Go=0,zf=null,Error(me(185));ha(n,t,i),(!(ut&2)||n!==tn)&&(n===tn&&(!(ut&2)&&(Sc|=t),$t===4&&ir(n,cn)),Dn(n,i),t===1&&ut===0&&!(e.mode&1)&&(js=Ht()+500,gc&&Er()))}function Dn(n,e){var t=n.callbackNode;_y(n,e);var i=Ol(n,n===tn?cn:0);if(i===0)t!==null&&wd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&wd(t),e===1)n.tag===0?vS(_p.bind(null,n)):M0(_p.bind(null,n)),dS(function(){!(ut&6)&&Er()}),t=null;else{switch(Qg(i)){case 1:t=dh;break;case 4:t=qg;break;case 16:t=Il;break;case 536870912:t=$g;break;default:t=Il}t=xv(t,pv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function pv(n,e){if(Cl=-1,Rl=0,ut&6)throw Error(me(327));var t=n.callbackNode;if(Fs()&&n.callbackNode!==t)return null;var i=Ol(n,n===tn?cn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Jl(n,i);else{e=i;var r=ut;ut|=2;var s=gv();(tn!==n||cn!==e)&&(Di=null,js=Ht()+500,kr(n,e));do try{FS();break}catch(a){mv(n,a)}while(!0);wh(),$l.current=s,ut=r,jt!==null?e=0:(tn=null,cn=0,e=$t)}if(e!==0){if(e===2&&(r=df(n),r!==0&&(i=r,e=Hf(n,r))),e===1)throw t=aa,kr(n,0),ir(n,i),Dn(n,Ht()),t;if(e===6)ir(n,i);else{if(r=n.current.alternate,!(i&30)&&!US(r)&&(e=Jl(n,i),e===2&&(s=df(n),s!==0&&(i=s,e=Hf(n,s))),e===1))throw t=aa,kr(n,0),ir(n,i),Dn(n,Ht()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:br(n,An,Di);break;case 3:if(ir(n,i),(i&130023424)===i&&(e=Hh+500-Ht(),10<e)){if(Ol(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=xf(br.bind(null,n,An,Di),e);break}br(n,An,Di);break;case 4:if(ir(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*OS(i/1960))-i,10<i){n.timeoutHandle=xf(br.bind(null,n,An,Di),i);break}br(n,An,Di);break;case 5:br(n,An,Di);break;default:throw Error(me(329))}}}return Dn(n,Ht()),n.callbackNode===t?pv.bind(null,n):null}function Hf(n,e){var t=Ho;return n.current.memoizedState.isDehydrated&&(kr(n,e).flags|=256),n=Jl(n,e),n!==2&&(e=An,An=t,e!==null&&Gf(e)),n}function Gf(n){An===null?An=n:An.push.apply(An,n)}function US(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(n,e){for(e&=~zh,e&=~Sc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-di(e),i=1<<t;n[t]=-1,e&=~i}}function _p(n){if(ut&6)throw Error(me(327));Fs();var e=Ol(n,0);if(!(e&1))return Dn(n,Ht()),null;var t=Jl(n,e);if(n.tag!==0&&t===2){var i=df(n);i!==0&&(e=i,t=Hf(n,i))}if(t===1)throw t=aa,kr(n,0),ir(n,e),Dn(n,Ht()),t;if(t===6)throw Error(me(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,br(n,An,Di),Dn(n,Ht()),null}function Gh(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(js=Ht()+500,gc&&Er())}}function Yr(n){sr!==null&&sr.tag===0&&!(ut&6)&&Fs();var e=ut;ut|=1;var t=Jn.transition,i=mt;try{if(Jn.transition=null,mt=1,n)return n()}finally{mt=i,Jn.transition=t,ut=e,!(ut&6)&&Er()}}function Vh(){kn=Ls.current,Lt(Ls)}function kr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,hS(t)),jt!==null)for(t=jt.return;t!==null;){var i=t;switch(Mh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Xs(),Lt(Ln),Lt(gn),Dh();break;case 5:Ph(i);break;case 4:Xs();break;case 13:Lt(Ot);break;case 19:Lt(Ot);break;case 10:Ch(i.type._context);break;case 22:case 23:Vh()}t=t.return}if(tn=n,jt=n=mr(n.current,null),cn=kn=e,$t=0,aa=null,zh=Sc=Xr=0,An=Ho=null,Or!==null){for(e=0;e<Or.length;e++)if(t=Or[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Or=null}return n}function mv(n,e){do{var t=jt;try{if(wh(),Tl.current=ql,Kl){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kl=!1}if(Wr=0,en=Kt=Ut=null,Bo=!1,ra=0,Bh.current=null,t===null||t.return===null){$t=1,aa=e,jt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=cn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=sp(o);if(p!==null){p.flags&=-257,op(p,o,a,s,e),p.mode&1&&rp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){rp(s,c,e),Wh();break e}l=Error(me(426))}}else if(Dt&&a.mode&1){var m=sp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),op(m,o,a,s,e),Th(Ys(l,a));break e}}s=l=Ys(l,a),$t!==4&&($t=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Q0(s,l,e);Qd(s,d);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(dr===null||!dr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=J0(s,a,e);Qd(s,E);break e}}s=s.return}while(s!==null)}_v(t)}catch(w){e=w,jt===t&&t!==null&&(jt=t=t.return);continue}break}while(!0)}function gv(){var n=$l.current;return $l.current=ql,n===null?ql:n}function Wh(){($t===0||$t===3||$t===2)&&($t=4),tn===null||!(Xr&268435455)&&!(Sc&268435455)||ir(tn,cn)}function Jl(n,e){var t=ut;ut|=2;var i=gv();(tn!==n||cn!==e)&&(Di=null,kr(n,e));do try{kS();break}catch(r){mv(n,r)}while(!0);if(wh(),ut=t,$l.current=i,jt!==null)throw Error(me(261));return tn=null,cn=0,$t}function kS(){for(;jt!==null;)vv(jt)}function FS(){for(;jt!==null&&!cy();)vv(jt)}function vv(n){var e=Sv(n.alternate,n,kn);n.memoizedProps=n.pendingProps,e===null?_v(n):jt=e,Bh.current=null}function _v(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=PS(t,e),t!==null){t.flags&=32767,jt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$t=6,jt=null;return}}else if(t=LS(t,e,kn),t!==null){jt=t;return}if(e=e.sibling,e!==null){jt=e;return}jt=e=n}while(e!==null);$t===0&&($t=5)}function br(n,e,t){var i=mt,r=Jn.transition;try{Jn.transition=null,mt=1,BS(n,e,t,i)}finally{Jn.transition=r,mt=i}return null}function BS(n,e,t,i){do Fs();while(sr!==null);if(ut&6)throw Error(me(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(me(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(yy(n,s),n===tn&&(jt=tn=null,cn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||za||(za=!0,xv(Il,function(){return Fs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var o=mt;mt=1;var a=ut;ut|=4,Bh.current=null,NS(n,t),hv(t,n),sS(yf),Ul=!!_f,yf=_f=null,n.current=t,IS(t),uy(),ut=a,mt=o,Jn.transition=s}else n.current=t;if(za&&(za=!1,sr=n,Ql=r),s=n.pendingLanes,s===0&&(dr=null),dy(t.stateNode),Dn(n,Ht()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zl)throw Zl=!1,n=Bf,Bf=null,n;return Ql&1&&n.tag!==0&&Fs(),s=n.pendingLanes,s&1?n===zf?Go++:(Go=0,zf=n):Go=0,Er(),null}function Fs(){if(sr!==null){var n=Qg(Ql),e=Jn.transition,t=mt;try{if(Jn.transition=null,mt=16>n?16:n,sr===null)var i=!1;else{if(n=sr,sr=null,Ql=0,ut&6)throw Error(me(331));var r=ut;for(ut|=4,Re=n.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:zo(8,u,s)}var f=u.child;if(f!==null)f.return=u,Re=f;else for(;Re!==null;){u=Re;var h=u.sibling,p=u.return;if(cv(u),u===c){Re=null;break}if(h!==null){h.return=p,Re=h;break}Re=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Re=d;break e}Re=s.return}}var v=n.current;for(Re=v;Re!==null;){o=Re;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Re=_;else e:for(o=v;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(w){Bt(a,a.return,w)}if(a===o){Re=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Re=E;break e}Re=a.return}}if(ut=r,Er(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(fc,n)}catch{}i=!0}return i}finally{mt=t,Jn.transition=e}}return!1}function yp(n,e,t){e=Ys(t,e),e=Q0(n,e,1),n=hr(n,e,1),e=Sn(),n!==null&&(ha(n,1,e),Dn(n,e))}function Bt(n,e,t){if(n.tag===3)yp(n,n,t);else for(;e!==null;){if(e.tag===3){yp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){n=Ys(t,n),n=J0(e,n,1),e=hr(e,n,1),n=Sn(),e!==null&&(ha(e,1,n),Dn(e,n));break}}e=e.return}}function zS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Sn(),n.pingedLanes|=n.suspendedLanes&t,tn===n&&(cn&t)===t&&($t===4||$t===3&&(cn&130023424)===cn&&500>Ht()-Hh?kr(n,0):zh|=t),Dn(n,e)}function yv(n,e){e===0&&(n.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var t=Sn();n=Hi(n,e),n!==null&&(ha(n,e,t),Dn(n,t))}function HS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),yv(n,t)}function GS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),yv(n,t)}var Sv;Sv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ln.current)Rn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Rn=!1,bS(n,e,t);Rn=!!(n.flags&131072)}else Rn=!1,Dt&&e.flags&1048576&&T0(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wl(n,e),n=e.pendingProps;var r=Gs(e,gn.current);ks(e,t),r=Ih(null,e,i,n,r,t);var s=Oh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pn(i)?(s=!0,Hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=_c,e.stateNode=r,r._reactInternals=e,Rf(e,i,n,t),e=Pf(null,e,i,!0,s,t)):(e.tag=0,Dt&&s&&Eh(e),_n(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(wl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=WS(i),n=ai(i,n),r){case 0:e=Lf(null,e,i,n,t);break e;case 1:e=cp(null,e,i,n,t);break e;case 11:e=ap(null,e,i,n,t);break e;case 14:e=lp(null,e,i,ai(i.type,n),t);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Lf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),cp(n,e,i,r,t);case 3:e:{if(iv(e),n===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,L0(n,e),Yl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(me(423)),e),e=up(n,e,i,t,r);break e}else if(i!==r){r=Ys(Error(me(424)),e),e=up(n,e,i,t,r);break e}else for(Bn=fr(e.stateNode.containerInfo.firstChild),zn=e,Dt=!0,ci=null,t=R0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vs(),i===r){e=Gi(n,e,t);break e}_n(n,e,i,t)}e=e.child}return e;case 5:return P0(e),n===null&&Af(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Sf(i,r)?o=null:s!==null&&Sf(i,s)&&(e.flags|=32),nv(n,e),_n(n,e,o,t),e.child;case 6:return n===null&&Af(e),null;case 13:return rv(n,e,t);case 4:return Lh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ws(e,null,i,t):_n(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),ap(n,e,i,r,t);case 7:return _n(n,e,e.pendingProps,t),e.child;case 8:return _n(n,e,e.pendingProps.children,t),e.child;case 12:return _n(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(Wl,i._currentValue),i._currentValue=o,s!==null)if(mi(s.value,o)){if(s.children===r.children&&!Ln.current){e=Gi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),wf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),wf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_n(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,t),r=ei(r),i=i(r),e.flags|=1,_n(n,e,i,t),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),lp(n,e,i,r,t);case 15:return ev(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),wl(n,e),e.tag=1,Pn(i)?(n=!0,Hl(e)):n=!1,ks(e,t),Z0(e,i,r),Rf(e,i,r,t),Pf(null,e,i,!0,n,t);case 19:return sv(n,e,t);case 22:return tv(n,e,t)}throw Error(me(156,e.tag))};function xv(n,e){return Kg(n,e)}function VS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,e,t,i){return new VS(n,e,t,i)}function Xh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function WS(n){if(typeof n=="function")return Xh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===uh)return 11;if(n===fh)return 14}return 2}function mr(n,e){var t=n.alternate;return t===null?(t=Qn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function bl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Xh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ss:return Fr(t.children,r,s,e);case ch:o=8,r|=8;break;case Zu:return n=Qn(12,t,e,r|2),n.elementType=Zu,n.lanes=s,n;case Qu:return n=Qn(13,t,e,r),n.elementType=Qu,n.lanes=s,n;case Ju:return n=Qn(19,t,e,r),n.elementType=Ju,n.lanes=s,n;case Pg:return xc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case bg:o=10;break e;case Lg:o=9;break e;case uh:o=11;break e;case fh:o=14;break e;case Ji:o=16,i=null;break e}throw Error(me(130,n==null?n:typeof n,""))}return e=Qn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Fr(n,e,t,i){return n=Qn(7,n,i,e),n.lanes=t,n}function xc(n,e,t,i){return n=Qn(22,n,i,e),n.elementType=Pg,n.lanes=t,n.stateNode={isHidden:!1},n}function cu(n,e,t){return n=Qn(6,n,null,e),n.lanes=t,n}function uu(n,e,t){return e=Qn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function XS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wc(0),this.expirationTimes=Wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yh(n,e,t,i,r,s,o,a,l){return n=new XS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),n}function YS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ev(n){if(!n)return yr;n=n._reactInternals;e:{if(qr(n)!==n||n.tag!==1)throw Error(me(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(n.tag===1){var t=n.type;if(Pn(t))return E0(n,t,e)}return e}function Mv(n,e,t,i,r,s,o,a,l){return n=Yh(t,i,!0,n,r,s,o,a,l),n.context=Ev(null),t=n.current,i=Sn(),r=pr(t),s=ki(i,r),s.callback=e??null,hr(t,s,r),n.current.lanes=r,ha(n,r,i),Dn(n,i),n}function Ec(n,e,t,i){var r=e.current,s=Sn(),o=pr(r);return t=Ev(t),e.context===null?e.context=t:e.pendingContext=t,e=ki(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=hr(r,e,o),n!==null&&(pi(n,r,o,s),Ml(n,r,o)),o}function ec(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function jh(n,e){Sp(n,e),(n=n.alternate)&&Sp(n,e)}function jS(){return null}var Tv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Kh(n){this._internalRoot=n}Mc.prototype.render=Kh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(me(409));Ec(n,e,null,null)};Mc.prototype.unmount=Kh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Yr(function(){Ec(null,n,null,null)}),e[zi]=null}};function Mc(n){this._internalRoot=n}Mc.prototype.unstable_scheduleHydration=function(n){if(n){var e=t0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<nr.length&&e!==0&&e<nr[t].priority;t++);nr.splice(t,0,n),t===0&&i0(n)}};function qh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function xp(){}function KS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ec(o);s.call(c)}}var o=Mv(e,i,n,0,null,!1,!1,"",xp);return n._reactRootContainer=o,n[zi]=o.current,Jo(n.nodeType===8?n.parentNode:n),Yr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ec(l);a.call(c)}}var l=Yh(n,0,!1,null,null,!1,!1,"",xp);return n._reactRootContainer=l,n[zi]=l.current,Jo(n.nodeType===8?n.parentNode:n),Yr(function(){Ec(e,l,t,i)}),l}function Ac(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ec(o);a.call(l)}}Ec(e,o,n,r)}else o=KS(t,e,n,r,i);return ec(o)}Jg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Po(e.pendingLanes);t!==0&&(ph(e,t|1),Dn(e,Ht()),!(ut&6)&&(js=Ht()+500,Er()))}break;case 13:Yr(function(){var i=Hi(n,1);if(i!==null){var r=Sn();pi(i,n,1,r)}}),jh(n,1)}};mh=function(n){if(n.tag===13){var e=Hi(n,134217728);if(e!==null){var t=Sn();pi(e,n,134217728,t)}jh(n,134217728)}};e0=function(n){if(n.tag===13){var e=pr(n),t=Hi(n,e);if(t!==null){var i=Sn();pi(t,n,e,i)}jh(n,e)}};t0=function(){return mt};n0=function(n,e){var t=mt;try{return mt=n,e()}finally{mt=t}};uf=function(n,e,t){switch(e){case"input":if(nf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=mc(i);if(!r)throw Error(me(90));Ng(i),nf(i,r)}}}break;case"textarea":Og(n,t);break;case"select":e=t.value,e!=null&&Ns(n,!!t.multiple,e,!1)}};Gg=Gh;Vg=Yr;var qS={usingClientEntryPoint:!1,Events:[pa,Ts,mc,zg,Hg,Gh]},go={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$S={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Yg(n),n===null?null:n.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||jS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{fc=Ha.inject($S),Mi=Ha}catch{}}Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS;Gn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(e))throw Error(me(200));return YS(n,e,null,t)};Gn.createRoot=function(n,e){if(!qh(n))throw Error(me(299));var t=!1,i="",r=Tv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yh(n,1,!1,null,null,t,!1,i,r),n[zi]=e.current,Jo(n.nodeType===8?n.parentNode:n),new Kh(e)};Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(me(188)):(n=Object.keys(n).join(","),Error(me(268,n)));return n=Yg(e),n=n===null?null:n.stateNode,n};Gn.flushSync=function(n){return Yr(n)};Gn.hydrate=function(n,e,t){if(!Tc(e))throw Error(me(200));return Ac(null,n,e,!0,t)};Gn.hydrateRoot=function(n,e,t){if(!qh(n))throw Error(me(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Tv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Mv(e,null,n,1,t??null,r,!1,s,o),n[zi]=e.current,Jo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Mc(e)};Gn.render=function(n,e,t){if(!Tc(e))throw Error(me(200));return Ac(null,n,e,!1,t)};Gn.unmountComponentAtNode=function(n){if(!Tc(n))throw Error(me(40));return n._reactRootContainer?(Yr(function(){Ac(null,null,n,!1,function(){n._reactRootContainer=null,n[zi]=null})}),!0):!1};Gn.unstable_batchedUpdates=Gh;Gn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Tc(t))throw Error(me(200));if(n==null||n._reactInternals===void 0)throw Error(me(38));return Ac(n,e,t,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(n){console.error(n)}}Av(),Ag.exports=Gn;var ZS=Ag.exports,Ep=ZS;qu.createRoot=Ep.createRoot,qu.hydrateRoot=Ep.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="160",QS=0,Mp=1,JS=2,wv=1,ex=2,Pi=3,Vi=0,xn=1,xi=2,gr=0,Bs=1,Tp=2,Ap=3,wp=4,tx=5,Dr=100,nx=101,ix=102,Cp=103,Rp=104,rx=200,sx=201,ox=202,ax=203,Vf=204,Wf=205,lx=206,cx=207,ux=208,fx=209,hx=210,dx=211,px=212,mx=213,gx=214,vx=0,_x=1,yx=2,tc=3,Sx=4,xx=5,Ex=6,Mx=7,Zh=0,Tx=1,Ax=2,Fi=0,wx=1,Cx=2,Rx=3,bx=4,Lx=5,Px=6,Cv=300,Ks=301,qs=302,Xf=303,Yf=304,wc=306,jf=1e3,Fn=1001,Kf=1002,ln=1003,bp=1004,fu=1005,$n=1006,Dx=1007,la=1008,vr=1009,Nx=1010,Ix=1011,Qh=1012,Rv=1013,or=1014,ar=1015,ca=1016,bv=1017,Lv=1018,Br=1020,Ox=1021,fi=1023,Ux=1024,kx=1025,zr=1026,$s=1027,Fx=1028,Pv=1029,Bx=1030,Dv=1031,Nv=1033,hu=33776,du=33777,pu=33778,mu=33779,Lp=35840,Pp=35841,Dp=35842,Np=35843,Iv=36196,Ip=37492,Op=37496,Up=37808,kp=37809,Fp=37810,Bp=37811,zp=37812,Hp=37813,Gp=37814,Vp=37815,Wp=37816,Xp=37817,Yp=37818,jp=37819,Kp=37820,qp=37821,gu=36492,$p=36494,Zp=36495,zx=36283,Qp=36284,Jp=36285,em=36286,Ov=3e3,Hr=3001,Hx=3200,Gx=3201,Uv=0,Vx=1,Zn="",qt="srgb",Wi="srgb-linear",Jh="display-p3",Cc="display-p3-linear",nc="linear",bt="srgb",ic="rec709",rc="p3",ts=7680,tm=519,Wx=512,Xx=513,Yx=514,kv=515,jx=516,Kx=517,qx=518,$x=519,nm=35044,im="300 es",qf=1035,Ui=2e3,sc=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,$f=180/Math.PI;function ga(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function wn(n,e,t){return Math.max(e,Math.min(t,n))}function Zx(n,e){return(n%e+e)%e}function _u(n,e,t){return(1-t)*n+t*e}function rm(n){return(n&n-1)===0&&n!==0}function Zf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,r,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],v=r[1],_=r[4],E=r[7],w=r[2],S=r[5],T=r[8];return s[0]=o*y+a*v+l*w,s[3]=o*m+a*_+l*S,s[6]=o*d+a*E+l*T,s[1]=c*y+u*v+f*w,s[4]=c*m+u*_+f*S,s[7]=c*d+u*E+f*T,s[2]=h*y+p*v+g*w,s[5]=h*m+p*_+g*S,s[8]=h*d+p*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yu.makeScale(e,t)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,t){return this.premultiply(yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new ot;function Fv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qx(){const n=oc("canvas");return n.style.display="block",n}const sm={};function Vo(n){n in sm||(sm[n]=!0,console.warn(n))}const om=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),am=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ga={[Wi]:{transfer:nc,primaries:ic,toReference:n=>n,fromReference:n=>n},[qt]:{transfer:bt,primaries:ic,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Cc]:{transfer:nc,primaries:rc,toReference:n=>n.applyMatrix3(am),fromReference:n=>n.applyMatrix3(om)},[Jh]:{transfer:bt,primaries:rc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(am),fromReference:n=>n.applyMatrix3(om).convertLinearToSRGB()}},Jx=new Set([Wi,Cc]),yt={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ga[e].toReference,r=Ga[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ga[n].primaries},getTransfer:function(n){return n===Zn?nc:Ga[n].transfer}};function zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Su(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ns;class Bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=oc("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zs(t[i]/255)*255):t[i]=zs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eE=0;class zv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=ga(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xu(r[o].image)):s.push(xu(r[o]))}else s=xu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function xu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tE=0;class Nn extends no{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,i=Fn,r=Fn,s=$n,o=la,a=fi,l=vr,c=Nn.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=ga(),this.name="",this.source=new zv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hr?qt:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qt?Hr:Ov}set encoding(e){Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hr?qt:Zn}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Cv;Nn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,E=(p+1)/2,w=(d+1)/2,S=(u+h)/4,T=(f+y)/4,U=(g+m)/4;return _>E&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=S/i,s=T/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=S/r,s=U/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=U/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-y)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nE extends no{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Vo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hr?qt:Zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends nE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hv extends Nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iE extends Nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(f!==y||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*y,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const w=Math.sqrt(_),S=Math.atan2(w,d*v);m=Math.sin(m*S)/w,a=Math.sin(a*S)/w}const E=a*v;if(l=l*m+h*E,c=c*m+p*E,u=u*m+g*E,f=f*m+y*E,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new G,lm=new va;class $r{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Wa.subVectors(this.max,_o),is.subVectors(e.a,_o),rs.subVectors(e.b,_o),ss.subVectors(e.c,_o),Ki.subVectors(rs,is),qi.subVectors(ss,rs),Mr.subVectors(is,ss);let t=[0,-Ki.z,Ki.y,0,-qi.z,qi.y,0,-Mr.z,Mr.y,Ki.z,0,-Ki.x,qi.z,0,-qi.x,Mr.z,0,-Mr.x,-Ki.y,Ki.x,0,-qi.y,qi.x,0,-Mr.y,Mr.x,0];return!Mu(t,is,rs,ss,Wa)||(t=[1,0,0,0,1,0,0,0,1],!Mu(t,is,rs,ss,Wa))?!1:(Xa.crossVectors(Ki,qi),t=[Xa.x,Xa.y,Xa.z],Mu(t,is,rs,ss,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new G,new G,new G,new G,new G,new G,new G,new G],ri=new G,Va=new $r,is=new G,rs=new G,ss=new G,Ki=new G,qi=new G,Mr=new G,_o=new G,Wa=new G,Xa=new G,Tr=new G;function Mu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Tr.fromArray(n,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),u=i.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rE=new $r,yo=new G,Tu=new G;class io{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const t=yo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Tu)),this.expandByPoint(yo.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new G,Au=new G,Ya=new G,$i=new G,wu=new G,ja=new G,Cu=new G;class Gv{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Au.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Au);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ya),a=$i.dot(this.direction),l=-$i.dot(Ya),c=$i.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const y=1/u;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Au).addScaledVector(Ya,h),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,s){wu.subVectors(t,e),ja.subVectors(i,e),Cu.crossVectors(wu,ja);let o=this.direction.dot(Cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(ja.crossVectors($i,ja));if(l<0)return null;const c=a*this.direction.dot(wu.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(Cu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,g,y,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,y,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,y,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,y=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,y=c*f;t[0]=h+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,y=c*f;t[0]=h-y*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,y=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+y,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sE,e,oE)}lookAt(e,t,i){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Zi.crossVectors(i,On),Zi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Zi.crossVectors(i,On)),Zi.normalize(),Ka.crossVectors(On,Zi),r[0]=Zi.x,r[4]=Ka.x,r[8]=On.x,r[1]=Zi.y,r[5]=Ka.y,r[9]=On.y,r[2]=Zi.z,r[6]=Ka.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],v=i[3],_=i[7],E=i[11],w=i[15],S=r[0],T=r[4],U=r[8],M=r[12],C=r[1],V=r[5],Z=r[9],oe=r[13],F=r[2],W=r[6],te=r[10],se=r[14],B=r[3],X=r[7],j=r[11],ie=r[15];return s[0]=o*S+a*C+l*F+c*B,s[4]=o*T+a*V+l*W+c*X,s[8]=o*U+a*Z+l*te+c*j,s[12]=o*M+a*oe+l*se+c*ie,s[1]=u*S+f*C+h*F+p*B,s[5]=u*T+f*V+h*W+p*X,s[9]=u*U+f*Z+h*te+p*j,s[13]=u*M+f*oe+h*se+p*ie,s[2]=g*S+y*C+m*F+d*B,s[6]=g*T+y*V+m*W+d*X,s[10]=g*U+y*Z+m*te+d*j,s[14]=g*M+y*oe+m*se+d*ie,s[3]=v*S+_*C+E*F+w*B,s[7]=v*T+_*V+E*W+w*X,s[11]=v*U+_*Z+E*te+w*j,s[15]=v*M+_*oe+E*se+w*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],v=f*m*c-y*h*c+y*l*p-a*m*p-f*l*d+a*h*d,_=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,E=u*y*c-g*f*c+g*a*p-o*y*p-u*a*d+o*f*d,w=g*f*l-u*y*l-g*a*h+o*y*h+u*a*m-o*f*m,S=t*v+i*_+r*E+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=v*T,e[1]=(y*h*s-f*m*s-y*r*p+i*m*p+f*r*d-i*h*d)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*d+i*l*d)*T,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*T,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*T,e[8]=E*T,e[9]=(g*f*s-u*y*s-g*i*p+t*y*p+u*i*d-t*f*d)*T,e[10]=(o*y*s-g*a*s+g*i*c-t*y*c-o*i*d+t*a*d)*T,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*T,e[12]=w*T,e[13]=(u*y*r-g*f*r+g*i*h-t*y*h-u*i*m+t*f*m)*T,e[14]=(g*a*r-o*y*r-g*i*l+t*y*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,y=o*u,m=o*f,d=a*f,v=l*c,_=l*u,E=l*f,w=i.x,S=i.y,T=i.z;return r[0]=(1-(y+d))*w,r[1]=(p+E)*w,r[2]=(g-_)*w,r[3]=0,r[4]=(p-E)*S,r[5]=(1-(h+d))*S,r[6]=(m+v)*S,r[7]=0,r[8]=(g+_)*T,r[9]=(m-v)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,u=1/o,f=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,t.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ui){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Ui)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===sc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ui){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let g,y;if(a===Ui)g=(o+s)*f,y=-2*f;else if(a===sc)g=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const os=new G,si=new It,sE=new G(0,0,0),oE=new G(1,1,1),Zi=new G,Ka=new G,On=new G,cm=new It,um=new va;class Rc{constructor(e=0,t=0,i=0,r=Rc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rc.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aE=0;const fm=new G,as=new va,Ri=new It,qa=new G,So=new G,lE=new G,cE=new va,hm=new G(1,0,0),dm=new G(0,1,0),pm=new G(0,0,1),uE={type:"added"},fE={type:"removed"};class Gt extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new G,t=new Rc,i=new va,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new ot}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,t){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qa.copy(e):qa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(So,qa,this.up):Ri.lookAt(qa,So,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Ri),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,lE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,cE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new G(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new G,bi=new G,Ru=new G,Li=new G,ls=new G,cs=new G,mm=new G,bu=new G,Lu=new G,Pu=new G;let $a=!1;class ui{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){oi.subVectors(r,t),bi.subVectors(i,t),Ru.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(bi),l=oi.dot(Ru),c=bi.dot(bi),u=bi.dot(Ru),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getUV(e,t,i,r,s,o,a,l){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),bi.subVectors(e,t),oi.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),oi.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),ui.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),bu.subVectors(e,i);const l=ls.dot(bu),c=cs.dot(bu);if(l<=0&&c<=0)return t.copy(i);Lu.subVectors(e,r);const u=ls.dot(Lu),f=cs.dot(Lu);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ls,o);Pu.subVectors(e,s);const p=ls.dot(Pu),g=cs.dot(Pu);if(g>=0&&p<=g)return t.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(cs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return mm.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(mm,a);const d=1/(m+y+h);return o=y*d,a=h*d,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Du(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=Zx(e,1),t=wn(t,0,1),i=wn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=Wv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return yt.fromWorkingColorSpace(pn.copy(this),e),Math.round(wn(pn.r*255,0,255))*65536+Math.round(wn(pn.g*255,0,255))*256+Math.round(wn(pn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(pn.copy(this),t);const i=pn.r,r=pn.g,s=pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=qt){yt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,r=pn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Za);const i=_u(Qi.h,Za.h,t),r=_u(Qi.s,Za.s,t),s=_u(Qi.l,Za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Te;Te.NAMES=Wv;let hE=0;class ro extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=Bs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=Wf,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=tc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vf&&(i.blendSrc=this.blendSrc),this.blendDst!==Wf&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ed extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new G,Qa=new ft;class At{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class Xv extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yv extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ai extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dE=0;const Yn=new It,Nu=new Gt,us=new G,Un=new $r,xo=new $r,Jt=new G;class In extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fv(e)?Yv:Xv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Un.min,xo.min),Un.expandByPoint(Jt),Jt.addVectors(Un.max,xo.max),Un.expandByPoint(Jt)):(Un.expandByPoint(xo.min),Un.expandByPoint(xo.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),Jt.add(us)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new G,u[C]=new G;const f=new G,h=new G,p=new G,g=new ft,y=new ft,m=new ft,d=new G,v=new G;function _(C,V,Z){f.fromArray(r,C*3),h.fromArray(r,V*3),p.fromArray(r,Z*3),g.fromArray(o,C*2),y.fromArray(o,V*2),m.fromArray(o,Z*2),h.sub(f),p.sub(f),y.sub(g),m.sub(g);const oe=1/(y.x*m.y-m.x*y.y);isFinite(oe)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(oe),v.copy(p).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(oe),c[C].add(d),c[V].add(d),c[Z].add(d),u[C].add(v),u[V].add(v),u[Z].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let C=0,V=E.length;C<V;++C){const Z=E[C],oe=Z.start,F=Z.count;for(let W=oe,te=oe+F;W<te;W+=3)_(i[W+0],i[W+1],i[W+2])}const w=new G,S=new G,T=new G,U=new G;function M(C){T.fromArray(s,C*3),U.copy(T);const V=c[C];w.copy(V),w.sub(T.multiplyScalar(T.dot(V))).normalize(),S.crossVectors(U,V);const oe=S.dot(u[C])<0?-1:1;l[C*4]=w.x,l[C*4+1]=w.y,l[C*4+2]=w.z,l[C*4+3]=oe}for(let C=0,V=E.length;C<V;++C){const Z=E[C],oe=Z.start,F=Z.count;for(let W=oe,te=oe+F;W<te;W+=3)M(i[W+0]),M(i[W+1]),M(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new At(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new It,Ar=new Gv,Ja=new io,vm=new G,fs=new G,hs=new G,ds=new G,Iu=new G,el=new G,tl=new ft,nl=new ft,il=new ft,_m=new G,ym=new G,Sm=new G,rl=new G,sl=new G;class bn extends Gt{constructor(e=new In,t=new ed){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Iu.fromBufferAttribute(f,e),o?el.addScaledVector(Iu,u):el.addScaledVector(Iu.sub(t),u))}t.add(el)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Ja.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Ja,vm)===null||Ar.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(gm.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(gm),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,w=_;E<w;E+=3){const S=a.getX(E),T=a.getX(E+1),U=a.getX(E+2);r=ol(this,d,e,i,c,u,f,S,T,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const v=a.getX(m),_=a.getX(m+1),E=a.getX(m+2);r=ol(this,o,e,i,c,u,f,v,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,w=_;E<w;E+=3){const S=E,T=E+1,U=E+2;r=ol(this,d,e,i,c,u,f,S,T,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const v=m,_=m+1,E=m+2;r=ol(this,o,e,i,c,u,f,v,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pE(n,e,t,i,r,s,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;sl.copy(a),sl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(sl);return c<t.near||c>t.far?null:{distance:c,point:sl.clone(),object:n}}function ol(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,fs),n.getVertexPosition(l,hs),n.getVertexPosition(c,ds);const u=pE(n,e,t,i,fs,hs,ds,rl);if(u){r&&(tl.fromBufferAttribute(r,a),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,c),u.uv=ui.getInterpolation(rl,fs,hs,ds,tl,nl,il,new ft)),s&&(tl.fromBufferAttribute(s,a),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,c),u.uv1=ui.getInterpolation(rl,fs,hs,ds,tl,nl,il,new ft),u.uv2=u.uv1),o&&(_m.fromBufferAttribute(o,a),ym.fromBufferAttribute(o,l),Sm.fromBufferAttribute(o,c),u.normal=ui.getInterpolation(rl,fs,hs,ds,_m,ym,Sm,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};ui.getNormal(fs,hs,ds,f.normal),u.face=f}return u}class Zr extends In{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ai(c,3)),this.setAttribute("normal",new Ai(u,3)),this.setAttribute("uv",new Ai(f,2));function g(y,m,d,v,_,E,w,S,T,U,M){const C=E/T,V=w/U,Z=E/2,oe=w/2,F=S/2,W=T+1,te=U+1;let se=0,B=0;const X=new G;for(let j=0;j<te;j++){const ie=j*V-oe;for(let le=0;le<W;le++){const J=le*C-Z;X[y]=J*v,X[m]=ie*_,X[d]=F,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[d]=S>0?1:-1,u.push(X.x,X.y,X.z),f.push(le/T),f.push(1-j/U),se+=1}}for(let j=0;j<U;j++)for(let ie=0;ie<T;ie++){const le=h+ie+W*j,J=h+ie+W*(j+1),ae=h+(ie+1)+W*(j+1),ye=h+(ie+1)+W*j;l.push(le,J,ye),l.push(J,ae,ye),B+=6}a.addGroup(p,B,M),p+=B,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const r in i)e[r]=i[r]}return e}function mE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jv(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const gE={clone:Zs,merge:vn};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=mE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let Kv=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Cn extends Kv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$f*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $f*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class yE extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(ps,ms,e,t);r.layers=this.layers,this.add(r);const s=new Cn(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new Cn(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new Cn(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new Cn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new Cn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qv extends Nn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SE extends jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Vo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hr?qt:Zn),this.texture=new qv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zr(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:gr});s.uniforms.tEquirect.value=t;const o=new bn(r,s),a=t.minFilter;return t.minFilter===la&&(t.minFilter=$n),new yE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ou=new G,xE=new G,EE=new ot;class Lr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ou.subVectors(i,t).cross(xE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ou),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||EE.getNormalMatrix(e),r=this.coplanarPoint(Ou).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new io,al=new G;class td{constructor(e=new Lr,t=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],v=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-p,E-d).normalize(),i[1].setComponents(l+s,h+c,m+p,E+d).normalize(),i[2].setComponents(l+o,h+u,m+g,E+v).normalize(),i[3].setComponents(l-o,h-u,m-g,E-v).normalize(),i[4].setComponents(l-a,h-f,m-y,E-_).normalize(),t===Ui)i[5].setComponents(l+a,h+f,m+y,E+_).normalize();else if(t===sc)i[5].setComponents(a,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $v(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ME(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=n.SHORT;else if(f instanceof Uint32Array)y=n.UNSIGNED_INT;else if(f instanceof Int32Array)y=n.INT;else if(f instanceof Int8Array)y=n.BYTE;else if(f instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const h=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,c),p.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let y=0,m=g.length;y<m;y++){const d=g[y];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class nd extends In{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){const v=d*h-o;for(let _=0;_<c;_++){const E=_*f-s;g.push(E,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const _=v+c*d,E=v+c*(d+1),w=v+1+c*(d+1),S=v+1+c*d;p.push(_,E,S),p.push(E,w,S)}this.setIndex(p),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(y,3)),this.setAttribute("uv",new Ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.width,e.height,e.widthSegments,e.heightSegments)}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AE=`#ifdef USE_ALPHAHASH
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
#endif`,wE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LE=`#ifdef USE_AOMAP
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
#endif`,PE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DE=`#ifdef USE_BATCHING
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
#endif`,NE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,IE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kE=`#ifdef USE_IRIDESCENCE
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
#endif`,FE=`#ifdef USE_BUMPMAP
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
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jE=`#define PI 3.141592653589793
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
} // validated`,KE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qE=`vec3 transformedNormal = objectNormal;
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
#endif`,$E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eM="gl_FragColor = linearToOutputTexel( gl_FragColor );",tM=`
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
}`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fM=`#ifdef USE_GRADIENTMAP
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
}`,hM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
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
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EM=`PhysicalMaterial material;
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
#endif`,MM=`struct PhysicalMaterial {
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
}`,TM=`
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
#endif`,AM=`#if defined( RE_IndirectDiffuse )
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,PM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IM=`#if defined( USE_POINTS_UV )
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
#endif`,OM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FM=`#ifdef USE_MORPHNORMALS
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
#endif`,BM=`#ifdef USE_MORPHTARGETS
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
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
#endif`,HM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YM=`#ifdef USE_NORMALMAP
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
#endif`,jM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l1=`float getShadowMask() {
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
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,f1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`#include <common>
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
}`,L1=`#if DEPTH_PACKING == 3200
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
}`,P1=`#define DISTANCE
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
}`,D1=`#define DISTANCE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
}`,U1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,z1=`#define LAMBERT
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
}`,H1=`#define MATCAP
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
}`,G1=`#define MATCAP
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
}`,V1=`#define NORMAL
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
}`,W1=`#define NORMAL
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
}`,X1=`#define PHONG
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
}`,Y1=`#define PHONG
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
}`,j1=`#define STANDARD
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
}`,K1=`#define STANDARD
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
}`,q1=`#define TOON
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
}`,$1=`#define TOON
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
}`,Z1=`uniform float size;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,eT=`uniform vec3 color;
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
}`,tT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:TE,alphahash_pars_fragment:AE,alphamap_fragment:wE,alphamap_pars_fragment:CE,alphatest_fragment:RE,alphatest_pars_fragment:bE,aomap_fragment:LE,aomap_pars_fragment:PE,batching_pars_vertex:DE,batching_vertex:NE,begin_vertex:IE,beginnormal_vertex:OE,bsdfs:UE,iridescence_fragment:kE,bumpmap_pars_fragment:FE,clipping_planes_fragment:BE,clipping_planes_pars_fragment:zE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:GE,color_fragment:VE,color_pars_fragment:WE,color_pars_vertex:XE,color_vertex:YE,common:jE,cube_uv_reflection_fragment:KE,defaultnormal_vertex:qE,displacementmap_pars_vertex:$E,displacementmap_vertex:ZE,emissivemap_fragment:QE,emissivemap_pars_fragment:JE,colorspace_fragment:eM,colorspace_pars_fragment:tM,envmap_fragment:nM,envmap_common_pars_fragment:iM,envmap_pars_fragment:rM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:vM,envmap_vertex:oM,fog_vertex:aM,fog_pars_vertex:lM,fog_fragment:cM,fog_pars_fragment:uM,gradientmap_pars_fragment:fM,lightmap_fragment:hM,lightmap_pars_fragment:dM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:gM,lights_toon_fragment:_M,lights_toon_pars_fragment:yM,lights_phong_fragment:SM,lights_phong_pars_fragment:xM,lights_physical_fragment:EM,lights_physical_pars_fragment:MM,lights_fragment_begin:TM,lights_fragment_maps:AM,lights_fragment_end:wM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:RM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:LM,map_fragment:PM,map_pars_fragment:DM,map_particle_fragment:NM,map_particle_pars_fragment:IM,metalnessmap_fragment:OM,metalnessmap_pars_fragment:UM,morphcolor_vertex:kM,morphnormal_vertex:FM,morphtarget_pars_vertex:BM,morphtarget_vertex:zM,normal_fragment_begin:HM,normal_fragment_maps:GM,normal_pars_fragment:VM,normal_pars_vertex:WM,normal_vertex:XM,normalmap_pars_fragment:YM,clearcoat_normal_fragment_begin:jM,clearcoat_normal_fragment_maps:KM,clearcoat_pars_fragment:qM,iridescence_pars_fragment:$M,opaque_fragment:ZM,packing:QM,premultiplied_alpha_fragment:JM,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:l1,skinbase_vertex:c1,skinning_pars_vertex:u1,skinning_vertex:f1,skinnormal_vertex:h1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:v1,transmission_pars_fragment:_1,uv_pars_fragment:y1,uv_pars_vertex:S1,uv_vertex:x1,worldpos_vertex:E1,background_vert:M1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:w1,cube_vert:C1,cube_frag:R1,depth_vert:b1,depth_frag:L1,distanceRGBA_vert:P1,distanceRGBA_frag:D1,equirect_vert:N1,equirect_frag:I1,linedashed_vert:O1,linedashed_frag:U1,meshbasic_vert:k1,meshbasic_frag:F1,meshlambert_vert:B1,meshlambert_frag:z1,meshmatcap_vert:H1,meshmatcap_frag:G1,meshnormal_vert:V1,meshnormal_frag:W1,meshphong_vert:X1,meshphong_frag:Y1,meshphysical_vert:j1,meshphysical_frag:K1,meshtoon_vert:q1,meshtoon_frag:$1,points_vert:Z1,points_frag:Q1,shadow_vert:J1,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},Se={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},yi={basic:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Te(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:vn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:vn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Te(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:vn([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:vn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:vn([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:vn([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:vn([Se.common,Se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:vn([Se.lights,Se.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};yi.physical={uniforms:vn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const ll={r:0,b:0,g:0};function iT(n,e,t,i,r,s,o){const a=new Te(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let v=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?y(a,l):_&&_.isColor&&(y(_,1),v=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===wc)?(u===void 0&&(u=new bn(new Zr(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Zs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=yt.getTransfer(_.colorSpace)!==bt,(f!==_||h!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new bn(new nd(2,2),new Xi({name:"BackgroundMaterial",uniforms:Zs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=yt.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,d){m.getRGB(ll,jv(n)),i.buffers.color.setClear(ll.r,ll.g,ll.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:g}}function rT(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(F,W,te,se,B){let X=!1;if(o){const j=y(se,te,W);c!==j&&(c=j,p(c.object)),X=d(F,se,te,B),X&&v(F,se,te,B)}else{const j=W.wireframe===!0;(c.geometry!==se.id||c.program!==te.id||c.wireframe!==j)&&(c.geometry=se.id,c.program=te.id,c.wireframe=j,X=!0)}B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,U(F,W,te,se),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function y(F,W,te){const se=te.wireframe===!0;let B=a[F.id];B===void 0&&(B={},a[F.id]=B);let X=B[W.id];X===void 0&&(X={},B[W.id]=X);let j=X[se];return j===void 0&&(j=m(h()),X[se]=j),j}function m(F){const W=[],te=[],se=[];for(let B=0;B<r;B++)W[B]=0,te[B]=0,se[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:te,attributeDivisors:se,object:F,attributes:{},index:null}}function d(F,W,te,se){const B=c.attributes,X=W.attributes;let j=0;const ie=te.getAttributes();for(const le in ie)if(ie[le].location>=0){const ae=B[le];let ye=X[le];if(ye===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor)),ae===void 0||ae.attribute!==ye||ye&&ae.data!==ye.data)return!0;j++}return c.attributesNum!==j||c.index!==se}function v(F,W,te,se){const B={},X=W.attributes;let j=0;const ie=te.getAttributes();for(const le in ie)if(ie[le].location>=0){let ae=X[le];ae===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));const ye={};ye.attribute=ae,ae&&ae.data&&(ye.data=ae.data),B[le]=ye,j++}c.attributes=B,c.attributesNum=j,c.index=se}function _(){const F=c.newAttributes;for(let W=0,te=F.length;W<te;W++)F[W]=0}function E(F){w(F,0)}function w(F,W){const te=c.newAttributes,se=c.enabledAttributes,B=c.attributeDivisors;te[F]=1,se[F]===0&&(n.enableVertexAttribArray(F),se[F]=1),B[F]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,W),B[F]=W)}function S(){const F=c.newAttributes,W=c.enabledAttributes;for(let te=0,se=W.length;te<se;te++)W[te]!==F[te]&&(n.disableVertexAttribArray(te),W[te]=0)}function T(F,W,te,se,B,X,j){j===!0?n.vertexAttribIPointer(F,W,te,B,X):n.vertexAttribPointer(F,W,te,se,B,X)}function U(F,W,te,se){if(i.isWebGL2===!1&&(F.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const B=se.attributes,X=te.getAttributes(),j=W.defaultAttributeValues;for(const ie in X){const le=X[ie];if(le.location>=0){let J=B[ie];if(J===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),J!==void 0){const ae=J.normalized,ye=J.itemSize,Ae=t.get(J);if(Ae===void 0)continue;const Ce=Ae.buffer,Xe=Ae.type,je=Ae.bytesPerElement,be=i.isWebGL2===!0&&(Xe===n.INT||Xe===n.UNSIGNED_INT||J.gpuType===Rv);if(J.isInterleavedBufferAttribute){const lt=J.data,K=lt.stride,nn=J.offset;if(lt.isInstancedInterleavedBuffer){for(let Be=0;Be<le.locationSize;Be++)w(le.location+Be,lt.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Be=0;Be<le.locationSize;Be++)E(le.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Be=0;Be<le.locationSize;Be++)T(le.location+Be,ye/le.locationSize,Xe,ae,K*je,(nn+ye/le.locationSize*Be)*je,be)}else{if(J.isInstancedBufferAttribute){for(let lt=0;lt<le.locationSize;lt++)w(le.location+lt,J.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let lt=0;lt<le.locationSize;lt++)E(le.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let lt=0;lt<le.locationSize;lt++)T(le.location+lt,ye/le.locationSize,Xe,ae,ye*je,ye/le.locationSize*lt*je,be)}}else if(j!==void 0){const ae=j[ie];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(le.location,ae);break;case 3:n.vertexAttrib3fv(le.location,ae);break;case 4:n.vertexAttrib4fv(le.location,ae);break;default:n.vertexAttrib1fv(le.location,ae)}}}}S()}function M(){Z();for(const F in a){const W=a[F];for(const te in W){const se=W[te];for(const B in se)g(se[B].object),delete se[B];delete W[te]}delete a[F]}}function C(F){if(a[F.id]===void 0)return;const W=a[F.id];for(const te in W){const se=W[te];for(const B in se)g(se[B].object),delete se[B];delete W[te]}delete a[F.id]}function V(F){for(const W in a){const te=a[W];if(te[F.id]===void 0)continue;const se=te[F.id];for(const B in se)g(se[B].object),delete se[B];delete te[F.id]}}function Z(){oe(),u=!0,c!==l&&(c=l,p(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:oe,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:E,disableUnusedAttributes:S}}function sT(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function oT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,E=o||e.has("OES_texture_float"),w=_&&E,S=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:S}}function aT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Lr,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,_=v*4;let E=d.clippingState||null;l.value=E,E=u(g,h,_,p);for(let w=0;w!==_;++w)E[w]=t[w];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const d=p+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,E=p;_!==y;++_,E+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function lT(n){let e=new WeakMap;function t(o,a){return a===Xf?o.mapping=Ks:a===Yf&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xf||a===Yf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new SE(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Zv extends Kv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,xm=[.125,.215,.35,.446,.526,.582],Nr=20,Uu=new Zv,Em=new Te;let ku=null,Fu=0,Bu=0;const Pr=(1+Math.sqrt(5))/2,gs=1/Pr,Mm=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Pr,gs),new G(0,Pr,-gs),new G(gs,0,Pr),new G(-gs,0,Pr),new G(Pr,gs,0),new G(-Pr,gs,0)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ku=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,Fu,Bu),e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ca,format:fi,colorSpace:Wi,depthBuffer:!1},r=Am(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(s)),this._blurMaterial=uT(s,e,t)}return r}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Uu)}_sceneToCubeUV(e,t,i,r){const a=new Cn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Em),u.toneMapping=Fi,u.autoClear=!1;const p=new ed({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new bn(new Zr,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Em),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const _=this._cubeSize;cl(r,v*_,d>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ks||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Uu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mm[(r-1)%Mm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new bn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Nr;m>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);const d=[];let v=0;for(let T=0;T<Nr;++T){const U=T/y,M=Math.exp(-U*U/2);d.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const E=this._sizeLods[r],w=3*E*(r>_-Ps?r-_+Ps:0),S=4*(this._cubeSize-E);cl(t,w,S,3*E,2*E),l.setRenderTarget(t),l.render(f,Uu)}}function cT(n){const e=[],t=[],i=[];let r=n;const s=n-Ps+1+xm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ps?l=xm[o-n+Ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,y=3,m=2,d=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let S=0;S<p;S++){const T=S%3*2/3-1,U=S>2?0:-1,M=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];v.set(M,y*g*S),_.set(h,m*g*S);const C=[S,S,S,S,S,S];E.set(C,d*g*S)}const w=new In;w.setAttribute("position",new At(v,y)),w.setAttribute("uv",new At(_,m)),w.setAttribute("faceIndex",new At(E,d)),e.push(w),r>Ps&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Am(n,e,t){const i=new jr(n,e,t);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function uT(n,e,t){const i=new Float32Array(Nr),r=new G(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:id(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function wm(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Cm(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function id(){return`

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
	`}function fT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xf||l===Yf,u=l===Ks||l===qs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Tm(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Tm(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dT(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,d=y.length;m<d;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,E=v.length;_<E;_+=3){const w=v[_+0],S=v[_+1],T=v[_+2];h.push(w,S,S,T,T,w)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,E=v.length/3-1;_<E;_+=3){const w=_+0,S=_+1,T=_+2;h.push(w,S,S,T,T,w)}}else return;const m=new(Fv(h)?Yv:Xv)(h,1);m.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function pT(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function f(p,g,y){if(y===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,g,a,p*l,y),t.update(g,s,y)}function h(p,g,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,y);let d=0;for(let v=0;v<y;v++)d+=g[v];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function mT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gT(n,e){return n[0]-e[0]}function vT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _T(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==y){let W=function(){oe.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),E===!0&&(M=2),w===!0&&(M=3);let C=u.attributes.position.count*M,V=1;C>e.maxTextureSize&&(V=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const Z=new Float32Array(C*V*4*y),oe=new Hv(Z,C,V,y);oe.type=ar,oe.needsUpdate=!0;const F=M*4;for(let te=0;te<y;te++){const se=S[te],B=T[te],X=U[te],j=C*V*4*te;for(let ie=0;ie<se.count;ie++){const le=ie*F;_===!0&&(o.fromBufferAttribute(se,ie),Z[j+le+0]=o.x,Z[j+le+1]=o.y,Z[j+le+2]=o.z,Z[j+le+3]=0),E===!0&&(o.fromBufferAttribute(B,ie),Z[j+le+4]=o.x,Z[j+le+5]=o.y,Z[j+le+6]=o.z,Z[j+le+7]=0),w===!0&&(o.fromBufferAttribute(X,ie),Z[j+le+8]=o.x,Z[j+le+9]=o.y,Z[j+le+10]=o.z,Z[j+le+11]=X.itemSize===4?o.w:1)}}m={count:y,texture:oe,size:new ft(C,V)},s.set(u,m),u.addEventListener("dispose",W)}let d=0;for(let _=0;_<h.length;_++)d+=h[_];const v=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let y=i[u.id];if(y===void 0||y.length!==g){y=[];for(let E=0;E<g;E++)y[E]=[E,0];i[u.id]=y}for(let E=0;E<g;E++){const w=y[E];w[0]=E,w[1]=h[E]}y.sort(vT);for(let E=0;E<8;E++)E<g&&y[E][1]?(a[E][0]=y[E][0],a[E][1]=y[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(gT);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const w=a[E],S=w[0],T=w[1];S!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+E)!==m[S]&&u.setAttribute("morphTarget"+E,m[S]),d&&u.getAttribute("morphNormal"+E)!==d[S]&&u.setAttribute("morphNormal"+E,d[S]),r[E]=T,v+=T):(m&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const _=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function yT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Qv extends Nn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:zr,u!==zr&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zr&&(i=or),i===void 0&&u===$s&&(i=Br),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jv=new Nn,e_=new Qv(1,1);e_.compareFunction=kv;const t_=new Hv,n_=new iE,i_=new qv,Rm=[],bm=[],Lm=new Float32Array(16),Pm=new Float32Array(9),Dm=new Float32Array(4);function so(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rm[r];if(s===void 0&&(s=new Float32Array(r),Rm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bc(n,e){let t=bm[e];t===void 0&&(t=new Int32Array(e),bm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ST(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function ET(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function TT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;Dm.set(i),n.uniformMatrix2fv(this.addr,!1,Dm),Qt(t,i)}}function AT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;Pm.set(i),n.uniformMatrix3fv(this.addr,!1,Pm),Qt(t,i)}}function wT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;Lm.set(i),n.uniformMatrix4fv(this.addr,!1,Lm),Qt(t,i)}}function CT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function bT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function LT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function PT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function DT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function NT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function IT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function OT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?e_:Jv;t.setTexture2D(e||s,r)}function UT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||n_,r)}function kT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||i_,r)}function FT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||t_,r)}function BT(n){switch(n){case 5126:return ST;case 35664:return xT;case 35665:return ET;case 35666:return MT;case 35674:return TT;case 35675:return AT;case 35676:return wT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return bT;case 35669:case 35673:return LT;case 5125:return PT;case 36294:return DT;case 36295:return NT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return FT}}function zT(n,e){n.uniform1fv(this.addr,e)}function HT(n,e){const t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function GT(n,e){const t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function VT(n,e){const t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function WT(n,e){const t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XT(n,e){const t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function YT(n,e){const t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jT(n,e){n.uniform1iv(this.addr,e)}function KT(n,e){n.uniform2iv(this.addr,e)}function qT(n,e){n.uniform3iv(this.addr,e)}function $T(n,e){n.uniform4iv(this.addr,e)}function ZT(n,e){n.uniform1uiv(this.addr,e)}function QT(n,e){n.uniform2uiv(this.addr,e)}function JT(n,e){n.uniform3uiv(this.addr,e)}function eA(n,e){n.uniform4uiv(this.addr,e)}function tA(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jv,s[o])}function nA(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||n_,s[o])}function iA(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||i_,s[o])}function rA(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||t_,s[o])}function sA(n){switch(n){case 5126:return zT;case 35664:return HT;case 35665:return GT;case 35666:return VT;case 35674:return WT;case 35675:return XT;case 35676:return YT;case 5124:case 35670:return jT;case 35667:case 35671:return KT;case 35668:case 35672:return qT;case 35669:case 35673:return $T;case 5125:return ZT;case 36294:return QT;case 36295:return JT;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}class oA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BT(t.type)}}class aA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sA(t.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function Nm(n,e){n.seq.push(e),n.map[e.id]=e}function cA(n,e,t){const i=n.name,r=i.length;for(zu.lastIndex=0;;){const s=zu.exec(i),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Nm(t,c===void 0?new oA(a,n,e):new aA(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new lA(a),Nm(t,f)),t=f}}}class Ll{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);cA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Im(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uA=37297;let fA=0;function hA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function dA(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===rc&&t===ic?i="LinearDisplayP3ToLinearSRGB":e===ic&&t===rc&&(i="LinearSRGBToLinearDisplayP3"),n){case Wi:case Cc:return[i,"LinearTransferOETF"];case qt:case Jh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Om(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hA(n.getShaderSource(e),o)}else return r}function pA(n,e){const t=dA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mA(n,e){let t;switch(e){case wx:t="Linear";break;case Cx:t="Reinhard";break;case Rx:t="OptimizedCineon";break;case bx:t="ACESFilmic";break;case Px:t="AgX";break;case Lx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function vA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function _A(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ds(n){return n!==""}function Um(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(n){return n.replace(SA,EA)}const xA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function EA(n,e){let t=rt[e];if(t===void 0){const i=xA.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qf(t)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(n){return n.replace(MA,TA)}function TA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ex?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function wA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ks:case qs:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function RA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Tx:e="ENVMAP_BLENDING_MIX";break;case Ax:e="ENVMAP_BLENDING_ADD";break}return e}function bA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function LA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=AA(t),c=wA(t),u=CA(t),f=RA(t),h=bA(t),p=t.isWebGL2?"":gA(t),g=vA(t),y=_A(s),m=r.createProgram();let d,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ds).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ds).join(`
`),v.length>0&&(v+=`
`)):(d=[Bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),v=[p,Bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?mA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,pA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Qf(o),o=Um(o,t),o=km(o,t),a=Qf(a),a=Um(a,t),a=km(a,t),o=Fm(o),a=Fm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=_+d+o,w=_+v+a,S=Im(r,r.VERTEX_SHADER,E),T=Im(r,r.FRAGMENT_SHADER,w);r.attachShader(m,S),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function U(Z){if(n.debug.checkShaderErrors){const oe=r.getProgramInfoLog(m).trim(),F=r.getShaderInfoLog(S).trim(),W=r.getShaderInfoLog(T).trim();let te=!0,se=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,S,T);else{const B=Om(r,S,"vertex"),X=Om(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+B+`
`+X)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(F===""||W==="")&&(se=!1);se&&(Z.diagnostics={runnable:te,programLog:oe,vertexShader:{log:F,prefix:d},fragmentShader:{log:W,prefix:v}})}r.deleteShader(S),r.deleteShader(T),M=new Ll(r,m),C=yA(r,m)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(m,uA)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=T,this}let PA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NA(e),t.set(e,i)),i}}class NA{constructor(e){this.id=PA++,this.code=e,this.usedTimes=0}}function IA(n,e,t,i,r,s,o){const a=new Vv,l=new DA,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,C,V,Z,oe){const F=Z.fog,W=oe.geometry,te=M.isMeshStandardMaterial?Z.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),B=se&&se.mapping===wc?se.image.height:null,X=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const j=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=j!==void 0?j.length:0;let le=0;W.morphAttributes.position!==void 0&&(le=1),W.morphAttributes.normal!==void 0&&(le=2),W.morphAttributes.color!==void 0&&(le=3);let J,ae,ye,Ae;if(X){const rn=yi[X];J=rn.vertexShader,ae=rn.fragmentShader}else J=M.vertexShader,ae=M.fragmentShader,l.update(M),ye=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);const Ce=n.getRenderTarget(),Xe=oe.isInstancedMesh===!0,je=oe.isBatchedMesh===!0,be=!!M.map,lt=!!M.matcap,K=!!se,nn=!!M.aoMap,Be=!!M.lightMap,ze=!!M.bumpMap,Ie=!!M.normalMap,Et=!!M.displacementMap,$e=!!M.emissiveMap,L=!!M.metalnessMap,A=!!M.roughnessMap,Y=M.anisotropy>0,de=M.clearcoat>0,he=M.iridescence>0,ge=M.sheen>0,Oe=M.transmission>0,Me=Y&&!!M.anisotropyMap,Le=de&&!!M.clearcoatMap,We=de&&!!M.clearcoatNormalMap,Qe=de&&!!M.clearcoatRoughnessMap,fe=he&&!!M.iridescenceMap,ht=he&&!!M.iridescenceThicknessMap,tt=ge&&!!M.sheenColorMap,qe=ge&&!!M.sheenRoughnessMap,ke=!!M.specularMap,De=!!M.specularColorMap,Je=!!M.specularIntensityMap,ct=Oe&&!!M.transmissionMap,Ct=Oe&&!!M.thicknessMap,nt=!!M.gradientMap,ve=!!M.alphaMap,O=M.alphaTest>0,Ee=!!M.alphaHash,xe=!!M.extensions,Ke=!!W.attributes.uv1,He=!!W.attributes.uv2,gt=!!W.attributes.uv3;let vt=Fi;return M.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(vt=n.toneMapping),{isWebGL2:u,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:J,fragmentShader:ae,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:je,instancing:Xe,instancingColor:Xe&&oe.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Wi,map:be,matcap:lt,envMap:K,envMapMode:K&&se.mapping,envMapCubeUVHeight:B,aoMap:nn,lightMap:Be,bumpMap:ze,normalMap:Ie,displacementMap:h&&Et,emissiveMap:$e,normalMapObjectSpace:Ie&&M.normalMapType===Vx,normalMapTangentSpace:Ie&&M.normalMapType===Uv,metalnessMap:L,roughnessMap:A,anisotropy:Y,anisotropyMap:Me,clearcoat:de,clearcoatMap:Le,clearcoatNormalMap:We,clearcoatRoughnessMap:Qe,iridescence:he,iridescenceMap:fe,iridescenceThicknessMap:ht,sheen:ge,sheenColorMap:tt,sheenRoughnessMap:qe,specularMap:ke,specularColorMap:De,specularIntensityMap:Je,transmission:Oe,transmissionMap:ct,thicknessMap:Ct,gradientMap:nt,opaque:M.transparent===!1&&M.blending===Bs,alphaMap:ve,alphaTest:O,alphaHash:Ee,combine:M.combine,mapUv:be&&y(M.map.channel),aoMapUv:nn&&y(M.aoMap.channel),lightMapUv:Be&&y(M.lightMap.channel),bumpMapUv:ze&&y(M.bumpMap.channel),normalMapUv:Ie&&y(M.normalMap.channel),displacementMapUv:Et&&y(M.displacementMap.channel),emissiveMapUv:$e&&y(M.emissiveMap.channel),metalnessMapUv:L&&y(M.metalnessMap.channel),roughnessMapUv:A&&y(M.roughnessMap.channel),anisotropyMapUv:Me&&y(M.anisotropyMap.channel),clearcoatMapUv:Le&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:We&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:qe&&y(M.sheenRoughnessMap.channel),specularMapUv:ke&&y(M.specularMap.channel),specularColorMapUv:De&&y(M.specularColorMap.channel),specularIntensityMapUv:Je&&y(M.specularIntensityMap.channel),transmissionMapUv:ct&&y(M.transmissionMap.channel),thicknessMapUv:Ct&&y(M.thicknessMap.channel),alphaMapUv:ve&&y(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ie||Y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:He,vertexUv3s:gt,pointsUvs:oe.isPoints===!0&&!!W.attributes.uv&&(be||ve),fog:!!F,useFog:M.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:oe.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xi,flipSided:M.side===xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:xe&&M.extensions.derivatives===!0,extensionFragDepth:xe&&M.extensions.fragDepth===!0,extensionDrawBuffers:xe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)C.push(V),C.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(v(C,M),_(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function v(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function _(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){const C=g[M.type];let V;if(C){const Z=yi[C];V=gE.clone(Z.uniforms)}else V=M.uniforms;return V}function w(M,C){let V;for(let Z=0,oe=c.length;Z<oe;Z++){const F=c[Z];if(F.cacheKey===C){V=F,++V.usedTimes;break}}return V===void 0&&(V=new LA(n,C,M,s),c.push(V)),V}function S(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:U}}function OA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function UA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,y,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function a(f,h,p,g,y,m){const d=o(f,h,p,g,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,y,m){const d=o(f,h,p,g,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||UA),i.length>1&&i.sort(h||zm),r.length>1&&r.sort(h||zm)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function kA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Hm,n.set(i,[o])):r>=s.length?(o=new Hm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function FA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Te};break;case"SpotLight":t={position:new G,direction:new G,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function BA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zA=0;function HA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GA(n,e){const t=new FA,i=BA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,o=new It,a=new It;function l(u,f){let h=0,p=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let y=0,m=0,d=0,v=0,_=0,E=0,w=0,S=0,T=0,U=0,M=0;u.sort(HA);const C=f===!0?Math.PI:1;for(let Z=0,oe=u.length;Z<oe;Z++){const F=u[Z],W=F.color,te=F.intensity,se=F.distance,B=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=W.r*te*C,p+=W.g*te*C,g+=W.b*te*C;else if(F.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(F.sh.coefficients[X],te);M++}else if(F.isDirectionalLight){const X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){const j=F.shadow,ie=i.get(F);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,r.directionalShadow[y]=ie,r.directionalShadowMap[y]=B,r.directionalShadowMatrix[y]=F.shadow.matrix,E++}r.directional[y]=X,y++}else if(F.isSpotLight){const X=t.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(W).multiplyScalar(te*C),X.distance=se,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,r.spot[d]=X;const j=F.shadow;if(F.map&&(r.spotLightMap[T]=F.map,T++,j.updateMatrices(F),F.castShadow&&U++),r.spotLightMatrix[d]=j.matrix,F.castShadow){const ie=i.get(F);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,r.spotShadow[d]=ie,r.spotShadowMap[d]=B,S++}d++}else if(F.isRectAreaLight){const X=t.get(F);X.color.copy(W).multiplyScalar(te),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=X,v++}else if(F.isPointLight){const X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*C),X.distance=F.distance,X.decay=F.decay,F.castShadow){const j=F.shadow,ie=i.get(F);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,r.pointShadow[m]=ie,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=F.shadow.matrix,w++}r.point[m]=X,m++}else if(F.isHemisphereLight){const X=t.get(F);X.skyColor.copy(F.color).multiplyScalar(te*C),X.groundColor.copy(F.groundColor).multiplyScalar(te*C),r.hemi[_]=X,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const V=r.hash;(V.directionalLength!==y||V.pointLength!==m||V.spotLength!==d||V.rectAreaLength!==v||V.hemiLength!==_||V.numDirectionalShadows!==E||V.numPointShadows!==w||V.numSpotShadows!==S||V.numSpotMaps!==T||V.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=S+T-U,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=M,V.directionalLength=y,V.pointLength=m,V.spotLength=d,V.rectAreaLength=v,V.hemiLength=_,V.numDirectionalShadows=E,V.numPointShadows=w,V.numSpotShadows=S,V.numSpotMaps=T,V.numLightProbes=M,r.version=zA++)}function c(u,f){let h=0,p=0,g=0,y=0,m=0;const d=f.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const E=u[v];if(E.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(E.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),g++}else if(E.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Gm(n,e){const t=new GA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function VA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Gm(n,e),t.set(s,[l])):o>=a.length?(l=new Gm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class WA extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XA extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
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
}`;function KA(n,e,t){let i=new td;const r=new ft,s=new ft,o=new Nt,a=new WA({depthPacking:Gx}),l=new XA,c={},u=t.maxTextureSize,f={[Vi]:xn,[xn]:Vi,[xi]:xi},h=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:YA,fragmentShader:jA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new bn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wv;let d=this.type;this.render=function(S,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const M=n.getRenderTarget(),C=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(gr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const oe=d!==Pi&&this.type===Pi,F=d===Pi&&this.type!==Pi;for(let W=0,te=S.length;W<te;W++){const se=S[W],B=se.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const X=B.getFrameExtents();if(r.multiply(X),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,B.mapSize.y=s.y)),B.map===null||oe===!0||F===!0){const ie=this.type!==Pi?{minFilter:ln,magFilter:ln}:{};B.map!==null&&B.map.dispose(),B.map=new jr(r.x,r.y,ie),B.map.texture.name=se.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const j=B.getViewportCount();for(let ie=0;ie<j;ie++){const le=B.getViewport(ie);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),Z.viewport(o),B.updateMatrices(se,ie),i=B.getFrustum(),E(T,U,B.camera,se,this.type)}B.isPointLightShadow!==!0&&this.type===Pi&&v(B,U),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,C,V)};function v(S,T){const U=e.update(y);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new jr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,U,h,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,U,p,y,null)}function _(S,T,U,M){let C=null;const V=U.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)C=V;else if(C=U.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Z=C.uuid,oe=T.uuid;let F=c[Z];F===void 0&&(F={},c[Z]=F);let W=F[oe];W===void 0&&(W=C.clone(),F[oe]=W,T.addEventListener("dispose",w)),C=W}if(C.visible=T.visible,C.wireframe=T.wireframe,M===Pi?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:f[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,U.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=n.properties.get(C);Z.light=U}return C}function E(S,T,U,M,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Pi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld);const oe=e.update(S),F=S.material;if(Array.isArray(F)){const W=oe.groups;for(let te=0,se=W.length;te<se;te++){const B=W[te],X=F[B.materialIndex];if(X&&X.visible){const j=_(S,X,M,C);S.onBeforeShadow(n,S,T,U,oe,j,B),n.renderBufferDirect(U,null,oe,j,S,B),S.onAfterShadow(n,S,T,U,oe,j,B)}}}else if(F.visible){const W=_(S,F,M,C);S.onBeforeShadow(n,S,T,U,oe,W,null),n.renderBufferDirect(U,null,oe,W,S,null),S.onAfterShadow(n,S,T,U,oe,W,null)}}const Z=S.children;for(let oe=0,F=Z.length;oe<F;oe++)E(Z[oe],T,U,M,C)}function w(S){S.target.removeEventListener("dispose",w);for(const U in c){const M=c[U],C=S.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}function qA(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const Ee=new Nt;let xe=null;const Ke=new Nt(0,0,0,0);return{setMask:function(He){xe!==He&&!O&&(n.colorMask(He,He,He,He),xe=He)},setLocked:function(He){O=He},setClear:function(He,gt,vt,Vt,rn){rn===!0&&(He*=Vt,gt*=Vt,vt*=Vt),Ee.set(He,gt,vt,Vt),Ke.equals(Ee)===!1&&(n.clearColor(He,gt,vt,Vt),Ke.copy(Ee))},reset:function(){O=!1,xe=null,Ke.set(-1,0,0,0)}}}function s(){let O=!1,Ee=null,xe=null,Ke=null;return{setTest:function(He){He?je(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(He){Ee!==He&&!O&&(n.depthMask(He),Ee=He)},setFunc:function(He){if(xe!==He){switch(He){case vx:n.depthFunc(n.NEVER);break;case _x:n.depthFunc(n.ALWAYS);break;case yx:n.depthFunc(n.LESS);break;case tc:n.depthFunc(n.LEQUAL);break;case Sx:n.depthFunc(n.EQUAL);break;case xx:n.depthFunc(n.GEQUAL);break;case Ex:n.depthFunc(n.GREATER);break;case Mx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=He}},setLocked:function(He){O=He},setClear:function(He){Ke!==He&&(n.clearDepth(He),Ke=He)},reset:function(){O=!1,Ee=null,xe=null,Ke=null}}}function o(){let O=!1,Ee=null,xe=null,Ke=null,He=null,gt=null,vt=null,Vt=null,rn=null;return{setTest:function(_t){O||(_t?je(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(_t){Ee!==_t&&!O&&(n.stencilMask(_t),Ee=_t)},setFunc:function(_t,sn,Wn){(xe!==_t||Ke!==sn||He!==Wn)&&(n.stencilFunc(_t,sn,Wn),xe=_t,Ke=sn,He=Wn)},setOp:function(_t,sn,Wn){(gt!==_t||vt!==sn||Vt!==Wn)&&(n.stencilOp(_t,sn,Wn),gt=_t,vt=sn,Vt=Wn)},setLocked:function(_t){O=_t},setClear:function(_t){rn!==_t&&(n.clearStencil(_t),rn=_t)},reset:function(){O=!1,Ee=null,xe=null,Ke=null,He=null,gt=null,vt=null,Vt=null,rn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,y=[],m=null,d=!1,v=null,_=null,E=null,w=null,S=null,T=null,U=null,M=new Te(0,0,0),C=0,V=!1,Z=null,oe=null,F=null,W=null,te=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=X>=2);let ie=null,le={};const J=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),ye=new Nt().fromArray(J),Ae=new Nt().fromArray(ae);function Ce(O,Ee,xe,Ke){const He=new Uint8Array(4),gt=n.createTexture();n.bindTexture(O,gt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let vt=0;vt<xe;vt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,Ke,0,n.RGBA,n.UNSIGNED_BYTE,He):n.texImage2D(Ee+vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,He);return gt}const Xe={};Xe[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Xe[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Xe[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Xe[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),je(n.DEPTH_TEST),l.setFunc(tc),$e(!1),L(Mp),je(n.CULL_FACE),Ie(gr);function je(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function be(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function lt(O,Ee){return p[O]!==Ee?(n.bindFramebuffer(O,Ee),p[O]=Ee,i&&(O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Ee),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function K(O,Ee){let xe=y,Ke=!1;if(O)if(xe=g.get(Ee),xe===void 0&&(xe=[],g.set(Ee,xe)),O.isWebGLMultipleRenderTargets){const He=O.texture;if(xe.length!==He.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,vt=He.length;gt<vt;gt++)xe[gt]=n.COLOR_ATTACHMENT0+gt;xe.length=He.length,Ke=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,Ke=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,Ke=!0);Ke&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function nn(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const Be={[Dr]:n.FUNC_ADD,[nx]:n.FUNC_SUBTRACT,[ix]:n.FUNC_REVERSE_SUBTRACT};if(i)Be[Cp]=n.MIN,Be[Rp]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Be[Cp]=O.MIN_EXT,Be[Rp]=O.MAX_EXT)}const ze={[rx]:n.ZERO,[sx]:n.ONE,[ox]:n.SRC_COLOR,[Vf]:n.SRC_ALPHA,[hx]:n.SRC_ALPHA_SATURATE,[ux]:n.DST_COLOR,[lx]:n.DST_ALPHA,[ax]:n.ONE_MINUS_SRC_COLOR,[Wf]:n.ONE_MINUS_SRC_ALPHA,[fx]:n.ONE_MINUS_DST_COLOR,[cx]:n.ONE_MINUS_DST_ALPHA,[dx]:n.CONSTANT_COLOR,[px]:n.ONE_MINUS_CONSTANT_COLOR,[mx]:n.CONSTANT_ALPHA,[gx]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(O,Ee,xe,Ke,He,gt,vt,Vt,rn,_t){if(O===gr){d===!0&&(be(n.BLEND),d=!1);return}if(d===!1&&(je(n.BLEND),d=!0),O!==tx){if(O!==v||_t!==V){if((_!==Dr||S!==Dr)&&(n.blendEquation(n.FUNC_ADD),_=Dr,S=Dr),_t)switch(O){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tp:n.blendFunc(n.ONE,n.ONE);break;case Ap:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ap:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,w=null,T=null,U=null,M.set(0,0,0),C=0,v=O,V=_t}return}He=He||Ee,gt=gt||xe,vt=vt||Ke,(Ee!==_||He!==S)&&(n.blendEquationSeparate(Be[Ee],Be[He]),_=Ee,S=He),(xe!==E||Ke!==w||gt!==T||vt!==U)&&(n.blendFuncSeparate(ze[xe],ze[Ke],ze[gt],ze[vt]),E=xe,w=Ke,T=gt,U=vt),(Vt.equals(M)===!1||rn!==C)&&(n.blendColor(Vt.r,Vt.g,Vt.b,rn),M.copy(Vt),C=rn),v=O,V=!1}function Et(O,Ee){O.side===xi?be(n.CULL_FACE):je(n.CULL_FACE);let xe=O.side===xn;Ee&&(xe=!xe),$e(xe),O.blending===Bs&&O.transparent===!1?Ie(gr):Ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Ke=O.stencilWrite;c.setTest(Ke),Ke&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Y(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?je(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(O){Z!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),Z=O)}function L(O){O!==QS?(je(n.CULL_FACE),O!==oe&&(O===Mp?n.cullFace(n.BACK):O===JS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),oe=O}function A(O){O!==F&&(B&&n.lineWidth(O),F=O)}function Y(O,Ee,xe){O?(je(n.POLYGON_OFFSET_FILL),(W!==Ee||te!==xe)&&(n.polygonOffset(Ee,xe),W=Ee,te=xe)):be(n.POLYGON_OFFSET_FILL)}function de(O){O?je(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function he(O){O===void 0&&(O=n.TEXTURE0+se-1),ie!==O&&(n.activeTexture(O),ie=O)}function ge(O,Ee,xe){xe===void 0&&(ie===null?xe=n.TEXTURE0+se-1:xe=ie);let Ke=le[xe];Ke===void 0&&(Ke={type:void 0,texture:void 0},le[xe]=Ke),(Ke.type!==O||Ke.texture!==Ee)&&(ie!==xe&&(n.activeTexture(xe),ie=xe),n.bindTexture(O,Ee||Xe[O]),Ke.type=O,Ke.texture=Ee)}function Oe(){const O=le[ie];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(O){ye.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ye.copy(O))}function ct(O){Ae.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ae.copy(O))}function Ct(O,Ee){let xe=f.get(Ee);xe===void 0&&(xe=new WeakMap,f.set(Ee,xe));let Ke=xe.get(O);Ke===void 0&&(Ke=n.getUniformBlockIndex(Ee,O.name),xe.set(O,Ke))}function nt(O,Ee){const Ke=f.get(Ee).get(O);u.get(Ee)!==Ke&&(n.uniformBlockBinding(Ee,Ke,O.__bindingPointIndex),u.set(Ee,Ke))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,le={},p={},g=new WeakMap,y=[],m=null,d=!1,v=null,_=null,E=null,w=null,S=null,T=null,U=null,M=new Te(0,0,0),C=0,V=!1,Z=null,oe=null,F=null,W=null,te=null,ye.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:je,disable:be,bindFramebuffer:lt,drawBuffers:K,useProgram:nn,setBlending:Ie,setMaterial:Et,setFlipSided:$e,setCullFace:L,setLineWidth:A,setPolygonOffset:Y,setScissorTest:de,activeTexture:he,bindTexture:ge,unbindTexture:Oe,compressedTexImage2D:Me,compressedTexImage3D:Le,texImage2D:ke,texImage3D:De,updateUBOMapping:Ct,uniformBlockBinding:nt,texStorage2D:tt,texStorage3D:qe,texSubImage2D:We,texSubImage3D:Qe,compressedTexSubImage2D:fe,compressedTexSubImage3D:ht,scissor:Je,viewport:ct,reset:ve}}function $A(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return p?new OffscreenCanvas(L,A):oc("canvas")}function y(L,A,Y,de){let he=1;if((L.width>de||L.height>de)&&(he=de/Math.max(L.width,L.height)),he<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ge=A?Zf:Math.floor,Oe=ge(he*L.width),Me=ge(he*L.height);f===void 0&&(f=g(Oe,Me));const Le=Y?g(Oe,Me):f;return Le.width=Oe,Le.height=Me,Le.getContext("2d").drawImage(L,0,0,Oe,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Oe+"x"+Me+")."),Le}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return rm(L.width)&&rm(L.height)}function d(L){return a?!1:L.wrapS!==Fn||L.wrapT!==Fn||L.minFilter!==ln&&L.minFilter!==$n}function v(L,A){return L.generateMipmaps&&A&&L.minFilter!==ln&&L.minFilter!==$n}function _(L){n.generateMipmap(L)}function E(L,A,Y,de,he=!1){if(a===!1)return A;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ge=A;if(A===n.RED&&(Y===n.FLOAT&&(ge=n.R32F),Y===n.HALF_FLOAT&&(ge=n.R16F),Y===n.UNSIGNED_BYTE&&(ge=n.R8)),A===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ge=n.R8UI),Y===n.UNSIGNED_SHORT&&(ge=n.R16UI),Y===n.UNSIGNED_INT&&(ge=n.R32UI),Y===n.BYTE&&(ge=n.R8I),Y===n.SHORT&&(ge=n.R16I),Y===n.INT&&(ge=n.R32I)),A===n.RG&&(Y===n.FLOAT&&(ge=n.RG32F),Y===n.HALF_FLOAT&&(ge=n.RG16F),Y===n.UNSIGNED_BYTE&&(ge=n.RG8)),A===n.RGBA){const Oe=he?nc:yt.getTransfer(de);Y===n.FLOAT&&(ge=n.RGBA32F),Y===n.HALF_FLOAT&&(ge=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ge=Oe===bt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function w(L,A,Y){return v(L,Y)===!0||L.isFramebufferTexture&&L.minFilter!==ln&&L.minFilter!==$n?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function S(L){return L===ln||L===bp||L===fu?n.NEAREST:n.LINEAR}function T(L){const A=L.target;A.removeEventListener("dispose",T),M(A),A.isVideoTexture&&u.delete(A)}function U(L){const A=L.target;A.removeEventListener("dispose",U),V(A)}function M(L){const A=i.get(L);if(A.__webglInit===void 0)return;const Y=L.source,de=h.get(Y);if(de){const he=de[A.__cacheKey];he.usedTimes--,he.usedTimes===0&&C(L),Object.keys(de).length===0&&h.delete(Y)}i.remove(L)}function C(L){const A=i.get(L);n.deleteTexture(A.__webglTexture);const Y=L.source,de=h.get(Y);delete de[A.__cacheKey],o.memory.textures--}function V(L){const A=L.texture,Y=i.get(L),de=i.get(A);if(de.__webglTexture!==void 0&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(Y.__webglFramebuffer[he]))for(let ge=0;ge<Y.__webglFramebuffer[he].length;ge++)n.deleteFramebuffer(Y.__webglFramebuffer[he][ge]);else n.deleteFramebuffer(Y.__webglFramebuffer[he]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[he])}else{if(Array.isArray(Y.__webglFramebuffer))for(let he=0;he<Y.__webglFramebuffer.length;he++)n.deleteFramebuffer(Y.__webglFramebuffer[he]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let he=0;he<Y.__webglColorRenderbuffer.length;he++)Y.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[he]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let he=0,ge=A.length;he<ge;he++){const Oe=i.get(A[he]);Oe.__webglTexture&&(n.deleteTexture(Oe.__webglTexture),o.memory.textures--),i.remove(A[he])}i.remove(A),i.remove(L)}let Z=0;function oe(){Z=0}function F(){const L=Z;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),Z+=1,L}function W(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function te(L,A){const Y=i.get(L);if(L.isVideoTexture&&Et(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Y,L,A);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+A)}function se(L,A){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){ye(Y,L,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+A)}function B(L,A){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){ye(Y,L,A);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+A)}function X(L,A){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){Ae(Y,L,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+A)}const j={[jf]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Kf]:n.MIRRORED_REPEAT},ie={[ln]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[fu]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[Dx]:n.LINEAR_MIPMAP_NEAREST,[la]:n.LINEAR_MIPMAP_LINEAR},le={[Wx]:n.NEVER,[$x]:n.ALWAYS,[Xx]:n.LESS,[kv]:n.LEQUAL,[Yx]:n.EQUAL,[qx]:n.GEQUAL,[jx]:n.GREATER,[Kx]:n.NOTEQUAL};function J(L,A,Y){if(Y?(n.texParameteri(L,n.TEXTURE_WRAP_S,j[A.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,j[A.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,j[A.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ie[A.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ie[A.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Fn||A.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,S(A.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==ln&&A.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,le[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===ln||A.minFilter!==fu&&A.minFilter!==la||A.type===ar&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===ca&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(L,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function ae(L,A){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",T));const de=A.source;let he=h.get(de);he===void 0&&(he={},h.set(de,he));const ge=W(A);if(ge!==L.__cacheKey){he[ge]===void 0&&(he[ge]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),he[ge].usedTimes++;const Oe=he[L.__cacheKey];Oe!==void 0&&(he[L.__cacheKey].usedTimes--,Oe.usedTimes===0&&C(A)),L.__cacheKey=ge,L.__webglTexture=he[ge].texture}return Y}function ye(L,A,Y){let de=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=n.TEXTURE_3D);const he=ae(L,A),ge=A.source;t.bindTexture(de,L.__webglTexture,n.TEXTURE0+Y);const Oe=i.get(ge);if(ge.version!==Oe.__version||he===!0){t.activeTexture(n.TEXTURE0+Y);const Me=yt.getPrimaries(yt.workingColorSpace),Le=A.colorSpace===Zn?null:yt.getPrimaries(A.colorSpace),We=A.colorSpace===Zn||Me===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Qe=d(A)&&m(A.image)===!1;let fe=y(A.image,Qe,!1,r.maxTextureSize);fe=$e(A,fe);const ht=m(fe)||a,tt=s.convert(A.format,A.colorSpace);let qe=s.convert(A.type),ke=E(A.internalFormat,tt,qe,A.colorSpace,A.isVideoTexture);J(de,A,ht);let De;const Je=A.mipmaps,ct=a&&A.isVideoTexture!==!0&&ke!==Iv,Ct=Oe.__version===void 0||he===!0,nt=w(A,fe,ht);if(A.isDepthTexture)ke=n.DEPTH_COMPONENT,a?A.type===ar?ke=n.DEPTH_COMPONENT32F:A.type===or?ke=n.DEPTH_COMPONENT24:A.type===Br?ke=n.DEPTH24_STENCIL8:ke=n.DEPTH_COMPONENT16:A.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===zr&&ke===n.DEPTH_COMPONENT&&A.type!==Qh&&A.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=or,qe=s.convert(A.type)),A.format===$s&&ke===n.DEPTH_COMPONENT&&(ke=n.DEPTH_STENCIL,A.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Br,qe=s.convert(A.type))),Ct&&(ct?t.texStorage2D(n.TEXTURE_2D,1,ke,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,ke,fe.width,fe.height,0,tt,qe,null));else if(A.isDataTexture)if(Je.length>0&&ht){ct&&Ct&&t.texStorage2D(n.TEXTURE_2D,nt,ke,Je[0].width,Je[0].height);for(let ve=0,O=Je.length;ve<O;ve++)De=Je[ve],ct?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,De.width,De.height,tt,qe,De.data):t.texImage2D(n.TEXTURE_2D,ve,ke,De.width,De.height,0,tt,qe,De.data);A.generateMipmaps=!1}else ct?(Ct&&t.texStorage2D(n.TEXTURE_2D,nt,ke,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,tt,qe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,ke,fe.width,fe.height,0,tt,qe,fe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ct&&Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,ke,Je[0].width,Je[0].height,fe.depth);for(let ve=0,O=Je.length;ve<O;ve++)De=Je[ve],A.format!==fi?tt!==null?ct?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,fe.depth,tt,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,ke,De.width,De.height,fe.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,fe.depth,tt,qe,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,ke,De.width,De.height,fe.depth,0,tt,qe,De.data)}else{ct&&Ct&&t.texStorage2D(n.TEXTURE_2D,nt,ke,Je[0].width,Je[0].height);for(let ve=0,O=Je.length;ve<O;ve++)De=Je[ve],A.format!==fi?tt!==null?ct?t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,De.width,De.height,tt,De.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,ke,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,De.width,De.height,tt,qe,De.data):t.texImage2D(n.TEXTURE_2D,ve,ke,De.width,De.height,0,tt,qe,De.data)}else if(A.isDataArrayTexture)ct?(Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,ke,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,tt,qe,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,fe.width,fe.height,fe.depth,0,tt,qe,fe.data);else if(A.isData3DTexture)ct?(Ct&&t.texStorage3D(n.TEXTURE_3D,nt,ke,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,tt,qe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,ke,fe.width,fe.height,fe.depth,0,tt,qe,fe.data);else if(A.isFramebufferTexture){if(Ct)if(ct)t.texStorage2D(n.TEXTURE_2D,nt,ke,fe.width,fe.height);else{let ve=fe.width,O=fe.height;for(let Ee=0;Ee<nt;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ke,ve,O,0,tt,qe,null),ve>>=1,O>>=1}}else if(Je.length>0&&ht){ct&&Ct&&t.texStorage2D(n.TEXTURE_2D,nt,ke,Je[0].width,Je[0].height);for(let ve=0,O=Je.length;ve<O;ve++)De=Je[ve],ct?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,tt,qe,De):t.texImage2D(n.TEXTURE_2D,ve,ke,tt,qe,De);A.generateMipmaps=!1}else ct?(Ct&&t.texStorage2D(n.TEXTURE_2D,nt,ke,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,tt,qe,fe)):t.texImage2D(n.TEXTURE_2D,0,ke,tt,qe,fe);v(A,ht)&&_(de),Oe.__version=ge.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ae(L,A,Y){if(A.image.length!==6)return;const de=ae(L,A),he=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Y);const ge=i.get(he);if(he.version!==ge.__version||de===!0){t.activeTexture(n.TEXTURE0+Y);const Oe=yt.getPrimaries(yt.workingColorSpace),Me=A.colorSpace===Zn?null:yt.getPrimaries(A.colorSpace),Le=A.colorSpace===Zn||Oe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const We=A.isCompressedTexture||A.image[0].isCompressedTexture,Qe=A.image[0]&&A.image[0].isDataTexture,fe=[];for(let ve=0;ve<6;ve++)!We&&!Qe?fe[ve]=y(A.image[ve],!1,!0,r.maxCubemapSize):fe[ve]=Qe?A.image[ve].image:A.image[ve],fe[ve]=$e(A,fe[ve]);const ht=fe[0],tt=m(ht)||a,qe=s.convert(A.format,A.colorSpace),ke=s.convert(A.type),De=E(A.internalFormat,qe,ke,A.colorSpace),Je=a&&A.isVideoTexture!==!0,ct=ge.__version===void 0||de===!0;let Ct=w(A,ht,tt);J(n.TEXTURE_CUBE_MAP,A,tt);let nt;if(We){Je&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,De,ht.width,ht.height);for(let ve=0;ve<6;ve++){nt=fe[ve].mipmaps;for(let O=0;O<nt.length;O++){const Ee=nt[O];A.format!==fi?qe!==null?Je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,O,0,0,Ee.width,Ee.height,qe,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,O,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,O,0,0,Ee.width,Ee.height,qe,ke,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,O,De,Ee.width,Ee.height,0,qe,ke,Ee.data)}}}else{nt=A.mipmaps,Je&&ct&&(nt.length>0&&Ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,De,fe[0].width,fe[0].height));for(let ve=0;ve<6;ve++)if(Qe){Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,fe[ve].width,fe[ve].height,qe,ke,fe[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,De,fe[ve].width,fe[ve].height,0,qe,ke,fe[ve].data);for(let O=0;O<nt.length;O++){const xe=nt[O].image[ve].image;Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,O+1,0,0,xe.width,xe.height,qe,ke,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,O+1,De,xe.width,xe.height,0,qe,ke,xe.data)}}else{Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,qe,ke,fe[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,De,qe,ke,fe[ve]);for(let O=0;O<nt.length;O++){const Ee=nt[O];Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,O+1,0,0,qe,ke,Ee.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,O+1,De,qe,ke,Ee.image[ve])}}}v(A,tt)&&_(n.TEXTURE_CUBE_MAP),ge.__version=he.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ce(L,A,Y,de,he,ge){const Oe=s.convert(Y.format,Y.colorSpace),Me=s.convert(Y.type),Le=E(Y.internalFormat,Oe,Me,Y.colorSpace);if(!i.get(A).__hasExternalTextures){const Qe=Math.max(1,A.width>>ge),fe=Math.max(1,A.height>>ge);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,ge,Le,Qe,fe,A.depth,0,Oe,Me,null):t.texImage2D(he,ge,Le,Qe,fe,0,Oe,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Ie(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,he,i.get(Y).__webglTexture,0,ze(A)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,he,i.get(Y).__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(L,A,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let de=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||Ie(A)){const he=A.depthTexture;he&&he.isDepthTexture&&(he.type===ar?de=n.DEPTH_COMPONENT32F:he.type===or&&(de=n.DEPTH_COMPONENT24));const ge=ze(A);Ie(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,de,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,de,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,de,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const de=ze(A);Y&&Ie(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,A.width,A.height):Ie(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{const de=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let he=0;he<de.length;he++){const ge=de[he],Oe=s.convert(ge.format,ge.colorSpace),Me=s.convert(ge.type),Le=E(ge.internalFormat,Oe,Me,ge.colorSpace),We=ze(A);Y&&Ie(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Le,A.width,A.height):Ie(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,Le,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Le,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function je(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),te(A.depthTexture,0);const de=i.get(A.depthTexture).__webglTexture,he=ze(A);if(A.depthTexture.format===zr)Ie(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(A.depthTexture.format===$s)Ie(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function be(L){const A=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");je(A.__webglFramebuffer,L)}else if(Y){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=n.createRenderbuffer(),Xe(A.__webglDepthbuffer[de],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Xe(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(L,A,Y){const de=i.get(L);A!==void 0&&Ce(de.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&be(L)}function K(L){const A=L.texture,Y=i.get(L),de=i.get(A);L.addEventListener("dispose",U),L.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=A.version,o.memory.textures++);const he=L.isWebGLCubeRenderTarget===!0,ge=L.isWebGLMultipleRenderTargets===!0,Oe=m(L)||a;if(he){Y.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(a&&A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[Me]=[];for(let Le=0;Le<A.mipmaps.length;Le++)Y.__webglFramebuffer[Me][Le]=n.createFramebuffer()}else Y.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Me=0;Me<A.mipmaps.length;Me++)Y.__webglFramebuffer[Me]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ge)if(r.drawBuffers){const Me=L.texture;for(let Le=0,We=Me.length;Le<We;Le++){const Qe=i.get(Me[Le]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Ie(L)===!1){const Me=ge?A:[A];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Le=0;Le<Me.length;Le++){const We=Me[Le];Y.__webglColorRenderbuffer[Le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Le]);const Qe=s.convert(We.format,We.colorSpace),fe=s.convert(We.type),ht=E(We.internalFormat,Qe,fe,We.colorSpace,L.isXRRenderTarget===!0),tt=ze(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,ht,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Le])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),J(n.TEXTURE_CUBE_MAP,A,Oe);for(let Me=0;Me<6;Me++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Le=0;Le<A.mipmaps.length;Le++)Ce(Y.__webglFramebuffer[Me][Le],L,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le);else Ce(Y.__webglFramebuffer[Me],L,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);v(A,Oe)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){const Me=L.texture;for(let Le=0,We=Me.length;Le<We;Le++){const Qe=Me[Le],fe=i.get(Qe);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),J(n.TEXTURE_2D,Qe,Oe),Ce(Y.__webglFramebuffer,L,Qe,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,0),v(Qe,Oe)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?Me=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,de.__webglTexture),J(Me,A,Oe),a&&A.mipmaps&&A.mipmaps.length>0)for(let Le=0;Le<A.mipmaps.length;Le++)Ce(Y.__webglFramebuffer[Le],L,A,n.COLOR_ATTACHMENT0,Me,Le);else Ce(Y.__webglFramebuffer,L,A,n.COLOR_ATTACHMENT0,Me,0);v(A,Oe)&&_(Me),t.unbindTexture()}L.depthBuffer&&be(L)}function nn(L){const A=m(L)||a,Y=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let de=0,he=Y.length;de<he;de++){const ge=Y[de];if(v(ge,A)){const Oe=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(ge).__webglTexture;t.bindTexture(Oe,Me),_(Oe),t.unbindTexture()}}}function Be(L){if(a&&L.samples>0&&Ie(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Y=L.width,de=L.height;let he=n.COLOR_BUFFER_BIT;const ge=[],Oe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(L),Le=L.isWebGLMultipleRenderTargets===!0;if(Le)for(let We=0;We<A.length;We++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let We=0;We<A.length;We++){ge.push(n.COLOR_ATTACHMENT0+We),L.depthBuffer&&ge.push(Oe);const Qe=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Qe===!1&&(L.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[We]),Qe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Oe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Oe])),Le){const fe=i.get(A[We]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,Y,de,0,0,Y,de,he,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Le)for(let We=0;We<A.length;We++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,Me.__webglColorRenderbuffer[We]);const Qe=i.get(A[We]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function ze(L){return Math.min(r.maxSamples,L.samples)}function Ie(L){const A=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Et(L){const A=o.render.frame;u.get(L)!==A&&(u.set(L,A),L.update())}function $e(L,A){const Y=L.colorSpace,de=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===qf||Y!==Wi&&Y!==Zn&&(yt.getTransfer(Y)===bt?a===!1?e.has("EXT_sRGB")===!0&&de===fi?(L.format=qf,L.minFilter=$n,L.generateMipmaps=!1):A=Bv.sRGBToLinear(A):(de!==fi||he!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),A}this.allocateTextureUnit=F,this.resetTextureUnits=oe,this.setTexture2D=te,this.setTexture2DArray=se,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=lt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ie}function ZA(n,e,t){const i=t.isWebGL2;function r(s,o=Zn){let a;const l=yt.getTransfer(o);if(s===vr)return n.UNSIGNED_BYTE;if(s===bv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Lv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Nx)return n.BYTE;if(s===Ix)return n.SHORT;if(s===Qh)return n.UNSIGNED_SHORT;if(s===Rv)return n.INT;if(s===or)return n.UNSIGNED_INT;if(s===ar)return n.FLOAT;if(s===ca)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ox)return n.ALPHA;if(s===fi)return n.RGBA;if(s===Ux)return n.LUMINANCE;if(s===kx)return n.LUMINANCE_ALPHA;if(s===zr)return n.DEPTH_COMPONENT;if(s===$s)return n.DEPTH_STENCIL;if(s===qf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Fx)return n.RED;if(s===Pv)return n.RED_INTEGER;if(s===Bx)return n.RG;if(s===Dv)return n.RG_INTEGER;if(s===Nv)return n.RGBA_INTEGER;if(s===hu||s===du||s===pu||s===mu)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lp||s===Pp||s===Dp||s===Np)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Lp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Np)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Iv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ip||s===Op)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ip)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Op)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Up||s===kp||s===Fp||s===Bp||s===zp||s===Hp||s===Gp||s===Vp||s===Wp||s===Xp||s===Yp||s===jp||s===Kp||s===qp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Up)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qp)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gu||s===$p||s===Zp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gu)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$p)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zx||s===Qp||s===Jp||s===em)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Qp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===em)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Br?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class QA extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ul extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JA={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ew extends no{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const y=t.getContextAttributes();let m=null,d=null;const v=[],_=[],E=new ft;let w=null;const S=new Cn;S.layers.enable(1),S.viewport=new Nt;const T=new Cn;T.layers.enable(2),T.viewport=new Nt;const U=[S,T],M=new QA;M.layers.enable(1),M.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=v[J];return ae===void 0&&(ae=new Hu,v[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=v[J];return ae===void 0&&(ae=new Hu,v[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=v[J];return ae===void 0&&(ae=new Hu,v[J]=ae),ae.getHandSpace()};function Z(J){const ae=_.indexOf(J.inputSource);if(ae===-1)return;const ye=v[ae];ye!==void 0&&(ye.update(J.inputSource,J.frame,c||o),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function oe(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",F);for(let J=0;J<v.length;J++){const ae=_[J];ae!==null&&(_[J]=null,v[J].disconnect(ae))}C=null,V=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new jr(p.framebufferWidth,p.framebufferHeight,{format:fi,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ae=null,ye=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?$s:zr,ye=y.stencil?Br:or);const Ce={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new jr(h.textureWidth,h.textureHeight,{format:fi,type:vr,depthTexture:new Qv(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Xe=e.properties.get(d);Xe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(J){for(let ae=0;ae<J.removed.length;ae++){const ye=J.removed[ae],Ae=_.indexOf(ye);Ae>=0&&(_[Ae]=null,v[Ae].disconnect(ye))}for(let ae=0;ae<J.added.length;ae++){const ye=J.added[ae];let Ae=_.indexOf(ye);if(Ae===-1){for(let Xe=0;Xe<v.length;Xe++)if(Xe>=_.length){_.push(ye),Ae=Xe;break}else if(_[Xe]===null){_[Xe]=ye,Ae=Xe;break}if(Ae===-1)break}const Ce=v[Ae];Ce&&Ce.connect(ye)}}const W=new G,te=new G;function se(J,ae,ye){W.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(ye.matrixWorld);const Ae=W.distanceTo(te),Ce=ae.projectionMatrix.elements,Xe=ye.projectionMatrix.elements,je=Ce[14]/(Ce[10]-1),be=Ce[14]/(Ce[10]+1),lt=(Ce[9]+1)/Ce[5],K=(Ce[9]-1)/Ce[5],nn=(Ce[8]-1)/Ce[0],Be=(Xe[8]+1)/Xe[0],ze=je*nn,Ie=je*Be,Et=Ae/(-nn+Be),$e=Et*-nn;ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($e),J.translateZ(Et),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const L=je+Et,A=be+Et,Y=ze-$e,de=Ie+(Ae-$e),he=lt*be/A*L,ge=K*be/A*L;J.projectionMatrix.makePerspective(Y,de,he,ge,L,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function B(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;M.near=T.near=S.near=J.near,M.far=T.far=S.far=J.far,(C!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,V=M.far);const ae=J.parent,ye=M.cameras;B(M,ae);for(let Ae=0;Ae<ye.length;Ae++)B(ye[Ae],ae);ye.length===2?se(M,S,T):M.projectionMatrix.copy(S.projectionMatrix),X(J,M,ae)};function X(J,ae,ye){ye===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=$f*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)};let j=null;function ie(J,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Ae=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,Ae=!0);for(let Ce=0;Ce<ye.length;Ce++){const Xe=ye[Ce];let je=null;if(p!==null)je=p.getViewport(Xe);else{const lt=f.getViewSubImage(h,Xe);je=lt.viewport,Ce===0&&(e.setRenderTargetTextures(d,lt.colorTexture,h.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(d))}let be=U[Ce];be===void 0&&(be=new Cn,be.layers.enable(Ce),be.viewport=new Nt,U[Ce]=be),be.matrix.fromArray(Xe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Xe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(je.x,je.y,je.width,je.height),Ce===0&&(M.matrix.copy(be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ae===!0&&M.cameras.push(be)}}for(let ye=0;ye<v.length;ye++){const Ae=_[ye],Ce=v[ye];Ae!==null&&Ce!==void 0&&Ce.update(Ae,ae,c||o)}j&&j(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const le=new $v;le.setAnimationLoop(ie),this.setAnimationLoop=function(J){j=J},this.dispose=function(){}}}function tw(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,jv(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,_,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const E=_.program;i.uniformBlockBinding(v,E)}function c(v,_){let E=r[v.id];E===void 0&&(g(v),E=u(v),r[v.id]=E,v.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(v,w);const S=e.render.frame;s[v.id]!==S&&(h(v),s[v.id]=S)}function u(v){const _=f();v.__bindingPointIndex=_;const E=n.createBuffer(),w=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],E=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,T=E.length;S<T;S++){const U=Array.isArray(E[S])?E[S]:[E[S]];for(let M=0,C=U.length;M<C;M++){const V=U[M];if(p(V,S,M,w)===!0){const Z=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let F=0;for(let W=0;W<oe.length;W++){const te=oe[W],se=y(te);typeof te=="number"||typeof te=="boolean"?(V.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,Z+F,V.__data)):te.isMatrix3?(V.__data[0]=te.elements[0],V.__data[1]=te.elements[1],V.__data[2]=te.elements[2],V.__data[3]=0,V.__data[4]=te.elements[3],V.__data[5]=te.elements[4],V.__data[6]=te.elements[5],V.__data[7]=0,V.__data[8]=te.elements[6],V.__data[9]=te.elements[7],V.__data[10]=te.elements[8],V.__data[11]=0):(te.toArray(V.__data,F),F+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,E,w){const S=v.value,T=_+"_"+E;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:w[T]=S.clone(),!0;{const U=w[T];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return w[T]=S,!0}else if(U.equals(S)===!1)return U.copy(S),!0}return!1}function g(v){const _=v.uniforms;let E=0;const w=16;for(let T=0,U=_.length;T<U;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let C=0,V=M.length;C<V;C++){const Z=M[C],oe=Array.isArray(Z.value)?Z.value:[Z.value];for(let F=0,W=oe.length;F<W;F++){const te=oe[F],se=y(te),B=E%w;B!==0&&w-B<se.boundary&&(E+=w-B),Z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=se.storage}}}const S=E%w;return S>0&&(E+=w-S),v.__size=E,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class r_{constructor(e={}){const{canvas:t=Qx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this._useLegacyLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;const _=this;let E=!1,w=0,S=0,T=null,U=-1,M=null;const C=new Nt,V=new Nt;let Z=null;const oe=new Te(0);let F=0,W=t.width,te=t.height,se=1,B=null,X=null;const j=new Nt(0,0,W,te),ie=new Nt(0,0,W,te);let le=!1;const J=new td;let ae=!1,ye=!1,Ae=null;const Ce=new It,Xe=new ft,je=new G,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return T===null?se:1}let K=i;function nn(R,H){for(let $=0;$<R.length;$++){const Q=R[$],q=t.getContext(Q,H);if(q!==null)return q}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$h}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),K===null){const H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),K=nn(H,R),K===null)throw nn(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Be,ze,Ie,Et,$e,L,A,Y,de,he,ge,Oe,Me,Le,We,Qe,fe,ht,tt,qe,ke,De,Je,ct;function Ct(){Be=new hT(K),ze=new oT(K,Be,e),Be.init(ze),De=new ZA(K,Be,ze),Ie=new qA(K,Be,ze),Et=new mT(K),$e=new OA,L=new $A(K,Be,Ie,$e,ze,De,Et),A=new lT(_),Y=new fT(_),de=new ME(K,ze),Je=new rT(K,Be,de,ze),he=new dT(K,de,Et,Je),ge=new yT(K,he,de,Et),tt=new _T(K,ze,L),Qe=new aT($e),Oe=new IA(_,A,Y,Be,ze,Je,Qe),Me=new tw(_,$e),Le=new kA,We=new VA(Be,ze),ht=new iT(_,A,Y,Ie,ge,h,l),fe=new KA(_,ge,ze),ct=new nw(K,Et,ze,Ie),qe=new sT(K,Be,Et,ze),ke=new pT(K,Be,Et,ze),Et.programs=Oe.programs,_.capabilities=ze,_.extensions=Be,_.properties=$e,_.renderLists=Le,_.shadowMap=fe,_.state=Ie,_.info=Et}Ct();const nt=new ew(_,K);this.xr=nt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=Be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(R){R!==void 0&&(se=R,this.setSize(W,te,!1))},this.getSize=function(R){return R.set(W,te)},this.setSize=function(R,H,$=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,te=H,t.width=Math.floor(R*se),t.height=Math.floor(H*se),$===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(W*se,te*se).floor()},this.setDrawingBufferSize=function(R,H,$){W=R,te=H,se=$,t.width=Math.floor(R*$),t.height=Math.floor(H*$),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,H,$,Q){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,H,$,Q),Ie.viewport(C.copy(j).multiplyScalar(se).floor())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,H,$,Q){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,H,$,Q),Ie.scissor(V.copy(ie).multiplyScalar(se).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){Ie.setScissorTest(le=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(R=!0,H=!0,$=!0){let Q=0;if(R){let q=!1;if(T!==null){const we=T.texture.format;q=we===Nv||we===Dv||we===Pv}if(q){const we=T.texture.type,Ue=we===vr||we===or||we===Qh||we===Br||we===bv||we===Lv,Ge=ht.getClearColor(),Ve=ht.getClearAlpha(),et=Ge.r,Ye=Ge.g,Ze=Ge.b;Ue?(p[0]=et,p[1]=Ye,p[2]=Ze,p[3]=Ve,K.clearBufferuiv(K.COLOR,0,p)):(g[0]=et,g[1]=Ye,g[2]=Ze,g[3]=Ve,K.clearBufferiv(K.COLOR,0,g))}else Q|=K.COLOR_BUFFER_BIT}H&&(Q|=K.DEPTH_BUFFER_BIT),$&&(Q|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Le.dispose(),We.dispose(),$e.dispose(),A.dispose(),Y.dispose(),ge.dispose(),Je.dispose(),ct.dispose(),Oe.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",rn),nt.removeEventListener("sessionend",_t),Ae&&(Ae.dispose(),Ae=null),sn.stop()};function ve(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Et.autoReset,H=fe.enabled,$=fe.autoUpdate,Q=fe.needsUpdate,q=fe.type;Ct(),Et.autoReset=R,fe.enabled=H,fe.autoUpdate=$,fe.needsUpdate=Q,fe.type=q}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const H=R.target;H.removeEventListener("dispose",xe),Ke(H)}function Ke(R){He(R),$e.remove(R)}function He(R){const H=$e.get(R).programs;H!==void 0&&(H.forEach(function($){Oe.releaseProgram($)}),R.isShaderMaterial&&Oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,$,Q,q,we){H===null&&(H=be);const Ue=q.isMesh&&q.matrixWorld.determinant()<0,Ge=Ic(R,H,$,Q,q);Ie.setMaterial(Q,Ue);let Ve=$.index,et=1;if(Q.wireframe===!0){if(Ve=he.getWireframeAttribute($),Ve===void 0)return;et=2}const Ye=$.drawRange,Ze=$.attributes.position;let Mt=Ye.start*et,on=(Ye.start+Ye.count)*et;we!==null&&(Mt=Math.max(Mt,we.start*et),on=Math.min(on,(we.start+we.count)*et)),Ve!==null?(Mt=Math.max(Mt,0),on=Math.min(on,Ve.count)):Ze!=null&&(Mt=Math.max(Mt,0),on=Math.min(on,Ze.count));const Wt=on-Mt;if(Wt<0||Wt===1/0)return;Je.setup(q,Q,Ge,$,Ve);let ni,St=qe;if(Ve!==null&&(ni=de.get(Ve),St=ke,St.setIndex(ni)),q.isMesh)Q.wireframe===!0?(Ie.setLineWidth(Q.wireframeLinewidth*lt()),St.setMode(K.LINES)):St.setMode(K.TRIANGLES);else if(q.isLine){let it=Q.linewidth;it===void 0&&(it=1),Ie.setLineWidth(it*lt()),q.isLineSegments?St.setMode(K.LINES):q.isLineLoop?St.setMode(K.LINE_LOOP):St.setMode(K.LINE_STRIP)}else q.isPoints?St.setMode(K.POINTS):q.isSprite&&St.setMode(K.TRIANGLES);if(q.isBatchedMesh)St.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)St.renderInstances(Mt,Wt,q.count);else if($.isInstancedBufferGeometry){const it=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,oo=Math.min($.instanceCount,it);St.renderInstances(Mt,Wt,oo)}else St.render(Mt,Wt)};function gt(R,H,$){R.transparent===!0&&R.side===xi&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,Jr(R,H,$),R.side=Vi,R.needsUpdate=!0,Jr(R,H,$),R.side=xi):Jr(R,H,$)}this.compile=function(R,H,$=null){$===null&&($=R),m=We.get($),m.init(),v.push(m),$.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==$&&R.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(_._useLegacyLights);const Q=new Set;return R.traverse(function(q){const we=q.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){const Ge=we[Ue];gt(Ge,$,q),Q.add(Ge)}else gt(we,$,q),Q.add(we)}),v.pop(),m=null,Q},this.compileAsync=function(R,H,$=null){const Q=this.compile(R,H,$);return new Promise(q=>{function we(){if(Q.forEach(function(Ue){$e.get(Ue).currentProgram.isReady()&&Q.delete(Ue)}),Q.size===0){q(R);return}setTimeout(we,10)}Be.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let vt=null;function Vt(R){vt&&vt(R)}function rn(){sn.stop()}function _t(){sn.start()}const sn=new $v;sn.setAnimationLoop(Vt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(R){vt=R,nt.setAnimationLoop(R),R===null?sn.stop():sn.start()},nt.addEventListener("sessionstart",rn),nt.addEventListener("sessionend",_t),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(H),H=nt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,H,T),m=We.get(R,v.length),m.init(),v.push(m),Ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),J.setFromProjectionMatrix(Ce),ye=this.localClippingEnabled,ae=Qe.init(this.clippingPlanes,ye),y=Le.get(R,d.length),y.init(),d.push(y),Wn(R,H,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(B,X),this.info.render.frame++,ae===!0&&Qe.beginShadows();const $=m.state.shadowsArray;if(fe.render($,R,H),ae===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(y,R),m.setupLights(_._useLegacyLights),H.isArrayCamera){const Q=H.cameras;for(let q=0,we=Q.length;q<we;q++){const Ue=Q[q];ya(y,R,Ue,Ue.viewport)}}else ya(y,R,H);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(_,R,H),Je.resetDefaultState(),U=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Wn(R,H,$,Q){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){Q&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ce);const Ue=ge.update(R),Ge=R.material;Ge.visible&&y.push(R,Ue,Ge,$,je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ue=ge.update(R),Ge=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),je.copy(Ue.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ge)){const Ve=Ue.groups;for(let et=0,Ye=Ve.length;et<Ye;et++){const Ze=Ve[et],Mt=Ge[Ze.materialIndex];Mt&&Mt.visible&&y.push(R,Ue,Mt,$,je.z,Ze)}}else Ge.visible&&y.push(R,Ue,Ge,$,je.z,null)}}const we=R.children;for(let Ue=0,Ge=we.length;Ue<Ge;Ue++)Wn(we[Ue],H,$,Q)}function ya(R,H,$,Q){const q=R.opaque,we=R.transmissive,Ue=R.transparent;m.setupLightsView($),ae===!0&&Qe.setGlobalState(_.clippingPlanes,$),we.length>0&&Sa(q,we,H,$),Q&&Ie.viewport(C.copy(Q)),q.length>0&&Qr(q,H,$),we.length>0&&Qr(we,H,$),Ue.length>0&&Qr(Ue,H,$),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Sa(R,H,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const we=ze.isWebGL2;Ae===null&&(Ae=new jr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")?ca:vr,minFilter:la,samples:we?4:0})),_.getDrawingBufferSize(Xe),we?Ae.setSize(Xe.x,Xe.y):Ae.setSize(Zf(Xe.x),Zf(Xe.y));const Ue=_.getRenderTarget();_.setRenderTarget(Ae),_.getClearColor(oe),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear();const Ge=_.toneMapping;_.toneMapping=Fi,Qr(R,$,Q),L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae);let Ve=!1;for(let et=0,Ye=H.length;et<Ye;et++){const Ze=H[et],Mt=Ze.object,on=Ze.geometry,Wt=Ze.material,ni=Ze.group;if(Wt.side===xi&&Mt.layers.test(Q.layers)){const St=Wt.side;Wt.side=xn,Wt.needsUpdate=!0,xa(Mt,$,Q,on,Wt,ni),Wt.side=St,Wt.needsUpdate=!0,Ve=!0}}Ve===!0&&(L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae)),_.setRenderTarget(Ue),_.setClearColor(oe,F),_.toneMapping=Ge}function Qr(R,H,$){const Q=H.isScene===!0?H.overrideMaterial:null;for(let q=0,we=R.length;q<we;q++){const Ue=R[q],Ge=Ue.object,Ve=Ue.geometry,et=Q===null?Ue.material:Q,Ye=Ue.group;Ge.layers.test($.layers)&&xa(Ge,H,$,Ve,et,Ye)}}function xa(R,H,$,Q,q,we){R.onBeforeRender(_,H,$,Q,q,we),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(_,H,$,Q,R,we),q.transparent===!0&&q.side===xi&&q.forceSinglePass===!1?(q.side=xn,q.needsUpdate=!0,_.renderBufferDirect($,H,Q,q,R,we),q.side=Vi,q.needsUpdate=!0,_.renderBufferDirect($,H,Q,q,R,we),q.side=xi):_.renderBufferDirect($,H,Q,q,R,we),R.onAfterRender(_,H,$,Q,q,we)}function Jr(R,H,$){H.isScene!==!0&&(H=be);const Q=$e.get(R),q=m.state.lights,we=m.state.shadowsArray,Ue=q.state.version,Ge=Oe.getParameters(R,q.state,we,H,$),Ve=Oe.getProgramCacheKey(Ge);let et=Q.programs;Q.environment=R.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(R.isMeshStandardMaterial?Y:A).get(R.envMap||Q.environment),et===void 0&&(R.addEventListener("dispose",xe),et=new Map,Q.programs=et);let Ye=et.get(Ve);if(Ye!==void 0){if(Q.currentProgram===Ye&&Q.lightsStateVersion===Ue)return Ma(R,Ge),Ye}else Ge.uniforms=Oe.getUniforms(R),R.onBuild($,Ge,_),R.onBeforeCompile(Ge,_),Ye=Oe.acquireProgram(Ge,Ve),et.set(Ve,Ye),Q.uniforms=Ge.uniforms;const Ze=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Qe.uniform),Ma(R,Ge),Q.needsLights=Uc(R),Q.lightsStateVersion=Ue,Q.needsLights&&(Ze.ambientLightColor.value=q.state.ambient,Ze.lightProbe.value=q.state.probe,Ze.directionalLights.value=q.state.directional,Ze.directionalLightShadows.value=q.state.directionalShadow,Ze.spotLights.value=q.state.spot,Ze.spotLightShadows.value=q.state.spotShadow,Ze.rectAreaLights.value=q.state.rectArea,Ze.ltc_1.value=q.state.rectAreaLTC1,Ze.ltc_2.value=q.state.rectAreaLTC2,Ze.pointLights.value=q.state.point,Ze.pointLightShadows.value=q.state.pointShadow,Ze.hemisphereLights.value=q.state.hemi,Ze.directionalShadowMap.value=q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ze.spotShadowMap.value=q.state.spotShadowMap,Ze.spotLightMatrix.value=q.state.spotLightMatrix,Ze.spotLightMap.value=q.state.spotLightMap,Ze.pointShadowMap.value=q.state.pointShadowMap,Ze.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=Ye,Q.uniformsList=null,Ye}function Ea(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Ll.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Ma(R,H){const $=$e.get(R);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Ic(R,H,$,Q,q){H.isScene!==!0&&(H=be),L.resetTextureUnits();const we=H.fog,Ue=Q.isMeshStandardMaterial?H.environment:null,Ge=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Wi,Ve=(Q.isMeshStandardMaterial?Y:A).get(Q.envMap||Ue),et=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ze=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,on=!!$.morphAttributes.color;let Wt=Fi;Q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Wt=_.toneMapping);const ni=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=ni!==void 0?ni.length:0,it=$e.get(Q),oo=m.state.lights;if(ae===!0&&(ye===!0||R!==M)){const ce=R===M&&Q.id===U;Qe.setState(Q,R,ce)}let x=!1;Q.version===it.__version?(it.needsLights&&it.lightsStateVersion!==oo.state.version||it.outputColorSpace!==Ge||q.isBatchedMesh&&it.batching===!1||!q.isBatchedMesh&&it.batching===!0||q.isInstancedMesh&&it.instancing===!1||!q.isInstancedMesh&&it.instancing===!0||q.isSkinnedMesh&&it.skinning===!1||!q.isSkinnedMesh&&it.skinning===!0||q.isInstancedMesh&&it.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&it.instancingColor===!1&&q.instanceColor!==null||it.envMap!==Ve||Q.fog===!0&&it.fog!==we||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Qe.numPlanes||it.numIntersection!==Qe.numIntersection)||it.vertexAlphas!==et||it.vertexTangents!==Ye||it.morphTargets!==Ze||it.morphNormals!==Mt||it.morphColors!==on||it.toneMapping!==Wt||ze.isWebGL2===!0&&it.morphTargetsCount!==St)&&(x=!0):(x=!0,it.__version=Q.version);let N=it.currentProgram;x===!0&&(N=Jr(Q,H,q));let b=!1,k=!1,z=!1;const I=N.getUniforms(),ne=it.uniforms;if(Ie.useProgram(N.program)&&(b=!0,k=!0,z=!0),Q.id!==U&&(U=Q.id,k=!0),b||M!==R){I.setValue(K,"projectionMatrix",R.projectionMatrix),I.setValue(K,"viewMatrix",R.matrixWorldInverse);const ce=I.map.cameraPosition;ce!==void 0&&ce.setValue(K,je.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&I.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&I.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,k=!0,z=!0)}if(q.isSkinnedMesh){I.setOptional(K,q,"bindMatrix"),I.setOptional(K,q,"bindMatrixInverse");const ce=q.skeleton;ce&&(ze.floatVertexTextures?(ce.boneTexture===null&&ce.computeBoneTexture(),I.setValue(K,"boneTexture",ce.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(I.setOptional(K,q,"batchingTexture"),I.setValue(K,"batchingTexture",q._matricesTexture,L));const ue=$.morphAttributes;if((ue.position!==void 0||ue.normal!==void 0||ue.color!==void 0&&ze.isWebGL2===!0)&&tt.update(q,$,N),(k||it.receiveShadow!==q.receiveShadow)&&(it.receiveShadow=q.receiveShadow,I.setValue(K,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ne.envMap.value=Ve,ne.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),k&&(I.setValue(K,"toneMappingExposure",_.toneMappingExposure),it.needsLights&&Oc(ne,z),we&&Q.fog===!0&&Me.refreshFogUniforms(ne,we),Me.refreshMaterialUniforms(ne,Q,se,te,Ae),Ll.upload(K,Ea(it),ne,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ll.upload(K,Ea(it),ne,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&I.setValue(K,"center",q.center),I.setValue(K,"modelViewMatrix",q.modelViewMatrix),I.setValue(K,"normalMatrix",q.normalMatrix),I.setValue(K,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ce=Q.uniformsGroups;for(let pe=0,_e=ce.length;pe<_e;pe++)if(ze.isWebGL2){const Ne=ce[pe];ct.update(Ne,N),ct.bind(Ne,N)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return N}function Oc(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Uc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,H,$){$e.get(R.texture).__webglTexture=H,$e.get(R.depthTexture).__webglTexture=$;const Q=$e.get(R);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,H){const $=$e.get(R);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,$=0){T=R,w=H,S=$;let Q=!0,q=null,we=!1,Ue=!1;if(R){const Ve=$e.get(R);Ve.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(K.FRAMEBUFFER,null),Q=!1):Ve.__webglFramebuffer===void 0?L.setupRenderTarget(R):Ve.__hasExternalTextures&&L.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const Ye=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[H])?q=Ye[H][$]:q=Ye[H],we=!0):ze.isWebGL2&&R.samples>0&&L.useMultisampledRTT(R)===!1?q=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[$]:q=Ye,C.copy(R.viewport),V.copy(R.scissor),Z=R.scissorTest}else C.copy(j).multiplyScalar(se).floor(),V.copy(ie).multiplyScalar(se).floor(),Z=le;if(Ie.bindFramebuffer(K.FRAMEBUFFER,q)&&ze.drawBuffers&&Q&&Ie.drawBuffers(R,q),Ie.viewport(C),Ie.scissor(V),Ie.setScissorTest(Z),we){const Ve=$e.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ve.__webglTexture,$)}else if(Ue){const Ve=$e.get(R.texture),et=H||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ve.__webglTexture,$||0,et)}U=-1},this.readRenderTargetPixels=function(R,H,$,Q,q,we,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){Ie.bindFramebuffer(K.FRAMEBUFFER,Ge);try{const Ve=R.texture,et=Ve.format,Ye=Ve.type;if(et!==fi&&De.convert(et)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ye===ca&&(Be.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Be.has("EXT_color_buffer_float"));if(Ye!==vr&&De.convert(Ye)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===ar&&(ze.isWebGL2||Be.has("OES_texture_float")||Be.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Q&&$>=0&&$<=R.height-q&&K.readPixels(H,$,Q,q,De.convert(et),De.convert(Ye),we)}finally{const Ve=T!==null?$e.get(T).__webglFramebuffer:null;Ie.bindFramebuffer(K.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(R,H,$=0){const Q=Math.pow(2,-$),q=Math.floor(H.image.width*Q),we=Math.floor(H.image.height*Q);L.setTexture2D(H,0),K.copyTexSubImage2D(K.TEXTURE_2D,$,0,0,R.x,R.y,q,we),Ie.unbindTexture()},this.copyTextureToTexture=function(R,H,$,Q=0){const q=H.image.width,we=H.image.height,Ue=De.convert($.format),Ge=De.convert($.type);L.setTexture2D($,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,$.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,$.unpackAlignment),H.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Q,R.x,R.y,q,we,Ue,Ge,H.image.data):H.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Q,R.x,R.y,H.mipmaps[0].width,H.mipmaps[0].height,Ue,H.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,Q,R.x,R.y,Ue,Ge,H.image),Q===0&&$.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(R,H,$,Q,q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=R.max.x-R.min.x+1,Ue=R.max.y-R.min.y+1,Ge=R.max.z-R.min.z+1,Ve=De.convert(Q.format),et=De.convert(Q.type);let Ye;if(Q.isData3DTexture)L.setTexture3D(Q,0),Ye=K.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)L.setTexture2DArray(Q,0),Ye=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Q.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ze=K.getParameter(K.UNPACK_ROW_LENGTH),Mt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),on=K.getParameter(K.UNPACK_SKIP_PIXELS),Wt=K.getParameter(K.UNPACK_SKIP_ROWS),ni=K.getParameter(K.UNPACK_SKIP_IMAGES),St=$.isCompressedTexture?$.mipmaps[q]:$.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,St.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,St.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,R.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,R.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?K.texSubImage3D(Ye,q,H.x,H.y,H.z,we,Ue,Ge,Ve,et,St.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Ye,q,H.x,H.y,H.z,we,Ue,Ge,Ve,St.data)):K.texSubImage3D(Ye,q,H.x,H.y,H.z,we,Ue,Ge,Ve,et,St),K.pixelStorei(K.UNPACK_ROW_LENGTH,Ze),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Mt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,on),K.pixelStorei(K.UNPACK_SKIP_ROWS,Wt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ni),q===0&&Q.generateMipmaps&&K.generateMipmap(Ye),Ie.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){w=0,S=0,T=null,Ie.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jh?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Cc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qt?Hr:Ov}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hr?qt:Wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iw extends r_{}iw.prototype.isWebGL1Renderer=!0;class ac{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=i}clone(){return new ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vm extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Jf extends At{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new It,Wm=new It,fl=[],Xm=new $r,rw=new It,Eo=new bn,Mo=new io;class rd extends bn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jf(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,rw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Xm.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Xm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new io),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Mo.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(i),e.ray.intersectsSphere(Mo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vs),Wm.multiplyMatrices(i,vs),Eo.matrixWorld=Wm,Eo.raycast(e,fl);for(let o=0,a=fl.length;o<a;o++){const l=fl[o];l.instanceId=s,l.object=this,t.push(l)}fl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Lc extends ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ym=new It,eh=new Gv,hl=new io,dl=new G;class sd extends Gt{constructor(e=new In,t=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;Ym.copy(r).invert(),eh.copy(e.ray).applyMatrix4(Ym);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,y=p;g<y;g++){const m=c.getX(g);dl.fromBufferAttribute(f,m),jm(dl,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,y=p;g<y;g++)dl.fromBufferAttribute(f,g),jm(dl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jm(n,e,t,i,r,s,o){const a=eh.distanceSqToPoint(n);if(a<t){const l=new G;eh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class sw extends Nn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pc extends In{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new G,h=new G,p=[],g=[],y=[],m=[];for(let d=0;d<=i;d++){const v=[],_=d/i;let E=0;d===0&&o===0?E=.5/t:d===i&&l===Math.PI&&(E=-.5/t);for(let w=0;w<=t;w++){const S=w/t;f.x=-e*Math.cos(r+S*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+S*s)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(S+E,1-_),v.push(c++)}u.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const _=u[d][v+1],E=u[d][v],w=u[d+1][v],S=u[d+1][v+1];(d!==0||o>0)&&p.push(_,E,S),(d!==i-1||l<Math.PI)&&p.push(E,w,S)}this.setIndex(p),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(y,3)),this.setAttribute("uv",new Ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class od extends ro{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uv,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dc extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class ow extends Dc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gu=new It,Km=new G,qm=new G;class s_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new td,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),t.position.copy(Km),qm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qm),t.updateMatrixWorld(),Gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $m=new It,To=new G,Vu=new G;class aw extends s_{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),To.setFromMatrixPosition(e.matrixWorld),i.position.copy(To),Vu.copy(i.position),Vu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vu),i.updateMatrixWorld(),r.makeTranslation(-To.x,-To.y,-To.z),$m.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($m)}}class lw extends Dc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new aw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cw extends s_{constructor(){super(new Zv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uw extends Dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new cw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fw extends Dc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);const hw={},Zm=n=>{let e;const t=new Set,i=(u,f)=>{const h=typeof u=="function"?u(e):u;if(!Object.is(h,e)){const p=e;e=f??(typeof h!="object"||h===null)?h:Object.assign({},e,h),t.forEach(g=>g(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:u=>(t.add(u),()=>t.delete(u)),destroy:()=>{(hw?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},c=e=n(i,r,l);return l},dw=n=>n?Zm(n):Zm;var o_={exports:{}},a_={},l_={exports:{}},c_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=xt;function pw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mw=typeof Object.is=="function"?Object.is:pw,gw=Qs.useState,vw=Qs.useEffect,_w=Qs.useLayoutEffect,yw=Qs.useDebugValue;function Sw(n,e){var t=e(),i=gw({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return _w(function(){r.value=t,r.getSnapshot=e,Wu(r)&&s({inst:r})},[n,t,e]),vw(function(){return Wu(r)&&s({inst:r}),n(function(){Wu(r)&&s({inst:r})})},[n]),yw(t),t}function Wu(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mw(n,t)}catch{return!0}}function xw(n,e){return e()}var Ew=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?xw:Sw;c_.useSyncExternalStore=Qs.useSyncExternalStore!==void 0?Qs.useSyncExternalStore:Ew;l_.exports=c_;var Mw=l_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=xt,Tw=Mw;function Aw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ww=typeof Object.is=="function"?Object.is:Aw,Cw=Tw.useSyncExternalStore,Rw=Nc.useRef,bw=Nc.useEffect,Lw=Nc.useMemo,Pw=Nc.useDebugValue;a_.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=Rw(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Lw(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&o.hasValue){var g=o.value;if(r(g,p))return f=g}return f=p}if(g=f,ww(u,p))return g;var y=i(p);return r!==void 0&&r(g,y)?(u=p,g):(u=p,f=y)}var c=!1,u,f,h=t===void 0?null:t;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,t,i,r]);var a=Cw(n,s[0],s[1]);return bw(function(){o.hasValue=!0,o.value=a},[a]),Pw(a),a};o_.exports=a_;var Dw=o_.exports;const Nw=th(Dw),u_={},{useDebugValue:Iw}=Mg,{useSyncExternalStoreWithSelector:Ow}=Nw;let Qm=!1;const Uw=n=>n;function kw(n,e=Uw,t){(u_?"production":void 0)!=="production"&&t&&!Qm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Qm=!0);const i=Ow(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return Iw(i),i}const Jm=n=>{(u_?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?dw(n):n,t=(i,r)=>kw(e,i,r);return Object.assign(t,e),t},Fw=n=>n?Jm(n):Jm;var D=(n=>(n[n.AIR=0]="AIR",n[n.GRASS=1]="GRASS",n[n.DIRT=2]="DIRT",n[n.STONE=3]="STONE",n[n.SAND=4]="SAND",n[n.SANDSTONE=5]="SANDSTONE",n[n.SNOW=6]="SNOW",n[n.ICE=7]="ICE",n[n.MUD=8]="MUD",n[n.CRYSTAL=9]="CRYSTAL",n[n.GLOWSTONE=10]="GLOWSTONE",n[n.LAVA=11]="LAVA",n[n.WATER=12]="WATER",n[n.WOOD=13]="WOOD",n[n.LEAVES=14]="LEAVES",n[n.CACTUS=15]="CACTUS",n[n.BEDROCK=16]="BEDROCK",n[n.COAL_ORE=17]="COAL_ORE",n[n.IRON_ORE=18]="IRON_ORE",n[n.GOLD_ORE=19]="GOLD_ORE",n[n.DIAMOND_ORE=20]="DIAMOND_ORE",n[n.PORTAL_FRAME=21]="PORTAL_FRAME",n[n.PORTAL_ACTIVE=22]="PORTAL_ACTIVE",n[n.LILY_PAD=23]="LILY_PAD",n[n.SPRUCE_WOOD=24]="SPRUCE_WOOD",n[n.SPRUCE_LEAVES=25]="SPRUCE_LEAVES",n[n.PACKED_ICE=26]="PACKED_ICE",n))(D||{});const ad={0:{id:0,name:"Air",solid:!1,transparent:!0,hardness:0,atlasTileX:0,atlasTileY:0,lightEmission:0},1:{id:1,name:"Grass",solid:!0,transparent:!1,hardness:.6,atlasTileX:0,atlasTileY:0,sideAtlasX:1,sideAtlasY:0,bottomAtlasX:2,bottomAtlasY:0,lightEmission:0},2:{id:2,name:"Dirt",solid:!0,transparent:!1,hardness:.5,atlasTileX:2,atlasTileY:0,lightEmission:0},3:{id:3,name:"Stone",solid:!0,transparent:!1,hardness:1.5,atlasTileX:3,atlasTileY:0,lightEmission:0},4:{id:4,name:"Sand",solid:!0,transparent:!1,hardness:.5,atlasTileX:4,atlasTileY:0,lightEmission:0},5:{id:5,name:"Sandstone",solid:!0,transparent:!1,hardness:2,atlasTileX:5,atlasTileY:0,lightEmission:0},6:{id:6,name:"Snow",solid:!0,transparent:!1,hardness:.2,atlasTileX:6,atlasTileY:0,lightEmission:0},7:{id:7,name:"Ice",solid:!0,transparent:!0,hardness:.5,atlasTileX:7,atlasTileY:0,lightEmission:0},8:{id:8,name:"Mud",solid:!0,transparent:!1,hardness:.4,atlasTileX:8,atlasTileY:0,lightEmission:0},9:{id:9,name:"Crystal",solid:!0,transparent:!1,hardness:1,atlasTileX:9,atlasTileY:0,lightEmission:12},10:{id:10,name:"Glowstone",solid:!0,transparent:!1,hardness:.3,atlasTileX:10,atlasTileY:0,lightEmission:15},11:{id:11,name:"Lava",solid:!1,transparent:!0,hardness:-1,atlasTileX:11,atlasTileY:0,lightEmission:15},12:{id:12,name:"Water",solid:!1,transparent:!0,hardness:-1,atlasTileX:0,atlasTileY:0,lightEmission:0},13:{id:13,name:"Wood",solid:!0,transparent:!1,hardness:2,atlasTileX:12,atlasTileY:0,lightEmission:0},14:{id:14,name:"Leaves",solid:!0,transparent:!0,hardness:.2,atlasTileX:13,atlasTileY:0,lightEmission:0},15:{id:15,name:"Cactus",solid:!0,transparent:!1,hardness:.4,atlasTileX:14,atlasTileY:0,lightEmission:0},16:{id:16,name:"Bedrock",solid:!0,transparent:!1,hardness:-1,atlasTileX:15,atlasTileY:0,lightEmission:0},17:{id:17,name:"Coal Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:0,atlasTileY:1,lightEmission:0},18:{id:18,name:"Iron Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:1,atlasTileY:1,lightEmission:0},19:{id:19,name:"Gold Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:2,atlasTileY:1,lightEmission:0},20:{id:20,name:"Diamond Ore",solid:!0,transparent:!1,hardness:3,atlasTileX:3,atlasTileY:1,lightEmission:0},21:{id:21,name:"Portal Frame",solid:!0,transparent:!1,hardness:-1,atlasTileX:4,atlasTileY:1,lightEmission:5},22:{id:22,name:"Portal",solid:!1,transparent:!0,hardness:-1,atlasTileX:5,atlasTileY:1,lightEmission:15},23:{id:23,name:"Lily Pad",solid:!1,transparent:!0,hardness:0,atlasTileX:6,atlasTileY:1,lightEmission:0},24:{id:24,name:"Spruce Wood",solid:!0,transparent:!1,hardness:2,atlasTileX:7,atlasTileY:1,lightEmission:0},25:{id:25,name:"Spruce Leaves",solid:!0,transparent:!0,hardness:.2,atlasTileX:8,atlasTileY:1,lightEmission:0},26:{id:26,name:"Packed Ice",solid:!0,transparent:!1,hardness:.5,atlasTileX:9,atlasTileY:1,lightEmission:0}};function jn(n){return ad[n]?.solid??!1}const P={DIRT:D.DIRT,STONE:D.STONE,SAND:D.SAND,SANDSTONE:D.SANDSTONE,SNOW:D.SNOW,ICE:D.ICE,MUD:D.MUD,CRYSTAL:D.CRYSTAL,GLOWSTONE:D.GLOWSTONE,WOOD:D.WOOD,LEAVES:D.LEAVES,CACTUS:D.CACTUS,COAL_ORE:D.COAL_ORE,IRON_ORE:D.IRON_ORE,GOLD_ORE:D.GOLD_ORE,DIAMOND_ORE:D.DIAMOND_ORE,SPRUCE_WOOD:D.SPRUCE_WOOD,SPRUCE_LEAVES:D.SPRUCE_LEAVES,PACKED_ICE:D.PACKED_ICE,PORTAL_FRAME:D.PORTAL_FRAME,GRASS:D.GRASS,SWORD:100,PISTOL:101,RIFLE:102,MAGIC_STAFF:103,AMMO:106,PLANK:113,STICK:114,IGNITER:115,IRON_INGOT:116,COAL:117,RAW_MEAT:118,LEATHER:119,SLIME_BALL:120,ASH:121,CRYSTAL_SHARD:122,DIAMOND:105,GOLD_INGOT:104,FURNACE:123,TORCH:124,CHEST:125,WOODEN_PICKAXE:126,STONE_PICKAXE:127,IRON_PICKAXE:128,WOODEN_AXE:129,STONE_AXE:130,WOODEN_SHOVEL:131,CRAFTING_TABLE:132,BOWL:133,MUSHROOM_STEW:134,BREAD:135,IRON_HELMET:136,IRON_CHESTPLATE:137,IRON_LEGGINGS:138,IRON_BOOTS:139},ld={[P.GRASS]:{name:"Grass",color:"#4CAF50",stackable:!0,maxStack:64,isBlock:!0,blockId:D.GRASS},[P.DIRT]:{name:"Dirt",color:"#795548",stackable:!0,maxStack:64,isBlock:!0,blockId:D.DIRT},[P.STONE]:{name:"Stone",color:"#9E9E9E",stackable:!0,maxStack:64,isBlock:!0,blockId:D.STONE},[P.SAND]:{name:"Sand",color:"#FDD835",stackable:!0,maxStack:64,isBlock:!0,blockId:D.SAND},[P.SANDSTONE]:{name:"Sandstone",color:"#E8C86A",stackable:!0,maxStack:64,isBlock:!0,blockId:D.SANDSTONE},[P.SNOW]:{name:"Snow",color:"#FAFAFA",stackable:!0,maxStack:64,isBlock:!0,blockId:D.SNOW},[P.ICE]:{name:"Ice",color:"#B3E5FC",stackable:!0,maxStack:64,isBlock:!0,blockId:D.ICE},[P.MUD]:{name:"Mud",color:"#4E342E",stackable:!0,maxStack:64,isBlock:!0,blockId:D.MUD},[P.CRYSTAL]:{name:"Crystal",color:"#7B1FA2",stackable:!0,maxStack:64,isBlock:!0,blockId:D.CRYSTAL},[P.GLOWSTONE]:{name:"Glowstone",color:"#FF8F00",stackable:!0,maxStack:64,isBlock:!0,blockId:D.GLOWSTONE},[P.WOOD]:{name:"Wood",color:"#6D4C41",stackable:!0,maxStack:64,isBlock:!0,blockId:D.WOOD},[P.LEAVES]:{name:"Leaves",color:"#2E7D32",stackable:!0,maxStack:64,isBlock:!0,blockId:D.LEAVES},[P.CACTUS]:{name:"Cactus",color:"#2E7D32",stackable:!0,maxStack:64,isBlock:!0,blockId:D.CACTUS},[P.COAL_ORE]:{name:"Coal Ore",color:"#424242",stackable:!0,maxStack:64,isBlock:!0,blockId:D.COAL_ORE},[P.IRON_ORE]:{name:"Iron Ore",color:"#E8C86A",stackable:!0,maxStack:64,isBlock:!0,blockId:D.IRON_ORE},[P.GOLD_ORE]:{name:"Gold Ore",color:"#FFD700",stackable:!0,maxStack:64,isBlock:!0,blockId:D.GOLD_ORE},[P.DIAMOND_ORE]:{name:"Diamond Ore",color:"#00BCD4",stackable:!0,maxStack:64,isBlock:!0,blockId:D.DIAMOND_ORE},[P.SPRUCE_WOOD]:{name:"Spruce Wood",color:"#4E342E",stackable:!0,maxStack:64,isBlock:!0,blockId:D.SPRUCE_WOOD},[P.SPRUCE_LEAVES]:{name:"Spruce Leaves",color:"#1B5E20",stackable:!0,maxStack:64,isBlock:!0,blockId:D.SPRUCE_LEAVES},[P.PACKED_ICE]:{name:"Packed Ice",color:"#81D4FA",stackable:!0,maxStack:64,isBlock:!0,blockId:D.PACKED_ICE},[P.PORTAL_FRAME]:{name:"Portal Frame",color:"#6A1B9A",stackable:!0,maxStack:64,isBlock:!0,blockId:D.PORTAL_FRAME},[P.PLANK]:{name:"Plank",color:"#8D6E63",stackable:!0,maxStack:64,isBlock:!0,blockId:D.WOOD},[P.STICK]:{name:"Stick",color:"#6D4C41",stackable:!0,maxStack:64,isBlock:!1},[P.COAL]:{name:"Coal",color:"#333333",stackable:!0,maxStack:64,isBlock:!1},[P.IRON_INGOT]:{name:"Iron Ingot",color:"#DDDDDD",stackable:!0,maxStack:64,isBlock:!1},[P.GOLD_INGOT]:{name:"Gold Ingot",color:"#FFD700",stackable:!0,maxStack:64,isBlock:!1},[P.DIAMOND]:{name:"Diamond",color:"#00E5FF",stackable:!0,maxStack:64,isBlock:!1},[P.CRYSTAL_SHARD]:{name:"Crystal Shard",color:"#CE93D8",stackable:!0,maxStack:64,isBlock:!1},[P.SLIME_BALL]:{name:"Slime Ball",color:"#76FF03",stackable:!0,maxStack:64,isBlock:!1},[P.ASH]:{name:"Ash",color:"#FF5722",stackable:!0,maxStack:64,isBlock:!1},[P.RAW_MEAT]:{name:"Raw Meat",color:"#FF6D00",stackable:!0,maxStack:16,isBlock:!1},[P.LEATHER]:{name:"Leather",color:"#8D6E63",stackable:!0,maxStack:64,isBlock:!1},[P.IGNITER]:{name:"Igniter",color:"#FF6D00",stackable:!0,maxStack:1,isBlock:!1},[P.SWORD]:{name:"Iron Sword",color:"#C0C0C0",stackable:!1,maxStack:1,isBlock:!1},[P.PISTOL]:{name:"Pistol",color:"#888888",stackable:!1,maxStack:1,isBlock:!1},[P.RIFLE]:{name:"Rifle",color:"#555555",stackable:!1,maxStack:1,isBlock:!1},[P.MAGIC_STAFF]:{name:"Magic Staff",color:"#9C27B0",stackable:!1,maxStack:1,isBlock:!1},[P.AMMO]:{name:"Ammo",color:"#FFD700",stackable:!0,maxStack:64,isBlock:!1},[P.WOODEN_PICKAXE]:{name:"Wooden Pickaxe",color:"#8D6E63",stackable:!1,maxStack:1,isBlock:!1},[P.STONE_PICKAXE]:{name:"Stone Pickaxe",color:"#9E9E9E",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_PICKAXE]:{name:"Iron Pickaxe",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1},[P.WOODEN_AXE]:{name:"Wooden Axe",color:"#8D6E63",stackable:!1,maxStack:1,isBlock:!1},[P.STONE_AXE]:{name:"Stone Axe",color:"#9E9E9E",stackable:!1,maxStack:1,isBlock:!1},[P.WOODEN_SHOVEL]:{name:"Wooden Shovel",color:"#8D6E63",stackable:!1,maxStack:1,isBlock:!1},[P.FURNACE]:{name:"Furnace",color:"#757575",stackable:!0,maxStack:64,isBlock:!0,blockId:D.STONE},[P.TORCH]:{name:"Torch",color:"#FFA726",stackable:!0,maxStack:64,isBlock:!1},[P.CHEST]:{name:"Chest",color:"#6D4C41",stackable:!0,maxStack:64,isBlock:!0,blockId:D.WOOD},[P.CRAFTING_TABLE]:{name:"Crafting Table",color:"#8D6E63",stackable:!0,maxStack:64,isBlock:!0,blockId:D.WOOD},[P.BREAD]:{name:"Bread",color:"#D4A04A",stackable:!0,maxStack:16,isBlock:!1},[P.BOWL]:{name:"Bowl",color:"#8D6E63",stackable:!0,maxStack:64,isBlock:!1},[P.MUSHROOM_STEW]:{name:"Mushroom Stew",color:"#A1887F",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_HELMET]:{name:"Iron Helmet",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_CHESTPLATE]:{name:"Iron Chestplate",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_LEGGINGS]:{name:"Iron Leggings",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1},[P.IRON_BOOTS]:{name:"Iron Boots",color:"#DDDDDD",stackable:!1,maxStack:1,isBlock:!1}},Bw={[D.GRASS]:[{id:P.DIRT,count:1,chance:1}],[D.DIRT]:[{id:P.DIRT,count:1,chance:1}],[D.STONE]:[{id:P.STONE,count:1,chance:1}],[D.SAND]:[{id:P.SAND,count:1,chance:1}],[D.SANDSTONE]:[{id:P.SANDSTONE,count:1,chance:1}],[D.SNOW]:[{id:P.SNOW,count:1,chance:1}],[D.ICE]:[{id:P.ICE,count:1,chance:.8}],[D.MUD]:[{id:P.MUD,count:1,chance:1}],[D.CRYSTAL]:[{id:P.CRYSTAL_SHARD,count:2,chance:1},{id:P.CRYSTAL_SHARD,count:2,chance:.5}],[D.GLOWSTONE]:[{id:P.GLOWSTONE,count:1,chance:1}],[D.WOOD]:[{id:P.WOOD,count:1,chance:1}],[D.LEAVES]:[{id:P.LEAVES,count:1,chance:.4},{id:P.STICK,count:1,chance:.15}],[D.CACTUS]:[{id:P.CACTUS,count:1,chance:1}],[D.BEDROCK]:[],[D.COAL_ORE]:[{id:P.COAL,count:1,chance:1}],[D.IRON_ORE]:[{id:P.IRON_ORE,count:1,chance:1}],[D.GOLD_ORE]:[{id:P.GOLD_ORE,count:1,chance:1}],[D.DIAMOND_ORE]:[{id:P.DIAMOND,count:1,chance:1}],[D.SPRUCE_WOOD]:[{id:P.SPRUCE_WOOD,count:1,chance:1}],[D.SPRUCE_LEAVES]:[{id:P.SPRUCE_LEAVES,count:1,chance:.4},{id:P.STICK,count:1,chance:.2}],[D.PACKED_ICE]:[{id:P.PACKED_ICE,count:1,chance:1}],[D.PORTAL_FRAME]:[{id:P.PORTAL_FRAME,count:1,chance:1}]};function zw(n){const e=Bw[n];if(!e)return[];const t=[];for(const i of e)Math.random()<i.chance&&t.push({id:i.id,count:i.count});return t}function tr(n){return ld[n]?.name??"Unknown"}function _s(n){return ld[n]?.color??"#666"}function f_(n){return ld[n]}const Hw=64,hi=Fw((n,e)=>({slots:new Array(36).fill(null),selected:0,addItem:(t,i)=>{let r=!1;return n(s=>{const o=[...s.slots];let a=i;const c=f_(t)?.maxStack??Hw;for(let u=0;u<36&&a>0;u++){const f=o[u];if(f&&f.id===t&&f.count<c){const h=Math.min(a,c-f.count);o[u]={id:t,count:f.count+h},a-=h,r=!0}}for(let u=0;u<36&&a>0;u++)if(!o[u]){const f=Math.min(a,c);o[u]={id:t,count:f},a-=f,r=!0}return{slots:o}}),r},removeItem:(t,i)=>{n(r=>{const s=[...r.slots],o=s[t];return o?(o.count<=i?s[t]=null:s[t]={id:o.id,count:o.count-i},{slots:s}):r})},swapSlots:(t,i)=>{n(r=>{const s=[...r.slots],o=s[t];return s[t]=s[i],s[i]=o,{slots:s}})},selectSlot:t=>n({selected:Math.max(0,Math.min(8,t))}),getSelectedItem:()=>{const t=e();return t.slots[t.selected]},setSlots:t=>n({slots:t}),getCountOfItem:t=>{const i=e();let r=0;for(const s of i.slots)s&&s.id===t&&(r+=s.count);return r}}));class Gw{renderer;mainScene;mainCamera;weaponScene;weaponCamera;constructor(){this.mainScene=new Vm,this.mainCamera=new Cn(75,window.innerWidth/window.innerHeight,.1,400),this.weaponScene=new Vm,this.weaponCamera=new Cn(55,window.innerWidth/window.innerHeight,.05,20),this.renderer=new r_({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.autoClear=!1,this.renderer.outputColorSpace=qt,this.renderer.toneMapping=Fi,this.renderer.toneMappingExposure=1,window.addEventListener("resize",this.onResize.bind(this))}onResize(){const e=window.innerWidth,t=window.innerHeight;this.mainCamera.aspect=e/t,this.mainCamera.updateProjectionMatrix(),this.weaponCamera.aspect=e/t,this.weaponCamera.updateProjectionMatrix(),this.renderer.setSize(e,t)}getDomElement(){return this.renderer.domElement}render(){this.renderer.clear(),this.renderer.render(this.mainScene,this.mainCamera),this.renderer.clearDepth(),this.renderer.render(this.weaponScene,this.weaponCamera)}setMainCameraPosition(e,t,i){this.mainCamera.position.set(e,t,i)}setMainCameraRotation(e,t){this.mainCamera.rotation.order="YXZ",this.mainCamera.rotation.y=e,this.mainCamera.rotation.x=t}setFOV(e){this.mainCamera.fov=e,this.mainCamera.updateProjectionMatrix()}destroy(){this.renderer.dispose(),window.removeEventListener("resize",this.onResize.bind(this))}}const Vw=`varying vec3 vWorldPos;
varying vec2 vUv;
void main() {
  vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ww=`uniform vec3 uTopColor;
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
`;class Xw{skyMesh;starField;uniforms;constructor(e){const t=new Pc(380,32,32);this.uniforms={uTopColor:{value:new Te(1713022)},uHorizonColor:{value:new Te(16740419)},uSunDir:{value:new G(0,1,0)},uStarIntensity:{value:0},uTime:{value:0}};const i=new Xi({vertexShader:Vw,fragmentShader:Ww,uniforms:this.uniforms,side:xn,depthWrite:!1});this.skyMesh=new bn(t,i),this.skyMesh.renderOrder=-1e3,e.add(this.skyMesh);const r=3e3,s=new Float32Array(r*3),o=new Float32Array(r);for(let c=0;c<r;c++){const u=Math.random()*Math.PI*2,f=Math.acos(Math.random()*2-1),h=370;s[c*3]=h*Math.sin(f)*Math.cos(u),s[c*3+1]=Math.abs(h*Math.sin(f)*Math.sin(u)),s[c*3+2]=h*Math.cos(f),o[c]=.5+Math.random()*2}const a=new In;a.setAttribute("position",new At(s,3)),a.setAttribute("size",new At(o,1));const l=new Lc({color:16777215,size:1.5,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!1});this.starField=new sd(a,l),this.starField.renderOrder=-999,e.add(this.starField)}update(e,t,i,r){this.uniforms.uTime.value=e,this.uniforms.uSunDir.value.copy(t),r&&(this.skyMesh.position.set(r.x,r.y,r.z),this.starField.position.set(r.x,r.y,r.z));const s=t.y,o=new Te,a=new Te;if(s>.3)o.setHex(870305),a.setHex(12312315);else if(s>.1){const c=(s-.1)/.2;o.lerpColors(new Te(1402304),new Te(870305),c),a.lerpColors(new Te(16764032),new Te(12312315),c)}else if(s>0){const c=s/.1;o.lerpColors(new Te(15094016),new Te(1402304),c),a.lerpColors(new Te(16748288),new Te(16764032),c)}else if(s>-.1){const c=(s+.1)/.1;o.lerpColors(new Te(3218322),new Te(15094016),c),a.lerpColors(new Te(4854924),new Te(16748288),c)}else if(s>-.3){const c=(s+.3)/.2;o.lerpColors(new Te(858922),new Te(3218322),c),a.lerpColors(new Te(1713022),new Te(4854924),c)}else o.setHex(331034),a.setHex(858922);this.uniforms.uTopColor.value.copy(o),this.uniforms.uHorizonColor.value.copy(a);const l=Math.max(0,(-s-.1)*4);this.uniforms.uStarIntensity.value=Math.min(1,l),this.starField.material.opacity=Math.min(.8,l)}}const Yw=`uniform float uTime;
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
`,jw=`uniform float uTime;
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
`;class Kw{waterMaterial;waterMeshes=new Map;constructor(){this.waterMaterial=new Xi({vertexShader:Yw,fragmentShader:jw,uniforms:{uTime:{value:0},uCamPos:{value:new G},uSunDir:{value:new G(0,1,0)}},transparent:!0,side:xi,depthWrite:!1})}getMaterial(){return this.waterMaterial}addWaterMesh(e,t,i){const r=new bn(t,this.waterMaterial);r.frustumCulled=!0,r.renderOrder=100,this.waterMeshes.set(e,r),i.add(r)}removeWaterMesh(e,t){const i=this.waterMeshes.get(e);i&&(t.remove(i),i.geometry.dispose(),this.waterMeshes.delete(e))}updateUniforms(e,t,i){this.waterMaterial.uniforms.uTime.value=e,this.waterMaterial.uniforms.uCamPos.value.copy(t),this.waterMaterial.uniforms.uSunDir.value.copy(i)}}var Fe=(n=>(n[n.OCEAN=0]="OCEAN",n[n.BEACH=1]="BEACH",n[n.PLAINS=2]="PLAINS",n[n.FOREST=3]="FOREST",n[n.DARK_FOREST=4]="DARK_FOREST",n[n.SAVANNA=5]="SAVANNA",n[n.DESERT=6]="DESERT",n[n.JUNGLE=7]="JUNGLE",n[n.SNOWY_PLAINS=8]="SNOWY_PLAINS",n[n.MOUNTAINS=9]="MOUNTAINS",n))(Fe||{});const ua={0:{id:0,name:"Deep Ocean",surfaceBlock:D.SAND,subSurfaceBlock:D.SANDSTONE,underwaterBlock:D.SAND,amplitude:3,baseHeight:-8,treeType:"none",treeDensity:0,waterLevel:-1,fogColor:[.2,.35,.55],fogDensity:.02,temperature:-.1,grassColor:[.18,.38,.28],foliageColor:[.12,.3,.18],skyModColor:[.6,.75,.9],spawnWeight:.2},1:{id:1,name:"Sandy Beach",surfaceBlock:D.SAND,subSurfaceBlock:D.SANDSTONE,underwaterBlock:D.SAND,amplitude:2,baseHeight:-1,treeType:"none",treeDensity:0,waterLevel:-1,fogColor:[.95,.92,.78],fogDensity:.01,temperature:.3,grassColor:[.5,.65,.3],foliageColor:[.4,.55,.2],skyModColor:[.95,.92,.82],spawnWeight:.3},2:{id:2,name:"Verdant Plains",surfaceBlock:D.GRASS,subSurfaceBlock:D.DIRT,underwaterBlock:D.DIRT,amplitude:10,baseHeight:0,treeType:"oak",treeDensity:.015,waterLevel:-1,fogColor:[.784,.902,.788],fogDensity:.012,temperature:.2,grassColor:[.3,.69,.31],foliageColor:[.18,.49,.2],skyModColor:[.75,.88,.75],spawnWeight:1},3:{id:3,name:"Dense Forest",surfaceBlock:D.GRASS,subSurfaceBlock:D.DIRT,underwaterBlock:D.DIRT,amplitude:12,baseHeight:1,treeType:"oak",treeDensity:.06,waterLevel:-1,fogColor:[.55,.78,.5],fogDensity:.016,temperature:.3,grassColor:[.25,.6,.25],foliageColor:[.12,.42,.15],skyModColor:[.65,.82,.6],spawnWeight:1},4:{id:4,name:"Dark Forest",surfaceBlock:D.GRASS,subSurfaceBlock:D.DIRT,underwaterBlock:D.DIRT,amplitude:14,baseHeight:2,treeType:"dark_oak",treeDensity:.08,waterLevel:-1,fogColor:[.25,.35,.2],fogDensity:.024,temperature:.1,grassColor:[.18,.38,.18],foliageColor:[.08,.22,.08],skyModColor:[.4,.5,.35],spawnWeight:.6},5:{id:5,name:"Arid Savanna",surfaceBlock:D.GRASS,subSurfaceBlock:D.DIRT,underwaterBlock:D.DIRT,amplitude:8,baseHeight:0,treeType:"acacia",treeDensity:.008,waterLevel:-1,fogColor:[.88,.85,.6],fogDensity:.012,temperature:.6,grassColor:[.62,.72,.28],foliageColor:[.5,.6,.18],skyModColor:[.9,.85,.65],spawnWeight:.8},6:{id:6,name:"Scorching Desert",surfaceBlock:D.SAND,subSurfaceBlock:D.SANDSTONE,underwaterBlock:D.SAND,amplitude:6,baseHeight:-1,treeType:"cactus",treeDensity:.008,waterLevel:-1,fogColor:[1,.976,.769],fogDensity:.01,temperature:.9,grassColor:[.72,.68,.35],foliageColor:[.6,.55,.2],skyModColor:[1,.95,.8],spawnWeight:.5},7:{id:7,name:"Lush Jungle",surfaceBlock:D.GRASS,subSurfaceBlock:D.DIRT,underwaterBlock:D.MUD,amplitude:14,baseHeight:2,treeType:"jungle",treeDensity:.1,waterLevel:-1,fogColor:[.35,.7,.3],fogDensity:.02,temperature:.7,grassColor:[.2,.65,.2],foliageColor:[.1,.5,.1],skyModColor:[.5,.78,.45],spawnWeight:.9},8:{id:8,name:"Frozen Tundra",surfaceBlock:D.SNOW,subSurfaceBlock:D.DIRT,underwaterBlock:D.PACKED_ICE,amplitude:5,baseHeight:0,treeType:"spruce",treeDensity:.012,waterLevel:-1,fogColor:[.89,.945,.992],fogDensity:.018,temperature:-.8,grassColor:[.75,.82,.85],foliageColor:[.55,.65,.72],skyModColor:[.85,.9,.98],spawnWeight:.6},9:{id:9,name:"Rocky Mountains",surfaceBlock:D.STONE,subSurfaceBlock:D.STONE,underwaterBlock:D.STONE,amplitude:30,baseHeight:10,treeType:"spruce",treeDensity:.005,waterLevel:-1,fogColor:[.75,.78,.82],fogDensity:.014,temperature:-.3,grassColor:[.35,.45,.35],foliageColor:[.2,.35,.2],skyModColor:[.8,.82,.88],spawnWeight:.4}};class qw{scene;targetColor=new Te;targetNear=50;targetFar=250;currentColor=new Te;currentNear=50;currentFar=250;sunHeight=1;constructor(e){this.scene=e,e.fog=new ac(13166281,50,250),this.currentColor.set(13166281),this.targetColor.set(13166281)}setBiomeFog(e){const t=ua[e];switch(this.targetColor.setRGB(t.fogColor[0],t.fogColor[1],t.fogColor[2]),e){case Fe.OCEAN:this.targetNear=40,this.targetFar=180;break;case Fe.BEACH:this.targetNear=60,this.targetFar=240;break;case Fe.DESERT:this.targetNear=50,this.targetFar=200;break;case Fe.JUNGLE:this.targetNear=40,this.targetFar=160;break;case Fe.DARK_FOREST:this.targetNear=30,this.targetFar=140;break;case Fe.MOUNTAINS:this.targetNear=60,this.targetFar=280;break;case Fe.SNOWY_PLAINS:this.targetNear=45,this.targetFar=190;break;default:this.targetNear=60,this.targetFar=220;break}}setCaveFog(){this.targetColor.setHex(1118481),this.targetNear=5,this.targetFar=40}setSunHeight(e){this.sunHeight=e}update(e){const t=e*2;if(this.currentColor.lerp(this.targetColor,t),this.currentNear+=(this.targetNear-this.currentNear)*t,this.currentFar+=(this.targetFar-this.currentFar)*t,this.scene.fog instanceof ac){const i=this.currentColor.clone();if(this.sunHeight<0){const r=Math.min(1,-this.sunHeight*2);i.lerp(new Te(331034),r*.7)}else if(this.sunHeight<.2){const r=1-this.sunHeight/.2;i.lerp(new Te(16764032),r*.3)}this.scene.fog.color.copy(i),this.scene.fog.near=this.currentNear,this.scene.fog.far=this.currentFar}}}const Pe=16,Ft=64,yn=22,Cr=6,$w=8,eg=-28,tg=.6,ng=1.8,ig=1.6,Zw=5,pl=12e5,Qw=6,rg=32,Xu=200,Ao=5e3,Jw=3e4,No=512,eC=16,re=No/eC;class tC{particles=[];geometry;material;points;positions;colors;sizes;constructor(e){this.positions=new Float32Array(Ao*3),this.colors=new Float32Array(Ao*3),this.sizes=new Float32Array(Ao),this.geometry=new In,this.geometry.setAttribute("position",new At(this.positions,3)),this.geometry.setAttribute("color",new At(this.colors,3)),this.geometry.setAttribute("size",new At(this.sizes,1)),this.material=new Lc({size:.15,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1,sizeAttenuation:!0}),this.points=new sd(this.geometry,this.material),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,i,r,s={}){const{speed:o=2,color:a=[1,1,1],life:l=1,size:c=.15,spread:u=1}=s;for(let f=0;f<r&&!(this.particles.length>=Ao);f++){const h=Math.random()*Math.PI*2,p=(Math.random()-.5)*Math.PI,g=o*(.5+Math.random()*.5);this.particles.push({x:e+(Math.random()-.5)*u,y:t+(Math.random()-.5)*u,z:i+(Math.random()-.5)*u,vx:Math.cos(h)*Math.cos(p)*g,vy:Math.sin(p)*g,vz:Math.sin(h)*Math.cos(p)*g,life:l,maxLife:l,r:a[0],g:a[1],b:a[2],size:c})}}update(e){let t=0;for(let i=this.particles.length-1;i>=0;i--){const r=this.particles[i];if(r.life-=e,r.life<=0){this.particles.splice(i,1);continue}r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.vy-=5*e;const s=r.life/r.maxLife;this.positions[t*3]=r.x,this.positions[t*3+1]=r.y,this.positions[t*3+2]=r.z,this.colors[t*3]=r.r*s,this.colors[t*3+1]=r.g*s,this.colors[t*3+2]=r.b*s,this.sizes[t]=r.size*s,t++}for(let i=t;i<Ao;i++)this.positions[i*3+1]=-1e3,this.sizes[i]=0;this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.setDrawRange(0,t)}}class nC{sunLight;ambientLight;hemisphereLight;sunDirection=new G(0,1,0);elapsed=0;constructor(e){this.sunLight=new uw(16774624,1.5),this.sunLight.position.set(50,100,30),e.add(this.sunLight),this.ambientLight=new fw(8425664,.4),e.add(this.ambientLight),this.hemisphereLight=new ow(8900331,4473890,.5),e.add(this.hemisphereLight)}update(e){this.elapsed+=e*1e3;const i=this.elapsed%pl/pl*Math.PI*2,r=Math.cos(i)*100,s=Math.sin(i)*100,o=30;this.sunLight.position.set(r,s,o),this.sunDirection.set(r,s,o).normalize();const a=Math.sin(i);if(a>.3)this.sunLight.color.setHex(16775920),this.sunLight.intensity=1.5,this.ambientLight.color.setHex(8425664),this.ambientLight.intensity=.4,this.hemisphereLight.color.setHex(8900331),this.hemisphereLight.groundColor.setHex(4473890),this.hemisphereLight.intensity=.5;else if(a>.1){const l=(a-.1)/.2;this.sunLight.color.lerpColors(new Te(16747520),new Te(16775920),l),this.sunLight.intensity=.8+l*.7,this.ambientLight.intensity=.2+l*.2,this.hemisphereLight.intensity=.3+l*.2}else if(a>0){const l=a/.1;this.sunLight.color.lerpColors(new Te(15094016),new Te(16747520),l),this.sunLight.intensity=.5+l*.3,this.ambientLight.color.lerpColors(new Te(1713022),new Te(8425664),l),this.ambientLight.intensity=.1+l*.1,this.hemisphereLight.color.lerpColors(new Te(16740096),new Te(8900331),l),this.hemisphereLight.intensity=.15+l*.15}else if(a>-.1){const l=(a+.1)/.1;this.sunLight.color.lerpColors(new Te(1713022),new Te(15094016),l),this.sunLight.intensity=.1+l*.4,this.ambientLight.color.lerpColors(new Te(858922),new Te(1713022),l),this.ambientLight.intensity=.05+l*.05,this.hemisphereLight.color.lerpColors(new Te(1710654),new Te(16740096),l),this.hemisphereLight.intensity=.05+l*.1}else this.sunLight.color.setHex(4482730),this.sunLight.intensity=.15,this.ambientLight.color.setHex(858922),this.ambientLight.intensity=.05,this.hemisphereLight.color.setHex(1118515),this.hemisphereLight.groundColor.setHex(1118481),this.hemisphereLight.intensity=.05}getSunDirection(){return this.sunDirection}getDayProgress(){return this.elapsed%pl/pl}getSunHeight(){return this.sunDirection.y}}class iC{scene;assetManager;chunks=new Map;material;maxChunks=200;constructor(e,t){this.scene=e,this.assetManager=t,this.material=new od({map:t.getTexture(),vertexColors:!0,side:Vi})}uploadChunk(e,t,i){if(this.removeChunk(e),this.chunks.size>=this.maxChunks){let a="",l=1/0;this.chunks.forEach((c,u)=>{c.lastAccessed<l&&(l=c.lastAccessed,a=u)}),a&&this.removeChunk(a)}const r=new In;r.setAttribute("position",new At(t.positions,3)),r.setAttribute("normal",new At(t.normals,3)),r.setAttribute("uv",new At(t.uvs,2)),r.setAttribute("color",new At(t.colors,3)),r.setIndex(new At(t.indices,1)),r.computeBoundingSphere();const s=new bn(r,this.material);s.frustumCulled=!0,this.scene.add(s);let o=null;if(t.waterIndices.length>0){const a=new In;a.setAttribute("position",new At(t.waterPositions,3)),a.setAttribute("normal",new At(t.waterNormals,3)),a.setAttribute("uv",new At(t.waterUvs,2)),a.setIndex(new At(t.waterIndices,1)),a.computeBoundingSphere(),o=new bn(a,i),o.frustumCulled=!0,o.renderOrder=100,this.scene.add(o)}this.chunks.set(e,{solid:s,water:o,lastAccessed:performance.now(),key:e})}removeChunk(e){const t=this.chunks.get(e);t&&(this.scene.remove(t.solid),t.solid.geometry.dispose(),t.water&&(this.scene.remove(t.water),t.water.geometry.dispose()),this.chunks.delete(e))}hasChunk(e){return this.chunks.has(e)}getChunkCount(){return this.chunks.size}clear(){this.chunks.forEach((e,t)=>this.removeChunk(t))}}class rC{overlay;vignetteStrength=.3;constructor(){this.overlay=document.createElement("div"),this.overlay.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10;background:radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",document.body.appendChild(this.overlay)}setVignetteStrength(e){this.vignetteStrength=e;const t=e*.6;this.overlay.style.background=`radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${t}) 100%)`}fadeIn(e,t){this.overlay.style.transition=`background ${e}ms`,this.overlay.style.background="rgba(0,0,0,1)",t&&setTimeout(t,e)}fadeOut(e,t){this.overlay.style.transition=`background ${e}ms`;const i=this.vignetteStrength*.6;this.overlay.style.background=`radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${i}) 100%)`,t&&setTimeout(t,e)}destroy(){document.body.removeChild(this.overlay)}}class sC{atlas=null;canvas=null;init(){this.canvas=document.createElement("canvas"),this.canvas.width=No,this.canvas.height=No;const e=this.canvas.getContext("2d");e.fillStyle="#FF00FF",e.fillRect(0,0,No,No),this.drawTile(e,D.GRASS,(t,i,r)=>{t.fillStyle="#4CAF50",t.fillRect(i,r,re,re);for(let s=0;s<20;s++){t.fillStyle="#388E3C";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,2,2)}for(let s=0;s<5;s++){t.fillStyle="#81C784";const o=i+Math.floor(Math.random()*(re-6)),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,6,1)}}),this.drawTile(e,D.DIRT,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,re,re);for(let s=0;s<25;s++){t.fillStyle=Math.random()>.5?"#6D4C41":"#8D6E63";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,2,2)}}),this.drawTileAt(e,1,0,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,re,re),t.fillStyle="#4CAF50",t.fillRect(i,r,re,Math.floor(re*.4));for(let s=0;s<10;s++){t.fillStyle="#388E3C";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re*.4);t.fillRect(o,a,2,2)}}),this.drawTileAt(e,2,0,(t,i,r)=>{t.fillStyle="#795548",t.fillRect(i,r,re,re);for(let s=0;s<20;s++){t.fillStyle="#6D4C41";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,3,2)}}),this.drawTile(e,D.STONE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<4;s++)t.strokeStyle="#757575",t.lineWidth=1,t.beginPath(),t.moveTo(i+Math.random()*re,r+Math.random()*re),t.quadraticCurveTo(i+Math.random()*re,r+Math.random()*re,i+Math.random()*re,r+Math.random()*re),t.stroke()}),this.drawTile(e,D.SAND,(t,i,r)=>{t.fillStyle="#FDD835",t.fillRect(i,r,re,re);for(let s=0;s<6;s++){t.fillStyle="#F9A825";const o=r+Math.floor(Math.random()*re);t.fillRect(i,o,re,1)}}),this.drawTile(e,D.SANDSTONE,(t,i,r)=>{t.fillStyle="#E8C86A",t.fillRect(i,r,re,re);for(let s=0;s<3;s++){t.fillStyle="#D4B04A";const o=r+Math.floor(Math.random()*re);t.fillRect(i,o,re,2)}}),this.drawTile(e,D.SNOW,(t,i,r)=>{t.fillStyle="#FAFAFA",t.fillRect(i,r,re,re);for(let s=0;s<15;s++){t.fillStyle="#BBDEFB";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,2,2)}}),this.drawTile(e,D.ICE,(t,i,r)=>{t.fillStyle="#B3E5FC",t.fillRect(i,r,re,re),t.fillStyle="#E1F5FE",t.fillRect(i+8,r+8,16,16)}),this.drawTile(e,D.MUD,(t,i,r)=>{t.fillStyle="#4E342E",t.fillRect(i,r,re,re);for(let s=0;s<8;s++){t.fillStyle="#3E2723";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,4,3)}}),this.drawTile(e,D.CRYSTAL,(t,i,r)=>{t.fillStyle="#7B1FA2",t.fillRect(i,r,re,re),t.strokeStyle="#FFFFFF",t.lineWidth=2,t.beginPath(),t.moveTo(i,r),t.lineTo(i+re,r+re),t.stroke(),t.beginPath(),t.moveTo(i+re,r),t.lineTo(i,r+re),t.stroke()}),this.drawTile(e,D.GLOWSTONE,(t,i,r)=>{t.fillStyle="#FF8F00",t.fillRect(i,r,re,re),t.fillStyle="#FFD54F",t.fillRect(i+10,r+10,12,12),t.fillStyle="#FFFFFF",t.fillRect(i+14,r+14,4,4)}),this.drawTile(e,D.LAVA,(t,i,r)=>{t.fillStyle="#E65100",t.fillRect(i,r,re,re),t.fillStyle="#FF6D00",t.fillRect(i+4,r+4,24,24),t.fillStyle="#FFAB00",t.fillRect(i+10,r+10,12,12)}),this.drawTile(e,D.WOOD,(t,i,r)=>{t.fillStyle="#6D4C41",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#5D4037";const o=i+Math.floor(Math.random()*re);t.fillRect(o,r,1,re)}}),this.drawTile(e,D.LEAVES,(t,i,r)=>{t.fillStyle="#2E7D32",t.fillRect(i,r,re,re);for(let s=0;s<30;s++){t.fillStyle="#1B5E20";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,3,3)}}),this.drawTile(e,D.CACTUS,(t,i,r)=>{t.fillStyle="#2E7D32",t.fillRect(i,r,re,re),t.fillStyle="#1B5E20",t.fillRect(i+2,r,1,re),t.fillRect(i+re-3,r,1,re)}),this.drawTile(e,D.BEDROCK,(t,i,r)=>{t.fillStyle="#212121",t.fillRect(i,r,re,re);for(let s=0;s<10;s++){t.fillStyle="#424242";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,4,3)}}),this.drawTile(e,D.COAL_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#212121";const o=i+Math.floor(Math.random()*(re-4)),a=r+Math.floor(Math.random()*(re-4));t.fillRect(o,a,4,4)}}),this.drawTile(e,D.IRON_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#E8C86A";const o=i+Math.floor(Math.random()*(re-3)),a=r+Math.floor(Math.random()*(re-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,D.GOLD_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#FFD700";const o=i+Math.floor(Math.random()*(re-3)),a=r+Math.floor(Math.random()*(re-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,D.DIAMOND_ORE,(t,i,r)=>{t.fillStyle="#9E9E9E",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#00BCD4";const o=i+Math.floor(Math.random()*(re-3)),a=r+Math.floor(Math.random()*(re-3));t.fillRect(o,a,3,3)}}),this.drawTile(e,D.PORTAL_FRAME,(t,i,r)=>{t.fillStyle="#6A1B9A",t.fillRect(i,r,re,re),t.strokeStyle="#CE93D8",t.lineWidth=2,t.strokeRect(i+4,r+4,re-8,re-8)}),this.drawTile(e,D.PORTAL_ACTIVE,(t,i,r)=>{t.fillStyle="#AA00FF",t.fillRect(i,r,re,re);for(let s=0;s<10;s++){t.fillStyle="#E040FB";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,2,2)}}),this.drawTile(e,D.LILY_PAD,(t,i,r)=>{t.fillStyle="#1B5E20",t.fillRect(i+4,r+4,re-8,re-8)}),this.drawTile(e,D.SPRUCE_WOOD,(t,i,r)=>{t.fillStyle="#4E342E",t.fillRect(i,r,re,re);for(let s=0;s<6;s++){t.fillStyle="#3E2723";const o=i+Math.floor(Math.random()*re);t.fillRect(o,r,1,re)}}),this.drawTile(e,D.SPRUCE_LEAVES,(t,i,r)=>{t.fillStyle="#1B5E20",t.fillRect(i,r,re,re);for(let s=0;s<20;s++){t.fillStyle="#0D3B0F";const o=i+Math.floor(Math.random()*re),a=r+Math.floor(Math.random()*re);t.fillRect(o,a,3,3)}}),this.drawTile(e,D.PACKED_ICE,(t,i,r)=>{t.fillStyle="#81D4FA",t.fillRect(i,r,re,re);for(let s=0;s<5;s++){t.fillStyle="#B3E5FC";const o=i+Math.floor(Math.random()*(re-4)),a=r+Math.floor(Math.random()*(re-4));t.fillRect(o,a,4,4)}}),this.atlas=new sw(this.canvas),this.atlas.magFilter=ln,this.atlas.minFilter=ln,this.atlas.wrapS=Fn,this.atlas.wrapT=Fn,this.atlas.colorSpace=qt,this.atlas.needsUpdate=!0}drawTile(e,t,i){const r=ad[t],s=r.atlasTileX*re,o=r.atlasTileY*re;i(e,s,o)}drawTileAt(e,t,i,r){const s=t*re,o=i*re;r(e,s,o)}getTexture(){return this.atlas||this.init(),this.atlas}}class oC{keys=new Map;mouseButtons=new Map;mouseDeltaX=0;mouseDeltaY=0;prevMouseDeltaX=0;prevMouseDeltaY=0;scrollDelta=0;prevScrollDelta=0;keyJustPressed=new Map;prevKeyJustPressed=new Map;canvas=null;init(e){this.canvas=e,document.addEventListener("keydown",t=>{this.keys.get(t.code)||this.keyJustPressed.set(t.code,!0),this.keys.set(t.code,!0),["Space","Tab","KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight","KeyE","KeyF","KeyQ"].includes(t.code)&&t.preventDefault()}),document.addEventListener("keyup",t=>{this.keys.set(t.code,!1)}),document.addEventListener("mousedown",t=>{this.mouseButtons.set(t.button,!0)}),document.addEventListener("mouseup",t=>{this.mouseButtons.set(t.button,!1)}),document.addEventListener("mousemove",t=>{document.pointerLockElement===this.canvas&&(this.mouseDeltaX+=t.movementX,this.mouseDeltaY+=t.movementY)}),document.addEventListener("wheel",t=>{this.scrollDelta+=t.deltaY}),e.addEventListener("contextmenu",t=>t.preventDefault())}flush(){this.prevMouseDeltaX=this.mouseDeltaX,this.prevMouseDeltaY=this.mouseDeltaY,this.mouseDeltaX=0,this.mouseDeltaY=0,this.prevScrollDelta=this.scrollDelta,this.scrollDelta=0,this.prevKeyJustPressed=new Map(this.keyJustPressed),this.keyJustPressed.clear()}isKeyDown(e){return this.keys.get(e)??!1}isKeyJustPressed(e){return this.prevKeyJustPressed.get(e)??!1}isMouseButtonDown(e){return this.mouseButtons.get(e)??!1}getMouseDeltaX(){return this.prevMouseDeltaX}getMouseDeltaY(){return this.prevMouseDeltaY}getScrollDelta(){return this.prevScrollDelta}isPointerLocked(){return document.pointerLockElement===this.canvas}requestPointerLock(){this.canvas?.requestPointerLock()}exitPointerLock(){document.exitPointerLock()}destroy(){}}const aC=`
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
// BlockID enum: AIR=0, GRASS=1, DIRT=2, STONE=3, SAND=4, SANDSTONE=5, SNOW=6,
//   ICE=7, MUD=8, CRYSTAL=9, GLOWSTONE=10, LAVA=11, WATER=12, WOOD=13,
//   LEAVES=14, CACTUS=15, BEDROCK=16, COAL_ORE=17, IRON_ORE=18, GOLD_ORE=19,
//   DIAMOND_ORE=20, PORTAL_FRAME=21, PORTAL_ACTIVE=22, LILY_PAD=23,
//   SPRUCE_WOOD=24, SPRUCE_LEAVES=25, PACKED_ICE=26
const TRANSPARENT_BLOCKS = new Set([0, 7, 11, 12, 14, 22, 23, 25]);
const SOLID_BLOCKS = new Set([1,2,3,4,5,6,8,9,10,13,15,16,17,18,19,20,21,24,26]);

// Blocks that get tinted by biome grassColor
const GRASS_TINTED = new Set([1]); // GRASS
// Blocks that get tinted by biome foliageColor
const FOLIAGE_TINTED = new Set([14, 25]); // LEAVES, SPRUCE_LEAVES

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

// ═══════════════════════════════
// BIOME COLOR LOOKUP
// ═══════════════════════════════
// BiomeID enum: OCEAN=0, BEACH=1, PLAINS=2, FOREST=3, DARK_FOREST=4,
//   SAVANNA=5, DESERT=6, JUNGLE=7, SNOWY_PLAINS=8, MOUNTAINS=9
// Format: [grassR, grassG, grassB, foliageR, foliageG, foliageB]
const BIOME_COLORS = [
  [0.18, 0.38, 0.28, 0.12, 0.30, 0.18],  // OCEAN
  [0.50, 0.65, 0.30, 0.40, 0.55, 0.20],  // BEACH
  [0.30, 0.69, 0.31, 0.18, 0.49, 0.20],  // PLAINS
  [0.25, 0.60, 0.25, 0.12, 0.42, 0.15],  // FOREST
  [0.18, 0.38, 0.18, 0.08, 0.22, 0.08],  // DARK_FOREST
  [0.62, 0.72, 0.28, 0.50, 0.60, 0.18],  // SAVANNA
  [0.72, 0.68, 0.35, 0.60, 0.55, 0.20],  // DESERT
  [0.20, 0.65, 0.20, 0.10, 0.50, 0.10],  // JUNGLE
  [0.75, 0.82, 0.85, 0.55, 0.65, 0.72],  // SNOWY_PLAINS
  [0.35, 0.45, 0.35, 0.20, 0.35, 0.20],  // MOUNTAINS
];

function getBiomeGrassColor(biomeId) {
  const c = BIOME_COLORS[biomeId] || BIOME_COLORS[2]; // default PLAINS
  return [c[0], c[1], c[2]];
}

function getBiomeFoliageColor(biomeId) {
  const c = BIOME_COLORS[biomeId] || BIOME_COLORS[2]; // default PLAINS
  return [c[3], c[4], c[5]];
}

// Get biome at local chunk position (with neighbor fallback)
function getBiomeAt(biomeMap, neighborBiomes, lx, lz) {
  if (lx >= 0 && lx < CHUNK_SIZE && lz >= 0 && lz < CHUNK_SIZE) {
    return biomeMap[lx + lz * CHUNK_SIZE];
  }
  // Check neighbor biome maps
  const nIdx = lx < 0 ? 1 : lx >= CHUNK_SIZE ? 0 : lz < 0 ? 3 : 2;
  const nMap = neighborBiomes[nIdx];
  if (!nMap) return 2; // default PLAINS
  const nlx = ((lx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const nlz = ((lz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  return nMap[nlx + nlz * CHUNK_SIZE];
}

// Atlas tile mapping — must match BLOCK_DEFS in types/blocks.ts exactly
const ATLAS_MAP = {
  0: [0,0],   // AIR (unused)
  1: [0,0],   // GRASS top
  2: [2,0],   // DIRT
  3: [3,0],   // STONE
  4: [4,0],   // SAND
  5: [5,0],   // SANDSTONE
  6: [6,0],   // SNOW
  7: [7,0],   // ICE
  8: [8,0],   // MUD
  9: [9,0],   // CRYSTAL
  10: [10,0],  // GLOWSTONE
  11: [11,0],  // LAVA
  12: [0,0],   // WATER (rendered separately)
  13: [12,0],  // WOOD
  14: [13,0],  // LEAVES
  15: [14,0],  // CACTUS
  16: [15,0],  // BEDROCK
  17: [0,1],   // COAL_ORE
  18: [1,1],   // IRON_ORE
  19: [2,1],   // GOLD_ORE
  20: [3,1],   // DIAMOND_ORE
  21: [4,1],   // PORTAL_FRAME
  22: [5,1],   // PORTAL_ACTIVE
  23: [6,1],   // LILY_PAD
  24: [7,1],   // SPRUCE_WOOD
  25: [8,1],   // SPRUCE_LEAVES
  26: [9,1],   // PACKED_ICE
};
// Side face textures (for blocks with different side texture)
const SIDE_MAP = {
  1: [1,0],   // GRASS side → grass_side tile at [1,0]
};
// Bottom face textures
const BOTTOM_MAP = {
  1: [2,0],   // GRASS bottom → dirt tile at [2,0]
};

self.onmessage = function(e) {
  const { chunkX, chunkZ, voxels, neighbors, biomeMap, neighborBiomes } = e.data;

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

        // Get biome for this column for color tinting
        const biome = biomeMap ? biomeMap[x + z * CHUNK_SIZE] : 2; // default PLAINS

        // Pre-compute tint color for this block
        let tintR = 1.0, tintG = 1.0, tintB = 1.0;
        if (GRASS_TINTED.has(block)) {
          const gc = getBiomeGrassColor(biome);
          tintR = gc[0]; tintG = gc[1]; tintB = gc[2];
        } else if (FOLIAGE_TINTED.has(block)) {
          const fc = getBiomeFoliageColor(biome);
          tintR = fc[0]; tintG = fc[1]; tintB = fc[2];
        }

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

          // UV — select atlas tile based on face direction
          let atlasInfo = ATLAS_MAP[block] || [0, 0];
          // Side faces: +X(0), -X(1), +Z(4), -Z(5)
          if ((fi === 0 || fi === 1 || fi === 4 || fi === 5) && SIDE_MAP[block]) {
            atlasInfo = SIDE_MAP[block];
          }
          // Bottom face: -Y(3)
          if (fi === 3 && BOTTOM_MAP[block]) {
            atlasInfo = BOTTOM_MAP[block];
          }
          const uvOffX = atlasInfo[0] / ATLAS_TILES;
          const uvOffY = atlasInfo[1] / ATLAS_TILES;
          const uvSz = 1 / ATLAS_TILES;
          // Half-pixel inset to prevent texture bleeding between tiles
          const uvPad = 0.5 / (ATLAS_TILES * 32); // ATLAS_SIZE=512, TILE_SIZE=32

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
            tUv.push(uvOffX + uvPad + BASE_UVS[v][0] * (uvSz - 2 * uvPad), uvOffY + uvPad + BASE_UVS[v][1] * (uvSz - 2 * uvPad));
            if (!isWater) {
              // Apply biome tint modulated by AO
              colors.push(ao[v] * tintR, ao[v] * tintG, ao[v] * tintB);
            }
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
`;let sg=null,Yu=null;function lC(){return Yu||(sg=new Blob([aC],{type:"application/javascript"}),Yu=URL.createObjectURL(sg)),new Worker(Yu)}class cd{chunkX;chunkZ;voxels;dirty=!0;constructor(e,t){this.chunkX=e,this.chunkZ=t,this.voxels=new Uint8Array(Pe*Ft*Pe)}index(e,t,i){return e+i*Pe+t*Pe*Pe}getBlock(e,t,i){return e<0||e>=Pe||t<0||t>=Ft||i<0||i>=Pe?0:this.voxels[this.index(e,t,i)]}setBlock(e,t,i,r){e<0||e>=Pe||t<0||t>=Ft||i<0||i>=Pe||(this.voxels[this.index(e,t,i)]=r,this.dirty=!0)}getBlockWorld(e,t,i){const r=e-this.chunkX*Pe,s=i-this.chunkZ*Pe;return this.getBlock(r,t,s)}setBlockWorld(e,t,i,r){const s=e-this.chunkX*Pe,o=i-this.chunkZ*Pe;this.setBlock(s,t,o,r)}isOnEdge(e,t){return e===0||e===Pe-1||t===0||t===Pe-1}get worldX(){return this.chunkX*Pe}get worldZ(){return this.chunkZ*Pe}fill(e){this.voxels.fill(e)}}const h_=Math.sqrt(3),cC=.5*(h_-1),wo=(3-h_)/6,uC=1/3,vi=1/6,Wo=n=>Math.floor(n)|0,og=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),ju=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function Co(n=Math.random){const e=d_(n),t=new Float64Array(e).map(r=>og[r%12*2]),i=new Float64Array(e).map(r=>og[r%12*2+1]);return function(s,o){let a=0,l=0,c=0;const u=(s+o)*cC,f=Wo(s+u),h=Wo(o+u),p=(f+h)*wo,g=f-p,y=h-p,m=s-g,d=o-y;let v,_;m>d?(v=1,_=0):(v=0,_=1);const E=m-v+wo,w=d-_+wo,S=m-1+2*wo,T=d-1+2*wo,U=f&255,M=h&255;let C=.5-m*m-d*d;if(C>=0){const oe=U+e[M],F=t[oe],W=i[oe];C*=C,a=C*C*(F*m+W*d)}let V=.5-E*E-w*w;if(V>=0){const oe=U+v+e[M+_],F=t[oe],W=i[oe];V*=V,l=V*V*(F*E+W*w)}let Z=.5-S*S-T*T;if(Z>=0){const oe=U+1+e[M+1],F=t[oe],W=i[oe];Z*=Z,c=Z*Z*(F*S+W*T)}return 70*(a+l+c)}}function ag(n=Math.random){const e=d_(n),t=new Float64Array(e).map(s=>ju[s%12*3]),i=new Float64Array(e).map(s=>ju[s%12*3+1]),r=new Float64Array(e).map(s=>ju[s%12*3+2]);return function(o,a,l){let c,u,f,h;const p=(o+a+l)*uC,g=Wo(o+p),y=Wo(a+p),m=Wo(l+p),d=(g+y+m)*vi,v=g-d,_=y-d,E=m-d,w=o-v,S=a-_,T=l-E;let U,M,C,V,Z,oe;w>=S?S>=T?(U=1,M=0,C=0,V=1,Z=1,oe=0):w>=T?(U=1,M=0,C=0,V=1,Z=0,oe=1):(U=0,M=0,C=1,V=1,Z=0,oe=1):S<T?(U=0,M=0,C=1,V=0,Z=1,oe=1):w<T?(U=0,M=1,C=0,V=0,Z=1,oe=1):(U=0,M=1,C=0,V=1,Z=1,oe=0);const F=w-U+vi,W=S-M+vi,te=T-C+vi,se=w-V+2*vi,B=S-Z+2*vi,X=T-oe+2*vi,j=w-1+3*vi,ie=S-1+3*vi,le=T-1+3*vi,J=g&255,ae=y&255,ye=m&255;let Ae=.6-w*w-S*S-T*T;if(Ae<0)c=0;else{const be=J+e[ae+e[ye]];Ae*=Ae,c=Ae*Ae*(t[be]*w+i[be]*S+r[be]*T)}let Ce=.6-F*F-W*W-te*te;if(Ce<0)u=0;else{const be=J+U+e[ae+M+e[ye+C]];Ce*=Ce,u=Ce*Ce*(t[be]*F+i[be]*W+r[be]*te)}let Xe=.6-se*se-B*B-X*X;if(Xe<0)f=0;else{const be=J+V+e[ae+Z+e[ye+oe]];Xe*=Xe,f=Xe*Xe*(t[be]*se+i[be]*B+r[be]*X)}let je=.6-j*j-ie*ie-le*le;if(je<0)h=0;else{const be=J+1+e[ae+1+e[ye+1]];je*=je,h=je*je*(t[be]*j+i[be]*ie+r[be]*le)}return 32*(c+u+f+h)}}function d_(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}let p_=0;function fC(n){p_=n}function hC(){let n=p_;return()=>(n=n*1664525+1013904223&4294967295,(n>>>0)/4294967295)}let m_,g_,v_,__,y_,S_;function dC(){const n=hC();m_=Co(n),g_=ag(n),v_=ag(n),__=Co(n),y_=Co(n),S_=Co(n),Co(n)}function x_(){return m_}function ml(){return g_}function pC(){return v_}function mC(){return __}function gC(){return y_}function vC(){return S_}class _C{seed;constructor(e){this.seed=e}generateChunk(e,t){const i=e.chunkX,r=e.chunkZ;for(let s=0;s<Pe;s++)for(let o=0;o<Pe;o++){const a=i*Pe+s,l=r*Pe+o,c=s+o*Pe,u=t[c],f=ua[u],h=this.getHeight(a,l,u),p=Math.floor(h);for(let g=0;g<Ft;g++){let y=D.AIR;g===0?y=D.BEDROCK:g<6?ml()(a*.1,g*.1,l*.1)>.55?y=D.LAVA:ml()(a*.15,g*.15,l*.15+100)>.65?y=D.GLOWSTONE:y=D.STONE:g<=p?this.isCave(a,g,l)?g<6?y=D.LAVA:y=D.AIR:(y=D.STONE,g===p?(y=f.surfaceBlock,u===Fe.MOUNTAINS&&p>yn+22&&(y=D.SNOW)):g>p-4&&(y=f.subSurfaceBlock),y===D.STONE&&(y=this.getOre(a,g,l))):g<=yn&&g>p&&(u===Fe.SNOWY_PLAINS&&g===yn?y=D.ICE:y=D.WATER),e.setBlock(s,g,o,y)}}e.dirty=!1}getHeight(e,t,i){const r=x_(),s=ua[i],o=yn+s.baseHeight,a=s.amplitude,l=r(e*.003,t*.003)*a,c=r(e*.012,t*.012)*a*.35,u=r(e*.035,t*.035)*a*.12,f=r(e*.08,t*.08)*a*.04;let h=o+l+c+u+f;switch(i){case Fe.OCEAN:h=yn-6+r(e*.008,t*.008)*3;break;case Fe.BEACH:h=yn-1+r(e*.005,t*.005)*3;break;case Fe.MOUNTAINS:const p=Math.abs(r(e*.005,t*.005));h=o+p*a*.8+r(e*.01,t*.01)*a*.3+r(e*.04,t*.04)*a*.1;break;case Fe.JUNGLE:const g=r(e*.004,t*.004);h=o+g*a*.7+Math.abs(r(e*.015,t*.015))*a*.3;break;case Fe.DESERT:const y=r(e*.006,t*.006);h=o+y*a*.6+Math.sin(e*.03+y*3)*1.5;break;case Fe.SNOWY_PLAINS:h=o+r(e*.004,t*.004)*a*.5+r(e*.02,t*.02)*a*.15;break;case Fe.DARK_FOREST:h=o+l*.8+Math.abs(r(e*.02,t*.02))*a*.2;break;case Fe.SAVANNA:const m=r(e*.003,t*.003);h=o+m*a*.5+(m>.3?(m-.3)*a*1.5:0);break}return h}isCave(e,t,i){if(t<=0)return!1;const r=ml(),s=pC(),o=r(e*.04,t*.04,i*.04),a=s(e*.04+500,t*.04,i*.04+500);let l=o>.42&&a>.42;if(t<20){const c=1+(20-t)*.02,u=r(e*.04,t*.04*c,i*.04),f=s(e*.04+500,t*.04*c,i*.04+500);l=u>.35&&f>.35}return t<yn-4&&(l=!1),l}getOre(e,t,i){const r=ml();return t<50&&r(e*.15+1e3,t*.15,i*.15+1e3)>.75?D.COAL_ORE:t<40&&r(e*.15+2e3,t*.15,i*.15+2e3)>.82?D.IRON_ORE:t<25&&r(e*.15+3e3,t*.15,i*.15+3e3)>.9?D.GOLD_ORE:t<12&&r(e*.15+4e3,t*.15,i*.15+4e3)>.96?D.DIAMOND_ORE:t<35&&t>10&&r(e*.12+5e3,t*.12,i*.12+5e3)>.94?D.CRYSTAL:D.STONE}generateChunkRaw(e,t,i){const r=new cd(e,t);return this.generateChunk(r,i),r}}class lg{static getClimate(e,t){const i=mC(),r=gC(),s=vC();let o=i(e*.0015,t*.0015)*.7+i(e*.004,t*.004)*.25+i(e*.01,t*.01)*.05,a=r(e*.001,t*.001)*.6+r(e*.005,t*.005)*.3+r(e*.02,t*.02)*.1,l=s(e*.002,t*.002)*.6+s(e*.008,t*.008)*.3+s(e*.025,t*.025)*.1;return o=Math.max(-1,Math.min(1,o)),a=Math.max(-1,Math.min(1,a)),l=Math.max(-1,Math.min(1,l)),{continentalness:o,temperature:a,humidity:l}}}class ud{static selectBiome(e){const{continentalness:t,temperature:i,humidity:r}=e;return t<-.25?Fe.OCEAN:t<-.1?Fe.BEACH:t>.55?Fe.MOUNTAINS:i<-.3?Fe.SNOWY_PLAINS:i>.3?r<-.15?Fe.DESERT:r>.35?r>.55?Fe.JUNGLE:Fe.DARK_FOREST:Fe.SAVANNA:r<-.2?Fe.SAVANNA:r>.3||r>.1&&i>.1?Fe.FOREST:Fe.PLAINS}static selectBiomeSmooth(e){return ud.selectBiome(e)}}class lc{cache=new Map;climateCache=new Map;static CACHE_LIMIT=8192;generateBiomeMap(e,t){const i=new Array(Pe*Pe);for(let r=0;r<Pe;r++)for(let s=0;s<Pe;s++){const o=e*Pe+r,a=t*Pe+s;i[r+s*Pe]=this.getBiomeAt(o,a)}return i}getBiomeAt(e,t){const i=`${Math.floor(e)},${Math.floor(t)}`,r=this.cache.get(i);if(r!==void 0)return r;const s=lg.getClimate(e,t),o=ud.selectBiome(s);if(this.cache.size>=lc.CACHE_LIMIT){const a=Array.from(this.cache.keys());for(let l=0;l<a.length/2;l++)this.cache.delete(a[l])}return this.cache.set(i,o),o}getClimateAt(e,t){const i=`${Math.floor(e)},${Math.floor(t)}`,r=this.climateCache.get(i);if(r)return r;const s=lg.getClimate(e,t),o={cont:s.continentalness,temp:s.temperature,humid:s.humidity};if(this.climateCache.size>=lc.CACHE_LIMIT){const a=Array.from(this.climateCache.keys());for(let l=0;l<a.length/2;l++)this.climateCache.delete(a[l])}return this.climateCache.set(i,o),o}}class yC{generateStructures(e,t){const i=x_(),r=e.chunkX,s=e.chunkZ;for(let o=2;o<Pe-2;o++)for(let a=2;a<Pe-2;a++){const l=r*Pe+o,c=s*Pe+a,u=t[o+a*Pe],f=ua[u];let h=-1;for(let y=Ft-1;y>=0;y--){const m=e.getBlock(o,y,a);if(m!==D.AIR&&m!==D.WATER&&m!==D.ICE){h=y;break}}if(h<1||h>Ft-10||h<yn&&u===Fe.OCEAN||h<yn-1&&u===Fe.BEACH)continue;const p=i(l*.5,c*.5),g=f.treeDensity;if(p>1-g*2)switch(u){case Fe.PLAINS:this.placeOakTree(e,o,h+1,a);break;case Fe.FOREST:Math.random()>.3?this.placeOakTree(e,o,h+1,a):this.placeBirchTree(e,o,h+1,a);break;case Fe.DARK_FOREST:this.placeDarkOakTree(e,o,h+1,a);break;case Fe.DESERT:this.placeCactus(e,o,h+1,a);break;case Fe.SNOWY_PLAINS:this.placeSpruceTree(e,o,h+1,a);break;case Fe.MOUNTAINS:h<yn+18&&this.placeSpruceTree(e,o,h+1,a);break;case Fe.JUNGLE:this.placeJungleTree(e,o,h+1,a);break;case Fe.SAVANNA:this.placeAcaciaTree(e,o,h+1,a);break;case Fe.BEACH:Math.random()<.15&&this.placeOakTree(e,o,h+1,a);break}u===Fe.JUNGLE&&Math.random()<.05&&e.getBlock(o,h,a)===D.AIR&&h+1<Ft&&e.setBlock(o,h+1,a,D.LEAVES)}}placeOakTree(e,t,i,r){const s=5+Math.floor(Math.random()*3);for(let a=0;a<s;a++)i+a<Ft&&e.setBlock(t,i+a,r,D.WOOD);const o=s-3;for(let a=o;a<=s+1;a++){const l=a<=s-1?2:1;for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){if(c===0&&u===0&&a<s||Math.abs(c)+Math.abs(u)>l+1)continue;const f=t+c,h=i+a,p=r+u;f>=0&&f<Pe&&h>=0&&h<Ft&&p>=0&&p<Pe&&e.getBlock(f,h,p)===D.AIR&&e.setBlock(f,h,p,D.LEAVES)}}}placeBirchTree(e,t,i,r){const s=6+Math.floor(Math.random()*3);for(let a=0;a<s;a++)i+a<Ft&&e.setBlock(t,i+a,r,D.WOOD);const o=s-3;for(let a=o;a<=s+1;a++){const l=a===s+1?1:2;for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){if(c===0&&u===0&&a<s||Math.abs(c)===l&&Math.abs(u)===l&&Math.random()<.4)continue;const f=t+c,h=i+a,p=r+u;f>=0&&f<Pe&&h>=0&&h<Ft&&p>=0&&p<Pe&&e.getBlock(f,h,p)===D.AIR&&e.setBlock(f,h,p,D.LEAVES)}}}placeDarkOakTree(e,t,i,r){const s=7+Math.floor(Math.random()*4);for(let a=0;a<s;a++)i+a<Ft&&(e.setBlock(t,i+a,r,D.SPRUCE_WOOD),t+1<Pe&&e.setBlock(t+1,i+a,r,D.SPRUCE_WOOD),r+1<Pe&&e.setBlock(t,i+a,r+1,D.SPRUCE_WOOD),t+1<Pe&&r+1<Pe&&e.setBlock(t+1,i+a,r+1,D.SPRUCE_WOOD));const o=s-4;for(let a=o;a<=s+1;a++){const l=a<=s-2?3:2;for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){if(Math.abs(c)+Math.abs(u)>l+2)continue;const f=t+c,h=i+a,p=r+u;f>=0&&f<Pe&&h>=0&&h<Ft&&p>=0&&p<Pe&&e.getBlock(f,h,p)===D.AIR&&e.setBlock(f,h,p,D.SPRUCE_LEAVES)}}}placeSpruceTree(e,t,i,r){const s=6+Math.floor(Math.random()*4);for(let o=0;o<s;o++)i+o<Ft&&e.setBlock(t,i+o,r,D.SPRUCE_WOOD);for(let o=2;o<=s;o++){const a=s-o,l=Math.min(Math.floor(a/2)+1,2);for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){if(c===0&&u===0&&o<s)continue;const f=t+c,h=i+o,p=r+u;f>=0&&f<Pe&&h>=0&&h<Ft&&p>=0&&p<Pe&&e.getBlock(f,h,p)===D.AIR&&e.setBlock(f,h,p,D.SPRUCE_LEAVES)}}}placeJungleTree(e,t,i,r){const s=8+Math.floor(Math.random()*7);for(let a=0;a<s;a++)i+a<Ft&&e.setBlock(t,i+a,r,D.WOOD);const o=s-4;for(let a=o;a<=s+2;a++){const l=a<=s-1?3:a===s?2:1;for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){if(c===0&&u===0&&a<s||Math.abs(c)===l&&Math.abs(u)===l&&Math.random()<.5)continue;const f=t+c,h=i+a,p=r+u;f>=0&&f<Pe&&h>=0&&h<Ft&&p>=0&&p<Pe&&e.getBlock(f,h,p)===D.AIR&&e.setBlock(f,h,p,D.LEAVES)}}for(let a=0;a<3;a++){const l=t+(Math.random()>.5?2:-2),c=i+o-Math.floor(Math.random()*3),u=r+(Math.random()>.5?2:-2);l>=0&&l<Pe&&c>=0&&c<Ft&&u>=0&&u<Pe&&e.getBlock(l,c,u)===D.AIR&&e.setBlock(l,c,u,D.LEAVES)}}placeAcaciaTree(e,t,i,r){const s=5+Math.floor(Math.random()*3);for(let o=0;o<s;o++)i+o<Ft&&e.setBlock(t,i+o,r,D.WOOD);for(let o=s-1;o<=s+1;o++){const a=o===s?3:2;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++){if(l===0&&c===0&&o<s+1||o===s-1&&Math.abs(l)+Math.abs(c)>3||o===s+1&&Math.abs(l)+Math.abs(c)>2)continue;const u=t+l,f=i+o,h=r+c;u>=0&&u<Pe&&f>=0&&f<Ft&&h>=0&&h<Pe&&e.getBlock(u,f,h)===D.AIR&&e.setBlock(u,f,h,D.LEAVES)}}}placeCactus(e,t,i,r){const s=2+Math.floor(Math.random()*3);for(let o=0;o<s;o++)i+o<Ft&&e.setBlock(t,i+o,r,D.CACTUS)}}class SC{chunks=new Map;terrainGenerator;biomeGenerator;structureGenerator;dirtyQueue=new Set;seed;constructor(e){this.seed=e,this.terrainGenerator=new _C(e),this.biomeGenerator=new lc,this.structureGenerator=new yC}chunkKey(e,t){return`${e},${t}`}getChunk(e,t){return this.chunks.get(this.chunkKey(e,t))?.chunk}getBiomeMap(e,t){return this.chunks.get(this.chunkKey(e,t))?.biomeMap}getBlock(e,t,i){const r=Math.floor(e/Pe),s=Math.floor(i/Pe),o=this.chunks.get(this.chunkKey(r,s))?.chunk;return o?o.getBlockWorld(e,t,i):0}setBlock(e,t,i,r){const s=Math.floor(e/Pe),o=Math.floor(i/Pe),a=this.chunks.get(this.chunkKey(s,o))?.chunk;if(!a)return;a.setBlockWorld(e,t,i,r),this.dirtyQueue.add(this.chunkKey(s,o));const l=e-s*Pe,c=i-o*Pe;l===0&&this.dirtyQueue.add(this.chunkKey(s-1,o)),l===Pe-1&&this.dirtyQueue.add(this.chunkKey(s+1,o)),c===0&&this.dirtyQueue.add(this.chunkKey(s,o-1)),c===Pe-1&&this.dirtyQueue.add(this.chunkKey(s,o+1))}getBiomeAt(e,t){return this.biomeGenerator.getBiomeAt(e,t)}update(e,t){const i=Math.floor(e/Pe),r=Math.floor(t/Pe);for(let l=-Cr;l<=Cr;l++)for(let c=-Cr;c<=Cr;c++){if(l*l+c*c>Cr*Cr)continue;const u=i+l,f=r+c,h=this.chunkKey(u,f);if(!this.chunks.has(h)){const p=new cd(u,f),g=this.biomeGenerator.generateBiomeMap(u,f);this.terrainGenerator.generateChunk(p,g),this.structureGenerator.generateStructures(p,g),this.chunks.set(h,{chunk:p,biomeMap:g}),this.dirtyQueue.add(h)}}const s=Cr+2;for(const[l,c]of this.chunks){const u=c.chunk.chunkX-i,f=c.chunk.chunkZ-r;u*u+f*f>s*s&&(this.chunks.delete(l),this.dirtyQueue.delete(l))}const o=[];let a=0;for(const l of this.dirtyQueue){if(a>=$w)break;o.push(l),this.dirtyQueue.delete(l),a++}return o}getDirtyChunkKeys(){return this.dirtyQueue}markDirty(e,t){this.dirtyQueue.add(this.chunkKey(e,t))}getAllChunks(){const e=new Map;for(const[t,i]of this.chunks)e.set(t,i.chunk);return e}getTerrainGenerator(){return this.terrainGenerator}getBiomeGenerator(){return this.biomeGenerator}getSeed(){return this.seed}getNeighborVoxels(e,t){return[this.chunks.get(this.chunkKey(e+1,t))?.chunk.voxels??null,this.chunks.get(this.chunkKey(e-1,t))?.chunk.voxels??null,this.chunks.get(this.chunkKey(e,t+1))?.chunk.voxels??null,this.chunks.get(this.chunkKey(e,t-1))?.chunk.voxels??null]}getNeighborBiomeMaps(e,t){return[this.chunks.get(this.chunkKey(e+1,t))?.biomeMap??null,this.chunks.get(this.chunkKey(e-1,t))?.biomeMap??null,this.chunks.get(this.chunkKey(e,t+1))?.biomeMap??null,this.chunks.get(this.chunkKey(e,t-1))?.biomeMap??null]}}function cg(n,e,t,i,r,s){return{minX:n-i,minY:e-r,minZ:t-s,maxX:n+i,maxY:e+r,maxZ:t+s}}function xC(n,e){return n.minX<e.maxX&&n.maxX>e.minX&&n.minY<e.maxY&&n.maxY>e.minY&&n.minZ<e.maxZ&&n.maxZ>e.minZ}function fd(n,e,t,i){const r=e.x,s=e.y,o=e.z;let a=Math.floor(n.x),l=Math.floor(n.y),c=Math.floor(n.z);const u=r>0?1:-1,f=s>0?1:-1,h=o>0?1:-1,p=r!==0?Math.abs(1/r):1/0,g=s!==0?Math.abs(1/s):1/0,y=o!==0?Math.abs(1/o):1/0;let m=r!==0?(r>0?a+1-n.x:n.x-a)*p:1/0,d=s!==0?(s>0?l+1-n.y:n.y-l)*g:1/0,v=o!==0?(o>0?c+1-n.z:n.z-c)*y:1/0,_=a,E=l,w=c,S=0;for(let T=0;T<t*3;T++){if(i(a,l,c))return{hit:!0,blockX:a,blockY:l,blockZ:c,prevX:_,prevY:E,prevZ:w,normalX:_-a,normalY:E-l,normalZ:w-c,distance:S};if(_=a,E=l,w=c,m<d)if(m<v){if(S=m,S>t)break;a+=u,m+=p}else{if(S=v,S>t)break;c+=h,v+=y}else if(d<v){if(S=d,S>t)break;l+=f,d+=g}else{if(S=v,S>t)break;c+=h,v+=y}}return{hit:!1,blockX:a,blockY:l,blockZ:c,prevX:_,prevY:E,prevZ:w,normalX:0,normalY:0,normalZ:0,distance:S}}class Ku{position={x:0,y:40,z:0};velocity={x:0,y:0,z:0};yaw=0;pitch=0;onGround=!1;isSwimming=!1;isSprinting=!1;isDiving=!1;inputAccel={x:0,y:0,z:0};getBlock;constructor(e){this.getBlock=e}getAABB(){return cg(this.position.x,this.position.y+ng/2,this.position.z,tg/2,ng/2,tg/2)}getEyePosition(){return{x:this.position.x,y:this.position.y+ig,z:this.position.z}}getLookDirection(){return{x:-Math.sin(this.yaw)*Math.cos(this.pitch),y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*Math.cos(this.pitch)}}static findSurfaceY(e,t,i){for(let s=0;s<=16;s++)for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++){if(Math.abs(o)!==s&&Math.abs(a)!==s&&s>0)continue;const l=Math.floor(t)+o,c=Math.floor(i)+a;for(let u=yn+1;u<64;u++){const f=e(l,u,c);if(jn(f)){const h=e(l,u+1,c),p=e(l,u+2,c);if(!jn(h)&&!jn(p))return u+1}}}for(let s=63;s>=0;s--){const o=e(Math.floor(t),s,Math.floor(i));if(jn(o))return Math.max(s+1,yn+1)}return yn+2}static findLandSpawn(e,t,i){for(let s=0;s<=32;s++)for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++){if(Math.abs(o)!==s&&Math.abs(a)!==s&&s>0)continue;const l=Math.floor(t)+o,c=Math.floor(i)+a;for(let u=yn+1;u<64;u++){const f=e(l,u,c);if(jn(f)){const h=e(l,u+1,c),p=e(l,u+2,c);if(!jn(h)&&!jn(p))return{x:l+.5,y:u+1,z:c+.5}}}}return{x:t+.5,y:yn+2,z:i+.5}}isInWater(e,t,i){return this.getBlock(Math.floor(e),Math.floor(t),Math.floor(i))===D.WATER}getWaterSurfaceY(){for(let e=63;e>=0;e--)if(this.getBlock(Math.floor(this.position.x),e,Math.floor(this.position.z))===D.WATER&&this.getBlock(Math.floor(this.position.x),e+1,Math.floor(this.position.z))!==D.WATER)return e+1;return-1/0}update(e){const t=this.position.y+.1,i=this.position.y+1,r=this.position.y+ig,s=this.isInWater(this.position.x,t,this.position.z),o=this.isInWater(this.position.x,i,this.position.z),a=this.isInWater(this.position.x,r,this.position.z);this.isSwimming=o||a,this.isSwimming?this.updateSwimming(e,a):s?(this.velocity.y+=eg*e,this.velocity.y=Math.max(this.velocity.y,-50),this.velocity.x*=Math.max(0,1-1.5*e),this.velocity.z*=Math.max(0,1-1.5*e)):(this.velocity.y+=eg*e,this.velocity.y=Math.max(this.velocity.y,-50)),this.moveWithCollision(e)}updateSwimming(e,t){const i=this.getWaterSurfaceY(),r=4;this.velocity.x*=Math.max(0,1-r*e),this.velocity.y*=Math.max(0,1-r*e),this.velocity.z*=Math.max(0,1-r*e),this.velocity.x+=this.inputAccel.x*e,this.velocity.y+=this.inputAccel.y*e,this.velocity.z+=this.inputAccel.z*e;const s=i-this.position.y;if(s>0){const l=Math.min(12,4+s*2);this.velocity.y+=l*e}this.position.y>=i-.5&&this.velocity.y>0&&!t&&(this.velocity.y*=.8,this.position.y+this.velocity.y*e>i&&(this.velocity.y=Math.min(this.velocity.y,1)));const o=3.5,a=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z);a>o&&(this.velocity.x*=o/a,this.velocity.z*=o/a),this.velocity.y=Math.max(-5,Math.min(this.velocity.y,4)),this.onGround=!1}moveWithCollision(e){const t=this.velocity.x*e,i=this.velocity.y*e,r=this.velocity.z*e;this.position.x+=t,this.checkCollision()&&(this.tryStepUp(t,0,0)||(this.position.x-=t,this.velocity.x=0)),this.position.y+=i,this.checkCollision()?(this.position.y-=i,i<0&&(this.onGround=!0),this.velocity.y=0):this.isSwimming||(this.onGround=!1),this.position.z+=r,this.checkCollision()&&(this.tryStepUp(0,0,r)||(this.position.z-=r,this.velocity.z=0))}tryStepUp(e,t,i){if(Math.sqrt(e*e+i*i)<.001)return!1;const o=this.isInWater(this.position.x,this.position.y+.5,this.position.z)||this.isInWater(this.position.x,this.position.y+1.5,this.position.z)||this.isInWater(this.position.x,this.position.y-.5,this.position.z)?1.1:.6,a=this.position.y;return this.position.y+=o,this.checkCollision()?(this.position.y=a,!1):!0}checkCollision(){const e=this.getAABB(),t=Math.floor(e.minX),i=Math.floor(e.maxX),r=Math.floor(e.minY),s=Math.floor(e.maxY),o=Math.floor(e.minZ),a=Math.floor(e.maxZ);for(let l=t;l<=i;l++)for(let c=r;c<=s;c++)for(let u=o;u<=a;u++)if(jn(this.getBlock(l,c,u))){const f=cg(l+.5,c+.5,u+.5,.5,.5,.5);if(xC(e,f))return!0}return!1}jump(){this.isSwimming?this.velocity.y=3.5:this.onGround&&(this.velocity.y=8.5,this.onGround=!1)}dive(){this.isSwimming&&(this.velocity.y=-3.5)}}class EC{player;input;renderer;walkSpeed=4.317;sprintSpeed=5.612;swimSpeed=2.8;swimAccel=18;mouseSensitivity=.002;targetFov=75;currentFov=75;constructor(e,t,i){this.player=e,this.input=t,this.renderer=i,i.getDomElement().addEventListener("click",()=>{t.isPointerLocked()||t.requestPointerLock()})}update(e){this.input.isPointerLocked()&&(this.player.yaw-=this.input.getMouseDeltaX()*this.mouseSensitivity,this.player.pitch-=this.input.getMouseDeltaY()*this.mouseSensitivity,this.player.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.player.pitch))),this.player.isSprinting=this.input.isKeyDown("ShiftLeft")&&!this.player.isSwimming;const t={x:-Math.sin(this.player.yaw),z:-Math.cos(this.player.yaw)},i={x:Math.cos(this.player.yaw),z:-Math.sin(this.player.yaw)};let r=0,s=0;this.input.isKeyDown("KeyW")&&(r+=t.x,s+=t.z),this.input.isKeyDown("KeyS")&&(r-=t.x,s-=t.z),this.input.isKeyDown("KeyA")&&(r-=i.x,s-=i.z),this.input.isKeyDown("KeyD")&&(r+=i.x,s+=i.z);const o=Math.sqrt(r*r+s*s);if(this.player.isSwimming){o>0&&(r=r/o*this.swimAccel,s=s/o*this.swimAccel);let l=0;this.input.isKeyDown("Space")&&(l=this.swimAccel*.8),this.input.isKeyDown("ShiftLeft")&&(l=-this.swimAccel*.6),this.player.inputAccel={x:r,y:l,z:s}}else{const l=this.player.isSprinting?this.sprintSpeed:this.walkSpeed;o>0&&(r=r/o*l,s=s/o*l),this.player.velocity.x=r,this.player.velocity.z=s,this.player.inputAccel={x:0,y:0,z:0},this.input.isKeyDown("Space")&&this.player.jump()}this.targetFov=this.player.isSprinting?82:75,this.currentFov+=(this.targetFov-this.currentFov)*e*8,this.renderer.setFOV(this.currentFov);const a=this.player.getEyePosition();this.renderer.setMainCameraPosition(a.x,a.y,a.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch)}}class MC{player;input;renderer;headBobPhase=0;headBobAmplitude=.035;shakeIntensity=0;constructor(e,t,i){this.player=e,this.input=t,this.renderer=i}update(e){const t=this.player.velocity;if(Math.sqrt(t.x*t.x+t.z*t.z)>.5&&(this.player.onGround||this.player.isSwimming)){const s=this.player.isSprinting?11:8;this.headBobPhase+=e*s;const o=Math.sin(this.headBobPhase)*this.headBobAmplitude,a=Math.cos(this.headBobPhase*.5)*this.headBobAmplitude*.4,l=this.player.getEyePosition();this.renderer.setMainCameraPosition(l.x+a,l.y+o,l.z)}this.shakeIntensity*=.9}addShake(e){this.shakeIntensity=Math.min(this.shakeIntensity+e,.3)}}const ug={[D.GRASS]:[.3,.69,.31],[D.DIRT]:[.47,.33,.28],[D.STONE]:[.62,.62,.62],[D.SAND]:[.99,.85,.21],[D.SANDSTONE]:[.91,.78,.42],[D.SNOW]:[.98,.98,.98],[D.ICE]:[.7,.9,.99],[D.MUD]:[.31,.2,.18],[D.CRYSTAL]:[.48,.12,.64],[D.GLOWSTONE]:[1,.56,0],[D.WOOD]:[.43,.3,.25],[D.LEAVES]:[.18,.49,.2],[D.CACTUS]:[.18,.49,.2],[D.BEDROCK]:[.13,.13,.13],[D.COAL_ORE]:[.26,.26,.26],[D.IRON_ORE]:[.62,.62,.62],[D.GOLD_ORE]:[.62,.62,.62],[D.DIAMOND_ORE]:[.62,.62,.62],[D.SPRUCE_WOOD]:[.31,.2,.18],[D.SPRUCE_LEAVES]:[.11,.37,.13],[D.PACKED_ICE]:[.51,.83,.98],[D.PORTAL_FRAME]:[.42,.11,.6]};class TC{player;input;worldManager;survivalStats=null;particleSystem=null;itemDropManager=null;breakProgress=0;targetBlock=null;breakParticlesTimer=0;lastBreakBlockId=D.AIR;lastPlaceTime=0;constructor(e,t,i){this.player=e,this.input=t,this.worldManager=i}setSurvivalStats(e){this.survivalStats=e}setParticleSystem(e){this.particleSystem=e}setItemDropManager(e){this.itemDropManager=e}update(e){if(!this.input.isPointerLocked())return;const t=this.player.getEyePosition(),i=this.player.getLookDirection();if(this.targetBlock=fd(t,i,Zw,(r,s,o)=>jn(this.worldManager.getBlock(r,s,o))),this.input.isMouseButtonDown(0)&&this.targetBlock.hit){const r=this.worldManager.getBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ),s=ad[r];if(s&&s.hardness>0){if(r!==this.lastBreakBlockId&&(this.lastBreakBlockId=r),this.breakProgress+=e/s.hardness,this.breakParticlesTimer+=e,this.particleSystem&&this.breakParticlesTimer>.1){this.breakParticlesTimer=0;const o=ug[r]??[.5,.5,.5];this.particleSystem.emit(this.targetBlock.blockX+.5,this.targetBlock.blockY+.5,this.targetBlock.blockZ+.5,3,{speed:1.5,color:o,life:.6,size:.08,spread:.8})}this.breakProgress>=1&&(this.breakBlock(r),this.breakProgress=0)}}else this.breakProgress=0,this.breakParticlesTimer=0;if(this.input.isMouseButtonDown(2)&&this.targetBlock.hit){const r=performance.now()/1e3;r-this.lastPlaceTime>.25&&(this.placeBlock(),this.lastPlaceTime=r)}if(this.input.isKeyJustPressed("KeyE")&&this.targetBlock.hit&&this.placeBlock(),this.input.isKeyJustPressed("KeyF")&&this.targetBlock.hit&&this.worldManager.getBlock(this.targetBlock.blockX,this.targetBlock.blockY,this.targetBlock.blockZ)===D.WATER&&this.survivalStats&&this.survivalStats.addThirst(15),this.input.isKeyJustPressed("KeyQ")){const r=hi.getState(),s=r.getSelectedItem();s&&this.itemDropManager&&(this.itemDropManager.dropItem(s.id,1,this.player.position.x,this.player.position.y+1.5,this.player.position.z,-Math.sin(this.player.yaw)*3,2,-Math.cos(this.player.yaw)*3),r.removeItem(r.selected,1))}}breakBlock(e){const t=this.targetBlock.blockX,i=this.targetBlock.blockY,r=this.targetBlock.blockZ;if(this.particleSystem){const s=ug[e]??[.5,.5,.5];this.particleSystem.emit(t+.5,i+.5,r+.5,20,{speed:3,color:s,life:.8,size:.12,spread:.5})}if(this.itemDropManager){const s=zw(e);this.itemDropManager.dropItems(s,t,i,r)}this.worldManager.setBlock(t,i,r,D.AIR)}placeBlock(){const e=hi.getState(),t=e.getSelectedItem();if(!t)return;const i=f_(t.id);if(!i||!i.isBlock||i.blockId===void 0)return;const r=this.targetBlock.prevX,s=this.targetBlock.prevY,o=this.targetBlock.prevZ,a=this.player.getAABB(),l={minX:r,minY:s,minZ:o,maxX:r+1,maxY:s+1,maxZ:o+1};(a.maxX<l.minX||a.minX>l.maxX||a.maxY<l.minY||a.minY>l.maxY||a.maxZ<l.minZ||a.minZ>l.maxZ)&&(this.worldManager.setBlock(r,s,o,i.blockId),e.removeItem(e.selected,1),this.particleSystem&&this.particleSystem.emit(r+.5,s+.5,o+.5,8,{speed:1,color:[.8,.8,.8],life:.4,size:.06,spread:.6}))}getBreakProgress(){return this.breakProgress}getTargetBlock(){return this.targetBlock}}class AC{health=100;hunger=100;thirst=100;stamina=100;temperature=.2;mana=100;maxMana=100;isDead=!1;currentBiome=Fe.PLAINS;isSprinting=!1;update(e){if(this.isDead)return;this.hunger-=1*e/60,this.thirst-=1.5*e/60,this.isSprinting?this.stamina-=20*e:this.stamina+=10*e;const t=ua[this.currentBiome].temperature;this.temperature+=(t-this.temperature)*e*.1,this.mana=Math.min(this.maxMana,this.mana+5*e),this.hunger=Math.max(0,Math.min(100,this.hunger)),this.thirst=Math.max(0,Math.min(100,this.thirst)),this.stamina=Math.max(0,Math.min(100,this.stamina)),this.hunger<20&&(this.health-=2*e),this.thirst<20&&(this.health-=2*e),this.health=Math.max(0,Math.min(100,this.health)),this.health<=0&&(this.isDead=!0)}setBiome(e){this.currentBiome=e}setSprinting(e){this.isSprinting=e}canSprint(){return this.stamina>=5}addThirst(e){this.thirst=Math.min(100,this.thirst+e)}addHealth(e){this.health=Math.min(100,this.health+e)}respawn(){this.health=100,this.hunger=100,this.thirst=100,this.stamina=100,this.isDead=!1}}var Pt=(n=>(n[n.IDLE=0]="IDLE",n[n.WANDER=1]="WANDER",n[n.CHASE=2]="CHASE",n[n.ATTACK=3]="ATTACK",n[n.DEAD=4]="DEAD",n))(Pt||{}),Tt=(n=>(n[n.CRAWLER=0]="CRAWLER",n[n.SLIME=1]="SLIME",n[n.ASH_WRAITH=2]="ASH_WRAITH",n[n.CRYSTAL_GOLEM=3]="CRYSTAL_GOLEM",n[n.FROST_WOLF=4]="FROST_WOLF",n))(Tt||{});const fg={0:{maxHp:20,attackDamage:6,attackCooldown:1,wanderSpeed:1.5,chaseSpeed:4,aggroRange:16,deaggroRange:24,hitboxWidth:.6,hitboxHeight:.4},1:{maxHp:16,attackDamage:4,attackCooldown:1.5,wanderSpeed:1,chaseSpeed:3,aggroRange:12,deaggroRange:20,hitboxWidth:.8,hitboxHeight:.8},2:{maxHp:40,attackDamage:12,attackCooldown:1.2,wanderSpeed:2,chaseSpeed:5.5,aggroRange:20,deaggroRange:30,hitboxWidth:.6,hitboxHeight:1.6},3:{maxHp:80,attackDamage:20,attackCooldown:2,wanderSpeed:.8,chaseSpeed:2.5,aggroRange:14,deaggroRange:22,hitboxWidth:1,hitboxHeight:2},4:{maxHp:35,attackDamage:10,attackCooldown:.8,wanderSpeed:3,chaseSpeed:7,aggroRange:20,deaggroRange:32,hitboxWidth:.7,hitboxHeight:.8}};class _a{type;hp;maxHp;state=Pt.IDLE;position;target={x:0,y:0,z:0};instanceId=-1;stateTimer=0;attackCooldownTimer=0;deadTimer=0;constructor(e,t){this.type=e;const i=fg[e];this.hp=i.maxHp,this.maxHp=i.maxHp,this.position={...t},this.stateTimer=3+Math.random()*5}updateFSM(e,t,i){if(this.state===Pt.DEAD){this.deadTimer+=e;return}const r=fg[this.type],s=Math.sqrt((this.position.x-t.x)**2+(this.position.y-t.y)**2+(this.position.z-t.z)**2);switch(this.attackCooldownTimer=Math.max(0,this.attackCooldownTimer-e),this.stateTimer-=e,this.state){case Pt.IDLE:this.stateTimer<=0&&(this.state=Pt.WANDER,this.stateTimer=3+Math.random()*5,this.target={x:this.position.x+(Math.random()-.5)*10,y:this.position.y,z:this.position.z+(Math.random()-.5)*10}),s<r.aggroRange&&i(this.position,t)&&(this.state=Pt.CHASE);break;case Pt.WANDER:this.stateTimer<=0&&(this.state=Pt.IDLE,this.stateTimer=2+Math.random()*6),s<r.aggroRange&&i(this.position,t)&&(this.state=Pt.CHASE);break;case Pt.CHASE:this.target={...t},s<1.5&&(this.state=Pt.ATTACK),s>r.deaggroRange&&(this.state=Pt.WANDER,this.stateTimer=3+Math.random()*4,this.target={x:this.position.x+(Math.random()-.5)*10,y:this.position.y,z:this.position.z+(Math.random()-.5)*10});break;case Pt.ATTACK:this.attackCooldownTimer<=0&&(this.attackCooldownTimer=this.getAttackCooldown(),this.state=Pt.CHASE),s>2&&(this.state=Pt.CHASE);break}this.hp<=0&&(this.state=Pt.DEAD,this.deadTimer=0)}getSpeed(){switch(this.state){case Pt.WANDER:return this.getWanderSpeed();case Pt.CHASE:return this.getChaseSpeed();default:return 0}}takeDamage(e){this.hp-=e,this.hp<=0&&(this.hp=0,this.state=Pt.DEAD,this.deadTimer=0)}}class wC extends _a{constructor(e){super(Tt.CRAWLER,e)}getAttackDamage(){return 6}getAttackCooldown(){return 1}getWanderSpeed(){return 1.5}getChaseSpeed(){return 4}onDeath(){}}class CC extends _a{constructor(e){super(Tt.SLIME,e)}getAttackDamage(){return 4}getAttackCooldown(){return 1.5}getWanderSpeed(){return 1}getChaseSpeed(){return 3}onDeath(){}}class RC extends _a{constructor(e){super(Tt.ASH_WRAITH,e)}getAttackDamage(){return 12}getAttackCooldown(){return 1.2}getWanderSpeed(){return 2}getChaseSpeed(){return 5.5}onDeath(){}}class bC extends _a{constructor(e){super(Tt.CRYSTAL_GOLEM,e)}getAttackDamage(){return 20}getAttackCooldown(){return 2}getWanderSpeed(){return .8}getChaseSpeed(){return 2.5}onDeath(){}}class LC extends _a{constructor(e){super(Tt.FROST_WOLF,e)}getAttackDamage(){return 10}getAttackCooldown(){return .8}getWanderSpeed(){return 3}getChaseSpeed(){return 7}onDeath(){}}class hd{static table={[Tt.CRAWLER]:[{itemId:P.STICK,minCount:1,maxCount:3,chance:.5},{itemId:P.COAL,minCount:1,maxCount:2,chance:.3}],[Tt.SLIME]:[{itemId:P.SLIME_BALL,minCount:1,maxCount:2,chance:1}],[Tt.ASH_WRAITH]:[{itemId:P.ASH,minCount:2,maxCount:4,chance:.4},{itemId:P.GOLD_INGOT,minCount:1,maxCount:1,chance:.25}],[Tt.CRYSTAL_GOLEM]:[{itemId:P.CRYSTAL_SHARD,minCount:3,maxCount:6,chance:.7},{itemId:P.DIAMOND,minCount:1,maxCount:1,chance:.2}],[Tt.FROST_WOLF]:[{itemId:P.LEATHER,minCount:1,maxCount:2,chance:.6},{itemId:P.RAW_MEAT,minCount:1,maxCount:2,chance:.5}]};static rollLoot(e){const t=hd.table[e]||[],i=[];for(const r of t)if(Math.random()<r.chance){const s=r.minCount+Math.floor(Math.random()*(r.maxCount-r.minCount+1));i.push({itemId:r.itemId,count:s})}return i}}class PC{creatures=[];frameCount=0;instancedMeshes=new Map;getBlock;playerPos={x:0,y:0,z:0};onLootDrop=null;constructor(e,t){this.getBlock=t;const i={[Tt.CRAWLER]:5025616,[Tt.SLIME]:7798531,[Tt.ASH_WRAITH]:16733986,[Tt.CRYSTAL_GOLEM]:10233776,[Tt.FROST_WOLF]:9489145};for(const r of[Tt.CRAWLER,Tt.SLIME,Tt.ASH_WRAITH,Tt.CRYSTAL_GOLEM,Tt.FROST_WOLF]){const s=new Zr(.6,.6,.6),o=new od({color:i[r]}),a=new rd(s,o,rg);a.count=0,a.frustumCulled=!1,e.add(a),this.instancedMeshes.set(r,a)}}setPlayerPosition(e){this.playerPos=e}setOnLootDrop(e){this.onLootDrop=e}spawnCreature(e,t){if(this.creatures.length>=rg*5)return;let i;switch(e){case Tt.CRAWLER:i=new wC(t);break;case Tt.SLIME:i=new CC(t);break;case Tt.ASH_WRAITH:i=new RC(t);break;case Tt.CRYSTAL_GOLEM:i=new bC(t);break;case Tt.FROST_WOLF:i=new LC(t);break;default:return}this.creatures.push(i)}update(e){this.frameCount++;const t=this.frameCount%Qw===0,i=(r,s)=>{const o={x:s.x-r.x,y:s.y-r.y,z:s.z-r.z},a=Math.sqrt(o.x*o.x+o.y*o.y+o.z*o.z);return a===0?!0:(o.x/=a,o.y/=a,o.z/=a,!fd(r,o,a,(c,u,f)=>jn(this.getBlock(c,u,f))).hit)};for(let r=this.creatures.length-1;r>=0;r--){const s=this.creatures[r];t&&s.updateFSM(e,this.playerPos,i);const o=s.getSpeed()*e;if(o>0&&s.state!==Pt.DEAD&&s.state!==Pt.IDLE){const a=s.target.x-s.position.x,l=s.target.z-s.position.z,c=Math.sqrt(a*a+l*l);c>.5&&(s.position.x+=a/c*o,s.position.z+=l/c*o)}if(s.state===Pt.DEAD&&s.deadTimer>.5){const a=hd.rollLoot(s.type);if(this.onLootDrop)for(const l of a)this.onLootDrop(l.itemId,l.count);s.onDeath(),this.creatures.splice(r,1)}}this.updateInstancedMeshes()}updateInstancedMeshes(){const e=new Gt;for(const[t,i]of this.instancedMeshes){const r=this.creatures.filter(s=>s.type===t&&s.state!==Pt.DEAD);i.count=r.length;for(let s=0;s<r.length;s++){const o=r[s];if(e.position.set(o.position.x,o.position.y,o.position.z),o.state===Pt.DEAD){const a=Math.max(0,1-o.deadTimer*2);e.scale.set(1,a,1)}else e.scale.set(1,1,1);e.updateMatrix(),i.setMatrixAt(s,e.matrix)}i.instanceMatrix.needsUpdate=!0}}getCreatures(){return this.creatures}getCreatureAt(e,t,i){for(const r of this.creatures){const s=r.position.x-e,o=r.position.z-t;if(s*s+o*o<i*i)return r}return null}}const DC={[D.GRASS]:5025616,[D.DIRT]:7951688,[D.STONE]:10395294,[D.SAND]:16635957,[D.SANDSTONE]:15255658,[D.SNOW]:16448250,[D.ICE]:11789820,[D.MUD]:5125166,[D.CRYSTAL]:8069026,[D.GLOWSTONE]:16748288,[D.WOOD]:7162945,[D.LEAVES]:3046706,[D.CACTUS]:3046706,[D.BEDROCK]:2171169,[D.COAL_ORE]:4342338,[D.IRON_ORE]:15255658,[D.GOLD_ORE]:16766720,[D.DIAMOND_ORE]:48340,[D.SPRUCE_WOOD]:5125166,[D.SPRUCE_LEAVES]:1793568,[D.PACKED_ICE]:8508666,100:12632256,101:8947848,102:5592405,103:10233776,104:8069026,105:48340,106:16766720,113:9268835,114:7162945,115:16739584,116:7162945,117:4342338,118:16739584,119:9268835,120:7798531,121:16733986,122:10233776};class NC{items=[];scene;instancedMesh;dummy;maxItems=200;pickupRadius=1.8;pickupDelay=.5;maxLife=300;onItemPickup=null;getBlock;constructor(e,t){this.scene=e,this.getBlock=t,this.dummy=new Gt;const i=new Zr(.3,.3,.3),r=new od({color:16777215});this.instancedMesh=new rd(i,r,this.maxItems),this.instancedMesh.count=0,this.instancedMesh.frustumCulled=!1,this.instancedMesh.instanceColor=new Jf(new Float32Array(this.maxItems*3),3),e.add(this.instancedMesh)}setOnItemPickup(e){this.onItemPickup=e}dropItem(e,t,i,r,s,o=0,a=0,l=0){this.items.length>=this.maxItems&&this.items.shift();const c=1.5,u=o+(Math.random()-.5)*c,f=a+Math.random()*2+1,h=l+(Math.random()-.5)*c;this.items.push({id:e,count:t,position:new G(i,r,s),velocity:new G(u,f,h),spawnTime:performance.now()/1e3,life:0,collected:!1})}dropItems(e,t,i,r){for(const s of e)this.dropItem(s.id,s.count,t+.5,i+.5,r+.5)}update(e,t,i,r){for(let o=this.items.length-1;o>=0;o--){const a=this.items[o];if(a.life+=e,a.life>this.maxLife){this.items.splice(o,1);continue}a.velocity.y+=-18*e,a.position.x+=a.velocity.x*e,a.position.y+=a.velocity.y*e,a.position.z+=a.velocity.z*e;const l=this.getGroundY(a.position.x,a.position.y,a.position.z);if(a.position.y<l+.15&&(a.position.y=l+.15,a.velocity.y=0,a.velocity.x*=.9,a.velocity.z*=.9),a.velocity.x*=1-2*e,a.velocity.z*=1-2*e,a.life>this.pickupDelay&&!a.collected){const c=a.position.x-t,u=a.position.y-i,f=a.position.z-r,h=Math.sqrt(c*c+u*u+f*f);if(h<this.pickupRadius)if(h>.3)a.position.x-=c/h*8*e,a.position.y-=u/h*8*e,a.position.z-=f/h*8*e;else{a.collected=!0,this.onItemPickup&&this.onItemPickup(a.id,a.count),this.items.splice(o,1);continue}}}for(let o=0;o<this.items.length;o++){const a=this.items[o],l=Math.sin(a.life*3+o)*.05,c=a.life*2;this.dummy.position.set(a.position.x,a.position.y+l,a.position.z),this.dummy.rotation.set(0,c,0),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(o,this.dummy.matrix);const u=new Te(DC[a.id]??6710886);this.instancedMesh.instanceColor.setXYZ(o,u.r,u.g,u.b)}this.instancedMesh.count=this.items.length,this.instancedMesh.count>0&&(this.instancedMesh.instanceMatrix.needsUpdate=!0,this.instancedMesh.instanceColor.needsUpdate=!0)}getGroundY(e,t,i){const r=Math.floor(e),s=Math.floor(i);for(let o=Math.floor(t);o>=0;o--){const a=this.getBlock(r,o,s);if(a!==0&&a!==D.WATER&&a!==D.LAVA&&a!==D.AIR&&a!==D.LILY_PAD&&a!==D.PORTAL_ACTIVE)return o+1}return 0}getItemCount(){return this.items.length}}class IC{bullets=[];mesh;ringIndex=0;constructor(e){const t=new Pc(.05,4,4),i=new ed({color:16739584});this.mesh=new rd(t,i,Xu),this.mesh.count=0,this.mesh.frustumCulled=!1,e.add(this.mesh);for(let r=0;r<Xu;r++)this.bullets.push({x:0,y:-1e3,z:0,vx:0,vy:0,vz:0,alive:!1,life:0})}fire(e,t,i=80){const r=this.bullets[this.ringIndex];r.x=e.x,r.y=e.y,r.z=e.z,r.vx=t.x*i,r.vy=t.y*i,r.vz=t.z*i,r.alive=!0,r.life=3,this.ringIndex=(this.ringIndex+1)%Xu}update(e,t){const i=new Gt;let r=0;for(const s of this.bullets)if(s.alive){if(s.life-=e,s.life<=0){s.alive=!1;continue}if(s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,t(s.x,s.y,s.z)){s.alive=!1;continue}i.position.set(s.x,s.y,s.z),i.updateMatrix(),this.mesh.setMatrixAt(r,i.matrix),r++}this.mesh.count=r,r>0&&(this.mesh.instanceMatrix.needsUpdate=!0)}getActiveBullets(){return this.bullets.filter(e=>e.alive)}}const OC={name:"Fist",type:"melee",damage:5,range:2.5,cooldown:.8,ammoPerShot:0,manaCost:0};class UC{currentWeapon=OC;cooldownTimer=0;input;player;bulletPool;particleSystem;renderer;weaponBobPhase=0;weaponMesh=null;constructor(e,t,i,r,s){this.input=e,this.player=t,this.bulletPool=i,this.particleSystem=r,this.renderer=s}equip(e){this.currentWeapon=e}update(e,t){this.cooldownTimer=Math.max(0,this.cooldownTimer-e),this.input.isMouseButtonDown(0)&&this.cooldownTimer<=0&&this.attack(t);const i=this.player.velocity;if(Math.sqrt(i.x*i.x+i.z*i.z)>.5&&this.player.onGround){this.weaponBobPhase+=e*8;const s=Math.sin(this.weaponBobPhase)*.03,o=Math.cos(this.weaponBobPhase*.5)*.02;this.renderer.weaponCamera.position.set(.3+o,-.3+s,-.5)}else this.renderer.weaponCamera.position.set(.3,-.3,-.5)}attack(e){this.cooldownTimer=this.currentWeapon.cooldown;const t=this.player.getEyePosition(),i=this.player.getLookDirection();switch(this.currentWeapon.type){case"melee":this.meleeAttack(t,i,e);break;case"hitscan":this.hitscanAttack(t,i,e);break;case"magic":this.magicAttack(t,i);break}}meleeAttack(e,t,i){const r=fd(e,t,this.currentWeapon.range,(s,o,a)=>jn(i(s,o,a)));r.hit&&this.particleSystem.emit(r.blockX+.5,r.blockY+.5,r.blockZ+.5,5,{speed:1,color:[.7,.7,.7],life:.3})}hitscanAttack(e,t,i){this.bulletPool.fire(e,t),this.particleSystem.emit(e.x,e.y,e.z,3,{speed:.5,color:[1,.5,0],life:.1,size:.05})}magicAttack(e,t){this.particleSystem.emit(e.x+t.x,e.y+t.y,e.z+t.z,40,{speed:5,color:[.6,.2,1],life:1.5,size:.1,spread:.3})}getCurrentWeapon(){return this.currentWeapon}getCooldownProgress(){return 1-this.cooldownTimer/this.currentWeapon.cooldown}}class kC{entityManager;player;survivalStats;bulletPool;constructor(e,t,i,r){this.entityManager=e,this.player=t,this.survivalStats=i,this.bulletPool=r}update(e){const t=this.entityManager.getCreatures();for(const r of t){if(r.state!==2)continue;const s=r.position.x-this.player.position.x,o=r.position.z-this.player.position.z;Math.sqrt(s*s+o*o)<1.5&&r.attackCooldownTimer<=0&&this.survivalStats.addHealth(-r.getAttackDamage())}const i=this.bulletPool.getActiveBullets();for(const r of i)for(const s of t){if(s.state===4)continue;const o=s.position.x-r.x,a=s.position.y-r.y,l=s.position.z-r.z;if(Math.sqrt(o*o+a*a+l*l)<1){s.takeDamage(30),r.alive=!1;break}}}}function gl(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var E_={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,s){function o(c,u){if(!r[c]){if(!i[c]){var f=typeof gl=="function"&&gl;if(!u&&f)return f(c,!0);if(a)return a(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var p=r[c]={exports:{}};i[c][0].call(p.exports,function(g){var y=i[c][1][g];return o(y||g)},p,p.exports,t,i,r,s)}return r[c].exports}for(var a=typeof gl=="function"&&gl,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(t,i,r){(function(s){var o=s.MutationObserver||s.WebKitMutationObserver,a;if(o){var l=0,c=new o(g),u=s.document.createTextNode("");c.observe(u,{characterData:!0}),a=function(){u.data=l=++l%2}}else if(!s.setImmediate&&typeof s.MessageChannel<"u"){var f=new s.MessageChannel;f.port1.onmessage=g,a=function(){f.port2.postMessage(0)}}else"document"in s&&"onreadystatechange"in s.document.createElement("script")?a=function(){var m=s.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},s.document.documentElement.appendChild(m)}:a=function(){setTimeout(g,0)};var h,p=[];function g(){h=!0;for(var m,d,v=p.length;v;){for(d=p,p=[],m=-1;++m<v;)d[m]();v=p.length}h=!1}i.exports=y;function y(m){p.push(m)===1&&!h&&a()}}).call(this,typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,i,r){var s=t(1);function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];i.exports=f;function f(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,w!==o&&y(this,w)}f.prototype.catch=function(w){return this.then(null,w)},f.prototype.then=function(w,S){if(typeof w!="function"&&this.state===c||typeof S!="function"&&this.state===l)return this;var T=new this.constructor(o);if(this.state!==u){var U=this.state===c?w:S;p(T,U,this.outcome)}else this.queue.push(new h(T,w,S));return T};function h(w,S,T){this.promise=w,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}h.prototype.callFulfilled=function(w){a.resolve(this.promise,w)},h.prototype.otherCallFulfilled=function(w){p(this.promise,this.onFulfilled,w)},h.prototype.callRejected=function(w){a.reject(this.promise,w)},h.prototype.otherCallRejected=function(w){p(this.promise,this.onRejected,w)};function p(w,S,T){s(function(){var U;try{U=S(T)}catch(M){return a.reject(w,M)}U===w?a.reject(w,new TypeError("Cannot resolve promise with itself")):a.resolve(w,U)})}a.resolve=function(w,S){var T=m(g,S);if(T.status==="error")return a.reject(w,T.value);var U=T.value;if(U)y(w,U);else{w.state=c,w.outcome=S;for(var M=-1,C=w.queue.length;++M<C;)w.queue[M].callFulfilled(S)}return w},a.reject=function(w,S){w.state=l,w.outcome=S;for(var T=-1,U=w.queue.length;++T<U;)w.queue[T].callRejected(S);return w};function g(w){var S=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof S=="function")return function(){S.apply(w,arguments)}}function y(w,S){var T=!1;function U(Z){T||(T=!0,a.reject(w,Z))}function M(Z){T||(T=!0,a.resolve(w,Z))}function C(){S(M,U)}var V=m(C);V.status==="error"&&U(V.value)}function m(w,S){var T={};try{T.value=w(S),T.status="success"}catch(U){T.status="error",T.value=U}return T}f.resolve=d;function d(w){return w instanceof this?w:a.resolve(new this(o),w)}f.reject=v;function v(w){var S=new this(o);return a.reject(S,w)}f.all=_;function _(w){var S=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=w.length,U=!1;if(!T)return this.resolve([]);for(var M=new Array(T),C=0,V=-1,Z=new this(o);++V<T;)oe(w[V],V);return Z;function oe(F,W){S.resolve(F).then(te,function(se){U||(U=!0,a.reject(Z,se))});function te(se){M[W]=se,++C===T&&!U&&(U=!0,a.resolve(Z,M))}}}f.race=E;function E(w){var S=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=w.length,U=!1;if(!T)return this.resolve([]);for(var M=-1,C=new this(o);++M<T;)V(w[M]);return C;function V(Z){S.resolve(Z).then(function(oe){U||(U=!0,a.resolve(C,oe))},function(oe){U||(U=!0,a.reject(C,oe))})}}},{1:1}],3:[function(t,i,r){(function(s){typeof s.Promise!="function"&&(s.Promise=t(2))}).call(this,typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(t,i,r){var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x};function o(x,N){if(!(x instanceof N))throw new TypeError("Cannot call a class as a function")}function a(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var l=a();function c(){try{if(!l||!l.open)return!1;var x=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),N=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!x||N)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function u(x,N){x=x||[],N=N||{};try{return new Blob(x,N)}catch(I){if(I.name!=="TypeError")throw I;for(var b=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,k=new b,z=0;z<x.length;z+=1)k.append(x[z]);return k.getBlob(N.type)}}typeof Promise>"u"&&t(3);var f=Promise;function h(x,N){N&&x.then(function(b){N(null,b)},function(b){N(b)})}function p(x,N,b){typeof N=="function"&&x.then(N),typeof b=="function"&&x.catch(b)}function g(x){return typeof x!="string"&&(console.warn(x+" used as a key, but it is not a string."),x=String(x)),x}function y(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var m="local-forage-detect-blob-support",d=void 0,v={},_=Object.prototype.toString,E="readonly",w="readwrite";function S(x){for(var N=x.length,b=new ArrayBuffer(N),k=new Uint8Array(b),z=0;z<N;z++)k[z]=x.charCodeAt(z);return b}function T(x){return new f(function(N){var b=x.transaction(m,w),k=u([""]);b.objectStore(m).put(k,"key"),b.onabort=function(z){z.preventDefault(),z.stopPropagation(),N(!1)},b.oncomplete=function(){var z=navigator.userAgent.match(/Chrome\/(\d+)/),I=navigator.userAgent.match(/Edge\//);N(I||!z||parseInt(z[1],10)>=43)}}).catch(function(){return!1})}function U(x){return typeof d=="boolean"?f.resolve(d):T(x).then(function(N){return d=N,d})}function M(x){var N=v[x.name],b={};b.promise=new f(function(k,z){b.resolve=k,b.reject=z}),N.deferredOperations.push(b),N.dbReady?N.dbReady=N.dbReady.then(function(){return b.promise}):N.dbReady=b.promise}function C(x){var N=v[x.name],b=N.deferredOperations.pop();if(b)return b.resolve(),b.promise}function V(x,N){var b=v[x.name],k=b.deferredOperations.pop();if(k)return k.reject(N),k.promise}function Z(x,N){return new f(function(b,k){if(v[x.name]=v[x.name]||le(),x.db)if(N)M(x),x.db.close();else return b(x.db);var z=[x.name];N&&z.push(x.version);var I=l.open.apply(l,z);N&&(I.onupgradeneeded=function(ne){var ue=I.result;try{ue.createObjectStore(x.storeName),ne.oldVersion<=1&&ue.createObjectStore(m)}catch(ce){if(ce.name==="ConstraintError")console.warn('The database "'+x.name+'" has been upgraded from version '+ne.oldVersion+" to version "+ne.newVersion+', but the storage "'+x.storeName+'" already exists.');else throw ce}}),I.onerror=function(ne){ne.preventDefault(),k(I.error)},I.onsuccess=function(){var ne=I.result;ne.onversionchange=function(ue){ue.target.close()},b(ne),C(x)}})}function oe(x){return Z(x,!1)}function F(x){return Z(x,!0)}function W(x,N){if(!x.db)return!0;var b=!x.db.objectStoreNames.contains(x.storeName),k=x.version<x.db.version,z=x.version>x.db.version;if(k&&(x.version!==N&&console.warn('The database "'+x.name+`" can't be downgraded from version `+x.db.version+" to version "+x.version+"."),x.version=x.db.version),z||b){if(b){var I=x.db.version+1;I>x.version&&(x.version=I)}return!0}return!1}function te(x){return new f(function(N,b){var k=new FileReader;k.onerror=b,k.onloadend=function(z){var I=btoa(z.target.result||"");N({__local_forage_encoded_blob:!0,data:I,type:x.type})},k.readAsBinaryString(x)})}function se(x){var N=S(atob(x.data));return u([N],{type:x.type})}function B(x){return x&&x.__local_forage_encoded_blob}function X(x){var N=this,b=N._initReady().then(function(){var k=v[N._dbInfo.name];if(k&&k.dbReady)return k.dbReady});return p(b,x,x),b}function j(x){M(x);for(var N=v[x.name],b=N.forages,k=0;k<b.length;k++){var z=b[k];z._dbInfo.db&&(z._dbInfo.db.close(),z._dbInfo.db=null)}return x.db=null,oe(x).then(function(I){return x.db=I,W(x)?F(x):I}).then(function(I){x.db=N.db=I;for(var ne=0;ne<b.length;ne++)b[ne]._dbInfo.db=I}).catch(function(I){throw V(x,I),I})}function ie(x,N,b,k){k===void 0&&(k=1);try{var z=x.db.transaction(x.storeName,N);b(null,z)}catch(I){if(k>0&&(!x.db||I.name==="InvalidStateError"||I.name==="NotFoundError"))return f.resolve().then(function(){if(!x.db||I.name==="NotFoundError"&&!x.db.objectStoreNames.contains(x.storeName)&&x.version<=x.db.version)return x.db&&(x.version=x.db.version+1),F(x)}).then(function(){return j(x).then(function(){ie(x,N,b,k-1)})}).catch(b);b(I)}}function le(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function J(x){var N=this,b={db:null};if(x)for(var k in x)b[k]=x[k];var z=v[b.name];z||(z=le(),v[b.name]=z),z.forages.push(N),N._initReady||(N._initReady=N.ready,N.ready=X);var I=[];function ne(){return f.resolve()}for(var ue=0;ue<z.forages.length;ue++){var ce=z.forages[ue];ce!==N&&I.push(ce._initReady().catch(ne))}var pe=z.forages.slice(0);return f.all(I).then(function(){return b.db=z.db,oe(b)}).then(function(_e){return b.db=_e,W(b,N._defaultConfig.version)?F(b):_e}).then(function(_e){b.db=z.db=_e,N._dbInfo=b;for(var Ne=0;Ne<pe.length;Ne++){var st=pe[Ne];st!==N&&(st._dbInfo.db=b.db,st._dbInfo.version=b.version)}})}function ae(x,N){var b=this;x=g(x);var k=new f(function(z,I){b.ready().then(function(){ie(b._dbInfo,E,function(ne,ue){if(ne)return I(ne);try{var ce=ue.objectStore(b._dbInfo.storeName),pe=ce.get(x);pe.onsuccess=function(){var _e=pe.result;_e===void 0&&(_e=null),B(_e)&&(_e=se(_e)),z(_e)},pe.onerror=function(){I(pe.error)}}catch(_e){I(_e)}})}).catch(I)});return h(k,N),k}function ye(x,N){var b=this,k=new f(function(z,I){b.ready().then(function(){ie(b._dbInfo,E,function(ne,ue){if(ne)return I(ne);try{var ce=ue.objectStore(b._dbInfo.storeName),pe=ce.openCursor(),_e=1;pe.onsuccess=function(){var Ne=pe.result;if(Ne){var st=Ne.value;B(st)&&(st=se(st));var dt=x(st,Ne.key,_e++);dt!==void 0?z(dt):Ne.continue()}else z()},pe.onerror=function(){I(pe.error)}}catch(Ne){I(Ne)}})}).catch(I)});return h(k,N),k}function Ae(x,N,b){var k=this;x=g(x);var z=new f(function(I,ne){var ue;k.ready().then(function(){return ue=k._dbInfo,_.call(N)==="[object Blob]"?U(ue.db).then(function(ce){return ce?N:te(N)}):N}).then(function(ce){ie(k._dbInfo,w,function(pe,_e){if(pe)return ne(pe);try{var Ne=_e.objectStore(k._dbInfo.storeName);ce===null&&(ce=void 0);var st=Ne.put(ce,x);_e.oncomplete=function(){ce===void 0&&(ce=null),I(ce)},_e.onabort=_e.onerror=function(){var dt=st.error?st.error:st.transaction.error;ne(dt)}}catch(dt){ne(dt)}})}).catch(ne)});return h(z,b),z}function Ce(x,N){var b=this;x=g(x);var k=new f(function(z,I){b.ready().then(function(){ie(b._dbInfo,w,function(ne,ue){if(ne)return I(ne);try{var ce=ue.objectStore(b._dbInfo.storeName),pe=ce.delete(x);ue.oncomplete=function(){z()},ue.onerror=function(){I(pe.error)},ue.onabort=function(){var _e=pe.error?pe.error:pe.transaction.error;I(_e)}}catch(_e){I(_e)}})}).catch(I)});return h(k,N),k}function Xe(x){var N=this,b=new f(function(k,z){N.ready().then(function(){ie(N._dbInfo,w,function(I,ne){if(I)return z(I);try{var ue=ne.objectStore(N._dbInfo.storeName),ce=ue.clear();ne.oncomplete=function(){k()},ne.onabort=ne.onerror=function(){var pe=ce.error?ce.error:ce.transaction.error;z(pe)}}catch(pe){z(pe)}})}).catch(z)});return h(b,x),b}function je(x){var N=this,b=new f(function(k,z){N.ready().then(function(){ie(N._dbInfo,E,function(I,ne){if(I)return z(I);try{var ue=ne.objectStore(N._dbInfo.storeName),ce=ue.count();ce.onsuccess=function(){k(ce.result)},ce.onerror=function(){z(ce.error)}}catch(pe){z(pe)}})}).catch(z)});return h(b,x),b}function be(x,N){var b=this,k=new f(function(z,I){if(x<0){z(null);return}b.ready().then(function(){ie(b._dbInfo,E,function(ne,ue){if(ne)return I(ne);try{var ce=ue.objectStore(b._dbInfo.storeName),pe=!1,_e=ce.openKeyCursor();_e.onsuccess=function(){var Ne=_e.result;if(!Ne){z(null);return}x===0||pe?z(Ne.key):(pe=!0,Ne.advance(x))},_e.onerror=function(){I(_e.error)}}catch(Ne){I(Ne)}})}).catch(I)});return h(k,N),k}function lt(x){var N=this,b=new f(function(k,z){N.ready().then(function(){ie(N._dbInfo,E,function(I,ne){if(I)return z(I);try{var ue=ne.objectStore(N._dbInfo.storeName),ce=ue.openKeyCursor(),pe=[];ce.onsuccess=function(){var _e=ce.result;if(!_e){k(pe);return}pe.push(_e.key),_e.continue()},ce.onerror=function(){z(ce.error)}}catch(_e){z(_e)}})}).catch(z)});return h(b,x),b}function K(x,N){N=y.apply(this,arguments);var b=this.config();x=typeof x!="function"&&x||{},x.name||(x.name=x.name||b.name,x.storeName=x.storeName||b.storeName);var k=this,z;if(!x.name)z=f.reject("Invalid arguments");else{var I=x.name===b.name&&k._dbInfo.db,ne=I?f.resolve(k._dbInfo.db):oe(x).then(function(ue){var ce=v[x.name],pe=ce.forages;ce.db=ue;for(var _e=0;_e<pe.length;_e++)pe[_e]._dbInfo.db=ue;return ue});x.storeName?z=ne.then(function(ue){if(ue.objectStoreNames.contains(x.storeName)){var ce=ue.version+1;M(x);var pe=v[x.name],_e=pe.forages;ue.close();for(var Ne=0;Ne<_e.length;Ne++){var st=_e[Ne];st._dbInfo.db=null,st._dbInfo.version=ce}var dt=new f(function(pt,Xt){var zt=l.open(x.name,ce);zt.onerror=function(Xn){var ao=zt.result;ao.close(),Xt(Xn)},zt.onupgradeneeded=function(){var Xn=zt.result;Xn.deleteObjectStore(x.storeName)},zt.onsuccess=function(){var Xn=zt.result;Xn.close(),pt(Xn)}});return dt.then(function(pt){pe.db=pt;for(var Xt=0;Xt<_e.length;Xt++){var zt=_e[Xt];zt._dbInfo.db=pt,C(zt._dbInfo)}}).catch(function(pt){throw(V(x,pt)||f.resolve()).catch(function(){}),pt})}}):z=ne.then(function(ue){M(x);var ce=v[x.name],pe=ce.forages;ue.close();for(var _e=0;_e<pe.length;_e++){var Ne=pe[_e];Ne._dbInfo.db=null}var st=new f(function(dt,pt){var Xt=l.deleteDatabase(x.name);Xt.onerror=function(){var zt=Xt.result;zt&&zt.close(),pt(Xt.error)},Xt.onblocked=function(){console.warn('dropInstance blocked for database "'+x.name+'" until all open connections are closed')},Xt.onsuccess=function(){var zt=Xt.result;zt&&zt.close(),dt(zt)}});return st.then(function(dt){ce.db=dt;for(var pt=0;pt<pe.length;pt++){var Xt=pe[pt];C(Xt._dbInfo)}}).catch(function(dt){throw(V(x,dt)||f.resolve()).catch(function(){}),dt})})}return h(z,N),z}var nn={_driver:"asyncStorage",_initStorage:J,_support:c(),iterate:ye,getItem:ae,setItem:Ae,removeItem:Ce,clear:Xe,length:je,key:be,keys:lt,dropInstance:K};function Be(){return typeof openDatabase=="function"}var ze="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ie="~~local_forage_type~",Et=/^~~local_forage_type~([^~]+)~/,$e="__lfsc__:",L=$e.length,A="arbf",Y="blob",de="si08",he="ui08",ge="uic8",Oe="si16",Me="si32",Le="ur16",We="ui32",Qe="fl32",fe="fl64",ht=L+A.length,tt=Object.prototype.toString;function qe(x){var N=x.length*.75,b=x.length,k,z=0,I,ne,ue,ce;x[x.length-1]==="="&&(N--,x[x.length-2]==="="&&N--);var pe=new ArrayBuffer(N),_e=new Uint8Array(pe);for(k=0;k<b;k+=4)I=ze.indexOf(x[k]),ne=ze.indexOf(x[k+1]),ue=ze.indexOf(x[k+2]),ce=ze.indexOf(x[k+3]),_e[z++]=I<<2|ne>>4,_e[z++]=(ne&15)<<4|ue>>2,_e[z++]=(ue&3)<<6|ce&63;return pe}function ke(x){var N=new Uint8Array(x),b="",k;for(k=0;k<N.length;k+=3)b+=ze[N[k]>>2],b+=ze[(N[k]&3)<<4|N[k+1]>>4],b+=ze[(N[k+1]&15)<<2|N[k+2]>>6],b+=ze[N[k+2]&63];return N.length%3===2?b=b.substring(0,b.length-1)+"=":N.length%3===1&&(b=b.substring(0,b.length-2)+"=="),b}function De(x,N){var b="";if(x&&(b=tt.call(x)),x&&(b==="[object ArrayBuffer]"||x.buffer&&tt.call(x.buffer)==="[object ArrayBuffer]")){var k,z=$e;x instanceof ArrayBuffer?(k=x,z+=A):(k=x.buffer,b==="[object Int8Array]"?z+=de:b==="[object Uint8Array]"?z+=he:b==="[object Uint8ClampedArray]"?z+=ge:b==="[object Int16Array]"?z+=Oe:b==="[object Uint16Array]"?z+=Le:b==="[object Int32Array]"?z+=Me:b==="[object Uint32Array]"?z+=We:b==="[object Float32Array]"?z+=Qe:b==="[object Float64Array]"?z+=fe:N(new Error("Failed to get type for BinaryArray"))),N(z+ke(k))}else if(b==="[object Blob]"){var I=new FileReader;I.onload=function(){var ne=Ie+x.type+"~"+ke(this.result);N($e+Y+ne)},I.readAsArrayBuffer(x)}else try{N(JSON.stringify(x))}catch(ne){console.error("Couldn't convert value into a JSON string: ",x),N(null,ne)}}function Je(x){if(x.substring(0,L)!==$e)return JSON.parse(x);var N=x.substring(ht),b=x.substring(L,ht),k;if(b===Y&&Et.test(N)){var z=N.match(Et);k=z[1],N=N.substring(z[0].length)}var I=qe(N);switch(b){case A:return I;case Y:return u([I],{type:k});case de:return new Int8Array(I);case he:return new Uint8Array(I);case ge:return new Uint8ClampedArray(I);case Oe:return new Int16Array(I);case Le:return new Uint16Array(I);case Me:return new Int32Array(I);case We:return new Uint32Array(I);case Qe:return new Float32Array(I);case fe:return new Float64Array(I);default:throw new Error("Unkown type: "+b)}}var ct={serialize:De,deserialize:Je,stringToBuffer:qe,bufferToString:ke};function Ct(x,N,b,k){x.executeSql("CREATE TABLE IF NOT EXISTS "+N.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],b,k)}function nt(x){var N=this,b={db:null};if(x)for(var k in x)b[k]=typeof x[k]!="string"?x[k].toString():x[k];var z=new f(function(I,ne){try{b.db=openDatabase(b.name,String(b.version),b.description,b.size)}catch(ue){return ne(ue)}b.db.transaction(function(ue){Ct(ue,b,function(){N._dbInfo=b,I()},function(ce,pe){ne(pe)})},ne)});return b.serializer=ct,z}function ve(x,N,b,k,z,I){x.executeSql(b,k,z,function(ne,ue){ue.code===ue.SYNTAX_ERR?ne.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[N.storeName],function(ce,pe){pe.rows.length?I(ce,ue):Ct(ce,N,function(){ce.executeSql(b,k,z,I)},I)},I):I(ne,ue)},I)}function O(x,N){var b=this;x=g(x);var k=new f(function(z,I){b.ready().then(function(){var ne=b._dbInfo;ne.db.transaction(function(ue){ve(ue,ne,"SELECT * FROM "+ne.storeName+" WHERE key = ? LIMIT 1",[x],function(ce,pe){var _e=pe.rows.length?pe.rows.item(0).value:null;_e&&(_e=ne.serializer.deserialize(_e)),z(_e)},function(ce,pe){I(pe)})})}).catch(I)});return h(k,N),k}function Ee(x,N){var b=this,k=new f(function(z,I){b.ready().then(function(){var ne=b._dbInfo;ne.db.transaction(function(ue){ve(ue,ne,"SELECT * FROM "+ne.storeName,[],function(ce,pe){for(var _e=pe.rows,Ne=_e.length,st=0;st<Ne;st++){var dt=_e.item(st),pt=dt.value;if(pt&&(pt=ne.serializer.deserialize(pt)),pt=x(pt,dt.key,st+1),pt!==void 0){z(pt);return}}z()},function(ce,pe){I(pe)})})}).catch(I)});return h(k,N),k}function xe(x,N,b,k){var z=this;x=g(x);var I=new f(function(ne,ue){z.ready().then(function(){N===void 0&&(N=null);var ce=N,pe=z._dbInfo;pe.serializer.serialize(N,function(_e,Ne){Ne?ue(Ne):pe.db.transaction(function(st){ve(st,pe,"INSERT OR REPLACE INTO "+pe.storeName+" (key, value) VALUES (?, ?)",[x,_e],function(){ne(ce)},function(dt,pt){ue(pt)})},function(st){if(st.code===st.QUOTA_ERR){if(k>0){ne(xe.apply(z,[x,ce,b,k-1]));return}ue(st)}})})}).catch(ue)});return h(I,b),I}function Ke(x,N,b){return xe.apply(this,[x,N,b,1])}function He(x,N){var b=this;x=g(x);var k=new f(function(z,I){b.ready().then(function(){var ne=b._dbInfo;ne.db.transaction(function(ue){ve(ue,ne,"DELETE FROM "+ne.storeName+" WHERE key = ?",[x],function(){z()},function(ce,pe){I(pe)})})}).catch(I)});return h(k,N),k}function gt(x){var N=this,b=new f(function(k,z){N.ready().then(function(){var I=N._dbInfo;I.db.transaction(function(ne){ve(ne,I,"DELETE FROM "+I.storeName,[],function(){k()},function(ue,ce){z(ce)})})}).catch(z)});return h(b,x),b}function vt(x){var N=this,b=new f(function(k,z){N.ready().then(function(){var I=N._dbInfo;I.db.transaction(function(ne){ve(ne,I,"SELECT COUNT(key) as c FROM "+I.storeName,[],function(ue,ce){var pe=ce.rows.item(0).c;k(pe)},function(ue,ce){z(ce)})})}).catch(z)});return h(b,x),b}function Vt(x,N){var b=this,k=new f(function(z,I){b.ready().then(function(){var ne=b._dbInfo;ne.db.transaction(function(ue){ve(ue,ne,"SELECT key FROM "+ne.storeName+" WHERE id = ? LIMIT 1",[x+1],function(ce,pe){var _e=pe.rows.length?pe.rows.item(0).key:null;z(_e)},function(ce,pe){I(pe)})})}).catch(I)});return h(k,N),k}function rn(x){var N=this,b=new f(function(k,z){N.ready().then(function(){var I=N._dbInfo;I.db.transaction(function(ne){ve(ne,I,"SELECT key FROM "+I.storeName,[],function(ue,ce){for(var pe=[],_e=0;_e<ce.rows.length;_e++)pe.push(ce.rows.item(_e).key);k(pe)},function(ue,ce){z(ce)})})}).catch(z)});return h(b,x),b}function _t(x){return new f(function(N,b){x.transaction(function(k){k.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(z,I){for(var ne=[],ue=0;ue<I.rows.length;ue++)ne.push(I.rows.item(ue).name);N({db:x,storeNames:ne})},function(z,I){b(I)})},function(k){b(k)})})}function sn(x,N){N=y.apply(this,arguments);var b=this.config();x=typeof x!="function"&&x||{},x.name||(x.name=x.name||b.name,x.storeName=x.storeName||b.storeName);var k=this,z;return x.name?z=new f(function(I){var ne;x.name===b.name?ne=k._dbInfo.db:ne=openDatabase(x.name,"","",0),x.storeName?I({db:ne,storeNames:[x.storeName]}):I(_t(ne))}).then(function(I){return new f(function(ne,ue){I.db.transaction(function(ce){function pe(dt){return new f(function(pt,Xt){ce.executeSql("DROP TABLE IF EXISTS "+dt,[],function(){pt()},function(zt,Xn){Xt(Xn)})})}for(var _e=[],Ne=0,st=I.storeNames.length;Ne<st;Ne++)_e.push(pe(I.storeNames[Ne]));f.all(_e).then(function(){ne()}).catch(function(dt){ue(dt)})},function(ce){ue(ce)})})}):z=f.reject("Invalid arguments"),h(z,N),z}var Wn={_driver:"webSQLStorage",_initStorage:nt,_support:Be(),iterate:Ee,getItem:O,setItem:Ke,removeItem:He,clear:gt,length:vt,key:Vt,keys:rn,dropInstance:sn};function ya(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Sa(x,N){var b=x.name+"/";return x.storeName!==N.storeName&&(b+=x.storeName+"/"),b}function Qr(){var x="_localforage_support_test";try{return localStorage.setItem(x,!0),localStorage.removeItem(x),!1}catch{return!0}}function xa(){return!Qr()||localStorage.length>0}function Jr(x){var N=this,b={};if(x)for(var k in x)b[k]=x[k];return b.keyPrefix=Sa(x,N._defaultConfig),xa()?(N._dbInfo=b,b.serializer=ct,f.resolve()):f.reject()}function Ea(x){var N=this,b=N.ready().then(function(){for(var k=N._dbInfo.keyPrefix,z=localStorage.length-1;z>=0;z--){var I=localStorage.key(z);I.indexOf(k)===0&&localStorage.removeItem(I)}});return h(b,x),b}function Ma(x,N){var b=this;x=g(x);var k=b.ready().then(function(){var z=b._dbInfo,I=localStorage.getItem(z.keyPrefix+x);return I&&(I=z.serializer.deserialize(I)),I});return h(k,N),k}function Ic(x,N){var b=this,k=b.ready().then(function(){for(var z=b._dbInfo,I=z.keyPrefix,ne=I.length,ue=localStorage.length,ce=1,pe=0;pe<ue;pe++){var _e=localStorage.key(pe);if(_e.indexOf(I)===0){var Ne=localStorage.getItem(_e);if(Ne&&(Ne=z.serializer.deserialize(Ne)),Ne=x(Ne,_e.substring(ne),ce++),Ne!==void 0)return Ne}}});return h(k,N),k}function Oc(x,N){var b=this,k=b.ready().then(function(){var z=b._dbInfo,I;try{I=localStorage.key(x)}catch{I=null}return I&&(I=I.substring(z.keyPrefix.length)),I});return h(k,N),k}function Uc(x){var N=this,b=N.ready().then(function(){for(var k=N._dbInfo,z=localStorage.length,I=[],ne=0;ne<z;ne++){var ue=localStorage.key(ne);ue.indexOf(k.keyPrefix)===0&&I.push(ue.substring(k.keyPrefix.length))}return I});return h(b,x),b}function R(x){var N=this,b=N.keys().then(function(k){return k.length});return h(b,x),b}function H(x,N){var b=this;x=g(x);var k=b.ready().then(function(){var z=b._dbInfo;localStorage.removeItem(z.keyPrefix+x)});return h(k,N),k}function $(x,N,b){var k=this;x=g(x);var z=k.ready().then(function(){N===void 0&&(N=null);var I=N;return new f(function(ne,ue){var ce=k._dbInfo;ce.serializer.serialize(N,function(pe,_e){if(_e)ue(_e);else try{localStorage.setItem(ce.keyPrefix+x,pe),ne(I)}catch(Ne){(Ne.name==="QuotaExceededError"||Ne.name==="NS_ERROR_DOM_QUOTA_REACHED")&&ue(Ne),ue(Ne)}})})});return h(z,b),z}function Q(x,N){if(N=y.apply(this,arguments),x=typeof x!="function"&&x||{},!x.name){var b=this.config();x.name=x.name||b.name,x.storeName=x.storeName||b.storeName}var k=this,z;return x.name?z=new f(function(I){x.storeName?I(Sa(x,k._defaultConfig)):I(x.name+"/")}).then(function(I){for(var ne=localStorage.length-1;ne>=0;ne--){var ue=localStorage.key(ne);ue.indexOf(I)===0&&localStorage.removeItem(ue)}}):z=f.reject("Invalid arguments"),h(z,N),z}var q={_driver:"localStorageWrapper",_initStorage:Jr,_support:ya(),iterate:Ic,getItem:Ma,setItem:$,removeItem:H,clear:Ea,length:R,key:Oc,keys:Uc,dropInstance:Q},we=function(N,b){return N===b||typeof N=="number"&&typeof b=="number"&&isNaN(N)&&isNaN(b)},Ue=function(N,b){for(var k=N.length,z=0;z<k;){if(we(N[z],b))return!0;z++}return!1},Ge=Array.isArray||function(x){return Object.prototype.toString.call(x)==="[object Array]"},Ve={},et={},Ye={INDEXEDDB:nn,WEBSQL:Wn,LOCALSTORAGE:q},Ze=[Ye.INDEXEDDB._driver,Ye.WEBSQL._driver,Ye.LOCALSTORAGE._driver],Mt=["dropInstance"],on=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Mt),Wt={description:"",driver:Ze.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function ni(x,N){x[N]=function(){var b=arguments;return x.ready().then(function(){return x[N].apply(x,b)})}}function St(){for(var x=1;x<arguments.length;x++){var N=arguments[x];if(N)for(var b in N)N.hasOwnProperty(b)&&(Ge(N[b])?arguments[0][b]=N[b].slice():arguments[0][b]=N[b])}return arguments[0]}var it=function(){function x(N){o(this,x);for(var b in Ye)if(Ye.hasOwnProperty(b)){var k=Ye[b],z=k._driver;this[b]=z,Ve[z]||this.defineDriver(k)}this._defaultConfig=St({},Wt),this._config=St({},this._defaultConfig,N),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return x.prototype.config=function(b){if((typeof b>"u"?"undefined":s(b))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var k in b){if(k==="storeName"&&(b[k]=b[k].replace(/\W/g,"_")),k==="version"&&typeof b[k]!="number")return new Error("Database version must be a number.");this._config[k]=b[k]}return"driver"in b&&b.driver?this.setDriver(this._config.driver):!0}else return typeof b=="string"?this._config[b]:this._config},x.prototype.defineDriver=function(b,k,z){var I=new f(function(ne,ue){try{var ce=b._driver,pe=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!b._driver){ue(pe);return}for(var _e=on.concat("_initStorage"),Ne=0,st=_e.length;Ne<st;Ne++){var dt=_e[Ne],pt=!Ue(Mt,dt);if((pt||b[dt])&&typeof b[dt]!="function"){ue(pe);return}}var Xt=function(){for(var ao=function(T_){return function(){var A_=new Error("Method "+T_+" is not implemented by the current driver"),dd=f.reject(A_);return h(dd,arguments[arguments.length-1]),dd}},kc=0,M_=Mt.length;kc<M_;kc++){var Fc=Mt[kc];b[Fc]||(b[Fc]=ao(Fc))}};Xt();var zt=function(ao){Ve[ce]&&console.info("Redefining LocalForage driver: "+ce),Ve[ce]=b,et[ce]=ao,ne()};"_support"in b?b._support&&typeof b._support=="function"?b._support().then(zt,ue):zt(!!b._support):zt(!0)}catch(Xn){ue(Xn)}});return p(I,k,z),I},x.prototype.driver=function(){return this._driver||null},x.prototype.getDriver=function(b,k,z){var I=Ve[b]?f.resolve(Ve[b]):f.reject(new Error("Driver not found."));return p(I,k,z),I},x.prototype.getSerializer=function(b){var k=f.resolve(ct);return p(k,b),k},x.prototype.ready=function(b){var k=this,z=k._driverSet.then(function(){return k._ready===null&&(k._ready=k._initDriver()),k._ready});return p(z,b,b),z},x.prototype.setDriver=function(b,k,z){var I=this;Ge(b)||(b=[b]);var ne=this._getSupportedDrivers(b);function ue(){I._config.driver=I.driver()}function ce(Ne){return I._extend(Ne),ue(),I._ready=I._initStorage(I._config),I._ready}function pe(Ne){return function(){var st=0;function dt(){for(;st<Ne.length;){var pt=Ne[st];return st++,I._dbInfo=null,I._ready=null,I.getDriver(pt).then(ce).catch(dt)}ue();var Xt=new Error("No available storage method found.");return I._driverSet=f.reject(Xt),I._driverSet}return dt()}}var _e=this._driverSet!==null?this._driverSet.catch(function(){return f.resolve()}):f.resolve();return this._driverSet=_e.then(function(){var Ne=ne[0];return I._dbInfo=null,I._ready=null,I.getDriver(Ne).then(function(st){I._driver=st._driver,ue(),I._wrapLibraryMethodsWithReady(),I._initDriver=pe(ne)})}).catch(function(){ue();var Ne=new Error("No available storage method found.");return I._driverSet=f.reject(Ne),I._driverSet}),p(this._driverSet,k,z),this._driverSet},x.prototype.supports=function(b){return!!et[b]},x.prototype._extend=function(b){St(this,b)},x.prototype._getSupportedDrivers=function(b){for(var k=[],z=0,I=b.length;z<I;z++){var ne=b[z];this.supports(ne)&&k.push(ne)}return k},x.prototype._wrapLibraryMethodsWithReady=function(){for(var b=0,k=on.length;b<k;b++)ni(this,on[b])},x.prototype.createInstance=function(b){return new x(b)},x}(),oo=new it;i.exports=oo},{3:3}]},{},[4])(4)})})(E_);var FC=E_.exports;const Ro=th(FC),vl="voxel_survival_save";class BC{player=null;survivalStats=null;terrainGenerator=null;biomeGenerator=null;chunks=null;lastAutoSave=0;init(e,t,i,r,s){this.player=e,this.survivalStats=t,this.terrainGenerator=i,this.biomeGenerator=r,this.chunks=s,Ro.config({name:"voxel_survival"})}async save(){if(!this.player||!this.survivalStats||!this.terrainGenerator||!this.biomeGenerator||!this.chunks)return;const e={};this.chunks.forEach((r,s)=>{const o=this.biomeGenerator.generateBiomeMap(r.chunkX,r.chunkZ),a=new cd(r.chunkX,r.chunkZ);this.terrainGenerator.generateChunk(a,o);const l=[];for(let c=0;c<Ft;c++)for(let u=0;u<Pe;u++)for(let f=0;f<Pe;f++){const h=r.getBlock(f,c,u),p=a.getBlock(f,c,u);h!==p&&l.push({x:r.worldX+f,y:c,z:r.worldZ+u,newBlock:h})}l.length>0&&(e[s]=l)});const t=hi.getState(),i={version:2,seed:(this.terrainGenerator,0),timestamp:Date.now(),player:{position:[this.player.position.x,this.player.position.y,this.player.position.z],rotation:[this.player.yaw,this.player.pitch],stats:{health:this.survivalStats.health,hunger:this.survivalStats.hunger,thirst:this.survivalStats.thirst,stamina:this.survivalStats.stamina,temperature:this.survivalStats.temperature,mana:this.survivalStats.mana},dimension:"overworld"},inventory:t.slots,deltas:e,creatures:[]};await Ro.setItem(vl,i)}async load(){return await Ro.getItem(vl)}async hasSave(){return await Ro.getItem(vl)!==null}async deleteSave(){await Ro.removeItem(vl)}checkAutosave(e){e-this.lastAutoSave>Jw&&(this.lastAutoSave=e,this.save().catch(console.error))}}class zC{geometry;material;points;positions;velocities;count=300;constructor(e){this.positions=new Float32Array(this.count*3),this.velocities=new Float32Array(this.count*3);for(let t=0;t<this.count;t++)this.positions[t*3]=(Math.random()-.5)*2,this.positions[t*3+1]=Math.random()*3,this.positions[t*3+2]=(Math.random()-.5)*2,this.velocities[t*3]=(Math.random()-.5)*.5,this.velocities[t*3+1]=Math.random()*2+.5,this.velocities[t*3+2]=(Math.random()-.5)*.5;this.geometry=new In,this.geometry.setAttribute("position",new At(this.positions,3)),this.material=new Lc({color:11141375,size:.1,transparent:!0,opacity:.8,depthWrite:!1}),this.points=new sd(this.geometry,this.material),this.points.visible=!1,e.add(this.points)}show(e,t,i){this.points.position.set(e,t,i),this.points.visible=!0}hide(){this.points.visible=!1}update(e){if(this.points.visible){for(let t=0;t<this.count;t++)this.positions[t*3+1]+=this.velocities[t*3+1]*e,this.positions[t*3+1]>3&&(this.positions[t*3+1]=0,this.positions[t*3]=(Math.random()-.5)*2,this.positions[t*3+2]=(Math.random()-.5)*2);this.geometry.attributes.position.needsUpdate=!0}}}class HC{worldManager;portalParticles;postProcess;voidRealm=null;player;activePortals=new Map;currentDimension="overworld";constructor(e,t,i,r){this.worldManager=t,this.player=i,this.postProcess=r,this.portalParticles=new zC(e)}checkPortalActivation(e,t,i){this.countAdjacentFrames(e,t,i)>=4&&(this.activePortals.set(`${e},${t},${i}`,{x:e,y:t,z:i}),this.portalParticles.show(e+.5,t,i+.5),this.worldManager.setBlock(e,t+1,i,D.PORTAL_ACTIVE),this.worldManager.setBlock(e,t+2,i,D.PORTAL_ACTIVE))}countAdjacentFrames(e,t,i){let r=0;const s=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0]];for(const[o,a,l]of s)this.worldManager.getBlock(e+o,t+a,i+l)===D.PORTAL_FRAME&&r++;return r}update(e){if(this.portalParticles.update(e),this.currentDimension==="overworld"){const t=Math.floor(this.player.position.x),i=Math.floor(this.player.position.y),r=Math.floor(this.player.position.z);this.worldManager.getBlock(t,i,r)===D.PORTAL_ACTIVE&&this.transitionToVoid()}}transitionToVoid(){this.postProcess.fadeIn(500,()=>{this.currentDimension="void",this.postProcess.fadeOut(500)})}isInVoid(){return this.currentDimension==="void"}getDimension(){return this.currentDimension}}class GC{renderer;skyRenderer;waterRenderer;fogSystem;particleSystem;dayNightCycle;chunkRenderer;postProcess;assetManager;inputManager;worldManager=null;player=null;playerController=null;camera=null;blockInteraction=null;survivalStats=null;entityManager=null;itemDropManager=null;bulletPool=null;weaponManager=null;damageSystem=null;saveManager;portalManager=null;gameState="menu";animFrameId=0;lastTime=0;elapsed=0;seed=0;paused=!1;chunkWorker=null;pendingMeshes=new Map;pickupNotifications=[];onStateChange=null;onStatsUpdate=null;onPickupNotification=null;constructor(){this.renderer=new Gw,this.assetManager=new sC,this.inputManager=new oC,this.saveManager=new BC}init(e){this.assetManager.init(),this.inputManager.init(e),this.skyRenderer=new Xw(this.renderer.mainScene),this.waterRenderer=new Kw,this.fogSystem=new qw(this.renderer.mainScene),this.particleSystem=new tC(this.renderer.mainScene),this.dayNightCycle=new nC(this.renderer.mainScene),this.chunkRenderer=new iC(this.renderer.mainScene,this.assetManager),this.postProcess=new rC;for(let t=0;t<8;t++){const i=new lw(16748288,0,15);this.renderer.mainScene.add(i)}this.chunkWorker=lC(),this.chunkWorker.onmessage=t=>{const{chunkX:i,chunkZ:r,positions:s,normals:o,uvs:a,colors:l,indices:c,waterPositions:u,waterNormals:f,waterUvs:h,waterIndices:p}=t.data,g=`${i},${r}`;this.pendingMeshes.delete(g),this.chunkRenderer.uploadChunk(g,{positions:s,normals:o,uvs:a,colors:l,indices:c,waterPositions:u,waterNormals:f,waterUvs:h,waterIndices:p},this.waterRenderer.getMaterial())}}startGame(e){this.seed=e,fC(e),dC(),this.worldManager=new SC(e),this.worldManager.update(0,0);for(let r=0;r<5;r++)this.worldManager.update(0,0);this.player=new Ku((r,s,o)=>this.worldManager.getBlock(r,s,o));const t=Ku.findLandSpawn((r,s,o)=>this.worldManager.getBlock(r,s,o),8,8);this.player.position={x:t.x,y:t.y,z:t.z},this.survivalStats=new AC,this.playerController=new EC(this.player,this.inputManager,this.renderer),this.camera=new MC(this.player,this.inputManager,this.renderer),this.blockInteraction=new TC(this.player,this.inputManager,this.worldManager),this.blockInteraction.setSurvivalStats(this.survivalStats),this.blockInteraction.setParticleSystem(this.particleSystem);const i=this.player.getEyePosition();this.renderer.setMainCameraPosition(i.x,i.y,i.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch),this.itemDropManager=new NC(this.renderer.mainScene,(r,s,o)=>this.worldManager.getBlock(r,s,o)),this.itemDropManager.setOnItemPickup((r,s)=>{hi.getState().addItem(r,s),this.pickupNotifications.push({id:r,count:s,time:this.elapsed}),this.onPickupNotification?.(this.pickupNotifications)}),this.blockInteraction.setItemDropManager(this.itemDropManager),this.entityManager=new PC(this.renderer.mainScene,(r,s,o)=>this.worldManager.getBlock(r,s,o)),this.entityManager.setPlayerPosition(this.player.position),this.entityManager.setOnLootDrop((r,s)=>{this.player&&this.itemDropManager&&this.itemDropManager.dropItem(r,s,this.player.position.x,this.player.position.y+1,this.player.position.z,(Math.random()-.5)*2,2,(Math.random()-.5)*2)}),this.bulletPool=new IC(this.renderer.mainScene),this.weaponManager=new UC(this.inputManager,this.player,this.bulletPool,this.particleSystem,this.renderer),this.damageSystem=new kC(this.entityManager,this.player,this.survivalStats,this.bulletPool),this.portalManager=new HC(this.renderer.mainScene,this.worldManager,this.player,this.postProcess),this.saveManager.init(this.player,this.survivalStats,this.worldManager.getTerrainGenerator(),this.worldManager.getBiomeGenerator(),this.worldManager.getAllChunks()),this.gameState="playing",this.onStateChange?.("playing"),this.worldManager.update(this.player.position.x,this.player.position.z);for(let r=0;r<5;r++)this.worldManager.update(this.player.position.x,this.player.position.z);this.rebuildAllVisibleChunks(),this.lastTime=performance.now(),this.gameLoop()}loadGame(){this.saveManager.load().then(e=>{e&&(this.startGame(e.seed),this.player&&this.survivalStats&&(this.player.position={x:e.player.position[0],y:e.player.position[1],z:e.player.position[2]},this.player.yaw=e.player.rotation[0],this.player.pitch=e.player.rotation[1],this.survivalStats.health=e.player.stats.health,this.survivalStats.hunger=e.player.stats.hunger,this.survivalStats.thirst=e.player.stats.thirst,this.survivalStats.stamina=e.player.stats.stamina,this.survivalStats.temperature=e.player.stats.temperature,this.survivalStats.mana=e.player.stats.mana),e.inventory&&hi.getState().setSlots(e.inventory))})}gameLoop=()=>{this.animFrameId=requestAnimationFrame(this.gameLoop);const e=performance.now(),t=(e-this.lastTime)/1e3;this.lastTime=e;const i=Math.min(t,.05);this.elapsed+=i,this.pickupNotifications=this.pickupNotifications.filter(o=>this.elapsed-o.time<2),this.inputManager.isKeyJustPressed("Tab")&&this.gameState==="playing"?(this.gameState="inventory",this.onStateChange?.("inventory"),this.inputManager.exitPointerLock()):this.inputManager.isKeyJustPressed("Tab")&&this.gameState==="inventory"&&(this.gameState="playing",this.onStateChange?.("playing"));for(let o=1;o<=9;o++)this.inputManager.isKeyJustPressed(`Digit${o}`)&&hi.getState().selectSlot(o-1);const r=this.inputManager.getScrollDelta();if(r!==0){const a=(hi.getState().selected+(r>0?1:-1)+9)%9;hi.getState().selectSlot(a)}if(this.inputManager.isKeyJustPressed("F5")&&this.saveManager.save().catch(console.error),this.gameState==="playing"&&!this.paused){if(this.playerController?.update(i),this.player?.update(i),this.camera?.update(i),this.blockInteraction?.update(i),this.itemDropManager&&this.player&&this.itemDropManager.update(i,this.player.position.x,this.player.position.y+.9,this.player.position.z),this.survivalStats&&this.player){const o=this.worldManager?.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z))??Fe.PLAINS;this.survivalStats.setBiome(o),this.survivalStats.setSprinting(this.player.isSprinting),this.survivalStats.update(i),this.survivalStats.isDead&&(this.gameState="dead",this.onStateChange?.("dead")),this.onStatsUpdate?.({health:this.survivalStats.health,hunger:this.survivalStats.hunger,thirst:this.survivalStats.thirst,stamina:this.survivalStats.stamina,temperature:this.survivalStats.temperature,mana:this.survivalStats.mana,maxMana:this.survivalStats.maxMana})}if(this.entityManager&&this.player&&(this.entityManager.setPlayerPosition(this.player.position),this.entityManager.update(i)),this.weaponManager?.update(i,(o,a,l)=>this.worldManager?.getBlock(o,a,l)??0),this.bulletPool?.update(i,(o,a,l)=>jn(this.worldManager?.getBlock(o,a,l)??0)),this.damageSystem?.update(i),this.worldManager&&this.player){const o=this.worldManager.update(this.player.position.x,this.player.position.z);for(const a of o)this.sendChunkToWorker(a)}if(this.fogSystem&&this.player&&this.worldManager){const o=this.worldManager.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z));this.player.position.y<30?this.fogSystem.setCaveFog():this.fogSystem.setBiomeFog(o),this.fogSystem.setSunHeight(this.dayNightCycle.getSunHeight()),this.fogSystem.update(i)}this.portalManager?.update(i)}this.dayNightCycle.update(i),this.particleSystem.update(i);const s=this.dayNightCycle.getSunDirection();this.skyRenderer.update(this.elapsed,s,this.dayNightCycle.getDayProgress(),this.renderer.mainCamera.position),this.waterRenderer.updateUniforms(this.elapsed,this.renderer.mainCamera.position,s),this.renderer.render(),this.saveManager.checkAutosave(this.elapsed),this.inputManager.flush()};sendChunkToWorker(e){if(!this.worldManager||!this.chunkWorker||this.pendingMeshes.has(e))return;const t=parseInt(e.split(",")[0]),i=parseInt(e.split(",")[1]),r=this.worldManager.getChunk(t,i);if(!r)return;const s=this.worldManager.getNeighborVoxels(t,i),o=this.worldManager.getBiomeMap(t,i),a=this.worldManager.getNeighborBiomeMaps(t,i);this.pendingMeshes.set(e,!0),this.chunkWorker.postMessage({chunkX:t,chunkZ:i,voxels:r.voxels,neighbors:s,biomeMap:o??null,neighborBiomes:a})}rebuildAllVisibleChunks(){if(this.worldManager)for(const[e]of this.worldManager.getAllChunks())this.sendChunkToWorker(e)}respawn(){if(this.survivalStats?.respawn(),this.player&&this.worldManager){const e=Ku.findLandSpawn((i,r,s)=>this.worldManager.getBlock(i,r,s),8,8);this.player.position={x:e.x,y:e.y,z:e.z},this.player.velocity={x:0,y:0,z:0};const t=this.player.getEyePosition();this.renderer.setMainCameraPosition(t.x,t.y,t.z),this.renderer.setMainCameraRotation(this.player.yaw,this.player.pitch)}this.gameState="playing",this.onStateChange?.("playing")}stop(){this.animFrameId&&cancelAnimationFrame(this.animFrameId)}getBiomeAt(e,t){return this.worldManager?.getBiomeAt(e,t)??Fe.PLAINS}}const hg=({health:n,hunger:e,thirst:t,stamina:i,temperature:r,mana:s,maxMana:o,hasStaff:a,breakProgress:l,pickupNotifications:c})=>{const{slots:u,selected:f}=hi(),h=({value:g,max:y,color:m,icon:d})=>ee.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[ee.jsx("span",{className:"text-sm w-5 text-center",children:d}),ee.jsx("div",{className:"w-32 h-3 bg-gray-800 rounded overflow-hidden border border-gray-600",children:ee.jsx("div",{className:`h-full ${m} transition-all duration-200`,style:{width:`${g/y*100}%`}})})]}),p=u[f];return ee.jsxs("div",{className:"fixed inset-0 pointer-events-none z-20",style:{fontFamily:"monospace"},children:[ee.jsxs("div",{className:"absolute top-4 left-4",children:[ee.jsx(h,{value:n,max:100,color:"bg-red-500",icon:"❤"}),ee.jsx(h,{value:e,max:100,color:"bg-orange-400",icon:"🍗"}),ee.jsx(h,{value:t,max:100,color:"bg-blue-400",icon:"💧"}),ee.jsx(h,{value:i,max:100,color:"bg-yellow-400",icon:"⚡"}),a&&ee.jsx(h,{value:s,max:o,color:"bg-purple-500",icon:"✦"}),r<-.5&&ee.jsx("div",{className:"text-cyan-300 text-sm",children:"❄ Cold"}),r>.7&&ee.jsx("div",{className:"text-red-300 text-sm",children:"🔥 Hot"})]}),l>0&&ee.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8",children:ee.jsx("div",{className:"w-16 h-1 bg-gray-700 rounded",children:ee.jsx("div",{className:"h-full bg-white rounded",style:{width:`${l*100}%`}})})}),p&&ee.jsxs("div",{className:"absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded",children:[tr(p.id)," ",p.count>1?`x${p.count}`:""]}),ee.jsx("div",{className:"absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1",children:c.slice(-5).map((g,y)=>ee.jsx(VC,{id:g.id,count:g.count,index:y},g.time))}),ee.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1",children:u.slice(0,9).map((g,y)=>ee.jsxs("div",{className:`w-12 h-12 flex items-center justify-center border-2 ${y===f?"border-white bg-gray-700":"border-gray-600 bg-gray-800"} relative`,children:[g&&ee.jsxs(ee.Fragment,{children:[ee.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:_s(g.id)}}),ee.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:g.count>1?g.count:""})]}),ee.jsx("span",{className:"absolute top-0 left-0.5 text-xs text-gray-400",children:y+1})]},y))}),ee.jsxs("div",{className:"absolute bottom-4 right-4 text-gray-500 text-xs space-y-0.5",children:[ee.jsx("div",{children:"LMB: Mine | RMB: Place"}),ee.jsx("div",{children:"Q: Drop | Tab: Inventory"}),ee.jsx("div",{children:"WASD: Move | Space: Jump"})]})]})},VC=({id:n,count:e,index:t})=>{const[i,r]=xt.useState(1);return xt.useEffect(()=>{const s=setTimeout(()=>r(0),1500);return()=>clearTimeout(s)},[]),ee.jsxs("div",{className:"text-sm text-white px-2 py-0.5 rounded transition-opacity duration-500",style:{opacity:i,backgroundColor:"rgba(0,0,0,0.6)",transform:`translateY(${t*-5}px)`},children:["+",e," ",tr(n)]})},cc=[{name:"Plank",pattern:[P.WOOD,null,null,null,null,null,null,null,null],result:{id:P.PLANK,count:4},category:"materials"},{name:"Stick",pattern:[P.PLANK,null,null,P.PLANK,null,null,null,null,null],result:{id:P.STICK,count:4},category:"materials"},{name:"Iron Ingot (smelt)",pattern:[P.IRON_ORE,null,null,P.COAL,null,null,null,null,null],result:{id:P.IRON_INGOT,count:1},category:"materials"},{name:"Gold Ingot (smelt)",pattern:[P.GOLD_ORE,null,null,P.COAL,null,null,null,null,null],result:{id:P.GOLD_INGOT,count:1},category:"materials"},{name:"Crafting Table",pattern:[P.PLANK,P.PLANK,null,P.PLANK,P.PLANK,null,null,null,null],result:{id:P.CRAFTING_TABLE,count:1},category:"blocks"},{name:"Furnace",pattern:[P.STONE,P.STONE,P.STONE,P.STONE,null,P.STONE,P.STONE,P.STONE,P.STONE],result:{id:P.FURNACE,count:1},category:"blocks"},{name:"Chest",pattern:[P.PLANK,P.PLANK,P.PLANK,P.PLANK,null,P.PLANK,P.PLANK,P.PLANK,P.PLANK],result:{id:P.CHEST,count:1},category:"blocks"},{name:"Torch",pattern:[P.COAL,null,null,P.STICK,null,null,null,null,null],result:{id:P.TORCH,count:4},category:"blocks"},{name:"Portal Frame",pattern:[P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,null,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD],result:{id:P.PORTAL_FRAME,count:1},category:"blocks"},{name:"Wooden Pickaxe",pattern:[P.PLANK,P.PLANK,P.PLANK,null,P.STICK,null,null,P.STICK,null],result:{id:P.WOODEN_PICKAXE,count:1},category:"tools"},{name:"Stone Pickaxe",pattern:[P.STONE,P.STONE,P.STONE,null,P.STICK,null,null,P.STICK,null],result:{id:P.STONE_PICKAXE,count:1},category:"tools"},{name:"Iron Pickaxe",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,null,P.STICK,null,null,P.STICK,null],result:{id:P.IRON_PICKAXE,count:1},category:"tools"},{name:"Wooden Axe",pattern:[P.PLANK,P.PLANK,null,P.PLANK,P.STICK,null,null,P.STICK,null],result:{id:P.WOODEN_AXE,count:1},category:"tools"},{name:"Stone Axe",pattern:[P.STONE,P.STONE,null,P.STONE,P.STICK,null,null,P.STICK,null],result:{id:P.STONE_AXE,count:1},category:"tools"},{name:"Wooden Shovel",pattern:[P.PLANK,null,null,P.STICK,null,null,P.STICK,null,null],result:{id:P.WOODEN_SHOVEL,count:1},category:"tools"},{name:"Iron Sword",pattern:[P.IRON_INGOT,null,null,P.IRON_INGOT,null,null,P.STICK,null,null],result:{id:P.SWORD,count:1},category:"weapons"},{name:"Pistol",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,null,P.STICK,null,null,null,null],result:{id:P.PISTOL,count:1},category:"weapons"},{name:"Rifle",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.STICK,P.IRON_INGOT,P.IRON_INGOT,P.STICK,null,null],result:{id:P.RIFLE,count:1},category:"weapons"},{name:"Magic Staff",pattern:[P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,P.CRYSTAL_SHARD,null,P.STICK,null,null,P.STICK,null],result:{id:P.MAGIC_STAFF,count:1},category:"weapons"},{name:"Ammo",pattern:[P.IRON_INGOT,P.COAL,P.IRON_INGOT,null,null,null,null,null,null],result:{id:P.AMMO,count:16},category:"weapons"},{name:"Igniter",pattern:[P.GOLD_INGOT,P.IRON_INGOT,null,null,null,null,null,null,null],result:{id:P.IGNITER,count:1},category:"weapons"},{name:"Bread",pattern:[P.SAND,P.SAND,P.SAND,null,null,null,null,null,null],result:{id:P.BREAD,count:1},category:"food"},{name:"Bowl",pattern:[P.PLANK,null,P.PLANK,null,P.PLANK,null,null,null,null],result:{id:P.BOWL,count:1},category:"food"},{name:"Iron Helmet",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,null,P.IRON_INGOT,null,null,null],result:{id:P.IRON_HELMET,count:1},category:"armor"},{name:"Iron Chestplate",pattern:[P.IRON_INGOT,null,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT],result:{id:P.IRON_CHESTPLATE,count:1},category:"armor"},{name:"Iron Leggings",pattern:[P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,P.IRON_INGOT,null,P.IRON_INGOT,P.IRON_INGOT,null,P.IRON_INGOT],result:{id:P.IRON_LEGGINGS,count:1},category:"armor"},{name:"Iron Boots",pattern:[P.IRON_INGOT,null,P.IRON_INGOT,P.IRON_INGOT,null,P.IRON_INGOT,null,null,null],result:{id:P.IRON_BOOTS,count:1},category:"armor"}];class Ei{static matchRecipe(e){for(const t of cc)if(Ei.matchesPattern(e,t.pattern))return t;return null}static getAvailableRecipes(e){const t=[];for(const i of cc)Ei.canCraft(i,e)&&t.push(i);return t}static canCraft(e,t){const i=new Map;for(const s of e.pattern)s!==null&&i.set(s,(i.get(s)??0)+1);const r=new Map;for(const s of t)s&&r.set(s.id,(r.get(s.id)??0)+s.count);for(const[s,o]of i)if((r.get(s)??0)<o)return!1;return!0}static getRequiredItems(e){const t=new Map;for(const i of e.pattern)i!==null&&t.set(i,(t.get(i)??0)+1);return t}static quickCraft(e,t,i){const r=Ei.getRequiredItems(e),s=new Map;for(const o of i)o&&s.set(o.id,(s.get(o.id)??0)+o.count);for(const[o,a]of r)if((s.get(o)??0)<a)return!1;for(const[o,a]of r){let l=a;for(let c=0;c<i.length&&l>0;c++)if(i[c]&&i[c].id===o){const u=Math.min(l,i[c].count);t(c,u),l-=u}}return!0}static matchesPattern(e,t){const i=Ei.getBounds(e),r=Ei.getBounds(t);if(!i||!r||i.w!==r.w||i.h!==r.h)return!1;for(let s=0;s<i.h;s++)for(let o=0;o<i.w;o++){const a=(i.y+s)*3+(i.x+o),l=(r.y+s)*3+(r.x+o);if(e[a]!==t[l])return!1}return!0}static getBounds(e){let t=3,i=3,r=-1,s=-1;for(let o=0;o<9;o++)if(e[o]!==null){const a=o%3,l=Math.floor(o/3);t=Math.min(t,a),i=Math.min(i,l),r=Math.max(r,a),s=Math.max(s,l)}return r<0?null:{x:t,y:i,w:r-t+1,h:s-i+1}}}const WC=({isOpen:n,onClose:e})=>{const{slots:t,swapSlots:i,addItem:r,removeItem:s}=hi(),[o,a]=xt.useState(new Array(9).fill(null)),[l,c]=xt.useState(null),[u,f]=xt.useState("all"),[h,p]=xt.useState(!1);if(!n)return null;const g=Ei.matchRecipe(o),y=u==="all"?cc:cc.filter(S=>S.category===u),m=S=>{l!==null?(i(l,S),c(null)):t[S]&&c(S)},d=()=>{g&&(r(g.result.id,g.result.count),a(new Array(9).fill(null)))},v=S=>{if(l!==null&&t[l]){const T=[...o];T[S]=t[l].id,a(T),s(l,1),c(null)}},_=S=>{Ei.quickCraft(S,s,t)&&r(S.result.id,S.result.count)},E=()=>{for(const S of o)S!==null&&r(S,1);a(new Array(9).fill(null))},w=[{key:"all",label:"All"},{key:"materials",label:"Materials"},{key:"blocks",label:"Blocks"},{key:"tools",label:"Tools"},{key:"weapons",label:"Weapons"},{key:"food",label:"Food"},{key:"armor",label:"Armor"}];return ee.jsxs("div",{className:"fixed inset-0 z-30 flex items-center justify-center",style:{pointerEvents:"all",fontFamily:"monospace"},children:[ee.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-70",onClick:e}),ee.jsxs("div",{className:"relative flex gap-6 p-6 bg-gray-900 border border-gray-600 rounded-lg max-h-[90vh] overflow-y-auto",children:[ee.jsxs("div",{children:[ee.jsx("h3",{className:"text-white text-sm mb-2 font-bold",children:"Inventory"}),ee.jsx("div",{className:"grid grid-cols-9 gap-1 mb-2",children:t.slice(0,9).map((S,T)=>ee.jsx("div",{onClick:()=>m(T),title:S?tr(S.id):"",className:`w-12 h-12 flex items-center justify-center border cursor-pointer relative hover:bg-gray-700 ${l===T?"border-yellow-400 bg-gray-700":"border-gray-600 bg-gray-800"}`,children:S&&ee.jsxs(ee.Fragment,{children:[ee.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:_s(S.id)}}),ee.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:S.count>1?S.count:""})]})},T))}),ee.jsx("div",{className:"grid grid-cols-9 gap-1",children:t.slice(9).map((S,T)=>{const U=T+9;return ee.jsx("div",{onClick:()=>m(U),title:S?tr(S.id):"",className:`w-12 h-12 flex items-center justify-center border cursor-pointer relative hover:bg-gray-700 ${l===U?"border-yellow-400 bg-gray-700":"border-gray-600 bg-gray-800"}`,children:S&&ee.jsxs(ee.Fragment,{children:[ee.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:_s(S.id)}}),ee.jsx("span",{className:"absolute bottom-0 right-0.5 text-xs text-white",children:S.count>1?S.count:""})]})},T)})})]}),ee.jsxs("div",{className:"flex flex-col",children:[ee.jsx("h3",{className:"text-white text-sm mb-2 font-bold",children:"Crafting Table"}),ee.jsx("div",{className:"grid grid-cols-3 gap-1 mb-2",children:o.map((S,T)=>ee.jsx("div",{onClick:()=>v(T),title:S!==null?tr(S):"",className:"w-12 h-12 flex items-center justify-center border border-gray-600 bg-gray-800 cursor-pointer hover:bg-gray-700",children:S!==null&&ee.jsx("div",{className:"w-8 h-8 rounded-sm",style:{backgroundColor:_s(S)}})},T))}),ee.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[ee.jsx("span",{className:"text-white text-lg",children:"→"}),ee.jsx("div",{onClick:d,title:g?`${tr(g.result.id)} x${g.result.count}`:"",className:`w-12 h-12 flex items-center justify-center border ${g?"border-green-500 cursor-pointer hover:bg-gray-700 animate-pulse":"border-gray-600"} bg-gray-800`,children:g&&ee.jsx("div",{className:"w-8 h-8 rounded-sm relative",style:{backgroundColor:_s(g.result.id)},children:ee.jsx("span",{className:"absolute bottom-0 right-0 text-white text-xs",children:g.result.count>1?g.result.count:""})})}),g&&ee.jsx("span",{className:"text-green-400 text-xs",children:tr(g.result.id)})]}),ee.jsx("button",{onClick:E,className:"text-xs text-gray-400 hover:text-white mb-3 cursor-pointer",children:"Clear Grid"}),ee.jsx("div",{className:"flex items-center gap-2 mb-2",children:ee.jsx("button",{onClick:()=>p(!h),className:`text-xs px-2 py-1 rounded cursor-pointer ${h?"bg-green-700 text-white":"bg-gray-700 text-gray-300"}`,children:"Quick Craft"})}),ee.jsx("div",{className:"flex flex-wrap gap-1 mb-2",children:w.map(S=>ee.jsx("button",{onClick:()=>f(S.key),className:`text-xs px-2 py-0.5 rounded cursor-pointer ${u===S.key?"bg-blue-600 text-white":"bg-gray-700 text-gray-400"}`,children:S.label},S.key))}),ee.jsx("div",{className:"max-h-64 overflow-y-auto space-y-1",children:y.map((S,T)=>{const U=Ei.canCraft(S,t),M=Ei.getRequiredItems(S);return ee.jsx("div",{onClick:()=>h&&U&&_(S),className:`text-xs p-2 rounded border ${U?"border-green-800 bg-gray-800 cursor-pointer hover:bg-gray-700":"border-gray-700 bg-gray-850 opacity-60"} ${h&&U?"hover:bg-green-900":""}`,children:ee.jsxs("div",{className:"flex items-center gap-2",children:[ee.jsx("div",{className:"w-6 h-6 rounded-sm flex-shrink-0",style:{backgroundColor:_s(S.result.id)}}),ee.jsxs("div",{children:[ee.jsxs("div",{className:`${U?"text-green-400":"text-gray-400"}`,children:[S.name," x",S.result.count]}),ee.jsx("div",{className:"text-gray-500 flex flex-wrap gap-x-2",children:Array.from(M.entries()).map(([C,V])=>ee.jsxs("span",{className:XC(C)>=V?"text-gray-400":"text-red-400",children:[tr(C),":",V]},C))})]}),h&&U&&ee.jsx("span",{className:"text-green-400 ml-auto",children:"Craft"})]})},T)})})]})]})]})};function XC(n){const e=hi.getState().slots;let t=0;for(const i of e)i&&i.id===n&&(t+=i.count);return t}const YC={[Fe.OCEAN]:"#1565C0",[Fe.BEACH]:"#FDD835",[Fe.PLAINS]:"#4CAF50",[Fe.FOREST]:"#2E7D32",[Fe.DARK_FOREST]:"#1B5E20",[Fe.SAVANNA]:"#8BC34A",[Fe.DESERT]:"#F9A825",[Fe.JUNGLE]:"#388E3C",[Fe.SNOWY_PLAINS]:"#E0E0E0",[Fe.MOUNTAINS]:"#78909C"},jC=({playerX:n,playerZ:e,getBiomeAt:t})=>{const i=xt.useRef(null),r=xt.useRef(0);return xt.useEffect(()=>{if(r.current++,r.current%10!==0)return;const s=i.current;if(!s)return;const o=s.getContext("2d");if(!o)return;const a=64,l=32;for(let c=0;c<a;c++)for(let u=0;u<a;u++){const f=Math.floor(n)+(c-l),h=Math.floor(e)+(u-l),p=t(f,h);o.fillStyle=YC[p]||"#333",o.fillRect(c,u,1,1)}o.fillStyle="#FFFFFF",o.fillRect(l-1,l-1,3,3)}),ee.jsx("canvas",{ref:i,width:64,height:64,className:"fixed top-4 right-4 z-20 border border-gray-600 rounded",style:{imageRendering:"pixelated",width:"96px",height:"96px"}})},KC=({onRespawn:n})=>ee.jsxs("div",{className:"fixed inset-0 z-40 flex flex-col items-center justify-center",style:{background:"radial-gradient(ellipse at center, rgba(139,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)",pointerEvents:"all"},children:[ee.jsx("h1",{className:"text-6xl font-bold text-red-500 mb-8 tracking-widest",children:"YOU DIED"}),ee.jsx("button",{onClick:n,className:"px-8 py-3 bg-gray-800 text-white border border-gray-500 rounded hover:bg-gray-700 text-lg cursor-pointer",children:"Respawn"})]}),qC=({onNewGame:n,onLoadGame:e,hasSave:t})=>{const[i,r]=xt.useState(""),s=()=>{const o=i?parseInt(i)||0:Math.floor(Math.random()*999999);n(o)};return ee.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950",style:{pointerEvents:"all"},children:[ee.jsx("h1",{className:"text-5xl font-bold text-white mb-2 tracking-wider",children:"VOXEL SURVIVAL"}),ee.jsx("p",{className:"text-gray-400 mb-8",children:"A block world awaits"}),ee.jsxs("div",{className:"flex flex-col items-center gap-4 mb-8",children:[ee.jsx("input",{type:"text",placeholder:"Seed (optional)",value:i,onChange:o=>r(o.target.value),className:"px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded w-64 text-center"}),ee.jsx("button",{onClick:s,className:"px-8 py-3 bg-green-700 text-white rounded hover:bg-green-600 text-lg font-bold w-64 cursor-pointer",children:"New Game"}),t&&ee.jsx("button",{onClick:e,className:"px-8 py-3 bg-blue-700 text-white rounded hover:bg-blue-600 text-lg font-bold w-64 cursor-pointer",children:"Load Game"})]}),ee.jsxs("div",{className:"text-gray-500 text-sm max-w-md text-center",children:[ee.jsx("h3",{className:"text-gray-400 font-bold mb-2",children:"Controls"}),ee.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-1 text-left",children:[ee.jsx("span",{children:"WASD"}),ee.jsx("span",{children:"Move"}),ee.jsx("span",{children:"Mouse"}),ee.jsx("span",{children:"Look"}),ee.jsx("span",{children:"Space"}),ee.jsx("span",{children:"Jump"}),ee.jsx("span",{children:"Shift"}),ee.jsx("span",{children:"Sprint"}),ee.jsx("span",{children:"LMB"}),ee.jsx("span",{children:"Break Block"}),ee.jsx("span",{children:"E"}),ee.jsx("span",{children:"Place Block"}),ee.jsx("span",{children:"F"}),ee.jsx("span",{children:"Drink Water"}),ee.jsx("span",{children:"Tab"}),ee.jsx("span",{children:"Inventory"}),ee.jsx("span",{children:"1-9"}),ee.jsx("span",{children:"Hotbar Slot"}),ee.jsx("span",{children:"Scroll"}),ee.jsx("span",{children:"Cycle Slot"}),ee.jsx("span",{children:"F5"}),ee.jsx("span",{children:"Save Game"})]})]})]})},$C=()=>ee.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none",children:ee.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:[ee.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),ee.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"14",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),ee.jsx("line",{x1:"2",y1:"8",x2:"6",y2:"8",stroke:"white",strokeWidth:"1.5",opacity:"0.8"}),ee.jsx("line",{x1:"10",y1:"8",x2:"14",y2:"8",stroke:"white",strokeWidth:"1.5",opacity:"0.8"})]})}),ZC=()=>{const n=xt.useRef(null),e=xt.useRef(null),[t,i]=xt.useState("menu"),[r,s]=xt.useState(!1),[o,a]=xt.useState({health:100,hunger:100,thirst:100,stamina:100,temperature:.2,mana:100,maxMana:100}),[l,c]=xt.useState([]);xt.useEffect(()=>{const d=new GC;return e.current=d,d.saveManager.hasSave().then(s),()=>{d.stop()}},[]);const u=xt.useCallback(d=>{if(!d||!e.current)return;const v=e.current,_=v.renderer.getDomElement();d.appendChild(_),v.init(_),v.onStateChange=E=>{i(E)},v.onStatsUpdate=E=>{a(E)},v.onPickupNotification=E=>{c([...E])}},[]),f=xt.useCallback(d=>{if(!e.current)return;const v=n.current;v&&u(v),e.current.startGame(d)},[u]),h=xt.useCallback(()=>{if(!e.current)return;const d=n.current;d&&u(d),e.current.loadGame()},[u]),p=xt.useCallback(()=>{e.current?.respawn()},[]),g=xt.useCallback(()=>{e.current&&(e.current.gameState="playing",i("playing"))},[]),y=e.current?.player?.position.x??0,m=e.current?.player?.position.z??0;return ee.jsxs("div",{className:"w-full h-full relative",children:[ee.jsx("div",{ref:n,className:"w-full h-full"}),t==="menu"&&ee.jsx(qC,{onNewGame:f,onLoadGame:h,hasSave:r}),t==="playing"&&ee.jsxs(ee.Fragment,{children:[ee.jsx(hg,{health:o.health,hunger:o.hunger,thirst:o.thirst,stamina:o.stamina,temperature:o.temperature,mana:o.mana,maxMana:o.maxMana,hasStaff:!1,breakProgress:e.current?.blockInteraction?.getBreakProgress()??0,pickupNotifications:l}),ee.jsx($C,{}),ee.jsx(jC,{playerX:y,playerZ:m,getBiomeAt:(d,v)=>e.current?.getBiomeAt(d,v)??0})]}),t==="inventory"&&ee.jsxs(ee.Fragment,{children:[ee.jsx(hg,{health:o.health,hunger:o.hunger,thirst:o.thirst,stamina:o.stamina,temperature:o.temperature,mana:o.mana,maxMana:o.maxMana,hasStaff:!1,breakProgress:0,pickupNotifications:l}),ee.jsx(WC,{isOpen:!0,onClose:g})]}),t==="dead"&&ee.jsx(KC,{onRespawn:p})]})};qu.createRoot(document.getElementById("root")).render(ee.jsx(Mg.StrictMode,{children:ee.jsx(ZC,{})}));
//# sourceMappingURL=index-DbJfETIR.js.map
