


import {test , expect , request} from "@playwright/test"
import {apiEndPoints} from "../../utils/endpoints.json"


test ('GET _ REQ GetAllUsers' , async()=>{

    const apiRequest= await request.newContext()

    const response = await apiRequest.get(process.env.API_BASEURL  + apiEndPoints.getAllUsers)

    const body = await response.json()
    console.log(body)

    expect(response.status()).toBe(200)


})

let token

test.only('POST _ REQ LoginUser' , async()=>{


    const apiRequest= await request.newContext()

    const response = await apiRequest.post(process.env.API_BASEURL  +apiEndPoints.loginUser ,
        {
            headers :{'Content-Type' : "application/json"},
            data:{
                username : process.env.API_USERNAME ,
                password : process.env.API_PASSWORD
            }
        }

    )

    const body =  await response.json()
    console.log(body)

    token = await body.accessToken

    expect(response.status()).toBe(200)
})


test.only('GET _ REQ Get AuthUser' , async()=>{


    const apiRequest= await request.newContext()

    const response = await apiRequest.get(process.env.API_BASEURL  +apiEndPoints.authUser ,
        {
            headers :{'Authorization' : 'Bearer '+ token} ,
            
        }

    )

    const body =  await response.json()
    console.log(body)

    expect(response.status()).toBe(200)
})