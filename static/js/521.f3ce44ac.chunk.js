"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{9198:function(n,t,e){e.d(t,{W:function(){return i}});var r,a=e(168),i=e(4709).Z.div(r||(r=(0,a.Z)(["\n  padding: 16px;\n\n  @media (min-width: 1280px) {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"])))},4521:function(n,t,e){e.r(t),e.d(t,{default:function(){return B}});var r,a,i,c,o,s,d,u,p,l,x,f,h=e(9439),m=e(2791),v=e(7689),g=e(409),w=e(828),_=e(7107),Z=function(n){if(n){var t=Math.floor(n/60),e=n%60;return t>0?"".concat(t,"h ").concat(e,"m"):"".concat(e,"m")}},j=e(168),k=e(1087),b=e(4709),y=e(9198),S=e(9530),T=S.$.colors,E=S.$.shadows,C=(0,b.Z)(y.W)(r||(r=(0,j.Z)([""]))),O=b.Z.div(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  gap: 18px;\n  padding: 14px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  background-image: linear-gradient(\n      to bottom,\n      rgba(59, 67, 81, 0.8),\n      "," 80%\n    ),\n    url(",");\n\n  @media (min-width: 480px) {\n    flex-direction: row;\n  }\n"])),T.bcgMain,(function(n){return"https://image.tmdb.org/t/p/w1280".concat(n.backdrop)})),R=b.Z.div(i||(i=(0,j.Z)(["\n  @media (min-width: 480px) {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    gap: 14px;\n  }\n"]))),P=b.Z.div(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  gap: 18px;\n"]))),A=b.Z.div(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  @media (min-width: 480px) {\n    align-items: flex-start;\n  }\n"]))),U=b.Z.p(s||(s=(0,j.Z)(["\n  text-align: center;\n  color: ",";\n"])),T.textTitle),D=b.Z.h1(d||(d=(0,j.Z)(["\n  text-align: center;\n  font-size: 28px;\n  color: ",";\n  width: 100%;\n"])),T.textTitle),H=b.Z.div(u||(u=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  @media (min-width: 480px) {\n    justify-content: flex-start;\n  }\n"]))),W=b.Z.img(p||(p=(0,j.Z)(["\n  @media (max-width: 479.8px) {\n    margin: 0 auto;\n  }\n  @media (max-width: 480px) {\n    text-align: left;\n  }\n"]))),K=b.Z.span(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n"]))),F=(0,b.Z)(k.rU)(x||(x=(0,j.Z)(["\n  border-radius: 4px;\n  color: white;\n  background-color: grey;\n  padding: 8px;\n  text-decoration: none;\n  transition: box-shadow 200ms ease-in;\n\n  :hover {\n    box-shadow: ",";\n  }\n"])),E.blackShadow),I=e(8617),L=e(184),M=(0,b.Z)(k.rU)(f||(f=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #df4d4d;\n  }\n"]))),N=function(n){var t=n.to,e=n.children;return(0,L.jsxs)(M,{to:t,children:[(0,L.jsx)(I.jTe,{size:"24"}),e]})},z=e(536);function B(){var n,t,e,r=(0,m.useState)(null),a=(0,h.Z)(r,2),i=a[0],c=a[1],o=(0,v.UO)(),s=null!==(n=null===(t=(0,v.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";return(0,m.useEffect)((function(){(0,g.Mc)(o.id).then((function(n){c(n)})).catch((function(n){return console.log(n)}))}),[o.id]),(0,L.jsxs)(C,{children:[(0,L.jsx)(N,{to:s,children:"Back to movies"}),i&&(0,L.jsxs)(P,{children:[(0,L.jsxs)(O,{backdrop:null===i||void 0===i?void 0:i.backdrop_path,children:[(0,L.jsx)(D,{children:i.title||i.name}),(0,L.jsxs)(R,{children:[(0,L.jsx)(W,{width:"200",src:i.poster_path?"https://image.tmdb.org/t/p/w200/".concat(i.poster_path):_,alt:"".concat(i.title||i.name)}),(0,L.jsxs)(A,{children:[(0,L.jsx)(U,{children:(null!==(e=i.release_date)&&void 0!==e?e:i.first_air_date).slice(0,4)}),(0,L.jsx)(U,{children:i.genres.map((function(n){return n.name})).join(", ")}),(0,L.jsx)(U,{children:Z(i.runtime)}),(0,L.jsx)(U,{children:i.vote_average>0&&(0,L.jsxs)(K,{children:[(0,L.jsx)(w.Uw3,{}),i.vote_average.toFixed(1),"/10"]})}),(0,L.jsxs)(H,{children:[(0,L.jsx)(F,{to:"cast",state:{from:s},children:"Cast"}),(0,L.jsx)(F,{to:"Reviews",state:{from:s},children:"Reviews"})]})]})]})]}),(0,L.jsx)(m.Suspense,{fallback:(0,L.jsx)(z.Z,{}),children:(0,L.jsx)(v.j3,{})})]})]})}},409:function(n,t,e){e.d(t,{IV:function(){return l},Mc:function(){return u},PY:function(){return d},vw:function(){return x},wH:function(){return p}});var r=e(5861),a=e(4687),i=e.n(a),c=e(1912),o={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies_1",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_MAIN_URL,s={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies_1",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/trending/all/day?api_key=").concat(s,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7107:function(n,t,e){n.exports=e.p+"static/media/noposter.774c77162175de788c73.jpg"}}]);
//# sourceMappingURL=521.f3ce44ac.chunk.js.map