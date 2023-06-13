"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18301],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,m=c["".concat(s,".").concat(p)]||c[p]||h[p]||o;return t?i.createElement(m,a(a({ref:n},d),{},{components:t})):i.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},51124:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],l={id:"scheduler_plugin",title:"K8s Scheduler Plugin"},s=void 0,u={unversionedId:"design/scheduler_plugin",id:"version-1.0.0/design/scheduler_plugin",title:"K8s Scheduler Plugin",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/design/scheduler_plugin.md",sourceDirName:"design",slug:"/design/scheduler_plugin",permalink:"/docs/1.0.0/design/scheduler_plugin",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"scheduler_plugin",title:"K8s Scheduler Plugin"},sidebar:"docs",previous:{title:"Gang scheduling design",permalink:"/docs/1.0.0/design/gang_scheduling"},next:{title:"Evaluate YuniKorn Performance with Kubemark",permalink:"/docs/1.0.0/performance/evaluate_perf_function_with_kubemark"}},d={},c=[{value:"Background",id:"background",level:2},{value:"Design",id:"design",level:2},{value:"Entrypoints",id:"entrypoints",level:2},{value:"Shim Scheduler Changes",id:"shim-scheduler-changes",level:2},{value:"Plugin Implementation",id:"plugin-implementation",level:2},{value:"PreFilter",id:"prefilter",level:3},{value:"Filter",id:"filter",level:3},{value:"PostBind",id:"postbind",level:3}],h={toc:c},p="wrapper";function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)(p,(0,i.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"YuniKorn (on Kubernetes) is traditionally implemented as a ground-up implementation of a Kubernetes scheduler.\nThis has allowed us to innovate rapidly, but is not without its problems; we currently have numerous places\nwhere we call into non-public K8S source code APIs with varying levels of (code) stability, requiring\nsometimes very disruptive code changes when we switch to new Kubernetes releases."),(0,o.kt)("p",null,"Ideally, we should be able to take advantage of enhancements to new Kubernetes releases automatically.\nUsing the plugin model enables us to enhance the Kubernetes scheduling logic with YuniKorn features.\nThis also helps keep YuniKorn compatible with new Kubernetes releases with minimal effort."),(0,o.kt)("p",null,"Additionally, it is desirable in many cases to allow non-batch workloads to bypass the YuniKorn scheduling\nfunctionality and use default scheduling logic. However, we have no way to do that today as the default\nscheduling functionality is not present in the YuniKorn scheduler binary."),(0,o.kt)("p",null,"Since Kubernetes 1.19, the Kubernetes project has created a stable API for the\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/"},"Scheduling Framework"),",\nwhich allows plugins to be created which implement various extension points. Plugins implement one or more\nof these extension points, and are then compiled into a scheduler binary which contains the default\nscheduler and plugin code, configured to call into the plugins during normal scheduling flow."),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("p",null,"We have added a scheduler plugin to the k8s-shim codebase which can be used to build a Kubernetes\nscheduler binary that includes YuniKorn functionality as well as the default scheduler functionality,\nsignificantly improving the compatibility of YuniKorn with upstream Kubernetes and allowing deployment of\nYuniKorn as the sole scheduler in a cluster with much greater confidence."),(0,o.kt)("p",null,"Separate docker images are created for the scheduler. The traditional YuniKorn scheduler is built as\n",(0,o.kt)("inlineCode",{parentName:"p"},"scheduler-{version}")," while the new plugin version is built as ",(0,o.kt)("inlineCode",{parentName:"p"},"scheduler-plugin-{version}"),". Either can be\ndeployed interchangeably into a Kubernetes cluster with the same helm charts by customizing the scheduler\nimage to deploy."),(0,o.kt)("h2",{id:"entrypoints"},"Entrypoints"),(0,o.kt)("p",null,"The existing shim ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," method has been relocated to ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg/cmd/shim/main.go"),", and a new ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," method\nunder ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg/cmd/schedulerplugin/main.go")," has be created. This method instantiates the default Kubernetes\nscheduler and adds YuniKorn to it as a set of plugins. It also modifies the default scheduler CLI argument\nparsing to add YuniKorn-specific options. When the YuniKorn plugin is created, it will launch an instance\nof the existing shim / core schedulers in the background, sync all informers, and start the normal YuniKorn\nscheduling loop."),(0,o.kt)("h2",{id:"shim-scheduler-changes"},"Shim Scheduler Changes"),(0,o.kt)("p",null,"In order to cooperate with the default scheduler, the shim needs to operate slightly differently when in\nplugin mode. These differences include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"postTaskAllocated()"),", we don\u2019t actually bind the Pod or Volumes, as this is the responsibility of\nthe default scheduler framework. Instead, we track the Node that YK allocated for the Node in an\ninternal map, dispatch a new BindTaskEvent, and record a ",(0,o.kt)("inlineCode",{parentName:"li"},"QuotaApproved")," event on the Pod."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"postTaskBound()"),", we update the Pod\u2019s state to ",(0,o.kt)("inlineCode",{parentName:"li"},"QuotaApproved")," as this will cause the default scheduler\nto re-evaluate the pod for scheduling (more on this below)."),(0,o.kt)("li",{parentName:"ul"},"In the scheduler cache, we track pending and in-progress pod allocations, and remove them if a pod is\nremoved from the cache.")),(0,o.kt)("h2",{id:"plugin-implementation"},"Plugin Implementation"),(0,o.kt)("p",null,"To expose the entirety of YuniKorn functionality, we implement three of the Scheduling Framework Plugins:"),(0,o.kt)("h3",{id:"prefilter"},"PreFilter"),(0,o.kt)("p",null,"PreFilter plugins are passed a reference to a Pod and return either ",(0,o.kt)("inlineCode",{parentName:"p"},"Success")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Unschedulable"),", depending\non whether that pod should be considered for scheduling."),(0,o.kt)("p",null,"For the YuniKorn implementation, we first check the Pod to see if we have an associated ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationId"),"\ndefined. If not, we immediately return ",(0,o.kt)("inlineCode",{parentName:"p"},"Success"),", which allows us to delegate to the default scheduler for\nnon-batch workloads."),(0,o.kt)("p",null,"If an ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationId")," is present, then we determine if there is a pending pod allocation (meaning the\nYuniKorn core has already decided to allocate the pod). If so, we return ",(0,o.kt)("inlineCode",{parentName:"p"},"Success"),", otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"Unschedulable"),".\nAdditionally, if an in-progress allocation is detected (indicating that we have previously attempted to\nschedule this pod), we trigger a ",(0,o.kt)("inlineCode",{parentName:"p"},"RejectTask")," event for the YuniKorn core so that the pod will be sent back\nfor scheduling later."),(0,o.kt)("h3",{id:"filter"},"Filter"),(0,o.kt)("p",null,"Filter plugins are used to filter out nodes that cannot run a Pod. Only Pods which pass the PreFilter stage\nare evaluated. "),(0,o.kt)("p",null,"For the YuniKorn plugin, we follow similar logic to PreFilter, except that we also validate that the pending\npod allocation matches the node YuniKorn chose for the pod. If the node matches, we transition the pending\nallocation to an in-progress allocation. This helps ensure that we stay in sync with the default scheduler,\nas it is possible that we allow an allocation to proceed but the bind fails for some reason."),(0,o.kt)("h3",{id:"postbind"},"PostBind"),(0,o.kt)("p",null,"The PostBind extension point is used informationally to notify the plugin that a pod was successfully bound."),(0,o.kt)("p",null,"The YuniKorn implementation uses this to clean up the outstanding in-progress pod allocations."))}m.isMDXComponent=!0}}]);