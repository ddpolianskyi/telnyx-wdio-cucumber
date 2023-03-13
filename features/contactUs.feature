Feature: Contact Us message
    Background:
        Given I open the site "/contact-us"
    
    Scenario: Accepting cookies
        Given I accept cookies

    Scenario: Sending the Contact Us message with valid credentials
        When I fill out the Contact Us message form with valid credentials
        Then Contact Us message sended
    
    Scenario: Sending the Contact Us message with invalid credentials
        When I fill out the Contact Us message form with invalid credentials
        Then Contact Us message not sended due to invalid credentials