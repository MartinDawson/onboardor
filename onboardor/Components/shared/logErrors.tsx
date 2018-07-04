export default (errors: (Error | Error[]), stackTrace?: object) => {
  if (errors !== undefined) {
    if (typeof ((window as any).Raven) !== "undefined") {
      (window as any).Raven.captureMessage("An error occurred", { errors, stackTrace });
    }

    throw errors;
  }
};
