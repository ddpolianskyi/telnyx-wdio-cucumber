const { When, Then } = require('@cucumber/cucumber')
const ContactUsPage = require('../pages/ContactUs.page')

When('I fill out the Contact Us message form with valid credentials', async () => {
    await ContactUsPage.fillTheContactUsMessageFormWithValidCredentials()
})
When('I fill out the Contact Us message form with invalid credentials', async () => {
    await ContactUsPage.fillTheContactUsMessageFormWithInvalidCredentials()
})
Then('Contact Us message form is valid', async () => {
    await ContactUsPage.contactUsMessageFormValidation()
})
Then('Contact Us message form is invalid due to invalid credentials', async () => {
    await ContactUsPage.contactUsMessageFormInvalidation()
})