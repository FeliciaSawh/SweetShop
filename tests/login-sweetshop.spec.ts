import{ test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { HomePage } from '../page-objects/HomePage'


test.describe('Login page for sweet shop', () => {

let loginPage : LoginPage
let homePage : HomePage

    test.beforeEach( async ({page}) => {

        loginPage = new LoginPage(page)
        homePage = new HomePage(page)

        await homePage.visit()
        await homePage.pressLoginButton()

    })

    test('Negative scenario when user login with a invalid password', async ({page})  => {

        await loginPage.login('you@example.com', 'invalid password')
        const message = await page.locator('h1')
        await expect(message).toBeVisible()

    })

    test('Should login on the sweet shop website', async ({page}) => {

        await loginPage.login('you@example.com', 'Password')

        //const emailAdr = await page.locator('input[type="email"]')
        //await emailAdr.fill('you@example.com')

        //const passwordPers = await page.locator('input[type="password"]')
        //await passwordPers.fill('Password')
       
       // await page.click('text=Login')

        const bigMessage = await page.locator('h1.display-3')
        await expect(bigMessage).toBeVisible()

        await page.screenshot({path:'fullpage.png', fullPage:true})
       
        
    })

})