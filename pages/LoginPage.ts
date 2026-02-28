import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * LoginPage - Page Object Model for the Login page
 * Handles all interactions and assertions on the login page
 * @url https://the-internet.herokuapp.com/login
 * @credentials valid: tomsmith / SuperSecretPassword!
 */
export class LoginPage extends BasePage {

  // Selectors
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = 'button[type="submit"]';
  private errorMessage = '#flash.error';
  private pageHeading = 'h2';

  /**
   * @param page - Playwright Page instance
   */
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigates to the login page
   */
  async goto() {
    await this.navigate('https://the-internet.herokuapp.com/login');
  }

  /**
   * Performs login with provided credentials
   * @param username - The username to login with
   * @param password - The password to login with
   */
  async login(username: string, password: string) {
    // Fill in credentials using BasePage fill method
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);

    // Submit the login form
    await this.click(this.loginButton);
  }

  /**
   * Verifies all required elements are present on the login page
   */
  async verifyPageElements() {
    // Verify page heading
    await this.expectText(this.pageHeading, 'Login Page');

    // Verify input fields are visible
    await this.expectVisible(this.usernameInput);
    await this.expectVisible(this.passwordInput);

    // Verify login button is visible
    await this.expectVisible(this.loginButton);
  }

  /**
   * Asserts that an error message is visible on the page
   * Used for negative test scenarios
   */
  async expectErrorVisible() {
    await this.expectVisible(this.errorMessage);
  }

  /**
   * Asserts error message contains expected text
   * @param text - Expected error text
   */
  async expectErrorText(text: string) {
    await this.expectText(this.errorMessage, text);
  }

  /**
   * Asserts that login was successful by checking the URL
   */
  async expectLoginSuccess() {
    await this.expectURL('https://the-internet.herokuapp.com/secure');
  }
}