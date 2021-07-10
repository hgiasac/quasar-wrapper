import { QInfiniteScroll } from "quasar";
import { PropType } from "vue";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

export type XInfiniteScrollSlots = {
  default?: () => JSX.Element;
  loading?: () => JSX.Element;
};

export type XInfiniteScrollRef = {
  poll: () => void;
  trigger: () => void;
  reset: () => void;
  stop: () => void;
  resume: () => void;
  setIndex: () => void;
  updateScrollTarget: () => void;
};

const props = {
  offset: {
    type: Number,
  },
  debounce: {
    type: [String, Number],
  },
  scrollTarget: {},
  initialIndex: Number,
  disable: Boolean,
  reverse: Boolean,
  onLoad: Function as PropType<
    (index: number, done: (stop?: boolean) => void) => void
  >,
};

export default QInfiniteScroll as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
