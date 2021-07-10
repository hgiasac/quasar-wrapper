import { QTimeline } from "quasar";
import { BrandColor } from "types";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { useDarkProps } from "../../compositions";

// https://next.quasar.dev/vue-components/timeline
const props = {
  ...useDarkProps,
  color: {
    type: String as PropType<BrandColor>,
    default: "primary",
  },
  side: {
    type: String as PropType<"left" | "right">,
  },
  layout: {
    type: String as PropType<"dense" | "comfortable" | "loose">,
  },
};

export default QTimeline as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
