const raven = (window as any).Raven;

if (typeof raven !== 'undefined' && process.env.SENTRY_DSN_CLIENT) {
  raven.config(process.env.SENTRY_DSN_CLIENT, {
    environment: process.env.NODE_ENV,
  }).install();
}
