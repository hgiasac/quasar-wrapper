import { QChip } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { darkProps, rippleProps, sizeProps } from "../../mixins/props";

export const chipProps = {
  ...rippleProps,
  ...darkProps,
  ...sizeProps,
  dense: Boolean,

  icon: String,
  iconRight: String,
  iconRemove: String,
  iconSelected: String,
  label: [String, Number],

  color: String,
  textColor: String,

  value: {
    type: Boolean,
  },
  selected: {
    type: Boolean,
  },

  square: Boolean,
  outline: Boolean,
  clickable: Boolean,
  removable: Boolean,

  tabindex: [String, Number],
  disable: Boolean,
  onClick: Function as PropType<(e?: Event) => void>,
  onRemove: Function as PropType<(state?: boolean) => void>,
};

export default QChip as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof chipProps>>
>;
