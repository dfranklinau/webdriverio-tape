# WebdriverIO + tape

This repository demonstrates how to use [WebdriverIO](http://webdriver.io) with
the [tape](https://github.com/substack/tape/) test framework.

It includes a test file (`tests/test.spec.js`) that:

1. opens the Firefox browser (as defined in `tests/conf.js`);
2. visits the URL `https://duckduckgo.com`; and
3. tests the title of the page to match an expected value.





## Requirements

* Docker with `selenium-standalone` installed; see
  [here](https://github.com/vvo/selenium-standalone).





## Installation

```
npm install
```





## Getting started

Run the Docker service containing the Selenium server that will run all tests.

```
docker run -it -p 4444:4444 vvoyer/selenium-standalone
```

Run the example test:

```
npm test
```

The result should be something similar to the below output:

```
TAP version 13
# should visit DuckDuckGo
ok 1 should be equal

1..1
# tests 1
# pass  1

# ok
```

The example test checks the `<title>` tag of
[DuckDuckGo](https://duckduckgo.com/). If the test fails, it is because the
title has changed (the output should indicate this).





## Acknowledgements

Credit to Patrick Arlt for their
[gist](https://gist.github.com/patrickarlt/931b129598703eed4dda) that helped
with the development of the test file.
