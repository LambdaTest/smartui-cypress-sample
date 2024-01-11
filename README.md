# Run Cypress Tests On LambdaTest ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

<img height="500" class ="centre" src="https://user-images.githubusercontent.com/70570645/171032160-65d8a2c3-e04b-482d-b1c6-538b75be5fb0.png">

<p align="center">
  <a href="https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/c/LambdaTest" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

*Learn how to get started with Cypress testing on the LambdaTest platform 🚀*

[<img height="70" width="220" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

## Table of Contents 🗏


* [Pre-requisites](#pre-requisites)
* [Running Your First Cypress Test On LambdaTest Platform](#running-your-first-cypress-test-on-lambdatest)
* [Local Testing With Cypress](#running-your-cypress-tests-locally)
* [Authentication](#authentication)
* [Cypress Parallel Testing](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/parallel-testing.md)
* [Specify Browsers And OS](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/supported-browsers-os.md)
* [Supported Cypress Versions](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/supported-cypress-versions.md)
* [Cypress CLI Commands](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/cypress-cli.md)
* [Run Settings](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/run-settings.md)
* [Download Artefact For Cypress Project](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/download-artefacts.md)
* [Integrate LambdaTest With Cypress Dashboard](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/cypress-dashboard.md)
* [Execute Cypress Tests Including Private Dependencies](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/dependencies.md)
* [Applitools Integration For Cypress](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/applitools-integration.md)
* [ReportPortal.io Integration With LambdaTest For Cypress](https://github.com/LambdaTest/Cypress-Cloud/blob/master/cypress-docs/reportportalio-integration.md)


## Pre-requisites

Before we get started, make sure to clone the LambdaTest Cypress Cloud Repo. You can run your first Cypress test on the LambdaTest platform in a few simple steps:

**Step 1:** Clone the LambdaTest-Cypress Cloud repo and navigate to the cloned directory.

  ```bash
  git clone https://github.com/LambdaTest/smartui-cypress-sample
  cd smartui-cypress-sample
  ```

**Step 2: Installing the LambdaTest CLI -**
  You need to install the **LambdaTest-Cypress CLI** package with the help of npm, using the below command:

  ```bash
  npm install -g lambdatest-cypress-cli
  ```

## Running Your First Cypress Test On LambdaTest


>**Test Scenario**: To demonstrate Cypress testing on LambdaTest, we will use the Cypress Kitchen Sink Example.

1. Execute Cypress SmartUI Test with configuration file, named `lambdatest-smartUI-config.json`. Use the below command in the terminal:

```bash
lambdatest-cypress run --lcf lambdatest-smartUI-config.json --username="<YOUR_LAMBDATEST_USERNAME>" --access_key="<YOUR_LAMBDATEST_ACCESS_KEY>"
```

## View Your Cypress Testing Result


As soon as the tests starts executing, you can view them running. Visit your LambdaTest Automation Dashboard.


<img height="400" src="https://user-images.githubusercontent.com/70570645/169592614-d41ad246-32c5-46e1-935c-6f0101f467e6.png">

For each test, you can view the live video feed, screenshots for each test run, console logs, terminal logs and do much more using the **LambdaTest platform**.

If the test gets executed successfully, you will see a green tick on the Timeline view and a "Completed" message on the Automation logs view of your Automation dashboard. If not, then you will see a red cross and a "Failed" message respectively.
      
<img height="400" src="https://user-images.githubusercontent.com/70570645/169593512-94f845b7-3bcc-40f8-a5c1-0c9ab872e3ff.png">

      
## About LambdaTest

[LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using LambdaTest, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million + users across 130+ countries rely on LambdaTest for their testing needs.    

### Features

* Run Selenium, Cypress, Puppeteer, Playwright, and Appium automation tests across 3000+ real desktop and mobile environments.
* Real-time cross browser testing on 3000+ environments.
* Test on Real device cloud
* Blazing fast test automation with HyperExecute
* Accelerate testing, shorten job times and get faster feedback on code changes with Test At Scale.
* Smart Visual Regression Testing on cloud
* 120+ third-party integrations with your favorite tool for CI/CD, Project Management, Codeless Automation, and more.
* Automated Screenshot testing across multiple browsers in a single click.
* Local testing of web and mobile apps.
* Online Accessibility Testing across 3000+ desktop and mobile browsers, browser versions, and operating systems.
* Geolocation testing of web and mobile apps across 53+ countries.
* LT Browser - for responsive testing across 50+ pre-installed mobile, tablets, desktop, and laptop viewports

    
[<img height="70" width="220" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

      
## We are here to help you :headphones:

* Got a query? we are available 24x7 to help. [Contact Us](support@lambdatest.com)
* For more info, visit - [LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=cypress-cloud)
