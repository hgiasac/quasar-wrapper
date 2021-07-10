import { QCircularProgress } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { nativeEventProps, useSizeProps } from "../../compositions/props";

export const useCircularCommonProps = {
  ...useSizeProps,
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  color: String,
  centerColor: String,
  trackColor: String,
  fontSize: String,
  // ratio
  thickness: {
    type: Number,
    default: 0.2,
  },
  angle: {
    type: Number,
    default: 0,
  },
  showValue: Boolean,
  reverse: Boolean,
  instantFeedback: Boolean,
};

const props = {
  ...nativeEventProps,
  ...useCircularCommonProps,
  value: {
    type: Number,
  },
  indeterminate: Boolean,
};

export default QCircularProgress as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
