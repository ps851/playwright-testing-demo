import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

/**
 * Login Tests using Page Object Model
 * Demonstrates POM pattern for cleaner and more maintainable tests
 * @site https://the-internet.herokuapp.com/login
 * @credentials valid: tomsmith / SuperSecretPassword!
 */
test.describe('Login Tests with POM', () => {

  test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.expectLoginSuccess();
    await dashboardPage.expectLoggedIn();
  });

  test('should show error with wrong credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wronguser', 'wrongpassword');
    await loginPage.expectErrorVisible();
    await loginPage.expectErrorText('Your username is invalid');
  });

  test('should verify all elements on login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.verifyPageElements();
  });

  test('should logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await dashboardPage.expectLoggedIn();
    await dashboardPage.logout();
    await dashboardPage.expectLoggedOut();
  });

});