import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage - Base class for all page objects
 * Contains reusable Playwright methods shared across all pages
 */
export class BasePage {

  /**
   * @param page - Playwright Page instance
   */
  constructor(protected page: Page) {}

  /**
   * Navigates to a specific URL
   * @param url - The URL to navigate to
   */
  async navigate(url: string) {
    await this.page.goto(url);
  }

  /**
   * Returns the current page title
   * @returns Page title as string
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Returns the current page URL
   * @returns Current URL as string
   */
  async getURL(): Promise<string> {
    return this.page.url();
  }

  /**
   * Waits for the page to fully load
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Clicks on an element by selector
   * @param selector - CSS selector of the element
   */
  async click(selector: string) {
    await this.page.click(selector);
  }

  /**
   * Fills a text input field
   * @param selector - CSS selector of the input field
   * @param value - Text to fill in
   */
  async fill(selector: string, value: string) {
    await this.page.fill(selector, value);
  }

  /**
   * Returns text content of an element
   * @param selector - CSS selector of the element
   * @returns Text content as string
   */
  async getText(selector: string): Promise<string | null> {
    return await this.page.textContent(selector);
  }

  /**
   * Checks if an element is visible on the page
   * @param selector - CSS selector of the element
   * @returns True if visible, false otherwise
   */
  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }

  /**
   * Checks if an element is enabled
   * @param selector - CSS selector of the element
   * @returns True if enabled, false otherwise
   */
  async isEnabled(selector: string): Promise<boolean> {
    return await this.page.isEnabled(selector);
  }

  /**
   * Waits for an element to be visible
   * @param selector - CSS selector of the element
   */
  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  /**
   * Takes a screenshot of the current page
   * @param name - Name of the screenshot file
   */
  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  /**
   * Scrolls to an element on the page
   * @param selector - CSS selector of the element
   */
  async scrollToElement(selector: string) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  /**
   * Selects an option from a dropdown
   * @param selector - CSS selector of the dropdown
   * @param value - Value to select
   */
  async selectOption(selector: string, value: string) {
    await this.page.selectOption(selector, value);
  }

  /**
   * Hovers over an element
   * @param selector - CSS selector of the element
   */
  async hover(selector: string) {
    await this.page.hover(selector);
  }

  /**
   * Presses a keyboard key
   * @param key - Key to press e.g. 'Enter', 'Tab', 'Escape'
   */
  async pressKey(key: string) {
    await this.page.keyboard.press(key);
  }

  /**
   * Asserts that page has expected URL
   * @param url - Expected URL
   */
  async expectURL(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  /**
   * Asserts that page has expected title
   * @param title - Expected title or pattern
   */
  async expectTitle(title: string | RegExp) {
    await expect(this.page).toHaveTitle(title);
  }

  /**
   * Asserts that element is visible
   * @param selector - CSS selector of the element
   */
  async expectVisible(selector: string) {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  /**
   * Asserts that element contains expected text
   * @param selector - CSS selector of the element
   * @param text - Expected text
   */
  async expectText(selector: string, text: string) {
    await expect(this.page.locator(selector)).toContainText(text);
  }
}