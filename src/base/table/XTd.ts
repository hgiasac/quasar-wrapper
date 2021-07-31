import { QTd } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useNativeEventProps } from "../../compositions/props";

const props = {
  ...useNativeEventProps,
  props: Object,
  autoWidth: Boolean,
  noHover: Boolean,
};
export default QTd as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
