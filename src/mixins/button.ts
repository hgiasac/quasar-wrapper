import { PropType } from "vue";
import { RouteLocationRaw } from "vue-router";

import { BrandColor, Position } from "../types";
import {
  alignProps,
  sizeProps,
  rippleProps,
  ClassProp,
  StyleProp,
} from "./props";

export const buttonProps = {
  ...alignProps,
  ...sizeProps,
  ...rippleProps,
  type: String as PropType<"a" | "submit" | "button" | "reset">,
  to: [Object, String] as PropType<string | RouteLocationRaw>,
  replace: Boolean,
  append: Boolean,
  label: [Number, String] as PropType<number | string>,
  icon: String,
  iconRight: String,
  round: Boolean,
  outline: Boolean,
  flat: Boolean,
  unelevated: Boolean,
  rounded: Boolean,
  push: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String as PropType<BrandColor | string>,
  textColor: String as PropType<BrandColor | string>,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null,
  },
  disable: Boolean,
  onClick: Function as PropType<(ev: MouseEvent) => void>,
};

export const baseFabProps = {
  type: {
    type: String,
    default: "a",
  },

  outline: Boolean,
  push: Boolean,
  flat: Boolean,
  unelevated: Boolean,

  color: String as PropType<BrandColor | string>,
  textColor: String as PropType<BrandColor | string>,
  glossy: Boolean,

  square: Boolean,
  padding: String,

  label: {
    type: [String, Number],
    default: "",
  },
  labelPosition: {
    type: String as PropType<Position>,
  },
  externalLabel: Boolean,
  hideLabel: {
    type: Boolean,
  },
  labelClass: [Array, String, Object] as PropType<ClassProp>,
  labelStyle: [Array, String, Object] as PropType<StyleProp>,
  disable: Boolean,
  tabindex: [Number, String],
};
