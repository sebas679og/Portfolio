import { test, expect } from "@playwright/test";
import en from "../assets/i18n/en.json";
import es from "../assets/i18n/es.json";

test("Personal information visibility test", async ({ page }) => {
  await page.goto("/");
  const email = page.getByText(en.t004);

  if (!(await email.isVisible())) {
    const showContacts = page.getByRole("button", { name: en.t003 });
    if (await showContacts.isVisible()) {
      await showContacts.click();
    } else {
      const toggleIcon = page.getByRole("button", { name: /chevron down/i });
      await toggleIcon.click();
    }
  }

  await expect(
    page.getByRole("img", { name: "Sebastian Orjuela" })
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t001 })).toBeVisible();
  await expect(page.getByText(en.t002)).toBeVisible();
  await expect(page.getByRole("button", { name: "ES" })).toBeVisible();
  await expect(page.getByText(en.t004)).toBeVisible();
  await expect(page.getByRole("link", { name: en.t005 })).toBeVisible();
  await expect(page.getByText(en.t006, { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: en.t007 })).toBeVisible();
  await expect(page.getByText(en.t008)).toBeVisible();
  await expect(page.getByText(en.t009)).toBeVisible();
  await expect(
    page.getByRole("paragraph").filter({ hasText: en.t010 })
  ).toBeVisible();
  await expect(page.getByText(en.t011)).toBeVisible();
  await expect(page.getByRole("link", { name: "logo github" })).toBeVisible();
  await expect(page.getByRole("link", { name: "logo linkedin" })).toBeVisible();
});

test("Personal Information Visibility Test in Spanish", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "ES" }).click();

  const viewport = page.viewportSize();
  const isMobile = (viewport ? viewport.width : 1024) < 768;

  await expect(page.getByRole("heading", { name: es.t001 })).toBeVisible();

  const emailLabel = page.getByText(es.t004, { exact: true }).first();

  if (!(await emailLabel.isVisible())) {
    const showContacts = page.getByRole("button", { name: es.t003 });

    if (await showContacts.isVisible()) {
      await showContacts.click();
    } else if (isMobile) {
      const toggleIcon = page.getByRole("button", { name: /chevron down/i });
      await toggleIcon.first().click();
    }
  }

  await expect(page.getByText(es.t002)).toBeVisible();
  await expect(page.getByRole("button", { name: "EN" })).toBeVisible();
  await expect(emailLabel).toBeVisible();
  await expect(page.getByRole("link", { name: es.t005 })).toBeVisible();
  await expect(page.getByText(es.t006, { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: es.t007 })).toBeVisible();
  await expect(page.getByText(es.t008)).toBeVisible();
  await expect(page.getByText(es.t009)).toBeVisible();
  await expect(
    page.getByRole("paragraph").filter({ hasText: es.t010 })
  ).toBeVisible();
  await expect(page.getByText(es.t011)).toBeVisible();
  await expect(page.getByRole("link", { name: "logo github" })).toBeVisible();
  await expect(page.getByRole("link", { name: "logo linkedin" })).toBeVisible();
});

test("About me visibility test", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(en.t012, { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t016 })).toBeVisible();
  await expect(page.getByText(en.t017)).toBeVisible();
  await expect(page.getByText(en.t018)).toBeVisible();
  await expect(page.getByText(en.t019)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t020 })).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t021 })).toBeVisible();
  await expect(page.getByText(en.t022)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t023 })).toBeVisible();
  await expect(page.getByText(en.t024)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t025 })).toBeVisible();
  await expect(page.getByText(en.t026)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t027 })).toBeVisible();
  await expect(page.getByText(en.t028)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t029 })).toBeVisible();
  await expect(page.getByText(en.t030)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t031 })).toBeVisible();
  await expect(page.getByText(en.t032)).toBeVisible();
});

