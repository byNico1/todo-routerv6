(this["webpackJsonpcurso-react-router-proyecto2"]=this["webpackJsonpcurso-react-router-proyecto2"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(11),a=n.n(c),i=n(9),l=n(2),s=n(4),u=(n(17),n(1));function d(e){var t=Object(l.f)(),n=r.a.useState(e.defaultTodoText||""),o=Object(s.a)(n,2),c=o[0],a=o[1];return Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.submitEvent(c),t("/")},children:[Object(u.jsx)("label",{children:e.label}),Object(u.jsx)("textarea",{value:c,onChange:function(e){a(e.target.value)},placeholder:"Cortar la cebolla oara el almuerzo"}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){t("/")},children:"Cancelar"}),Object(u.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:e.submitText})]})]})}var j=n(8),b=n(6),f=n(5);function O(e,t){var n=r.a.useReducer(h,p({initialValue:t})),o=Object(s.a)(n,2),c=o[0],a=o[1],i=c.sincronizedItem,l=c.error,u=c.loading,d=c.item,j=function(e){return a({type:m.error,payload:e})};r.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),function(e){a({type:m.success,payload:e})}(n)}catch(l){j(l)}}),1e3)}),[i]);return{item:d,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),function(e){a({type:m.save,payload:e})}(t)}catch(l){j(l)}},loading:u,error:l,sincronizeItem:function(){a({type:m.sincronize})}}}var p=function(e){return{sincronizedItem:!0,error:!1,loading:!0,item:e.initialValue}},m={error:"ERROR",success:"SUCCESS",save:"SAVE",sincronize:"SINCRONIZE"},h=function(e,t){return function(e,t){var n;return n={},Object(b.a)(n,m.error,Object(f.a)(Object(f.a)({},e),{},{error:!0})),Object(b.a)(n,m.success,Object(f.a)(Object(f.a)({},e),{},{error:!1,loading:!1,sincronizedItem:!0,item:t})),Object(b.a)(n,m.save,Object(f.a)(Object(f.a)({},e),{},{item:t})),Object(b.a)(n,m.sincronize,Object(f.a)(Object(f.a)({},e),{},{sincronizedItem:!1,loading:!0})),n}(e,t.payload)[t.type]||e};function v(){var e=O("TODOS_V2",[]),t=e.item,n=e.saveItem,o=e.sincronizeItem,c=e.loading,a=e.error,i=r.a.useState(""),l=Object(s.a)(i,2),u=l[0],d=l[1],b=t.filter((function(e){return!!e.completed})).length,f=t.length,p=[];p=!u.length>=1?t:t.filter((function(e){var t=e.text.toLowerCase(),n=u.toLowerCase();return t.includes(n)}));return{state:{loading:c,error:a,totalTodos:f,completedTodos:b,searchValue:u,searchedTodos:p,getTodo:function(e){var n=t.findIndex((function(t){return t.id===e}));return console.log(t[n]),t[n]}},stateUpdaters:{setSearchValue:d,addTodo:function(e){var o=function(e){if(!e.length)return 1;var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(j.a)(t))+1}(t),r=Object(j.a)(t);r.push({completed:!1,text:e,id:o}),n(r)},completeTodo:function(e){var o=t.findIndex((function(t){return t.id===e})),r=Object(j.a)(t);r[o].completed=!0,n(r)},editTodo:function(e,o){var r=t.findIndex((function(t){return t.id===e})),c=Object(j.a)(t);c[r].text=o,n(c)},deleteTodo:function(e){var o=t.findIndex((function(t){return t.id===e})),r=Object(j.a)(t);r.splice(o,1),n(r)},sincronizeTodos:o}}}function x(){var e,t,n=Object(l.e)(),o=Object(l.g)(),r=Number(o.id),c=v(),a=c.stateUpdaters,i=c.state,s=a.editTodo,j=i.getTodo,b=i.loading;if(null===(e=n.state)||void 0===e?void 0:e.todo)t=n.state.todo.text;else{if(b)return Object(u.jsx)("p",{children:"cargando"});t=j(r).text}return Object(u.jsx)(d,{label:"Edita tu TODO",defaultTodoText:t,submitText:"Editar",submitEvent:function(e){return s(r,e)}})}function g(e){var t=e.children,n=e.loading;return Object(u.jsx)("header",{children:r.a.Children.toArray(t).map((function(e){return r.a.cloneElement(e,{loading:n})}))})}n(19);function T(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return Object(u.jsxs)("h2",{className:"TodoCounter ".concat(!!o&&"TodoCounter--loading"),children:["Has completado ",n," de ",t," TODOs"]})}n(20);function y(e){var t=e.searchValue,n=e.setSearchValue,o=e.loading;return Object(u.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)},disabled:o})}n(21);function I(e){var t=e.children||e.render;return Object(u.jsxs)("section",{className:"TodoList-container",children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchResults(e.searchText),!e.loading&&!e.error&&e.searchedTodos.map(t)]})}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=o.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"});function w(e,t){var n=e.title,r=e.titleId,c=E(e,["title","titleId"]);return o.createElement("svg",C({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,S)}var N=o.forwardRef(w);n.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var z=o.createElement("path",{d:"M0 18.9993V24H5.00069L19.756 9.24459L14.7553 4.2439L0 18.9993Z"}),D=o.createElement("path",{d:"M23.6099 3.5038L20.4961 0.390054C19.9761 -0.130018 19.1293 -0.130018 18.6092 0.390054L16.1689 2.83039L21.1695 7.83108L23.6099 5.39074C24.13 4.87067 24.13 4.02387 23.6099 3.5038Z"});function V(e,t){var n=e.title,r=e.titleId,c=k(e,["title","titleId"]);return o.createElement("svg",L({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,z,D)}var P=o.forwardRef(V);n.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M=o.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"});function A(e,t){var n=e.title,r=e.titleId,c=F(e,["title","titleId"]);return o.createElement("svg",R({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,M)}var B=o.forwardRef(A),J=(n.p,n(22),{check:function(e){return Object(u.jsx)(N,{className:"Icon-svg Icon-svg--check",fill:e})},edit:function(e){return Object(u.jsx)(P,{className:"Icon-svg Icon-svg--edit",fill:e})},delete:function(e){return Object(u.jsx)(B,{className:"Icon-svg Icon-svg--delete",fill:e})}});function U(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick;return Object(u.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:J[t](o)})}function H(e){var t=e.completed,n=e.onComplete;return Object(u.jsx)(U,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function Z(e){var t=e.onEdit;return Object(u.jsx)(U,{type:"edit",onClick:t})}function _(e){var t=e.onDelete;return Object(u.jsx)(U,{type:"delete",onClick:t})}n(23);function q(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)(H,{completed:e.completed,onComplete:e.onComplete}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)(Z,{onEdit:e.onEdit}),Object(u.jsx)(_,{onDelete:e.onDelete})]})}function Q(){return Object(u.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(24);function Y(){return Object(u.jsxs)("div",{className:"LoadingTodo-container",children:[Object(u.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(u.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(u.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function G(){return Object(u.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}n(25);function K(e){return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:e.onClick,children:"+"})}n(26);n(27);function W(e){var t=function(e){var t=r.a.useState(!1),n=Object(s.a)(t,2),o=n[0],c=n[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&(console.log("Hubo cambios en TODOS_V1"),c(!0))})),{show:o,toggleShow:function(){e(),c(!1)}}}(e.sincronize),n=t.show,o=t.toggleShow;return n?Object(u.jsx)("div",{className:"ChangeAlert-bg",children:Object(u.jsxs)("div",{className:"ChangeAlert-container",children:[Object(u.jsx)("p",{children:"Parece que cambiaste tus TODOs en otra pesta\xf1a o ventana del navegador."}),Object(u.jsx)("p",{children:"\xbfQuieres sincronizar tus TODOs?"}),Object(u.jsx)("button",{className:"TodoForm-button TodoForm-button--add",onClick:o,children:"Yes!"})]})}):null}function X(){var e=Object(l.f)(),t=v(),n=t.state,o=t.stateUpdaters,c=n.error,a=n.loading,i=n.searchedTodos,s=n.totalTodos,d=n.completedTodos,j=n.searchValue,b=o.completeTodo,f=o.deleteTodo,O=o.setSearchValue,p=o.sincronizeTodos;return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsxs)(g,{loading:a,children:[Object(u.jsx)(T,{totalTodos:s,completedTodos:d}),Object(u.jsx)(y,{searchValue:j,setSearchValue:O})]}),Object(u.jsx)(I,{error:c,loading:a,totalTodos:s,searchedTodos:i,searchText:j,onError:function(){return Object(u.jsx)(Q,{})},onLoading:function(){return Object(u.jsx)(Y,{})},onEmptyTodos:function(){return Object(u.jsx)(G,{})},onEmptySearchResults:function(e){return Object(u.jsxs)("p",{children:["No hay resultados para ",e]})},children:function(t){return Object(u.jsx)(q,{text:t.text,completed:t.completed,onEdit:function(){e("/edit/"+t.id,{state:{todo:t}})},onComplete:function(){return b(t.id)},onDelete:function(){return f(t.id)}},t.id)}}),Object(u.jsx)(K,{onClick:function(){return e("/new")}}),Object(u.jsx)(W,{sincronize:p})]})}function $(){var e=v().stateUpdaters.addTodo;return Object(u.jsx)(d,{label:"Escribe tu nuevo TODO",submitText:"A\xf1adir",submitEvent:function(t){return e(t)}})}function ee(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",element:Object(u.jsx)(X,{})}),Object(u.jsx)(l.a,{path:"/new",element:Object(u.jsx)($,{})}),Object(u.jsx)(l.a,{path:"/edit/:id",element:Object(u.jsx)(x,{})}),Object(u.jsx)(l.a,{path:"*",element:Object(u.jsx)("p",{children:"Not Found"})})]})})}n(28);a.a.render(Object(u.jsx)(ee,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.0aef1cb0.chunk.js.map