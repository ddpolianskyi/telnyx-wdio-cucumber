const { Given } = require('@cucumber/cucumber')
const HomePage = require('../pages/Home.page')

Given('I open the site {string}', async (url) => {
    browser.setWindowSize(1920, 1080)
    await browser.url(url)
})
Given('I accept cookies', async () => {
    await HomePage.acceptCookiesButtonClick()
})