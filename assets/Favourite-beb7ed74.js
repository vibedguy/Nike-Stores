import{u as S,a as l,j as e,A as u,n as F,B as C,C as j,s as h,D as E,d as b}from"./index-e87d006e.js";import{u as k}from"./chunk-BFUVSDI7-e27c4d4c.js";import{u as g}from"./useDispatch-eaff7208.js";import{F as f}from"./chunk-KRPLQIP4-3220e70a.js";import{B as t,T as o}from"./chunk-PULVB27S-0515363e.js";import{I as z}from"./chunk-QINAG4RG-32c59960.js";import{B}from"./chunk-UVUR7MCU-646fb118.js";import{L as R,E as D}from"./Error-52710ac8.js";import{C as T}from"./chunk-FAWTVNS3-91b81178.js";import"./chunk-SPIKMR6I-6d4833ac.js";import"./index-0f0e6f7f.js";import"./chunk-5MKCW436-97dd3708.js";const I=({id:p,title:s,description:c,price:x,img:a,data:d})=>{const r=k(),i=g(),v=S(),m=l(n=>n.auth.token),y=async()=>{try{await i(C([p,m])).unwrap(),await i(j(m)).unwrap(),h(r,"Product removed from favourites","success")}catch(n){console.log(n),h(r,"Something went wrong","error")}},w=()=>{E("singleProduct",d),v("/description")};return e.jsx(e.Fragment,{children:e.jsxs(f,{flexDirection:"column",mb:"30px",children:[e.jsx(t,{overflow:"hidden",children:e.jsx(z,{onClick:w,className:"imgAnimation",cursor:"pointer",src:a[0]})}),e.jsxs(t,{mt:"15px",children:[e.jsxs(f,{fontSize:["14px","14px","16px","16px","18px"],justifyContent:"space-between",children:[e.jsx(o,{children:u(s)}),e.jsxs(o,{children:["₹",F(x)]})]}),e.jsx(o,{fontSize:["12px","12px","15px","15px","17px"],color:"gray",my:"2px",children:u(c,20)}),e.jsx(B,{variant:"ghost",borderRadius:"20px",border:"1px solid #cecdce",mt:"20px",onClick:y,children:"Remove"})]})]})})};function J(){const p=g(),s=l(r=>r.authReducer.token),{isLoading:c,isError:x,favourite:a}=l(r=>r.favourite),d=async r=>{try{await p(j(r)).unwrap()}catch(i){console.log(i)}};return b.useEffect(()=>{d(s)},[s]),c?e.jsx(R,{}):x?e.jsx(D,{}):e.jsx(e.Fragment,{children:e.jsxs(t,{maxW:"1450px",mx:"auto",my:"20px",p:"15px",children:[e.jsx(o,{fontSize:"20px",fontWeight:500,children:"Favourites"}),a.length?e.jsx(t,{display:"grid",gap:["20px","20px","20px","40px","40px"],mt:"40px",gridTemplateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"],children:a.map(r=>e.jsx(I,{...r,data:r},r._id))}):e.jsx(t,{children:e.jsx(T,{h:"30vh",children:e.jsx(o,{fontSize:"20px",children:"Your favourite items will be displayed here."})})})]})})}export{J as default};
