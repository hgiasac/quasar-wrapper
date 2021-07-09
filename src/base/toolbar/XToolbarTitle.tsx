import { QToolbarTitle } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { styleProps } from "../../mixins/props";

const props = {
  ...styleProps,
  shrink: Boolean,
};

export default QToolbarTitle as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
