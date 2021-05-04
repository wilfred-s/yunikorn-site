(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),l=(n(0),n(202)),i={id:"placement_rules",title:"App Placement Rules"},u={unversionedId:"user_guide/placement_rules",id:"version-0.10.0/user_guide/placement_rules",isDocsHomePage:!1,title:"App Placement Rules",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/user_guide/placement_rules.md",slug:"/user_guide/placement_rules",permalink:"/docs/user_guide/placement_rules",version:"0.10.0",sidebar:"version-0.10.0/docs",previous:{title:"Partition and Queue Configuration",permalink:"/docs/user_guide/queue_config"},next:{title:"Sorting Policies",permalink:"/docs/user_guide/sorting_policies"}},o=[{value:"Configuration",id:"configuration",children:[{value:"Create parameter",id:"create-parameter",children:[]},{value:"Parent parameter",id:"parent-parameter",children:[]},{value:"Filter parameter",id:"filter-parameter",children:[]},{value:"Value parameter",id:"value-parameter",children:[]}]},{value:"Access Control List",id:"access-control-list",children:[]},{value:"Rules",id:"rules",children:[{value:"Provided Rule",id:"provided-rule",children:[]},{value:"User Name Rule",id:"user-name-rule",children:[]},{value:"Fixed Rule",id:"fixed-rule",children:[]},{value:"Tag Rule",id:"tag-rule",children:[]}]},{value:"Complex examples",id:"complex-examples",children:[]}],s={rightToc:o};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The basics for the placement rules are described in the ",Object(l.b)("a",{parentName:"p",href:"/docs/design/scheduler_configuration#placement-rules-definition"},"scheduler configuration design document"),".\nMultiple rules can be chained to form a placement policy.\n",Object(l.b)("a",{parentName:"p",href:"/docs/user_guide/acls"},"Access control lists")," and rule filters are defined per rule and enforced per rule.\nThis document explains how to build a policy, including the rule usage, that is part of the scheduler with examples."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"Rules are defined per partition as part of the scheduler queue configuration.\nThe order that the rules are defined in is the order in which they are executed.\nIf a rule matches the policy will stop executing the remaining rules."),Object(l.b)("p",null,"A matching rule generates a fully qualified queue name.\nThis means that the name returned starts at the ",Object(l.b)("em",{parentName:"p"},"root")," queue.\nThere is no limit on the number of levels in the queue hierarchy that can be generated."),Object(l.b)("p",null,"When a rule is executed the result of rules that have been executed is unknown and not taken into account.\nSimilar for rule that have not been executed yet: rules cannot influence other rules except when they are configured as the ",Object(l.b)("a",{parentName:"p",href:"#parent-parameter"},"parent")," rule."),Object(l.b)("p",null,"If the policy does not generate a queue name and no more rules are left the application will be rejected."),Object(l.b)("p",null,"Basic structure for the rule placement definition in the configuration:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: <name of the 1st rule>\n  - name: <name of the 2nd rule>\n")),Object(l.b)("p",null,"Each rule can take a predefined set of parameters in the configuration.\nThe name of the rules that can be used are given in the ",Object(l.b)("a",{parentName:"p",href:"#rules"},"rule")," description.\nA rule name is not case sensitive in the configuration.\nRule name must follow the following naming convention:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"start with a letter: a-z or A-Z"),Object(l.b)("li",{parentName:"ul"},"followed by 0 or more characters a-z, A-Z, 0-9 or _")),Object(l.b)("p",null,"A rule that is not known, i.e. the name does not map to the rules defined below, will cause a initialisation error of the placement manager.\nRules can also throw a parse error or an error during the initialisation if the parameters are incorrect.\nA rule set with an error can never become active."),Object(l.b)("p",null,"A placement manager is considered initialised if it has an active rule set.\nWhen the configuration is reloaded a new rule set will be created to replace the active rule set.\nIn the case that a new rule set loaded contains an error, i.e. is broken, the placement manager ignores the new rule set.\nThis means that the placement manager stays in a the state it was in when a broken rule set is loaded.\nIf the placement manager keeps using the existing active rule set in the case that it was already initialised.\nA message will be logged about the broken and ignored configuration."),Object(l.b)("p",null,'Dots "." in the rule result are replaced by the string "',"_",'dot_".\nA dot is replaced because it is used as the hierarchy separator in the fully qualified queue name.\nReplacing the dot occurs before the full queue hierarchy is build and the result is qualified.\nThis means that we allow user name and or tag values to contain dots without the dots affecting the queue hierarchy.\nFor queues in the configuration that as an example must map to username with a dot you must specify them as follows:\nA user rule with the user ',Object(l.b)("inlineCode",{parentName:"p"},"user.name")," will generate the queue name ",Object(l.b)("inlineCode",{parentName:"p"},"root.user_dot_name"),' as output.\nIf that "user queue" must be added to the configuration the ',Object(l.b)("inlineCode",{parentName:"p"},"user_dot_name")," name should be used."),Object(l.b)("h3",{id:"create-parameter"},"Create parameter"),Object(l.b)("p",null,"The create parameter is a boolean flag that defines if a queue that is generated by the rule may be created if it does not exist.\nThere is no guarantee that the queue will be created because the existing queues might prevent the queue creation.\nIf the queue generated by the rule does not exist and the flag is not set to ",Object(l.b)("em",{parentName:"p"},"true")," the result of the rule will be a fail."),Object(l.b)("p",null,"Basic yaml entry for a rule with ",Object(l.b)("inlineCode",{parentName:"p"},"create")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: <name of the rule>\n    create: true\n")),Object(l.b)("p",null,"The default value is ",Object(l.b)("em",{parentName:"p"},"false"),".\nAllowed values: ",Object(l.b)("em",{parentName:"p"},"true")," or ",Object(l.b)("em",{parentName:"p"},"false"),", any other value will cause a parse error."),Object(l.b)("h3",{id:"parent-parameter"},"Parent parameter"),Object(l.b)("p",null,"The parent parameter allows specifying a rule that generates a parent queue for the current rule.\nParent rules can be nested, a parent rule ",Object(l.b)("em",{parentName:"p"},"may")," contain another parent rule.\nThere is no enforced limit of parent rules that can be nested."),Object(l.b)("p",null,"A parent rule is treated as if it was a rule specified at the top level of the list and thus has the same parameters and requirements as a any other rule in the placement definition.\nThe exception is that using a parent rule on a rule that already generates a fully qualified queue is considered a configuration error.\nThis error can only occur on the rule of type ",Object(l.b)("a",{parentName:"p",href:"#fixed-rule"},"fixed"),", see the rule specification for more details."),Object(l.b)("p",null,"NOTE: the rule execution traverses down the list of parent rules and executes the last one in the list first.\nThis means that the last parent rule will generate the queue directly below the root.\nSee the examples for details."),Object(l.b)("p",null,"Basic yaml entry for a rule with a ",Object(l.b)("inlineCode",{parentName:"p"},"parent")," rule:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: <name of the rule>\n    parent:\n      name: <name of the parent rule>\n")),Object(l.b)("p",null,"The default value is ",Object(l.b)("em",{parentName:"p"},"no")," parent."),Object(l.b)("h3",{id:"filter-parameter"},"Filter parameter"),Object(l.b)("p",null,"The filter on a rule allows filtering the users that the rule applies to.\nA filter is a complex configuration object."),Object(l.b)("p",null,"The ",Object(l.b)("em",{parentName:"p"},"users")," and ",Object(l.b)("em",{parentName:"p"},"groups")," that can be configured can be one of two types:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"a regular expression"),Object(l.b)("li",{parentName:"ul"},"a list of users or groups.")),Object(l.b)("p",null,"If the entry for users or groups contains more than 1 entry in the yaml it is always considered a list of either users or groups.\nDuplicate entries in the lists are ignored and do not cause an error.\nSpecifying a regular expression beside other list elements is not allowed."),Object(l.b)("p",null,"User and group names follow the standard linux user and group conventions.\nFor user names:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"start with a letter: a-z or A-Z"),Object(l.b)("li",{parentName:"ul"},"followed by 0 or more characters a-z, A-Z, 0-9 or _ . @ -"),Object(l.b)("li",{parentName:"ul"},"the last character may also be a $")),Object(l.b)("p",null,"For group names:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"start with a letter: a-z or A-Z"),Object(l.b)("li",{parentName:"ul"},"followed by 0 or more characters a-z, A-Z, 0-9 or _ -")),Object(l.b)("p",null,"If the list is exactly one entry it can be either a single user or group or a regular expression.\nWhen an entry contains a character that is not allowed in a user or group name the entry is considered a regular expression.\nThe regular expression must compile as specified.\nA regular expression that does not compile is ignored."),Object(l.b)("p",null,"Specifically for the group regular expression: matching is performed one group at a time not the against the list of groups."),Object(l.b)("p",null,"Basic ",Object(l.b)("inlineCode",{parentName:"p"},"filter")," yaml entry:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"filter:\n  type: deny\n  users:\n    - <user name or regexp>\n    - <user name>\n  groups:\n    - <group name or regexp>\n    - <group name>\n")),Object(l.b)("p",null,"The default value is ",Object(l.b)("em",{parentName:"p"},"no")," filter."),Object(l.b)("h3",{id:"value-parameter"},"Value parameter"),Object(l.b)("p",null,"This is a generic value that can be used to pass to a rule to implement or alter its behaviour.\nThe value It is used by the ",Object(l.b)("a",{parentName:"p",href:"#fixed-rule"},"fixed")," and the ",Object(l.b)("a",{parentName:"p",href:"#tag-rule"},"tag")," rule.\nThe value is a single value in string form and is not interpreted or manipulated by the system."),Object(l.b)("p",null,"Basic yaml entry for a rule with a ",Object(l.b)("inlineCode",{parentName:"p"},"value")," set:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'placementrules:\n  - name: <name of the rule>\n    value: "any string"\n')),Object(l.b)("p",null,"The default is ",Object(l.b)("em",{parentName:"p"},"no")," value."),Object(l.b)("h2",{id:"access-control-list"},"Access Control List"),Object(l.b)("p",null,"Access control lists are not defined in the rules but they impact the outcome of the placement policy.\nTwo access control lists can be defined on a queue:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Submit ACL: ",Object(l.b)("em",{parentName:"li"},"submitacl")),Object(l.b)("li",{parentName:"ol"},"Administration ACL: ",Object(l.b)("em",{parentName:"li"},"adminacl"))),Object(l.b)("p",null,"The placement rule will only match if the ACL of the queue allows submit access via either ACL.\nThe administrative queue ACL also provides ",Object(l.b)("em",{parentName:"p"},"submit")," access.\nIf the queue does not exist or does not have an ACL set, the ACL of the parent queue is checked.\nThis recursive check is repeated until an ACL provides access or after the ACL of the root queue is checked."),Object(l.b)("p",null,"For more detail on the ACL syntax check the ",Object(l.b)("a",{parentName:"p",href:"/docs/user_guide/acls"},"ACL documentation"),"."),Object(l.b)("h2",{id:"rules"},"Rules"),Object(l.b)("h3",{id:"provided-rule"},"Provided Rule"),Object(l.b)("p",null,"Name to be used in the configuration: ",Object(l.b)("em",{parentName:"p"},"provided")),Object(l.b)("p",null,"Returns the queue provided during the submission of the application.\nThe behaviour of the this rule is to fully qualify the queue provided by the application if the queue is not fully qualified.\nIf a parent rule is set and the queue provided in the application submission is fully qualified then the parent rule will not be executed."),Object(l.b)("p",null,"Supported parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create"),Object(l.b)("li",{parentName:"ul"},"parent"),Object(l.b)("li",{parentName:"ul"},"filter")),Object(l.b)("p",null,"Example: create the queue passed in by the user if it does not exist under the users name"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: provided\n    create: true\n    parent:\n      name: user\n      create: true\n")),Object(l.b)("p",null,"Application submit request by the user ",Object(l.b)("inlineCode",{parentName:"p"},"developer"),", queue in the application on submit: ",Object(l.b)("inlineCode",{parentName:"p"},"my_special_queue"),Object(l.b)("br",null),"\nResult: ",Object(l.b)("inlineCode",{parentName:"p"},"root.developer.my_special_queue")," (parent rule set the user name)"),Object(l.b)("p",null,"Application submit request by the user ",Object(l.b)("inlineCode",{parentName:"p"},"developer"),", queue in the application on submit: ",Object(l.b)("inlineCode",{parentName:"p"},"root.dev_queue"),Object(l.b)("br",null),"\nResult: ",Object(l.b)("inlineCode",{parentName:"p"},"root.dev_queue")," (parent rule ignored)"),Object(l.b)("h3",{id:"user-name-rule"},"User Name Rule"),Object(l.b)("p",null,"Name to be used in the configuration: ",Object(l.b)("em",{parentName:"p"},"user")),Object(l.b)("p",null,"Returns the queue based on the user name that is part of the submitted application."),Object(l.b)("p",null,"Supported parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create"),Object(l.b)("li",{parentName:"ul"},"parent"),Object(l.b)("li",{parentName:"ul"},"filter")),Object(l.b)("p",null,"Example: submit to a queue based on the user name, do not create the queue if the queue does not exist:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: user\n    create: false\n")),Object(l.b)("p",null,"Application submit request by the user ",Object(l.b)("inlineCode",{parentName:"p"},"finance.test"),", queue does exist:",Object(l.b)("br",null),"\nResult: ",Object(l.b)("inlineCode",{parentName:"p"},"root.finance_dot_test")," (note the replacement of the dot)"),Object(l.b)("p",null,"Application submit request by the user ",Object(l.b)("inlineCode",{parentName:"p"},"developer"),", queue does not exist:",Object(l.b)("br",null),"\nResult: failed, next rule executed"),Object(l.b)("h3",{id:"fixed-rule"},"Fixed Rule"),Object(l.b)("p",null,"Name to be used in the configuration: ",Object(l.b)("em",{parentName:"p"},"fixed")),Object(l.b)("p",null,"Returns the name configured in the rule parameter ",Object(l.b)("em",{parentName:"p"},"value"),".\nThe value configured must be a legal queue name or queue hierarchy.\nThe name does not have to be a fully qualified queue name.\nThe hierarchy in the name uses a dot as a separator for the queue names at the different levels in the hierarchy.\nThe fixed rule can only fail if the queue configured does not exist and the create flag is not set as it will always return the configured queue."),Object(l.b)("p",null,"If the configured value is a fully qualified queue name configuring a parent rule will be considered an ",Object(l.b)("em",{parentName:"p"},"error"),"."),Object(l.b)("p",null,"Supported parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"value (required)"),Object(l.b)("li",{parentName:"ul"},"create"),Object(l.b)("li",{parentName:"ul"},"parent"),Object(l.b)("li",{parentName:"ul"},"filter")),Object(l.b)("p",null,"Example: a fixed queue returned always, without the ",Object(l.b)("inlineCode",{parentName:"p"},"create")," flag set and thus requires the queue to be defined as a leaf queue in the configuration."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: fixed\n    value: last_resort\n")),Object(l.b)("p",null,"Application submit request by the user ",Object(l.b)("inlineCode",{parentName:"p"},"developer"),", queue in the application on submit: ",Object(l.b)("inlineCode",{parentName:"p"},"my_special_queue"),Object(l.b)("br",null),"\nResult: ",Object(l.b)("inlineCode",{parentName:"p"},"root.last_resort")),Object(l.b)("h3",{id:"tag-rule"},"Tag Rule"),Object(l.b)("p",null,"Name to be used in the configuration: ",Object(l.b)("em",{parentName:"p"},"tag"),"\nRetrieves the queue name from the applications tags.\nThe tag name that is checked for its value is configured in the rule using the ",Object(l.b)("inlineCode",{parentName:"p"},"value"),".\nConfiguring a tag rule without a ",Object(l.b)("inlineCode",{parentName:"p"},"value")," set is an error, however an application does not have to have the tag set."),Object(l.b)("p",null,"If the tag is not set on the application the rule fails.\nIf the tag value returned from the application is a fully qualified queue name the parent rule, if configured, will not be executed."),Object(l.b)("p",null,"Supported parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"value (required)"),Object(l.b)("li",{parentName:"ul"},"create"),Object(l.b)("li",{parentName:"ul"},"parent"),Object(l.b)("li",{parentName:"ul"},"filter")),Object(l.b)("p",null,"Example: place an application based on the kubernetes ",Object(l.b)("inlineCode",{parentName:"p"},"namespace")," which gets sets automatically in the application when submitted:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: tag\n    value: namespace\n    create: true\n")),Object(l.b)("p",null,"Application submit request for a kubernetes based application in the namespace ",Object(l.b)("inlineCode",{parentName:"p"},"default")," by the user ",Object(l.b)("inlineCode",{parentName:"p"},"developer"),", queue in the application on submit: ",Object(l.b)("inlineCode",{parentName:"p"},"my_special_queue"),Object(l.b)("br",null),"\nResult: ",Object(l.b)("inlineCode",{parentName:"p"},"root.default")),Object(l.b)("p",null,"Application submit request for a kubernetes based application in the namespace ",Object(l.b)("inlineCode",{parentName:"p"},"testing")," by the user ",Object(l.b)("inlineCode",{parentName:"p"},"developer"),Object(l.b)("br",null),"\nResult: ",Object(l.b)("inlineCode",{parentName:"p"},"root.testing")),Object(l.b)("p",null,"Application submit request for a non kubernetes based application by the user ",Object(l.b)("inlineCode",{parentName:"p"},"developer"),Object(l.b)("br",null),"\nResult: failed, next rule executed"),Object(l.b)("h2",{id:"complex-examples"},"Complex examples"),Object(l.b)("p",null,"In this complex example we chain three rules:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"a ",Object(l.b)("inlineCode",{parentName:"li"},"user")," rule, with a parent rule ",Object(l.b)("inlineCode",{parentName:"li"},"tag"),' using the kubernetes namespace, to be used only for users that are part of and "dev" group.'),Object(l.b)("li",{parentName:"ol"},"a ",Object(l.b)("inlineCode",{parentName:"li"},"tag")," rule using the kubernetes namespace, with a parent rule ",Object(l.b)("inlineCode",{parentName:"li"},"fixed")," using the existing queue ",Object(l.b)("inlineCode",{parentName:"li"},"root.namespaces"),"."),Object(l.b)("li",{parentName:"ol"},"a ",Object(l.b)("inlineCode",{parentName:"li"},"fixed")," rule to place everything that reaches this point in the ",Object(l.b)("inlineCode",{parentName:"li"},"root.default")," queue.")),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: user\n    create: true\n    filter:\n      type: allow\n      groups:\n        - dev*\n    parent:\n      - name: tag\n        value: namespace\n  - name: tag\n    value: namespace\n    create: true\n    parent:\n      - name: fixed\n        value: root.namespaces\n        filter:\n          type: allow\n          users:\n            - john\n  - name: fixed\n    value: root.default\n")),Object(l.b)("p",null,"Application submit request for a kubernetes based application in the namespace ",Object(l.b)("inlineCode",{parentName:"p"},"testing")," by the user ",Object(l.b)("inlineCode",{parentName:"p"},"john"),Object(l.b)("br",null),"\nResult: ",Object(l.b)("inlineCode",{parentName:"p"},"root.namespaces.testing")," (matched in rule 2)"),Object(l.b)("p",null,"Application submit request for a kubernetes based application in the namespace ",Object(l.b)("inlineCode",{parentName:"p"},"newapp")," by the user ",Object(l.b)("inlineCode",{parentName:"p"},"sarah")," with groups membership ",Object(l.b)("inlineCode",{parentName:"p"},"sarah, test_app, dev_app"),Object(l.b)("br",null),"\nResult: ",Object(l.b)("inlineCode",{parentName:"p"},"root.newapp.sarah")," (matched in rule 1)"),Object(l.b)("p",null,"Application submit request for a kubernetes based application in the namespace ",Object(l.b)("inlineCode",{parentName:"p"},"testapp")," by the user ",Object(l.b)("inlineCode",{parentName:"p"},"bob")," with groups membership ",Object(l.b)("inlineCode",{parentName:"p"},"bob"),Object(l.b)("br",null),"\nResult: ",Object(l.b)("inlineCode",{parentName:"p"},"root.deault")," (matched in rule 3)"),Object(l.b)("p",null,"In this second example we chain two rules:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"a ",Object(l.b)("inlineCode",{parentName:"li"},"fixed")," rule to place everything in the ",Object(l.b)("inlineCode",{parentName:"li"},"root.production")," queue"),Object(l.b)("li",{parentName:"ol"},"a ",Object(l.b)("inlineCode",{parentName:"li"},"user")," rule, with the create flag set")),Object(l.b)("p",null,"In this case however we have ACLs set up on the ",Object(l.b)("inlineCode",{parentName:"p"},"root.production")," queue to only allow two specific user to use this queue.\nSo even if the rule matches unless the user is either ",Object(l.b)("inlineCode",{parentName:"p"},"john")," or ",Object(l.b)("inlineCode",{parentName:"p"},"bob")," the application will not be placed in the ",Object(l.b)("inlineCode",{parentName:"p"},"production")," queue.\nAll other users will match the second rule and use their own queue, which is created if it does not exist."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n      - name: production\n        submitacl: john,bob\n    placementrules:\n      - name: fixed\n        value: root.production\n      - name: user\n        create: true\n")))}c.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||l;return n?r.a.createElement(d,u(u({ref:t},s),{},{components:n})):r.a.createElement(d,u({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);