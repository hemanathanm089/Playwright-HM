



import{test , expect} from "@playwright/test"

test("Handling a screenshot visible page" , async ({page}) =>{

    //browser
    
    await page.goto('https://www.amazon.in/')

    //wait

    await page.waitForTimeout(5000)

    //screenshot

    await page.screenshot({path : 'screenshot/' + 'visiblepage.png' })
}
)


test("Handling a screenshot entire page" , async ({page}) =>{

    //browser
    
    await page.goto('https://www.amazon.in/')

    //wait

    await page.waitForTimeout(5000)

    //screenshot

    await page.screenshot({path : 'screenshot/' + 'entire.png' ,fullPage : true })
}
)


test.only("Handling a screenshot particular page" , async ({page}) =>{

    //browser
    
    await page.goto('https://www.amazon.in/')

    //wait

    await page.waitForTimeout(5000)

    //screenshot

    await page.locator('[aria-label="Amazon.in"]').screenshot({path : 'screenshot/' + 'particular.png' })
}
)

