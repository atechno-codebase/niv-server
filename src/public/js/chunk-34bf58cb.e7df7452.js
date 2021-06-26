(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34bf58cb"],{2532:function(e,t,r){"use strict";var a=r("23e7"),n=r("5a34"),o=r("1d80"),s=r("ab13");a({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~String(o(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),o=r("b622"),s=o("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},"5a34":function(e,t,r){var a=r("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"60f8":function(e,t,r){},"6cf7":function(e,t,r){"use strict";r("9894")},7277:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-modal",{staticClass:"long",attrs:{id:"nodeForm",title:"Add new Node","hide-footer":""}},[r("AddNodeForm")],1),r("div",{staticClass:"row"},[r("table",[r("tr",[r("td",[r("div",[r("b-button",{staticStyle:{float:"left"},attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("nodeForm")}}},[r("PlusIcon",{staticClass:"addnode"}),e._v(" Add Node ")],1)],1)]),e._m(0),r("td",[r("div",{staticStyle:{float:"right","text-align":"right","font-size":"10pt"}},[r("strong",[e._v(" "+e._s(e.ip)+" ")])])])])])]),r("hr"),!e.sensors||e.loading?r("vue-loaders-ball-beat",{attrs:{color:"grey",scale:"1"}}):e._e(),e.sensors&&!e.loading?r("div",{staticClass:"container"},e._l(e.sensors,(function(t){return r("b-card",{key:t._id,staticClass:"card drk",attrs:{title:"UID: "+t.uid,"sub-title":t.name}},[r("hr"),r("b-card-text",[r("table",[r("tr",[r("td",[e._v(" Machine ")]),r("td",{staticClass:"value"},[e._v(" "+e._s(t.machineName)+" ")])]),r("tr",[r("td",[e._v(" Location ")]),r("td",{staticClass:"value"},[e._v(" "+e._s(t.location)+" ")])]),r("tr",[r("td",[e._v("Temperature")]),r("td",{staticClass:"value",class:{ok:e.checkOK(t.temperatureRange,t.readings.temperature),notok:!e.checkOK(t.temperatureRange,t.readings.temperature)}},[e._v(" "+e._s(t.readings.temperature||"-")+" °C ")])]),r("tr",[r("td",[e._v("Humidity")]),r("td",{staticClass:"value",class:{ok:e.checkOK(t.humidityRange,t.readings.humidity),notok:!e.checkOK(t.humidityRange,t.readings.humidity)}},[e._v(" "+e._s(t.readings.humidity||"-")+" % ")])]),r("tr",[r("td",[e._v("CO"),r("sub",[e._v("2")])]),r("td",{staticClass:"value",class:{ok:e.checkOK(t.co2Range,t.readings.co2),notok:!e.checkOK(t.co2Range,t.readings.co2)}},[e._v(" "+e._s(t.readings.co2||"-")+" % ")])]),r("tr",[r("td",[e._v("Pressure")]),r("td",{staticClass:"value",class:{ok:e.checkOK(t.pressureRange,t.readings.pressure),notok:!e.checkOK(t.pressureRange,t.readings.pressure)}},[e._v(" "+e._s(t.readings.pressure||"-")+" bar ")])])]),r("hr"),r("table",[r("tr",[r("td",{on:{click:function(r){return e.deleteNode(t.uid)}}},[r("DeleteIcon",{staticClass:"action-btn delete",attrs:{title:"Delete Node"}})],1),r("td",{staticClass:"value"},[r("ChartLine",{staticClass:"action-btn chart",attrs:{title:"See Node Trend"},on:{click:function(r){return e.goToTrend(t.uid)}}})],1)])]),r("hr"),r("div",[e._v(" Last Updated at: "+e._s(t.readings.timestamp)+" ")])])],1)})),1):e._e()],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("div",[r("h2",{staticClass:"project_title"},[e._v(" Central Monitoring System ")])])])}],o=r("5530"),s=(r("96cf"),r("1da1")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",[r("b-form-group",{attrs:{label:"UID: ","label-for":"node_uid",description:"Please enter uid"}},[r("b-form-input",{attrs:{id:"node_uid",placeholder:"Enter UID"},model:{value:e.addNodeForm.uid,callback:function(t){e.$set(e.addNodeForm,"uid",t)},expression:"addNodeForm.uid"}})],1),r("b-form-group",{attrs:{label:"Location: ","label-for":"node_loc",description:"Please enter Location"}},[r("b-form-input",{attrs:{id:"node_loc",placeholder:"Enter Location"},model:{value:e.addNodeForm.loc,callback:function(t){e.$set(e.addNodeForm,"loc",t)},expression:"addNodeForm.loc"}})],1),r("b-form-group",{attrs:{label:"Machine: ","label-for":"node_mac",description:"Please enter Machine name"}},[r("b-form-input",{attrs:{id:"node_mac",placeholder:"Enter Machine"},model:{value:e.addNodeForm.mac,callback:function(t){e.$set(e.addNodeForm,"mac",t)},expression:"addNodeForm.mac"}})],1),r("b-form-group",{attrs:{label:"CO2 Range: ","label-for":"node_co2r",description:"Please enter CO2 Range"}},[r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_co2n",placeholder:"Enter CO2 Min"},model:{value:e.addNodeForm.co2n,callback:function(t){e.$set(e.addNodeForm,"co2n",t)},expression:"addNodeForm.co2n"}}),r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_co2x",placeholder:"Enter CO2 Max"},model:{value:e.addNodeForm.co2x,callback:function(t){e.$set(e.addNodeForm,"co2x",t)},expression:"addNodeForm.co2x"}})],1),r("b-form-group",{attrs:{label:"Pressure Range: ","label-for":"node_pressurer",description:"Please enter Pressure Range"}},[r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_pressuren",placeholder:"Enter Pressure Min"},model:{value:e.addNodeForm.pressuren,callback:function(t){e.$set(e.addNodeForm,"pressuren",t)},expression:"addNodeForm.pressuren"}}),r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_pressurex",placeholder:"Enter Pressure Max"},model:{value:e.addNodeForm.pressurex,callback:function(t){e.$set(e.addNodeForm,"pressurex",t)},expression:"addNodeForm.pressurex"}})],1),r("b-form-group",{attrs:{label:"Temperature Range: ","label-for":"node_temperaturer",description:"Please enter Temperature Range"}},[r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_temperaturen",placeholder:"Enter Temperature Min"},model:{value:e.addNodeForm.temperaturen,callback:function(t){e.$set(e.addNodeForm,"temperaturen",t)},expression:"addNodeForm.temperaturen"}}),r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_temperaturex",placeholder:"Enter Temperature Max"},model:{value:e.addNodeForm.temperaturex,callback:function(t){e.$set(e.addNodeForm,"temperaturex",t)},expression:"addNodeForm.temperaturex"}})],1),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.addNode()}}},[e._v("Add Node")])],1)},d=[],c={name:"Form",methods:{addNode:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r={uid:e.addNodeForm.uid,location:e.addNodeForm.loc,machineName:e.addNodeForm.mac,co2Range:{min:e.addNodeForm.co2n,max:e.addNodeForm.co2x},temperatureRange:{min:e.addNodeForm.temperaturen,max:e.addNodeForm.temperaturex},pressureRange:{min:e.addNodeForm.pressuren,max:e.addNodeForm.pressurex},humidityRange:{min:e.addNodeForm.humidityn,max:e.addNodeForm.humidityx}},e.$store.dispatch("addNode",r).then((function(){e.$bvModal.msgBoxOk("Node Added").then((function(){e.$bvModal.hide("nodeForm"),e.$store.dispatch("fetchSensors",1)}))})).catch((function(t){return e.$bvModal.msgBoxOk("Could not Add node: "+t)}));case 2:case"end":return t.stop()}}),t)})))()}},data:function(){return{addNodeForm:{uid:"",loc:"",mac:"",co2n:0,co2x:100,temperaturen:0,temperaturex:100,pressuren:0,pressurex:100,humidityn:0,humidityx:100}}}},l=c,u=(r("6cf7"),r("2877")),m=Object(u["a"])(l,i,d,!1,null,null,null),p=m.exports,f=function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon plus-circle-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[r("title",[t._v(t._s(t.props.title))])])])])},h=[],g=(r("a9e3"),{name:"PlusCircleIcon",props:{title:{type:String,default:"Plus Circle icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),b=g,v=Object(u["a"])(b,f,h,!0,null,null,null),_=v.exports,x=function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon delete-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}},[r("title",[t._v(t._s(t.props.title))])])])])},y=[],N={name:"DeleteIcon",props:{title:{type:String,default:"Delete icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},C=N,F=Object(u["a"])(C,x,y,!0,null,null,null),k=F.exports,w=function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon chart-line-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"}},[r("title",[t._v(t._s(t.props.title))])])])])},O=[],$={name:"ChartLineIcon",props:{title:{type:String,default:"Chart Line icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},R=$,S=Object(u["a"])(R,w,O,!0,null,null,null),M=S.exports,L=(r("cc73"),r("2f62")),A=(r("caad"),r("d3b7"),r("2532"),r("a4d3"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0"),r("06c5"));function P(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(A["a"])(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==r["return"]||r["return"]()}finally{if(i)throw o}}}}function T(e,t){return new Promise((function(r,a){e&&0!=e.length||a();var n,o=[],s=P(e);try{for(s.s();!(n=s.n()).done;){var i,d=n.value,c=d.co2Range,l=d.humidityRange,u=d.temperatureRange,m=d.pressureRange,p=null!==(i=d.readings)&&void 0!==i?i:0;0==p&&o.push(d.uid),(p.co2<c.min||p.co2>c.max||p.pressure<m.min||p.pressure>m.max||p.temperature<u.min||p.temperature>u.max||p.humidity<l.min||p.humidity>l.max)&&(t.includes(d.uid)||o.push(d.uid))}}catch(f){s.e(f)}finally{s.f()}0==o.length&&a(),r(o)}))}function j(e){var t,r="Faulty sensors are : ",a=P(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;r+="".concat(n," ")}}catch(o){a.e(o)}finally{a.f()}console.log(e),navigator.serviceWorker.register("sw.js"),new Notification("There are few faulty sensors that require attention",{body:r}),navigator.serviceWorker.ready.then((function(e){e.showNotification("There are few faulty sensors that require attention",{body:r})}))}var E={name:"Cards",components:{ChartLine:M,DeleteIcon:k,PlusIcon:_,AddNodeForm:p},data:function(){return{fetchSensors:null,ip:window.location.host}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return null==e.$store.getters.getAccessToken&&(e.$bvModal.msgBoxOk("Please Login"),e.$router.push("/")),e.fetchSensors=setInterval((function(){e.$store.getters.getLogInStatus&&e.$store.dispatch("fetchSensors",0),T(e.$store.getters.getSensors,e.$store.getters.getFaulties).then((function(t){e.$store.commit("setFaulties",t),j(t)})).catch((function(){}))}),3e3),t.next=4,window.Notification.requestPermission();case 4:case"end":return t.stop()}}),t)})))()},computed:Object(o["a"])(Object(o["a"])({},Object(L["c"])({sensors:"getSensors",loading:"isLoading"})),Object(L["b"])("notifications",["add"])),methods:{close:function(){this.$bvModal.hide("nodeForm")},goToTrend:function(e){this.$router.push({name:"Trend",params:{uid:e}})},checkOK:function(e,t){return e.min<=t&&t<=e.max},deleteNode:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$bvModal.msgBoxConfirm("Are you sure you want to delete the node "+e).then((function(r){r&&t.$store.dispatch("deleteNode",e).then((function(){t.$bvModal.msgBoxOk("Successfully Deleted "+e).then((function(){})),t.$store.dispatch("fetchSensors",1)})).catch((function(){return t.$bvModal.msgBoxOk("Could not delete "+e)}))})).catch((function(e){t.message=e.message,t.$bvModal.msgBoxOk(e.message)}));case 1:case"end":return r.stop()}}),r)})))()}}},H=E,I=(r("9bab"),Object(u["a"])(H,a,n,!1,null,"472e9694",null));t["default"]=I.exports},9894:function(e,t,r){},"9bab":function(e,t,r){"use strict";r("60f8")},ab13:function(e,t,r){var a=r("b622"),n=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(a){}}return!1}},caad:function(e,t,r){"use strict";var a=r("23e7"),n=r("4d64").includes,o=r("44d2"),s=r("ae40"),i=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!i},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cc73:function(e,t,r){}}]);
//# sourceMappingURL=chunk-34bf58cb.e7df7452.js.map