(this.webpackJsonpmario=this.webpackJsonpmario||[]).push([[0],{367:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(39),r=a.n(i),s=a(72),d=a(175),o=a(61),l=a.n(o),j=a(176),b=a.n(j),h=a(177),u=a(372),f=a(373),m=a(377),x=a(194),O=a(195),v=a(197),g=a(193),p=a(191),y={Eat_my_dust:"#fff","\u6211\u7238\u8aaa\u5c0d\u5c31\u968a":"#222222","\u6211\u5011\u5f88\u5f37\u5c0d\u4e0d\u968a":"#4174ed","\u8eca\u5c3e\u71c8\u7814\u7a76\u5927\u968a":"#F251A4"},w=a(17),k=function(e){var t=e.x,a=e.y,n=e.width,c=e.value;return Object(w.jsx)("g",{children:Object(w.jsx)("text",{x:t+n-60,y:a+18,fill:"#ebc21e",textAnchor:"middle",dominantBaseline:"middle","font-size":"1.3em",children:"\u6bcf\u4eba: $".concat(c)})})},L=function(e){var t=e.data,a=e.isLoading,n=Object(h.a)(),c=n.width,i=n.ref;return console.log("data",t),a?Object(w.jsx)("div",{}):Object(w.jsxs)("div",{className:"rechart-wapper-div",ref:i,children:[Object(w.jsx)("div",{className:"chart_title",children:"\u62bc\u6ce8\u7372\u52dd\u91d1\u984d"}),Object(w.jsx)(u.a,{width:c,height:300,children:Object(w.jsxs)(f.a,{data:t,layout:"vertical",margin:{top:5,right:10,left:80,bottom:10},children:[Object(w.jsx)(m.a,{strokeDasharray:"3 3"}),Object(w.jsx)(x.a,{type:"number",tick:{stroke:"#fff",strokeWidth:1}}),Object(w.jsx)(O.a,{dataKey:"name",type:"category",tick:{stroke:"#fff",strokeWidth:1,fontSize:"18px"}}),Object(w.jsxs)(v.a,{dataKey:"winPay",fill:"#8884d8",barSize:30,children:[t.map((function(e,t){return Object(w.jsx)(g.a,{fill:y[e.name]},"cell-".concat(t))})),Object(w.jsx)(p.a,{dataKey:"winPay",content:k})]})]})})]})};var N=function(){var e=Object(s.useQuery)("todos",Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://script.google.com/macros/s/AKfycbwkYaLVJNPhtLzfdiRzIQaROm6_g4b4FkR_vWLsm6gLuP39ZTBY7BrBvishJaYSCqqC/exec");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),{refetchInterval:3e4}),t=e.status,a=e.data;return Object(w.jsx)("div",{className:"app_main",children:Object(w.jsx)("div",{className:"body",children:Object(w.jsxs)("div",{className:"view mt-20 mx-20",children:[Object(w.jsx)("div",{className:"title mt-20",children:"\u99ac\u5229\u6b50\u8cfd\u8eca TUTK \u76c3"}),Object(w.jsx)("div",{className:"content",children:Object(w.jsx)(L,{data:a&&a.data,isLoading:"loading"===t})})]})})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,379)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},P=(a(367),new s.QueryClient);r.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(s.QueryClientProvider,{client:P,children:Object(w.jsx)(N,{})})}),document.getElementById("root")),C()}},[[368,1,2]]]);
//# sourceMappingURL=main.8f9e0f46.chunk.js.map