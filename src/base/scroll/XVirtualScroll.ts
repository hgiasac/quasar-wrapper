import { QVirtualScroll } from "quasar";
import { PropType } from "vue";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useVirtualScrollProps } from "../../compositions";

export type XVirtualScrollDefaultScope<T = unknown> = {
  index: number;
  item: T;
};

export type XVirtualScrollSlots<T = unknown> = {
  before?: () => JSX.Element;
  after?: () => JSX.Element;
  default?: (scope: XVirtualScrollDefaultScope<T>) => JSX.Element;
};

const props = {
  ...useVirtualScrollProps,
  type: {
    type: String as PropType<"list" | "table" | "__qtable">,
  },

  items: {
    type: Array,
    default: () => [],
  },

  itemsFn: Function,
  itemsSize: Number,

  scrollTarget: {
    default: void 0,
  },
};

export default QVirtualScroll as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
