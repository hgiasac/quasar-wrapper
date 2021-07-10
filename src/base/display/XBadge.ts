import { QBadge } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

export const badgeProps = {
  color: String,
  textColor: String,
  floating: Boolean,
  transparent: Boolean,
  multiLine: Boolean,
  outline: Boolean,
  rounded: Boolean,
  label: [Number, String],
  align: {
    type: String as PropType<"top" | "middle" | "bottom">,
  },
};

export default QBadge as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof badgeProps>>
>;
