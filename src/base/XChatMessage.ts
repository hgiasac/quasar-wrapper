import { QChatMessage } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

const props = {
  sent: Boolean,
  label: String,
  bgColor: String,
  textColor: String,
  name: String,
  avatar: String,
  text: Array,
  stamp: String,
  size: String,
  labelHtml: Boolean,
  nameHtml: Boolean,
  textHtml: Boolean,
  stampHtml: Boolean,
};

export default QChatMessage as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
