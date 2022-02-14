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
    const popupOpened = ref(false);

    const updateValue = (newValue: string) => {
      ctx.emit("update:modelValue", newValue);
    };

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
            return date.formatDate(m, props.mask);
          }

          return `${date.formatDate(m.from, props.mask)} - ${date.formatDate(
            m.to,
            props.mask
          )}`;
        })
        .join(", ");
    });

    onBeforeMount(() => {
      // format input value on the first load
      if (isValidDate(props.modelValue)) {
        ctx.emit(
          "update:modelValue",
          date.formatDate(new Date(props.modelValue), props.mask)
        );
      }
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
            "onUpdate:modelValue": (value) => (popupOpened.value = value),
          },
          {
            default: () =>
              h(QDate, {
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
              modelValue,
              "onUpdate:modelValue": updateValue,
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
                    label: modelValue ? displayDate.value : props.mask,
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
