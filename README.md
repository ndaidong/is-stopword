# is-stopword
To check if a word is stopword in English

[![NPM](https://badge.fury.io/js/is-stopword.svg)](https://badge.fury.io/js/is-stopword)
[![Build Status](https://travis-ci.org/ndaidong/is-stopword.svg?branch=master)](https://travis-ci.org/ndaidong/is-stopword)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/is-stopword/badge.svg?branch=master)](https://coveralls.io/github/ndaidong/is-stopword?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/ndaidong/is-stopword.svg)](https://gemnasium.com/github.com/ndaidong/is-stopword)
[![NSP Status](https://nodesecurity.io/orgs/techpush/projects/adfe32ab-aff2-4578-833b-180843d3f427/badge)](https://nodesecurity.io/orgs/techpush/projects/adfe32ab-aff2-4578-833b-180843d3f427)


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

## Test

```
git clone https://github.com/ndaidong/is-stopword.git
cd is-stopword
npm install
npm test
```

# License

The MIT License (MIT)
