import { QRouteTab } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { useRouterLinkProps } from "../../compositions/props";
import { tabProps } from "./XTab";

const props = {
  ...useRouterLinkProps,
  ...tabProps,
  to: { required: true },
};

export default QRouteTab as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
