(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ky={exports:{}},Fl={},Cy={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),qE=Symbol.for("react.portal"),WE=Symbol.for("react.fragment"),GE=Symbol.for("react.strict_mode"),KE=Symbol.for("react.profiler"),QE=Symbol.for("react.provider"),XE=Symbol.for("react.context"),YE=Symbol.for("react.forward_ref"),JE=Symbol.for("react.suspense"),ZE=Symbol.for("react.memo"),eT=Symbol.for("react.lazy"),Lp=Symbol.iterator;function tT(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var Ry={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Py=Object.assign,xy={};function Qi(t,e,n){this.props=t,this.context=e,this.refs=xy,this.updater=n||Ry}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ny(){}Ny.prototype=Qi.prototype;function Xh(t,e,n){this.props=t,this.context=e,this.refs=xy,this.updater=n||Ry}var Yh=Xh.prototype=new Ny;Yh.constructor=Xh;Py(Yh,Qi.prototype);Yh.isPureReactComponent=!0;var Mp=Array.isArray,Dy=Object.prototype.hasOwnProperty,Jh={current:null},Vy={key:!0,ref:!0,__self:!0,__source:!0};function by(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dy.call(e,r)&&!Vy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ao,type:t,key:s,ref:o,props:i,_owner:Jh.current}}function nT(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function rT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fp=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rT(""+t.key):e.toString(36)}function Ra(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ao:case qE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gu(o,0):r,Mp(i)?(n="",t!=null&&(n=t.replace(Fp,"$&/")+"/"),Ra(i,e,n,"",function(h){return h})):i!=null&&(Zh(i)&&(i=nT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Gu(s,l);o+=Ra(s,e,n,u,i)}else if(u=tT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Gu(s,l++),o+=Ra(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(t,e,n){if(t==null)return t;var r=[],i=0;return Ra(t,r,"","",function(s){return e.call(n,s,i++)}),r}function iT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Pa={transition:null},sT={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Pa,ReactCurrentOwner:Jh};function Oy(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!Zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Qi;ee.Fragment=WE;ee.Profiler=KE;ee.PureComponent=Xh;ee.StrictMode=GE;ee.Suspense=JE;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sT;ee.act=Oy;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Py({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Dy.call(e,u)&&!Vy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ao,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:XE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QE,_context:t},t.Consumer=t};ee.createElement=by;ee.createFactory=function(t){var e=by.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:YE,render:t}};ee.isValidElement=Zh;ee.lazy=function(t){return{$$typeof:eT,_payload:{_status:-1,_result:t},_init:iT}};ee.memo=function(t,e){return{$$typeof:ZE,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Pa.transition;Pa.transition={};try{t()}finally{Pa.transition=e}};ee.unstable_act=Oy;ee.useCallback=function(t,e){return lt.current.useCallback(t,e)};ee.useContext=function(t){return lt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return lt.current.useEffect(t,e)};ee.useId=function(){return lt.current.useId()};ee.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return lt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};ee.useRef=function(t){return lt.current.useRef(t)};ee.useState=function(t){return lt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return lt.current.useTransition()};ee.version="18.3.1";Cy.exports=ee;var Pe=Cy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oT=Pe,aT=Symbol.for("react.element"),lT=Symbol.for("react.fragment"),uT=Object.prototype.hasOwnProperty,cT=oT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hT={key:!0,ref:!0,__self:!0,__source:!0};function Ly(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uT.call(e,r)&&!hT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aT,type:t,key:s,ref:o,props:i,_owner:cT.current}}Fl.Fragment=lT;Fl.jsx=Ly;Fl.jsxs=Ly;ky.exports=Fl;var A=ky.exports,My={exports:{}},At={},Fy={exports:{}},jy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,W){var G=M.length;M.push(W);e:for(;0<G;){var ce=G-1>>>1,le=M[ce];if(0<i(le,W))M[ce]=W,M[G]=le,G=ce;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var W=M[0],G=M.pop();if(G!==W){M[0]=G;e:for(var ce=0,le=M.length,Ae=le>>>1;ce<Ae;){var ln=2*(ce+1)-1,un=M[ln],cn=ln+1,hn=M[cn];if(0>i(un,G))cn<le&&0>i(hn,un)?(M[ce]=hn,M[cn]=G,ce=cn):(M[ce]=un,M[ln]=G,ce=ln);else if(cn<le&&0>i(hn,G))M[ce]=hn,M[cn]=G,ce=cn;else break e}}return W}function i(M,W){var G=M.sortIndex-W.sortIndex;return G!==0?G:M.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,k=!1,x=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(M){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=M)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function V(M){if(N=!1,S(M),!x)if(n(u)!==null)x=!0,Ar(z);else{var W=n(h);W!==null&&B(V,W.startTime-M)}}function z(M,W){x=!1,N&&(N=!1,I(y),y=-1),k=!0;var G=m;try{for(S(W),p=n(u);p!==null&&(!(p.expirationTime>W)||M&&!C());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,m=p.priorityLevel;var le=ce(p.expirationTime<=W);W=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),S(W)}else r(u);p=n(u)}if(p!==null)var Ae=!0;else{var ln=n(h);ln!==null&&B(V,ln.startTime-W),Ae=!1}return Ae}finally{p=null,m=G,k=!1}}var j=!1,w=null,y=-1,_=5,E=-1;function C(){return!(t.unstable_now()-E<_)}function R(){if(w!==null){var M=t.unstable_now();E=M;var W=!0;try{W=w(!0,M)}finally{W?T():(j=!1,w=null)}}else j=!1}var T;if(typeof v=="function")T=function(){v(R)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,an=ct.port2;ct.port1.onmessage=R,T=function(){an.postMessage(null)}}else T=function(){O(R,0)};function Ar(M){w=M,j||(j=!0,T())}function B(M,W){y=O(function(){M(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){x||k||(x=!0,Ar(z))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(M){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var G=m;m=W;try{return M()}finally{m=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,W){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var G=m;m=M;try{return W()}finally{m=G}},t.unstable_scheduleCallback=function(M,W,G){var ce=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ce+G:ce):G=ce,M){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=G+le,M={id:f++,callback:W,priorityLevel:M,startTime:G,expirationTime:le,sortIndex:-1},G>ce?(M.sortIndex=G,e(h,M),n(u)===null&&M===n(h)&&(N?(I(y),y=-1):N=!0,B(V,G-ce))):(M.sortIndex=le,e(u,M),x||k||(x=!0,Ar(z))),M},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(M){var W=m;return function(){var G=m;m=W;try{return M.apply(this,arguments)}finally{m=G}}}})(jy);Fy.exports=jy;var dT=Fy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fT=Pe,St=dT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uy=new Set,Ys={};function Xr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(Ys[t]=e,t=0;t<e.length;t++)Uy.add(e[t])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=Object.prototype.hasOwnProperty,pT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},Up={};function mT(t){return Nc.call(Up,t)?!0:Nc.call(jp,t)?!1:pT.test(t)?Up[t]=!0:(jp[t]=!0,!1)}function gT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yT(t,e,n,r){if(e===null||typeof e>"u"||gT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ed,td);He[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ed,td);He[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ed,td);He[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function nd(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yT(e,n,i,r)&&(n=null),r||i===null?mT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=fT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),di=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),zy=Symbol.for("react.provider"),By=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),$y=Symbol.for("react.offscreen"),zp=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Ku;function Cs(t){if(Ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+t}var Qu=!1;function Xu(t,e){if(!t||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Cs(t):""}function vT(t){switch(t.tag){case 5:return Cs(t.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 2:case 15:return t=Xu(t.type,!1),t;case 11:return t=Xu(t.type.render,!1),t;case 1:return t=Xu(t.type,!0),t;default:return""}}function Oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fi:return"Fragment";case di:return"Portal";case Dc:return"Profiler";case rd:return"StrictMode";case Vc:return"Suspense";case bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case By:return(t.displayName||"Context")+".Consumer";case zy:return(t._context.displayName||"Context")+".Provider";case id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sd:return e=t.displayName||null,e!==null?e:Oc(t.type)||"Memo";case Mn:e=t._payload,t=t._init;try{return Oc(t(e))}catch{}}return null}function _T(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oc(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wT(t){var e=Hy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=wT(t))}function qy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lc(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wy(t,e){e=e.checked,e!=null&&nd(t,"checked",e,!1)}function Mc(t,e){Wy(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fc(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fc(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rs=Array.isArray;function Ai(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Rs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function Gy(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ky(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ky(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,Qy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ET=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){ET.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function Xy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function Yy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TT=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(t,e){if(e){if(TT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hc=null,ki=null,Ci=null;function Wp(t){if(t=Ro(t)){if(typeof Hc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=$l(e),Hc(t.stateNode,t.type,e))}}function Jy(t){ki?Ci?Ci.push(t):Ci=[t]:ki=t}function Zy(){if(ki){var t=ki,e=Ci;if(Ci=ki=null,Wp(t),e)for(t=0;t<e.length;t++)Wp(e[t])}}function ev(t,e){return t(e)}function tv(){}var Yu=!1;function nv(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return ev(t,e,n)}finally{Yu=!1,(ki!==null||Ci!==null)&&(tv(),Zy())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var qc=!1;if(En)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){qc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{qc=!1}function IT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ms=!1,Ya=null,Ja=!1,Wc=null,ST={onError:function(t){Ms=!0,Ya=t}};function AT(t,e,n,r,i,s,o,l,u){Ms=!1,Ya=null,IT.apply(ST,arguments)}function kT(t,e,n,r,i,s,o,l,u){if(AT.apply(this,arguments),Ms){if(Ms){var h=Ya;Ms=!1,Ya=null}else throw Error(F(198));Ja||(Ja=!0,Wc=h)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(Yr(t)!==t)throw Error(F(188))}function CT(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gp(i),t;if(s===r)return Gp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function iv(t){return t=CT(t),t!==null?sv(t):null}function sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sv(t);if(e!==null)return e;t=t.sibling}return null}var ov=St.unstable_scheduleCallback,Kp=St.unstable_cancelCallback,RT=St.unstable_shouldYield,PT=St.unstable_requestPaint,Ce=St.unstable_now,xT=St.unstable_getCurrentPriorityLevel,ad=St.unstable_ImmediatePriority,av=St.unstable_UserBlockingPriority,Za=St.unstable_NormalPriority,NT=St.unstable_LowPriority,lv=St.unstable_IdlePriority,jl=null,Yt=null;function DT(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:OT,VT=Math.log,bT=Math.LN2;function OT(t){return t>>>=0,t===0?32:31-(VT(t)/bT|0)|0}var ua=64,ca=4194304;function Ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ps(l):(s&=o,s!==0&&(r=Ps(s)))}else o=n&~i,o!==0?r=Ps(o):s!==0&&(r=Ps(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function LT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=LT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uv(){var t=ua;return ua<<=1,!(ua&4194240)&&(ua=64),t}function Ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function FT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function cv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hv,ud,dv,fv,pv,Kc=!1,ha=[],Kn=null,Qn=null,Xn=null,eo=new Map,to=new Map,jn=[],jT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qp(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function Es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ro(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function UT(t,e,n,r,i){switch(e){case"focusin":return Kn=Es(Kn,t,e,n,r,i),!0;case"dragenter":return Qn=Es(Qn,t,e,n,r,i),!0;case"mouseover":return Xn=Es(Xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eo.set(s,Es(eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,to.set(s,Es(to.get(s)||null,t,e,n,r,i)),!0}return!1}function mv(t){var e=Vr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=rv(n),e!==null){t.blockedOn=e,pv(t.priority,function(){dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$c=r,n.target.dispatchEvent(r),$c=null}else return e=Ro(n),e!==null&&ud(e),t.blockedOn=n,!1;e.shift()}return!0}function Xp(t,e,n){xa(t)&&n.delete(e)}function zT(){Kc=!1,Kn!==null&&xa(Kn)&&(Kn=null),Qn!==null&&xa(Qn)&&(Qn=null),Xn!==null&&xa(Xn)&&(Xn=null),eo.forEach(Xp),to.forEach(Xp)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,zT)))}function no(t){function e(i){return Ts(i,t)}if(0<ha.length){Ts(ha[0],t);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kn!==null&&Ts(Kn,t),Qn!==null&&Ts(Qn,t),Xn!==null&&Ts(Xn,t),eo.forEach(e),to.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)mv(n),n.blockedOn===null&&jn.shift()}var Ri=xn.ReactCurrentBatchConfig,tl=!0;function BT(t,e,n,r){var i=ae,s=Ri.transition;Ri.transition=null;try{ae=1,cd(t,e,n,r)}finally{ae=i,Ri.transition=s}}function $T(t,e,n,r){var i=ae,s=Ri.transition;Ri.transition=null;try{ae=4,cd(t,e,n,r)}finally{ae=i,Ri.transition=s}}function cd(t,e,n,r){if(tl){var i=Qc(t,e,n,r);if(i===null)lc(t,e,r,nl,n),Qp(t,r);else if(UT(i,t,e,n,r))r.stopPropagation();else if(Qp(t,r),e&4&&-1<jT.indexOf(t)){for(;i!==null;){var s=Ro(i);if(s!==null&&hv(s),s=Qc(t,e,n,r),s===null&&lc(t,e,r,nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lc(t,e,r,null,n)}}var nl=null;function Qc(t,e,n,r){if(nl=null,t=od(r),t=Vr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function gv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xT()){case ad:return 1;case av:return 4;case Za:case NT:return 16;case lv:return 536870912;default:return 16}default:return 16}}var qn=null,hd=null,Na=null;function yv(){if(Na)return Na;var t,e=hd,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Na=i.slice(t,1<r?1-r:void 0)}function Da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function Yp(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?da:Yp,this.isPropagationStopped=Yp,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=kt(Xi),Co=we({},Xi,{view:0,detail:0}),HT=kt(Co),Zu,ec,Is,Ul=we({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Zu=t.screenX-Is.screenX,ec=t.screenY-Is.screenY):ec=Zu=0,Is=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),Jp=kt(Ul),qT=we({},Ul,{dataTransfer:0}),WT=kt(qT),GT=we({},Co,{relatedTarget:0}),tc=kt(GT),KT=we({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),QT=kt(KT),XT=we({},Xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YT=kt(XT),JT=we({},Xi,{data:0}),Zp=kt(JT),ZT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=t1[t])?!!e[t]:!1}function fd(){return n1}var r1=we({},Co,{key:function(t){if(t.key){var e=ZT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(t){return t.type==="keypress"?Da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i1=kt(r1),s1=we({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=kt(s1),o1=we({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),a1=kt(o1),l1=we({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),u1=kt(l1),c1=we({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h1=kt(c1),d1=[9,13,27,32],pd=En&&"CompositionEvent"in window,Fs=null;En&&"documentMode"in document&&(Fs=document.documentMode);var f1=En&&"TextEvent"in window&&!Fs,vv=En&&(!pd||Fs&&8<Fs&&11>=Fs),tm=" ",nm=!1;function _v(t,e){switch(t){case"keyup":return d1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pi=!1;function p1(t,e){switch(t){case"compositionend":return wv(e);case"keypress":return e.which!==32?null:(nm=!0,tm);case"textInput":return t=e.data,t===tm&&nm?null:t;default:return null}}function m1(t,e){if(pi)return t==="compositionend"||!pd&&_v(t,e)?(t=yv(),Na=hd=qn=null,pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vv&&e.locale!=="ko"?null:e.data;default:return null}}var g1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!g1[t.type]:e==="textarea"}function Ev(t,e,n,r){Jy(r),e=rl(e,"onChange"),0<e.length&&(n=new dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var js=null,ro=null;function y1(t){Dv(t,0)}function zl(t){var e=yi(t);if(qy(e))return t}function v1(t,e){if(t==="change")return e}var Tv=!1;if(En){var nc;if(En){var rc="oninput"in document;if(!rc){var im=document.createElement("div");im.setAttribute("oninput","return;"),rc=typeof im.oninput=="function"}nc=rc}else nc=!1;Tv=nc&&(!document.documentMode||9<document.documentMode)}function sm(){js&&(js.detachEvent("onpropertychange",Iv),ro=js=null)}function Iv(t){if(t.propertyName==="value"&&zl(ro)){var e=[];Ev(e,ro,t,od(t)),nv(y1,e)}}function _1(t,e,n){t==="focusin"?(sm(),js=e,ro=n,js.attachEvent("onpropertychange",Iv)):t==="focusout"&&sm()}function w1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(ro)}function E1(t,e){if(t==="click")return zl(e)}function T1(t,e){if(t==="input"||t==="change")return zl(e)}function I1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:I1;function io(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nc.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,e){var n=om(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=om(n)}}function Sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Av(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function S1(t){var e=Av(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sv(n.ownerDocument.documentElement,n)){if(r!==null&&md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=am(n,s);var o=am(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var A1=En&&"documentMode"in document&&11>=document.documentMode,mi=null,Xc=null,Us=null,Yc=!1;function lm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yc||mi==null||mi!==Xa(r)||(r=mi,"selectionStart"in r&&md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&io(Us,r)||(Us=r,r=rl(Xc,"onSelect"),0<r.length&&(e=new dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mi)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gi={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},ic={},kv={};En&&(kv=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Bl(t){if(ic[t])return ic[t];if(!gi[t])return t;var e=gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kv)return ic[t]=e[n];return t}var Cv=Bl("animationend"),Rv=Bl("animationiteration"),Pv=Bl("animationstart"),xv=Bl("transitionend"),Nv=new Map,um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){Nv.set(t,e),Xr(e,[t])}for(var sc=0;sc<um.length;sc++){var oc=um[sc],k1=oc.toLowerCase(),C1=oc[0].toUpperCase()+oc.slice(1);wr(k1,"on"+C1)}wr(Cv,"onAnimationEnd");wr(Rv,"onAnimationIteration");wr(Pv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(xv,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function cm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kT(r,e,void 0,t),t.currentTarget=null}function Dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;cm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;cm(i,l,h),s=u}}}if(Ja)throw t=Wc,Ja=!1,Wc=null,t}function pe(t,e){var n=e[nh];n===void 0&&(n=e[nh]=new Set);var r=t+"__bubble";n.has(r)||(Vv(e,t,2,!1),n.add(r))}function ac(t,e,n){var r=0;e&&(r|=4),Vv(n,t,r,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[pa]){t[pa]=!0,Uy.forEach(function(n){n!=="selectionchange"&&(R1.has(n)||ac(n,!1,t),ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,ac("selectionchange",!1,e))}}function Vv(t,e,n,r){switch(gv(e)){case 1:var i=BT;break;case 4:i=$T;break;default:i=cd}n=i.bind(null,e,n,t),i=void 0,!qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}nv(function(){var h=s,f=od(n),p=[];e:{var m=Nv.get(t);if(m!==void 0){var k=dd,x=t;switch(t){case"keypress":if(Da(n)===0)break e;case"keydown":case"keyup":k=i1;break;case"focusin":x="focus",k=tc;break;case"focusout":x="blur",k=tc;break;case"beforeblur":case"afterblur":k=tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=WT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=a1;break;case Cv:case Rv:case Pv:k=QT;break;case xv:k=u1;break;case"scroll":k=HT;break;case"wheel":k=h1;break;case"copy":case"cut":case"paste":k=YT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=em}var N=(e&4)!==0,O=!N&&t==="scroll",I=N?m!==null?m+"Capture":null:m;N=[];for(var v=h,S;v!==null;){S=v;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=Zs(v,I),V!=null&&N.push(oo(v,V,S)))),O)break;v=v.return}0<N.length&&(m=new k(m,x,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",m&&n!==$c&&(x=n.relatedTarget||n.fromElement)&&(Vr(x)||x[Tn]))break e;if((k||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=h,x=x?Vr(x):null,x!==null&&(O=Yr(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=h),k!==x)){if(N=Jp,V="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=em,V="onPointerLeave",I="onPointerEnter",v="pointer"),O=k==null?m:yi(k),S=x==null?m:yi(x),m=new N(V,v+"leave",k,n,f),m.target=O,m.relatedTarget=S,V=null,Vr(f)===h&&(N=new N(I,v+"enter",x,n,f),N.target=S,N.relatedTarget=O,V=N),O=V,k&&x)t:{for(N=k,I=x,v=0,S=N;S;S=si(S))v++;for(S=0,V=I;V;V=si(V))S++;for(;0<v-S;)N=si(N),v--;for(;0<S-v;)I=si(I),S--;for(;v--;){if(N===I||I!==null&&N===I.alternate)break t;N=si(N),I=si(I)}N=null}else N=null;k!==null&&hm(p,m,k,N,!1),x!==null&&O!==null&&hm(p,O,x,N,!0)}}e:{if(m=h?yi(h):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var z=v1;else if(rm(m))if(Tv)z=T1;else{z=w1;var j=_1}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=E1);if(z&&(z=z(t,h))){Ev(p,z,n,f);break e}j&&j(t,m,h),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Fc(m,"number",m.value)}switch(j=h?yi(h):window,t){case"focusin":(rm(j)||j.contentEditable==="true")&&(mi=j,Xc=h,Us=null);break;case"focusout":Us=Xc=mi=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,lm(p,n,f);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":lm(p,n,f)}var w;if(pd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else pi?_v(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(vv&&n.locale!=="ko"&&(pi||y!=="onCompositionStart"?y==="onCompositionEnd"&&pi&&(w=yv()):(qn=f,hd="value"in qn?qn.value:qn.textContent,pi=!0)),j=rl(h,y),0<j.length&&(y=new Zp(y,t,null,n,f),p.push({event:y,listeners:j}),w?y.data=w:(w=wv(n),w!==null&&(y.data=w)))),(w=f1?p1(t,n):m1(t,n))&&(h=rl(h,"onBeforeInput"),0<h.length&&(f=new Zp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=w))}Dv(p,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(oo(t,s,i)),s=Zs(t,e),s!=null&&r.push(oo(t,s,i))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Zs(n,s),u!=null&&o.unshift(oo(n,u,l))):i||(u=Zs(n,s),u!=null&&o.push(oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var P1=/\r\n?/g,x1=/\u0000|\uFFFD/g;function dm(t){return(typeof t=="string"?t:""+t).replace(P1,`
`).replace(x1,"")}function ma(t,e,n){if(e=dm(e),dm(t)!==e&&n)throw Error(F(425))}function il(){}var Jc=null,Zc=null;function eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var th=typeof setTimeout=="function"?setTimeout:void 0,N1=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(t){return fm.resolve(null).then(t).catch(V1)}:th;function V1(t){setTimeout(function(){throw t})}function uc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);no(e)}function Yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yi=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Yi,ao="__reactProps$"+Yi,Tn="__reactContainer$"+Yi,nh="__reactEvents$"+Yi,b1="__reactListeners$"+Yi,O1="__reactHandles$"+Yi;function Vr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pm(t);t!==null;){if(n=t[Xt])return n;t=pm(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[Xt]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function $l(t){return t[ao]||null}var rh=[],vi=-1;function Er(t){return{current:t}}function ge(t){0>vi||(t.current=rh[vi],rh[vi]=null,vi--)}function de(t,e){vi++,rh[vi]=t.current,t.current=e}var cr={},nt=Er(cr),mt=Er(!1),Ur=cr;function Mi(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function sl(){ge(mt),ge(nt)}function mm(t,e,n){if(nt.current!==cr)throw Error(F(168));de(nt,e),de(mt,n)}function bv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,_T(t)||"Unknown",i));return we({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Ur=nt.current,de(nt,t),de(mt,mt.current),!0}function gm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=bv(t,e,Ur),r.__reactInternalMemoizedMergedChildContext=t,ge(mt),ge(nt),de(nt,t)):ge(mt),de(mt,n)}var mn=null,Hl=!1,cc=!1;function Ov(t){mn===null?mn=[t]:mn.push(t)}function L1(t){Hl=!0,Ov(t)}function Tr(){if(!cc&&mn!==null){cc=!0;var t=0,e=ae;try{var n=mn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,Hl=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),ov(ad,Tr),i}finally{ae=e,cc=!1}}return null}var _i=[],wi=0,al=null,ll=0,Ct=[],Rt=0,zr=null,gn=1,yn="";function xr(t,e){_i[wi++]=ll,_i[wi++]=al,al=t,ll=e}function Lv(t,e,n){Ct[Rt++]=gn,Ct[Rt++]=yn,Ct[Rt++]=zr,zr=t;var r=gn;t=yn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-$t(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function gd(t){t.return!==null&&(xr(t,1),Lv(t,1,0))}function yd(t){for(;t===al;)al=_i[--wi],_i[wi]=null,ll=_i[--wi],_i[wi]=null;for(;t===zr;)zr=Ct[--Rt],Ct[Rt]=null,yn=Ct[--Rt],Ct[Rt]=null,gn=Ct[--Rt],Ct[Rt]=null}var It=null,Et=null,ye=!1,Ut=null;function Mv(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,Et=Yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,Et=null,!0):!1;default:return!1}}function ih(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sh(t){if(ye){var e=Et;if(e){var n=e;if(!ym(t,e)){if(ih(t))throw Error(F(418));e=Yn(n.nextSibling);var r=It;e&&ym(t,e)?Mv(r,n):(t.flags=t.flags&-4097|2,ye=!1,It=t)}}else{if(ih(t))throw Error(F(418));t.flags=t.flags&-4097|2,ye=!1,It=t}}}function vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function ga(t){if(t!==It)return!1;if(!ye)return vm(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eh(t.type,t.memoizedProps)),e&&(e=Et)){if(ih(t))throw Fv(),Error(F(418));for(;e;)Mv(t,e),e=Yn(e.nextSibling)}if(vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=Yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=It?Yn(t.stateNode.nextSibling):null;return!0}function Fv(){for(var t=Et;t;)t=Yn(t.nextSibling)}function Fi(){Et=It=null,ye=!1}function vd(t){Ut===null?Ut=[t]:Ut.push(t)}var M1=xn.ReactCurrentBatchConfig;function Ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _m(t){var e=t._init;return e(t._payload)}function jv(t){function e(I,v){if(t){var S=I.deletions;S===null?(I.deletions=[v],I.flags|=16):S.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=tr(I,v),I.index=0,I.sibling=null,I}function s(I,v,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<v?(I.flags|=2,v):S):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,S,V){return v===null||v.tag!==6?(v=yc(S,I.mode,V),v.return=I,v):(v=i(v,S),v.return=I,v)}function u(I,v,S,V){var z=S.type;return z===fi?f(I,v,S.props.children,V,S.key):v!==null&&(v.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Mn&&_m(z)===v.type)?(V=i(v,S.props),V.ref=Ss(I,v,S),V.return=I,V):(V=ja(S.type,S.key,S.props,null,I.mode,V),V.ref=Ss(I,v,S),V.return=I,V)}function h(I,v,S,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=vc(S,I.mode,V),v.return=I,v):(v=i(v,S.children||[]),v.return=I,v)}function f(I,v,S,V,z){return v===null||v.tag!==7?(v=Fr(S,I.mode,V,z),v.return=I,v):(v=i(v,S),v.return=I,v)}function p(I,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yc(""+v,I.mode,S),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oa:return S=ja(v.type,v.key,v.props,null,I.mode,S),S.ref=Ss(I,null,v),S.return=I,S;case di:return v=vc(v,I.mode,S),v.return=I,v;case Mn:var V=v._init;return p(I,V(v._payload),S)}if(Rs(v)||_s(v))return v=Fr(v,I.mode,S,null),v.return=I,v;ya(I,v)}return null}function m(I,v,S,V){var z=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:l(I,v,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oa:return S.key===z?u(I,v,S,V):null;case di:return S.key===z?h(I,v,S,V):null;case Mn:return z=S._init,m(I,v,z(S._payload),V)}if(Rs(S)||_s(S))return z!==null?null:f(I,v,S,V,null);ya(I,S)}return null}function k(I,v,S,V,z){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(v,I,""+V,z);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case oa:return I=I.get(V.key===null?S:V.key)||null,u(v,I,V,z);case di:return I=I.get(V.key===null?S:V.key)||null,h(v,I,V,z);case Mn:var j=V._init;return k(I,v,S,j(V._payload),z)}if(Rs(V)||_s(V))return I=I.get(S)||null,f(v,I,V,z,null);ya(v,V)}return null}function x(I,v,S,V){for(var z=null,j=null,w=v,y=v=0,_=null;w!==null&&y<S.length;y++){w.index>y?(_=w,w=null):_=w.sibling;var E=m(I,w,S[y],V);if(E===null){w===null&&(w=_);break}t&&w&&E.alternate===null&&e(I,w),v=s(E,v,y),j===null?z=E:j.sibling=E,j=E,w=_}if(y===S.length)return n(I,w),ye&&xr(I,y),z;if(w===null){for(;y<S.length;y++)w=p(I,S[y],V),w!==null&&(v=s(w,v,y),j===null?z=w:j.sibling=w,j=w);return ye&&xr(I,y),z}for(w=r(I,w);y<S.length;y++)_=k(w,I,y,S[y],V),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?y:_.key),v=s(_,v,y),j===null?z=_:j.sibling=_,j=_);return t&&w.forEach(function(C){return e(I,C)}),ye&&xr(I,y),z}function N(I,v,S,V){var z=_s(S);if(typeof z!="function")throw Error(F(150));if(S=z.call(S),S==null)throw Error(F(151));for(var j=z=null,w=v,y=v=0,_=null,E=S.next();w!==null&&!E.done;y++,E=S.next()){w.index>y?(_=w,w=null):_=w.sibling;var C=m(I,w,E.value,V);if(C===null){w===null&&(w=_);break}t&&w&&C.alternate===null&&e(I,w),v=s(C,v,y),j===null?z=C:j.sibling=C,j=C,w=_}if(E.done)return n(I,w),ye&&xr(I,y),z;if(w===null){for(;!E.done;y++,E=S.next())E=p(I,E.value,V),E!==null&&(v=s(E,v,y),j===null?z=E:j.sibling=E,j=E);return ye&&xr(I,y),z}for(w=r(I,w);!E.done;y++,E=S.next())E=k(w,I,y,E.value,V),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?y:E.key),v=s(E,v,y),j===null?z=E:j.sibling=E,j=E);return t&&w.forEach(function(R){return e(I,R)}),ye&&xr(I,y),z}function O(I,v,S,V){if(typeof S=="object"&&S!==null&&S.type===fi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case oa:e:{for(var z=S.key,j=v;j!==null;){if(j.key===z){if(z=S.type,z===fi){if(j.tag===7){n(I,j.sibling),v=i(j,S.props.children),v.return=I,I=v;break e}}else if(j.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Mn&&_m(z)===j.type){n(I,j.sibling),v=i(j,S.props),v.ref=Ss(I,j,S),v.return=I,I=v;break e}n(I,j);break}else e(I,j);j=j.sibling}S.type===fi?(v=Fr(S.props.children,I.mode,V,S.key),v.return=I,I=v):(V=ja(S.type,S.key,S.props,null,I.mode,V),V.ref=Ss(I,v,S),V.return=I,I=V)}return o(I);case di:e:{for(j=S.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(I,v.sibling),v=i(v,S.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=vc(S,I.mode,V),v.return=I,I=v}return o(I);case Mn:return j=S._init,O(I,v,j(S._payload),V)}if(Rs(S))return x(I,v,S,V);if(_s(S))return N(I,v,S,V);ya(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,S),v.return=I,I=v):(n(I,v),v=yc(S,I.mode,V),v.return=I,I=v),o(I)):n(I,v)}return O}var ji=jv(!0),Uv=jv(!1),ul=Er(null),cl=null,Ei=null,_d=null;function wd(){_d=Ei=cl=null}function Ed(t){var e=ul.current;ge(ul),t._currentValue=e}function oh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pi(t,e){cl=t,_d=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(_d!==t)if(t={context:t,memoizedValue:e,next:null},Ei===null){if(cl===null)throw Error(F(308));Ei=t,cl.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return e}var br=null;function Td(t){br===null?br=[t]:br.push(t)}function zv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Td(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,Td(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}function wm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,k=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,N=l;switch(m=e,k=n,N.tag){case 1:if(x=N.payload,typeof x=="function"){p=x.call(k,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=N.payload,m=typeof x=="function"?x.call(k,p,m):x,m==null)break e;p=we({},p,m);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else k={eventTime:k,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=p):f=f.next=k,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=p}}function Em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Po={},Jt=Er(Po),lo=Er(Po),uo=Er(Po);function Or(t){if(t===Po)throw Error(F(174));return t}function Sd(t,e){switch(de(uo,e),de(lo,t),de(Jt,Po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uc(e,t)}ge(Jt),de(Jt,e)}function Ui(){ge(Jt),ge(lo),ge(uo)}function $v(t){Or(uo.current);var e=Or(Jt.current),n=Uc(e,t.type);e!==n&&(de(lo,t),de(Jt,n))}function Ad(t){lo.current===t&&(ge(Jt),ge(lo))}var ve=Er(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hc=[];function kd(){for(var t=0;t<hc.length;t++)hc[t]._workInProgressVersionPrimary=null;hc.length=0}var ba=xn.ReactCurrentDispatcher,dc=xn.ReactCurrentBatchConfig,Br=0,_e=null,Ve=null,Me=null,fl=!1,zs=!1,co=0,F1=0;function Xe(){throw Error(F(321))}function Cd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function Rd(t,e,n,r,i,s){if(Br=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?B1:$1,t=n(r,i),zs){s=0;do{if(zs=!1,co=0,25<=s)throw Error(F(301));s+=1,Me=Ve=null,e.updateQueue=null,ba.current=H1,t=n(r,i)}while(zs)}if(ba.current=pl,e=Ve!==null&&Ve.next!==null,Br=0,Me=Ve=_e=null,fl=!1,e)throw Error(F(300));return t}function Pd(){var t=co!==0;return co=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?_e.memoizedState=Me=t:Me=Me.next=t,Me}function Ot(){if(Ve===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Me===null?_e.memoizedState:Me.next;if(e!==null)Me=e,Ve=t;else{if(t===null)throw Error(F(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Me===null?_e.memoizedState=Me=t:Me=Me.next=t}return Me}function ho(t,e){return typeof e=="function"?e(t):e}function fc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Br&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=f,$r|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,$r|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Hv(){}function qv(t,e){var n=_e,r=Ot(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,xd(Kv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,fo(9,Gv.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(F(349));Br&30||Wv(n,e,i)}return i}function Wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gv(t,e,n,r){e.value=n,e.getSnapshot=r,Qv(e)&&Xv(t)}function Kv(t,e,n){return n(function(){Qv(e)&&Xv(t)})}function Qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function Xv(t){var e=In(t,1);e!==null&&Ht(e,t,1,-1)}function Tm(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=z1.bind(null,_e,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Yv(){return Ot().memoizedState}function Oa(t,e,n,r){var i=Kt();_e.flags|=t,i.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function ql(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Cd(r,o.deps)){i.memoizedState=fo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=fo(1|e,n,s,r)}function Im(t,e){return Oa(8390656,8,t,e)}function xd(t,e){return ql(2048,8,t,e)}function Jv(t,e){return ql(4,2,t,e)}function Zv(t,e){return ql(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,e_.bind(null,e,t),n)}function Nd(){}function n_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return Br&21?(qt(n,e)||(n=uv(),_e.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function j1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=dc.transition;dc.transition={};try{t(!1),e()}finally{ae=n,dc.transition=r}}function s_(){return Ot().memoizedState}function U1(t,e,n){var r=er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))a_(e,n);else if(n=zv(t,e,n,r),n!==null){var i=at();Ht(n,t,r,i),l_(n,e,r)}}function z1(t,e,n){var r=er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))a_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(i.next=i,Td(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=zv(t,e,i,r),n!==null&&(i=at(),Ht(n,t,r,i),l_(n,e,r))}}function o_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function a_(t,e){zs=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}var pl={readContext:bt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},B1={readContext:bt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:Im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=U1.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:Tm,useDebugValue:Nd,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=Tm(!1),e=t[0];return t=j1.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Kt();if(ye){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Fe===null)throw Error(F(349));Br&30||Wv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Im(Kv.bind(null,r,s,t),[t]),r.flags|=2048,fo(9,Gv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Fe.identifierPrefix;if(ye){var n=yn,r=gn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=F1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$1={readContext:bt,useCallback:n_,useContext:bt,useEffect:xd,useImperativeHandle:t_,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:r_,useReducer:fc,useRef:Yv,useState:function(){return fc(ho)},useDebugValue:Nd,useDeferredValue:function(t){var e=Ot();return i_(e,Ve.memoizedState,t)},useTransition:function(){var t=fc(ho)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:qv,useId:s_,unstable_isNewReconciler:!1},H1={readContext:bt,useCallback:n_,useContext:bt,useEffect:xd,useImperativeHandle:t_,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:r_,useReducer:pc,useRef:Yv,useState:function(){return pc(ho)},useDebugValue:Nd,useDeferredValue:function(t){var e=Ot();return Ve===null?e.memoizedState=t:i_(e,Ve.memoizedState,t)},useTransition:function(){var t=pc(ho)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:qv,useId:s_,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=er(t),s=wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Ht(e,t,i,r),Va(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=er(t),s=wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Ht(e,t,i,r),Va(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=er(t),i=wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jn(t,i,r),e!==null&&(Ht(e,t,r,n),Va(e,t,r))}};function Sm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(i,s):!0}function u_(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=gt(e)?Ur:nt.current,r=e.contextTypes,s=(r=r!=null)?Mi(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Am(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function lh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Id(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=gt(e)?Ur:nt.current,i.context=Mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ah(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wl.enqueueReplaceState(i,i.state,null),hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=vT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var q1=typeof WeakMap=="function"?WeakMap:Map;function c_(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,_h=r),uh(t,e)},n}function h_(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uh(t,e),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function km(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new q1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sI.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,Jn(n,e,1))),n.lanes|=1),t)}var W1=xn.ReactCurrentOwner,pt=!1;function ot(t,e,n,r){e.child=t===null?Uv(e,null,n,r):ji(e,t.child,n,r)}function Pm(t,e,n,r,i){n=n.render;var s=e.ref;return Pi(e,i),r=Rd(t,e,n,r,s,i),n=Pd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(ye&&n&&gd(e),e.flags|=1,ot(t,e,r,i),e.child)}function xm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d_(t,e,s,r,i)):(t=ja(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return Sn(t,e,i)}return e.flags|=1,t=tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function d_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(io(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Sn(t,e,i)}return ch(t,e,n,r,i)}function f_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ii,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Ii,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Ii,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Ii,wt),wt|=r;return ot(t,e,i,n),e.child}function p_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ch(t,e,n,r,i){var s=gt(n)?Ur:nt.current;return s=Mi(e,s),Pi(e,i),n=Rd(t,e,n,r,s,i),r=Pd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(ye&&r&&gd(e),e.flags|=1,ot(t,e,n,i),e.child)}function Nm(t,e,n,r,i){if(gt(n)){var s=!0;ol(e)}else s=!1;if(Pi(e,i),e.stateNode===null)La(t,e),u_(e,n,r),lh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=bt(h):(h=gt(n)?Ur:nt.current,h=Mi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Am(e,o,r,h),Fn=!1;var m=e.memoizedState;o.state=m,hl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||mt.current||Fn?(typeof f=="function"&&(ah(e,n,f,r),u=e.memoizedState),(l=Fn||Sm(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ft(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=bt(u):(u=gt(n)?Ur:nt.current,u=Mi(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Am(e,o,r,u),Fn=!1,m=e.memoizedState,o.state=m,hl(e,r,o,i);var x=e.memoizedState;l!==p||m!==x||mt.current||Fn?(typeof k=="function"&&(ah(e,n,k,r),x=e.memoizedState),(h=Fn||Sm(e,n,h,r,m,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return hh(t,e,n,r,s,i)}function hh(t,e,n,r,i,s){p_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gm(e,n,!1),Sn(t,e,s);r=e.stateNode,W1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ji(e,t.child,null,s),e.child=ji(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&gm(e,n,!0),e.child}function m_(t){var e=t.stateNode;e.pendingContext?mm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mm(t,e.context,!1),Sd(t,e.containerInfo)}function Dm(t,e,n,r,i){return Fi(),vd(i),e.flags|=256,ot(t,e,n,r),e.child}var dh={dehydrated:null,treeContext:null,retryLane:0};function fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function g_(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(ve,i&1),t===null)return sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ql(o,r,0,null),t=Fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fh(n),e.memoizedState=dh,t):Dd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return G1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=tr(l,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dh,r}return s=t.child,t=s.sibling,r=tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dd(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function va(t,e,n,r){return r!==null&&vd(r),ji(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function G1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mc(Error(F(422))),va(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ql({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ji(e,t.child,null,o),e.child.memoizedState=fh(o),e.memoizedState=dh,s);if(!(e.mode&1))return va(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=mc(s,r,void 0),va(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),Ht(r,t,i,-1))}return Fd(),r=mc(Error(F(421))),va(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=oI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=Yn(i.nextSibling),It=e,ye=!0,Ut=null,t!==null&&(Ct[Rt++]=gn,Ct[Rt++]=yn,Ct[Rt++]=zr,gn=t.id,yn=t.overflow,zr=e),e=Dd(e,r.children),e.flags|=4096,e)}function Vm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),oh(t.return,e,n)}function gc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function y_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,n,e);else if(t.tag===19)Vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gc(e,!0,n,null,s);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function La(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function K1(t,e,n){switch(e.tag){case 3:m_(e),Fi();break;case 5:$v(e);break;case 1:gt(e.type)&&ol(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?g_(t,e,n):(de(ve,ve.current&1),t=Sn(t,e,n),t!==null?t.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return y_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,f_(t,e,n)}return Sn(t,e,n)}var v_,ph,__,w_;v_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ph=function(){};__=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Or(Jt.current);var s=null;switch(n){case"input":i=Lc(t,i),r=Lc(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=jc(t,i),r=jc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=il)}zc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ys.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ys.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};w_=function(t,e,n,r){n!==r&&(e.flags|=4)};function As(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Q1(t,e,n){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return gt(e.type)&&sl(),Ye(e),null;case 3:return r=e.stateNode,Ui(),ge(mt),ge(nt),kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(Th(Ut),Ut=null))),ph(t,e),Ye(e),null;case 5:Ad(e);var i=Or(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)__(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ye(e),null}if(t=Or(Jt.current),ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[ao]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)pe(xs[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Bp(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Hp(r,s),pe("invalid",r)}zc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),i=["children",""+l]):Ys.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":aa(r),$p(r,s,!0);break;case"textarea":aa(r),qp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ky(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[ao]=r,v_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bc(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)pe(xs[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Bp(t,r),i=Lc(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Hp(t,r),i=jc(t,r),pe("invalid",t);break;default:i=r}zc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Yy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Qy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ys.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&nd(t,s,u,o))}switch(n){case"input":aa(t),$p(t,r,!1);break;case"textarea":aa(t),qp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ai(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)w_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Or(uo.current),Or(Jt.current),ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Ye(e),null;case 13:if(ge(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Et!==null&&e.mode&1&&!(e.flags&128))Fv(),Fi(),e.flags|=98560,s=!1;else if(s=ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Xt]=e}else Fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ut!==null&&(Th(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?be===0&&(be=3):Fd())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Ui(),ph(t,e),t===null&&so(e.stateNode.containerInfo),Ye(e),null;case 10:return Ed(e.type._context),Ye(e),null;case 17:return gt(e.type)&&sl(),Ye(e),null;case 19:if(ge(ve),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)As(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,As(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Bi&&(e.flags|=128,r=!0,As(s,!1),e.lanes=4194304)}else{if(!r)if(t=dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),As(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Ye(e),null}else 2*Ce()-s.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,As(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function X1(t,e){switch(yd(e),e.tag){case 1:return gt(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),ge(mt),ge(nt),kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ad(e),null;case 13:if(ge(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ve),null;case 4:return Ui(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var _a=!1,et=!1,Y1=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function mh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var bm=!1;function J1(t,e){if(Jc=tl,t=Av(),md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var k;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)m=p,p=k;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zc={focusedElem:t,selectionRange:n},tl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var N=x.memoizedProps,O=x.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Ft(e.type,N),O);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(V){Ie(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return x=bm,bm=!1,x}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mh(e,n,s)}i=i.next}while(i!==r)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E_(t){var e=t.alternate;e!==null&&(t.alternate=null,E_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[ao],delete e[nh],delete e[b1],delete e[O1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T_(t){return t.tag===5||t.tag===3||t.tag===4}function Om(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(r!==4&&(t=t.child,t!==null))for(yh(t,e,n),t=t.sibling;t!==null;)yh(t,e,n),t=t.sibling}function vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}var Ue=null,jt=!1;function On(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:et||Ti(n,e);case 6:var r=Ue,i=jt;Ue=null,On(t,e,n),Ue=r,jt=i,Ue!==null&&(jt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(jt?(t=Ue,n=n.stateNode,t.nodeType===8?uc(t.parentNode,n):t.nodeType===1&&uc(t,n),no(t)):uc(Ue,n.stateNode));break;case 4:r=Ue,i=jt,Ue=n.stateNode.containerInfo,jt=!0,On(t,e,n),Ue=r,jt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mh(n,e,o),i=i.next}while(i!==r)}On(t,e,n);break;case 1:if(!et&&(Ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,On(t,e,n),et=r):On(t,e,n);break;default:On(t,e,n)}}function Lm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Y1),e.forEach(function(r){var i=aI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,jt=!1;break e;case 3:Ue=l.stateNode.containerInfo,jt=!0;break e;case 4:Ue=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if(Ue===null)throw Error(F(160));I_(s,o,i),Ue=null,jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ie(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S_(e,t),e=e.sibling}function S_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Gt(t),r&4){try{Bs(3,t,t.return),Gl(3,t)}catch(N){Ie(t,t.return,N)}try{Bs(5,t,t.return)}catch(N){Ie(t,t.return,N)}}break;case 1:Mt(e,t),Gt(t),r&512&&n!==null&&Ti(n,n.return);break;case 5:if(Mt(e,t),Gt(t),r&512&&n!==null&&Ti(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(N){Ie(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Wy(i,s),Bc(l,o);var h=Bc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Yy(i,p):f==="dangerouslySetInnerHTML"?Qy(i,p):f==="children"?Js(i,p):nd(i,f,p,h)}switch(l){case"input":Mc(i,s);break;case"textarea":Gy(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?Ai(i,!!s.multiple,k,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ai(i,!!s.multiple,s.defaultValue,!0):Ai(i,!!s.multiple,s.multiple?[]:"",!1))}i[ao]=s}catch(N){Ie(t,t.return,N)}}break;case 6:if(Mt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ie(t,t.return,N)}}break;case 3:if(Mt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(N){Ie(t,t.return,N)}break;case 4:Mt(e,t),Gt(t);break;case 13:Mt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Od=Ce())),r&4&&Lm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(et=(h=et)||f,Mt(e,t),et=h):Mt(e,t),Gt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(p=q=f;q!==null;){switch(m=q,k=m.child,m.tag){case 0:case 11:case 14:case 15:Bs(4,m,m.return);break;case 1:Ti(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(N){Ie(r,n,N)}}break;case 5:Ti(m,m.return);break;case 22:if(m.memoizedState!==null){Fm(p);continue}}k!==null?(k.return=m,q=k):Fm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Xy("display",o))}catch(N){Ie(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){Ie(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(e,t),Gt(t),r&4&&Lm(t);break;case 21:break;default:Mt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=Om(t);vh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Om(t);yh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Z1(t,e,n){q=t,A_(t)}function A_(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_a;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=_a;var h=et;if(_a=o,(et=u)&&!h)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?jm(i):u!==null?(u.return=o,q=u):jm(i);for(;s!==null;)q=s,A_(s),s=s.sibling;q=i,_a=l,et=h}Mm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Mm(t)}}function Mm(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||Gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Em(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Em(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&no(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}et||e.flags&512&&gh(e)}catch(m){Ie(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Fm(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function jm(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{gh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{gh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var eI=Math.ceil,ml=xn.ReactCurrentDispatcher,Vd=xn.ReactCurrentOwner,Nt=xn.ReactCurrentBatchConfig,ie=0,Fe=null,xe=null,$e=0,wt=0,Ii=Er(0),be=0,po=null,$r=0,Kl=0,bd=0,$s=null,dt=null,Od=0,Bi=1/0,pn=null,gl=!1,_h=null,Zn=null,wa=!1,Wn=null,yl=0,Hs=0,wh=null,Ma=-1,Fa=0;function at(){return ie&6?Ce():Ma!==-1?Ma:Ma=Ce()}function er(t){return t.mode&1?ie&2&&$e!==0?$e&-$e:M1.transition!==null?(Fa===0&&(Fa=uv()),Fa):(t=ae,t!==0||(t=window.event,t=t===void 0?16:gv(t.type)),t):1}function Ht(t,e,n,r){if(50<Hs)throw Hs=0,wh=null,Error(F(185));ko(t,n,r),(!(ie&2)||t!==Fe)&&(t===Fe&&(!(ie&2)&&(Kl|=n),be===4&&Un(t,$e)),yt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Bi=Ce()+500,Hl&&Tr()))}function yt(t,e){var n=t.callbackNode;MT(t,e);var r=el(t,t===Fe?$e:0);if(r===0)n!==null&&Kp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kp(n),e===1)t.tag===0?L1(Um.bind(null,t)):Ov(Um.bind(null,t)),D1(function(){!(ie&6)&&Tr()}),n=null;else{switch(cv(r)){case 1:n=ad;break;case 4:n=av;break;case 16:n=Za;break;case 536870912:n=lv;break;default:n=Za}n=V_(n,k_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k_(t,e){if(Ma=-1,Fa=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(xi()&&t.callbackNode!==n)return null;var r=el(t,t===Fe?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vl(t,r);else{e=r;var i=ie;ie|=2;var s=R_();(Fe!==t||$e!==e)&&(pn=null,Bi=Ce()+500,Mr(t,e));do try{rI();break}catch(l){C_(t,l)}while(!0);wd(),ml.current=s,ie=i,xe!==null?e=0:(Fe=null,$e=0,e=be)}if(e!==0){if(e===2&&(i=Gc(t),i!==0&&(r=i,e=Eh(t,i))),e===1)throw n=po,Mr(t,0),Un(t,r),yt(t,Ce()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!tI(i)&&(e=vl(t,r),e===2&&(s=Gc(t),s!==0&&(r=s,e=Eh(t,s))),e===1))throw n=po,Mr(t,0),Un(t,r),yt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Nr(t,dt,pn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Od+500-Ce(),10<e)){if(el(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=th(Nr.bind(null,t,dt,pn),e);break}Nr(t,dt,pn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eI(r/1960))-r,10<r){t.timeoutHandle=th(Nr.bind(null,t,dt,pn),r);break}Nr(t,dt,pn);break;case 5:Nr(t,dt,pn);break;default:throw Error(F(329))}}}return yt(t,Ce()),t.callbackNode===n?k_.bind(null,t):null}function Eh(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=vl(t,e),t!==2&&(e=dt,dt=n,e!==null&&Th(e)),t}function Th(t){dt===null?dt=t:dt.push.apply(dt,t)}function tI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~bd,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Um(t){if(ie&6)throw Error(F(327));xi();var e=el(t,0);if(!(e&1))return yt(t,Ce()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var r=Gc(t);r!==0&&(e=r,n=Eh(t,r))}if(n===1)throw n=po,Mr(t,0),Un(t,e),yt(t,Ce()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,dt,pn),yt(t,Ce()),null}function Ld(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Bi=Ce()+500,Hl&&Tr())}}function Hr(t){Wn!==null&&Wn.tag===0&&!(ie&6)&&xi();var e=ie;ie|=1;var n=Nt.transition,r=ae;try{if(Nt.transition=null,ae=1,t)return t()}finally{ae=r,Nt.transition=n,ie=e,!(ie&6)&&Tr()}}function Md(){wt=Ii.current,ge(Ii)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,N1(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:Ui(),ge(mt),ge(nt),kd();break;case 5:Ad(r);break;case 4:Ui();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:Ed(r.type._context);break;case 22:case 23:Md()}n=n.return}if(Fe=t,xe=t=tr(t.current,null),$e=wt=e,be=0,po=null,bd=Kl=$r=0,dt=$s=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}br=null}return t}function C_(t,e){do{var n=xe;try{if(wd(),ba.current=pl,fl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fl=!1}if(Br=0,Me=Ve=_e=null,zs=!1,co=0,Vd.current=null,n===null||n.return===null){be=1,po=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Cm(o);if(k!==null){k.flags&=-257,Rm(k,o,l,s,e),k.mode&1&&km(s,h,e),e=k,u=h;var x=e.updateQueue;if(x===null){var N=new Set;N.add(u),e.updateQueue=N}else x.add(u);break e}else{if(!(e&1)){km(s,h,e),Fd();break e}u=Error(F(426))}}else if(ye&&l.mode&1){var O=Cm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Rm(O,o,l,s,e),vd(zi(u,l));break e}}s=u=zi(u,l),be!==4&&(be=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=c_(s,u,e);wm(s,I);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Zn===null||!Zn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=h_(s,l,e);wm(s,V);break e}}s=s.return}while(s!==null)}x_(n)}catch(z){e=z,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function R_(){var t=ml.current;return ml.current=pl,t===null?pl:t}function Fd(){(be===0||be===3||be===2)&&(be=4),Fe===null||!($r&268435455)&&!(Kl&268435455)||Un(Fe,$e)}function vl(t,e){var n=ie;ie|=2;var r=R_();(Fe!==t||$e!==e)&&(pn=null,Mr(t,e));do try{nI();break}catch(i){C_(t,i)}while(!0);if(wd(),ie=n,ml.current=r,xe!==null)throw Error(F(261));return Fe=null,$e=0,be}function nI(){for(;xe!==null;)P_(xe)}function rI(){for(;xe!==null&&!RT();)P_(xe)}function P_(t){var e=D_(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?x_(t):xe=e,Vd.current=null}function x_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=X1(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,xe=null;return}}else if(n=Q1(n,e,wt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);be===0&&(be=5)}function Nr(t,e,n){var r=ae,i=Nt.transition;try{Nt.transition=null,ae=1,iI(t,e,n,r)}finally{Nt.transition=i,ae=r}return null}function iI(t,e,n,r){do xi();while(Wn!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FT(t,s),t===Fe&&(xe=Fe=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,V_(Za,function(){return xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,Vd.current=null,J1(t,n),S_(n,t),S1(Zc),tl=!!Jc,Zc=Jc=null,t.current=n,Z1(n),PT(),ie=l,ae=o,Nt.transition=s}else t.current=n;if(wa&&(wa=!1,Wn=t,yl=i),s=t.pendingLanes,s===0&&(Zn=null),DT(n.stateNode),yt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,t=_h,_h=null,t;return yl&1&&t.tag!==0&&xi(),s=t.pendingLanes,s&1?t===wh?Hs++:(Hs=0,wh=t):Hs=0,Tr(),null}function xi(){if(Wn!==null){var t=cv(yl),e=Nt.transition,n=ae;try{if(Nt.transition=null,ae=16>t?16:t,Wn===null)var r=!1;else{if(t=Wn,Wn=null,yl=0,ie&6)throw Error(F(331));var i=ie;for(ie|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Bs(8,f,s)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var m=f.sibling,k=f.return;if(E_(f),f===h){q=null;break}if(m!==null){m.return=k,q=m;break}q=k}}}var x=s.alternate;if(x!==null){var N=x.child;if(N!==null){x.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,q=I;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gl(9,l)}}catch(z){Ie(l,l.return,z)}if(l===o){q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,q=V;break e}q=l.return}}if(ie=i,Tr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(jl,t)}catch{}r=!0}return r}finally{ae=n,Nt.transition=e}}return!1}function zm(t,e,n){e=zi(n,e),e=c_(t,e,1),t=Jn(t,e,1),e=at(),t!==null&&(ko(t,1,e),yt(t,e))}function Ie(t,e,n){if(t.tag===3)zm(t,t,n);else for(;e!==null;){if(e.tag===3){zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){t=zi(n,t),t=h_(e,t,1),e=Jn(e,t,1),t=at(),e!==null&&(ko(e,1,t),yt(e,t));break}}e=e.return}}function sI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&($e&n)===n&&(be===4||be===3&&($e&130023424)===$e&&500>Ce()-Od?Mr(t,0):bd|=n),yt(t,e)}function N_(t,e){e===0&&(t.mode&1?(e=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):e=1);var n=at();t=In(t,e),t!==null&&(ko(t,e,n),yt(t,n))}function oI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N_(t,n)}function aI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),N_(t,n)}var D_;D_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,K1(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ye&&e.flags&1048576&&Lv(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;La(t,e),t=e.pendingProps;var i=Mi(e,nt.current);Pi(e,n),i=Rd(null,e,r,t,i,n);var s=Pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Id(e),i.updater=Wl,e.stateNode=i,i._reactInternals=e,lh(e,r,t,n),e=hh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&gd(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(La(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uI(r),t=Ft(r,t),i){case 0:e=ch(null,e,r,t,n);break e;case 1:e=Nm(null,e,r,t,n);break e;case 11:e=Pm(null,e,r,t,n);break e;case 14:e=xm(null,e,r,Ft(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),ch(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Nm(t,e,r,i,n);case 3:e:{if(m_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bv(t,e),hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zi(Error(F(423)),e),e=Dm(t,e,r,n,i);break e}else if(r!==i){i=zi(Error(F(424)),e),e=Dm(t,e,r,n,i);break e}else for(Et=Yn(e.stateNode.containerInfo.firstChild),It=e,ye=!0,Ut=null,n=Uv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){e=Sn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return $v(e),t===null&&sh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,eh(r,i)?o=null:s!==null&&eh(r,s)&&(e.flags|=32),p_(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&sh(e),null;case 13:return g_(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ji(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Pm(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(ul,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!mt.current){e=Sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=wn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),oh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),oh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pi(e,n),i=bt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Ft(r,e.pendingProps),i=Ft(r.type,i),xm(t,e,r,i,n);case 15:return d_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),La(t,e),e.tag=1,gt(r)?(t=!0,ol(e)):t=!1,Pi(e,n),u_(e,r,i),lh(e,r,i,n),hh(null,e,r,!0,t,n);case 19:return y_(t,e,n);case 22:return f_(t,e,n)}throw Error(F(156,e.tag))};function V_(t,e){return ov(t,e)}function lI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new lI(t,e,n,r)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uI(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===id)return 11;if(t===sd)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ja(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fi:return Fr(n.children,i,s,e);case rd:o=8,i|=8;break;case Dc:return t=xt(12,n,e,i|2),t.elementType=Dc,t.lanes=s,t;case Vc:return t=xt(13,n,e,i),t.elementType=Vc,t.lanes=s,t;case bc:return t=xt(19,n,e,i),t.elementType=bc,t.lanes=s,t;case $y:return Ql(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zy:o=10;break e;case By:o=9;break e;case id:o=11;break e;case sd:o=14;break e;case Mn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function Ql(t,e,n,r){return t=xt(22,t,r,e),t.elementType=$y,t.lanes=n,t.stateNode={isHidden:!1},t}function yc(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,r,i,s,o,l,u){return t=new cI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(s),t}function hI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b_(t){if(!t)return cr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(gt(n))return bv(t,n,e)}return e}function O_(t,e,n,r,i,s,o,l,u){return t=Ud(n,r,!0,t,i,s,o,l,u),t.context=b_(null),n=t.current,r=at(),i=er(n),s=wn(r,i),s.callback=e??null,Jn(n,s,i),t.current.lanes=i,ko(t,i,r),yt(t,r),t}function Xl(t,e,n,r){var i=e.current,s=at(),o=er(i);return n=b_(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jn(i,e,o),t!==null&&(Ht(t,i,o,s),Va(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zd(t,e){Bm(t,e),(t=t.alternate)&&Bm(t,e)}function dI(){return null}var L_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}Yl.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Xl(t,e,null,null)};Yl.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){Xl(null,t,null,null)}),e[Tn]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&mv(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $m(){}function fI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=_l(o);s.call(h)}}var o=O_(e,r,t,0,null,!1,!1,"",$m);return t._reactRootContainer=o,t[Tn]=o.current,so(t.nodeType===8?t.parentNode:t),Hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=_l(u);l.call(h)}}var u=Ud(t,0,!1,null,null,!1,!1,"",$m);return t._reactRootContainer=u,t[Tn]=u.current,so(t.nodeType===8?t.parentNode:t),Hr(function(){Xl(e,u,n,r)}),u}function Zl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=_l(o);l.call(u)}}Xl(e,o,t,i)}else o=fI(n,e,t,i,r);return _l(o)}hv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ps(e.pendingLanes);n!==0&&(ld(e,n|1),yt(e,Ce()),!(ie&6)&&(Bi=Ce()+500,Tr()))}break;case 13:Hr(function(){var r=In(t,1);if(r!==null){var i=at();Ht(r,t,1,i)}}),zd(t,1)}};ud=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=at();Ht(e,t,134217728,n)}zd(t,134217728)}};dv=function(t){if(t.tag===13){var e=er(t),n=In(t,e);if(n!==null){var r=at();Ht(n,t,e,r)}zd(t,e)}};fv=function(){return ae};pv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Hc=function(t,e,n){switch(e){case"input":if(Mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$l(r);if(!i)throw Error(F(90));qy(r),Mc(r,i)}}}break;case"textarea":Gy(t,n);break;case"select":e=n.value,e!=null&&Ai(t,!!n.multiple,e,!1)}};ev=Ld;tv=Hr;var pI={usingClientEntryPoint:!1,Events:[Ro,yi,$l,Jy,Zy,Ld]},ks={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mI={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iv(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||dI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{jl=Ea.inject(mI),Yt=Ea}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pI;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(F(200));return hI(t,e,null,n)};At.createRoot=function(t,e){if(!$d(t))throw Error(F(299));var n=!1,r="",i=L_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,so(t.nodeType===8?t.parentNode:t),new Bd(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=iv(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return Hr(t)};At.hydrate=function(t,e,n){if(!Jl(e))throw Error(F(200));return Zl(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=L_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O_(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,so(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yl(e)};At.render=function(t,e,n){if(!Jl(e))throw Error(F(200));return Zl(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(F(40));return t._reactRootContainer?(Hr(function(){Zl(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};At.unstable_batchedUpdates=Ld;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jl(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Zl(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function M_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M_)}catch(t){console.error(t)}}M_(),My.exports=At;var gI=My.exports,F_,Hm=gI;F_=Hm.createRoot,Hm.hydrateRoot;const yI=()=>{};var qm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},U_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(m=64)),r.push(n[f],n[p],n[m],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(j_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new _I;const m=s<<2|l>>4;if(r.push(m),h!==64){const k=l<<4&240|h>>2;if(r.push(k),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wI=function(t){const e=j_(t);return U_.encodeByteArray(e,!0)},wl=function(t){return wI(t).replace(/\./g,"")},z_=function(t){try{return U_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=()=>EI().__FIREBASE_DEFAULTS__,II=()=>{if(typeof process>"u"||typeof qm>"u")return;const t=qm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&z_(t[1]);return e&&JSON.parse(e)},eu=()=>{try{return yI()||TI()||II()||SI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B_=t=>{var e,n;return(n=(e=eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AI=t=>{const e=B_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$_=()=>{var t;return(t=eu())===null||t===void 0?void 0:t.config},H_=t=>{var e;return(e=eu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function q_(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wl(JSON.stringify(n)),wl(JSON.stringify(o)),""].join(".")}const qs={};function RI(){const t={prod:[],emulator:[]};for(const e of Object.keys(qs))qs[e]?t.emulator.push(e):t.prod.push(e);return t}function PI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wm=!1;function W_(t,e){if(typeof window>"u"||typeof document>"u"||!Ji(window.location.host)||qs[t]===e||qs[t]||Wm)return;qs[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=RI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,k){m.setAttribute("width","24"),m.setAttribute("id",k),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Wm=!0,o()},m}function f(m,k){m.setAttribute("id",k),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=PI(r),k=n("text"),x=document.getElementById(k)||document.createElement("span"),N=n("learnmore"),O=document.getElementById(N)||document.createElement("a"),I=n("preprendIcon"),v=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const S=m.element;l(S),f(O,N);const V=h();u(v,I),S.append(v,x,O,V),document.body.appendChild(S)}s?(x.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function NI(){var t;const e=(t=eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OI(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LI(){return!NI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MI(){try{return typeof indexedDB=="object"}catch{return!1}}function FI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jI,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Nn(i,l,r)}}function UI(t,e){return t.replace(zI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zI=/\{\$([^}]+)}/g;function BI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gm(s)&&Gm(o)){if(!qr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $I(t,e){const n=new HI(t,e);return n.subscribe.bind(n)}class HI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_c),i.error===void 0&&(i.error=_c),i.complete===void 0&&(i.complete=_c);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _c(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KI(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GI(t){return t===Dr?void 0:t}function KI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const XI={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},YI=te.INFO,JI={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},ZI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hd{constructor(e){this.name=e,this._logLevel=YI,this._logHandler=ZI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const eS=(t,e)=>e.some(n=>t instanceof n);let Km,Qm;function tS(){return Km||(Km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nS(){return Qm||(Qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const G_=new WeakMap,Ih=new WeakMap,K_=new WeakMap,wc=new WeakMap,qd=new WeakMap;function rS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&G_.set(n,t)}).catch(()=>{}),qd.set(e,t),e}function iS(t){if(Ih.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ih.set(t,e)}let Sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||K_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sS(t){Sh=t(Sh)}function oS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ec(this),e,...n);return K_.set(r,e.sort?e.sort():[e]),nr(r)}:nS().includes(t)?function(...e){return t.apply(Ec(this),e),nr(G_.get(this))}:function(...e){return nr(t.apply(Ec(this),e))}}function aS(t){return typeof t=="function"?oS(t):(t instanceof IDBTransaction&&iS(t),eS(t,tS())?new Proxy(t,Sh):t)}function nr(t){if(t instanceof IDBRequest)return rS(t);if(wc.has(t))return wc.get(t);const e=aS(t);return e!==t&&(wc.set(t,e),qd.set(e,t)),e}const Ec=t=>qd.get(t);function lS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nr(o.result),u.oldVersion,u.newVersion,nr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const uS=["get","getKey","getAll","getAllKeys","count"],cS=["put","add","delete","clear"],Tc=new Map;function Xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tc.get(e))return Tc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Tc.set(e,s),s}sS(t=>({...t,get:(e,n,r)=>Xm(e,n)||t.get(e,n,r),has:(e,n)=>!!Xm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ah="@firebase/app",Ym="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Hd("@firebase/app"),fS="@firebase/app-compat",pS="@firebase/analytics-compat",mS="@firebase/analytics",gS="@firebase/app-check-compat",yS="@firebase/app-check",vS="@firebase/auth",_S="@firebase/auth-compat",wS="@firebase/database",ES="@firebase/data-connect",TS="@firebase/database-compat",IS="@firebase/functions",SS="@firebase/functions-compat",AS="@firebase/installations",kS="@firebase/installations-compat",CS="@firebase/messaging",RS="@firebase/messaging-compat",PS="@firebase/performance",xS="@firebase/performance-compat",NS="@firebase/remote-config",DS="@firebase/remote-config-compat",VS="@firebase/storage",bS="@firebase/storage-compat",OS="@firebase/firestore",LS="@firebase/ai",MS="@firebase/firestore-compat",FS="firebase",jS="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="[DEFAULT]",US={[Ah]:"fire-core",[fS]:"fire-core-compat",[mS]:"fire-analytics",[pS]:"fire-analytics-compat",[yS]:"fire-app-check",[gS]:"fire-app-check-compat",[vS]:"fire-auth",[_S]:"fire-auth-compat",[wS]:"fire-rtdb",[ES]:"fire-data-connect",[TS]:"fire-rtdb-compat",[IS]:"fire-fn",[SS]:"fire-fn-compat",[AS]:"fire-iid",[kS]:"fire-iid-compat",[CS]:"fire-fcm",[RS]:"fire-fcm-compat",[PS]:"fire-perf",[xS]:"fire-perf-compat",[NS]:"fire-rc",[DS]:"fire-rc-compat",[VS]:"fire-gcs",[bS]:"fire-gcs-compat",[OS]:"fire-fst",[MS]:"fire-fst-compat",[LS]:"fire-vertex","fire-js":"fire-js",[FS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Map,zS=new Map,Ch=new Map;function Jm(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $i(t){const e=t.name;if(Ch.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Ch.set(e,t);for(const n of El.values())Jm(n,t);for(const n of zS.values())Jm(n,t);return!0}function Wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new xo("app","Firebase",BS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=jS;function Q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=$_()),!n)throw rr.create("no-options");const s=El.get(i);if(s){if(qr(n,s.options)&&qr(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new QI(i);for(const u of Ch.values())o.addComponent(u);const l=new $S(n,r,o);return El.set(i,l),l}function X_(t=kh){const e=El.get(t);if(!e&&t===kh&&$_())return Q_();if(!e)throw rr.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let i=(r=US[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(l.join(" "));return}$i(new Wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="firebase-heartbeat-database",qS=1,mo="firebase-heartbeat-store";let Ic=null;function Y_(){return Ic||(Ic=lS(HS,qS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),Ic}async function WS(t){try{const n=(await Y_()).transaction(mo),r=await n.objectStore(mo).get(J_(t));return await n.done,r}catch(e){if(e instanceof Nn)An.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function Zm(t,e){try{const r=(await Y_()).transaction(mo,"readwrite");await r.objectStore(mo).put(e,J_(t)),await r.done}catch(n){if(n instanceof Nn)An.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function J_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=1024,KS=30;class QS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>KS){const o=JS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=eg(),{heartbeatsToSend:r,unsentEntries:i}=XS(this._heartbeatsCache.heartbeats),s=wl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return An.warn(n),""}}}function eg(){return new Date().toISOString().substring(0,10)}function XS(t,e=GS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MI()?FI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tg(t){return wl(JSON.stringify({version:2,heartbeats:t})).length}function JS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){$i(new Wr("platform-logger",e=>new hS(e),"PRIVATE")),$i(new Wr("heartbeat",e=>new QS(e),"PRIVATE")),ir(Ah,Ym,t),ir(Ah,Ym,"esm2017"),ir("fire-js","")}ZS("");var eA="firebase",tA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(eA,tA,"app");function Gd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Z_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nA=Z_,e0=new xo("auth","Firebase",Z_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Hd("@firebase/auth");function rA(t,...e){Tl.logLevel<=te.WARN&&Tl.warn(`Auth (${Zi}): ${t}`,...e)}function Ua(t,...e){Tl.logLevel<=te.ERROR&&Tl.error(`Auth (${Zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,...e){throw Kd(t,...e)}function Zt(t,...e){return Kd(t,...e)}function t0(t,e,n){const r=Object.assign(Object.assign({},nA()),{[e]:n});return new xo("auth","Firebase",r).create(e,{appName:t.name})}function sr(t){return t0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e0.create(t,...e)}function X(t,e,...n){if(!t)throw Kd(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function Cn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iA(){return ng()==="http:"||ng()==="https:"}function ng(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iA()||VI()||"connection"in navigator)?navigator.onLine:!0}function oA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=xI()||bI()}get(){return sA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uA=new Do(3e4,6e4);function tu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function es(t,e,n,r,i={}){return r0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=No(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return DI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ji(t.emulatorConfig.host)&&(h.credentials="include"),n0.fetch()(await s0(t,t.config.apiHost,n,l),h)})}async function r0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aA),e);try{const i=new cA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ta(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw t0(t,f,h);kn(t,f)}}catch(i){if(i instanceof Nn)throw i;kn(t,"network-request-failed",{message:String(i)})}}async function i0(t,e,n,r,i={}){const s=await es(t,e,n,r,i);return"mfaPendingCredential"in s&&kn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function s0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Qd(t.config,i):`${t.config.apiScheme}://${i}`;return lA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class cA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),uA.get())})}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e){return es(t,"POST","/v1/accounts:delete",e)}async function Il(t,e){return es(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dA(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=Xd(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ws(Sc(i.auth_time)),issuedAtTime:Ws(Sc(i.iat)),expirationTime:Ws(Sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function Xd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=z_(n);return i?JSON.parse(i):(Ua("Failed to decode base64 JWT payload"),null)}catch(i){return Ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rg(t){const e=Xd(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&fA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await go(t,Il(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?o0(s.providerUserInfo):[],l=gA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ph(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function mA(t){const e=qe(t);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function o0(t){return t.map(e=>{var{providerId:n}=e,r=Gd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){const n=await r0(t,{},async()=>{const r=No({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await s0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ji(t.emulatorConfig.host)&&(u.credentials="include"),n0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vA(t,e){return es(t,"POST","/v2/accounts:revokeToken",tu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=rg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ni;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ph(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await go(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dA(this,e)}reload(){return mA(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(sr(this.auth));const e=await this.getIdToken();return await go(this,hA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:z,providerData:j,stsTokenManager:w}=n;X(S&&w,e,"internal-error");const y=Ni.fromJSON(this.name,w);X(typeof S=="string",e,"internal-error"),Ln(p,e.name),Ln(m,e.name),X(typeof V=="boolean",e,"internal-error"),X(typeof z=="boolean",e,"internal-error"),Ln(k,e.name),Ln(x,e.name),Ln(N,e.name),Ln(O,e.name),Ln(I,e.name),Ln(v,e.name);const _=new Bt({uid:S,auth:e,email:m,emailVerified:V,displayName:p,isAnonymous:z,photoURL:x,phoneNumber:k,tenantId:N,stsTokenManager:y,createdAt:I,lastLoginAt:v});return j&&Array.isArray(j)&&(_.providerData=j.map(E=>Object.assign({},E))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ni;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?o0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ni;l.updateFromIdToken(r);const u=new Bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ph(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;function _n(t){Cn(t instanceof Function,"Expected a class definition");let e=ig.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ig.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a0.type="NONE";const sg=a0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=za(this.userKey,i.apiKey,s),this.fullPersistenceKey=za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Il(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(_n(sg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||_n(sg);const o=za(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await Il(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Bt._fromGetAccountInfoResponse(e,m,f)}else p=Bt._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Di(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Di(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f0(e))return"Blackberry";if(p0(e))return"Webos";if(u0(e))return"Safari";if((e.includes("chrome/")||c0(e))&&!e.includes("edge/"))return"Chrome";if(d0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function l0(t=rt()){return/firefox\//i.test(t)}function u0(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c0(t=rt()){return/crios\//i.test(t)}function h0(t=rt()){return/iemobile/i.test(t)}function d0(t=rt()){return/android/i.test(t)}function f0(t=rt()){return/blackberry/i.test(t)}function p0(t=rt()){return/webos/i.test(t)}function Yd(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _A(t=rt()){var e;return Yd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wA(){return OI()&&document.documentMode===10}function m0(t=rt()){return Yd(t)||d0(t)||p0(t)||f0(t)||/windows phone/i.test(t)||h0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t,e=[]){let n;switch(t){case"Browser":n=og(rt());break;case"Worker":n=`${og(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e={}){return es(t,"GET","/v2/passwordPolicy",tu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=6;class SA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:IA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new EA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Il(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(sr(this));const n=e?qe(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TA(this),n=new SA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nu(t){return qe(t)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=$I(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kA(t){Jd=t}function CA(t){return Jd.loadJS(t)}function RA(){return Jd.gapiScript}function PA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t,e){const n=Wd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qr(s,e??{}))return i;kn(i,"already-initialized")}return n.initialize({options:e})}function NA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DA(t,e,n){const r=nu(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=y0(e),{host:o,port:l}=VA(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(qr(h,r.config.emulator)&&qr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ji(o)?(q_(`${s}//${o}${u}`),W_("Auth",!0)):bA()}function y0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VA(t){const e=y0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lg(o)}}}function lg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t,e){return i0(t,"POST","/v1/accounts:signInWithIdp",tu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="http://localhost";class Gr extends v0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:OA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=No(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends _0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Vo{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Vo{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Vo{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e){return i0(t,"POST","/v1/accounts:signUp",tu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),o=ug(r);return new hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ug(r);return new hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t){var e;if(zt(t.app))return Promise.reject(sr(t));const n=nu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new hr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await LA(n,{returnSecureToken:!0}),i=await hr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends Nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Al.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Al(e,n,r,i)}}function w0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Al._fromErrorAndOperation(t,s,e,r):s})}async function FA(t,e,n=!1){const r=await go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(sr(r));const i="reauthenticate";try{const s=await go(t,w0(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Xd(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e,n=!1){if(zt(t.app))return Promise.reject(sr(t));const r="signIn",i=await w0(t,r,e),s=await hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function zA(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function BA(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function $A(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}const kl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kl,"1"),this.storage.removeItem(kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=1e3,qA=10;class T0 extends E0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=m0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}T0.type="LOCAL";const WA=T0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends E0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}I0.type="SESSION";const S0=I0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await GA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Zd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function QA(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function XA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JA(){return A0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="firebaseLocalStorageDb",ZA=1,Cl="firebaseLocalStorage",C0="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function iu(t,e){return t.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function ek(){const t=indexedDB.deleteDatabase(k0);return new bo(t).toPromise()}function xh(){const t=indexedDB.open(k0,ZA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cl,{keyPath:C0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cl)?e(r):(r.close(),await ek(),e(await xh()))})})}async function cg(t,e,n){const r=iu(t,!0).put({[C0]:e,value:n});return new bo(r).toPromise()}async function tk(t,e){const n=iu(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function hg(t,e){const n=iu(t,!0).delete(e);return new bo(n).toPromise()}const nk=800,rk=3;class R0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return A0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ru._getInstance(JA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XA(),!this.activeServiceWorker)return;this.sender=new KA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await cg(e,kl,"1"),await hg(e,kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=iu(i,!1).getAll();return new bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R0.type="LOCAL";const ik=R0;new Do(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t,e){return e?_n(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends v0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ok(t){return UA(t.auth,new ef(t),t.bypassAuthState)}function ak(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),jA(n,new ef(t),t.bypassAuthState)}async function lk(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),FA(n,new ef(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ok;case"linkViaPopup":case"linkViaRedirect":return lk;case"reauthViaPopup":case"reauthViaRedirect":return ak;default:kn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=new Do(2e3,1e4);class Si extends P0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uk.get())};e()}}Si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="pendingRedirect",Ba=new Map;class hk extends P0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const r=await dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dk(t,e){const n=mk(e),r=pk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fk(t,e){Ba.set(t._key(),e)}function pk(t){return _n(t._redirectPersistence)}function mk(t){return za(ck,t.config.apiKey,t.name)}async function gk(t,e,n=!1){if(zt(t.app))return Promise.reject(sr(t));const r=nu(t),i=sk(r,e),o=await new hk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=10*60*1e3;class vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_k(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yk&&this.cachedEventUids.clear(),this.cachedEventUids.has(dg(e))}saveEventToCache(e){this.cachedEventUids.add(dg(e)),this.lastProcessedEventTime=Date.now()}}function dg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _k(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e={}){return es(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tk=/^https?/;async function Ik(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wk(t);for(const n of e)try{if(Sk(n))return}catch{}kn(t,"unauthorized-domain")}function Sk(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Tk.test(n))return!1;if(Ek.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=new Do(3e4,6e4);function fg(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kk(t){return new Promise((e,n)=>{var r,i,s;function o(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),n(Zt(t,"network-request-failed"))},timeout:Ak.get()})}if(!((i=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=en().gapi)===null||s===void 0)&&s.load)o();else{const l=PA("iframefcb");return en()[l]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},CA(`${RA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw $a=null,e})}let $a=null;function Ck(t){return $a=$a||kk(t),$a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new Do(5e3,15e3),Pk="__/auth/iframe",xk="emulator/auth/iframe",Nk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qd(e,xk):`https://${t.config.authDomain}/${Pk}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=Dk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${No(r).slice(1)}`}async function bk(t){const e=await Ck(t),n=en().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:Vk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=en().setTimeout(()=>{s(o)},Rk.get());function u(){en().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lk=500,Mk=600,Fk="_blank",jk="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uk(t,e,n,r=Lk,i=Mk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Ok),{width:r.toString(),height:i.toString(),top:s,left:o}),h=rt().toLowerCase();n&&(l=c0(h)?Fk:n),l0(h)&&(e=e||jk,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[k,x])=>`${m}${k}=${x},`,"");if(_A(h)&&l!=="_self")return zk(e||"",l),new pg(null);const p=window.open(e||"",l,f);X(p,t,"popup-blocked");try{p.focus()}catch{}return new pg(p)}function zk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="__/auth/handler",$k="emulator/auth/handler",Hk=encodeURIComponent("fac");async function mg(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof _0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Vo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Hk}=${encodeURIComponent(u)}`:"";return`${qk(t)}?${No(l).slice(1)}${h}`}function qk({config:t}){return t.emulator?Qd(t,$k):`https://${t.authDomain}/${Bk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="webStorageSupport";class Wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S0,this._completeRedirectFn=gk,this._overrideRedirectResult=fk}async _openPopup(e,n,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mg(e,n,r,Rh(),i);return Uk(e,o,Zd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mg(e,n,r,Rh(),i);return QA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bk(e),r=new vk(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ac];o!==void 0&&n(!!o),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ik(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m0()||u0()||Yd()}}const Gk=Wk;var gg="@firebase/auth",yg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xk(t){$i(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g0(t)},h=new AA(r,i,s,u);return NA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$i(new Wr("auth-internal",e=>{const n=nu(e.getProvider("auth").getImmediate());return(r=>new Kk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(gg,yg,Qk(t)),ir(gg,yg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=5*60,Jk=H_("authIdTokenMaxAge")||Yk;let vg=null;const Zk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Jk)return;const i=n==null?void 0:n.token;vg!==i&&(vg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eC(t=X_()){const e=Wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xA(t,{popupRedirectResolver:Gk,persistence:[ik,WA,S0]}),r=H_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Zk(s.toString());BA(n,o,()=>o(n.currentUser)),zA(n,l=>o(l))}}const i=B_("auth");return i&&DA(n,`http://${i}`),n}function tC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xk("Browser");var _g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,N0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,C,R){for(var T=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)T[ct-2]=arguments[ct];return y.prototype[C].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,_){_||(_=0);var E=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)E[C]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(C=0;16>C;++C)E[C]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],C=w.g[2];var R=w.g[3],T=y+(R^_&(C^R))+E[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=R+(C^y&(_^C))+E[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=C+(_^R&(y^_))+E[2]+606105819&4294967295,C=R+(T<<17&4294967295|T>>>15),T=_+(y^C&(R^y))+E[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(R^_&(C^R))+E[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=R+(C^y&(_^C))+E[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=C+(_^R&(y^_))+E[6]+2821735955&4294967295,C=R+(T<<17&4294967295|T>>>15),T=_+(y^C&(R^y))+E[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(R^_&(C^R))+E[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=R+(C^y&(_^C))+E[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=C+(_^R&(y^_))+E[10]+4294925233&4294967295,C=R+(T<<17&4294967295|T>>>15),T=_+(y^C&(R^y))+E[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(R^_&(C^R))+E[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=R+(C^y&(_^C))+E[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=C+(_^R&(y^_))+E[14]+2792965006&4294967295,C=R+(T<<17&4294967295|T>>>15),T=_+(y^C&(R^y))+E[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(C^R&(_^C))+E[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=R+(_^C&(y^_))+E[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(R^y))+E[11]+643717713&4294967295,C=R+(T<<14&4294967295|T>>>18),T=_+(R^y&(C^R))+E[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^R&(_^C))+E[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=R+(_^C&(y^_))+E[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(R^y))+E[15]+3634488961&4294967295,C=R+(T<<14&4294967295|T>>>18),T=_+(R^y&(C^R))+E[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^R&(_^C))+E[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=R+(_^C&(y^_))+E[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(R^y))+E[3]+4107603335&4294967295,C=R+(T<<14&4294967295|T>>>18),T=_+(R^y&(C^R))+E[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^R&(_^C))+E[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=R+(_^C&(y^_))+E[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(R^y))+E[7]+1735328473&4294967295,C=R+(T<<14&4294967295|T>>>18),T=_+(R^y&(C^R))+E[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(_^C^R)+E[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=R+(y^_^C)+E[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=C+(R^y^_)+E[11]+1839030562&4294967295,C=R+(T<<16&4294967295|T>>>16),T=_+(C^R^y)+E[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^R)+E[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=R+(y^_^C)+E[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=C+(R^y^_)+E[7]+4139469664&4294967295,C=R+(T<<16&4294967295|T>>>16),T=_+(C^R^y)+E[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^R)+E[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=R+(y^_^C)+E[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=C+(R^y^_)+E[3]+3572445317&4294967295,C=R+(T<<16&4294967295|T>>>16),T=_+(C^R^y)+E[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^R)+E[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=R+(y^_^C)+E[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=C+(R^y^_)+E[15]+530742520&4294967295,C=R+(T<<16&4294967295|T>>>16),T=_+(C^R^y)+E[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(C^(_|~R))+E[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=R+(_^(y|~C))+E[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=C+(y^(R|~_))+E[14]+2878612391&4294967295,C=R+(T<<15&4294967295|T>>>17),T=_+(R^(C|~y))+E[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~R))+E[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=R+(_^(y|~C))+E[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=C+(y^(R|~_))+E[10]+4293915773&4294967295,C=R+(T<<15&4294967295|T>>>17),T=_+(R^(C|~y))+E[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~R))+E[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=R+(_^(y|~C))+E[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=C+(y^(R|~_))+E[6]+2734768916&4294967295,C=R+(T<<15&4294967295|T>>>17),T=_+(R^(C|~y))+E[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~R))+E[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=R+(_^(y|~C))+E[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=C+(y^(R|~_))+E[2]+718787259&4294967295,C=R+(T<<15&4294967295|T>>>17),T=_+(R^(C|~y))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,E=this.B,C=this.h,R=0;R<y;){if(C==0)for(;R<=_;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(E[C++]=w.charCodeAt(R++),C==this.blockSize){i(this,E),C=0;break}}else for(;R<y;)if(E[C++]=w[R++],C==this.blockSize){i(this,E),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var E=0;32>E;E+=8)w[_++]=this.g[y]>>>E&255;return w};function s(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],E=!0,C=w.length-1;0<=C;C--){var R=w[C]|0;E&&R==y||(_[C]=R,E=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return O(h(-w));for(var y=[],_=1,E=0;w>=_;E++)y[E]=w/_|0,_*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),E=p,C=0;C<w.length;C+=8){var R=Math.min(8,w.length-C),T=parseInt(w.substring(C,C+R),y);8>R?(R=h(Math.pow(y,R)),E=E.j(R).add(h(T))):(E=E.j(_),E=E.add(h(T)))}return E}var p=u(0),m=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(N(this))return"-"+O(this).toString(w);for(var y=h(Math.pow(w,6)),_=this,E="";;){var C=V(_,y).g;_=I(_,C.j(y));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=C,x(_))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=I(this,w),N(w)?-1:x(w)?0:1};function O(w){for(var y=w.g.length,_=[],E=0;E<y;E++)_[E]=~w.g[E];return new o(_,~w.h).add(m)}t.abs=function(){return N(this)?O(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0,C=0;C<=y;C++){var R=E+(this.i(C)&65535)+(w.i(C)&65535),T=(R>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);E=T>>>16,R&=65535,T&=65535,_[C]=T<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(w,y){return w.add(O(y))}t.j=function(w){if(x(this)||x(w))return p;if(N(this))return N(w)?O(this).j(O(w)):O(O(this).j(w));if(N(w))return O(this.j(O(w)));if(0>this.l(k)&&0>w.l(k))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],E=0;E<2*y;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<w.g.length;C++){var R=this.i(E)>>>16,T=this.i(E)&65535,ct=w.i(C)>>>16,an=w.i(C)&65535;_[2*E+2*C]+=T*an,v(_,2*E+2*C),_[2*E+2*C+1]+=R*an,v(_,2*E+2*C+1),_[2*E+2*C+1]+=T*ct,v(_,2*E+2*C+1),_[2*E+2*C+2]+=R*ct,v(_,2*E+2*C+2)}for(E=0;E<y;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=y;E<2*y;E++)_[E]=0;return new o(_,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function S(w,y){this.g=w,this.h=y}function V(w,y){if(x(y))throw Error("division by zero");if(x(w))return new S(p,p);if(N(w))return y=V(O(w),y),new S(O(y.g),O(y.h));if(N(y))return y=V(w,O(y)),new S(O(y.g),y.h);if(30<w.g.length){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,E=y;0>=E.l(w);)_=z(_),E=z(E);var C=j(_,1),R=j(E,1);for(E=j(E,2),_=j(_,2);!x(E);){var T=R.add(E);0>=T.l(w)&&(C=C.add(_),R=T),E=j(E,1),_=j(_,1)}return y=I(w,C.j(y)),new S(C,y)}for(C=p;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=h(_),T=R.j(y);N(T)||0<T.l(w);)_-=E,R=h(_),T=R.j(y);x(R)&&(R=m),C=C.add(R),w=I(w,T)}return new S(C,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)&w.i(E);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)|w.i(E);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)^w.i(E);return new o(_,this.h^w.h)};function z(w){for(var y=w.g.length+1,_=[],E=0;E<y;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(_,w.h)}function j(w,y){var _=y>>5;y%=32;for(var E=w.g.length-_,C=[],R=0;R<E;R++)C[R]=0<y?w.i(R+_)>>>y|w.i(R+_+1)<<32-y:w.i(R+_);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,N0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,or=o}).apply(typeof _g<"u"?_g:typeof self<"u"?self:typeof window<"u"?window:{});var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D0,Ns,V0,Ha,Nh,b0,O0,L0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ia=="object"&&Ia];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function x(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var U=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)U[ue-2]=arguments[ue];return c.prototype[P].apply(g,U)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let U=0;U<D;U++)a[P+U]=g[U]}else a.push(g)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var z=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let D=0;D<_.length;D++)d=_[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=W;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ct{constructor(){this.h=this.g=null}add(c,d){const g=an.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var an=new I(()=>new Ar,a=>a.reset());class Ar{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let B,M=!1,W=new ct,G=()=>{const a=l.Promise.resolve(void 0);B=()=>{a.then(ce)}};var ce=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){R(d)}var c=an;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}M=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function un(a,c){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(z){e:{try{V(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:cn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}x(un,Ae);var cn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),pE=0;function mE(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++pE,this.da=this.fa=!1}function zo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Bo(a){this.src=a,this.g={},this.h=0}Bo.prototype.add=function(a,c,d,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var U=Au(a,c,g,P);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new mE(c,this.src,D,!!g,P),c.fa=d,a.push(c)),c};function Su(a,c){var d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(zo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Au(a,c,d,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==g)return P}return-1}var ku="closure_lm_"+(1e6*Math.random()|0),Cu={};function Mf(a,c,d,g,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Mf(a,c[D],d,g,P);return null}return d=Uf(d),a&&a[hn]?a.K(c,d,h(g)?!!g.capture:!1,P):gE(a,c,d,!1,g,P)}function gE(a,c,d,g,P,D){if(!c)throw Error("Invalid event type");var U=h(P)?!!P.capture:!!P,ue=Pu(a);if(ue||(a[ku]=ue=new Bo(a)),d=ue.add(c,d,g,U,D),d.proxy)return d;if(g=yE(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)ln||(P=U),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(jf(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function yE(){function a(d){return c.call(a.src,a.listener,d)}const c=vE;return a}function Ff(a,c,d,g,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)Ff(a,c[D],d,g,P);else g=h(g)?!!g.capture:!!g,d=Uf(d),a&&a[hn]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=Au(D,d,g,P),-1<d&&(zo(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Pu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Au(c,d,g,P)),(d=-1<a?c[a]:null)&&Ru(d))}function Ru(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[hn])Su(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(jf(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Pu(c))?(Su(d,a),d.h==0&&(d.src=null,c[ku]=null)):zo(a)}}}function jf(a){return a in Cu?Cu[a]:Cu[a]="on"+a}function vE(a,c){if(a.da)a=!0;else{c=new un(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&Ru(a),a=d.call(g,c)}return a}function Pu(a){return a=a[ku],a instanceof Bo?a:null}var xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uf(a){return typeof a=="function"?a:(a[xu]||(a[xu]=function(c){return a.handleEvent(c)}),a[xu])}function Ge(){le.call(this),this.i=new Bo(this),this.M=this,this.F=null}x(Ge,le),Ge.prototype[hn]=!0,Ge.prototype.removeEventListener=function(a,c,d,g){Ff(this,a,c,d,g)};function it(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ae(c,a);else if(c instanceof Ae)c.target=c.target||a;else{var P=c;c=new Ae(g,a),E(c,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var U=c.g=d[D];P=$o(U,g,!0,c)&&P}if(U=c.g=a,P=$o(U,g,!0,c)&&P,P=$o(U,g,!1,c)&&P,d)for(D=0;D<d.length;D++)U=c.g=d[D],P=$o(U,g,!1,c)&&P}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)zo(d[g]);delete a.g[c],a.h--}}this.F=null},Ge.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Ge.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function $o(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var U=c[D];if(U&&!U.da&&U.capture==d){var ue=U.listener,je=U.ha||U.src;U.fa&&Su(a.i,U),P=ue.call(je,g)!==!1&&P}}return P&&!g.defaultPrevented}function zf(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Bf(a){a.g=zf(()=>{a.g=null,a.i&&(a.i=!1,Bf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class _E extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Bf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function os(a){le.call(this),this.h=a,this.g={}}x(os,le);var $f=[];function Hf(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&Ru(c)},a),a.g={}}os.prototype.N=function(){os.aa.N.call(this),Hf(this)},os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nu=l.JSON.stringify,wE=l.JSON.parse,EE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Du(){}Du.prototype.h=null;function qf(a){return a.h||(a.h=a.i())}function Wf(){}var as={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vu(){Ae.call(this,"d")}x(Vu,Ae);function bu(){Ae.call(this,"c")}x(bu,Ae);var kr={},Gf=null;function Ho(){return Gf=Gf||new Ge}kr.La="serverreachability";function Kf(a){Ae.call(this,kr.La,a)}x(Kf,Ae);function ls(a){const c=Ho();it(c,new Kf(c))}kr.STAT_EVENT="statevent";function Qf(a,c){Ae.call(this,kr.STAT_EVENT,a),this.stat=c}x(Qf,Ae);function st(a){const c=Ho();it(c,new Qf(c,a))}kr.Ma="timingevent";function Xf(a,c){Ae.call(this,kr.Ma,a),this.size=c}x(Xf,Ae);function us(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function cs(){this.g=!0}cs.prototype.xa=function(){this.g=!1};function TE(a,c,d,g,P,D){a.info(function(){if(a.g)if(D)for(var U="",ue=D.split("&"),je=0;je<ue.length;je++){var se=ue[je].split("=");if(1<se.length){var Ke=se[0];se=se[1];var Qe=Ke.split("_");U=2<=Qe.length&&Qe[1]=="type"?U+(Ke+"="+se+"&"):U+(Ke+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+U})}function IE(a,c,d,g,P,D,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+D+" "+U})}function ti(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+AE(a,d)+(g?" "+g:"")})}function SE(a,c){a.info(function(){return"TIMEOUT: "+c})}cs.prototype.info=function(){};function AE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return Nu(d)}catch{return c}}var qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ou;function Wo(){}x(Wo,Du),Wo.prototype.g=function(){return new XMLHttpRequest},Wo.prototype.i=function(){return{}},Ou=new Wo;function Dn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new os(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jf}function Jf(){this.i=null,this.g="",this.h=!1}var Zf={},Lu={};function Mu(a,c,d){a.L=1,a.v=Xo(dn(c)),a.m=d,a.P=!0,ep(a,null)}function ep(a,c){a.F=Date.now(),Go(a),a.A=dn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),pp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Jf,a.g=Dp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new _E(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&($f[0]=P.toString()),P=$f);for(var D=0;D<P.length;D++){var U=Mf(d,P[D],g||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ls(),TE(a.i,a.u,a.A,a.l,a.R,a.m)}Dn.prototype.ca=function(a){a=a.target;const c=this.M;c&&fn(a)==3?c.j():this.Y(a)},Dn.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=fn(this.g);var c=this.g.Ba();const ii=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||Ep(this.g)))){this.J||Qe!=4||c==7||(c==8||0>=ii?ls(3):ls(2)),Fu(this);var d=this.g.Z();this.X=d;t:if(tp(this)){var g=Ep(this.g);a="";var P=g.length,D=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),hs(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==P-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,IE(this.i,this.u,this.A,this.l,this.R,Qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,je=this.g;if((ue=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ue)){var se=ue;break t}}se=null}if(d=se)ti(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ju(this,d);else{this.o=!1,this.s=3,st(12),Cr(this),hs(this);break e}}if(this.P){d=!0;let Lt;for(;!this.J&&this.C<U.length;)if(Lt=kE(this,U),Lt==Lu){Qe==4&&(this.s=4,st(14),d=!1),ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Zf){this.s=4,st(15),ti(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else ti(this.i,this.l,Lt,null),ju(this,Lt);if(tp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||U.length!=0||this.h.h||(this.s=1,st(16),d=!1),this.o=this.o&&d,!d)ti(this.i,this.l,U,"[Invalid Chunked Response]"),Cr(this),hs(this);else if(0<U.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),qu(Ke),Ke.M=!0,st(11))}}else ti(this.i,this.l,U,null),ju(this,U);Qe==4&&Cr(this),this.o&&!this.J&&(Qe==4?Rp(this.j,this):(this.o=!1,Go(this)))}else $E(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Cr(this),hs(this)}}}catch{}finally{}};function tp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function kE(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Lu:(d=Number(c.substring(d,g)),isNaN(d)?Zf:(g+=1,g+d>c.length?Lu:(c=c.slice(g,g+d),a.C=g+d,c)))}Dn.prototype.cancel=function(){this.J=!0,Cr(this)};function Go(a){a.S=Date.now()+a.I,np(a,a.I)}function np(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=us(m(a.ba,a),c)}function Fu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Dn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(SE(this.i,this.A),this.L!=2&&(ls(),st(17)),Cr(this),this.s=2,hs(this)):np(this,this.S-a)};function hs(a){a.j.G==0||a.J||Rp(a.j,a)}function Cr(a){Fu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Hf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function ju(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Uu(d.h,a))){if(!a.K&&Uu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)na(d),ea(d);else break e;Hu(d),st(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=us(m(d.Za,d),6e3));if(1>=sp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Pr(d,11)}else if((a.K||d.g==a)&&na(d),!v(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let se=P[c];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Ke=se[3];Ke!=null&&(d.la=Ke,d.j.info("VER="+d.la));const Qe=se[4];Qe!=null&&(d.Aa=Qe,d.j.info("SVER="+d.Aa));const ii=se[5];ii!=null&&typeof ii=="number"&&0<ii&&(g=1.5*ii,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Lt=a.g;if(Lt){const ia=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ia){var D=g.h;D.g||ia.indexOf("spdy")==-1&&ia.indexOf("quic")==-1&&ia.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(zu(D,D.h),D.h=null))}if(g.D){const Wu=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wu&&(g.ya=Wu,fe(g.I,g.D,Wu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var U=a;if(g.qa=Np(g,g.J?g.ia:null,g.W),U.K){op(g.h,U);var ue=U,je=g.L;je&&(ue.I=je),ue.B&&(Fu(ue),Go(ue)),g.g=U}else kp(g);0<d.i.length&&ta(d)}else se[0]!="stop"&&se[0]!="close"||Pr(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Pr(d,7):$u(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}ls(4)}catch{}}var CE=class{constructor(a,c){this.g=a,this.map=c}};function rp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ip(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function sp(a){return a.h?1:a.g?a.g.size:0}function Uu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function zu(a,c){a.g?a.g.add(c):a.h=c}function op(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}rp.prototype.cancel=function(){if(this.i=ap(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ap(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function RE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function PE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function lp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=PE(a),g=RE(a),P=g.length,D=0;D<P;D++)c.call(void 0,g[D],d&&d[D],a)}var up=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var D=a[d].substring(0,g);P=a[d].substring(g+1)}else D=a[d];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Rr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Rr){this.h=a.h,Ko(this,a.j),this.o=a.o,this.g=a.g,Qo(this,a.s),this.l=a.l;var c=a.i,d=new ps;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),cp(this,d),this.m=a.m}else a&&(c=String(a).match(up))?(this.h=!1,Ko(this,c[1]||"",!0),this.o=ds(c[2]||""),this.g=ds(c[3]||"",!0),Qo(this,c[4]),this.l=ds(c[5]||"",!0),cp(this,c[6]||"",!0),this.m=ds(c[7]||"")):(this.h=!1,this.i=new ps(null,this.h))}Rr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(fs(c,hp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(fs(c,hp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(fs(d,d.charAt(0)=="/"?VE:DE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",fs(d,OE)),a.join("")};function dn(a){return new Rr(a)}function Ko(a,c,d){a.j=d?ds(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Qo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function cp(a,c,d){c instanceof ps?(a.i=c,LE(a.i,a.h)):(d||(c=fs(c,bE)),a.i=new ps(c,a.h))}function fe(a,c,d){a.i.set(c,d)}function Xo(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ds(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,NE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hp=/[#\/\?@]/g,DE=/[#\?:]/g,VE=/[#\?]/g,bE=/[#\?@]/g,OE=/#/g;function ps(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Vn(a){a.g||(a.g=new Map,a.h=0,a.i&&xE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ps.prototype,t.add=function(a,c){Vn(this),this.i=null,a=ni(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function dp(a,c){Vn(a),c=ni(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function fp(a,c){return Vn(a),c=ni(a,c),a.g.has(c)}t.forEach=function(a,c){Vn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)},t.na=function(){Vn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const P=a[g];for(let D=0;D<P.length;D++)d.push(c[g])}return d},t.V=function(a){Vn(this);let c=[];if(typeof a=="string")fp(this,a)&&(c=c.concat(this.g.get(ni(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Vn(this),this.i=null,a=ni(this,a),fp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function pp(a,c,d){dp(a,c),0<d.length&&(a.i=null,a.g.set(ni(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const D=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var P=D;U[g]!==""&&(P+="="+encodeURIComponent(String(U[g]))),a.push(P)}}return this.i=a.join("&")};function ni(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function LE(a,c){c&&!a.j&&(Vn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(dp(this,g),pp(this,P,d))},a)),a.j=c}function ME(a,c){const d=new cs;if(l.Image){const g=new Image;g.onload=k(bn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=k(bn,d,"TestLoadImage: error",!1,c,g),g.onabort=k(bn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=k(bn,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function FE(a,c){const d=new cs,g=new AbortController,P=setTimeout(()=>{g.abort(),bn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?bn(d,"TestPingServer: ok",!0,c):bn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),bn(d,"TestPingServer: error",!1,c)})}function bn(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function jE(){this.g=new EE}function UE(a,c,d){const g=d||"";try{lp(a,function(P,D){let U=P;h(P)&&(U=Nu(P)),c.push(g+D+"="+encodeURIComponent(U))})}catch(P){throw c.push(g+"type="+encodeURIComponent("_badmap")),P}}function Yo(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Yo,Du),Yo.prototype.g=function(){return new Jo(this.l,this.j)},Yo.prototype.i=function(a){return function(){return a}}({});function Jo(a,c){Ge.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Jo,Ge),t=Jo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,gs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ms(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function mp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ms(this):gs(this),this.readyState==3&&mp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ms(this))},t.Qa=function(a){this.g&&(this.response=a,ms(this))},t.ga=function(){this.g&&ms(this)};function ms(a){a.readyState=4,a.l=null,a.j=null,a.v=null,gs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function gs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gp(a){let c="";return j(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Bu(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=gp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):fe(a,c,d))}function Te(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Te,Ge);var zE=/^https?$/i,BE=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ou.g(),this.v=this.o?qf(this.o):qf(Ou),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){yp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(BE,c,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){yp(this,D)}};function yp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,vp(a),Zo(a)}function vp(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),Zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_p(this):this.bb())},t.bb=function(){_p(this)};function _p(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)zf(a.Ea,0,a);else if(it(a,"readystatechange"),fn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=U===0){var P=String(a.D).match(up)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!zE.test(P?P.toLowerCase():"")}d=g}if(d)it(a,"complete"),it(a,"success");else{a.m=6;try{var D=2<fn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",vp(a)}}finally{Zo(a)}}}}function Zo(a,c){if(a.g){wp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||it(a,"ready");try{d.onreadystatechange=g}catch{}}}function wp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),wE(c)}};function Ep(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $E(a){const c={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=C(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[P]||[];c[P]=D,D.push(d)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ys(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Tp(a){this.Aa=0,this.i=[],this.j=new cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ys("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ys("baseRetryDelayMs",5e3,a),this.cb=ys("retryDelaySeedMs",1e4,a),this.Wa=ys("forwardChannelMaxRetries",2,a),this.wa=ys("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rp(a&&a.concurrentRequestLimit),this.Da=new jE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Tp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){st(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Np(this,null,this.W),ta(this)};function $u(a){if(Ip(a),a.G==3){var c=a.U++,d=dn(a.I);if(fe(d,"SID",a.K),fe(d,"RID",c),fe(d,"TYPE","terminate"),vs(a,d),c=new Dn(a,a.j,c),c.L=2,c.v=Xo(dn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Dp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Go(c)}xp(a)}function ea(a){a.g&&(qu(a),a.g.cancel(),a.g=null)}function Ip(a){ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),na(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ta(a){if(!ip(a.h)&&!a.s){a.s=!0;var c=a.Ga;B||G(),M||(B(),M=!0),W.add(c,a),a.B=0}}function HE(a,c){return sp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=us(m(a.Ga,a,c),Pp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Dn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ap(this,P,c),d=dn(this.I),fe(d,"RID",a),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),vs(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(gp(D)))+"&"+c:this.m&&Bu(d,this.m,D)),zu(this.h,P),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",c),fe(d,"SID","null"),P.T=!0,Mu(P,d,null)):Mu(P,d,c),this.G=2}}else this.G==3&&(a?Sp(this,a):this.i.length==0||ip(this.h)||Sp(this))};function Sp(a,c){var d;c?d=c.l:d=a.U++;const g=dn(a.I);fe(g,"SID",a.K),fe(g,"RID",d),fe(g,"AID",a.T),vs(a,g),a.m&&a.o&&Bu(g,a.m,a.o),d=new Dn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Ap(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),zu(a.h,d),Mu(d,g,c)}function vs(a,c){a.H&&j(a.H,function(d,g){fe(c,g,d)}),a.l&&lp({},function(d,g){fe(c,g,d)})}function Ap(a,c,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const U=["count="+d];D==-1?0<d?(D=P[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let ue=!0;for(let je=0;je<d;je++){let se=P[je].g;const Ke=P[je].map;if(se-=D,0>se)D=Math.max(0,P[je].g-100),ue=!1;else try{UE(Ke,U,"req"+se+"_")}catch{g&&g(Ke)}}if(ue){g=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function kp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;B||G(),M||(B(),M=!0),W.add(c,a),a.v=0}}function Hu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=us(m(a.Fa,a),Pp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=us(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),ea(this),Cp(this))};function qu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cp(a){a.g=new Dn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=dn(a.qa);fe(c,"RID","rpc"),fe(c,"SID",a.K),fe(c,"AID",a.T),fe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(c,"TO",a.ja),fe(c,"TYPE","xmlhttp"),vs(a,c),a.m&&a.o&&Bu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Xo(dn(c)),d.m=null,d.P=!0,ep(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ea(this),Hu(this),st(19))};function na(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Rp(a,c){var d=null;if(a.g==c){na(a),qu(a),a.g=null;var g=2}else if(Uu(a.h,c))d=c.D,op(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;g=Ho(),it(g,new Xf(g,d)),ta(a)}else kp(a);else if(P=c.s,P==3||P==0&&0<c.X||!(g==1&&HE(a,c)||g==2&&Hu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function Pp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Pr(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new Rr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ko(g,"https"),Xo(g),P?ME(g.toString(),d):FE(g.toString(),d)}else st(2);a.G=0,a.l&&a.l.sa(c),xp(a),Ip(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function xp(a){if(a.G=0,a.ka=[],a.l){const c=ap(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Np(a,c,d){var g=d instanceof Rr?dn(d):new Rr(d);if(g.g!="")c&&(g.g=c+"."+g.g),Qo(g,g.s);else{var P=l.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new Rr(null);g&&Ko(D,g),c&&(D.g=c),P&&Qo(D,P),d&&(D.l=d),g=D}return d=a.D,c=a.ya,d&&c&&fe(g,d,c),fe(g,"VER",a.la),vs(a,g),g}function Dp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Te(new Yo({eb:d})):new Te(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vp(){}t=Vp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ra(){}ra.prototype.g=function(a,c){return new _t(a,c)};function _t(a,c){Ge.call(this),this.g=new Tp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ri(this)}x(_t,Ge),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){$u(this.g)},_t.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Nu(a),a=d);c.i.push(new CE(c.Ya++,a)),c.G==3&&ta(c)},_t.prototype.N=function(){this.g.l=null,delete this.j,$u(this.g),delete this.g,_t.aa.N.call(this)};function bp(a){Vu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}x(bp,Vu);function Op(){bu.call(this),this.status=1}x(Op,bu);function ri(a){this.g=a}x(ri,Vp),ri.prototype.ua=function(){it(this.g,"a")},ri.prototype.ta=function(a){it(this.g,new bp(a))},ri.prototype.sa=function(a){it(this.g,new Op)},ri.prototype.ra=function(){it(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,L0=function(){return new ra},O0=function(){return Ho()},b0=kr,Nh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qo.NO_ERROR=0,qo.TIMEOUT=8,qo.HTTP_ERROR=6,Ha=qo,Yf.COMPLETE="complete",V0=Yf,Wf.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,Ns=Wf,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,D0=Te}).apply(typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{});const wg="@firebase/firestore",Eg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Hd("@firebase/firestore");function li(){return Kr.logLevel}function H(t,...e){if(Kr.logLevel<=te.DEBUG){const n=e.map(tf);Kr.debug(`Firestore (${ts}): ${t}`,...n)}}function Rn(t,...e){if(Kr.logLevel<=te.ERROR){const n=e.map(tf);Kr.error(`Firestore (${ts}): ${t}`,...n)}}function dr(t,...e){if(Kr.logLevel<=te.WARN){const n=e.map(tf);Kr.warn(`Firestore (${ts}): ${t}`,...n)}}function tf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,M0(t,r,n)}function M0(t,e,n){let r=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||M0(e,i,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class rC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iC{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new F0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class sC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class oC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new sC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Tg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Tg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=lC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Dh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Z(r,i);{const s=j0(),o=uC(s.encode(Ig(t,n)),s.encode(Ig(e,n)));return o!==0?o:Z(r,i)}}n+=r>65535?2:1}return Z(t.length,e.length)}function Ig(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function uC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Z(t[n],e[n]);return Z(t.length,e.length)}function Hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="__name__";class Qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Qt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Z(e.length,n.length)}static compareSegments(e,n){const r=Qt.isNumericId(e),i=Qt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Qt.extractNumericId(e).compare(Qt.extractNumericId(n)):Dh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return or.fromString(e.substring(4,e.length-2))}}class he extends Qt{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const cC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Qt{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return cC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sg}static keyField(){return new Be([Sg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(he.fromString(e))}static fromName(e){return new K(he.fromString(e).popFirst(5))}static empty(){return new K(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t,e,n){if(!n)throw new $(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hC(t,e,n,r){if(e===!0&&r===!0)throw new $(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ag(t){if(!K.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kg(t){if(K.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function z0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=su(t);throw new $(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,e){const n={typeString:t};return e&&(n.value=e),n}function Oo(t,e){if(!z0(t))throw new $(b.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(b.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=-62135596800,Rg=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Rg);return new me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cg)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rg}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Oo(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:De("string",me._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new me(0,0))}static max(){return new Y(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=-1;function dC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new fr(i,K.empty(),e)}function fC(t){return new fr(t.readTime,t.key,yo)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(Y.min(),K.empty(),yo)}static max(){return new fr(Y.max(),K.empty(),yo)}}function pC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==mC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function rs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ou.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=-1;function au(t){return t==null}function Rl(t){return t===0&&1/t==-1/0}function vC(t){return typeof t=="number"&&Number.isInteger(t)&&!Rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="";function _C(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pg(e)),e=wC(t.get(n),e);return Pg(e)}function wC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case B0:n+="";break;default:n+=s}}return n}function Pg(t){return t+B0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ir(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new Oe(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new H0("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const EC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=EC.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="server_timestamp",W0="__type__",G0="__previous_value__",K0="__local_write_time__";function sf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[W0])===null||n===void 0?void 0:n.stringValue)===q0}function lu(t){const e=t.mapValue.fields[G0];return sf(e)?lu(e):e}function vo(t){const e=pr(t.mapValue.fields[K0].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Pl="(default)";class _o{constructor(e,n){this.projectId=e,this.database=n||Pl}static empty(){return new _o("","")}get isDefaultDatabase(){return this.database===Pl}isEqual(e){return e instanceof _o&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="__type__",IC="__max__",Aa={mapValue:{}},X0="__vector__",xl="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sf(t)?4:AC(t)?9007199254740991:SC(t)?10:11:Q(28295,{value:t})}function on(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pr(i.timestampValue),l=pr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return mr(i.bytesValue).isEqual(mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),l=ke(s.doubleValue);return o===l?Rl(o)===Rl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(xg(o)!==xg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function wo(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Dg(t.timestampValue,e.timestampValue);case 4:return Dg(vo(t),vo(e));case 5:return Dh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=mr(s),u=mr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Z(l[h],u[h]);if(f!==0)return f}return Z(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Z(ke(s.latitude),ke(o.latitude));return l!==0?l:Z(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},m=o.fields||{},k=(l=p[xl])===null||l===void 0?void 0:l.arrayValue,x=(u=m[xl])===null||u===void 0?void 0:u.arrayValue,N=Z(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Vg(k,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Aa.mapValue&&o===Aa.mapValue)return 0;if(s===Aa.mapValue)return 1;if(o===Aa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Dh(u[p],f[p]);if(m!==0)return m;const k=qi(l[u[p]],h[f[p]]);if(k!==0)return k}return Z(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{le:n})}}function Dg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=pr(t),r=pr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Vg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=qi(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function Wi(t){return Vh(t)}function Vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vh(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function qa(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lu(t);return e?16+qa(e):16;case 5:return 2*t.stringValue.length;case 6:return mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+qa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ir(r.fields,(s,o)=>{i+=s.length+qa(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function bg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bh(t){return!!t&&"integerValue"in t}function of(t){return!!t&&"arrayValue"in t}function Og(t){return!!t&&"nullValue"in t}function Lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function SC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Q0])===null||n===void 0?void 0:n.stringValue)===X0}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ir(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===IC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Gs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ir(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(Gs(this.value))}}function Y0(t){const e=[];return Ir(t.fields,(n,r)=>{const i=new Be([n]);if(Wa(r)){const s=Y0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,Y.min(),Y.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Y.min(),Y.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.position=e,this.inclusive=n}}function Mg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function kC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{}class Ne extends J0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RC(e,n,r):n==="array-contains"?new NC(e,r):n==="in"?new DC(e,r):n==="not-in"?new VC(e,r):n==="array-contains-any"?new bC(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PC(e,r):new xC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qi(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends J0{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Wt(e,n)}matches(e){return Z0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Z0(t){return t.op==="and"}function ew(t){return CC(t)&&Z0(t)}function CC(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Oh(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(ew(t))return t.filters.map(e=>Oh(e)).join(",");{const e=t.filters.map(n=>Oh(n)).join(",");return`${t.op}(${e})`}}function tw(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&tw(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function nw(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Wi(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(nw).join(" ,")+"}"}(t):"Filter"}class RC extends Ne{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class PC extends Ne{constructor(e,n){super(e,"in",n),this.keys=rw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xC extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=rw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class NC extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return of(n)&&wo(n.arrayValue,this.value)}}class DC extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wo(this.value.arrayValue,n)}}class VC extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!wo(this.value.arrayValue,n)}}class bC extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function jg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new OC(t,e,n,r,i,s,o)}function af(t){const e=J(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Oh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),e.Pe=n}return e.Pe}function lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fg(t.startAt,e.startAt)&&Fg(t.endAt,e.endAt)}function Lh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function LC(t,e,n,r,i,s,o,l){return new is(t,e,n,r,i,s,o,l)}function uu(t){return new is(t)}function Ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iw(t){return t.collectionGroup!==null}function Ks(t){const e=J(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Oe(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Eo(s,r))}),n.has(Be.keyField().canonicalString())||e.Te.push(new Eo(Be.keyField(),r))}return e.Te}function tn(t){const e=J(t);return e.Ie||(e.Ie=MC(e,Ks(t))),e.Ie}function MC(t,e){if(t.limitType==="F")return jg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Eo(i.field,s)});const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;return jg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mh(t,e){const n=t.filters.concat([e]);return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fh(t,e,n){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cu(t,e){return lf(tn(t),tn(e))&&t.limitType===e.limitType}function sw(t){return`${af(tn(t))}|lt:${t.limitType}`}function ui(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nw(i)).join(", ")}]`),au(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wi(i)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function hu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Mg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ks(r),i)||r.endAt&&!function(o,l,u){const h=Mg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ks(r),i))}(t,e)}function FC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ow(t){return(e,n)=>{let r=!1;for(const i of Ks(t)){const s=jC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jC(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?qi(u,h):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new Ee(K.comparator);function Pn(){return UC}const aw=new Ee(K.comparator);function Ds(...t){let e=aw;for(const n of t)e=e.insert(n.key,n);return e}function lw(t){let e=aw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return Qs()}function uw(){return Qs()}function Qs(){return new Jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const zC=new Ee(K.comparator),BC=new Oe(K.comparator);function ne(...t){let e=BC;for(const n of t)e=e.add(n);return e}const $C=new Oe(Z);function HC(){return $C}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rl(e)?"-0":e}}function cw(t){return{integerValue:""+t}}function qC(t,e){return vC(e)?cw(e):uf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this._=void 0}}function WC(t,e,n){return t instanceof To?function(i,s){const o={fields:{[W0]:{stringValue:q0},[K0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sf(s)&&(s=lu(s)),s&&(o.fields[G0]=s),{mapValue:o}}(n,e):t instanceof Io?dw(t,e):t instanceof So?fw(t,e):function(i,s){const o=hw(i,s),l=zg(o)+zg(i.Ee);return bh(o)&&bh(i.Ee)?cw(l):uf(i.serializer,l)}(t,e)}function GC(t,e,n){return t instanceof Io?dw(t,e):t instanceof So?fw(t,e):n}function hw(t,e){return t instanceof Dl?function(r){return bh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class To extends du{}class Io extends du{constructor(e){super(),this.elements=e}}function dw(t,e){const n=pw(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class So extends du{constructor(e){super(),this.elements=e}}function fw(t,e){let n=pw(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class Dl extends du{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function zg(t){return ke(t.integerValue||t.doubleValue)}function pw(t){return of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.field=e,this.transform=n}}function QC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Io&&i instanceof Io||r instanceof So&&i instanceof So?Hi(r.elements,i.elements,on):r instanceof Dl&&i instanceof Dl?on(r.Ee,i.Ee):r instanceof To&&i instanceof To}(t.transform,e.transform)}class XC{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fu{}function mw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cf(t.key,Vt.none()):new Lo(t.key,t.data,Vt.none());{const n=t.data,r=ft.empty();let i=new Oe(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Sr(t.key,r,new Tt(i.toArray()),Vt.none())}}function YC(t,e,n){t instanceof Lo?function(i,s,o){const l=i.value.clone(),u=$g(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(i,s,o){if(!Ga(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=$g(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(gw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof Lo?function(s,o,l,u){if(!Ga(s.precondition,o))return l;const h=s.value.clone(),f=Hg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(s,o,l,u){if(!Ga(s.precondition,o))return l;const h=Hg(s.fieldTransforms,u,o),f=o.data;return f.setAll(gw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ga(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function JC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=hw(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function Bg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hi(r,i,(s,o)=>QC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Lo extends fu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sr extends fu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $g(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,GC(o,l,n[i]))}return r}function Hg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WC(s,o,e))}return r}class cf extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZC extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&YC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=mw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>Bg(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>Bg(n,r))}}class hf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return zC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,re;function r2(t){switch(t){case b.OK:return Q(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function yw(t){if(t===void 0)return Rn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Re.OK:return b.OK;case Re.CANCELLED:return b.CANCELLED;case Re.UNKNOWN:return b.UNKNOWN;case Re.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Re.INTERNAL:return b.INTERNAL;case Re.UNAVAILABLE:return b.UNAVAILABLE;case Re.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Re.NOT_FOUND:return b.NOT_FOUND;case Re.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Re.ABORTED:return b.ABORTED;case Re.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Re.DATA_LOSS:return b.DATA_LOSS;default:return Q(39323,{code:t})}}(re=Re||(Re={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=new or([4294967295,4294967295],0);function qg(t){const e=j0().encode(t),n=new N0;return n.update(e),new Uint8Array(n.digest())}function Wg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new or([n,r],0),new or([i,s],0)]}class df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=or.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(or.fromNumber(r)));return i.compare(i2)===1&&(i=new or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=qg(e),[r,i]=Wg(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new df(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=qg(e),[r,i]=Wg(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Mo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pu(Y.min(),i,new Ee(Z),Pn(),ne())}}class Mo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mo(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class vw{constructor(e,n){this.targetId=e,this.De=n}}class _w{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Gg{constructor(){this.ve=0,this.Ce=Kg(),this.Fe=We.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ne(),n=ne(),r=ne();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new Mo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Kg()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class s2{constructor(e){this.We=e,this.Ge=new Map,this.ze=Pn(),this.je=ka(),this.Je=ka(),this.He=new Ee(Z)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(Lh(s))if(r===0){const o=new K(s.path);this.Xe(n,o,tt.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=mr(r).toUint8Array()}catch(u){if(u instanceof H0)return dr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new df(o,i,s)}catch(u){return dr(u instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Lh(l.target)){const u=new K(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,tt.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=ne();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new pu(e,n,this.He,this.ze,r);return this.ze=Pn(),this.je=ka(),this.Je=ka(),this.He=new Ee(Z),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Gg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Oe(Z),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Oe(Z),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Gg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ka(){return new Ee(K.comparator)}function Kg(){return new Ee(K.comparator)}const o2={asc:"ASCENDING",desc:"DESCENDING"},a2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},l2={and:"AND",or:"OR"};class u2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jh(t,e){return t.useProto3Json||au(e)?e:{value:e}}function Vl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ww(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function c2(t,e){return Vl(t,e.toTimestamp())}function nn(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=pr(n);return new me(r.seconds,r.nanos)}(t))}function ff(t,e){return Uh(t,e).canonicalString()}function Uh(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ew(t){const e=he.fromString(t);return oe(kw(e),10190,{key:e.toString()}),e}function zh(t,e){return ff(t.databaseId,e.path)}function kc(t,e){const n=Ew(e);if(n.get(1)!==t.databaseId.projectId)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Iw(n))}function Tw(t,e){return ff(t.databaseId,e)}function h2(t){const e=Ew(t);return e.length===4?he.emptyPath():Iw(e)}function Bh(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iw(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Qg(t,e,n){return{name:zh(t,e),fields:n.value.mapValue.fields}}function d2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string",58123),We.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?b.UNKNOWN:yw(h.code);return new $(f,h.message||"")}(o);n=new _w(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kc(t,r.document.name),s=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):Y.min(),l=new ft({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ka(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kc(t,r.document),s=r.readTime?nn(r.readTime):Y.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ka([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kc(t,r.document),s=r.removedTargetIds||[];n=new Ka([],s,i,null)}else{if(!("filter"in e))return Q(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new n2(i,s),l=r.targetId;n=new vw(l,o)}}return n}function f2(t,e){let n;if(e instanceof Lo)n={update:Qg(t,e.key,e.value)};else if(e instanceof cf)n={delete:zh(t,e.key)};else if(e instanceof Sr)n={update:Qg(t,e.key,e.data),updateMask:T2(e.fieldMask)};else{if(!(e instanceof ZC))return Q(16599,{Rt:e.type});n={verify:zh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof To)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof So)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Dl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:c2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function p2(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?nn(i.updateTime):nn(s);return o.isEqual(Y.min())&&(o=nn(s)),new XC(o,i.transformResults||[])}(n,e))):[]}function m2(t,e){return{documents:[Tw(t,e.path)]}}function g2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tw(t,i);const s=function(h){if(h.length!==0)return Aw(Wt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:ci(m.field),direction:_2(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=jh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:i}}function y2(t){let e=h2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=Sw(p);return m instanceof Wt&&ew(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(x){return new Eo(hi(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,au(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,k=p.values||[];return new Nl(k,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,k=p.values||[];return new Nl(k,m)}(n.endAt)),LC(e,i,o,s,l,"F",u,h)}function v2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hi(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hi(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hi(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>Sw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function _2(t){return o2[t]}function w2(t){return a2[t]}function E2(t){return l2[t]}function ci(t){return{fieldPath:t.canonicalString()}}function hi(t){return Be.fromServerFormat(t.fieldPath)}function Aw(t){return t instanceof Ne?function(n){if(n.op==="=="){if(Lg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(Og(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(Og(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:w2(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(i=>Aw(i));return r.length===1?r[0]:{compositeFilter:{op:E2(n.op),filters:r}}}(t):Q(54877,{filter:t})}function T2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.gt=e}}function S2(t){const e=y2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.Dn=new k2}addToCollectionParentIndex(e,n){return this.Dn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(fr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class k2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Cw=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(Cw,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Gi(0)}static ur(){return new Gi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="LruGarbageCollector",C2=1048576;function Jg([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class R2{constructor(e){this.Tr=e,this.buffer=new Oe(Jg),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Jg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class P2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){H(Yg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){rs(n)?H(Yg,"Ignoring IndexedDB error during garbage collection: ",n):await ns(n)}await this.Rr(3e5)})}}class x2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ou.ue);const r=new R2(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Xg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xg):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),li()<=te.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function N2(t,e){return new x2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.changes=new Jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xs(r.mutation,i,Tt.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ds();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Pn();const o=Qs(),l=function(){return Qs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Sr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Xs(f.mutation,h,f.mutation.getFieldMask(),me.now())):o.set(h.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new V2(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Qs();let i=new Ee((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Tt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=uw();f.forEach(m=>{if(!s.has(m)){const k=mw(n.get(m),r.get(m));k!==null&&p.set(m,k),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Lr());let l=yo,u=s;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:lw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,m){return new is(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,tt.newInvalidDocument(f)))});let l=Ds();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Xs(f.mutation,h,Tt.empty(),me.now()),hu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return L.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:S2(i.bundledQuery),readTime:nn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(){this.overlays=new Ee(K.comparator),this.kr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Lr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Lr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Lr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new t2(n,r));let s=this.kr.get(n);s===void 0&&(s=ne(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.qr=new Oe(Le.Qr),this.$r=new Oe(Le.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Le(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new K(new he([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new K(new he([])),r=new Le(n,e),i=new Le(n,e+1);let s=ne();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return K.comparator(e.key,n.key)||Z(e.Hr,n.Hr)}static Ur(e,n){return Z(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Oe(Le.Qr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new e2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?rf:this.er-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(Z);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),L.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Le(new K(s),0);let l=new Oe(Z);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),L.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return L.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Le(n,0),i=this.Yr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.ni=e,this.docs=function(){return new Ee(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||pC(fC(f),r)<=0||(i.has(f.key)||hu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ri(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new U2(this)}getSize(e){return L.resolve(this.size)}}class U2 extends D2{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.persistence=e,this.ii=new Jr(n=>af(n),lf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.si=0,this.oi=new pf,this.targetCount=0,this._i=Gi.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),L.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.hr(n),L.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.ai={},this.overlays={},this.ui=new ou(0),this.ci=!1,this.ci=!0,this.li=new M2,this.referenceDelegate=e(this),this.hi=new z2(this),this.indexManager=new A2,this.remoteDocumentCache=function(i){return new j2(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new I2(n),this.Ti=new O2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new L2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new F2(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new B2(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class B2 extends gC{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Ai=new pf,this.Ri=null}static Vi(e){return new mf(e)}get mi(){if(this.Ri)return this.Ri;throw Q(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.mi,r=>{const i=K.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return L.or([()=>L.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class bl{constructor(e,n){this.persistence=e,this.gi=new Jr(r=>_C(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=N2(this,n)}static Vi(e,n){return new bl(e,n)}Ii(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return L.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=qa(e.data.value)),n}Sr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return LI()?8:yC(rt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $2;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(li()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(li()<=te.DEBUG&&H("QueryEngine","Query:",ui(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(li()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):L.resolve())}ps(e,n){if(Ug(n))return L.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fh(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,Fh(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return Ug(n)||i.isEqual(Y.min())?L.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?L.resolve(null):(li()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ui(n)),this.vs(e,o,n,dC(i,yo)).next(l=>l))})}bs(e,n){let r=new Oe(ow(e));return n.forEach((i,s)=>{hu(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return li()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ui(n)),this.gs.getDocumentsMatchingQuery(e,n,fr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="LocalStore",q2=3e8;class W2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new Ee(Z),this.Ms=new Jr(s=>af(s),lf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new b2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function G2(t,e,n,r){return new W2(t,e,n,r)}async function Pw(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function K2(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let k=L.resolve();return m.forEach(x=>{k=k.next(()=>f.getEntry(u,x)).next(N=>{const O=h.docVersions.get(x);oe(O!==null,48541),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function xw(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function Q2(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,p)));let k=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(p,k),function(N,O,I){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=q2?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,k,f)&&l.push(n.hi.updateTargetData(s,k))});let u=Pn(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(X2(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(Y.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(p=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Fs=i,s))}function X2(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(yf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function Y2(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=rf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function J2(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function $h(t,e,n){const r=J(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rs(o))throw o;H(yf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Zg(t,e,n){const r=J(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=J(u),m=p.Ms.get(f);return m!==void 0?L.resolve(p.Fs.get(m)):p.hi.getTargetData(h,f)}(r,o,tn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(l=>(Z2(r,FC(e),l),{documents:l,qs:s})))}function Z2(t,e,n){let r=t.xs.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class ey{constructor(){this.activeTargetIds=HC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eR{constructor(){this.Fo=new ey,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ey,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="ConnectivityMonitor";class ny{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){H(ty,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){H(ty,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca=null;function Hh(){return Ca===null?Ca=function(){return 268435456+Math.round(2147483648*Math.random())}():Ca++,"0x"+Ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="RestConnection",nR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Pl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Hh(),l=this.Go(e,n.toUriEncodedString());H(Cc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=Ji(h);return this.jo(e,l,u,r,f).then(p=>(H(Cc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw dr(Cc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=nR[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class sR extends rR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=Hh();return new Promise((l,u)=>{const h=new D0;h.setWithCredentials(!0),h.listenOnce(V0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ha.NO_ERROR:const p=h.getResponseJson();H(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ha.TIMEOUT:H(Je,`RPC '${e}' ${o} timed out`),u(new $(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ha.HTTP_ERROR:const m=h.getStatus();if(H(Je,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const x=k==null?void 0:k.error;if(x&&x.status&&x.message){const N=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(v)>=0?v:b.UNKNOWN}(x.status);u(new $(N,x.message))}else u(new $(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(b.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{H(Je,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);H(Je,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=Hh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=L0(),l=O0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(Je,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.T_(p);let m=!1,k=!1;const x=new iR({Ho:O=>{k?H(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(H(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Je,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},Yo:()=>p.close()}),N=(O,I,v)=>{O.listen(I,S=>{try{v(S)}catch(V){setTimeout(()=>{throw V},0)}})};return N(p,Ns.EventType.OPEN,()=>{k||(H(Je,`RPC '${e}' stream ${i} transport opened.`),x.s_())}),N(p,Ns.EventType.CLOSE,()=>{k||(k=!0,H(Je,`RPC '${e}' stream ${i} transport closed`),x.__(),this.I_(p))}),N(p,Ns.EventType.ERROR,O=>{k||(k=!0,dr(Je,`RPC '${e}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),x.__(new $(b.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ns.EventType.MESSAGE,O=>{var I;if(!k){const v=O.data[0];oe(!!v,16349);const S=v,V=(S==null?void 0:S.error)||((I=S[0])===null||I===void 0?void 0:I.error);if(V){H(Je,`RPC '${e}' stream ${i} received error:`,V);const z=V.status;let j=function(_){const E=Re[_];if(E!==void 0)return yw(E)}(z),w=V.message;j===void 0&&(j=b.INTERNAL,w="Unknown error status: "+z+" with message "+V.message),k=!0,x.__(new $(j,w)),p.close()}else H(Je,`RPC '${e}' stream ${i} received:`,v),x.a_(v)}}),N(l,b0.STAT_EVENT,O=>{O.stat===Nh.PROXY?H(Je,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Nh.NOPROXY&&H(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.o_()},0),x}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t){return new u2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="PersistentStream";class Dw{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Nw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new $(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return H(ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(H(ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oR extends Dw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=d2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?nn(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Bh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Lh(u)?{documents:m2(s,u)}:{query:g2(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ww(s,o.resumeToken);const h=jh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Vl(s,o.snapshotVersion.toTimestamp());const h=jh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=v2(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Bh(this.serializer),n.removeTarget=e,this.k_(n)}}class aR extends Dw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=p2(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Bh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>f2(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{}class uR extends lR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Uh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(b.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Uh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(b.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class cR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Rn(n),this._a=!1):H("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="RemoteStore";class hR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(H(Qr,"Restarting streams for network reachability change."),await async function(u){const h=J(u);h.Ia.add(4),await Fo(h),h.Aa.set("Unknown"),h.Ia.delete(4),await gu(h)}(this))})}),this.Aa=new cR(r,i)}}async function gu(t){if(Zr(t))for(const e of t.da)await e(!0)}async function Fo(t){for(const e of t.da)await e(!1)}function Vw(t,e){const n=J(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Ef(n)?wf(n):ss(n).x_()&&_f(n,e))}function vf(t,e){const n=J(t),r=ss(n);n.Ta.delete(e),r.x_()&&bw(n,e),n.Ta.size===0&&(r.x_()?r.B_():Zr(n)&&n.Aa.set("Unknown"))}function _f(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ss(t).H_(e)}function bw(t,e){t.Ra.$e(e),ss(t).Y_(e)}function wf(t){t.Ra=new s2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ss(t).start(),t.Aa.aa()}function Ef(t){return Zr(t)&&!ss(t).M_()&&t.Ta.size>0}function Zr(t){return J(t).Ia.size===0}function Ow(t){t.Ra=void 0}async function dR(t){t.Aa.set("Online")}async function fR(t){t.Ta.forEach((e,n)=>{_f(t,e)})}async function pR(t,e){Ow(t),Ef(t)?(t.Aa.la(e),wf(t)):t.Aa.set("Unknown")}async function mR(t,e,n){if(t.Aa.set("Online"),e instanceof _w&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){H(Qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ol(t,r)}else if(e instanceof Ka?t.Ra.Ye(e):e instanceof vw?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Y.min()))try{const r=await xw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),bw(s,u);const p=new Gn(f.target,u,h,f.sequenceNumber);_f(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(Qr,"Failed to raise snapshot:",r),await Ol(t,r)}}async function Ol(t,e,n){if(!rs(e))throw e;t.Ia.add(1),await Fo(t),t.Aa.set("Offline"),n||(n=()=>xw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Qr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await gu(t)})}function Lw(t,e){return e().catch(n=>Ol(t,n,e))}async function yu(t){const e=J(t),n=yr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:rf;for(;gR(e);)try{const i=await Y2(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,yR(e,i)}catch(i){await Ol(e,i)}Mw(e)&&Fw(e)}function gR(t){return Zr(t)&&t.Pa.length<10}function yR(t,e){t.Pa.push(e);const n=yr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Mw(t){return Zr(t)&&!yr(t).M_()&&t.Pa.length>0}function Fw(t){yr(t).start()}async function vR(t){yr(t).na()}async function _R(t){const e=yr(t);for(const n of t.Pa)e.X_(n.mutations)}async function wR(t,e,n){const r=t.Pa.shift(),i=hf.from(r,e,n);await Lw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yu(t)}async function ER(t,e){e&&yr(t).Z_&&await async function(r,i){if(function(o){return r2(o)&&o!==b.ABORTED}(i.code)){const s=r.Pa.shift();yr(r).N_(),await Lw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await yu(r)}}(t,e),Mw(t)&&Fw(t)}async function iy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H(Qr,"RemoteStore received new credentials");const r=Zr(n);n.Ia.add(3),await Fo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await gu(n)}async function TR(t,e){const n=J(t);e?(n.Ia.delete(2),await gu(n)):e||(n.Ia.add(2),await Fo(n),n.Aa.set("Unknown"))}function ss(t){return t.Va||(t.Va=function(n,r,i){const s=J(n);return s.ia(),new oR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:dR.bind(null,t),e_:fR.bind(null,t),n_:pR.bind(null,t),J_:mR.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Ef(t)?wf(t):t.Aa.set("Unknown")):(await t.Va.stop(),Ow(t))})),t.Va}function yr(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.ia(),new aR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:vR.bind(null,t),n_:ER.bind(null,t),ea:_R.bind(null,t),ta:wR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await yu(t)):(await t.ma.stop(),t.Pa.length>0&&(H(Qr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Tf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),rs(t))return new $(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{static emptySet(e){return new bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.fa=new Ee(K.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Q(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ki{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ki(e,n,bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class SR{constructor(){this.queries=oy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=oy(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new $(b.ABORTED,"Firestore shutting down"))}}function oy(){return new Jr(t=>sw(t),cu)}async function jw(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new IR,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=If(o,`Initialization of query '${ui(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Sf(n)}async function Uw(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AR(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Sf(n)}function kR(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Sf(t){t.Da.forEach(e=>{e.next()})}var qh,ay;(ay=qh||(qh={})).Fa="default",ay.Cache="cache";class zw{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==qh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.key=e}}class $w{constructor(e){this.key=e}}class CR{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ne(),this.mutatedKeys=ne(),this.Xa=ow(e),this.eu=new bi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new sy,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),k=hu(this.query,p)?p:null,x=!!m&&this.mutatedKeys.has(m.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;m&&k?m.data.isEqual(k.data)?x!==N&&(r.track({type:3,doc:k}),O=!0):this.iu(m,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.Xa(k,u)>0||h&&this.Xa(k,h)<0)&&(l=!0)):!m&&k?(r.track({type:0,doc:k}),O=!0):m&&!k&&(r.track({type:1,doc:m}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,p)=>function(k,x){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{At:O})}};return N(k)-N(x)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new Ki(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new sy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ne(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new $w(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new Bw(r))}),n}uu(e){this.Ha=e.qs,this.Za=ne();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Ki.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Af="SyncEngine";class RR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PR{constructor(e){this.key=e,this.lu=!1}}class xR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Jr(l=>sw(l),cu),this.Tu=new Map,this.Iu=new Set,this.du=new Ee(K.comparator),this.Eu=new Map,this.Au=new pf,this.Ru={},this.Vu=new Map,this.mu=Gi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function NR(t,e,n=!0){const r=Qw(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await Hw(r,e,n,!0),i}async function DR(t,e){const n=Qw(t);await Hw(n,e,!0,!1)}async function Hw(t,e,n,r){const i=await J2(t.localStore,tn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await VR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Vw(t.remoteStore,i),l}async function VR(t,e,n,r,i){t.gu=(p,m,k)=>async function(N,O,I,v){let S=O.view.nu(I);S.Ds&&(S=await Zg(N.localStore,O.query,!1).then(({documents:w})=>O.view.nu(w,S)));const V=v&&v.targetChanges.get(O.targetId),z=v&&v.targetMismatches.get(O.targetId)!=null,j=O.view.applyChanges(S,N.isPrimaryClient,V,z);return uy(N,O.targetId,j._u),j.snapshot}(t,p,m,k);const s=await Zg(t.localStore,e,!0),o=new CR(e,s.qs),l=o.nu(s.documents),u=Mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);uy(t,n,h._u);const f=new RR(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function bR(t,e,n){const r=J(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!cu(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $h(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&vf(r.remoteStore,i.targetId),Wh(r,i.targetId)}).catch(ns)):(Wh(r,i.targetId),await $h(r.localStore,i.targetId,!0))}async function OR(t,e){const n=J(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vf(n.remoteStore,r.targetId))}async function LR(t,e,n){const r=$R(t);try{const i=await function(o,l){const u=J(o),h=me.now(),f=l.reduce((k,x)=>k.add(x.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let x=Pn(),N=ne();return u.Os.getEntries(k,f).next(O=>{x=O,x.forEach((I,v)=>{v.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,x)).next(O=>{p=O;const I=[];for(const v of l){const S=JC(v,p.get(v.key).overlayedDocument);S!=null&&I.push(new Sr(v.key,S,Y0(S.value.mapValue),Vt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,I,l)}).next(O=>{m=O;const I=O.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(k,O.batchId,I)})}).then(()=>({batchId:m.batchId,changes:lw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new Ee(Z)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,n),await jo(r,i.changes),await yu(r.remoteStore)}catch(i){const s=If(i,"Failed to persist write");n.reject(s)}}async function qw(t,e){const n=J(t);try{const r=await Q2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?oe(o.lu,14607):i.removedDocuments.size>0&&(oe(o.lu,42227),o.lu=!1))}),await jo(n,r,e)}catch(r){await ns(r)}}function ly(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.wa)m.va(l)&&(h=!0)}),h&&Sf(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MR(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Ee(K.comparator);o=o.insert(s,tt.newNoDocument(s,Y.min()));const l=ne().add(s),u=new pu(Y.min(),new Map,new Ee(Z),o,l);await qw(r,u),r.du=r.du.remove(s),r.Eu.delete(e),kf(r)}else await $h(r.localStore,e,!1).then(()=>Wh(r,e,n)).catch(ns)}async function FR(t,e){const n=J(t),r=e.batch.batchId;try{const i=await K2(n.localStore,e);Gw(n,r,null),Ww(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jo(n,i)}catch(i){await ns(i)}}async function jR(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Gw(r,e,n),Ww(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jo(r,i)}catch(i){await ns(i)}}function Ww(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function Gw(t,e,n){const r=J(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||Kw(t,r)})}function Kw(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(vf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),kf(t))}function uy(t,e,n){for(const r of n)r instanceof Bw?(t.Au.addReference(r.key,e),UR(t,r)):r instanceof $w?(H(Af,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Kw(t,r.key)):Q(19791,{yu:r})}function UR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(H(Af,"New document in limbo: "+n),t.Iu.add(r),kf(t))}function kf(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new K(he.fromString(e)),r=t.mu.next();t.Eu.set(r,new PR(n)),t.du=t.du.insert(n,r),Vw(t.remoteStore,new Gn(tn(uu(n.path)),r,"TargetPurposeLimboResolution",ou.ue))}}async function jo(t,e,n){const r=J(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=gf.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.Is,k=>f.persistence.referenceDelegate.addReference(p,m.targetId,k)).next(()=>L.forEach(m.ds,k=>f.persistence.referenceDelegate.removeReference(p,m.targetId,k)))))}catch(p){if(!rs(p))throw p;H(yf,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const k=f.Fs.get(m),x=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(x);f.Fs=f.Fs.insert(m,N)}}}(r.localStore,s))}async function zR(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H(Af,"User change. New user:",e.toKey());const r=await Pw(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new $(b.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(n,r.Bs)}}function BR(t,e){const n=J(t),r=n.Eu.get(e);if(r&&r.lu)return ne().add(r.key);{let i=ne();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function Qw(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MR.bind(null,e),e.hu.J_=AR.bind(null,e.eventManager),e.hu.pu=kR.bind(null,e.eventManager),e}function $R(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jR.bind(null,e),e}class Ll{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return G2(this.persistence,new H2,e.initialUser,this.serializer)}Du(e){return new Rw(mf.Vi,this.serializer)}bu(e){return new eR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ll.provider={build:()=>new Ll};class HR extends Ll{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){oe(this.persistence.referenceDelegate instanceof bl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new P2(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Rw(r=>bl.Vi(r,n),this.serializer)}}class Gh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ly(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zR.bind(null,this.syncEngine),await TR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SR}()}createDatastore(e){const n=mu(e.databaseInfo.databaseId),r=function(s){return new sR(s)}(e.databaseInfo);return function(s,o,l,u){return new uR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new hR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ly(this.syncEngine,n,0),function(){return ny.C()?new ny:new tR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new xR(i,s,o,l,u,h);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);H(Qr,"RemoteStore shutting down."),s.Ia.add(5),await Fo(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Gh.provider={build:()=>new Gh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="FirestoreClient";class qR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=If(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),H(vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Pw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{dr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{H("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{dr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function cy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WR(t);H(vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>iy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>iy(e.remoteStore,i)),t._onlineComponents=e}async function WR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(vr,"Using user provided OfflineComponentProvider");try{await Pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;dr("Error using user provided cache. Falling back to memory cache: "+n),await Pc(t,new Ll)}}else H(vr,"Using default OfflineComponentProvider"),await Pc(t,new HR(void 0));return t._offlineComponents}async function Yw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(vr,"Using user provided OnlineComponentProvider"),await cy(t,t._uninitializedComponentsProvider._online)):(H(vr,"Using default OnlineComponentProvider"),await cy(t,new Gh))),t._onlineComponents}function GR(t){return Yw(t).then(e=>e.syncEngine)}async function Kh(t){const e=await Yw(t),n=e.eventManager;return n.onListen=NR.bind(null,e.syncEngine),n.onUnlisten=bR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=DR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OR.bind(null,e.syncEngine),n}function KR(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Xw({next:m=>{f.Ou(),o.enqueueAndForget(()=>Uw(s,p));const k=m.docs.has(l);!k&&m.fromCache?h.reject(new $(b.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&m.fromCache&&u&&u.source==="server"?h.reject(new $(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new zw(uu(l.path),f,{includeMetadataChanges:!0,ka:!0});return jw(s,p)}(await Kh(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="firestore.googleapis.com",dy=!0;class fy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zw,this.ssl=dy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:dy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<C2)throw new $(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nC;switch(r.type){case"firstParty":return new oC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hy.get(n);r&&(H("ComponentProvider","Removing Datastore"),hy.delete(n),r.terminate())}(this),Promise.resolve()}}function QR(t,e,n,r={}){var i;t=Dt(t,vu);const s=Ji(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(q_(`https://${u}`),W_("Firestore",!0)),o.host!==Zw&&o.host!==u&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!qr(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ze.MOCK_USER;else{f=CI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new $(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(m)}t._authCredentials=new rC(new F0(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ei(this.firestore,e,this._query)}}class Se{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}toJSON(){return{type:Se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Oo(n,Se._jsonSchema))return new Se(e,r||null,new K(he.fromString(n.referencePath)))}}Se._jsonSchemaVersion="firestore/documentReference/1.0",Se._jsonSchema={type:De("string",Se._jsonSchemaVersion),referencePath:De("string")};class lr extends ei{constructor(e,n,r){super(e,n,uu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new K(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function py(t,e,...n){if(t=qe(t),U0("collection","path",e),t instanceof vu){const r=he.fromString(e,...n);return kg(r),new lr(t,null,r)}{if(!(t instanceof Se||t instanceof lr))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return kg(r),new lr(t.firestore,null,r)}}function bs(t,e,...n){if(t=qe(t),arguments.length===1&&(e=nf.newId()),U0("doc","path",e),t instanceof vu){const r=he.fromString(e,...n);return Ag(r),new Se(t,null,new K(r))}{if(!(t instanceof Se||t instanceof lr))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Ag(r),new Se(t.firestore,t instanceof lr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="AsyncQueue";class gy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Nw(this,"async_queue_retry"),this.oc=()=>{const r=Rc();r&&H(my,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Rc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new ar;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!rs(e))throw e;H(my,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Rn("INTERNAL UNHANDLED ERROR: ",yy(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Tf.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&Q(47125,{hc:yy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function yy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class _r extends vu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new gy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gy(e),this._firestoreClient=void 0,await e}}}function XR(t,e){const n=typeof t=="object"?t:X_(),r=typeof t=="string"?t:Pl,i=Wd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=AI("firestore");s&&QR(i,...s)}return i}function Cf(t){if(t._terminated)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||YR(t),t._firestoreClient}function YR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new TC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Jw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new qR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(We.fromBase64String(e))}catch(n){throw new $(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Oo(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:De("string",Pt._jsonSchemaVersion),bytes:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rn._jsonSchemaVersion}}static fromJSON(e){if(Oo(e,rn._jsonSchema))return new rn(e.latitude,e.longitude)}}rn._jsonSchemaVersion="firestore/geoPoint/1.0",rn._jsonSchema={type:De("string",rn._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Oo(e,sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new sn(e.vectorValues);throw new $(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sn._jsonSchemaVersion="firestore/vectorValue/1.0",sn._jsonSchema={type:De("string",sn._jsonSchemaVersion),vectorValues:De("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=/^__.*__$/;class ZR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Lo(e,this.data,n,this.fieldTransforms)}}class eE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ec:t})}}class Rf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Rf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ml(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(tE(this.Ec)&&JR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class eP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mu(e)}Dc(e,n,r,i=!1){return new Rf({Ec:e,methodName:n,bc:r,path:Be.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eu(t){const e=t._freezeSettings(),n=mu(t._databaseId);return new eP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nE(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);xf("Data must be an object, but it was:",o,r);const l=rE(r,o);let u,h;if(s.merge)u=new Tt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Qh(e,p,n);if(!o.contains(m))throw new $(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);sE(f,m)||f.push(m)}u=new Tt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new ZR(new ft(l),u,h)}class Tu extends wu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tu}}class Pf extends wu{_toFieldTransform(e){return new KC(e.path,new To)}isEqual(e){return e instanceof Pf}}function tP(t,e,n,r){const i=t.Dc(1,e,n);xf("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();Ir(r,(u,h)=>{const f=Nf(e,u,n);h=qe(h);const p=i.gc(f);if(h instanceof Tu)s.push(f);else{const m=Uo(h,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new Tt(s);return new eE(o,l,i.fieldTransforms)}function nP(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[Qh(e,r,n)],u=[i];if(s.length%2!=0)throw new $(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Qh(e,s[m])),u.push(s[m+1]);const h=[],f=ft.empty();for(let m=l.length-1;m>=0;--m)if(!sE(h,l[m])){const k=l[m];let x=u[m];x=qe(x);const N=o.gc(k);if(x instanceof Tu)h.push(k);else{const O=Uo(x,N);O!=null&&(h.push(k),f.set(k,O))}}const p=new Tt(h);return new eE(f,p,o.fieldTransforms)}function rP(t,e,n,r=!1){return Uo(n,t.Dc(r?4:3,e))}function Uo(t,e){if(iE(t=qe(t)))return xf("Unsupported field value:",e,t),rE(t,e);if(t instanceof wu)return function(r,i){if(!tE(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Uo(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=me.fromDate(r);return{timestampValue:Vl(i.serializer,s)}}if(r instanceof me){const s=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vl(i.serializer,s)}}if(r instanceof rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:ww(i.serializer,r._byteString)};if(r instanceof Se){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ff(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof sn)return function(o,l){return{mapValue:{fields:{[Q0]:{stringValue:X0},[xl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return uf(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${su(r)}`)}(t,e)}function rE(t,e){const n={};return $0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(t,(r,i)=>{const s=Uo(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function iE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof rn||t instanceof Pt||t instanceof Se||t instanceof wu||t instanceof sn)}function xf(t,e,n){if(!iE(n)||!z0(n)){const r=su(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Qh(t,e,n){if((e=qe(e))instanceof _u)return e._internalPath;if(typeof e=="string")return Nf(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const iP=new RegExp("[~\\*/\\[\\]]");function Nf(t,e,n){if(e.search(iP)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _u(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(b.INVALID_ARGUMENT,l+t+u)}function sE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Df("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sP extends oE{data(){return super.data()}}function Df(t,e){return typeof e=="string"?Nf(t,e):e instanceof _u?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vf{}class aE extends Vf{}function aP(t,e,...n){let r=[];e instanceof Vf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Of).length,l=s.filter(u=>u instanceof bf).length;if(o>1||o>0&&l>0)throw new $(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bf extends aE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bf(e,n,r)}_apply(e){const n=this._parse(e);return lE(e._query,n),new ei(e.firestore,e.converter,Mh(e._query,n))}_parse(e){const n=Eu(e.firestore);return function(s,o,l,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){wy(p,f);const x=[];for(const N of p)x.push(_y(u,s,N));m={arrayValue:{values:x}}}else m=_y(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||wy(p,f),m=rP(l,o,p,f==="in"||f==="not-in");return Ne.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Of extends Vf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Of(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)lE(o,u),o=Mh(o,u)}(e._query,n),new ei(e.firestore,e.converter,Mh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lf extends aE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Eo(s,o)}(e._query,this._field,this._direction);return new ei(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new is(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function lP(t,e="asc"){const n=e,r=Df("orderBy",t);return Lf._create(r,n)}function _y(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new $(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iw(e)&&n.indexOf("/")!==-1)throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!K.isDocumentKey(r))throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bg(t,new K(r))}if(n instanceof Se)return bg(t,n._key);throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${su(n)}.`)}function wy(t,e){if(!Array.isArray(t)||t.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class uP{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ir(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[xl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ke(o.doubleValue));return new sn(s)}convertGeoPoint(e){return new rn(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=pr(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);oe(kw(r),9688,{name:e});const i=new _o(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jr extends oE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Df("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=jr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",jr._jsonSchema={type:De("string",jr._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class Qa extends jr{data(e={}){return super.data(e)}}class Oi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qa(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Os(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Os(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:cP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){t=Dt(t,Se);const e=Dt(t.firestore,_r);return KR(Cf(e),t._key).then(n=>hE(e,t,n))}Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:De("string",Oi._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};class cE extends uP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,n)}}function Ey(t,e,n){t=Dt(t,Se);const r=Dt(t.firestore,_r),i=uE(t.converter,e);return Iu(r,[nE(Eu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Vt.none())])}function dP(t,e,n,...r){t=Dt(t,Se);const i=Dt(t.firestore,_r),s=Eu(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof _u?nP(s,"updateDoc",t._key,e,n,r):tP(s,"updateDoc",t._key,e),Iu(i,[o.toMutation(t._key,Vt.exists(!0))])}function fP(t){return Iu(Dt(t.firestore,_r),[new cf(t._key,Vt.none())])}function pP(t,e){const n=Dt(t.firestore,_r),r=bs(t),i=uE(t.converter,e);return Iu(n,[nE(Eu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function mP(t,...e){var n,r,i;t=qe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||vy(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(vy(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof Se)h=Dt(t.firestore,_r),f=uu(t._key.path),u={next:p=>{e[o]&&e[o](hE(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Dt(t,ei);h=Dt(p.firestore,_r),f=p._query;const m=new cE(h);u={next:k=>{e[o]&&e[o](new Oi(h,m,p,k))},error:e[o+1],complete:e[o+2]},oP(t._query)}return function(m,k,x,N){const O=new Xw(N),I=new zw(k,O,x);return m.asyncQueue.enqueueAndForget(async()=>jw(await Kh(m),I)),()=>{O.Ou(),m.asyncQueue.enqueueAndForget(async()=>Uw(await Kh(m),I))}}(Cf(h),f,l,u)}function Iu(t,e){return function(r,i){const s=new ar;return r.asyncQueue.enqueueAndForget(async()=>LR(await GR(r),i,s)),s.promise}(Cf(t),e)}function hE(t,e,n){const r=n.docs.get(e._key),i=new cE(t);return new jr(t,i,e._key,r,new Os(n.hasPendingWrites,n.fromCache),e.converter)}function gP(){return new Pf("serverTimestamp")}(function(e,n=!0){(function(i){ts=i})(Zi),$i(new Wr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new _r(new iC(r.getProvider("auth-internal")),new aC(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ir(wg,Eg,e),ir(wg,Eg,"esm2017")})();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=Pe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>Pe.createElement("svg",{ref:u,...vP,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:dE("lucide",i),...l},[...o.map(([h,f])=>Pe.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=(t,e)=>{const n=Pe.forwardRef(({className:r,...i},s)=>Pe.createElement(_P,{ref:s,iconNode:e,className:dE(`lucide-${yP(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=vt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=vt("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=vt("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=vt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=vt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=vt("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=vt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=vt("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=vt("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=vt("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=vt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=vt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=vt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=vt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),NP={apiKey:"AIzaSyBHFsTRQT1eopfz8NG5ux__0QKgKCnoXOE",authDomain:"support-94add.firebaseapp.com",projectId:"support-94add",storageBucket:"support-94add.firebasestorage.app",messagingSenderId:"442252148032",appId:"1:442252148032:web:722f176b1c1b52a7368ea5",measurementId:"G-GP4C34CQF9"},fE=Q_(NP),Ay=eC(fE),oi=XR(fE),ai="ecohut-web-v1",xc={productName:"১০ আইটেম স্পেশাল চকলেট কম্বো! 🍫",description:"আপনার সোনামণি কি চকলেটের জন্য বায়না ধরে? 😢 বাজারের ক্ষতিকর চকলেট না দিয়ে দিন প্রিমিয়াম কোয়ালিটি চকলেট বক্স!",price:1250,regularPrice:1490,phone:"01715247588",deliveryInside:70,deliveryOutside:130,images:["https://images.unsplash.com/photo-1623910398642-83b6f8497678?q=80&w=1000&auto=format&fit=crop"],features:[{title:"১০০% অথেনটিক",text:"সৌদি, দুবাই ও তুরস্ক থেকে ইম্পোর্টেড।"},{title:"সেরা স্বাদ",text:"বাচ্চাদের পছন্দের ১০টি ভিন্ন ফ্লেভার।"},{title:"পারফেক্ট গিফট",text:"জন্মদিন বা যেকোনো উপলক্ষে সেরা উপহার।"}]},DP=t=>new Promise(e=>{const n=new FileReader;n.readAsDataURL(t),n.onload=r=>{const i=new Image;i.src=r.target.result,i.onload=()=>{const s=document.createElement("canvas"),o=600,l=o/i.width;s.width=o,s.height=i.height*l,s.getContext("2d").drawImage(i,0,0,s.width,s.height),e(s.toDataURL("image/jpeg",.7))}}});function VP(){const[t,e]=Pe.useState(null),[n,r]=Pe.useState(xc),[i,s]=Pe.useState(!1),[o,l]=Pe.useState(!1),[u,h]=Pe.useState(!1),[f,p]=Pe.useState(!1),[m,k]=Pe.useState("orders"),[x,N]=Pe.useState([]),[O,I]=Pe.useState(0),[v,S]=Pe.useState({name:"",phone:"",address:"",quantity:1,deliveryArea:"inside_dhaka"});Pe.useEffect(()=>{(async()=>{try{await MA(Ay);const W=bs(oi,"artifacts",ai,"public","siteConfig"),G=await hP(W);G.exists()?r({...xc,...G.data()}):await Ey(W,xc)}catch(W){console.error("Init Error:",W)}})(),localStorage.getItem("ecohut_admin")==="true"&&h(!0),$A(Ay,e)},[]),Pe.useEffect(()=>{if(u){const B=aP(py(oi,"artifacts",ai,"public","data","orders"),lP("orderDate","desc")),M=mP(B,W=>{const G=W.docs.map(ce=>({id:ce.id,...ce.data()}));N(G)});return()=>M()}},[u]);const V=()=>{prompt("অ্যাডমিন পাসওয়ার্ড দিন:")==="admin123"?(localStorage.setItem("ecohut_admin","true"),h(!0),p(!0),alert("স্বাগতম অ্যাডমিন!")):alert("ভুল পাসওয়ার্ড!")},z=async()=>{if(u){s(!0);try{await Ey(bs(oi,"artifacts",ai,"public","siteConfig"),n),alert("সেভ হয়েছে!")}catch(B){console.error(B),alert("সেভ করতে সমস্যা হয়েছে")}s(!1)}},j=async(B,M)=>{if(u)try{await dP(bs(oi,"artifacts",ai,"public","data","orders",B),{status:M})}catch(W){console.error("Status update failed:",W),alert("স্ট্যাটাস আপডেট হয়নি!")}},w=async B=>{if(u&&window.confirm("আপনি কি নিশ্চিত এই অর্ডারটি ডিলিট করতে চান? এটি আর ফিরিয়ে আনা যাবে না।"))try{await fP(bs(oi,"artifacts",ai,"public","data","orders",B))}catch(M){console.error("Delete failed:",M),alert("ডিলিট হয়নি!")}},y=async B=>{const M=B.target.files[0];if(M){const W=await DP(M);r(G=>({...G,images:[...G.images,W]}))}},_=B=>{r(M=>({...M,images:M.images.filter((W,G)=>G!==B)})),O>=B&&O>0&&I(O-1)},E=(B,M,W)=>{const G=[...n.features];G[B]={...G[B],[M]:W},r({...n,features:G})},C=()=>{const B=v.deliveryArea==="inside_dhaka"?n.deliveryInside:n.deliveryOutside;return n.price*v.quantity+B},R=B=>{const{name:M,value:W}=B.target;S(G=>({...G,[M]:W}))},T=B=>{S(M=>({...M,quantity:Math.max(1,M.quantity+B)}))},ct=async B=>{if(B.preventDefault(),!t)return alert("অপেক্ষা করুন...");s(!0);try{await pP(py(oi,"artifacts",ai,"public","data","orders"),{...v,totalPrice:C(),productName:n.productName,orderDate:gP(),status:"new",userId:t.uid}),l(!0),S({name:"",phone:"",address:"",quantity:1,deliveryArea:"inside_dhaka"})}catch{alert("অর্ডার প্লেস করতে সমস্যা হয়েছে।")}finally{s(!1)}},an=B=>{switch(B){case"new":return A.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold",children:"নতুন"});case"confirmed":return A.jsx("span",{className:"bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold",children:"কনফার্ম"});case"shipped":return A.jsx("span",{className:"bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-bold",children:"পাঠানো হয়েছে"});case"delivered":return A.jsx("span",{className:"bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold",children:"ডেলিভারি সম্পন্ন"});case"cancelled":return A.jsx("span",{className:"bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-bold",children:"বাতিল"});default:return A.jsx("span",{className:"bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-bold",children:B})}},Ar=`
    @keyframes chase { 
      0% { left: 110%; } 
      100% { left: -20%; } 
    }
    .animate-chase { position: fixed; bottom: 20px; z-index: 40; animation: chase 15s linear infinite; display: flex; align-items: center; pointer-events: none; }
    .kid-pattern { background-color: #fffbeb; background-image: radial-gradient(#fbbf24 2px, transparent 2px); background-size: 30px 30px; }
    .wing-flap { animation: flap 0.2s infinite alternate; }
    @keyframes flap { from { transform: rotate(-10deg); } to { transform: rotate(10deg); } }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `;return o?A.jsx("div",{className:"min-h-screen kid-pattern flex items-center justify-center p-4",children:A.jsxs("div",{className:"bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center border-4 border-yellow-400",children:[A.jsx(kP,{className:"w-16 h-16 text-green-600 mx-auto mb-4"}),A.jsx("h2",{className:"text-3xl font-extrabold text-purple-600 mb-4",children:"অর্ডার কনফার্ম! 🎉"}),A.jsx("p",{className:"text-gray-600 mb-6",children:"ধন্যবাদ! আমরা শীঘ্রই কল করব।"}),A.jsx("button",{onClick:()=>l(!1),className:"bg-purple-600 text-white px-8 py-3 rounded-full font-bold",children:"আরো অর্ডার করুন"})]})}):A.jsxs("div",{className:"font-sans text-gray-800 kid-pattern min-h-screen pb-24 overflow-x-hidden relative",children:[A.jsx("style",{children:Ar}),A.jsx("button",{onClick:V,className:"fixed bottom-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-full opacity-60 hover:opacity-100 transition shadow-lg hover:scale-110",title:"Admin Login",children:A.jsx(TP,{size:20})}),f&&A.jsx("div",{className:"fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-2 sm:p-4",children:A.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-5xl h-[90vh] shadow-2xl relative flex flex-col overflow-hidden",children:[A.jsxs("div",{className:"bg-purple-100 p-4 flex justify-between items-center border-b",children:[A.jsxs("h2",{className:"text-xl md:text-2xl font-bold flex items-center gap-2 text-purple-800",children:[A.jsx(CP,{size:24})," অ্যাডমিন প্যানেল"]}),A.jsx("button",{onClick:()=>p(!1),className:"text-gray-500 hover:text-red-500 bg-white p-2 rounded-full shadow hover:scale-110 transition",children:A.jsx(xP,{size:20})})]}),A.jsxs("div",{className:"flex bg-white border-b",children:[A.jsxs("button",{onClick:()=>k("orders"),className:`flex-1 py-3 font-bold text-center flex items-center justify-center gap-2 transition ${m==="orders"?"text-purple-700 border-b-4 border-purple-600 bg-purple-50":"text-gray-500 hover:bg-gray-50"}`,children:[A.jsx(Ty,{size:18})," অর্ডার লিস্ট (",x.length,")"]}),A.jsxs("button",{onClick:()=>k("config"),className:`flex-1 py-3 font-bold text-center flex items-center justify-center gap-2 transition ${m==="config"?"text-purple-700 border-b-4 border-purple-600 bg-purple-50":"text-gray-500 hover:bg-gray-50"}`,children:[A.jsx(SP,{size:18})," সেটিংস"]})]}),A.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50",children:[m==="orders"&&A.jsx("div",{className:"space-y-4",children:x.length===0?A.jsxs("div",{className:"text-center py-20 text-gray-500",children:[A.jsx(Ty,{size:48,className:"mx-auto mb-4 opacity-20"}),A.jsx("p",{children:"কোন অর্ডার পাওয়া যায়নি"})]}):x.map(B=>A.jsx("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition",children:A.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-4",children:[A.jsxs("div",{className:"flex-1",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx("h3",{className:"font-bold text-lg text-gray-800",children:B.name}),an(B.status)]}),A.jsxs("p",{className:"text-sm text-gray-600 flex items-center gap-1",children:[A.jsx(Iy,{size:12})," ",B.phone]}),A.jsx("p",{className:"text-sm text-gray-600 mt-1 bg-gray-50 p-2 rounded border border-dashed",children:B.address}),A.jsx("p",{className:"text-xs text-gray-400 mt-2",children:B.orderDate?new Date(B.orderDate.seconds*1e3).toLocaleString("bn-BD"):"Time unknown"})]}),A.jsxs("div",{className:"md:text-right flex flex-col justify-between",children:[A.jsxs("div",{children:[A.jsxs("p",{className:"text-sm font-semibold text-gray-500",children:["পরিমাণ: ",B.quantity," টি"]}),A.jsxs("p",{className:"text-xl font-black text-purple-700",children:["৳",B.totalPrice]}),A.jsx("p",{className:"text-xs text-gray-400",children:B.deliveryArea==="inside_dhaka"?"ঢাকার ভিতরে":"ঢাকার বাইরে"})]}),A.jsxs("div",{className:"flex flex-wrap gap-2 mt-3 md:justify-end",children:[A.jsxs("select",{value:B.status,onChange:M=>j(B.id,M.target.value),className:"border rounded px-2 py-1 text-sm bg-white cursor-pointer",children:[A.jsx("option",{value:"new",children:"নতুন"}),A.jsx("option",{value:"confirmed",children:"কনফার্ম"}),A.jsx("option",{value:"shipped",children:"পাঠানো হয়েছে"}),A.jsx("option",{value:"delivered",children:"ডেলিভারি সম্পন্ন"}),A.jsx("option",{value:"cancelled",children:"বাতিল"})]}),A.jsx("button",{onClick:()=>w(B.id),className:"bg-red-50 text-red-500 p-1.5 rounded hover:bg-red-500 hover:text-white transition",title:"Delete Order",children:A.jsx(Sy,{size:16})})]})]})]})},B.id))}),m==="config"&&A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold mb-1",children:"প্রোডাক্টের নাম"}),A.jsx("input",{type:"text",value:n.productName,onChange:B=>r({...n,productName:B.target.value}),className:"w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold mb-1",children:"ফোন নাম্বার"}),A.jsx("input",{type:"text",value:n.phone,onChange:B=>r({...n,phone:B.target.value}),className:"w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold mb-1",children:"বর্তমান দাম (৳)"}),A.jsx("input",{type:"number",value:n.price,onChange:B=>r({...n,price:parseInt(B.target.value)}),className:"w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold mb-1",children:"রেগুলার দাম (৳)"}),A.jsx("input",{type:"number",value:n.regularPrice,onChange:B=>r({...n,regularPrice:parseInt(B.target.value)}),className:"w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none"})]})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold mb-1",children:"বর্ণনা"}),A.jsx("textarea",{rows:"3",value:n.description,onChange:B=>r({...n,description:B.target.value}),className:"w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none"})]}),A.jsxs("div",{className:"border-t pt-4",children:[A.jsx("label",{className:"block text-sm font-bold mb-3 text-purple-700",children:"বৈশিষ্ট্যসমূহ (Features)"}),A.jsx("div",{className:"grid gap-4",children:n.features.map((B,M)=>A.jsxs("div",{className:"flex flex-col md:flex-row gap-2 bg-white p-2 rounded border shadow-sm",children:[A.jsx("input",{className:"border p-2 rounded font-bold md:w-1/3",value:B.title,onChange:W=>E(M,"title",W.target.value),placeholder:"Title"}),A.jsx("input",{className:"border p-2 rounded w-full",value:B.text,onChange:W=>E(M,"text",W.target.value),placeholder:"Description"})]},M))})]}),A.jsxs("div",{className:"border-t pt-4",children:[A.jsx("label",{className:"block text-sm font-bold mb-3",children:"ছবি ম্যানেজমেন্ট (ড্র্যাগ বা ক্লিক করে ছবি দিন)"}),A.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.images.map((B,M)=>A.jsxs("div",{className:"relative w-24 h-24 border rounded overflow-hidden group shadow-sm",children:[A.jsx("img",{src:B,alt:"Product",className:"w-full h-full object-cover"}),A.jsx("button",{onClick:()=>_(M),className:"absolute top-0 right-0 bg-red-600/80 text-white p-1 opacity-100 hover:bg-red-600 transition",children:A.jsx(Sy,{size:14})})]},M)),A.jsxs("label",{className:"w-24 h-24 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:border-purple-500 transition",children:[A.jsx(PP,{className:"text-gray-400"}),A.jsx("span",{className:"text-xs text-gray-500 mt-1",children:"Add Photo"}),A.jsx("input",{type:"file",accept:"image/*",onChange:y,className:"hidden"})]})]})]}),A.jsx("div",{className:"pt-4 border-t flex justify-end",children:A.jsx("button",{onClick:z,className:"bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 flex items-center gap-2 shadow-lg hover:shadow-xl transform transition hover:-translate-y-1",children:i?"সেভ হচ্ছে...":A.jsxs(A.Fragment,{children:[A.jsx(IP,{size:18})," সেটিংস সেভ করুন"]})})})]})]})]})}),A.jsxs("div",{className:"animate-chase",children:[A.jsxs("div",{className:"relative transform scale-150 mr-12",children:[A.jsx("span",{className:"text-4xl absolute -left-4 -top-2 wing-flap",children:"🕊️"}),A.jsx("span",{className:"text-5xl drop-shadow-lg",children:"🍫"}),A.jsx("span",{className:"text-4xl absolute -right-4 -top-2 wing-flap",style:{animationDelay:"0.1s"},children:"🕊️"})]}),A.jsx("div",{className:"transform scale-150 bouncing-child",children:A.jsx("span",{className:"text-6xl inline-block",style:{transform:"scaleX(1)"},children:"🏃‍♂️"})})]}),A.jsxs("div",{className:"bg-purple-600 text-white py-2 px-4 text-sm font-bold text-center md:flex md:justify-between md:items-center shadow-md",children:[A.jsxs("p",{className:"flex items-center justify-center gap-2",children:[A.jsx(EP,{size:16})," বাচ্চাদের জন্য সেরা গিফট বক্স!"]}),A.jsx("div",{className:"flex justify-center gap-4 mt-1 md:mt-0",children:A.jsxs("a",{href:`tel:${n.phone}`,className:"flex items-center gap-1 hover:text-yellow-300",children:[A.jsx(Iy,{size:14})," ",n.phone]})})]}),A.jsx("nav",{className:"bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b-4 border-yellow-400 shadow-sm",children:A.jsxs("div",{className:"container mx-auto px-4 py-3 flex justify-between items-center",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"text-4xl",children:"🍬"}),A.jsx("h1",{className:"text-3xl font-black text-purple-700 tracking-tight",style:{fontFamily:"cursive"},children:"EcoHut"})]}),A.jsxs("a",{href:"#order-form",className:"bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-black text-sm hover:bg-yellow-500 transition shadow-lg flex items-center gap-2 transform hover:scale-105 border-2 border-yellow-500",children:[A.jsx(AP,{size:20})," অর্ডার করুন"]})]})}),A.jsx("div",{className:"py-8 md:py-12",children:A.jsx("div",{className:"container mx-auto px-4",children:A.jsxs("div",{className:"bg-white rounded-3xl p-6 md:p-10 shadow-xl border-4 border-purple-100 flex flex-col md:flex-row gap-8 items-start",children:[A.jsxs("div",{className:"w-full md:w-1/2 relative",children:[A.jsxs("div",{className:"relative aspect-square bg-yellow-50 rounded-2xl overflow-hidden shadow-2xl border-4 border-white",children:[A.jsx("img",{src:n.images[O]||n.images[0],alt:"Product Main",className:"w-full h-full object-cover transition-all duration-300"}),A.jsxs("div",{className:"absolute top-4 right-4 bg-red-500 text-white px-5 py-2 rounded-full font-black shadow-lg text-lg animate-pulse border-2 border-white",children:[Math.round((n.regularPrice-n.price)/n.regularPrice*100),"% ছাড়!"]})]}),A.jsx("div",{className:"flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide",children:n.images.map((B,M)=>A.jsx("div",{onClick:()=>I(M),className:`w-20 h-20 flex-shrink-0 rounded-lg border-2 overflow-hidden cursor-pointer transition transform hover:scale-105 ${O===M?"border-purple-600 ring-2 ring-purple-300":"border-purple-200"}`,children:A.jsx("img",{src:B,alt:"thumb",className:"w-full h-full object-cover"})},M))})]}),A.jsxs("div",{className:"w-full md:w-1/2 space-y-6 text-center md:text-left",children:[A.jsxs("div",{children:[A.jsx("h1",{className:"text-3xl md:text-5xl font-black text-gray-800 leading-tight mb-2 drop-shadow-sm",children:n.productName}),A.jsxs("div",{className:"flex justify-center md:justify-start items-center gap-2 mb-6",children:[A.jsx("div",{className:"flex text-yellow-400 filter drop-shadow",children:[...Array(5)].map((B,M)=>A.jsx(RP,{fill:"currentColor",size:24},M))}),A.jsx("span",{className:"text-gray-500 font-bold",children:"(২০০+ হ্যাপি কিডস)"})]}),A.jsx("div",{className:"inline-block bg-yellow-100 px-6 py-2 rounded-2xl border-2 border-yellow-400 mb-4 transform -rotate-2",children:A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsxs("span",{className:"text-4xl font-black text-purple-700",children:["৳",n.price]}),A.jsxs("span",{className:"text-xl text-gray-500 line-through decoration-red-500 decoration-2",children:["৳",n.regularPrice]})]})})]}),A.jsx("div",{className:"text-gray-700 space-y-4 text-lg bg-white/50 p-4 rounded-xl border border-purple-100",children:A.jsx("p",{className:"whitespace-pre-line",children:n.description})}),A.jsxs("div",{className:"pt-4",children:[A.jsx("a",{href:"#order-form",className:"block w-full text-center bg-gradient-to-r from-purple-600 to-purple-500 text-white py-4 rounded-2xl font-black text-2xl shadow-xl hover:from-purple-700 hover:to-purple-600 transition transform hover:-translate-y-1 hover:scale-105",children:"অর্ডার করতে ক্লিক করুন 🛒"}),A.jsxs("p",{className:"text-center text-gray-500 font-bold mt-3",children:["কল করুন: ",A.jsx("span",{className:"text-purple-700 text-lg",children:n.phone})]})]})]})]})})}),A.jsx("div",{className:"py-8 container mx-auto px-4",children:A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:n.features.map((B,M)=>A.jsxs("div",{className:`bg-white p-6 rounded-2xl shadow-lg border-b-4 ${M===0?"border-green-500":M===1?"border-yellow-500":"border-blue-500"} text-center transform hover:-translate-y-1 transition`,children:[A.jsx("h3",{className:"font-bold text-xl mb-2",children:B.title}),A.jsx("p",{className:"text-gray-600",children:B.text})]},M))})}),A.jsx("div",{id:"order-form",className:"py-12",children:A.jsx("div",{className:"container mx-auto px-4",children:A.jsxs("div",{className:"max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white ring-4 ring-purple-100",children:[A.jsxs("div",{className:"bg-purple-600 py-6 text-center relative overflow-hidden",children:[A.jsx("div",{className:"absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"}),A.jsx("h2",{className:"text-2xl md:text-3xl font-black text-white relative z-10",children:"অর্ডার কনফার্ম করুন 👇"})]}),A.jsxs("form",{onSubmit:ct,className:"p-6 md:p-8 space-y-5",children:[A.jsxs("div",{className:"flex justify-between items-center bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200 border-dashed",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"text-3xl",children:"🎁"}),A.jsxs("div",{children:[A.jsx("p",{className:"font-bold text-gray-800",children:"Combo Pack"}),A.jsx("p",{className:"text-xs text-gray-500 font-bold text-purple-600",children:"Premium Item"})]})]}),A.jsxs("span",{className:"font-black text-purple-700 text-xl",children:["৳",n.price]})]}),A.jsxs("div",{className:"space-y-4",children:[A.jsx("input",{required:!0,type:"text",name:"name",value:v.name,onChange:R,placeholder:"আপনার নাম...",className:"w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none font-medium"}),A.jsx("input",{required:!0,type:"tel",name:"phone",value:v.phone,onChange:R,placeholder:"মোবাইল নাম্বার...",className:"w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none font-medium"}),A.jsx("textarea",{required:!0,name:"address",value:v.address,onChange:R,rows:"2",placeholder:"ঠিকানা (বাসা, রোড, এলাকা)...",className:"w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none font-medium"}),A.jsxs("div",{className:"bg-gray-50 p-4 rounded-xl text-center",children:[A.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"কয়টি বক্স নিবেন?"}),A.jsxs("div",{className:"flex items-center justify-center gap-6",children:[A.jsx("button",{type:"button",onClick:()=>T(-1),className:"w-10 h-10 rounded-full bg-white shadow border font-bold text-red-500",children:"-"}),A.jsx("span",{className:"text-2xl font-black w-8",children:v.quantity}),A.jsx("button",{type:"button",onClick:()=>T(1),className:"w-10 h-10 rounded-full bg-white shadow border font-bold text-green-500",children:"+"})]})]}),A.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[A.jsxs("label",{className:`cursor-pointer border-2 rounded-xl p-3 flex flex-col items-center justify-center gap-1 transition ${v.deliveryArea==="inside_dhaka"?"border-purple-500 bg-purple-50 text-purple-700":"border-gray-200"}`,children:[A.jsx("input",{type:"radio",name:"deliveryArea",value:"inside_dhaka",checked:v.deliveryArea==="inside_dhaka",onChange:R,className:"hidden"}),A.jsx("span",{className:"font-bold",children:"ঢাকার ভিতরে"}),A.jsxs("span",{className:"text-sm bg-white px-2 rounded-full border",children:["৳",n.deliveryInside]})]}),A.jsxs("label",{className:`cursor-pointer border-2 rounded-xl p-3 flex flex-col items-center justify-center gap-1 transition ${v.deliveryArea==="outside_dhaka"?"border-purple-500 bg-purple-50 text-purple-700":"border-gray-200"}`,children:[A.jsx("input",{type:"radio",name:"deliveryArea",value:"outside_dhaka",checked:v.deliveryArea==="outside_dhaka",onChange:R,className:"hidden"}),A.jsx("span",{className:"font-bold",children:"ঢাকার বাইরে"}),A.jsxs("span",{className:"text-sm bg-white px-2 rounded-full border",children:["৳",n.deliveryOutside]})]})]})]}),A.jsxs("div",{className:"bg-gray-50 p-5 rounded-xl border border-gray-200 mt-2",children:[A.jsxs("div",{className:"flex justify-between items-center mb-1 text-sm",children:[A.jsx("span",{className:"text-gray-600",children:"সাবটোটাল"}),A.jsxs("span",{className:"font-bold",children:["৳",n.price*v.quantity]})]}),A.jsxs("div",{className:"flex justify-between items-center mb-3 text-sm",children:[A.jsx("span",{className:"text-gray-600",children:"ডেলিভারি চার্জ"}),A.jsxs("span",{className:"font-bold",children:["৳",v.deliveryArea==="inside_dhaka"?n.deliveryInside:n.deliveryOutside]})]}),A.jsxs("div",{className:"flex justify-between items-center text-2xl font-black text-gray-800 border-t-2 border-dashed border-gray-300 pt-3",children:[A.jsx("span",{children:"সর্বমোট"}),A.jsxs("span",{className:"text-purple-600",children:["৳",C()]})]})]}),A.jsx("button",{type:"submit",disabled:i,className:`w-full bg-purple-600 text-white font-black text-xl py-4 rounded-xl shadow-xl hover:bg-purple-700 transition flex justify-center items-center gap-2 ${i?"opacity-70":""}`,children:i?"অর্ডার হচ্ছে...":A.jsxs("span",{children:["অর্ডার কনফার্ম করুন ",A.jsx(wP,{size:20,className:"inline"})]})})]})]})})}),A.jsxs("footer",{className:"bg-purple-900 text-purple-200 py-10 border-t-4 border-yellow-400 text-center",children:[A.jsx("h3",{className:"text-3xl font-bold text-white mb-2",style:{fontFamily:"cursive"},children:"EcoHut"}),A.jsx("p",{className:"text-sm opacity-50",children:"© 2024 EcoHut. Made with 💜 for Kids."})]})]})}F_(document.getElementById("root")).render(A.jsx(Pe.StrictMode,{children:A.jsx(VP,{})}));
