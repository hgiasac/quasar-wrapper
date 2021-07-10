import { defineComponent, PropType, h } from "vue";

import { useStyleProps } from "../../compositions/props";
import {
  GutterSize,
  GutterProp,
  getColGutterClass,
  getColHorizontalGutterClass,
  getVerticalGutterClass,
  getGutterClass,
  getHorizontalGutterClass,
  getColVerticalGutterClass,
} from "./utils";

export default defineComponent({
  props: {
    ...useStyleProps,
    direction: {
      type: String as PropType<"row" | "column">,
      default: "row",
    },
    container: String as PropType<
      "none" | "fit" | "full-width" | "full-height"
    >,
    inline: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    columnGutter: [String, Object] as PropType<GutterSize | GutterProp>,
    columnGutterX: [String, Object] as PropType<GutterSize | GutterProp>,
    columnGutterY: [String, Object] as PropType<GutterSize | GutterProp>,
    gutter: [String, Object] as PropType<GutterSize | GutterProp>,
    gutterX: [String, Object] as PropType<GutterSize | GutterProp>,
    gutterY: [String, Object] as PropType<GutterSize | GutterProp>,
    wrap: String as PropType<"wrap" | "no-wrap" | "reverse-wrap">,
    justify: String as PropType<
      "start" | "end" | "center" | "between" | "around" | "evenly"
    >,
    alignment: String as PropType<
      "start" | "end" | "center" | "stretch" | "baseline"
    >,
    content: String as PropType<
      "start" | "end" | "center" | "stretch" | "between" | "around"
    >,
  },
  setup(props, ctx) {
    const className = [
      props.direction,
      props.container,
      props.inline ? "inline" : null,
      props.reverse ? "reverse" : null,
      !props.wrap || props.wrap === "wrap" ? null : props.wrap,
      props.justify ? `justify-${props.justify}` : null,
      props.alignment ? `items-${props.alignment}` : null,
      props.content ? `content-${props.content}` : null,
      props.gutter ? getGutterClass(props.gutter) : null,
      props.gutterX ? getHorizontalGutterClass(props.gutterX) : null,
      props.gutterY ? getVerticalGutterClass(props.gutterY) : null,
      props.columnGutter ? getColGutterClass(props.columnGutter) : null,
      props.columnGutterX
        ? getColHorizontalGutterClass(props.columnGutterX)
        : null,
      props.columnGutterY
        ? getColVerticalGutterClass(props.columnGutterY)
        : null,
      props.class,
    ]
      .filter((s) => s)
      .join(" ");

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