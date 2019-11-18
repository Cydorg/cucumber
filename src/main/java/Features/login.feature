@CRM
Feature:Free CRM Login Feature

# WITHOUT EXAMPLES KEYWORD
#  @CRM
#  Scenario:Free CRM Login Test Scenario
#    Given User Enter Login Page
#    When title of login page is CRMPRO
#    Then user enters "aswathi" and "achukannan"
#    And user click login button
#    And user is on home page

# WITH EXAMPLES KEYWORD
  @CRM
  Scenario Outline:Free CRM Login Test Scenario

  Given User Enter Login Page
  When title of login page is CRMPRO
  Then user enters "<username>" and "<password>"
  And user click login button
    And user is on home page
    Then close the browser

    Examples:
    |username | password    |
    |aswathi  |  achukannan  |
    |tom      |  tom4586    |
