Feature: Partnership message
    Background:
        Given I open the site "/partnerships"
    
    Scenario: Accepting cookies
        Given I accept cookies

    Scenario: Sending the Partnership message with valid credentials
        When I fill out the Partnership message form with valid credentials
        Then Partnership message sended
    
    Scenario: Sending the Partnership message with invalid credentials
        When I fill out the Partnership message form with invalid credentials
        Then Partnership message not sended due to invalid credentials