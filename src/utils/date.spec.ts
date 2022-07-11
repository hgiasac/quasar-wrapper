import { createDate, isValidDate, isValidTime } from "./date";

test("test date utils", () => {
  expect(isValidDate(0)).toBe(true);
  expect(isValidDate("10-20-2021")).toBe(true);
  expect(isValidDate("10-20-2021", "MM-DD-YYYY")).toBe(true);
  expect(isValidDate("10-20-2021", "DD-MM-YYYY")).toBe(false);
  expect(isValidDate("10-20th-2021", "MM-Do-YYYY")).toBe(true);
  expect(isValidDate("10-21st-2021", "MM-Do-YYYY")).toBe(true);
  expect(isValidDate("10-31st-2021", "MM-Do-YYYY")).toBe(true);
  expect(isValidDate("10-2nd-2021", "MM-Do-YYYY")).toBe(true);
  expect(isValidDate("10-13th-2021", "MM-Do-YYYY")).toBe(true);

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

  const now = new Date();
  expect((createDate(now) as Date).toISOString()).toBe(now.toISOString());
  expect((createDate(now.toISOString()) as Date).toISOString()).toBe(
    now.toISOString()
  );
  expect((createDate(now.getTime()) as Date).toISOString()).toBe(
    now.toISOString()
  );
  expect((createDate(now.toISOString()) as Date).toISOString()).toBe(
    now.toISOString()
  );
});
