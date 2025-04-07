import { test as base } from '@playwright/test';
import { GaragePage } from '../../pages/GaragePage';

type Fixtures = {
    userGaragePage: GaragePage;
};

export const test = base.extend<Fixtures>({
    userGaragePage: async ({ browser }, use) => {
        const context = await browser.newContext({
            storageState: 'storage/user.json',
        });
        const page = await context.newPage();
        const garagePage = new GaragePage(page);
        await use(garagePage);
        await context.close();
    },
});

export { expect } from '@playwright/test';