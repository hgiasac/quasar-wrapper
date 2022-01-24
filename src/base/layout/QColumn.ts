import { defineComponent, h } from "vue";

import { buildFlexGridClass, QRowProps, useFlexGridProps } from "./QRow";

export type QColumnProps = QRowProps;

export default defineComponent<QColumnProps>({
  name: "QColumn",
  props: useFlexGridProps,
  setup(props, ctx) {
    const className = buildFlexGridClass("column", props);

    return () =>
      h(
        "div",
        {
          class: className,
          style: props.style,
        },
        ctx.slots.default ? ctx.slots.default() : null
      );
  },
});
