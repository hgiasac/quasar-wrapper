import { QPopupProxy } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { useAnchorProps, useTransitionProps } from "../../compositions/props";

const props = {
  ...useAnchorProps,
  ...useTransitionProps,
  breakpoint: {
    type: [String, Number],
  },
  onBeforeShow: Function as PropType<(ev?: Event) => void>,
  onShow: Function as PropType<(ev?: Event) => void>,
  onBeforeHide: Function as PropType<(ev?: Event) => void>,
  onHide: Function as PropType<(ev?: Event) => void>,
};

export default QPopupProxy as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;