import { QFabAction } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";
import { RouteLocationRaw } from "vue-router";

import { baseFabProps } from "../../compositions/button";

const fabActionProps = {
  ...baseFabProps,
  icon: {
    type: String,
    default: "",
  },
  anchor: {
    type: String as PropType<"start" | "end" | "center">,
  },
  to: [String, Object] as PropType<RouteLocationRaw>,
  replace: Boolean,
  onClick: Function as PropType<(e?: Element) => void>,
};

export default QFabAction as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof fabActionProps>>
>;
