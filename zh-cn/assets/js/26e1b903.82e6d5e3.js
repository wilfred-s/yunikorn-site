"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[802],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||p;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9920:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=t(87462),o=t(63366),p=(t(67294),t(3905)),a=["components"],i={id:"profiling",title:"\u5206\u6790"},l=void 0,c={unversionedId:"performance/profiling",id:"version-1.1.0/performance/profiling",title:"\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.1.0/performance/profiling.md",sourceDirName:"performance",slug:"/performance/profiling",permalink:"/zh-cn/docs/performance/profiling",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"profiling",title:"\u5206\u6790"},sidebar:"docs",previous:{title:"\u8c03\u5ea6\u7a0b\u5e8f\u6307\u6807",permalink:"/zh-cn/docs/performance/metrics"}},u={},s=[{value:"CPU \u5206\u6790",id:"cpu-\u5206\u6790",level:2},{value:"\u5185\u5b58\u5206\u6790",id:"\u5185\u5b58\u5206\u6790",level:2},{value:"\u4e0b\u8f7d\u5206\u6790\u6837\u672c\u5e76\u5728\u672c\u5730\u8fdb\u884c\u5206\u6790",id:"\u4e0b\u8f7d\u5206\u6790\u6837\u672c\u5e76\u5728\u672c\u5730\u8fdb\u884c\u5206\u6790",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}],m={toc:s};function f(e){var n=e.components,i=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u4f7f\u7528",(0,p.kt)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof"),"\u505aCPU\uff0cMemory profiling\u53ef\u4ee5\u5e2e\u52a9\u4f60\u4e86\u89e3YuniKorn\u8c03\u5ea6\u5668\u7684\u8fd0\u884c\u72b6\u6001\u3002YuniKorn REST\u670d\u52a1\u4e2d\u6dfb\u52a0\u4e86\u5206\u6790\u5de5\u5177\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5730\u4eceHTTP\u7aef\u70b9\u68c0\u7d22\u548c\u5206\u6790\u5b83\u4eec\u3002"),(0,p.kt)("h2",{id:"cpu-\u5206\u6790"},"CPU \u5206\u6790"),(0,p.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\uff0c\u786e\u4fdd\u4f60\u5df2\u7ecf\u8fd0\u884c\u4e86YuniKorn\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7",(0,p.kt)("inlineCode",{parentName:"p"},"make run"),"\u547d\u4ee4\u4ece\u672c\u5730\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u90e8\u7f72\u4e3a\u5728K8s\u5185\u8fd0\u884c\u7684pod\u3002 \u7136\u540e\u8fd0\u884c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"go tool pprof http://localhost:9080/debug/pprof/profile\n")),(0,p.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u5c06\u4fdd\u5b58\u5728\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0c\u4e00\u65e6\u5b8c\u6210\uff0c\u5b83\u5c31\u4f1a\u8fdb\u5165\u4ea4\u4e92\u6a21\u5f0f\u3002 \u73b0\u5728\u60a8\u53ef\u4ee5\u8fd0\u884c\u5206\u6790\u547d\u4ee4\uff0c\u4f8b\u5982"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"(pprof) top\nShowing nodes accounting for 14380ms, 44.85% of 32060ms total\nDropped 145 nodes (cum <= 160.30ms)\nShowing top 10 nodes out of 106\n      flat  flat%   sum%        cum   cum%\n    2130ms  6.64%  6.64%     2130ms  6.64%  __tsan_read\n    1950ms  6.08% 12.73%     1950ms  6.08%  __tsan::MetaMap::FreeRange\n    1920ms  5.99% 18.71%     1920ms  5.99%  __tsan::MetaMap::GetAndLock\n    1900ms  5.93% 24.64%     1900ms  5.93%  racecall\n    1290ms  4.02% 28.67%     1290ms  4.02%  __tsan_write\n    1090ms  3.40% 32.06%     3270ms 10.20%  runtime.mallocgc\n    1080ms  3.37% 35.43%     1080ms  3.37%  __tsan_func_enter\n    1020ms  3.18% 38.62%     1120ms  3.49%  runtime.scanobject\n    1010ms  3.15% 41.77%     1010ms  3.15%  runtime.nanotime\n     990ms  3.09% 44.85%      990ms  3.09%  __tsan::DenseSlabAlloc::Refill\n")),(0,p.kt)("p",null,"\u60a8\u53ef\u4ee5\u952e\u5165\u8bf8\u5982",(0,p.kt)("inlineCode",{parentName:"p"},"web"),"\u6216",(0,p.kt)("inlineCode",{parentName:"p"},"gif"),"\u4e4b\u7c7b\u7684\u547d\u4ee4\u6765\u83b7\u5f97\u53ef\u4ee5\u66f4\u597d\u5730\u5e2e\u52a9\u60a8\u7684\u56fe\u8868\n\u4e86\u89e3\u5173\u952e\u4ee3\u7801\u8def\u5f84\u7684\u6574\u4f53\u6027\u80fd\u3002 \u4f60\u53ef\u4ee5\u5f97\u5230\u4e00\u4e9b\u4e1c\u897f\n\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"CPU Profiling",src:t(29840).Z,width:"1793",height:"938"})),(0,p.kt)("p",null,"\u6ce8\u610f\uff0c\u8981\u4f7f\u7528\u8fd9\u4e9b\u9009\u9879\uff0c\u60a8\u9700\u8981\u5148\u5b89\u88c5\u865a\u62df\u5316\u5de5\u5177",(0,p.kt)("inlineCode",{parentName:"p"},"graphviz"),"\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Mac\uff0c\u53ea\u9700\u8fd0\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"brew install graphviz"),"\uff0c\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003","[\u8fd9\u91cc]","(",(0,p.kt)("a",{parentName:"p",href:"https://graphviz."},"https://graphviz.")," gitlab.io/\uff09\u3002"),(0,p.kt)("h2",{id:"\u5185\u5b58\u5206\u6790"},"\u5185\u5b58\u5206\u6790"),(0,p.kt)("p",null,"\u540c\u6837\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"go tool pprof http://localhost:9080/debug/pprof/heap\n")),(0,p.kt)("p",null,"\u8fd9\u5c06\u8fd4\u56de\u5f53\u524d\u5806\u7684\u5feb\u7167\uff0c\u5141\u8bb8\u6211\u4eec\u68c0\u67e5\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3002 \u8fdb\u5165\u4ea4\u4e92\u6a21\u5f0f\u540e\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e9b\u6709\u7528\u7684\u547d\u4ee4\u3002 \u6bd4\u5982top\u53ef\u4ee5\u5217\u51fatop\u5185\u5b58\u6d88\u8017\u7684\u5bf9\u8c61\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"(pprof) top\nShowing nodes accounting for 83.58MB, 98.82% of 84.58MB total\nShowing top 10 nodes out of 86\n      flat  flat%   sum%        cum   cum%\n      32MB 37.84% 37.84%       32MB 37.84%  github.com/apache/yunikorn-core/pkg/cache.NewClusterInfo\n      16MB 18.92% 56.75%       16MB 18.92%  github.com/apache/yunikorn-core/pkg/rmproxy.NewRMProxy\n      16MB 18.92% 75.67%       16MB 18.92%  github.com/apache/yunikorn-core/pkg/scheduler.NewScheduler\n      16MB 18.92% 94.59%       16MB 18.92%  github.com/apache/yunikorn-k8shim/pkg/dispatcher.init.0.func1\n    1.04MB  1.23% 95.81%     1.04MB  1.23%  k8s.io/apimachinery/pkg/runtime.(*Scheme).AddKnownTypeWithName\n    0.52MB  0.61% 96.43%     0.52MB  0.61%  github.com/gogo/protobuf/proto.RegisterType\n    0.51MB  0.61% 97.04%     0.51MB  0.61%  sync.(*Map).Store\n    0.50MB   0.6% 97.63%     0.50MB   0.6%  regexp.onePassCopy\n    0.50MB  0.59% 98.23%     0.50MB  0.59%  github.com/json-iterator/go.(*Iterator).ReadString\n    0.50MB  0.59% 98.82%     0.50MB  0.59%  text/template/parse.(*Tree).newText\n")),(0,p.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"web"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pdf")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"gif")," \u547d\u4ee4\u6765\u83b7\u53d6\u5806\u56fe\u5f62\u3002"),(0,p.kt)("h2",{id:"\u4e0b\u8f7d\u5206\u6790\u6837\u672c\u5e76\u5728\u672c\u5730\u8fdb\u884c\u5206\u6790"},"\u4e0b\u8f7d\u5206\u6790\u6837\u672c\u5e76\u5728\u672c\u5730\u8fdb\u884c\u5206\u6790"),(0,p.kt)("p",null,"\u6211\u4eec\u5728\u8c03\u5ea6\u7a0b\u5e8fdocker\u6620\u50cf\u4e2d\u5305\u542b\u4e86\u57fa\u672c\u7684go/go-tool\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u60a8\u5e94\u8be5\u80fd\u591f\u8fdb\u884c\u4e00\u4e9b\u57fa\u672c\u7684\u5206\u6790\ndocker\u5bb9\u5668\u5185\u7684\u5206\u6790\u3002 \u4f46\u662f\uff0c\u5982\u679c\u60a8\u60f3\u6df1\u5165\u7814\u7a76\u4e00\u4e9b\u95ee\u9898\uff0c\u6700\u597d\u8fdb\u884c\u5206\u6790\n\u672c\u5730\u3002 \u7136\u540e\u60a8\u9700\u8981\u5148\u5c06\u793a\u4f8b\u6587\u4ef6\u590d\u5236\u5230\u672c\u5730\u73af\u5883\u3002 \u590d\u5236\u6587\u4ef6\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"kubectl cp ${SCHEDULER_POD_NAME}:${SAMPLE_PATH_IN_DOCKER_CONTAINER} ${LOCAL_COPY_PATH}\n")),(0,p.kt)("p",null,"\u4f8b\u5982"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"kubectl cp yunikorn-scheduler-cf8f8dd8-6szh5:/root/pprof/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n")),(0,p.kt)("p",null,"\u5728\u672c\u5730\u73af\u5883\u4e2d\u83b7\u53d6\u6587\u4ef6\u540e\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u201cpprof\u201d\u547d\u4ee4\u8fdb\u884c\u5206\u6790\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"go tool pprof /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n")),(0,p.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"pprof \u6587\u6863 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/google/pprof/tree/master/doc%E3%80%82"},"https://github.com/google/pprof/tree/master/doc\u3002"))))}f.isMDXComponent=!0},29840:function(e,n,t){n.Z=t.p+"assets/images/cpu_profile-9597863f861872384ae86daabd07f7f9.jpg"}}]);