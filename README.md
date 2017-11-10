# StrongPassword

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-stats] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Check if the password is strong.

here an example array.

```
var strongPasswordValidation = new StrongPassword({
    password: 'this is a strong password',
    locale:   'en_US'
});

console.log(strongPasswordValidation.isStrong);
```


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

Than you can use all array helpers from this package in your node files.


[downloads-image]: https://img.shields.io/npm/dm/strongpassword.svg
[npm-url]: https://www.npmjs.com/package/strongpassword
[npm-image]: https://img.shields.io/npm/v/strongpassword.svg
[npm-stats]: https://npm-stat.com/charts.html?package=strongpassword
[travis-url]: https://travis-ci.org/w3nl/strongpassword
[travis-image]: https://img.shields.io/travis/w3nl/strongpassword/master.svg
[coveralls-url]: https://coveralls.io/r/w3nl/strongpassword
[coveralls-image]: https://img.shields.io/coveralls/w3nl/strongpassword/master.svg
