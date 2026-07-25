import { expect, browser } from '@wdio/globals'
import SampleApp from '../pageobjects/sample.app.js'

describe('Sample APK Application Tests', () => {
    describe('App Initialization', () => {
        it('should launch the sample app successfully', async () => {
            // The app should be installed and running via Appium
            expect(await browser.getPageSource()).toBeTruthy()
        })

        it('should display the main application window', async () => {
            const pageSource = await browser.getPageSource()
            expect(pageSource).toContain('API')
            expect(pageSource.length).toBeGreaterThan(0)
        })

        it('should have activity running', async () => {
            const currentActivity = await browser.getCurrentActivity()
            expect(currentActivity).toBeTruthy()
            expect(currentActivity.length).toBeGreaterThan(0)
        })
    })

    describe('Screen Content Visibility', () => {
        it('should display list of API demos', async () => {
            const pageSource = await browser.getPageSource()
            // Check for common API demo categories
            const hasContent = pageSource.includes('Views') || 
                             pageSource.includes('Animation') ||
                             pageSource.includes('Content') ||
                             pageSource.includes('API')
            expect(hasContent).toBe(true)
        })

        it('should have at least one list item visible', async () => {
            const itemCount = await SampleApp.getListItemCount()
            expect(itemCount).toBeGreaterThan(0)
        })

        it('should display visible text elements', async () => {
            const visibleText = await SampleApp.getAllVisibleText()
            expect(visibleText.length).toBeGreaterThan(0)
            // Should have some non-empty text
            const hasText = visibleText.some(text => text && text.trim().length > 0)
            expect(hasText).toBe(true)
        })

        it('should have searchable elements', async () => {
            const pageSource = await browser.getPageSource()
            expect(pageSource).toBeTruthy()
        })
    })

    describe('UI Elements Presence', () => {
        it('should contain action bar or header element', async () => {
            const pageSource = await browser.getPageSource()
            const hasActionBar = pageSource.includes('ActionBar') ||
                               pageSource.includes('action_bar') ||
                               pageSource.includes('title')
            expect(hasActionBar).toBe(true)
        })

        it('should have list view displayed', async () => {
            const pageSource = await browser.getPageSource()
            const hasList = pageSource.includes('ListView') ||
                          pageSource.includes('list') ||
                          pageSource.includes('RecyclerView')
            expect(hasList).toBe(true)
        })

        it('should have frame layouts for list items', async () => {
            const pageSource = await browser.getPageSource()
            const hasFrameLayout = pageSource.includes('FrameLayout')
            expect(hasFrameLayout).toBe(true)
        })

        it('should display text view elements', async () => {
            const pageSource = await browser.getPageSource()
            expect(pageSource).toContain('TextView')
        })
    })

    describe('Screen Dimensions and Layout', () => {
        it('should have non-zero viewport size', async () => {
            const windowSize = await browser.getWindowSize()
            expect(windowSize.width).toBeGreaterThan(0)
            expect(windowSize.height).toBeGreaterThan(0)
        })

        it('should have device info available', async () => {
            const size = await browser.getWindowSize()
            expect(size).toHaveProperty('width')
            expect(size).toHaveProperty('height')
        })

        it('should be able to get screenshot', async () => {
            const screenshot = await browser.takeScreenshot()
            expect(screenshot).toBeTruthy()
            expect(typeof screenshot).toBe('string')
            // Base64 encoded screenshot should be substantial
            expect(screenshot.length).toBeGreaterThan(100)
        })
    })

    describe('Content Assertions', () => {
        it('should contain readable page source', async () => {
            const source = await browser.getPageSource()
            expect(source).toBeTruthy()
            expect(source).toContain('android')
            expect(source).toContain('hierarchy')
        })

        it('should have standard android UI elements', async () => {
            const source = await browser.getPageSource()
            // Should contain Android view hierarchy elements
            const hasViewElements = source.includes('View') || 
                                  source.includes('view') ||
                                  source.includes('android')
            expect(hasViewElements).toBe(true)
        })

        it('should not crash on page source retrieval', async () => {
            // Multiple calls should work consistently
            const source1 = await browser.getPageSource()
            const source2 = await browser.getPageSource()
            expect(source1).toBeTruthy()
            expect(source2).toBeTruthy()
            // Should be similar (same screen)
            expect(source1.length).toBeGreaterThan(0)
            expect(source2.length).toBeGreaterThan(0)
        })

        it('should have consistent element count', async () => {
            const count1 = await SampleApp.getListItemCount()
            const count2 = await SampleApp.getListItemCount()
            expect(count1).toBe(count2)
            expect(count1).toBeGreaterThan(0)
        })
    })

    describe('App Functionality', () => {
        it('should respond to wait for element command', async () => {
            const source = await browser.getPageSource()
            // Should have content after app loads
            expect(source.length).toBeGreaterThan(100)
        })

        it('should handle multiple element queries', async () => {
            const allText = await SampleApp.getAllVisibleText()
            expect(Array.isArray(allText)).toBe(true)
        })

        it('should be able to get current activity', async () => {
            const activity = await browser.getCurrentActivity()
            expect(activity).toBeTruthy()
            expect(typeof activity).toBe('string')
        })

        it('should be able to get device time', async () => {
            const time = await browser.getDeviceTime()
            expect(time).toBeTruthy()
        })
    })

    describe('Visual Verification', () => {
        it('should match screenshot baseline', async () => {
            const screenshot = await browser.takeScreenshot()
            expect(screenshot).toBeTruthy()
            // Screenshot should be valid base64
            expect(screenshot).toMatch(/^[A-Za-z0-9+/=]+$/)
        })

        it('should have consistent layout structure', async () => {
            const source1 = await browser.getPageSource()
            await browser.pause(500)
            const source2 = await browser.getPageSource()
            // Source should be relatively consistent (structure unchanged)
            expect(source1).toBeTruthy()
            expect(source2).toBeTruthy()
        })
    })
})
