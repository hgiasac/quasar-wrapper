import { QDate } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { dateTimeProps } from "../../mixins/form";

export type DateReason =
  | "add-day"
  | "remove-day"
  | "add-range"
  | "remove-range"
  | "mask"
  | "locale"
  | "year"
  | "month";

export type XDateObject = {
  year: number;
  month: number;
  day: number;
};

export type XDateRangeValue = {
  from: string;
  to: string;
};

export type XDateDetail = XDateObject & {
  from: XDateObject;
  to: XDateObject;
};

export type DateNavigationEventPayload = {
  year: number;
  month: number;
};

export type DateRangeEndEventPayload = {
  from: XDateObject;
  to: XDateObject;
};

export type DateInputEventFunc = (
  value: string | string[] | Date | Date[],
  reason: DateReason,
  details: XDateDetail
) => void;

export type XDateOptionsProp = string[] | ((date: string) => boolean);

export const dateProps = {
  ...dateTimeProps,
  multiple: Boolean,
  range: Boolean,
  title: String,
  subtitle: String,
  mask: {},
  defaultYearMonth: {
    type: String,
  },
  yearsInMonthView: Boolean,
  events: [Array, Function] as PropType<XDateOptionsProp>,
  eventColor: [String, Function] as PropType<
    string | ((date: string) => string)
  >,
  emitImmediately: Boolean,
  options: [Array, Function] as PropType<XDateOptionsProp>,
  navigationMinYearMonth: {
    type: String,
  },
  navigationMaxYearMonth: {
    type: String,
  },
  noUnset: Boolean,
  firstDayOfWeek: [String, Number],
  todayBtn: Boolean,
  minimal: Boolean,
  defaultView: {
    type: String as PropType<"Calendar" | "Years" | "Months">,
  },
  onNavigation: Function as PropType<
    (payload: DateNavigationEventPayload) => void
  >,
  onRangeStart: Function as PropType<(date: XDateObject) => void>,
  onRangeEnd: Function as PropType<(payload: DateRangeEndEventPayload) => void>,
  onInput: Function as PropType<DateInputEventFunc>,
};
export default QDate as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof dateProps>>
>;
