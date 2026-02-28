import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {

  test('should load login page', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page).toHaveTitle(/The Internet/);
  });

  test('should have all required elements on login page', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    
    // Check heading is visible
    await expect(page.locator('h2')).toHaveText('Login Page');
    
    // Check username field is visible
    await expect(page.locator('#username')).toBeVisible();
    
    // Check password field is visible
    await expect(page.locator('#password')).toBeVisible();
    
    // Check login button is visible
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
    // Check button text
    await expect(page.locator('button[type="submit"]')).toContainText('Login');
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('#flash.error')).toBeVisible();
    await expect(page.locator('#flash.error')).toContainText('Your username is invalid');
  });

  test('should have logout button after login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('a.button')).toBeVisible();
    await expect(page.locator('a.button')).toContainText('Logout');
  });

  test('should logout successfully', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await page.click('a.button');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
  });

});