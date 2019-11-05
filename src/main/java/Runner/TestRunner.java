package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:/Users/Mac/Cydorg-automation/cydorg-selenium-cucumber/src/main/java/Features"
        ,glue={"stepDefinition"}

)

public class TestRunner
{

}
