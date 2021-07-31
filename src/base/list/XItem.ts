import { QItem } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import {
  useDarkProps,
  useTagProps,
  useRouterLinkProps,
  useNativeEventProps,
} from "../../compositions/props";

const itemProps = {
  ...useNativeEventProps,
  ...useDarkProps,
  ...useRouterLinkProps,
  ...useTagProps,
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
