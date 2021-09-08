(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{124:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return d}));var n=t(2),c=t(6),i=(t(0),t(245)),a=["components"],o={id:"architecture",title:"Architecture"},s={unversionedId:"design/architecture",id:"design/architecture",isDocsHomePage:!1,title:"Architecture",description:"\x3c!--",source:"@site/docs/design/architecture.md",slug:"/design/architecture",permalink:"/docs/next/design/architecture",version:"current",sidebar:"docs",previous:{title:"Development in CodeReady Containers",permalink:"/docs/next/developer_guide/openshift_development"},next:{title:"Scheduler Core Design",permalink:"/docs/next/design/scheduler_core_design"}},u=[{value:"Architecture",id:"architecture",children:[]},{value:"Components",id:"components",children:[{value:"Scheduler interface",id:"scheduler-interface",children:[]},{value:"Scheduler core",id:"scheduler-core",children:[]},{value:"Kubernetes shim",id:"kubernetes-shim",children:[]}]}],l={rightToc:u};function d(e){var r=e.components,o=Object(c.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Apache YuniKorn (Incubating) is a light-weight, universal resource scheduler for container orchestrator systems.\nIt is created to achieve fine-grained resource sharing for various workloads efficiently on a large scale, multi-tenant,\nand cloud-native environment. YuniKorn brings a unified, cross-platform, scheduling experience for mixed workloads that\nconsist of stateless batch workloads and stateful services."),Object(i.b)("p",null,"YuniKorn now supports K8s and can be deployed as a custom K8s scheduler. YuniKorn's architecture design also allows\nadding different shim layer and adopt to different ResourceManager implementation including Apache Hadoop YARN,\nor any other systems."),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("p",null,"Following chart illustrates the high-level architecture of YuniKorn."),Object(i.b)("img",{src:t(345).default}),Object(i.b)("h2",{id:"components"},"Components"),Object(i.b)("h3",{id:"scheduler-interface"},"Scheduler interface"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"Scheduler interface")," is an abstract layer\nwhich resource management platform (like YARN/K8s) will speak with, via API like GRPC/programing language bindings."),Object(i.b)("h3",{id:"scheduler-core"},"Scheduler core"),Object(i.b)("p",null,"Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of schedule core ",Object(i.b)("a",{parentName:"p",href:"/docs/next/design/scheduler_core_design"},"here"),"."),Object(i.b)("h3",{id:"kubernetes-shim"},"Kubernetes shim"),Object(i.b)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of the Kubernetes shim ",Object(i.b)("a",{parentName:"p",href:"/docs/next/design/k8shim"},"here")))}d.isMDXComponent=!0},245:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),c=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),l=function(e){var r=c.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=l(e.components);return c.a.createElement(u.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},p=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=n,f=d["".concat(a,".").concat(p)]||d[p]||h[p]||i;return t?c.a.createElement(f,o(o({ref:r},u),{},{components:t})):c.a.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},345:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/architecture-333225e01d82300eb9ee34e76cf34697.png"}}]);