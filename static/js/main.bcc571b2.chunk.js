(this["webpackJsonpseo-react"]=this["webpackJsonpseo-react"]||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(17),r=n.n(o),s=(n(24),n(25),n(26),n(7)),l=n.n(s),i=n(10),u=n(11),p=function(){var e=Object(a.useState)({listOfPosts:[]}),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.slice(0,10),o({listOfPosts:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"All posts"),console.log("sdsdsd",n),c.a.createElement("ul",null,n.listOfPosts&&n.listOfPosts.map((function(e){return c.a.createElement("li",null,e.title)}))))},m=n(9),f=n(1),d=function(){var e=Object(a.useState)({post:{body:"",title:""}}),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(f.f)();return Object(a.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts".concat(r.location.pathname));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,o({post:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]),c.a.createElement(c.a.Fragment,null," ",n.post.title&&c.a.createElement("div",null,c.a.createElement("h2",null,n.post.title),c.a.createElement("article",null,n.post.body),c.a.createElement("p",null,c.a.createElement(m.b,{to:"/"},"Back to posts"))))};var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/",component:p}),c.a.createElement(f.a,{path:"/:id",component:d}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.bcc571b2.chunk.js.map