import { QHeader } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { styleProps } from "../../mixins/props";

const props = {
  ...styleProps,
  value: {
    type: Boolean,
    default: true,
  },
  reveal: Boolean,
  revealOffset: {
    type: Number,
    default: 250,
  },
  bordered: Boolean,
  elevated: Boolean,
  heightHint: {
    type: [String, Number],
    default: 50,
  },
};

export default QHeader as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
