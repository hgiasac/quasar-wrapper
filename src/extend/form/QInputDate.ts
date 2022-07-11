import {
  QBtn,
  QDate,
  QIcon,
  QInput,
  QPopupProxy,
  QInputProps,
  QDateProps,
  date,
  QField,
} from "quasar";
import {
  computed,
  defineComponent,
  PropType,
  ref,
  h,
  onBeforeMount,
  watch,
} from "vue";

import { QDateRangeValue } from "../../base/form";
import {
  StyleProps,
  TransactionProps,
  useTransitionProps,
} from "../../base/props";
import { isValidDate } from "../../utils/date";

export type QInputDateProps = Omit<QInputProps, "modelValue"> &
  QDateProps &
  StyleProps &
  TransactionProps & {
    modelValue?: string;
    input?: boolean;
    btnColor?: string;
    dateIcon?: string;
    placeholder?: string;
  };

export const useInputDateProps = {
  ...QDate.props,
  ...QInput.props,
  ...useTransitionProps,
  modelValue: {
    type: [String, Array, Object] as PropType<
      string | QDateRangeValue | Array<string | QDateRangeValue>
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
  dateIcon: {
    type: String,
    default: "event",
  },
};

export default defineComponent<QInputDateProps>({
  name: "QInputDate",
  props: useInputDateProps,
  setup(props, ctx) {
    const inputValue = ref<string>();
    const popupOpened = ref(false);

    const updateValue = (newValue: string) => {
      ctx.emit("update:modelValue", newValue);
    };

    const updateInputValue = (val: string) => {
      inputValue.value = val;

      if (!val) {
        ctx.emit("update:modelValue", null);
        return;
      }

      const values = val
        .split(",")
        .map((d) => {
          const dt = d.trim();
          if (!dt) {
            return null;
          }
          const dates = dt
            .split("-")
            .map((edge) => {
              const trimmed = edge.trim();
              if (!trimmed) {
                return null;
              }
              if (!isValidDate(trimmed, props.mask)) {
                return null;
              }

              const parsedDate = date.extractDate(trimmed, props.mask);
              return date.formatDate(parsedDate, "YYYY-MM-DD");
            })
            .filter((o) => o);

          if (dates.length === 1) {
            return dates[0];
          } else if (dates.length > 1) {
            return {
              from: dates[0],
              to: dates[1],
            };
          }

          return null;
        })
        .filter((o) => o);

      ctx.emit("update:modelValue", values);
    };

    const togglePopup = (value: boolean) => (popupOpened.value = value);

    watch(
      () => props.modelValue,
      (newValue) => {
        if (!newValue) {
          inputValue.value = null;
          return;
        }

        const values = Array.isArray(props.modelValue)
          ? props.modelValue
          : [props.modelValue];
        const newDateString = values
          .map((m) => {
            if (typeof m !== "object") {
              return date.formatDate(m, props.mask);
            }

            return `${date.formatDate(m.from, props.mask)} - ${date.formatDate(
              m.to,
              props.mask
            )}`;
          })
          .join(", ");
        if (inputValue.value !== newDateString) {
          inputValue.value = newDateString;
        }
      },
      {
        immediate: true,
      }
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
        dateIcon,
        ...inputProps
      } = props;

      const renderDatePicker = () =>
        h(
          QPopupProxy,
          {
            transitionHide,
            transitionShow,
            modelValue: popupOpened.value,
            "onUpdate:modelValue": togglePopup,
          },
          {
            default: () =>
              h(QDate, {
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
              inputClass: {
                [`${props.inputClass}`]: !!props.inputClass,
              } as unknown,
              modelValue: inputValue.value,
              "onUpdate:modelValue": updateInputValue,
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
              before: ctx.slots.before,
              after: ctx.slots.after,
              error: ctx.slots.error,
              hint: ctx.slots.hint,
              loading: ctx.slots.loading,
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
                    dense,
                    outline: outlined,
                    flat,
                    color: btnColor,
                    disable: disable || readonly,
                    noCaps: true,
                    style: { minWidth: "7rem" },
                    label: inputValue.value || props.placeholder || props.mask,
                    iconRight: dateIcon,
                  },
                  {
                    default: () => [renderDatePicker()],
                    loading: ctx.slots.loading,
                  }
                ),
            }
          );
    };
  },
});
