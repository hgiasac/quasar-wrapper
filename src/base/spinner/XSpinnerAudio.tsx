import { QSpinnerAudio } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useSpinnerProps } from "./types";

const props = useSpinnerProps;

export default QSpinnerAudio as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
