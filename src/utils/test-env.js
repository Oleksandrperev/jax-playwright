/**
 * Returns the base URL for tests based on ENV.
 */
function getBaseUrl() {
  const env = (process.env.ENV || 'qa').toLowerCase();
  let url;

  switch (env) {
    case 'prod':
      url = process.env.BASE_URL_PROD;
      break;

    case 'staging':
      url = process.env.BASE_URL_STAGING;
      break;

    case 'qa':
      url = process.env.BASE_URL_QA;
      break;

    case 'dev':
      url = process.env.BASE_URL_DEV;
      break;

    default:
      throw new Error(`Unknown ENV value: ${env}`);
  }

  if (!url) {
    throw new Error(`Base URL not defined for ENV=${env}`);
  }

  console.log(`Running tests in "${env}" environment: ${url}`);
  return url;
}

module.exports = { getBaseUrl };
