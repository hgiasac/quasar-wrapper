import { QInput } from "quasar";
import { computed, defineComponent, ref } from "vue";

import XIcon from "../../base/display/XIcon";
import { baseInputProps } from "../../mixins/form";
import { nativeEventProps } from "../../mixins/props";

export default defineComponent({
  name: "XInputPassword",
  components: { QInput },
  props: {
    ...baseInputProps,
    ...nativeEventProps,
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup(props, ctx) {
    const showPassword = ref(false);
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        ctx.emit("update:modelValue", newValue);
      },
    });

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    return () => (
      <q-input
        {...props}
        v-model={model.value}
        type={showPassword.value ? "text" : "password"}
        v-slots={{
          append: () => (
            <XIcon
              name={showPassword.value ? "visibility_off" : "visibility"}
              class="cursor-pointer"
              onClick={togglePassword}
            />
          ),
        }}
      />
    );
  },
});
