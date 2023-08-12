import{J as E,K as z,r as c,M as J,e as H,f as x,q as S,o as g,a as h,j as v,c as y,l as R,u as K,N as P,p as T}from"./index-0f559b43.js";import{a as j}from"./chunk-ZHMYA64R-f98a747b.js";function le(o){const{theme:s}=E(),t=z();return c.useMemo(()=>J(s.direction,{...t,...o}),[o,s.direction,t])}var[G,O]=H({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[Q,_]=H({strict:!1,name:"FormControlContext"});function U(o){const{id:s,isRequired:t,isInvalid:l,isDisabled:e,isReadOnly:a,...i}=o,d=c.useId(),r=s||`field-${d}`,b=`${r}-label`,m=`${r}-feedback`,u=`${r}-helptext`,[p,I]=c.useState(!1),[q,C]=c.useState(!1),[F,N]=c.useState(!1),w=c.useCallback((n={},f=null)=>({id:u,...n,ref:j(f,k=>{k&&C(!0)})}),[u]),M=c.useCallback((n={},f=null)=>({...n,ref:f,"data-focus":R(F),"data-disabled":R(e),"data-invalid":R(l),"data-readonly":R(a),id:n.id!==void 0?n.id:b,htmlFor:n.htmlFor!==void 0?n.htmlFor:r}),[r,e,F,l,a,b]),A=c.useCallback((n={},f=null)=>({id:m,...n,ref:j(f,k=>{k&&I(!0)}),"aria-live":"polite"}),[m]),B=c.useCallback((n={},f=null)=>({...n,...i,ref:f,role:"group"}),[i]),$=c.useCallback((n={},f=null)=>({...n,ref:f,role:"presentation","aria-hidden":!0,children:n.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!a,isDisabled:!!e,isFocused:!!F,onFocus:()=>N(!0),onBlur:()=>N(!1),hasFeedbackText:p,setHasFeedbackText:I,hasHelpText:q,setHasHelpText:C,id:r,labelId:b,feedbackId:m,helpTextId:u,htmlProps:i,getHelpTextProps:w,getErrorMessageProps:A,getRootProps:B,getLabelProps:M,getRequiredIndicatorProps:$}}var V=x(function(s,t){const l=S("Form",s),e=g(s),{getRootProps:a,htmlProps:i,...d}=U(e),r=h("chakra-form-control",s.className);return v.jsx(Q,{value:d,children:v.jsx(G,{value:l,children:v.jsx(y.div,{...a({},t),className:r,__css:l.container})})})});V.displayName="FormControl";var W=x(function(s,t){const l=_(),e=O(),a=h("chakra-form__helper-text",s.className);return v.jsx(y.div,{...l==null?void 0:l.getHelpTextProps(s,t),__css:e.helperText,className:a})});W.displayName="FormHelperText";var X=x(function(s,t){var l;const e=K("FormLabel",s),a=g(s),{className:i,children:d,requiredIndicator:r=v.jsx(D,{}),optionalIndicator:b=null,...m}=a,u=_(),p=(l=u==null?void 0:u.getLabelProps(m,t))!=null?l:{ref:t,...m};return v.jsxs(y.label,{...p,className:h("chakra-form__label",a.className),__css:{display:"block",textAlign:"start",...e},children:[d,u!=null&&u.isRequired?r:b]})});X.displayName="FormLabel";var D=x(function(s,t){const l=_(),e=O();if(!(l!=null&&l.isRequired))return null;const a=h("chakra-form__required-indicator",s.className);return v.jsx(y.span,{...l==null?void 0:l.getRequiredIndicatorProps(s,t),__css:e.requiredIndicator,className:a})});D.displayName="RequiredIndicator";function Y(o){const{isDisabled:s,isInvalid:t,isReadOnly:l,isRequired:e,...a}=Z(o);return{...a,disabled:s,readOnly:l,required:e,"aria-invalid":P(t),"aria-required":P(e),"aria-readonly":P(l)}}function Z(o){var s,t,l;const e=_(),{id:a,disabled:i,readOnly:d,required:r,isRequired:b,isInvalid:m,isReadOnly:u,isDisabled:p,onFocus:I,onBlur:q,...C}=o,F=o["aria-describedby"]?[o["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&F.push(e.feedbackId),e!=null&&e.hasHelpText&&F.push(e.helpTextId),{...C,"aria-describedby":F.join(" ")||void 0,id:a??(e==null?void 0:e.id),isDisabled:(s=i??p)!=null?s:e==null?void 0:e.isDisabled,isReadOnly:(t=d??u)!=null?t:e==null?void 0:e.isReadOnly,isRequired:(l=r??b)!=null?l:e==null?void 0:e.isRequired,isInvalid:m??(e==null?void 0:e.isInvalid),onFocus:T(e==null?void 0:e.onFocus,I),onBlur:T(e==null?void 0:e.onBlur,q)}}var L=x(function(s,t){const{htmlSize:l,...e}=s,a=S("Input",e),i=g(e),d=Y(i),r=h("chakra-input",s.className);return v.jsx(y.input,{size:l,...d,__css:a.field,ref:t,className:r})});L.displayName="Input";L.id="Input";export{V as F,L as I,X as a,Z as b,le as u};