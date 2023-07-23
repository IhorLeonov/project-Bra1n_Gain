"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[959],{1037:function(n,e,t){t.d(e,{Z:function(){return i}});var o=t(184);function i(n){var e=n.type;return(0,o.jsx)(o.Fragment,{children:"password"===e?(0,o.jsx)("svg",{width:30,height:30,children:(0,o.jsx)("use",{xlinkHref:"/project-Bra1n_Gain/images/sprite.svg#icon-show-password",fill:"#3E85F3"})}):(0,o.jsx)("svg",{width:30,height:30,children:(0,o.jsx)("use",{xlinkHref:"/project-Bra1n_Gain/images/sprite.svg#icon-close-password",fill:"#3E85F3"})})})}},3959:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var o=t(9439),i=t(2791),r=t(9434),a=t(9273),s=t(1037),d=t(7692),c=t(5218),p=t(4559),l=t(5372),u=t(184);function f(){var n=(0,r.I0)(),e=(0,i.useState)(""),t=(0,o.Z)(e,2),f=t[0],h=t[1],x=(0,i.useState)(""),m=(0,o.Z)(x,2),g=m[0],b=m[1],w=(0,i.useState)(""),Z=(0,o.Z)(w,2),j=Z[0],v=Z[1],k=(0,i.useState)("password"),y=(0,o.Z)(k,2),P=y[0],S=y[1],C=(0,i.useState)("main"),z=(0,o.Z)(C,2),G=z[0],U=z[1],V=(0,i.useState)("main"),$=(0,o.Z)(V,2),B=$[0],E=$[1],I=(0,i.useState)("main"),N=(0,o.Z)(I,2),O=N[0],_=N[1];function L(){return!!(f.length>=16?(U("fail"),(0,p.V)("Name must be less than 16 characters."),0):(U("good"),1))&&(!!function(n){return n.match(/\S+@\S+\.\S+/)?(E("good"),!0):(E("fail"),(0,p.V)("Invalid email address"),!1)}(g)&&!!function(n){return/^.{6,16}$/.test(n)?/^\S*$/.test(n)?/^(?=.*[A-Z]).*$/.test(n)?/^(?=.*[a-z]).*$/.test(n)?/^(?=.*[0-9]).*$/.test(n)?(_("good"),!0):((0,p.V)("Password must contain at least one Digit."),_("fail"),!1):((0,p.V)("Password must have at least one Lowercase Character."),_("fail"),!1):((0,p.V)("Password must have at least one Uppercase Character."),_("fail"),!1):((0,p.V)("Password must not contain Whitespaces."),_("fail"),!1):((0,p.V)("Password must be 6-16 Characters Long."),_("fail"),!1)}(j))}var M=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":return h(o);case"email":return b(o);case"password":return v(o);default:return}};return(0,u.jsxs)(l.UR,{children:[(0,u.jsxs)(l.B2,{onSubmit:function(e){e.preventDefault(),L()&&(U("good"),E("good"),_("good"),n((0,a.z2)({name:f,email:g,password:j})),b(""),h(""),v(""))},autoComplete:"off",children:[(0,u.jsx)(l.TY,{children:"Sign Up"}),(0,u.jsx)(l.cp,{children:"Name"}),(0,u.jsx)(l.GM,{children:(0,u.jsx)(l.xO,{id:"reg",type:"text",name:"name",value:f,className:" ".concat(G),placeholder:"Enter your name",onChange:M})}),(0,u.jsx)(l.cp,{children:"Email"}),(0,u.jsx)(l.GM,{children:(0,u.jsx)(l.xO,{id:"reg",type:"email",name:"email",value:g,className:" ".concat(B),placeholder:"Enter email",onChange:M})}),(0,u.jsx)(l.cp,{children:"Password"}),(0,u.jsxs)(l.GM,{children:[(0,u.jsx)(l.xO,{id:"reg",type:P,name:"password",value:j,className:" ".concat(O),placeholder:"Enter password",onChange:M}),(0,u.jsx)(l.pA,{type:"button",onClick:function(){"password"===P&&S("text"),"text"===P&&S("password")},children:(0,u.jsx)(s.Z,{type:P})})]}),(0,u.jsxs)(l.qU,{type:"submit",children:["Sign Up",(0,u.jsx)(d.NzD,{size:20})]}),(0,u.jsx)(c.x7,{})]}),(0,u.jsx)(l.v$,{to:"/login",type:"button",children:(0,u.jsx)(l.h,{children:"Log in "})})]})}},5372:function(n,e,t){t.d(e,{B2:function(){return g},GM:function(){return w},TY:function(){return Z},UR:function(){return m},cp:function(){return j},h:function(){return y},pA:function(){return P},qU:function(){return v},v$:function(){return k},xO:function(){return b}});var o,i,r,a,s,d,c,p,l,u,f=t(168),h=t(6444),x=t(1087),m=h.ZP.div(o||(o=(0,f.Z)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  @media (min-width: 320px) {\n    background-color: #ffffff;\n  }\n\n  @media (min-width: 375px) {\n    background-color: ",";\n  }\n\n  @media (min-width: 1280px) {\n    background-image: url(","/images/goose_auth-desctop/goose_auth-desctop.png);\n    background-size: 400px 416px;\n    background-repeat: no-repeat;\n    background-position: 0% 100%;\n  }\n"])),(function(n){return n.theme.colors.secondBlueColor}),"/project-Bra1n_Gain"),g=h.ZP.form(i||(i=(0,f.Z)(["\n  padding: 0px;\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 24px;\n\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  position: relative;\n\n  @media (min-width: 320px) {\n    width: 100%;\n    padding: 10px;\n  }\n  @media (min-width: 375px) {\n    width: 300px;\n    padding: 20px;\n  }\n  @media (min-width: 768px) {\n    width: 480px;\n    padding: 40px;\n  }\n"]))),b=h.ZP.input(r||(r=(0,f.Z)(["\n  height: 54px;\n  border-radius: 8px;\n  border: 1px solid #11111126;\n  padding: 18px;\n  transition: border 0.5s ease;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #111111;\n  }\n  &.main {\n    border: 1px solid #11111126;\n  }\n  &.fail {\n    border: 1px solid #e74a3b;\n  }\n  &.good {\n    border: 1px solid #3cbc81;\n  }\n\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: #dce3e5;\n  }\n  :-ms-input-placeholder {\n    color: #dce3e5;\n  }\n\n  @media (min-width: 320px) {\n    width: 100%;\n  }\n  @media (min-width: 375px) {\n    width: 100%;\n  }\n  @media (min-width: 1280px) {\n    width: 400px;\n  }\n"]))),w=h.ZP.label(a||(a=(0,f.Z)(["\n  &:nth-child(7) {\n    margin-bottom: 48px;\n    position: relative;\n  }\n\n  &:nth-child(-n + 5) {\n    margin-bottom: 18px;\n  }\n"]))),Z=h.ZP.h1(s||(s=(0,f.Z)(["\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  font-size: 24px;\n\n  color: #3e85f3;\n  margin-bottom: 40px;\n"]))),j=h.ZP.span(d||(d=(0,f.Z)(["\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n\n  color: #111111;\n  margin-bottom: 8px;\n"]))),v=h.ZP.button(c||(c=(0,f.Z)(["\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n\n  height: 56px;\n  width: 100%;\n\n  gap: 11px;\n  background-color: #3e85f3;\n  border: none;\n  border-radius: 16px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: #ffffff;\n  cursor: pointer;\n  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  &:hover,\n  &:focus {\n    background-color: #2b78ef;\n  }\n"]))),k=(0,h.ZP)(x.OL)(p||(p=(0,f.Z)(["\n  border: none;\n  cursor: pointer;\n  position: relative;\n"]))),y=h.ZP.span(l||(l=(0,f.Z)(["\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  color: #3e85f3;\n\n  &:after {\n    content: ' ';\n    background: #3e85f3;\n    width: 100%;\n    height: 2px;\n    position: absolute;\n    top: 21px;\n    left: 0px;\n  }\n"]))),P=h.ZP.div(u||(u=(0,f.Z)(["\n  width: 30px;\n  height: 30px;\n\n  position: absolute;\n  bottom: 11px;\n  right: 11px;\n"])))}}]);
//# sourceMappingURL=959.bf9904d8.chunk.js.map