package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksStepDefinition
{
    //GLOBAL HOOKS
    @Before()
    public void setUP()
    {
        System.out.println("Launch chrome");
        System.out.println("Enter URL for free CRM app");
    }

    @After()
    public void tearDown()
    {
        System.out.println("close the browser");
    }

    //LOCAL:ONLY FOR FIRST SCENARIO
    @Before("@First")
    public void beforeFirst()
    {
      System.out.println("before only first scenario");
    }
    @After("@First")
    public void afterFirst()
    {
        System.out.println("after only first scenario");
    }

    @Before("@Second")
    public void beforeSecond()
    {
        System.out.println("before only second scenario");
    }
    @After("@Second")
    public void afterSecond()
    {
        System.out.println("after only second scenario");
    }

    @Before("@Third")
    public void beforeThird()
    {
        System.out.println("before only third scenario");
    }
    @After("@Third")
    public void afterThird()
    {
        System.out.println("after only third scenario");
    }

    @Given("^this is the first step$")
    public void this_is_the_first_step() throws Throwable
    {
        System.out.println("1st step");
    }

    @When("^this is the second step$")
    public void this_is_the_second_step() throws Throwable
    {
        System.out.println("2nd step");
    }

    @Then("^this is the third step$")
    public void this_is_the_third_step() throws Throwable
    {
        System.out.println("3rd step");
    }
}
