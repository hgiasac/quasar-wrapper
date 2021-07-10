import { QSlider } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { sliderProps } from "./XSlider";

export type XRangeValue = { min: number; max: number };

export const rangeProps = {
  ...sliderProps,
  modelValue: Object as PropType<{ min: number; max: number }>,
  name: String,

  dragRange: Boolean,
  dragOnlyRange: Boolean,

  leftLabelColor: String,
  leftLabelTextColor: String,
  rightLabelColor: String,
  rightLabelTextColor: String,

  leftLabelValue: [String, Number],
  rightLabelValue: [String, Number],
  onInput: Function as PropType<(value?: XRangeValue) => void>,
  onChange: Function as PropType<(value?: XRangeValue) => void>,
};

export default QSlider as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof rangeProps>>
>;
