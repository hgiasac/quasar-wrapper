import { QResponsive } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { useRatioProps } from "../../compositions/props";

const props = {
  ...useRatioProps,
};

export default QResponsive as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
