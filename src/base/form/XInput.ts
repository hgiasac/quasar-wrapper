import { QInput } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { baseInputProps } from "../../compositions/form";

export type XInputType =
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
  | "date";

export const inputProps = {
  ...baseInputProps,
  modelValue: [String, Number],
  type: {
    type: String as PropType<XInputType>,
    default: "text",
  },
};

export default QInput as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof inputProps>>
>;
