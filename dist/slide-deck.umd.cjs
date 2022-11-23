(function(n,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(n=typeof globalThis<"u"?globalThis:n||self,t(n.SlideDeck={},n.Vue))})(this,function(n,t){"use strict";const f={class:"slide-deck-slide"};let r=$ref();const c=t.defineComponent({__name:"Slide",props:{node:null},setup(e){return t.onMounted(()=>{var i;(i=r==null?void 0:r.el)==null||i.dispatchEvent(new Event("enter"))}),(i,s)=>(t.openBlock(),t.createElementBlock("div",f,[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(t.unref(r)),{ref_key:"node",ref:r},null,512))]))}}),u=t.defineComponent({components:{Slide:c},props:{attrs:{type:Object,default:()=>({})},active:{type:Number,default:0},autoResize:{type:Boolean,default:!0},controls:Boolean,props:{type:Object,default:()=>({})}},emits:["before-enter","enter","after-enter","before-leave","leave","after-leave"],data(){return{currentActive:this.active,direction:"forward",maxHeight:void 0,mounted:!1,lastSlide:null,sliding:!1}},watch:{currentActive(e,i){this.lastSlide=i,this.direction=this.findIndex(i)>this.findIndex(e)?"backward":"forward"}},mounted(){this.$nextTick(()=>{this.mounted=!0,this.$emit("enter",this.slot())})},methods:{findIndex(e){return this.slots().findIndex((i,s)=>i.key===e||s===e)},find(e){return this.slots()[this.findIndex(e)]},first(){this.goto(0)},last(){this.goto(this.slots().length-1)},goto(e){this.sliding||(this.currentActive=Math.max(0,e))},next(){this.sliding||(this.currentActive=Math.min(this.findIndex(this.currentActive)+1,this.slots().length-1))},prev(){this.sliding||(this.currentActive=Math.max(this.findIndex(this.currentActive)-1,0))},resize(e){const i=getComputedStyle(e).height;this.maxHeight=i==="0x"?this.maxHeight:i},slot(){return this.find(this.currentActive)},slots(){return(this.$slots.default(this)||this.$slots.default(this)).map((e,i)=>(e.props=Object.assign({},e.props,this.props,this.attrs),Object.assign(e,{key:i})))},onClickControl(e,i){this.sliding||this.goto(i)},onBeforeLeave(e){this.autoResize&&this.resize(e),this.$emit("before-leave",this.slot(),this.find(this.lastSlide))},onBeforeEnter(){this.sliding=!0,this.$emit("before-enter",this.slot(),this.find(this.lastSlide))},onEnter(e){this.$nextTick(()=>{this.autoResize&&this.resize(e),this.$emit("enter",this.slot(),this.find(this.lastSlide))})},onAfterEnter(){this.$emit("after-enter",this.slot(),this.find(this.lastSlide))},onLeave(){this.$emit("leave",this.slot(),this.find(this.lastSlide))},onAfterLeave(){this.sliding=!1,this.$nextTick(()=>{this.maxHeight=null,this.$emit("after-leave",this.slot(),this.find(this.lastSlide))})}}}),$="",h=(e,i)=>{const s=e.__vccOpts||e;for(const[l,d]of i)s[l]=d;return s};function m(e,i,s,l,d,o){const a=t.resolveComponent("slide");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["slide-deck",{sliding:e.sliding}])},[t.renderSlot(e.$slots,"top",{active:e.currentActive}),t.createElementVNode("div",{ref:"content",class:t.normalizeClass(["slide-deck-content",{[e.direction]:!0}]),style:t.normalizeStyle({maxHeight:e.maxHeight})},[t.createVNode(t.Transition,{name:`slide-${e.direction}`,onBeforeEnter:e.onBeforeEnter,onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave,onAfterLeave:e.onAfterLeave},{default:t.withCtx(()=>[(t.openBlock(),t.createBlock(t.KeepAlive,null,[(t.openBlock(),t.createBlock(a,{ref:"slide",key:e.currentActive,node:e.find(e.currentActive)},null,8,["node"]))],1024))]),_:1},8,["name","onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],6),t.renderSlot(e.$slots,"middle",{active:e.currentActive}),t.renderSlot(e.$slots,"bottom",{active:e.currentActive})],2)}const p=h(u,[["render",m]]),k={props:{active:{type:Number,default:0},slots:{type:Array,required:!0}},computed:{context(){return this}},methods:{isActive(e,i){return e.key===this.active||i===this.active},onClick(e,i){this.$emit("click",e,i)}}},A="",v={class:"slide-deck-controls"};function g(e,i,s,l,d,o){return t.openBlock(),t.createElementBlock("div",v,[t.createElementVNode("a",{href:"#",class:t.normalizeClass(["slide-deck-control-icon",{"is-active":o.isActive(e.slide,s.active)}]),onClick:i[0]||(i[0]=t.withModifiers(a=>o.onClick(a,e.slide),["prevent"]))},[t.renderSlot(e.$slots,"default",t.normalizeProps(t.guardReactiveProps(Object.assign({slide:e.slide,active:s.active},o.context))),()=>[t.createTextVNode("\u2022")])],2)])}const S=h(k,[["render",g]]);n.Slide=c,n.SlideDeck=p,n.SlideDeckControls=S,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
