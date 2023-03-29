Feature: Partnership message
    Background:
        Given I open the site "/partnerships"

    Scenario: Partnership message form should be valid
        Given I accept cookies
        When I fill out the Partnership message form with valid credentials
        Then Partnership message form is valid
    
    Scenario: Partnership message form should be invalid due to invalid credentials
        When I fill out the Partnership message form with invalid credentials
        Then Partnership message form is invalid due to invalid credentials