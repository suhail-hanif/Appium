import { $  } from '@wdio/globals'
import Page from './page';

/**
 * Sample app page object containing selectors and methods for testing the sample APK
 */
class cartPage extends Page {
    /**
     * Define selectors for common elements in the sample app
     */
    public get cartScreenTitle () {
        return $('~cart_screen_title');
    }

}

export default new cartPage();