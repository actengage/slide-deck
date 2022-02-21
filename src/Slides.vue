<template>
    <keep-alive>
        <slide :key="currentSlide" :node="slide(currentSlide)" />
    </keep-alive>
</template>
<script>
import Slide from './Slide.vue';
import { first, findIndex, isUndefined } from '@vue-interface/utils';

export default {

    name: 'Slides',

    components: {
        Slide
    },

    props: {

        /**
         * The active slide index or key.
         *
         * @type {String|Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },
        
        /**
         * An array of VNodes from the parent.
         *
         * @type {Array}
         */
        nodes: {
            type: Array,
            required: true
        }

    },

    data() {
        return {
            currentSlide: this.active,
            lastSlide: null
        };
    },

    watch: {

        active(value, oldValue) {
            this.lastSlide = oldValue;
            this.currentSlide = value;
        },

        currentSlide(value, oldValue) {
            this.$vnodes[oldValue] = this.$vnode.elm;
        },

        nodes(value, oldValue) {
            Object.entries(this.$vnodes).forEach(([key, elm]) => {
                const slide = this.slide(key);

                if(slide) {
                    slide.elm = elm;
                }
            });
        }

    },

    created() {
        this.$vnodes = {};
    },

    methods: {

        /**
         * Get the HTML nodes from the default slots (exluding children without tags).
         *
         * @return {Array}
         */
        slides() {
            return this.nodes
                .filter((vnode, i) => {
                    return !!vnode.tag;
                })
                .map((vnode, i) => {
                    if(!vnode.key || (!vnode.data && !vnode.data.key)) {
                        vnode.data = Object.assign({}, vnode.data, {
                            key: vnode.key = i
                        });
                    }

                    return vnode;
                });
        },

        /**
         * Get a slide by key or index.
         *
         * @return {Array}
         */
        slide(index) {
            return this.findSlideByKey(index)
                || this.findSlideByIndex(index)
                || this.findSlideByIndex(0);
        },

        /**
         * Find the first slide by matching a query selector.
         *
         * @param  {String} selector
         * @return {VNode|null}
         */
        findSlideByQuerySelector(selector) {
            return first(this.findSlidesByQuerySelector(selector));
        },

        /**
         * Find slides by matching a query selector.
         *
         * @param  {String} selector
         * @return {Array}
         */
        findSlidesByQuerySelector(selector) {
            return this.slides().filter(vnode => {
                if(vnode.elm) {
                    return !!vnode.elm.querySelector(selector);
                }
            });
        },

        /**
         * Find a slide by a given key or return null if non found.
         *
         * @param  {Number|String} key
         * @return {VNode|null}
         */
        findSlideByKey(key) {
            return first(this.slides().filter((vnode) => {
                if(vnode.key === key) {
                    return vnode;
                }
                else if(vnode.data && vnode.data.key === key) {
                    return vnode;
                }

                return null;
            }));
        },

        /**
         * Find a slide by a given index or return null if non found.
         *
         * @param  {Number|String} key
         * @return {VNode|null}
         */
        findSlideByIndex(index) {
            return this.slides()[index] || null;
        },

        /**
         * Get the slide index for a give slide object or key
         *
         * @param  {Number|String} slide
         * @return {VNode|null}
         */
        getSlideIndex(slide) {
            let key = slide;
            
            if(slide && !isUndefined(slide.data)) {
                key = slide.data.key;
            }
            else if(slide && slide.key) {
                key = slide.key;
            }
            
            return findIndex(this.slides(), (vnode, i) => {
                if(slide === vnode) {
                    return true;
                }
                else if(vnode.data && vnode.data.key === key) {
                    return true;
                }
                else if(vnode.key && vnode.key === key) {
                    return true;
                }
                else if(i === slide) {
                    return true;
                }

                return false;
            });
        }

    }

};
</script>
