/**
 * isStopword
 * @ndaidong
 **/

var fs = require('fs');

const STOPWORD_FILE = './stopwords.txt';

var isString = (val) => {
  return {}.toString.call(val) === '[object String]';
};

var getStopwords = () => {
  let s = fs.readFileSync(STOPWORD_FILE, 'utf8');
  return s.split('\n');
};

const STOPWORDS = getStopwords();

var isStopword = (word = '') => {
  if (!word || !isString(word)) {
    throw new Error('Parameter must be a non-empty String.');
  }
  let w = word.toLowerCase();
  return STOPWORDS.indexOf(w) !== -1;
};

module.exports = {
  isStopword,
  getStopwords
};
