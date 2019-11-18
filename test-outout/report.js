$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Mac/Cydorg-automation/cucumber/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Enter Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to New Contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "aswathi",
        "achukannan",
        "tom",
        "peter",
        "manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "aswathi",
        "achukannan",
        "david",
        "thomas",
        "team lead"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Enter Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"aswathi\" and \"achukannan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to New Contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"tom\" and \"peter\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.User_Enter_Login_Page()"
});
formatter.result({
  "duration": 9553620700,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_login_page_is_CRMPRO()"
});
formatter.result({
  "duration": 66456900,
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
  "duration": 354693800,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 2389382400,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 12858500,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_moves_to_New_Contact_page()"
});
formatter.result({
  "duration": 371820400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 29
    },
    {
      "val": "peter",
      "offset": 39
    },
    {
      "val": "manager",
      "offset": 51
    }
  ],
  "location": "loginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 1075817900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 721518600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Enter Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"aswathi\" and \"achukannan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to New Contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"david\" and \"thomas\" and \"team lead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.User_Enter_Login_Page()"
});
formatter.result({
  "duration": 8039927900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_login_page_is_CRMPRO()"
});
formatter.result({
  "duration": 73344300,
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
  "duration": 362643100,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 2361674400,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11132000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_moves_to_New_Contact_page()"
});
formatter.result({
  "duration": 355465200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "david",
      "offset": 29
    },
    {
      "val": "thomas",
      "offset": 41
    },
    {
      "val": "team lead",
      "offset": 54
    }
  ],
  "location": "loginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 1750500100,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 732957700,
  "status": "passed"
});
});