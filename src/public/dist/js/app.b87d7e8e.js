(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-06c1dd47":"1ee7cd41","chunk-0b889c17":"19c4cb5d","chunk-2d0e5e97":"6117567c","chunk-3155d0f2":"d85ae4fb","chunk-542518c1":"fa8ca845","chunk-5b33fe71":"562b795b","chunk-7aabfae8":"2c2d9468","chunk-7e4b5d86":"12c87672","chunk-7f24cb5c":"2cc585b5","chunk-7fb2206b":"b68ee1d6","chunk-d8ebaf14":"9ff39315"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-06c1dd47":1,"chunk-0b889c17":1,"chunk-3155d0f2":1,"chunk-542518c1":1,"chunk-5b33fe71":1,"chunk-7aabfae8":1,"chunk-7e4b5d86":1,"chunk-7f24cb5c":1,"chunk-7fb2206b":1,"chunk-d8ebaf14":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-06c1dd47":"02d3424a","chunk-0b889c17":"1b64ad8f","chunk-2d0e5e97":"31d6cfe0","chunk-3155d0f2":"75f36c2b","chunk-542518c1":"04078e7f","chunk-5b33fe71":"4161ba60","chunk-7aabfae8":"b3342ed6","chunk-7e4b5d86":"ea44e138","chunk-7f24cb5c":"c00476de","chunk-7fb2206b":"ec923e91","chunk-d8ebaf14":"000e2579"}[e]+".css",a=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"349f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v(" Register New User ")]),n("b-form",[n("b-form-group",{attrs:{label:"Username: ","label-for":"reg_username",description:"Please enter unique username."}},[n("b-form-input",{attrs:{id:"reg_username",placeholder:"Enter username"},model:{value:e.regUserForm.username,callback:function(t){e.$set(e.regUserForm,"username",t)},expression:"regUserForm.username"}})],1),n("b-form-group",{attrs:{label:"Email: ","label-for":"reg_email",description:"Please enter valid email"}},[n("b-form-input",{attrs:{id:"reg_email",placeholder:"Enter your email",type:"email"},model:{value:e.regUserForm.email,callback:function(t){e.$set(e.regUserForm,"email",t)},expression:"regUserForm.email"}})],1),n("b-form-group",{attrs:{label:"Password: ","label-for":"reg_pwd",description:"Please enter strong password"}},[n("b-form-input",{attrs:{id:"reg_pwd",type:"password",placeholder:"Your password here"},model:{value:e.regUserForm.password,callback:function(t){e.$set(e.regUserForm,"password",t)},expression:"regUserForm.password"}})],1),n("b-form-group",{attrs:{label:"Master Password: ","label-for":"reg_mpwd",description:"Please enter the master password"}},[n("b-form-input",{attrs:{id:"reg_mpwd",type:"password",placeholder:"Your system's master password here"},model:{value:e.regUserForm.masterPassword,callback:function(t){e.$set(e.regUserForm,"masterPassword",t)},expression:"regUserForm.masterPassword"}})],1),n("b-form-group",{attrs:{label:"Institute","label-for":"reg_institute",description:"This should be consistent with your other users"}},[n("b-form-input",{attrs:{id:"reg_institute",placeholder:"The name of your institue"},model:{value:e.regUserForm.institute,callback:function(t){e.$set(e.regUserForm,"institute",t)},expression:"regUserForm.institute"}})],1),n("b-form-group",{attrs:{label:"Role/Designation","label-for":"reg_designation",description:"The role you want to assign the user."}},[n("b-form-select",{attrs:{id:"reg_designation",options:e.designationOptions},model:{value:e.regUserForm.designation,callback:function(t){e.$set(e.regUserForm,"designation",t)},expression:"regUserForm.designation"}})],1),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.registerUser()}}},[e._v("Create User")])],1)],1)},o=[],a=(n("96cf"),n("1da1")),s={name:"RegisterForm",methods:{registerUser:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("register",e.regUserForm).then((function(){e.$bvModal.msgBoxOk("Registered Successfully").catch((function(){e.$root.$off("bv::modal::hide")})),e.$router.push({name:"Dashboard"})})).catch((function(t){e.$bvModal.msgBoxOk("Could not Register: "+t).then((function(){console.log(t)}))}));case 1:case"end":return t.stop()}}),t)})))()}},data:function(){return{regUserForm:{username:"",password:"",masterPassword:"",email:"",institute:"",designation:null},designationOptions:[{text:"Please select an Option",value:null,disabled:!0},{value:"admin",text:"Administrative User"},{value:"user",text:"Normal User"},{value:"maintenance",text:"Maintenance Staff"},{value:"maintenance",text:"Observer"}]}},beforeDestroy:function(){this.$root.$off("bv::modal::hide")}},i=s,u=n("2877"),c=Object(u["a"])(i,r,o,!1,null,null,null);t["a"]=c.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(o["a"]);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TitleBar"),n("div",{staticClass:"container"},[n("router-view")],1),n("footer",{staticClass:"main"},[e._v(" Copyright © 2021 ATES OPL. All Rights Reserved. ")])],1)},s=[],i=(n("96cf"),n("1da1")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{staticClass:"titlebar",attrs:{toggleable:"lg",type:"dark"}},[e.loggedIn?r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}):e._e(),r("b-navbar-brand",{attrs:{href:"/dashboard"}},[r("img",{attrs:{src:n("cf05"),alt:"ATechno Embedded Solutions",width:"32px",height:"32px"}}),e._v(" "+e._s(e.isMobile?"ATES OPL":"ATechno Embedded Solutions")+" ")]),e.loggedIn?r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto operations"},[r("b-nav-item-dropdown",{attrs:{right:"",text:"Options"}},[r("b-dropdown-item",{on:{click:function(t){return e.$bvModal.show("regForm")}}},[r("HumanIcon",{staticClass:"ico",attrs:{title:"Add User"}}),r("strong",[e._v("Add User")])],1),"admin"===e.designation?r("b-dropdown-item",{on:{click:function(t){return e.goToLogs()}}},[r("LogsIcon",{staticClass:"ico",attrs:{title:"Logs"}}),r("strong",[e._v("Logs")])],1):e._e(),r("b-dropdown-item",{on:{click:function(t){return e.goToProfile()}}},[r("FaceProfile",{staticClass:"ico",attrs:{title:"Profile"}}),r("strong",[e._v("Profile")])],1),r("b-dropdown-item",{on:{click:function(t){return e.goToAboutUs()}}},[r("Info",{staticClass:"ico",attrs:{title:"About Us"}}),r("strong",[e._v("About Us")])],1),r("b-dropdown-item",{on:{click:function(t){return e.logout()}}},[r("LogoutIcon",{staticClass:"ico",attrs:{title:"Logout"}}),r("strong",[e._v("Logout")])],1)],1)],1)],1):e._e()],1),r("b-modal",{attrs:{id:"regForm",title:"Add new user","hide-footer":""}},["admin"==e.designation?r("RegisterForm",{staticClass:"full_height"}):r("div",[r("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("Only admins can add new users.")])],1)],1)],1)},c=[],l=n("5530"),d=n("349f"),f=n("6709"),m=n("843e"),g=n("15e8"),p=n("4611"),h=n("9fb6"),b=n("2f62"),w={name:"TitleBar",components:{RegisterForm:d["a"],LogoutIcon:f["a"],HumanIcon:m["a"],FaceProfile:g["a"],LogsIcon:h["a"],Info:p["a"]},mounted:function(){var e=this;window.addEventListener("resize",(function(){var t=window.screen.width;e.isMobile=t<=760}))},computed:Object(l["a"])({},Object(b["c"])({loggedIn:"getLogInStatus",designation:"getDesignation"})),methods:{logout:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$bvModal.msgBoxConfirm("Are you sure you want to logout?").then((function(t){t&&e.$store.dispatch("logout").then((function(){e.$router.push({name:"Home"})}))})).catch((function(t){e.message=t.message,e.$bvModal.msgBoxOk(t.message)}));case 1:case"end":return t.stop()}}),t)})))()},goToProfile:function(){this.$router.push({name:"Profile"})},goToLogs:function(){this.$router.push({name:"Logs"})},goToAboutUs:function(){this.$router.push({name:"About"})}},data:function(){return{ip:window.location.host,isMobile:!1,message:""}}},v=w,k=(n("f826"),n("2877")),y=Object(k["a"])(v,u,c,!1,null,"50893244",null),T=y.exports,O={name:"App",components:{TitleBar:T},data:function(){return{}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:!0===e.$store.getters.getLogInStatus&&e.$router.push({name:"Dashboard"});case 1:case"end":return t.stop()}}),t)})))()}},P=O,j=(n("034f"),Object(k["a"])(P,a,s,!1,null,null,null)),x=j.exports,S=n("2909"),_=(n("d3b7"),function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var o={username:n.uname,password:n.pwd};fetch("/user/login",{headers:{"Content-Type":"application/json"},mode:"cors",cache:"default",method:"POST",body:""+JSON.stringify(o)}).then((function(e){return e.json()})).then((function(n){console.log({data:n}),n.message?r(n.message):(t.commit("setToken",n.accessToken),t.commit("setLoggedIn",!0),t.commit("setDesignation",n.designation),e())})).catch((function(e){r(e.message)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),A=_,R=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var o={username:n.username,password:n.password,masterPassword:n.masterPassword,email:n.email,institute:n.institute,designation:n.designation};console.log(o),fetch("/user/register",{method:"post",headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(n){console.log({data:n}),n.msg?r(n.msg):(t.commit("setToken",n.accessToken),t.commit("setLoggedIn",!0),t.commit("setDesignation",n.designation),e())})).catch((function(e){r(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=R,I=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n&&t.commit("loading"),e.next=3,fetch("/node",{headers:new Headers({Authorization:"Bearer "+t.getters.getAccessToken})});case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,t.commit("updateSensors",o),t.commit("loaded");case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=I,F=function(e){return new Promise((function(t){clearInterval(window.appInterval),e.commit("purgeToken"),e.commit("purgeDesignation"),e.commit("setLoggedIn",!1),t()}))},C=F,$=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){fetch("/node/add",{headers:new Headers({Authorization:"Bearer "+t.getters.getAccessToken,"Content-Type":"application/json"}),mode:"cors",cache:"default",method:"POST",body:""+JSON.stringify(n)}).then((function(t){201==t.status?e():t.json().then((function(e){r(e.msg)}))}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=$,D=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){fetch("/node/modify",{headers:new Headers({Authorization:"Bearer "+t.getters.getAccessToken,"Content-Type":"application/json"}),mode:"cors",cache:"default",method:"POST",body:""+JSON.stringify(n)}).then((function(t){201==t.status?e():t.json().then((function(e){r(e.msg)}))}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=D,N=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){fetch("/node/"+n,{method:"DELETE",headers:new Headers({Authorization:"Bearer "+t.getters.getAccessToken})}).then((function(e){return e.json()})).then((function(t){"Deleted Successfully"==t.message?e():r()}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=N,H=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){console.log(n),fetch(""+"/node/readings/all/".concat(n),{headers:new Headers({Authorization:"Bearer "+t.getters.getAccessToken})}).then((function(e){return e.json()})).then((function(t){console.log(t),e(t)})).catch((function(e){r(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=H,J=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch("/user/about",{headers:new Headers({Authorization:"Bearer "+t.getters.getAccessToken})}).then((function(e){return e.json()})).then((function(t){e(t.user)})).catch((function(e){n(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=J,Y=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var r={username:n};fetch("/user/forgot",{headers:{"Content-Type":"application/json"},mode:"cors",cache:"default",method:"POST",body:""+JSON.stringify(r)}).then((function(e){return e.json()})).then((function(t){console.log({data:t}),e(!0)})).catch((function(e){alert(e.message),t(e.message)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=Y,K=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var r={token:n.token,password:n.pwd};fetch("/user/resetpwd",{headers:{"Content-Type":"application/json"},mode:"cors",cache:"default",method:"POST",body:""+JSON.stringify(r)}).then((function(e){return e.json()})).then((function(t){t.newUser&&e(!0)})).catch((function(e){alert(e.message),t(e.message)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=K,V=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch("/logs",{headers:new Headers({Authorization:"Bearer "+t.getters.getAccessToken})}).then((function(e){return e.json()})).then((function(t){e(t.updates)})).catch((function(e){n(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=V,X=function(e,t){e.commit("updateSensors",t)},Z=function(e,t){e.commit("setToken",t)},ee=function(e,t){e.commit("setLoggedIn",t)},te=function(e,t){e.commit("setDesignation",t)},ne=function(e){e.commit("purgeToken")},re={updateSensors:X,setToken:Z,purgeToken:ne,setLoggedIn:ee,setDesignation:te,login:A,register:U,fetchSensors:L,logout:C,addNode:E,modifyNode:B,deleteNode:M,fetchTrend:z,sendResetLink:G,fetchProfile:q,fetchLogs:W,resetPassword:Q},oe="accessToken",ae="designation",se=function(){return window.localStorage.getItem(oe)},ie=function(e){return window.localStorage.setItem(oe,e)},ue=function(){return window.localStorage.removeItem(oe)},ce=function(){return window.localStorage.getItem(ae)},le=function(e){return window.localStorage.setItem(ae,e)},de=function(){return window.localStorage.removeItem(ae)};r["default"].use(b["a"]);var fe=new b["a"].Store({state:{sensors:[],accessToken:se(),loggedIn:!!se(),designation:ce(),loading:!0,faulties:Array()},mutations:{loaded:function(e){e.loading=!1},loading:function(e){e.loading=!0},updateSensors:function(e,t){e.sensors=t},setToken:function(e,t){ie(t),e.accessToken=t},setLoggedIn:function(e,t){e.loggedIn=t},setDesignation:function(e,t){e.designation=t,le(t)},purgeToken:function(e){e.accessToken=null,ue()},purgeDesignation:function(e){e.designation=null,de()},setFaulties:function(e,t){var n;(n=e.faulties).push.apply(n,Object(S["a"])(t))}},actions:re,modules:{},getters:{getSensors:function(e){return e.sensors},getAccessToken:function(e){return e.accessToken},getDesignation:function(e){return e.designation},getLogInStatus:function(e){return e.loggedIn},isLoading:function(e){return e.loading},getFaulties:function(e){return e.faulties}}}),me=n("8c4f");r["default"].use(me["a"]);var ge=[{path:"/",name:"Home",component:function(){return n.e("chunk-0b889c17").then(n.bind(null,"eec5"))}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-7f24cb5c").then(n.bind(null,"7277"))}},{path:"/trends/",name:"Trends",component:function(){return n.e("chunk-7aabfae8").then(n.bind(null,"9634"))}},{path:"/graph2/:uid/:from/:to",name:"GraphHigh",component:function(){return n.e("chunk-d8ebaf14").then(n.bind(null,"9460"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-7e4b5d86").then(n.bind(null,"c66d"))}},{path:"/forgot-password",name:"Forgot",component:function(){return n.e("chunk-7fb2206b").then(n.bind(null,"0fdf"))}},{path:"/forgot-password-intranet",name:"ForgotIntra",component:function(){return n.e("chunk-3155d0f2").then(n.bind(null,"cb3c"))}},{path:"/passwordreset",name:"Reset",component:function(){return n.e("chunk-542518c1").then(n.bind(null,"0813"))}},{path:"/logs",name:"Logs",component:function(){return n.e("chunk-5b33fe71").then(n.bind(null,"bbae"))}},{path:"/aboutus",name:"About",component:function(){return n.e("chunk-06c1dd47").then(n.bind(null,"2664"))}},{path:"/:catchAll(.*)",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}],pe=new me["a"]({mode:"history",base:"",routes:ge}),he=pe,be=n("6cf9"),we=n("4452"),ve=n.n(we);r["default"].config.productionTip=!1,r["default"].use(be["a"]),r["default"].use(ve.a),new r["default"]({store:fe,router:he,render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,n){},a25a:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.ecd4bcce.png"},f826:function(e,t,n){"use strict";n("a25a")}});
//# sourceMappingURL=app.b87d7e8e.js.map