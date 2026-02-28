import { test, expect } from '@playwright/test';

/**
 * Negative Tests - Login Page
 * Validates error handling and security on the login page
 * @site https://the-internet.herokuapp.com/login
 */
test.describe('Negative Tests - Login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
  });

  test('should fail with empty username', async ({ page }) => {
    await page.fill('#password', 'somepassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('#flash.error')).toContainText('Your username is invalid');
  });

  test('should fail with empty password', async ({ page }) => {
    await page.fill('#username', 'tomsmith');
    await page.click('button[type="submit"]');
    await expect(page.locator('#flash.error')).toContainText('Your password is invalid');
  });

  test('should fail with correct username but wrong password', async ({ page }) => {
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('#flash.error')).toContainText('Your password is invalid');
  });

  test('should fail with SQL injection attempt', async ({ page }) => {
    // Security test - ensures SQL injection does not bypass authentication
    await page.fill('#username', "' OR '1'='1");
    await page.fill('#password', "' OR '1'='1");
    await page.click('button[type="submit"]');
    await expect(page.locator('#flash.error')).toBeVisible();
  });

  test('should fail with very long username', async ({ page }) => {
    // Boundary test - ensures application handles extremely long inputs
    const longUsername = 'a'.repeat(500);
    await page.fill('#username', longUsername);
    await page.fill('#password', 'somepassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('#flash.error')).toBeVisible();
  });

});