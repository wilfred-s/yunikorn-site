(window.webpackJsonp=window.webpackJsonp||[]).push([[26,189],{243:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(245),i=a(246),r=a(22),o=a(251),s=a(2),u=a(6),m=a(247),b=a(255),d=a(270),v=a(271),f=a(272),h=a(269),p=a(248),E=a(253),k=a(76),O=a.n(k),g=["item","onItemClick","collapsible","activePath"],j=["item","onItemClick","activePath","collapsible"];var C=function e(t,a){return"link"===t.type?(n=t.href,l=a,(c=function(e){return e.endsWith("/")?e:e+"/"})(n)===c(l)):"category"===t.type&&t.items.some((function(t){return e(t,a)}));var n,l,c};function _(e){var t,a,c,i=e.item,r=e.onItemClick,o=e.collapsible,b=e.activePath,d=Object(u.a)(e,g),v=i.items,f=i.label,h=C(i,b),p=(a=h,c=Object(n.useRef)(a),Object(n.useEffect)((function(){c.current=a}),[a]),c.current),E=Object(n.useState)((function(){return!!o&&(!h&&i.collapsed)})),k=E[0],j=E[1];Object(n.useEffect)((function(){h&&!p&&k&&j(!1)}),[h,p,k]);var _=Object(n.useCallback)((function(e){e.preventDefault(),j((function(e){return!e}))}),[j]);return 0===v.length?null:l.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":k}),key:f},l.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[O.a.menuLinkText]=!o,t)),onClick:o?_:void 0,href:o?"#!":void 0},d),f),l.a.createElement("ul",{className:"menu__list"},v.map((function(e){return l.a.createElement(w,{tabIndex:k?"-1":"0",key:e.label,item:e,onItemClick:r,collapsible:o,activePath:b})}))))}function N(e){var t=e.item,a=e.onItemClick,n=e.activePath,c=(e.collapsible,Object(u.a)(e,j)),i=t.href,r=t.label,o=C(t,n);return l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(p.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:i},Object(E.a)(i)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),r))}function w(e){switch(e.item.type){case"category":return l.a.createElement(_,e);case"link":default:return l.a.createElement(N,e)}}var y=function(e){var t,a,c=e.path,r=e.sidebar,o=e.sidebarCollapsible,u=void 0===o||o,E=Object(n.useState)(!1),k=E[0],g=E[1],j=Object(i.a)(),C=j.siteConfig,_=(C=void 0===C?{}:C).themeConfig,N=(_=void 0===_?{}:_).navbar,y=(N=void 0===N?{}:N).title,M=void 0===y?"":y,I=N.hideOnScroll,P=void 0!==I&&I,L=j.isClient,x=Object(f.a)(),S=x.logoLink,W=x.logoLinkProps,R=x.logoImageUrl,A=x.logoAlt,B=Object(b.a)().isAnnouncementBarClosed,D=Object(h.a)().scrollY;Object(d.a)(k);var F=Object(v.a)();return Object(n.useEffect)((function(){F===v.b.desktop&&g(!1)}),[F]),l.a.createElement("div",{className:Object(m.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=P,t))},P&&l.a.createElement(p.a,Object(s.a)({tabIndex:-1,className:O.a.sidebarLogo,to:S},W),null!=R&&l.a.createElement("img",{key:L,src:R,alt:A}),null!=M&&l.a.createElement("strong",null,M)),l.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",O.a.menu,(a={"menu--show":k},a[O.a.menuWithAnnouncementBar]=!B&&0===D,a))},l.a.createElement("button",{"aria-label":k?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){g(!k)}},k?l.a.createElement("span",{className:Object(m.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:O.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},r.map((function(e){return l.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),g(!1)},collapsible:u,activePath:c})})))))},M=a(280),I=a(265),P=a(250),L=a(252),x=a(81),S=a.n(x);function W(e){var t=e.version,a=e.isLast?[t,"latest"]:[t];return l.a.createElement(L.a,null,l.a.createElement("meta",{name:"docsearch:version",content:a.join(",")}))}function R(e){var t,a,n=e.currentDocRoute,r=e.versionMetadata,s=e.children,u=Object(i.a)(),m=u.siteConfig,b=u.isClient,d=r.permalinkToSidebar,v=r.docsSidebars,f=r.version,h=r.isLast,p=v[d[n.path]];return l.a.createElement(l.a.Fragment,null,l.a.createElement(W,{version:f,isLast:h}),l.a.createElement(o.a,{key:b},l.a.createElement("div",{className:S.a.docPage},p&&l.a.createElement("div",{className:S.a.docSidebarContainer,role:"complementary"},l.a.createElement(y,{sidebar:p,path:n.path,sidebarCollapsible:null===(t=null===(a=m.themeConfig)||void 0===a?void 0:a.sidebarCollapsible)||void 0===t||t})),l.a.createElement("main",{className:S.a.docMainContainer},l.a.createElement(c.a,{components:M.a},s)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,c=t.find((function(e){return Object(P.matchPath)(n.pathname,e)}));return c?l.a.createElement(R,{currentDocRoute:c,versionMetadata:a},Object(r.a)(t)):l.a.createElement(I.default,e)}},265:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(251);t.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);