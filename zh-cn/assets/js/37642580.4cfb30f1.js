"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[385],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,s=d["".concat(o,".").concat(c)]||d[c]||k[c]||l;return n?r.createElement(s,u(u({ref:t},m),{},{components:n})):r.createElement(s,u({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var p=2;p<l;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),u=["components"],i={id:"performance_tutorial",title:"\u57fa\u51c6\u6d4b\u8bd5\u6559\u7a0b",keywords:["\u6027\u80fd","\u6559\u7a0b"]},o=void 0,p={unversionedId:"performance/performance_tutorial",id:"version-1.1.0/performance/performance_tutorial",title:"\u57fa\u51c6\u6d4b\u8bd5\u6559\u7a0b",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.1.0/performance/performance_tutorial.md",sourceDirName:"performance",slug:"/performance/performance_tutorial",permalink:"/zh-cn/docs/performance/performance_tutorial",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"performance_tutorial",title:"\u57fa\u51c6\u6d4b\u8bd5\u6559\u7a0b",keywords:["\u6027\u80fd","\u6559\u7a0b"]},sidebar:"docs",previous:{title:"\u4f7f\u7528 Kubemark \u8bc4\u4f30 YuniKorn \u7684\u6027\u80fd",permalink:"/zh-cn/docs/performance/evaluate_perf_function_with_kubemark"},next:{title:"\u8c03\u5ea6\u7a0b\u5e8f\u6307\u6807",permalink:"/zh-cn/docs/performance/metrics"}},m={},k=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:2},{value:"1. \u8bbe\u7f6e/etc/sysctl.conf",id:"1-\u8bbe\u7f6eetcsysctlconf",level:3},{value:"2. \u8bbe\u7f6e/etc/security/limits.conf",id:"2-\u8bbe\u7f6eetcsecuritylimitsconf",level:3},{value:"\u90e8\u7f72\u5de5\u4f5c\u6d41",id:"\u90e8\u7f72\u5de5\u4f5c\u6d41",level:2},{value:"\u8bbe\u7f6e Kubemark",id:"\u8bbe\u7f6e-kubemark",level:2},{value:"1. \u6784\u5efa\u955c\u50cf",id:"1-\u6784\u5efa\u955c\u50cf",level:3},{value:"\u514b\u9686kubernetes\u4ed3\u5e93\uff0c\u5e76\u6784\u5efakubemark\u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u514b\u9686kubernetes\u4ed3\u5e93\u5e76\u6784\u5efakubemark\u4e8c\u8fdb\u5236\u6587\u4ef6",level:5},{value:"\u5c06kubemark\u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230\u955c\u50cf\u6587\u4ef6\u5939\u5e76\u6784\u5efakubemark docker\u955c\u50cf",id:"\u5c06kubemark\u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230\u955c\u50cf\u6587\u4ef6\u5939\u5e76\u6784\u5efakubemark-docker\u955c\u50cf",level:5},{value:"2. \u5b89\u88c5Kubermark",id:"2-\u5b89\u88c5kubermark",level:3},{value:"\u521b\u5efakubemark\u547d\u540d\u7a7a\u95f4",id:"\u521b\u5efakubemark\u547d\u540d\u7a7a\u95f4",level:5},{value:"\u521b\u5efaconfigmap",id:"\u521b\u5efaconfigmap",level:5},{value:"\u521b\u5efasecret",id:"\u521b\u5efasecret",level:5},{value:"3. \u6807\u7b7e\u8282\u70b9",id:"3-\u6807\u7b7e\u8282\u70b9",level:3},{value:"4. \u90e8\u7f72Kubemark",id:"4-\u90e8\u7f72kubemark",level:3},{value:"\u90e8\u7f72 YuniKorn",id:"\u90e8\u7f72-yunikorn",level:2},{value:"\u4f7f\u7528helm\u5b89\u88c5YuniKorn",id:"\u4f7f\u7528helm\u5b89\u88c5yunikorn",level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4},{value:"\u4f7f\u7528\u672c\u5730\u7248\u672c\u5e93\u5b89\u88c5YuniKorn",id:"\u4f7f\u7528\u672c\u5730\u7248\u672c\u5e93\u5b89\u88c5yunikorn",level:4},{value:"\u8bbe\u7f6ePrometheus",id:"\u8bbe\u7f6eprometheus",level:2},{value:"1. \u4e0b\u8f7dPrometheus\u7248\u672c",id:"1-\u4e0b\u8f7dprometheus\u7248\u672c",level:3},{value:"2. \u914d\u7f6eprometheus.yml",id:"2-\u914d\u7f6eprometheusyml",level:3},{value:"3. \u542f\u52a8Prometheus",id:"3-\u542f\u52a8prometheus",level:3},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",level:2},{value:"\u6536\u96c6\u548c\u89c2\u5bdfYuniKorn\u6307\u6807",id:"\u6536\u96c6\u548c\u89c2\u5bdfyunikorn\u6307\u6807",level:2},{value:"\u6027\u80fd\u8c03\u4f18",id:"\u6027\u80fd\u8c03\u4f18",level:2},{value:"Kubernetes",id:"kubernetes",level:3},{value:"kubeadm",id:"kubeadm",level:4},{value:"CNI",id:"cni",level:4},{value:"Api-Server",id:"api-server",level:4},{value:"Controller-Manager",id:"controller-manager",level:4},{value:"kubelet",id:"kubelet",level:4},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],d={toc:k};function c(e){var t=e.components,i=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"YuniKorn\u793e\u533a\u4e0d\u65ad\u4f18\u5316\u8c03\u5ea6\u5668\u7684\u6027\u80fd\uff0c\u786e\u4fddYuniKorn\u6ee1\u8db3\u5927\u89c4\u6a21\u6279\u5904\u7406\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6027\u80fd\u8981\u6c42\u3002 \u56e0\u6b64\uff0c\u793e\u533a\u4e3a\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u6784\u5efa\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u8de8\u7248\u672c\u91cd\u7528\u3002 \u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u6240\u6709\u8fd9\u4e9b\u5de5\u5177\u548c\u8fd0\u884c\u5b83\u4eec\u7684\u6b65\u9aa4\u3002"),(0,l.kt)("h2",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6027\u80fd\u7ed3\u679c\u56e0\u5e95\u5c42\u786c\u4ef6\u800c\u5f02\u3002 \u6587\u6863\u4e2d\u53d1\u5e03\u7684\u6240\u6709\u7ed3\u679c\u53ea\u80fd\u4f5c\u4e3a\u53c2\u8003\u3002 \u6211\u4eec\u9f13\u52b1\u6bcf\u4e2a\u4eba\u5728\u81ea\u5df1\u7684\u73af\u5883\u4e2d\u8fd0\u884c\u7c7b\u4f3c\u7684\u6d4b\u8bd5\uff0c\u4ee5\u4fbf\u6839\u636e\u60a8\u81ea\u5df1\u7684\u786c\u4ef6\u83b7\u5f97\u7ed3\u679c\u3002 \u672c\u6587\u6863\u4ec5\u7528\u4e8e\u6f14\u793a\u76ee\u7684\u3002"),(0,l.kt)("p",null,"\u672c\u6b21\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u7684\u670d\u52a1\u5668\u5217\u8868\u662f\uff08\u975e\u5e38\u611f\u8c22",(0,l.kt)("a",{parentName:"p",href:"http://www.ntcu.edu.tw/newweb/index.htm"},"\u56fd\u7acb\u53f0\u4e2d\u6559\u80b2\u5927\u5b66"),", ",(0,l.kt)("a",{parentName:"p",href:"http://www.ntcu.edu.tw/kclai/"},"Kuan-Chou Lai")," \u4e3a\u8fd0\u884c\u6d4b\u8bd5\u63d0\u4f9b\u8fd9\u4e9b\u670d\u52a1\u5668):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u673a\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e0b\u8f7d/\u4e0a\u4f20(Mbps)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HP"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"36G"),(0,l.kt)("td",{parentName:"tr",align:null},"525.74/509.86")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HP"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"30G"),(0,l.kt)("td",{parentName:"tr",align:null},"564.84/461.82")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HP"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"30G"),(0,l.kt)("td",{parentName:"tr",align:null},"431.06/511.69")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HP"),(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"32G"),(0,l.kt)("td",{parentName:"tr",align:null},"577.31/576.21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"38G"),(0,l.kt)("td",{parentName:"tr",align:null},"432.11/4.15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"36G"),(0,l.kt)("td",{parentName:"tr",align:null},"714.84/4.14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"42G"),(0,l.kt)("td",{parentName:"tr",align:null},"458.38/4.13")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"42G"),(0,l.kt)("td",{parentName:"tr",align:null},"445.42/4.13")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"32G"),(0,l.kt)("td",{parentName:"tr",align:null},"400.59/4.13")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"12G"),(0,l.kt)("td",{parentName:"tr",align:null},"499.87/4.13")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IBM blade H23"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32G"),(0,l.kt)("td",{parentName:"tr",align:null},"468.51/4.14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WS660T"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"16G"),(0,l.kt)("td",{parentName:"tr",align:null},"87.73/86.30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ASUSPRO D640MB_M640SA"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"8G"),(0,l.kt)("td",{parentName:"tr",align:null},"92.43/93.77")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PRO E500 G6_WS720T"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"8G"),(0,l.kt)("td",{parentName:"tr",align:null},"90/87.18")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WS E500 G6_WS720T"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"40G"),(0,l.kt)("td",{parentName:"tr",align:null},"92.61/89.78")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E500 G5"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8G"),(0,l.kt)("td",{parentName:"tr",align:null},"91.34/85.84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WS E500 G5_WS690T"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"16G"),(0,l.kt)("td",{parentName:"tr",align:null},"92.2/93.76")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WS E500 G5_WS690T"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32G"),(0,l.kt)("td",{parentName:"tr",align:null},"91/89.41")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WS E900 G4_SW980T"),(0,l.kt)("td",{parentName:"tr",align:null},"80"),(0,l.kt)("td",{parentName:"tr",align:null},"512G"),(0,l.kt)("td",{parentName:"tr",align:null},"89.24/87.97")))),(0,l.kt)("p",null,"\u6bcf\u4e2a\u670d\u52a1\u5668\u90fd\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u5426\u5219\u7531\u4e8e\u7528\u6237/\u8fdb\u7a0b/\u6253\u5f00\u6587\u4ef6\u7684\u6570\u91cf\u6709\u9650\uff0c\u5927\u89c4\u6a21\u6d4b\u8bd5\u53ef\u80fd\u4f1a\u5931\u8d25\u3002"),(0,l.kt)("h3",{id:"1-\u8bbe\u7f6eetcsysctlconf"},"1. \u8bbe\u7f6e/etc/sysctl.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kernel.pid_max=400000\nfs.inotify.max_user_instances=50000\nfs.inotify.max_user_watches=52094\n")),(0,l.kt)("h3",{id:"2-\u8bbe\u7f6eetcsecuritylimitsconf"},"2. \u8bbe\u7f6e/etc/security/limits.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* soft nproc 4000000\n* hard nproc 4000000\nroot soft nproc 4000000\nroot hard nproc 4000000\n* soft nofile 50000\n* hard nofile 50000\nroot soft nofile 50000\nroot hard nofile 50000\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u90e8\u7f72\u5de5\u4f5c\u6d41"},"\u90e8\u7f72\u5de5\u4f5c\u6d41"),(0,l.kt)("p",null,"\u5728\u8fdb\u5165\u7ec6\u8282\u4e4b\u524d\uff0c\u8fd9\u91cc\u662f\u6211\u4eec\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u7684\u4e00\u822c\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Kubernetes"},"\u6b65\u9aa4 1"),": \u6b63\u786e\u914d\u7f6eKubernetes API\u670d\u52a1\u5668\u548c\u63a7\u5236\u5668\u7ba1\u7406\u5668\uff0c\u7136\u540e\u6dfb\u52a0\u5de5\u4f5c\u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Setup-Kubemark"},"\u6b65\u9aa4 2"),": \u90e8\u7f72\u7a7apod\uff0c\u5c06\u6a21\u62df\u5de5\u4f5c\u8282\u70b9\uff0c\u547d\u540d\u7a7a\u8282\u70b9\u3002 \u5728\u6240\u6709\u7a7a\u8282\u70b9\u90fd\u5904\u4e8e\u5c31\u7eea\u72b6\u6001\u540e\uff0c\u6211\u4eec\u9700\u8981\u5c01\u9501(cordon)\u6240\u6709\u672c\u5730\u8282\u70b9\uff0c\u8fd9\u4e9b\u672c\u5730\u8282\u70b9\u662f\u96c6\u7fa4\u4e2d\u7684\u7269\u7406\u5b58\u5728\uff0c\u800c\u4e0d\u662f\u6a21\u62df\u8282\u70b9\uff0c\u4ee5\u907f\u514d\u6211\u4eec\u5c06\u6d4b\u8bd5\u5de5\u4f5c\u8d1f\u8f7d pod \u5206\u914d\u7ed9\u672c\u5730\u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Deploy-YuniKorn"},"\u6b65\u9aa4 3"),": \u5728\u4e3b\u8282\u70b9\u4e0a\u4f7f\u7528Helm chart\u90e8\u7f72YuniKorn\uff0c\u5e76\u5c06 Deployment \u7f29\u51cf\u4e3a 0 \u526f\u672c\uff0c\u5e76\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"prometheus.yml"),"\u4e2d ",(0,l.kt)("a",{parentName:"li",href:"#Setup-Prometheus"},"\u4fee\u6539\u7aef\u53e3")," \u4ee5\u5339\u914d\u670d\u52a1\u7684\u7aef\u53e3\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Run-tests"},"\u6b65\u9aa4 4"),": \u90e8\u7f7250k Nginx pod\u8fdb\u884c\u6d4b\u8bd5\uff0cAPI\u670d\u52a1\u5668\u5c06\u521b\u5efa\u5b83\u4eec\u3002 \u4f46\u662f\u7531\u4e8eYuniKorn\u8c03\u5ea6\u7a0b\u5e8fDeployment\u5df2\u7ecf\u88ab\u7f29\u51cf\u52300\u4e2a\u526f\u672c\uff0c\u6240\u6709\u7684Nginx pod\u90fd\u5c06\u505c\u7559\u5728\u7b49\u5f85\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh-cn/docs/user_guide/trouble_shooting#restart-the-scheduler"},"\u6b65\u9aa4 5"),": \u5c06YuniKorn\u90e8\u7f72\u6269\u5c55\u56de1\u4e2a\u526f\u672c\uff0c\u5e76\u5c01\u9501\u4e3b\u8282\u70b9\u4ee5\u907f\u514dYuniKorn \u5728\u90a3\u91cc\u5206\u914dNginx pod\u3002 \u5728\u8fd9\u4e00\u6b65\u4e2d\uff0cYuniKorn\u5c06\u5f00\u59cb\u6536\u96c6\u6307\u6807\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Collect-and-Observe-YuniKorn-metrics"},"\u6b65\u9aa4 6"),": \u89c2\u5bdfPrometheus UI\u4e2d\u516c\u5f00\u7684\u6307\u6807\u3002")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u8bbe\u7f6e-kubemark"},"\u8bbe\u7f6e Kubemark"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/tree/master/test/kubemark"},"Kubemark"),"\u662f\u4e00\u4e2a\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177\uff0c\u5141\u8bb8\u7528\u6237\u5728\u6a21\u62df\u96c6\u7fa4\u4e0a\u8fd0\u884c\u5b9e\u9a8c\u3002 \u4e3b\u8981\u7528\u4f8b\u662f\u53ef\u6269\u5c55\u6027\u6d4b\u8bd5\u3002 \u57fa\u672c\u601d\u60f3\u662f\u5728\u4e00\u4e2a\u7269\u7406\u8282\u70b9\u4e0a\u8fd0\u884c\u6570\u5341\u6216\u6570\u767e\u4e2a\u5047kubelet\u8282\u70b9\uff0c\u4ee5\u6a21\u62df\u5927\u89c4\u6a21\u96c6\u7fa4\u3002 \u5728\u6211\u4eec\u7684\u6d4b\u8bd5\u4e2d\uff0c\u6211\u4eec\u5229\u7528 Kubemark \u5728\u5c11\u4e8e20\u4e2a\u7269\u7406\u8282\u70b9\u4e0a\u6a21\u62df\u591a\u8fbe4K\u8282\u70b9\u7684\u96c6\u7fa4\u3002"),(0,l.kt)("h3",{id:"1-\u6784\u5efa\u955c\u50cf"},"1. \u6784\u5efa\u955c\u50cf"),(0,l.kt)("h5",{id:"\u514b\u9686kubernetes\u4ed3\u5e93\u5e76\u6784\u5efakubemark\u4e8c\u8fdb\u5236\u6587\u4ef6"},"\u514b\u9686kubernetes\u4ed3\u5e93\uff0c\u5e76\u6784\u5efakubemark\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/kubernetes/kubernetes.git\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd kubernetes\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'KUBE_BUILD_PLATFORMS=linux/amd64 make kubemark GOFLAGS=-v GOGCFLAGS="-N -l"\n')),(0,l.kt)("h5",{id:"\u5c06kubemark\u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230\u955c\u50cf\u6587\u4ef6\u5939\u5e76\u6784\u5efakubemark-docker\u955c\u50cf"},"\u5c06kubemark\u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230\u955c\u50cf\u6587\u4ef6\u5939\u5e76\u6784\u5efakubemark docker\u955c\u50cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cp _output/bin/kubemark cluster/images/kubemark\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"IMAGE_TAG=v1.XX.X make build\n")),(0,l.kt)("p",null,"\u5b8c\u6210\u6b64\u6b65\u9aa4\u540e\uff0c\u60a8\u53ef\u4ee5\u83b7\u5f97\u53ef\u4ee5\u6a21\u62df\u96c6\u7fa4\u8282\u70b9\u7684kubemark\u955c\u50cf\u3002 \u60a8\u53ef\u4ee5\u5c06\u5176\u4e0a\u4f20\u5230Docker-Hub\u6216\u4ec5\u5728\u672c\u5730\u90e8\u7f72\u3002"),(0,l.kt)("h3",{id:"2-\u5b89\u88c5kubermark"},"2. \u5b89\u88c5Kubermark"),(0,l.kt)("h5",{id:"\u521b\u5efakubemark\u547d\u540d\u7a7a\u95f4"},"\u521b\u5efakubemark\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create ns kubemark\n")),(0,l.kt)("h5",{id:"\u521b\u5efaconfigmap"},"\u521b\u5efaconfigmap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl create configmap node-configmap -n kubemark --from-literal=content.type="test-cluster"\n')),(0,l.kt)("h5",{id:"\u521b\u5efasecret"},"\u521b\u5efasecret"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create secret generic kubeconfig --type=Opaque --namespace=kubemark --from-file=kubelet.kubeconfig={kubeconfig_file_path} --from-file=kubeproxy.kubeconfig={kubeconfig_file_path}\n")),(0,l.kt)("h3",{id:"3-\u6807\u7b7e\u8282\u70b9"},"3. \u6807\u7b7e\u8282\u70b9"),(0,l.kt)("p",null,"\u6211\u4eec\u9700\u8981\u7ed9\u6240\u6709\u7684\u539f\u751f\u8282\u70b9\u6253\u4e0a\u6807\u7b7e\uff0c\u5426\u5219\u8c03\u5ea6\u5668\u53ef\u80fd\u4f1a\u5c06\u7a7apod\u5206\u914d\u7ed9\u5176\u4ed6\u6a21\u62df\u7684\u7a7a\u8282\u70b9\u3002 \u6211\u4eec\u53ef\u4ee5\u5229\u7528yaml\u4e2d\u7684\u8282\u70b9\u9009\u62e9\u5668\u5c06\u7a7apod\u5206\u914d\u7ed9\u672c\u5730\u8282\u70b9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl label node {node name} tag=tagName\n")),(0,l.kt)("h3",{id:"4-\u90e8\u7f72kubemark"},"4. \u90e8\u7f72Kubemark"),(0,l.kt)("p",null,"hollow-node.yaml\u5982\u4e0b\u6240\u793a\uff0c\u6211\u4eec\u53ef\u4ee5\u914d\u7f6e\u4e00\u4e9b\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: ReplicationController\nmetadata:\n  name: hollow-node\n  namespace: kubemark\nspec:\n  replicas: 2000  # \u8981\u6a21\u62df\u7684\u8282\u70b9\u6570\n  selector:\n      name: hollow-node\n  template:\n    metadata:\n      labels:\n        name: hollow-node\n    spec:\n      nodeSelector:  # \u5229\u7528\u6807\u7b7e\u5206\u914d\u7ed9\u672c\u5730\u8282\u70b9\n        tag: tagName  \n      initContainers:\n      - name: init-inotify-limit\n        image: docker.io/busybox:latest\n        imagePullPolicy: IfNotPresent\n        command: ['sysctl', '-w', 'fs.inotify.max_user_instances=200'] # \u8bbe\u7f6e\u4e3a\u4e0e\u5b9e\u9645\u8282\u70b9\u4e2d\u7684max_user_instance\u76f8\u540c\n        securityContext:\n          privileged: true\n      volumes:\n      - name: kubeconfig-volume\n        secret:\n          secretName: kubeconfig\n      - name: logs-volume\n        hostPath:\n          path: /var/log\n      containers:\n      - name: hollow-kubelet\n        image: 0yukali0/kubemark:1.20.10 # \u60a8\u6784\u5efa\u7684kubemark\u6620\u50cf \n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 4194\n        - containerPort: 10250\n        - containerPort: 10255\n        env:\n        - name: NODE_NAME\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.name\n        command:\n        - /kubemark\n        args:\n        - --morph=kubelet\n        - --name=$(NODE_NAME)\n        - --kubeconfig=/kubeconfig/kubelet.kubeconfig\n        - --alsologtostderr\n        - --v=2\n        volumeMounts:\n        - name: kubeconfig-volume\n          mountPath: /kubeconfig\n          readOnly: true\n        - name: logs-volume\n          mountPath: /var/log\n        resources:\n          requests:    # \u7a7apod\u7684\u8d44\u6e90\uff0c\u53ef\u4ee5\u4fee\u6539\u3002\n            cpu: 20m\n            memory: 50M\n        securityContext:\n          privileged: true\n      - name: hollow-proxy\n        image: 0yukali0/kubemark:1.20.10 # \u60a8\u6784\u5efa\u7684kubemark\u6620\u50cf \n        imagePullPolicy: IfNotPresent\n        env:\n        - name: NODE_NAME\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.name\n        command:\n        - /kubemark\n        args:\n        - --morph=proxy\n        - --name=$(NODE_NAME)\n        - --use-real-proxier=false\n        - --kubeconfig=/kubeconfig/kubeproxy.kubeconfig\n        - --alsologtostderr\n        - --v=2\n        volumeMounts:\n        - name: kubeconfig-volume\n          mountPath: /kubeconfig\n          readOnly: true\n        - name: logs-volume\n          mountPath: /var/log\n        resources:  # \u7a7apod\u7684\u8d44\u6e90\uff0c\u53ef\u4ee5\u4fee\u6539\u3002\n          requests:\n            cpu: 20m\n            memory: 50M\n      tolerations:\n      - effect: NoExecute\n        key: node.kubernetes.io/unreachable\n        operator: Exists\n      - effect: NoExecute\n        key: node.kubernetes.io/not-ready\n        operator: Exists\n")),(0,l.kt)("p",null,"\u5b8c\u6210\u7f16\u8f91\u540e\uff0c\u5c06\u5176\u5e94\u7528\u4e8e\u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f hollow-node.yaml\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u90e8\u7f72-yunikorn"},"\u90e8\u7f72 YuniKorn"),(0,l.kt)("h4",{id:"\u4f7f\u7528helm\u5b89\u88c5yunikorn"},"\u4f7f\u7528helm\u5b89\u88c5YuniKorn"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7528 Helm \u5b89\u88c5 YuniKorn\uff0c\u8bf7\u53c2\u8003\u8fd9\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/docs/#install"},"\u6587\u6863"),"\u3002 \u6211\u4eec\u9700\u8981\u6839\u636e\u9ed8\u8ba4\u914d\u7f6e\u8c03\u6574\u4e00\u4e9b\u53c2\u6570\u3002 \u6211\u4eec\u5efa\u8bae\u514b\u9686",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release"},"\u53d1\u5e03\u4ed3\u5e93"),"\u5e76\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"value.yaml"),"\u4e2d\u7684\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/yunikorn-release.git\ncd helm-charts/yunikorn\n")),(0,l.kt)("h4",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value.yaml"),"\u4e2d\u7684\u4fee\u6539\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u8c03\u5ea6\u7a0b\u5e8f pod \u7684\u5185\u5b58/cpu \u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u7981\u7528 admission controller"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u5e94\u7528\u6392\u5e8f\u7b56\u7565\u8bbe\u7f6e\u4e3a FAIR")),(0,l.kt)("p",null,"\u8bf7\u53c2\u9605\u4ee5\u4e0b\u66f4\u6539\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"resources:\n  requests:\n    cpu: 14\n    memory: 16Gi\n  limits:\n    cpu: 14\n    memory: 16Gi\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"embedAdmissionController: false\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"configuration: |\n  partitions:\n    -\n      name: default\n      queues:\n        - name: root\n          submitacl: '*'\n          queues:\n            -\n              name: sandbox\n              properties:\n                application.sort.policy: fair\n")),(0,l.kt)("h4",{id:"\u4f7f\u7528\u672c\u5730\u7248\u672c\u5e93\u5b89\u88c5yunikorn"},"\u4f7f\u7528\u672c\u5730\u7248\u672c\u5e93\u5b89\u88c5YuniKorn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Helm install yunikorn . --namespace yunikorn\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u8bbe\u7f6eprometheus"},"\u8bbe\u7f6ePrometheus"),(0,l.kt)("p",null,"YuniKorn\u901a\u8fc7Prometheus\u516c\u5f00\u5176\u8c03\u5ea6\u6307\u6807\u3002 \u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2aPrometheus\u670d\u52a1\u5668\u6765\u6536\u96c6\u8fd9\u4e9b\u6307\u6807\u3002"),(0,l.kt)("h3",{id:"1-\u4e0b\u8f7dprometheus\u7248\u672c"},"1. \u4e0b\u8f7dPrometheus\u7248\u672c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wget https://github.com/prometheus/prometheus/releases/download/v2.30.3/prometheus-2.30.3.linux-amd64.tar.gz\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tar xvfz prometheus-*.tar.gz\ncd prometheus-*\n")),(0,l.kt)("h3",{id:"2-\u914d\u7f6eprometheusyml"},"2. \u914d\u7f6eprometheus.yml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['docker.for.mac.host.internal:9080'] \n    # 9080\u4e3a\u5185\u90e8\u7aef\u53e3\uff0c\u9700\u8981\u7aef\u53e3\u8f6c\u53d1\u6216\u4fee\u65399080\u4e3a\u670d\u52a1\u7aef\u53e3\n")),(0,l.kt)("h3",{id:"3-\u542f\u52a8prometheus"},"3. \u542f\u52a8Prometheus"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./prometheus --config.file=prometheus.yml\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u8fd0\u884c\u6d4b\u8bd5"},"\u8fd0\u884c\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u73af\u5883\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u8fd0\u884c\u5de5\u4f5c\u8d1f\u8f7d\u5e76\u6536\u96c6\u7ed3\u679c\u4e86\u3002 YuniKorn\u793e\u533a\u6709\u4e00\u4e9b\u6709\u7528\u7684\u5de5\u5177\u6765\u8fd0\u884c\u5de5\u4f5c\u8d1f\u8f7d\u548c\u6536\u96c6\u6307\u6807\uff0c\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u5c06\u5728\u6b64\u5904\u53d1\u5e03\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u6536\u96c6\u548c\u89c2\u5bdfyunikorn\u6307\u6807"},"\u6536\u96c6\u548c\u89c2\u5bdfYuniKorn\u6307\u6807"),(0,l.kt)("p",null,"Prometheus \u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8f7b\u677e\u6536\u96c6 YuniKorn \u6307\u6807\u3002 \u8fd9\u662f YuniKorn \u6307\u6807\u7684",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/performance/metrics"},"\u6587\u6863"),"\u3002 YuniKorn \u8ddf\u8e2a\u4e00\u4e9b\u5173\u952e\u8c03\u5ea6\u6307\u6807\uff0c\u8fd9\u4e9b\u6307\u6807\u8861\u91cf\u4e00\u4e9b\u5173\u952e\u8c03\u5ea6\u8def\u5f84\u7684\u5ef6\u8fdf\u3002 \u8fd9\u4e9b\u6307\u6807\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scheduling_latency_seconds:")," \u4e3b\u8c03\u5ea6\u4f8b\u7a0b\u7684\u5ef6\u8fdf\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"app_sorting_latency_seconds"),": \u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u6392\u5e8f\u7684\u5ef6\u8fdf\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"node_sorting_latency_seconds"),": \u6240\u6709\u8282\u70b9\u6392\u5e8f\u7684\u5ef6\u8fdf\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"queue_sorting_latency_seconds"),": \u6240\u6709\u961f\u5217\u6392\u5e8f\u7684\u5ef6\u8fdf\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"container_allocation_attempt_total"),": \u5c1d\u8bd5\u5206\u914d\u5bb9\u5668\u7684\u603b\u6b21\u6570\u3002 \u5c1d\u8bd5\u72b6\u6001\u5305\u62ec ",(0,l.kt)("inlineCode",{parentName:"li"},"allocated"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"rejected"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"error"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"released"),"\u3002 \u8be5\u6307\u6807\u4ec5\u589e\u52a0\u3002")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728Prometheus UI\u4e0a\u8f7b\u677e\u9009\u62e9\u548c\u751f\u6210\u56fe\u5f62\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Prometheus Metrics List",src:n(2217).Z,width:"1189",height:"640"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u6027\u80fd\u8c03\u4f18"},"\u6027\u80fd\u8c03\u4f18"),(0,l.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7684 K8s \u8bbe\u7f6e\u9650\u5236\u4e86\u5e76\u53d1\u8bf7\u6c42\uff0c\u8fd9\u9650\u5236\u4e86\u96c6\u7fa4\u7684\u6574\u4f53\u541e\u5410\u91cf\u3002 \u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u9700\u8981\u8c03\u6574\u7684\u53c2\u6570\uff0c\u4ee5\u63d0\u9ad8\u96c6\u7fa4\u7684\u6574\u4f53\u541e\u5410\u91cf\u3002"),(0,l.kt)("h4",{id:"kubeadm"},"kubeadm"),(0,l.kt)("p",null,"\u8bbe\u7f6epod\u7f51\u7edc\u63a9\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubeadm init --pod-network-cidr=10.244.0.0/8\n")),(0,l.kt)("h4",{id:"cni"},"CNI"),(0,l.kt)("p",null,"\u4fee\u6539CNI\u63a9\u7801\u548c\u8d44\u6e90\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  net-conf.json: |\n    {\n      "Network": "10.244.0.0/8",\n      "Backend": {\n        "Type": "vxlan"\n      }\n    }\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  resources:\n    requests:\n      cpu: "100m"\n      memory: "200Mi"\n    limits:\n      cpu: "100m"\n      memory: "200Mi"\n')),(0,l.kt)("h4",{id:"api-server"},"Api-Server"),(0,l.kt)("p",null,"\u5728 Kubernetes API \u670d\u52a1\u5668\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4fee\u6539\u4e24\u4e2a\u53c2\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"max-mutating-requests-inflight"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"max-requests-inflight"),"\u3002 \u8fd9\u4e24\u4e2a\u53c2\u6570\u4ee3\u8868API\u8bf7\u6c42\u5e26\u5bbd\u3002 \u56e0\u4e3a\u6211\u4eec\u4f1a\u4ea7\u751f\u5927\u91cf\u7684Pod\u8bf7\u6c42\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u589e\u52a0\u8fd9\u4e24\u4e2a\u53c2\u6570\u3002\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifest/kube-apiserver.yaml"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--max-mutating-requests-inflight=3000\n--max-requests-inflight=3000\n")),(0,l.kt)("h4",{id:"controller-manager"},"Controller-Manager"),(0,l.kt)("p",null,"\u5728Kubernetes\u63a7\u5236\u5668\u7ba1\u7406\u5668\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u589e\u52a0\u4e09\u4e2a\u53c2\u6570\u7684\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"kube-api-burst")," ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-api-qps"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-api-burst"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"kube-api-qps"),"\u63a7\u5236\u670d\u52a1\u5668\u7aef\u8bf7\u6c42\u5e26\u5bbd\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size"),"\u8868\u793a\u8282\u70b9 CIDR\u3002 \u4e3a\u4e86\u6269\u5c55\u5230\u6570\u5343\u4e2a\u8282\u70b9\uff0c\u5b83\u4e5f\u9700\u8981\u589e\u52a0\u3002"),(0,l.kt)("p",null,"Modify ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifest/kube-controller-manager.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--node-cidr-mask-size=21 //log2(\u96c6\u7fa4\u4e2d\u7684\u6700\u5927pod\u6570)\n--kube-api-burst=3000\n--kube-api-qps=3000\n")),(0,l.kt)("h4",{id:"kubelet"},"kubelet"),(0,l.kt)("p",null,"\u5728\u5355\u4e2a\u5de5\u4f5c\u8282\u70b9\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u9ed8\u8ba4\u8fd0\u884c110\u4e2apod\u3002 \u4f46\u662f\u4e3a\u4e86\u83b7\u5f97\u66f4\u9ad8\u7684\u8282\u70b9\u8d44\u6e90\u5229\u7528\u7387\uff0c\u6211\u4eec\u9700\u8981\u5728Kubelet\u542f\u52a8\u547d\u4ee4\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u53c2\u6570\uff0c\u7136\u540e\u91cd\u542f\u5b83\u3002"),(0,l.kt)("p",null,"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"),"\u4e2d\u7684\u8d77\u59cb\u53c2\u6570\uff0c\u5728\u8d77\u59cb\u53c2\u6570\u540e\u9762\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"--max-Pods=300"),"\u5e76\u91cd\u542f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"systemctl daemon-reload\nsystemctl restart kubelet\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,l.kt)("p",null,"\u501f\u52a9Kubemark\u548cPrometheus\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u8fd0\u884c\u57fa\u51c6\u6d4b\u8bd5\u3001\u6536\u96c6YuniKorn\u6307\u6807\u5e76\u5206\u6790\u6027\u80fd\u3002 \u8fd9\u6709\u52a9\u4e8e\u6211\u4eec\u8bc6\u522b\u8c03\u5ea6\u7a0b\u5e8f\u4e2d\u7684\u6027\u80fd\u74f6\u9888\u5e76\u8fdb\u4e00\u6b65\u6d88\u9664\u5b83\u4eec\u3002 YuniKorn\u793e\u533a\u672a\u6765\u5c06\u7ee7\u7eed\u6539\u8fdb\u8fd9\u4e9b\u5de5\u5177\uff0c\u5e76\u7ee7\u7eed\u83b7\u5f97\u66f4\u591a\u7684\u6027\u80fd\u6539\u8fdb\u3002"))}c.isMDXComponent=!0},2217:function(e,t,n){t.Z=n.p+"assets/images/prometheus-3765d2ddd0d81ce31bc9c0d44046aac6.png"}}]);