(function(){"use strict";var t={273:function(t,e,n){var r=n(9242),o=n(3396);const i={id:"app"};function s(t,e,n,r,s,a){const u=(0,o.up)("PresetBrowserView");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(u)])}var a=n(6520),u=n(7139);const c=(0,o._)("h1",null,"Quad Cortex preset browser",-1),l=["data-path","onClick"];function f(t,e,n,r,i,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[c,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.presets.Setlist,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("h2",null,(0,u.zw)(t.PathToFile(e._attributes.path)),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.Preset,(e=>((0,o.wg)(),(0,o.iD)("p",{key:e},[""!=e._attributes.path?((0,o.wg)(),(0,o.iD)("button",{key:0,"data-path":e._attributes.path,onClick:n=>t.OpenPreset(e)},(0,u.zw)(t.PathToFile(e._attributes.path,!0)),9,l)):(0,o.kq)("",!0)])))),128))])))),128))])],64)}var p=n(4311),d=n(4586),h=n.n(d),v=(0,o.aZ)({name:"PresetBrowserView",components:{},data(){return{presets:{}}},async mounted(){let t="";t="/media/p4/Presets/setlists",this.loadPresetXML(t).then((t=>{this.presets=t.Setlists,console.log(this.presets)}))},methods:{async loadPresetXML(t){let e=await p.Z.get(t);const n=e.data,r=h().xml2json(n,{compact:!0,spaces:4}),o=JSON.parse(r);return o},objectToXML(t){const e=h().js2xml(t,{compact:!0,spaces:4});console.log(e)},PathToFile(t,e=!1){let n=t.split("/").pop();return e?n.split(".").shift():n},OpenPreset(t){console.log(t)}}}),w=n(89);const b=(0,w.Z)(v,[["render",f]]);var g=b,y=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let O=class extends a.w3{};O=y([(0,a.Ei)({components:{PresetBrowserView:g}})],O);var m=O;const P=(0,w.Z)(m,[["render",s]]);var k=P;(0,r.ri)(k).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,i<s&&(s=i));if(a){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,s=r[0],a=r[1],u=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var l=u(n)}for(e&&e(r);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkdesktop_editor"]=self["webpackChunkdesktop_editor"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(273)}));r=n.O(r)})();
//# sourceMappingURL=app.7bb3d19e.js.map