(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+SuH":function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return m}));var n=r("A2+M"),o=r("TJpk"),c=r.n(o),a=r("q1tI"),u=r.n(a),i=r("ubkq"),p=r.n(i),l=r("DGZL"),f=r("wEiY"),s=r("ntAx"),y=function(t){var e=t.post,r=t.site,n=[{property:"og:type",content:"article"},{property:"article:author",content:e.frontmatter.author||r.siteMetadata.author}],o={"@context":"http://schema.org","@type":"Blog",author:f.a,publisher:f.a,blogPost:{"@type":"BlogPosting",headline:e.frontmatter.title}};return e.excerpt&&(n.push({name:"description",content:e.excerpt}),n.push({property:"og:description",content:e.excerpt})),e.frontmatter.date&&(n.push({property:"article:published_time",content:e.frontmatter.date}),o.blogPost.datePublished=e.frontmatter.date),e.frontmatter.tags&&(n.push({property:"article:tag",content:e.frontmatter.tags}),o.blogPost.keywords=e.frontmatter.tags.join(", ")),u.a.createElement(c.a,{meta:n},u.a.createElement("script",{type:"application/ld+json"},JSON.stringify(o)))};e.default=function(t){var e=t.data,r=e.mdx,o=r.frontmatter,c=r.body,a=r.excerpt;return u.a.createElement(s.a,null,u.a.createElement(l.a,{title:o.title,description:a}),u.a.createElement(y,{post:e.mdx,site:e.site}),u.a.createElement("h1",null,o.title),u.a.createElement("time",{dateTime:p()(o.date,"yyyy-mm-dd")},p()(o.date,"dddd, mmmm dS, yyyy")),u.a.createElement(n.MDXRenderer,null,c))};var m="851044460"},"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},I5cv:function(t,e,r){var n=r("XKFU"),o=r("Kuth"),c=r("2OiF"),a=r("y3w9"),u=r("0/R4"),i=r("eeVq"),p=r("8MEG"),l=(r("dyZX").Reflect||{}).construct,f=i((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),s=!i((function(){l((function(){}))}));n(n.S+n.F*(f||s),"Reflect",{construct:function(t,e){c(t),a(e);var r=arguments.length<3?t:c(arguments[2]);if(s&&!f)return l(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(p.apply(t,n))}var i=r.prototype,y=o(u(i)?i:Object.prototype),m=Function.apply.call(t,y,e);return u(m)?m:y}})},X8hv:function(t,e,r){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e,r){return(o=n()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("jm62"),r("yt8O"),r("RW0V"),r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("rGqo"),r("/SS/"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("/SS/"),r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var l=r("q1tI"),f=r("7ljp"),s=f.useMDXComponents,y=f.mdx,m=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,n=t.children,c=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["scope","components","children"]),u=s(r),p=m(e),f=l.useMemo((function(){if(!n)return null;var t=i({React:l,mdx:y},p),e=Object.keys(t),r=e.map((function(e){return t[e]}));return o(Function,["_fn"].concat(a(e),[""+n])).apply(void 0,[{}].concat(a(r)))}),[n,e]);return l.createElement(f,i({components:u},c))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-jsx-0d2038cc81365a6e1c9a.js.map