# Sample APK Test Suite

Comprehensive test suite for the Android sample application using Appium and WebdriverIO.

## Prerequisites

### Required Software
- Node.js (v16 or higher)
- Android SDK/Emulator
- Appium (v2.0+)
- Java Development Kit (JDK)

### Installation

```bash
# Install dependencies
npm install

# Install Appium globally
npm install -g appium

## Configuration

The test configuration is defined in:
- **wdio.local.ts** - Local Appium configuration
- **wdio.conf.ts** - Cloud configuration

### Key Settings in wdio.local.ts
- **Device**: Android emulator (configurable)
- **Platform Version**: Android 16.0
- **Automation**: UiAutomator2
- **App Path**: `apps/sample.apk`

## Running Tests

### Run all tests
```bash
npm run wdio
```

### Run specific test file
```bash
npx wdio run wdio.local.ts --spec test/specs/sample-app.e2e.ts
```

## CI/CD Integration

To integrate with CI/CD pipeline, update `wdio.conf.ts` with cloud service configuration or ensure Appium server is available in your pipeline environment.

## Additional Resources

- [WebdriverIO Documentation](https://webdriver.io/)
- [Appium Documentation](https://appium.io/)
- [Android UIAutomator Selectors](https://appium.io/docs/en/writing-running-appium/caps/appium-opts/#automationname)
