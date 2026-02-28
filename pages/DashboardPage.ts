import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  private userNameValue = '.main-header';

  constructor(page: Page) {
    super(page);
  }

  async expectLoggedIn() {
    await expect(this.page.locator(this.userNameValue)).toBeVisible();
  }
}