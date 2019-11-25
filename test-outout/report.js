$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Mac/Cydorg-automation/cucumber/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Enters Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "aswathi",
        "achukannan"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is in home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user moves to New Deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.User_Enters_Login_Page()"
});
formatter.result({
  "duration": 9408398600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_login_page_CRMPRO()"
});
formatter.result({
  "duration": 15453600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 833141300,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 2297103400,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_in_home_page()"
});
formatter.result({
  "duration": 13238600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_moves_to_New_Deals_page()"
});
formatter.result({
  "duration": 332046800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 15381449000,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.closes_the_browser()"
});
formatter.result({
  "duration": 737711500,
  "status": "passed"
});
});