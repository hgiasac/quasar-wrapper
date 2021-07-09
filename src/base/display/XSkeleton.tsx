import { QSkeleton } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { darkProps, tagProps, XSkeletonAnimation } from "../../mixins/props";

export type XSkeletonType =
  | "text"
  | "rect"
  | "circle"
  | "QBtn"
  | "QBadge"
  | "QChip"
  | "QToolbar"
  | "QCheckbox"
  | "QRadio"
  | "QToggle"
  | "QSlider"
  | "QRange"
  | "QInput"
  | "QAvatar";

const props = {
  ...darkProps,
  ...tagProps,
  type: {
    type: String as PropType<XSkeletonType>,
  },
  animation: {
    type: String as PropType<XSkeletonAnimation>,
  },

  square: Boolean,
  bordered: Boolean,

  size: String,
  width: String,
  height: String,
};

export default QSkeleton as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
