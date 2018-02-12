# WebdriverIO + tape

This repository demonstrates how to use [WebdriverIO](http://webdriver.io) with
the [tape](https://github.com/substack/tape/) test framework.

It includes a test file (`tests/test.spec.js`) that:

1. Opens the Firefox browser (as defined in `tests/conf.js`);
1. Visits the url `https://duckduckgo.com`; and
1. Tests the title of the page to be equal to `DuckDuckGo`.





## Requirements

* [selenium-standalone](https://github.com/vvo/selenium-standalone/) (installed
  globally); and
* Java 8 or higher.





## Installation

```
yarn install
```

(`yarn` can be substituted with `npm`.)





## Getting started

Start the Selenium server:

```
selenium-standalone start
```

Then run the tests in a separate window:

```
yarn run tests
```

The expected output should be similar to below:

```
TAP version 13
# should visit DuckDuckGo
ok 1 should be equal

1..1
# tests 1
# pass  1

# ok
```
