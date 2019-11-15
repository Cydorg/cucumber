@facebook
Feature:Facebook LogIn
  @facebook
  Scenario:Create new account in Facebook

    Given user enter facebook page
    When title of the page is Facebook
#    Then go to Create a new account
#    Then user enter facebook home page
    Then user enters First name and Last name
    Then user enter Mobile number or email
    Then user enter email again
    Then user enter New password
    Then user enter Birthday
#    Then select the Gender
#    And user click Sign Up
#    And user enter on home page