



import{test , expect} from "@playwright/test"

test ("Handling Inbuilt  Locator" , async function ({page}){

    //browser 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //verify image using ALT

    const orangeLogo = page.getByAltText('company-branding')

    //await expect(orangeLogo).toBeVisible - this is hard assertion to check exact locator
    await expect.soft(orangeLogo).toBeVisible // this is soft assertion  to skip assertion

    //enter usdername

    await page .getByPlaceholder('Username').fill('Admin')

    //enter password

    await page.getByPlaceholder('Password').fill('admin123')

    //click on button

    await page.getByRole('button' , {name : ' Login '}).click()


    //verify username using GETLABEL

    const username = await page.locator('[class="oxd-userdropdown-name"]').textContent()
    console.log(username)

    await expect.soft(page.getByText(username)).toBeVisible()

    //handle LABEL

    await expect.soft(page.getByLabel('Sidepanel')).toBeVisible()

    //handle title

    await page.getByTitle('Help').click()

    //handle DATA TEST ID
    //kindly refer https://playwright.dev/docs/locators

/*
    ex ;
    <button data-testid="directions">Itinéraire</button>
    await page.getByTestId('directions').click();

*/
})





    



