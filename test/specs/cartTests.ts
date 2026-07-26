import homePage from '../pageobjects/homePage.ts';
import cartPage from '../pageobjects/cart.ts';

describe('Cart page tests', () => {

    it('should navigate to the cart when the cart icon is clicked', async () => {
        const cartIcon = await homePage.viewCart;
        await cartIcon.waitForDisplayed({ timeout: 10000 });
        await cartIcon.click();

        const cartScreenTitle = await cartPage.cartScreenTitle;
        await cartScreenTitle.waitForDisplayed({ timeout: 10000 });
        await expect(cartScreenTitle).toBeDisplayed();
    });
});