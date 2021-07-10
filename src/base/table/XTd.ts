import { QTd } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { nativeEventProps } from "../../compositions/props";

const props = {
  ...nativeEventProps,
  props: Object,
  autoWidth: Boolean,
  noHover: Boolean,
};
export default QTd as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
