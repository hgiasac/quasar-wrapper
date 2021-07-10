import { QFab } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { baseFabProps } from "../../compositions/button";
import { modelToggleProps } from "../../compositions/props";

const fabProps = {
  ...baseFabProps,
  ...modelToggleProps,

  icon: String,
  activeIcon: String,

  hideIcon: Boolean,
  hideLabel: {
    default: null,
  },
  direction: {
    type: String as PropType<"up" | "right" | "down" | "left">,
  },

  persistent: Boolean,

  verticalActionsAlign: {
    type: String as PropType<"left" | "center" | "right">,
  },
};

export default QFab as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof fabProps>>
>;
