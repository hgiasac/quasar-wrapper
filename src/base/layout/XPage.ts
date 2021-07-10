import { QPageContainer, QPage } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { useStyleProps } from "../../compositions/props";

export const XPageContainer = QPageContainer as DefineComponent;

const props = {
  ...useStyleProps,
  padding: Boolean,
  styleFn: Function as PropType<
    (offset: number, height: number) => { minHeight: string }
  >,
};

export default QPage as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
