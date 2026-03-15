import {test, expect} from '@playwright/test'

test('Demo test login', async({page})=>{

    await page.goto('https://demo.applitools.com/')

    //await page.pause()

    await page.locator('[placeholder="Enter your username"]').fill('zaida')

    await page.locator('[placeholder="Enter your password"]').fill('test')

    await page.waitForSelector('text=Sign in', {timeout:5000})

    await page.locator('text=Sign in').click()
})

test.only('Login demo 2', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').filter({ hasText: 'rajashekar user' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click()


})