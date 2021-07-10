import { QToolbar } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useStyleProps } from "../../compositions/props";

export const toolbarProps = {
  ...useStyleProps,
  inset: Boolean,
};

export default QToolbar as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof toolbarProps>>
>;
