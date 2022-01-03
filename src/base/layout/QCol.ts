import { defineComponent, PropType, h } from "vue";

import { StyleProps, useStyleProps } from "../props";
import {
  getGutterClass,
  getHorizontalGutterClass,
  getVerticalGutterClass,
  GutterProp,
  GutterSize,
  ResponsiveProp,
} from "./utils";

export type ColumnSize =
  | "auto"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type ColumnSizeProp = ResponsiveProp<ColumnSize>;

export type QColProps = StyleProps & {
  gutter?: GutterSize | GutterProp;
  gutterX?: GutterSize | GutterProp;
  gutterY?: GutterSize | GutterProp;
  size?: ColumnSize | ColumnSizeProp;
  offset?: ColumnSize | ColumnSizeProp;
  order?: number | "first" | "last";
  alignment?: "start" | "end" | "center" | "baseline" | "stretch";
};

export default defineComponent<QColProps>({
  name: "QCol",
  props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(useStyleProps as any),
    gutter: String as PropType<GutterSize>,
    gutterX: String as PropType<GutterSize>,
    gutterY: String as PropType<GutterSize>,
    size: [String, Number, Object],
    offset: [String, Number, Object],
    order: [Number, String],
    alignment: String,
  },
  setup(props, ctx) {
    const classCol = [
      !props.size
        ? null
        : typeof props.size === "object"
        ? Object.keys(props.size)
            .map((s) =>
              s === "default"
                ? `col-${props.size[s]}`
                : `col-${s}-${props.size[s]}`
            )
            .filter((s) => s)
            .join(" ")
        : `col-${props.size}`,
      !props.offset
        ? null
        : typeof props.offset === "object"
        ? Object.keys(props.offset)
            .map((s) =>
              s === "default"
                ? `offset-${props.offset[s]}`
                : `offset-${s}-${props.offset[s]}`
            )
            .filter((s) => s)
            .join(" ")
        : `offset-${props.offset}`,
    ]
      .filter((s) => s)
      .join(" ");

    const className = [
      classCol || "col",
      props.order === "first" || props.order === "last"
        ? `order-${props.order}`
        : null,
      props.alignment ? `self-${props.alignment}` : null,
      props.gutter ? getGutterClass(props.gutter) : null,
      props.gutterX ? getHorizontalGutterClass(props.gutterX) : null,
      props.gutterY ? getVerticalGutterClass(props.gutterY) : null,
      props.class,
    ]
      .filter((s) => s)
      .join(" ");

    const style = {
      ...(props.style as Record<string, unknown>),
      ...(typeof props.order === "number" ? { order: props.order } : null),
    };
    return () =>
      h(
        "div",
        {
          class: className,
          style,
        },
        ctx.slots.default ? ctx.slots.default() : null
      );
  },
});
