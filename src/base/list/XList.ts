import { QList } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useDarkProps } from "../../compositions/props";

const listProps = {
  ...useDarkProps,
  bordered: Boolean,
  dense: Boolean,
  separator: Boolean,
  padding: Boolean,
};

export default QList as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof listProps>>
>;
