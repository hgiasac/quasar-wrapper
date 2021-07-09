import { QBtn } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { buttonProps } from "../../mixins/button";

export const btnProps = {
  ...buttonProps,
  percentage: Number,
  darkPercentage: Boolean,
};

export type XButtonProps = ExtractPropTypes<typeof btnProps>;

export default QBtn as DefineComponent<
  ComponentObjectPropsOptions<XButtonProps>
>;