test("About me visibility test in Spanish", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "ES" }).click();
  await expect(page.getByRole("navigation").getByText(es.t012)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t016 })).toBeVisible();
  await expect(page.getByText(es.t017)).toBeVisible();
  await expect(page.getByText(es.t018)).toBeVisible();
  await expect(page.getByText(es.t019)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t020 })).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t021 })).toBeVisible();
  await expect(page.getByText(es.t022)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t023 })).toBeVisible();
  await expect(page.getByText(es.t024)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t025 })).toBeVisible();
  await expect(page.getByText(es.t026)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t027 })).toBeVisible();
  await expect(page.getByText(es.t028)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t029 })).toBeVisible();
  await expect(page.getByText(es.t030)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t031 })).toBeVisible();
  await expect(page.getByText(es.t032)).toBeVisible();
});

test("Visibility tests resume", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("navigation").getByText(en.t013)).toBeVisible();
  await page.getByRole("navigation").getByText(en.t013).click();
  await expect(page.getByRole("heading", { name: en.t033 })).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t034 })).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t035 })).toBeVisible();
  await expect(
    page.getByRole("listitem").filter({ hasText: en.t035 }).locator("h5")
  ).toBeVisible();
  await expect(page.getByText(en.t037)).toBeVisible();
  await expect(page.getByText(en.t038)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t039 })).toBeVisible();
  await expect(
    page.getByRole("listitem").filter({ hasText: en.t039 }).locator("h5")
  ).toBeVisible();
  await expect(page.getByText(en.t041)).toBeVisible();
  await expect(page.getByText(en.t042)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t043 })).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t044 })).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t045 })).toBeVisible();
  await expect(page.getByText(en.t046)).toBeVisible();
  await expect(page.getByText(en.t047)).toBeVisible();
  await expect(page.getByRole("link", { name: en.t102 })).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t048 })).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t049 })).toBeVisible();
  await expect(page.getByText(en.t050, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t051, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t052)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.t054, exact: true })
  ).toBeVisible();
  await expect(page.getByText(en.t055)).toBeVisible();
  await expect(page.getByText(en.t056)).toBeVisible();
  await expect(page.getByText(en.t203)).toBeVisible();
  await expect(page.getByText(en.t057)).toBeVisible();
  await expect(page.getByText(en.t058)).toBeVisible();
  await expect(page.getByText(en.t059)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t060 })).toBeVisible();
  await expect(page.getByText(en.t061, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t062, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t063, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t064, { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t065 })).toBeVisible();
  await expect(page.getByText(en.t066, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t067, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t068)).toBeVisible();
  await expect(page.getByText(en.t069)).toBeVisible();
  await expect(page.getByText(en.t070)).toBeVisible();
  await expect(page.getByText(en.t071)).toBeVisible();
  await expect(page.getByRole("heading", { name: en.t072 })).toBeVisible();
  await expect(page.getByText(en.t073, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t074, { exact: true })).toBeVisible();
  await expect(page.getByText(en.t075)).toBeVisible();
  await expect(page.getByText(en.t076)).toBeVisible();
  await expect(page.getByText(en.t077)).toBeVisible();
});

test("Visibility tests resume in Spanish", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "ES" }).click();
  await expect(page.getByRole("navigation").getByText(es.t013)).toBeVisible();
  await page.getByRole("navigation").getByText(es.t013).click();
  await expect(page.getByRole("heading", { name: es.t033 })).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t034 })).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t035 })).toBeVisible();
  await expect(
    page.getByRole("listitem").filter({ hasText: es.t035 }).locator("h5")
  ).toBeVisible();
  await expect(page.getByText(es.t037)).toBeVisible();
  await expect(page.getByText(es.t038)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t039 })).toBeVisible();
  await expect(
    page.getByRole("listitem").filter({ hasText: es.t039 }).locator("h5")
  ).toBeVisible();
  await expect(page.getByText(es.t041)).toBeVisible();
  await expect(page.getByText(es.t042)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t043 })).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t044 })).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t045 })).toBeVisible();
  await expect(page.getByText(es.t046)).toBeVisible();
  await expect(page.getByText(es.t047)).toBeVisible();
  await expect(page.getByRole("link", { name: es.t102 })).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t048 })).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t049 })).toBeVisible();
  await expect(page.getByText(es.t050, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t051, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t052)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.t054, exact: true })
  ).toBeVisible();
  await expect(page.getByText(es.t055)).toBeVisible();
  await expect(page.getByText(es.t056)).toBeVisible();
  await expect(page.getByText(es.t203)).toBeVisible();
  await expect(page.getByText(es.t057)).toBeVisible();
  await expect(page.getByText(es.t058)).toBeVisible();
  await expect(page.getByText(es.t059)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t060 })).toBeVisible();
  await expect(page.getByText(es.t061, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t062, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t063, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t064, { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t065 })).toBeVisible();
  await expect(page.getByText(es.t066, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t067, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t068)).toBeVisible();
  await expect(page.getByText(es.t069)).toBeVisible();
  await expect(page.getByText(es.t070)).toBeVisible();
  await expect(page.getByText(es.t071)).toBeVisible();
  await expect(page.getByRole("heading", { name: es.t072 })).toBeVisible();
  await expect(page.getByText(es.t073, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t074, { exact: true })).toBeVisible();
  await expect(page.getByText(es.t075)).toBeVisible();
  await expect(page.getByText(es.t076)).toBeVisible();
  await expect(page.getByText(es.t077)).toBeVisible();
});


