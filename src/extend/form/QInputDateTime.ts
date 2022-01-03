/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  QBtn,
  QDate,
  QField,
  QInputSlots,
  QPopupProxy,
  QTime,
  QTimeProps,
  QDateProps,
  date,
  QInput,
  QInputProps,
  QIcon,
} from "quasar";
import { computed, defineComponent, PropType, h, ref, watch } from "vue";

import { QTimeOptionsFunc, QDateEventsProp } from "../../base/form";
import { QCol, QRow } from "../../base/layout";
import {
  StyleProps,
  TransactionProps,
  useTransitionProps,
} from "../../base/props";

export type QInputDateTimeProps = Omit<QTimeProps, "modelValue"> &
  Omit<QDateProps, "modelValue"> &
  Omit<QInputProps, "modelValue"> &
  TransactionProps &
  StyleProps & {
    modelValue?: string;
    dateOptions?: QDateEventsProp;
    timeOptions?: QTimeOptionsFunc;
    input?: boolean;
    btnColor?: string;
    dateMask?: string;
    timeMask?: string;
    dateIcon?: string;
    timeIcon?: string;
  };

export type QInputDateTimeSlots = QInputSlots;

export const useInputDateTimeProps = {
  ...QTime.props,
  ...QDate.props,
  ...QInput.props,
  ...useTransitionProps,
  modelValue: {
    type: String,
    default: null,
  },
  dateOptions: [Array, Function] as PropType<QDateEventsProp>,
  timeOptions: Function as PropType<QTimeOptionsFunc>,
  btnColor: String,
  input: {
    type: Boolean,
    default: false,
  },
  dateMask: {
    type: String,
    default: "YYYY-MM-DD",
  },
  timeMask: {
    type: String,
    default: "HH:mm",
  },
  dateIcon: {
    type: String,
    default: "event",
  },
  timeIcon: {
    type: String,
    default: "access_time",
  },
};

