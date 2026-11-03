

import{test ,expect} from "@playwright/test"

test("Handling DatePicker" , async ({page}) =>{

    //browser

     await page.goto('https://testautomationpractice.blogspot.com/')

     //click

     const DatePicker = page.locator('[id="datepicker"]')

     await DatePicker.click()
     await page.waitForTimeout(3000)

     //target

     let date = '15'
     let month ='August'
     let year ='2027'

     //loop

     while(true){

        const cMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
        const cYear = await page.locator('[class="ui-datepicker-year"]').textContent()

        if(cMonth == month && cYear == year){
            break
        }

        //next

        await page.locator('//span[text()="Next"]').click()

        /*
        //prev
        
        await page.locator('//sapn{text()="Prev"}').click()
        */
    
    }

    //Date

    await page.locator(`[data-date="${date}"]`).click()
    await page.waitForTimeout(3000)



})