import { QInput, QInputProps } from "quasar";
import { defineComponent, h, PropType } from "vue";

import QAmount from "../display/QAmount";

export type QInputAmountProps = Omit<QInputProps, "modelValue"> & {
  modelValue?: number;
  symbol?: string;
  prefix?: boolean;
  operator?: boolean;
  highlight?: boolean;
  colorPositive?: string;
  colorNegative?: string;
  numberFormat?: (value: number) => string;
  placeholder?: string;
};

export const useInputAmountProps = {
  ...QInput.props,
  modelValue: {
    type: Number,
    default: 0,
  },
  symbol: {
    type: String,
    required: true,
  },
  prefix: Boolean,
  operator: Boolean,
  highlight: Boolean,
  colorPositive: {
    type: String,
    default: "positive",
  },
  colorNegative: {
    type: String,
    default: "negative",
  },
  numberFormat: Function as PropType<(val: number) => string>,
};

export default defineComponent<QInputAmountProps>({
  name: "QInputAmount",
  props: useInputAmountProps,
  setup(props, ctx) {
    const updateValue = (newValue: unknown) => {
      const numValue =
        typeof newValue !== "string"
          ? newValue
          : newValue === ""
          ? null
          : parseFloat(newValue);

      ctx.emit("update:modelValue", numValue);
    };
    return () => {
      const {
        symbol,
        prefix,
        operator,
        highlight,
        colorNegative,
        colorPositive,
        color,
        numberFormat,
        ...inputProps
      } = props;

      return h(
        QInput,
        {
          ...inputProps,
          type: "number",
          modelValue: props.modelValue,
          "onUpdate:modelValue": updateValue,
        },
        {
          prepend: ctx.slots.prepend,
          append: ctx.slots.append,
          before: ctx.slots.before,
          after: ctx.slots.after,
          label: ctx.slots.label,
          error: ctx.slots.error,
          loading: ctx.slots.loading,
          hint: () =>
            h(QAmount, {
              value: props.modelValue,
              symbol: symbol,
              prefix: prefix,
              operator: operator,
              highlight: highlight,
              colorNegative: colorNegative,
              colorPositive: colorPositive,
              color: color,
              numberFormat,
            }),
        }
      );
    };
  },
});
