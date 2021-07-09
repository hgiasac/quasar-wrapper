import { computed, defineComponent } from "vue";

import XSkeleton from "../../base/display/XSkeleton";
import XInput, { inputProps, XInputSlots } from "../../base/form/XInput";
import { preloadingProps } from "../../mixins/props";
import { XAmount } from "../display";

export default defineComponent({
  name: "XInputAmount",
  props: {
    ...preloadingProps,
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
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        const numValue =
          typeof newValue !== "string"
            ? newValue
            : newValue === ""
            ? null
            : parseFloat(newValue);

        ctx.emit("update:modelValue", numValue);
      },
    });
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
      return !inputProps.preloading ? (
        <XInput
          {...inputProps}
          type="number"
          v-model={model.value}
          bottomSlots
          v-slots={
            {
              ...ctx.slots,
              hint: () => (
                <XAmount
                  value={props.modelValue}
                  symbol={symbol}
                  prefix={prefix}
                  operator={operator}
                  highlight={highlight}
                  colorNegative={colorNegative}
                  colorPositive={colorPositive}
                  color={color}
                />
              ),
            } as XInputSlots
          }
        />
      ) : (
        <XSkeleton type="QInput" animation={props.preloadingAnimation} />
      );
    };
  },
});
