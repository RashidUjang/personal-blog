(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,6],{263:function(t,e,o){var content=o(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(80).default)("31f4a16a",content,!0,{sourceMap:!1})},264:function(t,e,o){"use strict";o.r(e);var r={props:["displayedText"]},n=(o(272),o(52)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:"/Adam_Rashid_CV_Latest.pdf",download:""}},[o("button",[t._v(t._s(t.displayedText))])])}),[],!1,null,"0bf60f57",null);e.default=component.exports;installComponents(component,{Button:o(264).default})},272:function(t,e,o){"use strict";o(263)},273:function(t,e,o){var r=o(79)(!1);r.push([t.i,"button[data-v-0bf60f57]{background:none;margin-top:16px;margin-bottom:16px;border-radius:28px;border:2px solid #221284;color:#221284;font-weight:700;font-size:16px;padding:8px 48px;cursor:pointer}",""]),t.exports=r},275:function(t,e,o){var content=o(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(80).default)("2aac525d",content,!0,{sourceMap:!1})},282:function(t,e,o){var content=o(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(80).default)("06563ea6",content,!0,{sourceMap:!1})},283:function(t,e,o){"use strict";o(275)},284:function(t,e,o){var r=o(79)(!1);r.push([t.i,".title.is-2[data-v-324e567d]{color:#221284;margin-bottom:0}.title.is-4[data-v-324e567d]{color:#828292;margin-bottom:0;font-weight:400;font-size:1rem;margin-top:8px}.nuxt-content-container[data-v-324e567d]{margin-top:24px}.post-snippet[data-v-324e567d]{margin-top:80px}button[data-v-324e567d]{margin-top:16px;outline:none;color:#221284;font-weight:700;background:none;border:none;font-size:1.2rem;padding:0;cursor:pointer}",""]),t.exports=r},286:function(t,e,o){"use strict";o.r(e);var r=o(297),n={props:["title","excerpt","createdAt","path"],data:function(){return{formattedDate:r.DateTime.fromISO(this.createdAt).toFormat("d LLLL y")}}},c=(o(283),o(52)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-snippet"},[o("NuxtLink",{attrs:{to:t.path}},[o("h2",{staticClass:"title is-2"},[t._v(t._s(t.title))])]),t._v(" "),o("h4",{staticClass:"title is-4"},[t._v(t._s(this.formattedDate))]),t._v(" "),o("NuxtContent",{attrs:{document:{body:t.excerpt}}}),t._v(" "),o("button",[o("NuxtLink",{attrs:{to:t.path}},[t._v("Read More →")])],1)],1)}),[],!1,null,"324e567d",null);e.default=component.exports;installComponents(component,{Button:o(264).default})},295:function(t,e,o){"use strict";o(282)},296:function(t,e,o){var r=o(79)(!1);r.push([t.i,"div[data-v-f832326c]:first-child{margin-top:56px}",""]),t.exports=r},305:function(t,e,o){"use strict";o.r(e);o(38),o(29),o(37),o(62),o(32),o(63);var r=o(26),n=o(8),c=(o(39),o(64));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d={data:function(){return{posts:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.posts=t.getPosts(),console.log(t.posts);case 2:case"end":return e.stop()}}),e)})))()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("posts",["getPosts"]))},f=d,v=(o(295),o(52)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.posts,(function(t){return o("PostSnippet",{key:t.title,attrs:{title:t.title,excerpt:t.excerpt,createdAt:t.createdAt,path:t.path}})})),1)}),[],!1,null,"f832326c",null);e.default=component.exports;installComponents(component,{PostSnippet:o(286).default})}}]);