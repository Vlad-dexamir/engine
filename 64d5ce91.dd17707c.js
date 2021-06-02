(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{102:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),b=o,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return t?r.a.createElement(m,i(i({ref:n},p),{},{components:t})):r.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(2),r=t(6),a=(t(0),t(102)),c={id:"introducing-producers",title:"Introducing Producers",sidebar_label:"Producers"},i={unversionedId:"tutorials/react/introducing-producers",id:"tutorials/react/introducing-producers",isDocsHomePage:!1,title:"Introducing Producers",description:"producers are the central concept of Engine. Engine",source:"@site/docs/tutorials/react/introducing-producers.md",permalink:"/engine/docs/tutorials/react/introducing-producers",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/tutorials/react/introducing-producers.md",sidebar_label:"Producers",sidebar:"docs",previous:{title:"Updating State from Components",permalink:"/engine/docs/tutorials/react/updating-state-from-components"},next:{title:"State as Communication Channel",permalink:"/engine/docs/tutorials/react/state-as-communication-channel"}},s=[],p={rightToc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/producer"}),"producer"),"s are the central concept of Engine. Engine\nrecommends that our components should only represent the view, and have as\nlittle logic as possible. Producers are where the logic lives in an Engine app."),Object(a.b)("p",null,"Simplest place to see producers in action can be Todo list's footer. A producer\nwill count the number of pending todos, and show them in the view. Extract\n",Object(a.b)("inlineCode",{parentName:"p"},"Footer")," out of ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.tsx")," into its own component. Create ",Object(a.b)("inlineCode",{parentName:"p"},"src/Footer.tsx"),"\nwith following contents:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\n\nconst Footer = () => (\n  <footer className="footer">\n    <span className="todo-count">\n      <strong>1</strong> items left\n    </span>\n    <ul className="filters">\n      <li>\n        <a href="#/" className="selected">\n          All\n        </a>\n      </li>\n      <li>\n        <a href="#/active">Active</a>\n      </li>\n      <li>\n        <a href="#/completed">Completed</a>\n      </li>\n    </ul>\n    <button className="clear-completed">Clear completed</button>\n  </footer>\n);\n\nexport default Footer;\n')),Object(a.b)("p",null,"Update ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.tsx")," to use ",Object(a.b)("inlineCode",{parentName:"p"},"Footer"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'+ import Footer from "./Footer";\n...\n-    <footer className="footer">\n-      <span className="todo-count">\n-        <strong>1</strong> items left\n-      </span>\n-      <ul className="filters">\n-        <li>\n-          <a href="#/" className="selected">\n-            All\n-          </a>\n-        </li>\n-        <li>\n-          <a href="#/active">Active</a>\n-        </li>\n-        <li>\n-          <a href="#/completed">Completed</a>\n-        </li>\n-      </ul>\n-      <button className="clear-completed">Clear completed</button>{" "}\n-    </footer>\n+    <Footer />\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Footer")," will trust that ",Object(a.b)("inlineCode",{parentName:"p"},"pendingCount")," is going to be available in the state,\nand that ",Object(a.b)("inlineCode",{parentName:"p"},"it'll always contain the correct number of pending todo items. Update\n"),"src/Footer.tsx` based on this assumption:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'+ import { view, observe } from "@c11/engine.macro";\n- const Footer = () => (\n+ const Footer: view = ({ pendingCount = observe.pendingCount }) => (\n  <footer className="footer">\n    <span className="todo-count">\n-     <strong>1</strong> items left\n+     <strong>{pendingCount}</strong> items left\n    </span>\n    <ul className="filters">\n')),Object(a.b)("p",null,"The logic for counting pending items in the ",Object(a.b)("inlineCode",{parentName:"p"},"Footer")," itself, in fact, in a\ntraditional React app that's exactly what we would have done. But Engine\nstrongly recommends that business logic should be kept out of ",Object(a.b)("inlineCode",{parentName:"p"},"view"),"s, and put\nit in ",Object(a.b)("inlineCode",{parentName:"p"},"producer"),"s. Add a ",Object(a.b)("inlineCode",{parentName:"p"},"producer")," to the Footer. In ",Object(a.b)("inlineCode",{parentName:"p"},"src/Footer.tsx"),", add\n",Object(a.b)("inlineCode",{parentName:"p"},"pendingCounter")," producer:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),"+ const pendingCounter: producer = ({\n+   updatePendingCount = update.pendingCount,\n+   todosById = observe.todosById\n+ }) => {\n+   const pendingCount = Object.values(\n+     todosById as { [id: string]: TodoItem }\n+   ).reduce(\n+     (accum: number, todo) =>\n+       todo.status === TodoStatuses.done ? accum : accum + 1,\n+     0\n+   );\n+\n+   updatePendingCount.set(pendingCount);\n+ };\n+\n+ (Footer as any).producers = [pendingCounter];\n\nexport default Footer;\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"producer"),"s are just normal functions which are labeled with\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/producer"}),"producer")," macro. They can access the state the same way as\n",Object(a.b)("inlineCode",{parentName:"p"},"view"),"s; they even have access to ",Object(a.b)("inlineCode",{parentName:"p"},"prop"),"s that a view might get from its parent."),Object(a.b)("p",null,"To add a producer to a component, ",Object(a.b)("inlineCode",{parentName:"p"},".producers")," property of a view is given an\narray of producers."),Object(a.b)("p",null,"Similar to ",Object(a.b)("inlineCode",{parentName:"p"},"view"),"s, a producer is triggered whenever anything that it ",Object(a.b)("inlineCode",{parentName:"p"},"observe"),"s\nchanges. ",Object(a.b)("inlineCode",{parentName:"p"},"pendingCounter")," producer Observes ",Object(a.b)("inlineCode",{parentName:"p"},"todosById")," object, so whenever\nanything in todosById changes, this producer is executed. Whenever status of any\ntodo item is updated, ",Object(a.b)("inlineCode",{parentName:"p"},"pendingCount")," gets updated accordingly."),Object(a.b)("p",null,"In the next chapter, we'll take a look at how producers make it possible to a\nvery create workflow for view <-> producer communication."))}l.isMDXComponent=!0}}]);