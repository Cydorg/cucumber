$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRM"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@CRM"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Enter Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"aswathi\" and \"achukannan\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepDefinition.User_Enter_Login_Page()"
});
formatter.result({
  "duration": 10928872000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_login_page_is_CRMPRO()"
});
formatter.result({
  "duration": 68809200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aswathi",
      "offset": 13
    },
    {
      "val": "achukannan",
      "offset": 27
    }
  ],
  "location": "loginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 606387800,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 2471941500,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 12034800,
  "status": "passed"
});
});