package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class facebookLoginStepDefinition
{
    WebDriver driver;

    @Given("^user enter facebook page$")
    public void user_enter_facebook_page()
    {
        System.setProperty("webdriver.chrome.driver", "./chromedriver_78.exe");
        driver = new ChromeDriver();
        driver.navigate().to("https://www.facebook.com/");
    }

    @When("^title of the page is Facebook$")
    public void title_of_the_page_is_Facebook()
    {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Facebook - Log In or Sign Up", title);
    }

    @Then("^user enters First name and Last name$")
    public void user_enters_First_name_and_Last_name()
    {
        driver.findElement(By.name("firstname")).sendKeys("tom");
        driver.findElement(By.name("lastname")).sendKeys("kt");
    }

    @Then("^user enter Mobile number or email$")
    public void user_enter_Mobile_number_or_email()
    {
        driver.findElement(By.xpath("//input[@name='reg_email__']")).sendKeys("tomkt@gmail.com");
    }

    @Then("^user enter email again$")
    public void user_enter_email_again()
    {
     driver.findElement(By.xpath("//input[@ aria-label ='Re-enter email']")).sendKeys("tomkt@gmail.com");

    }

    @Then("^user enter New password$")
    public void user_enter_New_password()
    {
        driver.findElement(By.xpath("//input[@name='reg_passwd__']")).sendKeys("abc123");
    }

    @Then("^user enter Birthday$")
    public void user_enter_Birthday()
    {
        driver.findElement(By.xpath("//select[@id='month']")).sendKeys("Jan");
        driver.findElement(By.xpath("//select[@id='day']")).sendKeys("10");
        driver.findElement(By.xpath("//select[@id='year']")).sendKeys("1991");
    }


}
