import { defineComponent, ref, h } from "vue";

import XIcon from "../../base/display/XIcon";
import { XInput } from "../../base/form";
import { baseInputProps } from "../../compositions/form";

export default defineComponent({
  name: "XInputPassword",
  props: {
    ...baseInputProps,
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
        XInput,
        {
          ...remainProps,
          type: showPassword.value ? "text" : "password",
          "onUpdate:modelValue": updateValue,
        },
        {
          append: () =>
            h(XIcon, {
              class: "cursor-pointer",
              onClick: togglePassword,
              name: showPassword.value ? unmaskIcon : maskIcon,
            }),
        }
      );
    };
  },
});
