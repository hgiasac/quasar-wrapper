import { QItemSection } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { nativeEventProps } from "../../mixins/props";

const itemSectionProps = {
  ...nativeEventProps,
  avatar: Boolean,
  thumbnail: Boolean,
  side: Boolean,
  top: Boolean,
  noWrap: Boolean,
};

export default QItemSection as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof itemSectionProps>>
>;
