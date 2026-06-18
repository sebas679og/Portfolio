import { test, expect } from "@playwright/test";
import en from "../assets/i18n/en.json";
import es from "../assets/i18n/es.json";

test("Visualization test", async ({ page }) => {
  const currentYear = new Date().getFullYear();

  await page.goto("/");
  await expect(
    page.getByRole("link", { name: en.header.nav.about }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: en.header.nav.skills }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: en.header.nav.experience }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: en.header.nav.projects }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: en.header.nav.contact }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "<Sog />" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "ES", exact: true }),
  ).toBeVisible();
  await expect(page.getByText(en.hero.greeting)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Sebastian Orjuela" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.hero.title }),
  ).toBeVisible();
  await expect(page.getByText(en.hero.description)).toBeVisible();
  await expect(
    page.getByRole("link", { name: en.hero.actions.contact }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: en.hero.actions.cv }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.about.title }),
  ).toBeVisible();
  await expect(page.getByText(en.about.paragraphs.p1)).toBeVisible();
  await expect(page.getByText(en.about.paragraphs.p2)).toBeVisible();
  await expect(page.getByText(en.about.paragraphs.p3)).toBeVisible();
  await expect(page.getByText(en.about.card.location)).toBeVisible();
  await expect(page.getByText(en.about.card.availability)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.skills.title }),
  ).toBeVisible();
  await expect(page.getByText(en.skills.groups.languages)).toBeVisible();
  await expect(page.locator('#skills').getByText('Java', { exact: true })).toBeVisible();
  await expect(page.getByText('Python', { exact: true })).toBeVisible();
  await expect(page.getByText('TypeScript', { exact: true })).toBeVisible();
  await expect(page.getByText('JavaScript', { exact: true })).toBeVisible();
  await expect(
    page.getByText(en.skills.groups.frameworks, { exact: true }),
  ).toBeVisible();
  await expect(page.locator('#skills').getByText('Spring Boot')).toBeVisible();
  await expect(page.getByText('Quart', { exact: true })).toBeVisible();
  await expect(page.getByText('FastAPI', { exact: true })).toBeVisible();
  await expect(page.getByText('React', { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.skills.groups.databases }),
  ).toBeVisible();
  await expect(page.locator('#skills').getByText('PostgreSQL')).toBeVisible();
  await expect(page.getByText('MySQL', { exact: true })).toBeVisible();
  await expect(page.getByText('MongoDB')).toBeVisible();
  await expect(
    page.getByText(en.skills.groups.tools, { exact: true }),
  ).toBeVisible();
  await expect(page.getByText('Git', { exact: true })).toBeVisible();
  await expect(page.getByText('GitHub', { exact: true })).toBeVisible();
  await expect(page.locator('#skills').getByText('Docker')).toBeVisible();
  await expect(page.getByText('Podman', { exact: true })).toBeVisible();
  await expect(page.getByText('Maven')).toBeVisible();
  await expect(page.getByText(en.skills.groups.testing, { exact: true })).toBeVisible();
  await expect(page.locator('#skills').getByText('JUnit')).toBeVisible();
  await expect(page.locator('#skills').getByText('Mockito')).toBeVisible();
  await expect(page.getByText('Pytest')).toBeVisible();
  await expect(page.getByText('Playwright')).toBeVisible();
  await expect(page.getByText('Postman')).toBeVisible();
  await expect(page.getByText(en.skills.groups.concepts)).toBeVisible();
  await expect(page.getByText('REST APIs', { exact: true })).toBeVisible();
  await expect(page.getByText('Microservices', { exact: true })).toBeVisible();
  await expect(page.locator('#skills').getByText('CI/CD')).toBeVisible();
  await expect(page.getByText('Asynchronism')).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.experience.title }),
  ).toBeVisible();
  await expect(page.getByText(en.experience.items.lumu.date)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.experience.items.lumu.role }),
  ).toBeVisible();
  await expect(page.getByText(en.experience.items.lumu.company)).toBeVisible();
  await expect(
    page.getByText(en.experience.items.lumu.description),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.projects.title }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.projects.items.bankcore.title }),
  ).toBeVisible();
  await expect(
    page.getByText(en.projects.items.bankcore.description),
  ).toBeVisible();
  await expect(page.getByText("Java", {exact:true}).nth(1)).toBeVisible();
  await expect(page.getByText("Spring Boot").nth(3)).toBeVisible();
  await expect(page.getByText("PostgreSQL").nth(1)).toBeVisible();
  await expect(page.getByText("Docker").nth(1)).toBeVisible();
  await expect(page.getByText("CI/CD").nth(2)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.projects.items.sportspulse.title }),
  ).toBeVisible();
  await expect(page.getByText("Real-time football analytics")).toBeVisible();
  await expect(
    page
      .getByRole("article")
      .filter({ hasText: en.projects.items.sportspulse.description })
      .getByLabel("GitHub"),
  ).toBeVisible();
  await expect(page.getByText("Java").nth(4)).toBeVisible();
  await expect(page.getByText("Spring Boot").nth(4)).toBeVisible();
  await expect(page.getByText("PostgreSQL").nth(2)).toBeVisible();
  await expect(page.getByText("Docker").nth(2)).toBeVisible();
  await expect(page.getByText("CI/CD").nth(3)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.contact.title }),
  ).toBeVisible();
  await expect(page.getByText(en.contact.subtitle)).toBeVisible();
  await expect(page.getByText(en.contact.form.name.label, { exact: true })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Name" })).toBeVisible();
  await expect(page.getByText(en.contact.form.email.label)).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Email" })).toBeVisible();
  await expect(
    page.getByText(en.contact.form.message.label, { exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Message" })).toBeVisible();
  await expect(page.getByText("Name Email Message Send")).toBeVisible();
  await expect(
    page.getByText(
      en.footer.copy.replace('{year}', currentYear.toString())
    )
).toBeVisible();
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "GitHub" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "LinkedIn" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Email" })).toBeVisible();
});

test("Visualization test in spanish", async ({ page }) => {
  const currentYear = new Date().getFullYear();

  await page.goto("/");
  await page.getByRole("button", { name: "ES", exact: true }).click();
  await expect(
    page.getByRole("link", { name: es.header.nav.about }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: es.header.nav.skills }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: es.header.nav.experience }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: es.header.nav.projects }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: es.header.nav.contact }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "<Sog />" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "EN", exact: true }),
  ).toBeVisible();
  await expect(page.getByText(es.hero.greeting)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Sebastian Orjuela" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.hero.title }),
  ).toBeVisible();
  await expect(page.getByText(es.hero.description)).toBeVisible();
  await expect(
    page.getByRole("link", { name: es.hero.actions.contact }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: es.hero.actions.cv }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.about.title }),
  ).toBeVisible();
  await expect(page.getByText(es.about.paragraphs.p1)).toBeVisible();
  await expect(page.getByText(es.about.paragraphs.p2)).toBeVisible();
  await expect(page.getByText(es.about.paragraphs.p3)).toBeVisible();
  await expect(page.getByText(es.about.card.location)).toBeVisible();
  await expect(page.getByText(es.about.card.availability)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.skills.title }),
  ).toBeVisible();
  await expect(page.getByText(es.skills.groups.languages)).toBeVisible();
   await expect(page.locator('#skills').getByText('Java', { exact: true })).toBeVisible();
  await expect(page.getByText('Python', { exact: true })).toBeVisible();
  await expect(page.getByText('TypeScript', { exact: true })).toBeVisible();
  await expect(page.getByText('JavaScript', { exact: true })).toBeVisible();
  await expect(
    page.getByText(es.skills.groups.frameworks, { exact: true }),
  ).toBeVisible();
  await expect(page.locator('#skills').getByText('Spring Boot')).toBeVisible();
  await expect(page.getByText('Quart', { exact: true })).toBeVisible();
  await expect(page.getByText('FastAPI', { exact: true })).toBeVisible();
  await expect(page.getByText('React', { exact: true })).toBeVisible();
  await expect(page.getByText(es.skills.groups.databases, { exact: true })).toBeVisible();
  await expect(page.locator('#skills').getByText('PostgreSQL')).toBeVisible();
  await expect(page.getByText('MySQL', { exact: true })).toBeVisible();
  await expect(page.getByText('MongoDB')).toBeVisible();
  await expect(
    page.getByText(es.skills.groups.tools, { exact: true }),
  ).toBeVisible();
  await expect(page.getByText('Git', { exact: true })).toBeVisible();
  await expect(page.getByText('GitHub', { exact: true })).toBeVisible();
  await expect(page.locator('#skills').getByText('Docker')).toBeVisible();
  await expect(page.getByText('Podman', { exact: true })).toBeVisible();
  await expect(page.getByText('Maven')).toBeVisible();
  await expect(page.getByText(es.skills.groups.testing, { exact: true })).toBeVisible();
  await expect(page.locator('#skills').getByText('JUnit')).toBeVisible();
  await expect(page.locator('#skills').getByText('Mockito')).toBeVisible();
  await expect(page.getByText('Pytest')).toBeVisible();
  await expect(page.getByText('Playwright')).toBeVisible();
  await expect(page.getByText('Postman')).toBeVisible();
  await expect(page.getByText(es.skills.groups.concepts)).toBeVisible();
  await expect(page.getByText('REST APIs', { exact: true })).toBeVisible();
  await expect(page.getByText('Microservices', { exact: true })).toBeVisible();
  await expect(page.locator('#skills').getByText('CI/CD')).toBeVisible();
  await expect(page.getByText('Asynchronism')).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.experience.title }),
  ).toBeVisible();
  await expect(page.getByText(es.experience.items.lumu.date)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.experience.items.lumu.role }),
  ).toBeVisible();
  await expect(page.getByText(es.experience.items.lumu.company)).toBeVisible();
  await expect(
    page.getByText(es.experience.items.lumu.description),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.projects.title }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.projects.items.bankcore.title }),
  ).toBeVisible();
  await expect(
    page.getByText(es.projects.items.bankcore.description),
  ).toBeVisible();
  await expect(page.getByText("Java", {exact:true}).nth(1)).toBeVisible();
  await expect(page.getByText("Spring Boot").nth(3)).toBeVisible();
  await expect(page.getByText("PostgreSQL").nth(1)).toBeVisible();
  await expect(page.getByText("Docker").nth(1)).toBeVisible();
  await expect(page.getByText("CI/CD").nth(2)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.projects.items.sportspulse.title }),
  ).toBeVisible();
  await expect(
    page.getByText(es.projects.items.sportspulse.description),
  ).toBeVisible();
  await expect(
    page
      .getByRole("article")
      .filter({ hasText: es.projects.items.sportspulse.description })
      .getByLabel("GitHub"),
  ).toBeVisible();
  await expect(page.getByText("Java").nth(4)).toBeVisible();
  await expect(page.getByText("Spring Boot").nth(4)).toBeVisible();
  await expect(page.getByText("PostgreSQL").nth(2)).toBeVisible();
  await expect(page.getByText("Docker").nth(2)).toBeVisible();
  await expect(page.getByText("CI/CD").nth(3)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: es.contact.title }),
  ).toBeVisible();
  await expect(page.getByText(es.contact.subtitle)).toBeVisible();
  await expect(page.getByText(es.contact.form.name.label)).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Nombre" })).toBeVisible();
  await expect(page.getByText(es.contact.form.email.label)).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Correo" })).toBeVisible();
  await expect(
    page.getByText(es.contact.form.message.label, { exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Mensaje" })).toBeVisible();
  await expect(
    page.getByText(
      es.footer.copy.replace('{year}', currentYear.toString())
    )
).toBeVisible();
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "GitHub" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "LinkedIn" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Email" })).toBeVisible();
});

test("Translation test", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("<Sog /> ES About Skills")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: en.hero.title }),
  ).toBeVisible();
  await page.getByRole("button", { name: "ES", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: es.hero.title }),
  ).toBeVisible();
  await expect(page.getByText(es.hero.description)).toBeVisible();
});

