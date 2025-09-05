import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/The Internet/);
    await page.screenshot({ path: 'screenshot.png' })
});