/* eslint-disable no-console */

const defaultErrorMessages = {
  email: 'Email must contain an \'@\' and a \'.\' to be valid',
  required: 'This input is required',
};

const RULES = {
  email: /.+@.+\..+/i,
  required: value => (
    value !== undefined &&
    value !== null &&
    (typeof value !== 'boolean' || value === true) &&
    (typeof value !== 'string' || value.length > 0) &&
    (!Array.isArray(value) || value.length > 0) &&
    (typeof value !== 'object' || Object.keys(value).length > 0)
  ),
};

const getMatcher = (name, errorMessage = defaultErrorMessages[name]) => {
  const rule = RULES[name];

  if (!rule) {
    console.error(`No rule for name "${name}" defined`);
  }

  const test = typeof rule === 'function' ? rule : value => rule.test(value);

  return { name, test, errorMessage };
};

const createValidate = matchers => (value) => {
  const invalidMatcher = matchers.find(matcher => !matcher.test(value));

  if (!invalidMatcher) {
    return undefined;
  }

  return invalidMatcher.errorMessage || true;
};

export default ({ validations = [], required }) => {
  let matchers = [];

  if (required) {
    matchers = matchers.concat(getMatcher('required'));
  }

  validations.forEach((validation) => {
    if (validation && typeof validation === 'string') {
      const validationMatchers = getMatcher(validation);

      matchers = matchers.concat(validationMatchers);
    } else if (validation && typeof validation === 'object') {
      const validationMatchers = Object.keys(validation).map(
        ruleName => getMatcher(ruleName, validation[ruleName]),
      );

      matchers = matchers.concat(validationMatchers);
    } else if (validations) {
      console.error('validations needs to be an array of type [\'rule\'] or [{ ruleName: \'errorMessage\' }]');
    }
  });

  return createValidate(matchers);
};