test("portfolio and project visibility test", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation").getByText(en.t078).click();
  await expect(page.getByRole("heading", { name: en.t078 })).toBeVisible();

  const isMobile = await page.locator("button.filter-select").isVisible();

  switch (isMobile) {
    case true:
      const selectButton = page.locator("button.filter-select");
      await expect(selectButton).toBeVisible();
      await selectButton.click();

      const selectList = page.locator(".select-list");
      await expect(selectList).toBeVisible();

      const mobileFilters = [
        en.t085,
        en.t086,
        en.t087,
        en.t088,
        en.t089,
        en.t090
      ];

      for (const filter of mobileFilters) {
        const button = selectList.locator(`button:has-text("${filter}")`);
        await expect(button).toBeVisible();
        await button.click();

        await selectButton.click();
        await expect(selectList).toBeVisible();
      }

      await page.getByRole('button', { name: mobileFilters[1] }).click();
      await expect(page.getByRole('link', { name: `${en.t093} ${en.t094}` })).toBeVisible();
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[2] }).click();
      await expect(page.getByRole('link', { name: `${en.t091} ${en.t092}` })).toBeVisible();
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[3] }).click();
      await expect(page.getByRole('link', { name: en.t095 })).toBeVisible();
      await expect(page.getByRole('link', { name: en.t097 })).toBeVisible();
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[4] }).click();
      await expect(page.getByRole('link', { name: `${en.t093} ${en.t094}` })).toBeVisible();
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[5] }).click();
      await expect(page.getByRole('link', { name: `${en.t093} ${en.t094}` })).toBeVisible();
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[0] }).click();
      await expect(page.getByRole('link', { name: `${en.t091} ${en.t092}` })).toBeVisible();
      await expect(page.getByRole('link', { name: `${en.t093} ${en.t094}` })).toBeVisible();
      await expect(page.getByRole('link', { name: en.t095 })).toBeVisible();
      await expect(page.getByRole('link', { name: en.t097 })).toBeVisible();
      break;
    case false:
      const desktopFilters = [
        en.t079,
        en.t080,
        en.t081,
        en.t082,
        en.t083,
        en.t084,
      ];

      for (const filter of desktopFilters) {
        const button = page.getByRole("button", { name: filter });
        await expect(button).toBeVisible();
        await button.click();
      }
      await page.getByRole('button', { name: desktopFilters[1] }).click();
      await expect(page.getByRole('link', { name: `${en.t093} ${en.t094}` })).toBeVisible();
      await page.getByRole('button', { name: desktopFilters[2]}).click();
      await expect(page.getByRole('link', { name: `${en.t091} ${en.t092}` })).toBeVisible();
      await page.getByRole('button', { name: desktopFilters[3] }).click();
      await expect(page.getByRole('link', { name: en.t095 })).toBeVisible();
      await expect(page.getByRole('link', { name: en.t097 })).toBeVisible();
      await page.getByRole('button', { name: desktopFilters[4] }).click();
      await expect(page.getByRole('link', { name: `${en.t093} ${en.t094}` })).toBeVisible();
      await page.getByRole('button', { name: desktopFilters[5] }).click();
      await expect(page.getByRole('link', { name: `${en.t093} ${en.t094}` })).toBeVisible();
      await page.getByRole('button', { name: desktopFilters[0] }).click();
      await expect(page.getByRole('link', { name: `${en.t091} ${en.t092}` })).toBeVisible();
      await expect(page.getByRole('link', { name: `${en.t093} ${en.t094}` })).toBeVisible();
      await expect(page.getByRole('link', { name: en.t095 })).toBeVisible();
      await expect(page.getByRole('link', { name: en.t097 })).toBeVisible();
    break;
  }
});


