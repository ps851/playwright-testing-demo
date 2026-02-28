import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = 'button[type="submit"]';
  private errorMessage = '#flash.error';
  private successMessage = '#flash.success';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('https://the-internet.herokuapp.com/login');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async expectErrorVisible() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }

async expectLoginSuccess() {
  await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/secure');
}
}