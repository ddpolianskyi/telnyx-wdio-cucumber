const { faker } = require('@faker-js/faker')

const
    firstNameInput = 'form input[name="FirstName"]',
    lastNameInput = 'form input[name="LastName"]',
    companyInput = 'form input[name="Company"]',
    emailInput = 'form input[name="Email"]',
    emailError = 'form input[name="Email"] ~ div.mktoError',
    phoneNumberExtensionSelect = 'form select[name="Phone_Number_Extension__c"]',
    phoneNumberInput = 'form input[name="Phone_Number_Base__c"]',
    partnerTypeSelect = 'form select[name="Partner_Type__c"]',
    additionalInformationInput = 'form textarea[name="Form_Additional_Information__c"]',
    receiveEmailsCheckbox = 'form input[name="Subscription_Opt_In__c"]',
    submitButton = 'form button[type="submit"]'

const 
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    companyName = faker.company.bs(),
    validEmail = faker.internet.email(),
    invalidEmail = faker.internet.email(firstName, lastName, 'email'),
    phoneNumber = faker.phone.number('(###)-###-###')

class PartnersPage {
    async fillThePartnershipFormWithValidCredentials(){
        await $(firstNameInput).addValue(firstName)
        await $(lastNameInput).addValue(lastName)
        await $(companyInput).addValue(companyName)
        await $(emailInput).addValue(validEmail)
        await $(phoneNumberExtensionSelect).waitForClickable({ timeout: 5000 })
        await $(phoneNumberExtensionSelect).selectByVisibleText('United States (+1)')
        await $(phoneNumberInput).addValue(phoneNumber)
        await $(partnerTypeSelect).selectByAttribute('value', 'Technology')
        await $(additionalInformationInput).addValue('Test additional information.')
        await $(receiveEmailsCheckbox).waitForClickable({ timeout: 5000 })
        await $(receiveEmailsCheckbox).click()
        // await $(submitButton).click()
    }
    async fillThePartnershipFormWithInvalidCredentials(){
        await $(firstNameInput).addValue(firstName)
        await $(lastNameInput).addValue(lastName)
        await $(companyInput).addValue(companyName)
        await $(emailInput).addValue(invalidEmail)
        await $(phoneNumberExtensionSelect).waitForClickable({ timeout: 5000 })
        await $(phoneNumberExtensionSelect).selectByVisibleText('United States (+1)')
        await $(phoneNumberInput).addValue(phoneNumber)
        await $(partnerTypeSelect).selectByAttribute('value', 'Technology')
        await $(additionalInformationInput).addValue('Test additional information.')
        await $(receiveEmailsCheckbox).waitForClickable({ timeout: 5000 })
        await $(receiveEmailsCheckbox).click()
        await $(submitButton).click()
    }
    async partnershipFormValidation(){
        await expect($(emailError)).not.toExist()
    }
    async partnershipFormInvalidation(){
        await expect($(emailError)).toExist()
    }
}

module.exports = new PartnersPage()