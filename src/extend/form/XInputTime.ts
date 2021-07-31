import { defineComponent, h } from "vue";
import { useI18n } from "vue-i18n";

import { XBtn } from "../../base/button";
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
    input: {
      type: Boolean,
      default: true,
    },
    timeIcon: {
      type: String,
      default: "access_time",
    },
    btnColor: String,
  },
  setup(props, ctx) {
    const i18n = useI18n();
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
        outlined,
        dense,
        btnColor,
        ...inputProps
      } = props;

      const renderTimePicker = () =>
        h(
          XPopupProxy,
          {
            transitionHide,
            transitionShow,
          },
          {
            default: () => [
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
            ],
          }
        );
      return props.input
        ? h(
            XInput,
            {
              ...inputProps,
              mask,
              color,
              readonly,
              disable,
              outlined,
              dense,
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
                  {
                    default: () => [renderTimePicker()],
                  }
                ),
            }
          )
        : h(
            XBtn,
            {
              dense,
              outline: outlined,
              color: btnColor,
              disable: disable || readonly,
              noCaps: true,
              style: { minWidth: "7rem" },
            },
            {
              default: () => [
                modelValue ? i18n.d(modelValue, "time") : "-- : --",
                renderTimePicker(),
              ],
            }
          );
    };
  },
});
