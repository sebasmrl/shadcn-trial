(()=>{var e={};e.id=74,e.ids=[74],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},52451:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>l.a,__next_app__:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>u});var r=n(70260),a=n(28203),o=n(25155),l=n.n(o),i=n(67292),s={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>i[e]);n.d(t,s);let u=["",{children:["dashboard",{children:["input-otp",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,76205)),"C:\\proyectos\\next\\shadcn-trial\\src\\app\\dashboard\\input-otp\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,33405)),"C:\\proyectos\\next\\shadcn-trial\\src\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,71354)),"C:\\proyectos\\next\\shadcn-trial\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\proyectos\\next\\shadcn-trial\\src\\app\\dashboard\\input-otp\\page.tsx"],d={require:n,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/dashboard/input-otp/page",pathname:"/dashboard/input-otp",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},60228:(e,t,n)=>{Promise.resolve().then(n.bind(n,76205))},41668:(e,t,n)=>{Promise.resolve().then(n.bind(n,36963))},36963:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var r=n(45512),a=n(58009),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>l(e,i(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))0>t.indexOf(r)&&c.call(e,r)&&(n[r]=e[r]);return n},h=a.createContext({}),v=a.forwardRef((e,t)=>{var n,r,o,l,i,{value:s,onChange:u,maxLength:c,textAlign:d="left",pattern:v,placeholder:b,inputMode:w="numeric",onComplete:y,pushPasswordManagerStrategy:P="increase-width",pasteTransformer:C,containerClassName:E,noScriptCSSFallback:S=x,render:j,children:k}=e,M=f(e,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]);let[_,R]=a.useState("string"==typeof M.defaultValue?M.defaultValue:""),T=null!=s?s:_,O=function(e){let t=a.useRef();return a.useEffect(()=>{t.current=e}),t.current}(T),A=a.useCallback(e=>{null==u||u(e),R(e)},[u]),D=a.useMemo(()=>v?"string"==typeof v?new RegExp(v):v:null,[v]),I=a.useRef(null),N=a.useRef(null),W=a.useRef({value:T,onChange:A,isIOS:"undefined"!=typeof window&&(null==(r=null==(n=null==window?void 0:window.CSS)?void 0:n.supports)?void 0:r.call(n,"-webkit-touch-callout","none"))}),B=a.useRef({prev:[null==(o=I.current)?void 0:o.selectionStart,null==(l=I.current)?void 0:l.selectionEnd,null==(i=I.current)?void 0:i.selectionDirection]});a.useImperativeHandle(t,()=>I.current,[]),a.useEffect(()=>{let e=I.current,t=N.current;if(!e||!t)return;function n(){if(document.activeElement!==e){z(null),V(null);return}let t=e.selectionStart,n=e.selectionEnd,r=e.selectionDirection,a=e.maxLength,o=e.value,l=B.current.prev,i=-1,s=-1,u;if(0!==o.length&&null!==t&&null!==n){let e=t===n,r=t===o.length&&o.length<a;if(e&&!r){if(0===t)i=0,s=1,u="forward";else if(t===a)i=t-1,s=t,u="backward";else if(a>1&&o.length>1){let e=0;if(null!==l[0]&&null!==l[1]){u=t<l[1]?"backward":"forward";let n=l[0]===l[1]&&l[0]<a;"backward"!==u||n||(e=-1)}i=e+t,s=e+t+1}}-1!==i&&-1!==s&&i!==s&&I.current.setSelectionRange(i,s,u)}let c=-1!==i?i:t,d=-1!==s?s:n,p=null!=u?u:r;z(c),V(d),B.current.prev=[c,d,p]}if(W.current.value!==e.value&&W.current.onChange(e.value),B.current.prev=[e.selectionStart,e.selectionEnd,e.selectionDirection],document.addEventListener("selectionchange",n,{capture:!0}),n(),document.activeElement===e&&H(!0),!document.getElementById("input-otp-style")){let e=document.createElement("style");if(e.id="input-otp-style",document.head.appendChild(e),e.sheet){let t="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";g(e.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),g(e.sheet,`[data-input-otp]:autofill { ${t} }`),g(e.sheet,`[data-input-otp]:-webkit-autofill { ${t} }`),g(e.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),g(e.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let r=()=>{t&&t.style.setProperty("--root-height",`${e.clientHeight}px`)};r();let a=new ResizeObserver(r);return a.observe(e),()=>{document.removeEventListener("selectionchange",n,{capture:!0}),a.disconnect()}},[]);let[F,G]=a.useState(!1),[q,H]=a.useState(!1),[L,z]=a.useState(null),[$,V]=a.useState(null);a.useEffect(()=>{(function(e){setTimeout(e,0),setTimeout(e,10),setTimeout(e,50)})(()=>{var e,t,n,r;null==(e=I.current)||e.dispatchEvent(new Event("input"));let a=null==(t=I.current)?void 0:t.selectionStart,o=null==(n=I.current)?void 0:n.selectionEnd,l=null==(r=I.current)?void 0:r.selectionDirection;null!==a&&null!==o&&(z(a),V(o),B.current.prev=[a,o,l])})},[T,q]),a.useEffect(()=>{void 0!==O&&T!==O&&O.length<c&&T.length===c&&(null==y||y(T))},[c,y,O,T]);let K=function({containerRef:e,inputRef:t,pushPasswordManagerStrategy:n,isFocused:r}){let[o,l]=a.useState(!1),[i,s]=a.useState(!1),[u,c]=a.useState(!1),d=a.useMemo(()=>"none"!==n&&("increase-width"===n||"experimental-no-flickering"===n)&&o&&i,[o,i,n]),p=a.useCallback(()=>{let r=e.current,a=t.current;if(!r||!a||u||"none"===n)return;let o=r.getBoundingClientRect().left+r.offsetWidth,i=r.getBoundingClientRect().top+r.offsetHeight/2;0===document.querySelectorAll('[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]').length&&document.elementFromPoint(o-18,i)===r||(l(!0),c(!0))},[e,t,u,n]);return a.useEffect(()=>{let t=e.current;if(!t||"none"===n)return;function r(){s(window.innerWidth-t.getBoundingClientRect().right>=40)}r();let a=setInterval(r,1e3);return()=>{clearInterval(a)}},[e,n]),a.useEffect(()=>{let e=r||document.activeElement===t.current;if("none"===n||!e)return;let a=setTimeout(p,0),o=setTimeout(p,2e3),l=setTimeout(p,5e3),i=setTimeout(()=>{c(!0)},6e3);return()=>{clearTimeout(a),clearTimeout(o),clearTimeout(l),clearTimeout(i)}},[t,r,n,p]),{hasPWMBadge:o,willPushPWMBadge:d,PWM_BADGE_SPACE_WIDTH:"40px"}}({containerRef:N,inputRef:I,pushPasswordManagerStrategy:P,isFocused:q}),U=a.useCallback(e=>{let t=e.currentTarget.value.slice(0,c);if(t.length>0&&D&&!D.test(t)){e.preventDefault();return}"string"==typeof O&&t.length<O.length&&document.dispatchEvent(new Event("selectionchange")),A(t)},[c,A,O,D]),X=a.useCallback(()=>{var e;if(I.current){let t=Math.min(I.current.value.length,c-1),n=I.current.value.length;null==(e=I.current)||e.setSelectionRange(t,n),z(t),V(n)}H(!0)},[c]),J=a.useCallback(e=>{var t,n;let r=I.current;if(!C&&(!W.current.isIOS||!e.clipboardData||!r))return;let a=e.clipboardData.getData("text/plain"),o=C?C(a):a;e.preventDefault();let l=null==(t=I.current)?void 0:t.selectionStart,i=null==(n=I.current)?void 0:n.selectionEnd,s=(l!==i?T.slice(0,l)+o+T.slice(i):T.slice(0,l)+o+T.slice(l)).slice(0,c);if(s.length>0&&D&&!D.test(s))return;r.value=s,A(s);let u=Math.min(s.length,c-1),d=s.length;r.setSelectionRange(u,d),z(u),V(d)},[c,A,D,T]),Q=a.useMemo(()=>({position:"relative",cursor:M.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[M.disabled]),Y=a.useMemo(()=>({position:"absolute",inset:0,width:K.willPushPWMBadge?`calc(100% + ${K.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:K.willPushPWMBadge?`inset(0 ${K.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:d,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[K.PWM_BADGE_SPACE_WIDTH,K.willPushPWMBadge,d]),Z=a.useMemo(()=>a.createElement("input",m(p({autoComplete:M.autoComplete||"one-time-code"},M),{"data-input-otp":!0,"data-input-otp-placeholder-shown":0===T.length||void 0,"data-input-otp-mss":L,"data-input-otp-mse":$,inputMode:w,pattern:null==D?void 0:D.source,"aria-placeholder":b,style:Y,maxLength:c,value:T,ref:I,onPaste:e=>{var t;J(e),null==(t=M.onPaste)||t.call(M,e)},onChange:U,onMouseOver:e=>{var t;G(!0),null==(t=M.onMouseOver)||t.call(M,e)},onMouseLeave:e=>{var t;G(!1),null==(t=M.onMouseLeave)||t.call(M,e)},onFocus:e=>{var t;X(),null==(t=M.onFocus)||t.call(M,e)},onBlur:e=>{var t;H(!1),null==(t=M.onBlur)||t.call(M,e)}})),[U,X,J,w,Y,c,$,L,M,null==D?void 0:D.source,T]),ee=a.useMemo(()=>({slots:Array.from({length:c}).map((e,t)=>{var n;let r=q&&null!==L&&null!==$&&(L===$&&t===L||t>=L&&t<$),a=void 0!==T[t]?T[t]:null;return{char:a,placeholderChar:void 0!==T[0]?null:null!=(n=null==b?void 0:b[t])?n:null,isActive:r,hasFakeCaret:r&&null===a}}),isFocused:q,isHovering:!M.disabled&&F}),[q,F,c,$,L,M.disabled,T]),et=a.useMemo(()=>j?j(ee):a.createElement(h.Provider,{value:ee},k),[k,ee,j]);return a.createElement(a.Fragment,null,null!==S&&a.createElement("noscript",null,a.createElement("style",null,S)),a.createElement("div",{ref:N,"data-input-otp-container":!0,style:Q,className:E},et,a.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Z)))});function g(e,t){try{e.insertRule(t)}catch(e){console.error("input-otp could not insert CSS rule:",t)}}v.displayName="Input";var x=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;let b=(0,n(41680).A)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var w=n(44195);let y=a.forwardRef(({className:e,containerClassName:t,...n},a)=>(0,r.jsx)(v,{ref:a,containerClassName:(0,w.cn)("flex items-center gap-2 has-[:disabled]:opacity-50",t),className:(0,w.cn)("disabled:cursor-not-allowed",e),...n}));y.displayName="InputOTP";let P=a.forwardRef(({className:e,...t},n)=>(0,r.jsx)("div",{ref:n,className:(0,w.cn)("flex items-center",e),...t}));P.displayName="InputOTPGroup";let C=a.forwardRef(({index:e,className:t,...n},o)=>{let{char:l,hasFakeCaret:i,isActive:s}=a.useContext(h).slots[e];return(0,r.jsxs)("div",{ref:o,className:(0,w.cn)("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",s&&"z-10 ring-1 ring-ring",t),...n,children:[l,i&&(0,r.jsx)("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:(0,r.jsx)("div",{className:"h-4 w-px animate-caret-blink bg-foreground duration-1000"})})]})});C.displayName="InputOTPSlot";let E=a.forwardRef(({...e},t)=>(0,r.jsx)("div",{ref:t,role:"separator",...e,children:(0,r.jsx)(b,{})}));function S(){let[e,t]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,r.jsxs)(y,{maxLength:6,value:e,onChange:e=>t(e),children:[(0,r.jsxs)(P,{children:[(0,r.jsx)(C,{index:0}),(0,r.jsx)(C,{index:1}),(0,r.jsx)(C,{index:2})]}),(0,r.jsx)(E,{}),(0,r.jsxs)(P,{children:[(0,r.jsx)(C,{index:3}),(0,r.jsx)(C,{index:4}),(0,r.jsx)(C,{index:5})]})]}),(0,r.jsx)("div",{className:"mt-2",children:e})]})}E.displayName="InputOTPSeparator"},76205:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});let r=(0,n(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\proyectos\\\\next\\\\shadcn-trial\\\\src\\\\app\\\\dashboard\\\\input-otp\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\proyectos\\next\\shadcn-trial\\src\\app\\dashboard\\input-otp\\page.tsx","default")}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[638,33,77,448,745],()=>n(52451));module.exports=r})();