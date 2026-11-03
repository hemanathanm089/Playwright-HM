
import{test , expect} from "@playwright/test"

test("Handle Dialogbox event" , async ({page}) =>{

 //browser

 await page.goto('https://testautomationpractice.blogspot.com/')

 //scroll

 await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
 await page.waitForTimeout(3000)

 //EventListener

 page.on('dialog' , async(a) =>{

    expect(a.type()).toEqual('alert')
    expect(a.message()).toContain('I am an alert box!')
    await page.waitForTimeout(1500)
    await a.accept()
 })

 //click

 await page.locator('[id="alertBtn"]').click()
 await page.waitForTimeout(3000)

})





test("Handle confirm event" , async ({page}) =>{

 //browser

 await page.goto('https://testautomationpractice.blogspot.com/')

 //scroll

 await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
 await page.waitForTimeout(3000)

 //EventListener

 page.on('dialog' , async(a) =>{

    expect(a.type()).toEqual('confirm')
    expect(a.message()).toContain('Press a button!')
    await page.waitForTimeout(1500)
    await a.dismiss()
 })

 //click

 await page.locator('[id="confirmBtn"]').click()
 await page.waitForTimeout(3000)

})




test.only("Handle prompt event" , async ({page}) =>{

 //browser

 await page.goto('https://testautomationpractice.blogspot.com/')

 //scroll

 await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
 await page.waitForTimeout(3000)

 //EventListener

 page.on('dialog' , async(a) =>{

    expect(a.type()).toEqual('prompt')
    expect(a.message()).toContain('Please enter your name:')
    expect(a.defaultValue()).toContain('Harry Potter')
    await page.waitForTimeout(1500)
    await a.accept('Akash')
 })

 //click

 await page.locator('[id="promptBtn"]').click()
 await page.waitForTimeout(3000)

})



















