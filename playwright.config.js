require('dotenv').config(); // Load variables from .env

const { defineConfig } = require('@playwright/test');
const { getBaseUrl } = require('./src/utils/test-env');


module.exports = defineConfig({
  // Folder where test files are located
  testDir: './tests',

  use: {
    headless: true, // Run browser without UI
    baseURL: getBaseUrl(),
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['list'],          // console output
    ['html', { open: 'never' }]  // always generate HTML report
  ],
});
