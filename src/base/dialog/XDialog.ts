import { QDialog } from "quasar";
import {
  DefineComponent,
  PropType,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import {
  modelToggleProps,
  portalProps,
  useTransitionProps,
} from "../../compositions/props";

const props = {
  ...modelToggleProps,
  ...portalProps,
  ...useTransitionProps,
  modelValue: Boolean,
  persistent: Boolean,
  autoClose: Boolean,
  noEscDismiss: Boolean,
  noBackdropDismiss: Boolean,
  noRouteDismiss: Boolean,
  noRefocus: Boolean,
  noFocus: Boolean,
  seamless: Boolean,
  maximized: Boolean,
  fullWidth: Boolean,
  fullHeight: Boolean,
  square: Boolean,
  position: {
    type: String as PropType<"standard" | "top" | "bottom" | "left" | "right">,
  },
  onClick: Function as PropType<(ev: MouseEvent) => void>,
  onShake: Function as PropType<() => void>,
  onEscapeKey: Function as PropType<() => void>,
};

export default QDialog as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
