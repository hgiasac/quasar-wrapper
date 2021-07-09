import { QTabPanels } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { panelParentProps } from "../../mixins/panel";
import { darkProps } from "../../mixins/props";

const props = {
  ...darkProps,
  ...panelParentProps,
};

export default QTabPanels as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
