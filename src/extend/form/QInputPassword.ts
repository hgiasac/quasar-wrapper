import { QIcon, QInput, QInputProps } from "quasar";
import { defineComponent, ref, h } from "vue";

export type QInputPasswordProps = Partial<QInputProps> & {
  maskIcon?: string;
  unmaskIcon?: string;
  placeholder?: string;
};

export default defineComponent<QInputPasswordProps>({
  name: "QInputPassword",
  props: {
    ...QInput.props,
    modelValue: {
      type: String,
      default: "",
    },
    maskIcon: {
      type: String,
      default: "visibility",
    },
    unmaskIcon: {
      type: String,
      default: "visibility_off",
    },
  },
  setup(props, ctx) {
    const showPassword = ref(false);
    const updateValue = (newValue: string) => {
      ctx.emit("update:modelValue", newValue);
    };

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    return () => {
      const { maskIcon, unmaskIcon, ...remainProps } = props;
      return h(
        QInput,
        {
          ...remainProps,
          type: showPassword.value ? "text" : "password",
          "onUpdate:modelValue": updateValue,
        },
        {
          append: () =>
            h(QIcon, {
              class: "cursor-pointer",
              onClick: togglePassword,
              name: showPassword.value ? unmaskIcon : maskIcon,
            }),
        }
      );
    };
  },
});
