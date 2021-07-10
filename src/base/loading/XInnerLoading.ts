import { QInnerLoading } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useDarkProps, useTransitionProps } from "../../compositions";

const props = {
  ...useDarkProps,
  ...useTransitionProps,
  showing: Boolean,
  color: String,
  size: {
    type: [String, Number],
  },
};

export default QInnerLoading as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
