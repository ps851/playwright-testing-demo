# Playwright Testing Demo

A professional test automation framework built with Playwright and TypeScript, demonstrating industry standard testing approaches, best practices, and code quality.

## 🧪 What's Included

- **UI Tests** - Testing user interface interactions and element assertions
- **API Tests** - Testing REST API endpoints (GET, POST, PUT, DELETE)
- **E2E Tests** - Full end-to-end user journey testing
- **Negative Tests** - Error handling and security validation
- **Page Object Model** - Professional, maintainable code structure

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) - Test automation framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- Node.js - Runtime environment

## 📁 Project Structure
```
playwright-testing-demo/
├── tests/
│   ├── ui/                       # UI interaction tests
│   │   ├── login.spec.ts         # Login page tests with element assertions
│   │   ├── login-pom.spec.ts     # Login tests using Page Object Model
│   │   └── negative-tests.spec.ts # Error handling and security tests
│   ├── api/                      # REST API tests
│   │   └── rest-api.spec.ts      # CRUD operations tests
│   └── e2e/                      # End-to-end flow tests
│       └── checkout-flow.spec.ts # Full shopping journey test
├── pages/                        # Page Object Model classes
│   ├── BasePage.ts               # Base class with reusable Playwright methods
│   ├── LoginPage.ts              # Login page interactions and assertions
│   └── DashboardPage.ts         # Dashboard page interactions and assertions
├── helpers/                      # Test data and utilities
├── playwright.config.ts          # Playwright configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/playwright-testing-demo.git
cd playwright-testing-demo
```

Install dependencies:
```bash
npm install
```

Install Playwright browsers:
```bash
npx playwright install
```

## ▶️ Running Tests

Run all tests:
```bash
npx playwright test
```

Run specific test category:
```bash
npx playwright test tests/ui
npx playwright test tests/api
npx playwright test tests/e2e
```

Run with UI mode:
```bash
npx playwright test --ui
```

View HTML report:
```bash
npx playwright show-report
```

## 📊 Test Configuration

Tests are configured to run across 3 browsers simultaneously:
- ✅ Chromium (Google Chrome)
- ✅ Firefox
- ✅ WebKit (Safari)

### Failure Evidence
On test failure the framework automatically captures:
- 📸 **Screenshots** - Captured for every test
- 🎥 **Video** - Full recording retained on failure
- 🔍 **Trace** - Detailed trace captured on retry

All artifacts are saved to the `test-results/` folder.

## 🌐 Test Sites Used

- **https://the-internet.herokuapp.com** - UI and login tests
- **https://jsonplaceholder.typicode.com** - API tests
- **https://www.saucedemo.com** - E2E shopping flow

## 💡 Key Features Demonstrated

- Cross-browser testing (Chromium, Firefox, WebKit)
- Page Object Model pattern with JSDoc documentation
- Base page class with reusable Playwright methods
- API testing with request fixtures
- E2E user journey with test.step reporting
- Negative testing and security validation
- Automatic screenshots, video and trace on failure
- Clean, maintainable code following best practices