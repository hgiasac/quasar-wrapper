type OptionScope<T = unknown> = {
  index: number;
  opt: T;
  selected: boolean;
  focused: boolean;
  toggleOption: (opt: T) => unknown;
};

export type QOptionScope<T = unknown> = OptionScope<T> & {
  setOptionIndex: (index: number) => void;
  itemProps: Record<string, unknown>;
};

export type QSelectedItemScope<T = unknown> = OptionScope<T> & {
  removeAtIndex: (index: number) => void;
  tabindex: number;
};

export type OptionEventPayload<V = unknown> = {
  index: number;
  value: V;
};
