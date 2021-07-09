import { defineComponent, PropType } from "vue";

import XSkeleton from "../../base/display/XSkeleton";
import { loadingProps, styleProps } from "../../mixins/props";
import { BrandColor } from "../../types";

export const textProps = {
  ...styleProps,
  text: String,
  type: String as PropType<
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline"
  >,
  color: String as PropType<BrandColor | string>,
  inline: Boolean,
  fontWeight: String as PropType<
    "thin" | "light" | "regular" | "medium" | "bold" | "bolder"
  >,
  bold: Boolean,
  italic: Boolean,
  align: String as PropType<"left" | "right" | "center" | "justify">,
  noWrap: Boolean,
  strike: Boolean,
  transform: String as PropType<"uppercase" | "lowercase" | "capitalize">,
};

export const buildTextClass = (props: Record<string, any>): string => {
  return [
    props.fontWeight
      ? `text-weight-${props.fontWeight}`
      : props.bold
      ? "text-bold"
      : null,
    props.italic ? "text-italic" : null,
    props.align ? `text-${props.align}` : null,
    props.noWrap ? "text-no-wrap" : null,
    props.strike ? "text-strike" : null,
    props.transform ? `text-${props.transform}` : null,
    props.color ? `text-${props.color}` : null,
  ]
    .filter((s) => s)
    .join(" ");
};
export default defineComponent({
  name: "XText",
  props: {
    ...loadingProps,
    ...textProps,
  },
  setup(props, ctx) {
    return () => {
      const className = [
        props.type ? `text-${props.type}` : null,
        buildTextClass(props),
      ]
        .filter((s) => s)
        .join(" ");
      const Tag = props.inline ? "span" : "div";

      return !props.loading || props.text ? (
        <Tag
          class={[props.class, className]}
          style={props.style}
          {...ctx.attrs}
        >
          {ctx.slots.default ? ctx.slots.default() : props.text}
        </Tag>
      ) : (
        <XSkeleton type="text" animation={props.loadingAnimation} />
      );
    };
  },
});