test("portfolio and project visibility test in Spanish", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "ES" }).click();
  await page.getByRole("navigation").getByText(es.t078).click();
  await expect(page.getByRole("heading", { name: es.t078 })).toBeVisible();

  const isMobile = await page.locator("button.filter-select").isVisible();

  switch (isMobile) {
    case true:
      const selectButton = page.locator("button.filter-select");
      await expect(selectButton).toBeVisible();
      await selectButton.click();

      const selectList = page.locator(".select-list");
      await expect(selectList).toBeVisible();

      const mobileFilters = [
        es.t085,
        es.t086,
        es.t087,
        es.t088,
        es.t089,
        es.t090
      ];

      for (const filter of mobileFilters) {
        const button = selectList.locator(`button:has-text("${filter}")`);
        await expect(button).toBeVisible();
        await button.click();
        await selectButton.click();
        await expect(selectList).toBeVisible();
      }

      await page.getByRole('button', { name: mobileFilters[1] }).click();
      await page.waitForTimeout(500); // Esperar a que se aplique el filtro
      await expect(page.getByRole('link', { name: `${es.t093} ${es.t094}` })).toBeVisible();
      
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[2] }).click();
      await page.waitForTimeout(500); // Esperar a que se aplique el filtro
      await expect(page.getByRole('link').filter({ hasText: es.t091 })).toBeVisible();
      
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[3] }).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link', { name: es.t095 })).toBeVisible();
      await expect(page.getByRole('link', { name: es.t097 })).toBeVisible();
      
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[4] }).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link', { name: `${es.t093} ${es.t094}` })).toBeVisible();
      
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[5] }).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link', { name: `${es.t093} ${es.t094}` })).toBeVisible();
      
      await selectButton.click();
      await page.getByRole('button', { name: mobileFilters[0] }).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link').filter({ hasText: es.t091 })).toBeVisible();
      await expect(page.getByRole('link', { name: `${es.t093} ${es.t094}` })).toBeVisible();
      await expect(page.getByRole('link', { name: es.t095 })).toBeVisible();
      await expect(page.getByRole('link', { name: es.t097 })).toBeVisible();
      break;
      
    case false:
      const desktopFilters = [
        es.t079,
        es.t080,
        es.t081,
        es.t082,
        es.t083,
        es.t084,
      ];

      for (const filter of desktopFilters) {
        const button = page.getByRole("button", { name: filter });
        await expect(button).toBeVisible();
        await button.click();
        await page.waitForTimeout(300);
      }
      
      await page.getByRole('button', { name: desktopFilters[1] }).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link', { name: `${es.t093} ${es.t094}` })).toBeVisible();
      
      await page.getByRole('button', { name: desktopFilters[2]}).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link').filter({ hasText: es.t091 })).toBeVisible();
      
      await page.getByRole('button', { name: desktopFilters[3] }).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link', { name: es.t095 })).toBeVisible();
      await expect(page.getByRole('link', { name: es.t097 })).toBeVisible();
      
      await page.getByRole('button', { name: desktopFilters[4] }).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link', { name: `${es.t093} ${es.t094}` })).toBeVisible();
      
      await page.getByRole('button', { name: desktopFilters[5] }).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link', { name: `${es.t093} ${es.t094}` })).toBeVisible();
      
      await page.getByRole('button', { name: desktopFilters[0] }).click();
      await page.waitForTimeout(500);
      await expect(page.getByRole('link').filter({ hasText: es.t091 })).toBeVisible();
      await expect(page.getByRole('link', { name: `${es.t093} ${es.t094}` })).toBeVisible();
      await expect(page.getByRole('link', { name: es.t095 })).toBeVisible();
      await expect(page.getByRole('link', { name: es.t097 })).toBeVisible();
      break;
  }
});


