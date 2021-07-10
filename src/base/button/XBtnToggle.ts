import { QBtnToggle, LooseDictionary } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { formProps } from "../../compositions/form";
import { rippleProps } from "../../compositions/props";
import { BrandColor } from "../../types";

export type ButtonToggleOption<T = unknown> = {
  /**
   * Key-value for attributes to be set on the button
   */
  attrs?: LooseDictionary;
  /**
   * Label of option button; Use this prop and/or 'icon', but at least one is required
   */
  label?: string;
  /**
   * Icon of option button; Use this prop and/or 'label', but at least one is required
   */
  icon?: string;
  /**
   * Value of the option that will be used by component model
   */
  value: T;
  /**
   * Slot name to use for this button content; Useful for customizing content or even add tooltips
   */
  slot?: string;
  [index: string]: unknown;
};

const props = {
  ...rippleProps,
  ...formProps,
  modelValue: { required: false },

  options: {
    type: Array as PropType<ButtonToggleOption[]>,
    required: true,
  },

  // To avoid seeing the active raise shadow through the transparent button, give it a color (even white).
  color: String,
  textColor: String,
  toggleColor: {
    type: String as PropType<BrandColor | string>,
  },
  toggleTextColor: String,

  outline: Boolean,
  flat: Boolean,
  unelevated: Boolean,
  rounded: Boolean,
  push: Boolean,
  glossy: Boolean,

  size: String,
  padding: String,

  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  readonly: Boolean,
  disable: Boolean,

  stack: Boolean,
  stretch: Boolean,

  spread: Boolean,

  clearable: Boolean,
};

export default QBtnToggle as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
