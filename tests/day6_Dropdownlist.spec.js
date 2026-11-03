


import{test , expect} from "@playwright/test"

test("Handling sing Dropdown", async ({page}) =>{
    
    //browser

    
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll

    await page.locator('text=Country:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //dropdown

    const dropDown = page.locator('[id="country"]')
    await dropDown.click()

    //visible Text

    await dropDown.selectOption('India')
    await page.waitForTimeout(2000)

    //label

    await dropDown.selectOption({label : 'China' })
    await page.waitForTimeout(2000)

    //value

     await dropDown.selectOption({value : 'australia' })
    await page.waitForTimeout(2000)

    //index
    
    await dropDown.selectOption({index : 3 })
    await page.waitForTimeout(2000)




}
)


test("Handling Multiple Dropdown", async ({page}) =>{

    //browser

    
    await page.goto('https://testautomationpractice.blogspot.com/')

    //select multi option

    const multiDropdown = page.locator('[id="colors"]')
   
    //scroll

    await multiDropdown.scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    await multiDropdown.selectOption(['Red' , 'Green' , 'Yellow' , 'Red'  , 'Green'])
     await page.waitForTimeout(4000)

     //unselect

     await multiDropdown.selectOption([])
     await page.waitForTimeout(4000)

     await multiDropdown.selectOption([{label:'Red'} , {value : 'green'} , {value : 'yellow'} ,{index : 4} , {index : 6}])
     await page.waitForTimeout(4000)
}
)


test.only("Handle Dynamic DropDown" , async ({page}) => {

    //browser
    await page.goto('https://www.google.com/')

    //waitfor
    await page.locator('//textarea[@placeholder]').waitFor({state : 'visible'})

    //search
    await page.locator('[id="ti6dpd"]').pressSequentially("amazon")
    await page.waitForTimeout(3000)

    //waitFor Selector
    await page.waitForSelector('//div[@class="wM6W7d"]//span')

    //get the result and select a targeted option
   const getResult = await page.$$('//div[@class="wM6W7d"]//span')

   for (const element of getResult) {
    
      const text =  await element.textContent()

      if(text.includes('amazon prime video')){
        await element.click()
        break
      }
   }

   //wait loadstate
   await page.waitForLoadState()

   //select first option
   await page.locator('h3').first().click()

   //hardwait
   await page.waitForTimeout(3000)

})