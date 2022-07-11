import { defineComponent, ExtractPropTypes, h } from "vue";

import QText, { useTextProps } from "./QText";

export const useLabelProps = {
  ...useTextProps,
  for: {
    type: String,
    default: null,
  },
};

export type QLabelProps = ExtractPropTypes<typeof useLabelProps>;

export default defineComponent({
  name: "QLabel",
  props: useLabelProps,
  setup(props, ctx) {
    return () => {
      const { class: className, ...rest } = props;
      return h(
        QText,
        {
          ...rest,
          ...ctx.attrs,
          class: [className as string, "q-field__label"].filter((s) => s),
        },
        typeof ctx.slots.default === "function"
          ? ctx.slots
          : {
              default: () => [props.text],
            }
      );
    };
  },
});
