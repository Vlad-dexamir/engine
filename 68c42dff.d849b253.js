(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?r.a.createElement(m,p(p({ref:t},l),{},{components:n})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(102)),o={id:"update",title:"update",sidebar_label:"update"},p={unversionedId:"api/update",id:"api/update",isDocsHomePage:!1,title:"update",description:"`ts",source:"@site/docs/api/update.md",permalink:"/engine/docs/api/update",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/update.md",sidebar_label:"update",sidebar:"docs",previous:{title:"get",permalink:"/engine/docs/api/get"},next:{title:"prop",permalink:"/engine/docs/api/prop"}},c=[{value:"Overview",id:"overview",children:[]},{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { update } from "@c11/engine.macro"\n')),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"update")," provides the ability to update values in the global state. ",Object(i.b)("inlineCode",{parentName:"p"},"update")," is\nthe dual of ",Object(i.b)("inlineCode",{parentName:"p"},"observe"),". ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/observe"}),"observe")," enables reading live values\nfrom state, ",Object(i.b)("inlineCode",{parentName:"p"},"update")," allows changing values in state."),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"update.<path>")," returns an object with following properties:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".set(value: any, params?: object)")," to replace the value of ",Object(i.b)("inlineCode",{parentName:"li"},"<path>")," in\nstate, or create it if it doesn't exist yet. ",Object(i.b)("inlineCode",{parentName:"li"},"params")," is an optional\nobject argument, the keys of which set the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/param"}),"param"),"s."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".merge(value: any, params?: object)")," accepts an object, and merge it with existing object value\nof ",Object(i.b)("inlineCode",{parentName:"li"},"<path>")," in state"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".remove(params?: object)")," removes the ",Object(i.b)("inlineCode",{parentName:"li"},"<path>")," from state"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".push(value: any, params?: object)")," if the value at the given ",Object(i.b)("inlineCode",{parentName:"li"},"<path>")," is an array, then the value will be appened to the array"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".pop(params?: object)")," if the value at the given ",Object(i.b)("inlineCode",{parentName:"li"},"<path>")," is an array, then the last element will be removed")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"If the state looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "foo": {\n    "bar": "baz"\n  }\n}\n')),Object(i.b)("p",null,"Operations to change the value of ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," can be obtained by assigning\n",Object(i.b)("inlineCode",{parentName:"p"},"update.foo.bar")," in the header of a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/view"}),"view"),". e.g"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const MyComponent: producer = ({ bar = update.foo.bar }) => {\n  bar.set('qux');\n  ...\n}\n")))}b.isMDXComponent=!0}}]);