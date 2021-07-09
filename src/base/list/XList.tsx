import { QList } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { darkProps } from "../../mixins/props";

const xList = {
  ...darkProps,
  bordered: Boolean,
  dense: Boolean,
  separator: Boolean,
  padding: Boolean,
};

export default QList as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof xList>>
>;
