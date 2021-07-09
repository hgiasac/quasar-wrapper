import { QPullToRefresh } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

export type XPullToRefreshRef = {
  trigger: () => void;
  updateScrollTarget: () => void;
};

const props = {
  color: String,
  bgColor: String,
  icon: String,
  noMouse: Boolean,
  disable: Boolean,
  scrollTarget: {},
  onRefresh: Function as PropType<(done: () => void) => void>,
};

export default QPullToRefresh as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
