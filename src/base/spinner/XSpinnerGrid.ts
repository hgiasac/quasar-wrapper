import { QSpinnerGrid } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useSpinnerProps } from "./types";

const props = useSpinnerProps;

export default QSpinnerGrid as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
