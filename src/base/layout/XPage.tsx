import { QPageContainer, QPage } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { styleProps } from "../../mixins/props";

export const XPageContainer = QPageContainer as DefineComponent;

const props = {
  ...styleProps,
  padding: Boolean,
  styleFn: Function as PropType<
    (offset: number, height: number) => { minHeight: string }
  >,
};

export default QPage as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
