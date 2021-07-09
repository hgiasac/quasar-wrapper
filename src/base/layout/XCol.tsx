import { defineComponent, PropType } from "vue";

import { styleProps } from "../../mixins/props";
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
export default defineComponent({
  props: {
    ...styleProps,
    class: String,
    gutter: [String, Object] as PropType<GutterSize | GutterProp>,
    gutterX: [String, Object] as PropType<GutterSize | GutterProp>,
    gutterY: [String, Object] as PropType<GutterSize | GutterProp>,
    size: [String, Number, Object] as PropType<ColumnSize | ColumnSizeProp>,
    offset: [String, Number, Object] as PropType<ColumnSize | ColumnSizeProp>,
    order: [Number, String, Object] as PropType<number | "first" | "last">,
    alignment: String as PropType<
      "start" | "end" | "center" | "baseline" | "stretch"
    >,
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
      props.gutterX ? getHorizontalGutterClass(props.gutterX as any) : null,
      props.gutterY ? getVerticalGutterClass(props.gutterY as any) : null,
      props.class,
    ]
      .filter((s) => s)
      .join(" ");

    const style = {
      ...(props.style as Record<string, any>),
      ...(typeof props.order === "number" ? { order: props.order } : null),
    };
    return () => (
      <div class={className} style={style}>
        {ctx.slots.default ? ctx.slots.default() : null}
      </div>
    );
  },
});
