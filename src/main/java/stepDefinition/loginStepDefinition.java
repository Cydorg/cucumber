package stepDefinition;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class loginStepDefinition
{
    WebDriver driver;

    @Given("^User Enter Login Page$")
    public void User_Enter_Login_Page()
    {
        System.setProperty("webdriver.chrome.driver","./chromedriver_78.exe");
        driver=new ChromeDriver();
        driver.get("https://classic.crmpro.com/");
    }

    @When("^title of login page is CRMPRO$")
    public void title_of_login_page_is_CRMPRO()
    {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.",title);
    }

    @Then("^user enters username and password$")
    public void user_enters_username_and_password()
    {
        driver.findElement(By.name("username")).sendKeys("aswathi");
        driver.findElement(By.name("password")).sendKeys("achukannan");
    }

    @And("^user click login button$")
    public void user_click_login_button()
    {
        WebElement loginBtn=driver.findElement(By.xpath("//input[@type='submit']"));
        JavascriptExecutor js =(JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();",loginBtn);
    }

    @And("^user is on home page$")
    public void user_is_on_home_page()
    {
        String title=driver.getTitle();
        System.out.println("Home page title::"+title);
        Assert.assertEquals("CRMPRO",title);

    }
}


