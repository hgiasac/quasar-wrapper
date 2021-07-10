import { QSplitter } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  PropType,
  ExtractPropTypes,
} from "vue";

import {
  ClassProp,
  StyleProp,
  useDarkProps,
  useStyleProps,
} from "../../compositions/props";

const xSplitterProps = {
  ...useDarkProps,
  ...useStyleProps,
  modelValue: {
    type: Number,
  },
  reverse: Boolean,
  unit: {
    type: String as PropType<"%" | "px">,
  },
  limits: {
    type: Array as PropType<number[]>,
  },

  emitImmediately: Boolean,

  horizontal: Boolean,
  disable: Boolean,

  beforeClass: [Array, String, Object] as PropType<ClassProp>,
  afterClass: [Array, String, Object] as PropType<ClassProp>,

  separatorClass: [Array, String, Object] as PropType<ClassProp>,
  separatorStyle: [Array, String, Object] as PropType<StyleProp>,
};

export default QSplitter as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof xSplitterProps>>
>;
