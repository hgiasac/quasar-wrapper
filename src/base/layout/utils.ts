export type ResponsiveProp<T> = {
  default?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

export type GutterSize = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type GutterProp = ResponsiveProp<GutterSize>;

const buildGutterClass = (
  prefix: string,
  size: GutterSize | GutterProp,
  direction?: "x" | "y"
): string => {
  const buildDefaultSize = (s: string): string =>
    !direction ? `${prefix}-${s}` : `${prefix}-${direction}-${s}`;
  return typeof size === "string"
    ? buildDefaultSize(size)
    : Object.keys(size)
        .map((k) =>
          k === "default"
            ? buildDefaultSize(size[k])
            : `${prefix}-${k}${direction ? `-${direction}` : ""}-${size[k]}`
        )
        .filter((s) => s)
        .join(" ");
};

export const getGutterClass = (size: GutterSize | GutterProp): string => {
  return buildGutterClass("q-gutter", size);
};

export const getHorizontalGutterClass = (size: GutterSize): string => {
  return buildGutterClass("q-gutter", size, "x");
};

export const getVerticalGutterClass = (size: GutterSize): string => {
  return buildGutterClass("q-gutter", size, "y");
};

export const getColGutterClass = (size: GutterSize | GutterProp): string => {
  return buildGutterClass("q-col-gutter", size);
};

export const getColHorizontalGutterClass = (size: GutterSize): string => {
  return buildGutterClass("q-col-gutter", size, "x");
};

export const getColVerticalGutterClass = (size: GutterSize): string => {
  return buildGutterClass("q-col-gutter", size, "y");
};
