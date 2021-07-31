import { computed, defineComponent, PropType, ref, h } from "vue";
import { useI18n } from "vue-i18n";

import XBtn from "../../base/button/XBtn";
import XIcon from "../../base/display/XIcon";
import XDate, { XDateRangeValue, dateProps } from "../../base/form/XDate";
import XInput, { inputProps } from "../../base/form/XInput";
import { XPopupProxy } from "../../base/popup";
import { useTransitionProps } from "../../compositions";

export default defineComponent({
  name: "XInputDate",
  props: {
    ...dateProps,
    ...inputProps,
    ...useTransitionProps,
    modelValue: {
      type: [String, Array, Object] as PropType<
        string | XDateRangeValue | Array<string | XDateRangeValue>
      >,
      default: null,
    },
    mask: {
      type: String,
      default: "YYYY-MM-DD",
    },
    input: {
      type: Boolean,
      default: true,
    },
    btnColor: String,
  },
  setup(props, ctx) {
    const i18n = useI18n();
    const popupOpened = ref(false);

    const updateValue = (newValue: string) => {
      ctx.emit("update:modelValue", newValue);
    };

    const datePlaceholder = computed(() =>
      i18n.d(new Date(), "shortDate").replace(/[0-9]/g, "-")
    );
    const displayDate = computed(() => {
      if (!props.modelValue) {
        return "";
      }

      const data = Array.isArray(props.modelValue)
        ? props.modelValue
        : [props.modelValue];

      return data
        .map((m) => {
          if (typeof m !== "object") {
            return i18n.d(m, "shortDate");
          }

          return `${i18n.d(m.from, "shortDate")} - ${i18n.d(
            m.to,
            "shortDate"
          )}`;
        })
        .join(", ");
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
        mask,
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
        modelValue,
        dense,
        transitionShow,
        transitionHide,
        outlined,
        btnColor,
        ...inputProps
      } = props;

      const renderDatePicker = () =>
        h(
          XPopupProxy,
          {
            transitionHide,
            transitionShow,
            modelValue: popupOpened.value,
            "onUpdate:modelValue": (value) => (popupOpened.value = value),
          },
          {
            default: () =>
              h(XDate, {
                mask,
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
                modelValue,
                "onUpdate:modelValue": updateValue,
              }),
          }
        );

      return props.input
        ? h(
            XInput,
            {
              color,
              readonly,
              disable,
              dense,
              ...inputProps,
              ...ctx.attrs,
              inputClass: {
                [`${props.inputClass}`]: !!props.inputClass,
              } as unknown,
              modelValue,
              "onUpdate:modelValue": updateValue,
            } as unknown,
            {
              append: () =>
                h(
                  XIcon,
                  {
                    name: "event",
                    class: "cursor-pointer",
                  },
                  {
                    default: () => [renderDatePicker()],
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
                modelValue ? displayDate.value : datePlaceholder.value,
                renderDatePicker(),
              ],
            }
          );
    };
  },
});
