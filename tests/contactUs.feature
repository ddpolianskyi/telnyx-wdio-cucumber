Feature: Contact Us message
    Background:
        Given I open the site "/contact-us"

    Scenario: Contact Us message form should be valid
        Given I accept cookies
        When I fill out the Contact Us message form with valid credentials
        Then Contact Us message form is valid
    
    Scenario: Contact Us message form should be invalid due to invalid credentials
        When I fill out the Contact Us message form with invalid credentials
        Then Contact Us message form is invalid due to invalid credentials