import { PropType } from "vue";

import { TransitionType } from "../types";

export const usePanelProps = {
  modelValue: {},
  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,

  transitionPrev: String as PropType<TransitionType>,
  transitionNext: String as PropType<TransitionType>,

  keepAlive: Boolean,
  keepAliveInclude: [String, Array, RegExp],
  keepAliveExclude: [String, Array, RegExp],
  keepAliveMax: Number,
  onBeforeTransition: Function as PropType<
    (newVal?: string | number, oldVal?: string | number) => void
  >,
  onTransition: Function as PropType<
    (newVal?: string | number, oldVal?: string | number) => void
  >,
};

export const usePanelChildProps = {
  name: {
    required: true,
  },
  disable: Boolean,
};
