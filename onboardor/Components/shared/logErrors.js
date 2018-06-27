/* eslint-disable no-console */
/* eslint-disable no-undef */

/**
 * A function that abstracts Raven to log any errors that occur
 * @param {(Error|Error[])} errors - One or more errors that have occured
 * @param {Object?} stackTrace - The error stacktrace
 */
export default (errors, stackTrace) => {
  if (errors !== undefined) {
    const errorMessage = 'An error occurred';

    console.error(errorMessage, errors);

    if (typeof (Raven) !== 'undefined') {
      Raven.captureMessage(errorMessage, { errors, stackTrace });
    }
  }
};
