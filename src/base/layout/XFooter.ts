import { QFooter } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

const props = {
  value: {
    type: Boolean,
    default: true,
  },
  reveal: Boolean,
  bordered: Boolean,
  elevated: Boolean,

  heightHint: {
    type: [String, Number],
    default: 50,
  },
};

export default QFooter as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
