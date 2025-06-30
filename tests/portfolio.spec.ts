import { test, expect } from '@playwright/test';

test('Personal information visibility test', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('img', { name: 'Sebastian Orjuela' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sebastian Orjuela' })).toBeVisible();
  await expect(page.getByText('Backend developer')).toBeVisible();
  await expect(page.getByRole('button', { name: 'ES' })).toBeVisible();
  await expect(page.getByText('Email')).toBeVisible();
  await expect(page.getByRole('link', { name: 'sebastianorjuelagiraldo@gmail.com' })).toBeVisible();
  await expect(page.getByText('Phone', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: '+57 (314) 510 9114' })).toBeVisible();
  await expect(page.getByText('Birthday')).toBeVisible();
  await expect(page.getByText('November 13,')).toBeVisible();
  await expect(page.getByRole('paragraph').filter({ hasText: 'Location' })).toBeVisible();
  await expect(page.getByText('Samaná, Caldas, Colombia')).toBeVisible();
  await expect(page.getByRole('link', { name: 'logo github' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'logo linkedin' })).toBeVisible();
});