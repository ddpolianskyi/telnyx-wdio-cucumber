const { faker } = require('@faker-js/faker')

const
    emailInput = 'form input[name="email"]',
    emailError = 'form div#email_message',
    fullNameInput = 'form input[name="full_name"]',
    passwordInput = 'form input[name="password"]',
    passwordError = 'form > div > div:nth-child(2) > div:nth-child(2)',
    promoCodeButton = 'form > a',
    promoCodeInput = 'form input[name="promo_code"]',
    termsAndConditionsCheckbox = 'form input[name="terms_and_conditions"]',
    receiveEmailsCheckbox = 'form input[name="subscription_opt_in"]',
    submitButton = 'form[aria-label="signup-form"] > button[type="submit"]'

const
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    fullName = faker.name.fullName(),
    validEmail = faker.internet.email(),
    invalidEmail = faker.internet.email(firstName, lastName, 'email'),
    validPassword = faker.internet.password(20, false, /\w/, '123_'),
    invalidPassword = faker.internet.password(12, true),
    promoCode = faker.random.alphaNumeric(8)

class SignUpPage {
    async fillTheSignUpFormWithValidCredentials(){
        await $(emailInput).addValue(validEmail)
        await $(fullNameInput).addValue(fullName)
        await $(passwordInput).addValue(validPassword)
        await $(promoCodeButton).click()
        await $(promoCodeInput).addValue(promoCode)
        await $(submitButton).waitForClickable({ timeout: 5000 })
        await $(submitButton).click()
        await $(termsAndConditionsCheckbox).click()
        await $(receiveEmailsCheckbox).click()
    }
    async fillTheSignUpFormWithInvalidCredentials(){
        await $(emailInput).addValue(invalidEmail)
        await $(fullNameInput).addValue(fullName)
        await $(passwordInput).addValue(invalidPassword)
        await $(promoCodeButton).click()
        await $(promoCodeInput).addValue(promoCode)
        await $(submitButton).waitForClickable({ timeout: 5000 })
        await $(submitButton).click()
        await $(termsAndConditionsCheckbox).click()
        await $(receiveEmailsCheckbox).click()
    }
    async signUpFormValidation(){
        await expect($(emailError)).not.toExist()
        await expect($(passwordError)).not.toExist()
    }
    async signUpFormInvalidation(){
        await expect($(emailError)).toExist()
        await expect($(passwordError)).toExist()
    }
}

module.exports = new SignUpPage()
