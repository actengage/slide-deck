<template>
    <div class="slide-deck" :class="{ sliding }">
        <slot name="top" v-bind="this" :active="currentActive" />
        <div ref="content" class="slide-deck-content" :class="{ [direction]: true }" :style="{ maxHeight }">
            <transition
                :name="`slide-${direction}`"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @after-enter="onAfterEnter"
                @before-leave="onBeforeLeave"
                @leave="onLeave"
                @after-leave="onAfterLeave">
                <keep-alive>
                    <slide ref="slide" :key="currentActive" :node="find(currentActive)" />
                </keep-alive>
            </transition>
        </div>
        <slot name="middle" v-bind="this" :active="currentActive" />
        <slot name="controls" v-bind="this" :active="currentActive">
            <slide-deck-controls
                v-if="controls && mounted"
                ref="controls"
                v-bind="this"
                :slots="slots()"
                :active="currentActive"
                @click="onClickControl">
                <template #default="context">
                    <slot name="bullet" v-bind="context" />
                </template>
            </slide-deck-controls>
        </slot>
        <slot name="bottom" v-bind="this" :active="currentActive" />
    </div>
</template>

<script>
import Slide from './Slide.vue';
import SlideDeckControls from './SlideDeckControls.vue';

export default {

    name: 'SlideDeck',

    components: {
        Slide,
        SlideDeckControls
    },

    props: {

        /**
         * Additional attributes to be passed to the slots.
         *
         * @type Boolean
         */
        attrs: Object,

        /**
         * The slide key or index that should show.
         *
         * @type {String|Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * Automatically resize the height of the slide so it animates from one
         * slide to the next.
         *
         * @type {String|Number}
         */
        autoResize: {
            type: Boolean,
            default: true
        },

        /**
         * Show the slide-deck controls to change the slide.
         *
         * @type Boolean
         */
        controls: Boolean,

        /**
         * Additional props to be passed to the slots.
         *
         * @type Boolean
         */
        props: Object,

    },

    data() {
        return {
            currentActive: this.active,
            direction: 'forward',
            maxHeight: null,
            mounted: false,
            lastSlide: null,
            sliding: false,
        };
    },
    
    watch: {

        currentActive(value, oldValue) {
            this.lastSlide = oldValue;
            this.direction = (
                this.findIndex(oldValue) > this.findIndex(value)
            ) ? 'backward' : 'forward';
        }

    },
    
    mounted() {
        this.$nextTick(() => {
            this.mounted = true;
            this.$emit('enter', this.slot());
        });
    },

    methods: {

        findIndex(key) {
            return this.slots().findIndex((vnode, i) => {
                if(this.key(vnode) === key) {
                    return true;
                }
                
                if(i === key) {
                    return true;
                }

                return false;
            });
        },

        find(key) {
            return this.slots()[this.findIndex(key)];
        },

        key(vnode) {
            if(vnode.data && typeof vnode.data.key !== 'undefined') {
                return vnode.data.key;
            }

            if(typeof vnode.key !== 'undefined') {
                return vnode.key;
            }

            return vnode;
        },

        goto(key) {
            if(!this.sliding) {
                this.currentActive = Math.max(0, this.findIndex(this.key(key)));
            }
        },

        next() {
            if(!this.sliding) {
                this.currentActive = Math.min(
                    this.findIndex(this.currentActive) + 1, this.slots().length - 1
                );
            }
        },

        prev() {
            if(!this.sliding) {
                this.currentActive = Math.max(
                    this.findIndex(this.currentActive) - 1, 0
                );
            }
        },

        resize(el) {
            const height = getComputedStyle(el).height;

            this.maxHeight = height === '0x'
                ? this.maxHeight
                : height;
        },
        
        slot() {
            return this.find(this.currentActive);
        },

        slots() {
            return (this.$slots.default || this.$scopedSlots.default(this))
                .filter(vnode => {
                    return !!vnode.tag;
                })
                .map((slot, key) => {
                    if(slot.componentOptions) {
                        slot.componentOptions.propsData = Object.assign(
                            {}, slot.componentOptions.propsData, this.props
                        );
                    }
                    
                    if(slot.data) {
                        slot.data.attrs = Object.assign(
                            {}, slot.data.attrs, this.attrs
                        );
                    }
            
                    return Object.assign(slot, {
                        key
                    });
                });
        },

        onClickControl(event, vnode) {
            if(!this.sliding) {
                this.goto(vnode);
            }
        },

        onBeforeLeave(el) {
            this.autoResize && this.resize(el);
            this.$emit(
                'before-leave',
                this.slot(),
                this.find(this.lastSlide)
            );
        },

        onBeforeEnter(el) {
            this.sliding = true;
            this.$emit(
                'before-enter',
                this.slot(),
                this.find(this.lastSlide)
            );
        },

        onEnter(el) {
            this.$nextTick(() => {
                this.autoResize && this.resize(el);
                this.$emit(
                    'enter',
                    this.slot(),
                    this.find(this.lastSlide)
                );
            });
        },

        onAfterEnter(el) {
            this.$emit(
                'after-enter',
                this.slot(),
                this.find(this.lastSlide)
            );
        },

        onLeave(el) {
            this.$emit(
                'leave',
                this.slot(),
                this.find(this.lastSlide)
            );
        },

        onAfterLeave(el) {
            this.sliding = false;

            this.$nextTick(() => {
                this.maxHeight = null;
                this.$emit(
                    'before-leave',
                    this.slot(),
                    this.find(this.lastSlide)
                );
            });
        }

    }

};
</script>

<style>
.slide-deck {
    height: auto;
    position: relative;
}

.slide-deck.sliding {
    overflow: hidden;
}

.slide-deck .slide-deck-content {
    display: flex;
    flex-wrap: nowrap;
    transition-property: max-height;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
    max-height: auto;
}

.slide-deck .slide-deck-content.forward {
    flex-direction: row;
}

.slide-deck .slide-deck-content.backward {
    flex-direction: row-reverse;
}

.slide-deck .slide-deck-slide {
    width: 100%;
    flex-shrink: 0;
    align-self: flex-start;
}

.slide-forward-leave-active,
.slide-forward-enter-active,
.slide-backward-leave-active,
.slide-backward-enter-active {
    transition: all 250ms ease-in-out;
}

.slide-deck .slide-forward-enter-to,
.slide-deck .slide-forward-leave-to { 
    transform: translateX(-100%);
}

.slide-deck .slide-backward-enter-to,
.slide-deck .slide-backward-leave-to { 
    transform: translateX(100%);
}
</style>
