(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5649],{3071:(e,t,r)=>{Promise.resolve().then(r.bind(r,3658))},3658:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(5155),a=r(3312),o=r(2133),n=r(5564);function i(){let{toast:e}=(0,n.dj)();return(0,s.jsxs)("div",{className:"grid grid-cols-5 gap-3",children:[(0,s.jsx)(a.$,{onClick:()=>{e({title:"Error de registro",description:"Intentalo de nuevo m\xe1s tarde",duration:3e3,variant:"success"})},children:"Toast Success"}),(0,s.jsx)(a.$,{variant:"outline",onClick:()=>{e({title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:(0,s.jsx)(o.Qg,{altText:"Try again",onClick:()=>{console.log("try again toast")},children:"Try again"})})},children:"Show Toast"}),(0,s.jsx)(a.$,{variant:"outline",onClick:()=>{e({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:(0,s.jsx)(o.Qg,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})]})}},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>l,r:()=>d});var s=r(5155),a=r(2115),o=r(2317),n=r(1027),i=r(1567);let d=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef((e,t)=>{let{className:r,variant:a,size:n,asChild:l=!1,...u}=e,c=l?o.DX:"button";return(0,s.jsx)(c,{className:(0,i.cn)(d({variant:a,size:n,className:r})),ref:t,...u})});l.displayName="Button"},2133:(e,t,r)=>{"use strict";r.d(t,{Qg:()=>p,Sb:()=>m,US:()=>u,aD:()=>g,eC:()=>v,tE:()=>l,y8:()=>f});var s=r(5155),a=r(2115),o=r(9930),n=r(1027),i=r(767),d=r(1567);let l=o.Kq,u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.LM,{ref:t,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...a})});u.displayName=o.LM.displayName;let c=(0,n.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground",success:"bg-emerald-700 text-white"}},defaultVariants:{variant:"default"}}),f=a.forwardRef((e,t)=>{let{className:r,variant:a,...n}=e;return(0,s.jsx)(o.bL,{ref:t,className:(0,d.cn)(c({variant:a}),r),...n})});f.displayName=o.bL.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.rc,{ref:t,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...a})});p.displayName=o.rc.displayName;let v=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.bm,{ref:t,className:(0,d.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...a,children:(0,s.jsx)(i.A,{className:"h-4 w-4"})})});v.displayName=o.bm.displayName;let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.hE,{ref:t,className:(0,d.cn)("text-sm font-semibold [&+div]:text-xs",r),...a})});m.displayName=o.hE.displayName;let g=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.VY,{ref:t,className:(0,d.cn)("text-sm opacity-90",r),...a})});g.displayName=o.VY.displayName},5564:(e,t,r)=>{"use strict";r.d(t,{dj:()=>f});var s=r(2115);let a=0,o=new Map,n=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);o.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?n(r):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],l={toasts:[]};function u(e){l=i(l,e),d.forEach(e=>{e(l)})}function c(e){let{...t}=e,r=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>u({type:"DISMISS_TOAST",toastId:r});return u({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=s.useState(l);return s.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>o});var s=r(3463),a=r(9795);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,s.$)(t))}},1027:(e,t,r)=>{"use strict";r.d(t,{F:()=>n});var s=r(3463);let a=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,o=s.$,n=(e,t)=>r=>{var s;if((null==t?void 0:t.variants)==null)return o(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:n,defaultVariants:i}=t,d=Object.keys(n).map(e=>{let t=null==r?void 0:r[e],s=null==i?void 0:i[e];if(null===t)return null;let o=a(t)||a(s);return n[e][o]}),l=r&&Object.entries(r).reduce((e,t)=>{let[r,s]=t;return void 0===s||(e[r]=s),e},{});return o(e,d,null==t?void 0:null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce((e,t)=>{let{class:r,className:s,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...l}[t]):({...i,...l})[t]===r})?[...e,r,s]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},e=>{var t=t=>e(e.s=t);e.O(0,[1181,4135,248,8441,1517,7358],()=>t(3071)),_N_E=e.O()}]);