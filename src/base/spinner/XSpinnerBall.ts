import { QSpinnerBall } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useSpinnerProps } from "./types";

const props = useSpinnerProps;

export default QSpinnerBall as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
