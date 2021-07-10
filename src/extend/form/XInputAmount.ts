import { defineComponent, h } from "vue";

import XInput, { inputProps } from "../../base/form/XInput";
import { XAmount } from "../display";

export default defineComponent({
  name: "XInputAmount",
  props: {
    ...inputProps,
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
  },
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
        ...inputProps
      } = props;

      return h(
        XInput,
        {
          ...inputProps,
          type: "number",
          modelValue: props.modelValue,
          "onUpdate:modelValue": updateValue,
        },
        {
          ...ctx.slots,
          hint: () =>
            h(XAmount, {
              value: props.modelValue,
              symbol: symbol,
              prefix: prefix,
              operator: operator,
              highlight: highlight,
              colorNegative: colorNegative,
              colorPositive: colorPositive,
              color: color,
            }),
        }
      );
    };
  },
});
