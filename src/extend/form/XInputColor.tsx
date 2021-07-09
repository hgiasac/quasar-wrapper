import { computed, defineComponent } from "vue";

import XIcon from "../../base/display/XIcon";
import XColor, { colorProps } from "../../base/form/XColor";
import XInput from "../../base/form/XInput";
import { XPopupProxy } from "../../base/popup";
import { formProps, baseInputProps } from "../../mixins/form";
import { darkProps, preloadingProps } from "../../mixins/props";

const props = {
  ...preloadingProps,
  ...darkProps,
  ...formProps,
  ...baseInputProps,
  ...colorProps,
};

export default defineComponent({
  name: "XInputColor",
  props,
  setup(props, ctx) {
    const currentModel = computed({
      get: () => props.modelValue,
      set: (newValue: string) => {
        ctx.emit("update:modelValue", newValue);
      },
    });

    return () => (
      <XInput
        {...props}
        v-model={currentModel.value}
        v-slots={{
          append: () => (
            <XIcon name="colorize" class="cursor-pointer">
              <XPopupProxy transitionShow="scale" transitionHide="scale">
                <XColor {...props} v-model={currentModel.value} />
              </XPopupProxy>
            </XIcon>
          ),
        }}
      />
    );
  },
});
