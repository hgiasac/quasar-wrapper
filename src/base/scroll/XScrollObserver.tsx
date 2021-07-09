import { QScrollObserver } from "quasar";
import { ComponentObjectPropsOptions, DefineComponent } from "vue";

import { ScrollDirection, ScrollPosition } from "./types";

export type OnScrollDetails = {
  position: ScrollPosition;
  direction: ScrollDirection;
  directionChanged: boolean;
  delta: ScrollPosition;
  inflectionPoint: ScrollPosition;
};

type XScrollObserverProps = {
  debounce: string | number;
  axis: "both" | "vertical" | "horizontal";
  scrollTarget: string | Element;
  onScroll: (details: OnScrollDetails) => void;
};

export default QScrollObserver as DefineComponent<
  ComponentObjectPropsOptions<XScrollObserverProps>
>;
