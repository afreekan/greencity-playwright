# GreenCity UI Automation Testing

[![Allure Report](https://img.shields.io/badge/Allure%20Report-View-blue)](https://afreekan.github.io/greencity-playwright/)

Проєкт автоматизації тестування для вебдодатка [GreenCity](https://www.greencity.cx.ua/#/greenCity) на базі Playwright, TypeScript та Node.js. 
Побудований з використанням Page Object Model (POM) та Component-Based Approach.

## Структура проєкту

- `pages/` — Page Objects для сторінок (напр., `EcoNewsPage.ts`, `CreateNewsPage.ts`).
- `components/` — Компоненти сторінок, що повторюються (напр., `Header.ts`, `CancelModal.ts`).
- `tests/` — Специфікації тестів з тестовими сценаріями (напр., `eco-news.spec.ts`).
- `utils/` — Допоміжні утиліти (робота з `.env` тощо).
- `playwright.config.ts` — Конфігурація Playwright (baseURL, репортери, браузери).
- `.github/workflows/` — Налаштування CI/CD для GitHub Actions.

## Встановлення та розгортання

1. **Клонуйте репозиторій та перейдіть у папку проєкту:**
   ```bash
   git clone <repository_url>
   cd greencity-playwright
   ```

2. **Встановіть залежності (Node.js пакети):**
   ```bash
   npm install
   ```

3. **Встановіть браузери для Playwright:**
   ```bash
   npx playwright install
   ```

4. **Налаштуйте змінні середовища:**
   Перейменуйте або скопіюйте файл `.env.example` у `.env`. 
   Переконайтесь, що параметр `BASE_URL` має значення `https://www.greencity.cx.ua/#/greenCity`.

## Запуск тестів

Запустити всі тести у headless-режимі (фоновий режим):
```bash
npx playwright test
```

Запустити тести з відкриттям вікна браузера (UI-режим):
```bash
npx playwright test --ui
```

Запустити тести у видимому режимі звичайного виконання (headed mode):
```bash
npx playwright test --headed
```

Запустити тести лише в конкретному браузері (наприклад, Chromium):
```bash
npx playwright test --project=chromium
```

## Звіти (Allure Report)

Проєкт інтегровано з Allure Report. Після виконання тестів, результати зберігаються в папці `allure-results`.

Щоб згенерувати звіт на основі результатів:
```bash
npx allure generate ./allure-results --clean
```

Щоб відкрити згенерований звіт:
```bash
npx allure open ./allure-report
```

## Написання тестів
- Використовуйте `test.step()` для логування кроків у звіти Allure.
- усі селектори мають знаходитись у `pages/` або `components/`.
- Використовуйте типізацію TypeScript.
