import { defineComponent, h } from "vue";
import { useI18n } from "vue-i18n";

import XText, { textProps } from "./XText";

export default defineComponent({
  props: {
    ...textProps,
    value: {
      type: Number,
      required: true,
    },
    symbol: String,
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
  setup(props) {
    const i18n = useI18n();
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
            value ? i18n.n(value) : 0,
            !prefix && symbol ? " " + symbol : null,
          ],
        }
      );
    };
  },
});
