(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+SuH":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return y}));var r=n("A2+M"),o=n("TJpk"),c=n.n(o),a=n("q1tI"),u=n.n(a),i=n("ubkq"),p=n.n(i),f=n("DGZL"),l=n("ntAx"),s=function(t){var e=t.post,n=t.site,r=[{property:"og:type",content:"article"},{property:"article:author",content:e.frontmatter.author||n.siteMetadata.author}];return e.excerpt&&(r.push({name:"description",content:e.excerpt}),r.push({property:"og:description",content:e.excerpt})),e.frontmatter.date&&r.push({property:"article:published_time",content:e.frontmatter.date}),e.frontmatter.tags&&r.push({property:"article:tag",content:e.frontmatter.tags}),u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{meta:r}))};e.default=function(t){var e=t.data,n=e.mdx,o=n.frontmatter,c=n.body,a=n.excerpt;return u.a.createElement(l.a,null,u.a.createElement(f.a,{title:o.title,description:a}),u.a.createElement(s,{post:e.mdx,site:e.site}),u.a.createElement("h1",null,o.title),u.a.createElement("time",{datetime:p()(o.date,"yyyy-mm-dd")},p()(o.date,"dddd, mmmm dS, yyyy")),u.a.createElement(r.MDXRenderer,null,c))};var y="2485989800"},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},I5cv:function(t,e,n){var r=n("XKFU"),o=n("Kuth"),c=n("2OiF"),a=n("y3w9"),u=n("0/R4"),i=n("eeVq"),p=n("8MEG"),f=(n("dyZX").Reflect||{}).construct,l=i((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),s=!i((function(){f((function(){}))}));r(r.S+r.F*(l||s),"Reflect",{construct:function(t,e){c(t),a(e);var n=arguments.length<3?t:c(arguments[2]);if(s&&!l)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(p.apply(t,r))}var i=n.prototype,y=o(u(i)?i:Object.prototype),m=Function.apply.call(t,y,e);return u(m)?m:y}})},X8hv:function(t,e,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e,n){return(o=r()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var f=n("q1tI"),l=n("7ljp"),s=l.useMDXComponents,y=l.mdx,m=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,r=t.children,c=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),u=s(n),p=m(e),l=f.useMemo((function(){if(!r)return null;var t=i({React:f,mdx:y},p),e=Object.keys(t),n=e.map((function(e){return t[e]}));return o(Function,["_fn"].concat(a(e),[""+r])).apply(void 0,[{}].concat(a(n)))}),[r,e]);return f.createElement(l,i({components:u},c))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-jsx-665433f1f39662ef51af.js.map