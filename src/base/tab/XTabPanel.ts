import { QTabPanel } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { usePanelChildProps } from "../../compositions/panel";

const props = usePanelChildProps;

export default QTabPanel as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
