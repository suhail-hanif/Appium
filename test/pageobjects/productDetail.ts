import { $ } from "@wdio/globals";
import Page from "./page";

/**
 * Sample app page object containing selectors and methods for testing the sample APK
 */
class productDetail extends Page {
  /**
   * Define selectors for common elements in the sample app
   */
  get productDetailHeader() {
    return $("~product_detail_header");
  }
}

export default new productDetail();
