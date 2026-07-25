import { $ } from '@wdio/globals'

/**
 * Sample app page object containing selectors and methods for testing the sample APK
 */
class SampleApp {
    /**
     * Define selectors for common elements in the sample app
     */
    public get appHeader () {
        return $('id=com.example.android.apis:id/action_bar_container');
    }

    public get mainTitle () {
        return $('android=new UiSelector().text("API Demos")');
    }

    public get apiDemosList () {
        return $('android=new UiSelector().resourceId("android:id/list")');
    }

    public get firstListItem () {
        return $('android=new UiSelector().className("android.widget.FrameLayout").index(0)');
    }

    public get allTextViews () {
        return $$('android=new UiSelector().className("android.widget.TextView")');
    }

    public get searchButton () {
        return $('android=new UiSelector().description("Search")');
    }

    /**
     * Get text from all visible elements on screen
     */
    public async getAllVisibleText () {
        const elements = await this.allTextViews;
        const texts = [];
        for (const element of elements) {
            try {
                const text = await element.getText();
                if (text) texts.push(text);
            } catch (e) {
                // Skip elements that can't be read
            }
        }
        return texts;
    }

    /**
     * Get the number of items in the list
     */
    public async getListItemCount () {
        const items = await $$(
            'android=new UiSelector().className("android.widget.FrameLayout")'
        );
        return items.length;
    }

    /**
     * Tap on a list item by index
     */
    public async tapListItemByIndex (index: number) {
        const items = await $$(
            'android=new UiSelector().className("android.widget.FrameLayout")'
        );
        if (index < items.length) {
            await items[index].click();
        }
    }

    /**
     * Tap on a list item by text
     */
    public async tapListItemByText (text: string) {
        const item = $(
            `android=new UiSelector().text("${text}")`
        );
        await item.click();
    }
}

export default new SampleApp();
