import { h as A, openBlock as o, createElementBlock as u, createElementVNode as v, normalizeClass as h, withModifiers as x, renderSlot as r, normalizeProps as m, guardReactiveProps as g, createTextVNode as S, resolveComponent as a, normalizeStyle as y, createVNode as C, Transition as E, withCtx as f, createBlock as d, KeepAlive as b, createCommentVNode as B } from "vue";
const L = {
  props: {
    node: Object
  },
  beforeDestroy() {
    delete this.node.el;
  },
  mounted() {
    this.node && this.node.el && this.node.el.dispatchEvent(new Event("enter"));
  },
  render() {
    return A("div", {
      class: "slide-deck-slide"
    }, [this.node]);
  }
}, z = {
  props: {
    active: {
      type: Number,
      default: 0
    },
    slots: {
      type: Array,
      required: !0
    }
  },
  computed: {
    context() {
      return this;
    }
  },
  methods: {
    isActive(e, t) {
      return e.key === this.active || t === this.active;
    },
    onClick(e, t) {
      this.$emit("click", e, t);
    }
  }
};
const _ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, i] of t)
    n[l] = i;
  return n;
}, w = { class: "slide-deck-controls" };
function I(e, t, n, l, i, s) {
  return o(), u("div", w, [
    v("a", {
      href: "#",
      class: h(["slide-deck-control-icon", { "is-active": s.isActive(e.slide, n.active) }]),
      onClick: t[0] || (t[0] = x((c) => s.onClick(c, e.slide), ["prevent"]))
    }, [
      r(e.$slots, "default", m(g(Object.assign({ slide: e.slide, active: n.active }, s.context))), () => [
        S("\u2022")
      ])
    ], 2)
  ]);
}
const O = /* @__PURE__ */ _(z, [["render", I]]), j = {
  components: {
    Slide: L,
    SlideDeckControls: O
  },
  props: {
    attrs: Object,
    active: {
      type: Number,
      default: 0
    },
    autoResize: {
      type: Boolean,
      default: !0
    },
    controls: Boolean,
    props: Object
  },
  data() {
    return {
      currentActive: this.active,
      direction: "forward",
      maxHeight: void 0,
      mounted: !1,
      lastSlide: null,
      sliding: !1
    };
  },
  watch: {
    currentActive(e, t) {
      this.lastSlide = t, this.direction = this.findIndex(t) > this.findIndex(e) ? "backward" : "forward";
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.mounted = !0, this.$emit("enter", this.slot());
    });
  },
  methods: {
    findIndex(e) {
      return this.slots().findIndex((t, n) => t.key === e || n === e);
    },
    find(e) {
      return this.slots()[this.findIndex(e)];
    },
    first() {
      this.goto(0);
    },
    last() {
      this.goto(this.slots().length - 1);
    },
    goto(e) {
      this.sliding || (this.currentActive = Math.max(0, e));
    },
    next() {
      this.sliding || (this.currentActive = Math.min(
        this.findIndex(this.currentActive) + 1,
        this.slots().length - 1
      ));
    },
    prev() {
      this.sliding || (this.currentActive = Math.max(
        this.findIndex(this.currentActive) - 1,
        0
      ));
    },
    resize(e) {
      const t = getComputedStyle(e).height;
      this.maxHeight = t === "0x" ? this.maxHeight : t;
    },
    slot() {
      return this.find(this.currentActive);
    },
    slots() {
      return (this.$slots.default(this) || this.$scopedSlots.default(this)).map((e, t) => (e.props = Object.assign(
        {},
        e.props,
        this.props,
        this.attrs
      ), Object.assign(e, {
        key: t
      })));
    },
    onClickControl(e, t) {
      this.sliding || this.goto(t);
    },
    onBeforeLeave(e) {
      this.autoResize && this.resize(e), this.$emit(
        "before-leave",
        this.slot(),
        this.find(this.lastSlide)
      );
    },
    onBeforeEnter(e) {
      this.sliding = !0, this.$emit(
        "before-enter",
        this.slot(),
        this.find(this.lastSlide)
      );
    },
    onEnter(e) {
      this.$nextTick(() => {
        this.autoResize && this.resize(e), this.$emit(
          "enter",
          this.slot(),
          this.find(this.lastSlide)
        );
      });
    },
    onAfterEnter(e) {
      this.$emit(
        "after-enter",
        this.slot(),
        this.find(this.lastSlide)
      );
    },
    onLeave(e) {
      this.$emit(
        "leave",
        this.slot(),
        this.find(this.lastSlide)
      );
    },
    onAfterLeave(e) {
      this.sliding = !1, this.$nextTick(() => {
        this.maxHeight = null, this.$emit(
          "after-leave",
          this.slot(),
          this.find(this.lastSlide)
        );
      });
    }
  }
};
function H(e, t, n, l, i, s) {
  const c = a("slide"), k = a("slide-deck-controls");
  return o(), u("div", {
    class: h(["slide-deck", { sliding: i.sliding }])
  }, [
    r(e.$slots, "top", { active: i.currentActive }),
    v("div", {
      ref: "content",
      class: h(["slide-deck-content", { [i.direction]: !0 }]),
      style: y({ maxHeight: i.maxHeight })
    }, [
      C(E, {
        name: `slide-${i.direction}`,
        onBeforeEnter: s.onBeforeEnter,
        onEnter: s.onEnter,
        onAfterEnter: s.onAfterEnter,
        onBeforeLeave: s.onBeforeLeave,
        onLeave: s.onLeave,
        onAfterLeave: s.onAfterLeave
      }, {
        default: f(() => [
          (o(), d(b, null, [
            (o(), d(c, {
              ref: "slide",
              key: i.currentActive,
              node: s.find(i.currentActive)
            }, null, 8, ["node"]))
          ], 1024))
        ]),
        _: 1
      }, 8, ["name", "onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])
    ], 6),
    r(e.$slots, "middle", { active: i.currentActive }),
    r(e.$slots, "controls", { active: i.currentActive }, () => [
      n.controls && i.mounted ? (o(), d(k, {
        key: 0,
        ref: "controls",
        slots: s.slots(),
        active: i.currentActive,
        onClick: s.onClickControl
      }, {
        default: f((p) => [
          r(e.$slots, "bullet", m(g(p)))
        ]),
        _: 3
      }, 8, ["slots", "active", "onClick"])) : B("", !0)
    ]),
    r(e.$slots, "bottom", { active: i.currentActive })
  ], 2);
}
const D = /* @__PURE__ */ _(j, [["render", H]]);
export {
  L as Slide,
  D as SlideDeck,
  O as SlideDeckControls
};
