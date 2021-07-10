import { QSpace } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useStyleProps } from "../../compositions/props";

const props = useStyleProps;

export default QSpace as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
