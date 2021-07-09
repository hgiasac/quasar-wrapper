export type BrandColor =
  | "primary"
  | "secondary"
  | "accent"
  | "dark"
  | "positive"
  | "negative"
  | "info"
  | "warning";

export type OptionProps = {
  label: string;
  value: any;
};

export const BREAKPOINT_XS = 600;
export const BREAKPOINT_SM = 1024;
export const BREAKPOINT_MD = 1440;
export const BREAKPOINT_LG = 1920;
export const BREAKPOINT_XL = 19200; // dummy max value

export type Breakpoint =
  | typeof BREAKPOINT_XS
  | typeof BREAKPOINT_SM
  | typeof BREAKPOINT_MD
  | typeof BREAKPOINT_XL
  | typeof BREAKPOINT_LG;

export type Position = "top" | "bottom" | "left" | "right";
export type CornerPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center";

export type TransitionType =
  | "slide-right"
  | "slide-left"
  | "slide-up"
  | "slide-down"
  | "fade"
  | "scale"
  | "rotate"
  | "flip-right"
  | "flip-left"
  | "flip-up"
  | "flip-down"
  | "jump-right"
  | "jump-left"
  | "jump-up"
  | "jump-down";