test('contact visibility test', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation').getByText(en.t099)).toBeVisible();
  await page.getByRole('navigation').getByText(en.t099).click();
  await expect(page.getByRole('heading', { name: en.t099, exact: true })).toBeVisible();
  await expect(page.locator('iframe').contentFrame().locator('.gm-style > div > div:nth-child(2)').first()).toBeVisible();
  await expect(page.getByRole('heading', { name: en.t100 })).toBeVisible();
  await expect(page.getByRole('textbox', { name: en.t200 })).toBeVisible();
  await expect(page.getByRole('textbox', { name: en.t201 })).toBeVisible();
  await expect(page.getByRole('textbox', { name: en.t202 })).toBeVisible();
  await expect(page.getByRole('button', { name: `paper plane ${en.t101}` })).toBeVisible();
});


test('contact visibility test in Spanish', async ({ page }) => {
  await page.goto('/');
  await page.getByRole("button", { name: "ES" }).click();
  await expect(page.getByRole('navigation').getByText(es.t099)).toBeVisible();
  await page.getByRole('navigation').getByText(es.t099).click();
  await expect(page.getByRole('heading', { name: es.t099, exact: true })).toBeVisible();
  await expect(page.locator('iframe').contentFrame().locator('.gm-style > div > div:nth-child(2)').first()).toBeVisible();
  await expect(page.getByRole('heading', { name: es.t100 })).toBeVisible();
  await expect(page.getByRole('textbox', { name: es.t200 })).toBeVisible();
  await expect(page.getByRole('textbox', { name: es.t201 })).toBeVisible();
  await expect(page.getByRole('textbox', { name: es.t202 })).toBeVisible();
  await expect(page.getByRole('button', { name: `paper plane ${es.t101}` })).toBeVisible();
});


test('mock resume download test in english', async ({ page }) => {
  await page.route('**/assets/cv/Sebastian_Orjuela_CV_EN.pdf', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/pdf',
      body: 'PDF mock content',
    });
  });

  await page.goto('/');
  await page.getByRole('navigation').getByText(en.t013).click();
  await expect(page.getByRole('link', { name: `download outline ${en.t102}` })).toBeVisible();

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: `download outline ${en.t102}` }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe('Sebastian_Orjuela_CV_EN.pdf');
});


test('mock resume download test in Spanish', async ({ page }) => {
  await page.route('**/assets/cv/Sebastian_Orjuela_CV_ES.pdf', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/pdf',
      body: 'PDF mock content',
    });
  });

  await page.goto('/');
  await page.getByRole("button", { name: "ES" }).click();
  await page.getByRole('navigation').getByText(es.t013).click();
  await expect(page.getByRole('link', { name: `download outline ${es.t102}` })).toBeVisible();

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: `download outline ${es.t102}` }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe('Sebastian_Orjuela_CV_ES.pdf');
});


test('mock emailjs contact form submission', async ({ page }) => {
  await page.route('**/email.min.js', route => route.abort());

  await page.addInitScript(() => {
    (window as any).emailjs = {
      init: () => {},
      sendForm: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("mocked success");
          }, 1000)
        });
      }
    };
  });


  await page.goto('/');
  await expect(page.getByRole('navigation').getByText(en.t099)).toBeVisible();
  await page.getByRole('navigation').getByText(en.t099).click();
  await expect(page.getByRole('heading', { name: en.t100 })).toBeVisible();
  await page.getByRole('textbox', { name: en.t200 }).fill('Sebastian Orjuela Giraldo');
  await page.getByRole('textbox', { name: en.t201 }).fill('sebasorjuela.dev@gmail.com');
  await page.getByRole('textbox', { name: en.t202 }).fill('Hello this is a message for the test');
  const button = page.getByRole('button', { name: `paper plane ${en.t101}` });
  await expect(button).toBeVisible();
  await button.click();
  await expect(page.getByRole('button', { name: `paper plane ${en.msg_sending}` })).toBeVisible();
  await expect(page.getByText(en.msg_success)).toBeVisible();
});


