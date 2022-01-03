/* eslint-disable @typescript-eslint/no-unused-vars */
import { QSkeleton } from "quasar";
import { defineComponent, PropType, h } from "vue";

import { useLoadingProps, useStyleProps } from "../../base/props";
import { BrandColor } from "../../types";

export const useTextProps = {
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
    props.type ? `text-${props.type}` : null,
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
  name: "QText",
  props: {
    ...useLoadingProps,
    ...useTextProps,
    tag: String,
  },
  setup(props, ctx) {
    return () => {
      const {
        class: classProp,
        loading,
        text,
        inline,
        style,
        loadingAnimation,
        type,
        fontWeight,
        italic,
        align,
        noWrap,
        strike,
        transform,
        color,
        tag,
        ...remainProps
      } = props;
      const className = buildTextClass(props);

      return !loading || text
        ? h(
            tag ? tag : inline ? "span" : "div",
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
        : h(QSkeleton, {
            animation: loadingAnimation,
            type: "text",
          });
    };
  },
});
