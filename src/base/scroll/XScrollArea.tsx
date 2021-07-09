import { QScrollArea } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { darkProps } from "../../mixins/props";
import { ScrollPosition, ScrollAxis } from "./types";

export type XScrollAreaRef = {
  getScrollTarget: () => Element;
  getScrollPosition: () => ScrollPosition;
  setScrollPosition: (
    axis: ScrollAxis,
    offset: number,
    duration?: number
  ) => void;
  setScrollPercentage: (
    axis: ScrollAxis,
    offset: number,
    duration?: number
  ) => void;
};

export type ScrollEventPayload = {
  ref: XScrollAreaRef;
  verticalPosition: number;
  verticalPercentage: number;
  verticalSize: number;
  verticalContainerSize: number;
  horizontalPosition: number;
  horizontalPercentage: number;
  horizontalSize: number;
  horizontalContainerSize: number;
};

const props = {
  ...darkProps,
  barStyle: [Array, String, Object],
  thumbStyle: Object,
  contentStyle: [Array, String, Object],
  contentActiveStyle: [Array, String, Object],

  delay: {
    type: [String, Number],
    default: 1000,
  },

  visible: {
    type: Boolean,
    default: null,
  },

  horizontal: Boolean,
  onScroll: Function as PropType<(ev: ScrollEventPayload) => void>,
};
export default QScrollArea as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
