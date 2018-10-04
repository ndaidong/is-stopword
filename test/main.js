/**
 * Testing
 * @ndaidong
 */

const {
  isArray,
  isObject,
  isFunction,
  hasProperty,
} = require('bellajs');
const test = require('tap').test;

const main = require('../index');

test('Get an overview', (assert) => {
  assert.ok(isObject(main), 'It must return an object.');
  assert.ok(hasProperty(main, 'version'), 'Exported object must have the property "version"');
  assert.ok(isFunction(main.isStopword), 'Exported object must have the method "isStopword"');
  assert.ok(isFunction(main.getStopwords), 'Exported object must have the method "getStopwords"');
  assert.end();
});

test('Test .getStopwords()', (assert) => {
  let stopwords = main.getStopwords();
  assert.ok(isArray(stopwords), 'It must return an array');
  assert.ok(stopwords.indexOf('accordingly') > 0, 'It must contain the word "accordingly"');
  assert.ok(stopwords.indexOf('algolia') === -1, 'It must not contain the word "algolia"');
  assert.end();
});

test('Test .isStopword()', (assert) => {
  assert.ok(main.isStopword('accordingly'), '"accordingly" is stopword');
  assert.ok(main.isStopword('AccoRdingly'), '"AccoRdingly" is stopword');
  assert.ok(!main.isStopword('algolia'), '"algolia" is not stopword');
  assert.ok(!main.isStopword('Algolia'), '"Algolia" is not stopword');

  assert.ok(!main.isStopword(123456), '"123456" is not stopword');
  assert.end();
});
