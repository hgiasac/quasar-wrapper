import { getValidatorRules } from "./useValidator";

test("test useValidator", () => {
  const mockI18n: any = {
    t: (str: string) => str,
  };
  const validator = getValidatorRules(mockI18n);

  expect(validator.required("required")(0)).toBe(true);
  expect(validator.required("required")(null)).toBe("required");
  expect(validator.required("required")(undefined)).toBe("required");
  expect(validator.required("required")("")).toBe("required");
  expect(validator.min(0, "minLength")(null)).toBe(true);
  expect(validator.min(10, "minLength")(0)).toBe("minLength");
  expect(validator.min(10, "minLength")(10)).toBe(true);
  expect(validator.url()("http://localhost")).toBe(true);
  expect(validator.url()("gs://bucket_name/path/to/file")).toBe(true);
  expect(validator.url(["https"], "failed")("http://localhost")).toBe("failed");
});
