(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+SuH":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return d}));var r=n("A2+M"),o=n("TJpk"),c=n.n(o),a=n("q1tI"),i=n.n(a),u=n("ubkq"),p=n.n(u),l=n("DGZL"),f=n("wEiY"),s=n("ntAx"),y=function(t){var e=t.post,n=t.site,r=[{property:"og:type",content:"article"},{property:"article:author",content:e.frontmatter.author||n.siteMetadata.author}],o={"@context":"http://schema.org","@type":"Blog",blogPost:{"@type":"BlogPosting",author:f.c,publisher:f.b,headline:e.frontmatter.title,mainEntityOfPage:"https://spenserj.com{post.slug}"}};return e.excerpt&&(r.push({name:"description",content:e.excerpt}),r.push({property:"og:description",content:e.excerpt})),e.frontmatter.date&&(r.push({property:"article:published_time",content:e.frontmatter.date}),o.blogPost.datePublished=e.frontmatter.date,o.blogPost.dateModified=e.lastModified||e.frontmatter.date),e.frontmatter.tags&&(r.push({property:"article:tag",content:e.frontmatter.tags}),o.blogPost.keywords=e.frontmatter.tags.join(", ")),i.a.createElement(c.a,{meta:r},i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(o)))};e.default=function(t){var e=t.data,n=e.mdx,o=n.frontmatter,c=n.body,a=n.excerpt;return i.a.createElement(s.a,null,i.a.createElement(l.a,{title:o.title,description:a}),i.a.createElement(y,{post:e.mdx,site:e.site}),i.a.createElement("h1",null,o.title),i.a.createElement("time",{dateTime:p()(o.date,"yyyy-mm-dd")},p()(o.date,"dddd, mmmm dS, yyyy")),i.a.createElement(r.MDXRenderer,null,c))};var d="812073161"},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},I5cv:function(t,e,n){var r=n("XKFU"),o=n("Kuth"),c=n("2OiF"),a=n("y3w9"),i=n("0/R4"),u=n("eeVq"),p=n("8MEG"),l=(n("dyZX").Reflect||{}).construct,f=u((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),s=!u((function(){l((function(){}))}));r(r.S+r.F*(f||s),"Reflect",{construct:function(t,e){c(t),a(e);var n=arguments.length<3?t:c(arguments[2]);if(s&&!f)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(p.apply(t,r))}var u=n.prototype,y=o(i(u)?u:Object.prototype),d=Function.apply.call(t,y,e);return i(d)?d:y}})},X8hv:function(t,e,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e,n){return(o=r()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var l=n("q1tI"),f=n("7ljp"),s=f.useMDXComponents,y=f.mdx,d=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,r=t.children,c=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),i=s(n),p=d(e),f=l.useMemo((function(){if(!r)return null;var t=u({React:l,mdx:y},p),e=Object.keys(t),n=e.map((function(e){return t[e]}));return o(Function,["_fn"].concat(a(e),[""+r])).apply(void 0,[{}].concat(a(n)))}),[r,e]);return l.createElement(f,u({components:i},c))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-jsx-afafaaed03b35bfed9ff.js.map