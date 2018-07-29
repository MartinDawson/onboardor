const defaultErrorMessages = {
  email: "Email must contain an '@' and a '.' to be valid",
  required: "This input is required",
};

const RULES: IRule = {
  email: /.+@.+\..+/i,
  required: (value) => (
    value !== undefined &&
    value !== null &&
    (typeof value !== "boolean" || value === true) &&
    (typeof value !== "string" || value.length > 0) &&
    (!Array.isArray(value) || value.length > 0) &&
    (typeof value !== "object" || Object.keys(value).length > 0)
  ),
};

interface IRule {
  email: RegExp;
  required: (value: any) => boolean;
}

interface IMatcher {
  name: string;
  test: (value: any) => boolean;
  errorMessage: string;
}

const getMatcher = (name: keyof(IRule), errorMessage = defaultErrorMessages[name]): IMatcher => {
  const rule = RULES[name];

  if (!rule) {
    throw new Error(`No rule for name "${name}" defined`);
  }

  const test = typeof rule === "function" ? rule : (value: any) => rule.test(value);

  return { name, test, errorMessage };
};

const createValidate = (matchers: IMatcher[]) => (value: any) => {
  const invalidMatcher = matchers.find((matcher) => !matcher.test(value));

  if (!invalidMatcher) {
    return undefined;
  }

  return invalidMatcher.errorMessage || true;
};

type validation = Array<keyof(IRule) | {
    [key: string]: string,
  }>;

export default (validations: validation = []) => {
  let matchers: IMatcher[] = [];

  validations.forEach((validation) => {
    if (validation && typeof validation === "string") {
      const validationMatchers = getMatcher(validation);

      matchers = matchers.concat(validationMatchers);
    } else if (validation && typeof validation === "object") {
      const validationMatchers = Object.keys(validation).map(
        (ruleName: keyof(IRule)) => getMatcher(ruleName, validation[ruleName]),
      );

      matchers = matchers.concat(validationMatchers);
    } else {
      throw new Error("validations needs to be an array of type ['rule'] or [{ ruleName: 'errorMessage' }]");
    }
  });

  return createValidate(matchers);
};
