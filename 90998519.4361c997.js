(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(2),o=t(6),r=(t(0),t(202)),c={id:"scheduler_core_design",title:"Scheduler Core Design"},i={unversionedId:"design/scheduler_core_design",id:"design/scheduler_core_design",isDocsHomePage:!1,title:"Scheduler Core Design",description:"\x3c!--",source:"@site/docs/design/scheduler_core_design.md",slug:"/design/scheduler_core_design",permalink:"/docs/next/design/scheduler_core_design",version:"current",sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/next/design/architecture"},next:{title:"Scheduler cache removal design",permalink:"/docs/next/design/cache_removal"}},l=[{value:"Components:",id:"components",children:[{value:"Scheduler API Server (RMProxy)",id:"scheduler-api-server-rmproxy",children:[]},{value:"Scheduler Cache",id:"scheduler-cache",children:[]},{value:"Scheduler Cache Event Handler",id:"scheduler-cache-event-handler",children:[]},{value:"Admin Service",id:"admin-service",children:[]},{value:"Scheduler and Preemptor",id:"scheduler-and-preemptor",children:[]}]},{value:"Scheduler&#39;s responsibility",id:"schedulers-responsibility",children:[]},{value:"Preemption",id:"preemption",children:[]},{value:"Communication between Shim and Core",id:"communication-between-shim-and-core",children:[]},{value:"Configurations &amp; Semantics",id:"configurations--semantics",children:[]},{value:"How scheduler do allocation",id:"how-scheduler-do-allocation",children:[]},{value:"Flow of events",id:"flow-of-events",children:[]}],s={rightToc:l};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The scheduler core design has changed. ",Object(r.b)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-317"},"YUNIKORN-317")," was committed and has removed the scheduler cache.\nThis document will not be maintained and is just for historical reference.\nSee ",Object(r.b)("a",{parentName:"p",href:"/docs/next/design/cache_removal"},"scheduler cache removal design")))),Object(r.b)("p",null,"Github repo: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-core/"},"https://github.com/apache/incubator-yunikorn-core/")),Object(r.b)("p",null,"Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),"."),Object(r.b)("h2",{id:"components"},"Components:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\n                     +---------------+  +--------------+\n                     |K8s Shim       |  |YARN Shim     |\n                     +---------------+  +--------------+\n\n                                +--------------+   +------------+\n                Scheduler-      | GRPC Protocol|   |Go API      |\n                Interface:      +--------------+   +------------+\n\n+---------------------------------------------------------------------------+\n                     +--------------------+\n                     |Scheduler API Server|\n +-------------+     +---------+----------+\n |AdminService |               |\n +-------------+               |Write Ops                    +----------------+\n +-------------+               V                            ++Scheduler       |\n |Configurator |      +-------------------+  Allocate       ||   And          |\n +-------------+      |Cache Event Handler+<-----------------|                |\n         +----------\x3e +-------------------+  Preempt        ++Preemptor       |\n          Update Cfg   Handled by policies                   +----------------+\n                               +  (Stateless)\n                        +------v--------+\n                        |Scheduler Cache|\n                        +---------------+\n                +---------------------------------------------+\n                |--------+ +------+ +----------+ +----------+ |\n                ||Node   | |Queue | |Allocation| |Requests  | |\n                |--------+ +------+ +----------+ +----------+ |\n                +---------------------------------------------+\n")),Object(r.b)("h3",{id:"scheduler-api-server-rmproxy"},"Scheduler API Server (RMProxy)"),Object(r.b)("p",null,"Responsible for communication between RM and Scheduler, which implements scheduler-interface GRPC protocol,\nor just APIs. (For intra-process communication w/o Serde)."),Object(r.b)("h3",{id:"scheduler-cache"},"Scheduler Cache"),Object(r.b)("p",null,"Caches all data related to scheduler state, such as used resources of each queues, nodes, allocations.\nRelationship between allocations and nodes, etc. Should not include in-flight data for resource allocation.\nFor example to-be-preempted allocation candidates. Fair share resource of queues, etc."),Object(r.b)("h3",{id:"scheduler-cache-event-handler"},"Scheduler Cache Event Handler"),Object(r.b)("p",null,"Handles all events which needs to update scheduler internal state. So all the write operations will be carefully handled."),Object(r.b)("h3",{id:"admin-service"},"Admin Service"),Object(r.b)("p",null,"Handles request from Admin, which can also load configurations from storage and update scheduler policies."),Object(r.b)("h3",{id:"scheduler-and-preemptor"},"Scheduler and Preemptor"),Object(r.b)("p",null,"Handles Scheduler's internal state. (Which is not belong to scheduelr cache), such as internal reservations, etc.\nScheduler and preemptor will work together, make scheduling or preemption decisions. All allocate/preempt request\nwill be handled by event handler."),Object(r.b)("h2",{id:"schedulers-responsibility"},"Scheduler's responsibility"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"According to resource usages between queues, sort queues, applications, and figure out order of application allocation. (This will be used by preemption as well)."),Object(r.b)("li",{parentName:"ul"},"It is possible that we cannot satisfy some of the allocation request, we need to skip them and find next request."),Object(r.b)("li",{parentName:"ul"},"It is possible that some allocation request cannot be satisfied because of resource fragmentation. We need to reserve room for such requests."),Object(r.b)("li",{parentName:"ul"},"Different nodes may belong to different disjoint partitions, we can make independent scheduler runs"),Object(r.b)("li",{parentName:"ul"},"Be able to config and change ordering policies for apps, queues."),Object(r.b)("li",{parentName:"ul"},"Application can choose their own way to manage sort of nodes.")),Object(r.b)("h2",{id:"preemption"},"Preemption"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'It is important to know "who wants the resource", so we can do preemption based on allocation orders.'),Object(r.b)("li",{parentName:"ul"},"When do preemption, it is also efficient to trigger allocation op. Think about how to do it."),Object(r.b)("li",{parentName:"ul"},"Preemption needs to take care about queue resource balancing.")),Object(r.b)("h2",{id:"communication-between-shim-and-core"},"Communication between Shim and Core"),Object(r.b)("p",null,"YuniKorn-Shim (like ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"https://github.com/apache/incubator-yunikorn-k8shim"),") communicates with core by\nusing scheduler-interface (",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"https://github.com/apache/incubator-yunikorn-scheduler-interface"),").\nScheduler interface has Go API or GRPC. Currently, yunikorn-k8shim is using Go API to communicate with yunikorn-core\nto avoid extra overhead introduced by GRPC. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Shim (like K8shim) first need to register with core:")," "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"func (m *RMProxy) RegisterResourceManager(request *si.RegisterResourceManagerRequest, callback api.ResourceManagerCallback) (*si.RegisterResourceManagerResponse, error)\n")),Object(r.b)("p",null,"Which indicate ResourceManager's name, a callback function for updateResponse. The design of core is be able to do scheduling for multiple clusters (such as multiple K8s cluster) just with one core instance."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Shim interacts with core by invoking RMProxy's Update API frequently, which updates new allocation request, allocation to kill, node updates, etc.")," "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"func (m *RMProxy) Update(request *si.UpdateRequest) error\n")),Object(r.b)("p",null,"Response of update (such as new allocated container) will be received by registered callback."),Object(r.b)("h2",{id:"configurations--semantics"},"Configurations & Semantics"),Object(r.b)("p",null,"Example of configuration:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Partition is name space.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Same queues can under different partitions, but enforced to have same hierarchy."),Object(r.b)("p",{parentName:"li"},"  Good:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        / \\\n  b     c      b   c\n")),Object(r.b)("p",{parentName:"li"},'  Good (c in partition y acl=""):'),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        /\n  b     c      b\n")),Object(r.b)("p",{parentName:"li"},"  Bad (c in different hierarchy)"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        /  \\\n  b     c      b    d\n              /\n             c\n")),Object(r.b)("p",{parentName:"li"},"  Bad (Duplicated c)"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"}," partition=x\n     a\n   /   \\\n  b     c\n /\nc\n\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Different hierarchies can be added"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-scheduler-conf.yaml"},"partitions:\n  - name:  default\n    queues:\n        root:\n          configs:\n            acls:\n          childrens:\n            - a\n            - b\n            - c\n            - ...\n        a:\n          configs:\n            acls:\n            capacity: (capacity is not allowed to set for root)\n            max-capacity: ...\n      mapping-policies:\n        ...\n  - name: partition_a:\n    queues:\n        root:...\n")))),Object(r.b)("h2",{id:"how-scheduler-do-allocation"},"How scheduler do allocation"),Object(r.b)("p",null,"Scheduler runs a separate goroutine to look at asks and available resources, and do resource allocation. Here's allocation logic in pseudo code: "),Object(r.b)("p",null,"Entry point of scheduler allocation is ",Object(r.b)("inlineCode",{parentName:"p"},"scheduler.go: func (s *Scheduler) schedule()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# First of all, YuniKorn has partition concept, a logical resource pool can consists\n# of one of multiple physical dis-joint partitions. It is similar to YARN's node\n# partition concept.\n\nfor partition : partitions:\n  # YuniKorn can reserve allocations for picky asks (such as large request, etc.)\n  # Before doing regular allocation, YuniKorn look at reservedAllocations first.\n  for reservedAllocation : partition.reservedAllocations: \n     reservedAllocation.tryAllocate(..)\n  \n  # After tried all reserved allocation, YuniKorn will go to regular allocation\n  partition.tryAllocate(..)\n  \n  # If there's any allocation created, scheduler will create an AllocationProposal\n  # and send to Cache to \"commit\" the AllocationProposal \n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Allocation by hierchical of queues")),Object(r.b)("p",null,"Inside ",Object(r.b)("inlineCode",{parentName:"p"},"partition.tryAllocate")," "),Object(r.b)("p",null,"It recursively traverse from root queue and down to lower level, for each level, logic is inside ",Object(r.b)("inlineCode",{parentName:"p"},"pkg/scheduler/scheduling_queue.go func (sq *SchedulingQueue) tryAllocate")),Object(r.b)("p",null,"Remember YuniKorn natively supports hierarchical of queues. For ParentQueue (which has sub queues under the parent queue), it uses queue's own sorting policy to sort subqueues and try to allocate from most preferred queue to least-preferred queue. "),Object(r.b)("p",null,"For LeafQueue (which has applications inside the queue), it uses queue's own sorting policy to sort applications belong to the queue and allocate based on the sorted order. "),Object(r.b)("p",null,"(All sorting policies can be configured differently at each level.) "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Allocation by application")),Object(r.b)("p",null,"When it goes to Application, see (",Object(r.b)("inlineCode",{parentName:"p"},"scheduler_application.go: func (sa *SchedulingApplication) tryAllocate"),"), It first sort the pending resource requests belong to the application (based on requests' priority). And based on the selected request, and configured node-sorting policy, it sorts nodes belong to the partition and try to allocate resources on the sorted nodes. "),Object(r.b)("p",null,"When application trying to allocate resources on nodes, it will invokes PredicatePlugin to make sure Shim can confirm the node is good. (For example K8shim runs predicates check for allocation pre-check)."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Allocation completed by scheduler")," "),Object(r.b)("p",null,"Once allocation is done, scheduler will create an AllocationProposal and send to Cache to do further check, we will cover details in the upcoming section."),Object(r.b)("h2",{id:"flow-of-events"},"Flow of events"),Object(r.b)("p",null,"Like mentioned before, all communications between components like RMProxy/Cache/Schedulers are done by using async event handler. "),Object(r.b)("p",null,"RMProxy/Cache/Scheduler include local event queues and event handlers. RMProxy and Scheduler have only one queue (For example: ",Object(r.b)("inlineCode",{parentName:"p"},"pkg/scheduler/scheduler.go: handleSchedulerEvent"),"), and Cache has two queues (One for events from RMProxy, and one for events from Scheduler, which is designed for better performance). "),Object(r.b)("p",null,"We will talk about how events flowed between components: "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Events for ResourceManager registration and updates:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Update from ResourceManager -> RMProxy -> RMUpdateRequestEvent Send to Cache\nNew ResourceManager registration -> RMProxy -> RegisterRMEvent Send to Cache\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cache Handles RM Updates")," "),Object(r.b)("p",null,"There're many fields inside RM Update event (",Object(r.b)("inlineCode",{parentName:"p"},"RMUpdateRequestEvent"),"), among them, we have following categories: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"1) Update for Application-related updates\n2) Update for New allocation ask and release. \n3) Node (Such as kubelet) update (New node, remove node, node resource change, etc.)\n")),Object(r.b)("p",null,"More details can be found at: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"func (m *ClusterInfo) processRMUpdateEvent(event *cacheevent.RMUpdateRequestEvent)\n\ninside cluster_info.go\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cache send RM updates to Scheduler")),Object(r.b)("p",null,"For most cases, Cache propagate updates from RM to scheduler directly (including Application, Node, Asks, etc.). And it is possible that some updates from RM is not valid (such as adding an application to a non-existed queue), for such cases, cache can send an event back to RMProxy and notify the ResourceManager. (See ",Object(r.b)("inlineCode",{parentName:"p"},"RMApplicationUpdateEvent.RejectedApplications"),")"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cache handles scheduler config")," "),Object(r.b)("p",null,"Cache also handles scheduler's config changes, see"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"func (m *ClusterInfo) processRMConfigUpdateEvent(event *commonevents.ConfigUpdateRMEvent)\n")),Object(r.b)("p",null,"Similar to other RM updates, it propages news to scheduelr."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Scheduler do allocation")),Object(r.b)("p",null,"Once an AllocationProposal created by scheduler, scheduler sends ",Object(r.b)("inlineCode",{parentName:"p"},"AllocationProposalBundleEvent")," to Cache to commit. "),Object(r.b)("p",null,"Cache look at AllocationProposal under lock, and commit these proposals. The reason to do proposal/commit is Scheduler can run in multi-threads which could cause conflict for resource allocation. This approach is inspired by Borg/Omega/YARN Global Scheduling."),Object(r.b)("p",null,"Cache checks more states such as queue resources, node resources (we cannot allocate more resource than nodes' available), etc. Once check is done, Cache updates internal data strcture and send confirmation to Scheduler to update the same, and scheduler sends allocated Allocation to RMProxy so Shim can do further options. For example, K8shim will ",Object(r.b)("inlineCode",{parentName:"p"},"bind")," an allocation (POD) to kubelet."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Job Add:\n--------\nRM -> Cache -> Scheduler (Implemented)\n\nJob Remove:\n-----------\nRM -> Scheduler -> Cache (Implemented)\nReleased allocations: (Same as normal release) (Implemented)\nNote: Make sure remove from scheduler first to avoid new allocated created. \n\nScheduling Request Add:\n-----------------------\nRM -> Cache -> Scheduler (Implemented)\nNote: Will check if requested job exists, queue exists, etc.\nWhen any request invalid:\n   Cache -> RM (Implemented)\n   Scheduler -> RM (Implemented)\n\nScheduling Request remove:\n------------------------- \nRM -> Scheduler -> Cache (Implemented)\nNote: Make sure removed from scheduler first to avoid new container allocated\n\nAllocation remove (Preemption) \n-----------------\nScheduler -> Cache -> RM (TODO)\n              (confirmation)\n\nAllocation remove (RM voluntarilly ask)\n---------------------------------------\nRM -> Scheduler -> Cache -> RM. (Implemented)\n                      (confirmation)\n\nNode Add: \n---------\nRM -> Cache -> Scheduler (Implemented)\nNote: Inside Cache, update allocated resources.\nError handling: Reject Node to RM (Implemented)\n\nNode Remove: \n------------\nImplemented in cache side\nRM -> Scheduler -> Cache (TODO)\n\nAllocation Proposal:\n--------------------\nScheduler -> Cache -> RM\nWhen rejected/accepted:\n    Cache -> Scheduler\n    \nInitial: (TODO)\n--------\n1. Admin configured partitions\n2. Cache initializes\n3. Scheduler copies configurations\n\nRelations between Entities \n-------------------------\n1. RM includes one or multiple:\n   - Partitions \n   - Jobs\n   - Nodes \n   - Queues\n   \n2. One queue: \n   - Under one partition\n   - Under one RM.\n   \n3. One job: \n   - Under one queue (Job with same name can under different partitions)\n   - Under one partition\n\nRM registration: (TODO)\n----------------\n1. RM send registration\n2. If RM already registered, remove old one, including everything belong to RM.\n\nRM termination (TODO) \n--------------\nJust remove the old one.\n\nUpdate of queues (TODO) \n------------------------\nAdmin Service -> Cache\n\nAbout partition (TODO) \n-----------------------\nInternal partition need to be normalized, for example, RM specify node with partition = xyz. \nScheduler internally need to normalize it to <rm-id>_xyz\nThis need to be done by RMProxy\n\n")))}d.isMDXComponent=!0},202:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),b=a,h=u["".concat(c,".").concat(b)]||u[b]||p[b]||r;return t?o.a.createElement(h,i(i({ref:n},s),{},{components:t})):o.a.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<r;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);