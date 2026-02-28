import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {

  test('should load login page', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await expect(page).toHaveTitle(/demosite/);
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('#userName', 'testuser');
    await page.fill('#password', 'Test@1234');
    await page.click('#login');
    await expect(page.locator('#userName-value')).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('#userName', 'wronguser');
    await page.fill('#password', 'wrongpassword');
    await page.click('#login');
    await expect(page.locator('p.mb-1')).toBeVisible();
  });

});