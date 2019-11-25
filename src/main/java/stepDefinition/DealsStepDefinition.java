package stepDefinition;

import cucumber.api.DataTable;
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

import java.util.List;
import java.util.concurrent.TimeUnit;

public class DealsStepDefinition
{
    WebDriver driver;

    @Given("^User Enters Login Page$")
    public void User_Enters_Login_Page()
    {
        System.setProperty("webdriver.chrome.driver","./chromedriver_78.exe");
        driver=new ChromeDriver();
        driver.get("https://classic.crmpro.com/");
    }
    @When("^title of login page CRMPRO$")
    public void title_of_login_page_CRMPRO()
    {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.",title);
    }
    @Then("^user enters username and password$")
    public void user_enters_username_and_password(DataTable credentials)
    {
        List<List<String>> data = credentials.raw();
        driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
        driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
    }
    @And("^user clicks login button$")
    public void user_clicks_login_button()
    {
        WebElement loginBtn=driver.findElement(By.xpath("//input[@type='submit']"));
        JavascriptExecutor js =(JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();",loginBtn);
    }
    @And("^user is in home page$")
    public void user_is_in_home_page()
    {
        String title=driver.getTitle();
        System.out.println("Home page title::"+title);
        Assert.assertEquals("CRMPRO",title);

    }
    @Then("^user moves to New Deals page$")
    public void user_moves_to_New_Deals_page()
    {
        driver.switchTo().frame("mainpanel");
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
        driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
    }
    @Then("^user enters deal details$")
    public void user_enters_deal_details(DataTable dealData)
    {
        List<List<String>> dealValues =dealData.raw();
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//input[@id='title']")).sendKeys(dealValues.get(0).get(0));
        driver.findElement(By.xpath("//input[@id='amount']")).sendKeys(dealValues.get(0).get(1));
        driver.findElement(By.xpath("//input[@id='probability']")).sendKeys(dealValues.get(0).get(2));
        driver.findElement(By.xpath("//input[@id='commission']")).sendKeys(dealValues.get(0).get(3));

    }
    @Then("^closes the browser$")
    public void closes_the_browser()
    {
        driver.quit();
    }
}


