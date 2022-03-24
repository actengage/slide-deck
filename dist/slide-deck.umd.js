(function(r,c){typeof exports=="object"&&typeof module!="undefined"?c(exports):typeof define=="function"&&define.amd?define(["exports"],c):(r=typeof globalThis!="undefined"?globalThis:r||self,c(r.SlideDeck={}))})(this,function(r){"use strict";function c(e,t,l,n,s,d,p,M){var i=typeof e=="function"?e.options:e;t&&(i.render=t,i.staticRenderFns=l,i._compiled=!0),n&&(i.functional=!0),d&&(i._scopeId="data-v-"+d);var a;if(p?(a=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(o=__VUE_SSR_CONTEXT__),s&&s.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(p)},i._ssrRegister=a):s&&(a=M?function(){s.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:s),a)if(i.functional){i._injectStyles=a;var w=i.render;i.render=function(B,k){return a.call(k),w(B,k)}}else{var m=i.beforeCreate;i.beforeCreate=m?[].concat(m,a):[a]}return{exports:e,options:i}}const g={name:"Slide",props:{node:Object},beforeDestroy(){delete this.node.elm},mounted(){this.node.elm.dispatchEvent(new Event("enter"))},render(e){return e("div",{staticClass:"slide-deck-slide"},[this.node])}};let S,y;const u={};var $=c(g,S,y,!1,b,null,null,null);function b(e){for(let t in u)this[t]=u[t]}var h=function(){return $.exports}(),C=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"slide-deck-controls"},e._l(e.slots,function(n,s){return l("a",{key:s,staticClass:"slide-deck-control-icon",class:{"is-active":e.isActive(n,s)},attrs:{href:"#"},on:{click:function(d){return d.preventDefault(),e.onClick(d,n)}}},[e._t("default",function(){return[e._v("\u2022")]},null,Object.assign({slide:n,index:s},e.context))],2)}),0)},A=[],H="";const x={props:{active:{type:[String,Number],default:0},slots:{type:Array,required:!0}},computed:{context(){return this}},methods:{key(e){return e.data?e.data.key:e.key},isActive(e,t){return this.key(e)===this.active||t===this.active},onClick(e,t){this.$emit("click",e,t)}}},f={};var O=c(x,C,A,!1,D,null,null,null);function D(e){for(let t in f)this[t]=f[t]}var _=function(){return O.exports}(),j=function(){var e,t=this,l=t.$createElement,n=t._self._c||l;return n("div",{staticClass:"slide-deck",class:{sliding:t.sliding}},[t._t("top",null,{active:t.currentActive},this),n("div",{ref:"content",staticClass:"slide-deck-content",class:(e={},e[t.direction]=!0,e),style:{maxHeight:t.maxHeight}},[n("transition",{attrs:{name:"slide-"+t.direction},on:{"before-enter":t.onBeforeEnter,enter:t.onEnter,"after-enter":t.onAfterEnter,"before-leave":t.onBeforeLeave,leave:t.onLeave,"after-leave":t.onAfterLeave}},[n("keep-alive",[n("slide",{key:t.currentActive,ref:"slide",attrs:{node:t.find(t.currentActive)}})],1)],1)],1),t._t("middle",null,{active:t.currentActive},this),t._t("controls",function(){return[t.controls&&t.mounted?n("slide-deck-controls",t._b({ref:"controls",attrs:{slots:t.slots(),active:t.currentActive},on:{click:t.onClickControl},scopedSlots:t._u([{key:"default",fn:function(s){return[t._t("bullet",null,null,s)]}}],null,!0)},"slide-deck-controls",this,!1)):t._e()]},{active:t.currentActive},this),t._t("bottom",null,{active:t.currentActive},this)],2)},E=[],L="";const R={name:"SlideDeck",components:{Slide:h,SlideDeckControls:_},props:{attrs:Object,active:{type:[String,Number],default:0},autoResize:{type:Boolean,default:!0},controls:Boolean,props:Object},data(){return{currentActive:this.active,direction:"forward",maxHeight:null,mounted:!1,lastSlide:null,sliding:!1}},watch:{currentActive(e,t){this.lastSlide=t,this.direction=this.findIndex(t)>this.findIndex(e)?"backward":"forward"}},mounted(){this.$nextTick(()=>{this.mounted=!0,this.$emit("enter",this.slot())})},methods:{findIndex(e){return this.slots().findIndex((t,l)=>this.key(t)===e||l===e)},find(e){return this.slots()[this.findIndex(e)]},key(e){return e.data&&e.data.key||e.key||e},goto(e){this.sliding||(this.currentActive=this.findIndex(this.key(e)))},next(){this.sliding||(this.currentActive=Math.min(this.findIndex(this.currentActive)+1,this.slots().length-1))},prev(){this.sliding||(this.currentActive=Math.max(this.findIndex(this.currentActive)-1,0))},resize(e){const t=getComputedStyle(e).height;this.maxHeight=t==="0x"?this.maxHeight:t},slot(){return this.find(this.currentActive)},slots(){return(this.$slots.default||this.$scopedSlots.default(this)).filter(e=>!!e.tag).map((e,t)=>(e.componentOptions&&(e.componentOptions.propsData=Object.assign({},e.componentOptions.propsData,this.props)),e.data&&(e.data.attrs=Object.assign({},e.data.attrs,this.attrs)),Object.assign(e,{key:t})))},onClickControl(e,t){this.sliding||this.goto(t)},onBeforeLeave(e){this.autoResize&&this.resize(e),this.$emit("before-leave",this.slot(),this.find(this.lastSlide))},onBeforeEnter(e){this.sliding=!0,this.$emit("before-enter",this.slot(),this.find(this.lastSlide))},onEnter(e){this.$nextTick(()=>{this.autoResize&&this.resize(e),this.$emit("enter",this.slot(),this.find(this.lastSlide))})},onAfterEnter(e){this.$emit("after-enter",this.slot(),this.find(this.lastSlide))},onLeave(e){this.$emit("leave",this.slot(),this.find(this.lastSlide))},onAfterLeave(e){this.sliding=!1,this.$nextTick(()=>{this.maxHeight=null,this.$emit("before-leave",this.slot(),this.find(this.lastSlide))})}}},v={};var T=c(R,j,E,!1,I,null,null,null);function I(e){for(let t in v)this[t]=v[t]}var z=function(){return T.exports}();r.Slide=h,r.SlideDeck=z,r.SlideDeckControls=_,Object.defineProperty(r,"__esModule",{value:!0}),r[Symbol.toStringTag]="Module"});
