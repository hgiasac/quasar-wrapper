import { formatISO, format, parse, isValid } from "date-fns/esm";
import { computed, defineComponent, PropType, h } from "vue";
import { useI18n } from "vue-i18n";

import XBtn from "../../base/button/XBtn";
import { XTime, XTimeOptionsFunc, timeProps } from "../../base/form";
import XDate, { XDateOptionsProp, dateProps } from "../../base/form/XDate";
import { XRow } from "../../base/layout";
import { XPopupProxy } from "../../base/popup";
import { useTransitionProps } from "../../compositions";

export default defineComponent({
  name: "XInputDateTime",
  props: {
    ...timeProps,
    ...dateProps,
    ...useTransitionProps,
    modelValue: {
      type: String,
      default: null,
    },
    dateOptions: {
      type: [Array, Function] as PropType<XDateOptionsProp>,
      default: null,
    },
    timeOptions: {
      type: Function as PropType<XTimeOptionsFunc>,
      default: null,
    },
    dense: Boolean,
    outline: Boolean,
    btnColor: {
      type: String,
      default: "grey",
    },
  },
  setup(props, ctx) {
    const i18n = useI18n();
    const datePlaceholder = computed(() =>
      i18n.d(new Date(), "shortDate").replace(/[0-9]/g, "-")
    );
    const currentDate = computed({
      get: () =>
        props.modelValue
          ? formatISO(new Date(props.modelValue), { representation: "date" })
          : null,
      set: (newValue: string) => {
        const dt = new Date(props.modelValue);
        const newDate = new Date(newValue);
        const valid = isValid(dt);
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
          ? format(new Date(props.modelValue), "HH:mm:ss")
          : null,
      set: (newValue: string) => {
        const dt = new Date(props.modelValue);
        const newTime = parse(
          newValue,
          "HH:mm:ss",
          isValid(dt) ? dt : new Date()
        );

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
      } = props;

      return h(
        XRow,
        {
          class: className,
          style: style,
          gutterX: "sm",
        },
        [
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
                [
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
                ]
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
                [
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
                ]
              ),
            ]
          ),
        ]
      );
    };
  },
});
