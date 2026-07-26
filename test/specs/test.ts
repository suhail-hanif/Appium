import homePage from '../pageobjects/homePage.ts';

describe('Product detail tests', () => {
    it('should open a product and display the product details', async () => {
       const productText = await homePage.productText;
       await productText.waitForDisplayed({ timeout: 10000 });
       await expect(productText).toBeDisplayed();

       const productImage = await homePage.productImage;
       await productImage.waitForDisplayed({ timeout: 10000 });
       await productImage.click();
    });
});