import {test} from '@playwright/test';

test.describe('@smoke Test Group', () => {

    
    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com");
    });


    test.afterEach(async ({page}) => {
       
    });

    
test('Getting the title of the page', async ({ page }) => {
    let actualTitle = await page.title();
    console.log(actualTitle);
  });
  

  test('Getting the current url of the page', async ({ page }) => {
    console.log(page.url);
  });
  

  });