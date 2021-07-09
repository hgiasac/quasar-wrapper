import { QItem } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import {
  darkProps,
  tagProps,
  routerLinkProps,
  nativeEventProps,
} from "../../mixins/props";

const itemProps = {
  ...nativeEventProps,
  ...darkProps,
  ...routerLinkProps,
  ...tagProps,
  active: Boolean,

  clickable: Boolean,
  dense: Boolean,
  insetLevel: Number,

  tabindex: [String, Number],

  focused: Boolean,
  manualFocus: Boolean,
};

export default QItem as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof itemProps>>
>;
