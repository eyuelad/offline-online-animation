(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{223:function(t,e,n){var content=n(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("47804352",content,!0,{sourceMap:!1})},226:function(t,e,n){"use strict";n(223)},227:function(t,e,n){var r=n(69)((function(i){return i[1]}));r.push([t.i,"#cloud-circle[data-v-639a59f3]{width:var(--width);height:var(--height);border-radius:50%;filter:var(--filter);box-shadow:var(--width) var(--height) var(--height) 0 #fff}",""]),r.locals={},t.exports=r},228:function(t,e,n){"use strict";n.r(e);var r={props:["index","numOfClouds"],computed:{cloudStyle:function(){return{"--filter":"url(#filter-".concat(this.index+1,")"),"--width":this.width,"--height":this.height}},rand:function(){return Math.floor(10*Math.random())+2},width:function(){return"".concat(40*this.rand,"px")},height:function(){return"".concat(20*this.rand,"px")}},mounted:function(){gsap.set(".cloud-circle-"+(this.index+1),{left:this.index%2?window.innerWidth/2-window.innerWidth/(this.index+1)-100:window.innerWidth/2+window.innerWidth/(this.index+1)-100,y:"random(-200,".concat(window.innerHeight/4,")")})}},c=(n(226),n(42)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"absolute top-0 left-0 z-10",class:"cloud-circle-"+(t.index+1),style:t.cloudStyle,attrs:{id:"cloud-circle"}}),t._v(" "),n("svg",{attrs:{width:"0",height:"0"}},[n("filter",{attrs:{id:"filter-"+(t.index+1)}},[n("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:".01",numOctaves:t.index+1}}),t._v(" "),n("feDisplacementMap",{attrs:{in:"SourceGraphic",scale:100+5*(t.index+1)}})],1)])])}),[],!1,null,"639a59f3",null);e.default=component.exports}}]);