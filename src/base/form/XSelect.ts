import { QSelect } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  useFieldProps,
  formProps,
  nativeInputProps,
  XFieldRef,
} from "../../compositions/form";
import {
  useTransitionProps,
  useVirtualScrollProps,
} from "../../compositions/props";

type NewValueMode = "add" | "add-unique" | "toggle";

type OptionScope<T = unknown> = {
  index: number;
  opt: T;
  selected: boolean;
  focused: boolean;
  toggleOption: (opt: T) => unknown;
};

export type XSelectRef<T = unknown> = XFieldRef<T> & {
  select: () => void;
  getNativeElement: () => Element;
};
export type XOptionScope<T = unknown> = OptionScope<T> & {
  setOptionIndex: (index: number) => void;
  itemProps: Record<string, unknown>;
};

export type XSelectedItemScope<T = unknown> = OptionScope<T> & {
  removeAtIndex: (index: number) => void;
  tabindex: number;
};

export type OptionEventPayload<V = unknown> = {
  index: number;
  value: V;
};

export type SelectFilterHandler = (
  inputValue: string,
  doneFn: (
    callbackFn: () => void,
    afterFn?: (ref?: typeof QSelect) => void
  ) => void,
  abortFn?: () => void
) => void;

export type XSelectSlots<T = unknown> = {
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
  selected?: () => JSX.Element;
  "before-options"?: () => JSX.Element;
  "after-options"?: () => JSX.Element;
  "no-option"?: (scope: { inputValue?: string }) => JSX.Element;
  "selected-item"?: (scope: XSelectedItemScope<T>) => JSX.Element;
  option?: (scope: XOptionScope<T>) => JSX.Element;
};

export const selectProps = {
  ...useFieldProps,
  ...useVirtualScrollProps,
  ...formProps,
  ...nativeInputProps,
  ...useTransitionProps,
  modelValue: { required: false },
  multiple: Boolean,
  displayValue: [String, Number],
  displayValueSanitize: Boolean,
  dropdownIcon: String,
  options: {
    type: Array,
    default: (): unknown[] => [],
  },

  optionValue: [Function, String],
  optionLabel: [Function, String],
  optionDisable: [Function, String],

  hideSelected: Boolean,
  hideDropdownIcon: Boolean,
  fillInput: Boolean,

  maxValues: [Number, String],

  optionsDense: Boolean,
  optionsDark: {
    type: Boolean,
    default: null,
  },
  optionsSelectedClass: String,
  optionsSanitize: Boolean,

  optionsCover: Boolean,

  menuShrink: Boolean,
  menuAnchor: String,
  menuSelf: String,
  menuOffset: Array,

  popupContentClass: String,
  popupContentStyle: [String, Array, Object],

  useInput: Boolean,
  useChips: Boolean,

  newValueMode: {
    type: String as PropType<NewValueMode>,
  },

  mapOptions: Boolean,
  emitValue: Boolean,

  inputDebounce: {
    type: [Number, String],
    default: 500,
  },

  inputClass: [Array, String, Object],
  inputStyle: [Array, String, Object],

  tabindex: {
    type: [String, Number],
    default: 0,
  },

  autocomplete: String,
  behavior: {
    type: String as PropType<"default" | "menu" | "dialog">,
    default: "default",
  },

  virtualScrollItemSize: {
    type: [Number, String],
    default: void 0,
  },
  onInputValue: Function as PropType<(value: string) => void>,
  onAdd: Function as PropType<(details: OptionEventPayload) => void>,
  onRemove: Function as PropType<(details: OptionEventPayload) => void>,
  onNewValue: Function as PropType<
    (
      inputValue: string,
      doneFn: (item: unknown, mode: NewValueMode) => void
    ) => void
  >,
  onFilter: Function as PropType<SelectFilterHandler>,
  onFilterAbort: Function as PropType<() => void>,
};

export default QSelect as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof selectProps>>
>;
