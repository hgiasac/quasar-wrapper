import { QParallax } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
  PropType,
} from "vue";

// https://next.quasar.dev/vue-components/parallax
export type XParallaxSlots = {
  default?: () => JSX.Element;
  media?: () => JSX.Element;
  content?: (percentScrolled: number) => JSX.Element;
};

const props = {
  src: String,
  height: {
    type: Number,
  },
  speed: {
    type: Number,
  },
  scrollTarget: {},
  onScroll: Function as PropType<(percentage: number) => void>,
};

export default QParallax as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
