import { test, expect } from '@playwright/test';

test.describe('E2E - Shopping Flow', () => {

  test.beforeEach(async ({ page }) => {
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
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  });

  test('should complete full checkout', async ({ page }) => {
    // Add product to cart
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link');

    // Verify cart
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.cart_item')).toBeVisible();

    // Checkout
    await page.click('#checkout');
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Tester');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');

    // Confirm order
    await page.click('#finish');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

});