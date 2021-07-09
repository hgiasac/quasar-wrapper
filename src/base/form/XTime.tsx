import { QTime } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { dateTimeProps } from "../../mixins/form";

export type XTimeRef = {
  setNow: () => void;
};

export type XTimeOptionsFunc = (
  hr: number,
  min: number,
  sec: number
) => boolean;

export const timeProps = {
  ...dateTimeProps,
  modelValue: String,
  mask: {},
  format24h: {
    type: Boolean,
  },
  defaultDate: {
    type: String,
  },
  options: Function as PropType<XTimeOptionsFunc>,
  hourOptions: Array as PropType<number[]>,
  minuteOptions: Array as PropType<number[]>,
  secondOptions: Array as PropType<number[]>,
  withSeconds: Boolean,
  nowBtn: Boolean,
};
export default QTime as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof timeProps>>
>;
