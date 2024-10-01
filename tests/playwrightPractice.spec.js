import {test} from '@playwright/test';

test('Youtube Search',async({page})=>{
    await page.goto('https://www.youtube.com');
  

    let searchBox = page.locator("//div[@id='container']//input[@id='search']")

    await searchBox.click();

    await searchBox.fill("cydeo");
    

    await searchBox.press('Enter');

  

    let firstResult = page.locator("//img[@src='https://i.ytimg.com/vi/mbRWW7GcNtQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApm6zl3VEDuCFoPTVFlhh97XZqxw']")
    await firstResult.click();


});