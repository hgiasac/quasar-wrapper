import { QStepper } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useDarkProps, usePanelProps } from "../../compositions";

export type XStepperRef = {
  next: () => void;
  previous: () => void;
  goTo: (parentName: string | number) => void;
};

export type XStepperSlots = {
  default?: () => JSX.Element;
  navigation?: () => JSX.Element;
  message?: () => JSX.Element;
};

const props = {
  ...useDarkProps,
  ...usePanelProps,

  flat: Boolean,
  bordered: Boolean,
  alternativeLabels: Boolean,
  headerNav: Boolean,
  contracted: Boolean,
  headerClass: String,

  inactiveColor: String,
  inactiveIcon: String,
  doneIcon: String,
  doneColor: String,
  activeIcon: String,
  activeColor: String,
  errorIcon: String,
  errorColor: String,
};

export default QStepper as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
