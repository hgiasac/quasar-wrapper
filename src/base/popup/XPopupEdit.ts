import { QPopupEdit } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { BrandColor } from "../../types";

const props = {
  modelValue: {},
  title: String,
  buttons: Boolean,
  labelSet: String,
  labelCancel: String,
  color: {
    type: String as PropType<BrandColor | string>,
  },
  validate: {
    type: Function as PropType<(value: any) => boolean>,
  },
  autoSave: Boolean,
  cover: Boolean,
  contentClass: String,
  disable: Boolean,
  onBeforeShow: Function as PropType<() => void>,
  onShow: Function as PropType<() => void>,
  onBeforeHide: Function as PropType<() => void>,
  onHide: Function as PropType<() => void>,
  onSave: Function as PropType<(value: any, initialValue?: any) => void>,
  onCancel: Function as PropType<(value: any, initialValue?: any) => void>,
};
export default QPopupEdit as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
