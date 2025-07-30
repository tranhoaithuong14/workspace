export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  APP_NAME: process.env.REACT_APP_APP_NAME || 'React SPA',
  VERSION: process.env.REACT_APP_VERSION || '1.0.0',
  GA_TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID || '',
  SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN || '',
  FEATURE_NEW_DASHBOARD:
    process.env.REACT_APP_FEATURE_NEW_DASHBOARD === 'true',
  FEATURE_EXPERIMENTAL: process.env.REACT_APP_FEATURE_EXPERIMENTAL === 'true',
} as const;

export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';
export const isTest = env.NODE_ENV === 'test';