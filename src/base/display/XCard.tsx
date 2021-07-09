import { QCard, QCardActions, QCardSection } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { nativeEventProps } from "../../mixins/props";

const xCardProps = {
  ...nativeEventProps,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
};

export const XCard = QCard as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof xCardProps>>
>;

type XCardActionsProps = {
  vertical: boolean;
  align: "left" | "right" | "center";
};

export const XCardActions = QCardActions as DefineComponent<
  ComponentObjectPropsOptions<XCardActionsProps>
>;

type XCardSectionProps = {
  horizontal: boolean;
};

export const XCardSection = QCardSection as DefineComponent<
  ComponentObjectPropsOptions<XCardSectionProps>
>;
