import { QSeparator } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { useDarkProps, nativeEventProps } from "../../compositions/props";

const props = {
  ...useDarkProps,
  ...nativeEventProps,
  spaced: [Boolean, String],
  inset: [Boolean, String],
  vertical: Boolean,
  color: String,
  size: String,
};

export default QSeparator as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
