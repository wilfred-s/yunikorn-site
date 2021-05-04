(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(202)),c={id:"configure_scheduler",title:"Configure Scheduler"},i={unversionedId:"setup/configure_scheduler",id:"version-0.8.0/setup/configure_scheduler",isDocsHomePage:!1,title:"Configure Scheduler",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/setup/configure_scheduler.md",slug:"/setup/configure_scheduler",permalink:"/docs/0.8.0/setup/configure_scheduler",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Build Local",permalink:"/docs/0.8.0/setup/build_local"},next:{title:"Deployment Guide",permalink:"/docs/0.8.0/setup/deployment"}},l=[{value:"Build docker image",id:"build-docker-image",children:[]},{value:"Create the ConfigMap",id:"create-the-configmap",children:[]},{value:"Attach ConfigMap Volume to the Scheduler Pod",id:"attach-configmap-volume-to-the-scheduler-pod",children:[]},{value:"Deploy the Scheduler",id:"deploy-the-scheduler",children:[]},{value:"Configuration Hot Refresh",id:"configuration-hot-refresh",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"deployment-of-yunikorn-using-a-configmap"},"Deployment of YuniKorn using a ConfigMap"),Object(a.b)("h2",{id:"build-docker-image"},"Build docker image"),Object(a.b)("p",null,"Under project root of the ",Object(a.b)("inlineCode",{parentName:"p"},"yunikorn-k8shim"),", run the command to build an image using the map for the configuration:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"make image\n")),Object(a.b)("p",null,"This command will build an image. The image will be tagged with a default version and image tag."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note")," the default build uses a hardcoded user and tag. You ",Object(a.b)("em",{parentName:"p"},"must")," update the ",Object(a.b)("inlineCode",{parentName:"p"},"IMAGE_TAG")," variable in the ",Object(a.b)("inlineCode",{parentName:"p"},"Makefile")," to push to an appropriate repository. "),Object(a.b)("h2",{id:"create-the-configmap"},"Create the ConfigMap"),Object(a.b)("p",null,"This must be done before deploying the scheduler. It requires a correctly setup kubernetes environment.\nThis kubernetes environment can be either local or remote. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"download configuration file if not available on the node to add to kubernetes:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -o queues.yaml https://raw.githubusercontent.com/apache/incubator-yunikorn-k8shim/master/conf/queues.yaml\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"create ConfigMap in kubernetes:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl create configmap yunikorn-configs --from-file=queues.yaml\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"check if the ConfigMap was created correctly:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl describe configmaps yunikorn-configs\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note")," if name of the ConfigMap is changed the volume in the scheduler yaml file must be updated to reference the new name otherwise the changes to the configuration will not be picked up. "),Object(a.b)("h2",{id:"attach-configmap-volume-to-the-scheduler-pod"},"Attach ConfigMap Volume to the Scheduler Pod"),Object(a.b)("p",null,"The ConfigMap is attached to the scheduler as a special volume. First step is to specify where to mount it in the pod:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"  volumeMounts:\n    - name: config-volume\n      mountPath: /etc/yunikorn/\n")),Object(a.b)("p",null,"Second step is to link the mount point back to the configuration map created in kubernetes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"  volumes:\n    - name: config-volume\n      configMap:\n        name: yunikorn-configs\n")),Object(a.b)("p",null,"Both steps are part of the scheduler yaml file, an example can be seen at ",Object(a.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/scheduler.yaml"},"scheduler.yaml"),"\nfor reference."),Object(a.b)("h2",{id:"deploy-the-scheduler"},"Deploy the Scheduler"),Object(a.b)("p",null,"The scheduler can be deployed with following command."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/scheduler.yaml\n")),Object(a.b)("h2",{id:"configuration-hot-refresh"},"Configuration Hot Refresh"),Object(a.b)("p",null,"YuniKorn supports to load configuration changes automatically from attached configmap. Simply update the content in the configmap,\nthat can be done either via Kubernetes dashboard UI or commandline. ",Object(a.b)("em",{parentName:"p"},"Note"),", changes made to the configmap might have some\ndelay to be picked up by the scheduler."))}p.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,m=d["".concat(c,".").concat(s)]||d[s]||b[s]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);