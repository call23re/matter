"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[556],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(n),s=o,y=f["".concat(c,".").concat(s)]||f[s]||d[s]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26437:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={},c="Changelog",u={type:"mdx",permalink:"/matter/CHANGELOG",source:"@site/pages/CHANGELOG.md"},p=[{value:"0.1.2- 2022-01-06",id:"012--2022-01-06",children:[{value:"Fixed",id:"fixed",children:[],level:3}],level:2},{value:"0.1.1 - 2022-01-05",id:"011---2022-01-05",children:[{value:"Fixed",id:"fixed-1",children:[],level:3},{value:"Changed",id:"changed",children:[],level:3}],level:2},{value:"0.1.0 - 2022-01-02",id:"010---2022-01-02",children:[],level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"changelog"},"Changelog"),(0,i.kt)("h2",{id:"012--2022-01-06"},"[0.1.2]","- 2022-01-06"),(0,i.kt)("h3",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix Loop sort by priority to sort properly")),(0,i.kt)("h2",{id:"011---2022-01-05"},"[0.1.1]"," - 2022-01-05"),(0,i.kt)("h3",{id:"fixed-1"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix accidental system yield error message in Loop")),(0,i.kt)("h3",{id:"changed"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accidentally yielding or erroring in a system does not prevent other systems from running.")),(0,i.kt)("h2",{id:"010---2022-01-02"},"[0.1.0]"," - 2022-01-02"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initial release")))}f.isMDXComponent=!0}}]);