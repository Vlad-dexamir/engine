(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(a),d=n,u=l["".concat(i,".").concat(d)]||l[d]||m[d]||o;return a?r.a.createElement(u,c(c({ref:t},s),{},{components:a})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(102)),i={id:"path-composition",title:"Path Composition",sidebar_label:"Path Composition"},c={unversionedId:"concepts/path-composition",id:"concepts/path-composition",isDocsHomePage:!1,title:"Path Composition",description:'"Path" is the location of a property in state. e.g if the state looks like:',source:"@site/docs/concepts/path-composition.md",permalink:"/engine/docs/concepts/path-composition",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/concepts/path-composition.md",sidebar_label:"Path Composition",sidebar:"docs",previous:{title:"State",permalink:"/engine/docs/concepts/state"},next:{title:"Packages",permalink:"/engine/docs/packages"}},p=[],s={rightToc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'"Path" is the location of a property in state. e.g if the state looks like:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const State = {\n  foo: {\n    bar: {\n      baz: "BAZZZ!"\n    }\n  }\n}\n')),Object(o.b)("p",null,"Then path for ",Object(o.b)("inlineCode",{parentName:"p"},"baz")," is ",Object(o.b)("inlineCode",{parentName:"p"},".foo.bar.baz"),"."),Object(o.b)("p",null,"Path composition is creating new paths by combining smaller paths. It sounds\nsimple, because it is. It is also one of the most important (and occasionally\nconfusing) aspects of building applications with Engine."),Object(o.b)("p",null,"Conceptually, Paths can be static or dynamic. A path can be considered static\nwhen you know exactly where the data you're interested in is. e.g ",Object(o.b)("inlineCode",{parentName:"p"},".foo.bar.baz"),"\nin example above."),Object(o.b)("p",null,"A path is dynamic when its exact location is known at runtime, and is calculated\nat runtime depending on runtime values like props given to the view, data from\nthe state (e.g. an might store a ",Object(o.b)("inlineCode",{parentName:"p"},"selectedId")," in state), or local variables."),Object(o.b)("p",null,"Engine provides following path composition operators for creating paths, and\ncomposing them together:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/prop"}),"prop")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/arg"}),"arg")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/param"}),"param")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/wildcard"}),"wildcard")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/path"}),"path"))),Object(o.b)("p",null,"Paths composed using these operators can be used with all 3 state manipulation\noperators i.e with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/observe"}),"observe"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/get"}),"get")," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/update"}),"update")),Object(o.b)("p",null,"All Engine path composition operators (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/arg"}),"arg"),",\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/get"}),"get"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/prop"}),"prop"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/param"}),"param"),",\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/update"}),"update"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/observe"}),"observe"),") can be given any\narbitrarily nested path (e.g ",Object(o.b)("inlineCode",{parentName:"p"},"arg.b1.b2.b3"),") regardless of whether the given\npath exists in state or not. Engine won't throw an error if an invalid path is\ngiven to these operators."))}b.isMDXComponent=!0}}]);