import { defineComponent, h } from "vue";

import { StyleProps, useStyleProps } from "../props";
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

export type QRowProps = StyleProps & {
  container?: "none" | "fit" | "full-width" | "full-height";
  inline?: boolean;
  reverse?: boolean;
  columnGutter?: GutterSize | GutterProp;
  columnGutterX?: GutterSize | GutterProp;
  columnGutterY?: GutterSize | GutterProp;
  gutter?: GutterSize | GutterProp;
  gutterX?: GutterSize | GutterProp;
  gutterY?: GutterSize | GutterProp;
  wrap?: "wrap" | "no-wrap" | "reverse-wrap";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  alignment?: "start" | "end" | "center" | "stretch" | "baseline";
  content?: "start" | "end" | "center" | "stretch" | "between" | "around";
  self?: "start" | "end" | "center";
  order?: "none" | "last" | "first";
};

export const buildFlexGridClass = (direction: string, props: QRowProps) =>
  [
    direction,
    props.container,
    props.inline ? "inline" : null,
    props.reverse ? "reverse" : null,
    !props.wrap || props.wrap === "wrap" ? null : props.wrap,
    props.justify ? `justify-${props.justify}` : null,
    props.alignment ? `items-${props.alignment}` : null,
    props.content ? `content-${props.content}` : null,
    props.self ? `self-${props.self}` : null,
    props.order ? `order-${props.order}` : null,
    props.gutter ? getGutterClass(props.gutter) : null,
    props.gutterX ? getHorizontalGutterClass(props.gutterX) : null,
    props.gutterY ? getVerticalGutterClass(props.gutterY) : null,
    props.columnGutter ? getColGutterClass(props.columnGutter) : null,
    props.columnGutterX
      ? getColHorizontalGutterClass(props.columnGutterX)
      : null,
    props.columnGutterY ? getColVerticalGutterClass(props.columnGutterY) : null,
    props.class,
  ].filter((s) => s);

export const useFlexGridProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(useStyleProps as any),
  direction: {
    type: String,
    default: "row",
  },
  container: String,
  inline: {
    type: Boolean,
    default: false,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  columnGutter: String,
  columnGutterX: String,
  columnGutterY: String,
  gutter: String,
  gutterX: String,
  gutterY: String,
  wrap: String,
  justify: String,
  alignment: String,
  content: String,
};

export default defineComponent<QRowProps>({
  name: "QRow",
  props: useFlexGridProps,
  setup(props, ctx) {
    const className = buildFlexGridClass("row", props);

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
