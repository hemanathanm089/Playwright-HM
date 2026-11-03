


import {test , expect} from "@playwright/test"

test ("Handling radio & Checkbox" , async function({page}){

    //browser

    await page.goto('https://testautomationpractice.blogspot.com/')

    //waitfor

    await page.locator('text = Data Entry Form').waitFor()

    //fill

    await page.locator('[placeholder="Enter Name"]').fill('AK')


    //hard wait

    await page.waitForTimeout(2000)

    //sequenlly fill

    await page.locator('[id="email"]').pressSequentially('ak@gmail.com')

    //hard wait

    await page.waitForTimeout(2000)

    //radio

    await page.locator('[id="male"]').check()

    //assert

    await expect (page.locator('[id="male"]')).toBeChecked

    //hard wait
/
    await page.waitForTimeout(2000)

    //checkbox

    await page.locator('[id="sunday"]').check()

    //assert

    await expect(page.locator('[id="sunday"]').isChecked).toBeTruthy()

    //hard wait
/
    await page.waitForTimeout(2000)

    console.log("All action are completed")
})



    test.only("Handling Multiple radio & Checkbox" , async function({page}){

    //browser

    await page.goto('https://testautomationpractice.blogspot.com/')

    //waitfor

    await page.locator('text = Data Entry Form').waitFor()

    //select multiple option

    const multiplechecks = [
        page.locator('[id="tuesday"]') ,
        page.locator('[id="thursday"]') ,
        page.locator('[id="saturday"]')
    ]

    for (const element of multiplechecks) {

        await element.check()
        await expect(element).toBeChecked()
        await page.waitForTimeout(1500)
        
    }

    // approach 2

    const multiplechecks1 =await page.$$('[class="form-check-label"]')

    for (const element of multiplechecks1) {

        const text =await element.textContent()

        if(text == 'Monday'||text == 'Wednesday'){
            await element.check()
            await page.waitForTimeout(1500)
            console.log(text , "Selected")
        }


        
    }

    //unselect
     for (const element of multiplechecks1) {

        const text =await element.textContent()

        if(text == 'Monday'||text == 'Wednesday'){
            await element.uncheckcheck()
            await page.waitForTimeout(1500)
            console.log(text , "UnSelected")
        }


        
    }
})
        
    












