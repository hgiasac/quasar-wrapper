import { QSlideTransition } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

// https://next.quasar.dev/vue-components/slide-transition

const props = {
  appear: Boolean,
  duration: {
    type: Number,
  },
  onShow: Function as PropType<() => void>,
  onHide: Function as PropType<() => void>,
};

export default QSlideTransition as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
