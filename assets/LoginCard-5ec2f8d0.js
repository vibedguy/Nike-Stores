import{d as x,u as z,U as R,$ as j,j as e,L as f,s as t,a0 as P,a1 as I}from"./index-86d8b6d2.js";import{u as U}from"./useDispatch-3d7bfc1a.js";import{u as B}from"./chunk-BFUVSDI7-5aee4b33.js";import{B as a,T as i}from"./chunk-PULVB27S-77a71a43.js";import{F as D}from"./chunk-KRPLQIP4-f4d68ee7.js";import{S as s}from"./chunk-ZHMYA64R-35f8ce4d.js";import{H as b}from"./chunk-7OLJDQMT-62426c38.js";import{I as m}from"./chunk-6CVSDS6C-19e45e37.js";import{B as y}from"./chunk-UVUR7MCU-dfdd98c9.js";import{F as w}from"./chunk-R42ZB7PB-f0acd0bd.js";import{F as S}from"./chunk-7COXQURZ-2dfd38b7.js";import{C as O}from"./chunk-P675YKMR-663b8287.js";import"./chunk-XRMX4GAI-8159af12.js";import"./index-641a9f03.js";import"./chunk-7D6N5TE5-25e56b1e.js";import"./index-8d968404.js";function ee(){const[n,C]=x.useState({}),[E,u]=x.useState(!1),[l,L]=x.useState(""),c=z(),p=U(),o=B(),d=R(),g=r=>{const{name:F,value:k}=r.target;C({...n,[F]:k})},T=async()=>{(n.email===""||n.password==="")&&t(o,"Please Fill All The Fields","error");try{const r=await p(P(n)).unwrap();t(o,"Login successfully","success"),d.state&&d.state.from?c(d.state.from,{replace:!0}):c("/")}catch(r){t(o,r.message?r.message:"Invalid Credentials","error"),console.error(r)}};let h=j("white","gray.700");const v=async()=>{l===""&&t(o,"Please Enter Your Email","error");try{const r=await p(I(l)).unwrap();t(o,"Reset OTP Sent To Your Email","success"),c("/resetpassword")}catch(r){t(o,r.message?r.message:"User Not Found","error"),console.error(r)}};return e.jsxs(e.Fragment,{children:[e.jsx(a,{marginTop:["-5px","-10px","-20px","-30px","-40px"]}),e.jsx(D,{minH:"75vh",align:"center",justify:"center",bg:j("gray.50","gray.800"),width:"100%",children:E?e.jsxs(s,{spacing:5,mx:"auto",maxW:"2xl",py:10,px:10,children:[e.jsxs(s,{align:"center",spacing:2,children:[e.jsx(b,{fontSize:"4xl",children:"Enter Your Email"}),e.jsx(i,{color:"gray.600",fontSize:"lg",children:"This OTP will be sent to your email."})]}),e.jsx(a,{rounded:"lg",bg:h,boxShadow:"lg",p:8,children:e.jsxs(s,{spacing:4,children:[e.jsx(i,{color:"gray.600",fontSize:"md",fontWeight:"bold",children:"Email Address"}),e.jsx(m,{type:"email",value:l,onChange:r=>L(r.target.value),variant:"filled",placeholder:"Enter your email address",required:!0}),e.jsxs(s,{spacing:3,children:[e.jsx(y,{bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:v,children:"Submit"}),e.jsxs(a,{justifyContent:"center",alignItems:"center",display:"flex",children:["Return To"," ",e.jsx(i,{ml:1,textDecorationLine:"underline",color:"blue.400",cursor:"pointer",onClick:()=>u(!1),children:"Login"})]})]})]})})]}):e.jsxs(s,{spacing:8,mx:"auto",maxW:"2xl",py:10,px:10,children:[e.jsxs(s,{align:"center",children:[e.jsx(b,{fontSize:"3xl",children:"Login to your account"}),e.jsxs(i,{fontSize:"lg",color:"gray.600",children:["to buy all of our cool ",e.jsx(f,{color:"blue.400",children:"Products"})," ","✌️"]})]}),e.jsx(a,{rounded:"lg",bg:h,boxShadow:"lg",p:9,children:e.jsxs(s,{spacing:3,children:[e.jsxs(w,{id:"email",isRequired:!0,children:[e.jsx(S,{children:"Email address"}),e.jsx(m,{name:"email",type:"email",onChange:g})]}),e.jsxs(w,{id:"password",isRequired:!0,children:[e.jsx(S,{children:"Password"}),e.jsx(m,{name:"password",onChange:g,type:"password"})]}),e.jsxs(s,{spacing:5,children:[e.jsxs(s,{direction:{base:"column",sm:"row"},align:"start",justify:"space-between",children:[e.jsx(O,{children:"Remember me"}),e.jsx(i,{cursor:"pointer",color:"blue.400",onClick:()=>u(!0),children:"Forgot password?"})]}),e.jsx(y,{bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:T,children:"Login"})]}),e.jsx(s,{children:e.jsxs(a,{justifyContent:"center",alignItems:"center",display:"flex",children:["Don't have a account?",e.jsx(f,{to:"/signup",children:e.jsx(i,{ml:1,textDecorationLine:"underline",color:"blue.400",children:"Sign Up"})})]})})]})})]})}),e.jsx(a,{marginTop:["-10px","-20px","-30px","-40px","-40px"]})]})}export{ee as default};
