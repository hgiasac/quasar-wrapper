import { QBtnGroup } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

const props = {
  unelevated: Boolean,
  outline: Boolean,
  flat: Boolean,
  rounded: Boolean,
  push: Boolean,
  stretch: Boolean,
  glossy: Boolean,
  spread: Boolean,
};

export default QBtnGroup as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
