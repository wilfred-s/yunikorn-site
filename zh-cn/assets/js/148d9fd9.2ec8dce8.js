"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2523],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=a,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||r;return t?i.createElement(m,o(o({ref:n},d),{},{components:t})):i.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6098:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),o=["components"],l={id:"translation",title:"Translation"},s=void 0,u={unversionedId:"developer_guide/translation",id:"developer_guide/translation",title:"Translation",description:"\x3c!--",source:"@site/docs/developer_guide/translation.md",sourceDirName:"developer_guide",slug:"/developer_guide/translation",permalink:"/zh-cn/docs/next/developer_guide/translation",draft:!1,tags:[],version:"current",frontMatter:{id:"translation",title:"Translation"},sidebar:"docs",previous:{title:"Development in CodeReady Containers",permalink:"/zh-cn/docs/next/developer_guide/openshift_development"},next:{title:"Architecture",permalink:"/zh-cn/docs/next/design/architecture"}},d={},p=[{value:"Modifying the docusaurus.config.js for supporting the new language",id:"modifying-the-docusaurusconfigjs-for-supporting-the-new-language",level:2},{value:"Updating the help information in local-build.sh",id:"updating-the-help-information-in-local-buildsh",level:2},{value:"Copying latest files to i18n",id:"copying-latest-files-to-i18n",level:2},{value:"Adding the translated information in sidebar.json and footer.json",id:"adding-the-translated-information-in-sidebarjson-and-footerjson",level:2},{value:"linking img, assest and styles.module.css",id:"linking-img-assest-and-stylesmodulecss",level:2},{value:"Adopting relative paths",id:"adopting-relative-paths",level:2},{value:"Test",id:"test",level:2}],c={toc:p};function g(e){var n=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Yunikorn website adopting Docusaurus manages documentations.\n",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial"},"Docusaurus i18n system")," allows developer to translate documentations.\nFor adding a new language translation, developers should do following operations."),(0,r.kt)("h2",{id:"modifying-the-docusaurusconfigjs-for-supporting-the-new-language"},"Modifying the docusaurus.config.js for supporting the new language"),(0,r.kt)("p",null,"Assume the translations by a ",(0,r.kt)("strong",{parentName:"p"},"new language keyword"),".\nExpected results will be like this figure.\n",(0,r.kt)("img",{alt:"translation results",src:t(1261).Z,width:"2784",height:"1660"})),(0,r.kt)("p",null,"Current Yunikorn website include the en and zh-cn documentaions.\nIf developer want to add a new translation with ",(0,r.kt)("strong",{parentName:"p"},"new language keyword")," including fr, jp, the developers need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'zh-cn', '<new language keyword>'],\n    localeConfigs: {\n      en: {\n        label: 'English',\n      },\n      \"zh-cn\": {\n        label: '\u4e2d\u6587',\n      },\n      \"<new language keyword>\": {\n        label: 'test',\n      }\n    },\n  },\n")),(0,r.kt)("h2",{id:"updating-the-help-information-in-local-buildsh"},"Updating the help information in local-build.sh"),(0,r.kt)("p",null,"Adding the ",(0,r.kt)("strong",{parentName:"p"},"new language keyword")," to the locale list in ",(0,r.kt)("inlineCode",{parentName:"p"},"print_usage")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Usage: $(basename "$0") run [locale] | build | clean | help\n    run     build the website, and launch the server in a docker image.\n            a locale can be specified, currently supported: "en", "zh-cn", "<new language keyword>"\n')),(0,r.kt)("h2",{id:"copying-latest-files-to-i18n"},"Copying latest files to i18n"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p i18n/<new language keyword>/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/<new language keyword>/docusaurus-plugin-content-docs/current\nmkdir -p i18n/<new language keyword>/docusaurus-plugin-content-pages\ncp -r src/pages/** i18n/<new language keyword>/docusaurus-plugin-content-pages\nmkdir -p i18n/<new language keyword>/docusaurus-theme-classic\n")),(0,r.kt)("h2",{id:"adding-the-translated-information-in-sidebarjson-and-footerjson"},"Adding the translated information in sidebar.json and footer.json"),(0,r.kt)("p",null,"Create sidebar.json and and footer.json in docusaurus-theme-classic.\nFor example, the footer.json context is following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "link.item.label.Get Involved": {\n        "message": "\u53c2\u4e0e"\n    },\n    "link.title.Code Repositories": {\n        "message": "\u4ee3\u7801\u5e93"\n    },\n    "link.item.label.People": {\n        "message": "\u4eba\u4eec"\n    },   \n    "link.title.Blog": {\n        "message": "\u535a\u5ba2"\n    },\n    "link.title.Community": {\n        "message": "\u793e\u533a"\n    }\n}\n')),(0,r.kt)("h2",{id:"linking-img-assest-and-stylesmodulecss"},"linking img, assest and styles.module.css"),(0,r.kt)("p",null,"Creating linking files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/new language keyword/docusaurus-plugin-content-pages"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# cleaning the duplicate files\nrm -rf img\nrm styles.module.css\n# linking\nln -s ../../../static/img\nln -s ../../../src/pages/styles.module.css\n")),(0,r.kt)("p",null,"Creating the linking file in the 'i18n/new language keyword/docusaurus-plugin-content-docs/current'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# cleaning the duplicate files\nrm -rf assests\n# linking\nln -s ../../../../docs/assets\n")),(0,r.kt)("h2",{id:"adopting-relative-paths"},"Adopting relative paths"),(0,r.kt)("p",null,"There are some image urls adopting absolute path in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/index.js")," and adopting absolute path could cause png missing.\nDevelopers could make sure that the img link in ",(0,r.kt)("inlineCode",{parentName:"p"},"/i18n/new language keyword/docusaurus-plugin-content-pages/index.js")," is work.\nFor example, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"resource-scheduling.png")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," and the png url is ",(0,r.kt)("inlineCode",{parentName:"p"},"/img/resource-scheduling.png"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/img/resource-scheduling.png -> ./img/resource-scheduling.png\n")),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./local-build.sh run <new language keyword>\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Building website",src:t(15445).Z,width:"1012",height:"298"})))}g.isMDXComponent=!0},15445:function(e,n,t){n.Z=t.p+"assets/images/translationBuilding-5af95dcdf88e0810a904cdf136b08fc6.png"},1261:function(e,n,t){n.Z=t.p+"assets/images/translationDemo-4d973a6a8ae64a1d6f33f2fb5c96fef2.png"}}]);