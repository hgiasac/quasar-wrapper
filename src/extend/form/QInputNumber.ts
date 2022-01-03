import { QInput, QInputProps } from "quasar";
import { defineComponent, h } from "vue";

export type QInputNumberProps = Omit<QInputProps, "modelValue"> & {
  modelValue?: number;
  integer?: boolean;
  placeholder?: string;
};

export default defineComponent<QInputNumberProps>({
  name: "QInputNumber",
  props: {
    ...QInput.props,
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
        QInput,
        {
          ...props,
          type: "number",
          "onUpdate:modelValue": updateValue,
        },
        ctx.slots
      );
  },
});
