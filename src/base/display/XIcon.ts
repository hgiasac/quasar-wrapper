import { QIcon } from "quasar";
import {
  DefineComponent,
  PropType,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { useSizeProps } from "../../compositions/props";

export const useIconProps = {
  ...useSizeProps,
  tag: {
    default: "i",
  },
  name: String,
  color: String,
  left: Boolean,
  right: Boolean,
  onClick: Function as PropType<(ev?: MouseEvent) => void>,
};

export default QIcon as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof useIconProps>>
>;
