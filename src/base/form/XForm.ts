import { QForm } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

export type XFormRef = {
  focus: () => void;
  validate: (shouldFocus: boolean) => Promise<boolean>;
  resetValidation: () => void;
  submit: (evt?: Event) => void;
  reset: (evt?: Event) => void;
  getValidationComponents: () => any[];
};

const props = {
  autofocus: Boolean,
  noErrorFocus: Boolean,
  noResetFocus: Boolean,
  greedy: Boolean,
  onSubmit: Function as PropType<(ev: Event, value: any) => void>,
  onReset: Function as PropType<() => void>,
  onValidationSuccess: Function as PropType<(comp) => void>,
  onValidationError: Function as PropType<(comp) => void>,
};

export default QForm as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
