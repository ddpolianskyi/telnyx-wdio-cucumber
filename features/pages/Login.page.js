const fixtures = require('../fixtures/fixtures.json')

class LoginPage {
    get emailInput(){ return $('form[aria-label="loginForm"] input[name="email"]') }
    get emailError(){ return $('//form[@aria-label="loginForm"]//input[@name="email"]/parent::div/following-sibling::div') }
    get passwordInput(){ return $('form[aria-label="loginForm"] input[name="password"]') }
    get forgotYourPasswordButton(){ return $('form[aria-label="loginForm"] a[href*="/password-reset"]') }
    get rememberMyEmailCheckbox(){ return $('form[aria-label="loginForm"] input[name="remember_me"]') }
    get rememberMyEmailLabel(){ return $('//form[@aria-label="loginForm"]//input[@name="remember_me"]/parent::label') }
    get submitButton(){ return $('form[aria-label="loginForm"] button[type="submit"]') }

    async fillTheLogInFormWithValidCredentials(){
        await this.emailInput.waitForClickable({ timeout: 10000 })
        await this.emailInput.addValue(fixtures.valid_email)
        await this.passwordInput.addValue(fixtures.valid_password)
        await this.rememberMyEmailLabel.click()
    }
    async fillTheLogInFormWithInvalidCredentials(){
        await this.emailInput.waitForClickable({ timeout: 10000 })
        await this.emailInput.addValue(fixtures.invalid_email)
        await this.passwordInput.addValue(fixtures.invalid_password)
        await this.rememberMyEmailLabel.click()
    }
    async logInFormValidation(){
        await expect(this.emailError).not.toExist()
    }
    async logInFormInvalidation(){
        await expect(this.emailError).toExist()
    }
}

module.exports = new LoginPage()