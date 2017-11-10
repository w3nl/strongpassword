const Typo = typeof require != 'undefined' ? require('typo-js') : Typo;

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
        let results;

        this.strong = false;

        if (!params) {
            this.reasonText = 'no params';

            return;
        }

        this.locale = params.locale || 'en_US';
        this.password = params.password;
        this.minimumLength = params.minimumLength || 10;
        this.minimumWords = params.minimumWords || 4;
        this.mustHaveNumbers = true;
        if (typeof params.numbers == 'boolean') {
            this.mustHaveNumbers = params.numbers;
        }

        this.mustHaveLowerCase = true;
        if (typeof params.lowercase == 'boolean') {
            this.mustHaveLowerCase = params.lowercase;
        }

        this.mustHaveUpperCase = true;
        if (typeof params.uppercase == 'boolean') {
            this.mustHaveUpperCase = params.uppercase;
        }

        this.dictionaries = params.dictionaries || false;

        this.version = '1.1.4';

        results = this.check();
        this.strong = results.strong;
        this.reasonText = results.reason;
    }

    /**
     * Check if the password is strong.
     *
     * @return {boolean}
     */
    check() {
        let strong = true;
        let reasonText;
        let notRealWords = [];
        let dictionary;

        if (this.dictionaries) {
            dictionary = new Typo(this.locale, false, false, {
                dictionaryPath: this.dictionaries
            });
        } else {
            dictionary = new Typo(this.locale);
        }

        if (!this.password) {
            return {
                strong: false,
                reason: 'empty'
            };
        }

        if (this.password.length < this.minimumLength) {
            return {
                strong: false,
                reason: 'to short'
            };
        }

        if (this.password.split(' ').length < this.minimumWords) {
            return {
                strong: false,
                reason: 'too few words'
            };
        }

        if (this.mustHaveNumbers && !this.password.match(/\d+/g)) {
            return {
                strong: false,
                reason: 'has no numbers'
            };
        }

        if (this.mustHaveLowerCase && !this.password.match(/[a-z]/g)) {
            return {
                strong: false,
                reason: 'has no alphabet chars'
            };
        }

        if (this.mustHaveUpperCase && !this.password.match(/[A-Z]/g)) {
            return {
                strong: false,
                reason: 'has no uppercase alphabet chars'
            };
        }

        this.password.split(' ').forEach(function(value) {
            var cleanValue = value.replace(/[,.?!]/g, '');

            if (!dictionary.check(cleanValue) && !Number.isInteger(cleanValue * 1)) {
                notRealWords.push(value);
            }
        });

        if (notRealWords.length > 0) {
            reasonText = 'doesnt has a real word(s) [' + (notRealWords.join(', ')) + ']';
            strong = false;
        }

        return {
            strong: strong,
            reason: reasonText
        };
    }

    /**
     * Return if the password is strong.
     *
     * @return {boolean}
     */
    get isStrong() {
        return this.strong;
    }

    /**
     * Return the reason if the password is not strong.
     *
     * @return {boolean}
     */
    get reason() {
        return this.reasonText;
    }
}

if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = StrongPassword;
}
