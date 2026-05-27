import { Page, Locator, test } from '@playwright/test';

export class Header {
    private page: Page;
    private readonly ecoNewsLink: Locator;
    private readonly signInButton: Locator;
    
    // Login modal locators
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly submitLoginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator('.header_sign-in-link:visible, .sign-in-link:visible, img[alt="sing in button"]:visible, a:has-text("Sign in"):visible, a:has-text("Увійти"):visible').first(); 
        this.emailInput = page.locator('#email'); 
        this.passwordInput = page.locator('#password');
        this.submitLoginButton = page.locator('button[type="submit"].green-btn, app-sign-in button[type="submit"]'); 
    }

    async clickEcoNews() {
        await test.step('Click "Eco-news" link in header', async () => {
            await this.ecoNewsLink.click();
        });
    }

    async login(user: string, pass: string) {
        await test.step(`Login as user ${user}`, async () => {
            await this.signInButton.click();
            await this.emailInput.fill(user);
            await this.passwordInput.fill(pass);
            await this.submitLoginButton.click();
            // Wait for login modal to disappear to ensure login is complete
            await this.emailInput.waitFor({ state: 'hidden' });
        });
    }
}
