/**
 * isStopword
 * @ndaidong
 **/

var fs = require('fs');

const STOPWORD_FILE = './stopwords.txt';

var getStopwords = () => {
  let s = fs.readFileSync(STOPWORD_FILE, 'utf8');
  return s.split('\n');
};

const STOPWORDS = getStopwords();

var isStopword = (w) => {
  return STOPWORDS.some((word) => {
    return w === word;
  });
};

module.exports = {
  isStopword,
  getStopwords
};
