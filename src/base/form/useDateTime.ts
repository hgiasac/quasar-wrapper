export type QDateLocale = {
  days?: string[];
  daysShort?: string[];
  months?: string[];
  monthsShort?: string[];
};

export type DateReason =
  | "add-day"
  | "remove-day"
  | "add-range"
  | "remove-range"
  | "mask"
  | "locale"
  | "year"
  | "month";

export type QDateObject = {
  year: number;
  month: number;
  day: number;
};

export type QDateRangeValue = {
  from: string;
  to: string;
};

export type QDateDetail = QDateObject & {
  from: QDateObject;
  to: QDateObject;
};

export type DateNavigationEventPayload = {
  year: number;
  month: number;
};

export type DateRangeEndEventPayload = {
  from: QDateObject;
  to: QDateObject;
};

export type DateInputEventFunc = (
  value: string | string[] | Date | Date[],
  reason: DateReason,
  details: QDateDetail
) => void;

export type QDateEventsProp = string[] | ((date: string) => boolean);

export type QTimeOptionsFunc = (
  hr: number,
  min: number,
  sec: number
) => boolean;
