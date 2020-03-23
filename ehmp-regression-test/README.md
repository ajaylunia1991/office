### Running environment

- nodejs version >= 8.9.3

### Installation Steps

- Use `git clone https://git.ehealthinsurance.com/scm/mx/ehmp-regression-test.git` to download code in your local.

- Use `npm install` Install all modules of package.json locally.

- Use `npm install selenium-standalone@latest -g` Install selenium server globally.

- Use `selenium-standalone install` Install browser driver.

- Use `selenium-standalone start` Launch selenium server.

- New a terminal, Use `export NODE_ENV=cm && npx codeceptjs run --steps --profile './test/ehmp/Sanity/sanityFlowMA.js'`  Specify the single script you wanna run.

- New a terminal, Use `export NODE_ENV=cm && npx codeceptjs run-multiple --all --profile './test/ehmp/Sanity/*.js' `  Specify the folder you wanna run in parallel.

- Open report, Use `npx allure generate allure-results --clean -o allure-report && allure open `



If you met this error: self signed certificate in certificate chain. You can use the following command to fix it.

`export NODE_TLS_REJECT_UNAUTHORIZED=0`




### Codeceptjs Configuration Introduction

##### The most important file : codecept.conf.js

- `tests`  : set the scripts you wanna run.

- `include`: define all pages.

- `helper`: define which helper you wanna use and other plugins.

- `multiple`: define concurrency configuration.

#####  Add more para for running command

- `--steps`  : print every step of script.

- `--profile`: a variable, you can transfer all what you wanna transfer.

- `--grep`   : running scripts by tag.

- `--reporter`: specify reporter.

- `--config`: specify codecept config file.



### Push Code

- Use `git pull` to pull the latest code.

- Use `git status` to check all files you've updated in your local.

- Use `git add .`  to add all files have been updated, we also can use `git add xxx.js` to add one file separately.

- Use `git commit -m "xxx"` to commit these changes to your local stage, and use "xxx" to note the reason why you commit.

- Use `git push"` to push your changes to remote stage.

### Catch error scripts name when we use console.log of jenkins
```
grep -i -e ') at Test.Data.Scenario (' -e ') at Test.Scenario ('  build.log >result1.txt
sed 's/^.*\(test\/.*.js\).*$/\1/' result1.txt >result2.txt 
sort -u result2.txt >result.txt 
sed 's/\\\n//' -i result.txt
cat result.txt
```


### CodeceptJS Official Site URLs

- [Quick Start](https://codecept.io/quickstart-webdriver)

- [WebDriverIO helper](https://codecept.io/helpers/WebDriverIO/)

- [Page Object](https://codecept.io/pageobjects#pageobject)

- [Data Driven Tests](https://codecept.io/advanced#data-driven-tests)

- [Parallel Execution](https://codecept.io/parallel#multiple-browsers-execution)
