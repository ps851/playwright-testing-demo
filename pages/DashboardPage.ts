import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * DashboardPage - Page Object Model for the Secure/Dashboard page
 * Handles all interactions and assertions after successful login
 * @url https://the-internet.herokuapp.com/secure
 */
export class DashboardPage extends BasePage {

  // Selectors
  private logoutButton = 'a.button';
  private successMessage = '#flash.success';
  private pageHeading = 'h2';

  /**
   * @param page - Playwright Page instance
   */
  constructor(page: Page) {
    super(page);
  }

  /**
   * Verifies user is logged in by checking logout button is visible
   */
  async expectLoggedIn() {
    // Verify logout button is present which confirms successful login
    await this.expectVisible(this.logoutButton);
  }

  /**
   * Verifies logout button contains correct text
   */
  async expectLogoutButtonText() {
    await this.expectText(this.logoutButton, 'Logout');
  }

  /**
   * Verifies success message is visible after login
   */
  async expectSuccessMessageVisible() {
    await this.expectVisible(this.successMessage);
  }

  /**
   * Verifies page heading text
   * @param text - Expected heading text
   */
  async expectHeading(text: string) {
    await this.expectText(this.pageHeading, text);
  }

  /**
   * Performs logout by clicking the logout button
   */
  async logout() {
    await this.click(this.logoutButton);
  }

  /**
   * Verifies user is redirected to login page after logout
   */
  async expectLoggedOut() {
    await this.expectURL('https://the-internet.herokuapp.com/login');
  }
}