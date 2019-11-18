@CRM
Feature:Free CRM Login Feature
@CRM
  Scenario:Free CRM Login Test Scenario

    Given User Enter Login Page
    When title of login page is CRMPRO
    Then user enters "aswathi" and "achukannan"
    And user click login button
    And user is on home page
