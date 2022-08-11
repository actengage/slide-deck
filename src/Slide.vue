
<script>
import { h } from 'vue';

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
        delete this.node.el;
    },

    /**
     * Dispatch the 'enter' event on the node element.
     */
    mounted() {
        if(this.node) {
            this.node.el.dispatchEvent(new Event('enter'));
        }
    },

    render() {        
        return h('div', {
            class: 'slide-deck-slide',
        }, [this.node]);
    }

};
</script>
