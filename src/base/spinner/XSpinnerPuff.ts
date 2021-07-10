import { QSpinnerPuff } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useSpinnerProps } from "./types";

const props = useSpinnerProps;

export default QSpinnerPuff as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
