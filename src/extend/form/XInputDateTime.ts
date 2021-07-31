import { computed, defineComponent, PropType, h } from "vue";
import { useI18n } from "vue-i18n";

import XBtn from "../../base/button/XBtn";
import { XTime, XTimeOptionsFunc, timeProps, XField } from "../../base/form";
import XDate, { XDateOptionsProp, dateProps } from "../../base/form/XDate";
import { XRow } from "../../base/layout";
import { XPopupProxy } from "../../base/popup";
import {
  useFieldProps,
  useTransitionProps,
  XBaseFieldSlots,
} from "../../compositions";
import { isValidDate, formatDateISO, formatTime } from "../../utils/date";

export type XInputDateTimeSlots = XBaseFieldSlots;

export default defineComponent({
  name: "XInputDateTime",
  props: {
    ...timeProps,
    ...dateProps,
    ...useTransitionProps,
    ...useFieldProps,
    modelValue: {
      type: String,
      default: null,
    },
    dateOptions: [Array, Function] as PropType<XDateOptionsProp>,
    timeOptions: Function as PropType<XTimeOptionsFunc>,
    dense: Boolean,
    outline: Boolean,
    btnColor: String,
  },
  setup(props, ctx) {
    const i18n = useI18n();
    const datePlaceholder = computed(() =>
      i18n.d(new Date(), "shortDate").replace(/[0-9]/g, "-")
    );
    const currentDate = computed({
      get: () =>
        props.modelValue ? formatDateISO(new Date(props.modelValue)) : null,
      set: (newValue: string) => {
        const dt = new Date(props.modelValue);
        const newDate = new Date(newValue);
        const valid = isValidDate(dt);
        ctx.emit(
          "update:modelValue",
          new Date(
            newDate.getFullYear(),
            newDate.getMonth(),
            newDate.getDate(),
            valid ? dt.getHours() : 0,
            valid ? dt.getMinutes() : 0,
            valid ? dt.getSeconds() : 0
          ).toISOString()
        );
      },
    });

    const currentTime = computed({
      get: () =>
        props.modelValue
          ? formatTime(new Date(props.modelValue), props.withSeconds)
          : null,
      set: (newValue: string) => {
        const dt = formatDateISO(
          isValidDate(props.modelValue)
            ? new Date(props.modelValue)
            : new Date()
        );
        const newTime = new Date(`${dt} ${newValue}`);

        ctx.emit("update:modelValue", newTime.toISOString());
      },
    });

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
        outline,
        btnColor,
        ...inputProps
      } = props;

      return h(XField, inputProps, {
        ...ctx.slots,
        control: () =>
          h(
            XRow,
            {
              class: className,
              style: style,
              gutterX: "sm",
            },
            {
              default: () => [
                h(
                  XBtn,
                  {
                    dense,
                    outline,
                    noCaps: true,
                    color: btnColor,
                    disable: disable || readonly,
                    style: { minWidth: "7rem" },
                  },
                  [
                    modelValue
                      ? i18n.d(modelValue, "shortDate")
                      : datePlaceholder.value,
                    h(
                      XPopupProxy,
                      {
                        transitionHide,
                        transitionShow,
                      },
                      {
                        default: () => [
                          h(XDate, {
                            mask: "YYYY-MM-DD",
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
                            "onUpdate:modelValue": (value: string) =>
                              (currentDate.value = value),
                          } as unknown),
                        ],
                      }
                    ),
                  ]
                ),
                h(
                  XBtn,
                  {
                    outline,
                    noCaps: true,
                    color: btnColor,
                    disable: disable || readonly,
                    style: { minWidth: "7rem" },
                  },
                  [
                    modelValue ? i18n.d(modelValue, "time") : "-- : --",
                    h(
                      XPopupProxy,
                      {
                        transitionHide,
                        transitionShow,
                      },
                      {
                        default: () => [
                          h(XTime, {
                            mask: "HH:mm:ss",
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
                            "onUpdate:modelValue": (value: string) =>
                              (currentTime.value = value),
                          } as unknown),
                        ],
                      }
                    ),
                  ]
                ),
              ],
            }
          ),
      });
    };
  },
});
