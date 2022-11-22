import { h as v, openBlock as r, createElementBlock as a, createElementVNode as f, normalizeClass as c, withModifiers as m, renderSlot as o, normalizeProps as p, guardReactiveProps as g, createTextVNode as _, resolveComponent as A, normalizeStyle as k, createVNode as x, Transition as y, withCtx as S, createBlock as h, KeepAlive as E } from "vue";
const b = {
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  beforeUnmount() {
    delete this.node.el;
  },
  mounted() {
    this.node && this.node.el && this.node.el.dispatchEvent(new Event("enter"));
  },
  render() {
    return v("div", {
      class: "slide-deck-slide"
    }, [this.node]);
  }
}, B = {
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
const u = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, i] of t)
    n[l] = i;
  return n;
}, L = { class: "slide-deck-controls" };
function C(e, t, n, l, i, s) {
  return r(), a("div", L, [
    f("a", {
      href: "#",
      class: c(["slide-deck-control-icon", { "is-active": s.isActive(e.slide, n.active) }]),
      onClick: t[0] || (t[0] = m((d) => s.onClick(d, e.slide), ["prevent"]))
    }, [
      o(e.$slots, "default", p(g(Object.assign({ slide: e.slide, active: n.active }, s.context))), () => [
        _("\u2022")
      ])
    ], 2)
  ]);
}
const z = /* @__PURE__ */ u(B, [["render", C]]), $ = {
  components: {
    Slide: b,
    SlideDeckControls: z
  },
  props: {
    attrs: {
      type: Object,
      default: () => ({})
    },
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
      return (this.$slots.default(this) || this.$slots.default(this)).map((e, t) => (e.props = Object.assign(
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
function w(e, t, n, l, i, s) {
  const d = A("slide");
  return r(), a("div", {
    class: c(["slide-deck", { sliding: i.sliding }])
  }, [
    o(e.$slots, "top", { active: i.currentActive }),
    f("div", {
      ref: "content",
      class: c(["slide-deck-content", { [i.direction]: !0 }]),
      style: k({ maxHeight: i.maxHeight })
    }, [
      x(y, {
        name: `slide-${i.direction}`,
        onBeforeEnter: s.onBeforeEnter,
        onEnter: s.onEnter,
        onAfterEnter: s.onAfterEnter,
        onBeforeLeave: s.onBeforeLeave,
        onLeave: s.onLeave,
        onAfterLeave: s.onAfterLeave
      }, {
        default: S(() => [
          (r(), h(E, null, [
            (r(), h(d, {
              ref: "slide",
              key: i.currentActive,
              node: s.find(i.currentActive)
            }, null, 8, ["node"]))
          ], 1024))
        ]),
        _: 1
      }, 8, ["name", "onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])
    ], 6),
    o(e.$slots, "middle", { active: i.currentActive }),
    o(e.$slots, "bottom", { active: i.currentActive })
  ], 2);
}
const O = /* @__PURE__ */ u($, [["render", w]]);
export {
  b as Slide,
  O as SlideDeck,
  z as SlideDeckControls
};
