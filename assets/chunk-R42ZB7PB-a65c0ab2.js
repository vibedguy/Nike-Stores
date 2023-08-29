import{l as y,m as k,o as w,p as $,v as T,j as u,q as R,d as s,w as c}from"./index-9cebc41f.js";import{m as g}from"./index-b6d2f641.js";var[E,M]=y({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[D,O]=y({strict:!1,name:"FormControlContext"});function A(m){const{id:r,isRequired:i,isInvalid:t,isDisabled:l,isReadOnly:n,...d}=m,f=s.useId(),a=r||`field-${f}`,x=`${a}-label`,F=`${a}-feedback`,C=`${a}-helptext`,[H,v]=s.useState(!1),[S,b]=s.useState(!1),[h,P]=s.useState(!1),I=s.useCallback((e={},o=null)=>({id:C,...e,ref:g(o,p=>{p&&b(!0)})}),[C]),_=s.useCallback((e={},o=null)=>({...e,ref:o,"data-focus":c(h),"data-disabled":c(l),"data-invalid":c(t),"data-readonly":c(n),id:e.id!==void 0?e.id:x,htmlFor:e.htmlFor!==void 0?e.htmlFor:a}),[a,l,h,t,n,x]),j=s.useCallback((e={},o=null)=>({id:F,...e,ref:g(o,p=>{p&&v(!0)}),"aria-live":"polite"}),[F]),N=s.useCallback((e={},o=null)=>({...e,...d,ref:o,role:"group"}),[d]),q=s.useCallback((e={},o=null)=>({...e,ref:o,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!i,isInvalid:!!t,isReadOnly:!!n,isDisabled:!!l,isFocused:!!h,onFocus:()=>P(!0),onBlur:()=>P(!1),hasFeedbackText:H,setHasFeedbackText:v,hasHelpText:S,setHasHelpText:b,id:a,labelId:x,feedbackId:F,helpTextId:C,htmlProps:d,getHelpTextProps:I,getErrorMessageProps:j,getRootProps:N,getLabelProps:_,getRequiredIndicatorProps:q}}var B=k(function(r,i){const t=w("Form",r),l=$(r),{getRootProps:n,htmlProps:d,...f}=A(l),a=T("chakra-form-control",r.className);return u.jsx(D,{value:f,children:u.jsx(E,{value:t,children:u.jsx(R.div,{...n({},i),className:a,__css:t.container})})})});B.displayName="FormControl";var L=k(function(r,i){const t=O(),l=M(),n=T("chakra-form__helper-text",r.className);return u.jsx(R.div,{...t==null?void 0:t.getHelpTextProps(r,i),__css:l.helperText,className:n})});L.displayName="FormHelperText";export{B as F,M as a,O as u};