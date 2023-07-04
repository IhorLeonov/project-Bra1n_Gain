"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[158],{5158:function(n,e,t){t.r(e),t.d(e,{default:function(){return de}});var i,r,o,a,d,s,l,c,p,x,u,h,f,g,m,w,b,v,j,y,Z,k,P,E,C,I,z,F,B,T,D,A,S,_,J,O,L,M,$=t(9434),G=t(5653),R=t(3853),q=t(168),H=t(6444),N=H.ZP.div(i||(i=(0,q.Z)(["\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n  /* padding: 30px 0; */\n  /* background-color: transparent; */\n"]))),Q=H.ZP.button(r||(r=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px 20px;\n  width: 100%;\n\n  cursor: pointer;\n  border-radius: 8px;\n  backface-visibility: hidden;\n  transition: transform 0.2s ease-in-out;\n  &:hover,\n  &:focus {\n    background-color: #2b78ef;\n    transition: background-color 0.5s;\n  }\n\n  border: 1px dashed #3e85f3;\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.textColor})),V=H.ZP.span(o||(o=(0,q.Z)(["\n  font-size: 14px;\n  font-family: Inter, sans-serif;\n  font-weight: 600;\n  line-height: 18px;\n"]))),U=t(184),W=function(n){var e=n.handleAddTask;return(0,U.jsx)(N,{children:(0,U.jsxs)(Q,{type:"button",onClick:e,children:[(0,U.jsx)(R.OvN,{size:24}),(0,U.jsx)(V,{children:"Add task"})]})})},K=H.ZP.li(a||(a=(0,q.Z)(["\n  border-radius: 8px;\n  border: 1px solid ",";\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n\n  /* min-height: 155px; */\n  /* max-height: 432px; */\n\n  height: fit-content;\n  min-width: 280px;\n  line-height: 1.12;\n  font-size: 18px;\n  font-weight: 700;\n  padding: 18px 18px 10px 18px;\n  gap: 16px;\n  font-family: 'InterSemiBolt';\n  max-width: 335px;\n\n  @media screen and (min-width: 768px) {\n    padding: 18px 22px 28px;\n    font-size: 20px;\n    max-width: calc((100% - 48px) / 2);\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 27px;\n    max-width: calc((100% - 54px) / 3);\n  }\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.componentsBgColor})),X=t(8820),Y=H.ZP.div(d||(d=(0,q.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 7px 0;\n  margin-bottom: 24px;\n\n  @media (min-width: 768px) {\n    margin-bottom: 28px;\n  }\n"]))),nn=H.ZP.h3(s||(s=(0,q.Z)(["\n  font-family: 'InterSemiBolt';\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.11;\n  color: ",";\n  text-align: center;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n"])),(function(n){return n.theme.colors.textColor})),en=(0,H.ZP)(X.dEn)(l||(l=(0,q.Z)(["\n  width: 22px;\n  height: 22px;\n  fill: ",";\n  border-radius: 50%;\n  &:hover,\n  &:focus {\n    fill: ",";\n    background-color: ",";\n    transform: ",";\n    transition-duration: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return!n.page&&"#fff"}),(function(n){return!n.page&&"#3e85f3"}),(function(n){return!n.page&&"scale(1.12)"}),(function(n){return!n.page&&"500ms"})),tn=H.ZP.button(c||(c=(0,q.Z)(["\n  border: none;\n  background-color: transparent;\n  width: 22px;\n  height: 22px;\n"]))),rn=function(n){var e=n.title,t=n.handleAddTask;return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(Y,{children:[(0,U.jsx)(nn,{children:"to-do"===e?"To do":"in-progress"===e?"In progress":"done"===e?"Done":null}),(0,U.jsx)(tn,{onClick:t,children:(0,U.jsx)(en,{})})]})})},on=H.ZP.ul(p||(p=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  list-style: none;\n  width: 100%;\n  max-height: 290px;\n\n  padding-right: 6px;\n\n  overflow: hidden;\n  overflow-y: auto;\n  scroll-snap-type: y mandatory;\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 30px #f2f2f2;\n    border-radius: 12px;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #e7e5e5;\n    border-radius: 12px;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 18px;\n    margin-bottom: 32px;\n        max-height: 372px;\n    /* width */\n    ::-webkit-scrollbar {\n      width: 8px;\n    }\n  }\n"]))),an=H.ZP.li(x||(x=(0,q.Z)(["\n  height: 108px;\n\n  @media screen and (min-width: 768px) {\n    height: 112px;\n  }\n"]))),dn=t(9439),sn=t(7834),ln=H.ZP.div(u||(u=(0,q.Z)(["\nposition: relative;\npadding: 14px 14px 18px 14px;\nwidth: 100%;\nheight: 100%;\nbackground-color: #F7F6F9;\nborder: 1px solid #DCE3E5CC;\nborder-radius: 8px;\n"]))),cn=H.ZP.p(h||(h=(0,q.Z)(["\nmargin-bottom: 24px;\n\ncolor: #111;\ntext-overflow: ellipsis;\nwhite-space: nowrap;\noverflow: hidden;\nfont-size: 14px;\nfont-family: Inter;\nfont-weight: 500;\nline-height: 1.3;\n\n@media screen and (min-width: 768px) {\n  margin-bottom: 28px;\n  }\n"]))),pn=H.ZP.div(f||(f=(0,q.Z)(["\nposition: relative;\ndisplay: flex;\nalign-items: self-end;\njustify-content: space-between;\n"]))),xn=H.ZP.div(g||(g=(0,q.Z)(["\ndisplay: flex;\nalign-items: self-end;\ngap: 8px;\n"]))),un=H.ZP.img(m||(m=(0,q.Z)(["\nwidth: 32px;\nheight: 32px;\nborder-radius: 50%;\n"]))),hn=H.ZP.span(w||(w=(0,q.Z)(["\nfont-size: 10px;\nfont-family: Inter;\nfont-weight: 600;\nline-height: 1.2;\n\ncolor: #F7F6F9;\npadding: 4px 12px;\nborder-radius: 4px;\nbackground-color: ",";\n"])),(function(n){return"low"===n.children?"#72C2F8":"medium"===n.children?"#F3B249":"#EA3D65"})),fn=H.ZP.div(b||(b=(0,q.Z)(["\n  display: flex;\n  gap:10px;\n\n"]))),gn=H.ZP.button(v||(v=(0,q.Z)(["\n  width: 14px;\n  height: 14px;\n\n  border-radius: 50%;\n  cursor: pointer;\n\n    @media screen and (min-width: 768px) {\n      width: 16px;\n      height: 16px;\n    }\n  &:hover,\n  &:focus {\n    transform: scale(1.2);\n    transition-duration: 200ms;\n  }\n\n"]))),mn=H.ZP.img(j||(j=(0,q.Z)(["\n  width: 14px;\n  height: 14px;\n"]))),wn=t(5581),bn=t(6175),vn=function(n){var e=n.setTargetElement,t=n.setTaskModalOpen,i=n.task,r=(0,$.I0)(),o=i._id;return(0,U.jsxs)(fn,{children:[(0,U.jsx)(gn,{onClick:function(n){t(!0),e(n.target)},children:(0,U.jsx)(mn,{src:"/project-Bra1n_Gain/images/icons/icon-arrow-circle-broken-right-16x16.svg",alt:"button-move"})}),(0,U.jsx)(gn,{onClick:function(n){r((0,wn.$J)()),r((0,wn.Sv)("edit")),r((0,wn.aJ)()),r((0,wn.lf)(i))},children:(0,U.jsx)(mn,{src:"/project-Bra1n_Gain/images/icons/icon-pencil-16x16.svg",alt:"button-edit"})}),(0,U.jsx)(gn,{onClick:function(n){r((0,bn._5)(o))},children:(0,U.jsx)(mn,{src:"/project-Bra1n_Gain/images/icons/icon-trash-16x16.svg",alt:"button-delete"})})]})},jn=t(2791),yn=H.ZP.ul(y||(y=(0,q.Z)(["\nposition: absolute;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ngap: 14px;\npadding: 14px;\nwidth: 147px;\nheight: 90px;\nbackground-color: #FFFFFF;\nborder-radius: 8px;\nbox-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);\n@media screen and (min-width: 768px) {\npadding: 20px 24px;\n    \n  }\n"]))),Zn=(0,H.ZP)(gn)(Z||(Z=(0,q.Z)(["\ndisplay: flex;\nwidth: 87px;\nalign-items: center;\njustify-content: space-between;\n\ncolor: #343434;\n\n@media screen and (min-width: 768px) {\nwidth: 99px;\n    \n    }\n"]))),kn=H.ZP.p(k||(k=(0,q.Z)(["\nfont-size: 12px;\nfont-style: normal;\nfont-weight: 500;\nline-height: 1.2;\n\n@media screen and (min-width: 768px) {\nfont-size: 14px;\nline-height: 1.3;\n    \n  }\n"]))),Pn=t(4164),En=document.querySelector("#modal-root"),Cn=function(n){var e=n.listId,t=n.targetElement,i=n.setTaskModalOpen,r=n.taskId,o=(0,$.I0)(),a=(0,jn.useState)({top:0,left:0}),d=(0,dn.Z)(a,2),s=d[0],l=d[1],c=(0,jn.useRef)(),p={"to-do":"To do","in-progress":"In progress",done:"Done"},x=Object.keys(p).filter((function(n){return n!==e})),u=(0,jn.useCallback)((function(n){c.current&&!c.current.contains(n.target)&&i(!1)}),[i]);(0,jn.useEffect)((function(){var n=function(){if(t){var n=t.getBoundingClientRect(),e=window.innerWidth<768,i=e?n.height+12:n.height+8,r=e?n.left-70:n.left;l({top:n.top+i,left:r})}};return n(),window.addEventListener("resize",n),document.addEventListener("mousedown",u),function(){window.removeEventListener("resize",n),document.removeEventListener("mousedown",u)}}),[t]),(0,jn.useEffect)((function(){var n=function(n){"Escape"===n.code&&i(!1)};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]);var h=function(n){var e=n.currentTarget.getAttribute("data-moove");o((0,bn.JA)({id:r,category:e}))};return(0,Pn.createPortal)((0,U.jsx)(yn,{style:{top:s.top,left:s.left},ref:c,children:x.map((function(n){return(0,U.jsx)("li",{children:(0,U.jsxs)(Zn,{onClick:h,"data-moove":n,children:[(0,U.jsx)(kn,{children:p[n]}),(0,U.jsx)(mn,{src:"/project-Bra1n_Gain/images/icons/icon-arrow-circle-broken-right-16x16.svg",alt:"button-move"})]})},n)}))}),En)},In=function(n){var e=n.task,t=n.listId,i=(0,jn.useState)(!1),r=(0,dn.Z)(i,2),o=r[0],a=r[1],d=(0,jn.useState)(null),s=(0,dn.Z)(d,2),l=s[0],c=s[1],p=(0,sn.a)().user.avatarUrl,x=e.priority,u=e.title,h=e._id;return(0,U.jsxs)(ln,{id:"targetElement",children:[(0,U.jsx)(cn,{children:u}),(0,U.jsxs)(pn,{children:[(0,U.jsxs)(xn,{children:[(0,U.jsx)(un,{src:p,alt:"avatar"}),(0,U.jsx)(hn,{children:x})]}),(0,U.jsx)(vn,{task:e,setTaskModalOpen:a,setTargetElement:c}),o&&(0,U.jsx)(Cn,{taskId:h,listId:t,targetElement:l,setTaskModalOpen:a})]})]})},zn=function(n){var e=n.listId,t=n.tasks;return(0,U.jsx)(on,{children:t.map((function(n){return(0,U.jsx)(an,{children:(0,U.jsx)(In,{listId:e,task:n})},n._id)}))})},Fn=t(614),Bn=t(5740),Tn=t(1413),Dn=t(5705),An=H.ZP.label(P||(P=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 16px;\n\n  color: #343434cc;\n  font-size: 12px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.2;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.3;\n    margin-bottom: 18px;\n  }\n"]))),Sn=H.ZP.label(E||(E=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n  position: relative;\n\n  color: #343434;\n  font-size: 12px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.2;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.3;\n  }\n"]))),_n=(0,H.ZP)(Dn.gN)(C||(C=(0,q.Z)(["\n  padding: 12px 14px;\n  width: 100%;\n\n  color: #343434;\n  font-size: 14px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.3;\n  border: none;\n  background-color: #f6f6f6;\n  border-radius: 8px;\n  outline: none;\n\n  :focus {\n    box-shadow: 0px 2px 4px 0px #1111111a;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 14px 18px;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.3;\n  }\n"]))),Jn=(0,H.ZP)(Dn.gN)(I||(I=(0,q.Z)(["\n  position: absolute;\n  opacity: 0;\n"]))),On=H.ZP.span(z||(z=(0,q.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: ",";\n  transition: all 0.3s ease;\n  text-align: center;\n\n  ",":checked ~ & {\n    width: 8px;\n    height: 8px;\n\n    /* @media screen and (min-width: 768px) {\n    width: 10px;\n  height: 10px;\n} */\n  }\n\n  ",":checked, ",":checked ~ &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 12px;\n    height: 12px;\n\n    border-radius: 14px;\n    border: 1.3px solid\n      ",";\n    @media screen and (min-width: 768px) {\n      width: 14px;\n      height: 14px;\n    }\n  }\n"])),(function(n){return"low"===n.value?"#72C2F8":"medium"===n.value?"#F3B249":"#EA3D65"}),Jn,Jn,Jn,(function(n){return"low"===n.value?"#72C2F880":"medium"===n.value?"#F3B24980":"#EA3D6580"})),Ln=H.ZP.div(F||(F=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 28px;\n  }\n"]))),Mn=H.ZP.div(B||(B=(0,q.Z)(["\n  display: flex;\n  gap: 15px;\n  @media screen and (min-width: 768px) {\n    gap: 16px;\n  }\n"]))),$n=H.ZP.div(T||(T=(0,q.Z)(["\n  width: 303px;\n  padding: 48px 18px 40px;\n\n  @media screen and (min-width: 768px) {\n    padding: 40px 28px;\n    width: 396px;\n  }\n"]))),Gn=H.ZP.div(D||(D=(0,q.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),Rn=H.ZP.button(A||(A=(0,q.Z)(["\n  display: flex;\n  width: 135px;\n  height: 42px;\n\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  border-radius: 8px;\n  background: #3e85f3;\n\n  border: none;\n  outline: none;\n  padding: 0;\n\n  color: #fff;\n  text-align: center;\n  font-size: 14px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.3;\n  transition: transform 0.2s ease-in-out;\n\n  :focus,\n  :hover {\n    transform: scale(1.03);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.3;\n    width: 182px;\n    height: 48px;\n  }\n"]))),qn=(0,H.ZP)(Rn)(S||(S=(0,q.Z)(["\n  background: #e5edfa;\n  width: 118px;\n  padding: 0;\n  color: black;\n  @media screen and (min-width: 768px) {\n    width: 144px;\n  }\n"]))),Hn=(0,H.ZP)(Rn)(_||(_=(0,q.Z)(["\n  width: 100%;\n"]))),Nn=H.ZP.img(J||(J=(0,q.Z)(["\n  color: #fff;\n"]))),Qn=(0,H.ZP)(R.OvN)(O||(O=(0,q.Z)(["\n  width: 18px;\n  height: 18px;\n\n  @media screen and (min-width: 768px) {\n    width: 20px;\n    height: 20px;\n  }\n"]))),Vn=H.ZP.span(L||(L=(0,q.Z)(["\n  font-size: 12px;\n  position: absolute;\n  bottom: 10px;\n  color: tomato;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),Un=t(1951),Wn=t(7232),Kn=/^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/,Xn=function(){var n=(0,$.I0)(),e=new Date((0,$.v9)(Wn._)),t=(0,$.v9)(Fn.bt),i=(0,$.v9)(Fn.n3),r=(0,$.v9)(Fn.AV),o=t&&"edit"===r,a=t.title,d=t.start,s=t.end,l=t.priority,c={title:"".concat(o?a:""),start:"".concat(o?d:"09:00"),end:"".concat(o?s:"14:00"),priority:"".concat(o?l:"low")};return(0,U.jsx)($n,{children:(0,U.jsx)(Dn.J9,{initialValues:c,onSubmit:function(o){if("edit"===r){var a=(0,Tn.Z)((0,Tn.Z)({},t),o);n((0,bn.xJ)(a)),n((0,wn.$J)())}if("add"===r){var d=(0,Tn.Z)((0,Tn.Z)({date:(0,Un.default)(e,"yyyy-MM-dd")},o),{},{category:i});n((0,bn.gI)(d)),n((0,wn.$J)())}},validate:function(n){var e={};return n.title.trim()?n.start?Kn.test(n.start)?n.end?Kn.test(n.end)?void 0:(e.end='Invalid time "End", write format time "hh:mm"',e):(e.end="Required",e):(e.start='Invalid time "Start", write format time "hh:mm"',e):(e.start="Required",e):(e.start="Title is Required",e)},children:(0,U.jsxs)(Dn.l0,{children:[(0,U.jsxs)(An,{htmlFor:"title",children:["Title",(0,U.jsx)(_n,{id:"title",name:"title",type:"text",placeholder:"Enter text"})]}),(0,U.jsxs)(Mn,{children:[(0,U.jsxs)(An,{htmlFor:"start",children:["Start",(0,U.jsx)(_n,{id:"start",name:"start",type:"text",placeholder:"09:00"})]}),(0,U.jsxs)(An,{htmlFor:"end",children:["End",(0,U.jsx)(_n,{id:"end",name:"end",type:"text",placeholder:"11:59"})]})]}),(0,U.jsxs)(Ln,{role:"group","aria-labelledby":"priority-radio-group",children:[(0,U.jsxs)(Sn,{children:[(0,U.jsx)(Jn,{type:"radio",name:"priority",value:"low"}),(0,U.jsx)(On,{value:"low"}),"Low"]}),(0,U.jsxs)(Sn,{children:[(0,U.jsx)(Jn,{type:"radio",name:"priority",value:"medium"}),(0,U.jsx)(On,{value:"medium"}),"Medium"]}),(0,U.jsxs)(Sn,{children:[(0,U.jsx)(Jn,{type:"radio",name:"priority",value:"high"}),(0,U.jsx)(On,{value:"high"}),"High"]})]}),(0,U.jsx)(Dn.Bc,{name:"title",component:Vn}),(0,U.jsx)(Dn.Bc,{name:"start",component:Vn}),(0,U.jsx)(Dn.Bc,{name:"end",component:Vn}),(0,U.jsx)(Gn,{children:"add"===r?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(Rn,{type:"submit",children:[(0,U.jsx)(Qn,{}),"Add"]}),(0,U.jsx)(qn,{type:"button",onClick:function(){n((0,wn.$J)())},children:"Cancel"})]}):(0,U.jsxs)(Hn,{type:"submit",children:[(0,U.jsx)(Nn,{src:"/project-Bra1n_Gain/images/icons/icon-pencil-16x16-white.svg",alt:"button-edit"}),"Edit"]})})]})})})},Yn=function(){return(0,U.jsx)(Bn.u,{children:(0,U.jsx)(Xn,{})})},ne=function(n){var e=n.listId,t=n.tasks,i=(0,$.I0)(),r=(0,$.v9)(Fn.rB),o=(0,$.v9)(Fn.Qx),a=function(){i((0,wn.aJ)()),i((0,wn.Sv)("add")),i((0,wn.PR)(e)),i((0,wn.$J)())};return(0,U.jsxs)(K,{children:[(0,U.jsx)(rn,{title:e,handleAddTask:a}),(0,U.jsx)(zn,{listId:e,tasks:t}),(0,U.jsx)(W,{listId:e,handleAddTask:a}),"task"===r&&o&&(0,U.jsx)(Yn,{})]})},ee=H.ZP.ul(M||(M=(0,q.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 16px;\n  overflow: hidden;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  padding-bottom: 34px;\n\n  scrollbar-width: thin; /* \u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043f\u043e\u043b\u043e\u0441\u0438 \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 */\n  scrollbar-color: red lightgray; /* \u041a\u043e\u043b\u0456\u0440 \u043f\u043e\u043b\u043e\u0441\u0438 \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 \u0456 \u0444\u043e\u043d\u0443 */\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 12px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 30px #f2f2f2;\n    border-radius: 12px;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #e7e5e5;\n    border-radius: 12px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 27px;\n    height: 568px;\n  }\n\n  ::-webkit-scrollbar {\n    width: 14px;\n  }\n"]))),te=t(4690),ie=t(9831),re=function(n){var e=n.date,t=n.tasks,i=t.filter((function(n){return"to-do"===n.category})),r=t.filter((function(n){return"in-progress"===n.category})),o=t.filter((function(n){return"done"===n.category})),a=i.filter((function(n){return(0,te.default)(e,(0,ie.default)(n.date))})),d=r.filter((function(n){return(0,te.default)(e,(0,ie.default)(n.date))})),s=o.filter((function(n){return(0,te.default)(e,(0,ie.default)(n.date))}));return(0,U.jsxs)(ee,{children:[(0,U.jsx)(ne,{listId:"to-do",date:e,tasks:a}),(0,U.jsx)(ne,{listId:"in-progress",date:e,tasks:d}),(0,U.jsx)(ne,{listId:"done",date:e,tasks:s})]})},oe=t(6803),ae=t(8712),de=function(){var n=(0,$.I0)(),e=new Date((0,$.v9)(Wn._)),t=(0,$.v9)(ae.jF);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(G.B,{date:e,setDate:function(e){n((0,oe.G)(e.toString()))}}),(0,U.jsx)(re,{date:e,tasks:t})]})}},5653:function(n,e,t){t.d(e,{B:function(){return y}});var i,r,o,a,d=t(7689),s=t(5716),l=t(3629),c=t(4565),p=t(1951),x=t(9040),u=t(4690),h=t(2680),f=t(168),g=t(6444),m=g.ZP.ul(i||(i=(0,f.Z)(["\n  height: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid ",";\n  margin-top: 24px;\n  margin-bottom: 14px;\n  background-color: ",";\n  padding: ",";\n\n  @media (min-width: 768px) {\n    padding: ",";\n    height: ",";\n    margin-bottom: ",";\n    margin-top: ",";\n  }\n\n  @media (min-width: 1280px) {\n    margin-bottom: ",";\n    padding: ",";\n    margin-top: 32px;\n  }\n"])),(function(n){return n.page?"50px":"74px"}),(function(n){return n.theme.colors.calendarMonthBorder}),(function(n){return n.theme.colors.componentsBgColor}),(function(n){return n.page?"16px":"14px 18px"}),(function(n){return n.page?"14px 40px":"10px 32px"}),(function(n){return n.page?"46px":"68px"}),(function(n){return n.page?"18px":"16px"}),(function(n){return n.page?"32px":"24px"}),(function(n){return n.page?"15px":"16px"}),(function(n){return n.page?"14px 60px":"10px 46px"})),w=g.ZP.li(r||(r=(0,f.Z)(["\n  background: ",";\n  font-family: 'Inter';\n\n  text-align: center;\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 4px;\n  border-radius: 8px;\n\n  cursor: ",";\n\n  @media (min-width: 376px) {\n    min-width: 40px;\n    gap: 6px;\n  }\n\n  :hover {\n    color: ",";\n    background-color: ",";\n    transform: ",";\n    font-size: ",";\n    transition-duration: ",";\n  }\n"])),(function(n){return n.theme.colors.componentsBgColor}),(function(n){return n.theme.colors.headerFontcolor}),(function(n){return n.page?"default":"pointer"}),(function(n){return!n.page&&"#fff"}),(function(n){return!n.page&&"#3e85f3"}),(function(n){return!n.page&&"scale(1.12)"}),(function(n){return!n.page&&"12px"}),(function(n){return!n.page&&"500ms"})),b=g.ZP.p(o||(o=(0,f.Z)(["\n  font-weight: 600;\n  color: ",";\n  text-transform: uppercase;\n  font-size: 16px;\n  line-height: 1.12;\n  @media (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.weekend?"#3e85f3":"".concat(n.theme.colors.dayCalendarHeadBgColor)}),(function(n){return n.page?"16px":"14px"}),(function(n){return n.page?"1.12":"1.3"})),v=g.ZP.p(a||(a=(0,f.Z)(["\n  color: ",";\n  background-color: ",";\n  border-radius: 6px;\n  padding: 4px 6px;\n  font-weight: 700;\n\n  font-size: 12px;\n  line-height: 1.17;\n\n  @media (min-width: 768px) {\n    padding: 4px 8px;\n    border-radius: 8px;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"])),(function(n){return n.isCurrentDay&&"#fff"}),(function(n){return n.isCurrentDay?"#3e85f3":"".concat((function(n){return n.theme.mainBackgroundColor}))})),j=t(184),y=function(n){for(var e=n.date,t=n.setDate,i=(0,d.TH)().pathname.includes("day"),r=(0,s.Z)("(max-width: 767px)")?"EEEEE":"E",o=(0,l.default)(e,{weekStartsOn:1}),a=(0,c.default)(e,{weekStartsOn:1}),f=[],g=o;g<=a;){var y=(0,p.default)(g,"d"),Z=(0,p.default)(g,r);f.push({date:y,day:Z,fullDate:g}),g=(0,x.default)(g,1)}return(0,j.jsx)(m,{page:!i,children:f.map((function(n){var r=(0,u.default)(n.fullDate,e);return(0,j.jsxs)(w,{onClick:function(){return i&&t(n.fullDate)},page:!i,children:[(0,j.jsx)(b,{weekend:(0,h.Z)(n.fullDate)&&!i,page:!i,children:n.day}),i&&(0,j.jsx)(v,{isCurrentDay:r,page:!i,children:n.date})]},n.fullDate)}))})}},5740:function(n,e,t){t.d(e,{u:function(){return w}});var i,r,o,a=t(4164),d=t(2791),s=t(9434),l=t(5581),c=t(168),p=t(6444),x=t(4373),u=p.ZP.div(i||(i=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1200;\n"]))),h=p.ZP.div(r||(r=(0,c.Z)(["\n  position: relative;\n  box-sizing: border-box;\n  width: auto;\n  height: auto;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  background: #fff;\n  box-shadow: 0px 4px 16px 0px #1111111a;\n\n  @media screen and (min-width: 768px) {\n    /* width: 396px; */\n}\n"]))),f=(0,p.ZP)(x.QAE)(o||(o=(0,c.Z)(["\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  width: 24px;\n  height: 24px;\n  color: #000;\n  cursor: pointer;\n  \n     &:hover {\n     color: #3E85F3;\n  }\n"]))),g=t(184),m=document.querySelector("#modal-root"),w=function(n){var e=n.children,t=(0,s.I0)(),i=function(){return t((0,l.$J)())};return(0,d.useEffect)((function(){var n=function(n){"Escape"===n.code&&i()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]),(0,a.createPortal)((0,g.jsx)(u,{children:(0,g.jsxs)(h,{children:[(0,g.jsx)(f,{onClick:i}),e]})}),m)}},7232:function(n,e,t){t.d(e,{_:function(){return i}});var i=function(n){return n.date}},614:function(n,e,t){t.d(e,{AV:function(){return o},Qx:function(){return i},bt:function(){return a},n3:function(){return d},rB:function(){return r}});var i=function(n){return n.modal.isOpen},r=function(n){return n.modal.modalType},o=function(n){return n.modal.modalAction},a=function(n){return n.modal.dataTask},d=function(n){return n.modal.category}},8712:function(n,e,t){t.d(e,{jF:function(){return i}});var i=function(n){return n.tasks.tasks}}}]);
//# sourceMappingURL=158.c0f5f504.chunk.js.map