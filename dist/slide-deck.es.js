function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script$2 = {
  name: "Slide",
  props: {
    node: Object
  },
  mounted() {
    this.node.elm.dispatchEvent(new Event("enter"));
  },
  render(createElement) {
    return createElement("div", {
      staticClass: "slide-deck-slide"
    }, [this.node]);
  }
};
let __vue2_render, __vue2_staticRenderFns;
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, __vue2_render, __vue2_staticRenderFns, false, __vue2_injectStyles$2, null, null, null);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var Slide = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "slide-deck-controls" }, _vm._l(_vm.slots, function(slide, index) {
    return _c("a", { key: index, staticClass: "slide-deck-control-icon", class: { "is-active": _vm.isActive(slide, index) }, attrs: { "href": "#" }, on: { "click": function($event) {
      $event.preventDefault();
      return _vm.onClick($event, slide);
    } } }, [_vm._t("default", function() {
      return [_vm._v("\u2022")];
    }, null, Object.assign({ slide, index }, _vm.context))], 2);
  }), 0);
};
var staticRenderFns$1 = [];
var SlideDeckControls_vue_vue_type_style_index_0_lang = "";
const __vue2_script$1 = {
  props: {
    active: {
      type: [String, Number],
      default: 0
    },
    slots: {
      type: Array,
      required: true
    }
  },
  computed: {
    context() {
      return this;
    }
  },
  methods: {
    key(vnode) {
      return vnode.data ? vnode.data.key : vnode.key;
    },
    isActive(vnode, i) {
      if (this.key(vnode) === this.active) {
        return true;
      }
      if (i === this.active) {
        return true;
      }
      return false;
    },
    onClick(event, slide) {
      this.$emit("click", event, slide);
    }
  }
};
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, render$1, staticRenderFns$1, false, __vue2_injectStyles$1, null, null, null);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var SlideDeckControls = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var render = function() {
  var _obj;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "slide-deck", class: { sliding: _vm.sliding } }, [_vm._t("top", null, { "active": _vm.currentActive }, this), _c("div", { ref: "content", staticClass: "slide-deck-content", class: (_obj = {}, _obj[_vm.direction] = true, _obj), style: { maxHeight: _vm.maxHeight } }, [_c("transition", { attrs: { "name": "slide-" + _vm.direction }, on: { "before-enter": _vm.onBeforeEnter, "enter": _vm.onEnter, "after-enter": _vm.onAfterEnter, "before-leave": _vm.onBeforeLeave, "leave": _vm.onLeave, "after-leave": _vm.onAfterLeave } }, [_c("keep-alive", [_c("slide", { key: _vm.currentActive, attrs: { "node": _vm.find(_vm.currentActive) } })], 1)], 1)], 1), _vm._t("middle", null, { "active": _vm.currentActive }, this), _vm._t("controls", function() {
    return [_vm.controls && _vm.mounted ? _c("slide-deck-controls", _vm._b({ ref: "controls", attrs: { "slots": _vm.slots(), "active": _vm.currentActive }, on: { "click": _vm.onClickControl }, scopedSlots: _vm._u([{ key: "default", fn: function(context) {
      return [_vm._t("bullet", null, null, context)];
    } }], null, true) }, "slide-deck-controls", this, false)) : _vm._e()];
  }, { "active": _vm.currentActive }, this), _vm._t("bottom", null, { "active": _vm.currentActive }, this)], 2);
};
var staticRenderFns = [];
var SlideDeck_vue_vue_type_style_index_0_lang = "";
const __vue2_script = {
  name: "SlideDeck",
  components: {
    Slide,
    SlideDeckControls
  },
  props: {
    active: {
      type: [String, Number],
      default: 0
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    controls: Boolean
  },
  data() {
    return {
      currentActive: this.active,
      direction: "forward",
      maxHeight: null,
      mounted: false,
      lastSlide: null,
      sliding: false
    };
  },
  watch: {
    currentActive(value, oldValue) {
      this.lastSlide = oldValue;
      this.direction = this.findIndex(oldValue) > this.findIndex(value) ? "backward" : "forward";
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.mounted = true;
    });
  },
  methods: {
    findIndex(key) {
      return this.slots().findIndex((vnode, i) => {
        if (this.key(vnode) === key) {
          return true;
        }
        if (i === key) {
          return true;
        }
        return false;
      });
    },
    find(key) {
      return this.slots()[this.findIndex(key)];
    },
    key(vnode) {
      return vnode.data ? vnode.data.key : vnode.key;
    },
    goto(key) {
      if (!this.sliding) {
        this.currentActive = this.findIndex(this.key(key));
      }
    },
    next() {
      if (!this.sliding) {
        this.currentActive = Math.min(this.findIndex(this.currentActive) + 1, this.slots().length - 1);
      }
    },
    prev() {
      if (!this.sliding) {
        this.currentActive = Math.max(this.findIndex(this.currentActive) - 1, 0);
      }
    },
    resize(el) {
      const height = getComputedStyle(el).height;
      this.maxHeight = height === "0x" ? this.maxHeight : height;
    },
    slots() {
      return (this.$slots.default || this.$scopedSlots.default(this)).filter((vnode) => {
        return !!vnode.tag;
      }).map((slot, key) => {
        return Object.assign(slot, {
          key
        });
      });
    },
    onClickControl(event, vnode) {
      if (!this.sliding) {
        this.goto(vnode);
      }
    },
    onBeforeLeave(el) {
      this.autoResize && this.resize(el);
      this.$emit("before-leave", this.find(this.currentActive), this.find(this.lastSlide));
    },
    onBeforeEnter(el) {
      this.sliding = true;
      this.$emit("before-enter", this.find(this.currentActive), this.find(this.lastSlide));
    },
    onEnter(el) {
      this.$nextTick(() => {
        this.autoResize && this.resize(el);
        this.$emit("enter", this.find(this.currentActive), this.find(this.lastSlide));
      });
    },
    onAfterEnter(el) {
      this.$emit("after-enter", this.find(this.currentActive), this.find(this.lastSlide));
    },
    onLeave(el) {
      this.$emit("leave", this.find(this.currentActive), this.find(this.lastSlide));
    },
    onAfterLeave(el) {
      this.sliding = false;
      this.$nextTick(() => {
        this.maxHeight = null;
        this.$emit("before-leave", this.find(this.currentActive), this.find(this.lastSlide));
      });
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var SlideDeck = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Slide, SlideDeck, SlideDeckControls };
