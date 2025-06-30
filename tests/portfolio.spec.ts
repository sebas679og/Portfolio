import { test, expect } from '@playwright/test';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';

test('Personal information visibility test', async ({ page }) => {
  await page.goto('/');
  const email = page.getByText(en.t004);

  if (!(await email.isVisible())) {
    const showContacts = page.getByRole('button', { name: en.t003 });
    if (await showContacts.isVisible()) {
      await showContacts.click();
    } else {
      const toggleIcon = page.getByRole('button', { name: /chevron down/i });
      await toggleIcon.click();
    }
  }

  await expect(page.getByRole('img', { name: 'Sebastian Orjuela' })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t001 })).toBeVisible();
  await expect(page.getByText( en.t002 )).toBeVisible();
  await expect(page.getByRole('button', { name: 'ES' })).toBeVisible();
  await expect(page.getByText( en.t004 )).toBeVisible();
  await expect(page.getByRole('link', { name: en.t005 })).toBeVisible();
  await expect(page.getByText( en.t006, { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: en.t007 })).toBeVisible();
  await expect(page.getByText( en.t008 )).toBeVisible();
  await expect(page.getByText( en.t009 )).toBeVisible();
  await expect(page.getByRole('paragraph').filter({ hasText: en.t010 })).toBeVisible();
  await expect(page.getByText( en.t011 )).toBeVisible();
  await expect(page.getByRole('link', { name: 'logo github' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'logo linkedin' })).toBeVisible();
});


test('Personal Information Visibility Test in Spanish', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'ES' }).click();

  const viewport = page.viewportSize();
  const isMobile = (viewport ? viewport.width : 1024) < 768;

  await expect(page.getByRole('heading', { name: es.t001 })).toBeVisible();

  const emailLabel = page.getByText(es.t004, { exact: true }).first();

  if (!(await emailLabel.isVisible())) {
    const showContacts = page.getByRole('button', { name: es.t003 });

    if (await showContacts.isVisible()) {
      await showContacts.click();
    } else if (isMobile) {
      const toggleIcon = page.getByRole('button', { name: /chevron down/i });
      await toggleIcon.first().click();
    }
  }

  await expect(page.getByText( es.t002 )).toBeVisible();
  await expect(page.getByRole('button', { name: 'EN' })).toBeVisible();
  await expect(emailLabel).toBeVisible();
  await expect(page.getByRole('link', { name: es.t005 })).toBeVisible();
  await expect(page.getByText(es.t006, { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: es.t007 })).toBeVisible();
  await expect(page.getByText(es.t008)).toBeVisible();
  await expect(page.getByText(es.t009)).toBeVisible();
  await expect(page.getByRole('paragraph').filter({ hasText: es.t010 })).toBeVisible();
  await expect(page.getByText(es.t011)).toBeVisible();
  await expect(page.getByRole('link', { name: 'logo github' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'logo linkedin' })).toBeVisible();
});


test('About me visibility test', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText(en.t012, { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t016 })).toBeVisible();
  await expect(page.getByText(en.t017)).toBeVisible();
  await expect(page.getByText(en.t018)).toBeVisible();
  await expect(page.getByText(en.t019)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t020 })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t021 })).toBeVisible();
  await expect(page.getByText(en.t022)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t023 })).toBeVisible();
  await expect(page.getByText(en.t024)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t025 })).toBeVisible();
  await expect(page.getByText(en.t026)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t027 })).toBeVisible();
  await expect(page.getByText(en.t028)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t029 })).toBeVisible();
  await expect(page.getByText(en.t030)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t031 })).toBeVisible();
  await expect(page.getByText(en.t032)).toBeVisible();
});


test('About me visibility test in Spanish', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'ES' }).click();
  await expect(page.getByRole('navigation').getByText(es.t012)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t016 })).toBeVisible();
  await expect(page.getByText(es.t017)).toBeVisible();
  await expect(page.getByText(es.t018)).toBeVisible();
  await expect(page.getByText(es.t019)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t020 })).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t021 })).toBeVisible();
  await expect(page.getByText(es.t022)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t023 })).toBeVisible();
  await expect(page.getByText(es.t024)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t025 })).toBeVisible();
  await expect(page.getByText(es.t026)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t027 })).toBeVisible();
  await expect(page.getByText(es.t028)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t029 })).toBeVisible();
  await expect(page.getByText(es.t030)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t031 })).toBeVisible();
  await expect(page.getByText(es.t032)).toBeVisible();
});
