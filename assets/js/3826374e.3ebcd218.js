"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93403],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6212:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",keywords:["tensorflow"]},s=void 0,u={unversionedId:"user_guide/workloads/run_tf",id:"version-1.2.0/user_guide/workloads/run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",source:"@site/versioned_docs/version-1.2.0/user_guide/workloads/run_tensorflow.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_tf",permalink:"/docs/1.2.0/user_guide/workloads/run_tf",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",keywords:["tensorflow"]},sidebar:"docs",previous:{title:"Run Flink Jobs",permalink:"/docs/1.2.0/user_guide/workloads/run_flink"},next:{title:"Run MPI Jobs",permalink:"/docs/1.2.0/user_guide/workloads/run_mpi"}},p={},c=[{value:"Install training-operator",id:"install-training-operator",level:2},{value:"Prepare the docker image",id:"prepare-the-docker-image",level:2},{value:"Run a TensorFlow job",id:"run-a-tensorflow-job",level:2},{value:"Run a TensorFlow job with GPU scheduling",id:"run-a-tensorflow-job-with-gpu-scheduling",level:2}],m={toc:c},d="wrapper";function f(e){var n=e.components,l=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide gives an overview of how to set up ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator"},"training-operator"),"\nand how to run a Tensorflow job with YuniKorn scheduler. The training-operator is a unified training operator maintained by\nKubeflow. It not only supports TensorFlow but also PyTorch, XGboots, etc."),(0,a.kt)("h2",{id:"install-training-operator"},"Install training-operator"),(0,a.kt)("p",null,"You can use the following command to install training operator in kubeflow namespace by default. If you have problems with installation,\nplease refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator#installation"},"this doc")," for details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl apply -k "github.com/kubeflow/training-operator/manifests/overlays/standalone?ref=v1.3.0"\n')),(0,a.kt)("h2",{id:"prepare-the-docker-image"},"Prepare the docker image"),(0,a.kt)("p",null,"Before you start running a TensorFlow job on Kubernetes, you'll need to build the docker image."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download files from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/tfjob"},"deployment/examples/tfjob")),(0,a.kt)("li",{parentName:"ol"},"To build this docker image with the following command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -f Dockerfile -t kubeflow/tf-dist-mnist-test:1.0 .\n")),(0,a.kt)("h2",{id:"run-a-tensorflow-job"},"Run a TensorFlow job"),(0,a.kt)("p",null,"Here is a TFJob yaml for MNIST ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/examples/tfjob/tf-job-mnist.yaml"},"example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeflow.org/v1\nkind: TFJob\nmetadata:\n  name: dist-mnist-for-e2e-test\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 2\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n    Worker:\n      replicas: 4\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n')),(0,a.kt)("p",null,"Create the TFJob"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create -f deployments/examples/tfjob/tf-job-mnist.yaml\n")),(0,a.kt)("p",null,"You can view the job info from YuniKorn UI. If you do not know how to access the YuniKorn UI,\nplease read the document ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.2.0/#access-the-web-ui"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tf-job-on-ui",src:t(65853).Z,width:"2442",height:"1308"})),(0,a.kt)("h2",{id:"run-a-tensorflow-job-with-gpu-scheduling"},"Run a TensorFlow job with GPU scheduling"),(0,a.kt)("p",null,"To use Time-Slicing GPU your cluster must be configured to use ",(0,a.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/docs/next/user_guide/workloads/run_nvidia"},"GPUs and Time-Slicing GPUs"),"\nThis section covers a workload test scenario to validate TFJob with Time-slicing GPU."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Verify that the time-slicing configuration is applied successfully"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe node\n")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Capacity:\n  nvidia.com/gpu:     8\n...\nAllocatable:\n  nvidia.com/gpu:     8\n...\n"))),(0,a.kt)("p",null,"Create a workload test file ",(0,a.kt)("inlineCode",{parentName:"p"},"tf-gpu.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# tf-gpu.yaml\napiVersion: "kubeflow.org/v1"\nkind: "TFJob"\nmetadata:\n  name: "tf-smoke-gpu"\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 1\n      template:\n        metadata:\n          creationTimestamp: \n          labels:\n            applicationId: "tf_job_20200521_001"\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - args:\n                - python\n                - tf_cnn_benchmarks.py\n                - --batch_size=32\n                - --model=resnet50\n                - --variable_update=parameter_server\n                - --flush_stdout=true\n                - --num_gpus=1\n                - --local_parameter_device=cpu\n                - --device=cpu\n                - --data_format=NHWC\n              image: docker.io/kubeflow/tf-benchmarks-cpu:v20171202-bdab599-dirty-284af3\n              name: tensorflow\n              ports:\n                - containerPort: 2222\n                  name: tfjob-port\n              workingDir: /opt/tf-benchmarks/scripts/tf_cnn_benchmarks\n          restartPolicy: OnFailure\n    Worker:\n      replicas: 1\n      template:\n        metadata:\n          creationTimestamp: null\n          labels:\n            applicationId: "tf_job_20200521_001"\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - args:\n                - python\n                - tf_cnn_benchmarks.py\n                - --batch_size=32\n                - --model=resnet50\n                - --variable_update=parameter_server\n                - --flush_stdout=true\n                - --num_gpus=1\n                - --local_parameter_device=cpu\n                - --device=gpu\n                - --data_format=NHWC\n              image: docker.io/kubeflow/tf-benchmarks-gpu:v20171202-bdab599-dirty-284af3\n              name: tensorflow\n              ports:\n                - containerPort: 2222\n                  name: tfjob-port\n              resources:\n                limits:\n                  nvidia.com/gpu: 2\n              workingDir: /opt/tf-benchmarks/scripts/tf_cnn_benchmarks\n          restartPolicy: OnFailure\n')),(0,a.kt)("p",null,"Create the TFJob"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f tf-gpu.yaml\nkubectl get pods -n kubeflow\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                 READY   STATUS    RESTARTS   AGE\ntf-smoke-gpu-ps-0                    1/1     Running   0          18m\ntf-smoke-gpu-worker-0                1/1     Running   0          18m\ntraining-operator-7d98f9dd88-dd45l   1/1     Running   0          19m\n")),(0,a.kt)("p",null,"Verify that TFJob are running."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In pod logs"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs tf-smoke-gpu-worker-0 -n kubeflow\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},".......\n..Found device 0 with properties\n..name: NVIDIA GeForce RTX 3080 major: 8 minor: 6 memoryClockRate(GHz): 1.71\n\n.......\n..Creating TensorFlow device (/device:GPU:0) -> (device: 0, name: NVIDIA GeForce RTX 3080, pci bus id: 0000:01:00.0, compute capability: 8.6)\n.......\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In node"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"...\nAllocated resources:\n  (Total limits may be over 100 percent, i.e., overcommitted.)\n  Resource           Requests     Limits\n  --------           --------     ------\n  ...\n  nvidia.com/gpu     2            2\n...\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In Yunikorn UI applications\n",(0,a.kt)("img",{alt:"tf-job-gpu-on-ui",src:t(36245).Z,width:"958",height:"698"})))))}f.isMDXComponent=!0},36245:function(e,n,t){n.Z=t.p+"assets/images/tf-job-gpu-on-ui-f6dfde883fe4393624dfe813086a68d1.png"},65853:function(e,n,t){n.Z=t.p+"assets/images/tf-job-on-ui-e31edb85612822915f336b8cf9a25c3f.png"}}]);