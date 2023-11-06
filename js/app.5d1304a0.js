(function(){"use strict";var r={3035:function(r,e,n){var t=n(6369),o=function(){var r=this,e=r._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],i=n(1001),s={},c=(0,i.Z)(s,o,a,!1,null,null,null),u=c.exports,l=n(2631),f=function(){var r=this,e=r._self._c;return e("div",{staticClass:"xdining-scan"},[e("scan-code",{directives:[{name:"show",rawName:"v-show",value:r.isScan,expression:"isScan"}],attrs:{camera:r.isScan?"rear":"off"},on:{backEvent:function(e){r.isScan=!1},decodeEvent:r.onDecode,errorEvent:r.onError}})],1)},d=[],h=function(){var r=this,e=r._self._c;return e("div",{staticClass:"xscan-code"},[e("qrcode-stream",{ref:"qrs",attrs:{camera:r.camera,torch:r.torch,track:r.track},on:{decode:r.onDecode,init:r.onInit}},[e("i",{staticClass:"xicon icon-arrow-left",on:{click:function(e){return r.todoBack()}}}),e("p",{staticClass:"xscan-code-line"}),e("p",{staticClass:"xscan-code-tip",class:{error:r.error}},[r._v(r._s(r.error||r.tipMessage))])])],1)},p=[],v=n(2669),m={name:"scanCode",components:{QrcodeStream:v.QrcodeStream},data(){return{error:""}},props:{camera:{type:String,default:"rear"},torch:{type:Boolean,default:!1},track:{type:Function},tipMessage:{type:String,default:"请扫描二维码"}},mounted(){this.$refs.qrs.onLocate=null},methods:{onDecode(r){console.log("扫码结果",r),this.$emit("decodeEvent",r)},async onInit(r){try{await r}catch(e){"NotAllowedError"===e.name?this.error="ERROR: 您需要授予相机访问权限":"NotFoundError"===e.name?this.error="ERROR: 这个设备上没有摄像头":"NotSupportedError"===e.name?this.error="ERROR: 所需的安全上下文(HTTPS、本地主机)":"NotReadableError"===e.name?this.error="ERROR: 相机被占用":"OverconstrainedError"===e.name?this.error="ERROR: 安装摄像头不合适":"StreamApiNotSupportedError"===e.name?this.error="ERROR: 此浏览器不支持流API":"InsecureContextError"===e.name?this.error="ERROR: 不支持HTTP协议访问":this.error=e.name,this.$emit("errorEvent",this.error,e)}},todoBack(){this.$emit("backEvent")}}},E=m,g=(0,i.Z)(E,h,p,!1,null,null,null),R=g.exports,S={name:"diningScan",components:{scanCode:R},data(){return{fid:sessionStorage.getItem("fid"),initError:!1,isScan:!0,scanStatus:!1,scanMessage:"请重新扫码",scanInfo:{},queryInfo:{}}},created(){this.queryInfo=this.$route.query},methods:{onError(r){this.initError=!0,this.isScan=!1,this.scanStatus=!1,this.scanMessage=r},onDecode(r){this.isScan=!1,console.log(r),this.isScan=!0},backInfo(){console.log("back")},startScan(){this.isScan=!0}}},O=S,b=(0,i.Z)(O,f,d,!1,null,null,null),w=b.exports;t.ZP.use(l.ZP);const y=[{path:"/",name:"home",component:w}],k=new l.ZP({routes:y});var x=k;t.ZP.config.productionTip=!1,new t.ZP({router:x,render:r=>r(u)}).$mount("#app")}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={exports:{}};return r[t].call(a.exports,a,a.exports,n),a.exports}n.m=r,function(){var r=[];n.O=function(e,t,o,a){if(!t){var i=1/0;for(l=0;l<r.length;l++){t=r[l][0],o=r[l][1],a=r[l][2];for(var s=!0,c=0;c<t.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(r){return n.O[r](t[c])}))?t.splice(c--,1):(s=!1,a<i&&(i=a));if(s){r.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=r.length;l>0&&r[l-1][2]>a;l--)r[l]=r[l-1];r[l]=[t,o,a]}}(),function(){n.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return n.d(e,{a:e}),e}}(),function(){n.d=function(r,e){for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};n.O.j=function(e){return 0===r[e]};var e=function(e,t){var o,a,i=t[0],s=t[1],c=t[2],u=0;if(i.some((function(e){return 0!==r[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(e&&e(t);u<i.length;u++)a=i[u],n.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return n.O(l)},t=self["webpackChunkvue2project"]=self["webpackChunkvue2project"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(3035)}));t=n.O(t)})();
//# sourceMappingURL=app.5d1304a0.js.map