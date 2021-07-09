import { QRadio } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { formProps, nativeInputProps } from "../../mixins/form";
import { darkProps, sizeProps } from "../../mixins/props";

export const radioProps = {
  ...darkProps,
  ...sizeProps,
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
