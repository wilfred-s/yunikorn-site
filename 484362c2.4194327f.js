(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(245)),o=["components"],c={id:"openshift_development",title:"Development in CodeReady Containers"},l={unversionedId:"developer_guide/openshift_development",id:"developer_guide/openshift_development",isDocsHomePage:!1,title:"Development in CodeReady Containers",description:"\x3c!--",source:"@site/docs/developer_guide/openshift_development.md",slug:"/developer_guide/openshift_development",permalink:"/docs/next/developer_guide/openshift_development",version:"current",sidebar:"docs",previous:{title:"Deploy to Kubernetes",permalink:"/docs/next/developer_guide/deployment"},next:{title:"Architecture",permalink:"/docs/next/design/architecture"}},p=[{value:"Set up a running CRC cluster",id:"set-up-a-running-crc-cluster",children:[]},{value:"Testing a patch",id:"testing-a-patch",children:[]},{value:"Using custom images",id:"using-custom-images",children:[{value:"Podman",id:"podman",children:[]}]},{value:"Directly pushing OS Image Registry",id:"directly-pushing-os-image-registry",children:[]}],s={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"YuniKorn is tested against OpenShift and developers can set up their local environment to test patches against OpenShift.\nOur recommended local environment uses CodeReady containers."),Object(i.b)("h2",{id:"set-up-a-running-crc-cluster"},"Set up a running CRC cluster"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download CodeReady Container binaries"),Object(i.b)("p",{parentName:"li"},'Select your OS from the dropdown list then click on "Download" (On a Mac, you\'ll download crc-macos-amd64.tar.xz; on Linux, crc-linux-amd64.tar.xz).\nYou\'ll be asked to connect using your Red Hat login. If you don\'t have one, just click on "Create one now". You do ',Object(i.b)("em",{parentName:"p"},"not")," need a Red Hat subscription for this."),Object(i.b)("p",{parentName:"li"},"Once logged in, download CodeReady Containers binary and the pull secret.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unzip the tar file."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"tar -xvzf crc-macos-amd64.tar.xz\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Move the crc binary under your path. Like"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"sudo cp `pwd`/crc-macos-$CRCVERSION-amd64/crc /usr/local/bin\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Configure CRC in accordance with your hardware capabilities."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"crc config set memory 16000\ncrc config set cpus 12\ncrc setup\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start the CRC and open the console."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"crc start --pull-secret-file pull-secret.txt\ncrc console\n")))),Object(i.b)("h2",{id:"testing-a-patch"},"Testing a patch"),Object(i.b)("p",null,"The following steps assume you have a running CRC cluster in your laptop. Note that these steps are not tested against a remote CRC cluster. "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Access your environment through the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," command."),Object(i.b)("p",{parentName:"li"},"Type in the ",Object(i.b)("inlineCode",{parentName:"p"},"crc oc-env")," command to a shell."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ crc oc-env\nexport PATH="/Users/<user>/.crc/bin/oc:$PATH"\n# Run this command to configure your shell:\n# eval $(crc oc-env)\n')),Object(i.b)("p",{parentName:"li"},"So you need to type in this to access the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," comamnd:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"eval $(crc oc-env)\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to ",Object(i.b)("inlineCode",{parentName:"p"},"oc"),". After the CRC has started it will display a similar message:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"To access the cluster, first set up your environment by following 'crc oc-env' instructions.\nThen you can access it by running 'oc login -u developer -p developer https://api.crc.testing:6443'.\nTo login as an admin, run 'oc login -u kubeadmin -p duduw-yPT9Z-hsUpq-f3pre https://api.crc.testing:6443'.\nTo access the cluster, first set up your environment by following 'crc oc-env' instructions.\n")),Object(i.b)("p",{parentName:"li"},"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"oc login -u kubeadmin ...")," command. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get the URL of the local OpenShift cluster's internal private Docker repository by typing the command below."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ oc get route default-route -n openshift-image-registry --template='{{ .spec.host }}'\ndefault-route-openshift-image-registry.apps-crc.testing\n")),Object(i.b)("p",{parentName:"li"},"By default it should be ",Object(i.b)("inlineCode",{parentName:"p"},"default-route-openshift-image-registry.apps-crc.testing"),". Change the steps above, if the displayed URL is different.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Prepare the Docker images."),Object(i.b)("p",{parentName:"li"},"You can read more about this at the bottom, in the ",Object(i.b)("em",{parentName:"p"},"Using custom images")," section.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Prepare the helm chart."),Object(i.b)("p",{parentName:"li"},"If you want to use custom Docker images, replace the images in the chart's ",Object(i.b)("inlineCode",{parentName:"p"},"values.yaml")," config file."),Object(i.b)("p",{parentName:"li"},"Note that if you manually pushed the Docker image to the ",Object(i.b)("inlineCode",{parentName:"p"},"default-route-openshift-image-registry.apps-crc.testing")," docker registry directly you need to have valid certs to access it.\nOn OpenShift there's service for this: ",Object(i.b)("inlineCode",{parentName:"p"},"image-registry.openshift-image-registry.svc"),", which is easier to use."),Object(i.b)("p",{parentName:"li"},"For example, if you want to override all of the three Docker images you should use the following configs:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"image:\n  repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn\n  tag: scheduler-latest\n  pullPolicy: Always\n\nadmission_controller_image:\n  repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn\n  tag: admission-latest\n  pullPolicy: Always\n\nweb_image:\n  repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn-web\n  tag: latest\n  pullPolicy: Always\n")),Object(i.b)("p",{parentName:"li"},"You can find it in the yunikorn-release repo's helm chart directory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the helm charts."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"helm install yunikorn . -n yunikorn\n")))),Object(i.b)("h2",{id:"using-custom-images"},"Using custom images"),Object(i.b)("h3",{id:"podman"},"Podman"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in into Podman using the following command."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"podman login --tls-verify=false -u kubeadmin -p $(oc whoami -t) default-route-openshift-image-registry.apps-crc.testing\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Build the image in the repository e.g. in shim using the generic ",Object(i.b)("inlineCode",{parentName:"p"},"make image")," command.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify that the image is present in the repository."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"podman images\nREPOSITORY                TAG              IMAGE ID     CREATED            SIZE\nlocalhost/apache/yunikorn admission-latest 19eb41241d64 About a minute ago 53.5 MB\nlocalhost/apache/yunikorn scheduler-latest e60e09b424d9 About a minute ago 543 MB\n")))),Object(i.b)("h2",{id:"directly-pushing-os-image-registry"},"Directly pushing OS Image Registry"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create the images that you wish to replace."),Object(i.b)("p",{parentName:"li"},"You can either build new images locally or use official (maybe mix both)."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For the -shim and -web images checkout the repository (optionally make your changes) and type the following command:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make clean image REGISTRY=default-route-openshift-image-registry.apps-crc.testing/<project>/<name>:<tag>\n")),"Note that in OpenShift a project is equivalent a Kubernetes namespace. The ",Object(i.b)("inlineCode",{parentName:"li"},"yunikorn")," project/namespace is recommended."),Object(i.b)("li",{parentName:"ul"},"Using an official image is possible by, retagging it with by the ",Object(i.b)("inlineCode",{parentName:"li"},"docker tag")," command. ",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker tag apache/yunikorn:scheduler-latest default-route-openshift-image-registry.apps-crc.testing/yunikorn/yunikorn:scheduler-latest\n"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Login to the Docker repository."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker login -u kubeadmin -p $(oc whoami -t) default-route-openshift-image-registry.apps-crc.testing\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Push the Docker images to the internal Docker repository"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"docker push default-route-openshift-image-registry.apps-crc.testing/yunikorn/yunikorn:scheduler-latest\n")))))}b.isMDXComponent=!0},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);