Feature:Deal data creation

  Scenario:Free CRM create a new deal scenario

    Given User Enters Login Page
    When title of login page CRMPRO
    Then user enters username and password
    |aswathi  | achukannan  |

    And user clicks login button
    And user is in home page
    Then user moves to New Deals page
    Then user enters deal details
    | test deal | 1000 | 50 | 10|
    Then closes the browser