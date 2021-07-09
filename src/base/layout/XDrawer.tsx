import * as CSS from "csstype";
import { QDrawer } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { styleProps } from "../../mixins/props";

const props = {
  ...styleProps,
  modelValue: Boolean,
  side: {
    type: String as PropType<"left" | "right">,
  },
  width: {
    type: Number,
    default: 300,
  },
  mini: Boolean,
  miniToOverlay: Boolean,
  miniWidth: {
    type: Number,
    default: 57,
  },
  breakpoint: {
    type: Number,
    default: 1023,
  },
  showIfAbove: Boolean,
  behavior: {
    type: String as PropType<"default" | "desktop" | "mobile">,
  },
  bordered: Boolean,
  elevated: Boolean,
  contentStyle: [String, Object, Array] as PropType<
    string | string[] | CSS.Properties
  >,
  contentClass: [String, Object, Array],

  overlay: Boolean,
  persistent: Boolean,
  noSwipeOpen: Boolean,
  noSwipeClose: Boolean,
  noSwipeBackdrop: Boolean,
  onBeforeHide: Function as PropType<(ev?: Event) => void>,
  onBeforeShow: Function as PropType<(ev?: Event) => void>,
  onHide: Function as PropType<(ev?: Event) => void>,
  onShow: Function as PropType<(ev?: Event) => void>,
  onClick: Function as PropType<(ev?: MouseEvent) => void>,
  onMouseover: Function as PropType<(ev?: MouseEvent) => void>,
  onMouseout: Function as PropType<(ev?: MouseEvent) => void>,
  onLayout: Function as PropType<(state: boolean) => void>,
  onMiniState: Function as PropType<(state: boolean) => void>,
};
export default QDrawer as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
