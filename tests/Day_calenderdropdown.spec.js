


import{test ,expect} from "@playwright/test"

test("Handling Dropdowndatepicker" , async ({page}) =>{

    //browser

     await page.goto('https://testautomationpractice.blogspot.com/')

     //click

     const DatePicker = page.locator('[id="txtDate"]')

     await DatePicker.click()
     await page.waitForTimeout(3000)

     

     
})