test('mock emailjs contact form submission in Spanish', async ({ page }) => {
  await page.route('**/email.min.js', route => route.abort());

  await page.addInitScript(() => {
    (window as any).emailjs = {
      init: () => {},
      sendForm: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("mocked success");
          }, 1000)
        });
      }
    };
  });

  await page.goto('/');
  await page.getByRole("button", { name: "ES" }).click();
  await expect(page.getByRole('navigation').getByText(es.t099)).toBeVisible();
  await page.getByRole('navigation').getByText(es.t099).click();
  await expect(page.getByRole('heading', { name: es.t100 })).toBeVisible();
  await page.getByRole('textbox', { name: es.t200 }).fill('Sebastian Orjuela Giraldo');
  await page.getByRole('textbox', { name: es.t201 }).fill('sebasorjuela.dev@gmail.com');
  await page.getByRole('textbox', { name: es.t202 }).fill('Hola este es un mensaje para el test');
  const button = page.getByRole('button', { name: `paper plane ${es.t101}` });
  await expect(button).toBeVisible();
  await button.click();
  await expect(page.getByRole('button', { name: `paper plane ${es.msg_sending}` })).toBeVisible();
  await expect(page.getByText(es.msg_success)).toBeVisible();
});


test('mock emailjs contact form submission witch error', async ({ page }) => {
  await page.route('**/email.min.js', route => {
    return route.abort();
  });

  await page.addInitScript(() => {
    (window as any).emailjs = {
      init: () => {},
      sendForm: () => {
        return new Promise((_, reject) => {
          setTimeout(() => {
            reject(new Error("mocked error after delay"));
          }, 1000);
        });
      }
    };
  });

  await page.goto('/');
  await expect(page.getByRole('navigation').getByText(en.t099)).toBeVisible();
  await page.getByRole('navigation').getByText(en.t099).click();
  await expect(page.getByRole('heading', { name: en.t100 })).toBeVisible();
  await page.getByRole('textbox', { name: en.t200 }).fill('Sebastian Orjuela Giraldo');
  await page.getByRole('textbox', { name: en.t201 }).fill('sebasorjuela.dev@gmail.com');
  await page.getByRole('textbox', { name: en.t202 }).fill('Hello this is a message for the test');
  const button = page.getByRole('button', { name: `paper plane ${en.t101}` });
  await expect(button).toBeVisible();
  await button.click();
  await expect(page.getByRole('button', { name: `paper plane ${en.msg_sending}` })).toBeVisible();
  await expect(page.getByText(en.msg_error)).toBeVisible();
});


test('mock emailjs contact form submission with error in Spanish', async ({ page }) => {
  await page.route('**/email.min.js', route => {
    return route.abort();
  });

  await page.addInitScript(() => {
    (window as any).emailjs = {
      init: () => {},
      sendForm: () => {
        return new Promise((_, reject) => {
          setTimeout(() => {
            reject(new Error("mocked error after delay"));
          }, 1000);
        });
      }
    };
  });

  await page.goto('/');
  await page.getByRole("button", { name: "ES" }).click();
  await expect(page.getByRole('navigation').getByText(es.t099)).toBeVisible();
  await page.getByRole('navigation').getByText(es.t099).click();
  await expect(page.getByRole('heading', { name: es.t100 })).toBeVisible();
  await page.getByRole('textbox', { name: es.t200 }).fill('Sebastian Orjuela Giraldo');
  await page.getByRole('textbox', { name: es.t201 }).fill('sebasorjuela.dev@gmail.com');
  await page.getByRole('textbox', { name: es.t202 }).fill('Hola este es un mensaje para el test');
  const button = page.getByRole('button', { name: `paper plane ${es.t101}` });
  await expect(button).toBeVisible();
  await button.click();
  await expect(page.getByRole('button', { name: `paper plane ${es.msg_sending}` })).toBeVisible();
  await expect(page.getByText(es.msg_error)).toBeVisible();
});

