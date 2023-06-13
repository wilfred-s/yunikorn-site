"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43034],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],p={id:"cross_queue_preemption",title:"Cross Queue Preemption"},l=void 0,s={unversionedId:"design/cross_queue_preemption",id:"version-1.0.0/design/cross_queue_preemption",title:"Cross Queue Preemption",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/design/cross_queue_preemption.md",sourceDirName:"design",slug:"/design/cross_queue_preemption",permalink:"/zh-cn/docs/1.0.0/design/cross_queue_preemption",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"cross_queue_preemption",title:"Cross Queue Preemption"},sidebar:"docs",previous:{title:"Kubernetes Shim Design",permalink:"/zh-cn/docs/1.0.0/design/k8shim"},next:{title:"Namespace Resource Quota",permalink:"/zh-cn/docs/1.0.0/design/namespace_resource_quota"}},c={},u=[{value:"Problems:",id:"problems",level:2},{value:"Answer some questions for design/implementation choices",id:"answer-some-questions-for-designimplementation-choices",level:2},{value:"Pseudo code",id:"pseudo-code",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"problems"},"Problems:"),(0,i.kt)("p",null,"According to lessons we learned from YARN Scheduler preemption. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here're top bad things:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Preemption is a shotgun instead of a sniper, when a preemption decision is made, nobody knows if preempted resources will go to demanding queue/app/user or not."),(0,i.kt)("li",{parentName:"ul"},"Preemption logic and allocation is different, we have to implement (and mimic) what we have done in scheduler allocation logic. ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here're top good things:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Preemption is fast (thanks to the shotgun), reclaiming thousands of containers only takes ~ 1 sec. "),(0,i.kt)("li",{parentName:"ul"},"We have understand how painful it is to handle DRF, multiple preemption policies (inter/intra-queue, shotgun/surgical preemption, etc.) And we have developed some good logic\nto make sure better modularization and plug-ability  ")),(0,i.kt)("h2",{id:"answer-some-questions-for-designimplementation-choices"},"Answer some questions for design/implementation choices"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1","."," Do we really want preemption-delay? (Or we just want to control pace)")),(0,i.kt)("p",null,"In CS, we have preemption-delay, which select victims in preemption candidates, wait for a certain time before killing it. "),(0,i.kt)("p",null,"The purposes of preemption delay are: a. give heads-up time to apps so\nthey can prepare bad things happen (unfortunately no app do anything for these heads up, at least from what I knew). b. control preemption pace.   "),(0,i.kt)("p",null,"And in practice, I found it causes a lot of issues, for example when a\ncluster state keep changing, it is very hard to ensure accurate preemption. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Proposal:")),(0,i.kt)("p",null,"Remove the preemption-delay, keep the logics of controlling preemption pace. (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn.resourcemanager.monitor.capacity.preemption\n.total_preemption_per_round"),"). And we can do allocation together with preemption.\nThis don't mean containers will be stopped immediately after preemption issued. Instead, RM can control delays between signal a container and kill a container. Such as grace\ntermination of POD in K8s: ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods"},"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods"),"   "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2","."," Do we want to do preemption for every scheduling logic, or we can do periodically?")),(0,i.kt)("p",null,"In CS, we have preemption logic runs periodically, like every 1 sec or 3 sec. "),(0,i.kt)("p",null,"Since preemption logic involves some heavy logics, like calculating shares of queues/apps. And when doing accurate preemption, we may need to scan nodes for preemption candidate.\nConsidering this, I propose to have preemption runs periodically. But it is important to note that, we need to try to use as much code as possible for\nallocation-inside-preemption, otherwise there will be too much duplicated logic and very hard to be maintained in the future."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3","."," Preemption cost and function")),(0,i.kt)("p",null,"We found it is helpful to add cost for preemption, such as container live time, priority, type of container. It could be a cost function (Which returns a numeric value) or it\ncould be a comparator (which compare two allocations for preemption ask)."),(0,i.kt)("h2",{id:"pseudo-code"},"Pseudo code"),(0,i.kt)("p",null,"Logic of allocation (invoked every allocation cycle)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"input:\n  - nAlloc, allocate N allocations for this allocation cycle.\n\nfor partition: \n  askCandidates := findAskCandidates(nAlloc, preemption=false)\n  \n  allocated, failed_to_allocated := tryAllocate(askCandidates);\n  \n  send-allocated-to-cache-to-commit;\n  \n  update-missed-opportunity (allocated, failed_to_allocated);\n  \n  nAlloc -= len(allocated)   \n")),(0,i.kt)("p",null,"Logic of preemption (invoked every preemption cycle)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// It has to be done for every preemption-policy because calculation is different.\nfor preemption-policy: \n  preempt_results := policy.preempt()\n  for preempt_results: \n     send-preempt-result-to-cache-to-commit;\n     updated-missed-opportunity (allocated)\n")),(0,i.kt)("p",null,"Inside preemption policy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"inter-queue-preempt-policy:\n  calculate-preemption-quotas;\n  \n  for partitions:\n    total_preempted := resource(0);\n    \n    while total_preempted < partition-limited:\n      // queues will be sorted by allocating - preempting\n      // And ignore any key in preemption_mask\n      askCandidates := findAskCandidates(N, preemption=true)\n      \n      preempt_results := tryAllocate(askCandidates, preemption=true);\n      \n      total_preempted += sigma(preempt_result.allocResource)\n      \n      send-allocated-to-cache-to-commit;\n      \n      update-missed-opportunity (allocated, failed_to_allocated);\n      \n      update-preemption-mask(askCandidates.allocKeys - preempt_results.allocKeys)\n")))}f.isMDXComponent=!0}}]);