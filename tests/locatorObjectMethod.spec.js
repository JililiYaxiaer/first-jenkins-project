import {test} from '@playwright/test';
import { text } from 'stream/consumers';

test.describe('Test Group', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com');
    })

    test.afterEach(async ({page}) => {
        await page.waitForTimeout(3000);
    })

  test('check() method checks the radio buttons and checkboxes if they havnt check yet', async ({ page }) => {
    let link_checkbox = page.locator("text='Checkboxes'");
    await link_checkbox.click();

    let checkbox1 = page.locator("input#box1[type='checkbox']");
    await checkbox1.check();
  });

  test('uncheck() method unchecks the radio buttons and check boxes', async ({ page }) => {
    let link_checkbox = page.locator("text='Checkboxes'");
    await link_checkbox.click();

    let checkbox2 = page.locator("input#box2[type='checkbox']");
    await checkbox2.uncheck();
  });

  test('selectOption() method is use for dropdowns', async ({ page }) => {
    let link_dropdown = page.locator("text='Dropdown'");
    await link_dropdown.click();

    let dropdown = page.locator("select#dropdown");
    
    //select by value
    await dropdown.selectOption("1");

    //select by visible text
    await dropdown.selectOption({ label: 'Option 2' });

    //select by index
    await dropdown.selectOption({ index: 2 });

  });


  test('innerText() retrives the visible text ', async ({ page }) => {
    let headerElement = page.locator("span.h1y")
    let actual_Text = await headerElement.innerText();

    console.log(actual_Text);
  });

  
  test('inputValue(): only works with <input>, <textarea>, or <select>', async ({ page }) => {
    
    await page.getByText('Inputs').click();
    let inputElement = page.locator("//input[@type='number']");

    await inputElement.fill('123');
    let actual_Value = await inputElement.inputValue();
    console.log(actual_Value);


  });



});