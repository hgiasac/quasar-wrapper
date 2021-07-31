import { isValidDate, isValidTime, formatDateISO, formatTime } from "./date";

test("test useValidator", () => {
  expect(isValidDate(0)).toBe(true);
  expect(isValidDate("10-20-2021")).toBe(true);
  expect(isValidTime("20-10-2021")).toBe(false);
  expect(isValidTime("00:00:00")).toBe(true);
  expect(isValidTime("00:00")).toBe(true);
  expect(isValidTime("00:00 AM")).toBe(true);
  expect(isValidTime("00:00 PM")).toBe(true);
  expect(isValidTime("24:00")).toBe(false);
  expect(isValidTime("59:00")).toBe(false);
  expect(isValidTime("23:59:00")).toBe(true);
  expect(isValidTime("24:59:00")).toBe(false);
  expect(isValidTime("23:69:00")).toBe(false);
  expect(isValidTime("23:59:69")).toBe(false);
  expect(formatTime(new Date("2021-01-01 10:01:02"))).toBe("10:01");
  expect(formatTime(new Date("2021-01-01 10:01:02"), true)).toBe("10:01:02");
  expect(formatDateISO(new Date("2021-10-01 10:00:00"))).toBe("2021-10-01");
});