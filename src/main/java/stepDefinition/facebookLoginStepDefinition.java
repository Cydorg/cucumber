package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class facebookLoginStepDefinition
{
    WebDriver driver;

    @Given("^user enter facebook page$")
    public void user_enter_facebook_page()
    {
        System.setProperty("webdriver.chrome.driver","./chromedriver_78.exe");
        driver=new ChromeDriver();
        driver.get("https://www.facebook.com/");
    }

    @When("^title of the page is Facebook$")
    public void title_of_the_page_is_Facebook()
    {
      String title=driver.getTitle();
      System.out.println(title);
        Assert.assertEquals("Facebook - Log In or Sign Up",title);
    }
}
