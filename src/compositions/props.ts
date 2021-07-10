import * as CSS from "csstype";
import { PropType } from "vue";
import { RouteLocationRaw } from "vue-router";

import { BrandColor, TransitionType } from "../types";

export type ClassProp = string | string[] | Record<string, boolean>;
export type StyleProp = string | string[] | CSS.Properties;

type AlignProp =
  | "left"
  | "right"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

export const useAlignProps = {
  align: {
    type: String as PropType<AlignProp>,
  },
};

export type AnchorPosition =
  | "top left"
  | "top middle"
  | "top right"
  | "top start"
  | "top end"
  | "center left"
  | "center middle"
  | "center right"
  | "center start"
  | "center end"
  | "bottom left"
  | "bottom middle"
  | "bottom right"
  | "bottom start"
  | "bottom end";

export const useAnchorProps = {
  target: {
    default: true,
  },
  noParentEvent: Boolean,
  contextMenu: Boolean,
};

export const useTagProps = {
  tag: {
    type: String,
    default: "div",
  },
};

export const useSizeProps = {
  size: String as PropType<"xs" | "sm" | "md" | "lg" | "xl" | string>,
};

export type RippleOptions = {
  early: boolean;
  center: boolean;
  color: BrandColor | string;
  keyCodes: number[];
};
export const rippleProps = {
  ripple: {
    type: [Boolean, Object] as PropType<boolean | RippleOptions>,
    default: true,
  },
};

export const useRouterLinkProps = {
  to: [String, Object] as PropType<RouteLocationRaw>,
  exact: Boolean,
  append: Boolean,
  replace: Boolean,
  activeClass: String,
  exactActiveClass: String,
  disable: Boolean,
};

export const useDarkProps = {
  dark: {
    type: Boolean,
    default: null,
  },
};

export const useMaskProps = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean,
};

export const portalProps = {
  contentClass: [Array, String, Object],
  contentStyle: [Array, String, Object],
};

export const useTransitionProps = {
  transitionShow: {
    type: String as PropType<TransitionType>,
    default: "scale",
  },

  transitionHide: {
    type: String as PropType<TransitionType>,
    default: "scale",
  },
};

export const nativeEventProps = {
  id: String,
  draggable: Boolean,
  onClick: Function as PropType<(ev?: MouseEvent) => void>,
  onDblclick: Function as PropType<(ev?: MouseEvent) => void>,
  onMouseover: Function as PropType<(ev?: MouseEvent) => void>,
  onMouseout: Function as PropType<(ev?: MouseEvent) => void>,
  onMouseup: Function as PropType<(ev?: MouseEvent) => void>,
  onMousedown: Function as PropType<(ev?: MouseEvent) => void>,
  onMouseenter: Function as PropType<(ev?: MouseEvent) => void>,
  onMouseleave: Function as PropType<(ev?: MouseEvent) => void>,
  onAnimationstart: Function as PropType<(ev?: AnimationEvent) => void>,
  onAnimationiteration: Function as PropType<(ev?: AnimationEvent) => void>,
  onAnimationend: Function as PropType<(ev?: AnimationEvent) => void>,
  onBlur: Function as PropType<(ev?: FocusEvent) => void>,
  onFocus: Function as PropType<(ev?: FocusEvent) => void>,
  onFocusin: Function as PropType<(ev?: FocusEvent) => void>,
  onFocusout: Function as PropType<(ev?: FocusEvent) => void>,
  onDrag: Function as PropType<(ev?: DragEvent) => void>,
  onDragend: Function as PropType<(ev?: DragEvent) => void>,
  onDragenter: Function as PropType<(ev?: DragEvent) => void>,
  onDragleave: Function as PropType<(ev?: DragEvent) => void>,
  onDragover: Function as PropType<(ev?: DragEvent) => void>,
  onDragstart: Function as PropType<(ev?: DragEvent) => void>,
  onDrop: Function as PropType<(ev?: DragEvent) => void>,
  onKeydown: Function as PropType<(ev?: KeyboardEvent) => void>,
  onKeypress: Function as PropType<(ev?: KeyboardEvent) => void>,
  onKeyup: Function as PropType<(ev?: KeyboardEvent) => void>,
};

export type VirtualScrollEventPayload = {
  index: number;
  from: number;
  to: number;
  direction: "decrease" | "increase";
  ref: Element;
};

const commonVirtualScrollProps = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: null,
  },

  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1,
  },

  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1,
  },

  virtualScrollItemSize: {
    type: [Number, String],
    default: 24,
  },

  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0,
  },

  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0,
  },
  tableColspan: [Number, String],
  onVirtualScroll: Function as PropType<
    (payload: VirtualScrollEventPayload) => void
  >,
};

export const useVirtualScrollProps = {
  virtualScrollHorizontal: Boolean,
  ...commonVirtualScrollProps,
};

export const useFullScreenProps = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean,
  onFullscreen: Function as PropType<(isFullScreen: boolean) => void>,
};

export const modelToggleProps = {
  value: {
    type: Boolean,
  },
  onInput: Function as PropType<(value: boolean) => void>,
  onBeforeHide: Function as PropType<(ev?: Event) => void>,
  onBeforeShow: Function as PropType<(ev?: Event) => void>,
  onHide: Function as PropType<(ev?: Event) => void>,
  onShow: Function as PropType<(ev?: Event) => void>,
};

export const useRatioProps = {
  ratio: [String, Number],
};

export const useStyleProps = {
  class: [String, Array, Object] as PropType<ClassProp>,
  style: Object as PropType<StyleProp>,
};

export type XSkeletonAnimation =
  | "wave"
  | "pulse"
  | "pulse-x"
  | "pulse-y"
  | "fade"
  | "blink"
  | "none";

export const usePreloadingProps = {
  preloading: Boolean,
  preloadingAnimation: {
    type: String as PropType<XSkeletonAnimation>,
  },
};

export const useLoadingProps = {
  loading: Boolean,
  loadingAnimation: {
    type: String as PropType<XSkeletonAnimation>,
  },
};
