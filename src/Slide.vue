
<script>
export default {

    name: 'Slide',

    props: {

        /**
         * The active slide index or key.
         *
         * @type {String|Number}
         */
        node: {
            type: Object
        }

    },

    render(h) {
        return this.node;
    }

};
</script>
