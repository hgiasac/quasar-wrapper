import { QBreadcrumbsEl } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useRouterLinkProps } from "../../compositions";

const props = {
  ...useRouterLinkProps,
  label: String,
  icon: String,
  tag: {
    type: String,
  },
};

export default QBreadcrumbsEl as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
