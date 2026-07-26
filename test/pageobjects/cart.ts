import { $  } from '@wdio/globals'
import Page from './page';

/**
 * Sample app page object containing selectors and methods for testing the sample APK
 */
class cartPage extends Page {
    /**
     * Define selectors for common elements in the sample app
     */
    public get emptyCartMsg () {
        return $('android=new UiSelector().text("Oh no! Your cart is empty. Fill it up with swag to complete your purchase.")');
    }

    public get goShoppingBtn () {
        return $('android=new UiSelector().text("Go Shopping")');
    }

}

export default new cartPage();