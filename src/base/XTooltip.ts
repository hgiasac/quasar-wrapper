import { QTooltip } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  AnchorPosition,
  useAnchorProps,
  modelToggleProps,
  portalProps,
  useTransitionProps,
} from "../compositions/props";

const props = {
  ...useAnchorProps,
  ...modelToggleProps,
  ...portalProps,
  ...useTransitionProps,
  target: [Boolean, String],
  maxHeight: {
    type: String,
    default: null,
  },
  maxWidth: {
    type: String,
    default: null,
  },
  anchor: {
    type: String as PropType<AnchorPosition>,
  },
  self: {
    type: String as PropType<AnchorPosition>,
  },
  offset: {
    type: Array as PropType<number[]>,
  },
  scrollTarget: [Object, String] as PropType<Element | string>,
  delay: {
    type: Number,
  },
  hideDelay: {
    type: Number,
  },
};

export default QTooltip as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
