import homePage from '../pageobjects/homePage.ts';

describe('Sample APK Application Tests', () => {
    it('should display the view cart option', async () => {
        const viewCart = await homePage.viewCart;
        await expect(viewCart).toBeDisplayed();
    });

    it('should have a display the number of items in cart option', async () => {
        const numItemsInCart = await homePage.numItemsInCart;
        await expect(numItemsInCart).toBeDisplayed();
    });

    it('should display the APP logo on the home screen', async () => {
        const logo = await homePage.appLogo;
        await expect(logo).toBeDisplayed();
    });
});