(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),a=(t(0),t(202)),o={id:"k8shim",title:"Kubernetes Shim Design"},l={unversionedId:"design/k8shim",id:"version-0.9.0/design/k8shim",isDocsHomePage:!1,title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/design/k8shim.md",slug:"/design/k8shim",permalink:"/docs/0.9.0/design/k8shim",version:"0.9.0",sidebar:"version-0.9.0/docs",previous:{title:"Scheduler Core Design",permalink:"/docs/0.9.0/design/scheduler_core_design"},next:{title:"Cross Queue Preemption",permalink:"/docs/0.9.0/design/cross_queue_preemption"}},s=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",children:[]},{value:"The admission controller",id:"the-admission-controller",children:[{value:"Admission controller deployment",id:"admission-controller-deployment",children:[]}]}],c={rightToc:s};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Github repo: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"https://github.com/apache/incubator-yunikorn-k8shim")),Object(a.b)("p",null,"Please read the ",Object(a.b)("a",{parentName:"p",href:"/docs/0.9.0/design/architecture"},"architecture")," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."),Object(a.b)("h2",{id:"the-kubernetes-shim"},"The Kubernetes shim"),Object(a.b)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."),Object(a.b)("h2",{id:"the-admission-controller"},"The admission controller"),Object(a.b)("p",null,"The admission controller runs in a separate pod, it runs a\n",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"mutation webhook"),"\nand a ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"validation webhook"),", where:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"mutation webhook")," mutates pod spec by:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"adding ",Object(a.b)("inlineCode",{parentName:"li"},"schedulerName: yunikorn"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"by explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler"))),Object(a.b)("li",{parentName:"ul"},"adding ",Object(a.b)("inlineCode",{parentName:"li"},"applicationId")," label",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"when a label ",Object(a.b)("inlineCode",{parentName:"li"},"applicationId")," exists, reuse the given applicationId"),Object(a.b)("li",{parentName:"ul"},"when a label ",Object(a.b)("inlineCode",{parentName:"li"},"spark-app-selector")," exists, reuse the given spark app ID"),Object(a.b)("li",{parentName:"ul"},"otherwise, assign a generated application ID for this pod, using convention: ",Object(a.b)("inlineCode",{parentName:"li"},"yunikorn-<namespace>-autogen"),". this is unique per namespace. "))),Object(a.b)("li",{parentName:"ul"},"adding ",Object(a.b)("inlineCode",{parentName:"li"},"queue")," label",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"when a label ",Object(a.b)("inlineCode",{parentName:"li"},"queue")," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored"),Object(a.b)("li",{parentName:"ul"},"otherwise, adds ",Object(a.b)("inlineCode",{parentName:"li"},"queue: root.default")))))),Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"validation webhook")," validates the configuration set in the configmap",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"this is used to prevent writing malformed configuration into the configmap"),Object(a.b)("li",{parentName:"ul"},"the validation webhook calls scheduler ",Object(a.b)("a",{parentName:"li",href:"/docs/0.9.0/api/scheduler#configuration-validation"},"validation REST API")," to validate configmap updates")))),Object(a.b)("h3",{id:"admission-controller-deployment"},"Admission controller deployment"),Object(a.b)("p",null,"Currently, the deployment of the admission-controller is done as a ",Object(a.b)("inlineCode",{parentName:"p"},"post-start")," hook in the scheduler deployment, similarly, the\nuninstall is done as a ",Object(a.b)("inlineCode",{parentName:"p"},"pre-stop")," hook. See the related code ",Object(a.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/56e580af24ed3433e7d73d9ea556b19ad7b74337/helm-charts/yunikorn/templates/deployment.yaml#L80-L85"},"here"),".\nDuring the installation, it is expected to always co-locate the admission controller with the scheduler pod, this is done\nby adding the pod-affinity in the admission-controller pod, like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'podAffinity:\n  requiredDuringSchedulingIgnoredDuringExecution:\n    - labelSelector:\n      matchExpressions:\n      - key: component\n        operator: In\n        values:\n        - yunikorn-scheduler\n      topologyKey: "kubernetes.io/hostname"\n')),Object(a.b)("p",null,"it also tolerates all the taints in case the scheduler pod has some toleration set."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'tolerations:\n- operator: "Exists"\n')))}u.isMDXComponent=!0},202:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return t?i.a.createElement(h,l(l({ref:n},c),{},{components:t})):i.a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);