
<script>
export default {

    name: 'Slide',

    props: {
        /**
         * The vnode object.
         *
         * @type {Object}
         */
        node: Object
    },

    /**
     * Before destroy must delete the `elm` property from the node or else the
     * elm will not get recreated again on mount, and results in a DOM element
     * that isn't attached to the parent DOM.
     */
    beforeDestroy() {
        delete this.node.elm;
    },

    /**
     * Dispatch the 'enter' event on the node element.
     */
    mounted() {
        this.node.elm.dispatchEvent(new Event('enter'));
    },

    render(createElement) {        
        return createElement('div', {
            staticClass: 'slide-deck-slide',
        }, [this.node]);
    }

};
</script>
