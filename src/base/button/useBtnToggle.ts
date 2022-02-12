export type QBtnToggleOption<T = unknown> = {
  /**
   * Key-value for attributes to be set on the button
   */
  attrs?: Record<string, unknown>;
  /**
   * Label of option button; Use this prop and/or 'icon', but at least one is required
   */
  label?: string;
  /**
   * Icon of option button; Use this prop and/or 'label', but at least one is required
   */
  icon?: string;
  /**
   * Value of the option that will be used by component model
   */
  value: T;
  /**
   * Slot name to use for this button content; Useful for customizing content or even add tooltips
   */
  slot?: string;
  [index: string]: unknown;
};
