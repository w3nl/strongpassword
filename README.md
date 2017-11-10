# StrongPassword

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-stats] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Codecov Status][codecov-image]][codecov-url]

Check if the password is strong.

Here an example of a strong password check:

```
var strongPasswordValidation = new StrongPassword({
    password: 'This is 1 strong password!',
    locale:   'en_US'
});

console.log(strongPasswordValidation.isStrong);
```

Here an example of a weak password check:
```
var strongPasswordValidation = new StrongPassword({
    password: 'Not strong',
    locale:   'en_US'
});

console.log(strongPasswordValidation.isStrong);
console.log(strongPasswordValidation.reason);
```

## Params

* password
* locale ('en_US')
* minimumLength (10)
* minimumWords (4)
* numbers (true)
* lowercase (true)
* uppercase (uppercase)
* dictionaries (typo/dictionaries)

Only the password param is required.
For the other params you see the default value in the list.

### locale

With this param you can set the dictionary for the words.
This will check if you  only use normal words, so you can remember it.

### minimumLength

With this param you can set the minimum length of the password.
The default length is a total of 10 chars, including spaces.

### minimumWords

With this param you can set the minimum words in the password.
The default length is a total of 4 words, so the password is long, and not easy to guess.

### numbers

With this param you can set that the password must have a number.

### lowercase

With this param you can set that the password must have a alphabetical lowercase char.

### uppercase

With this param you can set that the password must have a alphabetical uppercase char.

### dictionaries

You can add another dictionary than en_US.


## Test the package.

```
npm test
```

This will run all the tests in the test folder with mocha.

If you only want to check the eslint rules, just run.

```
npm run lint
```

## node.js

To include strongpassword in Node, first install with npm.

```
npm install strongpassword
```

Use the package in your node files.

```
require('strongpassword');
```


[downloads-image]: https://img.shields.io/npm/dt/strongpassword.svg
[npm-url]: https://www.npmjs.com/package/strongpassword
[npm-image]: https://img.shields.io/npm/v/strongpassword.svg
[npm-stats]: https://npm-stat.com/charts.html?package=strongpassword
[travis-url]: https://travis-ci.org/w3nl/strongpassword
[travis-image]: https://img.shields.io/travis/w3nl/strongpassword/master.svg
[coveralls-url]: https://coveralls.io/r/w3nl/strongpassword
[coveralls-image]: https://img.shields.io/coveralls/w3nl/strongpassword/master.svg
[codecov-url]: https://codecov.io/gh/w3nl/strongpassword
[codecov-image]: https://img.shields.io/codecov/c/github/w3nl/strongpassword.svg
