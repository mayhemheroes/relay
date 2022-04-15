(self.webpackChunk=self.webpackChunk||[]).push([[97222,80096],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>p,useMDXComponents:()=>u,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){return function(t){var n=u(t.components);return r.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(o,".").concat(m)]||c[m]||h[m]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(79973),a=n(67294),i=n(73727),o=n(52263),s=n(13919),d=n(10412),l=(0,a.createContext)({collectLink:function(){}}),c=n(44996),u=n(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const h=function(e){var t,n,h=e.isNavLink,f=e.to,p=e.href,g=e.activeClassName,v=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,x=void 0===w||w,b=(0,r.Z)(e,m),N=(0,o.default)().siteConfig,C=N.trailingSlash,k=N.baseUrl,O=(0,c.useBaseUrlUtils)().withBaseUrl,R=(0,a.useContext)(l),U=f||p,F=(0,s.Z)(U),P=null==U?void 0:U.replace("pathname://",""),T=void 0!==P?(n=P,x&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0;T&&F&&(T=(0,u.applyTrailingSlash)(T,{trailingSlash:C,baseUrl:k}));var E=(0,a.useRef)(!1),q=h?i.OL:i.rU,I=d.default.canUseIntersectionObserver,S=(0,a.useRef)();(0,a.useEffect)((function(){return!I&&F&&null!=T&&window.docusaurus.prefetch(T),function(){I&&S.current&&S.current.disconnect()}}),[S,T,I,F]);var _=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,A=!T||!F||_;return T&&F&&!_&&!y&&R.collectLink(T),A?a.createElement("a",Object.assign({href:T},U&&!F&&{target:"_blank",rel:"noopener noreferrer"},b)):a.createElement(q,Object.assign({},b,{onMouseEnter:function(){E.current||null==T||(window.docusaurus.preload(T),E.current=!0)},innerRef:function(e){var t,n;I&&e&&F&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},S.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.current.unobserve(t),S.current.disconnect(),n())}))})),S.current.observe(t))},to:T||""},h&&{isActive:v,activeClassName:g}))}},13919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},44996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>i,default:()=>o});var r=n(52263),a=n(13919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,d=i.absolute,l=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(36742),a=n(44256),i=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var d=function(){var e=i.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(s,null,i.createElement(l,null),i.createElement(d,null),i.createElement(c,null))},m=function(){return i.createElement(s,null,i.createElement(d,null),i.createElement(c,null))};const h=function(){return(0,a.fbContent)({internal:i.createElement(u,null),external:i.createElement(m,null)})}},10660:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>l,toc:()=>c,default:()=>m});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o=["components"],s={},d=void 0,l={unversionedId:"guided-tour/refetching/OssAvoidSuspenseNote",id:"version-v13.0.0/guided-tour/refetching/OssAvoidSuspenseNote",isDocsHomePage:!1,title:"OssAvoidSuspenseNote",description:"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.",source:"@site/versioned_docs/version-v13.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/OssAvoidSuspenseNote",permalink:"/docs/guided-tour/refetching/OssAvoidSuspenseNote",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Panagiotis Vekris",lastUpdatedAt:1650003110,formattedLastUpdatedAt:"4/15/2022",frontMatter:{}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending."))))}m.isMDXComponent=!0},7038:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>m,toc:()=>h,default:()=>w});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o=n(68629),s=n(44256),d=n(10660),l=["components"],c={id:"refreshing-fragments",title:"Refreshing Fragments",slug:"/guided-tour/refetching/refreshing-fragments/",description:"Relay guide to refreshing fragments",keywords:["refreshing","fragment"]},u=void 0,m={unversionedId:"guided-tour/refetching/refreshing-fragments",id:"version-v13.0.0/guided-tour/refetching/refreshing-fragments",isDocsHomePage:!1,title:"Refreshing Fragments",description:"Relay guide to refreshing fragments",source:"@site/versioned_docs/version-v13.0.0/guided-tour/refetching/refreshing-fragments.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/refreshing-fragments/",permalink:"/docs/guided-tour/refetching/refreshing-fragments/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/refetching/refreshing-fragments.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Panagiotis Vekris",lastUpdatedAt:1650003110,formattedLastUpdatedAt:"4/15/2022",frontMatter:{id:"refreshing-fragments",title:"Refreshing Fragments",slug:"/guided-tour/refetching/refreshing-fragments/",description:"Relay guide to refreshing fragments",keywords:["refreshing","fragment"]},sidebar:"version-v13.0.0/docs",previous:{title:"Refetching Queries with Different Data",permalink:"/docs/guided-tour/refetching/refetching-queries-with-different-data/"},next:{title:"Refetching Fragments with Different Data",permalink:"/docs/guided-tour/refetching/refetching-fragments-with-different-data/"}},h=[{value:"Using real-time features",id:"using-real-time-features",children:[],level:2},{value:"Using <code>useRefetchableFragment</code>",id:"using-userefetchablefragment",children:[{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense",children:[],level:3}],level:2}],f=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",t)}},p=f("FbRefreshingUsingRealTimeFeatures"),g=f("FbRefreshingFragments"),v=f("FbAvoidSuspenseCaution"),y={toc:h};function w(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"When referring to ",(0,i.mdx)("strong",{parentName:"p"},'"refreshing a fragment"'),", we mean fetching the ",(0,i.mdx)("em",{parentName:"p"},"exact")," same data that was originally rendered by the fragment, in order to get the most up-to-date version of that data from the server."),(0,i.mdx)("h2",{id:"using-real-time-features"},"Using real-time features"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(p,{mdxType:"FbRefreshingUsingRealTimeFeatures"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},"If we want to keep our data up to date with the latest version from the server, the first thing to consider is if it appropriate to use any real-time features, which can make it easier to automatically keep the data up to date without manually refreshing the data periodically.",(0,i.mdx)("p",null,"One example of this is using ",(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guided-tour/updating-data/graphql-subscriptions/"},"GraphQL Subscriptions"),", which will require additional configuration on your server and ",(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guided-tour/updating-data/graphql-subscriptions/#configuring-the-network-layer"},"network layer"),".")),(0,i.mdx)("h2",{id:"using-userefetchablefragment"},"Using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"useRefetchableFragment")),(0,i.mdx)("p",null,"In order to manually refresh the data for a fragment, we need a query to refetch the fragment under; remember, ",(0,i.mdx)("em",{parentName:"p"},"fragments can't be fetched by themselves: they need to be part of a query,"),' so we can\'t just "fetch" the fragment again by itself.'),(0,i.mdx)("p",null,"To do so, we can also use the ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/use-refetchable-fragment/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useRefetchableFragment"))," Hook in combination with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@refetchable")," directive, which will automatically generate a query to refetch the fragment under, and which we can fetch using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"refetch")," function:"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(g,{mdxType:"FbRefreshingFragments"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n// This type is autogenerated by Relay given @refetchable used below\nimport type {UserComponentRefreshQuery} from 'UserComponentRefreshQuery.graphql';\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const [data, refetch] = useRefetchableFragment<UserComponentRefreshQuery, _>(\n    graphql`\n      fragment UserComponent_user on User\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"UserComponentRefreshQuery\") {\n        id\n        name\n        friends {\n          count\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const refresh = useCallback(() => {\n    // We call refetch with empty variables: `{}`,\n    // which will refetch the @refetchable query with the same\n    // original variables the fragment was fetched with, and update\n    // this component with the latest fetched data.\n    // The fetchPolicy ensures we always fetch from the server and skip\n    // the local data cache.\n    refetch({}, {fetchPolicy: 'network-only'})\n  }), [/* ... */];\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>Friends count: {data.friends?.count}</div>\n      <Button\n        onClick={() => refresh()}>\n        Fetch latest count\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's happening in this example:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useRefetchableFragment")," behaves similarly to ",(0,i.mdx)("a",{parentName:"li",href:"../../../api-reference/use-fragment/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useFragment"))," (see the ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/fragments/"},"Fragments")," section), but with a few additions:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"It expects a fragment that is annotated with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@refetchable")," directive. Note that  ",(0,i.mdx)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are on ',(0,i.mdx)("inlineCode",{parentName:"li"},"Viewer"),", on ",(0,i.mdx)("inlineCode",{parentName:"li"},"Query"),", on any type that implements ",(0,i.mdx)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," field)."))),(0,i.mdx)("li",{parentName:"ul"},"It returns a ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," function, which is already Flow-typed to expect the query variables that the generated query expects"),(0,i.mdx)("li",{parentName:"ul"},"It takes two Flow type parameters: the type of the generated query (in our case  ",(0,i.mdx)("inlineCode",{parentName:"li"},"UserComponentRefreshQuery"),"), and a second type which can always be inferred, so you only need to pass underscore (",(0,i.mdx)("inlineCode",{parentName:"li"},"_"),")."),(0,i.mdx)("li",{parentName:"ul"},"We're calling the ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," function with 2 main inputs:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The first argument is the set of variables to fetch the fragment with. In this case, calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," and passing an empty set of variables will fetch the fragment again ",(0,i.mdx)("em",{parentName:"li"},"with the exact same variables the fragment was originally fetched with,")," which is what we want for a refresh."),(0,i.mdx)("li",{parentName:"ul"},"In the second argument we are passing a ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'network-only'")," to ensure that we always fetch from the network and skip the local data cache."))),(0,i.mdx)("li",{parentName:"ul"},"Calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," will re-render the component and cause ",(0,i.mdx)("inlineCode",{parentName:"li"},"useRefetchableFragment")," to suspend (as explained in ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/loading-states/"},"Loading States with Suspense"),"), since a network request will be required due to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," we are using. This means that you'll need to make sure that there's a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component from above in order to show a fallback loading state."))),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Note that this same behavior also applies to using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"refetch")," function from ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/use-pagination-fragment"},(0,i.mdx)("inlineCode",{parentName:"a"},"usePaginationFragment")),"."))),(0,i.mdx)("h3",{id:"if-you-need-to-avoid-suspense"},"If you need to avoid Suspense"),(0,i.mdx)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/fetch-query/"},(0,i.mdx)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(v,{mdxType:"FbAvoidSuspenseCaution"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)(d.default,{mdxType:"OssAvoidSuspenseNote"})),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n// This type is autogenerated by Relay given @refetchable used below\nimport type {UserComponentRefreshQuery} from 'UserComponentRefreshQuery.graphql';\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const [data, refetch] = useRefetchableFragment<UserComponentRefreshQuery, _>(\n    graphql`\n      fragment UserComponent_user on User\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"UserComponentRefreshQuery\") {\n        id\n        name\n        friends {\n          count\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const [isRefreshing, setIsRefreshing] = useState(false);\n  const refresh = useCallback(() => {\n    if (isRefreshing) { return; }\n    setIsRefreshing(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefreshing(false);\n\n          // *After* the query has been fetched, we call\n          // refetch again to re-render with the updated data.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          refetch({}, {fetchPolicy: 'store-only'});\n        },\n        error: () => {\n          setIsRefreshing(false);\n        }\n      });\n  }, [/* ... */]);\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>Friends count: {data.friends?.count}</div>\n      <Button\n        disabled={isRefreshing}\n        onClick={() => refresh()}>\n        Fetch latest count {isRefreshing ? <LoadingSpinner /> : null}\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When refreshing, we now keep track of our own ",(0,i.mdx)("inlineCode",{parentName:"li"},"isRefreshing")," loading state, since we are avoiding suspending. We can use this state to render a busy spinner or similar loading UI in our component, ",(0,i.mdx)("em",{parentName:"li"},"without")," hiding the content."),(0,i.mdx)("li",{parentName:"ul"},"In the event handler, we first call ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we call ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," so that we render the updated data, similar to the previous example."),(0,i.mdx)("li",{parentName:"ul"},"At this point, when ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," is called, the data for the fragment should already be cached in the local Relay store, so we use ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}w.isMDXComponent=!0}}]);