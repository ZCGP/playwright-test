import { test, expect } from '@playwright/test';

test('record demo test', async ({ page }) => {

  await page.locator('body').click();

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="login-credentials"]').dblclick();

  await page.locator('[data-test="login-credentials"]').click();

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('st');

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('standard');

  await page.locator('[data-test="username"]').press('Enter');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button123"]').click();
  
  await page.getByRole('button', { name: 'Open Menu' }).click();
});