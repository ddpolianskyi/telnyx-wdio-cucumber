Feature: Login
    Background:
        Given I open the site "https://portal.telnyx.com/"

    Scenario: Login form should be valid
        When I fill out the Login form with valid credentials
        Then Login form is valid
    
    Scenario: Login form should be invalid due to invalid credentials
        When I fill out the Login form with invalid credentials
        Then Login form is invalid due to invalid credentials