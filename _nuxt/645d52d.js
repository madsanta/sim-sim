(window.webpackJsonp=window.webpackJsonp||[]).push([[13,14],{332:function(t,e,o){var content=o(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("e0df0d90",content,!0,{sourceMap:!1})},333:function(t,e,o){"use strict";o.r(e);var n=o(15),r=(o(53),o(35),o(228),o(25)),c={name:"ButtonAction",components:{IconApp:Object(r.a)({},(function(){var t=this,e=t._self._c;return e("svg",t._g({attrs:{width:"30",height:"31",viewBox:"0 0 30 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("circle",{attrs:{cx:"15",cy:"15.5",r:"14.25",stroke:"#fff","stroke-width":"1.5"}}),e("path",{attrs:{d:"M17.368 8.963a1.285 1.285 0 00-.575-.789c-.59-.359-1.346-.145-1.686.476l-.19.346-.19-.346c-.34-.621-1.097-.835-1.686-.476-.59.358-.792 1.155-.452 1.776l.903 1.647-3.33 6.077H7.734c-.68 0-1.234.583-1.234 1.3 0 .717.554 1.3 1.234 1.3h10.373l-1.425-2.6h-3.67l4.232-7.724c.165-.3.21-.651.124-.987z",fill:"#fff",stroke:"#4799E0","stroke-width":".5"}}),e("path",{attrs:{d:"M22.933 17.056h-2.551l-2.9-4.964-1.498 2.563 4.503 7.706c.173.297.453.509.787.598a1.3 1.3 0 00.984-.128c.62-.354.833-1.14.475-1.751l-.854-1.462h1.054a1.29 1.29 0 001.296-1.281 1.29 1.29 0 00-1.296-1.281zm-14.64 3.587l-.256.437a1.275 1.275 0 00.475 1.75 1.3 1.3 0 00.646.172 1.3 1.3 0 001.125-.64l1.004-1.718H8.292z",fill:"#fff",stroke:"#4799E0","stroke-width":".5"}})])}),[],!1,null,null,null).exports,IconGoogle:Object(r.a)({},(function(){var t=this,e=t._self._c;return e("svg",t._g({attrs:{width:"30",height:"31",viewBox:"0 0 30 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("circle",{attrs:{cx:"15",cy:"15.5",r:"14.25",stroke:"#fff","stroke-width":"1.5"}}),e("path",{attrs:{d:"M22.14 13.877l-10.588-6.63A1.595 1.595 0 0010.706 7c-.3 0-.596.087-.856.252-.524.333-.85.953-.85 1.617V22.13c0 .664.326 1.283.85 1.616.26.166.555.253.856.253.296 0 .589-.085.846-.246l10.589-6.632c.53-.332.859-.953.859-1.622 0-.669-.33-1.29-.86-1.623zm-4.588-1.568L16.1 14.53 12.62 9.22l4.931 3.088zM10.64 22.86a.624.624 0 01-.27-.093.71.71 0 01-.245-.269.793.793 0 01-.09-.367V8.87c0-.13.032-.256.09-.367a.71.71 0 01.245-.27.632.632 0 01.269-.094l4.824 7.362-4.823 7.36zm1.982-1.081l3.478-5.307 1.453 2.218-4.931 3.089zm9.007-5.64l-3.173 1.986-1.72-2.625 1.72-2.625 3.173 1.986c.208.131.338.376.338.639s-.13.508-.338.638z",fill:"#fff"}})])}),[],!1,null,null,null).exports,IconQuestion:Object(r.a)({},(function(){var t=this,e=t._self._c;return e("svg",t._g({attrs:{width:"30",height:"31",viewBox:"0 0 30 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("circle",{attrs:{cx:"15",cy:"15.5",r:"14.25",stroke:"#000","stroke-width":"1.5"}}),e("path",{attrs:{d:"M13.456 19.254c0-.576.064-1.104.192-1.584.144-.48.36-.912.648-1.296.304-.4.696-.752 1.176-1.056.288-.192.616-.392.984-.6a7.046 7.046 0 001.08-.72 3.71 3.71 0 00.864-1.008c.224-.4.336-.872.336-1.416 0-.608-.144-1.112-.432-1.512a2.55 2.55 0 00-1.08-.936 3.378 3.378 0 00-1.44-.312c-.528 0-1.024.104-1.488.312a4.068 4.068 0 00-1.224.84 4.818 4.818 0 00-.84 1.128l-1.416-.936a4.89 4.89 0 011.2-1.68 5.565 5.565 0 011.776-1.056 5.892 5.892 0 012.04-.36c.592 0 1.168.096 1.728.288a4.234 4.234 0 011.536.84c.464.384.832.864 1.104 1.44.272.576.408 1.256.408 2.04 0 .608-.08 1.128-.24 1.56-.16.432-.384.808-.672 1.128-.272.32-.592.6-.96.84s-.752.472-1.152.696c-.384.208-.76.44-1.128.696a3.203 3.203 0 00-.888 1.008c-.224.4-.336.952-.336 1.656h-1.776zm.048 5.064v-2.784h1.776v2.784h-1.776z",fill:"#000"}})])}),[],!1,null,null,null).exports},props:{preset:{type:String,default:"red"},title:{type:String,required:!0},href:{type:String,default:null},target:{type:String,default:null},download:{type:String,default:null},isDisable:{type:Boolean,default:!1}},emits:["handleClick"],methods:{onClick:function(){if(!this.isDisable){if(this.href){var t,e=["blank","_blank"].includes(null===(t=this.target)||void 0===t?void 0:t.toLowerCase());e||this.href.match(/http(s)*:\/\//)?window.open(this.href,e?"_blank":"_self"):this.$router.push(this.href)}this.$emit("handleClick")}}}},l=o(334);var h=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e(t.download?"a":"button",{tag:"component",class:[t.$style.button,Object(n.a)({},t.$style.isDisable,t.isDisable),t.$style[t.preset]],attrs:{href:t.href,role:"button",download:t.download,target:t.target},on:{click:t.onClick}},["white"===t.preset?e("IconQuestion"):"app"===t.preset?e("IconApp"):"google"===t.preset?e("IconGoogle"):t._e(),t._v(t._s(t.title)+"\n")],1)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=h.exports},334:function(t,e,o){"use strict";var n=o(332),r=o.n(n);o.d(e,"default",(function(){return r.a}))},335:function(t,e,o){var n=o(50)((function(i){return i[1]}));n.push([t.i,".button_ygf12{align-items:center;background-color:#ba1b1c;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:.2rem;font-weight:700;font-weight:500;justify-content:center;line-height:1.2;margin-left:auto;margin-right:auto;min-height:.53rem;padding:.11rem .3rem;text-align:center;transition:opacity .2s;width:-moz-fit-content;width:fit-content}@media(min-width:1280px){.button_ygf12:hover{opacity:.8}}.button_ygf12.white_y5nnw,.button_ygf12.whiteWithoutIcon_Qb6WH{background-color:#fff;color:#000}.button_ygf12.app_7hrpZ{background-color:#4799e0}.button_ygf12.google_V0VYp{background-color:#32872f}.button_ygf12.isDisable_XeQIT{opacity:.4;pointer-events:none}.button_ygf12 svg{height:.3rem;margin-right:.1rem;width:.3rem}",""]),n.locals={button:"button_ygf12",white:"white_y5nnw",whiteWithoutIcon:"whiteWithoutIcon_Qb6WH",app:"app_7hrpZ",google:"google_V0VYp",isDisable:"isDisable_XeQIT"},t.exports=n},346:function(t,e,o){t.exports=o.p+"img/expert-woman.c1e1046.png"},347:function(t,e,o){t.exports=o.p+"img/expert-man.e705c1c.png"},350:function(t,e,o){var content=o(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("4402036f",content,!0,{sourceMap:!1})},357:function(t,e,o){"use strict";var n=o(25),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("svg",t._g({attrs:{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("circle",{attrs:{cx:"24",cy:"24",r:"23.5",transform:"rotate(-90 24 24)"}}),e("path",{attrs:{d:"M16 16l16 16M32 16L16 32"}})])}),[],!1,null,null,null);e.a=component.exports},426:function(t,e,o){t.exports=o.p+"img/bg-desktop.06bac03.jpg"},427:function(t,e,o){t.exports=o.p+"img/bg-desktop-open-blue.49cf6bb.jpg"},428:function(t,e,o){t.exports=o.p+"img/bg-desktop-open-red.ce7d7fe.jpg"},429:function(t,e,o){t.exports=o.p+"img/bg-mobile.b02be19.jpg"},430:function(t,e,o){t.exports=o.p+"img/bg-mobile-open-blue.b410e61.jpg"},431:function(t,e,o){t.exports=o.p+"img/bg-mobile-open-red.c5fe119.jpg"},432:function(t,e,o){"use strict";var n=o(350),r=o.n(n);o.d(e,"default",(function(){return r.a}))},433:function(t,e,o){var n=o(50)((function(i){return i[1]}));n.push([t.i,".section_XsxDk{height:100%;overflow:hidden}.section_XsxDk .branch1_l8obd,.section_XsxDk .branch2_WNv3I{display:none}.section_XsxDk.branch1_l8obd .branch1_l8obd{display:block}.section_XsxDk.branch1_l8obd .branch2_WNv3I,.section_XsxDk.branch1_l8obd .image_VCLUz,.section_XsxDk.branch1_l8obd .intro_wV6Qj{display:none}.section_XsxDk.branch2_WNv3I .branch2_WNv3I{display:block}.section_XsxDk.branch2_WNv3I .branch1_l8obd,.section_XsxDk.branch2_WNv3I .image_VCLUz,.section_XsxDk.branch2_WNv3I .intro_wV6Qj{display:none}.bg_DAVkz{bottom:0;left:0;position:absolute;right:0;top:0}.bg_DAVkz,.bgInner_WyB1o{height:100%;width:100%}.bgInner_WyB1o{position:relative}.bgInner_WyB1o img{bottom:0;left:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;position:absolute;right:0;top:0}.bgInner_WyB1o img,.content_Ez08L{height:100%;width:100%}.content_Ez08L{align-items:center;color:#fff;display:flex;margin-left:auto;margin-right:auto;padding-left:1.21rem;padding-right:1.21rem;position:relative;z-index:3}@media(max-width:1279px){.content_Ez08L{padding-left:.12rem;padding-right:.12rem}}.contentInner_K1D\\+Y{display:flex;flex-direction:column;height:4.4rem;justify-content:space-between;margin-bottom:.19rem;position:relative}@media(max-width:1279px){.contentInner_K1D\\+Y{height:100%;margin-bottom:0;padding:.7rem 0 .3rem;width:100%}}.intro_wV6Qj{display:flex;flex-direction:column;padding-top:1.13rem}@media(max-width:1279px){.intro_wV6Qj{flex-direction:column-reverse;padding-top:0}}.intro_wV6Qj .caption_F3YVS{background-color:hsla(0,0%,100%,.2);font-size:.16rem;font-weight:400;line-height:1.2;padding:.1rem;width:-moz-fit-content;width:fit-content}@media(max-width:1279px){.intro_wV6Qj .caption_F3YVS{background-color:transparent;font-size:.14rem;font-size:.16rem;margin-top:.01rem;padding:0}}.intro_wV6Qj .title_IP1Ow{font-size:.48rem;font-weight:700;line-height:1.2;margin-top:.19rem}@media(max-width:1279px){.intro_wV6Qj .title_IP1Ow{font-size:.3rem;margin-top:0}}.way_P4o\\+F{width:4.95rem}@media(max-width:1279px){.way_P4o\\+F{width:100%}}.way_P4o\\+F .caption_F3YVS{background-color:hsla(0,0%,100%,.2);font-size:.16rem;font-weight:400;line-height:1.2;padding:.1rem;width:-moz-fit-content;width:fit-content}@media(max-width:1279px){.way_P4o\\+F .caption_F3YVS{display:none;font-size:.14rem}}.way_P4o\\+F .title_IP1Ow{font-size:.28rem;font-weight:700;line-height:1.2;margin-top:.19rem}@media(max-width:1279px){.way_P4o\\+F .title_IP1Ow{font-size:.16rem;margin-top:0}.way_P4o\\+F .title_IP1Ow span{display:block;font-size:.3rem}}.branch1_l8obd .way_P4o\\+F .title_IP1Ow span{color:#94bee7}.branch2_WNv3I .way_P4o\\+F .title_IP1Ow span{color:#d696a0}.way_P4o\\+F .description_W8LAA{font-size:.16rem;font-weight:400;line-height:1.2;margin-top:.2rem}@media(max-width:1279px){.way_P4o\\+F .description_W8LAA{font-size:.14rem}}.way_P4o\\+F .expert_MIJSJ{align-items:center;display:flex;margin-top:.17rem;width:3.12rem}@media(max-width:1279px){.way_P4o\\+F .expert_MIJSJ{margin-top:.1rem;width:100%}}.way_P4o\\+F .expertImage_QRRYB{flex:0 0 auto;margin-right:.1rem;width:.97rem}@media(max-width:1279px){.way_P4o\\+F .expertImage_QRRYB{margin-right:.06rem;width:.7rem}.way_P4o\\+F .expertInfo_Kno4J{width:2.3rem}}.way_P4o\\+F .expertInfoName_UDrUS{font-size:.16rem;font-weight:700;line-height:1.2;white-space:nowrap}@media(max-width:1279px){.way_P4o\\+F .expertInfoName_UDrUS{font-size:.14rem}}.way_P4o\\+F .expertInfoPosition_r81KI{font-size:.12rem;font-weight:400;line-height:1.2}@media(max-width:1279px){.way_P4o\\+F .expertInfoPosition_r81KI{font-size:.1rem}}.button_EKmDW{margin-left:0}@media(max-width:1279px){.button_EKmDW{bottom:.3rem;left:0;position:absolute;width:100%}}.choose_gK15t{bottom:.62rem;display:flex;justify-content:space-between;position:absolute;right:2.7rem;width:3.26rem;z-index:3}@media(max-width:1279px){.choose_gK15t{bottom:.98rem;right:50%;transform:translate(50%);width:1.69rem}}.chooseIcon_q6TWJ{cursor:pointer;height:.48rem;position:relative;width:.48rem}@media(max-width:1279px){.chooseIcon_q6TWJ{height:.38rem;width:.38rem}}.chooseIcon_q6TWJ svg{stroke:#fff}.chooseIconClose_\\+Wd-h,.chooseIconEnter_3KOTe{bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%}.branch1_l8obd .chooseIconEnter_3KOTe.choose1_6a4XX,.branch2_WNv3I .chooseIconEnter_3KOTe.choose2_9UKVI,.chooseIconClose_\\+Wd-h{display:none}.branch1_l8obd .chooseIconClose_\\+Wd-h.choose1_6a4XX,.branch2_WNv3I .chooseIconClose_\\+Wd-h.choose2_9UKVI{display:block}",""]),n.locals={section:"section_XsxDk",branch1:"branch1_l8obd",branch2:"branch2_WNv3I",image:"image_VCLUz",intro:"intro_wV6Qj",bg:"bg_DAVkz",bgInner:"bgInner_WyB1o",content:"content_Ez08L",contentInner:"contentInner_K1D+Y",caption:"caption_F3YVS",title:"title_IP1Ow",way:"way_P4o+F",description:"description_W8LAA",expert:"expert_MIJSJ",expertImage:"expertImage_QRRYB",expertInfo:"expertInfo_Kno4J",expertInfoName:"expertInfoName_UDrUS",expertInfoPosition:"expertInfoPosition_r81KI",button:"button_EKmDW",choose:"choose_gK15t",chooseIcon:"chooseIcon_q6TWJ",chooseIconClose:"chooseIconClose_+Wd-h",chooseIconEnter:"chooseIconEnter_3KOTe",choose1:"choose1_6a4XX",choose2:"choose2_9UKVI"},t.exports=n},501:function(t,e,o){"use strict";o.r(e);o(27),o(64),o(33),o(42),o(43),o(34),o(17),o(28);var n=o(15),r=o(52),c=o(44),l=o(333),h=o(25),d=Object(h.a)({},(function(){var t=this,e=t._self._c;return e("svg",t._g({attrs:{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("circle",{attrs:{cx:"24",cy:"24",r:"23.5",transform:"rotate(-90 24 24)",stroke:"#fff"}}),e("path",{attrs:{d:"M18.051 23.09l4.747-4.875v14.55c0 .328.126.642.352.873.225.232.53.362.85.362.318 0 .624-.13.85-.362.225-.231.351-.545.351-.873v-14.55l4.747 4.876c.226.232.531.362.85.362.319 0 .625-.13.85-.362.225-.232.352-.546.352-.873 0-.328-.127-.642-.352-.873l-6.799-6.983A1.202 1.202 0 0024 14a1.174 1.174 0 00-.85.362l-6.797 6.983a1.252 1.252 0 00-.352.873c0 .327.127.641.352.873.226.232.531.362.85.362.319 0 .623-.13.849-.362z",fill:"#fff"}})])}),[],!1,null,null,null).exports,_=o(357);function f(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}var m={name:"ChooseDoor",components:{ButtonAction:l.default,IconEnter:d,IconClose:_.a},data:function(){return{way:""}},computed:{types:function(){return c.b},ways:function(){return c.c}},methods:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?f(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({startQuize:function(){this.setCurrentWay(this.way)},chooseDoor:function(t){this.way=t}},Object(r.d)({setCurrentWay:"setCurrentWay"}))},w=m,y=o(432);var v=Object(h.a)(w,(function(){var t=this,e=t._self._c;return e("section",{class:[t.$style.section,t.$style[t.way]]},[e("div",{class:t.$style.bg},[e("div",{class:t.$style.bgInner},[e("img",{class:[t.$style.image,"onlyDesktop"],attrs:{src:o(426)}}),t._v(" "),e("img",{class:[t.$style.branch1,"onlyDesktop"],attrs:{src:o(427)}}),t._v(" "),e("img",{class:[t.$style.branch2,"onlyDesktop"],attrs:{src:o(428)}}),t._v(" "),e("img",{class:[t.$style.image,"onlyMobile"],attrs:{src:o(429)}}),t._v(" "),e("img",{class:[t.$style.branch1,"onlyMobile"],attrs:{src:o(430)}}),t._v(" "),e("img",{class:[t.$style.branch2,"onlyMobile"],attrs:{src:o(431)}})])]),t._v(" "),e("div",{class:t.$style.content},[e("div",{class:t.$style.contentInner},[e("div",{class:t.$style.intro},[e("div",{class:[t.$style.caption,"onlyDesktop"]},[t._v("\n                    Выбор истории\n                ")]),t._v(" "),e("div",{class:[t.$style.caption,"onlyMobile"]},[t._v("\n                    Выберите дверь\n                ")]),t._v(" "),e("div",{class:[t.$style.title,"onlyDesktop"]},[t._v("\n                    Коллега,"),e("br"),t._v("\n                    выберите дверь\n                ")]),t._v(" "),e("div",{class:[t.$style.title,"onlyMobile"]},[t._v("\n                    Коллега, выбор"),e("br"),t._v("\n                    истории за вами\n                ")])]),t._v(" "),e("div",{class:[t.$style.way,t.$style.branch1]},[e("div",{class:t.$style.caption},[t._v("\n                    Выбор истории за вами:\n                ")]),t._v(" "),e("div",{class:t.$style.title},[e("span",[t._v("Первая история")]),t._v(" о пациентке 36 лет с жалобами на насморк, малопродуктивный кашель и общую слабость.\n                ")]),t._v(" "),e("div",{class:t.$style.description},[t._v("\n                    В этом путешествии наc будет консультировать\n                ")]),t._v(" "),e("div",{class:t.$style.expert},[e("div",{class:t.$style.expertImage},[e("img",{attrs:{src:o(346)}})]),t._v(" "),e("div",{class:t.$style.expertInfo},[e("div",{class:t.$style.expertInfoName},[t._v("\n                            Курбачева"),e("br"),t._v("\n                            Оксана Михайловна\n                        ")]),t._v(" "),e("div",{class:t.$style.expertInfoPosition},[t._v("\n                            Профессор, аллерголог, иммунолог, Заведующая отделением бронхиальной астмы\n                        ")])])])]),t._v(" "),e("div",{class:[t.$style.way,t.$style.branch2]},[e("div",{class:t.$style.caption},[t._v("\n                    Выбор истории за вами:\n                ")]),t._v(" "),e("div",{class:t.$style.title},[e("span",[t._v("Вторая история")]),t._v(" о пациенте 30 лет с жалобами на затруднение дыхания, одышку при физической нагрузке и заложенность носа.\n                ")]),t._v(" "),e("div",{class:t.$style.description},[t._v("\n                    В этом путешествии наc будет консультировать\n                ")]),t._v(" "),e("div",{class:t.$style.expert},[e("div",{class:t.$style.expertImage},[e("img",{attrs:{src:o(347)}})]),t._v(" "),e("div",{class:t.$style.expertInfo},[e("div",{class:t.$style.expertInfoName},[t._v("\n                            Айсанов"),e("br"),t._v("\n                            Заурбек Рамазанович\n                        ")]),t._v(" "),e("div",{class:t.$style.expertInfoPosition},[t._v("\n                            Д.м.н., профессор, заведующий кафедрой доказательной медицины РНИМУ\n                        ")])])])]),t._v(" "),e("ButtonAction",{class:t.$style.button,attrs:{"is-disable":!t.way,title:"Начать"},on:{handleClick:t.startQuize}})],1)]),t._v(" "),e("div",{class:t.$style.choose},[e("div",{class:t.$style.chooseIcon},[e("IconEnter",{class:[t.$style.chooseIconEnter,t.$style.choose1],on:{click:function(e){return t.chooseDoor(t.ways.branch1)}}}),t._v(" "),e("IconClose",{class:[t.$style.chooseIconClose,t.$style.choose1],on:{click:function(e){return t.chooseDoor("")}}})],1),t._v(" "),e("div",{class:t.$style.chooseIcon},[e("IconEnter",{class:[t.$style.chooseIconEnter,t.$style.choose2],on:{click:function(e){return t.chooseDoor(t.ways.branch2)}}}),t._v(" "),e("IconClose",{class:[t.$style.chooseIconClose,t.$style.choose2],on:{click:function(e){return t.chooseDoor("")}}})],1)])])}),[],!1,(function(t){this.$style=y.default.locals||y.default}),null,null);e.default=v.exports}}]);