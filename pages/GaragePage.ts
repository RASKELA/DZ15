import { Page } from '@playwright/test';

export class GaragePage {
    constructor(private page: Page) { }

    async isOnGaragePage() {
        await this.page.waitForURL('**/garage');
        return this.page.url().includes('/garage');
    }

    async getTitle() {
        return this.page.locator('.headline').textContent();
    }
}
