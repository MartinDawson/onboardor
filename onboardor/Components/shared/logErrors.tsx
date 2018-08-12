
export default (error: (Error | Error[])) => {
  if (error !== undefined) {
    const raven = (window as any).Raven;
    const errors = Array.isArray(error) ? error : [error];

    errors.forEach((error) => {
      if (typeof (raven) !== "undefined") {
        raven.captureMessage(error.message, { stackTrace: error.stack });
      }
    });
  }
};
