Feature:Free CRM create contacts

Scenario Outline:Free CRM create a new contact scenario

  Given User Enter Login Page
  When title of login page is CRMPRO
  Then user enters "<username>" and "<password>"
  And user click login button
  And user is on home page
  Then user moves to New Contact page
  Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
  Then close the browser

  Examples:
  |username | password   | firstname | lastname | position  |
  |aswathi  | achukannan | tom       | peter    | manager   |
  |aswathi  | achukannan | david     | thomas   | team lead |

