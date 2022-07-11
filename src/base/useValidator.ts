import { date } from "quasar";

import { createDate, isValidDate, isValidTime } from "../utils/date";

const numberPattern = /^[0-9]*$/;
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonePattern =
  /(\(?\+[0-9]{1,3}\)?)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{3,4}( ?-?[0-9]{3})?/;
const urlPattern =
  /[-a-zA-Z0-9@:%._+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const youtubePattern =
  /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

export const isEmpty = (val: unknown) =>
  val === null || val === undefined || val === "";

export type Translator = {
  t: (key: string, args?: Record<string, unknown>) => string;
};

export type ValidatorOptions = {
  dateFormat?: string;
};

export type ValidatorRuleFunction<Value = unknown> = (
  message?: string
) => (value: Value) => boolean | string;

export type PasswordRuleOptions = {
  min?: number;
  max?: number;
  lowercase?: boolean;
  uppercase?: boolean;
  special?: boolean;
  digit?: boolean;
};

export type UseValidatorRules = {
  required: ValidatorRuleFunction;
  number: ValidatorRuleFunction;
  email: (
    acceptedDomains?: null | string[],
    message?: string
  ) => (value: unknown) => boolean | string;
  phoneNumber: ValidatorRuleFunction;
  date: (message?: string) => (value: unknown) => boolean | string;
  maxDate: (
    max: Date,
    message?: string
  ) => (value: unknown) => boolean | string;
  minDate: (
    min: Date,
    message?: string
  ) => (value: unknown) => boolean | string;
  betweenDate: (
    min: Date,
    max: Date,
    message?: string
  ) => (value: unknown) => boolean | string;
  dateFormat: (
    format: string,
    message?: string
  ) => (value: unknown) => boolean | string;
  maxDateFormat: (
    format: string,
    max: Date,
    message?: string
  ) => (value: unknown) => boolean | string;
  minDateFormat: (
    format: string,
    min: Date,
    message?: string
  ) => (value: unknown) => boolean | string;
  betweenDateFormat: (
    format: string,
    min: Date,
    max: Date,
    message?: string
  ) => (value: unknown) => boolean | string;
  time: ValidatorRuleFunction<unknown>;
  maxTime: (
    max: string | Date,
    message?: string
  ) => (value: unknown) => boolean | string;
  minTime: (
    min: string | Date,
    message?: string
  ) => (value: unknown) => boolean | string;
  betweenTime: (
    min: string | Date,
    max: string | Date,
    message?: string
  ) => (value: unknown) => boolean | string;
  maxLength: (
    max: number,
    message?: string
  ) => (value: unknown) => boolean | string;
  minLength: (
    min: number,
    message?: string
  ) => (value: unknown) => boolean | string;
  betweenLength: (
    min: number,
    max: number,
    message?: string
  ) => (value: unknown) => boolean | string;
  min: (min: number, message?: string) => (value: unknown) => boolean | string;
  max: (max: number, message?: string) => (value: unknown) => boolean | string;
  between: (
    min: number,
    max: number,
    message?: string
  ) => (value: unknown) => boolean | string;
  url: (
    allowedSchemes?: string[],
    message?: string
  ) => (value: unknown) => boolean | string;
  password: (
    options?: PasswordRuleOptions,
    message?: string
  ) => (value: unknown) => boolean | string;
  youtube: (message?: string) => (value: unknown) => boolean | string;
};

export const getValidatorRules = (
  i18n: Translator,
  options: ValidatorOptions = {}
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

  function ruleEmail(acceptedDomains?: string[], message?: string) {
    return (value: string) => {
      if (isEmpty(value)) {
        return true;
      }
      if (typeof value !== "string" || !emailPattern.test(value.trim())) {
        return message || i18n.t("rule.email");
      }
      if (!acceptedDomains || !acceptedDomains.length) {
        return true;
      }

      if (acceptedDomains.some((domain) => value.includes(`@${domain}`))) {
        return true;
      }

      return (
        message ||
        i18n.t("rule.email_domain", {
          domains: acceptedDomains.join(", "),
        })
      );
    };
  }

  function rulePhoneNumber(message?: string) {
    return (value: string) =>
      isEmpty(value) ||
      (value.length >= 8 && phonePattern.test(value)) ||
      message ||
      i18n.t("rule.phone");
  }

  function ruleMinLength(min: number, message?: string) {
    return (value: string) =>
      isEmpty(value) ||
      ((Array.isArray(value) || typeof value === "string") &&
        value.length >= min) ||
      message ||
      i18n.t("rule.length_min", { min });
  }

  function ruleMaxLength(max: number, message?: string) {
    return (value: string) =>
      isEmpty(value) ||
      ((Array.isArray(value) || typeof value === "string") &&
        value.length <= max) ||
      message ||
      i18n.t("rule.length_max", { max });
  }

  function ruleBetweenLength(min: number, max: number, message?: string) {
    return (value: string) =>
      isEmpty(value) ||
      ((Array.isArray(value) || typeof value === "string") &&
        value.length <= max &&
        value.length >= min) ||
      message ||
      i18n.t("rule.length_between", { min, max });
  }

  function ruleNumber(message?: string) {
    return (value: number | string) =>
      isEmpty(value) ||
      typeof value === "number" ||
      (typeof value === "string" && numberPattern.test(value)) ||
      message ||
      i18n.t("rule.number");
  }

  function ruleMin(min: number, message?: string) {
    return (value: number) =>
      isEmpty(value) ||
      (typeof value === "number" && value >= min) ||
      message ||
      i18n.t("rule.min", { min });
  }

  function ruleMax(max: number, message?: string) {
    return (value: number) =>
      isEmpty(value) ||
      (typeof value === "number" && value <= max) ||
      message ||
      i18n.t("rule.max", { max });
  }

  function ruleBetween(min: number, max: number, message?: string) {
    return (value: number) =>
      isEmpty(value) ||
      (typeof value === "number" && value >= min && value <= max) ||
      message ||
      i18n.t("rule.between", { min, max });
  }

  function ruleDateFormat(format: string, message?: string) {
    return (value: Date | string | number) =>
      isEmpty(value) ||
      isValidDate(value, format) ||
      message ||
      i18n.t("rule.date");
  }

  function ruleMinDateFormat(format: string, min: Date, message?: string) {
    return (value: Date | string | number) =>
      isEmpty(value) ||
      (isValidDate(value, format) &&
        min.getTime() <= createDate(value, options.dateFormat).getTime()) ||
      message ||
      i18n.t("rule.date_min", { min: date.formatDate(min, format) });
  }

  function ruleMaxDateFormat(format: string, max: Date, message?: string) {
    return (value: Date | string | number) =>
      isEmpty(value) ||
      (isValidDate(value) &&
        max.getTime() >= createDate(value, format).getTime()) ||
      message ||
      i18n.t("rule.date_max", { max: date.formatDate(max, format) });
  }

  function ruleBetweenDateFormat(
    format: string,
    min: Date,
    max: Date,
    message?: string
  ) {
    return (value: Date | string | number) => {
      if (value === null || value === undefined || value === "") {
        return true;
      }

      if (isValidDate(value)) {
        const d = createDate(value, format).getTime();
        if (min.getTime() <= d && max.getTime() >= d) {
          return true;
        }
      }

      return (
        message ||
        i18n.t("rule.date_between", {
          min: date.formatDate(min),
          max: date.formatDate(max),
        })
      );
    };
  }

  const ruleDate = (message?: string) =>
    ruleDateFormat(options.dateFormat, message);

  const ruleMinDate = (min: Date, message?: string) =>
    ruleMinDateFormat(options.dateFormat, min, message);

  const ruleMaxDate = (max: Date, message?: string) =>
    ruleMaxDateFormat(options.dateFormat, max, message);

  const ruleBetweenDate = (min: Date, max: Date, message?: string) =>
    ruleBetweenDateFormat(options.dateFormat, min, max, message);

  const timeToDate = (time: string | Date): Date => {
    return time instanceof Date
      ? new Date(`1970-01-01 ${time.getHours()}:${time.getMinutes()}`)
      : new Date(`1970-01-01 ${time}`);
  };

  function ruleTime(message?: string) {
    return (value: Date | string) =>
      isEmpty(value) || isValidTime(value) || message || i18n.t("rule.time");
  }

  function ruleMinTime(min: string | Date, message?: string) {
    const minTime = timeToDate(min).getTime();
    return (value: Date | string) =>
      isEmpty(value) ||
      (isValidTime(value) && timeToDate(value).getTime() >= minTime) ||
      message ||
      i18n.t("rule.time_min", { min });
  }

  function ruleMaxTime(max: string | Date, message?: string) {
    const maxTime = timeToDate(max).getTime();
    return (value: Date | string) =>
      isEmpty(value) ||
      (isValidTime(value) && timeToDate(value).getTime() <= maxTime) ||
      message ||
      i18n.t("rule.time_max", { max });
  }

  function ruleBetweenTime(
    min: string | Date,
    max: string | Date,
    message?: string
  ) {
    const minTime = timeToDate(min).getTime();
    const maxTime = timeToDate(max).getTime();
    if (minTime > maxTime) {
      throw new Error(
        "[ERROR] rule betweenTime: min time should be smaller than or equal max time"
      );
    }

    return (value: Date | string) =>
      isEmpty(value) ||
      (isValidTime(value) &&
        timeToDate(value).getTime() >= minTime &&
        timeToDate(value).getTime() <= maxTime) ||
      message ||
      i18n.t("rule.time_between", { min, max });
  }

  function ruleURL(allowedSchemes?: string[], message?: string) {
    return (value: string) =>
      isEmpty(value) ||
      (urlPattern.test(value) &&
        (!allowedSchemes ||
          !allowedSchemes.length ||
          allowedSchemes.some(
            (scheme) =>
              value.slice(0, scheme.length).toLowerCase() ===
              scheme.toLowerCase()
          ))) ||
      message ||
      i18n.t("rule.url");
  }

  function rulePassword(options?: PasswordRuleOptions, message?: string) {
    const opts = {
      min: 8,
      lowercase: false,
      uppercase: false,
      special: false,
      digit: false,
      ...options,
    };

    return (value: string) => {
      if (isEmpty(value)) {
        return true;
      }

      const range = opts.max
        ? `${opts.min} ${i18n.t("to")} ${opts.max}`
        : opts.min.toString();
      let valid =
        value.length >= opts.min && (!opts.max || value.length <= opts.max);
      const extraRules = [];
      if (opts.lowercase) {
        extraRules.push(i18n.t("lowercase"));
        valid = valid && /[a-z]/.test(value);
      }
      if (opts.uppercase) {
        extraRules.push(i18n.t("uppercase"));
        valid = valid && /[A-Z]/.test(value);
      }
      if (opts.special) {
        extraRules.push(i18n.t("special_character"));
        valid = valid && /[^0-9a-zA-Z]/.test(value);
      }
      if (opts.digit) {
        extraRules.push(i18n.t("digit"));
        valid = valid && /[0-9]/.test(value);
      }

      if (valid) {
        return true;
      }

      return (
        message ||
        (extraRules.length > 0
          ? i18n.t("rule.password_extra", {
              range,
              rules: extraRules.join(", "),
            })
          : i18n.t("rule.password", { range }))
      );
    };
  }

  function ruleYoutubeURL(message?: string) {
    return (value: string) =>
      isEmpty(value) ||
      (typeof value === "string" && youtubePattern.test(value.trim())) ||
      message ||
      i18n.t("rule.youtube");
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
    minDate: ruleMinDate,
    maxDate: ruleMaxDate,
    betweenDate: ruleBetweenDate,
    dateFormat: ruleDateFormat,
    minDateFormat: ruleMinDateFormat,
    maxDateFormat: ruleMaxDateFormat,
    betweenDateFormat: ruleBetweenDateFormat,
    time: ruleTime,
    maxTime: ruleMaxTime,
    minTime: ruleMinTime,
    betweenTime: ruleBetweenTime,
    min: ruleMin,
    max: ruleMax,
    between: ruleBetween,
    url: ruleURL,
    password: rulePassword,
    youtube: ruleYoutubeURL,
  };
};

export default (i18n: Translator): UseValidatorRules => {
  return getValidatorRules(i18n);
};
