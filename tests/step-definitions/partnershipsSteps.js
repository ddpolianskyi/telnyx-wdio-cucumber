const { When, Then } = require('@cucumber/cucumber')
const PartnersPage = require('../pages/Partners.page')

When('I fill out the Partnership message form with valid credentials', async () => {
    await PartnersPage.fillThePartnershipFormWithValidCredentials()
})
When('I fill out the Partnership message form with invalid credentials', async () => {
    await PartnersPage.fillThePartnershipFormWithInvalidCredentials()
})
Then('Partnership message form is valid', async () => {
    await PartnersPage.partnershipFormValidation()
})
Then('Partnership message form is invalid due to invalid credentials', async () => {
    await PartnersPage.partnershipFormInvalidation()
})