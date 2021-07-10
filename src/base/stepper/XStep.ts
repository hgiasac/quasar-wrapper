import { QStep } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { usePanelChildProps } from "../../compositions";

const props = {
  ...usePanelChildProps,

  icon: String,
  color: String,
  title: {
    type: String,
    required: true,
  },
  caption: String,
  prefix: [String, Number],

  doneIcon: String,
  doneColor: String,
  activeIcon: String,
  activeColor: String,
  errorIcon: String,
  errorColor: String,

  headerNav: {
    type: Boolean,
    default: true,
  },
  done: Boolean,
  error: Boolean,
};

export default QStep as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
