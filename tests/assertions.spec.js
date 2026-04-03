import {test, expect} from '@playwright/test'


test('Assertions Demo', async({page})=>{

    await page.goto('https://kitchen.applitools.com/')

  

    //Assertions
    //Check element present or not
    //ToHaveCount(1) means that there is a single element with that text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)


    //helpful if you want to create a condition $
    if(page.$('text=The Kitchen')){

        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    //Check element hidden or visible

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    //Check element enable or disable
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    //Check text

     await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
     //await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen')


     //Check attribute value

     //This means it could be anithing before /.*css-dpmy2a/
     await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class',/.*css-dpmy2a/)
     await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class','chakra-heading css-dpmy2a')
     await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass('chakra-heading css-dpmy2a')

     //check page url and title

     await expect(page).toHaveURL('https://kitchen.applitools.com/')
     await expect(page).toHaveTitle(/.*Kitchen/)


     await page.pause()
     //visual validation with screeshot

     await expect(page).toHaveScreenshot()


})