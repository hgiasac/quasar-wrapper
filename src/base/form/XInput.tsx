import { QInput } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { baseInputProps } from "../../mixins/form";
import { nativeEventProps } from "../../mixins/props";

// https://next.quasar.dev/vue-components/input
export type XInputSlots = {
  default?: () => JSX.Element;
  prepend?: () => JSX.Element;
  append?: () => JSX.Element;
  before?: () => JSX.Element;
  after?: () => JSX.Element;
  label?: () => JSX.Element;
  error?: () => JSX.Element;
  hint?: () => JSX.Element;
  counter?: () => JSX.Element;
  loading?: () => JSX.Element;
};

export const inputProps = {
  ...baseInputProps,
  ...nativeEventProps,
  modelValue: [String, Number],
  type: {
    type: String as PropType<
      | "text"
      | "password"
      | "textarea"
      | "email"
      | "search"
      | "tel"
      | "file"
      | "number"
      | "url"
      | "time"
      | "date"
    >,
    default: "text",
  },
};

export default QInput as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof inputProps>>
>;
