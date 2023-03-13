const fixtures = require('../fixtures/fixtures.json')

class PartnershipsPage {
    get firstNameInput(){ return $('form input[name="FirstName"]') }
    get lastNameInput(){ return $('form input[name="LastName"]') }
    get companyInput(){ return $('form input[name="Company"]') }
    get emailInput(){ return $('form input[name="Email"]') }
    get phoneNumberExtensionSelect(){ return $('form select[name="Phone_Number_Extension__c"]') }
    get phoneNumberInput(){ return $('form input[name="Phone_Number_Base__c"]') }
    get partnerTypeSelect(){ return $('form select[name="Partner_Type__c"]') }
    get additionalInformationInput(){ return $('form textarea[name="Form_Additional_Information__c"]') }
    get receiveEmailsCheckbox(){ return $('form input[name="Subscription_Opt_In__c"]') }
    get receiveEmailsLabel(){ return $('form input[name="Subscription_Opt_In__c"] ~ label') }
    get submitButton(){ return $('form button[type="submit"]') }

    phoneNumberExtensionSelectItem(value){ return $(`form select[name="Phone_Number_Extension__c"] > option[value="${value}"]`) }
    partnerTypeSelectItem(value){ return $(`form select[name="Partner_Type__c"] > option[value="${value}"]`) }

    async fillPartnershipFormWithValidCredentials(){
        await this.firstNameInput.addValue(fixtures.first_name)
        await this.lastNameInput.addValue(fixtures.last_name)
        await this.companyInput.addValue(fixtures.company_name)
        await this.emailInput.addValue(fixtures.valid_email)
        await this.phoneNumberExtensionSelect.waitForClickable({ timeout: 5000 })
        await this.phoneNumberExtensionSelect.click()
        await this.phoneNumberExtensionSelect.scrollIntoView()
        await this.phoneNumberExtensionSelectItem('+1').click()
        await this.phoneNumberInput.addValue(fixtures.phone_number)
        await this.partnerTypeSelect.waitForClickable({ timeout: 5000 })
        await this.partnerTypeSelect.click()
        await this.partnerTypeSelect.scrollIntoView()
        await this.partnerTypeSelectItem('Technology').click()
        await this.additionalInformationInput.addValue('Test additional information.')
    }
    async fillPartnershipFormWithInvalidCredentials(){
        await this.firstNameInput.addValue(fixtures.first_name)
        await this.lastNameInput.addValue(fixtures.last_name)
        await this.companyInput.addValue(fixtures.company_name)
        await this.emailInput.addValue(fixtures.invalid_email)
        await this.phoneNumberExtensionSelect.waitForClickable({ timeout: 5000 })
        await this.phoneNumberExtensionSelect.click()
        await this.phoneNumberExtensionSelect.scrollIntoView()
        await this.phoneNumberExtensionSelectItem('').click()
        await this.phoneNumberInput.addValue(fixtures.phone_number)
        await this.partnerTypeSelect.waitForClickable({ timeout: 5000 })
        await this.partnerTypeSelect.click()
        await this.partnerTypeSelect.scrollIntoView()
        await this.partnerTypeSelectItem('').click()
        await this.additionalInformationInput.addValue('Test additional information.')
    }
    async partnershipFormValidation(){
        await expect(this.phoneNumberExtensionSelect).toHaveAttributeContaining('aria-invalid', 'false')
        await expect(this.partnerTypeSelect).toHaveAttributeContaining('aria-invalid', 'false')
    }
    async partnershipFormInvalidation(){
        await expect(this.phoneNumberExtensionSelect).toHaveAttributeContaining('aria-invalid', 'true')
        await expect(this.partnerTypeSelect).toHaveAttributeContaining('aria-invalid', 'true')
    }
}

module.exports = new PartnershipsPage()