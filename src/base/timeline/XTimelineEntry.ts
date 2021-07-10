import { QTimelineEntry } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

// https://next.quasar.dev/vue-components/timeline
const props = {
  heading: Boolean,
  tag: {
    type: String,
    default: "h3",
  },
  side: {
    type: String as PropType<"left" | "right">,
  },
  icon: String,
  avatar: String,
  color: String,
  title: String,
  subtitle: String,
  body: String,
};

export default QTimelineEntry as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
