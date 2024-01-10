"use strict";(self.webpackChunkcode_jedi_project_03_frontend=self.webpackChunkcode_jedi_project_03_frontend||[]).push([[218],{6218:function(e,s,r){r.r(s),r.d(s,{default:function(){return b}});var a=r(2052),n=r(5861),i=r(9439),t=r(4687),o=r.n(t),d=r(2791),l=r(5705),c=r(6727),u=r(9434),p=r(5822),h=r(7689),m=r(3448),w=r(7609),x=r(5218),j=r(1835),f=r(184),v=c.Ry({email:c.Z_().email("Invalid email format").required("Email is required"),password:c.Z_().min(8,"Password must be at least 8 characters").max(64,"Password must not exceed 64 characters").required("Password is required"),repeatPassword:c.Z_().oneOf([c.iH("password"),null],"Passwords must match").required("Repeat password is required")}),y=function(e){var s=e.emailLabel,r=e.passwordLabel,a=e.buttonLabel,t=e.repeatPasswordLabel,c=(0,u.I0)(),y=(0,h.s0)(),P=(0,d.useState)(!1),b=(0,i.Z)(P,2),g=b[0],k=b[1],_=(0,d.useState)(!1),S=(0,i.Z)(_,2),Z=S[0],q=S[1],L=(0,d.useState)(!1),F=(0,i.Z)(L,2),E=F[0],N=F[1];(0,d.useEffect)((function(){Z&&(x.ZP.error("Email is already in use"),q(!1))}),[Z]);var R=function(){k((function(e){return!e}))},C=function(){var e=(0,n.Z)(o().mark((function e(s){var r,a,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.email,a=s.password,e.prev=1,N(!0),e.next=5,c((0,p.yY)({name:"V",email:r,password:a}));case 5:"Email already in use"===(n=e.sent).payload&&q(!0),n.payload.user&&y("/signin");case 8:return e.prev=8,N(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,,8,11]])})));return function(s){return e.apply(this,arguments)}}();return(0,f.jsx)(l.J9,{initialValues:{email:"",password:"",repeatPassword:""},validationSchema:v,onSubmit:C,children:function(e){var n=e.errors,i=e.touched;e.values,e.handleChange;return(0,f.jsxs)(l.l0,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(m.ys,{htmlFor:"email",children:s}),(0,f.jsx)(l.gN,{as:m.vy,type:"email",id:"email",name:"email",placeholder:"E-mail",required:!0,className:"special ".concat(n.email&&i.email?"error":"")}),(0,f.jsx)(m.Vv,{name:"email",component:"div"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(m.ys,{htmlFor:"password",children:r}),(0,f.jsxs)(m.SP,{children:[(0,f.jsx)(l.gN,{as:m.vy,type:g?"text":"password",id:"password",name:"password",placeholder:"Password",required:!0,className:"special ".concat(n.password&&i.password?"error":"")}),(0,f.jsx)(m.kR,{onClick:function(){return R()},type:"button",children:(0,f.jsx)("svg",{width:"16",height:"16",stroke:"#407BFF",fill:"none",children:(0,f.jsx)("use",{xlinkHref:"".concat(w.Z,g?"#icon-eye":"#icon-eye-slash")})})})]}),(0,f.jsx)(l.Bc,{name:"password",component:"div"})]}),t&&(0,f.jsxs)("div",{children:[(0,f.jsx)(m.ys,{htmlFor:"repeatPassword",children:t}),(0,f.jsxs)(m.SP,{children:[(0,f.jsx)(l.gN,{as:m.vy,type:g?"text":"password",id:"repeatPassword",name:"repeatPassword",placeholder:"Repeat password",required:!0,className:"special ".concat(n.repeatPassword&&i.repeatPassword?"error":"")}),(0,f.jsx)(m.kR,{onClick:function(){return R()},type:"button",children:(0,f.jsx)("svg",{width:"16",height:"16",stroke:"#407BFF",fill:"none",children:(0,f.jsx)("use",{xlinkHref:"".concat(w.Z,g?"#icon-eye":"#icon-eye-slash")})})})]}),(0,f.jsx)(l.Bc,{name:"repeatPassword",component:"div"})]}),(0,f.jsx)("div",{children:(0,f.jsx)(m.hj,{type:"submit",children:a})}),E&&(0,f.jsx)(j.a,{})]})}})},P=function(){return(0,f.jsxs)(m.l3,{children:[(0,f.jsx)(m.QF,{children:"Sign Up"}),(0,f.jsx)(y,{emailLabel:"Enter your email",passwordLabel:"Enter your password",repeatPasswordLabel:"Repeat password",buttonLabel:"Sign Up"}),(0,f.jsx)(m.L7,{to:"/signin",children:"Sign In"})]})};function b(){return(0,f.jsx)(a.ds,{children:(0,f.jsx)(P,{})})}}}]);
//# sourceMappingURL=218.30448ddc.chunk.js.map