import { date } from "quasar";

const timePattern =
  /^((1[0-2]|0[0-9]):([0-5][0-9])(:([0-5][0-9]))? ?([AaPp][Mm]))|((0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?)$/;

export const isValidDate = (value: string | Date | number): boolean =>
  value === 0 || (value && (value instanceof Date || date.isValid(value)));

export const isValidTime = (value: string | Date): boolean =>
  value instanceof Date || timePattern.test(value);
