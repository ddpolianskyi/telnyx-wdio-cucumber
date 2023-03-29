Feature: Support Center search
    Background:
        Given I open the site "https://support.telnyx.com/"

    Scenario: Should search for results
        When I enter "programming" in the Support Center search field
        Then Search results showed for "programming"
    
    Scenario: Should search for empty results
        When I enter "blablabla" in the Support Center search field
        Then Empty search results showed for "blablabla"