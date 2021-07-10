import { QMarkupTable } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { useDarkProps } from "../../compositions/props";

const props = {
  ...useDarkProps,
  dense: Boolean,
  flat: Boolean,
  bordered: Boolean,
  square: Boolean,
  wrapCells: Boolean,

  separator: {
    type: String as PropType<"horizontal" | "vertical" | "cell" | "none">,
  },
};

export default QMarkupTable as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