test("mock emailjs contact form submission", async ({ page }) => {
  await page.route("**/email.min.js", (route) => route.abort());

  await page.addInitScript(() => {
    (window as any).emailjs = {
      init: () => {},
      sendForm: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("mocked success");
          }, 1000);
        });
      },
    };
  });

  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: en.contact.title }),
  ).toBeVisible();
  await expect(page.getByText(en.contact.subtitle)).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: en.contact.form.name.label }),
  ).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: en.contact.form.email.label }),
  ).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: en.contact.form.message.label }),
  ).toBeVisible();
  await page.getByRole("textbox", { name: en.contact.form.name.label }).click();
  await page
    .getByRole("textbox", { name: en.contact.form.name.label })
    .fill("Sebastian Orjuela");
  await page
    .getByRole("textbox", { name: en.contact.form.email.label })
    .click();
  await page
    .getByRole("textbox", { name: en.contact.form.email.label })
    .fill("sebastian.orjueladev@gmail.com");
  await page
    .getByRole("textbox", { name: en.contact.form.message.label })
    .click();
  await page
    .getByRole("textbox", { name: en.contact.form.message.label })
    .fill("Successful message sending test");
  await page.getByRole("button", { name: en.contact.form.submit }).click();
  await expect(page.getByText(en.contact.form.success)).toBeVisible();
});

