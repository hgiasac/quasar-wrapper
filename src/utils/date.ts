export const isValidDate = (value: string | Date | number): boolean =>
  value instanceof Date ||
  (typeof value === "number" && value >= 0) ||
  (typeof value === "string" && !isNaN(Date.parse(value)));

const timePattern =
  /^((1[0-2]|0[0-9]):([0-5][0-9])(:([0-5][0-9]))? ?([AaPp][Mm]))|((0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?)$/;

export const isValidTime = (value: string | Date): boolean =>
  value instanceof Date || timePattern.test(value);

export const formatDateISO = (value: Date): string =>
  `${value.getFullYear()}-${(value.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${value.getDate().toString().padStart(2, "0")}`;

export const formatTime = (value: Date, seconds = false): string =>
  `${value.getHours().toString().padStart(2, "0")}:${value
    .getMinutes()
    .toString()
    .padStart(2, "0")}${
    seconds ? ":" + value.getSeconds().toString().padStart(2, "0") : ""
  }`;
