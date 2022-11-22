import type { VNode } from 'vue';
declare const _sfc_main: {
    props: {
        /**
         * The active key or index that should show.
         *
         * @type {Number}
         */
        active: {
            type: NumberConstructor;
            default: number;
        };
        /**
         * An array of vnodes.
         *
         * @type {Array}
         */
        slots: {
            type: ArrayConstructor;
            required: boolean;
        };
    };
    computed: {
        context(): any;
    };
    methods: {
        isActive(vnode: VNode, i: number): boolean;
        onClick(event: Event, slide: VNode): void;
    };
};
export default _sfc_main;
