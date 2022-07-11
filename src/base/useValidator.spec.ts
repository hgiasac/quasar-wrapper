import { getValidatorRules } from "./useValidator";

test("test useValidator", () => {
  const mockI18n: any = {
    t: (str: string) => str,
  };
  const now = new Date();
  const validator = getValidatorRules(mockI18n);

  expect(validator.required("required")(0)).toBe(true);
  expect(validator.required("required")(null)).toBe("required");
  expect(validator.required("required")(undefined)).toBe("required");
  expect(validator.required("required")("")).toBe("required");

  expect(validator.number("number")(0)).toBe(true);
  expect(validator.number("number")("")).toBe(true);
  expect(validator.number("number")(undefined)).toBe(true);
  expect(validator.number("number")(10)).toBe(true);
  expect(validator.number("number")("10")).toBe(true);
  expect(validator.number("number")("abc")).toBe("number");

  expect(validator.email(null, "email")(null)).toBe(true);
  expect(validator.email(null, "email")("")).toBe(true);
  expect(validator.email(null, "email")("example.com")).toBe("email");
  expect(validator.email(null, "email")("email@example.com")).toBe(true);
  expect(
    validator.email(["foo.bar", "example.com"], "email")("email@example.com")
  ).toBe(true);
  expect(
    validator.email(["foo.bar", "example.com"], "email")("email@foo.com")
  ).toBe("email");

  expect(validator.phoneNumber("phoneNumber")(null)).toBe(true);
  expect(validator.phoneNumber("phoneNumber")("")).toBe(true);
  expect(validator.phoneNumber("phoneNumber")("113")).toBe("phoneNumber");
  expect(validator.phoneNumber("phoneNumber")("0123456789")).toBe(true);

  expect(validator.min(0, "min")(null)).toBe(true);
  expect(validator.min(0, "min")("")).toBe(true);
  expect(validator.min(10, "min")(0)).toBe("min");
  expect(validator.min(10, "min")(10)).toBe(true);

  expect(validator.max(0, "max")(null)).toBe(true);
  expect(validator.max(0, "max")("")).toBe(true);
  expect(validator.max(10, "max")(11)).toBe("max");
  expect(validator.max(10, "max")(10)).toBe(true);

  expect(validator.between(0, 1, "between")(null)).toBe(true);
  expect(validator.between(0, 1, "between")("")).toBe(true);
  expect(validator.between(0, 10, "between")(11)).toBe("between");
  expect(validator.between(10, 20, "between")(10)).toBe(true);

  expect(validator.minLength(1, "minLength")(null)).toBe(true);
  expect(validator.minLength(0, "minLength")("")).toBe(true);
  expect(validator.minLength(0, "minLength")(0)).toBe("minLength");
  expect(validator.minLength(10, "minLength")("foo")).toBe("minLength");
  expect(validator.minLength(10, "minLength")("hello world!")).toBe(true);

  expect(validator.maxLength(0, "maxLength")(null)).toBe(true);
  expect(validator.maxLength(0, "maxLength")("")).toBe(true);
  expect(validator.minLength(0, "maxLength")(0)).toBe("maxLength");
  expect(validator.maxLength(10, "maxLength")("hello world!")).toBe(
    "maxLength"
  );
  expect(validator.maxLength(10, "maxLength")("foo")).toBe(true);

  expect(validator.betweenLength(0, 1, "betweenLength")(null)).toBe(true);
  expect(validator.betweenLength(0, 1, "betweenLength")("")).toBe(true);
  expect(validator.betweenLength(0, 1, "betweenLength")(0)).toBe(
    "betweenLength"
  );
  expect(validator.betweenLength(10, 11, "betweenLength")("hello world!")).toBe(
    "betweenLength"
  );
  expect(validator.betweenLength(0, 10, "betweenLength")("foo")).toBe(true);

  expect(validator.url()("http://localhost")).toBe(true);
  expect(validator.url()("gs://bucket_name/path/to/file")).toBe(true);
  expect(validator.url(["https"], "failed")("http://localhost")).toBe("failed");

  expect(validator.date("date")(null)).toBe(true);
  expect(validator.date("date")("")).toBe(true);
  expect(validator.date("date")("2022-01-00")).toBe("date");
  expect(validator.date("date")("2022-01-01")).toBe(true);
  expect(validator.date("date")("2022-01-01T00:00:00Z")).toBe(true);
  expect(
    getValidatorRules(mockI18n, {
      dateFormat: "DD/MM/YYYY",
    }).date("date")("01/01/2022")
  ).toBe(true);
  expect(
    getValidatorRules(mockI18n, {
      dateFormat: "DD/MM/YYYY",
    }).date("date")("2022-01-01")
  ).toBe("date");
  expect(
    getValidatorRules(mockI18n, {
      dateFormat: "YYYY-MM-DD",
    }).date("date")("2022-01-01")
  ).toBe(true);

  expect(validator.minDate(now, "minDate")(null)).toBe(true);
  expect(validator.minDate(now, "minDate")("")).toBe(true);
  expect(validator.minDate(now, "minDate")("2022-01-01")).toBe("minDate");
  expect(
    validator.minDate(
      now,
      "minDate"
    )(new Date(`${now.getFullYear() + 1}-01-01`))
  ).toBe(true);
  expect(
    getValidatorRules(mockI18n, {
      dateFormat: "DD/MM/YYYY",
    }).minDate(
      now,
      "minDate"
    )("2022-01-01")
  ).toBe("minDate");
  expect(
    getValidatorRules(mockI18n, {
      dateFormat: "DD/MM/YYYY",
    }).minDate(
      new Date("1970-01-01"),
      "minDate"
    )("01/01/2022")
  ).toBe(true);

  expect(validator.maxDate(now, "maxDate")(null)).toBe(true);
  expect(validator.maxDate(now, "maxDate")("")).toBe(true);
  expect(validator.maxDate(now, "maxDate")("2022-01-01")).toBe(true);
  expect(
    validator.maxDate(
      now,
      "maxDate"
    )(new Date(`${now.getFullYear() + 1}-01-01`))
  ).toBe("maxDate");

  expect(validator.betweenDate(now, now, "betweenDate")(null)).toBe(true);
  expect(validator.betweenDate(now, now, "betweenDate")("")).toBe(true);
  expect(
    validator.betweenDate(
      now,
      new Date("9999-01-01"),
      "betweenDate"
    )("2022-01-01")
  ).toBe("betweenDate");
  expect(
    validator.betweenDate(
      now,
      new Date("9999-01-01"),
      "betweenDate"
    )(new Date(`${now.getFullYear() + 1}-01-01`))
  ).toBe(true);

  expect(validator.time("time")(null)).toBe(true);
  expect(validator.time("time")("")).toBe(true);
  expect(validator.time("time")("2022-01-01")).toBe("time");
  expect(validator.time("time")("00:00")).toBe(true);
  expect(validator.time("time")("18:00 AM")).toBe("time");
  expect(validator.time("time")("00:00 AM")).toBe(true);
  expect(validator.time("time")("00:00 PM")).toBe(true);

  expect(validator.minTime(now, "minTime")(null)).toBe(true);
  expect(validator.minTime(now, "minTime")("")).toBe(true);
  expect(validator.minTime("02:00 PM", "minTime")("01:00")).toBe("minTime");
  expect(validator.minTime("02:00 PM", "minTime")("18:00")).toBe(true);

  expect(validator.maxTime(now, "maxTime")(null)).toBe(true);
  expect(validator.maxTime(now, "maxTime")("")).toBe(true);
  expect(validator.maxTime("02:00 PM", "maxTime")("00:00 PM")).toBe(true);
  expect(validator.maxTime("02:00 PM", "maxTime")("18:00")).toBe("maxTime");

  expect(validator.betweenTime(now, now, "betweenTime")(null)).toBe(true);
  expect(validator.betweenTime(now, now, "betweenTime")("")).toBe(true);
  expect(validator.betweenTime("00:00", "02:00", "betweenTime")("03:00")).toBe(
    "betweenTime"
  );
  expect(validator.betweenTime("00:00", "02:00", "betweenTime")("01:00")).toBe(
    true
  );

  expect(validator.password({}, "password")(null)).toBe(true);
  expect(validator.password({}, "password")("")).toBe(true);
  expect(validator.password({}, "password")("00:00 PM")).toBe(true);
  expect(validator.password({}, "password")("18:00")).toBe("password");
  expect(validator.password({ min: 4, max: 6 }, "password")("18:00")).toBe(
    true
  );
  expect(validator.password({ min: 4, max: 6 }, "password")("00:00 PM")).toBe(
    "password"
  );
  expect(validator.password({ uppercase: true }, "password")("abcdefgh")).toBe(
    "password"
  );
  expect(validator.password({ uppercase: true }, "password")("Abcdefgh")).toBe(
    true
  );
  expect(validator.password({ lowercase: true }, "password")("ABCDEFGH")).toBe(
    "password"
  );
  expect(validator.password({ lowercase: true }, "password")("Abcdefgh")).toBe(
    true
  );
  expect(
    validator.password({ uppercase: true, digit: true }, "password")("Abcdefgh")
  ).toBe("password");
  expect(
    validator.password(
      { uppercase: true, digit: true },
      "password"
    )("Abcdefgh1")
  ).toBe(true);
  expect(
    validator.password(
      { uppercase: true, digit: true, special: true },
      "password"
    )("Abcdefgh1")
  ).toBe("password");
  expect(
    validator.password(
      { uppercase: true, digit: true, special: true },
      "password"
    )("Abcdefgh1@")
  ).toBe(true);

  expect(validator.youtube("youtube")(null)).toBe(true);
  expect(validator.youtube("youtube")("")).toBe(true);
  expect(
    validator.youtube("youtube")("https://www.youtube.com/watch?v=xxxxxxxxxxx")
  ).toBe(true);
  expect(validator.youtube("youtube")("https://www.youtu.be/xxxxxxxxxxx")).toBe(
    true
  );
  expect(validator.youtube("youtube")("https://www.youtube.com")).toBe(
    "youtube"
  );
});
