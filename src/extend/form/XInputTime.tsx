import { computed, defineComponent } from "vue";

import XIcon from "../../base/display/XIcon";
import XInput, { inputProps } from "../../base/form/XInput";
import XTime, { timeProps } from "../../base/form/XTime";
import { XPopupProxy } from "../../base/popup";
import { preloadingProps } from "../../mixins/props";

export default defineComponent({
  name: "XInputTime",
  props: {
    ...preloadingProps,
    ...timeProps,
    ...inputProps,
  },
  setup(props, ctx) {
    const currentModel = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        ctx.emit("update:modelValue", newValue);
      },
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
        ...inputProps
      } = props;
      return (
        <XInput
          {...inputProps}
          mask={mask}
          color={color}
          readonly={readonly}
          disable={disable}
          v-model={currentModel.value}
          v-slots={{
            append: () => (
              <XIcon name="access_time" class="cursor-pointer">
                <XPopupProxy transitionShow="scale" transitionHide="scale">
                  <XTime
                    mask={mask}
                    format24h={format24h}
                    defaultDate={defaultDate}
                    options={options}
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
                    v-model={currentModel.value}
                  />
                </XPopupProxy>
              </XIcon>
            ),
          }}
        />
      );
    };
  },
});
