import{e as Le,r as i,j as t,c as E,h as J,z as Q,n as Ie,l as a,p as h,D as ne,f as Pe,q as De,o as Fe,v as Be,a as Me,b as Re,y as de,L as ue,E as _e}from"./index-0f559b43.js";import{b as Ae,u as Ke,F as fe,a as he,I as me}from"./chunk-6CVSDS6C-ab7637a4.js";import{a as pe,S as j,B as Te}from"./chunk-ZHMYA64R-f98a747b.js";import{u as Ue}from"./useDispatch-7a871106.js";import{B as Y,T as Z}from"./chunk-PULVB27S-6985aa6b.js";import{F as He}from"./chunk-KRPLQIP4-228f06ec.js";import{H as Ne}from"./chunk-7OLJDQMT-59dd1f5a.js";var[xt,qe]=Le({name:"CheckboxGroupContext",strict:!1});function Ve(e){const[r,n]=i.useState(e),[s,u]=i.useState(!1);return e!==r&&(u(!0),n(e)),s}function ze(e){return t.jsx(E.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:t.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function We(e){return t.jsx(E.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:t.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Oe(e){const{isIndeterminate:r,isChecked:n,...s}=e,u=r?We:ze;return n||r?t.jsx(E.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:t.jsx(u,{...s})}):null}var Ge={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};const $e=()=>typeof document<"u";let be=!1,T=null,k=!1,ee=!1;const te=new Set;function oe(e,r){te.forEach(n=>n(e,r))}const Xe=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function Je(e){return!(e.metaKey||!Xe&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function ye(e){k=!0,Je(e)&&(T="keyboard",oe("keyboard",e))}function S(e){if(T="pointer",e.type==="mousedown"||e.type==="pointerdown"){k=!0;const r=e.composedPath?e.composedPath()[0]:e.target;let n=!1;try{n=r.matches(":focus-visible")}catch{}if(n)return;oe("pointer",e)}}function Qe(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}function Ye(e){Qe(e)&&(k=!0,T="virtual")}function Ze(e){e.target===window||e.target===document||(!k&&!ee&&(T="virtual",oe("virtual",e)),k=!1,ee=!1)}function et(){k=!1,ee=!0}function ge(){return T!=="pointer"}function tt(){if(!$e()||be)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){k=!0,e.apply(this,n)},document.addEventListener("keydown",ye,!0),document.addEventListener("keyup",ye,!0),document.addEventListener("click",Ye,!0),window.addEventListener("focus",Ze,!0),window.addEventListener("blur",et,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",S,!0),document.addEventListener("pointermove",S,!0),document.addEventListener("pointerup",S,!0)):(document.addEventListener("mousedown",S,!0),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",S,!0)),be=!0}function nt(e){tt(),e(ge());const r=()=>e(ge());return te.add(r),()=>{te.delete(r)}}function ot(e,r=[]){const n=Object.assign({},e);for(const s of r)s in n&&delete n[s];return n}function st(e={}){const r=Ae(e),{isDisabled:n,isReadOnly:s,isRequired:u,isInvalid:c,id:b,onBlur:L,onFocus:I,"aria-describedby":x}=r,{defaultChecked:v,isChecked:P,isFocusable:W,onChange:O,isIndeterminate:f,name:D,value:U,tabIndex:H=void 0,"aria-label":F,"aria-labelledby":B,"aria-invalid":y,...G}=e,M=ot(G,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),R=J(O),N=J(L),_=J(I),[C,$]=i.useState(!1),[g,q]=i.useState(!1),[A,se]=i.useState(!1),[K,w]=i.useState(!1);i.useEffect(()=>nt($),[]);const m=i.useRef(null),[ae,ve]=i.useState(!0),[ke,V]=i.useState(!!v),X=P!==void 0,l=X?P:ke,re=i.useCallback(o=>{if(s||n){o.preventDefault();return}X||V(l?o.target.checked:f?!0:o.target.checked),R==null||R(o)},[s,n,l,X,f,R]);Q(()=>{m.current&&(m.current.indeterminate=!!f)},[f]),Ie(()=>{n&&q(!1)},[n,q]),Q(()=>{const o=m.current;if(!(o!=null&&o.form))return;const d=()=>{V(!!v)};return o.form.addEventListener("reset",d),()=>{var p;return(p=o.form)==null?void 0:p.removeEventListener("reset",d)}},[]);const ie=n&&!W,ce=i.useCallback(o=>{o.key===" "&&w(!0)},[w]),le=i.useCallback(o=>{o.key===" "&&w(!1)},[w]);Q(()=>{if(!m.current)return;m.current.checked!==l&&V(m.current.checked)},[m.current]);const Ce=i.useCallback((o={},d=null)=>{const p=z=>{g&&z.preventDefault(),w(!0)};return{...o,ref:d,"data-active":a(K),"data-hover":a(A),"data-checked":a(l),"data-focus":a(g),"data-focus-visible":a(g&&C),"data-indeterminate":a(f),"data-disabled":a(n),"data-invalid":a(c),"data-readonly":a(s),"aria-hidden":!0,onMouseDown:h(o.onMouseDown,p),onMouseUp:h(o.onMouseUp,()=>w(!1)),onMouseEnter:h(o.onMouseEnter,()=>se(!0)),onMouseLeave:h(o.onMouseLeave,()=>se(!1))}},[K,l,n,g,C,A,f,c,s]),we=i.useCallback((o={},d=null)=>({...o,ref:d,"data-active":a(K),"data-hover":a(A),"data-checked":a(l),"data-focus":a(g),"data-focus-visible":a(g&&C),"data-indeterminate":a(f),"data-disabled":a(n),"data-invalid":a(c),"data-readonly":a(s)}),[K,l,n,g,C,A,f,c,s]),je=i.useCallback((o={},d=null)=>({...M,...o,ref:pe(d,p=>{p&&ve(p.tagName==="LABEL")}),onClick:h(o.onClick,()=>{var p;ae||((p=m.current)==null||p.click(),requestAnimationFrame(()=>{var z;(z=m.current)==null||z.focus({preventScroll:!0})}))}),"data-disabled":a(n),"data-checked":a(l),"data-invalid":a(c)}),[M,n,l,c,ae]),Se=i.useCallback((o={},d=null)=>({...o,ref:pe(m,d),type:"checkbox",name:D,value:U,id:b,tabIndex:H,onChange:h(o.onChange,re),onBlur:h(o.onBlur,N,()=>q(!1)),onFocus:h(o.onFocus,_,()=>q(!0)),onKeyDown:h(o.onKeyDown,ce),onKeyUp:h(o.onKeyUp,le),required:u,checked:l,disabled:ie,readOnly:s,"aria-label":F,"aria-labelledby":B,"aria-invalid":y?!!y:c,"aria-describedby":x,"aria-disabled":n,style:Ge}),[D,U,b,re,N,_,ce,le,u,l,ie,s,F,B,y,c,x,n,H]),Ee=i.useCallback((o={},d=null)=>({...o,ref:d,onMouseDown:h(o.onMouseDown,at),"data-disabled":a(n),"data-checked":a(l),"data-invalid":a(c)}),[l,n,c]);return{state:{isInvalid:c,isFocused:g,isChecked:l,isActive:K,isHovered:A,isIndeterminate:f,isDisabled:n,isReadOnly:s,isRequired:u},getRootProps:je,getCheckboxProps:Ce,getIndicatorProps:we,getInputProps:Se,getLabelProps:Ee,htmlProps:M}}function at(e){e.preventDefault(),e.stopPropagation()}var rt={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},it={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},ct=ne({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),lt=ne({from:{opacity:0},to:{opacity:1}}),dt=ne({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),xe=Pe(function(r,n){const s=qe(),u={...s,...r},c=De("Checkbox",u),b=Fe(r),{spacing:L="0.5rem",className:I,children:x,iconColor:v,iconSize:P,icon:W=t.jsx(Oe,{}),isChecked:O,isDisabled:f=s==null?void 0:s.isDisabled,onChange:D,inputProps:U,...H}=b;let F=O;s!=null&&s.value&&b.value&&(F=s.value.includes(b.value));let B=D;s!=null&&s.onChange&&b.value&&(B=Be(s.onChange,D));const{state:y,getInputProps:G,getCheckboxProps:M,getLabelProps:R,getRootProps:N}=st({...H,isDisabled:f,isChecked:F,onChange:B}),_=Ve(y.isChecked),C=i.useMemo(()=>({animation:_?y.isIndeterminate?`${lt} 20ms linear, ${dt} 200ms linear`:`${ct} 200ms linear`:void 0,fontSize:P,color:v,...c.icon}),[v,P,_,y.isIndeterminate,c.icon]),$=i.cloneElement(W,{__css:C,isIndeterminate:y.isIndeterminate,isChecked:y.isChecked});return t.jsxs(E.label,{__css:{...it,...c.container},className:Me("chakra-checkbox",I),...N(),children:[t.jsx("input",{className:"chakra-checkbox__input",...G(U,n)}),t.jsx(E.span,{__css:{...rt,...c.control},className:"chakra-checkbox__control",...M(),children:$}),x&&t.jsx(E.span,{className:"chakra-checkbox__label",...R(),__css:{marginStart:L,...c.label},children:x})]})});xe.displayName="Checkbox";function vt(){const[e,r]=i.useState({}),n=Re(),s=Ue(),u=Ke(),c=I=>{const{name:x,value:v}=I.target;r({...e,[x]:v})},b=async()=>{s(_e(e,u,n))};let L=de("white","gray.700");return t.jsxs(t.Fragment,{children:[t.jsx(Y,{marginTop:["-10px","-20px","-30px","-40px","-40px"]}),t.jsx(He,{align:"center",justify:"center",bg:de("gray.50","gray.800"),width:"100%",children:t.jsxs(j,{spacing:8,mx:"auto",maxW:"lg",py:12,px:6,children:[t.jsxs(j,{align:"center",children:[t.jsx(Ne,{fontSize:"4xl",children:"Login to your account"}),t.jsxs(Z,{fontSize:"lg",color:"gray.600",children:["to buy all of our cool ",t.jsx(ue,{color:"blue.400",children:"Products"})," ","✌️"]})]}),t.jsx(Y,{rounded:"lg",bg:L,boxShadow:"lg",p:8,children:t.jsxs(j,{spacing:4,children:[t.jsxs(fe,{id:"email",isRequired:!0,children:[t.jsx(he,{children:"Email address"}),t.jsx(me,{name:"email",type:"email",onChange:c})]}),t.jsxs(fe,{id:"password",isRequired:!0,children:[t.jsx(he,{children:"Password"}),t.jsx(me,{name:"password",onChange:c,type:"password"})]}),t.jsxs(j,{spacing:10,children:[t.jsxs(j,{direction:{base:"column",sm:"row"},align:"start",justify:"space-between",children:[t.jsx(xe,{children:"Remember me"}),t.jsx(Z,{cursor:"pointer",color:"blue.400",children:"Forgot password?"})]}),t.jsx(Te,{bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:b,children:"Login"})]}),t.jsx(j,{children:t.jsxs(Y,{justifyContent:"center",alignItems:"center",display:"flex",children:["Don't have a account?",t.jsx(ue,{to:"/signup",children:t.jsx(Z,{ml:1,textDecorationLine:"underline",color:"blue.400",children:"Sign Up"})})]})})]})})]})})]})}export{vt as default};