

import {test , expect} from "@playwright/test"

test("validate page" , async ({page})=>{

    //browser

    await page.goto('https://www.demoblaze.com/')

    //title & URL

    const pageTIttle = await page.title()
    const pageURL = await page.url()
    
    console.log("pageTittle" , pageTIttle)
    console.log("pageURL" , pageURL)

    //Asseration | validate | verify

    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/')


    //Login

    await page.locator('[id="login2"]').click()

    //username

    await page.locator('[id="loginusername"]').fill('Hemanathan Murugesan')

    //password

    await page.locator('[id="loginpassword"]').fill('satsun@')

    //login button

    await page.locator('[onclick="logIn()"]').click()

    /*// Asseration Logout optiom

    const user = await page.locator('[id="nameofuser"]').textContent()
    console.log(user)

    await expect.soft(page.getByText(username)).toBeVisible()
    */

    //products

    await expect(page.locator('.list-group')).toHaveText('CATEGORIES')

    const CATEGORIES= await page.$$('//div//a//div')

    for (const elements of CATEGORIES){
        const txt = await elements.textContent()
        console.log(txt)
        }



    

    //logot

    //await page.locator('[id="logout2"]').click()





})