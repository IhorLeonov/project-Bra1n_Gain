"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[738],{5738:function(t,n,e){e.r(n),e.d(n,{default:function(){return L}});var i,a,s,r,o,d,l,c=e(9439),x=e(9434),p=e(9230),h=e(168),f=e(6444),u=f.ZP.div(i||(i=(0,h.Z)(["\n  padding: 134px 114px 105px 114px;\n  background-color: white;\n  border-radius: 16px;\n\n  @media screen and (min-width: 768px) and (max-width: 1279) {\n    padding: 132px 32px 224px 32px;\n  }\n"]))),g=f.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  justify-content: space-around;\n  gap: 328px;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),y=f.ZP.div(s||(s=(0,h.Z)(["\n  width: 860px;\n  height: 440px;\n  margin: auto;\n\n  text-align: center;\n  padding: 40px;\n  border: 0.8px solid #e3f3ff;\n  border-radius: 29px;\n"]))),j=f.ZP.p(r||(r=(0,h.Z)(["\n  color: #343434;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  text-align: left;\n"]))),m=e(459),b=e(2791),k=e(601),v=e(6123),D=e(2839),Z=e(3052),w=e(2891),F=e(5667),C=e(4400),M=e(184),P=function(t){var n=t.date,e=t.tasks,i=(0,p.$G)().t,a=(0,b.useState)([]),s=(0,c.Z)(a,2),r=s[0],o=s[1],d=(0,b.useCallback)((function(t){for(var n=function(t){return isFinite(t)?t:0},e=0,i=0,a=0,s=0;s<t.length;s++)"to-do"===t[s].category?e++:"in-progress"===t[s].category?i++:a++;return[n(Math.floor(100*e/t.length)),n(Math.floor(100*i/t.length)),n(Math.floor(100*a/t.length))]}),[]);(0,b.useEffect)((function(){var t=[{name:"".concat(i("statistics.ToDo")),day:0,month:0},{name:"".concat(i("statistics.InProgress")),day:0,month:0},{name:"".concat(i("statistics.Done")),day:0,month:0}],a=e.filter((function(t){return new Date(t.date).getMonth()===n.getMonth()})),s=e.filter((function(t){return new Date(t.date).getDate()===n.getDate()})),r=d(a),l=d(s);t[0].month=r[0],t[1].month=r[1],t[2].month=r[2],t[0].day=l[0],t[1].day=l[1],t[2].day=l[2],o(t)}),[n,d,e,i]);var l=function(t){var n=t.x,e=t.y,i=t.width,a=t.value;return(0,M.jsxs)("text",{x:n+i/2,y:e,fill:"#black",textAnchor:"middle",dy:-6,children:[a,"%"]})};return(0,M.jsx)(k.h,{width:"100%",height:"100%",children:(0,M.jsxs)(v.v,{data:r,barCategoryGap:75,barGap:5,maxBarSize:27,margin:{top:35,right:10,left:10,bottom:10},children:[(0,M.jsx)(D.q,{strokeDasharray:"0",vertical:!1,stroke:"#E3F3FF"}),(0,M.jsx)(Z.K,{dataKey:"name",tickMargin:16,tickLine:!1}),(0,M.jsx)(w.B,{axisLine:!1,tickLine:!1,tickCount:6,type:"number",position:"left",ticks:[0,20,40,60,80,100],tickMargin:35}),(0,M.jsx)(F.u,{cursor:{fill:"transparent"}}),(0,M.jsx)(C.$,{name:i("statistics.Day"),dataKey:"day",unit:"%",fill:"url(#gradient)",label:{content:l},radius:[0,0,10,10]}),(0,M.jsx)("defs",{children:(0,M.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,M.jsx)("stop",{offset:"5%",stopColor:"#FFD2DD",stopOpacity:.1}),(0,M.jsx)("stop",{offset:"95%",stopColor:"#FFD2DD",stopOpacity:1})]})}),(0,M.jsx)(C.$,{name:i("statistics.Month"),dataKey:"month",unit:"%",fill:"url(#gradient2)",label:{content:l},radius:[0,0,10,10]}),(0,M.jsx)("defs",{children:(0,M.jsxs)("linearGradient",{id:"gradient2",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,M.jsx)("stop",{offset:"5%",stopColor:"#3E85F3",stopOpacity:.1}),(0,M.jsx)("stop",{offset:"95%",stopColor:"#3E85F3",stopOpacity:1})]})})]})})},G=e(8712),$=e(1661),B=e(1233),E=f.ZP.ul(o||(o=(0,h.Z)(["\n  display: flex;\n  gap: 36px;\n"]))),K=f.ZP.li(d||(d=(0,h.Z)(["\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: -16px;\n    bottom: 5px;\n    display: inline-block;\n    border-radius: 8px;\n    width: 8px;\n    height: 8px;\n  }\n\n  &:first-child::before {\n    background-color: #ffd2dd;\n  }\n\n  &:last-child::before {\n    background-color: #3e85f3;\n  }\n"]))),O=f.ZP.p(l||(l=(0,h.Z)(["\n  color: #343434;\n  font-size: 16px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n"]))),z=function(){var t=(0,p.$G)().t;return(0,M.jsx)("div",{children:(0,M.jsxs)(E,{children:[(0,M.jsx)(K,{children:(0,M.jsx)(O,{children:t("statistics.ByDay")})}),(0,M.jsx)(K,{children:(0,M.jsx)(O,{children:t("statistics.ByMonth")})})]})})},L=function(){var t=(0,p.$G)().t,n=(0,B.Y)(),e=(0,c.Z)(n,2),i=e[0],a=e[1];(0,$.h)();var s=(0,x.v9)(G.jF);return(0,M.jsxs)(u,{children:[(0,M.jsxs)(g,{children:[(0,M.jsx)(m.g,{minDate:"Jun 23 2023",date:i,setDate:a,typenav:"day"}),(0,M.jsx)(z,{})]}),(0,M.jsxs)(y,{children:[(0,M.jsx)(j,{children:t("statistics.Tasks")}),(0,M.jsx)(P,{date:i,tasks:s})]})]})}}}]);
//# sourceMappingURL=738.97a0bbcb.chunk.js.map