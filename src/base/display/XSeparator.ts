import { QSeparator } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { useDarkProps, useNativeEventProps } from "../../compositions/props";

const props = {
  ...useDarkProps,
  ...useNativeEventProps,
  spaced: [Boolean, String],
  inset: [Boolean, String],
  vertical: Boolean,
  color: String,
  size: String,
};

export default QSeparator as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
