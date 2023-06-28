"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[718],{459:function(n,e,t){t.d(e,{g:function(){return E}});var i,r,a,o,d,c,p,s,l,x,h=t(9439),f=t(2791),u=t(7689),g=t(168),m=t(6444),b=t(6856),w=t(466),y=m.ZP.span(i||(i=(0,g.Z)(["\n  padding: 6px 12px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #3e85f3;\n  border-radius: 8px;\n  cursor: pointer;\n  @media screen and (min-width: 768px) {\n    padding: 8px 12px;\n    font-size: 16px;\n  }\n"]))),k=(0,m.ZP)(w.Bb)(r||(r=(0,g.Z)(["\n  position: absolute;\n  left: 0;\n  top: 8px;\n\n  @media screen and (min-width: 768px) {\n    top: 13px;\n  }\n\n  .react-datepicker {\n    width: 235px;\n    height: 100%;\n    padding: 18px;\n  }\n\n  .react-datepicker__month-container {\n    width: 235px;\n  }\n\n  .react-datepicker__header {\n    padding: 0;\n  }\n  .react-datepicker__current-month {\n    margin: 0;\n    margin-bottom: 18px;\n  }\n  .react-datepicker__navigation {\n    top: 16px;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n\n    :focus-visible {\n      outline: 2px solid #fff;\n    }\n  }\n\n  .react-datepicker__navigation--previous {\n    left: 20px;\n  }\n  .react-datepicker__navigation-icon--previous {\n    top: 1px;\n    right: 0;\n  }\n\n  .react-datepicker__navigation--next {\n    right: 20px;\n  }\n\n  .react-datepicker__navigation-icon--next {\n    top: 1px;\n    left: 0;\n  }\n  .react-datepicker__navigation-icon--next::before {\n  }\n\n  .react-datepicker__current-month {\n    font-size: 16px;\n    font-family: Inter;\n    font-weight: 600;\n    letter-spacing: -0.32px;\n  }\n  .react-datepicker__day-names {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 199px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 8px;\n\n    border: none;\n  }\n\n  .react-datepicker__day-name {\n    width: 24px;\n    height: 17px;\n    padding: 0;\n\n    font-size: 14px;\n    font-family: Inter;\n    font-weight: 500;\n    letter-spacing: -0.28px;\n    line-height: 1.3;\n    color: #ffffff80;\n    cursor: default;\n  }\n\n  .react-datepicker__month {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 13px;\n    width: 235px;\n    padding-left: 18px;\n    padding-right: 18px;\n    padding-top: 10px;\n    border-top: 1px solid #ffffff33;\n  }\n\n  .react-datepicker__day--outside-month,\n  .react-datepicker__day--disabled {\n    color: #ffffff33;\n  }\n\n  .react-datepicker__day--disabled.react-datepicker__day {\n    cursor: default;\n  }\n\n  .react-datepicker__day--weekend {\n    opacity: 1;\n  }\n\n  .react-datepicker__week {\n    width: 199px;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .react-datepicker__day {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n\n    font-size: 14px;\n    font-family: Inter;\n    line-height: 1.3;\n    letter-spacing: -0.28px;\n    cursor: pointer;\n\n    :hover {\n      background-color: #fff;\n      color: #3e85f3;\n      border-radius: 24px;\n      opacity: 0.8;\n    }\n\n    :focus,\n    :focus-visible {\n      background-color: #fff;\n      color: #3e85f3;\n      border-radius: 24px;\n      opacity: 1;\n    }\n\n    :focus-visible {\n      outline: none;\n    }\n  }\n\n  .react-datepicker__day--keyboard-selected {\n    background-color: #fff;\n    color: #3e85f3;\n    opacity: 0.7;\n  }\n\n  .react-datepicker__day--today {\n    border: 1px solid #fff;\n    background-color: transparent;\n    color: #fff;\n  }\n  .react-datepicker__day--selected.react-datepicker__day--today,\n  .react-datepicker__day--outside-month.react-datepicker__day--selected {\n    background-color: #fff;\n    color: #3e85f3;\n  }\n"]))),_=(0,m.ZP)(w.Bh)(a||(a=(0,g.Z)(["\n  display: none;\n"]))),v=m.ZP.div(o||(o=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    justify-content: none;\n    gap: 8px;\n  }\n\n"]))),Z=m.ZP.div(d||(d=(0,g.Z)(["\n  display: flex;\n"]))),j=m.ZP.button(c||(c=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 30px;\n  font-size: 14px;\n  color: #343434;\n  border: 1px solid #edf1f2;\n  background-color: #fff;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    width: 38px;\n    height: 34px;\n  }\n"]))),D=(0,m.ZP)(j)(p||(p=(0,g.Z)(["\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: none;\n  background-color: ",";\n"])),(function(n){return"month"===n.typeDate&&"#CAE8FF"})),P=(0,m.ZP)(j)(s||(s=(0,g.Z)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  background-color: ",";\n"])),(function(n){return"day"===n.typeDate&&"#CAE8FF"})),z=(0,m.ZP)(b.RL9)(l||(l=(0,g.Z)(["\n  width: 16px;\n  height: 16px;\n  fill: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n  }\n"])),(function(n){return n.disabled?"#DCE3E5":"#343434"})),C=(0,m.ZP)(b.Bqb)(x||(x=(0,g.Z)(["\n  width: 16px;\n  height: 16px;\n  fill: #343434;\n\n  @media screen and (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n  }\n"]))),F=function(n,e){var t={},i="";if("month"===e)t.month="long",t.year="numeric",i=new Intl.DateTimeFormat("en-US",t).format(n);else if("day"===e){t.day="numeric",t.month="short",t.year="numeric";var r=new Intl.DateTimeFormat("en-US",t).format(n),a=r.split(",")[1],o=r.split(",")[0].split(" ").reverse().join(" ");i="".concat(o).concat(a)}return i},I=t(184),E=function(n){var e=n.minDate,t=n.date,i=n.setDate,r=n.typenav,a=(0,u.TH)().pathname,o=r||(a.includes("day")?"day":"month"),d=a.includes("calendar"),c=(0,u.s0)(),p=(0,f.useState)((function(){return F(t,o)})),s=(0,h.Z)(p,2),l=s[0],x=s[1],g=(0,f.useState)(!1),m=(0,h.Z)(g,2),b=m[0],w=m[1],j=(0,f.useState)(!1),E=(0,h.Z)(j,2),S=E[0],O=E[1],B=function(n){i(function(n,e,t){var i=new Date(n);return"month"===t?(i.setMonth(i.getMonth()+e),i):"day"===t?(i.setDate(i.getDate()+e),i):void 0}(t,n,o))};return(0,f.useEffect)((function(){if(d){var n=t.getDate();"day"===o&&c("/calendar/day/".concat(n),{replace:!0}),"month"===o&&c("/calendar/month/".concat(n),{replace:!0})}}),[t,c,o,d]),(0,f.useEffect)((function(){x(F(t,o))}),[o,t]),(0,f.useEffect)((function(){var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if("day"===o){var i="".concat(n[t.getMonth()]," ").concat(t.getDate()," ").concat(t.getFullYear());O(i===e)}if("month"===o){var r="".concat(n[t.getMonth()]," ").concat(t.getFullYear()),a=e.split(" "),d="".concat(a[0]," ").concat(a[2]);w(!1),O(r===d)}}),[t,e,o]),(0,I.jsxs)(v,{children:[(0,I.jsx)(y,{onClick:function(){"day"===o&&w(!0)},children:l}),(0,I.jsx)(k,{children:b&&"day"===o&&(0,I.jsx)(_,{open:!0,selected:t,calendarStartDay:1,closeOnSelect:!0,minDate:new Date(e),onChange:function(n){i(n),w(!1)},formatWeekDay:function(n){return n.slice(0,1)},onClickOutside:function(){return w(!1)}})}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(D,{onClick:function(){return B(-1)},disabled:S,children:(0,I.jsx)(z,{disabled:S})}),(0,I.jsx)(P,{onClick:function(){return B(1)},children:(0,I.jsx)(C,{})})]})]})}},466:function(n,e,t){t.d(e,{Bb:function(){return A},Bh:function(){return T},DT:function(){return z},II:function(){return E},Ik:function(){return D},N3:function(){return O},OR:function(){return C},Yq:function(){return B},__:function(){return S},c1:function(){return M},hx:function(){return I},im:function(){return Z},qE:function(){return P},r3:function(){return j},vx:function(){return F}});var i,r,a,o,d,c,p,s,l,x,h,f,u,g,m,b=t(168),w=t(6444),y=t(5705),k=t(9513),_=t.n(k),v=(t(8639),t(6763)),Z=w.ZP.div(i||(i=(0,b.Z)(["\n display: flex;\n flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background: rgba(255, 255, 255, 1); \n  border-radius: 16px;\n   padding: 40px 18px;\n\n    @media screen and (min-width: 1440px) {\n      padding-top: 60px;\n    }\n"]))),j=(0,w.ZP)(y.l0)(r||(r=(0,b.Z)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\n\n    @media screen and (min-width: 375px) {\n      width: 299px;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 354px;\n    }\n     @media screen and (min-width: 1440px) {\n        width: 758px;\n    }\n"]))),D=(0,w.ZP)(y.gN)(a||(a=(0,b.Z)(['\nopacity: 1;\nposition: absolute;\nbottom: -6%;\nright: 20%;\noverflow: hidden;\nwidth: 14px;\nheight: 14px;\nborder-radius: 50%;\nfont-size: 15px;\n\n  ::before {\n    content: " +";\n    color: rgba(255, 255, 255, 1);\n    cursor: pointer;\n    padding: 5px;\n    background: rgba(62, 133, 243, 1);\n    position: absolute;\n          // transition: background \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f;\n    top: -8px;\n    left: -6px;\n    width: 40px;\n    height: 40px;\n    }\n\n @media screen and (min-width: 768px) {\n      font-size: 24px;\n       width: 24px;\n       height: 24px;\n       bottom: 31%;\n       right: 14%;\n\n       ::before {\n         top: -8px;\n          left: -6px;\n          width: 40px;\n          height: 40px;\n       }\n    }\n']))),P=w.ZP.img(o||(o=(0,b.Z)(["\n  border-radius: inherit;\n  width: inherit;\n  height: inherit;\n"]))),z=w.ZP.label(d||(d=(0,b.Z)(["\nposition: relative;\nmargin: 0 auto;\ntext-align: center;\n"]))),C=w.ZP.div(c||(c=(0,b.Z)(["\nposition: absolute;\ntop: -71px;\nright: -36px;\nwidth: 72px;\nheight: 72px;\nborder: 2px solid ",";\nborder-radius: 50%;\n\n @media screen and (min-width: 768px) {\n       top: 0;\n       left: -60px;\n       width: 124px;\n       height: 124px;\n      \n    }\n"])),v.r.colors.primaryColor),F=w.ZP.p(p||(p=(0,b.Z)(["\nmargin: 0 auto;\nmargin-top: 18px;\n\nfont-size: 14px;\nfont-weight: 700;\n\n @media screen and (min-width: 768px) {\n    margin-top: 144px;\n      font-size: 18px;\n      margin-bottom: 8px;\n    }\n"]))),I=w.ZP.span(s||(s=(0,b.Z)(["\nmargin-top: 6px;\nmargin-bottom: 40px;\ntext-align: center;\nfont-size: 12px;\nfont-weight: 600;\nline-height: 1.17;\n\n @media screen and (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.3;\n    }\n"]))),E=(0,w.ZP)(y.gN)(l||(l=(0,b.Z)(["\nwidth: 100%;\nheight: 40px;\nborder-radius: 8px;\nborder: 1px solid rgba(17, 17, 17, 0.1);\noutline: none;\nmargin-top: 8px;\nmargin-bottom: 18px;\npadding: 12px 14px;\nfont-weight: 600;\nfont-size: 14px;\nline-height: 1.3;\n\n @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n    }\n\n@media screen and (min-width: 1440px) {\n   width: 354px;\n    }\n"]))),S=w.ZP.label(x||(x=(0,b.Z)(["\ndisplay: flex;\nflex-direction: column;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 1.17;\ncolor: rgba(17, 17, 17, 1);\n\n @media screen and (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.3;\n    }\n"]))),O=w.ZP.div(h||(h=(0,b.Z)(["\n @media screen and (min-width: 1440px) {\n    display: flex;\n   flex-wrap: wrap;\n   gap: 50px;\n   margin-bottom: 70px;\n    }\n"]))),B=w.ZP.div(f||(f=(0,b.Z)(["\n @media screen and (min-width: 1440px) {\n    display: flex;\n    flex-direction: column;\n\n    }\n"]))),M=w.ZP.button(u||(u=(0,b.Z)(["\n  margin: 0 auto;\n  margin-top: 22px;\n  width: 195px;\n  height: 46px;\n  border-radius: 16px;\n  border: none;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.3;\n  background: rgba(62, 133, 243, 1);\n  color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n      width: 262px;\n    }\n\n//   transition: background-color \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f;\n\n  :disabled {\n    cursor: not-allowed;\n  }\n\n  :hover,\n  :focus {\n    background-color: rgba(43, 120, 239, 1);\n  }\n\n  :disabled {\n    opacity: 0.4;\n  }\n\n"]))),T=(0,w.ZP)(_())(g||(g=(0,b.Z)(["\n\nwidth: 100%;\nheight: 40px;\nborder-radius: 8px;\nborder: 1px solid rgba(17, 17, 17, 0.1);\noutline: none;\nmargin-top: 8px;\nmargin-bottom: 18px;\npadding: 12px 14px;\nfont-family: Inter-600, sans-serif;\nfont-weight: 600;\nfont-size: 14px;\nline-height: 1.3;\n\n @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.3;\n    }\n\n@media screen and (min-width: 1440px) {\n   width: 354px;\n    }\n"]))),A=w.ZP.div(m||(m=(0,b.Z)(["\n  .react-datepicker {\n    background-color: rgba(62, 133, 243, 1);\n    border-radius: 16px;\n    overflow: hidden;\n    border: none;\n    color: rgba(255, 255, 255, 1);\n    width: 327px;\n    height: 354px;\n    display: flex;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.3;\n}\n.react-datepicker__header {\n        position: relative;\n\n    background-color: rgba(62, 133, 243, 1);\n    border-bottom: 1px solid rgba(62, 133, 243, 1);\n  }\n\n  .react-datepicker__navigation-icon {\n    ::before {\n      border-color: rgba(255, 255, 255, 1);\n    }\n\n.react-datepicker__navigation--next {\n    right: 9px;\n    top: 35px;\n}\n  }\n\n  .react-datepicker__month-select,\n  .react-datepicker__year-select {\n    padding: 5px;\n    width: 90px;\n    color: rgba(255, 255, 255, 1);\n\n    text-align: center;\n    font-size: 10px;\n    overflow-y: auto;\n    cursor: pointer;\n\n    @media screen and (min-width: 375px) {\n      width: 110px;\n    }\n\n    @media screen and (min-width: 1440px) {\n      width: 120px;\n      font-size: 16px;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    ::-webkit-scrollbar {\n      box-sizing: border-box;\n      width: 5px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n      background: rgba(255, 255, 255, 1);\n      border-radius: 10px;\n      margin-top: 15px;\n      margin-bottom: 15px;\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n      border-radius: 10px;\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n    }\n  }\n\n  .react-datepicker__current-month {\n    margin-top: 15px;\n    margin-bottom: 11px;\n    font-size: 20px;\n    font-weight: 600;\n    line-height : 1.2;\n\n    color: rgba(255, 255, 255, 1);\n  }\n\n  .react-datepicker__day-name {\n     width: 46px;\n    height: 42px;\n    margin: 0;\n    padding: 9px;\n    color: rgba(255, 255, 255, 1);\n  }\n\n  .react-datepicker__day {\n    width: 46px;\n    height: 46px;\n    margin: 0;\n    padding: 9px;\n    color: rgba(255, 255, 255, 1);\n    :hover,\n    :focus {\n      background-color: var(--auth-bg-color);\n      color: var(--hover-btn-background-color);\n      border-radius: 24px;\n      opacity: 0.7;\n    }\n  }\n\n\n\n  .react-datepicker__day--weekend {\n    color: rgba(255, 255, 255, 1));\n    opacity: 40%;\n  }\n\n\n    .react-datepicker__day--today,\n  .react-datepicker__day--selected {\n    background-color: rgba(255, 255, 255, 1);\n    color: rgba(62, 133, 243, 1);\n    border-radius: 50%;\n    opacity: 1;\n  }\n\n    .react-datepicker__day--keyboard-selected{\n            border-radius: 50%;\n    }\n\n    .react-datepicker__month {\n    margin: 0;\n}\n\n\n.react-datepicker__navigation--previous {\n    left: 7px;\n    top: 30px;\n}\n\n.react-datepicker__navigation--next {\n    right: 7px;\n    top: 30px;\n}\n\n.react-datepicker__day-names {\nborder-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n    "])))},7718:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});t(2791);var i,r,a=t(5048),o=t(601),d=t(6123),c=t(2839),p=t(3052),s=t(2891),l=t(5667),x=t(4400),h=t(168),f=t(6444),u=f.ZP.div(i||(i=(0,h.Z)(["\n  text-align: center;\n  padding: 40px;\n  border: 0.8px solid #e3f3ff;\n  border-radius: 29px;\n"]))),g=f.ZP.p(r||(r=(0,h.Z)(["\n  color: #343434;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  text-align: left;\n"]))),m=t(459),b=t(7232),w=t(6803),y=t(184),k=function(){var n=(0,a.I0)(),e=new Date((0,a.v9)(b._)),t=function(n){var e=n.x,t=n.y,i=n.width,r=n.value;return(0,y.jsx)("text",{x:e+i/2,y:t,fill:"#black",textAnchor:"middle",dy:-6,children:r})};return(0,y.jsxs)("div",{style:{padding:"100px"},children:[(0,y.jsx)(m.g,{minDate:"Jun 23 2023",date:e,setDate:function(e){n((0,w.G)(e.toString()))},typenav:"day"}),(0,y.jsxs)(u,{style:{width:860,height:440,margin:"auto"},children:[(0,y.jsx)(g,{children:"Tasks"}),(0,y.jsx)(o.h,{width:"100%",height:"100%",children:(0,y.jsxs)(d.v,{width:150,height:40,data:[{name:"To Do",uv:80,pv:60},{name:"In Progress",uv:70,pv:50},{name:"Done",uv:98,pv:45}],barGap:-95,maxBarSize:27,margin:{top:20,right:20,left:20,bottom:20},children:[(0,y.jsx)(c.q,{strokeDasharray:"0",vertical:!1}),(0,y.jsx)(p.K,{dataKey:"name"}),(0,y.jsx)(s.B,{axisLine:!1,tickLine:!1,domain:[0,"dataMax + 2"],tickCount:6}),(0,y.jsx)(l.u,{cursor:{fill:"transparent"}}),(0,y.jsx)(x.$,{dataKey:"pv",unit:"%",fill:"url(#gradient)",label:{content:t},radius:[0,0,10,10]}),(0,y.jsx)("defs",{children:(0,y.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,y.jsx)("stop",{offset:"5%",stopColor:"#FFD2DD",stopOpacity:.1}),(0,y.jsx)("stop",{offset:"95%",stopColor:"#FFD2DD",stopOpacity:1})]})}),(0,y.jsx)(x.$,{dataKey:"uv",unit:"%",fill:"url(#gradient2)",label:{content:t},radius:[0,0,10,10]}),(0,y.jsx)("defs",{children:(0,y.jsxs)("linearGradient",{id:"gradient2",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,y.jsx)("stop",{offset:"5%",stopColor:"#3E85F3",stopOpacity:.1}),(0,y.jsx)("stop",{offset:"95%",stopColor:"#3E85F3",stopOpacity:1})]})})]})})]})]})}},7232:function(n,e,t){t.d(e,{_:function(){return i}});var i=function(n){return n.date}}}]);
//# sourceMappingURL=718.c10f8327.chunk.js.map