import { QOptionGroup } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { useDarkProps, useStyleProps } from "../../compositions/props";
import { BrandColor, OptionProps } from "../../types";

export type XOptionGroupType = "radio" | "checkbox" | "toggle";

const xOptionsGroupProps = {
  ...useDarkProps,
  ...useStyleProps,
  modelValue: {},
  options: {
    type: Array as PropType<OptionProps[]>,
  },
  name: String,
  type: String as PropType<XOptionGroupType>,
  color: String as PropType<BrandColor | string>,
  keepColor: Boolean,
  dense: Boolean,
  size: String,
  leftLabel: Boolean,
  inline: Boolean,
  disable: Boolean,
};

export default QOptionGroup as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof xOptionsGroupProps>>
>;
