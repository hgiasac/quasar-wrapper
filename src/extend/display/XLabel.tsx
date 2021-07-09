import { defineComponent } from "vue";

import { buildTextClass, textProps } from "./XText";

export default defineComponent({
  name: "XLabel",
  props: {
    ...textProps,
    for: String,
  },
  setup(props, ctx) {
    return () => {
      return (
        <label
          class={[props.class, buildTextClass(props), "q-field__label"]}
          style={props.style}
          {...ctx.attrs}
        >
          {ctx.slots.default ? ctx.slots.default() : props.text}
        </label>
      );
    };
  },
});
