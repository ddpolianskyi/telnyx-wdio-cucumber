const { When, Then } = require('@cucumber/cucumber')
const SignUpPage = require('../pages/SignUp.page')

When('I fill out the Sign up form with valid credentials', async () => {
    await SignUpPage.fillTheSignUpFormWithValidCredentials()
})
When('I fill out the Sign up form with invalid credentials', async () => {
    await SignUpPage.fillTheSignUpFormWithInvalidCredentials()
})
Then('Sign up form is valid', async () => {
    await SignUpPage.signUpFormValidation()
})
Then('Sign up form is invalid due to invalid credentials', async () => {
    await SignUpPage.signUpFormInvalidation()
})