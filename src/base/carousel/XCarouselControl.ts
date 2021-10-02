import { QCarouselControl } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

const props = {
  position: {
    type: String as PropType<
      | "top-right"
      | "top-left"
      | "bottom-right"
      | "bottom-left"
      | "top"
      | "right"
      | "bottom"
      | "left"
    >,
  },
  offset: {
    type: Array as PropType<number[]>,
    default: () => [18, 18],
  },
};

export default QCarouselControl as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
