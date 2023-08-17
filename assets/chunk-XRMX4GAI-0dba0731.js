import{a3 as M,a4 as $,r as i,a5 as w,k as g,f as H,l as A,o as E,a as q,j as C,c as O,K as h,Y as T,i as P}from"./index-e1e442e7.js";import{a as I}from"./chunk-ZHMYA64R-7ceb03c9.js";function W(t){const{theme:s}=M(),a=$();return i.useMemo(()=>w(s.direction,{...a,...t}),[t,s.direction,a])}var[K,L]=g({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[Y,_]=g({strict:!1,name:"FormControlContext"});function z(t){const{id:s,isRequired:a,isInvalid:l,isDisabled:e,isReadOnly:r,...u}=t,m=i.useId(),n=s||`field-${m}`,v=`${n}-label`,f=`${n}-feedback`,F=`${n}-helptext`,[y,b]=i.useState(!1),[p,x]=i.useState(!1),[c,k]=i.useState(!1),S=i.useCallback((o={},d=null)=>({id:F,...o,ref:I(d,R=>{R&&x(!0)})}),[F]),j=i.useCallback((o={},d=null)=>({...o,ref:d,"data-focus":h(c),"data-disabled":h(e),"data-invalid":h(l),"data-readonly":h(r),id:o.id!==void 0?o.id:v,htmlFor:o.htmlFor!==void 0?o.htmlFor:n}),[n,e,c,l,r,v]),D=i.useCallback((o={},d=null)=>({id:f,...o,ref:I(d,R=>{R&&b(!0)}),"aria-live":"polite"}),[f]),N=i.useCallback((o={},d=null)=>({...o,...u,ref:d,role:"group"}),[u]),B=i.useCallback((o={},d=null)=>({...o,ref:d,role:"presentation","aria-hidden":!0,children:o.children||"*"}),[]);return{isRequired:!!a,isInvalid:!!l,isReadOnly:!!r,isDisabled:!!e,isFocused:!!c,onFocus:()=>k(!0),onBlur:()=>k(!1),hasFeedbackText:y,setHasFeedbackText:b,hasHelpText:p,setHasHelpText:x,id:n,labelId:v,feedbackId:f,helpTextId:F,htmlProps:u,getHelpTextProps:S,getErrorMessageProps:D,getRootProps:N,getLabelProps:j,getRequiredIndicatorProps:B}}var G=H(function(s,a){const l=A("Form",s),e=E(s),{getRootProps:r,htmlProps:u,...m}=z(e),n=q("chakra-form-control",s.className);return C.jsx(Y,{value:m,children:C.jsx(K,{value:l,children:C.jsx(O.div,{...r({},a),className:n,__css:l.container})})})});G.displayName="FormControl";var J=H(function(s,a){const l=_(),e=L(),r=q("chakra-form__helper-text",s.className);return C.jsx(O.div,{...l==null?void 0:l.getHelpTextProps(s,a),__css:e.helperText,className:r})});J.displayName="FormHelperText";function X(t){const{isDisabled:s,isInvalid:a,isReadOnly:l,isRequired:e,...r}=Q(t);return{...r,disabled:s,readOnly:l,required:e,"aria-invalid":T(a),"aria-required":T(e),"aria-readonly":T(l)}}function Q(t){var s,a,l;const e=_(),{id:r,disabled:u,readOnly:m,required:n,isRequired:v,isInvalid:f,isReadOnly:F,isDisabled:y,onFocus:b,onBlur:p,...x}=t,c=t["aria-describedby"]?[t["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&c.push(e.feedbackId),e!=null&&e.hasHelpText&&c.push(e.helpTextId),{...x,"aria-describedby":c.join(" ")||void 0,id:r??(e==null?void 0:e.id),isDisabled:(s=u??y)!=null?s:e==null?void 0:e.isDisabled,isReadOnly:(a=m??F)!=null?a:e==null?void 0:e.isReadOnly,isRequired:(l=n??v)!=null?l:e==null?void 0:e.isRequired,isInvalid:f??(e==null?void 0:e.isInvalid),onFocus:P(e==null?void 0:e.onFocus,b),onBlur:P(e==null?void 0:e.onBlur,p)}}export{G as F,Q as a,_ as b,L as c,X as d,W as u};