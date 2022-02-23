
<script>
export default {

    name: 'Slide',

    props: {

        /**
         * The active slide index or key.
         *
         * @type {Object}
         */
        node: Object
    },

    mounted() {
        this.node.elm.dispatchEvent(new Event('enter'));
    },

    render(createElement) {
        return createElement('div', {
            staticClass: 'slide-deck-slide'
        }, [this.node]);
    }

};
</script>
