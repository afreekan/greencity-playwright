import { Locator, Page, test, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class EcoNewsPage extends BasePage {
    readonly createNewsButton: Locator;
    readonly editNewsButton: Locator;
    readonly newsItems: Locator; // List of news

    // Locators for a specific news item view
    readonly newsTitle: Locator;
    readonly newsContent: Locator;
    readonly newsDate: Locator;
    readonly newsTags: Locator;

    constructor(page: Page) {
        super(page);
        this.createNewsButton = page.locator('#create-button:visible, a.create:visible').first();
        this.editNewsButton = page.locator('.edit-news');
        this.newsItems = page.locator('ul.list > li');

        this.newsTitle = page.locator('.news-title');
        this.newsContent = page.locator('.news-text');
        this.newsDate = page.locator('.news-info-date');
        this.newsTags = page.locator('.tags-list .tag');
    }

    async clickCreateNews() {
        await test.step('Click "Create news" button', async () => {
            await this.createNewsButton.click();
        });
    }

    async clickEditNews() {
        await test.step('Click "Edit news" button', async () => {
            await this.editNewsButton.click();
        });
    }

    async verifyNewsData(expectedTitle: string, expectedContent: string, expectedTags: string[]) {
        await test.step(`Verify news data matches created values`, async () => {
            await expect(this.newsTitle).toHaveText(expectedTitle);
            await expect(this.newsContent).toContainText(expectedContent);
            // Verify tags
            for (const tag of expectedTags) {
                await expect(this.newsTags.filter({ hasText: tag })).toBeVisible();
            }
        });
    }
}
