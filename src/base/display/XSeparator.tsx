import { QSeparator } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { darkProps, nativeEventProps } from "../../mixins/props";

const props = {
  ...darkProps,
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
