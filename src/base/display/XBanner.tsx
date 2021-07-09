import { QBanner } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

const props = {
  inlineActions: Boolean,
  dense: Boolean,
  rounded: Boolean,
};

export default QBanner as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
