
Feature: Free CRM Login Feature

  Scenario: Free CRM Login Test Scenario

    Given User Enter Login Page
    When title of login page is CRMPRO
    Then user enters username and password
    And user click login button
    And user is on home page
