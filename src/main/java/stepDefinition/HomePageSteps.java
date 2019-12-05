package stepDefinition;
import com.qa.page.HomePage;
import com.qa.page.LoginPage;
import com.qa.util.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class HomePageSteps extends TestBase
{
    LoginPage loginPage;
    HomePage homePage;

    @Given("^user opens browser$")
    public void user_opens_browser() throws Throwable
    {
        TestBase.initialization();
    }

    @Then("^user is on login page$")
    public void user_is_on_login_page() throws Throwable
    {
        loginPage=new LoginPage();
        String title=loginPage.validateLoginPageTitle();
        Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.",title);
    }

    @Then("^user logs into app$")
    public void user_logs_into_app() throws Throwable
    {
        homePage=loginPage.login(prop.getProperty("username"), prop.getProperty("password"));
    }



    @Then("^validate homepage title$")
    public void validate_homepage_title() throws Throwable
    {
        String homeTitle= homePage.verifyHomePageTitle();
        Assert.assertEquals("CRMPRO",homeTitle);
    }

//    @Then("^validate logged in username$")
//    public void validate_logged_in_username() throws Throwable
//    {
//        Thread.sleep(3000);
//       boolean flag= homePage.verifyCorrectUserName();
//       Assert.assertTrue(flag);
//    }
    @Then("^closed the browser$")
    public void closed_the_browser()
   {
    driver.quit();
   }
}




