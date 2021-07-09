import { QToolbar } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { styleProps } from "../../mixins/props";

export const toolbarProps = {
  ...styleProps,
  inset: Boolean,
};

export default QToolbar as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof toolbarProps>>
>;
