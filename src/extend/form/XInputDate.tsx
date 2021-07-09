import { computed, defineComponent, PropType, ref } from "vue";
import { useI18n } from "vue-i18n";

import XBtn from "../../base/button/XBtn";
import XIcon from "../../base/display/XIcon";
import XDate, { XDateRangeValue, dateProps } from "../../base/form/XDate";
import XInput, { inputProps } from "../../base/form/XInput";
import { XPopupProxy } from "../../base/popup";

export default defineComponent({
  name: "XInputDate",
  props: {
    ...dateProps,
    ...inputProps,
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
    input: Boolean,
  },
  setup(props, ctx) {
    const i18n = useI18n();
    const popupOpened = ref(false);

    const currentModel = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        ctx.emit("update:modelValue", newValue);
      },
    });

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

    const openPopup = () => {
      if (!popupOpened.value) {
        popupOpened.value = true;
      }
    };

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
        ...inputProps
      } = props;

      const renderDatePicker = () => (
        <XPopupProxy
          transitionShow="scale"
          transitionHide="scale"
          v-model={popupOpened.value}
        >
          <XDate
            mask={mask}
            multiple={multiple}
            range={range}
            title={title}
            subtitle={subtitle}
            defaultYearMonth={defaultYearMonth}
            yearsInMonthView={yearsInMonthView}
            events={events}
            eventColor={eventColor}
            emitImmediately={emitImmediately}
            navigationMaxYearMonth={navigationMaxYearMonth}
            navigationMinYearMonth={navigationMinYearMonth}
            noUnset={noUnset}
            firstDayOfWeek={firstDayOfWeek}
            minimal={minimal}
            todayBtn={todayBtn}
            defaultView={defaultView}
            onNavigation={onNavigation}
            onRangeEnd={onRangeEnd}
            onRangeStart={onRangeStart}
            onInput={onInput}
            options={options}
            locale={locale}
            calendar={calendar}
            landscape={landscape}
            color={color}
            textColor={textColor}
            square={square}
            flat={flat}
            bordered={bordered}
            readonly={readonly}
            disable={disable}
            v-model={currentModel.value}
          />
        </XPopupProxy>
      );

      return props.input ? (
        <XInput
          {...inputProps}
          {...ctx.attrs}
          inputClass={{
            [`${props.inputClass}`]: !!props.inputClass,
            "cursor-pointer": true,
          }}
          color={color}
          readonly={readonly}
          onClick={openPopup}
          disable={disable}
          dense={dense}
          v-model={currentModel.value}
          v-slots={{
            append: () => (
              <XIcon name="event" class="cursor-pointer">
                {renderDatePicker()}
              </XIcon>
            ),
          }}
        />
      ) : (
        <XBtn
          dense={dense}
          outline
          color="grey"
          disable={disable || readonly}
          no-caps
          style={{ minWidth: "7rem" }}
        >
          {modelValue ? displayDate.value : datePlaceholder.value}
          {renderDatePicker()}
        </XBtn>
      );
    };
  },
});
