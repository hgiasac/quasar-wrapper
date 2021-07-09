import { QAvatar } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { sizeProps } from "../../mixins/props";

export const avatarProps = {
  ...sizeProps,
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
