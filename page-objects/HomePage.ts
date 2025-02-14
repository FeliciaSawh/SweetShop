import {expect, Page, Locator} from '@playwright/test'

export class HomePage{
    //define selectors

    readonly page: Page
    readonly loginButton: Locator

    //init selectors using contructor

    constructor(page:Page){
        this.page = page
        this.loginButton = page.locator('text=Login')
    }

    //define the methods
    
    async visit(){
        await this.page.goto('https://sweetshop.vivrichards.co.uk')
    }

    async pressLoginButton(){
        await this.loginButton.click()
    }

}