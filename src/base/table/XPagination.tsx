import { QPagination } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { darkProps } from "../../mixins/props";

const props = {
  ...darkProps,
  value: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "primary",
  },
  textColor: String,
  activeColor: String,
  activeTextColor: String,
  inputStyle: [Array, String, Object],
  inputClass: [Array, String, Object],
  size: String,
  disable: Boolean,
  input: Boolean,
  iconPrev: String,
  iconNext: String,
  iconFirst: String,
  iconLast: String,
  toFn: Function as PropType<(page: number) => string | Record<string, any>>,
  boundaryLinks: {
    type: Boolean,
    default: null,
  },
  boundaryNumbers: {
    type: Boolean,
    default: null,
  },
  directionLinks: {
    type: Boolean,
    default: null,
  },
  ellipses: {
    type: Boolean,
    default: null,
  },
  maxPages: {
    type: Number,
    default: 0,
    validator: (v) => v >= 0,
  },
  ripple: {
    type: [Boolean, Object],
    default: null,
  },
  round: Boolean,
  rounded: Boolean,

  flat: Boolean,
  outline: Boolean,
  unelevated: Boolean,
  push: Boolean,
  glossy: Boolean,

  dense: Boolean,
  padding: {
    type: String,
    default: "3px 2px",
  },
  onInput: Function as PropType<(currentPage: number) => void>,
};

export default QPagination as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
