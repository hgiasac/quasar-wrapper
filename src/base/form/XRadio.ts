import { QRadio } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { formProps, nativeInputProps } from "../../compositions/form";
import { useDarkProps, useSizeProps } from "../../compositions/props";

export const radioProps = {
  ...useDarkProps,
  ...useSizeProps,
  ...formProps,
  ...nativeInputProps,
  modelValue: {},
  label: String,
  leftLabel: Boolean,

  color: String,
  keepColor: Boolean,
  dense: Boolean,

  disable: Boolean,
  tabindex: [String, Number],
};

export default QRadio as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof radioProps>>
>;