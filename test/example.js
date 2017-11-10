var assert = require('assert');
var StrongPassword = require('../is_strong_password.js');

describe('Check the validator.', function() {
    var strongPasswordValidation = new StrongPassword({
        password: 'this is a strong password',
        locale:   'en_US'
    });

    it('Check if the password is strong.', function() {
        assert.equal(true, strongPasswordValidation.isStrong);
    });

    weakPasswordValidation = new StrongPassword({
        password: 'weak',
        locale:   'en_US'
    });

    it('Check if the password is weak.', function() {
        assert.equal(false, weakPasswordValidation.isStrong);
    });

    weakPasswordValidation2 = new StrongPassword({
        password: 'weak password',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 2.', function() {
        assert.equal(false, weakPasswordValidation2.isStrong);
    });

    weakPasswordValidation3 = new StrongPassword({
        password: 'Oo22zRAJ2rxA',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 3.', function() {
        assert.equal(false, weakPasswordValidation3.isStrong);
    });

    weakPasswordValidation4 = new StrongPassword({
        password: 'Welkom01',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 4.', function() {
        assert.equal(false, weakPasswordValidation4.isStrong);
    });

    weakPasswordValidation5 = new StrongPassword({
        password: 'Oo22 zRAJ2 rx A',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 5.', function() {
        assert.equal(false, weakPasswordValidation5.isStrong);
    });
});
