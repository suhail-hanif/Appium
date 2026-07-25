import { $  } from '@wdio/globals'
import Page from './page';

/**
 * Sample app page object containing selectors and methods for testing the sample APK
 */
class homePage extends Page {
    /**
     * Define selectors for common elements in the sample app
     */
    public get viewCart () {
        return $('~View cart');
    }

    public get numItemsInCart () {
        return $('~Displays number of items in your cart');
    }

    public get appLogo () {
        return $('~App logo and name');
    }

    public get searchButton () {
        return $('android=new UiSelector().description("Search")');
    }

}

export default new homePage();

