// login test
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/pages/login-page')
const { HomePage } = require('../src/pages/home-page')

// Read credentials from environment variables
const USER_EMAIL = process.env.USER_EMAIL;
const USER_PASSWORD = process.env.USER_PASSWORD;
const username = 'oleksandr.perev';

test('Smoke Test - user can login with valid credentials', async ({ page }) => {
  // Skip this test if credentials are not provided
  test.skip(
    !USER_EMAIL || !USER_PASSWORD,
    'Set USER_EMAIL, USER_PASSWORD in .env to run this test.'
  );

  const loginPage = new LoginPage(page);

  // navigate to Jax login page
  await loginPage.goto();

  // Verify that login form is visible and complete login with MFA
  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();

  const homePage = await loginPage.login(
    USER_EMAIL, 
    USER_PASSWORD);
    
    await expect(homePage.globalSearch).toBeVisible();
    await expect(homePage.userMenuByText(username)).toBeVisible();

    const actualUsername = await homePage.getDisplayedUsername();
    expect(actualUsername).toBe(username);

    });