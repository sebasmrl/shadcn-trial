(()=>{var e={};e.id=525,e.ids=[525],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},84693:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>p,routeModule:()=>c,tree:()=>d});var a=t(70260),s=t(28203),o=t(25155),n=t.n(o),i=t(67292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let d=["",{children:["dashboard",{children:["progress",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,86438)),"C:\\proyectos\\next\\shadcn-trial\\src\\app\\dashboard\\progress\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,33405)),"C:\\proyectos\\next\\shadcn-trial\\src\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,71354)),"C:\\proyectos\\next\\shadcn-trial\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\proyectos\\next\\shadcn-trial\\src\\app\\dashboard\\progress\\page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},c=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/dashboard/progress/page",pathname:"/dashboard/progress",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},33591:(e,r,t)=>{Promise.resolve().then(t.bind(t,86438))},86735:(e,r,t)=>{Promise.resolve().then(t.bind(t,59931))},59931:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>w});var a=t(45512),s=t(58009),o=t(6004),n=t(30830),i="Progress",[l,d]=(0,o.A)(i),[p,u]=l(i),c=s.forwardRef((e,r)=>{var t,s;let{__scopeProgress:o,value:i=null,max:l,getValueLabel:d=x,...u}=e;(l||0===l)&&!g(l)&&console.error((t=`${l}`,`Invalid prop \`max\` of value \`${t}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`));let c=g(l)?l:100;null===i||b(i,c)||console.error((s=`${i}`,`Invalid prop \`value\` of value \`${s}\` supplied to \`Progress\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`));let m=b(i,c)?i:null,v=h(m)?d(m,c):void 0;return(0,a.jsx)(p,{scope:o,value:m,max:c,children:(0,a.jsx)(n.sG.div,{"aria-valuemax":c,"aria-valuemin":0,"aria-valuenow":h(m)?m:void 0,"aria-valuetext":v,role:"progressbar","data-state":f(m,c),"data-value":m??void 0,"data-max":c,...u,ref:r})})});c.displayName=i;var m="ProgressIndicator",v=s.forwardRef((e,r)=>{let{__scopeProgress:t,...s}=e,o=u(m,t);return(0,a.jsx)(n.sG.div,{"data-state":f(o.value,o.max),"data-value":o.value??void 0,"data-max":o.max,...s,ref:r})});function x(e,r){return`${Math.round(e/r*100)}%`}function f(e,r){return null==e?"indeterminate":e===r?"complete":"loading"}function h(e){return"number"==typeof e}function g(e){return h(e)&&!isNaN(e)&&e>0}function b(e,r){return h(e)&&!isNaN(e)&&e<=r&&e>=0}v.displayName=m;var y=t(44195);let P=s.forwardRef(({className:e,value:r,indicatorColor:t="bg-primary",...s},o)=>(0,a.jsx)(c,{ref:o,className:(0,y.cn)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",e),...s,children:(0,a.jsx)(v,{className:(0,y.cn)("h-full w-full flex-1 transition-all",t),style:{transform:`translateX(-${100-(r||0)}%)`}})}));function w(){let[e,r]=(0,s.useState)(0);return(0,a.jsx)("div",{className:"flex justify-center h-[300px] items-center",children:(0,a.jsx)(P,{value:e,className:"w-[60%]",indicatorColor:(0,y.cn)({"bg-red-500":e<50,"bg-yellow-500":e>=50&&e<80,"bg-green-500":e>=80&&e<=100})})})}P.displayName=c.displayName},86438:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});let a=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\proyectos\\\\next\\\\shadcn-trial\\\\src\\\\app\\\\dashboard\\\\progress\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\proyectos\\next\\shadcn-trial\\src\\app\\dashboard\\progress\\page.tsx","default")}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638,33,77,448,745],()=>t(84693));module.exports=a})();