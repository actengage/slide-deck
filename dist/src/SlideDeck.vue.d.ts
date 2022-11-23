import { VNode } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    /**
     * Additional attributes to be passed to the slots.
     */
    attrs: {
        type: ObjectConstructor;
        default: () => {};
    };
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
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}, unknown, {
    currentActive: number;
    direction: string;
    maxHeight: undefined;
    mounted: boolean;
    lastSlide: null;
    sliding: boolean;
}, {}, {
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
    onBeforeEnter(): void;
    onEnter(el: HTMLElement): void;
    onAfterEnter(): void;
    onLeave(): void;
    onAfterLeave(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("before-enter" | "enter" | "after-enter" | "before-leave" | "leave" | "after-leave")[], "before-enter" | "enter" | "after-enter" | "before-leave" | "leave" | "after-leave", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Additional attributes to be passed to the slots.
     */
    attrs: {
        type: ObjectConstructor;
        default: () => {};
    };
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
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    "onBefore-enter"?: ((...args: any[]) => any) | undefined;
    onEnter?: ((...args: any[]) => any) | undefined;
    "onAfter-enter"?: ((...args: any[]) => any) | undefined;
    "onBefore-leave"?: ((...args: any[]) => any) | undefined;
    onLeave?: ((...args: any[]) => any) | undefined;
    "onAfter-leave"?: ((...args: any[]) => any) | undefined;
}, {
    props: Record<string, any>;
    attrs: Record<string, any>;
    active: number;
    autoResize: boolean;
    controls: boolean;
}>;
export default _sfc_main;
