(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{202:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),c=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,l(l({ref:n},u),{},{components:t})):a.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),o=(t(0),t(202)),i={id:"run_flink",title:"Run Flink Jobs",description:"How to run Flink jobs with YuniKorn",image:"https://svn.apache.org/repos/asf/flink/site/img/logo/png/100/flink_squirrel_100_color.png",keywords:["spark"]},l={unversionedId:"user_guide/workloads/run_flink",id:"version-0.10.0/user_guide/workloads/run_flink",isDocsHomePage:!1,title:"Run Flink Jobs",description:"How to run Flink jobs with YuniKorn",source:"@site/versioned_docs/version-0.10.0/user_guide/workloads/run_flink.md",slug:"/user_guide/workloads/run_flink",permalink:"/docs/user_guide/workloads/run_flink",version:"0.10.0",sidebar:"version-0.10.0/docs",previous:{title:"Run Spark Jobs",permalink:"/docs/user_guide/workloads/run_spark"},next:{title:"Run Tensorflow Jobs",permalink:"/docs/user_guide/workloads/run_tf"}},s=[{value:"Standalone mode",id:"standalone-mode",children:[]},{value:"Native mode",id:"native-mode",children:[]}],u={rightToc:s};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's very easy to run ",Object(o.b)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," on Kubernetes with YuniKorn. Depending on which mode is\nused to run Flink on Kubernetes, the configuration is slight different."),Object(o.b)("h2",{id:"standalone-mode"},"Standalone mode"),Object(o.b)("p",null,"Please follow ",Object(o.b)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/ops/deployment/kubernetes.html"},"Kubernetes Setup")," to get details and examples of standalone deploy mode.\nIn this mode, we can directly add required labels (applicationId and queue) in Deployment/Job spec to run flink application with YuniKorn scheduler, as well as ",Object(o.b)("a",{parentName:"p",href:"#run-workloads-with-yunikorn-scheduler"},"Run workloads with YuniKorn Scheduler"),"."),Object(o.b)("h2",{id:"native-mode"},"Native mode"),Object(o.b)("p",null,"Please follow ",Object(o.b)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/ops/deployment/native_kubernetes.html"},"Native Kubernetes Setup")," to get details and examples of native deploy mode.\nRunning flink application with YuniKorn scheduler in native mode is only supported for flink 1.11 or above, we can leverage two flink configurations ",Object(o.b)("inlineCode",{parentName:"p"},"kubernetes.jobmanager.labels")," and ",Object(o.b)("inlineCode",{parentName:"p"},"kubernetes.taskmanager.labels")," to set the required labels.\nExamples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start a flink session")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./bin/kubernetes-session.sh \\\n  -Dkubernetes.cluster-id=<ClusterId> \\\n  -Dtaskmanager.memory.process.size=4096m \\\n  -Dkubernetes.taskmanager.cpu=2 \\\n  -Dtaskmanager.numberOfTaskSlots=4 \\\n  -Dresourcemanager.taskmanager-timeout=3600000 \\\n  -Dkubernetes.jobmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox \\\n  -Dkubernetes.taskmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start a flink application")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./bin/flink run-application -p 8 -t kubernetes-application \\\n  -Dkubernetes.cluster-id=<ClusterId> \\\n  -Dtaskmanager.memory.process.size=4096m \\\n  -Dkubernetes.taskmanager.cpu=2 \\\n  -Dtaskmanager.numberOfTaskSlots=4 \\\n  -Dkubernetes.container.image=<CustomImageName> \\\n  -Dkubernetes.jobmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox \\\n  -Dkubernetes.taskmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox \\\n  local:///opt/flink/usrlib/my-flink-job.jar\n")))}c.isMDXComponent=!0}}]);