"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[356],{3095:function(n,t,e){e.d(t,{n:function(){return D}});var r,i,o,a,u,d=e(7689),p=e(5716),c=e(3629),f=e(4565),l=e(1951),x=e(9040),s=e(4690),g=e(2680),h=e(168),m=e(6444),w=m.ZP.ul(r||(r=(0,h.Z)(["\n  height: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  margin-top: 24px;\n  margin-bottom: 14px;\n  padding: ",";\n\n  @media (min-width: 768px) {\n    padding: ",";\n    height: ",";\n    margin-bottom: ",";\n    margin-top: ",";\n  }\n\n  @media (min-width: 1440px) {\n    margin-bottom: ",";\n    padding: ",";\n    margin-top: 32px;\n  }\n"])),(function(n){return n.page?"50px":"74px"}),(function(n){return n.page?"16px":"14px 18px"}),(function(n){return n.page?"14px 40px":"10px 32px"}),(function(n){return n.page?"46px":"68px"}),(function(n){return n.page?"18px":"16px"}),(function(n){return n.page?"32px":"24px"}),(function(n){return n.page?"15px":"16px"}),(function(n){return n.page?"14px 60px":"10px 46px"})),v=(m.ZP.li(i||(i=(0,h.Z)(["\n  color: #3e85f3;\n"]))),m.ZP.li(o||(o=(0,h.Z)(["\n  background: ",";\n  font-family: 'Inter';\n\n  text-align: center;\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 4px;\n  border-radius: 8px;\n\n  cursor: ",";\n\n  @media (min-width: 376px) {\n    min-width: 40px;\n    gap: 6px;\n  }\n\n  :hover {\n    color: ",";\n    background-color: ",";\n    transform: ",";\n    font-size: ",";\n    transition-duration: ",";\n  }\n"])),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.CalendarHead}),(function(n){return n.page?"default":"pointer"}),(function(n){return!n.page&&"#fff"}),(function(n){return!n.page&&"#3e85f3"}),(function(n){return!n.page&&"scale(1.12)"}),(function(n){return!n.page&&"12px"}),(function(n){return!n.page&&"500ms"}))),Z=m.ZP.p(a||(a=(0,h.Z)(["\n  font-weight: 600;\n  color: ",";\n  text-transform: uppercase;\n  font-size: 16px;\n  line-height: 1.12;\n  @media (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.weekend&&"#3e85f3"}),(function(n){return n.page?"16px":"14px"}),(function(n){return n.page?"1.12":"1.3"})),b=m.ZP.p(u||(u=(0,h.Z)(["\n  color: ",";\n  background-color: ",";\n  border-radius: 6px;\n  padding: 4px 6px;\n  font-weight: 700;\n\n  font-size: 12px;\n  line-height: 1.17;\n\n  @media (min-width: 768px) {\n    padding: 4px 8px;\n    border-radius: 8px;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"])),(function(n){return n.isCurrentDay&&"#fff"}),(function(n){return n.isCurrentDay?"#3e85f3":"".concat((function(n){return n.theme.mainBackgroundColor}))})),y=e(184),D=function(n){for(var t=n.date,e=n.setDate,r=(0,d.TH)().pathname.includes("day"),i=(0,p.Z)("(max-width: 767px)")?"EEEEE":"E",o=(0,c.default)(t,{weekStartsOn:1}),a=(0,f.default)(t,{weekStartsOn:1}),u=[],h=o;h<=a;){var m=(0,l.default)(h,"d"),D=(0,l.default)(h,i);u.push({date:m,day:D,fullDate:h}),h=(0,x.default)(h,1)}return(0,y.jsx)(w,{page:!r,children:u.map((function(n){var i=(0,s.default)(n.fullDate,t);return(0,y.jsxs)(v,{onClick:function(){return r&&e(n.fullDate)},page:!r,children:[(0,y.jsx)(Z,{weekend:(0,g.Z)(n.fullDate)&&!r,page:!r,children:n.day}),r&&(0,y.jsx)(b,{isCurrentDay:i,page:!r,children:n.date})]},n.fullDate)}))})}},2356:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var r,i,o,a,u,d,p,c,f,l,x,s=e(5048),g=e(9439),h=e(2791),m=e(168),w=e(1087),v=e(6444),Z=v.ZP.div(r||(r=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-radius: 8px;\n"]))),b=v.ZP.div(i||(i=(0,m.Z)(["\n  color: ",";\n  background-color: ",";\n  border-radius: 6px;\n  padding: 4px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  width: 22px;\n\n  @media (min-width: 768px) {\n    padding: 4px 8px;\n    margin: -4px -8px;\n    border-radius: 8px;\n  }\n"])),(function(n){return n.isCurrentDate?"#FFFFFF":"inherit"}),(function(n){return n.isCurrentDate?"#3e85f3":"inherit"})),y=(v.ZP.ul(o||(o=(0,m.Z)(["\n  background-color: red;\n  color: red;\n"]))),(0,v.ZP)(w.OL)(a||(a=(0,m.Z)(["\n  min-width: 28px;\n  min-height: 94px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  background: #fff;\n  font-family: 'InterBolt';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.17;\n  color: ",";\n\n  &:first-child {\n    border-top-left-radius: 8px;\n  }\n\n  &:last-child {\n    border-bottom-right-radius: 8px;\n  }\n\n  &:nth-child(7) {\n    border-top-right-radius: 8px;\n  }\n\n  &:nth-last-child(7) {\n    border-bottom-left-radius: 8px;\n  }\n\n  @media (min-width: 376px) {\n    min-width: 48px;\n  }\n\n  @media (min-width: 768px) {\n    min-width: 100px;\n    height: 144px;\n    line-height: 1.12;\n  }\n\n  @media (min-width: 1280px) {\n    height: 135px;\n  }\n"])),(function(n){return n.selected?"red":"#343434"}))),D=v.ZP.div(u||(u=(0,m.Z)(["\n  padding: 10px 12px;\n  font-weight: 700;\n  font-family: 'InterBolt';\n\n  @media (min-width: 768px) {\n    padding: 18px 22px;\n  }\n"]))),k=v.ZP.div(d||(d=(0,m.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),F=(v.ZP.div(p||(p=(0,m.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),v.ZP.div(c||(c=(0,m.Z)(["\n  background-color: #fff;\n  padding: 40px;\n"]))),v.ZP.li(f||(f=(0,m.Z)(["\n  height: 22px;\n  padding: 4px 4px 4px 8px;\n  font-family: 'InterBolt';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 1.4;\n  border-radius: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n  ",";\n\n  @media (min-width: 768px) {\n    min-width: 92px;\n    height: 26px;\n    padding: 4px 8px 4px 12px;\n    font-size: 10px;\n    line-height: 1.29;\n  }\n\n  @media (min-width: 1280px) {\n    min-width: 114px;\n  }\n"])),(function(n){return function(n){switch(n.priority){case"low":return"color: #3E85F3; background-color: #CEEEFD;";case"medium":return"color: #F3B249; background-color: #FCF0D4;";case"high":return"color: #EA3D65; background-color: #FFD2DD;";default:return"color: #3E85F3; background-color: #FFFFFF"}}(n)}))),j=(v.ZP.div(l||(l=(0,m.Z)(["\n  margin-top: auto;\n  margin: auto;\n  color: #3e85f3;\n  text-align: center;\n  overflow: hidden;\n  font-size: 14px;\n"]))),v.ZP.ul(x||(x=(0,m.Z)(["\n  list-style-type: none;\n  padding: 0 8px 0px 8px;\n"])))),C=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},P=e(184),E=function(n){var t=n.date,e=n.setDate,r=n.tasks,i=(0,h.useState)(null),o=(0,g.Z)(i,2),a=o[0],u=o[1],d=(0,h.useState)([]),p=(0,g.Z)(d,2),c=p[0],f=p[1];(0,h.useEffect)((function(){l()}),[t]);var l=function(){for(var n=t.getFullYear(),i=t.getMonth(),o=new Date(n,i+1,0).getDate(),d=new Date(n,i,1).getDay(),p=[],c=0===d?6:d-1,l=Math.ceil((c+o)/7),x=function(n){var t=new Date(n),e=""+(t.getMonth()+1),r=""+t.getDate(),i=t.getFullYear();return e.length<2&&(e="0"+e),r.length<2&&(r="0"+r),[i,e,r].join("-")},s=0;s<c;s++)p.push((0,P.jsx)(y,{},C()));for(var g=function(o){var d=new Date(n,i,o),c=o===t.getDate()&&i===(new Date).getMonth()&&n===(new Date).getFullYear();p.push((0,P.jsxs)(y,{selected:a===t,to:"/calendar/day/".concat(o),children:[(0,P.jsx)(k,{onClick:function(){return e(d)},children:(0,P.jsx)(D,{children:(0,P.jsx)(b,{isCurrentDate:c,children:o})})}),(0,P.jsx)(j,{children:null===r||void 0===r?void 0:r.map((function(n){return function(n,t){var e=x(n);return t.date===e}(d,n)?(0,P.jsx)(F,{priority:n.priority,onClick:function(){return function(n){u(n)}(t)},children:n.title},n._id):null}))})]},C()))},h=1;h<=o;h++)g(h);for(var m=7*l-c-o,w=0;w<m;w++)p.push((0,P.jsx)(y,{},C()));f(p)};return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(Z,{children:c})})},z=e(7232),S=e(6803),M=e(3095),B=function(n){return n.tasks.tasks},I=e(6175),Y=function(){var n=(0,s.I0)(),t=new Date((0,s.v9)(z._)),e=(0,s.v9)(B),r=t.getDate(),i={month:t.getMonth()+1,day:r,year:t.getFullYear()},o=function(t){n((0,S.G)(t.toString()))};return(0,h.useEffect)((function(){n((0,I.wZ)(i))}),[n]),(0,P.jsxs)("div",{children:[(0,P.jsx)(M.n,{date:t,setDate:o}),(0,P.jsx)(E,{date:t,setDate:o,tasks:e})]})}},7232:function(n,t,e){e.d(t,{_:function(){return r}});var r=function(n){return n.date}},2680:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(8527),i=e(4522);function o(n){(0,i.Z)(1,arguments);var t=(0,r.default)(n),e=t.getDay();return 0===e||6===e}},5716:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(2791);var i="undefined"!==typeof window,o=function(n,t){var e=(0,r.useState)(function(n,t){return void 0!==t?t:!!i&&window.matchMedia(n).matches}(n,t)),o=e[0],a=e[1];return(0,r.useEffect)((function(){var t=!0,e=window.matchMedia(n),r=function(){t&&a(!!e.matches)};return e.addListener(r),a(e.matches),function(){t=!1,e.removeListener(r)}}),[n]),o}}}]);
//# sourceMappingURL=356.73e30273.chunk.js.map