import { QBar } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useDarkProps } from "../compositions";

const props = {
  ...useDarkProps,
  dense: Boolean,
};

export default QBar as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
