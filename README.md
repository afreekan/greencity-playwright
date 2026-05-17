# GreenCity Playwright Framework

This project is a skeleton (base structure) of a test framework for automated UI testing using [Playwright](https://playwright.dev/). It is built using the Page Object Model (POM) pattern and contains ready-to-use configurations for writing, executing, and maintaining automated tests efficiently.

## 📦 Installing Dependencies

Before starting, ensure that Node.js is installed. To download all necessary packages, run the following command in the terminal:

```bash
npm install
```

If the browsers required for Playwright are not installed automatically, run:
```bash
npx playwright install
```

## 🚀 Running Tests

To execute all tests in headless mode (without opening a browser window), use the base command:

```bash
npx playwright test
```

**Other useful commands:**
- `npx playwright test --ui` — runs tests in the interactive Playwright UI mode.
- `npx playwright test --headed` — runs tests in headed mode (visually showing the browser window).
- `npx playwright test --project=chromium` — runs tests only for a specific browser.
- `npx playwright show-report` — opens the generated HTML test report after execution.

## 📂 Project Structure

The project is structured to separate UI interaction logic, configuration, and the tests themselves:

- **`pages/`** — contains Page Object Model (POM) classes. Each file describes a specific page of the application, its locators (elements), and interaction methods.
- **`components/`** — contains classes for reusable UI components that might appear across multiple pages (e.g., header, footer, modals, navigation menus).
- **`fixtures/`** — custom Playwright fixtures. These are used to set up the state before a test (e.g., initializing pages, quick authorization) and make test code shorter and cleaner.
- **`tests/`** — the directory containing the actual test files (`*.spec.ts` scripts).
- **`utils/`** — helper functions and utilities. This includes tools for working with environment variables (`env.ts`), generating random data, formatting, etc.

---
💡 **Important:** Before running the tests, copy the `.env.example` file, rename it to `.env`, and fill in your actual configuration data (URL, credentials, etc.).
