webpackJsonp([0],{"+2vY":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main container"},[t._m(0),t._v(" "),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.infoMarked)}})])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"avatar"}),t._v(" "),a("h1",[t._v("张子豪(Zizy)")])])}],s={render:n,staticRenderFns:i};e.a=s},"49G2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"diary",beforeRouteLeave:function(t,e,a){$("#diaryList").infiniteScroll("destroy"),console.log("destoryed"),a()},mounted:function(){var t=this;Pace.start(),axios.get("http://api.unclenoway.com:3011/posts/0/10").then(function(e){t.articles=e.data,Pace.stop()});var e=$("#diaryList").infiniteScroll({path:function(){return"http://api.unclenoway.com:3011/posts/"+10*(this.loadCount+1)+"/10"},responseType:"text",history:!1});e.on("load.infiniteScroll",function(e,a){var n=JSON.parse(a);t.articles=t.articles.concat(n),Pace.stop()}),e.on("request.infiniteScroll",function(t,e){Pace.start()})},data:function(){return{articles:this.getArticles(),isExpand:!1}},methods:{getArticles:function(){return[]},expand:function(t){$("#"+t).toggleClass("list-group-item-expand"),$("#"+t).children(".text").toggleClass("text-expand"),$("#"+t).children(".title").toggleClass("title-expand"),$("#"+t).children(".img").toggleClass("img-expand"),$("#"+t).children(".img").hasClass("img-expand")?($("#"+t).children(".img").height($("#"+t).children(".img").width()),$("#"+t).children(".day,.month").css("padding-top",$("#"+t).children(".img").height())):($("#"+t).children(".img").height("80px"),$("#"+t).children(".day,.month").css("padding-top","0px"))},getPath:function(t){return"http://localhost:3011/posts/"+t+"/10"}}}},"4OmK":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"entry-buttons"},["micromessenger"==t.window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?a("div",{staticStyle:{"text-align":"center"}},[a("b",[t._v("不支持在微信中打开此博客，请在浏览器中打开 http://zizy.me。")])]):t._e(),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-block",attrs:{to:"/diary"}},[t._v("Zizy的日记")]),t._v(" "),a("router-link",{staticClass:"btn btn-success btn-block",attrs:{to:"/about"}},[t._v("关于Zizy")])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"avatar"}),t._v(" "),a("h1",[t._v("Zizy's Blog")])])}],s={render:n,staticRenderFns:i};e.a=s},Fs8J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",window:window}}}},GZCg:function(t,e,a){"use strict";function n(t){a("h4mo")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("49G2"),s=a.n(i),r=a("cOBJ"),l=a("VU/8"),c=n,o=l(s.a,r.a,c,"data-v-dfdf8614",null);e.default=o.exports},GkBB:function(t,e){},M93x:function(t,e,a){"use strict";function n(t){a("N0pV")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("xJD8"),s=a.n(i),r=a("fX5I"),l=a("VU/8"),c=n,o=l(s.a,r.a,c,null,null);e.default=o.exports},N0pV:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a("7+uW"),s=n(i),r=a("M93x"),l=n(r),c=a("YaEn"),o=n(c);s.default.config.productionTip=!1;new s.default({el:"#app",router:o.default,data:{},template:"<App/>",components:{App:l.default}})},YaEn:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=n(i),r=a("/ocq"),l=n(r),c=a("GZCg"),o=n(c),u=a("c27y"),d=n(u),v=a("lO7g"),f=n(v);s.default.use(l.default),e.default=new l.default({routes:[{path:"/diary",name:"diary",component:o.default},{path:"/about",name:"about",component:d.default},{path:"/",name:"home",component:f.default}]})},Zs8U:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about",mounted:function(){},data:function(){return{msg:"Welcome to Your Vue.js App",preMarked:"\n---\n#### 简介:\n> 1. 铭传大学(台湾)系排**1/151**, GPA: **94%** 已毕业，\n> 2. 香港大学CS研究生(MSc)在读, 预计2018年12月毕业,\n> 3. 深圳市未闻网络科技有限公司创始人\n> 4. 日均访问人数约**3.5万人**的网站「叔叔不约-匿名聊天网」创办人、全栈工程师\n> 5. 运营微信公众号人数**13w**以上\n\n#### 联系方式:\n\n- e-mail : mezizy@live.com\n- wechat : mezizy\n\n#### 目前项目:\n\n**叔叔不约匿名聊天网 - 随机1对1匿名聊天平台 (WEB)\t**\n\n- 独立开发前端及后端程序(Node.js+MongoDB+SQLite+Vue.js+SUI等)\n- 近期平均IP：3.5万/每日 （2018年4月）\n- 从2016年4月开始**持续盈利**，会员平均复购率在**45%**以上\n- 网址:\n  - [www.unclenoway.com]()\n  - [www.shushubuyue.com]()\n\n\n\n> 编辑于2018年4月12日"}},computed:{infoMarked:function(){return markdown.toHTML(this.preMarked)}}}},c27y:function(t,e,a){"use strict";function n(t){a("GkBB")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Zs8U"),s=a.n(i),r=a("+2vY"),l=a("VU/8"),c=n,o=l(s.a,r.a,c,"data-v-34ebf080",null);e.default=o.exports},cOBJ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main container  "},[t._m(0),t._v(" "),0===t.articles.length?a("div",{staticClass:"loading"},[t._v("加载中，请稍后...")]):t._e(),t._v(" "),a("div",{staticClass:"content ",attrs:{id:"diaryList"}},[a("ul",{staticClass:"list-group"},t._l(t.articles,function(e,n){return a("li",[0===n||t.articles.length>1&&(t.articles[n-1]&&new Date(t.articles[n-1].date)).getYear()!==new Date(e.date).getYear()?a("div",{staticClass:"year"},[t._v(t._s(new Date(e.date).getYear()+1900)+"年\n        ")]):t._e(),t._v(" "),a("div",{staticClass:"list-group-item list-group-item-action",class:{"list-group-item-expand":t.isExpand},attrs:{id:e.id},on:{click:function(a){t.expand(e.id)}}},[e.img_url?a("div",{staticClass:"img",class:{"img-expand":t.isExpand},style:{"background-image":"url("+e.img_url+")"}}):t._e(),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"text",class:{"text-expand":t.isExpand}},[t._v(t._s(e.content))]),t._v(" "),a("div",{staticClass:"month"},[t._v(t._s(new Date(e.date).getUTCMonth()+1)+"月")]),t._v(" "),a("div",{staticClass:"day"},[t._v(t._s(new Date(e.date).getUTCDate()))])])])}))])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"avatar"}),t._v(" "),a("h1",[t._v("Zizy's life")]),t._v(" "),a("div",[t._v("---每周一更新---")])])}],s={render:n,staticRenderFns:i};e.a=s},fX5I:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light",attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Zizy's Blog")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item "},[a("router-link",{staticClass:"nav-link nav-diary",attrs:{to:"/diary",name:"diary"}},[t._v("日记")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link nav-about",attrs:{to:"/about",name:"about"}},[t._v("关于")])],1)])])]),t._v(" "),a("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s={render:n,staticRenderFns:i};e.a=s},h4mo:function(t,e){},lO7g:function(t,e,a){"use strict";function n(t){a("qb5l")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Fs8J"),s=a.n(i),r=a("4OmK"),l=a("VU/8"),c=n,o=l(s.a,r.a,c,"data-v-57ad1f08",null);e.default=o.exports},qb5l:function(t,e){},xJD8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.b413564f60f178efcb2f.js.map