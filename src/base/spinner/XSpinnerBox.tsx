import { QSpinnerBox } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useSpinnerProps } from "./types";

const props = useSpinnerProps;

export default QSpinnerBox as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
