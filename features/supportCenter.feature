Feature: Support Center search
    Background:
        Given I open the site "https://support.telnyx.com/"

    Scenario: Searching for results
        When I enter "programming" in the Support Center search field
        Then Search results showed for "programming"
    
    Scenario: Searching for empty results
        When I enter "blablabla" in the Support Center search field
        Then Empty search results showed for "blablabla"