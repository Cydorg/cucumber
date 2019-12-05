$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Mac/Cydorg-automation/cucumber/src/main/java/Features/freecrm.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 434900,
  "status": "passed"
});
formatter.before({
  "duration": 326100,
  "status": "passed"
});
formatter.before({
  "duration": 287900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Free CRM Home Page Test",
  "description": "",
  "id": "free-crm-application-test;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user logs into app",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 8,
      "value": "#Then home page is displayed"
    }
  ],
  "line": 9,
  "name": "validate homepage title",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then validate logged in username"
    }
  ],
  "line": 11,
  "name": "closed the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 13989615000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 77037000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_logs_into_app()"
});
formatter.result({
  "duration": 4306198000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_homepage_title()"
});
formatter.result({
  "duration": 14210300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.closed_the_browser()"
});
formatter.result({
  "duration": 767722600,
  "status": "passed"
});
formatter.after({
  "duration": 146500,
  "status": "passed"
});
formatter.after({
  "duration": 121300,
  "status": "passed"
});
formatter.after({
  "duration": 176100,
  "status": "passed"
});
});