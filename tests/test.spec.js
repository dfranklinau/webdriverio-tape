const webdriverio = require('webdriverio');
const test = require('tape');
const conf = require('./conf');

const client = webdriverio.remote(conf);

test('should visit DuckDuckGo', t => {

  /**
   * Tell tape to automatically call `t.end()` after one assertion has been run.
   * See more: https://github.com/substack/tape#tplann
   */
  t.plan(1);

  client
    .init()
    .url('https://duckduckgo.com')
    .getTitle().then(function (title) {
      t.equal(title, 'DuckDuckGo');
    })
    .end();

});
