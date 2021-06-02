(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,l(l({ref:t},c),{},{components:n})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(102)),i={id:"flags",title:"Flags",sidebar_label:"Flags"},l={unversionedId:"patterns/flags",id:"patterns/flags",isDocsHomePage:!1,title:"Flags",description:"Flags store conclusions regarding the state of some data. Usually a producer",source:"@site/docs/patterns/flags.md",permalink:"/engine/docs/patterns/flags",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/patterns/flags.md",sidebar_label:"Flags",sidebar:"docs",previous:{title:"Collections",permalink:"/engine/docs/patterns/collections"},next:{title:"Request-Response",permalink:"/engine/docs/patterns/request-response"}},s=[],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Flags store conclusions regarding the state of some data. Usually a producer\nwill observe some data and then update a single location with flag information.\nIn this way decisions avoid being computed where they are needed and instead\nrely on the state to provide this information."),Object(o.b)("p",null,"Keeping flags on the state decreases complexity and helps code to be more\nmodular."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"user.isAuth")," is populated by a producer that uses different sources (local\nstorage, session, etc) to determine wheter the user has a valid session or not,\nand stores this information in the state."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"{\n  user: {\n    isAuth: true\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"balloons.items.*.isInflated")," is populated by a producer that observes\n",Object(o.b)("inlineCode",{parentName:"p"},"ballons.items.*.capacity")," and ",Object(o.b)("inlineCode",{parentName:"p"},"balloons.items.*.air"),". If the air will equal the\ncapacity it will update the path with ",Object(o.b)("inlineCode",{parentName:"p"},"true")," otherwise, it'll be ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"balloons.areInflated")," is populated by a producer that observes\n",Object(o.b)("inlineCode",{parentName:"p"},"balloons.items.*.isInflated")," and ",Object(o.b)("inlineCode",{parentName:"p"},"balloons.count")," and will update the\n",Object(o.b)("inlineCode",{parentName:"p"},"areInflated")," path once the ",Object(o.b)("inlineCode",{parentName:"p"},"isInflated")," count is equal to the ",Object(o.b)("inlineCode",{parentName:"p"},"balloons.count")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  balloons: {\n    items: {\n      "abc": {\n        isInflated: false,\n        air: 40,\n        capacity: 100,\n      },\n      "xyz": {\n        isInflated: true,\n        air: 80,\n        capacity: 80,\n      }\n    },\n    count: 2,\n    areInflated: false,\n  }\n\n}\n')))}p.isMDXComponent=!0}}]);