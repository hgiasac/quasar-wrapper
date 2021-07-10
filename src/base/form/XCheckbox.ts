import { QCheckbox } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { checkboxProps } from "../../compositions/form";

export default QCheckbox as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof checkboxProps>>
>;
