"use strict";(self.webpackChunkcode_jedi_project_03_frontend=self.webpackChunkcode_jedi_project_03_frontend||[]).push([[672],{9672:function(e,r,s){s.r(r),s.d(r,{default:function(){return g}});var a=s(2052),n=s(5861),o=s(9439),t=s(4687),i=s.n(t),l=s(2791),c=s(5705),d=s(6727),u=s(3448),p=s(9434),m=s(5822),h=s(7689),w=s(7609),x=s(5218),j=s(1835),f=s(184),v=d.Ry({email:d.Z_().email("Invalid email format").required("Email is required"),password:d.Z_().min(8,"Password must be at least 8 characters").max(64,"Password must not exceed 64 characters").required("Password is required")}),y=function(e){var r=e.emailLabel,s=e.passwordLabel,a=e.buttonLabel,t=(0,p.I0)(),d=(0,l.useState)(!1),y=(0,o.Z)(d,2),b=y[0],g=y[1],k=(0,l.useState)(!1),_=(0,o.Z)(k,2),L=_[0],S=_[1],Z=(0,l.useState)(!1),E=(0,o.Z)(Z,2),F=E[0],P=E[1];(0,l.useEffect)((function(){L&&(x.ZP.error("Email or password is wrong"),S(!1))}),[L]);var q=(0,h.s0)(),N=function(){var e=(0,n.Z)(i().mark((function e(r){var s,a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.email,a=r.password,e.prev=1,P(!0),e.next=5,t((0,m.Fv)({email:s,password:a}));case 5:(n=e.sent).payload.token&&q("/home"),"Request failed with status code 401"===n.payload.message&&S(!0),"Network Error"===n.payload.message&&x.ZP.error("Network error");case 9:return e.prev=9,P(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,,9,12]])})));return function(r){return e.apply(this,arguments)}}();return(0,f.jsx)(c.J9,{initialValues:{email:"",password:""},validationSchema:v,onSubmit:N,children:function(e){var n=e.errors,o=e.touched;return(0,f.jsxs)(c.l0,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(u.ys,{htmlFor:"email",children:r}),(0,f.jsx)(u.vy,{type:"email",id:"email",name:"email",placeholder:"E-mail",className:"special ".concat(n.email&&o.email?"error":"")}),(0,f.jsx)(u.Vv,{name:"email",component:"div"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(u.ys,{htmlFor:"password",children:s}),(0,f.jsxs)(u.SP,{children:[(0,f.jsx)(u.vy,{type:b?"text":"password",id:"password",name:"password",placeholder:"Password",className:"special ".concat(n.password&&o.password?"error":"")}),(0,f.jsx)(u.kR,{onClick:function(){g((function(e){return!e}))},type:"button",children:(0,f.jsx)("svg",{width:"16",height:"16",stroke:"#407BFF",fill:"none",children:(0,f.jsx)("use",{xlinkHref:"".concat(w.Z,b?"#icon-eye":"#icon-eye-slash")})})})]}),(0,f.jsx)(u.Vv,{name:"password",component:"div",className:"error-message"})]}),(0,f.jsx)(u.hj,{type:"submit",children:a}),F&&(0,f.jsx)(j.a,{})]})}})},b=function(){return(0,f.jsxs)(u.Lb,{children:[(0,f.jsx)(u.QF,{children:"Sign In"}),(0,f.jsx)(y,{emailLabel:"Enter your email",passwordLabel:"Enter your password",buttonLabel:"Sign In"}),(0,f.jsx)(u.L7,{to:"/forgot-password",children:"Forgot your password?"}),(0,f.jsx)(u.L7,{to:"/signup",children:"Sign Up"})]})};function g(){return(0,f.jsx)(a.ds,{children:(0,f.jsx)(b,{})})}}}]);
//# sourceMappingURL=672.840547ae.chunk.js.map