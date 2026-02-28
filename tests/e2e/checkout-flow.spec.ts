import { test, expect } from '@playwright/test';

/**
 * E2E Tests - Full Shopping Flow
 * Tests complete user journey from login to order completion
 * @site https://www.saucedemo.com
 * @credentials valid: standard_user / secret_sauce
 */
test.describe('E2E - Shopping Flow', () => {

  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  });

  test('should login and see products', async ({ page }) => {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('should add product to cart', async ({ page }) => {
    await page.click('#add-to-cart-sauce-labs-backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('should complete full checkout', async ({ page }) => {
    await test.step('Add product to cart', async () => {
      await page.click('#add-to-cart-sauce-labs-backpack');
      await page.click('.shopping_cart_link');
    });

    await test.step('Verify cart contents', async () => {
      await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
      await expect(page.locator('.cart_item')).toBeVisible();
    });

    await test.step('Fill in checkout information', async () => {
      await page.click('#checkout');
      await page.fill('#first-name', 'John');
      await page.fill('#last-name', 'Tester');
      await page.fill('#postal-code', '12345');
      await page.click('#continue');
    });

    await test.step('Confirm and finish order', async () => {
      await page.click('#finish');
      await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    });
  });

});