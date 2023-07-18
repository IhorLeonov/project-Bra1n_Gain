"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[963],{5740:function(n,e,t){t.d(e,{u:function(){return b}});var o,r,i,a=t(4164),c=t(2791),l=t(9434),s=t(5581),d=t(168),p=t(6444),x=t(4373),u=p.ZP.div(o||(o=(0,d.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1200;\n"]))),h=p.ZP.div(r||(r=(0,d.Z)(["\n  position: relative;\n  box-sizing: border-box;\n  width: auto;\n  height: auto;\n  border-radius: 8px;\n  border: 1px solid ",";\n  background: ",";\n  box-shadow: 0px 4px 16px 0px #1111111a;\n"])),(function(n){return n.theme.colors.modalBorderColor}),(function(n){return n.theme.colors.modalBgColor})),f=(0,p.ZP)(x.QAE)(i||(i=(0,d.Z)(["\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  width: 24px;\n  height: 24px;\n  color: ",";\n  cursor: pointer;\n  transition: color 0.5s ease;\n  \n  &:hover {\n    color: #3e85f3;\n  }\n"])),(function(n){return n.theme.colors.notFoundTextColor})),g=t(184),m=document.querySelector("#modal-root"),b=function(n){var e=n.children,t=(0,l.I0)(),o=function(){return t((0,s.$J)())};return(0,c.useEffect)((function(){var n=function(n){"Escape"===n.code&&o()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]),(0,a.createPortal)((0,g.jsx)(u,{children:(0,g.jsxs)(h,{children:[(0,g.jsx)(f,{onClick:o}),e]})}),m)}},963:function(n,e,t){t.r(e),t.d(e,{default:function(){return Xe}});var o,r,i,a,c,l,s,d,p,x,u,h,f,g,m,b,w,v,j,y,Z,k,P,C,O,z,B,_,E,S,I,T,G=t(9439),M=t(2791),A=t(7689),U=t(168),F=t(6444),L=F.ZP.p(o||(o=(0,U.Z)(["\n  font-family: Inter;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-right: 8px;\n  transition: color 0.3s ease;\n  \n  &:hover {\n    color: ",";\n    \n  }\n\n  @media (min-width: 768px) {\n    margin-right: 14px;\n    font-size: 18px;\n    line-height: 1;\n  }\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryBlueColor}),(function(n){return n.theme.colors.headerFontcolor})),R=F.ZP.div(r||(r=(0,U.Z)(["\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    0deg,\n    rgba(228, 216, 30, 0.7147233893557423) 9%,\n    rgba(241, 255, 13, 0.8155637254901961) 100%\n  );\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),H=F.ZP.p(i||(i=(0,U.Z)(["\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.3;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),N=F.ZP.div(a||(a=(0,U.Z)(["\n  width: 32px;\n  height: 32px;\n  overflow: hidden;\n  border: 1.8px solid ",";\n  border-radius: 50%;\n\n  & img {\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n  }\n\n  @media (min-width: 768px) {\n    width: 44px;\n    height: 44px;\n  }\n"])),(function(n){return n.theme.colors.primaryBlueColor})),W=F.ZP.div(c||(c=(0,U.Z)(["\n  align-items: center;\n  display: flex;\n"]))),$=t(7834),D=t(1087),V=t(184),q=function(){var n=(0,$.a)(),e=n.user.name,t=e.split(" ")[0],o=n.user.avatarUrl,r=o?(0,V.jsx)("img",{src:"".concat(o),alt:"UserPicture"}):(0,V.jsx)(R,{className:"initials",children:(0,V.jsx)(H,{children:e})});return(0,V.jsxs)(W,{children:[(0,V.jsx)(D.rU,{to:"/layout/account",children:(0,V.jsx)(L,{children:t||"Name"})}),(0,V.jsx)(N,{children:r})]})},J=t(3541),Q=t(9434),X=t(5581),Y=t(4217),K=t(6856),nn=t(9230),en=t(5880),tn=t(3853),on=F.ZP.header(l||(l=(0,U.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 64px;\n  font-family: var(--title-font);\n\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 32px;\n  }\n"]))),rn=(0,F.ZP)(en.pLM)(s||(s=(0,U.Z)(["\n  font-size: 24px;\n  color: ",";\n  transition: transform 0.5s ease, color 0.5s ease;\n\n  &:hover {\n    transform: scale(1.2);\n    cursor: pointer;\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    display: none;\n  }\n"])),(function(n){return n.theme.colors.modalInputTextColor}),(function(n){return n.theme.colors.primaryBlueColor})),an=(0,F.iv)(d||(d=(0,U.Z)(["\n  font-size: 24px;\n  color: ",";\n  margin-left: 18px;\n  margin-right: 10px;\n  cursor: pointer;\n  transition: color 0.3s ease;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n    margin-left: 24px;\n    margin-right: 14px;\n  }\n\n  &:hover {\n    color: #f3b249;\n  }\n"])),(function(n){return n.theme.colors.primaryBlueColor})),cn=(0,F.ZP)(tn.wOW)(p||(p=(0,U.Z)(["\n  ","\n"])),an),ln=(0,F.ZP)(tn.kXG)(x||(x=(0,U.Z)(["\n  ","\n"])),an),sn=F.ZP.div(u||(u=(0,U.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 1279px) {\n    display: none;\n  }\n"]))),dn=F.ZP.img(h||(h=(0,U.Z)(["\n  width: 64px;\n  height: 60px;\n  margin-right: 8px;\n"]))),pn=F.ZP.div(f||(f=(0,U.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n\n  @media screen and (min-width: 768px) {\n  }\n"]))),xn=F.ZP.div(g||(g=(0,U.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n  }\n"]))),un=F.ZP.h2(m||(m=(0,U.Z)(["\n  color: ",";\n  display: block;\n  font-weight: 700;\n  font-size: 32px;\n  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),\n    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);\n\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 8px;\n  }\n"])),(function(n){return n.theme.colors.headerFontcolor})),hn=F.ZP.p(b||(b=(0,U.Z)(["\n  color: ",";\n\n  display: block;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.3;\n"])),(function(n){return n.theme.colors.headerFontcolor})),fn=F.ZP.span(w||(w=(0,U.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryBlueColor})),gn=F.ZP.button(v||(v=(0,U.Z)(["\n  width: 97px;\n  height: 32px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.33;\n  transition: transform 0.5s ease, background-color 0.5s ease;\n\n  @media screen and (min-width: 768px) {\n    width: 130px;\n    height: 42px;\n    border-radius: 14px;\n    padding: 12px 32px;\n    font-size: 14px;\n    line-height: 1.3;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    transform: scale(1.2);\n    // transition-duration: 500ms;\n  }\n"])),(function(n){return n.theme.colors.buttonsHoverColor})),mn=t(614),bn=t(5861),wn=t(4687),vn=t.n(wn),jn=t(1243),yn=t(6375),Zn=t(6907),kn=F.ZP.div(j||(j=(0,U.Z)(["\n  box-sizing: border-box;\n  margin: 0px;\n  width: 335px;\n  padding: 28px 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 468px;\n    padding: 32px;\n  }\n"]))),Pn=F.ZP.label(y||(y=(0,U.Z)(["\n  display: block;\n  width: 100%;\n  color: ",";\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  margin: 0;\n  text-align: start;\n  margin-bottom: 8px;\n"])),(function(n){return n.theme.colors.modalLabelTextColor})),Cn=F.ZP.div(Z||(Z=(0,U.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),On=F.ZP.div(k||(k=(0,U.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),zn=F.ZP.form(P||(P=(0,U.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Bn=F.ZP.textarea(C||(C=(0,U.Z)(["\n  width: 295px;\n  height: 130px;\n  flex-shrink: 0;\n  border-radius: 8px;\n  background: ",";\n  outline: none;\n  border: 1px solid ",";\n  padding: 12px 14px;\n\n  color: ",";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n\n  resize: none;\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 30px #f2f2f2;\n    border-radius: 12px;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #e7e5e5;\n    border-radius: 12px;\n  }\n\n  &::placeholder {\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 404px;\n    height: 127px;\n\n    /* width */\n    ::-webkit-scrollbar {\n      width: 8px;\n    }\n  }\n"])),(function(n){return n.theme.colors.modalInputBgColor}),(function(n){return n.theme.colors.modalInputBorderColor}),(function(n){return n.theme.colors.modalInputTextColor}),(function(n){return n.theme.colors.modalInputTextColor})),_n=F.ZP.div(O||(O=(0,U.Z)(["\n  display: flex;\n  gap: 8px;\n  margin-top: 14px;\n"]))),En=F.ZP.button(z||(z=(0,U.Z)(["\n  display: flex;\n  width: 144px;\n  height: 42px;\n  padding: 8px 20px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n\n  border-radius: 8px;\n  background: #3e85f3;\n\n  border: none;\n  outline: none;\n\n  color: #fff;\n\n  transition: linear 0.3s;\n\n  &:hover,\n  &:focus {\n    scale: 1.02;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 198px;\n    height: 48px;\n\n    padding: 15px 85px;\n  }\n"]))),Sn=(0,F.ZP)(En)(B||(B=(0,U.Z)(["\n  border-radius: 8px;\n  background: ",";\n  color: ",";\n"])),(function(n){return n.theme.colors.modalReviewSecondBtnColor}),(function(n){return n.theme.colors.modalInputTextColor})),In=F.ZP.button(_||(_=(0,U.Z)(["\n  display: flex;\n  width: 30px;\n  height: 30px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  transition-duration: 500ms;\n\n  background-color: ",";\n  color: ",";\n\n  &:hover,\n  &:focus {\n    background: #3e85f3;\n    color: #fff;\n  }\n"])),(function(n){return n.editMode?"#3e85f3":"".concat(n.theme.colors.modalReviewSecondBtnColor)}),(function(n){return n.editMode?"#fff":"#3e85f3"})),Tn=(0,F.ZP)(Zn.A0D)(E||(E=(0,U.Z)(["\n  &:hover,\n  &:focus {\n    fill: white;\n    color: #fff;\n  }\n"]))),Gn=(0,F.ZP)(tn.Ybf)(S||(S=(0,U.Z)(["\n  &:hover,\n  &:focus {\n    color: white;\n  }\n"]))),Mn=F.ZP.button(I||(I=(0,U.Z)(["\n  display: flex;\n  width: 30px;\n  height: 30px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition-duration: 500ms;\n\n  border-radius: 50%;\n  background: rgba(234, 61, 101, 0.2);\n  color: ",";\n\n  &:hover,\n  &:focus {\n    background: #ea3d65;\n    color: #fff;\n    transition-duration: 500ms;\n  }\n"])),(function(n){return n.editMode?"#fff":"#EA3D65"})),An=t(6155),Un=function(n){var e=n.startRating,t=n.startComment,o=n.showButtons,r=(0,nn.$G)().t,i=(0,Q.I0)(),a=function(){return i((0,X.$J)())},c=(0,M.useState)(e),l=(0,G.Z)(c,2),s=l[0],d=l[1],p=(0,M.useState)(t),x=(0,G.Z)(p,2),u=x[0],h=x[1],f=(0,M.useState)(!1),g=(0,G.Z)(f,2),m=g[0],b=g[1];(0,M.useEffect)((function(){}),[s]),(0,M.useEffect)((function(){}),[u]),(0,M.useEffect)((function(){}),[m]);var w=function(n){h(n.target.value)};return(0,V.jsxs)(kn,{children:[(0,V.jsx)(Pn,{children:r("header.feedbackPopUp.Rating")}),(0,V.jsx)(Cn,{children:(0,V.jsx)(yn.i,{onClick:function(n){d(n)},SVGstyle:{width:24,height:24},initialValue:e,readonly:!m&&!o})}),(0,V.jsxs)(zn,{onSubmit:function(n){n.preventDefault(),i(m?(0,An.g8)({rate:s,comment:u}):(0,An.N_)({rate:s,comment:u})),a()},children:[(0,V.jsxs)(On,{children:[(0,V.jsx)(Pn,{htmlFor:"text",children:r("header.feedbackPopUp.Review")}),!o&&(0,V.jsxs)(_n,{children:[(0,V.jsx)(In,{type:"button",onClick:function(n){n.preventDefault(),b(!0)},editMode:m,children:(0,V.jsx)(Tn,{size:16})}),(0,V.jsx)(Mn,{type:"button",onClick:function(n){n.preventDefault(),i((0,An.i0)({})),a()},children:(0,V.jsx)(Gn,{size:16})})]})]}),!o&&!m&&(0,V.jsx)(Bn,{id:"text",type:"text",name:"text",placeholder:r("header.feedbackPopUp.EnterText"),value:t,maxlength:"300",disabled:!0}),m&&(0,V.jsx)(Bn,{id:"text",type:"text",name:"text",placeholder:"Enter text",value:u,onChange:w,maxlength:"300",required:!0}),o&&(0,V.jsx)(Bn,{id:"text",type:"text",name:"text",placeholder:"Enter text",value:u,onChange:w,maxlength:"300",required:!0}),(0,V.jsxs)(_n,{children:[o&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(En,{type:"submit",children:r("header.feedbackPopUp.Save")}),(0,V.jsx)(Sn,{type:"button",onClick:a,children:r("header.feedbackPopUp.Cancel")})]}),m&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(En,{type:"submit",children:r("header.feedbackPopUp.Edit")}),(0,V.jsx)(Sn,{type:"button",onClick:a,children:r("header.feedbackPopUp.Cancel")})]})]})]})]})},Fn=t(5740),Ln=function(n){n.review;var e=(0,M.useState)(5),t=(0,G.Z)(e,2),o=t[0],r=t[1],i=(0,M.useState)(""),a=(0,G.Z)(i,2),c=a[0],l=a[1],s=(0,M.useState)(!1),d=(0,G.Z)(s,2),p=d[0],x=d[1],u=(0,M.useState)(!0),h=(0,G.Z)(u,2),f=h[0],g=h[1];(0,M.useEffect)((function(){m()}),[]);var m=function(){var n=(0,bn.Z)(vn().mark((function n(){var e;return vn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,jn.Z.get("https://bra1n-gain-backend.onrender.com/api/reviews/own");case 3:e=n.sent,r(e.data.rate),l(e.data.comment),g(!1),x(!0),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(0),r(5),l(""),x(!0);case 15:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),b=(0,Q.v9)(mn.rB);return(0,V.jsx)(V.Fragment,{children:p&&(0,V.jsx)(Fn.u,{children:"feedback"===b&&p&&(0,V.jsx)(Un,{startRating:o,startComment:c,showButtons:f})})})},Rn=function(){var n=(0,nn.$G)().t,e=(0,Q.v9)(Y.Pu),t=(0,Q.v9)(Y.VT),o=(0,A.TH)().pathname,r=(0,Q.I0)(),i="";i=o.startsWith("/layout/account")?"".concat(n("header.UserProfile")):o.startsWith("/layout/calendar")?"".concat(n("header.Calendar")):"".concat(n("header.Statistics"));var a=!1;o.startsWith("/layout/calendar/day")&&(a=!0);var c=function(){return r((0,J.X8)())},l=(0,Q.v9)(mn.rB),s=(0,Q.v9)(mn.Qx);return(0,V.jsxs)(on,{children:[(0,V.jsx)(rn,{onClick:function(){return r((0,J.cN)())}}),(0,V.jsxs)(sn,{children:[a&&(0,V.jsx)(dn,{src:"/project-Bra1n_Gain/images/icons/goose-task.svg",alt:"goose"}),(0,V.jsxs)("div",{children:[(0,V.jsx)(un,{children:i}),a&&(0,V.jsxs)(hn,{children:[(0,V.jsx)(fn,{children:n("header.SloganPartOne")})," ",n("header.SloganPartTwo")]})]})]}),(0,V.jsxs)(pn,{children:[(0,V.jsx)(gn,{onClick:function(){r((0,X.vY)()),r((0,X.$J)())},children:n("header.Feedback")}),(0,V.jsxs)(xn,{children:[e?(0,V.jsx)(cn,{onClick:c}):(0,V.jsx)(ln,{onClick:c}),(0,V.jsx)(K.$lZ,{title:t,size:24,onClick:function(){return r((0,J.v7)())}}),(0,V.jsx)(q,{})]})]}),"feedback"===l&&s&&(0,V.jsx)(Ln,{})]})},Hn=["title","titleId"];function Nn(){return Nn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},Nn.apply(this,arguments)}function Wn(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function $n(n,e){var t=n.title,o=n.titleId,r=Wn(n,Hn);return M.createElement("svg",Nn({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:e,"aria-labelledby":o},r),t?M.createElement("title",{id:o},t):null,T||(T=M.createElement("path",{strokeWidth:2,d:"m16 18 2 2 4-4M12 15.5H7.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C2 18.907 2 19.604 2 21v0M10 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"})))}var Dn,Vn=M.forwardRef($n),qn=(t.p,["title","titleId"]);function Jn(){return Jn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},Jn.apply(this,arguments)}function Qn(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function Xn(n,e){var t=n.title,o=n.titleId,r=Qn(n,qn);return M.createElement("svg",Jn({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:e,"aria-labelledby":o},r),t?M.createElement("title",{id:o},t):null,Dn||(Dn=M.createElement("path",{strokeWidth:2,d:"M21 10H3m18 2.5V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22H12m4-20v4M8 2v4m6.5 13 2 2 4.5-4.5"})))}var Yn,Kn=M.forwardRef(Xn),ne=(t.p,["title","titleId"]);function ee(){return ee=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},ee.apply(this,arguments)}function te(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function oe(n,e){var t=n.title,o=n.titleId,r=te(n,ne);return M.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 30 30",fill:"none",ref:e,"aria-labelledby":o},r),t?M.createElement("title",{id:o},t):null,Yn||(Yn=M.createElement("path",{d:"M23.8 9.037c0-0.759 0.001-1.305 0.038-1.732 0.037-0.436 0.103-0.596 0.134-0.648 0.008-0.013 0.011-0.016 0.015-0.019l0.001-0c0.009-0.006 0.045-0.031 0.138-0.060 0.208-0.064 0.569-0.112 1.207-0.112s1 0.048 1.207 0.112c0.093 0.029 0.129 0.053 0.138 0.060l0.001 0c0.004 0.003 0.007 0.005 0.015 0.019 0.031 0.052 0.097 0.212 0.134 0.648 0.037 0.427 0.037 0.973 0.037 1.732v13.926c0 0.896-0.051 1.503-0.135 1.915-0.084 0.414-0.182 0.531-0.199 0.548-0.006 0.006-0.011 0.011-0.029 0.020-0.023 0.011-0.072 0.029-0.169 0.046-0.221 0.038-0.511 0.041-1.002 0.041-0.499 0-0.793-0.003-1.015-0.042-0.097-0.017-0.146-0.035-0.168-0.045-0.016-0.008-0.020-0.012-0.025-0.017-0.015-0.016-0.112-0.131-0.195-0.547-0.082-0.413-0.132-1.022-0.132-1.92v-13.926zM25.333 4.2c-1.288 0-2.612 0.136-3.305 1.291-0.302 0.504-0.403 1.084-0.449 1.621-0.046 0.535-0.046 1.177-0.046 1.884v13.968c0 0.954 0.050 1.734 0.175 2.363 0.125 0.625 0.343 1.205 0.761 1.652 0.439 0.47 0.975 0.664 1.466 0.748 0.435 0.075 0.92 0.074 1.344 0.074h0.107c0.418 0 0.9 0 1.333-0.074 0.489-0.084 1.023-0.278 1.463-0.745 0.42-0.445 0.643-1.023 0.77-1.651 0.128-0.63 0.18-1.412 0.18-2.367v-13.968c0-0.706 0-1.349-0.046-1.884-0.046-0.536-0.147-1.117-0.449-1.621-0.693-1.155-2.017-1.291-3.305-1.291zM14.505 12.667c-0.033 0.301-0.035 0.651-0.035 1.111v9.778c0 0.011-0 0.022-0 0.033-0.033 1.146 0.175 1.533 0.299 1.666 0.107 0.115 0.376 0.279 1.23 0.279 0.834 0 1.112-0.162 1.226-0.283 0.127-0.134 0.34-0.522 0.303-1.658-0-0.012-0.001-0.024-0.001-0.036v-9.778c0-0.461-0.001-0.811-0.035-1.111-0.033-0.296-0.089-0.448-0.137-0.529l-0.002-0.003c-0.031-0.053-0.198-0.335-1.356-0.335s-1.324 0.282-1.356 0.335l-0.002 0.003c-0.049 0.081-0.104 0.232-0.137 0.529zM12.698 10.973c0.639-1.066 1.819-1.44 3.302-1.44s2.663 0.374 3.302 1.44c0.284 0.475 0.395 0.99 0.445 1.444 0.049 0.438 0.049 0.908 0.049 1.328v9.793c0.039 1.301-0.16 2.461-0.921 3.268-0.777 0.823-1.869 0.995-2.875 0.995-1.015 0-2.112-0.169-2.887-0.999-0.754-0.808-0.944-1.97-0.909-3.261v-9.795c-0-0.42-0-0.89 0.049-1.328 0.050-0.454 0.161-0.969 0.445-1.444zM5.169 19.359c-0.035 0.352-0.036 0.776-0.036 1.344v3.689c0 0.641 0.155 0.816 0.23 0.88 0.122 0.103 0.453 0.261 1.303 0.261 0.832 0 1.167-0.156 1.296-0.264 0.081-0.068 0.237-0.247 0.237-0.877v-3.669l-0.009-0.27c-0.015-0.439-0.026-0.782-0.059-1.085-0.039-0.363-0.099-0.533-0.146-0.616l-0.001-0.002c-0.012-0.027-0.127-0.285-1.319-0.285-1.196 0-1.336 0.261-1.355 0.297l-0.001 0.003c-0.046 0.078-0.106 0.242-0.141 0.593zM3.356 17.618c0.654-1.112 1.877-1.418 3.31-1.418 1.436 0 2.648 0.308 3.288 1.431 0.276 0.485 0.379 1.020 0.43 1.495 0.043 0.395 0.057 0.841 0.072 1.281 0.003 0.086 0.006 0.172 0.009 0.257l0 0.013 0 0.027v3.689c0 0.991-0.256 1.949-1.047 2.613-0.744 0.624-1.741 0.795-2.753 0.795-1.021 0-2.024-0.169-2.767-0.798-0.79-0.669-1.033-1.63-1.033-2.61v-3.725c-0-0.522-0-1.056 0.047-1.532 0.048-0.487 0.155-1.029 0.442-1.517z"})))}var re,ie,ae,ce,le,se,de=M.forwardRef(oe),pe=(t.p,F.ZP.h3(re||(re=(0,U.Z)(["\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: calc(15 / 14);\n  color: ",";\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.colors.sideBarUserPanelColor}))),xe=F.ZP.div(ie||(ie=(0,U.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),ue=(0,F.ZP)(D.OL)(ae||(ae=(0,U.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n  padding: 16px 20px;\n  gap: 2px;\n  color: "," !important;\n\n  &.active {\n    color: "," !important;\n    background: ",";\n    border-radius: 8px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.colors.sideBarTextColor}),(function(n){return n.theme.colors.sideBarTextActiveColor}),(function(n){return n.theme.colors.accentColor})),he=F.ZP.svg(ce||(ce=(0,U.Z)(["\n  transform: scale(0.85);\n  margin-right: 10px;\n  stroke: ",";\n\n  &.active {\n    stroke: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    transform: scale(1);\n  }\n"])),(function(n){return n.theme.colors.sideBarTextColor}),(function(n){return n.theme.colors.sideBarTextActiveColor})),fe=F.ZP.svg(le||(le=(0,U.Z)(["\n  margin-right: 10px;\n  fill: ",";\n\n  &.active {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.sideBarTextColor}),(function(n){return n.theme.colors.sideBarTextActiveColor})),ge=function(){var n=(0,nn.$G)().t,e=(0,A.TH)();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(pe,{children:n("sidebar.UserPanel")}),(0,V.jsxs)(xe,{children:[(0,V.jsxs)(ue,{to:"account",id:"account",children:[(0,V.jsx)(he,{as:Vn,className:e.pathname.includes("account")?"active":""}),n("sidebar.MyAccount")]}),(0,V.jsxs)(ue,{to:"calendar",id:"calendar",children:[(0,V.jsx)(he,{as:Kn,className:e.pathname.includes("calendar")?"active":""}),n("sidebar.Calendar")]}),(0,V.jsxs)(ue,{to:"statistics",id:"statistics",children:[(0,V.jsx)(fe,{as:de,className:e.pathname.includes("statistics")?"active":""}),n("sidebar.Statistics")]})]})]})},me=t(9273),be=["title","titleId"];function we(){return we=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},we.apply(this,arguments)}function ve(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function je(n,e){var t=n.title,o=n.titleId,r=ve(n,be);return M.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",width:19,height:18,fill:"none",ref:e,"aria-labelledby":o},r),t?M.createElement("title",{id:o},t):null,se||(se=M.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12.5 12.75 16.25 9m0 0L12.5 5.25M16.25 9h-9m0-6.75h-.9c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984c-.245.48-.245 1.11-.245 2.371v6.3c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984.48.245 1.11.245 2.371.245h.9"})))}var ye,Ze,ke,Pe,Ce,Oe,ze,Be,_e,Ee,Se,Ie,Te,Ge=M.forwardRef(je),Me=(t.p,F.ZP.button(ye||(ye=(0,U.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  width: 131px;\n  height: 46px;\n  padding: 14px;\n\n  border: none;\n  background: ",";\n  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);\n  border-radius: 16px;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: calc(18 / 14);\n  letter-spacing: -0.028px;\n  color: ",";\n  transition: background-color 0.5s ease, transform 0.5s ease;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    transform: scale(1.2);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 141px;\n    height: 56px;\n    padding: 16px;\n\n    font-size: 18px;\n    line-height: calc (24 / 18);\n    letter-spacing: -0.028px;\n  }\n"])),(function(n){return n.theme.colors.buttonsColor}),(function(n){return n.theme.colors.Primary}),(function(n){return n.theme.colors.buttonsHoverColor}))),Ae=(0,F.ZP)(Ge)(Ze||(Ze=(0,U.Z)(["\n  margin-left: 8px;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 11px;\n  }\n"]))),Ue=function(){var n=(0,Q.I0)();return(0,V.jsxs)(Me,{type:"button",onClick:function(){n((0,me.ni)())},children:["Log out",(0,V.jsx)(Ae,{})]})},Fe=F.ZP.div(ke||(ke=(0,U.Z)(["\n  box-sizing: border-box;\n  border: 1px solid black;\n  padding: 24px 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: none;\n  width: 225px;\n  z-index: 200;\n  background: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 289px;\n    padding: 24px 32px;\n\n    @media screen and (min-width: 1280px) {\n      padding-top: 32px;\n      padding-left: 24px;\n      padding-right: 24px;\n      padding-bottom: 24px;\n    }\n  }\n"])),(function(n){return n.theme.colors.sideBarBgColor})),Le=F.ZP.div(Pe||(Pe=(0,U.Z)(["\n  box-sizing: border-box;\n  border: 1px solid black;\n  padding: 24px 20px;\n  flex-direction: column;\n  justify-content: space-between;\n  border: none;\n  position: fixed;\n  width: 225px;\n  height: 100%;\n  display: flex;\n  z-index: 200;\n  background: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 289px;\n    padding: 24px 32px;\n  }\n"])),(function(n){return n.theme.colors.sideBarBgColor})),Re=(0,F.ZP)(en.Fk5)(Ce||(Ce=(0,U.Z)(["\n  font-size: 24px;\n  color: ",";\n  @media screen and (min-width: 768px) {\n    transform: scale(1.375);\n    font-size: 34px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    display: none;\n  }\n"])),(function(n){return n.theme.colors.textColor})),He=F.ZP.div(Oe||(Oe=(0,U.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 64px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 50px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 32px;\n  }\n"]))),Ne=F.ZP.div(ze||(ze=(0,U.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),We=F.ZP.div(Be||(Be=(0,U.Z)(["\n  width: 36px;\n  height: 35px;\n  margin-right: 6px;\n\n@media screen and (min-width: 768px) {\n  width: 60px;\n  height: 58px;\n}\n\n@media screen and (min-width: 1280px) {\n  width: 71px;\n  height: 68px;\n}\n"]))),$e=F.ZP.h1(_e||(_e=(0,U.Z)(["\n  color: ",";\n  font-family: inherit;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: calc(22 / 16);\n  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),\n    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);\n    \n//  margin-right: 26px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: calc(24 / 18);\n    \n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 24px;\n    line-height: calc(24 / 24);\n  }\n"])),(function(n){return n.theme.colors.sideBarTextActiveColor})),De=F.ZP.span(Ee||(Ee=(0,U.Z)(["\n  font-style: italic;\n"]))),Ve=F.ZP.button(Se||(Se=(0,U.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n\n  width: 24px;\n  height: 24px;\n\n  @media screen and (min-width: 1280px) {\n    display: none;\n  }\n"]))),qe=function(n){var e=n.doActiveCalendar,t=n.doActiveAccount,o=n.toggleSidebar,r=(0,Q.I0)(),i=(0,Q.v9)(Y.lX),a=(0,M.useState)(!0),c=(0,G.Z)(a,2),l=c[0],s=c[1],d=(0,M.useState)(window.innerWidth),p=(0,G.Z)(d,2),x=p[0],u=p[1];(0,M.useEffect)((function(){var n=function(){u(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),(0,M.useEffect)((function(){s(x>=1280)}),[x]);var h=x<1280?Le:Fe,f=x>=1280||i;return(0,V.jsx)(V.Fragment,{children:f&&(0,V.jsxs)(h,{isOpen:l,className:l?"open":"closed",children:[(0,V.jsxs)("div",{children:[(0,V.jsxs)(He,{children:[(0,V.jsx)(D.rU,{to:"/",children:(0,V.jsxs)(Ne,{children:[(0,V.jsx)(We,{children:(0,V.jsxs)("picture",{children:[(0,V.jsx)("source",{srcSet:"".concat("/project-Bra1n_Gain/images/goose_logo-desctop/goose_logo-desctop.png"," 1x, ").concat("/project-Bra1n_Gain/images/goose_logo-desctop/goose_logo-desctop@2x.png"," 2x, ").concat("/project-Bra1n_Gain/images/goose_logo-desctop/goose_logo-desctop.webp"," 1x, ").concat("/project-Bra1n_Gain/images/goose_logo-desctop/goose_logo-desctop@2x.webp"," 2x"),media:"(min-width: 1280px)"}),(0,V.jsx)("source",{srcSet:"".concat("/project-Bra1n_Gain/images/goose_logo-tablet/goose_logo-tablet.png"," 1x, ").concat("/project-Bra1n_Gain/images/goose_logo-tablet/goose_logo-tablet@2x.png"," 2x, ").concat("/project-Bra1n_Gain/images/goose_logo-tablet/goose_logo-tablet.webp"," 1x, ").concat("/project-Bra1n_Gain/images/goose_logo-tablet/goose_logo-tablet@2x.webp"," 2x"),media:"(min-width: 768px)"}),(0,V.jsx)("source",{srcSet:"".concat("/project-Bra1n_Gain/images/goose_logo-mobile/goose_logo-mobile.png"," 1x, ").concat("/project-Bra1n_Gain/images/goose_logo-mobile/goose_logo-mobile@2x.png"," 2x, ").concat("/project-Bra1n_Gain/images/goose_logo-mobile/goose_logo-mobile.webp"," 1x, ").concat("/project-Bra1n_Gain/images/goose_logo-mobile/goose_logo-mobile@2x.webp"," 2x"),media:"(min-width: 375px)"}),(0,V.jsx)("img",{src:"/project-Bra1n_Gain/images/goose_logo-desctop/goose_logo-desctop.png",alt:"goose logo"})]})}),(0,V.jsxs)($e,{children:["G",(0,V.jsx)(De,{children:"oo"}),"seTrack"]})]})}),(0,V.jsx)(Ve,{type:"button",onClick:function(){return r((0,J.cN)())},children:(0,V.jsx)(Re,{})})]}),(0,V.jsx)(ge,{doActiveCalendar:e,doActiveAccount:t,toggleSidebar:o})]}),(0,V.jsx)(Ue,{})]})})},Je=F.ZP.div(Ie||(Ie=(0,U.Z)(["\n  display: flex;\n"]))),Qe=F.ZP.div(Te||(Te=(0,U.Z)(["\n  background-color: ",";\n  width: 100%;\n\n  padding-top: 24px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 40px;\n  transition: background-color 0.5s ease;\n  \n  @media screen and (min-width: 768px) {\n    padding-top: 24px;\n    padding-left: 32px;\n    padding-right: 32px;\n    padding-bottom: 38px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 40px;\n    padding-left: 32px;\n    padding-right: 32px;\n    padding-bottom: 32px;\n  }\n"])),(function(n){return n.theme.colors.mainLoyautBgColor}));function Xe(){var n=(0,M.useState)(!0),e=(0,G.Z)(n,2),t=e[0],o=e[1],r=function(){return o((function(n){return!n}))};return(0,V.jsxs)(Je,{children:[t&&(0,V.jsx)(qe,{onToggle:r}),(0,V.jsxs)(Qe,{children:[(0,V.jsx)(Rn,{onToggle:r}),(0,V.jsx)(A.j3,{})]})]})}},614:function(n,e,t){t.d(e,{AV:function(){return i},Qx:function(){return o},bt:function(){return a},n3:function(){return c},rB:function(){return r}});var o=function(n){return n.modal.isOpen},r=function(n){return n.modal.modalType},i=function(n){return n.modal.modalAction},a=function(n){return n.modal.dataTask},c=function(n){return n.modal.category}}}]);
//# sourceMappingURL=963.065d1f22.chunk.js.map