import { QTabPanel } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { parentChildProps } from "../../mixins/panel";

const props = parentChildProps;

export default QTabPanel as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
