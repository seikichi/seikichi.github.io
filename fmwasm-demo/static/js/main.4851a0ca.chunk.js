(window["webpackJsonpsearch-soseki"]=window["webpackJsonpsearch-soseki"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(11),n(1)),i=n.n(s),u=n(3),l=n(2);n(13),n(14);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],o=t[1],s=Object(a.useState)(null),f=Object(l.a)(s,2),h=f[0],m=f[1],p=Object(a.useState)([]),b=Object(l.a)(p,2),w=b[0],v=b[1],d=Object(a.useState)([]),j=Object(l.a)(d,2),k=j[0],x=j[1],E=Object(a.useCallback)((function(e){return o(e.target.value)}),[o]);return Object(a.useEffect)((function(){Object(u.a)(i.a.mark((function e(){var t,a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.e(3).then(n.bind(null,17));case 3:return t=e.sent,a=t.FMIndex,e.next=7,fetch("./soseki.bincode");case 7:return r=e.sent,e.next=10,r.arrayBuffer();case 10:c=e.sent,m(a.from(new Uint8Array(c))),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("Error: ".concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}),[]),Object(a.useEffect)((function(){Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./soseki.json");case 3:return t=e.sent,e.t0=v,e.next=7,t.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),alert("Error: ".concat(e.t2));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[]),Object(a.useEffect)((function(){if(h&&0!==w.length&&""!==c){for(var e=h.search(c),t=e.start,n=e.end,a=[],r=t;r<Math.min(n,t+20);r++){for(var o=h.locate(r),s="",i=0;i<w.length;i++)if(w[i][0]>=o){s=w[i][1];break}var u="...".concat(h.previous_string(r,10)).concat(c,"...");a.push({id:s,text:u})}x(a)}}),[h,w,c]),r.a.createElement("div",{className:"App"},r.a.createElement("p",null,r.a.createElement("a",{href:"://github.com/seikichi/fmwasm"},"@seikichi/fmwasm"),"\u3067\u4f5c\u3063\u305f FM-index \u3092 wasm \u3067\u5229\u7528\u3057\u3066\u30d6\u30e9\u30a6\u30b6\u3067\u5168\u6587\u691c\u7d22\u3059\u308b\u30c7\u30e2\u3002 \u9752\u7a7a\u6587\u5eab\u306e\u590f\u76ee\u6f31\u77f3\u306e\u5c0f\u8aac\u3092\u691c\u7d22\u3057\u307e\u3059 (\u8868\u793a\u6570\u6700\u5927 20)\u3002"),r.a.createElement("input",{type:"text",value:c,onChange:E}),r.a.createElement("ul",null,k.map((function(e){var t=e.id,n=e.text;return r.a.createElement("li",{key:"".concat(t,"-").concat(n)},n,"(",r.a.createElement("a",{href:"https://www.aozora.gr.jp/cards/000148/files/".concat(t,".html")},"\u672c\u6587"),")")}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.4851a0ca.chunk.js.map