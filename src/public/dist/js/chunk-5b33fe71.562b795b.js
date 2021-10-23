(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b33fe71"],{"0647":function(t,e,a){"use strict";var s=function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon delete-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}},[a("title",[e._v(e._s(e.props.title))])])])])},i=[],r=(a("a9e3"),{name:"DeleteIcon",props:{title:{type:String,default:"Delete icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!0,null,null,null);e["a"]=l.exports},"2c27":function(t,e,a){"use strict";a("35d8")},"35d8":function(t,e,a){},bbae:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"admin"===t.designation?a("div",{staticClass:"logs"},[a("h3",[t._v("Recent acitivites")]),a("hr"),a("b-list-group",t._l(t.logs,(function(e){return a("b-list-group-item",{key:e._id,attrs:{variant:t.getVariant(e.action)}},["0"===e.action?a("Created"):t._e(),"1"===e.action?a("Updated"):t._e(),"2"===e.action?a("Deleted"):t._e(),t._v(" User "),a("b",[t._v(t._s(e.user))]),t._v(" "+t._s(t.getActions(e.action))+" "+t._s(t.getEntity(e.entity))+" "),a("b-badge",[t._v(" "+t._s(e.entityId)+" ")]),t._v(" "+t._s(t.agoCalc(e.datetime))+" ago ")],1)})),1)],1):a("div",[a("h3",[t._v("You are not authorised to see these logs.")])])},i=[],r=a("5530"),n=function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon plus-box-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}},[a("title",[e._v(e._s(e.props.title))])])])])},o=[],l=(a("a9e3"),{name:"PlusBoxIcon",props:{title:{type:String,default:"Plus Box icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),c=l,d=a("2877"),p=Object(d["a"])(c,n,o,!0,null,null,null),u=p.exports,g=function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon update-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21,10.12H14.22L16.96,7.3C14.23,4.6 9.81,4.5 7.08,7.2C4.35,9.91 4.35,14.28 7.08,17C9.81,19.7 14.23,19.7 16.96,17C18.32,15.65 19,14.08 19,12.1H21C21,14.08 20.12,16.65 18.36,18.39C14.85,21.87 9.15,21.87 5.64,18.39C2.14,14.92 2.11,9.28 5.62,5.81C9.13,2.34 14.76,2.34 18.27,5.81L21,3V10.12M12.5,8V12.25L16,14.33L15.28,15.54L11,13V8H12.5Z"}},[a("title",[e._v(e._s(e.props.title))])])])])},f=[],_={name:"UpdateIcon",props:{title:{type:String,default:"Update icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},v=_,h=Object(d["a"])(v,g,f,!0,null,null,null),C=h.exports,b=a("0647"),m=a("2f62"),y={name:"Logs",data:function(){return{logs:[{_id:"lol"}]}},components:{Created:u,Updated:C,Deleted:b["a"]},computed:Object(r["a"])({},Object(m["c"])({designation:"getDesignation"})),methods:{getActions:function(t){return["created new","updated existing","deleted"][t]},getEntity:function(t){return["user","node"][t]},agoCalc:function(t){var e=Date.parse(t),a=Math.floor((new Date-e)/1e3/3600);if(a>24){var s=Math.floor(a/24);return s+" days"}return 0===a?"few seconds":a+" hrs"},getVariant:function(t){switch(t){case"0":return"primary";case"1":return"secondary";case"2":return"danger";default:return"info"}}},mounted:function(){var t=this;this.$store.dispatch("fetchLogs").then((function(e){t.logs=e}))}},H=y,w=(a("2c27"),Object(d["a"])(H,s,i,!1,null,null,null));e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-5b33fe71.562b795b.js.map