package com.qa.page;

import com.qa.util.TestBase;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends TestBase
{
  //PAGE FACTORY - OR:
    @FindBy(name="username")
    WebElement username;

    @FindBy(name="password")
    WebElement password;

    @FindBy(xpath= "//input[@type='submit']")
    WebElement loginBtn;

    //INITIALIZING THE PAGE OBJECTS:
    public LoginPage()
    {
        PageFactory.initElements(driver, this);
    }

    //ACTIONS:
    public String validateLoginPageTitle()
    {
        return driver.getTitle();
    }

    public HomePage login(String un,String pwd)
    {
        username.sendKeys(un);
        password.sendKeys(pwd);
        JavascriptExecutor js=(JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();",loginBtn);

        return new HomePage();

    }

}
