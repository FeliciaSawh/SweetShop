import{expect, Page, Locator} from '@playwright/test'

export class LoginPage {
    //define the selectors

    readonly page: Page
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator

    //init selectors using constructor
    
    constructor (page:Page){
        this.page = page
        this.userNameInput =page.locator('input[type="email"]')
        this.passwordInput = page.locator('input[type="password"]')
        this.loginButton = page.locator('text=Login')
    }
    
    //define the method
    async login(userEmail: string, userpassword: string){
        await this.userNameInput.fill(userEmail)
        await this.passwordInput.fill(userpassword)


    }
}