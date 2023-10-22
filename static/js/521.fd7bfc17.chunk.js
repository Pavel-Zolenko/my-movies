"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{9198:function(n,t,e){e.d(t,{W:function(){return i}});var r,a=e(168),i=e(4709).Z.div(r||(r=(0,a.Z)(["\n  padding: 16px;\n\n  @media (min-width: 1280px) {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"])))},4521:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var r,a,i,c,o,s,u,d,p,l,x,f,h=e(9439),m=e(2791),g=e(7689),v=e(409),w=e(828),Z=e(7107),b=function(n){if(n){var t=Math.floor(n/60),e=n%60;return t>0?"".concat(t,"h ").concat(e,"m"):"".concat(e,"m")}},j=e(168),k=e(1087),y=e(4709),_=e(9198),M=e(9530),T=M.$.colors,U=M.$.shadows,z=(0,y.Z)(_.W)(r||(r=(0,j.Z)([""]))),C=y.Z.div(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  gap: 18px;\n  padding: 14px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  background-image: linear-gradient(\n      to bottom,\n      rgba(59, 67, 81, 0.8),\n      "," 80%\n    ),\n    url(",");\n\n  @media (min-width: 480px) {\n    flex-direction: row;\n  }\n"])),T.bcgMain,(function(n){return"https://image.tmdb.org/t/p/w1280".concat(n.backdrop)})),S=y.Z.div(i||(i=(0,j.Z)(["\n  @media (min-width: 480px) {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    gap: 14px;\n  }\n"]))),H=y.Z.div(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  gap: 18px;\n"]))),R=y.Z.div(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  @media (min-width: 480px) {\n    align-items: flex-start;\n  }\n"]))),W=y.Z.p(s||(s=(0,j.Z)(["\n  text-align: center;\n  color: ",";\n"])),T.textTitle),$=y.Z.h1(u||(u=(0,j.Z)(["\n  text-align: center;\n  font-size: 28px;\n  color: ",";\n  width: 100%;\n"])),T.textTitle),q=y.Z.div(d||(d=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  @media (min-width: 480px) {\n    justify-content: flex-start;\n  }\n"]))),B=y.Z.img(p||(p=(0,j.Z)(["\n  @media (max-width: 479.8px) {\n    margin: 0 auto;\n  }\n  @media (max-width: 480px) {\n    text-align: left;\n  }\n"]))),E=y.Z.span(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n"]))),F=(0,y.Z)(k.rU)(x||(x=(0,j.Z)(["\n  border-radius: 4px;\n  color: white;\n  background-color: grey;\n  padding: 8px;\n  text-decoration: none;\n  transition: box-shadow 200ms ease-in;\n\n  :hover {\n    box-shadow: ",";\n  }\n"])),U.blackShadow),I=e(8617),O=e(184),P=(0,y.Z)(k.rU)(f||(f=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #df4d4d;\n  }\n"]))),V=function(n){var t=n.to,e=n.children;return(0,O.jsxs)(P,{to:t,children:[(0,O.jsx)(I.jTe,{size:"24"}),e]})},Y=e(3630);function A(){var n,t,e,r=(0,m.useState)(null),a=(0,h.Z)(r,2),i=a[0],c=a[1],o=(0,g.UO)(),s=null!==(n=null===(t=(0,g.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";return(0,m.useEffect)((function(){(0,v.Mc)(o.id).then((function(n){c(n)})).catch((function(n){return console.log(n)}))}),[o.id]),(0,O.jsxs)(z,{children:[(0,O.jsx)(V,{to:s,children:"Back to movies"}),i&&(0,O.jsxs)(H,{children:[(0,O.jsxs)(C,{backdrop:null===i||void 0===i?void 0:i.backdrop_path,children:[(0,O.jsx)($,{children:i.title||i.name}),(0,O.jsxs)(S,{children:[(0,O.jsx)(B,{width:"200",src:i.poster_path?"https://image.tmdb.org/t/p/w200/".concat(i.poster_path):Z,alt:"".concat(i.title||i.name)}),(0,O.jsxs)(R,{children:[(0,O.jsx)(W,{children:(null!==(e=i.release_date)&&void 0!==e?e:i.first_air_date).slice(0,4)}),(0,O.jsx)(W,{children:i.genres.map((function(n){return n.name})).join(", ")}),(0,O.jsx)(W,{children:b(i.runtime)}),(0,O.jsx)(W,{children:i.vote_average>0&&(0,O.jsxs)(E,{children:[(0,O.jsx)(w.Uw3,{}),i.vote_average.toFixed(1),"/10"]})}),(0,O.jsxs)(q,{children:[(0,O.jsx)(F,{to:"cast",state:{from:s},children:"Cast"}),(0,O.jsx)(F,{to:"Reviews",state:{from:s},children:"Reviews"})]})]})]})]}),(0,O.jsx)(m.Suspense,{fallback:(0,O.jsx)(Y.Z,{}),children:(0,O.jsx)(g.j3,{})})]})]})}},409:function(n,t,e){e.d(t,{IV:function(){return l},Mc:function(){return d},PY:function(){return u},vw:function(){return x},wH:function(){return p}});var r=e(5861),a=e(4687),i=e.n(a),c=e(1912),o="https://api.themoviedb.org/3",s="7944ae355bdc42ac579681e106149d6b",u=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/trending/all/day?api_key=").concat(s,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7107:function(n,t,e){n.exports=e.p+"static/media/noposter.774c77162175de788c73.jpg"}}]);
//# sourceMappingURL=521.fd7bfc17.chunk.js.map