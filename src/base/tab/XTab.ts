import { QTab } from "quasar";
import {
  DefineComponent,
  PropType,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { rippleProps } from "../../compositions/props";

export const tabProps = {
  ...rippleProps,
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: [Number, String],
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  onClick: Function as PropType<(ev?: KeyboardEvent) => void>,
};

export default QTab as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof tabProps>>
>;