test('SEO files accessibility test', async ({ page }) => {
  // Test robots.txt
  const robotsResponse = await page.goto('/robots.txt');
  if (!robotsResponse) {
    throw new Error('robots.txt response is null');
  }
  expect(robotsResponse?.status()).toBe(200);
  const robotsContent = await robotsResponse.text();
  expect(robotsContent).toContain('User-agent: *');
  expect(robotsContent).toContain('Allow: /');
  expect(robotsContent).toContain('Sitemap: https://sebasorjuela.dev/sitemap.xml');

  // Test sitemap.xml
  const sitemapResponse = await page.goto('/sitemap.xml');
  if (!sitemapResponse) {
    throw new Error('sitemap.xml response is null');
  }
  expect(sitemapResponse?.status()).toBe(200);
  const sitemapContent = await sitemapResponse.text();
  expect(sitemapContent).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  expect(sitemapContent).toContain('<loc>https://sebasorjuela.dev/</loc>');
  expect(sitemapContent).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
  expect(sitemapContent).toContain('<changefreq>monthly</changefreq>');
  expect(sitemapContent).toContain('<priority>1.0</priority>');
});

test('test portfolio filter anchor functionality', async ({ page }) => {
  await page.goto('/#portfolio:all');
  await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();

  const isMobile = await page.locator("button.filter-select").isVisible();
  
  if (isMobile) {

    const selectButton = page.locator("button.filter-select");
    await expect(selectButton).toBeVisible();

    await selectButton.click();
    const selectList = page.locator(".select-list");
    await expect(selectList).toBeVisible();
    
    const allOptionInList = selectList.getByRole('button', { name: 'All', exact: true });
    await expect(allOptionInList).toBeVisible();

    await selectButton.click();

    await page.goto('/#portfolio:apis');
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
    
    await page.goto('/#portfolio:applications');
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();

    await page.goto('/#portfolio:all');
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
    
  } else {

    const allButton = page.getByRole('button', { name: 'All' });
    await expect(allButton).toBeVisible();

    await expect(allButton).toHaveClass(/active/);

    await page.goto('/#portfolio:apis');
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
    const apisButton = page.getByRole('button', { name: 'APIs' });
    await expect(apisButton).toHaveClass(/active/);
    
    await page.goto('/#portfolio:applications');
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
    const applicationsButton = page.getByRole('button', { name: 'Applications' });
    await expect(applicationsButton).toHaveClass(/active/);

    await page.goto('/#portfolio:all');
    await expect(allButton).toHaveClass(/active/);
  }
});

test('test anchor subsection navigation functionality', async ({ page }) => {
  await page.goto('/#resume.education');
  await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
  
  await page.goto('/#resume.experience');
  await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
  
  await page.goto('/#resume.skills');
  await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'My Skills' })).toBeVisible();
});

test('test portfolio filter URL persistence', async ({ page }) => {
  // Navegar a la sección portfolio primero para detectar correctamente el dispositivo
  await page.goto('/#portfolio');
  await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
  
  await page.waitForLoadState('networkidle');
  const isMobile = await page.locator("button.filter-select").isVisible();
  
  if (isMobile) {

    await page.goto('/#portfolio:program_logic');
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
    await page.waitForLoadState('networkidle');
    
    const selectButton = page.locator("button.filter-select");
    await selectButton.click();
    
    const selectList = page.locator(".select-list");
    await expect(selectList).toBeVisible();
    
    const programLogicOption = selectList.getByRole('button', { name: 'Program logic', exact: true });
    await expect(programLogicOption).toBeVisible();
    
    await selectButton.click();
    
    await page.goto('/#portfolio:apis');
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
    await page.waitForLoadState('networkidle');
    
    await selectButton.click();
    const apisOption = selectList.getByRole('button', { name: 'APIs', exact: true });
    await expect(apisOption).toBeVisible();
    
  } else {

    await page.goto('/#portfolio:program_logic');
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
    await page.waitForLoadState('networkidle');
    
    const programLogicButton = page.getByRole('button', { name: 'Program Logic' });
    await expect(programLogicButton).toHaveClass(/active/);
    
    await page.goto('/#portfolio:apis');
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
    await page.waitForLoadState('networkidle');
    
    const apisButton = page.getByRole('button', { name: 'APIs' });
    await expect(apisButton).toHaveClass(/active/);
    
    await expect(programLogicButton).not.toHaveClass(/active/);
  }
});