(function(t){function n(n){for(var e,c,i=n[0],o=n[1],l=n[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);u&&u(n);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,n=0;n<r.length;n++){for(var a=r[n],e=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(e=!1)}e&&(r.splice(n--,1),t=c(c.s=a[0]))}return t}var e={},s={app:0},r=[];function c(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=e,c.d=function(t,n,a){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)c.d(a,e,function(n){return t[n]}.bind(null,e));return a},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/ywc17-hw/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"034f":function(t,n,a){"use strict";var e=a("85ec"),s=a.n(e);s.a},"119f":function(t,n,a){t.exports=a.p+"img/contact1.ed683f12.png"},"15f1":function(t,n,a){},"164a":function(t,n,a){"use strict";var e=a("dcf3"),s=a.n(e);s.a},"18fc":function(t,n,a){"use strict";var e=a("9494"),s=a.n(e);s.a},"365f":function(t,n,a){"use strict";var e=a("f4bc"),s=a.n(e);s.a},"46d5":function(t,n,a){t.exports=a.p+"img/contact3.1b47ec36.png"},"48dd":function(t,n,a){"use strict";var e=a("15f1"),s=a.n(e);s.a},"4dd0":function(t,n,a){},"4f8d":function(t,n,a){t.exports=a.p+"img/CGD.093f4f57.png"},5182:function(t,n,a){t.exports=a.p+"img/MOTS.09477969.png"},"56d7":function(t,n,a){"use strict";a.r(n);var e=a("2b0e"),s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("the-navbar",{attrs:{title:"ชิมช็อปใช้",menus:t.menus}}),a("the-banner"),a("the-regist",{attrs:{duration:t.duration}}),a("the-detail",{attrs:{detail:t.detail,condition:t.condition}}),a("the-contact"),a("the-ktc"),a("the-nav-foot")],1)},r=[];async function c(t){const n=await fetch(t);return n.ok?await n.json():null}async function i(){return await c("https://panjs.com/ywc.json")}var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header"},[e("b-navbar",{staticClass:"shadow-sm",attrs:{toggleable:"sm",type:"light",variant:"white",fixed:"top"}},[e("b-navbar-brand",{staticClass:"d-block d-sm-none d-md-none d-lg-none",attrs:{href:"#"}},[e("img",{attrs:{src:a("5bf1"),alt:t.title,height:"45px"}})]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"mx-auto"},t._l(t.menus,(function(n,a){return e("b-nav-item",{key:a,attrs:{href:n.href,target:"__BLANK"}},[t._v(t._s(n.label))])})),1)],1)],1)],1)},l=[],u={props:{title:{type:String,default:"Title"},menus:{type:Array,default:[{label:"Menu 1",href:"#"},{label:"Menu 2",href:"#"}]}}},d=u,f=(a("48dd"),a("2877")),b=Object(f["a"])(d,o,l,!1,null,null,null),p=b.exports,v=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"banner"},[a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{staticClass:"cover1 "}),a("b-col",{staticClass:"cover2 "},[a("b-row",{staticClass:"h-100"},[a("b-col",{attrs:{"align-self":"center"}},[a("img",{staticClass:"logo-box",attrs:{src:"https://www.ชิมช้อปใช้.com/img/logo/banner.png",alt:""}})])],1)],1),a("b-col",{staticClass:"cover3 "})],1)],1)],1)},m=[],g=(a("5b8b"),{}),h=Object(f["a"])(g,v,m,!1,null,null,null),_=h.exports,y=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"regist"},[a("b-container",{staticClass:"text-center",attrs:{fluid:""}},[a("b-row",[a("b-col",{staticClass:"py-2 since",attrs:{cols:"12"}},[t._v("ตั้งแต่วันที่")]),a("b-col",{staticClass:"py-2 duration text-danger",attrs:{cols:"12"}},[a("h1",[t._v(t._s(t.duration))])]),a("b-col",{staticClass:"py-2",attrs:{cols:"12"}},[a("b-button",{staticClass:"btn-regist",attrs:{variant:"primary"}},[t._v(" ลงทะเบียน2"),a("br"),t._v(" ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น."),a("br"),t._v(" (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)"),a("br")]),a("hr")],1)],1)],1)],1)},C=[],x={props:{duration:{type:String}}},w=x,O=(a("365f"),Object(f["a"])(w,y,C,!1,null,null,null)),j=O.exports,T=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"detail"},[a("b-container",[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h3",[t._v(" มาตรการส่งเสริมการบริโภคในประเทศ "),a("span",{staticClass:"nowrap"},[t._v(' "ชิมช้อปใช้" ')])])]),a("b-col",{attrs:{cols:"12 mt-4"}},[a("span",{domProps:{innerHTML:t._s(t.detail)}})]),a("b-col",{attrs:{cols:"12 mt-4"}},[a("div",[t._v("เงื่อนไขการเข้าร่วมมาตรการ")]),a("div",{staticClass:"mt-2"},[a("span",{domProps:{innerHTML:t._s(t.condition)}})])])],1)],1)],1)},M=[],P={props:{detail:{type:String},condition:{type:String}}},S=P,$=(a("bcdc"),Object(f["a"])(S,T,M,!1,null,null,null)),k=$.exports,E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contact my-5"},[e("b-container",[e("b-row",[e("b-col",{attrs:{md:"4",sm:"12"}},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:a("119f"),alt:""}})])]),e("b-col",{attrs:{md:"4",sm:"12"}},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:a("81de"),alt:""}})])]),e("b-col",{attrs:{md:"4",sm:"12"}},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:a("46d5"),alt:""}})])])],1)],1)],1)},K=[],A=(a("164a"),{}),F=Object(f["a"])(A,E,K,!1,null,null,null),L=F.exports,N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ktc"},[e("b-container",[e("b-row",{staticClass:"px-sm-5 px-md-1"},[e("b-col",{attrs:{md:"2",cols:"4",sm:"4"}},[e("img",{attrs:{src:a("4f8d"),alt:""}})]),e("b-col",{attrs:{md:"2",cols:"4",sm:"4"}},[e("img",{attrs:{src:a("8ec3"),alt:""}})]),e("b-col",{attrs:{md:"2",cols:"4",sm:"4"}},[e("img",{attrs:{src:a("91e8"),alt:""}})]),e("b-col",{attrs:{md:"2",cols:"4",sm:"4"}},[e("img",{attrs:{src:a("c559"),alt:""}})]),e("b-col",{attrs:{md:"2",cols:"4",sm:"4"}},[e("img",{attrs:{src:a("5182"),alt:""}})]),e("b-col",{attrs:{md:"2",cols:"4",sm:"4"}},[e("img",{attrs:{src:a("a616"),alt:""}})])],1)],1)],1)},B=[],D=(a("18fc"),{}),H=Object(f["a"])(D,N,B,!1,null,null,null),J=H.exports,G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav-foot bg-light p-5 mt-5"},[e("b-container",[e("b-row",[e("b-col",[e("img",{attrs:{src:a("5bf1"),alt:""}})]),e("b-col",[e("div",{staticClass:"head"},[t._v(" ข้อมูลลงทะเบียนประชาชน ")]),e("div",{staticClass:"detail"},[t._v(" การรับสิทธิ การใช้งานแอปพลิเคชั่น “เป๋าตัง” และ “ถุงเงิน” ")]),e("div",{staticClass:"detail"},[t._v(" ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144 ")])]),e("b-col",[e("div",{staticClass:"head"},[t._v(" ข้อมูลลงทะเบียนผู้ประกอบการ ")]),e("div",{staticClass:"detail"},[t._v(" เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ ")]),e("div",{staticClass:"detail"},[t._v(" ติดต่อ โทร.0 2270 6400 กด 7 ")])]),e("b-col",[e("div",{staticClass:"head"},[t._v(" ข้อมูลเที่ยวชิมช้อปใช้ ")]),e("div",{staticClass:"detail"},[t._v(" ติดต่อ ททท. ")]),e("div",{staticClass:"detail"},[t._v(" โทร1672 ")])])],1)],1)],1)},I=[],R=(a("d1b8"),{}),q=Object(f["a"])(R,G,I,!1,null,null,null),z=q.exports,Q={name:"app",data(){return{menus:[],duration:"",detail:"",condition:""}},components:{TheNavbar:p,TheBanner:_,TheRegist:j,TheDetail:k,TheContact:L,TheKtc:J,TheNavFoot:z},async created(){const t=await i();console.log(t),this.menus=t.navbarItems,this.duration=t.duration,this.detail=t.detail,this.condition=t.condition}},U=Q,V=(a("034f"),Object(f["a"])(U,s,r,!1,null,null,null)),W=V.exports,X=a("5f5b");a("f9e3"),a("2dd8");e["default"].use(X["a"]),e["default"].config.productionTip=!1,new e["default"]({render:function(t){return t(W)}}).$mount("#app")},"5b8b":function(t,n,a){"use strict";var e=a("5f1b"),s=a.n(e);s.a},"5bf1":function(t,n,a){t.exports=a.p+"img/logochim.77024912.png"},"5f1b":function(t,n,a){},"81de":function(t,n,a){t.exports=a.p+"img/contact2.6c42699d.png"},"85ec":function(t,n,a){},"8ec3":function(t,n,a){t.exports=a.p+"img/FPO.34f69a5b.png"},"91e8":function(t,n,a){t.exports=a.p+"img/Krungthai.8b71f26b.png"},9494:function(t,n,a){},a616:function(t,n,a){t.exports=a.p+"img/TAT.2529bd05.png"},b852:function(t,n,a){},bcdc:function(t,n,a){"use strict";var e=a("b852"),s=a.n(e);s.a},c559:function(t,n,a){t.exports=a.p+"img/MOF.398d843b.png"},d1b8:function(t,n,a){"use strict";var e=a("4dd0"),s=a.n(e);s.a},dcf3:function(t,n,a){},f4bc:function(t,n,a){}});
//# sourceMappingURL=app.fda8cb58.js.map