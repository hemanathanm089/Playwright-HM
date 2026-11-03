/**
 * Browser :
 * What it is: The actual browser instance 
 * (Chromium, Firefox, or WebKit) launched by the automation process.
 * 
 * Context :
 *  An isolated, incognito-like user session within a browser instance. 
 * It has its own independent cookies, cache, local storage, and permissions.
 * 
 * Page : 
 *  A single tab, window, or frame inside a BrowserContext.
 */


import {test , expect ,Chromium,Firefox,WebKit, chromium}from "@playwright/test"

test("handling new window" , async({page}) =>{

    //browser

    const browser = await chromium.launch({
        headless : false ,slowMo : 1500 , channel : 'msedge'
    })
    
    const context = await browser.newContext({
        permissions :[]
    })


    const page1 = await context.newPage()

    await page1.goto('https://www.demoblaze.com/')
    await page1.locator('[id="login2"]').click()
    await page1.locator('[id="loginusername"]').fill('Hemanathan Murugesan')
    await page1.locator('[id="loginpassword"]').fill('satsun@')
    await page1.locator('[onclick="logIn()"]').click()

    await expect(page.locator('[id="logout2"]')).toBeVisible()


    const page2=  await context.newPage()


    await page2.goto('https://www.demoblaze.com/')
    await page2.locator('[id="login2"]').click()
    await page2.locator('[id="loginusername"]').fill('Hemanathan Murugesan')
    await page2.locator('[id="loginpassword"]').fill('satsun@')
    await page2.locator('[onclick="logIn()"]').click()
})
