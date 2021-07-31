import { QTh } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { useNativeEventProps } from "../../compositions/props";
import { TableColumnProps } from "./props";

const props = {
  ...useNativeEventProps,
  props: Object as PropType<Partial<TableColumnProps>>,
  autoWidth: Boolean,
};

export default QTh as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
