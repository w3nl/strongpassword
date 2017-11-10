var assert = require('assert');
var StrongPassword = require('../node_modules/typo-js/typo.js');
var StrongPassword = require('../dist/js/app.js');
var dictionaries = 'node_modules/typo-js/dictionaries';

describe('Check the validator in the dist folder.', function() {
    var noPassword = new StrongPassword();

    it('Check if you dont send a password.', function() {
        console.log(noPassword.reason);
        assert.equal(false, noPassword.isStrong);
    });

    var noPassword2 = new StrongPassword({});

    it('Check if you dont send a password, test 2.', function() {
        console.log(noPassword2.reason);
        assert.equal(false, noPassword2.isStrong);
    });

    var strongPasswordValidation = new StrongPassword({
        password: 'This is 1 strong password',
        locale:   'en_US'
    });

    it('Check if the password is strong.', function() {
        assert.equal(true, strongPasswordValidation.isStrong);
    });

    var strongPasswordValidation2 = new StrongPassword({
        password:      'This is 1 strong password',
        locale:        'en_US',
        minimumLength: 10,
        minimumWords:  4
    });

    it('Check if the password is strong, test 2.', function() {
        assert.equal(true, strongPasswordValidation2.isStrong);
    });

    var weakPasswordValidation = new StrongPassword({
        password: 'weak',
        locale:   'en_US'
    });

    it('Check if the password is weak.', function() {
        console.log(weakPasswordValidation.reason);
        assert.equal(false, weakPasswordValidation.isStrong);
    });

    var weakPasswordValidation2 = new StrongPassword({
        password: 'weak password',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 2.', function() {
        console.log(weakPasswordValidation2.reason);
        assert.equal(false, weakPasswordValidation2.isStrong);
    });

    var weakPasswordValidation3 = new StrongPassword({
        password: 'Oo22zRAJ2rxAOo22zRAJ2rxA',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 3.', function() {
        console.log(weakPasswordValidation3.reason);
        assert.equal(false, weakPasswordValidation3.isStrong);
    });

    var weakPasswordValidation4 = new StrongPassword({
        password: 'Welkom01',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 4.', function() {
        console.log(weakPasswordValidation4.reason);
        assert.equal(false, weakPasswordValidation4.isStrong);
    });

    var weakPasswordValidation5 = new StrongPassword({
        password: 'Oo22 zRAJ2 rx A',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 5.', function() {
        console.log(weakPasswordValidation5.reason);
        assert.equal(false, weakPasswordValidation5.isStrong);
    });

    var weakPasswordValidation6 = new StrongPassword({
        password: 'This is not a strong password',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 6.', function() {
        console.log(weakPasswordValidation6.reason);
        assert.equal(false, weakPasswordValidation6.isStrong);
    });

    var weakPasswordValidation7 = new StrongPassword({
        password: 'this is not 1 strong password',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 7.', function() {
        console.log(weakPasswordValidation7.reason);
        assert.equal(false, weakPasswordValidation7.isStrong);
    });

    var weakPasswordValidation8 = new StrongPassword({
        password: '123 456 789 123',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 8.', function() {
        console.log(weakPasswordValidation8.reason);
        assert.equal(false, weakPasswordValidation8.isStrong);
    });

    var weakPasswordValidation9 = new StrongPassword({
        password:      'password',
        locale:        'en_US',
        numbers:       false,
        lowercase:     false,
        uppercase:     false,
        minimumLength: 8,
        minimumWords:  1
    });

    it('Check if the password is weak, test 9.', function() {
        console.log(weakPasswordValidation9.reason);
        assert.equal(true, weakPasswordValidation9.isStrong);
    });

    var weakPasswordValidation10 = new StrongPassword({
        password:     'My 1st Password!',
        locale:       'en_US',
        minimumWords: 3,
        dictionaries: dictionaries
    });

    it('Check if the password is weak, test 10.', function() {
        assert.equal(true, weakPasswordValidation10.isStrong);
    });
});
