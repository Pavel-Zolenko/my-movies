"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[93],{93:function(t,e,n){n.r(e),n.d(e,{default:function(){return W}});var r=n(433),o=n(439),a=n(791),i=n(87),s=n(689),c=n(409),u=n(142);function l(t,e,n){return(e=(0,u.Z)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function m(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=m(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}var v=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=m(t))&&(r&&(r+=" "),r+=e);return r},h=["theme","type"],y=["delay","staleId"],g=function(t){return"number"==typeof t&&!isNaN(t)},E=function(t){return"string"==typeof t},T=function(t){return"function"==typeof t},b=function(t){return E(t)||T(t)?t:null},O=function(t){return(0,a.isValidElement)(t)||E(t)||T(t)||g(t)};function C(t){var e=t.enter,n=t.exit,o=t.appendPosition,i=void 0!==o&&o,s=t.collapse,c=void 0===s||s,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,s=t.position,u=t.preventExitTransition,f=t.done,d=t.nodeRef,p=t.isIn,m=i?"".concat(e,"--").concat(s):e,v=i?"".concat(n,"--").concat(s):n,h=(0,a.useRef)(0);return(0,a.useLayoutEffect)((function(){var t,e=d.current,n=m.split(" "),o=function t(o){var a;o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===h.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,r.Z)(n)))};(t=e.classList).add.apply(t,(0,r.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,a.useEffect)((function(){var t=d.current,e=function e(){t.removeEventListener("animationend",e),c?function(t,e,n){void 0===n&&(n=300);var r=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(e,n)}))}))}(t,f,l):f()};p||(u?e():(h.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),a.createElement(a.Fragment,null,o)}}function _(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var I={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,r.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(a)}))}},w=function(t){var e=t.theme,n=t.type,r=p(t,h);return a.createElement("svg",d({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},x={info:function(t){return a.createElement(w,d({},t),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return a.createElement(w,d({},t),a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return a.createElement(w,d({},t),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return a.createElement(w,d({},t),a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function L(t){var e=(0,a.useReducer)((function(t){return t+1}),0),n=(0,o.Z)(e,2)[1],i=(0,a.useState)([]),s=(0,o.Z)(i,2),c=s[0],u=s[1],l=(0,a.useRef)(null),f=(0,a.useRef)(new Map).current,m=function(t){return-1!==c.indexOf(t)},v=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:m,getToast:function(t){return f.get(t)}}).current;function h(t){var e=t.containerId;!v.props.limit||e&&v.containerId!==e||(v.count-=v.queue.length,v.queue=[])}function C(t){u((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function w(){var t=v.queue.shift();k(t.toastContent,t.toastProps,t.staleId)}function L(t,e){var r=e.delay,o=e.staleId,i=p(e,y);if(O(t)&&!function(t){return!l.current||v.props.enableMultiContainer&&t.containerId!==v.props.containerId||f.has(t.toastId)&&null==t.updateId}(i)){var s=i.toastId,c=i.updateId,u=i.data,m=v.props,h=function(){return C(s)},L=null==c;L&&v.count++;var N,R,P=d(d(d({},m),{},{style:m.toastStyle,key:v.toastKey++},i),{},{toastId:s,updateId:c,data:u,closeToast:h,isIn:!1,className:b(i.className||m.toastClassName),bodyClassName:b(i.bodyClassName||m.bodyClassName),progressClassName:b(i.progressClassName||m.progressClassName),autoClose:!i.isLoading&&(N=i.autoClose,R=m.autoClose,!1===N||g(N)&&N>0?N:R),deleteToast:function(){var t=_(f.get(s),"removed");f.delete(s),I.emit(4,t);var e=v.queue.length;if(v.count=null==s?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),e>0){var r=null==s?v.props.limit:1;if(1===e||1===r)v.displayedToast++,w();else{var o=r>e?e:r;v.displayedToast=o;for(var a=0;a<o;a++)w()}}else n()}});P.iconOut=function(t){var e=t.theme,n=t.type,r=t.isLoading,o=t.icon,i=null,s={theme:e,type:n};return!1===o||(T(o)?i=o(s):(0,a.isValidElement)(o)?i=(0,a.cloneElement)(o,s):E(o)||g(o)?i=o:r?i=x.spinner():function(t){return t in x}(n)&&(i=x[n](s))),i}(P),T(i.onOpen)&&(P.onOpen=i.onOpen),T(i.onClose)&&(P.onClose=i.onClose),P.closeButton=m.closeButton,!1===i.closeButton||O(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!O(m.closeButton)||m.closeButton);var j=t;(0,a.isValidElement)(t)&&!E(t.type)?j=(0,a.cloneElement)(t,{closeToast:h,toastProps:P,data:u}):T(t)&&(j=t({closeToast:h,toastProps:P,data:u})),m.limit&&m.limit>0&&v.count>m.limit&&L?v.queue.push({toastContent:j,toastProps:P,staleId:o}):g(r)?setTimeout((function(){k(j,P,o)}),r):k(j,P,o)}}function k(t,e,n){var o=e.toastId;n&&f.delete(n);var a={content:t,props:e};f.set(o,a),u((function(t){return[].concat((0,r.Z)(t),[o]).filter((function(t){return t!==n}))})),I.emit(4,_(a,null==a.props.updateId?"added":"updated"))}return(0,a.useEffect)((function(){return v.containerId=t.containerId,I.cancelEmit(3).on(0,L).on(1,(function(t){return l.current&&C(t)})).on(5,h).emit(2,v),function(){f.clear(),I.emit(3,v)}}),[]),(0,a.useEffect)((function(){v.props=t,v.isToastActive=m,v.displayedToast=c.length})),{getToastToRender:function(e){var n=new Map,r=Array.from(f.values());return t.newestOnTop&&r.reverse(),r.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:l,isToastActive:m}}function k(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function N(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function R(t){var e=(0,a.useState)(!1),n=(0,o.Z)(e,2),r=n[0],i=n[1],s=(0,a.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],f=(0,a.useRef)(null),d=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,a.useRef)(t),m=t.autoClose,v=t.pauseOnHover,h=t.closeToast,y=t.onClick,g=t.closeOnClick;function E(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",I),document.addEventListener("touchmove",_),document.addEventListener("touchend",I);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=k(e.nativeEvent),d.y=N(e.nativeEvent),"x"===t.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(e){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?C():O()}}function O(){i(!0)}function C(){i(!1)}function _(e){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&C(),d.x=k(e),d.y=N(e),d.delta="x"===t.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",I);var e=f.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,a.useEffect)((function(){p.current=t})),(0,a.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),T(t.onOpen)&&t.onOpen((0,a.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;T(t.onClose)&&t.onClose((0,a.isValidElement)(t.children)&&t.children.props)}}),[]),(0,a.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",O),window.addEventListener("blur",C)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",C))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&v&&(w.onMouseEnter=C,w.onMouseLeave=O),g&&(w.onClick=function(t){y&&y(t),d.canCloseOnClick&&h()}),{playToast:O,pauseToast:C,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:w}}function P(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,o=void 0===r?"close":r;return a.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(t){var e=t.delay,n=t.isRunning,r=t.closeToast,o=t.type,i=void 0===o?"default":o,s=t.hide,c=t.className,u=t.style,f=t.controlledProgress,p=t.progress,m=t.rtl,h=t.isIn,y=t.theme,g=s||f&&0===p,E=d(d({},u),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:g?0:1});f&&(E.transform="scaleX(".concat(p,")"));var b=v("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":m}),O=T(c)?c({rtl:m,type:i,defaultClassName:b}):v(b,c);return a.createElement("div",l({role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:O,style:E},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){h&&r()}))}var M=function(t){var e=R(t),n=e.isRunning,r=e.preventExitTransition,o=e.toastRef,i=e.eventHandlers,s=t.closeButton,c=t.children,u=t.autoClose,l=t.onClick,f=t.type,p=t.hideProgressBar,m=t.closeToast,h=t.transition,y=t.position,g=t.className,E=t.style,b=t.bodyClassName,O=t.bodyStyle,C=t.progressClassName,_=t.progressStyle,I=t.updateId,w=t.role,x=t.progress,L=t.rtl,k=t.toastId,N=t.deleteToast,M=t.isIn,D=t.isLoading,Z=t.iconOut,B=t.closeOnClick,A=t.theme,S=v("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":B}),z=T(g)?g({rtl:L,position:y,type:f,defaultClassName:S}):v(S,g),F=!!x||!u,H={closeToast:m,type:f,theme:A},q=null;return!1===s||(q=T(s)?s(H):(0,a.isValidElement)(s)?(0,a.cloneElement)(s,H):P(H)),a.createElement(h,{isIn:M,done:N,position:y,preventExitTransition:r,nodeRef:o},a.createElement("div",d(d({id:k,onClick:l,className:z},i),{},{style:E,ref:o}),a.createElement("div",d(d({},M&&{role:w}),{},{className:T(b)?b({type:f}):v("Toastify__toast-body",b),style:O}),null!=Z&&a.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},Z),a.createElement("div",null,c)),q,a.createElement(j,d(d({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:L,theme:A,delay:u,isRunning:n,isIn:M,closeToast:m,hide:p,type:f,style:_,className:C,controlledProgress:F,progress:x||0}))))},D=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},Z=C(D("bounce",!0)),B=(C(D("slide",!0)),C(D("zoom")),C(D("flip")),(0,a.forwardRef)((function(t,e){var n=L(t),r=n.getToastToRender,o=n.containerRef,i=n.isToastActive,s=t.className,c=t.style,u=t.rtl,l=t.containerId;function f(t){var e=v("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":u});return T(s)?s({position:t,rtl:u,defaultClassName:e}):v(e,b(s))}return(0,a.useEffect)((function(){e&&(e.current=o.current)}),[]),a.createElement("div",{ref:o,className:"Toastify",id:l},r((function(t,e){var n=e.length?d({},c):d(d({},c),{},{pointerEvents:"none"});return a.createElement("div",{className:f(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var r=t.content,o=t.props;return a.createElement(M,d(d({},o),{},{isIn:i(o.toastId),style:d(d({},o.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(o.key)}),r)})))})))})));B.displayName="ToastContainer",B.defaultProps={position:"top-right",transition:Z,autoClose:5e3,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var A,S=new Map,z=[],F=1;function H(){return""+F++}function q(t){return t&&(E(t.toastId)||g(t.toastId))?t.toastId:H()}function Q(t,e){return S.size>0?I.emit(0,t,e):z.push({content:t,options:e}),e.toastId}function V(t,e){return d(d({},e),{},{type:e&&e.type||t,toastId:q(e)})}function Y(t){return function(e,n){return Q(e,V(t,n))}}function G(t,e){return Q(t,V("default",e))}G.loading=function(t,e){return Q(t,V("default",d({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},G.promise=function(t,e,n){var r,o=e.pending,a=e.error,i=e.success;o&&(r=E(o)?G.loading(o,n):G.loading(o.render,d(d({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(t,e,o){if(null!=e){var a=d(d(d({type:t},s),n),{},{data:o}),i=E(e)?{render:e}:e;return r?G.update(r,d(d({},a),i)):G(i.render,d(d({},a),i)),o}G.dismiss(r)},u=T(t)?t():t;return u.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),u},G.success=Y("success"),G.info=Y("info"),G.error=Y("error"),G.warning=Y("warning"),G.warn=G.warning,G.dark=function(t,e){return Q(t,V("default",d({theme:"dark"},e)))},G.dismiss=function(t){S.size>0?I.emit(1,t):z=z.filter((function(e){return null!=t&&e.options.toastId!==t}))},G.clearWaitingQueue=function(t){return void 0===t&&(t={}),I.emit(5,t)},G.isActive=function(t){var e=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},G.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,r=S.get(n||A);return r&&r.getToast(t)}(t,e);if(n){var r=n.props,o=n.content,a=d(d(d({},r),e),{},{toastId:e.toastId||t,updateId:H()});a.toastId!==t&&(a.staleId=t);var i=a.render||o;delete a.render,Q(i,a)}}),0)},G.done=function(t){G.update(t,{progress:1})},G.onChange=function(t){return I.on(4,t),function(){I.off(4,t)}},G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(t){A=t.containerId||t,S.set(A,t),z.forEach((function(t){I.emit(0,t.content,t.options)})),z=[]})).on(3,(function(t){S.delete(t.containerId||t),0===S.size&&I.off(0).off(1).off(5)}));var U=n(184);function W(){var t=(0,a.useState)([]),e=(0,o.Z)(t,2),n=e[0],u=e[1],l=(0,a.useState)(""),f=(0,o.Z)(l,2),d=f[0],p=f[1],m=(0,i.lr)(),v=(0,o.Z)(m,2),h=v[0],y=v[1],g=h.get("search"),E=(0,s.TH)();(0,a.useEffect)((function(){g&&(0,c.vw)(g).then((function(t){u((0,r.Z)(t.results))}))}),[g]);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!d.trim())return G.error("emptyQuery");d.trim()!==g&&(u([]),y({search:d.trim()}))},children:[(0,U.jsx)("label",{htmlFor:"",children:(0,U.jsx)("input",{type:"text",name:"search",onChange:function(t){p(t.target.value)}})}),(0,U.jsx)("button",{type:"submit",children:"Search"})]}),(0,U.jsx)("ul",{children:n.map((function(t){return(0,U.jsx)("li",{children:(0,U.jsx)(i.OL,{to:"".concat(t.id),state:{from:E},children:(0,U.jsx)("p",{children:t.title||t.name})})},t.id)}))}),(0,U.jsx)(B,{})]})}},409:function(t,e,n){n.d(e,{IV:function(){return d},Mc:function(){return l},PY:function(){return u},vw:function(){return p},wH:function(){return f}});var r=n(861),o=n(687),a=n.n(o),i=n(912),s="https://api.themoviedb.org/3",c="7944ae355bdc42ac579681e106149d6b",u=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/trending/all/day?api_key=").concat(c,"&page=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(c,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(c,"&query=").concat(e,"&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=93.c7de814d.chunk.js.map