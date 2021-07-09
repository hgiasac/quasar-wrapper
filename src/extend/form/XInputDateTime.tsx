import { formatISO, format, parse, isValid } from "date-fns/esm";
import { computed, defineComponent, PropType } from "vue";
import { useI18n } from "vue-i18n";

import XBtn from "../../base/button/XBtn";
import { XTime, XTimeOptionsFunc, timeProps } from "../../base/form";
import XDate, { XDateOptionsProp, dateProps } from "../../base/form/XDate";
import { XRow } from "../../base/layout";
import { XPopupProxy } from "../../base/popup";

export default defineComponent({
  name: "XInputDateTime",
  props: {
    ...timeProps,
    ...dateProps,
    modelValue: String,
    dateOptions: [Array, Function] as PropType<XDateOptionsProp>,
    timeOptions: Function as PropType<XTimeOptionsFunc>,
    dense: Boolean,
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
      } = props;

      return (
        <XRow class={className} style={style} gutterX="sm">
          <XBtn
            dense={dense}
            outline
            color="grey"
            disable={disable || readonly}
            no-caps
            style={{ minWidth: "7rem" }}
          >
            {modelValue
              ? i18n.d(modelValue, "shortDate")
              : datePlaceholder.value}
            <XPopupProxy transitionShow="scale" transitionHide="scale">
              <XDate
                mask="YYYY-MM-DD"
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
                options={dateOptions || options}
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
                v-model={currentDate.value}
              />
            </XPopupProxy>
          </XBtn>
          <XBtn
            dense={dense}
            outline
            color="grey"
            disable={disable || readonly}
          >
            {modelValue ? i18n.d(modelValue, "time") : "-- : --"}
            <XPopupProxy transitionShow="scale" transitionHide="scale">
              <XTime
                mask="HH:mm:ss"
                format24h={format24h}
                defaultDate={defaultDate}
                options={timeOptions}
                hourOptions={hourOptions}
                minuteOptions={minuteOptions}
                secondOptions={secondOptions}
                withSeconds={withSeconds}
                nowBtn={nowBtn}
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
                v-model={currentTime.value}
              />
            </XPopupProxy>
          </XBtn>
        </XRow>
      );
    };
  },
});
