"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[402],{9198:function(t,e,n){n.d(e,{W:function(){return a}});var r,o=n(168),a=n(4709).Z.div(r||(r=(0,o.Z)(["\n  padding: 16px;\n\n  @media (min-width: 1280px) {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"])))},7978:function(t,e,n){n.d(e,{u:function(){return l}});var r=n(9409);var o=(0,r.Z)("img",{target:"e1livhmu3"})(""),a=(0,r.Z)("div",{target:"e1livhmu2"})({name:"1rup6a2",styles:"padding:6px;font-size:16px;font-weight:500"}),i=(0,r.Z)("p",{target:"e1livhmu1"})({name:"104ykd6",styles:"text-align:center;text-transform:uppercase;color:black"}),s=(0,r.Z)("p",{target:"e1livhmu0"})({name:"iix5iz",styles:"text-align:center;color:#ff6b08"}),c=n(7107),u=n(184),l=function(t){var e,n,r,l,d=t.movie,f="";(null!==(e=d.release_date)&&void 0!==e?e:d.first_air_date)&&(f=(null!==(l=d.release_date)&&void 0!==l?l:d.first_air_date).slice(0,4));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{src:d.poster_path?"https://image.tmdb.org/t/p/w200".concat(d.poster_path):c,alt:null!==(n=d.original_title)&&void 0!==n?n:d.name,loading:"lazy"}),(0,u.jsxs)(a,{children:[(0,u.jsx)(i,{children:null!==(r=d.title)&&void 0!==r?r:d.name}),(0,u.jsx)(s,{children:f})]})]})}},2402:function(t,e,n){n.r(e),n.d(e,{default:function(){return lt}});var r=n(3433),o=n(9439),a=n(2791),i=n(1087),s=n(7689),c=n(9142);function u(t,e,n){return(e=(0,c.Z)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function p(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=p(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}var m=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=p(t))&&(r&&(r+=" "),r+=e);return r},v=["theme","type"],g=["delay","staleId"],h=function(t){return"number"==typeof t&&!isNaN(t)},y=function(t){return"string"==typeof t},b=function(t){return"function"==typeof t},E=function(t){return y(t)||b(t)?t:null},T=function(t){return(0,a.isValidElement)(t)||y(t)||b(t)||h(t)};function x(t){var e=t.enter,n=t.exit,o=t.appendPosition,i=void 0!==o&&o,s=t.collapse,c=void 0===s||s,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,s=t.position,u=t.preventExitTransition,d=t.done,f=t.nodeRef,p=t.isIn,m=i?"".concat(e,"--").concat(s):e,v=i?"".concat(n,"--").concat(s):n,g=(0,a.useRef)(0);return(0,a.useLayoutEffect)((function(){var t,e=f.current,n=m.split(" "),o=function t(o){var a;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,r.Z)(n)))};(t=e.classList).add.apply(t,(0,r.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,a.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),c?function(t,e,n){void 0===n&&(n=300);var r=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(e,n)}))}))}(t,d,l):d()};p||(u?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),a.createElement(a.Fragment,null,o)}}function _(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var w={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,r.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(a)}))}},O=function(t){var e=t.theme,n=t.type,r=f(t,v);return a.createElement("svg",d({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},C={info:function(t){return a.createElement(O,d({},t),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return a.createElement(O,d({},t),a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return a.createElement(O,d({},t),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return a.createElement(O,d({},t),a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function I(t){var e=(0,a.useReducer)((function(t){return t+1}),0),n=(0,o.Z)(e,2)[1],i=(0,a.useState)([]),s=(0,o.Z)(i,2),c=s[0],u=s[1],l=(0,a.useRef)(null),p=(0,a.useRef)(new Map).current,m=function(t){return-1!==c.indexOf(t)},v=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:m,getToast:function(t){return p.get(t)}}).current;function x(t){var e=t.containerId;!v.props.limit||e&&v.containerId!==e||(v.count-=v.queue.length,v.queue=[])}function O(t){u((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function I(){var t=v.queue.shift();L(t.toastContent,t.toastProps,t.staleId)}function k(t,e){var r=e.delay,o=e.staleId,i=f(e,g);if(T(t)&&!function(t){return!l.current||v.props.enableMultiContainer&&t.containerId!==v.props.containerId||p.has(t.toastId)&&null==t.updateId}(i)){var s=i.toastId,c=i.updateId,u=i.data,m=v.props,x=function(){return O(s)},k=null==c;k&&v.count++;var Z,j,N=d(d(d({},m),{},{style:m.toastStyle,key:v.toastKey++},i),{},{toastId:s,updateId:c,data:u,closeToast:x,isIn:!1,className:E(i.className||m.toastClassName),bodyClassName:E(i.bodyClassName||m.bodyClassName),progressClassName:E(i.progressClassName||m.progressClassName),autoClose:!i.isLoading&&(Z=i.autoClose,j=m.autoClose,!1===Z||h(Z)&&Z>0?Z:j),deleteToast:function(){var t=_(p.get(s),"removed");p.delete(s),w.emit(4,t);var e=v.queue.length;if(v.count=null==s?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),e>0){var r=null==s?v.props.limit:1;if(1===e||1===r)v.displayedToast++,I();else{var o=r>e?e:r;v.displayedToast=o;for(var a=0;a<o;a++)I()}}else n()}});N.iconOut=function(t){var e=t.theme,n=t.type,r=t.isLoading,o=t.icon,i=null,s={theme:e,type:n};return!1===o||(b(o)?i=o(s):(0,a.isValidElement)(o)?i=(0,a.cloneElement)(o,s):y(o)||h(o)?i=o:r?i=C.spinner():function(t){return t in C}(n)&&(i=C[n](s))),i}(N),b(i.onOpen)&&(N.onOpen=i.onOpen),b(i.onClose)&&(N.onClose=i.onClose),N.closeButton=m.closeButton,!1===i.closeButton||T(i.closeButton)?N.closeButton=i.closeButton:!0===i.closeButton&&(N.closeButton=!T(m.closeButton)||m.closeButton);var P=t;(0,a.isValidElement)(t)&&!y(t.type)?P=(0,a.cloneElement)(t,{closeToast:x,toastProps:N,data:u}):b(t)&&(P=t({closeToast:x,toastProps:N,data:u})),m.limit&&m.limit>0&&v.count>m.limit&&k?v.queue.push({toastContent:P,toastProps:N,staleId:o}):h(r)?setTimeout((function(){L(P,N,o)}),r):L(P,N,o)}}function L(t,e,n){var o=e.toastId;n&&p.delete(n);var a={content:t,props:e};p.set(o,a),u((function(t){return[].concat((0,r.Z)(t),[o]).filter((function(t){return t!==n}))})),w.emit(4,_(a,null==a.props.updateId?"added":"updated"))}return(0,a.useEffect)((function(){return v.containerId=t.containerId,w.cancelEmit(3).on(0,k).on(1,(function(t){return l.current&&O(t)})).on(5,x).emit(2,v),function(){p.clear(),w.emit(3,v)}}),[]),(0,a.useEffect)((function(){v.props=t,v.isToastActive=m,v.displayedToast=c.length})),{getToastToRender:function(e){var n=new Map,r=Array.from(p.values());return t.newestOnTop&&r.reverse(),r.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:l,isToastActive:m}}function k(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function L(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function Z(t){var e=(0,a.useState)(!1),n=(0,o.Z)(e,2),r=n[0],i=n[1],s=(0,a.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=(0,a.useRef)(null),f=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,a.useRef)(t),m=t.autoClose,v=t.pauseOnHover,g=t.closeToast,h=t.onClick,y=t.closeOnClick;function E(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",O),document.addEventListener("touchmove",w),document.addEventListener("touchend",O);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=k(e.nativeEvent),f.y=L(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(e){if(f.boundingRect){var n=f.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?_():x()}}function x(){i(!0)}function _(){i(!1)}function w(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&_(),f.x=k(e),f.y=L(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function O(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",O);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,a.useEffect)((function(){p.current=t})),(0,a.useEffect)((function(){return d.current&&d.current.addEventListener("d",x,{once:!0}),b(t.onOpen)&&t.onOpen((0,a.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;b(t.onClose)&&t.onClose((0,a.isValidElement)(t.children)&&t.children.props)}}),[]),(0,a.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",x),window.addEventListener("blur",_)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",_))}}),[t.pauseOnFocusLoss]);var C={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(C.onMouseEnter=_,C.onMouseLeave=x),y&&(C.onClick=function(t){h&&h(t),f.canCloseOnClick&&g()}),{playToast:x,pauseToast:_,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:C}}function j(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,o=void 0===r?"close":r;return a.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(t){var e=t.delay,n=t.isRunning,r=t.closeToast,o=t.type,i=void 0===o?"default":o,s=t.hide,c=t.className,l=t.style,f=t.controlledProgress,p=t.progress,v=t.rtl,g=t.isIn,h=t.theme,y=s||f&&0===p,E=d(d({},l),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});f&&(E.transform="scaleX(".concat(p,")"));var T=m("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":v}),x=b(c)?c({rtl:v,type:i,defaultClassName:T}):m(T,c);return a.createElement("div",u({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:x,style:E},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){g&&r()}))}var P=function(t){var e=Z(t),n=e.isRunning,r=e.preventExitTransition,o=e.toastRef,i=e.eventHandlers,s=t.closeButton,c=t.children,u=t.autoClose,l=t.onClick,f=t.type,p=t.hideProgressBar,v=t.closeToast,g=t.transition,h=t.position,y=t.className,E=t.style,T=t.bodyClassName,x=t.bodyStyle,_=t.progressClassName,w=t.progressStyle,O=t.updateId,C=t.role,I=t.progress,k=t.rtl,L=t.toastId,P=t.deleteToast,R=t.isIn,M=t.isLoading,D=t.iconOut,B=t.closeOnClick,S=t.theme,z=m("Toastify__toast","Toastify__toast-theme--".concat(S),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":B}),A=b(y)?y({rtl:k,position:h,type:f,defaultClassName:z}):m(z,y),F=!!I||!u,H={closeToast:v,type:f,theme:S},q=null;return!1===s||(q=b(s)?s(H):(0,a.isValidElement)(s)?(0,a.cloneElement)(s,H):j(H)),a.createElement(g,{isIn:R,done:P,position:h,preventExitTransition:r,nodeRef:o},a.createElement("div",d(d({id:L,onClick:l,className:A},i),{},{style:E,ref:o}),a.createElement("div",d(d({},R&&{role:C}),{},{className:b(T)?T({type:f}):m("Toastify__toast-body",T),style:x}),null!=D&&a.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},D),a.createElement("div",null,c)),q,a.createElement(N,d(d({},O&&!F?{key:"pb-".concat(O)}:{}),{},{rtl:k,theme:S,delay:u,isRunning:n,isIn:R,closeToast:v,hide:p,type:f,style:w,className:_,controlledProgress:F,progress:I||0}))))},R=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},M=x(R("bounce",!0)),D=(x(R("slide",!0)),x(R("zoom")),x(R("flip")),(0,a.forwardRef)((function(t,e){var n=I(t),r=n.getToastToRender,o=n.containerRef,i=n.isToastActive,s=t.className,c=t.style,u=t.rtl,l=t.containerId;function f(t){var e=m("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":u});return b(s)?s({position:t,rtl:u,defaultClassName:e}):m(e,E(s))}return(0,a.useEffect)((function(){e&&(e.current=o.current)}),[]),a.createElement("div",{ref:o,className:"Toastify",id:l},r((function(t,e){var n=e.length?d({},c):d(d({},c),{},{pointerEvents:"none"});return a.createElement("div",{className:f(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var r=t.content,o=t.props;return a.createElement(P,d(d({},o),{},{isIn:i(o.toastId),style:d(d({},o.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(o.key)}),r)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:M,autoClose:5e3,closeButton:j,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var B,S=new Map,z=[],A=1;function F(){return""+A++}function H(t){return t&&(y(t.toastId)||h(t.toastId))?t.toastId:F()}function q(t,e){return S.size>0?w.emit(0,t,e):z.push({content:t,options:e}),e.toastId}function Q(t,e){return d(d({},e),{},{type:e&&e.type||t,toastId:H(e)})}function V(t){return function(e,n){return q(e,Q(t,n))}}function W(t,e){return q(t,Q("default",e))}W.loading=function(t,e){return q(t,Q("default",d({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},W.promise=function(t,e,n){var r,o=e.pending,a=e.error,i=e.success;o&&(r=y(o)?W.loading(o,n):W.loading(o.render,d(d({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(t,e,o){if(null!=e){var a=d(d(d({type:t},s),n),{},{data:o}),i=y(e)?{render:e}:e;return r?W.update(r,d(d({},a),i)):W(i.render,d(d({},a),i)),o}W.dismiss(r)},u=b(t)?t():t;return u.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),u},W.success=V("success"),W.info=V("info"),W.error=V("error"),W.warning=V("warning"),W.warn=W.warning,W.dark=function(t,e){return q(t,Q("default",d({theme:"dark"},e)))},W.dismiss=function(t){S.size>0?w.emit(1,t):z=z.filter((function(e){return null!=t&&e.options.toastId!==t}))},W.clearWaitingQueue=function(t){return void 0===t&&(t={}),w.emit(5,t)},W.isActive=function(t){var e=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},W.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,r=S.get(n||B);return r&&r.getToast(t)}(t,e);if(n){var r=n.props,o=n.content,a=d(d(d({},r),e),{},{toastId:e.toastId||t,updateId:F()});a.toastId!==t&&(a.staleId=t);var i=a.render||o;delete a.render,q(i,a)}}),0)},W.done=function(t){W.update(t,{progress:1})},W.onChange=function(t){return w.on(4,t),function(){w.off(4,t)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(t){B=t.containerId||t,S.set(B,t),z.forEach((function(t){w.emit(0,t.content,t.options)})),z=[]})).on(3,(function(t){S.delete(t.containerId||t),0===S.size&&w.off(0).off(1).off(5)}));var Y,G,U,X,K,$=n(409),J=n(7978),tt=n(168),et=n(4709),nt=n(9198),rt=n(9530).$.colors,ot=(0,et.Z)(i.OL)(Y||(Y=(0,tt.Z)(["\n  text-decoration: none;\n"]))),at=(0,et.Z)(nt.W)(G||(G=(0,tt.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 14px;\n  background-color: ",";\n"])),rt.bcgMain),it=(et.Z.h2(U||(U=(0,tt.Z)(["\n  text-align: center;\n  color: ",";\n"])),rt.textPrimary),et.Z.ul(X||(X=(0,tt.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  list-style: none;\n"])))),st=et.Z.li(K||(K=(0,tt.Z)(["\n  max-width: 200px;\n  background-color: white;\n  border-radius: 0px 0px 6px 6px;\n  transition: box-shadow 250ms linear, transform 250ms linear;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n\n  :hover,\n  :focus {\n    box-shadow: 0 0 8px rgba(200, 200, 200, 0.8);\n    transform: scale(1.05);\n  }\n\n  ","\n"])),""),ct=n(3630),ut=n(184);function lt(){var t=(0,a.useState)([]),e=(0,o.Z)(t,2),n=e[0],c=e[1],u=(0,a.useState)(""),l=(0,o.Z)(u,2),d=l[0],f=l[1],p=(0,i.lr)(),m=(0,o.Z)(p,2),v=m[0],g=m[1],h=(0,a.useState)(!1),y=(0,o.Z)(h,2),b=y[0],E=y[1],T=(0,s.TH)(),x=v.get("search");(0,a.useEffect)((function(){x&&(E(!0),(0,$.vw)(x).then((function(t){c((0,r.Z)(t.results))})).catch((function(t){return console.log(t)})).finally(E(!1)))}),[x]);return(0,ut.jsxs)(ut.Fragment,{children:[(0,ut.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!d.trim())return W.error("emptyQuery");d.trim()!==x&&(c([]),g({search:d.trim()}))},children:[(0,ut.jsx)("label",{htmlFor:"",children:(0,ut.jsx)("input",{type:"text",name:"search",onChange:function(t){f(t.target.value)}})}),(0,ut.jsx)("button",{type:"submit",children:"Search"})]}),b&&(0,ut.jsx)(ct.Z,{}),(0,ut.jsx)(at,{children:(0,ut.jsx)(it,{children:n.map((function(t){return(0,ut.jsx)(st,{children:(0,ut.jsx)(ot,{to:"/movies/".concat(t.id),state:{from:T},children:(0,ut.jsx)(J.u,{movie:t})})},t.id)}))})}),(0,ut.jsx)(D,{})]})}},409:function(t,e,n){n.d(e,{IV:function(){return f},Mc:function(){return l},PY:function(){return u},vw:function(){return p},wH:function(){return d}});var r=n(5861),o=n(4687),a=n.n(o),i=n(1912),s="https://api.themoviedb.org/3",c="7944ae355bdc42ac579681e106149d6b",u=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/trending/all/day?api_key=").concat(c,"&page=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(c,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(c,"&query=").concat(e,"&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},7107:function(t,e,n){t.exports=n.p+"static/media/noposter.774c77162175de788c73.jpg"}}]);
//# sourceMappingURL=402.4b212628.chunk.js.map