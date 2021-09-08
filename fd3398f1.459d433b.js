(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{240:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),o=(t(0),t(245)),a=["components"],s={id:"resilience",title:"Resilience"},c={unversionedId:"design/resilience",id:"design/resilience",isDocsHomePage:!1,title:"Resilience",description:"\x3c!--",source:"@site/docs/design/resilience.md",slug:"/design/resilience",permalink:"/docs/next/design/resilience",version:"current",sidebar:"docs",previous:{title:"Pluggable App Management",permalink:"/docs/next/design/pluggable_app_management"},next:{title:"Support K8s Predicates",permalink:"/docs/next/design/predicates"}},l=[{value:"The problem",id:"the-problem",children:[]},{value:"Design",id:"design",children:[{value:"Workflow",id:"workflow",children:[]},{value:"How to determine recovery is complete?",id:"how-to-determine-recovery-is-complete",children:[]},{value:"Node recovery",id:"node-recovery",children:[]},{value:"Requests for recovery",id:"requests-for-recovery",children:[]}]}],d={rightToc:l};function p(e){var n=e.components,s=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},d,s,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is not a HA (High-availability) design, HA implies that a service can\nsurvive from a fatal software/hardware failure. That requires one or more\nstandby instances providing same services to take over active instance on failures.\nResilience here means for YuniKorn, we can restart it without losing its state."),Object(o.b)("h2",{id:"the-problem"},"The problem"),Object(o.b)("p",null,"YuniKorn is designed as a stateless service, it doesn't persist its state, e.g\napplications/queues/allocations etc, to any persistent storage. All states are\nin memory only. This design ensures YuniKorn to be able to response requests with\nlow latency, and deployment mode is simple. However, a restart (or recovery) will\nhave the problem to lose state data. We need a decent way to reconstruct all\nprevious states on a restart."),Object(o.b)("h2",{id:"design"},"Design"),Object(o.b)("h3",{id:"workflow"},"Workflow"),Object(o.b)("p",null,'Scheduler core has no notion of "state", which means it does not know if it is under recovering.\nIt is too complex to maintain a series of ',Object(o.b)("inlineCode",{parentName:"p"},"scheduler states")," in both core and shim, because we must\nkeep them in-sync. However, if we live under a simple assumption: ",Object(o.b)("strong",{parentName:"p"},"scheduler core only responses\nrequests, the correction of requests is ensured by shim according its current state"),".\nThe design becomes much simpler. This way, the shim maintains a state machine like below. When\nit is under ",Object(o.b)("inlineCode",{parentName:"p"},"running")," state, it sends new requests to the scheduler core as long as a new one is found;\nwhen under ",Object(o.b)("inlineCode",{parentName:"p"},"recovering")," state, it collects previous allocations and send recovery messages to\nthe scheduler core, and waiting for recovery to be accomplished."),Object(o.b)("p",null,"Shim scheduler state machine"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      Register                 Recover                Success\nNew -----------\x3e Registered -----------\x3e Recovering ----------\x3e Running\n                                             |   Fail\n                                              --------\x3e Failed\n")),Object(o.b)("p",null,"Following chart illustrate how yunikorn-core and shim works together on recovery."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Workflow",src:t(426).default})),Object(o.b)("p",null,"Restart (with recovery) process"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"yunikorn-shim registers itself with yunikorn-core"),Object(o.b)("li",{parentName:"ul"},'shim enters "recovering" state. Under "recovering" state, the shim only scans existing nodes and allocations, no new scheduling requests will be sent.',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"shim scans existing nodes from api-server and added them to cache"),Object(o.b)("li",{parentName:"ul"},"shim scans existing pods from api-server, filter out the pods that already assigned (scheduled to a node), and added that to cache (allocation in that node)"),Object(o.b)("li",{parentName:"ul"},"shim sends update request to yunikorn-core with the info found in previous steps"))),Object(o.b)("li",{parentName:"ul"},"yunikorn-core handles update requests, the steps should look like a replay of allocation process, including",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"adding node"),Object(o.b)("li",{parentName:"ul"},"adding applications"),Object(o.b)("li",{parentName:"ul"},"adding allocations"),Object(o.b)("li",{parentName:"ul"},"modifying queue resources"),Object(o.b)("li",{parentName:"ul"},"update partition info"))),Object(o.b)("li",{parentName:"ul"},'when all nodes are fully recovered, shim transits the state to "running"'),Object(o.b)("li",{parentName:"ul"},'shim notifies yunikorn-core that recovery is done, then yunikorn-core transits to "running" state.')),Object(o.b)("h3",{id:"how-to-determine-recovery-is-complete"},"How to determine recovery is complete?"),Object(o.b)("p",null,"Shim queries K8s api-server to get how many nodes were available in this cluster. It tracks the recovering status of each node.\nOnce all nodes are recovered, it can claim the recovery is completed. This approach requires us to add ",Object(o.b)("inlineCode",{parentName:"p"},"recovering")," and ",Object(o.b)("inlineCode",{parentName:"p"},"recovered"),"\nstates to nodes' state machine in the shim."),Object(o.b)("h3",{id:"node-recovery"},"Node recovery"),Object(o.b)("p",null,"In the shim layer, it maintains states for each node and pods running on this node. When start to recover nodes,\nall nodes initially are considered as under ",Object(o.b)("inlineCode",{parentName:"p"},"recovering"),". Only when all pods running on this node are fully recovered,\nthe node can be considered as ",Object(o.b)("inlineCode",{parentName:"p"},"recovered"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"node-recovery",src:t(427).default})),Object(o.b)("p",null,"Like demonstrated on upon diagram,"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Node0 is still recovering because pod0 is recovering."),Object(o.b)("li",{parentName:"ul"},"Node1 is recovered (become schedulable) because all pods on this node have been recovered."),Object(o.b)("li",{parentName:"ul"},"Node2 is lost, shim lost contact with this node. If after sometime this node comes back, shim should still try to recover this node.")),Object(o.b)("h3",{id:"requests-for-recovery"},"Requests for recovery"),Object(o.b)("p",null,"During recovery process, shim needs to collect all known information of applications, nodes and allocations from the underneath\nResource Manager and use them for recovery."),Object(o.b)("h4",{id:"applications"},"Applications"),Object(o.b)("p",null,"Existing applications must be recovered first before allocations. Shim needs to scan all existing applications\nfrom nodes, and add applications info as a list of ",Object(o.b)("inlineCode",{parentName:"p"},"AddApplicationRequest")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"UpdateRequest"),". This is same\nas the fresh application submission."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"message AddApplicationRequest {\n  string applicationID = 1;\n  string queueName = 2;\n  string partitionName = 3;\n}\n")),Object(o.b)("h4",{id:"nodes-and-allocations"},"Nodes and allocations"),Object(o.b)("p",null,"Once a shim is registered to the scheduler-core, subsequent requests are sent via ",Object(o.b)("inlineCode",{parentName:"p"},"UpdateRequest#NewNodeInfo"),"\n(see more from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface/blob/master/si.proto"},"si.proto"),").\nThe structure of the messages looks like,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"message NewNodeInfo {\n  // nodeID\n  string nodeID = 1;\n  // optional node attributes\n  map<string, string> attributes = 2;\n  // total node resource\n  Resource schedulableResource = 3;\n  // existing allocations on this node\n  repeated Allocation existingAllocations = 4;\n}\n")),Object(o.b)("p",null,"Shim needs to scan all existing allocations on a node and wrap these info up as a ",Object(o.b)("inlineCode",{parentName:"p"},"NewNodeInfo"),", add that to a\n",Object(o.b)("inlineCode",{parentName:"p"},"UpdateRequest")," and then send to scheduler-core."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": the recovery of existing allocations depend on the existence of applications, which means applications must\nbe recovered first. Since scheduler-core handles ",Object(o.b)("inlineCode",{parentName:"p"},"UpdateRequest")," one by one, it is required that all existing allocations\nin a ",Object(o.b)("inlineCode",{parentName:"p"},"UpdateRequest")," must from known applications or new applications embedded within the same ",Object(o.b)("inlineCode",{parentName:"p"},"UpdateRequest"),", which can be\nspecified in ",Object(o.b)("inlineCode",{parentName:"p"},"NewApplications")," field. Scheduler-core ensures ",Object(o.b)("inlineCode",{parentName:"p"},"NewApplications")," are always processed first."))}p.isMDXComponent=!0},245:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=r,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||o;return t?i.a.createElement(m,s(s({ref:n},l),{},{components:t})):i.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},426:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/resilience-workflow-191f147a7501740ec6632f216f2bb25f.jpg"},427:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/resilience-node-recovery-6abe663c243bdfdbff691e14a70166e5.jpg"}}]);