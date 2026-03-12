const {test, expect} = require('@playwright/test')

// const {hello, helloworld} = require('./demo/hello')

// console.log(hello());

//test in playwright title of the test and then, function
test('My first test', async ({page}) => {
    await page.goto('https://tororides.com')
    await expect(page).toHaveTitle('Toro rides')
})