import { QToggle } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { checkboxProps } from "../../mixins/form";

export const toggleProps = {
  ...checkboxProps,
  icon: String,
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,

  iconColor: String,
};

export default QToggle as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof toggleProps>>
>;