test("mock emailjs contact form submission in Spanish", async ({ page }) => {
  await page.route("**/email.min.js", (route) => route.abort());

  await page.addInitScript(() => {
    (window as any).emailjs = {
      init: () => {},
      sendForm: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("mocked success");
          }, 1000);
        });
      },
    };
  });

  await page.goto("/");
  await page.getByRole("button", { name: "ES", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: es.contact.title }),
  ).toBeVisible();
  await expect(page.getByText(es.contact.subtitle)).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: es.contact.form.name.label }),
  ).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: es.contact.form.email.label }),
  ).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: es.contact.form.message.label }),
  ).toBeVisible();
  await page.getByRole("textbox", { name: es.contact.form.name.label }).click();
  await page
    .getByRole("textbox", { name: es.contact.form.name.label })
    .fill("Sebastian Orjuela");
  await page
    .getByRole("textbox", { name: es.contact.form.email.label })
    .click();
  await page
    .getByRole("textbox", { name: es.contact.form.email.label })
    .fill("sebastian.orjueladev@gmail.com");
  await page
    .getByRole("textbox", { name: es.contact.form.message.label })
    .click();
  await page
    .getByRole("textbox", { name: es.contact.form.message.label })
    .fill("Successful message sending test");
  await page.getByRole("button", { name: es.contact.form.submit }).click();
  await expect(page.getByText(es.contact.form.success)).toBeVisible();
});

