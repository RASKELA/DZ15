import { chromium } from '@playwright/test';

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://qauto.forstudy.space/');
    await page.click('text=Sign In');
    await page.fill('input[formcontrolname="email"]', 'user@example.com');
    await page.fill('input[formcontrolname="password"]', '123456');
    await page.click('button[type="submit"]');

    await page.waitForURL('**/garage');

    await context.storageState({ path: 'storage/user.json' });
    await browser.close();
})();