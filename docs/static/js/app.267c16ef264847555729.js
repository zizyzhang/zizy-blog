webpackJsonp([0],{"+2vY":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main container"},[t._m(0),t._v(" "),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.infoMarked)}})])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"avatar"}),t._v(" "),a("h1",[t._v("张子豪(Zizy)")])])}],s={render:n,staticRenderFns:i};e.a=s},"49G2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"diary",beforeRouteLeave:function(t,e,a){$("#diaryList").infiniteScroll("destroy"),console.log("destoryed"),a()},mounted:function(){var t=this;Pace.start(),axios.get("http://api.unclenoway.com:8083/posts/0/10").then(function(e){for(var a=0;a<e.data.length;a++)e.data[a].content=e.data[a].content.replace(/\n/g,"<br>").replace(/^<br>/,"");t.articles=e.data,Pace.stop()});var e=$("#diaryList").infiniteScroll({path:function(){return"http://api.unclenoway.com:8083/posts/"+10*(this.loadCount+1)+"/10"},responseType:"text",history:!1});e.on("load.infiniteScroll",function(e,a){var n=JSON.parse(a);t.articles=t.articles.concat(n),Pace.stop()}),e.on("request.infiniteScroll",function(t,e){Pace.start()})},data:function(){return{articles:this.getArticles(),isExpand:!1}},methods:{getArticles:function(){return[]},expand:function(t){$("#"+t).toggleClass("list-group-item-expand"),$("#"+t).children(".text").toggleClass("text-expand"),$("#"+t).children(".title").toggleClass("title-expand"),$("#"+t).children(".img").toggleClass("img-expand"),$("#"+t).children(".img").hasClass("img-expand")?($("#"+t).children(".img").height($("#"+t).children(".img").width()),$("#"+t).children(".day,.month").css("padding-top",$("#"+t).children(".img").height())):($("#"+t).children(".img").height("80px"),$("#"+t).children(".day,.month").css("padding-top","0px"))},getPath:function(t){return"http://localhost:8083/posts/"+t+"/10"}}}},"4OmK":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"entry-buttons"},[a("div",{class:{hidden:!0},staticStyle:{"text-align":"center"}},[a("b",[t._v("不支持在微信中打开此博客，请在浏览器中打开 http://zizy.me。")])]),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-block hidden",style:t.buttonDisplay,attrs:{to:"/diary"}},[t._v("Zizy的日记")]),t._v(" "),a("router-link",{staticClass:"btn btn-success btn-block hidden",style:t.buttonDisplay,attrs:{to:"/about"}},[t._v("关于Zizy")])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"avatar"}),t._v(" "),a("h1",[t._v("Zizy's Blog")])])}],s={render:n,staticRenderFns:i};e.a=s},Fs8J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",window:window,inWechat:"micromessenger"!==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i),buttonDisplay:{display:"block!important"}}}}},GZCg:function(t,e,a){"use strict";function n(t){a("h4mo")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("49G2"),s=a.n(i),r=a("cOBJ"),l=a("VU/8"),c=n,o=l(s.a,r.a,c,"data-v-dfdf8614",null);e.default=o.exports},GkBB:function(t,e){},M93x:function(t,e,a){"use strict";function n(t){a("N0pV")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("xJD8"),s=a.n(i),r=a("fX5I"),l=a("VU/8"),c=n,o=l(s.a,r.a,c,null,null);e.default=o.exports},N0pV:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a("7+uW"),s=n(i),r=a("M93x"),l=n(r),c=a("YaEn"),o=n(c);s.default.config.productionTip=!1;new s.default({el:"#app",router:o.default,data:{},template:"<App/>",components:{App:l.default}})},Wyip:function(t,e){t.exports="data:image/gif;base64,R0lGODlhtgEpAdUAAP8AAP8AAP/Nz/+anv9TW/9XX/+1tvzk5f8AAP8aMPrv8P98gP7Z2v+nqv8/Sv9rcP/Aw/+Okv+MkP3i4/ny8//T1f/HyPzo6vvu7/96f/j3+P+kp/+ws/+Fiv/a2/+srv+8vv+4uf+coP3k5v/Oz/8AAP89Sfzq7P/Exv/Z2fnz9P/Hyf////j5+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTM5OTc5MUEyODY2MTFFOThGRjFEMUI4RDE3Mjc1REUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTM5OTc5MUIyODY2MTFFOThGRjFEMUI4RDE3Mjc1REUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMzk5NzkxODI4NjYxMUU5OEZGMUQxQjhEMTcyNzVERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp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"},YaEn:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=n(i),r=a("/ocq"),l=n(r),c=a("GZCg"),o=n(c),u=a("c27y"),d=n(u),A=a("lO7g"),v=n(A);s.default.use(l.default),e.default=new l.default({routes:[{path:"/diary",name:"diary",component:o.default},{path:"/about",name:"about",component:d.default},{path:"/",name:"home",component:v.default}]})},Zs8U:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about",mounted:function(){},data:function(){return{msg:"Welcome to Your Vue.js App",preMarked:"\n---\n#### 简介:\n> 1. 香港大学CS研究生(MSc)毕业, 论文课题'DNN (Deep Neural Network) Based Singing Voice Synthesis System'\n> 2. 铭传大学(台湾)系排**1/151**, GPA: **94%** 毕业\n> 3. 深圳市未闻网络科技有限公司创始人\n> 4. 日均访问人数约**3万人**的网站「叔叔不约-匿名聊天网」创办人、全栈工程师\n> 5. 熟练掌握前端开发、Node.js全栈开发技能。对网站/App的开发、运营、维护、推广均有深刻了解。\n#### 联系方式:\n\n- e-mail : mezizy@live.com\n- wechat : mezizy\n\n#### 目前项目:\n\n**叔叔不约匿名聊天网 - 随机1对1匿名聊天平台 (WEB)\t**\n\n- 独立开发前端及后端程序(Node.js+MongoDB+SQLite+Vue.js+SUI等)\n- 进行相关SEO，运营和推广。成功在微博、贴吧、豆瓣等社群中获得很大关注。\n- 近期平均IP：3万/每日 （2018年6月）\n- 微信公众号人数**20w**以上\n- 从2016年4月开始**持续盈利**，会员平均复购率在**54%**以上\n- 网址:\n  - [www.unclenoway.com]()\n  - [www.shushubuyue.com]()\n\n\n\n> 编辑于2019年1月25日"}},computed:{infoMarked:function(){return markdown.toHTML(this.preMarked)}}}},c27y:function(t,e,a){"use strict";function n(t){a("GkBB")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Zs8U"),s=a.n(i),r=a("+2vY"),l=a("VU/8"),c=n,o=l(s.a,r.a,c,"data-v-34ebf080",null);e.default=o.exports},cOBJ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main container  "},[t._m(0),t._v(" "),0===t.articles.length?a("div",{staticClass:"loading"},[t._v("加载中，请稍后...")]):t._e(),t._v(" "),a("div",{staticClass:"content ",attrs:{id:"diaryList"}},[a("ul",{staticClass:"list-group"},t._l(t.articles,function(e,n){return a("div",[0===n||t.articles.length>1&&(t.articles[n-1]&&new Date(t.articles[n-1].date)).getYear()!==new Date(e.date).getYear()?a("li",{staticClass:"year"},[a("div",[t._v("\n            "+t._s(new Date(e.date).getYear()+1900)+"年\n          ")])]):t._e(),t._v(" "),a("div",{staticClass:"list-group-item list-group-item-action diary-list-item",class:{"list-group-item-expand":t.isExpand},attrs:{id:e.id},on:{click:function(a){t.expand(e.id)}}},[e.img_url?a("div",{staticClass:"img",class:{"img-expand":t.isExpand},style:{"background-image":"url(http://qiniu-zizyblog.shushubuyue.net/"+e.img_url.replace("http://owdi2r4ca.bkt.clouddn.com/","")+")"}}):t._e(),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(e.title.replace(/[#*]/g,"")))]),t._v(" "),a("div",{staticClass:"text",class:{"text-expand":t.isExpand},domProps:{innerHTML:t._s(e.content)}}),t._v(" "),a("div",{staticClass:"month"},[t._v(t._s(new Date(e.date).getUTCMonth()+1)+"月")]),t._v(" "),a("div",{staticClass:"day"},[t._v(t._s(new Date(e.date).getUTCDate()))])])])}))])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"avatar"}),t._v(" "),a("h1",[t._v("Zizy's life")]),t._v(" "),a("div",[t._v("---每周一更新---")])])}],s={render:n,staticRenderFns:i};e.a=s},fX5I:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light",attrs:{id:"app"}},[n("div",{class:{hidden:!0},staticStyle:{position:"absolute","z-index":"999"}},[n("img",{attrs:{src:a("Wyip"),alt:""}})]),t._v(" "),n("nav",{staticClass:"navbar navbar-expand navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Zizy's Blog")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item "},[n("router-link",{staticClass:"nav-link nav-diary",attrs:{to:"/diary",name:"diary"}},[t._v("日记")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link nav-about",attrs:{to:"/about",name:"about"}},[t._v("关于")])],1)])])]),t._v(" "),n("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s={render:n,staticRenderFns:i};e.a=s},h4mo:function(t,e){},lO7g:function(t,e,a){"use strict";function n(t){a("qb5l")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Fs8J"),s=a.n(i),r=a("4OmK"),l=a("VU/8"),c=n,o=l(s.a,r.a,c,"data-v-57ad1f08",null);e.default=o.exports},qb5l:function(t,e){},xJD8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.267c16ef264847555729.js.map