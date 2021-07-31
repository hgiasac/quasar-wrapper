import { Composer, useI18n, VueMessageType } from "vue-i18n";

import { isValidDate, isValidTime } from "../utils/date";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonePattern =
  /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/;

export type ValidatorRuleFunction<Value = unknown> = (
  message?: string
) => (value: Value) => boolean | string;

export type UseValidatorRules = {
  required: ValidatorRuleFunction;
  number: ValidatorRuleFunction<number>;
  email: ValidatorRuleFunction;
  phoneNumber: ValidatorRuleFunction;
  date: ValidatorRuleFunction<Date | string | number>;
  time: ValidatorRuleFunction<Date | string>;
  maxLength: (
    max: number,
    message?: string
  ) => (value: string) => boolean | string;
  minLength: (
    min: number,
    message?: string
  ) => (value: string) => boolean | string;
  betweenLength: (
    min: number,
    max: number,
    message?: string
  ) => (value: unknown) => boolean | string;
  min: (min: number, message?: string) => (value: number) => boolean | string;
  max: (max: number, message?: string) => (value: number) => boolean | string;
  between: (
    min: number,
    max: number,
    message?: string
  ) => (value: number) => boolean | string;
};

export const getValidatorRules = (
  i18n: Composer<unknown, unknown, unknown, VueMessageType>
): UseValidatorRules => {
  function ruleRequired(message?: string) {
    return (value: unknown) =>
      (value !== null &&
        value !== undefined &&
        ((typeof value === "string" && value.trim() !== "") ||
          (Array.isArray(value) && value.length > 0) ||
          value === false ||
          value === true ||
          value === 0 ||
          (typeof value !== "string" && !!value))) ||
      message ||
      i18n.t("rule.required");
  }

  function ruleEmail(message?: string) {
    return (value: string) =>
      !value ||
      emailPattern.test(value.trim()) ||
      message ||
      i18n.t("rule.email");
  }

  function rulePhoneNumber(message?: string) {
    return (value: string) =>
      !value ||
      (value.length >= 8 && phonePattern.test(value)) ||
      message ||
      i18n.t("rule.phone");
  }

  function ruleMinLength(min: number, message?: string) {
    return (value: string) =>
      !value ||
      ((Array.isArray(value) || typeof value === "string") &&
        value.length >= min) ||
      message ||
      i18n.t("rule.min_length", { min });
  }

  function ruleMaxLength(max: number, message?: string) {
    return (value: string) =>
      !value ||
      ((Array.isArray(value) || typeof value === "string") &&
        value.length <= max) ||
      message ||
      i18n.t("rule.max_length", { max });
  }

  function ruleBetweenLength(min: number, max: number, message?: string) {
    return (value: string) =>
      !value ||
      ((Array.isArray(value) || typeof value === "string") &&
        value.length <= max &&
        value.length >= min) ||
      message ||
      i18n.t("rule.length_between", { min, max });
  }

  function ruleNumber(message?: string) {
    return (value: number) =>
      !value || typeof value === "number" || message || i18n.t("rule.number");
  }

  function ruleMin(min: number, message?: string) {
    return (value: number) =>
      value === null ||
      value === undefined ||
      (typeof value === "number" && value >= min) ||
      message ||
      i18n.t("rule.min", { min });
  }

  function ruleMax(max: number, message?: string) {
    return (value: number) =>
      value === null ||
      value === undefined ||
      (typeof value === "number" && value <= max) ||
      message ||
      i18n.t("rule.max", { max });
  }

  function ruleBetween(min: number, max: number, message?: string) {
    return (value: number) =>
      value === null ||
      value === undefined ||
      (typeof value === "number" && value >= min && value <= max) ||
      message ||
      i18n.t("rule.between", { min, max });
  }

  function ruleDate(message?: string) {
    return (value: Date | string | number) =>
      !value || isValidDate(new Date(value)) || message || i18n.t("rule.date");
  }

  function ruleTime(message?: string) {
    return (value: Date | string) =>
      !value || isValidTime(value) || message || i18n.t("rule.time");
  }

  return {
    required: ruleRequired,
    number: ruleNumber,
    maxLength: ruleMaxLength,
    minLength: ruleMinLength,
    betweenLength: ruleBetweenLength,
    email: ruleEmail,
    phoneNumber: rulePhoneNumber,
    date: ruleDate,
    time: ruleTime,
    min: ruleMin,
    max: ruleMax,
    between: ruleBetween,
  };
};

export default (): UseValidatorRules => {
  const i18n = useI18n();
  return getValidatorRules(i18n);
};
