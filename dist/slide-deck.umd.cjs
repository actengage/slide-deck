(function(s,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(s=typeof globalThis<"u"?globalThis:s||self,t(s.SlideDeck={},s.Vue))})(this,function(s,t){"use strict";const f={class:"slide-deck-slide"};let a=t.ref();const c=t.defineComponent({__name:"Slide",props:{node:null},setup(e){const i=e;return t.onMounted(()=>{var n,r;(r=(n=a.value)==null?void 0:n.el)==null||r.dispatchEvent(new Event("enter"))}),(n,r)=>(t.openBlock(),t.createElementBlock("div",f,[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(i.node),{ref_key:"node",ref:a},null,512))]))}}),u=t.defineComponent({components:{Slide:c},props:{attrs:{type:Object,default:()=>({})},active:{type:Number,default:0},autoResize:{type:Boolean,default:!0},controls:Boolean,props:{type:Object,default:()=>({})},slots:{type:Array,default:void 0}},emits:["before-enter","enter","after-enter","before-leave","leave","after-leave"],data(){return{currentActive:this.active,direction:"forward",maxHeight:void 0,mounted:!1,lastSlide:null,sliding:!1}},watch:{currentActive(e,i){this.lastSlide=i,this.direction=this.findIndex(i)>this.findIndex(e)?"backward":"forward"}},mounted(){this.$nextTick(()=>{this.mounted=!0,this.$emit("enter",this.slot())})},methods:{findIndex(e){return this.vnodes().findIndex((i,n)=>i.key===e||n===e)},find(e){return this.vnodes()[this.findIndex(e)]},first(){this.goto(0)},last(){this.goto(this.vnodes().length-1)},goto(e){this.sliding||(this.currentActive=Math.max(0,e))},next(){this.sliding||(this.currentActive=Math.min(this.findIndex(this.currentActive)+1,this.vnodes().length-1))},prev(){this.sliding||(this.currentActive=Math.max(this.findIndex(this.currentActive)-1,0))},resize(e){const i=getComputedStyle(e).height;this.maxHeight=i==="0x"?this.maxHeight:i},slot(){return this.find(this.currentActive)},vnodes(){return(this.slots||this.$slots.default(this)).map((e,i)=>(e.props=Object.assign({},e.props,this.props,this.attrs),Object.assign(e,{key:i})))},onClickControl(e,i){this.sliding||this.goto(i)},onBeforeLeave(e){this.autoResize&&this.resize(e),this.$emit("before-leave",this.slot(),this.find(this.lastSlide))},onBeforeEnter(){this.sliding=!0,this.$emit("before-enter",this.slot(),this.find(this.lastSlide))},onEnter(e){this.$nextTick(()=>{this.autoResize&&this.resize(e),this.$emit("enter",this.slot(),this.find(this.lastSlide))})},onAfterEnter(){this.$emit("after-enter",this.slot(),this.find(this.lastSlide))},onLeave(){this.$emit("leave",this.slot(),this.find(this.lastSlide))},onAfterLeave(){this.sliding=!1,this.$nextTick(()=>{this.maxHeight=null,this.$emit("after-leave",this.slot(),this.find(this.lastSlide))})}}}),S="",h=(e,i)=>{const n=e.__vccOpts||e;for(const[r,l]of i)n[r]=l;return n};function m(e,i,n,r,l,o){const d=t.resolveComponent("slide");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["slide-deck",{sliding:e.sliding}])},[t.renderSlot(e.$slots,"top",{active:e.currentActive}),t.createElementVNode("div",{ref:"content",class:t.normalizeClass(["slide-deck-content",{[e.direction]:!0}]),style:t.normalizeStyle({maxHeight:e.maxHeight})},[t.createVNode(t.Transition,{name:`slide-${e.direction}`,onBeforeEnter:e.onBeforeEnter,onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave,onAfterLeave:e.onAfterLeave},{default:t.withCtx(()=>[(t.openBlock(),t.createBlock(t.KeepAlive,null,[(t.openBlock(),t.createBlock(d,{ref:"slide",key:e.currentActive,node:e.find(e.currentActive)},null,8,["node"]))],1024))]),_:1},8,["name","onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],6),t.renderSlot(e.$slots,"middle",{active:e.currentActive}),t.renderSlot(e.$slots,"bottom",{active:e.currentActive})],2)}const p=h(u,[["render",m]]),v={props:{active:{type:Number,default:0},slots:{type:Array,required:!0}},computed:{context(){return this}},methods:{isActive(e,i){return e.key===this.active||i===this.active},onClick(e,i){this.$emit("click",e,i)}}},y="",k={class:"slide-deck-controls"};function g(e,i,n,r,l,o){return t.openBlock(),t.createElementBlock("div",k,[t.createElementVNode("a",{href:"#",class:t.normalizeClass(["slide-deck-control-icon",{"is-active":o.isActive(e.slide,n.active)}]),onClick:i[0]||(i[0]=t.withModifiers(d=>o.onClick(d,e.slide),["prevent"]))},[t.renderSlot(e.$slots,"default",t.normalizeProps(t.guardReactiveProps(Object.assign({slide:e.slide,active:n.active},o.context))),()=>[t.createTextVNode("\u2022")])],2)])}const A=h(v,[["render",g]]);s.Slide=c,s.SlideDeck=p,s.SlideDeckControls=A,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=slide-deck.umd.cjs.map