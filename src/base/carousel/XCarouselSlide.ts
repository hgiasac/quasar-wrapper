import { QCarouselSlide } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { usePanelChildProps } from "../../compositions";

const props = {
  ...usePanelChildProps,
  imgSrc: String,
};

export default QCarouselSlide as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
