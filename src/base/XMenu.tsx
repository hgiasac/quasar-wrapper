import { QMenu } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  AnchorPosition,
  anchorProps,
  darkProps,
  portalProps,
  transitionProps,
} from "../mixins/props";

const xMenuProps = {
  ...darkProps,
  ...anchorProps,
  ...portalProps,
  ...transitionProps,
  modelValue: Boolean,
  persistent: Boolean,
  autoClose: Boolean,
  separateClosePopup: Boolean,
  noRouteDismiss: Boolean,
  noRefocus: Boolean,
  noFocus: Boolean,
  fit: Boolean,
  cover: Boolean,
  square: Boolean,
  anchor: {
    type: String as PropType<AnchorPosition>,
  },
  self: {
    type: String as PropType<AnchorPosition>,
  },
  offset: {
    type: Array as PropType<number[]>,
  },
  touchPosition: Boolean,
  maxHeight: {
    type: String,
  },
  maxWidth: {
    type: String,
  },
};

export default QMenu as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof xMenuProps>>
>;
