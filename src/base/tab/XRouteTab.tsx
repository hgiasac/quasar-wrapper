import { QRouteTab } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { routerLinkProps } from "../../mixins/props";
import { tabProps } from "./XTab";

const props = {
  ...routerLinkProps,
  ...tabProps,
  to: { required: true },
};

export default QRouteTab as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
