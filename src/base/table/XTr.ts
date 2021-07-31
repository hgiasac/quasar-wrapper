import { QTr } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useNativeEventProps } from "../../compositions/props";

const props = {
  ...useNativeEventProps,
  props: Object,
  noHover: Boolean,
};

export default QTr as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
