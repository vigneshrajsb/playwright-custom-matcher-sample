import { test, expect } from '@playwright/test';

test.describe("Sample test with custom matcher", () => {

  test("a test with custom expect", async ({page}) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');

    // expect and built in playwright matchers are reported in html report as a step
    await expect(title).toHaveText('Playwright');

    // custom expect matcher is not listed in the html report
    expect(100).toBeWithinRange(80, 120)
  })
})