webpackJsonp([0],{"+2vY":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main container"},[t._m(0),t._v(" "),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.infoMarked)}})])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"avatar"}),t._v(" "),a("h1",[t._v("张子豪(Zizy)")])])}],s={render:n,staticRenderFns:i};e.a=s},"49G2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"diary",beforeRouteLeave:function(t,e,a){$("#diaryList").infiniteScroll("destroy"),console.log("destoryed"),a()},mounted:function(){var t=this;Pace.start(),axios.get("http://api.unclenoway.com:8083/posts/0/10").then(function(e){for(var a=0;a<e.data.length;a++)e.data[a].content=e.data[a].content.replace(/\n/g,"<br>").replace(/^<br>/,"");t.articles=e.data,Pace.stop()});var e=$("#diaryList").infiniteScroll({path:function(){return"http://api.unclenoway.com:8083/posts/"+10*(this.loadCount+1)+"/10"},responseType:"text",history:!1});e.on("load.infiniteScroll",function(e,a){var n=JSON.parse(a);t.articles=t.articles.concat(n),Pace.stop()}),e.on("request.infiniteScroll",function(t,e){Pace.start()})},data:function(){return{articles:this.getArticles(),isExpand:!1}},methods:{getArticles:function(){return[]},expand:function(t){$("#"+t).toggleClass("list-group-item-expand"),$("#"+t).children(".text").toggleClass("text-expand"),$("#"+t).children(".title").toggleClass("title-expand"),$("#"+t).children(".img").toggleClass("img-expand"),$("#"+t).children(".img").hasClass("img-expand")?($("#"+t).children(".img").height($("#"+t).children(".img").width()),$("#"+t).children(".day,.month").css("padding-top",$("#"+t).children(".img").height())):($("#"+t).children(".img").height("80px"),$("#"+t).children(".day,.month").css("padding-top","0px"))},getPath:function(t){return"http://localhost:8083/posts/"+t+"/10"}}}},"4OmK":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"entry-buttons"},[a("div",{class:{hidden:!0},staticStyle:{"text-align":"center"}},[a("b",[t._v("不支持在微信中打开此博客，请在浏览器中打开 http://zizy.me。")])]),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-block hidden",style:t.buttonDisplay,attrs:{to:"/diary"}},[t._v("Zizy的日记")]),t._v(" "),a("router-link",{staticClass:"btn btn-success btn-block hidden",style:t.buttonDisplay,attrs:{to:"/about"}},[t._v("关于Zizy")])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"avatar"}),t._v(" "),a("h1",[t._v("Zizy's Blog")])])}],s={render:n,staticRenderFns:i};e.a=s},Fs8J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",window:window,inWechat:"micromessenger"!==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i),buttonDisplay:{display:"block!important"}}}}},GZCg:function(t,e,a){"use strict";function n(t){a("h4mo")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("49G2"),s=a.n(i),r=a("cOBJ"),c=a("VU/8"),l=n,o=c(s.a,r.a,l,"data-v-dfdf8614",null);e.default=o.exports},GkBB:function(t,e){},M93x:function(t,e,a){"use strict";function n(t){a("N0pV")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("xJD8"),s=a.n(i),r=a("fX5I"),c=a("VU/8"),l=n,o=c(s.a,r.a,l,null,null);e.default=o.exports},N0pV:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a("7+uW"),s=n(i),r=a("M93x"),c=n(r),l=a("YaEn"),o=n(l);s.default.config.productionTip=!1;new s.default({el:"#app",router:o.default,data:{},template:"<App/>",components:{App:c.default}})},Wyip:function(t,e){t.exports="data:image/gif;base64,R0lGODlh0wCOANUAAP8AAP/Nz/+anv9TW/9XX/+1tvzk5f8AAP8aMPrv8P98gP7Z2v+nqv8/Sv9rcP/Aw/+Okv+MkP3i4/ny8//HyP/T1fzo6vvu7/96f/j3+P+kp/+ws/+srv+Fiv+8vv/a2/+4uf+coP3k5v/Oz/8AAP/Exvnz9P/Hyf/////Z2fzq7P89Sf8AAPj5+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTM5OTc5MTYyODY2MTFFOThGRjFEMUI4RDE3Mjc1REUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTM5OTc5MTcyODY2MTFFOThGRjFEMUI4RDE3Mjc1REUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMzk5NzkxNDI4NjYxMUU5OEZGMUQxQjhEMTcyNzVERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp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"},YaEn:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=n(i),r=a("/ocq"),c=n(r),l=a("GZCg"),o=n(l),u=a("c27y"),d=n(u),A=a("lO7g"),v=n(A);s.default.use(c.default),e.default=new c.default({routes:[{path:"/diary",name:"diary",component:o.default},{path:"/about",name:"about",component:d.default},{path:"/",name:"home",component:v.default}]})},Zs8U:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about",mounted:function(){},data:function(){return{msg:"Welcome to Your Vue.js App",preMarked:"\n---\n#### 简介:\n> 1. 香港大学CS研究生(MSc)毕业, 论文课题'DNN (Deep Neural Network) Based Singing Voice Synthesis System'\n> 2. 铭传大学(台湾)系排**1/151**, GPA: **94%** 毕业\n> 3. 深圳市未闻网络科技有限公司创始人\n> 4. 日均访问人数约**3万人**的网站「叔叔不约-匿名聊天网」创办人、全栈工程师\n> 5. 熟练掌握前端开发、Node.js全栈开发技能。对网站/App的开发、运营、维护、推广均有深刻了解。\n#### 联系方式:\n\n- e-mail : mezizy@live.com\n- wechat : mezizy\n\n#### 目前项目:\n\n**叔叔不约匿名聊天网 - 随机1对1匿名聊天平台 (WEB)\t**\n\n- 独立开发前端及后端程序(Node.js+MongoDB+SQLite+Vue.js+SUI等)\n- 进行相关SEO，运营和推广。成功在微博、贴吧、豆瓣等社群中获得很大关注。\n- 近期平均IP：3万/每日 （2018年6月）\n- 微信公众号人数**20w**以上\n- 从2016年4月开始**持续盈利**，会员平均复购率在**54%**以上\n- 网址:\n  - [www.unclenoway.com]()\n  - [www.shushubuyue.com]()\n\n\n\n> 编辑于2019年1月25日"}},computed:{infoMarked:function(){return markdown.toHTML(this.preMarked)}}}},c27y:function(t,e,a){"use strict";function n(t){a("GkBB")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Zs8U"),s=a.n(i),r=a("+2vY"),c=a("VU/8"),l=n,o=c(s.a,r.a,l,"data-v-34ebf080",null);e.default=o.exports},cOBJ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main container  "},[t._m(0),t._v(" "),0===t.articles.length?a("div",{staticClass:"loading"},[t._v("加载中，请稍后...")]):t._e(),t._v(" "),a("div",{staticClass:"content ",attrs:{id:"diaryList"}},[a("ul",{staticClass:"list-group"},t._l(t.articles,function(e,n){return a("div",[0===n||t.articles.length>1&&(t.articles[n-1]&&new Date(t.articles[n-1].date)).getYear()!==new Date(e.date).getYear()?a("li",{staticClass:"year"},[a("div",[t._v("\n            "+t._s(new Date(e.date).getYear()+1900)+"年\n          ")])]):t._e(),t._v(" "),a("div",{staticClass:"list-group-item list-group-item-action diary-list-item",class:{"list-group-item-expand":t.isExpand},attrs:{id:e.id},on:{click:function(a){t.expand(e.id)}}},[e.img_url?a("div",{staticClass:"img",class:{"img-expand":t.isExpand},style:{"background-image":"url(http://qiniu-zizyblog.shushubuyue.net/"+e.img_url.replace("http://owdi2r4ca.bkt.clouddn.com/","")+")"}}):t._e(),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(e.title.replace(/[#*]/g,"")))]),t._v(" "),a("div",{staticClass:"text",class:{"text-expand":t.isExpand},domProps:{innerHTML:t._s(e.content)}}),t._v(" "),a("div",{staticClass:"month"},[t._v(t._s(new Date(e.date).getUTCMonth()+1)+"月")]),t._v(" "),a("div",{staticClass:"day"},[t._v(t._s(new Date(e.date).getUTCDate()))])])])}))])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"avatar"}),t._v(" "),a("h1",[t._v("Zizy's life")]),t._v(" "),a("div",[t._v("---每周一更新---")])])}],s={render:n,staticRenderFns:i};e.a=s},fX5I:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light",attrs:{id:"app"}},[n("div",{class:{hidden:!0},staticStyle:{position:"absolute","z-index":"999"}},[n("img",{attrs:{src:a("Wyip"),alt:""}})]),t._v(" "),n("nav",{staticClass:"navbar navbar-expand navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Zizy's Blog")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item "},[n("router-link",{staticClass:"nav-link nav-diary",attrs:{to:"/diary",name:"diary"}},[t._v("日记")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link nav-about",attrs:{to:"/about",name:"about"}},[t._v("关于")])],1)])])]),t._v(" "),n("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s={render:n,staticRenderFns:i};e.a=s},h4mo:function(t,e){},lO7g:function(t,e,a){"use strict";function n(t){a("qb5l")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Fs8J"),s=a.n(i),r=a("4OmK"),c=a("VU/8"),l=n,o=c(s.a,r.a,l,"data-v-57ad1f08",null);e.default=o.exports},qb5l:function(t,e){},xJD8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.5f98c69e5eeabac09ead.js.map