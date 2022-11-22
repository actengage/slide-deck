import type { VNode } from 'vue';
declare const _sfc_main: {
    components: {
        Slide: {
            props: {
                node: ObjectConstructor;
            };
            beforeDestroy(): void;
            mounted(): void;
            render(): VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
        };
        SlideDeckControls: {
            props: {
                active: {
                    type: NumberConstructor;
                    default: number;
                };
                slots: {
                    type: ArrayConstructor;
                    required: boolean;
                };
            };
            computed: {
                context(): any;
            };
            methods: {
                isActive(vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>, i: number): boolean;
                onClick(event: Event, slide: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>): void;
            };
        };
    };
    props: {
        /**
         * Additional attributes to be passed to the slots.
         */
        attrs: ObjectConstructor;
        /**
         * The slide key or index that should show.
         */
        active: {
            type: NumberConstructor;
            default: number;
        };
        /**
         * Automatically resize the height of the slide so it animates from one
         * slide to the next.
         */
        autoResize: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Show the slide-deck controls to change the slide.
         */
        controls: BooleanConstructor;
        /**
         * Additional props to be passed to the slots.
         */
        props: ObjectConstructor;
    };
    data(): {
        currentActive: any;
        direction: string;
        maxHeight: undefined;
        mounted: boolean;
        lastSlide: null;
        sliding: boolean;
    };
    watch: {
        currentActive(value: number, oldValue: number): void;
    };
    mounted(): void;
    methods: {
        findIndex(key: string | number): number;
        find(key: string | number): VNode | undefined;
        first(): void;
        last(): void;
        goto(key: number): void;
        next(): void;
        prev(): void;
        resize(el: HTMLElement): void;
        slot(): VNode;
        slots(): VNode[];
        onClickControl(e: Event, vnode: VNode): void;
        onBeforeLeave(el: HTMLElement): void;
        onBeforeEnter(el: HTMLElement): void;
        onEnter(el: HTMLElement): void;
        onAfterEnter(el: HTMLElement): void;
        onLeave(el: HTMLElement): void;
        onAfterLeave(el: HTMLElement): void;
    };
};
export default _sfc_main;
