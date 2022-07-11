import { date, DateLocale } from "quasar";
import enUS from "quasar/lang/en-US";

const timePattern =
  /^((1[0-2]|0[0-9]):([0-5][0-9])(:([0-5][0-9]))? ?([AaPp][Mm]))|((0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?)$/;

const reverseToken =
    /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,
  regexStore = {};

function getRegexData(
  mask: string,
  dateLocale: DateLocale = enUS.date
): RegExp {
  const days = "(" + dateLocale.days.join("|") + ")",
    key = mask + days;

  if (regexStore[key] !== void 0) {
    return regexStore[key];
  }

  const daysShort = "(" + dateLocale.daysShort.join("|") + ")",
    months = "(" + dateLocale.months.join("|") + ")",
    monthsShort = "(" + dateLocale.monthsShort.join("|") + ")";

  let index = 0;

  const regexText = mask.replace(reverseToken, (match) => {
    index++;
    switch (match) {
      case "YY":
        return "(-?\\d{1,2})";
      case "YYYY":
        return "(-?\\d{1,4})";
      case "M":
        return "([1-9]|1[0-2])";
      case "MM":
        return "(0[1-9]|1[0-2])";
      case "MMM":
        return monthsShort;
      case "MMMM":
        return months;
      case "D":
        return "([1-9]|[1-2][0-9]|3[0-1])";
      case "Do":
        return "(1st|2nd|3rd|[4-9]th|1[0-9]th|[2-3]0th|[2-3]1st|22nd|23rd|2[4-9]th)";
      case "DD":
        return "([0-2][0-9]|3[0-1])";
      case "H":
        return "([0-9]|1[0-9]|2[0-3])";
      case "HH":
        return "([0-1][0-9]|2[0-3])";
      case "h":
        return "([0-9]|1[0-1])";
      case "hh":
        return "(0[0-9]|1[0-1])";
      case "m":
        return "([0-9]|[1-5][0-9])";
      case "mm":
        return "(0[0-9]|[1-5][0-9])";
      case "s":
        return "([0-9]|[1-5][0-9])";
      case "ss":
        return "(0[0-9]|[1-5][0-9])";
      case "S":
        return "(\\d{1})";
      case "SS":
        return "(\\d{2})";
      case "SSS":
        return "(\\d{3})";
      case "A":
        return "(AM|PM)";
      case "a":
        return "(am|pm)";
      case "aa":
        return "(a\\.m\\.|p\\.m\\.)";

      case "ddd":
        return daysShort;
      case "dddd":
        return days;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "w":
        return "(\\d{1,2})";
      case "ww":
        return "(\\d{2})";

      case "Z": // to split: (?:(Z)()()|([+-])?(\\d{2}):?(\\d{2}))
        return "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        return "(Z|[+-]\\d{2}\\d{2})";

      case "X":
        return "(-?\\d+)";
      case "x":
        return "(-?\\d{4,})";

      default:
        index--;
        if (match[0] === "[") {
          match = match.substring(1, match.length - 1);
        }
        return match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  });

  regexStore[key] = new RegExp("^" + regexText);

  return regexStore[key];
}

export const isValidDate = (
  value: string | Date | number,
  format?: string,
  dateLocale: DateLocale = enUS.date
): boolean => {
  if (
    typeof value === "number" ||
    (value instanceof Date && !isNaN(value.getTime()))
  ) {
    return true;
  }

  if (typeof value !== "string") {
    return false;
  }

  if (!format) {
    return isNaN(Date.parse(value)) === false;
  }

  const regex = getRegexData(format, dateLocale);
  return regex.test(value);
};

export const isValidTime = (value: string | Date): boolean =>
  value instanceof Date ? !isNaN(value.getTime()) : timePattern.test(value);

export const createDate = (
  value: unknown,
  mask?: string,
  locale?: DateLocale
): Date | null => {
  if (value instanceof Date) {
    return value;
  }
  switch (typeof value) {
    case "number":
      return new Date(value);
    case "string":
      return !mask ? new Date(value) : date.extractDate(value, mask, locale);
    default:
      return null;
  }
};
