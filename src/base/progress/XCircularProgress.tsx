import { QCircularProgress } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { nativeEventProps, sizeProps } from "../../mixins/props";

const props = {
  ...sizeProps,
  ...nativeEventProps,
  value: {
    type: Number,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  color: String,
  centerColor: String,
  trackColor: String,
  fontSize: String,
  thickness: {
    type: Number,
  },
  angle: {
    type: Number,
  },
  indeterminate: Boolean,
  showValue: Boolean,
  reverse: Boolean,
  instantFeedback: Boolean,
};

export default QCircularProgress as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
