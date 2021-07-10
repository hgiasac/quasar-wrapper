import { QSlideItem } from "quasar";
import { BrandColor } from "types";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { useDarkProps } from "../../compositions";

// https://next.quasar.dev/vue-components/slide-item

export type XSlideItemRef = {
  reset: () => void;
};

export type XSlideItemSlots = {
  default?: () => JSX.Element;
  left?: () => JSX.Element;
  right?: () => JSX.Element;
  top?: () => JSX.Element;
  bottom?: () => JSX.Element;
};

export type XSlideItemSide = "left" | "right" | "top" | "bottom";
export type XSlideItemPositionDetails = {
  reset: () => void;
};

export type XSlideItemEventDetails = {
  side: XSlideItemSide;
  ratio: number;
  isReset: boolean;
};

export type XSlideItemActionDetails = {
  side: XSlideItemSide;
  reset: () => void;
};

const props = {
  ...useDarkProps,

  leftColor: String as PropType<BrandColor>,
  rightColor: String as PropType<BrandColor>,
  topColor: String as PropType<BrandColor>,
  bottomColor: String as PropType<BrandColor>,

  onLeft: Function as PropType<(details: XSlideItemPositionDetails) => void>,
  onRight: Function as PropType<(details: XSlideItemPositionDetails) => void>,
  onTop: Function as PropType<(details: XSlideItemPositionDetails) => void>,
  onBottom: Function as PropType<(details: XSlideItemPositionDetails) => void>,
  onSlide: Function as PropType<(details: XSlideItemEventDetails) => void>,
  onAction: Function as PropType<(details: XSlideItemActionDetails) => void>,
};

export default QSlideItem as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
