import { defineComponent, h } from "vue";

import XIcon from "../../base/display/XIcon";
import XInput, { inputProps } from "../../base/form/XInput";
import XTime, { timeProps } from "../../base/form/XTime";
import { XPopupProxy } from "../../base/popup";
import { useTransitionProps } from "../../compositions";

export default defineComponent({
  name: "XInputTime",
  props: {
    ...timeProps,
    ...inputProps,
    ...useTransitionProps,
    timeIcon: {
      type: String,
      default: "access_time",
    },
  },
  setup(props, ctx) {
    const updateValue = (newValue: string) => {
      ctx.emit("update:modelValue", newValue);
    };
    return () => {
      const {
        mask,
        format24h,
        defaultDate,
        options,
        hourOptions,
        minuteOptions,
        secondOptions,
        withSeconds,
        nowBtn,
        locale,
        calendar,
        landscape,
        color,
        textColor,
        square,
        flat,
        bordered,
        readonly,
        disable,
        modelValue,
        timeIcon,
        transitionShow,
        transitionHide,
        ...inputProps
      } = props;
      return h(
        XInput,
        {
          ...inputProps,
          mask,
          color,
          readonly,
          disable,
          modelValue,
          "onUpdate:modelValue": updateValue,
        },
        {
          append: () =>
            h(
              XIcon,
              {
                name: timeIcon,
                class: "cursor-pointer",
              },
              [
                h(
                  XPopupProxy,
                  {
                    transitionHide,
                    transitionShow,
                  },
                  [
                    h(XTime, {
                      mask,
                      format24h,
                      defaultDate,
                      options,
                      hourOptions,
                      minuteOptions,
                      secondOptions,
                      withSeconds,
                      nowBtn,
                      locale,
                      calendar,
                      landscape,
                      color,
                      textColor,
                      square,
                      flat,
                      bordered,
                      readonly,
                      disable,
                      modelValue,
                      "onUpdate:modelValue": updateValue,
                    } as unknown),
                  ]
                ),
              ]
            ),
        }
      );
    };
  },
});
