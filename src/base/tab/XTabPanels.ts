import { QTabPanels } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { usePanelProps } from "../../compositions/panel";
import { useDarkProps } from "../../compositions/props";

const props = {
  ...useDarkProps,
  ...usePanelProps,
};

export default QTabPanels as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
