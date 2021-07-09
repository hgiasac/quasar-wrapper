import * as CSS from "csstype";
import { PropType } from "vue";

import { darkProps, markProps, sizeProps } from "./props";

export const formProps = {
  name: String,
};

export const validateProps = {
  value: {},

  error: {
    type: Boolean,
    default: null,
  },
  errorMessage: String,
  noErrorIcon: Boolean,

  rules: Array,
  reactiveRules: Boolean,
  lazyRules: [Boolean, String] as PropType<boolean | "ondemand">,
};

export const fieldProps = {
  ...darkProps,
  ...validateProps,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String,
  maxlength: [Number, String],
  maxValues: [Number, String], // private, do not add to JSON; internally needed by QSelect
};

export const nativeInputProps = {
  class: [String, Array, Object] as PropType<
    string | string | Record<string, boolean>
  >,
  style: [String, Array, Object] as PropType<
    string | string[] | CSS.Properties
  >,
  placeholder: String,
  size: Number,
  tabindex: {
    type: String,
  },
};

export const baseInputProps = {
  ...fieldProps,
  ...formProps,
  ...markProps,
  ...nativeInputProps,
  shadowText: String,
  debounce: [String, Number],
  autogrow: Boolean, // makes a textarea
  inputClass: [Array, String, Object],
  inputStyle: [Array, String, Object],
};

export const checkboxProps = {
  ...darkProps,
  ...formProps,
  ...sizeProps,
  modelValue: {},
  val: {},
  trueValue: {},
  falseValue: {},
  indeterminateValue: { default: null },
  toggleOrder: {
    type: String as PropType<"tf" | "ft">,
  },
  toggleIndeterminate: Boolean,

  label: String,
  leftLabel: Boolean,

  color: String,
  keepColor: Boolean,
  dense: Boolean,

  disable: Boolean,
  tabindex: [String, Number],
  onInput: Function as PropType<(value: any, ev?: InputEvent) => void>,
};

export type XDateLocale = {
  days?: string[];
  daysShort?: string[];
  months?: string[];
  monthsShort?: string[];
};

export const dateTimeProps = {
  ...darkProps,
  ...formProps,
  ...nativeInputProps,
  modelValue: {},
  mask: {
    type: String,
  },
  locale: Object as PropType<XDateLocale>,
  calendar: {
    type: String as PropType<"gregorian" | "persian">,
  },
  landscape: Boolean,

  color: String,
  textColor: String,

  square: Boolean,
  flat: Boolean,
  bordered: Boolean,

  readonly: Boolean,
  disable: Boolean,
};

export const baseFileProps = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function as PropType<(files: FileList | File[]) => File[]>,
  onReject: Function as PropType<(rejectedFiles: File[]) => void>,
};
