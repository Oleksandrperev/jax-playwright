class HomePage {

  constructor(page) {
    this.page = page;
    this.globalSearch = page.getByPlaceholder(/search from here/i);
    this.userMenuByText = (username) => page.getByText(username, { exact: false });
    this.userNameLabel = page.locator('span.profileName'); 
  }

  async getDisplayedUsername() {
    return (await this.userNameLabel.textContent());
  }

}

module.exports = { HomePage };