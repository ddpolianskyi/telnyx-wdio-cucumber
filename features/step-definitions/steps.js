const { Given, When, Then } = require('@cucumber/cucumber')

const HomePage = require('../pages/Home.page')
const LoginPage = require('../pages/Login.page')
const SignUpPage = require('../pages/SignUp.page')
const ContactUsPage = require('../pages/ContactUs.page')
const PartnershipsPage = require('../pages/Partnerships.page')
const SupportCenterPage = require('../pages/SupportCenter.page')
 
Given('I open the site {string}', async (url) => {
    await browser.url(url)
    browser.setWindowSize(1920, 1080)
})
Given('I accept cookies', async () => {
    await HomePage.acceptCookiesButtonClick()
})


When('I login with valid credentials', async () => {
    await LoginPage.fillTheLogInFormWithValidCredentials()
})
When('I login with invalid credentials', async () => {
    await LoginPage.fillTheLogInFormWithInvalidCredentials()
})
Then('I logged in', async () => {
    await LoginPage.logInFormValidation()
})
Then('I not logged in due to invalid credentials', async () => {
    await LoginPage.logInFormInvalidation()
})


When('I sign up with valid credentials', async () => {
    await SignUpPage.fillTheSignUpFormWithValidCredentials()
})
When('I sign up with invalid credentials', async () => {
    await SignUpPage.fillTheSignUpFormWithInvalidCredentials()
})
Then('I signed up', async () => {
    await SignUpPage.signUpFormValidation()
})
Then('I not signed up due to invalid credentials', async () => {
    await SignUpPage.signUpFormInvalidation()
})


When('I fill out the Contact Us message form with valid credentials', async () => {
    await ContactUsPage.fillContactUsMessageFormWithValidCredentials()
})
When('I fill out the Contact Us message form with invalid credentials', async () => {
    await ContactUsPage.fillContactUsMessageFormWithInvalidCredentials()
})
Then('Contact Us message sended', async () => {
    await ContactUsPage.contactUsMessageFormValidation()
})
Then('Contact Us message not sended due to invalid credentials', async () => {
    await ContactUsPage.contactUsMessageFormInvalidation()
})


When('I fill out the Partnership message form with valid credentials', async () => {
    await PartnershipsPage.fillPartnershipFormWithValidCredentials()
})
When('I fill out the Partnership message form with invalid credentials', async () => {
    await PartnershipsPage.fillPartnershipFormWithInvalidCredentials()
})
Then('Partnership message sended', async () => {
    await PartnershipsPage.partnershipFormValidation()
})
Then('Partnership message not sended due to invalid credentials', async () => {
    await PartnershipsPage.partnershipFormInvalidation()
})

When('I enter {string} in the Support Center search field', async (text) => {
    await SupportCenterPage.search(text)
    await browser.keys('\uE007')
})
Then('Search results showed for {string}', async (text) => {
    await SupportCenterPage.searchCheck(text)
})
Then('Empty search results showed for {string}', async (text) => {
    await SupportCenterPage.emptySearchCheck(text)
})