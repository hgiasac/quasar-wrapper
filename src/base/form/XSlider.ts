import { QSlider } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { formProps } from "../../compositions/form";
import { useDarkProps } from "../../compositions/props";

export const baseSliderProps = {
  ...useDarkProps,
  ...formProps,
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  step: {
    type: Number,
  },
  color: String,

  labelColor: String,
  labelTextColor: String,
  dense: Boolean,

  label: Boolean,
  labelAlways: Boolean,
  markers: Boolean,
  snap: Boolean,

  vertical: Boolean,
  reverse: Boolean,

  disable: Boolean,
  readonly: Boolean,
  tabindex: [String, Number],
  thumbPath: {
    type: String,
  },
  onPan: Function as PropType<(state: "start" | "end") => void>,
};

export const sliderProps = {
  ...baseSliderProps,
  modelValue: Number,
  labelValue: [String, Number],
};

export default QSlider as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof sliderProps>>
>;
