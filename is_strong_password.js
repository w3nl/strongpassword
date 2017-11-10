const Typo = require('typo-js');

/**
 * Strong password validation.
 */
class StrongPassword {
    /**
     * Contructor.
     *
     * @param {object} params
     */
    constructor(params) {
        if(!params) {
            return;
        }

        this.locale = params.locale || 'en_US';
        this.password = params.password;
    }

    /**
     * Return if the password is strong.
     *
     * @return {boolean}
     */
    get isStrong() {
        let strong = true;
        const dictionary = new Typo(this.locale);

        if(!this.password) {
            return false;
        }

        if(this.password.length < 8) {
            return false;
        }

        if(this.password.split(' ').length < 3) {
            return false;
        }

        this.password.split(' ').forEach(function(val) {
            if(!dictionary.check(val)) {
                strong = false;
            }
        });


        return strong;
    }
}

if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = StrongPassword;
}
