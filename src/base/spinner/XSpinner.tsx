import { QSpinner } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useSpinnerProps } from "./types";

const props = {
  ...useSpinnerProps,
  thickness: {
    type: Number,
    default: 5,
  },
};

export default QSpinner as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
