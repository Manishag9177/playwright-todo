const { test, expect } = require('@playwright/test');

test('Add, Complete, Delete To-Do Items', async ({ page }) => {
  // 1️⃣ Go to demo site
  await page.goto('https://demo.playwright.dev/todomvc');

  // 2️⃣ Add three todos
  const todos = ['Buy groceries', 'Pay bills', 'Walk the dog'];
  for (const todo of todos) {
    await page.fill('.new-todo', todo);
    await page.keyboard.press('Enter');
  }

  // 3️⃣ Verify all items appear
  const allTodos = await page.locator('.todo-list li label').allTextContents();
  expect(allTodos).toEqual(todos);

  // 4️⃣ Complete one item: Pay bills
  const payBills = page.locator('.todo-list li', { hasText: 'Pay bills' });
  await payBills.locator('.toggle').check();

  // 5️⃣ Verify Completed tab
  await page.click('text=Completed');
  const completedTodos = await page.locator('.todo-list li label').allTextContents();
  expect(completedTodos).toEqual(['Pay bills']);

  // 6️⃣ Delete one remaining task: Buy groceries
  await page.click('text=All'); // back to All tab
  const buyGroceries = page.locator('.todo-list li', { hasText: 'Buy groceries' });
  await buyGroceries.locator('.destroy').evaluate(el => el.click());

  // 7️⃣ Verify deletion
  const remainingTodos = await page.locator('.todo-list li label').allTextContents();
  expect(remainingTodos).toEqual(['Pay bills', 'Walk the dog']);

  // 8️⃣ Screenshot
  await page.screenshot({ path: 'reports/todo-final.png', fullPage: true });
});
