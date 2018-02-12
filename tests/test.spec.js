/**
 * Credit to Patrick Arlt for their gist that helped with the development of
 * this file:
 * https://gist.github.com/patrickarlt/931b129598703eed4dda
 *
 * Modified to exclude the use of `babel-node` and import external
 * configuration.
 */

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
