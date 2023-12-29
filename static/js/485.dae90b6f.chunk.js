"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{8617:function(e,t,r){r.d(t,{jTe:function(){return a}});var n=r(9983);function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(e)}},828:function(e,t,r){r.d(t,{Uw3:function(){return a}});var n=r(9983);function a(e){return(0,n.w_)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-0.015 0.008 0.015-8.918 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z"}}]})(e)}},332:function(e,t,r){r.d(t,{$:function(){return l}});var n=r(1413),a=r(9439),o=r(2791),i=function(e){var t,r=e.radius,n=e.size,i=e.percentage,s=e.duration,l=e.color,c=e.startPosition,u=e.returnState,p=e.roundLineCap,d=e.animation,f=e.percentageAnimation,g=e.reverse,h=e.reverseDuration,m=e.loopCount,x=e.startDelay,y=e.reverseDelay,v=e.antiClockWise,w=e.margin,C=e.separator,k=e.styles,S=e.chartValue,b=function(e){return e.toString().toLowerCase().includes("em")||e.toString().toLowerCase().includes("em")?16*parseFloat(e,10):parseFloat(e,10)},E=(0,o.useState)(0),D=(0,a.Z)(E,2),Z=D[0],L=D[1],z=(0,o.useState)(0),A=(0,a.Z)(z,2),N=A[0],W=A[1],P=(0,o.useState)(!1),T=(0,a.Z)(P,2),B=T[0],F=T[1],_=(0,o.useState)(1),M=(0,a.Z)(_,2),V=M[0],j=M[1];t="pie-chart"!==k?2*Math.PI*(b(r)-b(n)/2):2*Math.PI*(b(r)/2);var H,I=function(e){return t-t*parseInt(e)/100+(![0,100].includes(e)&&p&&"pie-chart"!==k?b(n)/4:0)},G="#0ea5e9",R="#0ea5e9",O=Object.keys(S).map(Number).sort((function(e,t){return t-e})),U=function(e){return e>i?i:e<0?0:e},Y=function(e,t){setTimeout((function(){L((function(e){return U(e+t)})),u(f?U(Z+t):i),Z+t>=i&&F(!0),Z+t<=0&&(F(!1),j((function(e){return++e})))}),function(e,t){return 1===t&&1!==V&&0===Z?x+e/100:-1===t&&Z===i?y+e/100:e/100}(e,t))};(0,o.useEffect)((function(){(d||f)&&"pie-chart"!==k?m>=V?i>Z&&!B?Y(s,1):Z>0&&g&&B?Y(h,-1):Z>0&&!g&&B&&(F(!1),j((function(e){return++e})),L(0),u(f?0:i)):i>Z&&Y(s,1):d&&"pie-chart"===k?N<100&&setTimeout((function(){W((function(e){return++e}))}),s/100):(L(i),u(i))})),Array.isArray(l)?(G=void 0===l[0]?G:l[0],R=void 0===l[1]?R:l[1]):G=R=l,H=v?"rotateZ(".concat(c+90,"deg) rotateY(180deg)"):"rotateZ(".concat(c-90,"deg)");var $=2*b(r);return o.createElement("svg",{className:"svg",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:$,height:$,viewBox:"0 0 ".concat($," ").concat($),style:{transform:H,margin:w}},o.createElement("defs",null,o.createElement("linearGradient",{id:"".concat(G.substring(1),"-").concat(R)},o.createElement("stop",{offset:"0%",stopColor:R}),o.createElement("stop",{offset:"100%",stopColor:G}))),o.createElement("circle",{className:"stroke-circles circle",style:{stroke:"url(#".concat(G.substring(1),"-").concat(R)},cx:b(r),cy:b(r),r:b(r)-b(n)/2,strokeLinecap:p?"round":"butt",strokeWidth:n,display:"pie-chart"!==k?"flex":"none",strokeDasharray:t,strokeDashoffset:I(d?Z:i)}),o.createElement("circle",{className:"circle",cx:b(r),cy:b(r),r:b(r)-b(n)/2,style:{stroke:C[2]},strokeLinecap:"butt",strokeWidth:n,display:"separators"===k?"flex":"none",strokeDasharray:"".concat(C[0]," , ").concat((t-C[0]*C[1])/C[1]," ")}),O.map((function(e){return function(e){return o.createElement("circle",{className:"circle",r:"25%",cx:"50%",cy:"50%",key:e,strokeWidth:r,strokeDasharray:t,stroke:S[e],display:"pie-chart"===k?"flex":"none",strokeDashoffset:I(e>N&&d?N:e)})}(e)})))};function s(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}s(".outer-div{position:relative}.inner-div,.outer-div{border-radius:50%}.circle{fill:none}.svg{left:0;position:absolute;top:0}.text-area{align-items:center;display:flex;flex-direction:column;justify-content:center}.text-area p{color:#00235b;font-family:Verdana,Geneva,Tahoma,sans-serif;margin:0;padding:0}");var l=function(e){var t,r,s,l,c,u=e.color,p=e.trackColor,d=e.radius,f=e.styles,g=e.size,h=e.percentage,m=e.duration,x=e.startPosition,y=e.shadow,v=e.innerShadowStyle,w=e.outerShadowStyle,C=e.text,k=e.showPercentage,S=e.percentageStyle,b=e.textStyle,E=e.children,D=e.roundLineCap,Z=e.animation,L=e.percentageAnimation,z=e.reverse,A=e.reverseDuration,N=e.loopCount,W=e.startDelay,P=e.reverseDelay,T=e.antiClockWise,B=e.padding,F=e.backgroundColor,_=e.separator,M=e.chartValue,V=(0,o.useState)(0),j=(0,a.Z)(V,2),H=j[0],I=j[1],G=function(e){return e.toString().toLowerCase().includes("em")||e.toString().toLowerCase().includes("em")?16*parseFloat(e,10):parseFloat(e,10)};y?(l=null!==v?v:{boxShadow:"inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05)"},c=null!==w?w:{boxShadow:"6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7)"}):l=c={boxShadow:"none"},null===S&&(S={fontSize:"1.5rem",fontWeight:"600"}),null===b&&(b={fontSize:"1.3rem",fontWeight:"500"});var R=2*G(d),O=2*(G(d)-G(g));r={width:O,height:O},s={width:R,height:R};var U={width:R+2*G(B),height:R+2*G(B),background:F};return t={borderColor:p,borderWidth:g,borderStyle:"pie-chart"===f?"none":"solid",margin:B},o.createElement("div",{className:"outer-div",style:(0,n.Z)((0,n.Z)({},U),c)},o.createElement("div",{className:"inner-div",style:(0,n.Z)((0,n.Z)((0,n.Z)({},t),s),l)},o.createElement(i,{radius:d,size:g,percentage:h,duration:m,color:u,startPosition:x,returnState:function(e){I(e)},roundLineCap:D,animation:Z,percentageAnimation:L,reverse:z,reverseDuration:A,loopCount:N,startDelay:W,reverseDelay:P,antiClockWise:T,margin:B,separator:_,styles:f,chartValue:M}),o.createElement("div",{className:"text-area",style:(0,n.Z)({},r)},o.createElement("p",{style:(0,n.Z)((0,n.Z)({},S),{},{display:"pie-chart"!==f?"flex":"none"})},k?"".concat(H,"%"):""),o.createElement("p",{style:(0,n.Z)((0,n.Z)({},b),{},{display:"pie-chart"!==f?"flex":"none"})},C),E)))};l.defaultProps={color:"#0ea5e9",radius:"5rem",styles:"solid",size:"1rem",percentage:75,duration:2e3,trackColor:"#efefef",startPosition:0,shadow:!1,innerShadowStyle:null,outerShadowStyle:null,text:null,showPercentage:!0,percentageStyle:null,textStyle:null,roundLineCap:!0,animation:!0,percentageAnimation:!0,reverse:!0,reverseDuration:2e3,loopCount:0,startDelay:100,reverseDelay:100,antiClockWise:!1,padding:0,backgroundColor:"transparent",separator:[5,12,"#fff"],chartValue:{20:"#9CB4CC",60:"#0EA293",100:"#FFA559"}},s(".outer-div-linear{padding:2px}.inner-div-linear{align-items:center;display:flex;justify-content:center;position:relative}.progress-div{position:relative}.progress-bar,.track{align-items:center;display:flex;position:absolute}.on-top-percentage{font-weight:600;padding:0 5px;width:fit-content;width:100%}.on-top-percentage,.percentage-linear{font-family:Arial,Helvetica,sans-serif;margin:0}.percentage-linear{font-size:1.2rem;padding:0}")}}]);
//# sourceMappingURL=485.dae90b6f.chunk.js.map