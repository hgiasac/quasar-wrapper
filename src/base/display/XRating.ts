import { QRating } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
  PropType,
} from "vue";

import { formProps, useSizeProps } from "../../compositions";

const props = {
  ...useSizeProps,
  ...formProps,
  modelValue: {
    type: Number,
  },
  max: {
    type: [String, Number],
  },
  icon: [String, Array] as PropType<string | string[]>,
  iconHalf: [String, Array] as PropType<string | string[]>,
  iconSelected: [String, Array] as PropType<string | string[]>,

  color: [String, Array] as PropType<string | string[]>,
  colorHalf: [String, Array] as PropType<string | string[]>,
  colorSelected: [String, Array] as PropType<string | string[]>,

  noReset: Boolean,
  noDimming: Boolean,

  readonly: Boolean,
  disable: Boolean,
};

export default QRating as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
