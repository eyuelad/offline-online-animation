(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{223:function(t,e,n){var content=n(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("47804352",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";n.r(e);var o=n(42),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"text-sky-50"},[n("div",{staticClass:"p-4 py-8 text-center"},[t._v("\n    Made by\n    "),n("a",{staticClass:"font-bold underline text-sky-100",attrs:{href:"http://eyuelad.github.io"}},[t._v("Eyuel Solomon")]),t._v("\n    2023\n  ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(224).default})},225:function(t,e,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("77649352",content,!0,{sourceMap:!1})},226:function(t,e,n){"use strict";n(223)},227:function(t,e,n){var o=n(69)((function(i){return i[1]}));o.push([t.i,"#cloud-circle[data-v-639a59f3]{width:var(--width);height:var(--height);border-radius:50%;filter:var(--filter);box-shadow:var(--width) var(--height) var(--height) 0 #fff}",""]),o.locals={},t.exports=o},228:function(t,e,n){"use strict";n.r(e);var o={props:["index","numOfClouds"],computed:{cloudStyle:function(){return{"--filter":"url(#filter-".concat(this.index+1,")"),"--width":this.width,"--height":this.height}},rand:function(){return Math.floor(10*Math.random())+2},width:function(){return"".concat(40*this.rand,"px")},height:function(){return"".concat(20*this.rand,"px")}},mounted:function(){gsap.set(".cloud-circle-"+(this.index+1),{left:this.index%2?window.innerWidth/2-window.innerWidth/(this.index+1)-100:window.innerWidth/2+window.innerWidth/(this.index+1)-100,y:"random(-200,".concat(window.innerHeight/4,")")})}},r=(n(226),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"absolute top-0 left-0 z-10",class:"cloud-circle-"+(t.index+1),style:t.cloudStyle,attrs:{id:"cloud-circle"}}),t._v(" "),n("svg",{attrs:{width:"0",height:"0"}},[n("filter",{attrs:{id:"filter-"+(t.index+1)}},[n("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:".01",numOctaves:t.index+1}}),t._v(" "),n("feDisplacementMap",{attrs:{in:"SourceGraphic",scale:100+5*(t.index+1)}})],1)])])}),[],!1,null,"639a59f3",null);e.default=component.exports},229:function(t,e,n){"use strict";n(225)},230:function(t,e,n){var o=n(69)((function(i){return i[1]}));o.push([t.i,".toast{transition:all .4s ease .5s;transform:translate(-50%,-10px) scale(.98);opacity:0}.toast--show{opacity:1;transform:translate(-50%) scale(1)}",""]),o.locals={},t.exports=o},231:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(53),n(54),n(16),{data:function(){return{isOffline:!1}},mounted:function(){var t=this;setInterval(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkConnection();case 2:e.sent==t.isOffline&&t.toggleTheme({isNetwork:!0});case 4:case"end":return e.stop()}}),e)}))),5e3),this.randomizeStars(),gsap.to(".star",{opacity:.8,duration:.2,ease:"power2.inOut",stagger:.1,repeat:-1,yoyo:!0})},methods:{checkConnection:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/check.txt",{cache:"no-store"});case 3:return e=t.sent,t.abrupt("return",e.status>=200&&e.status<300);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},toggleTheme:function(t){var e=t.isNetwork;this.animate({showAlert:e}),this.isOffline=!this.isOffline},randomizeStars:function(){gsap.set(".star",{x:"random(10,".concat(window.innerWidth-10,")"),y:"random(0,".concat(window.innerHeight/2,")")})},animate:function(t){var e=t.showAlert,n=document.querySelector(".toast--online"),o=document.querySelector(".toast--offline");this.isOffline?(o.classList.remove("toast--show"),gsap.to("#sun",{y:0,duration:1.2,ease:"back"}),gsap.to("#moon",{keyframes:{y:[0,10,-500]},duration:.6}),e&&n.classList.add("toast--show"),setTimeout((function(){n.classList.remove("toast--show")}),3e3)):(n.classList.remove("toast--show"),this.randomizeStars(),gsap.to("#moon",{y:0,duration:1}),gsap.to("#sun",{keyframes:{y:[0,-10,"110vh"],easeEach:"power2.inOut"},duration:.6}),e&&o.classList.add("toast--show"),setTimeout((function(){o.classList.remove("toast--show")}),3e3))}}}),l=(n(229),n(42)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-screen relative overflow-hidden flex justify-center items-center text-center",attrs:{id:"hero-home"}},[n("div",{},[n("div",{staticClass:"absolute top-0 left-0 h-screen w-screen bg-gradient-to-b from-sky-400 to-sky-500 transition-all duration-[1.5s]",class:t.isOffline?"opacity-0":"opacity-100",attrs:{id:"light-bg"}}),t._v(" "),n("div",{staticClass:"absolute top-0 left-0 h-screen w-screen bg-gradient-to-b from-slate-800 to-slate-900 transition-all duration-[1.5s]",class:t.isOffline?"opacity-100":"opacity-0",attrs:{id:"dark-bg"}},t._l(30,(function(t,i){return n("div",{staticClass:"star absolute top-0 rounded-full bg-white/75 shadow-[0_0_6px_2px_rgba(255,255,255,0.5)]",class:i%2?"w-0.5 h-0.5":"w-1 h-1"})})),0),t._v(" "),n("div",{staticClass:"w-16 h-16 absolute top-32 left-1/2 -translate-x-1/2 translate-y-0 rounded-full bg-amber-200 shadow-lg shadow-amber-300/50",attrs:{id:"sun"}}),t._v(" "),n("div",{staticClass:"w-12 h-12 absolute top-32 left-1/2 -translate-x-1/2 -translate-y-[500px] rounded-full bg-white shadow-[0_0_50px_5px_rgba(255,255,255,0.5)]",attrs:{id:"moon"}}),t._v(" "),n("div",{staticClass:"toast toast--offline absolute z-10 top-12 left-1/2 px-4 py-3 rounded-md border border-red-500 bg-sky-900/75 text-red-500 font-medium whitespace-nowrap"},[t._v("\n      You are offline\n    ")]),t._v(" "),n("div",{staticClass:"toast toast--online absolute z-10 top-12 left-1/2 px-4 py-3 rounded-md border border-green-500 bg-sky-50/75 text-green-600 font-medium whitespace-nowrap"},[t._v("\n      You are back online 😀\n    ")]),t._v(" "),n("div",{staticClass:"absolute top-0 left-0 h-screen w-screen transition-all duration-[1.5s]",class:t.isOffline?"opacity-10":"opacity-80"},t._l(8,(function(t,i){return n("Cloud",{key:"cloud-"+i,attrs:{index:i,numOfClouds:8}})})),1),t._v(" "),n("div",{staticClass:"relative"},[n("div",[n("h1",{staticClass:"p-6 mb-6 text-sky-50 text-4xl md:text-6xl font-bold"},[t._v("\n          Turn "+t._s(t.isOffline?"on":"off")+" your network connection.\n        ")]),t._v(" "),n("div",{staticClass:"my-8 text-sky-100 font-medium text-lg"},[t._v("- OR -")]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.toggleTheme}},[t._v("Click here")])])]),t._v(" "),n("Footer",{staticClass:"absolute bottom-0 left-1/2 -translate-x-1/2 w-screen"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Cloud:n(228).default,Footer:n(224).default})}}]);