import homePage from '../pageobjects/homePage.ts';
import cartPage from '../pageobjects/cart.ts';

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

    it('should navigate to the cart when the cart icon is clicked', async () => {
        const cartIcon = await homePage.viewCart;
        await cartIcon.waitForDisplayed({ timeout: 10000 });
        await cartIcon.click();

        const cartScreenTitle = await cartPage.cartScreenTitle;
        await cartScreenTitle.waitForDisplayed({ timeout: 10000 });
        await expect(cartScreenTitle).toBeDisplayed();
    });

    it('should open a product and display the product details', async () => {
       const productText = await homePage.productText;
       await productText.waitForDisplayed({ timeout: 10000 });
       await expect(productText).toBeDisplayed();

       const productImage = await homePage.productImage;
       await productImage.waitForDisplayed({ timeout: 10000 });
       await productImage.click();
    });
});