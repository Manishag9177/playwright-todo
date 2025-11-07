const { test, expect } = require('@playwright/test');

test('Add, Complete, Delete To-Do Items', async ({ page }) => {

  await page.goto('https://demo.playwright.dev/todomvc');

  
  const todos = ['Buy groceries', 'Pay bills', 'Walk the dog'];
  for (const todo of todos) {
    await page.fill('.new-todo', todo);
    await page.keyboard.press('Enter');
  }


  const allTodos = await page.locator('.todo-list li label').allTextContents();
  expect(allTodos).toEqual(todos);


  const payBills = page.locator('.todo-list li', { hasText: 'Pay bills' });
  await payBills.locator('.toggle').check();


  await page.click('text=Completed');
  const completedTodos = await page.locator('.todo-list li label').allTextContents();
  expect(completedTodos).toEqual(['Pay bills']);

  
  await page.click('text=All'); // back to All tab
  const buyGroceries = page.locator('.todo-list li', { hasText: 'Buy groceries' });
  await buyGroceries.locator('.destroy').evaluate(el => el.click());


  const remainingTodos = await page.locator('.todo-list li label').allTextContents();
  expect(remainingTodos).toEqual(['Pay bills', 'Walk the dog']);

  
  await page.screenshot({ path: 'reports/todo-final.png', fullPage: true });
});
