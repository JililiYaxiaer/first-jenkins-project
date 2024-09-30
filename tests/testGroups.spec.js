import {test} from "@playwright/test";

test.describe("Test Group1", () => {

    test.beforeAll( () => {
        // run once
    });

    test.afterAll( () => {
        // run once
    });

    test.beforeEach( () => {
        // run before each test 
    })

    test.afterEach( () => {
        // run after each test 
    })

    test("Test case 1", async ({page}) => {

    });

    test("Test case 2", async ({page}) => {

    });


    test("Test case 3", async ({page}) => {

    });

});