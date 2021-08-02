import { defineComponent, h } from "vue";

import { buildTextClass, textProps } from "./XText";

export default defineComponent({
  name: "XLabel",
  props: {
    ...textProps,
    for: {
      type: String,
      default: null,
    },
  },
  setup(props, ctx) {
    return () => {
      return h(
        "label",
        {
          class: [props.class, buildTextClass(props), "q-field__label"],
          style: props.style,
          ...ctx.attrs,
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
