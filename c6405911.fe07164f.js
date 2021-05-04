(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),a=(n(0),n(202)),o={id:"env_setup",title:"Dev Environment Setup"},l={unversionedId:"developer_guide/env_setup",id:"version-0.9.0/developer_guide/env_setup",isDocsHomePage:!1,title:"Dev Environment Setup",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/developer_guide/env_setup.md",slug:"/developer_guide/env_setup",permalink:"/docs/0.9.0/developer_guide/env_setup",version:"0.9.0",sidebar:"version-0.9.0/docs",previous:{title:"Trouble Shooting",permalink:"/docs/0.9.0/user_guide/trouble_shooting"},next:{title:"Build and Run",permalink:"/docs/0.9.0/developer_guide/build"}},c=[{value:"Local Kubernetes cluster using Docker Desktop",id:"local-kubernetes-cluster-using-docker-desktop",children:[{value:"Installation",id:"installation",children:[]},{value:"Deploy and access dashboard",id:"deploy-and-access-dashboard",children:[]},{value:"Access local Kubernetes cluster",id:"access-local-kubernetes-cluster",children:[]}]},{value:"Local Kubernetes cluster with Minikube",id:"local-kubernetes-cluster-with-minikube",children:[{value:"Installing Minikube",id:"installing-minikube",children:[]},{value:"Deploy and access the cluster",id:"deploy-and-access-the-cluster",children:[]},{value:"Build impact",id:"build-impact",children:[]}]},{value:"Debug code locally",id:"debug-code-locally",children:[]},{value:"Access remote Kubernetes cluster",id:"access-remote-kubernetes-cluster",children:[]}],s={rightToc:c};function b(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are several ways to setup a local development environment for Kubernetes, the two most common ones are ",Object(a.b)("inlineCode",{parentName:"p"},"Minikube")," (",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/minikube/"},"docs"),") and ",Object(a.b)("inlineCode",{parentName:"p"},"docker-desktop"),".\n",Object(a.b)("inlineCode",{parentName:"p"},"Minikube")," provisions a local Kubernetes cluster on several Virtual Machines (via VirtualBox or something similar). ",Object(a.b)("inlineCode",{parentName:"p"},"docker-desktop")," on the other hand, sets up Kubernetes cluster in docker containers."),Object(a.b)("h2",{id:"local-kubernetes-cluster-using-docker-desktop"},"Local Kubernetes cluster using Docker Desktop"),Object(a.b)("p",null,"In this tutorial, we will base all the installs on Docker Desktop.\nEven in this case we can use a lightweight ",Object(a.b)("a",{parentName:"p",href:"#local-kubernetes-cluster-with-minikube"},"minikube")," setup which gives the same functionality with less impact."),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("p",null,"Download and install ",Object(a.b)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker-Desktop")," on your laptop. Latest version has an embedded version of Kubernetes so no additional install is needed.\nJust simply follow the instruction ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/#kubernetes"},"here")," to get Kubernetes up and running within docker-desktop."),Object(a.b)("p",null,"Once Kubernetes is started in docker desktop, you should see something similar below:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Kubernetes in Docker Desktop",src:n(307).default})),Object(a.b)("p",null,"This means that:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Kubernetes is running."),Object(a.b)("li",{parentName:"ol"},"the command line tool ",Object(a.b)("inlineCode",{parentName:"li"},"kubctl")," is installed in the ",Object(a.b)("inlineCode",{parentName:"li"},"/usr/local/bin")," directory."),Object(a.b)("li",{parentName:"ol"},"the Kubernetes context is set to ",Object(a.b)("inlineCode",{parentName:"li"},"docker-desktop"),".")),Object(a.b)("h3",{id:"deploy-and-access-dashboard"},"Deploy and access dashboard"),Object(a.b)("p",null,"After setting up the local Kubernetes you need to deploy the dashboard using the following steps: "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"follow the instructions in ",Object(a.b)("a",{parentName:"li",href:"https://github.com/kubernetes/dashboard"},"Kubernetes dashboard doc")," to deploy the dashboard."),Object(a.b)("li",{parentName:"ol"},"start the Kubernetes proxy in the background from a terminal to get access on the dashboard on the local host:   ",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl proxy &\n"))),Object(a.b)("li",{parentName:"ol"},"access the dashboard at the following URL: ",Object(a.b)("a",{parentName:"li",href:"http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/#!/login"},"clickable link"))),Object(a.b)("h3",{id:"access-local-kubernetes-cluster"},"Access local Kubernetes cluster"),Object(a.b)("p",null,"The dashboard as deployed in the previous step requires a token or config to sign in. Here we use the token to sign in. The token is generated automatically and can be retrieved from the system."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"retrieve the name of the dashboard token:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl -n kube-system get secret | grep kubernetes-dashboard-token\n"))),Object(a.b)("li",{parentName:"ol"},"retrieve the content of the token, note that the token name ends with a random 5 character code and needs to be replaced with the result of step 1. As an example:  ",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl -n kube-system describe secret kubernetes-dashboard-token-tf6n8\n"))),Object(a.b)("li",{parentName:"ol"},"copy the token value which is part of the ",Object(a.b)("inlineCode",{parentName:"li"},"Data")," section with the tag ",Object(a.b)("inlineCode",{parentName:"li"},"token"),"."),Object(a.b)("li",{parentName:"ol"},"select the ",Object(a.b)("strong",{parentName:"li"},"Token")," option in the dashboard web UI:",Object(a.b)("br",null),Object(a.b)("img",{alt:"Token Access in dashboard",src:n(308).default})),Object(a.b)("li",{parentName:"ol"},"paste the token value into the input box and sign in:",Object(a.b)("br",null),Object(a.b)("img",{alt:"Token Access in dashboard",src:n(309).default}))),Object(a.b)("h2",{id:"local-kubernetes-cluster-with-minikube"},"Local Kubernetes cluster with Minikube"),Object(a.b)("p",null,"Minikube can be added to an existing Docker Desktop install. Minikube can either use the pre-installed hypervisor or use a hypervisor of choice. These instructions use ",Object(a.b)("a",{parentName:"p",href:"https://github.com/moby/hyperkit"},"HyperKit")," which is embedded in Docker Desktop.   "),Object(a.b)("p",null,"If you want to use a different hypervisor then HyperKit make sure that you follow the generic minikube install instructions. Do not forget to install the correct driver for the chosen hypervisor if required.\nThe basic instructions are provided in the ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"minikube install")," instructions."),Object(a.b)("p",null,"Check hypervisor Docker Desktop should have already installed HyperKit. In a terminal run: ",Object(a.b)("inlineCode",{parentName:"p"},"hyperkit")," to confirm. Any response other than ",Object(a.b)("inlineCode",{parentName:"p"},"hyperkit: command not found")," confirms that HyperKit is installed and on the path. If it is not found you can choose a different hypervisor or fix the Docker Desktop install."),Object(a.b)("h3",{id:"installing-minikube"},"Installing Minikube"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"install minikube, you can either use brew or directly via these steps: ",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64\nchmod +x minikube\nsudo mv minikube /usr/local/bin\n"))),Object(a.b)("li",{parentName:"ol"},"install HyperKit driver (required), you can either use brew or directly via these steps:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -LO https://storage.googleapis.com/minikube/releases/latest/docker-machine-driver-hyperkit\nsudo install -o root -g wheel -m 4755 docker-machine-driver-hyperkit /usr/local/bin/\n"))),Object(a.b)("li",{parentName:"ol"},"update the minikube config to default to the HyperKit install ",Object(a.b)("inlineCode",{parentName:"li"},"minikube config set vm-driver hyperkit")),Object(a.b)("li",{parentName:"ol"},"change docker desktop to use minikube for Kubernetes:",Object(a.b)("br",null),Object(a.b)("img",{alt:"Kubernetes in Docker Desktop: minikube setting",src:n(310).default}))),Object(a.b)("h3",{id:"deploy-and-access-the-cluster"},"Deploy and access the cluster"),Object(a.b)("p",null,"After the installation is done you can start a new cluster."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"start the minikube cluster: ",Object(a.b)("inlineCode",{parentName:"li"},"minikube start --kubernetes-version v1.14.2")),Object(a.b)("li",{parentName:"ol"},"start the minikube dashboard: ",Object(a.b)("inlineCode",{parentName:"li"},"minikube dashboard &"))),Object(a.b)("h3",{id:"build-impact"},"Build impact"),Object(a.b)("p",null,"When you create images make sure that the build is run after pointing it to the right environment.\nWithout setting the enviromnent minikube might not find the docker images when deploying the scheduler."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"make sure minikube is started"),Object(a.b)("li",{parentName:"ol"},"in the terminal where you wll run the build execute: ",Object(a.b)("inlineCode",{parentName:"li"},"eval $(minikube docker-env)")),Object(a.b)("li",{parentName:"ol"},"run the image build from the yunikorn-k8shim repository root: ",Object(a.b)("inlineCode",{parentName:"li"},"make image")),Object(a.b)("li",{parentName:"ol"},"deploy the scheduler as per the normal instructions.")),Object(a.b)("h2",{id:"debug-code-locally"},"Debug code locally"),Object(a.b)("p",null,"Note, this instruction requires you have GoLand IDE for development."),Object(a.b)("p",null,'In GoLand, go to yunikorn-k8shim project. Then click "Run" -> "Debug..." -> "Edit Configuration..." to get the pop-up configuration window.\nNote, you need to click "+" to create a new profile if the ',Object(a.b)("inlineCode",{parentName:"p"},"Go Build")," option is not available at the first time."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Debug Configuration",src:n(311).default})),Object(a.b)("p",null,"The highlighted fields are the configurations you need to add. These include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Run Kind: package"),Object(a.b)("li",{parentName:"ul"},"Package path: point to the path of ",Object(a.b)("inlineCode",{parentName:"li"},"pkg/shim")," package"),Object(a.b)("li",{parentName:"ul"},"Working directory: point to the path of the ",Object(a.b)("inlineCode",{parentName:"li"},"conf")," directory, this is where the program loads configuration file from"),Object(a.b)("li",{parentName:"ul"},"Program arguments: specify the arguments to run the program, such as ",Object(a.b)("inlineCode",{parentName:"li"},"-kubeConfig=/path/to/.kube/config -interval=1s -clusterId=mycluster -clusterVersion=0.1 -name=yunikorn -policyGroup=queues -logEncoding=console -logLevel=-1"),".\nNote, you need to replace ",Object(a.b)("inlineCode",{parentName:"li"},"/path/to/.kube/config")," with the local path to the kubeconfig file. And if you want to change or add more options, you can run ",Object(a.b)("inlineCode",{parentName:"li"},"_output/bin/k8s-yunikorn-scheduler -h")," to find out.")),Object(a.b)("p",null,'Once the changes are done, click "Apply", then "Debug". You will need to set proper breakpoints in order to debug the program.'),Object(a.b)("h2",{id:"access-remote-kubernetes-cluster"},"Access remote Kubernetes cluster"),Object(a.b)("p",null,"This setup assumes you have already installed a remote Kubernetes cluster.\nFor a generic view on how to access a multiple cluster and integrate it follow the ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"accessing multiple clusters")," documentation from Kubernetes."),Object(a.b)("p",null,"Or follow these simplified steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"get the Kubernetes ",Object(a.b)("inlineCode",{parentName:"li"},"config")," file from remote cluster, copy it to the local machine and give it a unique name i.e. ",Object(a.b)("inlineCode",{parentName:"li"},"config-remote")),Object(a.b)("li",{parentName:"ol"},"save the ",Object(a.b)("inlineCode",{parentName:"li"},"KUBECONFIG")," environment variable (if set)",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"export KUBECONFIG_SAVED=$KUBECONFIG\n"))),Object(a.b)("li",{parentName:"ol"},"add the new file to the environment variable",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"export KUBECONFIG=$KUBECONFIG:config-remote\n"))),Object(a.b)("li",{parentName:"ol"},"run the command ",Object(a.b)("inlineCode",{parentName:"li"},"kubectl config view")," to check that both configs can be accessed"),Object(a.b)("li",{parentName:"ol"},"switch context using ",Object(a.b)("inlineCode",{parentName:"li"},"kubectl config use-context my-remote-cluster")),Object(a.b)("li",{parentName:"ol"},"confirm that the current context is now switched to the remote cluster config:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-text"},"kubectl config get-contexts\nCURRENT   NAME                   CLUSTER                      AUTHINFO             NAMESPACE\n          docker-for-desktop     docker-for-desktop-cluster   docker-for-desktop\n*         my-remote-cluster      kubernetes                   kubernetes-admin\n")))),Object(a.b)("p",null,"More docs can be found ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"here"),"  "))}b.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||p[d]||a;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},307:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/docker-desktop-7afa28a7972e0e8867bcab8a6a9ac614.png"},308:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dashboard_token_select-a9c66b12d37a247d623e662d642b80be.png"},309:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dashboard_secret-80e18f88ceb541c0d70bcd1c60176290.png"},310:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/docker-dektop-minikube-741c814795983ad6133a5b5b33a2f398.png"},311:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/goland_debug-bf10925ea3e1fdd82cfd32b6f4049678.jpg"}}]);