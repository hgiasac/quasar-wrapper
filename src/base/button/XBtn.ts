import { QBtn } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { buttonProps } from "../../compositions/button";

export const btnProps = {
  ...buttonProps,
  percentage: Number,
  darkPercentage: Boolean,
};

export type XBtnProps = ExtractPropTypes<typeof btnProps>;

export default QBtn as DefineComponent<ComponentObjectPropsOptions<XBtnProps>>;
