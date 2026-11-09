import { expect, test } from "@playwright/test";
import { openEvcc, openMoreMenu } from "@evcc-addons/sdk/testing/playwright";
import { readFileSync } from "node:fs";

const { version } = JSON.parse(readFileSync("addon.json", "utf8")) as { version: string };

test("„Hallo“ im Menü „Mehr“ öffnet die Seite mit der PV-Leistung", async ({ page }) => {
  await openEvcc(page);
  await openMoreMenu(page);
  await page.locator(".more-menu").getByText("Hallo", { exact: true }).click();
  await expect(page).toHaveURL(/#\/addons\/hello$/);
  await expect(page.locator("#evcc-addons-page h1")).toHaveText("Hallo Welt");
  await expect(page.getByTestId("hello-pv")).toHaveText("PV-Leistung: 4321 W");
});

test("die Seite „Addons“ listet hello in der Version aus addon.json", async ({ page }) => {
  await openEvcc(page, "#/addons");
  await expect(page.getByTestId("addon-card-hello")).toContainText(`v${version}`);
});
