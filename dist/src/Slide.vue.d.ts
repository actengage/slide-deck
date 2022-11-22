declare const _sfc_main: {
    props: {
        /**
         * The vnode object.
         */
        node: ObjectConstructor;
    };
    /**
     * Before destroy must delete the `elm` property from the node or else the
     * elm will not get recreated again on mount, and results in a DOM element
     * that isn't attached to the parent DOM.
     */
    beforeDestroy(): void;
    /**
     * Dispatch the 'enter' event on the node element.
     */
    mounted(): void;
    render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
export default _sfc_main;
