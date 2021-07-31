/* eslint-disable @typescript-eslint/no-explicit-any */
import * as CSS from "csstype";
import { PropType } from "vue";

import { useDarkProps, useMaskProps, useSizeProps } from "./props";

export const formProps = {
  name: String,
};

export const useValidateProps = {
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

export const useFieldProps = {
  ...useDarkProps,
  ...useValidateProps,
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
  onClear: Function as PropType<(value?: any) => void>,
  onFocus: Function as PropType<(el: Element) => void>,
  onBlur: Function as PropType<(el: Element) => void>,
  onPopupShow: Function as PropType<(el: Element) => void>,
  onPopupHide: Function as PropType<(el: Element) => void>,
};

// https://next.quasar.dev/vue-components/input
export type XBaseFieldSlots = {
  default?: () => JSX.Element;
  prepend?: () => JSX.Element;
  append?: () => JSX.Element;
  before?: () => JSX.Element;
  after?: () => JSX.Element;
  label?: () => JSX.Element;
  error?: () => JSX.Element;
  hint?: () => JSX.Element;
  counter?: () => JSX.Element;
  loading?: () => JSX.Element;
};

export type XInputSlots = XBaseFieldSlots;

export type XFieldScope<T = unknown> = {
  id: string;
  field: Element;
  editable: boolean;
  focused: boolean;
  floatingLabel: boolean;
  value: T;
  emitValue: (value: T) => void;
};

export type XFieldSlots = XBaseFieldSlots & {
  control?: (scope: XFieldScope) => JSX.Element;
};

export type XFieldRef<T = unknown> = {
  resetValidation: () => void;
  validate: (value: T) => boolean | Promise<boolean>;
  focus: () => void;
  blur: () => void;
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
  ...useFieldProps,
  ...formProps,
  ...useMaskProps,
  ...nativeInputProps,
  shadowText: String,
  debounce: [String, Number],
  autogrow: Boolean, // makes a textarea
  inputClass: [Array, String, Object],
  inputStyle: [Array, String, Object],
};

export const checkboxProps = {
  ...useDarkProps,
  ...formProps,
  ...useSizeProps,
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
  ...useDarkProps,
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
