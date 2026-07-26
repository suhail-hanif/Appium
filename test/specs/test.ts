import homePage from '../pageobjects/homePage.ts';
import cartPage from '../pageobjects/cart.ts';
import productDetail from '../pageobjects/productDetail.ts';

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
        const product = await homePage.productItem;
        await product.waitForDisplayed({ timeout: 10000 });
        await product.click();

        const productDetailHeader = await productDetail.productDetailHeader;
        await productDetailHeader.waitForDisplayed({ timeout: 10000 });
        await expect(productDetailHeader).toBeDisplayed();
    });
});