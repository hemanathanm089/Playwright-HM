


import{test ,expect} from "@playwright/test"

test("Handling Pagination Web Table" , async ({page}) =>{

    //browser

     await page.goto('https://testautomationpractice.blogspot.com/')

     //scroll

     await page.locator('[id="productTable"]').scrollIntoViewIfNeeded()
     await page.waitForTimeout(3000)

     //count column & Row

     const tableColunm = page.locator('[id="productTable"] thead tr th')
     console.log("Table column :" , await tableColunm.count())

     const tableRow = page.locator('[id="productTable"]>tbody > tr')
     console.log("Table Row :" , await tableRow.count())

     //select single product

     const selectProduct =await tableRow.filter({ has : page.locator('td') , hasText : 'Tablet'})

     await selectProduct.highlight()
     await selectProduct.locator('input').click()
     console.log(await selectProduct.textContent())
     await page.waitForTimeout(3000)

     //select multiple product
     
     async function selectMproduct(prodName) {
    const selectProduct =await tableRow.filter({ has : page.locator('td') , hasText : prodName})

     //await selectProduct.highlight()
     await selectProduct.locator('input').click()
     await page.waitForTimeout(3000)
     console.log(prodName)
     }

     await selectMproduct('Smartwatch')
     await selectMproduct('Laptop')
     await page.waitForTimeout(3000)



})

























