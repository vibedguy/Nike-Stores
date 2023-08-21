import{k as P,d as i,t as x,j as n,p,Y as w,l as A,E as G,o as M,v as j}from"./index-e87d006e.js";import{u as R}from"./index-0f0e6f7f.js";var[O,z]=P({strict:!1,name:"ButtonGroupContext"});function D(r){const[e,t]=i.useState(!r);return{ref:i.useCallback(a=>{a&&t(a.tagName==="BUTTON")},[]),type:e?"button":void 0}}function h(r){const{children:e,className:t,...s}=r,o=i.isValidElement(e)?i.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,a=x("chakra-button__icon",t);return n.jsx(p.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...s,className:a,children:o})}h.displayName="ButtonIcon";function g(r){const{label:e,placement:t,spacing:s="0.5rem",children:o=n.jsx(w,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:l,...d}=r,m=x("chakra-button__spinner",a),u=t==="start"?"marginEnd":"marginStart",c=i.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[u]:e?s:0,fontSize:"1em",lineHeight:"normal",...l}),[l,e,u,s]);return n.jsx(p.div,{className:m,...d,__css:c,children:o})}g.displayName="ButtonSpinner";var F=A((r,e)=>{const t=z(),s=G("Button",{...t,...r}),{isDisabled:o=t==null?void 0:t.isDisabled,isLoading:a,isActive:l,children:d,leftIcon:m,rightIcon:u,loadingText:c,iconSpacing:f="0.5rem",type:_,spinner:b,spinnerPlacement:y="start",className:v,as:B,...k}=M(r),I=i.useMemo(()=>{const T={...s==null?void 0:s._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...s,...!!t&&{_focus:T}}},[s,t]),{ref:C,type:E}=D(B),S={rightIcon:u,leftIcon:m,iconSpacing:f,children:d};return n.jsxs(p.button,{ref:R(e,C),as:B,type:_??E,"data-active":j(l),"data-loading":j(a),__css:I,className:x("chakra-button",v),...k,disabled:o||a,children:[a&&y==="start"&&n.jsx(g,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:f,children:b}),a?c||n.jsx(p.span,{opacity:0,children:n.jsx(N,{...S})}):n.jsx(N,{...S}),a&&y==="end"&&n.jsx(g,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:f,children:b})]})});F.displayName="Button";function N(r){const{leftIcon:e,rightIcon:t,children:s,iconSpacing:o}=r;return n.jsxs(n.Fragment,{children:[e&&n.jsx(h,{marginEnd:o,children:e}),s,t&&n.jsx(h,{marginStart:o,children:t})]})}export{F as B};
