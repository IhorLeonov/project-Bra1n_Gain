"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[526],{5526:function(n,e,t){t.r(e),t.d(e,{default:function(){return Re}});var r,i,o,a,d,l,s,c,p,u,x,f,h,m,g,w,b,v,y,j,k,Z,P,C,E,O=t(9439),I=t(9434),z=t(7689),T=t(5716),B=t(3629),L=t(4565),S=t(1951),D=t(9040),F=t(4690),A=t(2680),M=t(168),J=t(6444),R=J.ZP.ul(r||(r=(0,M.Z)(["\n  height: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid ",";\n  margin-top: 24px;\n  margin-bottom: 14px;\n  background-color: ",";\n  padding: ",";\n\n  @media (min-width: 768px) {\n    padding: ",";\n    height: ",";\n    margin-bottom: ",";\n    margin-top: ",";\n  }\n\n  @media (min-width: 1280px) {\n    margin-bottom: ",";\n    padding: ",";\n    margin-top: 32px;\n  }\n"])),(function(n){return n.page?"50px":"74px"}),(function(n){return n.theme.colors.calendarMonthBorder}),(function(n){return n.theme.colors.componentsBgColor}),(function(n){return n.page?"16px":"14px 18px"}),(function(n){return n.page?"14px 40px":"10px 32px"}),(function(n){return n.page?"46px":"68px"}),(function(n){return n.page?"18px":"16px"}),(function(n){return n.page?"32px":"24px"}),(function(n){return n.page?"15px":"16px"}),(function(n){return n.page?"14px 60px":"10px 46px"})),_=J.ZP.li(i||(i=(0,M.Z)(["\n  background: ",";\n\n  text-align: center;\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 4px;\n  border-radius: 8px;\n  transition: all 0.2s ease-in-out;\n\n  cursor: ",";\n\n  :hover {\n    color: ",";\n    padding: ",";\n    gap: ",";\n    background-color: ",";\n    transform: ",";\n    font-size: ",";\n  }\n\n  @media (min-width: 376px) {\n    min-width: 40px;\n    gap: 6px;\n  }\n"])),(function(n){return n.theme.colors.componentsBgColor}),(function(n){return n.theme.colors.headerFontcolor}),(function(n){return n.page?"default":"pointer"}),(function(n){return!n.page&&"#fff"}),(function(n){return!n.page&&"4px"}),(function(n){return!n.page&&"0"}),(function(n){return!n.page&&"#3e85f3"}),(function(n){return!n.page&&"scale(1.1)"}),(function(n){return!n.page&&"12px"})),$=J.ZP.p(o||(o=(0,M.Z)(["\n  font-weight: 600;\n  color: ",";\n  text-transform: uppercase;\n  font-size: 16px;\n  line-height: 1.12;\n\n  @media (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.colors.dayCalendarHeadDayFontColor}),(function(n){return n.page?"16px":"14px"}),(function(n){return n.page?"1.12":"1.3"})),H=J.ZP.p(a||(a=(0,M.Z)(["\n  color: ",";\n  background-color: ",";\n  border-radius: 6px;\n  padding: 4px 6px;\n  font-weight: 700;\n\n  font-size: 12px;\n  line-height: 1.17;\n\n  @media (min-width: 768px) {\n    padding: 4px 8px;\n    border-radius: 8px;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"])),(function(n){return n.isCurrentDay?"#fff":"".concat((function(n){return n.theme.colors.mainLoyautBgColor}))}),(function(n){return n.isCurrentDay?"#3e85f3":"".concat((function(n){return n.theme.colors.mainLoyautBgColor}))})),N=t(184),q=function(n){for(var e=n.date,t=n.setDate,r=(0,z.TH)().pathname.includes("day"),i=(0,T.Z)("(max-width: 767px)")?"EEEEE":"E",o=(0,B.default)(e,{weekStartsOn:1}),a=(0,L.default)(e,{weekStartsOn:1}),d=[],l=o;l<=a;){var s=(0,S.default)(l,"d"),c=(0,S.default)(l,i);d.push({date:s,day:c,fullDate:l}),l=(0,D.default)(l,1)}return(0,N.jsx)(R,{page:!r,children:d.map((function(n){var i=(0,F.default)(n.fullDate,e);return(0,N.jsxs)(_,{onClick:function(){return r&&t(n.fullDate)},page:!r,children:[(0,N.jsx)($,{weekend:(0,A.Z)(n.fullDate)&&!r,page:!r,children:n.day}),r&&(0,N.jsx)(H,{isCurrentDay:i,page:!r,children:n.date})]},n.fullDate)}))})},W=t(3853),Q=J.ZP.div(d||(d=(0,M.Z)(["\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n  /* padding: 30px 0; */\n  /* background-color: transparent; */\n"]))),V=J.ZP.button(l||(l=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px 20px;\n  width: 100%;\n\n  cursor: pointer;\n  border-radius: 8px;\n  backface-visibility: hidden;\n  transition: transform 0.2s ease-in-out;\n  &:hover,\n  &:focus {\n    background-color: #2b78ef;\n    transition: background-color 0.5s;\n  }\n\n  border: 1px dashed #3e85f3;\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.textColor})),G=J.ZP.span(s||(s=(0,M.Z)(["\n  font-size: 14px;\n  font-family: Inter, sans-serif;\n  font-weight: 600;\n  line-height: 18px;\n"]))),Y=function(n){var e=n.handleAddTask;return(0,N.jsx)(Q,{children:(0,N.jsxs)(V,{type:"button",onClick:e,children:[(0,N.jsx)(W.OvN,{size:24}),(0,N.jsx)(G,{children:"Add task"})]})})},U=J.ZP.li(c||(c=(0,M.Z)(["\n  border-radius: 8px;\n  border: 1px solid ",";\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n\n  height: fit-content;\n  min-width: 280px;\n  line-height: 1.12;\n  font-size: 18px;\n  font-weight: 700;\n  padding: 18px 18px 10px 18px;\n  gap: 16px;\n  max-width: 335px;\n\n  @media screen and (min-width: 768px) {\n    padding: 18px 22px 28px;\n    font-size: 20px;\n    max-width: calc((100% - 48px) / 2);\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 27px;\n    max-width: calc((100% - 54px) / 3);\n  }\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.componentsBgColor})),K=t(8820),X=J.ZP.div(p||(p=(0,M.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 7px 0;\n  margin-bottom: 24px;\n\n  @media (min-width: 768px) {\n    margin-bottom: 28px;\n  }\n"]))),nn=J.ZP.h3(u||(u=(0,M.Z)(["\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.11;\n  color: ",";\n  text-align: center;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n"])),(function(n){return n.theme.colors.textColor})),en=(0,J.ZP)(K.dEn)(x||(x=(0,M.Z)(["\n  width: 22px;\n  height: 22px;\n  fill: ",";\n  border-radius: 50%;\n  &:hover,\n  &:focus {\n    fill: ",";\n    background-color: ",";\n    transform: ",";\n    transition-duration: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return!n.page&&"#fff"}),(function(n){return!n.page&&"#3e85f3"}),(function(n){return!n.page&&"scale(1.12)"}),(function(n){return!n.page&&"500ms"})),tn=J.ZP.button(f||(f=(0,M.Z)(["\n  border: none;\n  background-color: transparent;\n  width: 22px;\n  height: 22px;\n"]))),rn=function(n){var e=n.title,t=n.handleAddTask;return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(X,{children:[(0,N.jsx)(nn,{children:"to-do"===e?"To do":"in-progress"===e?"In progress":"done"===e?"Done":null}),(0,N.jsx)(tn,{onClick:t,children:(0,N.jsx)(en,{})})]})})},on=J.ZP.ul(h||(h=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  list-style: none;\n  width: 100%;\n  max-height: 290px;\n\n  padding-right: 6px;\n\n  overflow: hidden;\n  overflow-y: auto;\n  scroll-snap-type: y mandatory;\n  padding-bottom: ",";\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 30px #f2f2f2;\n    border-radius: 12px;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #e7e5e5;\n    border-radius: 12px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 0;\n\n    gap: 18px;\n    margin-bottom: ",";\n    max-height: 372px;\n\n    /* width */\n    ::-webkit-scrollbar {\n      width: 8px;\n    }\n  }\n"])),(function(n){return n.hasTasks&&"28px"}),(function(n){return n.hasTasks&&"32px"})),an=J.ZP.li(m||(m=(0,M.Z)(["\n  height: 108px;\n\n  @media screen and (min-width: 768px) {\n    height: 112px;\n  }\n"]))),dn=t(7834),ln=J.ZP.div(g||(g=(0,M.Z)(["\n  position: relative;\n  padding: 14px 14px 18px 14px;\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n"])),(function(n){return n.theme.colors.taskCardBgColor}),(function(n){return n.theme.colors.borderColor})),sn=J.ZP.p(w||(w=(0,M.Z)(["\n  margin-bottom: 24px;\n\n  color: ",";\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.3;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 28px;\n  }\n"])),(function(n){return n.theme.colors.textColor})),cn=J.ZP.div(b||(b=(0,M.Z)(["\n  position: relative;\n  display: flex;\n  align-items: self-end;\n  justify-content: space-between;\n"]))),pn=J.ZP.div(v||(v=(0,M.Z)(["\n  display: flex;\n  align-items: self-end;\n  gap: 8px;\n"]))),un=J.ZP.img(y||(y=(0,M.Z)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1.8px solid ",";\n"])),(function(n){return n.theme.colors.primaryBlueColor})),xn=J.ZP.span(j||(j=(0,M.Z)(["\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 1.2;\n\n  color: #f7f6f9;\n  padding: 4px 12px;\n  border-radius: 4px;\n  background-color: ",";\n"])),(function(n){return"low"===n.children?"#72C2F8":"medium"===n.children?"#F3B249":"#EA3D65"})),fn=J.ZP.div(k||(k=(0,M.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),hn=J.ZP.button(Z||(Z=(0,M.Z)(["\n  width: 14px;\n  height: 14px;\n\n  border-radius: 50%;\n  cursor: pointer;\n  background-color: transparent;\n\n  @media screen and (min-width: 768px) {\n    width: 16px;\n    height: 16px;\n  }\n"]))),mn=J.ZP.svg(P||(P=(0,M.Z)(["\n  width: 14px;\n  height: 14px;\n  stroke: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 16px;\n    height: 16px;\n  }\n\n  &:hover,\n  &:focus {\n    stroke: ",";\n    transition-duration: 500ms;\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.primaryBlueColor})),gn=t(5581),wn=t(6175),bn=t(2791),vn=["title","titleId"];function yn(){return yn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},yn.apply(this,arguments)}function jn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function kn(n,e){var t=n.title,r=n.titleId,i=jn(n,vn);return bn.createElement("svg",yn({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",ref:e,"aria-labelledby":r},i),t?bn.createElement("title",{id:r},t):null,C||(C=bn.createElement("g",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,clipPath:"url(#a)"},bn.createElement("path",{d:"M2.2 4.7a6.7 6.7 0 1 1 0 6.6"}),bn.createElement("path",{d:"M8 10.7 10.7 8 8 5.3M1.3 8h9.4"}))),E||(E=bn.createElement("defs",null,bn.createElement("clipPath",{id:"a"},bn.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}var Zn,Pn=bn.forwardRef(kn),Cn=(t.p,["title","titleId"]);function En(){return En=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},En.apply(this,arguments)}function On(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function In(n,e){var t=n.title,r=n.titleId,i=On(n,Cn);return bn.createElement("svg",En({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",ref:e,"aria-labelledby":r},i),t?bn.createElement("title",{id:r},t):null,Zn||(Zn=bn.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"M1.7 14.3 5.4 13l.4-.2.3-.2.4-.3L14 4.7A1.9 1.9 0 1 0 11.3 2L3.8 9.5l-.3.4-.2.3-.2.4-1.4 3.7Zm0 0L3 10.8l.3-.5h.2c.1 0 .2 0 .4.3L5.4 12l.3.4v.2l-.5.3-3.5 1.3Z"})))}var zn,Tn=bn.forwardRef(In),Bn=(t.p,["title","titleId"]);function Ln(){return Ln=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ln.apply(this,arguments)}function Sn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function Dn(n,e){var t=n.title,r=n.titleId,i=Sn(n,Bn);return bn.createElement("svg",Ln({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",ref:e,"aria-labelledby":r},i),t?bn.createElement("title",{id:r},t):null,zn||(zn=bn.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"M6 2h4M2 4h12M3.3 4l.4 6c.1 1.1.1 1.7.3 2.1A3 3 0 0 0 6 13.8c.4.2 1 .2 2.1.2v0c1.1 0 1.7 0 2.1-.2a3 3 0 0 0 1.9-1.7c.2-.4.2-1 .3-2l.4-6.1"})))}var Fn,An,Mn,Jn,Rn,_n,$n,Hn,Nn,qn,Wn,Qn,Vn,Gn,Yn,Un,Kn,Xn,ne,ee=bn.forwardRef(Dn),te=(t.p,function(n){var e=n.setTargetElement,t=n.setTaskModalOpen,r=n.task,i=(0,I.I0)(),o=r._id;return(0,N.jsxs)(fn,{children:[(0,N.jsx)(hn,{onClick:function(n){t(!0),e(n.target)},children:(0,N.jsx)(mn,{as:Pn,alt:"button-move"})}),(0,N.jsx)(hn,{onClick:function(n){i((0,gn.$J)()),i((0,gn.Sv)("edit")),i((0,gn.aJ)()),i((0,gn.lf)(r))},children:(0,N.jsx)(mn,{as:Tn,alt:"button-edit"})}),(0,N.jsx)(hn,{onClick:function(n){i((0,wn._5)(o))},children:(0,N.jsx)(mn,{as:ee,alt:"button-delete"})})]})}),re=J.ZP.ul(Fn||(Fn=(0,M.Z)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  width: 147px;\n  height: 90px;\n  background-color: ",";\n  border-radius: 8px;\n  border: 1px solid ",";\n  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);\n  @media screen and (min-width: 768px) {\n    padding: 20px 24px;\n  }\n"])),(function(n){return n.theme.colors.modalBgColor}),(function(n){return n.theme.colors.borderColor})),ie=(0,J.ZP)(hn)(An||(An=(0,M.Z)(["\n  display: flex;\n  width: 87px;\n  align-items: center;\n  justify-content: space-between;\n\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 99px;\n  }\n"])),(function(n){return n.theme.colors.textColor})),oe=J.ZP.p(Mn||(Mn=(0,M.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.2;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.3;\n  }\n"]))),ae=t(4164),de=document.querySelector("#modal-root"),le=function(n){var e=n.listId,t=n.targetElement,r=n.setTaskModalOpen,i=n.taskId,o=(0,I.I0)(),a=(0,bn.useState)({top:0,left:0}),d=(0,O.Z)(a,2),l=d[0],s=d[1],c=(0,bn.useRef)(),p={"to-do":"To do","in-progress":"In progress",done:"Done"},u=Object.keys(p).filter((function(n){return n!==e})),x=(0,bn.useCallback)((function(n){c.current&&!c.current.contains(n.target)&&r(!1)}),[r]);(0,bn.useEffect)((function(){var n=function(){if(t){var n=t.getBoundingClientRect(),e=window.innerWidth<768,r=e?n.height+12:n.height+8,i=e?n.left-70:n.left;s({top:n.top+r,left:i})}};return n(),window.addEventListener("resize",n),document.addEventListener("mousedown",x),function(){window.removeEventListener("resize",n),document.removeEventListener("mousedown",x)}}),[t]),(0,bn.useEffect)((function(){var n=function(n){"Escape"===n.code&&r(!1)};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]);var f=function(n){var e=n.currentTarget.getAttribute("data-moove");o((0,wn.JA)({id:i,category:e}))};return(0,ae.createPortal)((0,N.jsx)(re,{style:{top:l.top,left:l.left},ref:c,children:u.map((function(n){return(0,N.jsx)("li",{children:(0,N.jsxs)(ie,{onClick:f,"data-moove":n,children:[(0,N.jsx)(oe,{children:p[n]}),(0,N.jsx)(mn,{as:Pn,alt:"button-move"})]})},n)}))}),de)},se=function(n){var e=n.task,t=n.listId,r=(0,bn.useState)(!1),i=(0,O.Z)(r,2),o=i[0],a=i[1],d=(0,bn.useState)(null),l=(0,O.Z)(d,2),s=l[0],c=l[1],p=(0,dn.a)().user.avatarUrl,u=e.priority,x=e.title,f=e._id;return(0,N.jsxs)(ln,{id:"targetElement",children:[(0,N.jsx)(sn,{children:x}),(0,N.jsxs)(cn,{children:[(0,N.jsxs)(pn,{children:[(0,N.jsx)(un,{src:p,alt:"avatar"}),(0,N.jsx)(xn,{children:u})]}),(0,N.jsx)(te,{task:e,setTaskModalOpen:a,setTargetElement:c}),o&&(0,N.jsx)(le,{taskId:f,listId:t,targetElement:s,setTaskModalOpen:a})]})]})},ce=function(n){var e,t=n.listId,r=n.tasks;return(0,N.jsx)(on,{hasTasks:(null===(e=r[0])||void 0===e?void 0:e.category)===t,children:r.map((function(n){return(0,N.jsx)(an,{children:(0,N.jsx)(se,{listId:t,task:n})},n._id)}))})},pe=t(614),ue=t(5740),xe=t(1413),fe=t(5705),he=J.ZP.label(Jn||(Jn=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 16px;\n\n  color: ",";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.2;\n\n  @media screen and (min-width: 768px) {\n    line-height: 1.3;\n    margin-bottom: 18px;\n  }\n"])),(function(n){return n.theme.colors.modalTasksColor})),me=J.ZP.label(Rn||(Rn=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n  position: relative;\n\n  color: ",";\n  font-size: 12px;\n  font-family: var(--title-font);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.2;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.3;\n  }\n"])),(function(n){return n.theme.colors.dateNumberColor})),ge=(0,J.ZP)(fe.gN)(_n||(_n=(0,M.Z)(["\n  padding: 12px 14px;\n  width: 100%;\n\n  color: ",";\n  font-size: 14px;\n  font-family: var(--title-font);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.3;\n  border: none;\n  background-color: ",";\n  border-radius: 8px;\n  outline: none;\n\n  :focus {\n    box-shadow: 0px 2px 4px 0px #1111111a;\n  }\n\n  &::placeholder {\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 14px 18px;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.3;\n  }\n"])),(function(n){return n.theme.colors.dateNumberColor}),(function(n){return n.theme.colors.taskModalInputColor}),(function(n){return n.theme.colors.modalInputTextColor})),we=(0,J.ZP)(fe.gN)($n||($n=(0,M.Z)(["\n  position: absolute;\n  opacity: 0;\n"]))),be=J.ZP.span(Hn||(Hn=(0,M.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: ",";\n  transition: all 0.3s ease;\n  text-align: center;\n\n  ",":checked ~ & {\n    width: 8px;\n    height: 8px;\n\n    /* @media screen and (min-width: 768px) {\n    width: 10px;\n  height: 10px;\n} */\n  }\n\n  ",":checked, ",":checked ~ &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 12px;\n    height: 12px;\n\n    border-radius: 14px;\n    border: 1.3px solid\n      ",";\n    @media screen and (min-width: 768px) {\n      width: 14px;\n      height: 14px;\n    }\n  }\n"])),(function(n){return"low"===n.value?"#72C2F8":"medium"===n.value?"#F3B249":"#EA3D65"}),we,we,we,(function(n){return"low"===n.value?"#72C2F880":"medium"===n.value?"#F3B24980":"#EA3D6580"})),ve=J.ZP.div(Nn||(Nn=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 28px;\n  }\n"]))),ye=J.ZP.div(qn||(qn=(0,M.Z)(["\n  display: flex;\n  gap: 15px;\n  @media screen and (min-width: 768px) {\n    gap: 16px;\n  }\n"]))),je=J.ZP.div(Wn||(Wn=(0,M.Z)(["\n  width: 303px;\n  padding: 48px 18px 40px;\n\n  @media screen and (min-width: 768px) {\n    padding: 40px 28px;\n    width: 396px;\n  }\n"]))),ke=J.ZP.div(Qn||(Qn=(0,M.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),Ze=J.ZP.button(Vn||(Vn=(0,M.Z)(["\n  display: flex;\n  width: 135px;\n  height: 42px;\n\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  border-radius: 8px;\n  background: #3e85f3;\n\n  border: none;\n  outline: none;\n  padding: 0;\n\n  color: #fff;\n  text-align: center;\n  font-size: 14px;\n  font-family: var(--main-font);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.3;\n  transition: transform 0.2s ease-in-out;\n\n  :focus,\n  :hover {\n    transform: scale(1.03);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.3;\n    width: 182px;\n    height: 48px;\n  }\n"]))),Pe=(0,J.ZP)(Ze)(Gn||(Gn=(0,M.Z)(["\n  background: #e5edfa;\n  width: 118px;\n  padding: 0;\n  color: black;\n  @media screen and (min-width: 768px) {\n    width: 144px;\n  }\n"]))),Ce=(0,J.ZP)(Ze)(Yn||(Yn=(0,M.Z)(["\n  width: 100%;\n"]))),Ee=J.ZP.img(Un||(Un=(0,M.Z)(["\n  color: #fff;\n"]))),Oe=(0,J.ZP)(W.OvN)(Kn||(Kn=(0,M.Z)(["\n  width: 18px;\n  height: 18px;\n\n  @media screen and (min-width: 768px) {\n    width: 20px;\n    height: 20px;\n  }\n"]))),Ie=J.ZP.span(Xn||(Xn=(0,M.Z)(["\n  font-size: 12px;\n  position: absolute;\n  bottom: 10px;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.colors.notFoundTextColor})),ze=t(7232),Te=/^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/,Be=function(){var n=(0,I.I0)(),e=new Date((0,I.v9)(ze._)),t=(0,I.v9)(pe.bt),r=(0,I.v9)(pe.n3),i=(0,I.v9)(pe.AV),o=t&&"edit"===i,a=t.title,d=t.start,l=t.end,s=t.priority,c={title:"".concat(o?a:""),start:"".concat(o?d:"09:00"),end:"".concat(o?l:"14:00"),priority:"".concat(o?s:"low")};return(0,N.jsx)(je,{children:(0,N.jsx)(fe.J9,{initialValues:c,onSubmit:function(o){if("edit"===i){var a=(0,xe.Z)((0,xe.Z)({},t),o);n((0,wn.xJ)(a)),n((0,gn.$J)())}if("add"===i){var d=(0,xe.Z)((0,xe.Z)({date:(0,S.default)(e,"yyyy-MM-dd")},o),{},{category:r});n((0,wn.gI)(d)),n((0,gn.$J)())}},validate:function(n){var e={};return n.title.trim()?n.start?Te.test(n.start)?n.end?Te.test(n.end)?void 0:(e.end='Invalid time "End", write format time "hh:mm"',e):(e.end="Required",e):(e.start='Invalid time "Start", write format time "hh:mm"',e):(e.start="Required",e):(e.start="Title is Required",e)},children:(0,N.jsxs)(fe.l0,{children:[(0,N.jsxs)(he,{htmlFor:"title",children:["Title",(0,N.jsx)(ge,{id:"title",name:"title",type:"text",placeholder:"Enter text"})]}),(0,N.jsxs)(ye,{children:[(0,N.jsxs)(he,{htmlFor:"start",children:["Start",(0,N.jsx)(ge,{id:"start",name:"start",type:"text",placeholder:"09:00"})]}),(0,N.jsxs)(he,{htmlFor:"end",children:["End",(0,N.jsx)(ge,{id:"end",name:"end",type:"text",placeholder:"11:59"})]})]}),(0,N.jsxs)(ve,{role:"group","aria-labelledby":"priority-radio-group",children:[(0,N.jsxs)(me,{children:[(0,N.jsx)(we,{type:"radio",name:"priority",value:"low"}),(0,N.jsx)(be,{value:"low"}),"Low"]}),(0,N.jsxs)(me,{children:[(0,N.jsx)(we,{type:"radio",name:"priority",value:"medium"}),(0,N.jsx)(be,{value:"medium"}),"Medium"]}),(0,N.jsxs)(me,{children:[(0,N.jsx)(we,{type:"radio",name:"priority",value:"high"}),(0,N.jsx)(be,{value:"high"}),"High"]})]}),(0,N.jsx)(fe.Bc,{name:"title",component:Ie}),(0,N.jsx)(fe.Bc,{name:"start",component:Ie}),(0,N.jsx)(fe.Bc,{name:"end",component:Ie}),(0,N.jsx)(ke,{children:"add"===i?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Ze,{type:"submit",children:[(0,N.jsx)(Oe,{}),"Add"]}),(0,N.jsx)(Pe,{type:"button",onClick:function(){n((0,gn.$J)())},children:"Cancel"})]}):(0,N.jsxs)(Ce,{type:"submit",children:[(0,N.jsx)(Ee,{src:"/project-Bra1n_Gain/images/icons/icon-pencil-16x16-white.svg",alt:"button-edit"}),"Edit"]})})]})})})},Le=function(){return(0,N.jsx)(ue.u,{children:(0,N.jsx)(Be,{})})},Se=function(n){var e=n.listId,t=n.tasks,r=(0,I.I0)(),i=(0,I.v9)(pe.rB),o=(0,I.v9)(pe.Qx),a=function(){r((0,gn.aJ)()),r((0,gn.Sv)("add")),r((0,gn.PR)(e)),r((0,gn.$J)())};return(0,N.jsxs)(U,{children:[(0,N.jsx)(rn,{title:e,handleAddTask:a}),(0,N.jsx)(ce,{listId:e,tasks:t}),(0,N.jsx)(Y,{listId:e,handleAddTask:a}),"task"===i&&o&&(0,N.jsx)(Le,{})]})},De=J.ZP.ul(ne||(ne=(0,M.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 16px;\n  overflow: hidden;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  padding-bottom: 34px;\n\n  scrollbar-width: thin; /* \u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043f\u043e\u043b\u043e\u0441\u0438 \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 */\n  scrollbar-color: red lightgray; /* \u041a\u043e\u043b\u0456\u0440 \u043f\u043e\u043b\u043e\u0441\u0438 \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 \u0456 \u0444\u043e\u043d\u0443 */\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 12px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 30px #f2f2f2;\n    border-radius: 12px;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #e7e5e5;\n    border-radius: 12px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 27px;\n    height: 568px;\n  }\n\n  ::-webkit-scrollbar {\n    width: 14px;\n  }\n"]))),Fe=t(9831),Ae=function(n){var e=n.date,t=n.tasks,r=t.filter((function(n){return"to-do"===n.category})),i=t.filter((function(n){return"in-progress"===n.category})),o=t.filter((function(n){return"done"===n.category})),a=r.filter((function(n){return(0,F.default)(e,(0,Fe.default)(n.date))})),d=i.filter((function(n){return(0,F.default)(e,(0,Fe.default)(n.date))})),l=o.filter((function(n){return(0,F.default)(e,(0,Fe.default)(n.date))}));return(0,N.jsxs)(De,{children:[(0,N.jsx)(Se,{listId:"to-do",date:e,tasks:a}),(0,N.jsx)(Se,{listId:"in-progress",date:e,tasks:d}),(0,N.jsx)(Se,{listId:"done",date:e,tasks:l})]})},Me=t(8712),Je=t(8558),Re=function(){var n=(0,Je.Y)(),e=(0,O.Z)(n,2),t=e[0],r=e[1],i=(0,I.v9)(Me.jF);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(q,{date:t,setDate:r}),(0,N.jsx)(Ae,{date:t,tasks:i})]})}},5740:function(n,e,t){t.d(e,{u:function(){return w}});var r,i,o,a=t(4164),d=t(2791),l=t(9434),s=t(5581),c=t(168),p=t(6444),u=t(4373),x=p.ZP.div(r||(r=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1200;\n"]))),f=p.ZP.div(i||(i=(0,c.Z)(["\n  position: relative;\n  box-sizing: border-box;\n  width: auto;\n  height: auto;\n  border-radius: 8px;\n  border: 1px solid ",";\n  background: ",";\n  box-shadow: 0px 4px 16px 0px #1111111a;\n\n  @media screen and (min-width: 768px) {\n    /* width: 396px; */\n  }\n"])),(function(n){return n.theme.colors.modalBorderColor}),(function(n){return n.theme.colors.modalBgColor})),h=(0,p.ZP)(u.QAE)(o||(o=(0,c.Z)(["\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  width: 24px;\n  height: 24px;\n  color: ",";\n  cursor: pointer;\n\n  &:hover {\n    color: #3e85f3;\n  }\n"])),(function(n){return n.theme.colors.notFoundTextColor})),m=t(184),g=document.querySelector("#modal-root"),w=function(n){var e=n.children,t=(0,l.I0)(),r=function(){return t((0,s.$J)())};return(0,d.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]),(0,a.createPortal)((0,m.jsx)(x,{children:(0,m.jsxs)(f,{children:[(0,m.jsx)(h,{onClick:r}),e]})}),g)}},8558:function(n,e,t){t.d(e,{Y:function(){return a}});var r=t(9434),i=t(7232),o=t(6803),a=function(){var n=(0,r.I0)();return[new Date((0,r.v9)(i._)),function(e){n((0,o.G)(e.toString()))}]}},7232:function(n,e,t){t.d(e,{_:function(){return r}});var r=function(n){return n.date}},614:function(n,e,t){t.d(e,{AV:function(){return o},Qx:function(){return r},bt:function(){return a},n3:function(){return d},rB:function(){return i}});var r=function(n){return n.modal.isOpen},i=function(n){return n.modal.modalType},o=function(n){return n.modal.modalAction},a=function(n){return n.modal.dataTask},d=function(n){return n.modal.category}},8712:function(n,e,t){t.d(e,{jF:function(){return r}});var r=function(n){return n.tasks.tasks}}}]);
//# sourceMappingURL=526.2b779d52.chunk.js.map