

import {test , expect} from "@playwright/test"

test ("TC_001 verify browser title & Url" , async function ({page}) { //fixture

    //browser
await page.goto("https://www.amazon.in/")

//tittle

const pageTittle = await page.title()
const pageURL = await page.url()

console.log("page URL" , pageURL)
console.log("page Tittle" , pageTittle)

//Asseration | validate | verify

await expect(page)
.toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')

await expect(page).toHaveURL("https://www.amazon.in/")
    
    
})