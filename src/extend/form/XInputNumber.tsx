import { computed, defineComponent } from "vue";

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
            : props.integer
            ? parseInt(newValue)
            : parseFloat(newValue);

        ctx.emit("update:modelValue", numValue);
      },
    });
    return () => (
      <XInput
        {...props}
        type="number"
        v-model={model.value}
        v-slots={ctx.slots}
      />
    );
  },
});
