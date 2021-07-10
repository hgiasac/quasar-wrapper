import { QTabs } from "quasar";
import {
  DefineComponent,
  PropType,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

const props = {
  value: [Number, String],

  align: {
    type: String as PropType<"left" | "center" | "right" | "justify">,
    default: "center",
    validator: (v: string) =>
      ["left", "center", "right", "justify"].includes(v),
  },
  breakpoint: {
    type: [String, Number],
    default: 600,
  },
  vertical: Boolean,
  shrink: Boolean,
  stretch: Boolean,
  activeColor: String,
  activeBgColor: String,
  indicatorColor: String,
  leftIcon: String,
  rightIcon: String,
  outsideArrows: Boolean,
  mobileArrows: Boolean,
  switchIndicator: Boolean,
  narrowIndicator: Boolean,
  inlineLabel: Boolean,
  noCaps: Boolean,
  dense: Boolean,
  contentClass: String,
  onInput: Function as PropType<(name: string) => void>,
};

export default QTabs as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
