const { faker } = require('@faker-js/faker')

const
    emailInput = 'form > div input[name="email"]',
    emailError = 'form label > div > div:nth-child(2)',
    passwordInput = 'form input[name="password"]',
    forgotYourPasswordButton = 'form a[href*="/password-reset"]',
    rememberMyEmailCheckbox = 'form input[name="remember_me"]',
    rememberMyEmailCheckboxLabel = 'form div > div > div > label',
    submitButton = 'form[aria-label="loginForm"] > button'

const
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    validEmail = faker.internet.email(),
    invalidEmail = faker.internet.email(firstName, lastName, 'email'),
    password = faker.internet.password(12)

class LoginPage {
    async fillTheLoginFormWithValidCredentials(){
        await $(emailInput).addValue(validEmail)
        await $(passwordInput).addValue(password)
        await $(rememberMyEmailCheckboxLabel).click()
        await $(submitButton).click()
    }
    async fillTheLoginFormWithInvalidCredentials(){
        await $(emailInput).addValue(invalidEmail)
        await $(passwordInput).addValue(password)
        await $(rememberMyEmailCheckboxLabel).click()
        await $(submitButton).click()
    }
    async loginFormValidation(){
        await expect($(emailError)).not.toExist()
    }
    async loginFormInvalidation(){
        await expect($(emailError)).toExist()
    }
}

module.exports = new LoginPage()