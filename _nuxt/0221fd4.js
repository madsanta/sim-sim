(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{337:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("7cef7dce",content,!0,{sourceMap:!1})},340:function(t,e,n){t.exports=n.p+"img/logo-astra.82ad03a.png"},366:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(27),n(64),n(33),n(42),n(43),n(34),n(17),n(28),n(81),n(52)),c=n(44);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var d={name:"HelloIntro",data:function(){return{isStarted:!1,animationDuration:2e3,timeout:3e3}},mounted:function(){this.setTypeSection(c.b.helloIntro),window.addEventListener("scroll",this.setStarted),window.addEventListener("touchmove",this.setStarted),window.addEventListener("wheel",this.setStarted),window.addEventListener("keypress",this.setStarted)},destroyed:function(){window.removeEventListener("scroll",this.setStarted),window.removeEventListener("touchmove",this.setStarted),window.removeEventListener("wheel",this.setStarted),window.removeEventListener("keypress",this.setStarted)},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({setStarted:function(){var t=this;this.isStarted||(this.isStarted=!0,setTimeout((function(){t.setTypeSection(c.b.intro)}),this.timeout+this.animationDuration))}},Object(o.d)({setTypeSection:"setTypeSection"}))},f=d,m=n(369),v=n(25);var component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("section",{class:[t.$style.section,Object(r.a)({},t.$style.isStarted,t.isStarted)],on:{click:t.setStarted}},[e("div",{class:t.$style.wrapper},[e("div",{class:t.$style.title},[e("span",[t._v("С")]),t._v("им-"),e("span",[t._v("С")]),t._v("им\n        ")]),t._v(" "),e("div",{class:t.$style.description},[t._v("\n            откройся!\n        ")])]),t._v(" "),e("div",{class:t.$style.caption},[e("div",{class:t.$style.captionText},[t._v("\n            Проект подготовлен при поддержке:\n        ")]),t._v(" "),e("img",{attrs:{src:n(340)}})])])}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports},369:function(t,e,n){"use strict";var r=n(337),o=n.n(r);n.d(e,"default",(function(){return o.a}))},370:function(t,e,n){var r=n(50)((function(i){return i[1]}));r.push([t.i,".section_IzoDD{align-items:center;display:flex;height:100%;justify-content:center;position:relative;width:100%;z-index:3}.wrapper_mMxM3{color:#fff;position:relative}.title_jneUB{font-size:2.03rem;font-weight:900;text-align:center}@media(max-width:1279px){.title_jneUB{font-size:.7rem}}.title_jneUB span{display:inline-block;transform:rotate(0);transition:transform 2s}.isStarted_JrC0m .title_jneUB span{transform:rotate(90deg)}.description_S1bdv{font-size:.82rem;line-height:.9;margin-top:-.17rem;text-align:center}@media(max-width:1279px){.description_S1bdv{font-size:.28rem;margin-top:-.14rem}}.caption_ih032{align-items:center;bottom:.43rem;color:#fff;display:none;flex-direction:column;justify-content:center;position:absolute}@media(max-width:1279px){.caption_ih032{display:flex}}.captionText_7yW6j{font-size:.1rem;line-height:1.2;text-align:center}.caption_ih032 img{width:.66rem}",""]),r.locals={section:"section_IzoDD",wrapper:"wrapper_mMxM3",title:"title_jneUB",isStarted:"isStarted_JrC0m",description:"description_S1bdv",caption:"caption_ih032",captionText:"captionText_7yW6j"},t.exports=r}}]);