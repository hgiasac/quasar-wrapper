import { defineComponent, h } from "vue";

import XInput, { inputProps } from "../../base/form/XInput";

export default defineComponent({
  name: "XInputNumber",
  props: {
    ...inputProps,
    modelValue: {
      type: Number,
      default: 0,
    },
    integer: Boolean,
  },
  setup(props, ctx) {
    const updateValue = (newValue: unknown) => {
      const numValue =
        typeof newValue !== "string"
          ? newValue
          : newValue === ""
          ? null
          : props.integer
          ? parseInt(newValue)
          : parseFloat(newValue);

      ctx.emit("update:modelValue", numValue);
    };

    return () =>
      h(
        XInput,
        {
          ...props,
          type: "number",
          "onUpdate:modelValue": updateValue,
        },
        ctx.slots
      );
  },
});
