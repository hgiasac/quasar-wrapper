import { QAjaxBar } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { Position } from "../../types";

// https://quasar.dev/vue-components/ajax-bar
export type XAjaxBarRef = {
  // Notify bar you are waiting for a new process to finish
  start: (speed: number) => void;
  // Manually trigger a bar progress increment
  increment: (amount: number) => void;
  // Notify bar that one process you were waiting has finished
  stop: () => void;
};

const props = {
  position: {
    type: String as PropType<Position>,
  },
  size: {
    type: String,
  },
  color: String,
  skipHijack: Boolean,
  reverse: Boolean,
  onStart: Function as PropType<() => void>,
  onStop: Function as PropType<() => void>,
};

export default QAjaxBar as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
