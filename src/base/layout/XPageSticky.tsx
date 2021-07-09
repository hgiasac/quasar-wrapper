import { QPageSticky } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { CornerPosition } from "../../types";

const props = {
  position: String as PropType<CornerPosition>,
  offset: Array as PropType<number[]>,
  expand: Boolean,
};

export default QPageSticky as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
