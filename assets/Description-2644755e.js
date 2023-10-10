import{h as n,o as Pe,p as ne,q as Fe,t as Me,j as e,v as De,w as Ie,x as ze,y as g,z as S,C as U,E as he,d as v,I as ae,M as ge,G as me,H as fe,J as je,K as be,L as ve,N as Be,B as $,O as Le,P as Ae,Q as Ee,R as A,F as W,S as _,T as P,U as Ge,V as ie,W as He,c as le,a as qe,b as Oe,u as Ve,k as de,s as R,n as We,D as ce,X as Ne,Y as V,Z as ue,f as Te,e as Ke}from"./index-096997c2.js";import{G as Q}from"./chunk-JARCRF6W-ac1550a0.js";import{M as we,a as ye,B as Ue,S as $e}from"./chunk-3RSXBRAN-03d74e7e.js";import{t as _e}from"./index-8d968404.js";import{L as Qe}from"./Loading-7774a9e4.js";import{E as Je}from"./Error-a9583280.js";import{A as Xe}from"./chunk-V7PAE35Z-af2cbbf0.js";import{M as Ye}from"./index.esm-71f67250.js";import{I as Ze}from"./chunk-6QYXN73V-254ba17c.js";import{F as pe}from"./chunk-7COXQURZ-29979a1d.js";import{T as es}from"./chunk-4IH3O7BJ-9ad55375.js";import"./chunk-5MKCW436-5184dcf3.js";function ss(o){return o&&ne(o)&&ne(o.target)}function Ce(o={}){const{onChange:t,value:i,defaultValue:s,name:c,isDisabled:l,isFocusable:h,isNative:w,...F}=o,[j,y]=n.useState(s||""),b=typeof i<"u",m=b?i:j,C=n.useRef(null),p=n.useCallback(()=>{const r=C.current;if(!r)return;let u="input:not(:disabled):checked";const k=r.querySelector(u);if(k){k.focus();return}u="input:not(:disabled)";const f=r.querySelector(u);f==null||f.focus()},[]),x=`radio-${n.useId()}`,E=c||x,z=n.useCallback(r=>{const u=ss(r)?r.target.value:r;b||y(u),t==null||t(String(u))},[t,b]),H=n.useCallback((r={},u=null)=>({...r,ref:Pe(u,C),role:"radiogroup"}),[]),D=n.useCallback((r={},u=null)=>({...r,ref:u,name:E,[w?"checked":"isChecked"]:m!=null?r.value===m:void 0,onChange(f){z(f)},"data-radiogroup":!0}),[w,E,z,m]);return{getRootProps:H,getRadioProps:D,name:E,ref:C,focus:p,setValue:y,value:m,onChange:z,isDisabled:l,isFocusable:h,htmlProps:F}}var[os,ts]=Fe({name:"RadioGroupContext",strict:!1}),rs=Me((o,t)=>{const{colorScheme:i,size:s,variant:c,children:l,className:h,isDisabled:w,isFocusable:F,...j}=o,{value:y,onChange:b,getRootProps:m,name:C,htmlProps:p}=Ce(j),M=n.useMemo(()=>({name:C,size:s,onChange:b,colorScheme:i,value:y,variant:c,isDisabled:w,isFocusable:F}),[C,s,b,i,y,c,w,F]);return e.jsx(os,{value:M,children:e.jsx(De.div,{...m(p,t),className:Ie("chakra-radio-group",h),children:l})})});rs.displayName="RadioGroup";var ns={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function as(o={}){const{defaultChecked:t,isChecked:i,isFocusable:s,isDisabled:c,isReadOnly:l,isRequired:h,onChange:w,isInvalid:F,name:j,value:y,id:b,"data-radiogroup":m,"aria-describedby":C,...p}=o,M=`radio-${n.useId()}`,x=ze(),z=!!ts()||!!m;let D=!!x&&!z?x.id:M;D=b??D;const r=c??(x==null?void 0:x.isDisabled),u=l??(x==null?void 0:x.isReadOnly),k=h??(x==null?void 0:x.isRequired),f=F??(x==null?void 0:x.isInvalid),[q,O]=n.useState(!1),[d,I]=n.useState(!1),[N,X]=n.useState(!1),[T,G]=n.useState(!1),[ke,Se]=n.useState(!!t),K=typeof i<"u",B=K?i:ke;n.useEffect(()=>_e(O),[]);const Y=n.useCallback(a=>{if(u||r){a.preventDefault();return}K||Se(a.target.checked),w==null||w(a)},[K,r,u,w]),Z=n.useCallback(a=>{a.key===" "&&G(!0)},[G]),ee=n.useCallback(a=>{a.key===" "&&G(!1)},[G]),se=n.useCallback((a={},L=null)=>({...a,ref:L,"data-active":g(T),"data-hover":g(N),"data-disabled":g(r),"data-invalid":g(f),"data-checked":g(B),"data-focus":g(d),"data-focus-visible":g(d&&q),"data-readonly":g(u),"aria-hidden":!0,onMouseDown:S(a.onMouseDown,()=>G(!0)),onMouseUp:S(a.onMouseUp,()=>G(!1)),onMouseEnter:S(a.onMouseEnter,()=>X(!0)),onMouseLeave:S(a.onMouseLeave,()=>X(!1))}),[T,N,r,f,B,d,u,q]),{onFocus:oe,onBlur:te}=x??{},Re=n.useCallback((a={},L=null)=>{const re=r&&!s;return{...a,id:D,ref:L,type:"radio",name:j,value:y,onChange:S(a.onChange,Y),onBlur:S(te,a.onBlur,()=>I(!1)),onFocus:S(oe,a.onFocus,()=>I(!0)),onKeyDown:S(a.onKeyDown,Z),onKeyUp:S(a.onKeyUp,ee),checked:B,disabled:re,readOnly:u,required:k,"aria-invalid":U(f),"aria-disabled":U(re),"aria-required":U(k),"data-readonly":g(u),"aria-describedby":C,style:ns}},[r,s,D,j,y,Y,te,oe,Z,ee,B,u,k,f,C]);return{state:{isInvalid:f,isFocused:d,isChecked:B,isActive:T,isHovered:N,isDisabled:r,isReadOnly:u,isRequired:k},getCheckboxProps:se,getRadioProps:se,getInputProps:Re,getLabelProps:(a={},L=null)=>({...a,ref:L,onMouseDown:S(a.onMouseDown,is),"data-disabled":g(r),"data-checked":g(B),"data-invalid":g(f)}),getRootProps:(a,L=null)=>({...a,ref:L,"data-disabled":g(r),"data-checked":g(B),"data-invalid":g(f)}),htmlProps:p}}function is(o){o.preventDefault(),o.stopPropagation()}const ls=({img:o})=>{const{isOpen:t,onOpen:i,onClose:s}=he();return e.jsxs(e.Fragment,{children:[e.jsx(Q,{templateColumns:"repeat(2, 1fr)",maxH:"xxl",gap:"10px",children:o==null?void 0:o.map((c,l)=>e.jsx(v,{children:e.jsx(ae,{src:c,onClick:i,cursor:"pointer"})},l))}),e.jsxs(ge,{isOpen:t,onClose:s,size:"full",children:[e.jsx(me,{}),e.jsxs(we,{children:[e.jsx(fe,{}),e.jsx(je,{}),e.jsx(be,{children:e.jsx(Q,{templateColumns:["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"],gap:"15px",children:o==null?void 0:o.map((c,l)=>e.jsx(ae,{w:"100%",src:c},l))})}),e.jsx(ye,{})]})]})]})},ds=o=>{const{getInputProps:t,getCheckboxProps:i}=as(o),s=t(),c=i(),{colorMode:l}=Be();return e.jsxs(v,{as:"label",children:[e.jsx("input",{...s}),e.jsx(v,{onClick:o.onClick,...c,cursor:"pointer",borderWidth:"1px",borderRadius:"md",boxShadow:"md",_checked:{border:`2px solid ${l==="light"?"black":"white"}`},px:5,py:3,children:o.children})]})},cs=({size:o,setMySize:t})=>{const{getRootProps:i,getRadioProps:s}=Ce({name:"SelectSize"}),c=i();return e.jsx(ve,{...c,children:o==null?void 0:o.map(l=>{const h=s({value:l});return e.jsx(ds,{onClick:()=>{t(l)},...h,children:l},l)})})},xe=({click:o,name:t,bgColor:i,color:s,hoverBg:c,hoverBorder:l,borderColor:h})=>e.jsx(e.Fragment,{children:e.jsx($,{onClick:o,h:"62px",bg:i,color:s,border:`1px solid ${h}`,borderRadius:"50px",w:"100%",fontSize:"17px",my:"10px",_hover:{bg:c,borderColor:l},children:t})});function J({rating:o,numReviews:t}){return e.jsxs(v,{display:"flex",alignItems:"center",children:[Array(5).fill("").map((i,s)=>{const c=t;return c-s>=1?e.jsx(Le,{style:{marginLeft:"1"},color:s<t/10?"teal.500":"gray.300"},s):c-s===.5?e.jsx(Ae,{style:{marginLeft:"1"}},s):e.jsx(Ee,{style:{marginLeft:"1"}},s)}),e.jsxs(v,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[t," review",t>1&&"s"]})]})}function us(o){const{name:t,reviewdescription:i,numReviews:s,...c}=o,l=A("secondaryGray.900","white"),h=A("white","navy.700");return e.jsx(v,{background:h,p:"14px",w:"full",children:e.jsxs(W,{align:"flex-start",direction:"row",children:[e.jsx(Xe,{h:"60px",w:"60px",borderRadius:"8px",me:"20px"}),e.jsxs(W,{align:"flex-start",direction:"column",gap:3,w:"full",children:[e.jsxs(_,{w:"full",direction:"column",gap:0,children:[e.jsx(v,{mt:{base:"10px",md:"0"},children:e.jsx(P,{color:l,fontWeight:"500",fontSize:"md",mb:"4px",children:t})}),e.jsx(J,{numReviews:s})]}),e.jsx(v,{borderWidth:"1px",rounded:"lg",shadow:"lg",p:"2",pt:"2",w:"full",maxW:"sm",ml:"-10px",maxH:"150px",children:e.jsx(P,{color:l,fontWeight:"500",fontSize:"md",children:Ge(i)})})]})]})})}function ps({data:o}){var i;const t=A("white","gray.800");return A("gray.800","white"),e.jsx(W,{w:"full",alignItems:"center",justifyContent:"center",children:e.jsx(v,{bg:t,w:"full",borderWidth:"1px",rounded:"lg",shadow:"lg",p:"6",children:e.jsx(W,{direction:"column",justifyContent:"space-between",alignContent:"center",maxH:"360px",overflow:"auto",sx:{"&::-webkit-scrollbar":{display:"none"}},children:(i=o==null?void 0:o.ratings)==null?void 0:i.map(s=>e.jsx(us,{name:"Venketesh Rushi",reviewdescription:s.reviewdes,numReviews:s.rating},s.reviewdes))})})})}function Fs(){ie("(min-width: 995px)");const[o]=ie("(min-width: 1025px)"),[t,i]=n.useState(!1),[s,c]=n.useState({}),[l,h]=n.useState(!1),[w,F]=n.useState(!1);let[j,y]=n.useState({rating:5,reviewdes:""});const b=He(),m=le(d=>d.auth.token),C=le(d=>d.auth.user),p=qe(),M=Oe(),x=Ve();n.useEffect(()=>{O()},[b]);const E=A("14px 17px 40px 4px rgba(112, 144, 176, 0.18)","14px 17px 40px 4px rgba(112, 144, 176, 0.06)"),z=A("gray.800","white"),{isOpen:H,onOpen:D,onClose:r}=he();let u=d=>{y({...j,[d.target.name]:d.target.value})},k=async()=>{if(m.length>0){if(j.reviewdes===""){R(p,"Please add description.","error");return}try{let d=await de.post("/product/addreview",{id:+b.id,rating:j.rating,reviewdes:j.reviewdes,userid:C.id});y({rating:5,reviewdes:""}),r(),R(p,"Review added successfuly.","success"),O()}catch(d){console.log(d)}}else R(p,"Please Login First","error")};const f=d=>{if(t===!1)R(p,"Please select a Size","error");else if(m.length>0){let I=["add",{...d,size:t,quantity:1},m,p];x(Te(I)),M("/cart")}else R(p,"Please Login First","error")},q=async()=>{if(!m)R(p,"Please login first","error"),M("/login");else try{let I=await x(Ke([s,m,p])).unwrap();R(p,I.message?I.message:"Item added to the favourites","success")}catch(d){d.response.data.message==="Already present in the Favourite"?R(p,d.response.data.message,"info"):R(p,"Something went wrong!","error")}},O=async()=>{h(!0);try{let d=await de.get(`/product/getsingleproduct/${b.id}`),I=await d.data;c(d.data),h(!1)}catch{F(!0),R(p,"Product Not Found","error"),M(-1,{replace:!0})}};return l?e.jsx(Qe,{}):w?e.jsx(Je,{}):e.jsxs(Q,{p:"10px",gap:["40px","40px","4%","4%","4%"],templateColumns:["100%","100%","55% 41%","62% 34%","62% 34%"],w:["100%","100%","100%","100%","90%"],m:["40px auto 100px","40px auto 100px","40px auto 60px","40px auto 60px","40px auto 60px"],children:[e.jsx(ls,{img:s==null?void 0:s.img}),e.jsxs(v,{px:["20px","40px"],children:[e.jsx(P,{fontSize:"29px",children:s==null?void 0:s.title}),e.jsx(P,{children:s==null?void 0:s.description}),e.jsxs(P,{fontSize:"22px",mt:"20px",children:["₹ ",We(+(s==null?void 0:s.price))]}),e.jsx(P,{color:"gray",children:"incl. of taxes and duties"}),e.jsx(P,{fontSize:"18px",mt:"30px",mb:"10px",children:"Select Size"}),e.jsx(v,{mb:"30px",children:e.jsx(cs,{size:s==null?void 0:s.size,setMySize:i})}),e.jsx(xe,{click:()=>f(s),name:"Add to Bag",bgColor:"black",color:"white",hoverBg:"#1e1e1e",borderColor:"transparent"}),e.jsx(xe,{click:q,name:"Favourite",bgColor:"white",color:"black",hoverBorder:"black",borderColor:"#cecdce"}),e.jsx(ce,{my:"30px"}),e.jsx(P,{fontSize:"18px",mb:"10px",textDecoration:"underline",children:"Product Deatils"}),e.jsxs(Ne,{fontSize:"18px",children:[e.jsxs(V,{children:["Gender: ",s==null?void 0:s.gender]}),e.jsxs(V,{children:["Category: ",s==null?void 0:s.category]}),e.jsxs(V,{children:["Colour: ",s==null?void 0:s.color]}),e.jsx(V,{children:e.jsxs(ve,{direction:["column","row"],spacing:"5px",children:[e.jsx(P,{children:"Rating:"}),Object.keys(s).length>0?e.jsx(J,{numReviews:s.ratings.length}):e.jsx(J,{numReviews:0})]})})]}),o&&e.jsxs(e.Fragment,{children:[e.jsx(ce,{my:"18px"}),e.jsxs(v,{display:"flex",alignItems:"baseline",justifyContent:"space-between",mb:[5,5,5,3,3],children:[e.jsx(Ue,{rounded:"full",px:"2",fontSize:"0.8em",color:"#303030",children:e.jsx(P,{fontSize:"16px",color:z,children:"Customer Reviews"})}),e.jsx(Ze,{icon:e.jsx(Ye,{}),variant:"outline",onClick:D}),e.jsxs(ge,{isOpen:H,onClose:r,isCentered:!0,children:[e.jsx(me,{}),e.jsxs(we,{children:[e.jsx(fe,{children:"Add Review"}),e.jsx(je,{}),e.jsx(be,{children:e.jsx(v,{rounded:"lg",bg:A("white","gray.700"),p:8,shadow:E,children:e.jsxs(_,{spacing:4,children:[e.jsxs(ue,{id:"ratingnum",children:[e.jsxs(pe,{children:["Please share your thoughts about this ",s.title," ","Product. How would you rate your experience using it?"]}),e.jsxs($e,{name:"ratingnum",value:j.rating,onChange:u,placeholder:"Select option",children:[e.jsx("option",{defaultValue:!0,value:5,children:"5"}),e.jsx("option",{value:4,children:"4"}),e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:1,children:"1"})]})]}),e.jsxs(ue,{id:"reviewdes",children:[e.jsx(pe,{children:"Feel free to share your thoughts about this product right here. How has your experience been so far?"}),e.jsx(es,{maxLength:"100",value:j.reviewdes,onChange:u,placeholder:"Enter your review description here...",size:"sm",name:"reviewdes"})]}),e.jsx(_,{spacing:10})]})})}),e.jsxs(ye,{children:[e.jsx($,{color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},pt:5,pb:5,mr:3,textAlign:"center",onClick:k,children:"ADD"}),e.jsx($,{colorScheme:"blue",mr:3,onClick:r,children:"Close"})]})]})]})]}),e.jsx(ps,{data:s})]})]})]})}export{Fs as default};
