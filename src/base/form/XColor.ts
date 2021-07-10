import { QColor } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { formProps } from "../../compositions/form";
import { useDarkProps } from "../../compositions/props";

export const colorProps = {
  ...useDarkProps,
  ...formProps,
  modelValue: String,
  defaultValue: String,
  defaultView: {
    type: String as PropType<"spectrum" | "tune" | "palette">,
  },
  formatModel: {
    type: String as PropType<"auto" | "hex" | "rgb" | "hexa" | "rgba">,
  },
  palette: Array,
  noHeader: Boolean,
  noFooter: Boolean,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  disable: Boolean,
  readonly: Boolean,
  onChange: Function as PropType<(value: string) => void>,
};

export default QColor as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof colorProps>>
>;