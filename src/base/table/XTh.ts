import { QTh } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { nativeEventProps } from "../../compositions/props";
import { TableColumnProps } from "./props";

const props = {
  ...nativeEventProps,
  props: Object as PropType<Partial<TableColumnProps>>,
  autoWidth: Boolean,
};

export default QTh as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
