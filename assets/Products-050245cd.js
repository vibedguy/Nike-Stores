import{j as e,s as S,P,Q as B,R as I,S as T,T as v,U as M,B as L,n as W,z as R,d as w,a as N,u as D,V as G,W as E,X as O}from"./index-9cebc41f.js";import{G as Z}from"./iconBase-cdfbda46.js";import{A as _,a as $,b as K,c as Q,d as U}from"./chunk-UIZMWHSN-87f2d6ac.js";import{S as V}from"./chunk-ZHMYA64R-63eb3b9b.js";import{B as i,T as x}from"./chunk-PULVB27S-10e64313.js";import{C as X}from"./chunk-P675YKMR-283ce83f.js";import{B as d}from"./chunk-UVUR7MCU-950b01f5.js";import{u as k}from"./chunk-BFUVSDI7-d44a3c7e.js";import{c as Y,d as q}from"./index.esm-33c488e9.js";import{u as z}from"./useDispatch-0ad47192.js";import{M as J,a as ee,b as oe,c as a,S as m}from"./chunk-J5XKU7PD-be4a3844.js";import{F as u}from"./chunk-KRPLQIP4-22c0c197.js";import{I as te}from"./chunk-QINAG4RG-f2773aa8.js";import{L as re,E as se}from"./Error-43bbe9f8.js";import{C as y}from"./chunk-FAWTVNS3-e093b7e6.js";import{G as b}from"./chunk-JARCRF6W-8a891b47.js";import"./chunk-ROURZMX4-aceee6dc.js";import"./chunk-OCNORRQU-0b90eb02.js";import"./index-b6d2f641.js";import"./index-7f3b1649.js";import"./chunk-7D6N5TE5-047b8f21.js";import"./chunk-XRMX4GAI-b3474c3f.js";import"./chunk-R42ZB7PB-a65c0ab2.js";import"./index-8d968404.js";import"./index-e58fd50a.js";import"./chunk-5MKCW436-b40931fe.js";function ie(o){return Z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"}},{tag:"circle",attr:{cx:"336",cy:"128",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"circle",attr:{cx:"176",cy:"256",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"circle",attr:{cx:"336",cy:"384",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}}]})(o)}const h=({title:o,item:t,change:r,apply:s})=>e.jsxs(_,{children:[e.jsx("h2",{children:e.jsxs($,{children:[e.jsx(i,{flex:"1",textAlign:"left",fontSize:["14px","18px"],children:o}),e.jsx(K,{})]})}),e.jsx(Q,{pb:4,children:e.jsxs(V,{direction:"column",gap:"5px",children:[t.map((n,p)=>e.jsx(X,{onChange:c=>{r(c)},value:n,name:o,children:e.jsx(x,{fontSize:["13px","16px"],children:n})},p)),e.jsx(d,{mt:1,size:"sm",color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},fontSize:["10px","13px"],name:o,onClick:s,children:"Apply"})]})})]}),ne=()=>{const o=k(),t=()=>{},r=s=>{S(o,"Filter Applied Successfully","success",1e3)};return e.jsxs(U,{allowMultiple:!0,children:[e.jsx(h,{change:t,apply:r,title:"Gender",item:["Men","Women","Kids"]}),e.jsx(h,{change:t,apply:r,title:"Category",item:["Cloths","Shoes"]}),e.jsx(h,{change:t,apply:r,title:"Size",item:["Small","Medium","Large"]}),e.jsx(h,{change:t,apply:r,title:"Colour",item:["Black","White","Green","Red","Blue"]})]})},ce=()=>{const o=z(),t=k(),r=({target:{textContent:s}})=>{switch(S(t,`${s} applied successfully`,"success"),s){case"Price: Low-High":return o(M());case"Price: High-Low":return o(v());case"Rating: Low-High":return o(T());case"Rating: High-Low":return o(I());case"Name: A-Z":return o(B());case"Name: Z-A":return o(P());default:console.log("default")}};return e.jsx(i,{children:e.jsxs(J,{children:[e.jsx(ee,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],as:d,rightIcon:e.jsx(Y,{}),children:"Sort By"}),e.jsxs(oe,{children:[e.jsx(a,{onClick:r,children:"Price: Low-High"}),e.jsx(a,{onClick:r,children:"Price: High-Low"}),e.jsx(a,{onClick:r,children:"Rating: Low-High"}),e.jsx(a,{onClick:r,children:"Rating: High-Low"}),e.jsx(a,{onClick:r,children:"Name: A-Z"}),e.jsx(a,{onClick:r,children:"Name: Z-A"})]})]})})},C=({children:o})=>e.jsx(x,{fontSize:["12px","12px","13px","16px","17px"],color:"gray",children:o}),le=({children:o})=>e.jsx(e.Fragment,{children:e.jsx(x,{fontSize:["15px","20px","17px","20px","20px"],fontWeight:600,my:"6px",children:o})}),ae=({title:o,description:t,color:r,rating:s,price:n,size:p,gender:c,img:g,onClick:j})=>e.jsx(e.Fragment,{children:e.jsxs(u,{onClick:j,flexDirection:"column",cursor:"pointer",mb:"10px",children:[e.jsx(i,{overflow:"hidden",children:e.jsx(te,{className:"imgAnimation",src:g[0]})}),e.jsxs(i,{children:[e.jsxs(u,{justifyItems:"center",mt:"10px",children:[e.jsx(x,{fontSize:["13px","15px","17px","17px","18px"],fontWeight:600,children:L(o)}),e.jsx(m,{}),e.jsx(i,{fontSize:["13px","15px","17px","17px","18px"],mr:"3px",mt:"4px",children:e.jsx(q,{})}),e.jsx(x,{fontSize:["13px","15px","17px","17px","18px"],children:s})]}),e.jsx(C,{children:L(t,20)}),e.jsx(C,{children:p.join(", ")}),e.jsxs(C,{children:[c,", ",r," Colour"]}),e.jsxs(le,{children:["₹",W(n),".00"]})]})]})});function We(){const{colorMode:o}=R(),[t,r]=w.useState(!0),{products:s,loading:n,error:p}=N(l=>l.product),c=z(),g=k(),j=D(),f=G(),A=()=>{r(!t),c(O()),S(g,"Filter Reset Successfully","success")},F=l=>{j(`/description/${l.id}`)};return w.useEffect(()=>{c(E())},[]),e.jsxs(e.Fragment,{children:[e.jsxs(u,{direction:["column","column","row","row","row"],h:["100px","100px","60px","60px","60px"],position:"sticky",top:"0px",bg:o==="light"?"white":"#1a202c",zIndex:1,children:[e.jsx(y,{textAlign:"start",children:e.jsxs(x,{w:"100%",ml:["20px","20px","30px","40px","50px"],fontSize:["20px","25px"],fontWeight:500,children:[f.pathname==="sale"?"On Sale Products":f.pathname==="newin"?"New Products":f.pathname==="goingout"?"Going Out Products":"Total Products"," ","[",s.length,"]"]})}),e.jsx(m,{}),e.jsx(y,{children:e.jsxs(u,{gap:["4px"],w:"100%",my:["10px","10px","0px","0px","0px"],px:["8px","8px","20px","20px","20px"],children:[e.jsx(d,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],onClick:()=>{r(!t)},rightIcon:e.jsx(ie,{enableBackground:"false",color:"white"}),children:t?"Hide Filter":"Show Filter"}),e.jsx(m,{}),e.jsx(d,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],onClick:A,children:"Reset Filter"}),e.jsx(m,{}),e.jsx(ce,{})]})})]}),e.jsxs(b,{gap:["20px","20px","2%","2%","2%"],templateColumns:["100%","100%",t?"32% 66%":"100%",t?"28% 70%":"100%",t?"20% 78%":"100%"],justifyContent:"center",children:[t&&e.jsx(i,{minH:["120px","120px","600px","600px","600px"],maxH:["900px","600px"],position:["none","none","sticky","sticky","sticky"],top:["0px","70px"],overflowY:"scroll",className:"scroll",zIndex:0,mt:["10px","10px","20px","20px","20px"],children:e.jsx(ne,{})}),e.jsx(i,{minH:"400px",children:n?e.jsx(re,{}):p?e.jsx(se,{}):e.jsx(b,{gap:[2,4],p:["10px","10px","20px","20px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"],children:s==null?void 0:s.map((l,H)=>w.createElement(ae,{...l,key:H,onClick:()=>{F(l)}}))})})]})]})}export{We as default};