export default defineComponent<QInputDateTimeProps>({
  name: "QInputDateTime",
  props: useInputDateTimeProps,
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const dateInput = ref("");
    const timeInput = ref("");

    const currentDate = computed(() =>
      props.modelValue
        ? date.formatDate(props.modelValue, props.dateMask)
        : null
    );

    const updateDate = (newValue: string) => {
      const dt = new Date(props.modelValue);
      const newDate = date.extractDate(newValue, props.dateMask);
      const valid = date.isValid(props.modelValue);
      const newDateTime = new Date(
        newDate.getFullYear(),
        newDate.getMonth(),
        newDate.getDate(),
        valid ? dt.getHours() : 0,
        valid ? dt.getMinutes() : 0,
        valid ? dt.getSeconds() : 0
      );
      ctx.emit("update:modelValue", newDateTime.toISOString());

      dateInput.value = newValue;
    };

    const currentTime = computed(() =>
      props.modelValue
        ? date.formatDate(new Date(props.modelValue), props.timeMask)
        : null
    );

    const updateTime = (newValue: string) => {
      const dt = date.formatDate(
        date.isValid(props.modelValue)
          ? new Date(props.modelValue)
          : new Date(),
        "YYYY-MM-DD"
      );
      const newTime = new Date(`${dt} ${newValue}`);

      ctx.emit("update:modelValue", newTime.toISOString());
      timeInput.value = newValue;
    };

    const updateDateInput = (newValue: string) => {
      dateInput.value = newValue;
      if (!newValue) {
        ctx.emit("update:modelValue", null);
        return;
      }

      if (
        newValue.length !== props.dateMask.length ||
        !date.isValid(newValue)
      ) {
        return;
      }
      const exDate = date.extractDate(newValue, props.dateMask);

      ctx.emit("update:modelValue", exDate.toISOString());
    };

    const updateTimeInput = (newValue: string) => {
      timeInput.value = newValue;
      if (!newValue) {
        ctx.emit("update:modelValue", null);
        return;
      }

      const dt = date.formatDate(
        date.isValid(props.modelValue)
          ? new Date(props.modelValue)
          : new Date(),
        "YYYY-MM-DD"
      );

      if (!date.isValid(`${dt} ${newValue}`)) {
        return;
      }

      const newTime = new Date(`${dt} ${newValue}`);
      ctx.emit("update:modelValue", newTime.toISOString());
    };

    watch(
      () => props.modelValue,
      () => {
        if (!props.modelValue || !date.isValid(props.modelValue)) {
          return;
        }

        const dateText = date.formatDate(props.modelValue, props.dateMask);
        const timeText = date.formatDate(props.modelValue, props.timeMask);

        if (dateText !== dateInput.value) {
          dateInput.value = dateText;
        }

        if (timeText !== timeInput.value) {
          timeInput.value = timeText;
        }
      },
      { immediate: true }
    );

    return () => {
      const {
        multiple,
        range,
        title,
        subtitle,
        defaultYearMonth,
        yearsInMonthView,
        events,
        eventColor,
        emitImmediately,
        navigationMaxYearMonth,
        navigationMinYearMonth,
        noUnset,
        firstDayOfWeek,
        minimal,
        todayBtn,
        defaultView,
        onNavigation,
        onRangeEnd,
        onRangeStart,
        onInput,
        options,
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
        format24h,
        defaultDate,
        hourOptions,
        minuteOptions,
        secondOptions,
        withSeconds,
        nowBtn,
        dateOptions,
        timeOptions,
        dense,
        modelValue,
        class: className,
        style,
        transitionHide,
        transitionShow,
        outlined,
        btnColor,
        mask,
        dateMask,
        timeMask,
        input,
        dateIcon,
        timeIcon,
        ...inputProps
      } = props;

      const renderDatePicker = () =>
        h(
          QPopupProxy,
          {
            transitionHide,
            transitionShow,
          },
          {
            default: () => [
              h(QDate, {
                mask: props.dateMask,
                multiple,
                range,
                title,
                subtitle,
                defaultYearMonth,
                yearsInMonthView,
                events,
                eventColor,
                emitImmediately,
                navigationMaxYearMonth,
                navigationMinYearMonth,
                noUnset,
                firstDayOfWeek,
                minimal,
                todayBtn,
                defaultView,
                onNavigation,
                onRangeEnd,
                onRangeStart,
                onInput,
                options: dateOptions || options,
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
                modelValue: currentDate.value,
                "onUpdate:modelValue": updateDate,
              } as unknown),
            ],
          }
        );

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
                mask: props.timeMask,
                format24h,
                defaultDate,
                options: timeOptions,
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
                modelValue: currentTime.value,
                "onUpdate:modelValue": updateTime,
              } as unknown),
            ],
          }
        );

      return input
        ? h(
            QRow,
            {
              class: className,
              style: style,
              gutterX: "sm",
            },
            {
              default: () => [
                h(
                  QCol,
                  {},
                  {
                    default: () => [
                      h(
                        QInput,
                        {
                          color,
                          readonly,
                          disable,
                          dense,
                          outlined,
                          flat,
                          ...inputProps,
                          ...ctx.attrs,
                          placeholder: dateMask,
                          inputClass: {
                            [`${props.inputClass}`]: !!props.inputClass,
                          } as unknown,
                          modelValue: dateInput.value,
                          "onUpdate:modelValue": updateDateInput,
                        } as unknown,
                        {
                          append: () =>
                            h(
                              QIcon,
                              {
                                name: dateIcon,
                                class: "cursor-pointer",
                              },
                              {
                                default: () => [renderDatePicker()],
                              }
                            ),
                        }
                      ),
                    ],
                  }
                ),
                h(
                  QCol,
                  {},
                  {
                    default: () => [
                      h(
                        QInput,
                        {
                          color,
                          readonly,
                          disable,
                          dense,
                          outlined,
                          flat,
                          ...inputProps,
                          ...ctx.attrs,
                          placeholder: timeMask,
                          inputClass: {
                            [`${props.inputClass}`]: !!props.inputClass,
                          } as unknown,
                          modelValue: timeInput.value,
                          "onUpdate:modelValue": updateTimeInput,
                        } as unknown,
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
                      ),
                    ],
                  }
                ),
              ],
            }
          )
        : h(
            QField,
            {
              ...inputProps,
              borderless: true,
            },
            {
              ...ctx.slots,
              control: () =>
                h(
                  QRow,
                  {
                    class: className,
                    style: style,
                    gutterX: "sm",
                  },
                  {
                    default: () => [
                      h(
                        QBtn,
                        {
                          dense,
                          outline: outlined,
                          noCaps: true,
                          color: btnColor,
                          readonly,
                          flat,
                          iconRight: dateIcon,
                          label: modelValue
                            ? date.formatDate(modelValue, props.dateMask)
                            : dateMask,
                          disable: disable || readonly,
                          style: { minWidth: "7rem" },
                        },
                        {
                          default: () => [renderDatePicker()],
                        }
                      ),
                      h(
                        QBtn,
                        {
                          dense,
                          outline: outlined,
                          flat,
                          iconRight: timeIcon,
                          noCaps: true,
                          color: btnColor,
                          label: modelValue ? currentTime.value : "-- : --",
                          disable: disable || readonly,
                          style: { minWidth: "7rem" },
                        },
                        {
                          default: () => [renderTimePicker()],
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
