(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var dg={exports:{}},vl={},fg={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),rw=Symbol.for("react.portal"),iw=Symbol.for("react.fragment"),sw=Symbol.for("react.strict_mode"),ow=Symbol.for("react.profiler"),aw=Symbol.for("react.provider"),lw=Symbol.for("react.context"),uw=Symbol.for("react.forward_ref"),cw=Symbol.for("react.suspense"),hw=Symbol.for("react.memo"),dw=Symbol.for("react.lazy"),jf=Symbol.iterator;function fw(t){return t===null||typeof t!="object"?null:(t=jf&&t[jf]||t["@@iterator"],typeof t=="function"?t:null)}var pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mg=Object.assign,gg={};function Ni(t,e,n){this.props=t,this.context=e,this.refs=gg,this.updater=n||pg}Ni.prototype.isReactComponent={};Ni.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ni.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yg(){}yg.prototype=Ni.prototype;function uh(t,e,n){this.props=t,this.context=e,this.refs=gg,this.updater=n||pg}var ch=uh.prototype=new yg;ch.constructor=uh;mg(ch,Ni.prototype);ch.isPureReactComponent=!0;var zf=Array.isArray,vg=Object.prototype.hasOwnProperty,hh={current:null},_g={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)vg.call(e,r)&&!_g.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:to,type:t,key:s,ref:a,props:i,_owner:hh.current}}function pw(t,e){return{$$typeof:to,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===to}function mw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bf=/\/+/g;function pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mw(""+t.key):e.toString(36)}function la(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case to:case rw:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+pu(a,0):r,zf(i)?(n="",t!=null&&(n=t.replace(Bf,"$&/")+"/"),la(i,e,n,"",function(d){return d})):i!=null&&(dh(i)&&(i=pw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Bf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",zf(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+pu(s,l);a+=la(s,e,n,c,i)}else if(c=fw(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+pu(s,l++),a+=la(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Fo(t,e,n){if(t==null)return t;var r=[],i=0;return la(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nt={current:null},ua={transition:null},yw={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:ua,ReactCurrentOwner:hh};function Eg(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Fo,forEach:function(t,e,n){Fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fo(t,function(){e++}),e},toArray:function(t){return Fo(t,function(e){return e})||[]},only:function(t){if(!dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Ni;X.Fragment=iw;X.Profiler=ow;X.PureComponent=uh;X.StrictMode=sw;X.Suspense=cw;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yw;X.act=Eg;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mg({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=hh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)vg.call(e,c)&&!_g.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:to,type:t.type,key:i,ref:s,props:r,_owner:a}};X.createContext=function(t){return t={$$typeof:lw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aw,_context:t},t.Consumer=t};X.createElement=wg;X.createFactory=function(t){var e=wg.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:uw,render:t}};X.isValidElement=dh;X.lazy=function(t){return{$$typeof:dw,_payload:{_status:-1,_result:t},_init:gw}};X.memo=function(t,e){return{$$typeof:hw,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=ua.transition;ua.transition={};try{t()}finally{ua.transition=e}};X.unstable_act=Eg;X.useCallback=function(t,e){return nt.current.useCallback(t,e)};X.useContext=function(t){return nt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return nt.current.useDeferredValue(t)};X.useEffect=function(t,e){return nt.current.useEffect(t,e)};X.useId=function(){return nt.current.useId()};X.useImperativeHandle=function(t,e,n){return nt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return nt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return nt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return nt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return nt.current.useReducer(t,e,n)};X.useRef=function(t){return nt.current.useRef(t)};X.useState=function(t){return nt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return nt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return nt.current.useTransition()};X.version="18.3.1";fg.exports=X;var ft=fg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vw=ft,_w=Symbol.for("react.element"),ww=Symbol.for("react.fragment"),Ew=Object.prototype.hasOwnProperty,Tw=vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iw={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Ew.call(e,r)&&!Iw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_w,type:t,key:s,ref:a,props:i,_owner:Tw.current}}vl.Fragment=ww;vl.jsx=Tg;vl.jsxs=Tg;dg.exports=vl;var x=dg.exports,Ig={exports:{}},yt={},Sg={exports:{}},Ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,q){var G=z.length;z.push(q);e:for(;0<G;){var fe=G-1>>>1,re=z[fe];if(0<i(re,q))z[fe]=q,z[G]=re,G=fe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],G=z.pop();if(G!==q){z[0]=G;e:for(var fe=0,re=z.length,Ee=re>>>1;fe<Ee;){var Jt=2*(fe+1)-1,Zt=z[Jt],en=Jt+1,tn=z[en];if(0>i(Zt,G))en<re&&0>i(tn,Zt)?(z[fe]=tn,z[en]=G,fe=en):(z[fe]=Zt,z[Jt]=G,fe=Jt);else if(en<re&&0>i(tn,G))z[fe]=tn,z[en]=G,fe=en;else break e}}return q}function i(z,q){var G=z.sortIndex-q.sortIndex;return G!==0?G:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],p=1,g=null,y=3,P=!1,R=!1,D=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var q=n(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=z)r(d),q.sortIndex=q.expirationTime,e(c,q);else break;q=n(d)}}function O(z){if(D=!1,S(z),!R)if(n(c)!==null)R=!0,ji(j);else{var q=n(d);q!==null&&Yt(O,q.startTime-z)}}function j(z,q){R=!1,D&&(D=!1,I(m),m=-1),P=!0;var G=y;try{for(S(q),g=n(c);g!==null&&(!(g.expirationTime>q)||z&&!A());){var fe=g.callback;if(typeof fe=="function"){g.callback=null,y=g.priorityLevel;var re=fe(g.expirationTime<=q);q=t.unstable_now(),typeof re=="function"?g.callback=re:g===n(c)&&r(c),S(q)}else r(c);g=n(c)}if(g!==null)var Ee=!0;else{var Jt=n(d);Jt!==null&&Yt(O,Jt.startTime-q),Ee=!1}return Ee}finally{g=null,y=G,P=!1}}var U=!1,w=null,m=-1,_=5,E=-1;function A(){return!(t.unstable_now()-E<_)}function C(){if(w!==null){var z=t.unstable_now();E=z;var q=!0;try{q=w(!0,z)}finally{q?T():(U=!1,w=null)}}else U=!1}var T;if(typeof v=="function")T=function(){v(C)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,lr=_t.port2;_t.port1.onmessage=C,T=function(){lr.postMessage(null)}}else T=function(){M(C,0)};function ji(z){w=z,U||(U=!0,T())}function Yt(z,q){m=M(function(){z(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||P||(R=!0,ji(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var G=y;y=q;try{return z()}finally{y=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=y;y=z;try{return q()}finally{y=G}},t.unstable_scheduleCallback=function(z,q,G){var fe=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?fe+G:fe):G=fe,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=G+re,z={id:p++,callback:q,priorityLevel:z,startTime:G,expirationTime:re,sortIndex:-1},G>fe?(z.sortIndex=G,e(d,z),n(c)===null&&z===n(d)&&(D?(I(m),m=-1):D=!0,Yt(O,G-fe))):(z.sortIndex=re,e(c,z),R||P||(R=!0,ji(j))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var q=y;return function(){var G=y;y=q;try{return z.apply(this,arguments)}finally{y=G}}}})(Ag);Sg.exports=Ag;var Sw=Sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aw=ft,gt=Sw;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kg=new Set,Ns={};function br(t,e){yi(t,e),yi(t+"Capture",e)}function yi(t,e){for(Ns[t]=e,t=0;t<e.length;t++)kg.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=Object.prototype.hasOwnProperty,kw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$f={},Hf={};function Cw(t){return Yu.call(Hf,t)?!0:Yu.call($f,t)?!1:kw.test(t)?Hf[t]=!0:($f[t]=!0,!1)}function Pw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Rw(t,e,n,r){if(e===null||typeof e>"u"||Pw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fh,ph);Ue[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fh,ph);Ue[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fh,ph);Ue[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function mh(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Rw(e,n,i,r)&&(n=null),r||i===null?Cw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=Aw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Cg=Symbol.for("react.provider"),Pg=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),Rg=Symbol.for("react.offscreen"),Wf=Symbol.iterator;function es(t){return t===null||typeof t!="object"?null:(t=Wf&&t[Wf]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,mu;function cs(t){if(mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mu=e&&e[1]||""}return`
`+mu+t}var gu=!1;function yu(t,e){if(!t||gu)return"";gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?cs(t):""}function xw(t){switch(t.tag){case 5:return cs(t.type);case 16:return cs("Lazy");case 13:return cs("Suspense");case 19:return cs("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case Gr:return"Portal";case Ju:return"Profiler";case gh:return"StrictMode";case Zu:return"Suspense";case ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pg:return(t.displayName||"Context")+".Consumer";case Cg:return(t._context.displayName||"Context")+".Provider";case yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vh:return e=t.displayName||null,e!==null?e:tc(t.type)||"Memo";case Nn:e=t._payload,t=t._init;try{return tc(t(e))}catch{}}return null}function Nw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tc(e);case 8:return e===gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dw(t){var e=xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jo(t){t._valueTracker||(t._valueTracker=Dw(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nc(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dg(t,e){e=e.checked,e!=null&&mh(t,"checked",e,!1)}function rc(t,e){Dg(t,e);var n=Zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&ic(t,e.type,Zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ic(t,e,n){(e!=="number"||Ra(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var hs=Array.isArray;function oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(hs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zn(n)}}function Og(t,e){var n=Zn(e.value),r=Zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zo,Lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ds(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ow=["Webkit","ms","Moz","O"];Object.keys(ms).forEach(function(t){Ow.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ms[e]=ms[t]})});function bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ms.hasOwnProperty(t)&&ms[t]?(""+e).trim():e+"px"}function Mg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Vw=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ac(t,e){if(e){if(Vw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function _h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cc=null,ai=null,li=null;function Xf(t){if(t=io(t)){if(typeof cc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Il(e),cc(t.stateNode,t.type,e))}}function Fg(t){ai?li?li.push(t):li=[t]:ai=t}function Ug(){if(ai){var t=ai,e=li;if(li=ai=null,Xf(t),e)for(t=0;t<e.length;t++)Xf(e[t])}}function jg(t,e){return t(e)}function zg(){}var vu=!1;function Bg(t,e,n){if(vu)return t(e,n);vu=!0;try{return jg(t,e,n)}finally{vu=!1,(ai!==null||li!==null)&&(zg(),Ug())}}function Os(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var hc=!1;if(gn)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){hc=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{hc=!1}function Lw(t,e,n,r,i,s,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var gs=!1,xa=null,Na=!1,dc=null,bw={onError:function(t){gs=!0,xa=t}};function Mw(t,e,n,r,i,s,a,l,c){gs=!1,xa=null,Lw.apply(bw,arguments)}function Fw(t,e,n,r,i,s,a,l,c){if(Mw.apply(this,arguments),gs){if(gs){var d=xa;gs=!1,xa=null}else throw Error(b(198));Na||(Na=!0,dc=d)}}function Mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yf(t){if(Mr(t)!==t)throw Error(b(188))}function Uw(t){var e=t.alternate;if(!e){if(e=Mr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yf(i),t;if(s===r)return Yf(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function Hg(t){return t=Uw(t),t!==null?Wg(t):null}function Wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wg(t);if(e!==null)return e;t=t.sibling}return null}var qg=gt.unstable_scheduleCallback,Jf=gt.unstable_cancelCallback,jw=gt.unstable_shouldYield,zw=gt.unstable_requestPaint,Te=gt.unstable_now,Bw=gt.unstable_getCurrentPriorityLevel,wh=gt.unstable_ImmediatePriority,Gg=gt.unstable_UserBlockingPriority,Da=gt.unstable_NormalPriority,$w=gt.unstable_LowPriority,Kg=gt.unstable_IdlePriority,_l=null,Wt=null;function Hw(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Gw,Ww=Math.log,qw=Math.LN2;function Gw(t){return t>>>=0,t===0?32:31-(Ww(t)/qw|0)|0}var Bo=64,$o=4194304;function ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ds(l):(s&=a,s!==0&&(r=ds(s)))}else a=n&~i,a!==0?r=ds(a):s!==0&&(r=ds(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function Kw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Ft(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Kw(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qg(){var t=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),t}function _u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function no(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function Xw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yg,Th,Jg,Zg,ey,pc=!1,Ho=[],zn=null,Bn=null,$n=null,Vs=new Map,Ls=new Map,On=[],Yw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zf(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(e.pointerId)}}function ns(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=io(e),e!==null&&Th(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Jw(t,e,n,r,i){switch(e){case"focusin":return zn=ns(zn,t,e,n,r,i),!0;case"dragenter":return Bn=ns(Bn,t,e,n,r,i),!0;case"mouseover":return $n=ns($n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vs.set(s,ns(Vs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ls.set(s,ns(Ls.get(s)||null,t,e,n,r,i)),!0}return!1}function ty(t){var e=gr(t.target);if(e!==null){var n=Mr(e);if(n!==null){if(e=n.tag,e===13){if(e=$g(n),e!==null){t.blockedOn=e,ey(t.priority,function(){Jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return e=io(n),e!==null&&Th(e),t.blockedOn=n,!1;e.shift()}return!0}function ep(t,e,n){ca(t)&&n.delete(e)}function Zw(){pc=!1,zn!==null&&ca(zn)&&(zn=null),Bn!==null&&ca(Bn)&&(Bn=null),$n!==null&&ca($n)&&($n=null),Vs.forEach(ep),Ls.forEach(ep)}function rs(t,e){t.blockedOn===e&&(t.blockedOn=null,pc||(pc=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Zw)))}function bs(t){function e(i){return rs(i,t)}if(0<Ho.length){rs(Ho[0],t);for(var n=1;n<Ho.length;n++){var r=Ho[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zn!==null&&rs(zn,t),Bn!==null&&rs(Bn,t),$n!==null&&rs($n,t),Vs.forEach(e),Ls.forEach(e),n=0;n<On.length;n++)r=On[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)ty(n),n.blockedOn===null&&On.shift()}var ui=Sn.ReactCurrentBatchConfig,Va=!0;function eE(t,e,n,r){var i=ne,s=ui.transition;ui.transition=null;try{ne=1,Ih(t,e,n,r)}finally{ne=i,ui.transition=s}}function tE(t,e,n,r){var i=ne,s=ui.transition;ui.transition=null;try{ne=4,Ih(t,e,n,r)}finally{ne=i,ui.transition=s}}function Ih(t,e,n,r){if(Va){var i=mc(t,e,n,r);if(i===null)Ru(t,e,r,La,n),Zf(t,r);else if(Jw(i,t,e,n,r))r.stopPropagation();else if(Zf(t,r),e&4&&-1<Yw.indexOf(t)){for(;i!==null;){var s=io(i);if(s!==null&&Yg(s),s=mc(t,e,n,r),s===null&&Ru(t,e,r,La,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ru(t,e,r,null,n)}}var La=null;function mc(t,e,n,r){if(La=null,t=_h(r),t=gr(t),t!==null)if(e=Mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return La=t,null}function ny(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bw()){case wh:return 1;case Gg:return 4;case Da:case $w:return 16;case Kg:return 536870912;default:return 16}default:return 16}}var Un=null,Sh=null,ha=null;function ry(){if(ha)return ha;var t,e=Sh,n=e.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return ha=i.slice(t,1<r?1-r:void 0)}function da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function tp(){return!1}function vt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wo:tp,this.isPropagationStopped=tp,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),e}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ah=vt(Di),ro=ye({},Di,{view:0,detail:0}),nE=vt(ro),wu,Eu,is,wl=ye({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==is&&(is&&t.type==="mousemove"?(wu=t.screenX-is.screenX,Eu=t.screenY-is.screenY):Eu=wu=0,is=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),np=vt(wl),rE=ye({},wl,{dataTransfer:0}),iE=vt(rE),sE=ye({},ro,{relatedTarget:0}),Tu=vt(sE),oE=ye({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),aE=vt(oE),lE=ye({},Di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uE=vt(lE),cE=ye({},Di,{data:0}),rp=vt(cE),hE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fE[t])?!!e[t]:!1}function kh(){return pE}var mE=ye({},ro,{key:function(t){if(t.key){var e=hE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gE=vt(mE),yE=ye({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=vt(yE),vE=ye({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),_E=vt(vE),wE=ye({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),EE=vt(wE),TE=ye({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IE=vt(TE),SE=[9,13,27,32],Ch=gn&&"CompositionEvent"in window,ys=null;gn&&"documentMode"in document&&(ys=document.documentMode);var AE=gn&&"TextEvent"in window&&!ys,iy=gn&&(!Ch||ys&&8<ys&&11>=ys),sp=" ",op=!1;function sy(t,e){switch(t){case"keyup":return SE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function kE(t,e){switch(t){case"compositionend":return oy(e);case"keypress":return e.which!==32?null:(op=!0,sp);case"textInput":return t=e.data,t===sp&&op?null:t;default:return null}}function CE(t,e){if(Qr)return t==="compositionend"||!Ch&&sy(t,e)?(t=ry(),ha=Sh=Un=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iy&&e.locale!=="ko"?null:e.data;default:return null}}var PE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PE[t.type]:e==="textarea"}function ay(t,e,n,r){Fg(r),e=ba(e,"onChange"),0<e.length&&(n=new Ah("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vs=null,Ms=null;function RE(t){vy(t,0)}function El(t){var e=Jr(t);if(Ng(e))return t}function xE(t,e){if(t==="change")return e}var ly=!1;if(gn){var Iu;if(gn){var Su="oninput"in document;if(!Su){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),Su=typeof lp.oninput=="function"}Iu=Su}else Iu=!1;ly=Iu&&(!document.documentMode||9<document.documentMode)}function up(){vs&&(vs.detachEvent("onpropertychange",uy),Ms=vs=null)}function uy(t){if(t.propertyName==="value"&&El(Ms)){var e=[];ay(e,Ms,t,_h(t)),Bg(RE,e)}}function NE(t,e,n){t==="focusin"?(up(),vs=e,Ms=n,vs.attachEvent("onpropertychange",uy)):t==="focusout"&&up()}function DE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(Ms)}function OE(t,e){if(t==="click")return El(e)}function VE(t,e){if(t==="input"||t==="change")return El(e)}function LE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:LE;function Fs(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yu.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hp(t,e){var n=cp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cp(n)}}function cy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hy(){for(var t=window,e=Ra();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ra(t.document)}return e}function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bE(t){var e=hy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cy(n.ownerDocument.documentElement,n)){if(r!==null&&Ph(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hp(n,s);var a=hp(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ME=gn&&"documentMode"in document&&11>=document.documentMode,Xr=null,gc=null,_s=null,yc=!1;function dp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yc||Xr==null||Xr!==Ra(r)||(r=Xr,"selectionStart"in r&&Ph(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_s&&Fs(_s,r)||(_s=r,r=ba(gc,"onSelect"),0<r.length&&(e=new Ah("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xr)))}function qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},Au={},dy={};gn&&(dy=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Tl(t){if(Au[t])return Au[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dy)return Au[t]=e[n];return t}var fy=Tl("animationend"),py=Tl("animationiteration"),my=Tl("animationstart"),gy=Tl("transitionend"),yy=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){yy.set(t,e),br(e,[t])}for(var ku=0;ku<fp.length;ku++){var Cu=fp[ku],FE=Cu.toLowerCase(),UE=Cu[0].toUpperCase()+Cu.slice(1);sr(FE,"on"+UE)}sr(fy,"onAnimationEnd");sr(py,"onAnimationIteration");sr(my,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(gy,"onTransitionEnd");yi("onMouseEnter",["mouseout","mouseover"]);yi("onMouseLeave",["mouseout","mouseover"]);yi("onPointerEnter",["pointerout","pointerover"]);yi("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jE=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function pp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Fw(r,e,void 0,t),t.currentTarget=null}function vy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;pp(i,l,d),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;pp(i,l,d),s=c}}}if(Na)throw t=dc,Na=!1,dc=null,t}function le(t,e){var n=e[Tc];n===void 0&&(n=e[Tc]=new Set);var r=t+"__bubble";n.has(r)||(_y(e,t,2,!1),n.add(r))}function Pu(t,e,n){var r=0;e&&(r|=4),_y(n,t,r,e)}var Go="_reactListening"+Math.random().toString(36).slice(2);function Us(t){if(!t[Go]){t[Go]=!0,kg.forEach(function(n){n!=="selectionchange"&&(jE.has(n)||Pu(n,!1,t),Pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Go]||(e[Go]=!0,Pu("selectionchange",!1,e))}}function _y(t,e,n,r){switch(ny(e)){case 1:var i=eE;break;case 4:i=tE;break;default:i=Ih}n=i.bind(null,e,n,t),i=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ru(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=gr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Bg(function(){var d=s,p=_h(n),g=[];e:{var y=yy.get(t);if(y!==void 0){var P=Ah,R=t;switch(t){case"keypress":if(da(n)===0)break e;case"keydown":case"keyup":P=gE;break;case"focusin":R="focus",P=Tu;break;case"focusout":R="blur",P=Tu;break;case"beforeblur":case"afterblur":P=Tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=iE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=_E;break;case fy:case py:case my:P=aE;break;case gy:P=EE;break;case"scroll":P=nE;break;case"wheel":P=IE;break;case"copy":case"cut":case"paste":P=uE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=ip}var D=(e&4)!==0,M=!D&&t==="scroll",I=D?y!==null?y+"Capture":null:y;D=[];for(var v=d,S;v!==null;){S=v;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,I!==null&&(O=Os(v,I),O!=null&&D.push(js(v,O,S)))),M)break;v=v.return}0<D.length&&(y=new P(y,R,null,n,p),g.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",P=t==="mouseout"||t==="pointerout",y&&n!==uc&&(R=n.relatedTarget||n.fromElement)&&(gr(R)||R[yn]))break e;if((P||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,P?(R=n.relatedTarget||n.toElement,P=d,R=R?gr(R):null,R!==null&&(M=Mr(R),R!==M||R.tag!==5&&R.tag!==6)&&(R=null)):(P=null,R=d),P!==R)){if(D=np,O="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(D=ip,O="onPointerLeave",I="onPointerEnter",v="pointer"),M=P==null?y:Jr(P),S=R==null?y:Jr(R),y=new D(O,v+"leave",P,n,p),y.target=M,y.relatedTarget=S,O=null,gr(p)===d&&(D=new D(I,v+"enter",R,n,p),D.target=S,D.relatedTarget=M,O=D),M=O,P&&R)t:{for(D=P,I=R,v=0,S=D;S;S=Hr(S))v++;for(S=0,O=I;O;O=Hr(O))S++;for(;0<v-S;)D=Hr(D),v--;for(;0<S-v;)I=Hr(I),S--;for(;v--;){if(D===I||I!==null&&D===I.alternate)break t;D=Hr(D),I=Hr(I)}D=null}else D=null;P!==null&&mp(g,y,P,D,!1),R!==null&&M!==null&&mp(g,M,R,D,!0)}}e:{if(y=d?Jr(d):window,P=y.nodeName&&y.nodeName.toLowerCase(),P==="select"||P==="input"&&y.type==="file")var j=xE;else if(ap(y))if(ly)j=VE;else{j=DE;var U=NE}else(P=y.nodeName)&&P.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=OE);if(j&&(j=j(t,d))){ay(g,j,n,p);break e}U&&U(t,y,d),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&ic(y,"number",y.value)}switch(U=d?Jr(d):window,t){case"focusin":(ap(U)||U.contentEditable==="true")&&(Xr=U,gc=d,_s=null);break;case"focusout":_s=gc=Xr=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,dp(g,n,p);break;case"selectionchange":if(ME)break;case"keydown":case"keyup":dp(g,n,p)}var w;if(Ch)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Qr?sy(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(iy&&n.locale!=="ko"&&(Qr||m!=="onCompositionStart"?m==="onCompositionEnd"&&Qr&&(w=ry()):(Un=p,Sh="value"in Un?Un.value:Un.textContent,Qr=!0)),U=ba(d,m),0<U.length&&(m=new rp(m,t,null,n,p),g.push({event:m,listeners:U}),w?m.data=w:(w=oy(n),w!==null&&(m.data=w)))),(w=AE?kE(t,n):CE(t,n))&&(d=ba(d,"onBeforeInput"),0<d.length&&(p=new rp("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=w))}vy(g,e)})}function js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ba(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Os(t,n),s!=null&&r.unshift(js(t,s,i)),s=Os(t,e),s!=null&&r.push(js(t,s,i))),t=t.return}return r}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mp(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=Os(n,s),c!=null&&a.unshift(js(n,c,l))):i||(c=Os(n,s),c!=null&&a.push(js(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var zE=/\r\n?/g,BE=/\u0000|\uFFFD/g;function gp(t){return(typeof t=="string"?t:""+t).replace(zE,`
`).replace(BE,"")}function Ko(t,e,n){if(e=gp(e),gp(t)!==e&&n)throw Error(b(425))}function Ma(){}var vc=null,_c=null;function wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,$E=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,HE=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(WE)}:Ec;function WE(t){setTimeout(function(){throw t})}function xu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),bs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bs(e)}function Hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Oi,zs="__reactProps$"+Oi,yn="__reactContainer$"+Oi,Tc="__reactEvents$"+Oi,qE="__reactListeners$"+Oi,GE="__reactHandles$"+Oi;function gr(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yn]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vp(t);t!==null;){if(n=t[Ht])return n;t=vp(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[Ht]||t[yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Il(t){return t[zs]||null}var Ic=[],Zr=-1;function or(t){return{current:t}}function ue(t){0>Zr||(t.current=Ic[Zr],Ic[Zr]=null,Zr--)}function se(t,e){Zr++,Ic[Zr]=t.current,t.current=e}var er={},Xe=or(er),at=or(!1),Sr=er;function vi(t,e){var n=t.type.contextTypes;if(!n)return er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function lt(t){return t=t.childContextTypes,t!=null}function Fa(){ue(at),ue(Xe)}function _p(t,e,n){if(Xe.current!==er)throw Error(b(168));se(Xe,e),se(at,n)}function wy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,Nw(t)||"Unknown",i));return ye({},n,r)}function Ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Sr=Xe.current,se(Xe,t),se(at,at.current),!0}function wp(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=wy(t,e,Sr),r.__reactInternalMemoizedMergedChildContext=t,ue(at),ue(Xe),se(Xe,t)):ue(at),se(at,n)}var on=null,Sl=!1,Nu=!1;function Ey(t){on===null?on=[t]:on.push(t)}function KE(t){Sl=!0,Ey(t)}function ar(){if(!Nu&&on!==null){Nu=!0;var t=0,e=ne;try{var n=on;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}on=null,Sl=!1}catch(i){throw on!==null&&(on=on.slice(t+1)),qg(wh,ar),i}finally{ne=e,Nu=!1}}return null}var ei=[],ti=0,ja=null,za=0,wt=[],Et=0,Ar=null,an=1,ln="";function fr(t,e){ei[ti++]=za,ei[ti++]=ja,ja=t,za=e}function Ty(t,e,n){wt[Et++]=an,wt[Et++]=ln,wt[Et++]=Ar,Ar=t;var r=an;t=ln;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,an=1<<32-Ft(e)+i|n<<i|r,ln=s+t}else an=1<<s|n<<i|r,ln=t}function Rh(t){t.return!==null&&(fr(t,1),Ty(t,1,0))}function xh(t){for(;t===ja;)ja=ei[--ti],ei[ti]=null,za=ei[--ti],ei[ti]=null;for(;t===Ar;)Ar=wt[--Et],wt[Et]=null,ln=wt[--Et],wt[Et]=null,an=wt[--Et],wt[Et]=null}var mt=null,pt=null,he=!1,Dt=null;function Iy(t,e){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mt=t,pt=Hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mt=t,pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:an,overflow:ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mt=t,pt=null,!0):!1;default:return!1}}function Sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ac(t){if(he){var e=pt;if(e){var n=e;if(!Ep(t,e)){if(Sc(t))throw Error(b(418));e=Hn(n.nextSibling);var r=mt;e&&Ep(t,e)?Iy(r,n):(t.flags=t.flags&-4097|2,he=!1,mt=t)}}else{if(Sc(t))throw Error(b(418));t.flags=t.flags&-4097|2,he=!1,mt=t}}}function Tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mt=t}function Qo(t){if(t!==mt)return!1;if(!he)return Tp(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wc(t.type,t.memoizedProps)),e&&(e=pt)){if(Sc(t))throw Sy(),Error(b(418));for(;e;)Iy(t,e),e=Hn(e.nextSibling)}if(Tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pt=Hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pt=null}}else pt=mt?Hn(t.stateNode.nextSibling):null;return!0}function Sy(){for(var t=pt;t;)t=Hn(t.nextSibling)}function _i(){pt=mt=null,he=!1}function Nh(t){Dt===null?Dt=[t]:Dt.push(t)}var QE=Sn.ReactCurrentBatchConfig;function ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Xo(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ip(t){var e=t._init;return e(t._payload)}function Ay(t){function e(I,v){if(t){var S=I.deletions;S===null?(I.deletions=[v],I.flags|=16):S.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=Kn(I,v),I.index=0,I.sibling=null,I}function s(I,v,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<v?(I.flags|=2,v):S):(I.flags|=2,v)):(I.flags|=1048576,v)}function a(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,S,O){return v===null||v.tag!==6?(v=Fu(S,I.mode,O),v.return=I,v):(v=i(v,S),v.return=I,v)}function c(I,v,S,O){var j=S.type;return j===Kr?p(I,v,S.props.children,O,S.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nn&&Ip(j)===v.type)?(O=i(v,S.props),O.ref=ss(I,v,S),O.return=I,O):(O=_a(S.type,S.key,S.props,null,I.mode,O),O.ref=ss(I,v,S),O.return=I,O)}function d(I,v,S,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Uu(S,I.mode,O),v.return=I,v):(v=i(v,S.children||[]),v.return=I,v)}function p(I,v,S,O,j){return v===null||v.tag!==7?(v=Er(S,I.mode,O,j),v.return=I,v):(v=i(v,S),v.return=I,v)}function g(I,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Fu(""+v,I.mode,S),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Uo:return S=_a(v.type,v.key,v.props,null,I.mode,S),S.ref=ss(I,null,v),S.return=I,S;case Gr:return v=Uu(v,I.mode,S),v.return=I,v;case Nn:var O=v._init;return g(I,O(v._payload),S)}if(hs(v)||es(v))return v=Er(v,I.mode,S,null),v.return=I,v;Xo(I,v)}return null}function y(I,v,S,O){var j=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(I,v,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Uo:return S.key===j?c(I,v,S,O):null;case Gr:return S.key===j?d(I,v,S,O):null;case Nn:return j=S._init,y(I,v,j(S._payload),O)}if(hs(S)||es(S))return j!==null?null:p(I,v,S,O,null);Xo(I,S)}return null}function P(I,v,S,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(S)||null,l(v,I,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Uo:return I=I.get(O.key===null?S:O.key)||null,c(v,I,O,j);case Gr:return I=I.get(O.key===null?S:O.key)||null,d(v,I,O,j);case Nn:var U=O._init;return P(I,v,S,U(O._payload),j)}if(hs(O)||es(O))return I=I.get(S)||null,p(v,I,O,j,null);Xo(v,O)}return null}function R(I,v,S,O){for(var j=null,U=null,w=v,m=v=0,_=null;w!==null&&m<S.length;m++){w.index>m?(_=w,w=null):_=w.sibling;var E=y(I,w,S[m],O);if(E===null){w===null&&(w=_);break}t&&w&&E.alternate===null&&e(I,w),v=s(E,v,m),U===null?j=E:U.sibling=E,U=E,w=_}if(m===S.length)return n(I,w),he&&fr(I,m),j;if(w===null){for(;m<S.length;m++)w=g(I,S[m],O),w!==null&&(v=s(w,v,m),U===null?j=w:U.sibling=w,U=w);return he&&fr(I,m),j}for(w=r(I,w);m<S.length;m++)_=P(w,I,m,S[m],O),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?m:_.key),v=s(_,v,m),U===null?j=_:U.sibling=_,U=_);return t&&w.forEach(function(A){return e(I,A)}),he&&fr(I,m),j}function D(I,v,S,O){var j=es(S);if(typeof j!="function")throw Error(b(150));if(S=j.call(S),S==null)throw Error(b(151));for(var U=j=null,w=v,m=v=0,_=null,E=S.next();w!==null&&!E.done;m++,E=S.next()){w.index>m?(_=w,w=null):_=w.sibling;var A=y(I,w,E.value,O);if(A===null){w===null&&(w=_);break}t&&w&&A.alternate===null&&e(I,w),v=s(A,v,m),U===null?j=A:U.sibling=A,U=A,w=_}if(E.done)return n(I,w),he&&fr(I,m),j;if(w===null){for(;!E.done;m++,E=S.next())E=g(I,E.value,O),E!==null&&(v=s(E,v,m),U===null?j=E:U.sibling=E,U=E);return he&&fr(I,m),j}for(w=r(I,w);!E.done;m++,E=S.next())E=P(w,I,m,E.value,O),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?m:E.key),v=s(E,v,m),U===null?j=E:U.sibling=E,U=E);return t&&w.forEach(function(C){return e(I,C)}),he&&fr(I,m),j}function M(I,v,S,O){if(typeof S=="object"&&S!==null&&S.type===Kr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Uo:e:{for(var j=S.key,U=v;U!==null;){if(U.key===j){if(j=S.type,j===Kr){if(U.tag===7){n(I,U.sibling),v=i(U,S.props.children),v.return=I,I=v;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nn&&Ip(j)===U.type){n(I,U.sibling),v=i(U,S.props),v.ref=ss(I,U,S),v.return=I,I=v;break e}n(I,U);break}else e(I,U);U=U.sibling}S.type===Kr?(v=Er(S.props.children,I.mode,O,S.key),v.return=I,I=v):(O=_a(S.type,S.key,S.props,null,I.mode,O),O.ref=ss(I,v,S),O.return=I,I=O)}return a(I);case Gr:e:{for(U=S.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(I,v.sibling),v=i(v,S.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=Uu(S,I.mode,O),v.return=I,I=v}return a(I);case Nn:return U=S._init,M(I,v,U(S._payload),O)}if(hs(S))return R(I,v,S,O);if(es(S))return D(I,v,S,O);Xo(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,S),v.return=I,I=v):(n(I,v),v=Fu(S,I.mode,O),v.return=I,I=v),a(I)):n(I,v)}return M}var wi=Ay(!0),ky=Ay(!1),Ba=or(null),$a=null,ni=null,Dh=null;function Oh(){Dh=ni=$a=null}function Vh(t){var e=Ba.current;ue(Ba),t._currentValue=e}function kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ci(t,e){$a=t,Dh=ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ot=!0),t.firstContext=null)}function At(t){var e=t._currentValue;if(Dh!==t)if(t={context:t,memoizedValue:e,next:null},ni===null){if($a===null)throw Error(b(308));ni=t,$a.dependencies={lanes:0,firstContext:t}}else ni=ni.next=t;return e}var yr=null;function Lh(t){yr===null?yr=[t]:yr.push(t)}function Cy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lh(e)):(n.next=i.next,i.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dn=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Py(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vn(t,n)}return i=r.interleaved,i===null?(e.next=e,Lh(r)):(e.next=i.next,i.next=e),r.interleaved=e,vn(t,n)}function fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Eh(t,n)}}function Sp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ha(t,e,n,r){var i=t.updateQueue;Dn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?s=d:a.next=d,a=c;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(s!==null){var g=i.baseState;a=0,p=d=c=null,l=s;do{var y=l.lane,P=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:P,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,D=l;switch(y=e,P=n,D.tag){case 1:if(R=D.payload,typeof R=="function"){g=R.call(P,g,y);break e}g=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=D.payload,y=typeof R=="function"?R.call(P,g,y):R,y==null)break e;g=ye({},g,y);break e;case 2:Dn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else P={eventTime:P,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=P,c=g):p=p.next=P,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(p===null&&(c=g),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Cr|=a,t.lanes=a,t.memoizedState=g}}function Ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var so={},qt=or(so),Bs=or(so),$s=or(so);function vr(t){if(t===so)throw Error(b(174));return t}function Mh(t,e){switch(se($s,e),se(Bs,t),se(qt,so),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}ue(qt),se(qt,e)}function Ei(){ue(qt),ue(Bs),ue($s)}function Ry(t){vr($s.current);var e=vr(qt.current),n=oc(e,t.type);e!==n&&(se(Bs,t),se(qt,n))}function Fh(t){Bs.current===t&&(ue(qt),ue(Bs))}var pe=or(0);function Wa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Du=[];function Uh(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var pa=Sn.ReactCurrentDispatcher,Ou=Sn.ReactCurrentBatchConfig,kr=0,ge=null,ke=null,Re=null,qa=!1,ws=!1,Hs=0,XE=0;function $e(){throw Error(b(321))}function jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function zh(t,e,n,r,i,s){if(kr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=t===null||t.memoizedState===null?e1:t1,t=n(r,i),ws){s=0;do{if(ws=!1,Hs=0,25<=s)throw Error(b(301));s+=1,Re=ke=null,e.updateQueue=null,pa.current=n1,t=n(r,i)}while(ws)}if(pa.current=Ga,e=ke!==null&&ke.next!==null,kr=0,Re=ke=ge=null,qa=!1,e)throw Error(b(300));return t}function Bh(){var t=Hs!==0;return Hs=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ge.memoizedState=Re=t:Re=Re.next=t,Re}function kt(){if(ke===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Re===null?ge.memoizedState:Re.next;if(e!==null)Re=e,ke=t;else{if(t===null)throw Error(b(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Re===null?ge.memoizedState=Re=t:Re=Re.next=t}return Re}function Ws(t,e){return typeof e=="function"?e(t):e}function Vu(t){var e=kt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,d=s;do{var p=d.lane;if((kr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=g,a=r):c=c.next=g,ge.lanes|=p,Cr|=p}d=d.next}while(d!==null&&d!==s);c===null?a=r:c.next=l,jt(r,e.memoizedState)||(ot=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Cr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lu(t){var e=kt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);jt(s,e.memoizedState)||(ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xy(){}function Ny(t,e){var n=ge,r=kt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,ot=!0),r=r.queue,$h(Vy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,qs(9,Oy.bind(null,n,r,i,e),void 0,null),Ne===null)throw Error(b(349));kr&30||Dy(n,e,i)}return i}function Dy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Oy(t,e,n,r){e.value=n,e.getSnapshot=r,Ly(e)&&by(t)}function Vy(t,e,n){return n(function(){Ly(e)&&by(t)})}function Ly(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function by(t){var e=vn(t,1);e!==null&&Ut(e,t,1,-1)}function kp(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:t},e.queue=t,t=t.dispatch=ZE.bind(null,ge,t),[e.memoizedState,t]}function qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function My(){return kt().memoizedState}function ma(t,e,n,r){var i=Bt();ge.flags|=t,i.memoizedState=qs(1|e,n,void 0,r===void 0?null:r)}function Al(t,e,n,r){var i=kt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var a=ke.memoizedState;if(s=a.destroy,r!==null&&jh(r,a.deps)){i.memoizedState=qs(e,n,s,r);return}}ge.flags|=t,i.memoizedState=qs(1|e,n,s,r)}function Cp(t,e){return ma(8390656,8,t,e)}function $h(t,e){return Al(2048,8,t,e)}function Fy(t,e){return Al(4,2,t,e)}function Uy(t,e){return Al(4,4,t,e)}function jy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zy(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,jy.bind(null,e,t),n)}function Hh(){}function By(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $y(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hy(t,e,n){return kr&21?(jt(n,e)||(n=Qg(),ge.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=n)}function YE(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Ou.transition;Ou.transition={};try{t(!1),e()}finally{ne=n,Ou.transition=r}}function Wy(){return kt().memoizedState}function JE(t,e,n){var r=Gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qy(t))Gy(e,n);else if(n=Cy(t,e,n,r),n!==null){var i=tt();Ut(n,t,r,i),Ky(n,e,r)}}function ZE(t,e,n){var r=Gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qy(t))Gy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,jt(l,a)){var c=e.interleaved;c===null?(i.next=i,Lh(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Cy(t,e,i,r),n!==null&&(i=tt(),Ut(n,t,r,i),Ky(n,e,r))}}function qy(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function Gy(t,e){ws=qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ky(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Eh(t,n)}}var Ga={readContext:At,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},e1={readContext:At,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:At,useEffect:Cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ma(4194308,4,jy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return ma(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JE.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:kp,useDebugValue:Hh,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=kp(!1),e=t[0];return t=YE.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Bt();if(he){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Ne===null)throw Error(b(349));kr&30||Dy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cp(Vy.bind(null,r,s,t),[t]),r.flags|=2048,qs(9,Oy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=Ne.identifierPrefix;if(he){var n=ln,r=an;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},t1={readContext:At,useCallback:By,useContext:At,useEffect:$h,useImperativeHandle:zy,useInsertionEffect:Fy,useLayoutEffect:Uy,useMemo:$y,useReducer:Vu,useRef:My,useState:function(){return Vu(Ws)},useDebugValue:Hh,useDeferredValue:function(t){var e=kt();return Hy(e,ke.memoizedState,t)},useTransition:function(){var t=Vu(Ws)[0],e=kt().memoizedState;return[t,e]},useMutableSource:xy,useSyncExternalStore:Ny,useId:Wy,unstable_isNewReconciler:!1},n1={readContext:At,useCallback:By,useContext:At,useEffect:$h,useImperativeHandle:zy,useInsertionEffect:Fy,useLayoutEffect:Uy,useMemo:$y,useReducer:Lu,useRef:My,useState:function(){return Lu(Ws)},useDebugValue:Hh,useDeferredValue:function(t){var e=kt();return ke===null?e.memoizedState=t:Hy(e,ke.memoizedState,t)},useTransition:function(){var t=Lu(Ws)[0],e=kt().memoizedState;return[t,e]},useMutableSource:xy,useSyncExternalStore:Ny,useId:Wy,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Gn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Ut(e,t,i,r),fa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Gn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Ut(e,t,i,r),fa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=Gn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wn(t,i,r),e!==null&&(Ut(e,t,r,n),fa(e,t,r))}};function Pp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Fs(n,r)||!Fs(i,s):!0}function Qy(t,e,n){var r=!1,i=er,s=e.contextType;return typeof s=="object"&&s!==null?s=At(s):(i=lt(e)?Sr:Xe.current,r=e.contextTypes,s=(r=r!=null)?vi(t,i):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=At(s):(s=lt(e)?Sr:Xe.current,i.context=vi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),Ha(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ti(t,e){try{var n="",r=e;do n+=xw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var r1=typeof WeakMap=="function"?WeakMap:Map;function Xy(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qa||(Qa=!0,Uc=r),Rc(t,e)},n}function Yy(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rc(t,e),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function xp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new r1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=y1.bind(null,t,e,n),e.then(t,t))}function Np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Wn(n,e,1))),n.lanes|=1),t)}var i1=Sn.ReactCurrentOwner,ot=!1;function et(t,e,n,r){e.child=t===null?ky(e,null,n,r):wi(e,t.child,n,r)}function Op(t,e,n,r,i){n=n.render;var s=e.ref;return ci(e,i),r=zh(t,e,n,r,s,i),n=Bh(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(he&&n&&Rh(e),e.flags|=1,et(t,e,r,i),e.child)}function Vp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jy(t,e,s,r,i)):(t=_a(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fs,n(a,r)&&t.ref===e.ref)return _n(t,e,i)}return e.flags|=1,t=Kn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fs(s,r)&&t.ref===e.ref)if(ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ot=!0);else return e.lanes=t.lanes,_n(t,e,i)}return xc(t,e,n,r,i)}function Zy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(ii,dt),dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(ii,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(ii,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(ii,dt),dt|=r;return et(t,e,i,n),e.child}function ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xc(t,e,n,r,i){var s=lt(n)?Sr:Xe.current;return s=vi(e,s),ci(e,i),n=zh(t,e,n,r,s,i),r=Bh(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(he&&r&&Rh(e),e.flags|=1,et(t,e,n,i),e.child)}function Lp(t,e,n,r,i){if(lt(n)){var s=!0;Ua(e)}else s=!1;if(ci(e,i),e.stateNode===null)ga(t,e),Qy(e,n,r),Pc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=At(d):(d=lt(n)?Sr:Xe.current,d=vi(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==d)&&Rp(e,a,r,d),Dn=!1;var y=e.memoizedState;a.state=y,Ha(e,r,a,i),c=e.memoizedState,l!==r||y!==c||at.current||Dn?(typeof p=="function"&&(Cc(e,n,p,r),c=e.memoizedState),(l=Dn||Pp(e,n,l,r,y,c,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),a.props=r,a.state=c,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Py(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:xt(e.type,l),a.props=d,g=e.pendingProps,y=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=At(c):(c=lt(n)?Sr:Xe.current,c=vi(e,c));var P=n.getDerivedStateFromProps;(p=typeof P=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||y!==c)&&Rp(e,a,r,c),Dn=!1,y=e.memoizedState,a.state=y,Ha(e,r,a,i);var R=e.memoizedState;l!==g||y!==R||at.current||Dn?(typeof P=="function"&&(Cc(e,n,P,r),R=e.memoizedState),(d=Dn||Pp(e,n,d,r,y,R,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,R,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,R,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),a.props=r,a.state=R,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Nc(t,e,n,r,s,i)}function Nc(t,e,n,r,i,s){ev(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&wp(e,n,!1),_n(t,e,s);r=e.stateNode,i1.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=wi(e,t.child,null,s),e.child=wi(e,null,l,s)):et(t,e,l,s),e.memoizedState=r.state,i&&wp(e,n,!0),e.child}function tv(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),Mh(t,e.containerInfo)}function bp(t,e,n,r,i){return _i(),Nh(i),e.flags|=256,et(t,e,n,r),e.child}var Dc={dehydrated:null,treeContext:null,retryLane:0};function Oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function nv(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(pe,i&1),t===null)return Ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Rl(a,r,0,null),t=Er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oc(n),e.memoizedState=Dc,t):Wh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return s1(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Kn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Kn(l,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Oc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Dc,r}return s=t.child,t=s.sibling,r=Kn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wh(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yo(t,e,n,r){return r!==null&&Nh(r),wi(e,t.child,null,n),t=Wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function s1(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=bu(Error(b(422))),Yo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rl({mode:"visible",children:r.children},i,0,null),s=Er(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&wi(e,t.child,null,a),e.child.memoizedState=Oc(a),e.memoizedState=Dc,s);if(!(e.mode&1))return Yo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=bu(s,r,void 0),Yo(t,e,a,r)}if(l=(a&t.childLanes)!==0,ot||l){if(r=Ne,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vn(t,i),Ut(r,t,i,-1))}return Yh(),r=bu(Error(b(421))),Yo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=v1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pt=Hn(i.nextSibling),mt=e,he=!0,Dt=null,t!==null&&(wt[Et++]=an,wt[Et++]=ln,wt[Et++]=Ar,an=t.id,ln=t.overflow,Ar=e),e=Wh(e,r.children),e.flags|=4096,e)}function Mp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kc(t.return,e,n)}function Mu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Mu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Mu(e,!0,n,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function o1(t,e,n){switch(e.tag){case 3:tv(e),_i();break;case 5:Ry(e);break;case 1:lt(e.type)&&Ua(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(Ba,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?nv(t,e,n):(se(pe,pe.current&1),t=_n(t,e,n),t!==null?t.sibling:null);se(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Zy(t,e,n)}return _n(t,e,n)}var iv,Vc,sv,ov;iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vc=function(){};sv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vr(qt.current);var s=null;switch(n){case"input":i=nc(t,i),r=nc(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=sc(t,i),r=sc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ma)}ac(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ns.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&le("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};ov=function(t,e,n,r){n!==r&&(e.flags|=4)};function os(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function a1(t,e,n){var r=e.pendingProps;switch(xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return lt(e.type)&&Fa(),He(e),null;case 3:return r=e.stateNode,Ei(),ue(at),ue(Xe),Uh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(Bc(Dt),Dt=null))),Vc(t,e),He(e),null;case 5:Fh(e);var i=vr($s.current);if(n=e.type,t!==null&&e.stateNode!=null)sv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return He(e),null}if(t=vr(qt.current),Qo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ht]=e,r[zs]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<fs.length;i++)le(fs[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":qf(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Kf(r,s),le("invalid",r)}ac(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ko(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ko(r.textContent,l,t),i=["children",""+l]):Ns.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&le("scroll",r)}switch(n){case"input":jo(r),Gf(r,s,!0);break;case"textarea":jo(r),Qf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ma)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Ht]=e,t[zs]=r,iv(t,e,!1,!1),e.stateNode=t;e:{switch(a=lc(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<fs.length;i++)le(fs[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":qf(t,r),i=nc(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),le("invalid",t);break;case"textarea":Kf(t,r),i=sc(t,r),le("invalid",t);break;default:i=r}ac(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Mg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Lg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ds(t,c):typeof c=="number"&&Ds(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ns.hasOwnProperty(s)?c!=null&&s==="onScroll"&&le("scroll",t):c!=null&&mh(t,s,c,a))}switch(n){case"input":jo(t),Gf(t,r,!1);break;case"textarea":jo(t),Qf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)ov(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=vr($s.current),vr(qt.current),Qo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ht]=e,(s=r.nodeValue!==n)&&(t=mt,t!==null))switch(t.tag){case 3:Ko(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ko(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=e,e.stateNode=r}return He(e),null;case 13:if(ue(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&pt!==null&&e.mode&1&&!(e.flags&128))Sy(),_i(),e.flags|=98560,s=!1;else if(s=Qo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Ht]=e}else _i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Dt!==null&&(Bc(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Ce===0&&(Ce=3):Yh())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return Ei(),Vc(t,e),t===null&&Us(e.stateNode.containerInfo),He(e),null;case 10:return Vh(e.type._context),He(e),null;case 17:return lt(e.type)&&Fa(),He(e),null;case 19:if(ue(pe),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)os(s,!1);else{if(Ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Wa(t),a!==null){for(e.flags|=128,os(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Ii&&(e.flags|=128,r=!0,os(s,!1),e.lanes=4194304)}else{if(!r)if(t=Wa(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!he)return He(e),null}else 2*Te()-s.renderingStartTime>Ii&&n!==1073741824&&(e.flags|=128,r=!0,os(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=pe.current,se(pe,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return Xh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function l1(t,e){switch(xh(e),e.tag){case 1:return lt(e.type)&&Fa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ei(),ue(at),ue(Xe),Uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fh(e),null;case 13:if(ue(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));_i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(pe),null;case 4:return Ei(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var Jo=!1,Ge=!1,u1=typeof WeakSet=="function"?WeakSet:Set,B=null;function ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Lc(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Fp=!1;function c1(t,e){if(vc=Va,t=hy(),Ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,p=0,g=t,y=null;t:for(;;){for(var P;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==s||r!==0&&g.nodeType!==3||(c=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(P=g.firstChild)!==null;)y=g,g=P;for(;;){if(g===t)break t;if(y===n&&++d===i&&(l=a),y===s&&++p===r&&(c=a),(P=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=P}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(_c={focusedElem:t,selectionRange:n},Va=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var D=R.memoizedProps,M=R.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:xt(e.type,D),M);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(O){_e(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return R=Fp,Fp=!1,R}function Es(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lc(e,n,s)}i=i.next}while(i!==r)}}function Cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function av(t){var e=t.alternate;e!==null&&(t.alternate=null,av(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[zs],delete e[Tc],delete e[qE],delete e[GE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lv(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ma));else if(r!==4&&(t=t.child,t!==null))for(Mc(t,e,n),t=t.sibling;t!==null;)Mc(t,e,n),t=t.sibling}function Fc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fc(t,e,n),t=t.sibling;t!==null;)Fc(t,e,n),t=t.sibling}var Oe=null,Nt=!1;function Rn(t,e,n){for(n=n.child;n!==null;)uv(t,e,n),n=n.sibling}function uv(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Ge||ri(n,e);case 6:var r=Oe,i=Nt;Oe=null,Rn(t,e,n),Oe=r,Nt=i,Oe!==null&&(Nt?(t=Oe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Nt?(t=Oe,n=n.stateNode,t.nodeType===8?xu(t.parentNode,n):t.nodeType===1&&xu(t,n),bs(t)):xu(Oe,n.stateNode));break;case 4:r=Oe,i=Nt,Oe=n.stateNode.containerInfo,Nt=!0,Rn(t,e,n),Oe=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Lc(n,e,a),i=i.next}while(i!==r)}Rn(t,e,n);break;case 1:if(!Ge&&(ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}Rn(t,e,n);break;case 21:Rn(t,e,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Rn(t,e,n),Ge=r):Rn(t,e,n);break;default:Rn(t,e,n)}}function jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new u1),e.forEach(function(r){var i=_1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Oe=l.stateNode,Nt=!1;break e;case 3:Oe=l.stateNode.containerInfo,Nt=!0;break e;case 4:Oe=l.stateNode.containerInfo,Nt=!0;break e}l=l.return}if(Oe===null)throw Error(b(160));uv(s,a,i),Oe=null,Nt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){_e(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cv(e,t),e=e.sibling}function cv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rt(e,t),zt(t),r&4){try{Es(3,t,t.return),Cl(3,t)}catch(D){_e(t,t.return,D)}try{Es(5,t,t.return)}catch(D){_e(t,t.return,D)}}break;case 1:Rt(e,t),zt(t),r&512&&n!==null&&ri(n,n.return);break;case 5:if(Rt(e,t),zt(t),r&512&&n!==null&&ri(n,n.return),t.flags&32){var i=t.stateNode;try{Ds(i,"")}catch(D){_e(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dg(i,s),lc(l,a);var d=lc(l,s);for(a=0;a<c.length;a+=2){var p=c[a],g=c[a+1];p==="style"?Mg(i,g):p==="dangerouslySetInnerHTML"?Lg(i,g):p==="children"?Ds(i,g):mh(i,p,g,d)}switch(l){case"input":rc(i,s);break;case"textarea":Og(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var P=s.value;P!=null?oi(i,!!s.multiple,P,!1):y!==!!s.multiple&&(s.defaultValue!=null?oi(i,!!s.multiple,s.defaultValue,!0):oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[zs]=s}catch(D){_e(t,t.return,D)}}break;case 6:if(Rt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){_e(t,t.return,D)}}break;case 3:if(Rt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bs(e.containerInfo)}catch(D){_e(t,t.return,D)}break;case 4:Rt(e,t),zt(t);break;case 13:Rt(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kh=Te())),r&4&&jp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Ge=(d=Ge)||p,Rt(e,t),Ge=d):Rt(e,t),zt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(B=t,p=t.child;p!==null;){for(g=B=p;B!==null;){switch(y=B,P=y.child,y.tag){case 0:case 11:case 14:case 15:Es(4,y,y.return);break;case 1:ri(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(D){_e(r,n,D)}}break;case 5:ri(y,y.return);break;case 22:if(y.memoizedState!==null){Bp(g);continue}}P!==null?(P.return=y,B=P):Bp(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,c=g.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=bg("display",a))}catch(D){_e(t,t.return,D)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(D){_e(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Rt(e,t),zt(t),r&4&&jp(t);break;case 21:break;default:Rt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lv(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ds(i,""),r.flags&=-33);var s=Up(t);Fc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Up(t);Mc(t,l,a);break;default:throw Error(b(161))}}catch(c){_e(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h1(t,e,n){B=t,hv(t)}function hv(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Jo;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ge;l=Jo;var d=Ge;if(Jo=a,(Ge=c)&&!d)for(B=i;B!==null;)a=B,c=a.child,a.tag===22&&a.memoizedState!==null?$p(i):c!==null?(c.return=a,B=c):$p(i);for(;s!==null;)B=s,hv(s),s=s.sibling;B=i,Jo=l,Ge=d}zp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):zp(t)}}function zp(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ge||Cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ap(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ap(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&bs(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ge||e.flags&512&&bc(e)}catch(y){_e(e,e.return,y)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Bp(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function $p(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cl(4,e)}catch(c){_e(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){_e(e,i,c)}}var s=e.return;try{bc(e)}catch(c){_e(e,s,c)}break;case 5:var a=e.return;try{bc(e)}catch(c){_e(e,a,c)}}}catch(c){_e(e,e.return,c)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var d1=Math.ceil,Ka=Sn.ReactCurrentDispatcher,qh=Sn.ReactCurrentOwner,St=Sn.ReactCurrentBatchConfig,ee=0,Ne=null,Se=null,Me=0,dt=0,ii=or(0),Ce=0,Gs=null,Cr=0,Pl=0,Gh=0,Ts=null,st=null,Kh=0,Ii=1/0,sn=null,Qa=!1,Uc=null,qn=null,Zo=!1,jn=null,Xa=0,Is=0,jc=null,ya=-1,va=0;function tt(){return ee&6?Te():ya!==-1?ya:ya=Te()}function Gn(t){return t.mode&1?ee&2&&Me!==0?Me&-Me:QE.transition!==null?(va===0&&(va=Qg()),va):(t=ne,t!==0||(t=window.event,t=t===void 0?16:ny(t.type)),t):1}function Ut(t,e,n,r){if(50<Is)throw Is=0,jc=null,Error(b(185));no(t,n,r),(!(ee&2)||t!==Ne)&&(t===Ne&&(!(ee&2)&&(Pl|=n),Ce===4&&Vn(t,Me)),ut(t,r),n===1&&ee===0&&!(e.mode&1)&&(Ii=Te()+500,Sl&&ar()))}function ut(t,e){var n=t.callbackNode;Qw(t,e);var r=Oa(t,t===Ne?Me:0);if(r===0)n!==null&&Jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jf(n),e===1)t.tag===0?KE(Hp.bind(null,t)):Ey(Hp.bind(null,t)),HE(function(){!(ee&6)&&ar()}),n=null;else{switch(Xg(r)){case 1:n=wh;break;case 4:n=Gg;break;case 16:n=Da;break;case 536870912:n=Kg;break;default:n=Da}n=_v(n,dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dv(t,e){if(ya=-1,va=0,ee&6)throw Error(b(327));var n=t.callbackNode;if(hi()&&t.callbackNode!==n)return null;var r=Oa(t,t===Ne?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ya(t,r);else{e=r;var i=ee;ee|=2;var s=pv();(Ne!==t||Me!==e)&&(sn=null,Ii=Te()+500,wr(t,e));do try{m1();break}catch(l){fv(t,l)}while(!0);Oh(),Ka.current=s,ee=i,Se!==null?e=0:(Ne=null,Me=0,e=Ce)}if(e!==0){if(e===2&&(i=fc(t),i!==0&&(r=i,e=zc(t,i))),e===1)throw n=Gs,wr(t,0),Vn(t,r),ut(t,Te()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!f1(i)&&(e=Ya(t,r),e===2&&(s=fc(t),s!==0&&(r=s,e=zc(t,s))),e===1))throw n=Gs,wr(t,0),Vn(t,r),ut(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:pr(t,st,sn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=Kh+500-Te(),10<e)){if(Oa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ec(pr.bind(null,t,st,sn),e);break}pr(t,st,sn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Ft(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d1(r/1960))-r,10<r){t.timeoutHandle=Ec(pr.bind(null,t,st,sn),r);break}pr(t,st,sn);break;case 5:pr(t,st,sn);break;default:throw Error(b(329))}}}return ut(t,Te()),t.callbackNode===n?dv.bind(null,t):null}function zc(t,e){var n=Ts;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Ya(t,e),t!==2&&(e=st,st=n,e!==null&&Bc(e)),t}function Bc(t){st===null?st=t:st.push.apply(st,t)}function f1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~Gh,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function Hp(t){if(ee&6)throw Error(b(327));hi();var e=Oa(t,0);if(!(e&1))return ut(t,Te()),null;var n=Ya(t,e);if(t.tag!==0&&n===2){var r=fc(t);r!==0&&(e=r,n=zc(t,r))}if(n===1)throw n=Gs,wr(t,0),Vn(t,e),ut(t,Te()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,st,sn),ut(t,Te()),null}function Qh(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Ii=Te()+500,Sl&&ar())}}function Pr(t){jn!==null&&jn.tag===0&&!(ee&6)&&hi();var e=ee;ee|=1;var n=St.transition,r=ne;try{if(St.transition=null,ne=1,t)return t()}finally{ne=r,St.transition=n,ee=e,!(ee&6)&&ar()}}function Xh(){dt=ii.current,ue(ii)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$E(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(xh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fa();break;case 3:Ei(),ue(at),ue(Xe),Uh();break;case 5:Fh(r);break;case 4:Ei();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:Vh(r.type._context);break;case 22:case 23:Xh()}n=n.return}if(Ne=t,Se=t=Kn(t.current,null),Me=dt=e,Ce=0,Gs=null,Gh=Pl=Cr=0,st=Ts=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}yr=null}return t}function fv(t,e){do{var n=Se;try{if(Oh(),pa.current=Ga,qa){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qa=!1}if(kr=0,Re=ke=ge=null,ws=!1,Hs=0,qh.current=null,n===null||n.return===null){Ce=1,Gs=e,Se=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Me,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var P=Np(a);if(P!==null){P.flags&=-257,Dp(P,a,l,s,e),P.mode&1&&xp(s,d,e),e=P,c=d;var R=e.updateQueue;if(R===null){var D=new Set;D.add(c),e.updateQueue=D}else R.add(c);break e}else{if(!(e&1)){xp(s,d,e),Yh();break e}c=Error(b(426))}}else if(he&&l.mode&1){var M=Np(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Dp(M,a,l,s,e),Nh(Ti(c,l));break e}}s=c=Ti(c,l),Ce!==4&&(Ce=2),Ts===null?Ts=[s]:Ts.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Xy(s,c,e);Sp(s,I);break e;case 1:l=c;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(qn===null||!qn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Yy(s,l,e);Sp(s,O);break e}}s=s.return}while(s!==null)}gv(n)}catch(j){e=j,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function pv(){var t=Ka.current;return Ka.current=Ga,t===null?Ga:t}function Yh(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Ne===null||!(Cr&268435455)&&!(Pl&268435455)||Vn(Ne,Me)}function Ya(t,e){var n=ee;ee|=2;var r=pv();(Ne!==t||Me!==e)&&(sn=null,wr(t,e));do try{p1();break}catch(i){fv(t,i)}while(!0);if(Oh(),ee=n,Ka.current=r,Se!==null)throw Error(b(261));return Ne=null,Me=0,Ce}function p1(){for(;Se!==null;)mv(Se)}function m1(){for(;Se!==null&&!jw();)mv(Se)}function mv(t){var e=vv(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?gv(t):Se=e,qh.current=null}function gv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=l1(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ce=6,Se=null;return}}else if(n=a1(n,e,dt),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);Ce===0&&(Ce=5)}function pr(t,e,n){var r=ne,i=St.transition;try{St.transition=null,ne=1,g1(t,e,n,r)}finally{St.transition=i,ne=r}return null}function g1(t,e,n,r){do hi();while(jn!==null);if(ee&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xw(t,s),t===Ne&&(Se=Ne=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,_v(Da,function(){return hi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=St.transition,St.transition=null;var a=ne;ne=1;var l=ee;ee|=4,qh.current=null,c1(t,n),cv(n,t),bE(_c),Va=!!vc,_c=vc=null,t.current=n,h1(n),zw(),ee=l,ne=a,St.transition=s}else t.current=n;if(Zo&&(Zo=!1,jn=t,Xa=i),s=t.pendingLanes,s===0&&(qn=null),Hw(n.stateNode),ut(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qa)throw Qa=!1,t=Uc,Uc=null,t;return Xa&1&&t.tag!==0&&hi(),s=t.pendingLanes,s&1?t===jc?Is++:(Is=0,jc=t):Is=0,ar(),null}function hi(){if(jn!==null){var t=Xg(Xa),e=St.transition,n=ne;try{if(St.transition=null,ne=16>t?16:t,jn===null)var r=!1;else{if(t=jn,jn=null,Xa=0,ee&6)throw Error(b(331));var i=ee;for(ee|=4,B=t.current;B!==null;){var s=B,a=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(B=d;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:Es(8,p,s)}var g=p.child;if(g!==null)g.return=p,B=g;else for(;B!==null;){p=B;var y=p.sibling,P=p.return;if(av(p),p===d){B=null;break}if(y!==null){y.return=P,B=y;break}B=P}}}var R=s.alternate;if(R!==null){var D=R.child;if(D!==null){R.child=null;do{var M=D.sibling;D.sibling=null,D=M}while(D!==null)}}B=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,B=a;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Es(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var v=t.current;for(B=v;B!==null;){a=B;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,B=S;else e:for(a=v;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Cl(9,l)}}catch(j){_e(l,l.return,j)}if(l===a){B=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,B=O;break e}B=l.return}}if(ee=i,ar(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(_l,t)}catch{}r=!0}return r}finally{ne=n,St.transition=e}}return!1}function Wp(t,e,n){e=Ti(n,e),e=Xy(t,e,1),t=Wn(t,e,1),e=tt(),t!==null&&(no(t,1,e),ut(t,e))}function _e(t,e,n){if(t.tag===3)Wp(t,t,n);else for(;e!==null;){if(e.tag===3){Wp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){t=Ti(n,t),t=Yy(e,t,1),e=Wn(e,t,1),t=tt(),e!==null&&(no(e,1,t),ut(e,t));break}}e=e.return}}function y1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(Me&n)===n&&(Ce===4||Ce===3&&(Me&130023424)===Me&&500>Te()-Kh?wr(t,0):Gh|=n),ut(t,e)}function yv(t,e){e===0&&(t.mode&1?(e=$o,$o<<=1,!($o&130023424)&&($o=4194304)):e=1);var n=tt();t=vn(t,e),t!==null&&(no(t,e,n),ut(t,n))}function v1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yv(t,n)}function _1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),yv(t,n)}var vv;vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ot=!1,o1(t,e,n);ot=!!(t.flags&131072)}else ot=!1,he&&e.flags&1048576&&Ty(e,za,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ga(t,e),t=e.pendingProps;var i=vi(e,Xe.current);ci(e,n),i=zh(null,e,r,t,i,n);var s=Bh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(s=!0,Ua(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bh(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,Pc(e,r,t,n),e=Nc(null,e,r,!0,s,n)):(e.tag=0,he&&s&&Rh(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ga(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=E1(r),t=xt(r,t),i){case 0:e=xc(null,e,r,t,n);break e;case 1:e=Lp(null,e,r,t,n);break e;case 11:e=Op(null,e,r,t,n);break e;case 14:e=Vp(null,e,r,xt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Lp(t,e,r,i,n);case 3:e:{if(tv(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Py(t,e),Ha(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ti(Error(b(423)),e),e=bp(t,e,r,n,i);break e}else if(r!==i){i=Ti(Error(b(424)),e),e=bp(t,e,r,n,i);break e}else for(pt=Hn(e.stateNode.containerInfo.firstChild),mt=e,he=!0,Dt=null,n=ky(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_i(),r===i){e=_n(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return Ry(e),t===null&&Ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,wc(r,i)?a=null:s!==null&&wc(r,s)&&(e.flags|=32),ev(t,e),et(t,e,a,n),e.child;case 6:return t===null&&Ac(e),null;case 13:return nv(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wi(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Op(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,se(Ba,r._currentValue),r._currentValue=a,s!==null)if(jt(s.value,a)){if(s.children===i.children&&!at.current){e=_n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=hn(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),kc(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(b(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),kc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ci(e,n),i=At(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),Vp(t,e,r,i,n);case 15:return Jy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),ga(t,e),e.tag=1,lt(r)?(t=!0,Ua(e)):t=!1,ci(e,n),Qy(e,r,i),Pc(e,r,i,n),Nc(null,e,r,!0,t,n);case 19:return rv(t,e,n);case 22:return Zy(t,e,n)}throw Error(b(156,e.tag))};function _v(t,e){return qg(t,e)}function w1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,n,r){return new w1(t,e,n,r)}function Jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function E1(t){if(typeof t=="function")return Jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yh)return 11;if(t===vh)return 14}return 2}function Kn(t,e){var n=t.alternate;return n===null?(n=It(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _a(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Jh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Kr:return Er(n.children,i,s,e);case gh:a=8,i|=8;break;case Ju:return t=It(12,n,e,i|2),t.elementType=Ju,t.lanes=s,t;case Zu:return t=It(13,n,e,i),t.elementType=Zu,t.lanes=s,t;case ec:return t=It(19,n,e,i),t.elementType=ec,t.lanes=s,t;case Rg:return Rl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cg:a=10;break e;case Pg:a=9;break e;case yh:a=11;break e;case vh:a=14;break e;case Nn:a=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=It(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Er(t,e,n,r){return t=It(7,t,r,e),t.lanes=n,t}function Rl(t,e,n,r){return t=It(22,t,r,e),t.elementType=Rg,t.lanes=n,t.stateNode={isHidden:!1},t}function Fu(t,e,n){return t=It(6,t,null,e),t.lanes=n,t}function Uu(t,e,n){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function T1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_u(0),this.expirationTimes=_u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zh(t,e,n,r,i,s,a,l,c){return t=new T1(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=It(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function I1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function wv(t){if(!t)return er;t=t._reactInternals;e:{if(Mr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(lt(n))return wy(t,n,e)}return e}function Ev(t,e,n,r,i,s,a,l,c){return t=Zh(n,r,!0,t,i,s,a,l,c),t.context=wv(null),n=t.current,r=tt(),i=Gn(n),s=hn(r,i),s.callback=e??null,Wn(n,s,i),t.current.lanes=i,no(t,i,r),ut(t,r),t}function xl(t,e,n,r){var i=e.current,s=tt(),a=Gn(i);return n=wv(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wn(i,e,a),t!==null&&(Ut(t,i,a,s),fa(t,i,a)),a}function Ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ed(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function S1(){return null}var Tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function td(t){this._internalRoot=t}Nl.prototype.render=td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));xl(t,e,null,null)};Nl.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){xl(null,t,null,null)}),e[yn]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<On.length&&e!==0&&e<On[n].priority;n++);On.splice(n,0,t),n===0&&ty(t)}};function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function A1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Ja(a);s.call(d)}}var a=Ev(e,r,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=a,t[yn]=a.current,Us(t.nodeType===8?t.parentNode:t),Pr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Ja(c);l.call(d)}}var c=Zh(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=c,t[yn]=c.current,Us(t.nodeType===8?t.parentNode:t),Pr(function(){xl(e,c,n,r)}),c}function Ol(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Ja(a);l.call(c)}}xl(e,a,t,i)}else a=A1(n,e,t,i,r);return Ja(a)}Yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ds(e.pendingLanes);n!==0&&(Eh(e,n|1),ut(e,Te()),!(ee&6)&&(Ii=Te()+500,ar()))}break;case 13:Pr(function(){var r=vn(t,1);if(r!==null){var i=tt();Ut(r,t,1,i)}}),ed(t,1)}};Th=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=tt();Ut(e,t,134217728,n)}ed(t,134217728)}};Jg=function(t){if(t.tag===13){var e=Gn(t),n=vn(t,e);if(n!==null){var r=tt();Ut(n,t,e,r)}ed(t,e)}};Zg=function(){return ne};ey=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};cc=function(t,e,n){switch(e){case"input":if(rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(b(90));Ng(r),rc(r,i)}}}break;case"textarea":Og(t,n);break;case"select":e=n.value,e!=null&&oi(t,!!n.multiple,e,!1)}};jg=Qh;zg=Pr;var k1={usingClientEntryPoint:!1,Events:[io,Jr,Il,Fg,Ug,Qh]},as={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C1={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hg(t),t===null?null:t.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||S1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{_l=ea.inject(C1),Wt=ea}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k1;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(e))throw Error(b(200));return I1(t,e,null,n)};yt.createRoot=function(t,e){if(!nd(t))throw Error(b(299));var n=!1,r="",i=Tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zh(t,1,!1,null,null,n,!1,r,i),t[yn]=e.current,Us(t.nodeType===8?t.parentNode:t),new td(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Hg(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return Pr(t)};yt.hydrate=function(t,e,n){if(!Dl(e))throw Error(b(200));return Ol(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!nd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Tv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ev(e,null,t,1,n??null,i,!1,s,a),t[yn]=e.current,Us(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nl(e)};yt.render=function(t,e,n){if(!Dl(e))throw Error(b(200));return Ol(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(b(40));return t._reactRootContainer?(Pr(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[yn]=null})}),!0):!1};yt.unstable_batchedUpdates=Qh;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dl(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Ol(t,e,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function Iv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iv)}catch(t){console.error(t)}}Iv(),Ig.exports=yt;var P1=Ig.exports,Sv,Kp=P1;Sv=Kp.createRoot,Kp.hydrateRoot;const R1=()=>{};var Qp={};/**
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
 */const Av=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},x1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},kv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,p=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|d>>6,P=d&63;c||(P=64,a||(y=64)),r.push(n[p],n[g],n[y],n[P])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Av(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):x1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new N1;const y=s<<2|l>>4;if(r.push(y),d!==64){const P=l<<4&240|d>>2;if(r.push(P),g!==64){const R=d<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class N1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D1=function(t){const e=Av(t);return kv.encodeByteArray(e,!0)},Za=function(t){return D1(t).replace(/\./g,"")},Cv=function(t){try{return kv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function O1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V1=()=>O1().__FIREBASE_DEFAULTS__,L1=()=>{if(typeof process>"u"||typeof Qp>"u")return;const t=Qp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},b1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cv(t[1]);return e&&JSON.parse(e)},Vl=()=>{try{return R1()||V1()||L1()||b1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pv=t=>{var e,n;return(n=(e=Vl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},M1=t=>{const e=Pv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rv=()=>{var t;return(t=Vl())===null||t===void 0?void 0:t.config},xv=t=>{var e;return(e=Vl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class F1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Vi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function U1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Za(JSON.stringify(n)),Za(JSON.stringify(a)),""].join(".")}const Ss={};function j1(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ss))Ss[e]?t.emulator.push(e):t.prod.push(e);return t}function z1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Xp=!1;function Dv(t,e){if(typeof window>"u"||typeof document>"u"||!Vi(window.location.host)||Ss[t]===e||Ss[t]||Xp)return;Ss[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",s=j1().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function c(y,P){y.setAttribute("width","24"),y.setAttribute("id",P),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Xp=!0,a()},y}function p(y,P){y.setAttribute("id",P),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=z1(r),P=n("text"),R=document.getElementById(P)||document.createElement("span"),D=n("learnmore"),M=document.getElementById(D)||document.createElement("a"),I=n("preprendIcon"),v=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const S=y.element;l(S),p(M,D);const O=d();c(v,I),S.append(v,R,M,O),document.body.appendChild(S)}s?(R.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function B1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function $1(){var t;const e=(t=Vl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function H1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function W1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function q1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G1(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function K1(){return!$1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Q1(){try{return typeof indexedDB=="object"}catch{return!1}}function X1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Y1="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Y1,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?J1(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new An(i,l,r)}}function J1(t,e){return t.replace(Z1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Z1=/\{\$([^}]+)}/g;function eT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Yp(s)&&Yp(a)){if(!Rr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yp(t){return t!==null&&typeof t=="object"}/**
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
 */function ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tT(t,e){const n=new nT(t,e);return n.subscribe.bind(n)}class nT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ju),i.error===void 0&&(i.error=ju),i.complete===void 0&&(i.complete=ju);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ju(){}/**
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
 */function Ct(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class iT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new F1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oT(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sT(t){return t===mr?void 0:t}function oT(t){return t.instantiationMode==="EAGER"}/**
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
 */class aT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const lT={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},uT=Y.INFO,cT={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},hT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rd{constructor(e){this.name=e,this._logLevel=uT,this._logHandler=hT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const dT=(t,e)=>e.some(n=>t instanceof n);let Jp,Zp;function fT(){return Jp||(Jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pT(){return Zp||(Zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ov=new WeakMap,$c=new WeakMap,Vv=new WeakMap,zu=new WeakMap,id=new WeakMap;function mT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Qn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Ov.set(n,t)}).catch(()=>{}),id.set(e,t),e}function gT(t){if($c.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});$c.set(t,e)}let Hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yT(t){Hc=t(Hc)}function vT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bu(this),e,...n);return Vv.set(r,e.sort?e.sort():[e]),Qn(r)}:pT().includes(t)?function(...e){return t.apply(Bu(this),e),Qn(Ov.get(this))}:function(...e){return Qn(t.apply(Bu(this),e))}}function _T(t){return typeof t=="function"?vT(t):(t instanceof IDBTransaction&&gT(t),dT(t,fT())?new Proxy(t,Hc):t)}function Qn(t){if(t instanceof IDBRequest)return mT(t);if(zu.has(t))return zu.get(t);const e=_T(t);return e!==t&&(zu.set(t,e),id.set(e,t)),e}const Bu=t=>id.get(t);function wT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Qn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Qn(a.result),c.oldVersion,c.newVersion,Qn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const ET=["get","getKey","getAll","getAllKeys","count"],TT=["put","add","delete","clear"],$u=new Map;function em(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($u.get(e))return $u.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ET.includes(n)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&c.done]))[0]};return $u.set(e,s),s}yT(t=>({...t,get:(e,n,r)=>em(e,n)||t.get(e,n,r),has:(e,n)=>!!em(e,n)||t.has(e,n)}));/**
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
 */class IT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ST(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ST(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",tm="0.13.2";/**
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
 */const wn=new rd("@firebase/app"),AT="@firebase/app-compat",kT="@firebase/analytics-compat",CT="@firebase/analytics",PT="@firebase/app-check-compat",RT="@firebase/app-check",xT="@firebase/auth",NT="@firebase/auth-compat",DT="@firebase/database",OT="@firebase/data-connect",VT="@firebase/database-compat",LT="@firebase/functions",bT="@firebase/functions-compat",MT="@firebase/installations",FT="@firebase/installations-compat",UT="@firebase/messaging",jT="@firebase/messaging-compat",zT="@firebase/performance",BT="@firebase/performance-compat",$T="@firebase/remote-config",HT="@firebase/remote-config-compat",WT="@firebase/storage",qT="@firebase/storage-compat",GT="@firebase/firestore",KT="@firebase/ai",QT="@firebase/firestore-compat",XT="firebase",YT="11.10.0";/**
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
 */const qc="[DEFAULT]",JT={[Wc]:"fire-core",[AT]:"fire-core-compat",[CT]:"fire-analytics",[kT]:"fire-analytics-compat",[RT]:"fire-app-check",[PT]:"fire-app-check-compat",[xT]:"fire-auth",[NT]:"fire-auth-compat",[DT]:"fire-rtdb",[OT]:"fire-data-connect",[VT]:"fire-rtdb-compat",[LT]:"fire-fn",[bT]:"fire-fn-compat",[MT]:"fire-iid",[FT]:"fire-iid-compat",[UT]:"fire-fcm",[jT]:"fire-fcm-compat",[zT]:"fire-perf",[BT]:"fire-perf-compat",[$T]:"fire-rc",[HT]:"fire-rc-compat",[WT]:"fire-gcs",[qT]:"fire-gcs-compat",[GT]:"fire-fst",[QT]:"fire-fst-compat",[KT]:"fire-vertex","fire-js":"fire-js",[XT]:"fire-js-all"};/**
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
 */const el=new Map,ZT=new Map,Gc=new Map;function nm(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Si(t){const e=t.name;if(Gc.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of el.values())nm(n,t);for(const n of ZT.values())nm(n,t);return!0}function sd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const eI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new oo("app","Firebase",eI);/**
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
 */class tI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Li=YT;function Lv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=Rv()),!n)throw Xn.create("no-options");const s=el.get(i);if(s){if(Rr(n,s.options)&&Rr(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const a=new aT(i);for(const c of Gc.values())a.addComponent(c);const l=new tI(n,r,a);return el.set(i,l),l}function bv(t=qc){const e=el.get(t);if(!e&&t===qc&&Rv())return Lv();if(!e)throw Xn.create("no-app",{appName:t});return e}function Yn(t,e,n){var r;let i=(r=JT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}Si(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nI="firebase-heartbeat-database",rI=1,Ks="firebase-heartbeat-store";let Hu=null;function Mv(){return Hu||(Hu=wT(nI,rI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ks)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),Hu}async function iI(t){try{const n=(await Mv()).transaction(Ks),r=await n.objectStore(Ks).get(Fv(t));return await n.done,r}catch(e){if(e instanceof An)wn.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function rm(t,e){try{const r=(await Mv()).transaction(Ks,"readwrite");await r.objectStore(Ks).put(e,Fv(t)),await r.done}catch(n){if(n instanceof An)wn.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function Fv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sI=1024,oI=30;class aI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=im();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>oI){const a=cI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=im(),{heartbeatsToSend:r,unsentEntries:i}=lI(this._heartbeatsCache.heartbeats),s=Za(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function im(){return new Date().toISOString().substring(0,10)}function lI(t,e=sI){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),sm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q1()?X1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sm(t){return Za(JSON.stringify({version:2,heartbeats:t})).length}function cI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function hI(t){Si(new xr("platform-logger",e=>new IT(e),"PRIVATE")),Si(new xr("heartbeat",e=>new aI(e),"PRIVATE")),Yn(Wc,tm,t),Yn(Wc,tm,"esm2017"),Yn("fire-js","")}hI("");var dI="firebase",fI="11.10.0";/**
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
 */Yn(dI,fI,"app");function od(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Uv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pI=Uv,jv=new oo("auth","Firebase",Uv());/**
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
 */const tl=new rd("@firebase/auth");function mI(t,...e){tl.logLevel<=Y.WARN&&tl.warn(`Auth (${Li}): ${t}`,...e)}function wa(t,...e){tl.logLevel<=Y.ERROR&&tl.error(`Auth (${Li}): ${t}`,...e)}/**
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
 */function En(t,...e){throw ad(t,...e)}function Gt(t,...e){return ad(t,...e)}function zv(t,e,n){const r=Object.assign(Object.assign({},pI()),{[e]:n});return new oo("auth","Firebase",r).create(e,{appName:t.name})}function dn(t){return zv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ad(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jv.create(t,...e)}function W(t,e,...n){if(!t)throw ad(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wa(e),new Error(e)}function Tn(t,e){t||un(e)}/**
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
 */function Kc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gI(){return om()==="http:"||om()==="https:"}function om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gI()||W1()||"connection"in navigator)?navigator.onLine:!0}function vI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=B1()||q1()}get(){return yI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ld(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EI=new lo(3e4,6e4);function uo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bi(t,e,n,r,i={}){return $v(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=ao(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},s);return H1()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Vi(t.emulatorConfig.host)&&(d.credentials="include"),Bv.fetch()(await Hv(t,t.config.apiHost,n,l),d)})}async function $v(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_I),e);try{const i=new TI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ta(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ta(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw ta(t,"user-disabled",a);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw zv(t,p,d);En(t,p)}}catch(i){if(i instanceof An)throw i;En(t,"network-request-failed",{message:String(i)})}}async function ud(t,e,n,r,i={}){const s=await bi(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Hv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?ld(t.config,i):`${t.config.apiScheme}://${i}`;return wI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class TI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),EI.get())})}}function ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function II(t,e){return bi(t,"POST","/v1/accounts:delete",e)}async function nl(t,e){return bi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function As(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SI(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),i=cd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:As(Wu(i.auth_time)),issuedAtTime:As(Wu(i.iat)),expirationTime:As(Wu(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wu(t){return Number(t)*1e3}function cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cv(n);return i?JSON.parse(i):(wa("Failed to decode base64 JWT payload"),null)}catch(i){return wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function am(t){const e=cd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&AI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class kI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Qs(t,nl(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Wv(s.providerUserInfo):[],l=PI(t.providerData,a),c=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=c?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Qc(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function CI(t){const e=Ct(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wv(t){return t.map(e=>{var{providerId:n}=e,r=od(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RI(t,e){const n=await $v(t,{},async()=>{const r=ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await Hv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Vi(t.emulatorConfig.host)&&(c.credentials="include"),Bv.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xI(t,e){return bi(t,"POST","/v2/accounts:revokeToken",uo(t,e))}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):am(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=am(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new di;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function xn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=od(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SI(this,e)}reload(){return CI(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await Qs(this,II(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,c,d,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,P=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(a=n.photoURL)!==null&&a!==void 0?a:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(d=n.createdAt)!==null&&d!==void 0?d:void 0,v=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:S,emailVerified:O,isAnonymous:j,providerData:U,stsTokenManager:w}=n;W(S&&w,e,"internal-error");const m=di.fromJSON(this.name,w);W(typeof S=="string",e,"internal-error"),xn(g,e.name),xn(y,e.name),W(typeof O=="boolean",e,"internal-error"),W(typeof j=="boolean",e,"internal-error"),xn(P,e.name),xn(R,e.name),xn(D,e.name),xn(M,e.name),xn(I,e.name),xn(v,e.name);const _=new bt({uid:S,auth:e,email:y,emailVerified:O,displayName:g,isAnonymous:j,photoURL:R,phoneNumber:P,tenantId:D,stsTokenManager:m,createdAt:I,lastLoginAt:v});return U&&Array.isArray(U)&&(_.providerData=U.map(E=>Object.assign({},E))),M&&(_._redirectEventId=M),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new di;i.updateFromServerResponse(n);const s=new bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await rl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Wv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new di;l.updateFromIdToken(r);const c=new bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Qc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}}/**
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
 */const lm=new Map;function cn(t){Tn(t instanceof Function,"Expected a class definition");let e=lm.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lm.set(t,e),e)}/**
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
 */class qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qv.type="NONE";const um=qv;/**
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
 */function Ea(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ea(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ea("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await nl(this.auth,{idToken:e}).catch(()=>{});return n?bt._fromGetAccountInfoResponse(this.auth,n,e):null}return bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fi(cn(um),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||cn(um);const a=Ea(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(a);if(p){let g;if(typeof p=="string"){const y=await nl(e,{idToken:p}).catch(()=>{});if(!y)break;g=await bt._fromGetAccountInfoResponse(e,y,p)}else g=bt._fromJSON(e,p);d!==s&&(l=g),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new fi(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new fi(s,e,r))}}/**
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
 */function cm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jv(e))return"Blackberry";if(Zv(e))return"Webos";if(Kv(e))return"Safari";if((e.includes("chrome/")||Qv(e))&&!e.includes("edge/"))return"Chrome";if(Yv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gv(t=Ye()){return/firefox\//i.test(t)}function Kv(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qv(t=Ye()){return/crios\//i.test(t)}function Xv(t=Ye()){return/iemobile/i.test(t)}function Yv(t=Ye()){return/android/i.test(t)}function Jv(t=Ye()){return/blackberry/i.test(t)}function Zv(t=Ye()){return/webos/i.test(t)}function hd(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NI(t=Ye()){var e;return hd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DI(){return G1()&&document.documentMode===10}function e_(t=Ye()){return hd(t)||Yv(t)||Zv(t)||Jv(t)||/windows phone/i.test(t)||Xv(t)}/**
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
 */function t_(t,e=[]){let n;switch(t){case"Browser":n=cm(Ye());break;case"Worker":n=`${cm(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${r}`}/**
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
 */class OI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function VI(t,e={}){return bi(t,"GET","/v2/passwordPolicy",uo(t,e))}/**
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
 */const LI=6;class bI{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:LI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class MI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hm(this),this.idTokenSubscription=new hm(this),this.beforeStateQueue=new OI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nl(this,{idToken:e}),r=await bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(dn(this));const n=e?Ct(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VI(this),n=new bI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function co(t){return Ct(t)}class hm{constructor(e){this.auth=e,this.observer=null,this.addObserver=tT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FI(t){dd=t}function UI(t){return dd.loadJS(t)}function jI(){return dd.gapiScript}function zI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function BI(t,e){const n=sd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Rr(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function $I(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HI(t,e,n){const r=co(t);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=n_(e),{host:a,port:l}=WI(e),c=l===null?"":`:${l}`,d={url:`${s}//${a}${c}/`},p=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(Rr(d,r.config.emulator)&&Rr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Vi(a)?(Nv(`${s}//${a}${c}`),Dv("Auth",!0)):qI()}function n_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WI(t){const e=n_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:dm(a)}}}function dm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class r_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
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
 */async function pi(t,e){return ud(t,"POST","/v1/accounts:signInWithIdp",uo(t,e))}/**
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
 */const GI="http://localhost";class Nr extends r_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=od(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Nr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:GI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ao(n)}return e}}/**
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
 */class i_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ho extends i_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends ho{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class bn extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class Mn extends ho{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class Fn extends ho{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
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
 */async function KI(t,e){return ud(t,"POST","/v1/accounts:signUp",uo(t,e))}/**
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
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bt._fromIdTokenResponse(e,r,i),a=fm(r);return new In({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fm(r);return new In({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function QI(t){var e;if(Tt(t.app))return Promise.reject(dn(t));const n=co(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new In({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await KI(n,{returnSecureToken:!0}),i=await In._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class il extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new il(e,n,r,i)}}function s_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,s,e,r):s})}async function XI(t,e,n=!1){const r=await Qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",r)}/**
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
 */async function YI(t,e,n=!1){const{auth:r}=t;if(Tt(r.app))return Promise.reject(dn(r));const i="reauthenticate";try{const s=await Qs(t,s_(r,i,e,t),n);W(s.idToken,r,"internal-error");const a=cd(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(t.uid===l,r,"user-mismatch"),In._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
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
 */async function JI(t,e,n=!1){if(Tt(t.app))return Promise.reject(dn(t));const r="signIn",i=await s_(t,r,e),s=await In._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */async function ZI(t,e){return ud(t,"POST","/v1/accounts:signInWithCustomToken",uo(t,e))}/**
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
 */async function eS(t,e){if(Tt(t.app))return Promise.reject(dn(t));const n=co(t),r=await ZI(n,{token:e,returnSecureToken:!0}),i=await In._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function tS(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function nS(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}function rS(t,e,n,r){return Ct(t).onAuthStateChanged(e,n,r)}const sl="__sak";/**
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
 */class o_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sl,"1"),this.storage.removeItem(sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iS=1e3,sS=10;class a_ extends o_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);DI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a_.type="LOCAL";const oS=a_;/**
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
 */class l_ extends o_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}l_.type="SESSION";const u_=l_;/**
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
 */function aS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ll{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ll(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,s)),c=await aS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ll.receivers=[];/**
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
 */function fd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const d=fd("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Kt(){return window}function uS(t){Kt().location.href=t}/**
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
 */function c_(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function cS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dS(){return c_()?self:null}/**
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
 */const h_="firebaseLocalStorageDb",fS=1,ol="firebaseLocalStorage",d_="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bl(t,e){return t.transaction([ol],e?"readwrite":"readonly").objectStore(ol)}function pS(){const t=indexedDB.deleteDatabase(h_);return new fo(t).toPromise()}function Xc(){const t=indexedDB.open(h_,fS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ol,{keyPath:d_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ol)?e(r):(r.close(),await pS(),e(await Xc()))})})}async function pm(t,e,n){const r=bl(t,!0).put({[d_]:e,value:n});return new fo(r).toPromise()}async function mS(t,e){const n=bl(t,!1).get(e),r=await new fo(n).toPromise();return r===void 0?null:r.value}function mm(t,e){const n=bl(t,!0).delete(e);return new fo(n).toPromise()}const gS=800,yS=3;class f_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ll._getInstance(dS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cS(),!this.activeServiceWorker)return;this.sender=new lS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xc();return await pm(e,sl,"1"),await mm(e,sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bl(i,!1).getAll();return new fo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f_.type="LOCAL";const vS=f_;new lo(3e4,6e4);/**
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
 */function _S(t,e){return e?cn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pd extends r_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wS(t){return JI(t.auth,new pd(t),t.bypassAuthState)}function ES(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),YI(n,new pd(t),t.bypassAuthState)}async function TS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),XI(n,new pd(t),t.bypassAuthState)}/**
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
 */class p_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wS;case"linkViaPopup":case"linkViaRedirect":return TS;case"reauthViaPopup":case"reauthViaRedirect":return ES;default:En(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IS=new lo(2e3,1e4);class si extends p_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IS.get())};e()}}si.currentPopupAction=null;/**
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
 */const SS="pendingRedirect",Ta=new Map;class AS extends p_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ta.get(this.auth._key());if(!e){try{const r=await kS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ta.set(this.auth._key(),e)}return this.bypassAuthState||Ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kS(t,e){const n=RS(e),r=PS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CS(t,e){Ta.set(t._key(),e)}function PS(t){return cn(t._redirectPersistence)}function RS(t){return Ea(SS,t.config.apiKey,t.name)}async function xS(t,e,n=!1){if(Tt(t.app))return Promise.reject(dn(t));const r=co(t),i=_S(r,e),a=await new AS(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const NS=10*60*1e3;class DS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!m_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NS&&this.cachedEventUids.clear(),this.cachedEventUids.has(gm(e))}saveEventToCache(e){this.cachedEventUids.add(gm(e)),this.lastProcessedEventTime=Date.now()}}function gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m_(t);default:return!1}}/**
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
 */async function VS(t,e={}){return bi(t,"GET","/v1/projects",e)}/**
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
 */const LS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bS=/^https?/;async function MS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VS(t);for(const n of e)try{if(FS(n))return}catch{}En(t,"unauthorized-domain")}function FS(t){const e=Kc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!bS.test(n))return!1;if(LS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const US=new lo(3e4,6e4);function ym(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jS(t){return new Promise((e,n)=>{var r,i,s;function a(){ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ym(),n(Gt(t,"network-request-failed"))},timeout:US.get()})}if(!((i=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kt().gapi)===null||s===void 0)&&s.load)a();else{const l=zI("iframefcb");return Kt()[l]=()=>{gapi.load?a():n(Gt(t,"network-request-failed"))},UI(`${jI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ia=null,e})}let Ia=null;function zS(t){return Ia=Ia||jS(t),Ia}/**
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
 */const BS=new lo(5e3,15e3),$S="__/auth/iframe",HS="emulator/auth/iframe",WS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GS(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ld(e,HS):`https://${t.config.authDomain}/${$S}`,r={apiKey:e.apiKey,appName:t.name,v:Li},i=qS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ao(r).slice(1)}`}async function KS(t){const e=await zS(t),n=Kt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:GS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Gt(t,"network-request-failed"),l=Kt().setTimeout(()=>{s(a)},BS.get());function c(){Kt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const QS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XS=500,YS=600,JS="_blank",ZS="http://localhost";class vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eA(t,e,n,r=XS,i=YS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},QS),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Ye().toLowerCase();n&&(l=Qv(d)?JS:n),Gv(d)&&(e=e||ZS,c.scrollbars="yes");const p=Object.entries(c).reduce((y,[P,R])=>`${y}${P}=${R},`,"");if(NI(d)&&l!=="_self")return tA(e||"",l),new vm(null);const g=window.open(e||"",l,p);W(g,t,"popup-blocked");try{g.focus()}catch{}return new vm(g)}function tA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nA="__/auth/handler",rA="emulator/auth/handler",iA=encodeURIComponent("fac");async function _m(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Li,eventId:i};if(e instanceof i_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",eT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof ho){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await t._getAppCheckToken(),d=c?`#${iA}=${encodeURIComponent(c)}`:"";return`${sA(t)}?${ao(l).slice(1)}${d}`}function sA({config:t}){return t.emulator?ld(t,rA):`https://${t.authDomain}/${nA}`}/**
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
 */const qu="webStorageSupport";class oA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=u_,this._completeRedirectFn=xS,this._overrideRedirectResult=CS}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await _m(e,n,r,Kc(),i);return eA(e,a,fd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _m(e,n,r,Kc(),i);return uS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KS(e),r=new DS(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qu,{type:qu},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qu];a!==void 0&&n(!!a),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||Kv()||hd()}}const aA=oA;var wm="@firebase/auth",Em="1.10.8";/**
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
 */class lA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cA(t){Si(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},d=new MI(r,i,s,c);return $I(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Si(new xr("auth-internal",e=>{const n=co(e.getProvider("auth").getImmediate());return(r=>new lA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(wm,Em,uA(t)),Yn(wm,Em,"esm2017")}/**
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
 */const hA=5*60,dA=xv("authIdTokenMaxAge")||hA;let Tm=null;const fA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dA)return;const i=n==null?void 0:n.token;Tm!==i&&(Tm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pA(t=bv()){const e=sd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BI(t,{popupRedirectResolver:aA,persistence:[vS,oS,u_]}),r=xv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=fA(s.toString());nS(n,a,()=>a(n.currentUser)),tS(n,l=>a(l))}}const i=Pv("auth");return i&&HI(n,`http://${i}`),n}function mA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cA("Browser");var Im=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var md;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,A,C){for(var T=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)T[_t-2]=arguments[_t];return m.prototype[A].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)E[A]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(A=0;16>A;++A)E[A]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],A=w.g[2];var C=w.g[3],T=m+(C^_&(A^C))+E[0]+3614090360&4294967295;m=_+(T<<7&4294967295|T>>>25),T=C+(A^m&(_^A))+E[1]+3905402710&4294967295,C=m+(T<<12&4294967295|T>>>20),T=A+(_^C&(m^_))+E[2]+606105819&4294967295,A=C+(T<<17&4294967295|T>>>15),T=_+(m^A&(C^m))+E[3]+3250441966&4294967295,_=A+(T<<22&4294967295|T>>>10),T=m+(C^_&(A^C))+E[4]+4118548399&4294967295,m=_+(T<<7&4294967295|T>>>25),T=C+(A^m&(_^A))+E[5]+1200080426&4294967295,C=m+(T<<12&4294967295|T>>>20),T=A+(_^C&(m^_))+E[6]+2821735955&4294967295,A=C+(T<<17&4294967295|T>>>15),T=_+(m^A&(C^m))+E[7]+4249261313&4294967295,_=A+(T<<22&4294967295|T>>>10),T=m+(C^_&(A^C))+E[8]+1770035416&4294967295,m=_+(T<<7&4294967295|T>>>25),T=C+(A^m&(_^A))+E[9]+2336552879&4294967295,C=m+(T<<12&4294967295|T>>>20),T=A+(_^C&(m^_))+E[10]+4294925233&4294967295,A=C+(T<<17&4294967295|T>>>15),T=_+(m^A&(C^m))+E[11]+2304563134&4294967295,_=A+(T<<22&4294967295|T>>>10),T=m+(C^_&(A^C))+E[12]+1804603682&4294967295,m=_+(T<<7&4294967295|T>>>25),T=C+(A^m&(_^A))+E[13]+4254626195&4294967295,C=m+(T<<12&4294967295|T>>>20),T=A+(_^C&(m^_))+E[14]+2792965006&4294967295,A=C+(T<<17&4294967295|T>>>15),T=_+(m^A&(C^m))+E[15]+1236535329&4294967295,_=A+(T<<22&4294967295|T>>>10),T=m+(A^C&(_^A))+E[1]+4129170786&4294967295,m=_+(T<<5&4294967295|T>>>27),T=C+(_^A&(m^_))+E[6]+3225465664&4294967295,C=m+(T<<9&4294967295|T>>>23),T=A+(m^_&(C^m))+E[11]+643717713&4294967295,A=C+(T<<14&4294967295|T>>>18),T=_+(C^m&(A^C))+E[0]+3921069994&4294967295,_=A+(T<<20&4294967295|T>>>12),T=m+(A^C&(_^A))+E[5]+3593408605&4294967295,m=_+(T<<5&4294967295|T>>>27),T=C+(_^A&(m^_))+E[10]+38016083&4294967295,C=m+(T<<9&4294967295|T>>>23),T=A+(m^_&(C^m))+E[15]+3634488961&4294967295,A=C+(T<<14&4294967295|T>>>18),T=_+(C^m&(A^C))+E[4]+3889429448&4294967295,_=A+(T<<20&4294967295|T>>>12),T=m+(A^C&(_^A))+E[9]+568446438&4294967295,m=_+(T<<5&4294967295|T>>>27),T=C+(_^A&(m^_))+E[14]+3275163606&4294967295,C=m+(T<<9&4294967295|T>>>23),T=A+(m^_&(C^m))+E[3]+4107603335&4294967295,A=C+(T<<14&4294967295|T>>>18),T=_+(C^m&(A^C))+E[8]+1163531501&4294967295,_=A+(T<<20&4294967295|T>>>12),T=m+(A^C&(_^A))+E[13]+2850285829&4294967295,m=_+(T<<5&4294967295|T>>>27),T=C+(_^A&(m^_))+E[2]+4243563512&4294967295,C=m+(T<<9&4294967295|T>>>23),T=A+(m^_&(C^m))+E[7]+1735328473&4294967295,A=C+(T<<14&4294967295|T>>>18),T=_+(C^m&(A^C))+E[12]+2368359562&4294967295,_=A+(T<<20&4294967295|T>>>12),T=m+(_^A^C)+E[5]+4294588738&4294967295,m=_+(T<<4&4294967295|T>>>28),T=C+(m^_^A)+E[8]+2272392833&4294967295,C=m+(T<<11&4294967295|T>>>21),T=A+(C^m^_)+E[11]+1839030562&4294967295,A=C+(T<<16&4294967295|T>>>16),T=_+(A^C^m)+E[14]+4259657740&4294967295,_=A+(T<<23&4294967295|T>>>9),T=m+(_^A^C)+E[1]+2763975236&4294967295,m=_+(T<<4&4294967295|T>>>28),T=C+(m^_^A)+E[4]+1272893353&4294967295,C=m+(T<<11&4294967295|T>>>21),T=A+(C^m^_)+E[7]+4139469664&4294967295,A=C+(T<<16&4294967295|T>>>16),T=_+(A^C^m)+E[10]+3200236656&4294967295,_=A+(T<<23&4294967295|T>>>9),T=m+(_^A^C)+E[13]+681279174&4294967295,m=_+(T<<4&4294967295|T>>>28),T=C+(m^_^A)+E[0]+3936430074&4294967295,C=m+(T<<11&4294967295|T>>>21),T=A+(C^m^_)+E[3]+3572445317&4294967295,A=C+(T<<16&4294967295|T>>>16),T=_+(A^C^m)+E[6]+76029189&4294967295,_=A+(T<<23&4294967295|T>>>9),T=m+(_^A^C)+E[9]+3654602809&4294967295,m=_+(T<<4&4294967295|T>>>28),T=C+(m^_^A)+E[12]+3873151461&4294967295,C=m+(T<<11&4294967295|T>>>21),T=A+(C^m^_)+E[15]+530742520&4294967295,A=C+(T<<16&4294967295|T>>>16),T=_+(A^C^m)+E[2]+3299628645&4294967295,_=A+(T<<23&4294967295|T>>>9),T=m+(A^(_|~C))+E[0]+4096336452&4294967295,m=_+(T<<6&4294967295|T>>>26),T=C+(_^(m|~A))+E[7]+1126891415&4294967295,C=m+(T<<10&4294967295|T>>>22),T=A+(m^(C|~_))+E[14]+2878612391&4294967295,A=C+(T<<15&4294967295|T>>>17),T=_+(C^(A|~m))+E[5]+4237533241&4294967295,_=A+(T<<21&4294967295|T>>>11),T=m+(A^(_|~C))+E[12]+1700485571&4294967295,m=_+(T<<6&4294967295|T>>>26),T=C+(_^(m|~A))+E[3]+2399980690&4294967295,C=m+(T<<10&4294967295|T>>>22),T=A+(m^(C|~_))+E[10]+4293915773&4294967295,A=C+(T<<15&4294967295|T>>>17),T=_+(C^(A|~m))+E[1]+2240044497&4294967295,_=A+(T<<21&4294967295|T>>>11),T=m+(A^(_|~C))+E[8]+1873313359&4294967295,m=_+(T<<6&4294967295|T>>>26),T=C+(_^(m|~A))+E[15]+4264355552&4294967295,C=m+(T<<10&4294967295|T>>>22),T=A+(m^(C|~_))+E[6]+2734768916&4294967295,A=C+(T<<15&4294967295|T>>>17),T=_+(C^(A|~m))+E[13]+1309151649&4294967295,_=A+(T<<21&4294967295|T>>>11),T=m+(A^(_|~C))+E[4]+4149444226&4294967295,m=_+(T<<6&4294967295|T>>>26),T=C+(_^(m|~A))+E[11]+3174756917&4294967295,C=m+(T<<10&4294967295|T>>>22),T=A+(m^(C|~_))+E[2]+718787259&4294967295,A=C+(T<<15&4294967295|T>>>17),T=_+(C^(A|~m))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,E=this.B,A=this.h,C=0;C<m;){if(A==0)for(;C<=_;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<m;)if(E[A++]=w.charCodeAt(C++),A==this.blockSize){i(this,E),A=0;break}}else for(;C<m;)if(E[A++]=w[C++],A==this.blockSize){i(this,E),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)w[_++]=this.g[m]>>>E&255;return w};function s(w,m){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],E=!0,A=w.length-1;0<=A;A--){var C=w[A]|0;E&&C==m||(_[A]=C,E=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?s(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return M(d(-w));for(var m=[],_=1,E=0;w>=_;E++)m[E]=w/_|0,_*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return M(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),E=g,A=0;A<w.length;A+=8){var C=Math.min(8,w.length-A),T=parseInt(w.substring(A,A+C),m);8>C?(C=d(Math.pow(m,C)),E=E.j(C).add(d(T))):(E=E.j(_),E=E.add(d(T)))}return E}var g=c(0),y=c(1),P=c(16777216);t=a.prototype,t.m=function(){if(D(this))return-M(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(D(this))return"-"+M(this).toString(w);for(var m=d(Math.pow(w,6)),_=this,E="";;){var A=O(_,m).g;_=I(_,A.j(m));var C=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,R(_))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=I(this,w),D(w)?-1:R(w)?0:1};function M(w){for(var m=w.g.length,_=[],E=0;E<m;E++)_[E]=~w.g[E];return new a(_,~w.h).add(y)}t.abs=function(){return D(this)?M(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0,A=0;A<=m;A++){var C=E+(this.i(A)&65535)+(w.i(A)&65535),T=(C>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);E=T>>>16,C&=65535,T&=65535,_[A]=T<<16|C}return new a(_,_[_.length-1]&-2147483648?-1:0)};function I(w,m){return w.add(M(m))}t.j=function(w){if(R(this)||R(w))return g;if(D(this))return D(w)?M(this).j(M(w)):M(M(this).j(w));if(D(w))return M(this.j(M(w)));if(0>this.l(P)&&0>w.l(P))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<w.g.length;A++){var C=this.i(E)>>>16,T=this.i(E)&65535,_t=w.i(A)>>>16,lr=w.i(A)&65535;_[2*E+2*A]+=T*lr,v(_,2*E+2*A),_[2*E+2*A+1]+=C*lr,v(_,2*E+2*A+1),_[2*E+2*A+1]+=T*_t,v(_,2*E+2*A+1),_[2*E+2*A+2]+=C*_t,v(_,2*E+2*A+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function v(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function S(w,m){this.g=w,this.h=m}function O(w,m){if(R(m))throw Error("division by zero");if(R(w))return new S(g,g);if(D(w))return m=O(M(w),m),new S(M(m.g),M(m.h));if(D(m))return m=O(w,M(m)),new S(M(m.g),m.h);if(30<w.g.length){if(D(w)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,E=m;0>=E.l(w);)_=j(_),E=j(E);var A=U(_,1),C=U(E,1);for(E=U(E,2),_=U(_,2);!R(E);){var T=C.add(E);0>=T.l(w)&&(A=A.add(_),C=T),E=U(E,1),_=U(_,1)}return m=I(w,A.j(m)),new S(A,m)}for(A=g;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=d(_),T=C.j(m);D(T)||0<T.l(w);)_-=E,C=d(_),T=C.j(m);R(C)&&(C=y),A=A.add(C),w=I(w,T)}return new S(A,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&w.i(E);return new a(_,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|w.i(E);return new a(_,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^w.i(E);return new a(_,this.h^w.h)};function j(w){for(var m=w.g.length+1,_=[],E=0;E<m;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(_,w.h)}function U(w,m){var _=m>>5;m%=32;for(var E=w.g.length-_,A=[],C=0;C<E;C++)A[C]=0<m?w.i(C+_)>>>m|w.i(C+_+1)<<32-m:w.i(C+_);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,md=a}).apply(typeof Im<"u"?Im:typeof self<"u"?self:typeof window<"u"?window:{});var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var g_,ps,y_,Sa,Yc,v_,__,w_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof na=="object"&&na];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var k=o[f];if(!(k in h))break e;h=h[k]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,f=!1,k={next:function(){if(!f&&h<o.length){var N=h++;return{value:u(N,o[N]),done:!1}}return f=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,f),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function y(o,u,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,y.apply(null,arguments)}function P(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function R(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,k,N){for(var F=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)F[ie-2]=arguments[ie];return u.prototype[k].apply(f,F)}}function D(o){const u=o.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function M(o,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(c(f)){const k=o.length||0,N=f.length||0;o.length=k+N;for(let F=0;F<N;F++)o[k+F]=f[F]}else o.push(f)}}class I{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function v(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function w(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let h,f;for(let k=1;k<arguments.length;k++){f=arguments[k];for(h in f)o[h]=f[h];for(let N=0;N<_.length;N++)h=_[N],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function A(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function C(o){l.setTimeout(()=>{throw o},0)}function T(){var o=q;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class _t{constructor(){this.h=this.g=null}add(u,h){const f=lr.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var lr=new I(()=>new ji,o=>o.reset());class ji{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Yt,z=!1,q=new _t,G=()=>{const o=l.Promise.resolve(void 0);Yt=()=>{o.then(fe)}};var fe=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(h){C(h)}var u=lr;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}z=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Jt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function Zt(o,u){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(j){e:{try{O(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:en[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zt.aa.h.call(this)}}R(Zt,Ee);var en={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),k0=0;function C0(o,u,h,f,k){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=k,this.key=++k0,this.da=this.fa=!1}function wo(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Eo(o){this.src=o,this.g={},this.h=0}Eo.prototype.add=function(o,u,h,f,k){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var F=ql(o,u,f,k);return-1<F?(u=o[F],h||(u.fa=!1)):(u=new C0(u,this.src,N,!!f,k),u.fa=h,o.push(u)),u};function Wl(o,u){var h=u.type;if(h in o.g){var f=o.g[h],k=Array.prototype.indexOf.call(f,u,void 0),N;(N=0<=k)&&Array.prototype.splice.call(f,k,1),N&&(wo(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ql(o,u,h,f){for(var k=0;k<o.length;++k){var N=o[k];if(!N.da&&N.listener==u&&N.capture==!!h&&N.ha==f)return k}return-1}var Gl="closure_lm_"+(1e6*Math.random()|0),Kl={};function jd(o,u,h,f,k){if(Array.isArray(u)){for(var N=0;N<u.length;N++)jd(o,u[N],h,f,k);return null}return h=$d(h),o&&o[tn]?o.K(u,h,d(f)?!!f.capture:!1,k):P0(o,u,h,!1,f,k)}function P0(o,u,h,f,k,N){if(!u)throw Error("Invalid event type");var F=d(k)?!!k.capture:!!k,ie=Xl(o);if(ie||(o[Gl]=ie=new Eo(o)),h=ie.add(u,h,f,F,N),h.proxy)return h;if(f=R0(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Jt||(k=F),k===void 0&&(k=!1),o.addEventListener(u.toString(),f,k);else if(o.attachEvent)o.attachEvent(Bd(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function R0(){function o(h){return u.call(o.src,o.listener,h)}const u=x0;return o}function zd(o,u,h,f,k){if(Array.isArray(u))for(var N=0;N<u.length;N++)zd(o,u[N],h,f,k);else f=d(f)?!!f.capture:!!f,h=$d(h),o&&o[tn]?(o=o.i,u=String(u).toString(),u in o.g&&(N=o.g[u],h=ql(N,h,f,k),-1<h&&(wo(N[h]),Array.prototype.splice.call(N,h,1),N.length==0&&(delete o.g[u],o.h--)))):o&&(o=Xl(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ql(u,h,f,k)),(h=-1<o?u[o]:null)&&Ql(h))}function Ql(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[tn])Wl(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(Bd(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=Xl(u))?(Wl(h,o),h.h==0&&(h.src=null,u[Gl]=null)):wo(o)}}}function Bd(o){return o in Kl?Kl[o]:Kl[o]="on"+o}function x0(o,u){if(o.da)o=!0;else{u=new Zt(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ql(o),o=h.call(f,u)}return o}function Xl(o){return o=o[Gl],o instanceof Eo?o:null}var Yl="__closure_events_fn_"+(1e9*Math.random()>>>0);function $d(o){return typeof o=="function"?o:(o[Yl]||(o[Yl]=function(u){return o.handleEvent(u)}),o[Yl])}function je(){re.call(this),this.i=new Eo(this),this.M=this,this.F=null}R(je,re),je.prototype[tn]=!0,je.prototype.removeEventListener=function(o,u,h,f){zd(this,o,u,h,f)};function Je(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new Ee(u,o);else if(u instanceof Ee)u.target=u.target||o;else{var k=u;u=new Ee(f,o),E(u,k)}if(k=!0,h)for(var N=h.length-1;0<=N;N--){var F=u.g=h[N];k=To(F,f,!0,u)&&k}if(F=u.g=o,k=To(F,f,!0,u)&&k,k=To(F,f,!1,u)&&k,h)for(N=0;N<h.length;N++)F=u.g=h[N],k=To(F,f,!1,u)&&k}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)wo(h[f]);delete o.g[u],o.h--}}this.F=null},je.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},je.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function To(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,N=0;N<u.length;++N){var F=u[N];if(F&&!F.da&&F.capture==h){var ie=F.listener,De=F.ha||F.src;F.fa&&Wl(o.i,F),k=ie.call(De,f)!==!1&&k}}return k&&!f.defaultPrevented}function Hd(o,u,h){if(typeof o=="function")h&&(o=y(o,h));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Wd(o){o.g=Hd(()=>{o.g=null,o.i&&(o.i=!1,Wd(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class N0 extends re{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Wd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(o){re.call(this),this.h=o,this.g={}}R(zi,re);var qd=[];function Gd(o){U(o.g,function(u,h){this.g.hasOwnProperty(h)&&Ql(u)},o),o.g={}}zi.prototype.N=function(){zi.aa.N.call(this),Gd(this)},zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jl=l.JSON.stringify,D0=l.JSON.parse,O0=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Zl(){}Zl.prototype.h=null;function Kd(o){return o.h||(o.h=o.i())}function Qd(){}var Bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eu(){Ee.call(this,"d")}R(eu,Ee);function tu(){Ee.call(this,"c")}R(tu,Ee);var ur={},Xd=null;function Io(){return Xd=Xd||new je}ur.La="serverreachability";function Yd(o){Ee.call(this,ur.La,o)}R(Yd,Ee);function $i(o){const u=Io();Je(u,new Yd(u))}ur.STAT_EVENT="statevent";function Jd(o,u){Ee.call(this,ur.STAT_EVENT,o),this.stat=u}R(Jd,Ee);function Ze(o){const u=Io();Je(u,new Jd(u,o))}ur.Ma="timingevent";function Zd(o,u){Ee.call(this,ur.Ma,o),this.size=u}R(Zd,Ee);function Hi(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function V0(o,u,h,f,k,N){o.info(function(){if(o.g)if(N)for(var F="",ie=N.split("&"),De=0;De<ie.length;De++){var te=ie[De].split("=");if(1<te.length){var ze=te[0];te=te[1];var Be=ze.split("_");F=2<=Be.length&&Be[1]=="type"?F+(ze+"="+te+"&"):F+(ze+"=redacted&")}}else F=null;else F=N;return"XMLHTTP REQ ("+f+") [attempt "+k+"]: "+u+`
`+h+`
`+F})}function L0(o,u,h,f,k,N,F){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+k+"]: "+u+`
`+h+`
`+N+" "+F})}function jr(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+M0(o,h)+(f?" "+f:"")})}function b0(o,u){o.info(function(){return"TIMEOUT: "+u})}Wi.prototype.info=function(){};function M0(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var k=f[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var F=1;F<k.length;F++)k[F]=""}}}}return Jl(h)}catch{return u}}var So={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ef={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nu;function Ao(){}R(Ao,Zl),Ao.prototype.g=function(){return new XMLHttpRequest},Ao.prototype.i=function(){return{}},nu=new Ao;function kn(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tf}function tf(){this.i=null,this.g="",this.h=!1}var nf={},ru={};function iu(o,u,h){o.L=1,o.v=Ro(nn(u)),o.m=h,o.P=!0,rf(o,null)}function rf(o,u){o.F=Date.now(),ko(o),o.A=nn(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),vf(h.i,"t",f),o.C=0,h=o.j.J,o.h=new tf,o.g=bf(o.j,h?u:null,!o.m),0<o.O&&(o.M=new N0(y(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(qd[0]=k.toString()),k=qd);for(var N=0;N<k.length;N++){var F=jd(h,k[N],f||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),$i(),V0(o.i,o.u,o.A,o.l,o.R,o.m)}kn.prototype.ca=function(o){o=o.target;const u=this.M;u&&rn(o)==3?u.j():this.Y(o)},kn.prototype.Y=function(o){try{if(o==this.g)e:{const Be=rn(this.g);var u=this.g.Ba();const $r=this.g.Z();if(!(3>Be)&&(Be!=3||this.g&&(this.h.h||this.g.oa()||Af(this.g)))){this.J||Be!=4||u==7||(u==8||0>=$r?$i(3):$i(2)),su(this);var h=this.g.Z();this.X=h;t:if(sf(this)){var f=Af(this.g);o="";var k=f.length,N=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),qi(this);var F="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(N&&u==k-1)});f.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,L0(this.i,this.u,this.A,this.l,this.R,Be,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,De=this.g;if((ie=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ie)){var te=ie;break t}}te=null}if(h=te)jr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ou(this,h);else{this.o=!1,this.s=3,Ze(12),cr(this),qi(this);break e}}if(this.P){h=!0;let Pt;for(;!this.J&&this.C<F.length;)if(Pt=F0(this,F),Pt==ru){Be==4&&(this.s=4,Ze(14),h=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==nf){this.s=4,Ze(15),jr(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else jr(this.i,this.l,Pt,null),ou(this,Pt);if(sf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Be!=4||F.length!=0||this.h.h||(this.s=1,Ze(16),h=!1),this.o=this.o&&h,!h)jr(this.i,this.l,F,"[Invalid Chunked Response]"),cr(this),qi(this);else if(0<F.length&&!this.W){this.W=!0;var ze=this.j;ze.g==this&&ze.ba&&!ze.M&&(ze.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),du(ze),ze.M=!0,Ze(11))}}else jr(this.i,this.l,F,null),ou(this,F);Be==4&&cr(this),this.o&&!this.J&&(Be==4?Df(this.j,this):(this.o=!1,ko(this)))}else tw(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),cr(this),qi(this)}}}catch{}finally{}};function sf(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function F0(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?ru:(h=Number(u.substring(h,f)),isNaN(h)?nf:(f+=1,f+h>u.length?ru:(u=u.slice(f,f+h),o.C=f+h,u)))}kn.prototype.cancel=function(){this.J=!0,cr(this)};function ko(o){o.S=Date.now()+o.I,of(o,o.I)}function of(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Hi(y(o.ba,o),u)}function su(o){o.B&&(l.clearTimeout(o.B),o.B=null)}kn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(b0(this.i,this.A),this.L!=2&&($i(),Ze(17)),cr(this),this.s=2,qi(this)):of(this,this.S-o)};function qi(o){o.j.G==0||o.J||Df(o.j,o)}function cr(o){su(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Gd(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ou(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||au(h.h,o))){if(!o.K&&au(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var k=f;if(k[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Lo(h),Oo(h);else break e;hu(h),Ze(18)}}else h.za=k[1],0<h.za-h.T&&37500>k[2]&&h.F&&h.v==0&&!h.C&&(h.C=Hi(y(h.Za,h),6e3));if(1>=uf(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else dr(h,11)}else if((o.K||h.g==o)&&Lo(h),!v(u))for(k=h.Da.g.parse(u),u=0;u<k.length;u++){let te=k[u];if(h.T=te[0],te=te[1],h.G==2)if(te[0]=="c"){h.K=te[1],h.ia=te[2];const ze=te[3];ze!=null&&(h.la=ze,h.j.info("VER="+h.la));const Be=te[4];Be!=null&&(h.Aa=Be,h.j.info("SVER="+h.Aa));const $r=te[5];$r!=null&&typeof $r=="number"&&0<$r&&(f=1.5*$r,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Pt=o.g;if(Pt){const Mo=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mo){var N=f.h;N.g||Mo.indexOf("spdy")==-1&&Mo.indexOf("quic")==-1&&Mo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(lu(N,N.h),N.h=null))}if(f.D){const fu=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;fu&&(f.ya=fu,ae(f.I,f.D,fu))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var F=o;if(f.qa=Lf(f,f.J?f.ia:null,f.W),F.K){cf(f.h,F);var ie=F,De=f.L;De&&(ie.I=De),ie.B&&(su(ie),ko(ie)),f.g=F}else xf(f);0<h.i.length&&Vo(h)}else te[0]!="stop"&&te[0]!="close"||dr(h,7);else h.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?dr(h,7):cu(h):te[0]!="noop"&&h.l&&h.l.ta(te),h.v=0)}}$i(4)}catch{}}var U0=class{constructor(o,u){this.g=o,this.map=u}};function af(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lf(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function uf(o){return o.h?1:o.g?o.g.size:0}function au(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function lu(o,u){o.g?o.g.add(u):o.h=u}function cf(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}af.prototype.cancel=function(){if(this.i=hf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hf(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return D(o.i)}function j0(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function z0(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const f in o)u[h++]=f;return u}}}function df(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=z0(o),f=j0(o),k=f.length,N=0;N<k;N++)u.call(void 0,f[N],h&&h[N],o)}var ff=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function B0(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),k=null;if(0<=f){var N=o[h].substring(0,f);k=o[h].substring(f+1)}else N=o[h];u(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function hr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof hr){this.h=o.h,Co(this,o.j),this.o=o.o,this.g=o.g,Po(this,o.s),this.l=o.l;var u=o.i,h=new Qi;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),pf(this,h),this.m=o.m}else o&&(u=String(o).match(ff))?(this.h=!1,Co(this,u[1]||"",!0),this.o=Gi(u[2]||""),this.g=Gi(u[3]||"",!0),Po(this,u[4]),this.l=Gi(u[5]||"",!0),pf(this,u[6]||"",!0),this.m=Gi(u[7]||"")):(this.h=!1,this.i=new Qi(null,this.h))}hr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ki(u,mf,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ki(u,mf,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Ki(h,h.charAt(0)=="/"?W0:H0,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Ki(h,G0)),o.join("")};function nn(o){return new hr(o)}function Co(o,u,h){o.j=h?Gi(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Po(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function pf(o,u,h){u instanceof Qi?(o.i=u,K0(o.i,o.h)):(h||(u=Ki(u,q0)),o.i=new Qi(u,o.h))}function ae(o,u,h){o.i.set(u,h)}function Ro(o){return ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Gi(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ki(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,$0),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function $0(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var mf=/[#\/\?@]/g,H0=/[#\?:]/g,W0=/[#\?]/g,q0=/[#\?@]/g,G0=/#/g;function Qi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Cn(o){o.g||(o.g=new Map,o.h=0,o.i&&B0(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=Qi.prototype,t.add=function(o,u){Cn(this),this.i=null,o=zr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function gf(o,u){Cn(o),u=zr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function yf(o,u){return Cn(o),u=zr(o,u),o.g.has(u)}t.forEach=function(o,u){Cn(this),this.g.forEach(function(h,f){h.forEach(function(k){o.call(u,k,f,this)},this)},this)},t.na=function(){Cn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const k=o[f];for(let N=0;N<k.length;N++)h.push(u[f])}return h},t.V=function(o){Cn(this);let u=[];if(typeof o=="string")yf(this,o)&&(u=u.concat(this.g.get(zr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},t.set=function(o,u){return Cn(this),this.i=null,o=zr(this,o),yf(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function vf(o,u,h){gf(o,u),0<h.length&&(o.i=null,o.g.set(zr(o,u),D(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const N=encodeURIComponent(String(f)),F=this.V(f);for(f=0;f<F.length;f++){var k=N;F[f]!==""&&(k+="="+encodeURIComponent(String(F[f]))),o.push(k)}}return this.i=o.join("&")};function zr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function K0(o,u){u&&!o.j&&(Cn(o),o.i=null,o.g.forEach(function(h,f){var k=f.toLowerCase();f!=k&&(gf(this,f),vf(this,k,h))},o)),o.j=u}function Q0(o,u){const h=new Wi;if(l.Image){const f=new Image;f.onload=P(Pn,h,"TestLoadImage: loaded",!0,u,f),f.onerror=P(Pn,h,"TestLoadImage: error",!1,u,f),f.onabort=P(Pn,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=P(Pn,h,"TestLoadImage: timeout",!1,u,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function X0(o,u){const h=new Wi,f=new AbortController,k=setTimeout(()=>{f.abort(),Pn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(N=>{clearTimeout(k),N.ok?Pn(h,"TestPingServer: ok",!0,u):Pn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),Pn(h,"TestPingServer: error",!1,u)})}function Pn(o,u,h,f,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),f(h)}catch{}}function Y0(){this.g=new O0}function J0(o,u,h){const f=h||"";try{df(o,function(k,N){let F=k;d(k)&&(F=Jl(k)),u.push(f+N+"="+encodeURIComponent(F))})}catch(k){throw u.push(f+"type="+encodeURIComponent("_badmap")),k}}function xo(o){this.l=o.Ub||null,this.j=o.eb||!1}R(xo,Zl),xo.prototype.g=function(){return new No(this.l,this.j)},xo.prototype.i=function(o){return function(){return o}}({});function No(o,u){je.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(No,je),t=No.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Yi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_f(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function _f(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Xi(this):Yi(this),this.readyState==3&&_f(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Xi(this))},t.Qa=function(o){this.g&&(this.response=o,Xi(this))},t.ga=function(){this.g&&Xi(this)};function Xi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Yi(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Yi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(No.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wf(o){let u="";return U(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function uu(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=wf(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ae(o,u,h))}function ve(o){je.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ve,je);var Z0=/^https?$/i,ew=["POST","PUT"];t=ve.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nu.g(),this.v=this.o?Kd(this.o):Kd(nu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(N){Ef(this,N);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var k in f)h.set(k,f[k]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const N of f.keys())h.set(N,f.get(N));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(N=>N.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ew,u,void 0))||f||k||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,F]of h)this.g.setRequestHeader(N,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sf(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){Ef(this,N)}};function Ef(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Tf(o),Do(o)}function Tf(o){o.A||(o.A=!0,Je(o,"complete"),Je(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Je(this,"complete"),Je(this,"abort"),Do(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Do(this,!0)),ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?If(this):this.bb())},t.bb=function(){If(this)};function If(o){if(o.h&&typeof a<"u"&&(!o.v[1]||rn(o)!=4||o.Z()!=2)){if(o.u&&rn(o)==4)Hd(o.Ea,0,o);else if(Je(o,"readystatechange"),rn(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=F===0){var k=String(o.D).match(ff)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),f=!Z0.test(k?k.toLowerCase():"")}h=f}if(h)Je(o,"complete"),Je(o,"success");else{o.m=6;try{var N=2<rn(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",Tf(o)}}finally{Do(o)}}}}function Do(o,u){if(o.g){Sf(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Je(o,"ready");try{h.onreadystatechange=f}catch{}}}function Sf(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function rn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),D0(u)}};function Af(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function tw(o){const u={};o=(o.g&&2<=rn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(v(o[f]))continue;var h=A(o[f]);const k=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const N=u[k]||[];u[k]=N,N.push(h)}w(u,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function kf(o){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ji("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ji("baseRetryDelayMs",5e3,o),this.cb=Ji("retryDelaySeedMs",1e4,o),this.Wa=Ji("forwardChannelMaxRetries",2,o),this.wa=Ji("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new af(o&&o.concurrentRequestLimit),this.Da=new Y0,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=kf.prototype,t.la=8,t.G=1,t.connect=function(o,u,h,f){Ze(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Lf(this,null,this.W),Vo(this)};function cu(o){if(Cf(o),o.G==3){var u=o.U++,h=nn(o.I);if(ae(h,"SID",o.K),ae(h,"RID",u),ae(h,"TYPE","terminate"),Zi(o,h),u=new kn(o,o.j,u),u.L=2,u.v=Ro(nn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=bf(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ko(u)}Vf(o)}function Oo(o){o.g&&(du(o),o.g.cancel(),o.g=null)}function Cf(o){Oo(o),o.u&&(l.clearTimeout(o.u),o.u=null),Lo(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Vo(o){if(!lf(o.h)&&!o.s){o.s=!0;var u=o.Ga;Yt||G(),z||(Yt(),z=!0),q.add(u,o),o.B=0}}function nw(o,u){return uf(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Hi(y(o.Ga,o,u),Of(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new kn(this,this.j,o);let N=this.o;if(this.S&&(N?(N=m(N),E(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Rf(this,k,u),h=nn(this.I),ae(h,"RID",o),ae(h,"CVER",22),this.D&&ae(h,"X-HTTP-Session-Id",this.D),Zi(this,h),N&&(this.O?u="headers="+encodeURIComponent(String(wf(N)))+"&"+u:this.m&&uu(h,this.m,N)),lu(this.h,k),this.Ua&&ae(h,"TYPE","init"),this.P?(ae(h,"$req",u),ae(h,"SID","null"),k.T=!0,iu(k,h,null)):iu(k,h,u),this.G=2}}else this.G==3&&(o?Pf(this,o):this.i.length==0||lf(this.h)||Pf(this))};function Pf(o,u){var h;u?h=u.l:h=o.U++;const f=nn(o.I);ae(f,"SID",o.K),ae(f,"RID",h),ae(f,"AID",o.T),Zi(o,f),o.m&&o.o&&uu(f,o.m,o.o),h=new kn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Rf(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),lu(o.h,h),iu(h,f,u)}function Zi(o,u){o.H&&U(o.H,function(h,f){ae(u,f,h)}),o.l&&df({},function(h,f){ae(u,f,h)})}function Rf(o,u,h){h=Math.min(o.i.length,h);var f=o.l?y(o.l.Na,o.l,o):null;e:{var k=o.i;let N=-1;for(;;){const F=["count="+h];N==-1?0<h?(N=k[0].g,F.push("ofs="+N)):N=0:F.push("ofs="+N);let ie=!0;for(let De=0;De<h;De++){let te=k[De].g;const ze=k[De].map;if(te-=N,0>te)N=Math.max(0,k[De].g-100),ie=!1;else try{J0(ze,F,"req"+te+"_")}catch{f&&f(ze)}}if(ie){f=F.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function xf(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Yt||G(),z||(Yt(),z=!0),q.add(u,o),o.v=0}}function hu(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Hi(y(o.Fa,o),Of(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Nf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Hi(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),Oo(this),Nf(this))};function du(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Nf(o){o.g=new kn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=nn(o.qa);ae(u,"RID","rpc"),ae(u,"SID",o.K),ae(u,"AID",o.T),ae(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ae(u,"TO",o.ja),ae(u,"TYPE","xmlhttp"),Zi(o,u),o.m&&o.o&&uu(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ro(nn(u)),h.m=null,h.P=!0,rf(h,o)}t.Za=function(){this.C!=null&&(this.C=null,Oo(this),hu(this),Ze(19))};function Lo(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Df(o,u){var h=null;if(o.g==u){Lo(o),du(o),o.g=null;var f=2}else if(au(o.h,u))h=u.D,cf(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;f=Io(),Je(f,new Zd(f,h)),Vo(o)}else xf(o);else if(k=u.s,k==3||k==0&&0<u.X||!(f==1&&nw(o,u)||f==2&&hu(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),k){case 1:dr(o,5);break;case 4:dr(o,10);break;case 3:dr(o,6);break;default:dr(o,2)}}}function Of(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function dr(o,u){if(o.j.info("Error code "+u),u==2){var h=y(o.fb,o),f=o.Xa;const k=!f;f=new hr(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Co(f,"https"),Ro(f),k?Q0(f.toString(),h):X0(f.toString(),h)}else Ze(2);o.G=0,o.l&&o.l.sa(u),Vf(o),Cf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function Vf(o){if(o.G=0,o.ka=[],o.l){const u=hf(o.h);(u.length!=0||o.i.length!=0)&&(M(o.ka,u),M(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Lf(o,u,h){var f=h instanceof hr?nn(h):new hr(h);if(f.g!="")u&&(f.g=u+"."+f.g),Po(f,f.s);else{var k=l.location;f=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var N=new hr(null);f&&Co(N,f),u&&(N.g=u),k&&Po(N,k),h&&(N.l=h),f=N}return h=o.D,u=o.ya,h&&u&&ae(f,h,u),ae(f,"VER",o.la),Zi(o,f),f}function bf(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ve(new xo({eb:h})):new ve(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mf(){}t=Mf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function bo(){}bo.prototype.g=function(o,u){return new ht(o,u)};function ht(o,u){je.call(this),this.g=new kf(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!v(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!v(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Br(this)}R(ht,je),ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){cu(this.g)},ht.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Jl(o),o=h);u.i.push(new U0(u.Ya++,o)),u.G==3&&Vo(u)},ht.prototype.N=function(){this.g.l=null,delete this.j,cu(this.g),delete this.g,ht.aa.N.call(this)};function Ff(o){eu.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(Ff,eu);function Uf(){tu.call(this),this.status=1}R(Uf,tu);function Br(o){this.g=o}R(Br,Mf),Br.prototype.ua=function(){Je(this.g,"a")},Br.prototype.ta=function(o){Je(this.g,new Ff(o))},Br.prototype.sa=function(o){Je(this.g,new Uf)},Br.prototype.ra=function(){Je(this.g,"b")},bo.prototype.createWebChannel=bo.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,w_=function(){return new bo},__=function(){return Io()},v_=ur,Yc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},So.NO_ERROR=0,So.TIMEOUT=8,So.HTTP_ERROR=6,Sa=So,ef.COMPLETE="complete",y_=ef,Qd.EventType=Bi,Bi.OPEN="a",Bi.CLOSE="b",Bi.ERROR="c",Bi.MESSAGE="d",je.prototype.listen=je.prototype.K,ps=Qd,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,g_=ve}).apply(typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{});const Sm="@firebase/firestore",Am="4.8.0";/**
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
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
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
 */let Mi="11.10.0";/**
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
 */const Dr=new rd("@firebase/firestore");function Wr(){return Dr.logLevel}function $(t,...e){if(Dr.logLevel<=Y.DEBUG){const n=e.map(gd);Dr.debug(`Firestore (${Mi}): ${t}`,...n)}}function Or(t,...e){if(Dr.logLevel<=Y.ERROR){const n=e.map(gd);Dr.error(`Firestore (${Mi}): ${t}`,...n)}}function Ai(t,...e){if(Dr.logLevel<=Y.WARN){const n=e.map(gd);Dr.warn(`Firestore (${Mi}): ${t}`,...n)}}function gd(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,E_(t,r,n)}function E_(t,e,n){let r=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Or(r),new Error(r)}function we(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||E_(e,i,r)}function oe(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class T_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class yA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vA{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new T_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new qe(e)}}class _A{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new _A(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class km{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){we(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new km(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new km(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function IA(){return new TextEncoder}/**
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
 */class yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=TA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Jc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Z(r,i);{const s=IA(),a=SA(s.encode(Cm(t,n)),s.encode(Cm(e,n)));return a!==0?a:Z(r,i)}}n+=r>65535?2:1}return Z(t.length,e.length)}function Cm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function SA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Z(t[n],e[n]);return Z(t.length,e.length)}function ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Pm="__name__";class $t{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=$t.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Z(e.length,n.length)}static compareSegments(e,n){const r=$t.isNumericId(e),i=$t.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?$t.extractNumericId(e).compare($t.extractNumericId(n)):Jc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return md.fromString(e.substring(4,e.length-2))}}class me extends $t{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const AA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends $t{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return AA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pm}static keyField(){return new be([Pm])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}/**
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
 */function I_(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kA(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rm(t){if(!K.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xm(t){if(K.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function S_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function vd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function A_(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vd(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ae(t,e){const n={typeString:t};return e&&(n.value=e),n}function po(t,e){if(!S_(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Nm=-62135596800,Dm=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Dm);return new de(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Nm)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dm}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(po(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:Ae("string",de._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new de(0,0))}static max(){return new ce(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xs=-1;function CA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new tr(i,K.empty(),e)}function PA(t){return new tr(t.readTime,t.key,Xs)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(ce.min(),K.empty(),Xs)}static max(){return new tr(ce.max(),K.empty(),Xs)}}function RA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const xA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _d(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==xA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},c=>r(c))}),a=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const d=c;n(e[d]).next(p=>{a[d]=p,++l,l===s&&r(a)},p=>i(p))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function DA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}wd.ue=-1;/**
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
 */const Ed=-1;function Td(t){return t==null}function al(t){return t===0&&1/t==-1/0}function OA(t){return typeof t=="number"&&Number.isInteger(t)&&!al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const k_="";function VA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Om(e)),e=LA(t.get(n),e);return Om(e)}function LA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case k_:n+="";break;default:n+=s}}return n}function Om(t){return t+k_+""}/**
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
 */function Vm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function C_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ra(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ra(this.root,e,this.comparator,!1)}getReverseIterator(){return new ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ra(this.root,e,this.comparator,!0)}}class ra{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lm(this.data.getIterator())}getIteratorFrom(e){return new Lm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class Lm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Fe(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class bA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bA("Invalid base64 string: "+s):s}}(e);return new Qt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const MA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(we(!!t,39018),typeof t=="string"){let e=0;const n=MA.exec(t);if(we(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
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
 */const P_="server_timestamp",R_="__type__",x_="__previous_value__",N_="__local_write_time__";function Id(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[R_])===null||n===void 0?void 0:n.stringValue)===P_}function Sd(t){const e=t.mapValue.fields[x_];return Id(e)?Sd(e):e}function ll(t){const e=Vr(t.mapValue.fields[N_].timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class FA{constructor(e,n,r,i,s,a,l,c,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d,this.isUsingEmulator=p}}const ul="(default)";class cl{constructor(e,n){this.projectId=e,this.database=n||ul}static empty(){return new cl("","")}get isDefaultDatabase(){return this.database===ul}isEqual(e){return e instanceof cl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const D_="__type__",UA="__max__",ia={mapValue:{}},O_="__vector__",Zc="value";function Lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Id(t)?4:zA(t)?9007199254740991:jA(t)?10:11:Q(28295,{value:t})}function Xt(t,e){if(t===e)return!0;const n=Lr(t);if(n!==Lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ll(t).isEqual(ll(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Vr(i.timestampValue),l=Vr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ci(i.bytesValue).isEqual(Ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Le(i.doubleValue),l=Le(s.doubleValue);return a===l?al(a)===al(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return ki(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Vm(a)!==Vm(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Xt(a[c],l[c])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Ys(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Pi(t,e){if(t===e)return 0;const n=Lr(t),r=Lr(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Le(s.integerValue||s.doubleValue),c=Le(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return bm(t.timestampValue,e.timestampValue);case 4:return bm(ll(t),ll(e));case 5:return Jc(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Ci(s),c=Ci(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let d=0;d<l.length&&d<c.length;d++){const p=Z(l[d],c[d]);if(p!==0)return p}return Z(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=Z(Le(s.latitude),Le(a.latitude));return l!==0?l:Z(Le(s.longitude),Le(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Mm(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,c,d,p;const g=s.fields||{},y=a.fields||{},P=(l=g[Zc])===null||l===void 0?void 0:l.arrayValue,R=(c=y[Zc])===null||c===void 0?void 0:c.arrayValue,D=Z(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=R==null?void 0:R.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:Mm(P,R)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===ia.mapValue&&a===ia.mapValue)return 0;if(s===ia.mapValue)return 1;if(a===ia.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),d=a.fields||{},p=Object.keys(d);c.sort(),p.sort();for(let g=0;g<c.length&&g<p.length;++g){const y=Jc(c[g],p[g]);if(y!==0)return y;const P=Pi(l[c[g]],d[p[g]]);if(P!==0)return P}return Z(c.length,p.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{le:n})}}function bm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Vr(t),r=Vr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Mm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Pi(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function Ri(t){return eh(t)}function eh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=eh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${eh(n.fields[a])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function Aa(t){switch(Lr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sd(t);return e?16+Aa(e):16;case 5:return 2*t.stringValue.length;case 6:return Ci(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Aa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Fi(r.fields,(s,a)=>{i+=s.length+Aa(a)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function th(t){return!!t&&"integerValue"in t}function Ad(t){return!!t&&"arrayValue"in t}function ka(t){return!!t&&"mapValue"in t}function jA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[D_])===null||n===void 0?void 0:n.stringValue)===O_}function ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===UA}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ks(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=ks(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(ks(this.value))}}function V_(t){const e=[];return Fi(t.fields,(n,r)=>{const i=new be([n]);if(ka(r)){const s=V_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Mt(e)}/**
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
 */class Ot{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ot(e,0,ce.min(),ce.min(),ce.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ot(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new Ot(e,2,n,ce.min(),ce.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,ce.min(),ce.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hl{constructor(e,n){this.position=e,this.inclusive=n}}function Fm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(a.referenceValue),n.key):r=Pi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Um(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function BA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class L_{}class xe extends L_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HA(e,n,r):n==="array-contains"?new GA(e,r):n==="in"?new KA(e,r):n==="not-in"?new QA(e,r):n==="array-contains-any"?new XA(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WA(e,r):new qA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Pi(n,this.value)):n!==null&&Lr(this.value)===Lr(n)&&this.matchesComparison(Pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends L_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new nr(e,n)}matches(e){return b_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function b_(t){return t.op==="and"}function M_(t){return $A(t)&&b_(t)}function $A(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function nh(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Ri(t.value);if(M_(t))return t.filters.map(e=>nh(e)).join(",");{const e=t.filters.map(n=>nh(n)).join(",");return`${t.op}(${e})`}}function F_(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(t,e):t instanceof nr?function(r,i){return i instanceof nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&F_(a,i.filters[l]),!0):!1}(t,e):void Q(19439)}function U_(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ri(n.value)}`}(t):t instanceof nr?function(n){return n.op.toString()+" {"+n.getFilters().map(U_).join(" ,")+"}"}(t):"Filter"}class HA extends xe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class WA extends xe{constructor(e,n){super(e,"in",n),this.keys=j_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qA extends xe{constructor(e,n){super(e,"not-in",n),this.keys=j_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function j_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class GA extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ad(n)&&Ys(n.arrayValue,this.value)}}class KA extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ys(this.value.arrayValue,n)}}class QA extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ys(this.value.arrayValue,n)}}class XA extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ad(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}/**
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
 */class YA{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function jm(t,e=null,n=[],r=[],i=null,s=null,a=null){return new YA(t,e,n,r,i,s,a)}function kd(t){const e=oe(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Td(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ri(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ri(r)).join(",")),e.Pe=n}return e.Pe}function Cd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!BA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!F_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Um(t.startAt,e.startAt)&&Um(t.endAt,e.endAt)}/**
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
 */class Ml{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function JA(t,e,n,r,i,s,a,l){return new Ml(t,e,n,r,i,s,a,l)}function ZA(t){return new Ml(t)}function zm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ek(t){return t.collectionGroup!==null}function Cs(t){const e=oe(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Fe(be.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new dl(s,r))}),n.has(be.keyField().canonicalString())||e.Te.push(new dl(be.keyField(),r))}return e.Te}function Ir(t){const e=oe(t);return e.Ie||(e.Ie=tk(e,Cs(t))),e.Ie}function tk(t,e){if(t.limitType==="F")return jm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new dl(i.field,s)});const n=t.endAt?new hl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hl(t.startAt.position,t.startAt.inclusive):null;return jm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rh(t,e,n){return new Ml(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function z_(t,e){return Cd(Ir(t),Ir(e))&&t.limitType===e.limitType}function B_(t){return`${kd(Ir(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>U_(i)).join(", ")}]`),Td(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ri(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ri(i)).join(",")),`Target(${r})`}(Ir(t))}; limitType=${t.limitType})`}function Pd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Cs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const d=Fm(a,l,c);return a.inclusive?d<=0:d<0}(r.startAt,Cs(r),i)||r.endAt&&!function(a,l,c){const d=Fm(a,l,c);return a.inclusive?d>=0:d>0}(r.endAt,Cs(r),i))}(t,e)}function nk(t){return(e,n)=>{let r=!1;for(const i of Cs(t)){const s=rk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,a,l){const c=a.data.field(s),d=l.data.field(s);return c!==null&&d!==null?Pi(c,d):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
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
 */class Fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return C_(this.inner)}size(){return this.innerSize}}/**
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
 */const ik=new ct(K.comparator);function fl(){return ik}const $_=new ct(K.comparator);function sa(...t){let e=$_;for(const n of t)e=e.insert(n.key,n);return e}function H_(t){let e=$_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return Ps()}function W_(){return Ps()}function Ps(){return new Fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const sk=new ct(K.comparator),ok=new Fe(K.comparator);function Ke(...t){let e=ok;for(const n of t)e=e.add(n);return e}const ak=new Fe(Z);function lk(){return ak}/**
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
 */function Rd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:al(e)?"-0":e}}function q_(t){return{integerValue:""+t}}function uk(t,e){return OA(e)?q_(e):Rd(t,e)}/**
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
 */class Fl{constructor(){this._=void 0}}function ck(t,e,n){return t instanceof Js?function(i,s){const a={fields:{[R_]:{stringValue:P_},[N_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Id(s)&&(s=Sd(s)),s&&(a.fields[x_]=s),{mapValue:a}}(n,e):t instanceof Zs?K_(t,e):t instanceof eo?Q_(t,e):function(i,s){const a=G_(i,s),l=Bm(a)+Bm(i.Ee);return th(a)&&th(i.Ee)?q_(l):Rd(i.serializer,l)}(t,e)}function hk(t,e,n){return t instanceof Zs?K_(t,e):t instanceof eo?Q_(t,e):n}function G_(t,e){return t instanceof pl?function(r){return th(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Js extends Fl{}class Zs extends Fl{constructor(e){super(),this.elements=e}}function K_(t,e){const n=X_(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends Fl{constructor(e){super(),this.elements=e}}function Q_(t,e){let n=X_(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class pl extends Fl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Bm(t){return Le(t.integerValue||t.doubleValue)}function X_(t){return Ad(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class dk{constructor(e,n){this.field=e,this.transform=n}}function fk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Zs&&i instanceof Zs||r instanceof eo&&i instanceof eo?ki(r.elements,i.elements,Xt):r instanceof pl&&i instanceof pl?Xt(r.Ee,i.Ee):r instanceof Js&&i instanceof Js}(t.transform,e.transform)}class pk{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ul{}function Y_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Z_(t.key,fn.none()):new go(t.key,t.data,fn.none());{const n=t.data,r=Vt.empty();let i=new Fe(be.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Ur(t.key,r,new Mt(i.toArray()),fn.none())}}function mk(t,e,n){t instanceof go?function(i,s,a){const l=i.value.clone(),c=Hm(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(i,s,a){if(!Ca(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Hm(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(J_(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Rs(t,e,n,r){return t instanceof go?function(s,a,l,c){if(!Ca(s.precondition,a))return l;const d=s.value.clone(),p=Wm(s.fieldTransforms,c,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(s,a,l,c){if(!Ca(s.precondition,a))return l;const d=Wm(s.fieldTransforms,c,a),p=a.data;return p.setAll(J_(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,a,l){return Ca(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function gk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=G_(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function $m(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ki(r,i,(s,a)=>fk(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends Ul{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends Ul{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function J_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hm(t,e,n){const r=new Map;we(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,hk(a,l,n[i]))}return r}function Wm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,ck(s,a,e))}return r}class Z_ extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yk extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=W_();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const c=Y_(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ke())}isEqual(e){return this.batchId===e.batchId&&ki(this.mutations,e.mutations,(n,r)=>$m(n,r))&&ki(this.baseMutations,e.baseMutations,(n,r)=>$m(n,r))}}class xd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return sk}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new xd(e,n,r,i)}}/**
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
 */class _k{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Ie,J;function wk(t){switch(t){case L.OK:return Q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function Ek(t){if(t===void 0)return Or("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ie.OK:return L.OK;case Ie.CANCELLED:return L.CANCELLED;case Ie.UNKNOWN:return L.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return L.INTERNAL;case Ie.UNAVAILABLE:return L.UNAVAILABLE;case Ie.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ie.NOT_FOUND:return L.NOT_FOUND;case Ie.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ie.ABORTED:return L.ABORTED;case Ie.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ie.DATA_LOSS:return L.DATA_LOSS;default:return Q(39323,{code:t})}}(J=Ie||(Ie={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new md([4294967295,4294967295],0);class Tk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ih(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ik(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sk(t,e){return ih(t,e.toTimestamp())}function mi(t){return we(!!t,49232),ce.fromTimestamp(function(n){const r=Vr(n);return new de(r.seconds,r.nanos)}(t))}function e0(t,e){return sh(t,e).canonicalString()}function sh(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ak(t){const e=me.fromString(t);return we(Ok(e),10190,{key:e.toString()}),e}function oh(t,e){return e0(t.databaseId,e.path)}function kk(t){const e=Ak(t);return e.length===4?me.emptyPath():Pk(e)}function Ck(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pk(t){return we(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function qm(t,e,n){return{name:oh(t,e),fields:n.value.mapValue.fields}}function Rk(t,e){let n;if(e instanceof go)n={update:qm(t,e.key,e.value)};else if(e instanceof Z_)n={delete:oh(t,e.key)};else if(e instanceof Ur)n={update:qm(t,e.key,e.data),updateMask:Dk(e.fieldMask)};else{if(!(e instanceof yk))return Q(16599,{Rt:e.type});n={verify:oh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Js)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pl)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw Q(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Sk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function xk(t,e){return t&&t.length>0?(we(e!==void 0,14353),t.map(n=>function(i,s){let a=i.updateTime?mi(i.updateTime):mi(s);return a.isEqual(ce.min())&&(a=mi(s)),new pk(a,i.transformResults||[])}(n,e))):[]}function Nk(t){let e=kk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const y=t0(g);return y instanceof nr&&M_(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(y=>function(R){return new dl(qr(R.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,Td(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(g){const y=!!g.before,P=g.values||[];return new hl(P,y)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const y=!g.before,P=g.values||[];return new hl(P,y)}(n.endAt)),JA(e,i,a,s,l,"F",c,d)}function t0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qr(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qr(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qr(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=qr(n.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return xe.create(qr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nr.create(n.compositeFilter.filters.map(r=>t0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function qr(t){return be.fromServerFormat(t.fieldPath)}function Dk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ok(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vk{constructor(e){this.gt=e}}function Lk(t){const e=Nk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rh(e,e.limit,"L"):e}/**
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
 */class bk{constructor(){this.Dn=new Mk}addToCollectionParentIndex(e,n){return this.Dn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(tr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Mk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(me.comparator)).toArray()}}/**
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
 */const Gm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},n0=41943040;class it{static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(n0,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);/**
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
 */class xi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new xi(0)}static ur(){return new xi(-1)}}/**
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
 */const Km="LruGarbageCollector",Fk=1048576;function Qm([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class Uk{constructor(e){this.Tr=e,this.buffer=new Fe(Qm),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class jk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){$(Km,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){mo(n)?$(Km,"Ignoring IndexedDB error during garbage collection: ",n):await _d(n)}await this.Rr(3e5)})}}class zk{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(wd.ue);const r=new Uk(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Gm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gm):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,a,l,c,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(s=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),Wr()<=Y.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(d-c)+`ms
Total Duration: ${d-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function Bk(t,e){return new zk(t,e)}/**
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
 */class $k{constructor(){this.changes=new Fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Hk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Wk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Rs(r.mutation,i,Mt.empty(),de.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ke()){const i=_r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=sa();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ke()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=fl();const a=Ps(),l=function(){return Ps()}();return n.forEach((c,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ur)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Rs(p.mutation,d,p.mutation.getFieldMask(),de.now())):a.set(d.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((d,p)=>a.set(d,p)),n.forEach((d,p)=>{var g;return l.set(d,new Hk(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ps();let i=new ct((a,l)=>a-l),s=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let p=r.get(c)||Mt.empty();p=l.applyToLocalView(d,p),r.set(c,p);const g=(i.get(l.batchId)||Ke()).add(c);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,p=c.value,g=W_();p.forEach(y=>{if(!s.has(y)){const P=Y_(n.get(y),r.get(y));P!==null&&g.set(y,P),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return K.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ek(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(_r());let l=Xs,c=s;return a.next(d=>V.forEach(d,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{c=c.insert(p,y)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,c,d,Ke())).next(p=>({batchId:l,changes:H_(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=sa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=sa();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,c=>{const d=function(g,y){return new Ml(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((c,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ot.newInvalidDocument(p)))});let l=sa();return a.forEach((c,d)=>{const p=s.get(c);p!==void 0&&Rs(p.mutation,d,Mt.empty(),de.now()),Pd(n,d)&&(l=l.insert(c,d))}),l})}}/**
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
 */class qk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return V.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mi(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:Lk(i.bundledQuery),readTime:mi(i.readTime)}}(n)),V.resolve()}}/**
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
 */class Gk{constructor(){this.overlays=new ct(K.comparator),this.kr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=_r(),s=n.length+1,a=new K(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ct((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=_r(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=_r(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return V.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _k(n,r));let s=this.kr.get(n);s===void 0&&(s=Ke(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
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
 */class Kk{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Nd{constructor(){this.qr=new Fe(Pe.Qr),this.$r=new Fe(Pe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Pe(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new K(new me([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.$r.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new K(new me([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=Ke();return this.$r.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return K.comparator(e.key,n.key)||Z(e.Hr,n.Hr)}static Ur(e,n){return Z(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
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
 */class Qk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Fe(Pe.Qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vk(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new Pe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Ed:this.er-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],a=>{const l=this.Zr(a.Hr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(Z);return n.forEach(i=>{const s=new Pe(i,0),a=new Pe(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],l=>{r=r.add(l.Hr)})}),V.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const a=new Pe(new K(s),0);let l=new Fe(Z);return this.Yr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.Hr)),!0)},a),V.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return V.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Pe(n,0),i=this.Yr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Xk{constructor(e){this.ni=e,this.docs=function(){return new ct(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=fl();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ot.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=fl();const a=n.path,l=new K(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:p}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||RA(PA(p),r)<=0||(i.has(p.key)||Pd(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ri(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Yk(this)}getSize(e){return V.resolve(this.size)}}class Yk extends $k{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class Jk{constructor(e){this.persistence=e,this.ii=new Fr(n=>kd(n),Cd),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.si=0,this.oi=new Nd,this.targetCount=0,this._i=xi.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),V.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new xi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.hr(n),V.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.oi.containsKey(n))}}/**
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
 */class r0{constructor(e,n){this.ai={},this.overlays={},this.ui=new wd(0),this.ci=!1,this.ci=!0,this.li=new Kk,this.referenceDelegate=e(this),this.hi=new Jk(this),this.indexManager=new bk,this.remoteDocumentCache=function(i){return new Xk(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Vk(n),this.Ti=new qk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Gk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Qk(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new Zk(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return V.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class Zk extends NA{constructor(e){super(),this.currentSequenceNumber=e}}class Dd{constructor(e){this.persistence=e,this.Ai=new Nd,this.Ri=null}static Vi(e){return new Dd(e)}get mi(){if(this.Ri)return this.Ri;throw Q(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,r=>{const i=K.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,ce.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return V.or([()=>V.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ml{constructor(e,n){this.persistence=e,this.gi=new Fr(r=>VA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Bk(this,n)}static Vi(e,n){return new ml(e,n)}Ii(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return V.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,n).next(l=>{l||(r++,s.removeEntry(a,ce.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Aa(e.data.value)),n}Sr(e,n,r){return V.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Od{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=Ke(),i=Ke();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Od(e,n.fromCache,r,i)}}/**
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
 */class eC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return K1()?8:DA(Ye())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new eC;return this.ws(e,n,a).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,a,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(Wr()<=Y.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Wr()<=Y.DEBUG&&$("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Wr()<=Y.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ir(n))):V.resolve())}ps(e,n){if(zm(n))return V.resolve(null);let r=Ir(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rh(n,null,"F"),r=Ir(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Ke(...s);return this.gs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.bs(n,l);return this.Ds(n,d,a,c.readTime)?this.ps(e,rh(n,null,"F")):this.vs(e,d,n,c)}))})))}ys(e,n,r,i){return zm(n)||i.isEqual(ce.min())?V.resolve(null):this.gs.getDocuments(e,r).next(s=>{const a=this.bs(n,s);return this.Ds(n,a,r,i)?V.resolve(null):(Wr()<=Y.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ls(n)),this.vs(e,a,n,CA(i,Xs)).next(l=>l))})}bs(e,n){let r=new Fe(nk(e));return n.forEach((i,s)=>{Pd(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return Wr()<=Y.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ls(n)),this.gs.getDocumentsMatchingQuery(e,n,tr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const nC="LocalStore";class rC{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new ct(Z),this.Ms=new Fr(s=>kd(s),Cd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function iC(t,e,n,r){return new rC(t,e,n,r)}async function i0(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=Ke();for(const d of i){a.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}return n.localDocuments.getDocuments(r,c).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:l}))})})}function sC(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,c,d,p){const g=d.batch,y=g.keys();let P=V.resolve();return y.forEach(R=>{P=P.next(()=>p.getEntry(c,R)).next(D=>{const M=d.docVersions.get(R);we(M!==null,48541),D.version.compareTo(M)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ke();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oC(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function aC(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ed),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Xm{constructor(){this.activeTargetIds=lk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lC{constructor(){this.Fo=new Xm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Xm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uC{xo(e){}shutdown(){}}/**
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
 */const Ym="ConnectivityMonitor";class Jm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){$(Ym,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){$(Ym,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oa=null;function ah(){return oa===null?oa=function(){return 268435456+Math.round(2147483648*Math.random())}():oa++,"0x"+oa.toString(16)}/**
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
 */const Gu="RestConnection",cC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===ul?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const a=ah(),l=this.Go(e,n.toUriEncodedString());$(Gu,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:d}=new URL(l),p=Vi(d);return this.jo(e,l,c,r,p).then(g=>($(Gu,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Ai(Gu,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}Jo(e,n,r,i,s,a){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=cC[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class dC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const We="WebChannelConnection";class fC extends hC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const a=ah();return new Promise((l,c)=>{const d=new g_;d.setWithCredentials(!0),d.listenOnce(y_.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Sa.NO_ERROR:const g=d.getResponseJson();$(We,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Sa.TIMEOUT:$(We,`RPC '${e}' ${a} timed out`),c(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const y=d.getStatus();if($(We,`RPC '${e}' ${a} failed with status:`,y,"response text:",d.getResponseText()),y>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const R=P==null?void 0:P.error;if(R&&R.status&&R.message){const D=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(R.status);c(new H(D,R.message))}else c(new H(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new H(L.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{$(We,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);$(We,`RPC '${e}' ${a} sending request:`,i),d.send(n,"POST",p,r,15)})}P_(e,n,r){const i=ah(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=w_(),l=__(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const p=s.join("");$(We,`Creating RPC '${e}' stream ${i}: ${p}`,c);const g=a.createWebChannel(p,c);this.T_(g);let y=!1,P=!1;const R=new dC({Ho:M=>{P?$(We,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(y||($(We,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),$(We,`RPC '${e}' stream ${i} sending:`,M),g.send(M))},Yo:()=>g.close()}),D=(M,I,v)=>{M.listen(I,S=>{try{v(S)}catch(O){setTimeout(()=>{throw O},0)}})};return D(g,ps.EventType.OPEN,()=>{P||($(We,`RPC '${e}' stream ${i} transport opened.`),R.s_())}),D(g,ps.EventType.CLOSE,()=>{P||(P=!0,$(We,`RPC '${e}' stream ${i} transport closed`),R.__(),this.I_(g))}),D(g,ps.EventType.ERROR,M=>{P||(P=!0,Ai(We,`RPC '${e}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),R.__(new H(L.UNAVAILABLE,"The operation could not be completed")))}),D(g,ps.EventType.MESSAGE,M=>{var I;if(!P){const v=M.data[0];we(!!v,16349);const S=v,O=(S==null?void 0:S.error)||((I=S[0])===null||I===void 0?void 0:I.error);if(O){$(We,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let U=function(_){const E=Ie[_];if(E!==void 0)return Ek(E)}(j),w=O.message;U===void 0&&(U=L.INTERNAL,w="Unknown error status: "+j+" with message "+O.message),P=!0,R.__(new H(U,w)),g.close()}else $(We,`RPC '${e}' stream ${i} received:`,v),R.a_(v)}}),D(l,v_.STAT_EVENT,M=>{M.stat===Yc.PROXY?$(We,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Yc.NOPROXY&&$(We,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Ku(){return typeof document<"u"?document:null}/**
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
 */function jl(t){return new Tk(t,!0)}/**
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
 */class s0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Zm="PersistentStream";class pC{constructor(e,n,r,i,s,a,l,c){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new s0(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return $(Zm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():($(Zm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mC extends pC{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=xk(e.writeResults,e.commitTime),r=mi(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Ck(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rk(this.serializer,r))};this.k_(n)}}/**
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
 */class gC{}class yC extends gC{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,sh(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(L.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(e,sh(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(L.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class vC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Or(n),this._a=!1):$("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const yo="RemoteStore";class _C{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{_o(this)&&($(yo,"Restarting streams for network reachability change."),await async function(c){const d=oe(c);d.Ia.add(4),await vo(d),d.Aa.set("Unknown"),d.Ia.delete(4),await zl(d)}(this))})}),this.Aa=new vC(r,i)}}async function zl(t){if(_o(t))for(const e of t.da)await e(!0)}async function vo(t){for(const e of t.da)await e(!1)}function _o(t){return oe(t).Ia.size===0}async function o0(t,e,n){if(!mo(e))throw e;t.Ia.add(1),await vo(t),t.Aa.set("Offline"),n||(n=()=>oC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(yo,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await zl(t)})}function a0(t,e){return e().catch(n=>o0(t,n,e))}async function Bl(t){const e=oe(t),n=rr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ed;for(;wC(e);)try{const i=await aC(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,EC(e,i)}catch(i){await o0(e,i)}l0(e)&&u0(e)}function wC(t){return _o(t)&&t.Pa.length<10}function EC(t,e){t.Pa.push(e);const n=rr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function l0(t){return _o(t)&&!rr(t).M_()&&t.Pa.length>0}function u0(t){rr(t).start()}async function TC(t){rr(t).na()}async function IC(t){const e=rr(t);for(const n of t.Pa)e.X_(n.mutations)}async function SC(t,e,n){const r=t.Pa.shift(),i=xd.from(r,e,n);await a0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bl(t)}async function AC(t,e){e&&rr(t).Z_&&await async function(r,i){if(function(a){return wk(a)&&a!==L.ABORTED}(i.code)){const s=r.Pa.shift();rr(r).N_(),await a0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bl(r)}}(t,e),l0(t)&&u0(t)}async function eg(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),$(yo,"RemoteStore received new credentials");const r=_o(n);n.Ia.add(3),await vo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await zl(n)}async function kC(t,e){const n=oe(t);e?(n.Ia.delete(2),await zl(n)):e||(n.Ia.add(2),await vo(n),n.Aa.set("Unknown"))}function rr(t){return t.ma||(t.ma=function(n,r,i){const s=oe(n);return s.ia(),new mC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:TC.bind(null,t),n_:AC.bind(null,t),ea:IC.bind(null,t),ta:SC.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Bl(t)):(await t.ma.stop(),t.Pa.length>0&&($(yo,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class Vd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Vd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function c0(t,e){if(Or("AsyncQueue",`${e}: ${t}`),mo(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}class CC{constructor(){this.queries=tg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=tg(),s.forEach((a,l)=>{for(const c of l.wa)c.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function tg(){return new Fr(t=>B_(t),z_)}function PC(t){t.Da.forEach(e=>{e.next()})}var ng,rg;(rg=ng||(ng={})).Fa="default",rg.Cache="cache";const RC="SyncEngine";class xC{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Fr(l=>B_(l),z_),this.Tu=new Map,this.Iu=new Set,this.du=new ct(K.comparator),this.Eu=new Map,this.Au=new Nd,this.Ru={},this.Vu=new Map,this.mu=xi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function NC(t,e,n){const r=LC(t);try{const i=await function(a,l){const c=oe(a),d=de.now(),p=l.reduce((P,R)=>P.add(R.key),Ke());let g,y;return c.persistence.runTransaction("Locally write mutations","readwrite",P=>{let R=fl(),D=Ke();return c.Os.getEntries(P,p).next(M=>{R=M,R.forEach((I,v)=>{v.isValidDocument()||(D=D.add(I))})}).next(()=>c.localDocuments.getOverlayedDocuments(P,R)).next(M=>{g=M;const I=[];for(const v of l){const S=gk(v,g.get(v.key).overlayedDocument);S!=null&&I.push(new Ur(v.key,S,V_(S.value.mapValue),fn.exists(!0)))}return c.mutationQueue.addMutationBatch(P,d,I,l)}).next(M=>{y=M;const I=M.applyToLocalDocumentSet(g,D);return c.documentOverlayCache.saveOverlays(P,M.batchId,I)})}).then(()=>({batchId:y.batchId,changes:H_(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let d=a.Ru[a.currentUser.toKey()];d||(d=new ct(Z)),d=d.insert(l,c),a.Ru[a.currentUser.toKey()]=d}(r,i.batchId,n),await $l(r,i.changes),await Bl(r.remoteStore)}catch(i){const s=c0(i,"Failed to persist write");n.reject(s)}}function ig(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=oe(a);c.onlineState=l;let d=!1;c.queries.forEach((p,g)=>{for(const y of g.wa)y.va(l)&&(d=!0)}),d&&PC(c)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DC(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await sC(n.localStore,e);d0(n,r,null),h0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $l(n,i)}catch(i){await _d(i)}}async function OC(t,e,n){const r=oe(t);try{const i=await function(a,l){const c=oe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return c.mutationQueue.lookupMutationBatch(d,l).next(g=>(we(g!==null,37113),p=g.keys(),c.mutationQueue.removeMutationBatch(d,g))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>c.localDocuments.getDocuments(d,p))})}(r.localStore,e);d0(r,e,n),h0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $l(r,i)}catch(i){await _d(i)}}function h0(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function d0(t,e,n){const r=oe(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}async function $l(t,e,n){const r=oe(t),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{a.push(r.gu(c,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=void 0)===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Od.Es(c.targetId,d);s.push(g)}}))}),await Promise.all(a),r.hu.J_(i),await async function(c,d){const p=oe(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(d,y=>V.forEach(y.Is,P=>p.persistence.referenceDelegate.addReference(g,y.targetId,P)).next(()=>V.forEach(y.ds,P=>p.persistence.referenceDelegate.removeReference(g,y.targetId,P)))))}catch(g){if(!mo(g))throw g;$(nC,"Failed to update sequence numbers: "+g)}for(const g of d){const y=g.targetId;if(!g.fromCache){const P=p.Fs.get(y),R=P.snapshotVersion,D=P.withLastLimboFreeSnapshotVersion(R);p.Fs=p.Fs.insert(y,D)}}}(r.localStore,s))}async function VC(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){$(RC,"User change. New user:",e.toKey());const r=await i0(n.localStore,e);n.currentUser=e,function(s,a){s.Vu.forEach(l=>{l.forEach(c=>{c.reject(new H(L.CANCELLED,a))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $l(n,r.Bs)}}function LC(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OC.bind(null,e),e}class gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return iC(this.persistence,new tC,e.initialUser,this.serializer)}Du(e){return new r0(Dd.Vi,this.serializer)}bu(e){return new lC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gl.provider={build:()=>new gl};class bC extends gl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){we(this.persistence.referenceDelegate instanceof ml,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jk(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new r0(r=>ml.Vi(r,n),this.serializer)}}class lh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ig(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VC.bind(null,this.syncEngine),await kC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CC}()}createDatastore(e){const n=jl(e.databaseInfo.databaseId),r=function(s){return new fC(s)}(e.databaseInfo);return function(s,a,l,c){return new yC(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new _C(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ig(this.syncEngine,n,0),function(){return Jm.C()?new Jm:new uC}())}createSyncEngine(e,n){return function(i,s,a,l,c,d,p){const g=new xC(i,s,a,l,c,d);return p&&(g.fu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);$(yo,"RemoteStore shutting down."),s.Ia.add(5),await vo(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}lh.provider={build:()=>new lh};/**
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
 */const ir="FirestoreClient";class MC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{$(ir,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($(ir,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=c0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qu(t,e){t.asyncQueue.verifyOperationInProgress(),$(ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await i0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{Ai("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{$("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Ai("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FC(t);$(ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>eg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>eg(e.remoteStore,i)),t._onlineComponents=e}async function FC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(ir,"Using user provided OfflineComponentProvider");try{await Qu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ai("Error using user provided cache. Falling back to memory cache: "+n),await Qu(t,new gl)}}else $(ir,"Using default OfflineComponentProvider"),await Qu(t,new bC(void 0));return t._offlineComponents}async function UC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(ir,"Using user provided OnlineComponentProvider"),await sg(t,t._uninitializedComponentsProvider._online)):($(ir,"Using default OnlineComponentProvider"),await sg(t,new lh))),t._onlineComponents}function jC(t){return UC(t).then(e=>e.syncEngine)}/**
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
 */function f0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const og=new Map;/**
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
 */const p0="firestore.googleapis.com",ag=!0;class lg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=p0,this.ssl=ag}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ag;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=n0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Fk)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gA;switch(r.type){case"firstParty":return new wA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=og.get(n);r&&($("ComponentProvider","Removing Datastore"),og.delete(n),r.terminate())}(this),Promise.resolve()}}function zC(t,e,n,r={}){var i;t=A_(t,Hl);const s=Vi(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;s&&(Nv(`https://${c}`),Dv("Firestore",!0)),a.host!==p0&&a.host!==c&&Ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:c,ssl:s,emulatorOptions:r});if(!Rr(d,l)&&(t._setSettings(d),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=qe.MOCK_USER;else{p=U1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new qe(y)}t._authCredentials=new yA(new T_(p,g))}}/**
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
 */class Ld{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ld(this.firestore,e,this._query)}}class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(po(n,Qe._jsonSchema))return new Qe(e,r||null,new K(me.fromString(n.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:Ae("string",Qe._jsonSchemaVersion),referencePath:Ae("string")};class Jn extends Ld{constructor(e,n,r){super(e,n,ZA(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new K(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function BC(t,e,...n){if(t=Ct(t),I_("collection","path",e),t instanceof Hl){const r=me.fromString(e,...n);return xm(r),new Jn(t,null,r)}{if(!(t instanceof Qe||t instanceof Jn))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return xm(r),new Jn(t.firestore,null,r)}}function $C(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=yd.newId()),I_("doc","path",e),t instanceof Hl){const r=me.fromString(e,...n);return Rm(r),new Qe(t,null,new K(r))}{if(!(t instanceof Qe||t instanceof Jn))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Rm(r),new Qe(t.firestore,t instanceof Jn?t.converter:null,new K(r))}}/**
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
 */const ug="AsyncQueue";class cg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new s0(this,"async_queue_retry"),this.oc=()=>{const r=Ku();r&&$(ug,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Ku();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Ku();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Tr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!mo(e))throw e;$(ug,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Or("INTERNAL UNHANDLED ERROR: ",hg(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Vd.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&Q(47125,{hc:hg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function hg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class m0 extends Hl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new cg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cg(e),this._firestoreClient=void 0,await e}}}function HC(t,e){const n=typeof t=="object"?t:bv(),r=typeof t=="string"?t:ul,i=sd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=M1("firestore");s&&zC(i,...s)}return i}function WC(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qC(t),t._firestoreClient}function qC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,c,d,p){return new FA(l,c,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,f0(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new MC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(Qt.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(po(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:Ae("string",Lt._jsonSchemaVersion),bytes:Ae("string")};/**
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
 */class bd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Md{constructor(e){this._methodName=e}}/**
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
 */class pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pn._jsonSchemaVersion}}static fromJSON(e){if(po(e,pn._jsonSchema))return new pn(e.latitude,e.longitude)}}pn._jsonSchemaVersion="firestore/geoPoint/1.0",pn._jsonSchema={type:Ae("string",pn._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
 */class mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(po(e,mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mn(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mn._jsonSchemaVersion="firestore/vectorValue/1.0",mn._jsonSchema={type:Ae("string",mn._jsonSchemaVersion),vectorValues:Ae("object")};/**
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
 */const GC=/^__.*__$/;class KC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new go(e,this.data,n,this.fieldTransforms)}}function g0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ec:t})}}class Fd{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Fd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return yl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(g0(this.Ec)&&GC.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class QC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jl(e)}Dc(e,n,r,i=!1){return new Fd({Ec:e,methodName:n,bc:r,path:be.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XC(t){const e=t._freezeSettings(),n=jl(t._databaseId);return new QC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YC(t,e,n,r,i,s={}){const a=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);w0("Data must be an object, but it was:",a,r);const l=v0(r,a);let c,d;if(s.merge)c=new Mt(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const y=JC(e,g,n);if(!a.contains(y))throw new H(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);eP(p,y)||p.push(y)}c=new Mt(p),d=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,d=a.fieldTransforms;return new KC(new Vt(l),c,d)}class Ud extends Md{_toFieldTransform(e){return new dk(e.path,new Js)}isEqual(e){return e instanceof Ud}}function y0(t,e){if(_0(t=Ct(t)))return w0("Unsupported field value:",e,t),v0(t,e);if(t instanceof Md)return function(r,i){if(!g0(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=y0(l,i.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=de.fromDate(r);return{timestampValue:ih(i.serializer,s)}}if(r instanceof de){const s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ih(i.serializer,s)}}if(r instanceof pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lt)return{bytesValue:Ik(i.serializer,r._byteString)};if(r instanceof Qe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:e0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mn)return function(a,l){return{mapValue:{fields:{[D_]:{stringValue:O_},[Zc]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return Rd(l.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${vd(r)}`)}(t,e)}function v0(t,e){const n={};return C_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(t,(r,i)=>{const s=y0(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof pn||t instanceof Lt||t instanceof Qe||t instanceof Md||t instanceof mn)}function w0(t,e,n){if(!_0(n)||!S_(n)){const r=vd(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function JC(t,e,n){if((e=Ct(e))instanceof bd)return e._internalPath;if(typeof e=="string")return E0(t,e);throw yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZC=new RegExp("[~\\*/\\[\\]]");function E0(t,e,n){if(e.search(ZC)>=0)throw yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bd(...e.split("."))._internalPath}catch{throw yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yl(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new H(L.INVALID_ARGUMENT,l+t+c)}function eP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class T0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(I0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tP extends T0{data(){return super.data()}}function I0(t,e){return typeof e=="string"?E0(t,e):e instanceof bd?e._internalPath:e._delegate._internalPath}/**
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
 */function nP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class aa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gi extends T0{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(I0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=gi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}gi._jsonSchemaVersion="firestore/documentSnapshot/1.0",gi._jsonSchema={type:Ae("string",gi._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Pa extends gi{data(e={}){return super.data(e)}}class xs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new aa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pa(this._firestore,this._userDataWriter,r.key,r,new aa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Pa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new aa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Pa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new aa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:rP(l.type),doc:c,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}xs._jsonSchemaVersion="firestore/querySnapshot/1.0",xs._jsonSchema={type:Ae("string",xs._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};function iP(t,e){const n=A_(t.firestore,m0),r=$C(t),i=nP(t.converter,e);return sP(n,[YC(XC(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then(()=>r)}function sP(t,e){return function(r,i){const s=new Tr;return r.asyncQueue.enqueueAndForget(async()=>NC(await jC(r),i,s)),s.promise}(WC(t),e)}function oP(){return new Ud("serverTimestamp")}(function(e,n=!0){(function(i){Mi=i})(Li),Si(new xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new m0(new vA(r.getProvider("auth-internal")),new EA(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cl(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Yn(Sm,Am,e),Yn(Sm,Am,"esm2017")})();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=ft.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...l},c)=>ft.createElement("svg",{ref:c,...lP,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:S0("lucide",i),...l},[...a.map(([d,p])=>ft.createElement(d,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=(t,e)=>{const n=ft.forwardRef(({className:r,...i},s)=>ft.createElement(uP,{ref:s,iconNode:e,className:S0(`lucide-${aP(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=Ui("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=Ui("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=Ui("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=Ui("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=Ui("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=Ui("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),mP={apiKey:"AIzaSyBHFsTRQT1eopfz8NG5ux__0QKgKCnoXOE",authDomain:"support-94add.firebaseapp.com",projectId:"support-94add",storageBucket:"support-94add.firebasestorage.app",messagingSenderId:"442252148032",appId:"1:442252148032:web:722f176b1c1b52a7368ea5",measurementId:"G-GP4C34CQF9"},A0=Lv(mP),Xu=pA(A0),gP=HC(A0),yP="ecohut-web";function vP(){const[t,e]=ft.useState(null),[n,r]=ft.useState(!1),[i,s]=ft.useState(!1),[a,l]=ft.useState({name:"",phone:"",address:"",quantity:1,deliveryArea:"inside_dhaka"}),c=1250,d=1490,p=70,g=130;ft.useEffect(()=>{(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await eS(Xu,__initial_auth_token):await QI(Xu)}catch(S){console.error("Auth failed:",S)}})();const v=rS(Xu,e);return()=>v()},[]);const y=()=>{const I=a.deliveryArea==="inside_dhaka"?p:g;return c*a.quantity+I},P=I=>{const{name:v,value:S}=I.target;l(O=>({...O,[v]:S}))},R=I=>{l(v=>({...v,quantity:Math.max(1,v.quantity+I)}))},D=async I=>{if(I.preventDefault(),!t){alert("System is initializing, please try again.");return}r(!0);try{await iP(BC(gP,"artifacts",yP,"public","data","orders"),{...a,totalPrice:y(),productName:"10 Items Chocolate Combo",orderDate:oP(),status:"new",userId:t.uid}),s(!0),l({name:"",phone:"",address:"",quantity:1,deliveryArea:"inside_dhaka"})}catch(v){console.error("Error placing order:",v),alert("অর্ডার প্লেস করতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।")}finally{r(!1)}},M=`
    @keyframes chase {
      0% { left: -20%; }
      100% { left: 120%; }
    }
    .animate-chase {
      position: fixed;
      bottom: 20px;
      z-index: 40;
      animation: chase 15s linear infinite;
      display: flex;
      align-items: center;
      pointer-events: none;
    }
    .wing-flap {
      animation: flap 0.2s infinite alternate;
    }
    @keyframes flap {
      from { transform: rotate(-10deg); }
      to { transform: rotate(10deg); }
    }
    .bouncing-child {
      animation: bounce 0.5s infinite alternate;
    }
    @keyframes bounce {
      from { transform: translateY(0); }
      to { transform: translateY(-10px); }
    }
    /* Background Pattern for kid vibe */
    .kid-pattern {
      background-color: #fffbeb;
      background-image: radial-gradient(#fbbf24 2px, transparent 2px);
      background-size: 30px 30px;
    }
  `;return i?x.jsxs("div",{className:"min-h-screen kid-pattern flex items-center justify-center p-4",children:[x.jsx("style",{children:M}),x.jsxs("div",{className:"bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center border-4 border-yellow-400",children:[x.jsx("div",{className:"w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce",children:x.jsx(pP,{className:"w-12 h-12 text-green-600"})}),x.jsx("h2",{className:"text-3xl font-extrabold text-purple-600 mb-4",children:"অর্ডার কনফার্ম! 🎉"}),x.jsx("p",{className:"text-gray-600 mb-6 text-lg",children:"ধন্যবাদ! আপনার বাচ্চারা এই চকলেটগুলো খুব পছন্দ করবে। আমরা শীঘ্রই কল করব।"}),x.jsx("button",{onClick:()=>s(!1),className:"bg-purple-600 text-white px-8 py-3 rounded-full font-bold text-xl hover:bg-purple-700 transition w-full shadow-lg transform hover:scale-105",children:"আরো অর্ডার করুন"})]})]}):x.jsxs("div",{className:"font-sans text-gray-800 kid-pattern min-h-screen pb-24 overflow-x-hidden",children:[x.jsx("style",{children:M}),x.jsxs("div",{className:"animate-chase",children:[x.jsxs("div",{className:"relative mr-12 transform scale-150",children:[x.jsx("span",{className:"text-4xl absolute -left-4 -top-2 wing-flap",children:"🕊️"})," ",x.jsx("span",{className:"text-5xl drop-shadow-lg",children:"🍫"}),x.jsx("span",{className:"text-4xl absolute -right-4 -top-2 wing-flap",style:{animationDelay:"0.1s"},children:"🕊️"})," "]}),x.jsx("div",{className:"transform scale-150 bouncing-child",children:x.jsx("span",{className:"text-6xl",children:"🏃‍♂️"})})]}),x.jsxs("div",{className:"bg-purple-600 text-white py-2 px-4 text-sm font-bold text-center md:flex md:justify-between md:items-center shadow-md",children:[x.jsxs("p",{className:"flex items-center justify-center gap-2",children:[x.jsx(hP,{size:16})," বাচ্চাদের জন্য সেরা গিফট বক্স!"]}),x.jsx("div",{className:"flex justify-center gap-4 mt-1 md:mt-0",children:x.jsxs("a",{href:"tel:01715247588",className:"flex items-center gap-1 hover:text-yellow-300",children:[x.jsx(dP,{size:14})," 01715247588"]})})]}),x.jsx("nav",{className:"bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b-4 border-yellow-400 shadow-sm",children:x.jsxs("div",{className:"container mx-auto px-4 py-3 flex justify-between items-center",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("span",{className:"text-4xl",children:"🍬"}),x.jsx("h1",{className:"text-3xl font-black text-purple-700 tracking-tight",style:{fontFamily:"cursive"},children:"EcoHut"})]}),x.jsxs("a",{href:"#order-form",className:"bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-black text-sm hover:bg-yellow-500 transition shadow-lg flex items-center gap-2 transform hover:scale-105 border-2 border-yellow-500",children:[x.jsx(fP,{size:20})," অর্ডার করুন"]})]})}),x.jsx("div",{className:"py-8 md:py-12",children:x.jsx("div",{className:"container mx-auto px-4",children:x.jsxs("div",{className:"bg-white rounded-3xl p-6 md:p-10 shadow-xl border-4 border-purple-100 flex flex-col md:flex-row gap-8 items-center",children:[x.jsxs("div",{className:"w-full md:w-1/2 relative",children:[x.jsxs("div",{className:"relative aspect-square bg-yellow-50 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition duration-500",children:[x.jsx("img",{src:"https://images.unsplash.com/photo-1623910398642-83b6f8497678?q=80&w=1000&auto=format&fit=crop",alt:"Chocolate Combo",className:"w-full h-full object-cover"}),x.jsx("div",{className:"absolute top-4 right-4 bg-red-500 text-white px-5 py-2 rounded-full font-black shadow-lg text-lg animate-pulse border-2 border-white",children:"১৬% ছাড়!"})]}),x.jsx("div",{className:"absolute -z-10 top-10 -left-10 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-50"}),x.jsx("div",{className:"absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-50"})]}),x.jsxs("div",{className:"w-full md:w-1/2 space-y-6 text-center md:text-left",children:[x.jsxs("div",{children:[x.jsxs("h1",{className:"text-3xl md:text-5xl font-black text-gray-800 leading-tight mb-2 drop-shadow-sm",children:[x.jsx("span",{className:"text-purple-600",children:"১০ আইটেম"})," স্পেশাল চকলেট কম্বো! 🍫"]}),x.jsxs("div",{className:"flex justify-center md:justify-start items-center gap-2 mb-6",children:[x.jsxs("div",{className:"flex text-yellow-400 filter drop-shadow",children:[x.jsx(us,{fill:"currentColor",size:24}),x.jsx(us,{fill:"currentColor",size:24}),x.jsx(us,{fill:"currentColor",size:24}),x.jsx(us,{fill:"currentColor",size:24}),x.jsx(us,{fill:"currentColor",size:24})]}),x.jsx("span",{className:"text-gray-500 font-bold",children:"(২০০+ হ্যাপি কিডস)"})]}),x.jsx("div",{className:"inline-block bg-yellow-100 px-6 py-2 rounded-2xl border-2 border-yellow-400 mb-4 transform -rotate-2",children:x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsxs("span",{className:"text-4xl font-black text-purple-700",children:["৳",c]}),x.jsxs("span",{className:"text-xl text-gray-500 line-through decoration-red-500 decoration-2",children:["৳",d]})]})})]}),x.jsxs("div",{className:"text-gray-700 space-y-4 text-lg",children:[x.jsxs("p",{children:["আপনার সোনামণি কি চকলেটের জন্য বায়না ধরে? 😢 বাজারের ক্ষতিকর চকলেট না দিয়ে দিন ",x.jsx("span",{className:"font-bold text-purple-600",children:"প্রিমিয়াম কোয়ালিটি"})," চকলেট বক্স!"]}),x.jsx("div",{className:"bg-purple-50 p-4 rounded-xl border-l-8 border-purple-500 text-left shadow-inner",children:x.jsx("p",{className:"italic text-gray-700",children:'"বাচ্চাদের খুশির জন্য এর চেয়ে ভালো গিফট আর হতে পারে না! স্বাস্থ্যকর ও সুস্বাদু।"'})})]}),x.jsxs("div",{className:"pt-4",children:[x.jsx("a",{href:"#order-form",className:"block w-full text-center bg-gradient-to-r from-purple-600 to-purple-500 text-white py-4 rounded-2xl font-black text-2xl shadow-xl hover:from-purple-700 hover:to-purple-600 transition transform hover:-translate-y-1 hover:scale-105",children:"অর্ডার করতে ক্লিক করুন 🛒"}),x.jsxs("p",{className:"text-center text-gray-500 font-bold mt-3",children:["কল করুন: ",x.jsx("span",{className:"text-purple-700 text-lg",children:"01715247588"})]})]})]})]})})}),x.jsx("div",{className:"py-8 container mx-auto px-4",children:x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[x.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-lg border-b-4 border-green-500 text-center",children:[x.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl",children:"🌿"}),x.jsx("h3",{className:"font-bold text-xl mb-2",children:"১০০% অথেনটিক"}),x.jsx("p",{className:"text-gray-600",children:"সৌদি, দুবাই ও তুরস্ক থেকে ইম্পোর্টেড।"})]}),x.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-lg border-b-4 border-yellow-500 text-center",children:[x.jsx("div",{className:"w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl",children:"😋"}),x.jsx("h3",{className:"font-bold text-xl mb-2",children:"সেরা স্বাদ"}),x.jsx("p",{className:"text-gray-600",children:"বাচ্চাদের পছন্দের ১০টি ভিন্ন ফ্লেভার।"})]}),x.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-lg border-b-4 border-blue-500 text-center",children:[x.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl",children:"🎁"}),x.jsx("h3",{className:"font-bold text-xl mb-2",children:"পারফেক্ট গিফট"}),x.jsx("p",{className:"text-gray-600",children:"জন্মদিন বা যেকোনো উপলক্ষে সেরা উপহার।"})]})]})}),x.jsx("div",{id:"order-form",className:"py-12",children:x.jsx("div",{className:"container mx-auto px-4",children:x.jsxs("div",{className:"max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white ring-4 ring-purple-100",children:[x.jsxs("div",{className:"bg-purple-600 py-6 text-center relative overflow-hidden",children:[x.jsx("div",{className:"absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"}),x.jsx("h2",{className:"text-2xl md:text-3xl font-black text-white relative z-10",children:"অর্ডার কনফার্ম করুন 👇"}),x.jsx("p",{className:"text-purple-200 relative z-10",children:"কোন অগ্রিম পেমেন্ট ছাড়া অর্ডার করুন"})]}),x.jsxs("form",{onSubmit:D,className:"p-6 md:p-8 space-y-5",children:[x.jsxs("div",{className:"flex justify-between items-center bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200 border-dashed",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"text-3xl",children:"🎁"}),x.jsxs("div",{children:[x.jsx("p",{className:"font-bold text-gray-800",children:"10 Item Kids Combo"}),x.jsx("p",{className:"text-xs text-gray-500 font-bold text-purple-600",children:"Premium Imported"})]})]}),x.jsxs("span",{className:"font-black text-purple-700 text-xl",children:["৳",c]})]}),x.jsxs("div",{className:"space-y-4",children:[x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-1 ml-1",children:"আপনার নাম"}),x.jsx("input",{required:!0,type:"text",name:"name",value:a.name,onChange:P,placeholder:"নাম লিখুন...",className:"w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition font-medium"})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-1 ml-1",children:"মোবাইল নাম্বার"}),x.jsx("input",{required:!0,type:"tel",name:"phone",value:a.phone,onChange:P,placeholder:"017XXXXXXXX",className:"w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition font-medium"})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-1 ml-1",children:"ঠিকানা"}),x.jsx("textarea",{required:!0,name:"address",value:a.address,onChange:P,rows:"2",placeholder:"বাসা নং, রোড, এলাকা...",className:"w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition font-medium"})]}),x.jsxs("div",{className:"bg-gray-50 p-4 rounded-xl",children:[x.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2 text-center",children:"কয়টি বক্স নিবেন?"}),x.jsxs("div",{className:"flex items-center justify-center gap-6",children:[x.jsx("button",{type:"button",onClick:()=>R(-1),className:"w-12 h-12 rounded-full bg-white shadow-md border hover:bg-red-50 flex items-center justify-center text-2xl font-bold text-red-500 transition active:scale-90",children:"-"}),x.jsx("span",{className:"text-3xl font-black w-12 text-center text-gray-800",children:a.quantity}),x.jsx("button",{type:"button",onClick:()=>R(1),className:"w-12 h-12 rounded-full bg-white shadow-md border hover:bg-green-50 flex items-center justify-center text-2xl font-bold text-green-500 transition active:scale-90",children:"+"})]})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2 ml-1",children:"ডেলিভারি এলাকা"}),x.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[x.jsxs("label",{className:`cursor-pointer border-2 rounded-xl p-3 flex flex-col items-center justify-center gap-1 transition ${a.deliveryArea==="inside_dhaka"?"border-purple-500 bg-purple-50 text-purple-700":"border-gray-200 hover:border-purple-200"}`,children:[x.jsx("input",{type:"radio",name:"deliveryArea",value:"inside_dhaka",checked:a.deliveryArea==="inside_dhaka",onChange:P,className:"hidden"}),x.jsx("span",{className:"font-bold",children:"ঢাকার ভিতরে"}),x.jsxs("span",{className:"text-sm bg-white px-2 rounded-full border",children:["৳",p]})]}),x.jsxs("label",{className:`cursor-pointer border-2 rounded-xl p-3 flex flex-col items-center justify-center gap-1 transition ${a.deliveryArea==="outside_dhaka"?"border-purple-500 bg-purple-50 text-purple-700":"border-gray-200 hover:border-purple-200"}`,children:[x.jsx("input",{type:"radio",name:"deliveryArea",value:"outside_dhaka",checked:a.deliveryArea==="outside_dhaka",onChange:P,className:"hidden"}),x.jsx("span",{className:"font-bold",children:"ঢাকার বাইরে"}),x.jsxs("span",{className:"text-sm bg-white px-2 rounded-full border",children:["৳",g]})]})]})]})]}),x.jsxs("div",{className:"bg-gray-50 p-5 rounded-xl border border-gray-200 mt-2",children:[x.jsxs("div",{className:"flex justify-between items-center mb-1 text-sm",children:[x.jsx("span",{className:"text-gray-600",children:"সাবটোটাল"}),x.jsxs("span",{className:"font-bold",children:["৳",c*a.quantity]})]}),x.jsxs("div",{className:"flex justify-between items-center mb-3 text-sm",children:[x.jsx("span",{className:"text-gray-600",children:"ডেলিভারি চার্জ"}),x.jsxs("span",{className:"font-bold",children:["৳",a.deliveryArea==="inside_dhaka"?p:g]})]}),x.jsxs("div",{className:"flex justify-between items-center text-2xl font-black text-gray-800 border-t-2 border-dashed border-gray-300 pt-3",children:[x.jsx("span",{children:"সর্বমোট"}),x.jsxs("span",{className:"text-purple-600",children:["৳",y()]})]})]}),x.jsx("button",{type:"submit",disabled:n,className:`w-full bg-purple-600 text-white font-black text-xl py-4 rounded-xl shadow-xl hover:bg-purple-700 transition transform hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2 ${n?"opacity-70 cursor-not-allowed":""}`,children:n?"অর্ডার হচ্ছে...":x.jsxs("span",{children:["অর্ডার কনফার্ম করুন ",x.jsx(cP,{size:20,className:"inline"})]})})]})]})})}),x.jsx("footer",{className:"bg-purple-900 text-purple-200 py-10 border-t-4 border-yellow-400",children:x.jsxs("div",{className:"container mx-auto px-4 text-center",children:[x.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[x.jsx("span",{className:"text-3xl",children:"🍬"}),x.jsx("h3",{className:"text-3xl font-bold text-white",style:{fontFamily:"cursive"},children:"EcoHut"})]}),x.jsx("p",{className:"mb-6 max-w-md mx-auto opacity-80",children:"বাচ্চাদের জন্য নিরাপদ ও সেরা মানের চকলেট আমরাই দিচ্ছি। আজই অর্ডার করুন!"}),x.jsx("div",{className:"flex justify-center gap-6 mb-6 font-bold text-white",children:x.jsx("a",{href:"tel:01715247588",className:"hover:text-yellow-400 transition",children:"📞 01715247588"})}),x.jsx("p",{className:"text-sm opacity-50",children:"© 2024 EcoHut. Made with 💜 for Kids."})]})})]})}Sv(document.getElementById("root")).render(x.jsx(ft.StrictMode,{children:x.jsx(vP,{})}));
