<template>
    <keep-alive>
        <slide :key="currentSlide" :node="slide(currentSlide)" />
    </keep-alive>
</template>
<script>
import Slide from './Slide';
import { first, findIndex, isUndefined } from '@vue-interface/utils';

export default {

    name: 'Slides',

    components: {
        Slide
    },

    props: {

        /**
         * Keep the slides alive after transitions. This prevents the
         * re-rendering of the slide components.
         *
         * @type {Boolean}
         */
        keepAlive: {
            type: Boolean,
            default: true
        },

        /**
         * The active slide index or key.
         *
         * @type {String|Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        nodes: {
            type: Array
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
        }

    },

    created() {
        this.elms = {};
    },

    mounted() {
        this.elms[this.currentSlide] = this.slide(this.currentSlide).elm;
    },

    updated() {
        this.elms[this.currentSlide] = this.slide(this.currentSlide).elm;
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
         * Get a slide by index.
         *
         * @return {Array}
         */
        slide(index) {
            return this.findSlideByKey(index) || this.findSlideByIndex(index) || this.findSlideByIndex(0);
        },

        /**
         * Find a slide by a given key or return null if non found.
         *
         * @param  {Number|String} key
         * @return {VNode|null}
         */
        findSlideByKey(key) {
            return first(this.slides().filter((vnode, i) => {
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