test("mock emailjs contact form submission witch error", async ({ page }) => {
  await page.route("**/email.min.js", (route) => {
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
      },
    };
  });

  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: en.contact.title }),
  ).toBeVisible();
  await expect(page.getByText(en.contact.subtitle)).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: en.contact.form.name.label }),
  ).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: en.contact.form.email.label }),
  ).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: en.contact.form.message.label }),
  ).toBeVisible();
  await page.getByRole("textbox", { name: en.contact.form.name.label }).click();
  await page
    .getByRole("textbox", { name: en.contact.form.name.label })
    .fill("Sebastian Orjuela");
  await page
    .getByRole("textbox", { name: en.contact.form.email.label })
    .click();
  await page
    .getByRole("textbox", { name: en.contact.form.email.label })
    .fill("sebastian.orjueladev@gmail.com");
  await page
    .getByRole("textbox", { name: en.contact.form.message.label })
    .click();
  await page
    .getByRole("textbox", { name: en.contact.form.message.label })
    .fill("Successful message sending test");
  await page.getByRole("button", { name: en.contact.form.submit }).click();
  await expect(page.getByText(en.contact.form.error)).toBeVisible();
});

test("mock emailjs contact form submission with error in Spanish", async ({
  page,
}) => {
  await page.route("**/email.min.js", (route) => {
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
      },
    };
  });

  await page.goto("/");
  await page.getByRole("button", { name: "ES", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: es.contact.title }),
  ).toBeVisible();
  await expect(page.getByText(es.contact.subtitle)).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: es.contact.form.name.label }),
  ).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: es.contact.form.email.label }),
  ).toBeVisible();
  await expect(
    page
      .locator("#contact-form div")
      .filter({ hasText: es.contact.form.message.label }),
  ).toBeVisible();
  await page.getByRole("textbox", { name: es.contact.form.name.label }).click();
  await page
    .getByRole("textbox", { name: es.contact.form.name.label })
    .fill("Sebastian Orjuela");
  await page
    .getByRole("textbox", { name: es.contact.form.email.label })
    .click();
  await page
    .getByRole("textbox", { name: es.contact.form.email.label })
    .fill("sebastian.orjueladev@gmail.com");
  await page
    .getByRole("textbox", { name: es.contact.form.message.label })
    .click();
  await page
    .getByRole("textbox", { name: es.contact.form.message.label })
    .fill("Successful message sending test");
  await page.getByRole("button", { name: es.contact.form.submit }).click();
  await expect(page.getByText(es.contact.form.error)).toBeVisible();
});

test("mock resume download test in english", async ({ page }) => {
  await page.route(
    "**/assets/cv/en/Sebastian_Orjuela_CV.pdf",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/pdf",
        body: "PDF mock content",
      });
    },
  );

  await page.goto("/");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: en.hero.actions.cv }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe("Sebastian_Orjuela_CV.pdf");
});

test("mock resume download test in Spanish", async ({ page }) => {
  await page.route(
    "**/assets/cv/es/Sebastian_Orjuela_CV.pdf",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/pdf",
        body: "PDF mock content",
      });
    },
  );

  await page.goto("/");
  await page.getByRole("button", { name: "ES", exact: true }).click();

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: es.hero.actions.cv }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe("Sebastian_Orjuela_CV.pdf");
});
