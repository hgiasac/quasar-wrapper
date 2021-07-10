import { QKnob } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { formProps } from "../../compositions";
import { useCircularCommonProps } from "./XCircularProgress";

const props = {
  ...formProps,
  ...useCircularCommonProps,
  modelValue: {
    type: Number,
  },
  step: {
    type: Number,
  },
  tabindex: {
    type: [Number, String],
  },
  disable: Boolean,
  readonly: Boolean,
  onChange: Function as PropType<(value: number) => void>,
  onDragValue: Function as PropType<(value: number) => void>,
};

export default QKnob as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
