"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8401],{9777:(e,t,n)=>{n.d(t,{A:()=>b});n(6372);var a=n(3394),s=n(7410),i=n(6499),l=n(1544),o=n(9701),r=n(2873),c=n(5106),d=n(216);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon__Ne2"};function h(){const e=(0,c.default)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Latz"};function p(e){let{children:t,href:n,isLast:a}=e;const s="breadcrumbs__link";return a?(0,d.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,d.jsx)(o.A,{className:s,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:s,children:t})}function x(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function b(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,a.A)(s.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:a,index:n,addMicrodata:!!s,children:(0,d.jsx)(p,{href:s,isLast:a,children:t.label})},n)}))]})}):null}},3520:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var a=n(6372),s=n(1906),i=n(2331),l=n(216);const o=a.createContext(null);function r(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:s,children:t})}function c(){const e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(3394),m=n(6348),h=n(5799);function v(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var p=n(214),x=n(6203),b=n(7410),g=n(2354),f=n(8786);function j(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,tags:s}=e,i=s.length>0,o=!!(t||n||a);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(b.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",b.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(g.A,{tags:s})})}),o&&(0,l.jsx)(f.A,{className:(0,u.A)("margin-top--sm",b.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a})]}):null}var A=n(7761),N=n(4427),L=n(2873);const C={tocCollapsibleButton:"tocCollapsibleButton_F9z8",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_UaV3"};function _(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",C.tocCollapsibleButton,!t&&C.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(L.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const k={tocCollapsible:"tocCollapsible_sCV3",tocCollapsibleContent:"tocCollapsibleContent_GM9H",tocCollapsibleExpanded:"tocCollapsibleExpanded_SbSn"};function T(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:o}=(0,A.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(k.tocCollapsible,!i&&k.tocCollapsibleExpanded,n),children:[(0,l.jsx)(_,{collapsed:i,onClick:o}),(0,l.jsx)(A.N,{lazy:!0,className:k.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(N.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const y={tocMobile:"tocMobile_mJt3"};function H(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(T,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(b.G.docs.docTocMobile,y.tocMobile)})}var w=n(9048);function U(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(w.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.G.docs.docTocDesktop})}var M=n(604),B=n(4632);function I(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(b.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(M.A,{as:"h1",children:n})}),(0,l.jsx)(B.A,{children:t})]})}var E=n(9777),S=n(2488);const P={docItemContainer:"docItemContainer_w6Xp",docItemCol:"docItemCol_uI5c"};function O(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),a=e.hide_table_of_contents,s=!a&&t.length>0;return{hidden:a,mobile:s?(0,l.jsx)(H,{}):void 0,desktop:!s||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(U,{})}}(),{metadata:{unlisted:a}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&P.docItemCol),children:[a&&(0,l.jsx)(S.A,{}),(0,l.jsx)(p.A,{}),(0,l.jsxs)("div",{className:P.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(E.A,{}),(0,l.jsx)(x.A,{}),n.mobile,(0,l.jsx)(I,{children:t}),(0,l.jsx)(j,{})]}),(0,l.jsx)(v,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function V(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(s.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(O,{children:(0,l.jsx)(n,{})})]})})}},5799:(e,t,n)=>{n.d(t,{A:()=>l});n(6372);var a=n(2873),s=n(6238),i=n(216);function l(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(s.A,{...t,subLabel:(0,i.jsx)(a.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(s.A,{...n,subLabel:(0,i.jsx)(a.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},6203:(e,t,n)=>{n.d(t,{A:()=>r});n(6372);var a=n(3394),s=n(2873),i=n(7410),l=n(5151),o=n(216);function r(e){let{className:t}=e;const n=(0,l.r)();return n.badge?(0,o.jsx)("span",{className:(0,a.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(s.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},214:(e,t,n)=>{n.d(t,{A:()=>x});n(6372);var a=n(3394),s=n(8225),i=n(9701),l=n(2873),o=n(6167),r=n(7410),c=n(6496),d=n(5151),u=n(216);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function v(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:n,onClick:a,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,s.A)(),{pluginId:l}=(0,o.useActivePlugin)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,o.useDocVersionSuggestions)(l),x=m??(b=p).docs.find((e=>e.id===b.mainDocId));var b;return(0,u.jsxs)("div",{className:(0,a.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:p.label,to:x.path,onClick:()=>d(p.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(p,{className:t,versionMetadata:n}):null}},8786:(e,t,n)=>{n.d(t,{A:()=>x});n(6372);var a=n(3394),s=n(2873),i=n(7410),l=n(9701);const o={iconEdit:"iconEdit_L0OE"};var r=n(216);function c(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.A)(o.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(l.A,{to:t,className:i.G.common.editThisPage,children:[(0,r.jsx)(c,{}),(0,r.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n(1312);function m(e){let{lastUpdatedAt:t}=e;const n=new Date(t),a=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,r.jsx)(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,r.jsx)(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function v(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,r.jsxs)("span",{className:i.G.common.lastUpdated,children:[(0,r.jsx)(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,r.jsx)(m,{lastUpdatedAt:t}):"",byUser:n?(0,r.jsx)(h,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_rMoj"};function x(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:i}=e;return(0,r.jsxs)("div",{className:(0,a.A)("row",t),children:[(0,r.jsx)("div",{className:"col",children:n&&(0,r.jsx)(d,{editUrl:n})}),(0,r.jsx)("div",{className:(0,a.A)("col",p.lastUpdated),children:(s||i)&&(0,r.jsx)(v,{lastUpdatedAt:s,lastUpdatedBy:i})})]})}},6238:(e,t,n)=>{n.d(t,{A:()=>l});n(6372);var a=n(3394),s=n(9701),i=n(216);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},4427:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(6372),s=n(9761);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(9701),m=n(216);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const v=a.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const p=(0,s.p)(),x=c??p.tableOfContents.minHeadingLevel,b=u??p.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:x,maxHeadingLevel:b});return d((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:b}}),[o,r,x,b])),(0,m.jsx)(v,{toc:g,className:n,linkClassName:o,...h})}},8050:(e,t,n)=>{n.d(t,{A:()=>o});n(6372);var a=n(3394),s=n(9701);const i={tag:"tag_wYHF",tagRegular:"tagRegular_GbCu",tagWithCount:"tagWithCount__Csy"};var l=n(216);function o(e){let{permalink:t,label:n,count:o}=e;return(0,l.jsxs)(s.A,{href:t,className:(0,a.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},2354:(e,t,n)=>{n.d(t,{A:()=>r});n(6372);var a=n(3394),s=n(2873),i=n(8050);const l={tags:"tags_KF62",tag:"tag_L6oI"};var o=n(216);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{label:t,permalink:n})},n)}))})]})}},2488:(e,t,n)=>{n.d(t,{A:()=>c});n(6372);var a=n(3394),s=n(7560),i=n(7410),l=n(6032),o=n(216);function r(e){let{className:t}=e;return(0,o.jsx)(l.A,{type:"caution",title:(0,o.jsx)(s.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,o.jsx)(s.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.AE,{}),(0,o.jsx)(r,{...e})]})}},1312:(e,t,n)=>{n.d(t,{i:()=>s});var a=n(8225);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,a.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,a.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}},9048:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(6372),s=n(3394),i=n(8917),l=n(4427);const o={tableOfContents:"tableOfContents_NHYF",docItemContainer:"docItemContainer_YD0w",hr:"hr_aNll",percent:"percent_BPPQ"};var r=n(3340),c=n(6705);const d=e=>Math.round(100*e),u=e=>{const[t,n]=(0,a.useState)(0),s=(0,a.useRef)(null),{scrollYProgress:i}=(0,r.L)({container:s});(0,a.useLayoutEffect)((()=>{s.current=document.querySelector("#__docusaurus")}),[]),(0,c.L)(i,"change",(t=>{n(t),e?.(d(t))}));return{percentage:(0,a.useMemo)((()=>d(t)),[t])}};var m=n(216);const h="table-of-contents__link toc-highlight",v="table-of-contents__link--active";function p(e){let{className:t,...n}=e;const{percentage:a}=u();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(i.P.div,{className:(0,s.A)(o.tableOfContents,"thin-scrollbar",t),initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3},children:[(0,m.jsx)(l.A,{...n,linkClassName:h,linkActiveClassName:v}),(0,m.jsx)("hr",{className:o.hr}),(0,m.jsxs)("span",{className:o.percent,children:[a+"%"," "]})]})})}}}]);