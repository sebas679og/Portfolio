import { test, expect } from '@playwright/test';

test('Personal information visibility test', async ({ page }) => {
  await page.goto('/');
  const email = page.getByText('Email');

  if (!(await email.isVisible())) {
    const showContacts = page.getByRole('button', { name: /show contacts/i });
    if (await showContacts.isVisible()) {
      await showContacts.click();
    } else {
      const toggleIcon = page.getByRole('button', { name: /chevron down/i });
      await toggleIcon.click();
    }
  }

  await expect(page.getByRole('img', { name: 'Sebastian Orjuela' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sebastian Orjuela' })).toBeVisible();
  await expect(page.getByText('Backend developer')).toBeVisible();
  await expect(page.getByRole('button', { name: 'ES' })).toBeVisible();
  await expect(page.getByText('Email')).toBeVisible();
  await expect(page.getByRole('link', { name: 'sebastianorjuelagiraldo@gmail.com' })).toBeVisible();
  await expect(page.getByText('Phone', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: '+57 (314) 510 9114' })).toBeVisible();
  await expect(page.getByText('Birthday')).toBeVisible();
  await expect(page.getByText('November 13, 2005')).toBeVisible();
  await expect(page.getByRole('paragraph').filter({ hasText: 'Location' })).toBeVisible();
  await expect(page.getByText('Samaná, Caldas, Colombia')).toBeVisible();
  await expect(page.getByRole('link', { name: 'logo github' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'logo linkedin' })).toBeVisible();
});


test('Personal Information Visibility Test in Spanish', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'ES' }).click();

  const viewport = page.viewportSize();
  const isMobile = (viewport ? viewport.width : 1024) < 768;

  await expect(page.getByRole('heading', { name: 'Sebastian Orjuela' })).toBeVisible();

  const emailLabel = page.getByText('Correo', { exact: true }).first();

  if (!(await emailLabel.isVisible())) {
    const showContacts = page.getByRole('button', { name: /mostrar contactos/i });

    if (await showContacts.isVisible()) {
      await showContacts.click();
    } else if (isMobile) {
      const toggleIcon = page.getByRole('button', { name: /chevron down/i });
      await toggleIcon.first().click();
    }
  }


  await expect(page.getByText('Desarrollador Backend')).toBeVisible();
  await expect(page.getByRole('button', { name: 'EN' })).toBeVisible();
  await expect(emailLabel).toBeVisible();
  await expect(page.getByRole('link', { name: 'sebastianorjuelagiraldo@gmail.com' })).toBeVisible();
  await expect(page.getByText('Teléfono', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: '+57 (314) 510 9114' })).toBeVisible();
  await expect(page.getByText('Cumpleaños')).toBeVisible();
  await expect(page.getByText('13 de noviembre')).toBeVisible();
  await expect(page.getByText('Samaná, Caldas, Colombia')).toBeVisible();
});
