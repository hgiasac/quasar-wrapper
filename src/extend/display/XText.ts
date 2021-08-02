import { defineComponent, PropType, h } from "vue";

import XSkeleton from "../../base/display/XSkeleton";
import {
  useLoadingProps,
  useNativeEventProps,
  useStyleProps,
} from "../../compositions/props";
import { BrandColor } from "../../types";

export const textProps = {
  ...useStyleProps,
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

export const buildTextClass = (props: Record<string, unknown>): string => {
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
    ...useLoadingProps,
    ...useNativeEventProps,
    ...textProps,
  },
  setup(props, ctx) {
    return () => {
      const {
        class: classProp,
        type,
        loading,
        text,
        inline,
        style,
        loadingAnimation,
        ...remainProps
      } = props;
      const className = [type ? `text-${type}` : null, buildTextClass(props)]
        .filter((s) => s)
        .join(" ");

      return !loading || text
        ? h(
            inline ? "span" : "div",
            {
              class: [classProp, className],
              style: style,
              ...ctx.attrs,
              ...remainProps,
            },
            typeof ctx.slots.default === "function"
              ? ctx.slots
              : {
                  default: () => [props.text],
                }
          )
        : h(XSkeleton, {
            animation: loadingAnimation,
            type: "text",
          });
    };
  },
});
