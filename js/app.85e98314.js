(function(){"use strict";var t={7575:function(t,r,n){var e=n(6369),o=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],a=n(1001),i={},c=(0,a.Z)(i,o,s,!1,null,null,null),u=c.exports,l=n(2631),f=function(){var t=this,r=t._self._c;return r("div",{staticClass:"xdining-scan"},[r("scan-code",{directives:[{name:"show",rawName:"v-show",value:t.isScan,expression:"isScan"}],attrs:{camera:t.isScan?"rear":"off"},on:{backEvent:function(r){t.isScan=!1},decodeEvent:t.onDecode,errorEvent:t.onError}}),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isScan,expression:"!isScan"}],staticClass:"xscan-status"},[r("div",{staticClass:"xscan-status-top",class:{error:!t.scanStatus}},[r("i",{staticClass:"xsst-icon"}),r("p",{staticClass:"xsst-title"},[t._v(t._s(t.scanStatus?"核销成功":"核销失败"))]),r("p",{directives:[{name:"show",rawName:"v-show",value:!t.scanStatus,expression:"!scanStatus"}],staticClass:"xsst-desc"},[t._v(t._s(t.scanMessage))])]),r("div",{staticClass:"xbutton-box"},[t.initError?t._e():r("a",{staticClass:"xbutton fill continue",on:{click:function(r){return t.startScan()}}},[t._v("继续扫码")]),r("a",{staticClass:"xbutton back",on:{click:function(r){return t.backInfo()}}},[t._v("返回")])])]),r("audio",{ref:"audioS",attrs:{src:n(99)}}),r("audio",{ref:"audioE",attrs:{src:n(5330)}})],1)},d=[],p=function(){var t=this,r=t._self._c;return r("div",{staticClass:"xscan-code"},[r("qrcode-stream",{attrs:{camera:t.camera,torch:t.torch,track:t.track},on:{decode:t.onDecode,init:t.onInit}},[r("i",{staticClass:"xicon icon-arrow-left",on:{click:function(r){return t.todoBack()}}}),r("p",{staticClass:"xscan-code-line"}),r("p",{staticClass:"xscan-code-tip"},[t._v("请扫描二维码")])])],1)},h=[],v=n(2669);function m(t,r=100){let n=!0;return(...e)=>{if(!n)return!1;n=!1,setTimeout((()=>{t(...e),n=!0}),r)}}var S={name:"scanCode",components:{QrcodeStream:v.QrcodeStream},data(){return{error:""}},props:{camera:{type:String,default:"rear"},torch:{type:Boolean,default:!1},track:{type:Function}},mounted(){this.$refs.qrs.onLocate=m((t=>{console.log("扫码结果onLocate",result),this.$emit("decodeEvent",result)}),1e3)},methods:{onDecode(t){console.log("扫码结果Decode",t)},async onInit(t){try{await t}catch(r){"NotAllowedError"===r.name?this.error="ERROR: 您需要授予相机访问权限":"NotFoundError"===r.name?this.error="ERROR: 这个设备上没有摄像头":"NotSupportedError"===r.name?this.error="ERROR: 所需的安全上下文(HTTPS、本地主机)":"NotReadableError"===r.name?this.error="ERROR: 相机被占用":"OverconstrainedError"===r.name?this.error="ERROR: 安装摄像头不合适":"StreamApiNotSupportedError"===r.name?this.error="ERROR: 此浏览器不支持流API":"InsecureContextError"===r.name?this.error="ERROR: 不支持HTTP协议访问":this.error=r.name,this.$emit("errorEvent",this.error,r)}},todoBack(){this.$emit("backEvent")}}},w=S,x=(0,a.Z)(w,p,h,!1,null,null,null),E=x.exports,b={name:"diningScan",components:{scanCode:E},data(){return{initError:!1,isScan:!0,scanStatus:!1,scanMessage:"请重新扫码",scanInfo:{},queryInfo:{},writeOffSuccessPrompt:1,writeOffFailurePrompt:1}},methods:{onError(t){this.initError=!0,this.isScan=!1,this.scanMessage=t},onDecode(t){Math.random()>.5?(this.scanStatus=!0,this.scanMessage="核销成功"):(this.scanStatus=!1,this.scanMessage="核销失败"),this.scanStatus&&this.writeOffSuccessPrompt?(window.alert("核销成功"),this.playAudio()):!this.scanStatus&&this.writeOffFailurePrompt?(window.alert("核销失败"),this.playAudio(!1)):this.isScan=!1},backInfo(){console.log("back")},startScan(){this.isScan=!0},playAudio(t){const r=t?"audioS":"audioE";this.$refs[r].currentTime=0,this.$refs[r].play()}}},O=b,R=(0,a.Z)(O,f,d,!1,null,null,null),g=R.exports;e.ZP.use(l.ZP);const k=[{path:"/",name:"home",component:g}],y=new l.ZP({routes:k});var C=y;e.ZP.config.productionTip=!1,new e.ZP({router:C,render:t=>t(u)}).$mount("#app")},5330:function(t,r,n){t.exports=n.p+"media/scan-error-tip.64adf786.mp3"},99:function(t,r,n){t.exports=n.p+"media/scan-success-tip.226ffdf8.mp3"}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(r,e,o,s){if(!e){var a=1/0;for(l=0;l<t.length;l++){e=t[l][0],o=t[l][1],s=t[l][2];for(var i=!0,c=0;c<e.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](e[c])}))?e.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(l--,1);var u=o();void 0!==u&&(r=u)}}return r}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[e,o,s]}}(),function(){n.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(r,{a:r}),r}}(),function(){n.d=function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(r){return 0===t[r]};var r=function(r,e){var o,s,a=e[0],i=e[1],c=e[2],u=0;if(a.some((function(r){return 0!==t[r]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var l=c(n)}for(r&&r(e);u<a.length;u++)s=a[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},e=self["webpackChunkvue2project"]=self["webpackChunkvue2project"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(7575)}));e=n.O(e)})();
//# sourceMappingURL=app.85e98314.js.map