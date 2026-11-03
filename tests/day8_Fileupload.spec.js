


import{test ,expect} from "@playwright/test"

test("Handling File upload" , async ({page}) =>{

    //browser

     await page.goto('https://testautomationpractice.blogspot.com/')

     //scroll

     await page.locator('text=Upload Files').scrollIntoViewIfNeeded()

     //hardwait

     await page.waitForTimeout(3000)

     //single

     await page.locator('[id="singleFileInput"]').
     setInputFiles("C:/Users/User/Desktop/Image to PDF 20260928 20.52.28.pdf")
     

     //hardwait

     await page.waitForTimeout(3000)

     //Multiple

     await page.locator('[id="multipleFilesInput"]').
     setInputFiles(["C:/Users/User/Desktop/Image to PDF 20260928 20.52.28.pdf", 
        "C:/Users/User/Downloads/SR CATERING.pdf"])

    //hardwait

     await page.waitForTimeout(3000)
     

})