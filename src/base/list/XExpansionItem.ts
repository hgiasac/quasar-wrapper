import { QExpansionItem } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  StyleProp,
  ClassProp,
  useDarkProps,
  useRouterLinkProps,
  rippleProps,
} from "../../compositions/props";

const expansionItemProps = {
  ...useDarkProps,
  ...useRouterLinkProps,
  ...rippleProps,
  icon: String,

  label: String,
  labelLines: [Number, String],

  caption: String,
  captionLines: [Number, String],

  dense: Boolean,

  expandIcon: String,
  expandedIcon: String,
  expandIconClass: [Array, String, Object],
  duration: Number,

  headerInsetLevel: Number,
  contentInsetLevel: Number,

  expandSeparator: Boolean,
  defaultOpened: Boolean,
  expandIconToggle: Boolean,
  switchToggleSide: Boolean,
  denseToggle: Boolean,
  group: String,
  popup: Boolean,

  headerStyle: [Array, String, Object] as PropType<StyleProp>,
  headerClass: [Array, String, Object] as PropType<ClassProp>,
};

export default QExpansionItem as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof expansionItemProps>>
>;
