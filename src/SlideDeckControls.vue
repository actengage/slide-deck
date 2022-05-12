<template>
    <div class="slide-deck-controls">
        <a
            v-for="(slide, index) in slots"
            :key="index"
            href="#"
            class="slide-deck-control-icon"
            :class="{'is-active': isActive(slide, index)}"
            @click.prevent="onClick($event, slide)">
            <slot v-bind="Object.assign({ slide, index }, context)">&bull;</slot>
        </a>
    </div>
</template>

<script>
export default {

    props: {

        /**
         * The active key or index that should show.
         *
         * @type {Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * An array of vnodes.
         *
         * @type {Array}
         */
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
            if(this.key(vnode) === this.active) {
                return true;
            }
            
            if(i === this.active) {
                return true;
            }

            return false;
        },

        onClick(event, slide) {
            this.$emit('click', event, slide);
        }

    }

};
</script>

<style>
.slide-deck-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
}

.slide-deck-controls.absolute {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.slide-deck-controls .slide-deck-control-icon {
    font-size: 2em;
    padding: .25em .15em;
}

.slide-deck-controls > a:hover {
    text-decoration: none;
}

.slide-deck-controls :not(:last-child) {
    margin-right: .5rem;
}

.slide-deck-controls .slide-deck-control-icon.is-active {
    color: #007bff;
}
</style>
