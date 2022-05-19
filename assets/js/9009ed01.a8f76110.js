(self.webpackChunk=self.webpackChunk||[]).push([[37353],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){return function(t){var r=c(t.components);return n.createElement(e,a({},t,{components:r}))}},c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11139:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>d,default:()=>p});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i=["components"],l={id:"routing",title:"Routing",original_id:"routing"},s=void 0,u={unversionedId:"routing",id:"version-v3.0.0/routing",isDocsHomePage:!1,title:"Routing",description:"Historically, Relay started out internally at Facebook as a routing framework. However, Relay no longer makes any assumptions about routing, and works with a variety of routing options.",source:"@site/versioned_docs/version-v3.0.0/Modern-Routing.md",sourceDirName:".",slug:"/routing",permalink:"/docs/v3.0.0/routing",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v3.0.0/Modern-Routing.md",tags:[],version:"v3.0.0",lastUpdatedBy:"Terence Bezman",lastUpdatedAt:1652983419,formattedLastUpdatedAt:"5/19/2022",frontMatter:{id:"routing",title:"Routing",original_id:"routing"},sidebar:"version-v3.0.0/docs",previous:{title:"fetchQuery",permalink:"/docs/v3.0.0/fetch-query"},next:{title:"Debugging",permalink:"/docs/v3.0.0/relay-debugging"}},d=[{value:"No Routing",id:"no-routing",children:[],level:2},{value:"Flat Routes",id:"flat-routes",children:[],level:2},{value:"Nested Routes",id:"nested-routes",children:[{value:"React Router",id:"react-router",children:[],level:3},{value:"Found",id:"found",children:[],level:3}],level:2},{value:"Custom Routing and More",id:"custom-routing-and-more",children:[],level:2}],c={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Historically, Relay started out internally at Facebook as a routing framework. However, Relay no longer makes any assumptions about routing, and works with a variety of routing options."),(0,a.mdx)("h2",{id:"no-routing"},"No Routing"),(0,a.mdx)("p",null,"If the Relay part of an application is some widget or single view as part of a larger application, you don't need any routing. You can just render a ",(0,a.mdx)("inlineCode",{parentName:"p"},"QueryRenderer")," somewhere on the page to fetch and render the data you need there. This option is simple and should be used when sufficient."),(0,a.mdx)("h2",{id:"flat-routes"},"Flat Routes"),(0,a.mdx)("p",null,"When not nesting routes with Relay data dependencies, such as when using flat routes, it is sufficient to just render a ",(0,a.mdx)("inlineCode",{parentName:"p"},"QueryRenderer")," for the parts of your application that require Relay data. You can also use the options below that integrate your routes with their data dependencies."),(0,a.mdx)("h2",{id:"nested-routes"},"Nested Routes"),(0,a.mdx)("p",null,"Nested routes with Relay data dependencies introduce an additional complication. While it's possible to render a ",(0,a.mdx)("inlineCode",{parentName:"p"},"QueryRenderer")," per route, doing so will lead to request waterfalls in the general case where parent routes do not render their child routes until the data for those parent routes are available. This generally leads to an unnecessary additional delay in loading the data for the page, but may be acceptable for small applications or for applications with shallow route trees."),(0,a.mdx)("p",null,"Integration options are available for open-source routing libraries that can instead fetch data for nested routes in parallel. In many of these cases, using a batching network layer can bring additional benefits in avoiding sending multiple HTTP requests."),(0,a.mdx)("h3",{id:"react-router"},(0,a.mdx)("a",{parentName:"h3",href:"https://reacttraining.com/react-router/"},"React Router")),(0,a.mdx)("p",null,"Integration with Relay Classic for React Router v2 or v3 is available via ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/relay-tools/react-router-relay"},(0,a.mdx)("inlineCode",{parentName:"a"},"react-router-relay")),", which will aggregate the queries for matched routes, and request data for all routes in parallel."),(0,a.mdx)("p",null,"The component-based approach of React Router v4 does not readily allow for aggregating the data requirements for nested routes, and as such does not readily permit an approach that will avoid request waterfalls from nesting ",(0,a.mdx)("inlineCode",{parentName:"p"},"QueryRenderer")," components."),(0,a.mdx)("h3",{id:"found"},(0,a.mdx)("a",{parentName:"h3",href:"https://github.com/4Catalyzer/found"},"Found")),(0,a.mdx)("p",null,"Found offers integration with Relay Modern and Relay Classic via ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/4Catalyzer/found-relay"},"Found Relay"),". Found Relay runs queries for matched routes in parallel, and supports fetching Relay data in parallel with downloading async bundles from code splitting when using Relay Modern."),(0,a.mdx)("h2",{id:"custom-routing-and-more"},"Custom Routing and More"),(0,a.mdx)("p",null,"The options listed above are not exhaustive. If you are aware of other routing solutions that work well with Relay Modern, ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/issues/new"},"please let us know"),"."))}p.isMDXComponent=!0}}]);