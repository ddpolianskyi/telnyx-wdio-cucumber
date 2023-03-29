const { When, Then } = require('@cucumber/cucumber')
const SupportCenterPage = require('../pages/SupportCenter.page')

When('I enter {string} in the Support Center search field', async (text) => {
    await SupportCenterPage.search(text)
})
Then('Search results showed for {string}', async (text) => {
    await SupportCenterPage.searchCheck(text)
})
Then('Empty search results showed for {string}', async (text) => {
    await SupportCenterPage.emptySearchCheck(text)
})