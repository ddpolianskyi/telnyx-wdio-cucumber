Feature: Sign up
    Background:
        Given I open the site "/sign-up"
    
    Scenario: Accepting cookies
        Given I accept cookies

    Scenario: Sign up with valid credentials
        When I sign up with valid credentials
        Then I signed up
    
    Scenario: Sign up with invalid credentials
        When I sign up with invalid credentials
        Then I not signed up due to invalid credentials