import { test, expect } from '@playwright/test';

const VALID_USERNAME = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';
const INVALID_PASSWORD = 'senha_errada';

test('login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill(VALID_USERNAME);
  await page.getByPlaceholder('Password').fill(VALID_PASSWORD);
  await page.locator('#login-button').click();
  await expect(page.getByText('Products')).toBeVisible();
});

test('login com senha errada deve mostrar mensagem de erro', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill(VALID_USERNAME);
  await page.getByPlaceholder('Password').fill(INVALID_PASSWORD);
  await page.locator('#login-button').click();
  await expect(page.getByText('Epic sadface')).toBeVisible();
});