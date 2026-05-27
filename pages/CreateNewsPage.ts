import { Locator, Page, test, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { CancelModal } from '../components/CancelModal';

export class CreateNewsPage extends BasePage {
    readonly titleInput: Locator;
    readonly titleCounter: Locator;
    readonly tagsList: Locator;
    readonly fileInput: Locator;
    readonly fileUploadError: Locator;
    readonly contentInput: Locator;
    readonly contentCounter: Locator;
    readonly contentError: Locator;
    readonly authorInput: Locator;
    readonly dateInput: Locator;
    readonly sourceInput: Locator;
    
    readonly cancelButton: Locator;
    readonly previewButton: Locator;
    readonly publishButton: Locator;

    readonly cancelModal: CancelModal;

    // Preview mode locators
    readonly previewTitle: Locator;
    readonly previewContent: Locator;
    readonly previewDate: Locator;
    readonly previewAuthor: Locator;
    readonly backToEditingButton: Locator;

    constructor(page: Page) {
        super(page);
        this.titleInput = page.locator('textarea[formcontrolname="title"], textarea[placeholder*="Coffee takeaway"]'); 
        this.titleCounter = page.locator('.title-wrapper .textarea-wrapper p.text-validation'); 
        this.tagsList = page.locator('.tags button, button.tag-button'); 
        this.fileInput = page.locator('input[type="file"]');
        this.fileUploadError = page.locator('.warning.ng-star-inserted'); // example locator
        this.contentInput = page.locator('textarea[formcontrolname="content"], div.ql-editor');
        this.contentCounter = page.locator('.textarea-wrapper.text .text-validation');
        this.contentError = page.locator('.textarea-wrapper.text .error-message'); // example locator
        
        this.authorInput = page.locator('.item-block.author input, .item-block.author span'); // readonly field
        this.dateInput = page.locator('.item-block.date input, .item-block.date span'); // readonly field
        this.sourceInput = page.locator('input[formcontrolname="source"], input[placeholder="Link to external source"]');
        
        this.cancelButton = page.locator('.submit-buttons button:has-text("Cancel")');
        this.previewButton = page.locator('.submit-buttons button:has-text("Preview")');
        this.publishButton = page.locator('.submit-buttons button:has-text("Publish")');
        
        this.cancelModal = new CancelModal(page);

        this.previewTitle = page.locator('.news-title, app-news-preview .news-title');
        this.previewContent = page.locator('.news-text-content, div.news-text-content');
        this.backToEditingButton = page.locator('a.button-link, a:has-text("Back to editing")').first();
    }

    async fillTitle(title: string) {
        await test.step(`Fill title: ${title.substring(0, 20)}...`, async () => {
            await this.titleInput.fill(title);
        });
    }

    async selectTag(tagName: string) {
        await test.step(`Select tag: ${tagName}`, async () => {
            await this.tagsList.filter({ hasText: tagName }).click();
        });
    }

    async uploadImage(filePath: string) {
        await test.step(`Upload image from ${filePath}`, async () => {
            await this.fileInput.setInputFiles(filePath);
        });
    }

    async fillContent(content: string) {
        await test.step(`Fill content`, async () => {
            await this.contentInput.fill(content);
        });
    }

    async fillSource(source: string) {
        await test.step(`Fill source: ${source}`, async () => {
            await this.sourceInput.fill(source);
        });
    }

    async clickPublish() {
        await test.step('Click publish button', async () => {
            await this.publishButton.click();
        });
    }

    async clickCancel() {
        await test.step('Click cancel button', async () => {
            await this.cancelButton.click();
        });
    }

    async clickPreview() {
        await test.step('Click preview button', async () => {
            await this.previewButton.click();
        });
    }
    
    async clickBackToEditing() {
        await test.step('Click "Back to editing"', async () => {
            await this.backToEditingButton.click({ force: true });
        });
    }
}
