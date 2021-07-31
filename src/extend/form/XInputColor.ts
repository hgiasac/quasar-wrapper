import { defineComponent, h } from "vue";

import XIcon from "../../base/display/XIcon";
import XColor, { colorProps } from "../../base/form/XColor";
import XInput from "../../base/form/XInput";
import { XPopupProxy } from "../../base/popup";
import { formProps, baseInputProps } from "../../compositions/form";
import { useDarkProps, useTransitionProps } from "../../compositions/props";

const props = {
  ...useDarkProps,
  ...formProps,
  ...baseInputProps,
  ...colorProps,
  ...useTransitionProps,
  iconName: {
    type: String,
    default: "colorize",
  },
};

export default defineComponent({
  name: "XInputColor",
  props,
  setup(props, ctx) {
    const updateValue = (newValue: string) => {
      ctx.emit("update:modelValue", newValue);
    };

    return () => {
      const { transitionShow, transitionHide, iconName, ...remainProps } =
        props;
      return h(
        XInput,
        {
          ...remainProps,
          "onUpdate:modelValue": updateValue,
        },
        {
          append: () =>
            h(
              XIcon,
              {
                name: iconName,
                class: "cursor-pointer",
              },
              {
                default: () => [
                  h(
                    XPopupProxy,
                    {
                      transitionShow,
                      transitionHide,
                    },
                    {
                      default: () => [
                        h(XColor, {
                          ...remainProps,
                          "onUpdate:modelValue": updateValue,
                        }),
                      ],
                    }
                  ),
                ],
              }
            ),
        }
      );
    };
  },
});
