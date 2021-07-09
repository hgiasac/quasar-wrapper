import { QSpace } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { styleProps } from "../../mixins/props";

const props = styleProps;

export default QSpace as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
