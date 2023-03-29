const { When, Then } = require('@cucumber/cucumber')
const LoginPage = require('../pages/Login.page')

When('I fill out the Login form with valid credentials', async () => {
    await LoginPage.fillTheLoginFormWithValidCredentials()
})
When('I fill out the Login form with invalid credentials', async () => {
    await LoginPage.fillTheLoginFormWithInvalidCredentials()
})
Then('Login form is valid', async () => {
    await LoginPage.loginFormValidation()
})
Then('Login form is invalid due to invalid credentials', async () => {
    await LoginPage.loginFormInvalidation()
})