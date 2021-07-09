import { QLinearProgress } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { darkProps, nativeEventProps, sizeProps } from "../../mixins/props";

const props = {
  ...darkProps,
  ...sizeProps,
  ...nativeEventProps,
  value: {
    type: Number,
  },
  buffer: Number,
  color: String,
  trackColor: String,
  reverse: Boolean,
  stripe: Boolean,
  indeterminate: Boolean,
  query: Boolean,
  rounded: Boolean,
  instantFeedback: Boolean,
};

export default QLinearProgress as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
