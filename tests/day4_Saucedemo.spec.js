

import{test , expect} from "@playwright/test"

test ("Handle Sauce Demo E2E Flow" , async function({page}){

    //broeser

    await page.goto('https://www.saucedemo.com/')

    //Username & Pwd

    await page.locator('[id="user-name"]').fill('standard_user')
    await page.locator('[id="password"]').fill('secret_sauce')

    //Login button

    await page.locator('//input[@id="login-button"]').click()

    //verify product

    await expect(page.locator('.title')).toHaveText('Products')

    //print products

    const products = await page.$$('//div//a//div')

    for (const elements of products){
        const txt = await elements.textContent()
        console.log(txt)
        }

    //select a product

    await page.locator("//div[text()='Sauce Labs Bolt T-Shirt']").click()

    //add to cart

    await expect(page.locator('[id="add-to-cart"]')).toBeVisible()
    await page.locator('[id="add-to-cart"]').click()

    //cart icon

    await page.locator('[data-test="shopping-cart-link"]').click()

    //checkout

    await expect(page.locator('button' , {hasText:"Checkout"})).toBeVisible()
    await page.locator('button' , {hasText:"Checkout"}).click()

    //filldetrails
    await page.locator('[id="first-name"]').fill('AK')
    await page.locator('[id="last-name"]').fill('Ani')
    await page.locator('[id="postal-code"]').fill('600235')
    
    //continue

    await page.locator('[id="continue"]').click()

    //finish

    await page.locator('button' , {hasText})




})




