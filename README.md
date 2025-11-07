# Playwright To-Do Assignment

## Project Overview
This project automates a simple To-Do management flow using **Playwright** with **JavaScript (Node.js)**.  
Demo site: [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)

### Features Tested
- Add three to-do items: "Buy groceries", "Pay bills", "Walk the dog"
- Verify all items appear in the list
- Mark one item as completed and verify it in the Completed tab
- Delete one of the remaining tasks and verify it no longer appears
- Take a screenshot at the end of the test
- Test runs in Chromium (bonus: WebKit can be added)

## Project Structure
playwright-todo/
├── tests/
│   └── todo.spec.js
├── reports/
│   └── todo-final.png
├── package.json
├── playwright.config.js
└── README.md

## Installation & Running Tests
1. Clone the repo or extract the ZIP.
2. Open terminal in the project folder.
3. Install dependencies and Playwright browsers:
```bash
npm install
npx playwright install
