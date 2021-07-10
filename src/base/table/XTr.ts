import { QTr } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { nativeEventProps } from "../../compositions/props";

const props = {
  ...nativeEventProps,
  props: Object,
  noHover: Boolean,
};

export default QTr as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;