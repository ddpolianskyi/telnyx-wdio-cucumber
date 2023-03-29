const { faker } = require('@faker-js/faker')

const 
    reasonForContactSelect = 'form select[name="Reason_for_Contact__c"]',
    firstNameInput = 'form input[name="FirstName"]',
    lastNameInput = 'form input[name="LastName"]',
    emailInput = 'form input[name="Email"]',
    emailError = 'form input[name="Email"] ~ div.mktoError',
    countrySelect = 'form select[name="Phone_Number_Extension__c"]',
    phoneNumberInput = 'form input[name="Phone_Number_Base__c"]',
    websiteInput = 'form input[name="Website"]',
    additionalInformationInput = 'form textarea[name="Form_Additional_Information__c"]',
    howDidYouHearAboutTelnyxInput = 'form input[name="How_did_you_hear_about_Telnyx_Open__c"]',
    receiveEmailsCheckbox = 'form input[name="Subscription_Opt_In__c"]',
    submitButton = 'form button[type="submit"]'

const 
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    validEmail = faker.internet.email(firstName, lastName),
    invalidEmail = faker.internet.email(firstName, lastName, 'email'),
    phoneNumber = faker.phone.number('(###)-###-###'),
    companyName = faker.company.bs()

class ContactUsPage {
    async fillTheContactUsMessageFormWithValidCredentials(){
        await $(reasonForContactSelect).waitForClickable({ timeout: 5000 })
        await $(reasonForContactSelect).selectByAttribute('value', 'Support')
        await $(firstNameInput).addValue(firstName)
        await $(lastNameInput).addValue(lastName)
        await $(emailInput).addValue(validEmail)
        await $(countrySelect).selectByVisibleText('United States (+1)')
        await $(phoneNumberInput).addValue(phoneNumber)
        await $(websiteInput).addValue(companyName)
        await $(additionalInformationInput).addValue('Testing')
        await $(howDidYouHearAboutTelnyxInput).addValue('Testing')
        await $(receiveEmailsCheckbox).waitForClickable({ timeout: 5000 })
        await $(receiveEmailsCheckbox).click()
        // await $(submitButton).click()
    }
    async fillTheContactUsMessageFormWithInvalidCredentials(){
        await $(reasonForContactSelect).waitForClickable({ timeout: 5000 })
        await $(reasonForContactSelect).selectByAttribute('value', 'Support')
        await $(firstNameInput).addValue(firstName)
        await $(lastNameInput).addValue(lastName)
        await $(emailInput).addValue(invalidEmail)
        await $(countrySelect).selectByVisibleText('United States (+1)')
        await $(phoneNumberInput).addValue(phoneNumber)
        await $(websiteInput).addValue(companyName)
        await $(additionalInformationInput).addValue('Testing')
        await $(howDidYouHearAboutTelnyxInput).addValue('Testing')
        await $(receiveEmailsCheckbox).waitForClickable({ timeout: 5000 })
        await $(receiveEmailsCheckbox).click()
        await $(submitButton).click()
    }
    async contactUsMessageFormValidation(){
        await expect($(emailError)).not.toExist()
    }
    async contactUsMessageFormInvalidation(){
        await expect($(emailError)).toExist()
    }
}

module.exports = new ContactUsPage()