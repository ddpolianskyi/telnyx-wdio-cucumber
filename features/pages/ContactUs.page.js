const fixtures = require('../fixtures/fixtures.json')

class ContactUsPage {
    get reasonForContactSelect(){ return $('form select[name="Reason_for_Contact__c"]') }
    get firstNameInput(){ return $('form input[name="FirstName"]') }
    get lastNameInput(){ return $('form input[name="LastName"]') }
    get emailInput(){ return $('form input[name="Email"]') }
    get countrySelect(){ return $('form select[name="Phone_Number_Extension__c"]') }
    get phoneNumberInput(){ return $('form input[name="Phone_Number_Base__c"]') }
    get websiteInput(){ return $('form input[name="Website"]') }
    get additionalInformationInput(){ return $('form textarea[name="Form_Additional_Information__c"]') }
    get receiveEmailsCheckbox(){ return $('form input[name="Subscription_Opt_In__c"]') }
    get submitButton(){ return $('form button[type="submit"]') }

    reasonForContactSelectItem(value){ return $(`form select[name="Reason_for_Contact__c"] > option[value="${value}"]`) }
    countrySelectItem(value){ return $(`form select[name="Phone_Number_Extension__c"] > option[value="${value}"]`) }

    async fillContactUsMessageFormWithValidCredentials(){
        await this.reasonForContactSelect.waitForClickable({ timeout: 5000 })
        await this.reasonForContactSelect.click()
        await this.reasonForContactSelectItem('Support').click()
        await this.firstNameInput.addValue(fixtures.first_name)
        await this.lastNameInput.addValue(fixtures.last_name)
        await this.emailInput.addValue(fixtures.valid_email)
        await this.countrySelect.click()
        await this.countrySelectItem('+1').click()
        await this.phoneNumberInput.addValue(fixtures.phone_number)
        await this.websiteInput.addValue(fixtures.website_url)
        await this.additionalInformationInput.addValue('Test additional information.')
        await this.receiveEmailsCheckbox.waitForClickable({ timeout: 5000 })
        await this.receiveEmailsCheckbox.click()
    }
    async fillContactUsMessageFormWithInvalidCredentials(){
        await this.reasonForContactSelect.waitForClickable({ timeout: 5000 })
        await this.reasonForContactSelect.click()
        await this.reasonForContactSelectItem('').click()
        await this.firstNameInput.addValue(fixtures.first_name)
        await this.lastNameInput.addValue(fixtures.last_name)
        await this.emailInput.addValue(fixtures.invalid_email)
        await this.countrySelect.click()
        await this.countrySelectItem('').click()
        await this.phoneNumberInput.addValue(fixtures.phone_number)
        await this.websiteInput.addValue(fixtures.website_url)
        await this.additionalInformationInput.addValue('Test additional information.')
        await this.receiveEmailsCheckbox.waitForClickable({ timeout: 5000 })
        await this.receiveEmailsCheckbox.click()
    }
    async contactUsMessageFormValidation(){
        await expect(this.reasonForContactSelect).toHaveAttributeContaining('aria-invalid', 'false')
    }
    async contactUsMessageFormInvalidation(){
        await expect(this.reasonForContactSelect).toHaveAttributeContaining('aria-invalid', 'true')
    }
}

module.exports = new ContactUsPage()