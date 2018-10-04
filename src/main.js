/**
 * isStopword
 * @ndaidong
 **/

const fs = require('fs');
const path = require('path');

const STOPWORD_FILE = path.join(__dirname, './stopwords.txt');

const isString = (val) => {
  return {}.toString.call(val) === '[object String]';
};

const loadStopwords = () => {
  let s = fs.readFileSync(STOPWORD_FILE, 'utf8');
  return s.split('\n');
};

const STOPWORDS = loadStopwords();

const isStopword = (word = '') => {
  let w = isString(word) ? word : String(word);
  let s = w.toLowerCase();
  return STOPWORDS.indexOf(s) !== -1;
};

const getStopwords = () => {
  return [...STOPWORDS];
};

module.exports = {
  isStopword,
  getStopwords,
};
