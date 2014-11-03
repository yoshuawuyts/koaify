/*eslint no-console:0*/

/**
 * Module dependencies.
 */

var viralify = require('viralify');

/**
 * Exports.
 */

module.exports = koaify;

/**
 * ES6ify all the correct things!
 *
 * @api public
 */

function koaify() {
  viralify('./', ['koa-*', 'fax-*'], 'es6ify', function(err) {
    if (err) return console.error(err);
  });
}
