

import{test , expect} from "@playwright/test"
import { LoginPage } from "../../Pages/loginpage"

test("Hadle demoblaze" ,async({page})=>{

    let login = new LoginPage(page)

    await login.navigate()
    await login.clickLinkTxt()
    await login.enterUsername("Raviteja18")
    await login.enterPassword("Trend@123")
    await login.clickLogin()
    await login.verifyDashboard()


})