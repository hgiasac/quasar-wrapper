import { QToolbarTitle } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { useStyleProps } from "../../compositions/props";

const props = {
  ...useStyleProps,
  shrink: Boolean,
};

export default QToolbarTitle as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
