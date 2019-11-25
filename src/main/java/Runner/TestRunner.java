package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"C:/Users/Mac/Cydorg-automation/cucumber/src/main/java/Features/deals.feature"}
        ,glue={"stepDefinition"},
        //tags={"@CRM"},
        format={"pretty","html:test-outout","junit:junit_xml/cucumber.xml","json:json_output/cucmber.json"},
        dryRun=false,
        strict=true,
        monochrome=true


)


public class TestRunner
{

}
