$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Mac/Cydorg-automation/cucumber/src/main/java/Features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM app test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 455400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "free crm create deal test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on deal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the deals form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_stepdefinition.user_is_on_deal_page()"
});
formatter.result({
  "duration": 308538000,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_stepdefinition.user_fills_the_deals_form()"
});
formatter.result({
  "duration": 540300,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_stepdefinition.deal_is_created()"
});
formatter.result({
  "duration": 415400,
  "status": "passed"
});
formatter.after({
  "duration": 417500,
  "status": "passed"
});
});