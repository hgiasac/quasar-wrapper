import { QAvatar } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useSizeProps } from "../../compositions/props";

export const avatarProps = {
  ...useSizeProps,
  fontSize: String,

  color: String,
  textColor: String,

  icon: String,
  square: Boolean,
  rounded: Boolean,
};
export default QAvatar as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof avatarProps>>
>;
