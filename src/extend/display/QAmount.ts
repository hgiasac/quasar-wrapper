import { defineComponent, ExtractPropTypes, h, PropType } from "vue";

import XText, { useTextProps } from "./QText";

export const useAmountProps = {
  ...useTextProps,
  value: {
    type: Number,
    required: true,
  },
  symbol: String,
  prefix: Boolean,
  operator: Boolean,
  highlight: Boolean,
  numberFormat: Function as PropType<(val: number) => string>,
  colorPositive: {
    type: String,
    default: "positive",
  },
  colorNegative: {
    type: String,
    default: "negative",
  },
};

export type QAmountProps = ExtractPropTypes<typeof useAmountProps>;

export default defineComponent({
  name: "QAmount",
  props: useAmountProps,
  setup(props) {
    const numberFormat =
      typeof props?.numberFormat == "function"
        ? props.numberFormat
        : (v: number) => v?.toString() || "0";
    return () => {
      const {
        value,
        symbol,
        prefix,
        operator,
        highlight,
        colorNegative,
        colorPositive,
        color,
        ...tProps
      } = props;
      const textColor = highlight
        ? props.value < 0
          ? colorNegative
          : colorPositive
        : color;

      return h(
        XText,
        {
          ...tProps,
          color: textColor,
        },
        {
          default: () => [
            prefix && symbol ? symbol : null,
            !operator ? null : props.value < 0 ? "" : "+",
            numberFormat(value),
            !prefix && symbol ? " " + symbol : null,
          ],
        }
      );
    };
  },
});
