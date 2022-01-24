import {
  date,
  QBtn,
  QBtnProps,
  QField,
  QIcon,
  QInput,
  QInputProps,
  QPopupProxy,
  QTime,
  QTimeProps,
} from "quasar";
import { defineComponent, h, onBeforeMount } from "vue";

import { TransactionProps, useTransitionProps } from "../../base/props";
import { isValidTime } from "../../utils/date";

export type QInputTimeProps = Omit<QInputProps, "modelValue"> &
  QTimeProps &
  TransactionProps & {
    modelValue?: string;
    input?: boolean;
    timeIcon?: string;
    btnColor?: string;
    placeholder?: string;
  };

export const useInputTimeProps = {
  ...QTime.props,
  ...QInput.props,
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
};

export default defineComponent<QInputTimeProps>({
  name: "QInputTime",
  props: useInputTimeProps,
  setup(props, ctx) {
    const getValue = (newValue: string) =>
      newValue ? date.formatDate(newValue, props.mask) : null;
    const updateValue = (newValue: string) => {
      ctx.emit("update:modelValue", newValue);
    };

    onBeforeMount(() => {
      // format input value on the first load
      if (props.modelValue && isValidTime(props.modelValue)) {
        ctx.emit(
          "update:modelValue",
          date.formatDate(new Date(props.modelValue), props.mask)
        );
      }
    });

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
          QPopupProxy,
          {
            transitionHide,
            transitionShow,
          },
          {
            default: () => [
              h(QTime, {
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
            QInput,
            {
              ...inputProps,
              color,
              readonly,
              disable,
              outlined,
              dense,
              flat,
              modelValue: getValue(modelValue),
              "onUpdate:modelValue": updateValue,
            },
            {
              append: () =>
                h(
                  QIcon,
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
            QField,
            {
              ...inputProps,
              borderless: true,
            },
            {
              control: () =>
                h(
                  QBtn,
                  {
                    outlined,
                    dense,
                    flat,
                    outline: outlined,
                    color: btnColor,
                    disable: disable || readonly,
                    noCaps: true,
                    style: { minWidth: "7rem" },
                    label: modelValue
                      ? date.formatDate(modelValue, mask)
                      : "-- : --",
                    iconRight: timeIcon,
                  } as QBtnProps,
                  {
                    default: () => [renderTimePicker()],
                  }
                ),
            }
          );
    };
  },
});
