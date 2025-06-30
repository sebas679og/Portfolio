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


test('Visibility tests resume', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation').getByText(en.t013)).toBeVisible();
  await page.getByRole('navigation').getByText(en.t013).click();
  await expect(page.getByRole('heading', { name: en.t033 })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t034 })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t035 })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: en.t035 }).locator('h5')).toBeVisible();
  await expect(page.getByText(en.t037)).toBeVisible();
  await expect(page.getByText(en.t038)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t039 })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: en.t039 }).locator('h5')).toBeVisible();
  await expect(page.getByText(en.t041)).toBeVisible();
  await expect(page.getByText(en.t042)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t043 })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t044 })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t045 })).toBeVisible();
  await expect(page.getByText(en.t046)).toBeVisible();
  await expect(page.getByText(en.t047)).toBeVisible();
  await expect(page.getByRole('link', { name: en.t102 })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t048 })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t049 })).toBeVisible();
  await expect(page.getByText(en.t050, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t051, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t052)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t054, exact: true })).toBeVisible();
  await expect(page.getByText(en.t055)).toBeVisible();
  await expect(page.getByText(en.t056)).toBeVisible();
  await expect(page.getByText(en.t057)).toBeVisible();
  await expect(page.getByText(en.t058)).toBeVisible();
  await expect(page.getByText(en.t059)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t060 })).toBeVisible();
  await expect(page.getByText(en.t061, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t062, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t063, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t064, { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t065 })).toBeVisible();
  await expect(page.getByText(en.t066, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t067, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t068)).toBeVisible();
  await expect(page.getByText(en.t069)).toBeVisible();
  await expect(page.getByText(en.t070)).toBeVisible();
  await expect(page.getByText(en.t071)).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t072 })).toBeVisible();
  await expect(page.getByText(en.t073, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t074, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t075)).toBeVisible();
  await expect(page.getByText(en.t076)).toBeVisible();
  await expect(page.getByText(en.t077)).toBeVisible();
});


test('Visibility tests resume in Spanish', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'ES' }).click();
  await expect(page.getByRole('navigation').getByText(es.t013)).toBeVisible();
  await page.getByRole('navigation').getByText(es.t013).click();
  await expect(page.getByRole('heading', { name: es.t033 })).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t034 })).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t035 })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: es.t035 }).locator('h5')).toBeVisible();
  await expect(page.getByText(es.t037)).toBeVisible();
  await expect(page.getByText(es.t038)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t039 })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: es.t039 }).locator('h5')).toBeVisible();
  await expect(page.getByText(es.t041)).toBeVisible();
  await expect(page.getByText(es.t042)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t043 })).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t044 })).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t045 })).toBeVisible();
  await expect(page.getByText(es.t046)).toBeVisible();
  await expect(page.getByText(es.t047)).toBeVisible();
  await expect(page.getByRole('link', { name: es.t102 })).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t048 })).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t049 })).toBeVisible();
  await expect(page.getByText(es.t050, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t051, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t052)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t054, exact: true })).toBeVisible();
  await expect(page.getByText(es.t055)).toBeVisible();
  await expect(page.getByText(es.t056)).toBeVisible();
  await expect(page.getByText(es.t057)).toBeVisible();
  await expect(page.getByText(es.t058)).toBeVisible();
  await expect(page.getByText(es.t059)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t060 })).toBeVisible();
  await expect(page.getByText(es.t061, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t062, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t063, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t064, { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t065 })).toBeVisible();
  await expect(page.getByText(es.t066, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t067, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t068)).toBeVisible();
  await expect(page.getByText(es.t069)).toBeVisible();
  await expect(page.getByText(es.t070)).toBeVisible();
  await expect(page.getByText(es.t071)).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t072 })).toBeVisible();
  await expect(page.getByText(es.t073, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t074, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t075)).toBeVisible();
  await expect(page.getByText(es.t076)).toBeVisible();
  await expect(page.getByText(es.t077)).toBeVisible();
});