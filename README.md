# Playwright Testing Demo

A professional test automation framework built with Playwright and TypeScript, demonstrating different testing approaches and best practices.

## 🧪 What's Included

- **UI Tests** - Testing user interface interactions and validations
- **API Tests** - Testing REST API endpoints (GET, POST, PUT, DELETE)
- **E2E Tests** - Full end-to-end user journey testing
- **Page Object Model** - Professional, maintainable code structure

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) - Test automation framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- Node.js - Runtime environment

## 📁 Project Structure
```
playwright-testing-demo/
├── tests/
│   ├── ui/          # UI interaction tests
│   ├── api/         # REST API tests
│   └── e2e/         # End-to-end flow tests
├── pages/           # Page Object Model classes
│   ├── BasePage.ts
│   └── LoginPage.ts
├── helpers/         # Test data and utilities
└── playwright.config.ts
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

## 🌐 Test Sites Used

- **https://the-internet.herokuapp.com** - UI login tests
- **https://jsonplaceholder.typicode.com** - API tests
- **https://www.saucedemo.com** - E2E shopping flow

## 📊 Features Demonstrated

- Cross-browser testing (Chromium, Firefox, WebKit)
- Page Object Model pattern
- API testing with request fixtures
- E2E user journey testing
- Automatic HTML reports
- Screenshot on failure