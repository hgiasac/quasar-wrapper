import { QLayout } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { styleProps } from "../../mixins/props";

const props = {
  ...styleProps,
  container: Boolean,
  view: {
    type: String,
  },
  onScroll: Function,
  onScrollHeight: Function,
  onResize: Function,
};

export default QLayout as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
