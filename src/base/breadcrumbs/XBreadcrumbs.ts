import { QBreadcrumbs } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { GutterSize } from "../../base/layout/utils";
import { useAlignProps } from "../../compositions";

export type XBreadcrumbsSlots = {
  default?: () => JSX.Element;
  separator?: () => JSX.Element;
};

const props = {
  ...useAlignProps,
  separator: {
    type: String,
  },
  separatorColor: String,
  activeColor: {
    type: String,
  },
  gutter: {
    type: String as PropType<GutterSize>,
  },
};

export default QBreadcrumbs as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
