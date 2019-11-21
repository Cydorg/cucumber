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
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

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
    //REGULAR EXPRESSION
    //1) \"([^\"]*)\"
    //2) \"(.*)\"
    @Then("^user enters \"(.*)\" and \"(.*)\"$")
    public void user_enters_username_and_password(String username,String password)
    {
        driver.findElement(By.name("username")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
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

    @Then("^user moves to New Contact page$")
    public void user_moves_to_New_Contact_page()
    {
     driver.switchTo().frame("mainpanel");
     Actions action = new Actions(driver);
     action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
     driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
    }

    @Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
    public void user_enters_contact_details(String firstname,String lastname,String position)
    {
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
       driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys(firstname);
       driver.findElement(By.xpath("//input[@id='surname']")).sendKeys(lastname);
       driver.findElement(By.xpath("//input[@id='company_position']")).sendKeys(position);
       driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();

    }

    @Then("^close the browser$")
    public void close_the_browser()
    {
        driver.quit();
    }
}


