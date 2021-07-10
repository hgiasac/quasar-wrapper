import { QSpinnerCube } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useSpinnerProps } from "./types";

const props = useSpinnerProps;

export default QSpinnerCube as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;