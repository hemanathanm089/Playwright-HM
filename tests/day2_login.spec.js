

import {test , expect}  from "@playwright/test"

test("validate Login functions" , async function ({page}) {

    //open browser

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    //username

    await page.locator('[id="username"]') . fill('student')

    //password

    await page.locator("[name='password']") . fill ('Password123')
    
    //click login button

    await page.locator('[class="btn"]').click()

    //verify password

    await expect(page.locator('.post-title')).toBeVisible()

    await expect(page.locator("//h1")).toHaveText('Logged In Successfully')
    
})