var assert = require('assert');
var StrongPassword = require('../is_strong_password.js');

describe('Check the validator.', function() {
    var noPassword = new StrongPassword();

    it('Check if you dont send a password.', function() {
        assert.equal(false, noPassword.isStrong);
    });

    var noPassword2 = new StrongPassword({});

    it('Check if you dont send a password, test 2.', function() {
        assert.equal(false, noPassword2.isStrong);
    });

    var strongPasswordValidation = new StrongPassword({
        password: 'this is a strong password',
        locale:   'en_US'
    });

    it('Check if the password is strong.', function() {
        assert.equal(true, strongPasswordValidation.isStrong);
    });

    var weakPasswordValidation = new StrongPassword({
        password: 'weak',
        locale:   'en_US'
    });

    it('Check if the password is weak.', function() {
        assert.equal(false, weakPasswordValidation.isStrong);
    });

    var weakPasswordValidation2 = new StrongPassword({
        password: 'weak password',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 2.', function() {
        assert.equal(false, weakPasswordValidation2.isStrong);
    });

    var weakPasswordValidation3 = new StrongPassword({
        password: 'Oo22zRAJ2rxA',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 3.', function() {
        assert.equal(false, weakPasswordValidation3.isStrong);
    });

    var weakPasswordValidation4 = new StrongPassword({
        password: 'Welkom01',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 4.', function() {
        assert.equal(false, weakPasswordValidation4.isStrong);
    });

    var weakPasswordValidation5 = new StrongPassword({
        password: 'Oo22 zRAJ2 rx A',
        locale:   'en_US'
    });

    it('Check if the password is weak, test 5.', function() {
        assert.equal(false, weakPasswordValidation5.isStrong);
    });
});
