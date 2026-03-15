import {test, expect} from '@playwright/test'

test('Selectors demo', async({page}) => {

    await page.goto('https://www.saucedemo.com/')

    await page.pause()

    // using any object property
    await page.click('id=user-name')

    await page.locator('[id="user-name"]').fill('Zaida')

    // await page.locator('id=user-name').fill('test')

    //using css selector
    //#login-button
    await page.locator('#login-button').click()

    //using XPath
    await page.locator('xpath=//input[@name="password"]').fill('Gonzalez')

    //using text
    await page.locator('text="LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()






})