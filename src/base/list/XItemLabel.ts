import { QItemLabel } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useNativeEventProps } from "../../compositions/props";

const itemLabelProps = {
  ...useNativeEventProps,
  overline: Boolean,
  caption: Boolean,
  header: Boolean,
  lines: [Number, String],
};

export default QItemLabel as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof itemLabelProps>>
>;
