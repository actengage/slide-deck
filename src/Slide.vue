<style lang="ts">
import { h } from 'vue';

export default {

    props: {
        /**
         * The vnode object.
         */
        node: {
            type: Object,
            required: true
        }
    },

    /**
     * Before destroy must delete the `elm` property from the node or else the
     * elm will not get recreated again on mount, and results in a DOM element
     * that isn't attached to the parent DOM.
     */
    beforeUnmount(): void {
        delete this.node.el;
    },

    /**
     * Dispatch the 'enter' event on the node element.
     */
    mounted(): void {
        if(this.node && this.node.el) {
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