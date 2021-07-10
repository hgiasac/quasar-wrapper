import { QNoSsr } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

export type XNoSsrSlots = {
  default?: () => JSX.Element;
  placeholder?: () => JSX.Element;
};

const props = {
  tag: {
    type: String,
  },
  placeholder: String,
};

export default QNoSsr as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
