/**
 * Testing
 * @ndaidong
 */

var bella = require('bellajs');
var test = require('tape');

var main = require('../index');

test('Get an overview', (assert) => {
  assert.ok(bella.isObject(main), 'It must return an object.');
  assert.ok(bella.hasProperty(main, 'version'), 'Exported object must have the property "version"');
  assert.ok(bella.isFunction(main.isStopword), 'Exported object must have the method "isStopword"');
  assert.ok(bella.isFunction(main.getStopwords), 'Exported object must have the method "getStopwords"');
  assert.end();
});

test('Test .getStopwords()', (assert) => {
  let stopwords = main.getStopwords();
  assert.ok(bella.isArray(stopwords), 'It must return an array');
  assert.ok(stopwords.indexOf('accordingly') > 0, 'It must contain the word "accordingly"');
  assert.ok(stopwords.indexOf('algolia') === -1, 'It must not contain the word "algolia"');
  assert.end();
});

test('Test .isStopword()', (assert) => {
  assert.ok(main.isStopword('accordingly'), '"accordingly" is stopword');
  assert.ok(main.isStopword('AccoRdingly'), '"AccoRdingly" is stopword');
  assert.ok(!main.isStopword('algolia'), '"algolia" is not stopword');
  assert.ok(!main.isStopword('Algolia'), '"Algolia" is not stopword');

  assert.throws(
    () => {
      main.isStopword();
    },
    'It must throw an error if nothing passed into'
  );

  assert.throws(
    () => {
      main.isStopword(12345);
    },
    'It must throw error for non-string parameter'
  );

  assert.throws(
    () => {
      main.isStopword('');
    },
    'It must throw error if the parameter is empty string'
  );

  assert.end();
});
