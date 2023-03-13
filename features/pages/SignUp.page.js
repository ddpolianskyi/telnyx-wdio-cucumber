const fixtures = require('../fixtures/fixtures.json')

class SignUpPage {
    get emailInput(){ return $('form[aria-label="signup-form"] input[name="email"]') }
    get fullNameInput(){ return $('form[aria-label="signup-form"] input[name="full_name"]') }
    get passwordInput(){ return $('form[aria-label="signup-form"] input[name="password"]') }
    get passwordError(){ return $('//form[@aria-label="signup-form"]//input[@name="password"]/parent::div/following-sibling::div') }
    get promoCodeButton(){ return $('form[aria-label="signup-form"] > a') }
    get promoCodeInput(){ return $('form[aria-label="signup-form"] input[name="promo_code"]') }
    get termsAndConditionsCheckbox(){ return $('form[aria-label="signup-form"] input[name="terms_and_conditions"]') }
    get receiveEmailsCheckbox(){ return $('form[aria-label="signup-form"] input[name="subscription_opt_in"]') }
    get submitButton(){ return $('form[aria-label="signup-form"] button[type="submit"]') }

    async fillTheSignUpFormWithValidCredentials(){
        await this.emailInput.addValue(fixtures.valid_email)
        await this.fullNameInput.addValue(fixtures.full_name)
        await this.passwordInput.addValue(fixtures.valid_password)
        await this.promoCodeButton.click()
        await this.promoCodeInput.addValue(fixtures.promo_code)
        await this.termsAndConditionsCheckbox.waitForClickable({ timeout: 5000 })
        await this.termsAndConditionsCheckbox.click()
        await this.receiveEmailsCheckbox.click()
        await this.submitButton.waitForClickable({ timeout: 5000 })
        await this.submitButton.click()
    }
    async fillTheSignUpFormWithInvalidCredentials(){
        await this.emailInput.addValue(fixtures.invalid_email)
        await this.fullNameInput.addValue(fixtures.full_name)
        await this.passwordInput.addValue(fixtures.invalid_password)
        await this.promoCodeButton.click()
        await this.promoCodeInput.addValue(fixtures.promo_code)
        await this.termsAndConditionsCheckbox.waitForClickable({ timeout: 5000 })
        await this.termsAndConditionsCheckbox.click()
        await this.receiveEmailsCheckbox.click()
        await this.submitButton.waitForClickable({ timeout: 5000 })
        await this.submitButton.click()
    }
    async signUpFormValidation(){
        await expect(this.passwordError).not.toExist()
    }
    async signUpFormInvalidation(){
        await expect(this.passwordError).toExist()
    }
}

module.exports = new SignUpPage()