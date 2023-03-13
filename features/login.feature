Feature: Login
    Background:
        Given I open the site "https://portal.telnyx.com/"

    Scenario: Login with valid credentials
        When I login with valid credentials
        Then I logged in
    
    Scenario: Login with invalid credentials
        When I login with invalid credentials
        Then I not logged in due to invalid credentials