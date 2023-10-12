import { test, expect } from '@playwright/test';

// //перед прогоном тестов, необходимо заменить пароли: 
// {{root_password}}
// {{admin_password}}
// {{user_password}} //

test('login using correct username and password', async ({ page }) => {
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/');
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/signin');
  await page.getByPlaceholder('firstname.lastname@mail.com').click();
  await page.getByPlaceholder('firstname.lastname@mail.com').click();
  await page.getByPlaceholder('firstname.lastname@mail.com').fill('root@platformeco.tech');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('{{root_password}}');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/organizations/cjebnd2gimfs73begn5g');
});


test('login using uncorrect username and password', async ({ page }) => {
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/');
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/signin');
  await page.getByPlaceholder('firstname.lastname@mail.com').click();
  await page.getByPlaceholder('firstname.lastname@mail.com').fill('nastyazhivtsova@gmail.com');
  await page.getByPlaceholder('firstname.lastname@mail.com').press('Enter');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('qqqqqqqqqqq');
  await page.getByRole('button', { name: 'Proceed' }).click();
});

test('login SSO', async ({ page }) => {
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/');
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/signin');
  await page.getByPlaceholder('firstname.lastname@mail.com').click();
  await page.getByPlaceholder('firstname.lastname@mail.com').fill('Anastasiya.Zhivtsova@leroymerlin.ru');
  await page.getByPlaceholder('firstname.lastname@mail.com').press('Enter');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('LDAP или email').click();
  await page.getByLabel('LDAP или email').fill('60121588');
  await page.getByLabel('LDAP или email').press('Tab');
  await page.getByLabel('Пароль').fill('{{user_password}}');
  await page.getByTestId('button').click();
  await page.getByRole('button', { name: 'АЖ' }).click();
});


test('registration SSO', async ({ page }) => {
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/');
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/signin');
  await page.getByPlaceholder('firstname.lastname@mail.com').fill('Anastasiya.Zhivtsova@leroymerlin.ru');
  await page.getByPlaceholder('firstname.lastname@mail.com').click();
  await page.getByTestId('Anastasiya.Zhivtsova@leroymerlin.ru').fill('Anastasiya.Zhivtsova+2@leroymerlin.ru');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('LDAP или email').click();
  await page.getByLabel('LDAP или email').fill('60121588');
  await page.getByLabel('LDAP или email').press('Tab');
  await page.getByLabel('Пароль').fill('{{user_password}}');
  await page.getByTestId('button').click();
});

test('registration already exist email', async ({ page }) => {
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/');
  await page.goto('https://platformeco-control-plane-stage-dev.platformeco.lmru.tech/signin');
  await page.getByRole('link', { name: 'Register now' }).click();
  await page.getByPlaceholder('firstname.lastname@mail.com').click();
  await page.getByPlaceholder('firstname.lastname@mail.com').fill('nastyazhivtsova@gmail.com');
  await page.getByPlaceholder('firstname.lastname@mail.com').press('Tab');
  await page.locator('input[name="name"]').fill('Anastasiia');
  await page.locator('input[name="name"]').press('Tab');
  await page.locator('input[name="password"]').fill('Platformeco');
  await page.locator('input[name="password"]').press('Tab');
  await page.locator('input[name="password_confirmation"]').fill('Platformeco');
  await page.getByRole('button', { name: 'Register' }).click();
});



