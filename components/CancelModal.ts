import { Locator, Page, test } from '@playwright/test';

export class CancelModal {
    private page: Page;
    readonly modalBody: Locator;
    readonly warningText: Locator;
    readonly yesCancelButton: Locator;
    readonly continueEditingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.modalBody = page.locator('app-warning-pop-up, .mat-dialog-container');
        this.warningText = this.modalBody.locator('.warning-title');
        this.yesCancelButton = this.modalBody.locator('button:has-text("Yes, cancel")');
        this.continueEditingButton = this.modalBody.locator('button:has-text("Continue editing")');
    }

    async clickYesCancel() {
        await test.step('Click "Yes, cancel" button on warning modal', async () => {
            await this.yesCancelButton.click();
        });
    }

    async clickContinueEditing() {
        await test.step('Click "Continue editing" button on warning modal', async () => {
            await this.continueEditingButton.click();
        });
    }
}
