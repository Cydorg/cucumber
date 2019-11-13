package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:/Users/Mac/Cydorg-automation/cucumber/src/main/java/Features"
        ,glue={"stepDefinition"},
        tags={"@facebook"}


)


public class TestRunner
{

}
