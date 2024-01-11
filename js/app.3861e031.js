(function(){"use strict";var e={3694:function(e,t,i){var r=i(6369),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"cx_box"},[t("div",{staticClass:"cx_box-content"},[t("div",{staticClass:"zfaceRecord"},[t("div",{staticClass:"zfaceRecord-video"},[t("video",{ref:"video",attrs:{muted:"",disablepictureinpicture:""},domProps:{muted:!0}})]),t("div",{staticClass:"zfaceRecord-opat"},[t("div",{staticClass:"zfaceRecord-recordData"},[t("video",{ref:"Camera",staticStyle:{display:"none"},attrs:{loop:"",height:"100%",muted:"",disablepictureinpicture:""},domProps:{muted:!0}})]),this.videoWidth&&this.videoHeight?t("div",{staticClass:"zfaceRecord-btn"},[0==e.isRecord?t("p",{staticClass:"zfaceRecord-record",on:{click:e.startRecord}}):1==e.isRecord?t("p",{staticClass:"zfaceRecord-complete",on:{click:e.stopRecord}}):2==e.isRecord?t("p",{staticClass:"zfaceRecord-submit",on:{click:e.submitRecord}}):e._e()]):e._e(),2==e.isRecord?t("div",{ref:"reset",staticClass:"zfaceRecord-reset",on:{click:e.resetRecord}}):e._e()])])])])},s=[],a=(i(560),i(8858),i(1318),i(3228),{props:{},data(){return{isSupport:!0,mediaStreamTrack:{},video_stream:"",camera:"",video:"",buffer:[],clientWidth:0,clientHeight:0,videoWidth:0,videoHeight:0,mediaRecorder:null,isRecord:0,constraints:null,facePath:"",from:0,source:"",similarityScore:0,terminal:null,enc:"",time:"",identifyType:""}},mounted(){this.init(),this.getCamera()},methods:{init(){this.camera=this.$refs.Camera,this.video=this.$refs.video},resetRecord(){this.isRecord=0,this.camera.style.display="none",this.video.style.display="block"},gotMediaStream(e){return this.mediaStreamTrack="function"===typeof e.stop?e:e.getTracks()[0],this.video_stream=e,this.video.srcObject=e,this.video.setAttribute("loop",!0),this.video.play(),navigator.mediaDevices.enumerateDevices()},gotMediaSize(){this.clientWidth=document.body.clientWidth,this.clientHeight=document.body.clientHeight,this.videoWidth=this.$refs.video.clientWidth,this.videoHeight=this.$refs.video.clientHeight},handleError(){},handleDataAvailable(e){e&&e.data&&e.data.size>0&&this.buffer.push(e.data)},startRecord(){this.buffer=[],this.camera.style.display="none";var e={mimeType:"video/webm;codecs=vp8"};MediaRecorder.isTypeSupported(e.mimeType)||console.log(`${e.mimeType} is not supported`);try{this.mediaRecorder=new MediaRecorder(this.video_stream,e),this.isRecord=1}catch(t){return void console.error("Failed to create MediaRecorder:",t)}this.mediaRecorder.ondataavailable=this.handleDataAvailable,this.mediaRecorder.start(10)},stopRecord(){this.isRecord=2,this.mediaRecorder.stop(),this.setVideo()},submitRecord(){if(2==this.isRecord){this.isRecord=3,this.$store.commit("SET_LOAD_ALIVE",!0);var e=new Blob(this.buffer,{type:"video/webm"});new File([e],"myvideo",{type:"video/webm"})}},getCamera(){if(!navigator.mediaDevices)return this.isSupport=!1,void(navigator.mediaDevices={});this.constraints={video:!0,audio:!1},navigator.mediaDevices.getUserMedia(this.constraints).then(this.gotMediaStream).then(this.gotMediaSize).catch((e=>{console.log(e)}))},setVideo(){this.gotMediaSize();var e=new Blob(this.buffer,{type:"video/webm"});this.camera.style.display="block",this.video.style.display="none",this.camera.src=window.URL.createObjectURL(e),this.camera.srcObject=null,this.camera.play()},OpenCamera(){this.getCamera()},CloseCamera(){console.log("关闭摄像头"),this.video.srcObject.getTracks()[0].stop()}}}),c=a,n=i(1001),d=(0,n.Z)(c,o,s,!1,null,null,null),l=d.exports;r.ZP.config.productionTip=!1,new r.ZP({render:e=>e(l)}).$mount("#app")}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,r,o,s){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],s=e[l][2];for(var c=!0,n=0;n<r.length;n++)(!1&s||a>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[n])}))?r.splice(n--,1):(c=!1,s<a&&(a=s));if(c){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,o,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,a=r[0],c=r[1],n=r[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(n)var l=n(i)}for(t&&t(r);d<a.length;d++)s=a[d],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(l)},r=self["webpackChunktest_app"]=self["webpackChunktest_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(3694)}));r=i.O(r)})();
//# sourceMappingURL=app.3861e031.js.map