import { QIntersection } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { TransitionType } from "../../types";

export type XIntersectionRef = {
  visibility: (isVisible: boolean) => void;
};

const props = {
  tag: {
    type: String,
    default: "div",
  },
  once: Boolean,
  transition: String as PropType<TransitionType>,
  ssrPrerender: Boolean,

  margin: String,
  threshold: [Number, Array],
  root: {
    default: null,
  },

  disable: Boolean,

  onVisibility: Function,
};

export default QIntersection as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
