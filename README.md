# is-stopword
To check if a word is [stopword](https://en.wikipedia.org/wiki/Stop_words) in English

[![NPM](https://badge.fury.io/js/is-stopword.svg)](https://badge.fury.io/js/is-stopword)
[![Build Status](https://travis-ci.org/ndaidong/is-stopword.svg?branch=master)](https://travis-ci.org/ndaidong/is-stopword)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/is-stopword/badge.svg?branch=master)](https://coveralls.io/github/ndaidong/is-stopword?branch=master)


## Usage

```
var {
  isStopword,
  getStopwords
} = require('is-stopword');

isStopword('accordingly'); // --> true, because "accordingly" is stopword
isStopword('algolia'); // --> false, because "algolia" is not a stopword

getStopwords(); // --> return an array of the stopwords
```

# API reference

### .isStopword(String word)

Return a boolean.

### .getStopwords()

Return an array of the stopwords come from [ranks.nl](http://www.ranks.nl/stopwords).

###### FYI

> Stop Words are words which do not contain important significance to be used in Search Queries. Usually these words are filtered out from search queries because they return vast amount of unnecessary information.


## Test

```
git clone https://github.com/ndaidong/is-stopword.git
cd is-stopword
npm install
npm test
```

# License

The MIT License (MIT)
