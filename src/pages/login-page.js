const { HomePage } = require('./home-page');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password')
    this.loginButton = page.locator('#Login');
  }

  async goto() {
    await this.page.goto('login');
    await this.page.waitForLoadState('networkidle');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    return new HomePage(this.page);
  }
}

module.exports = { LoginPage };