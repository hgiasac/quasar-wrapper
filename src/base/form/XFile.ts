import { QFile } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { useFieldProps, baseFileProps } from "../../compositions/form";
import { ClassProp, StyleProp } from "../../compositions/props";

export type CounterLabelProps = {
  totalSize: string;
  filesNumber: number;
  maxFiles: number | string;
};

export const fileProps = {
  ...baseFileProps,
  ...useFieldProps,
  modelValue: {},
  append: Boolean,
  useChips: Boolean,
  displayValue: [String, Number],
  tabindex: {
    type: [String, Number],
  },
  counterLabel: Function as PropType<(props: CounterLabelProps) => string>,
  inputClass: [Array, String, Object] as PropType<ClassProp>,
  inputStyle: [Array, String, Object] as PropType<StyleProp>,
  onClear: Function as PropType<(value?: unknown) => void>,
};

export default QFile as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof fileProps>>
>;
