'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Typo = typeof require != 'undefined' ? require('typo-js') : Typo;

/**
 * Strong password validation.
 */

var StrongPassword = function () {
    /**
     * Contructor.
     *
     * @param {object} params
     */
    function StrongPassword(params) {
        _classCallCheck(this, StrongPassword);

        var results = void 0;

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

        this.version = '1.1.3';

        results = this.check();
        this.strong = results.strong;
        this.reasonText = results.reason;
    }

    /**
     * Check if the password is strong.
     *
     * @return {boolean}
     */


    _createClass(StrongPassword, [{
        key: 'check',
        value: function check() {
            var strong = true;
            var reasonText = void 0;
            var notRealWords = [];
            var dictionary = void 0;

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

            this.password.split(' ').forEach(function (value) {
                var cleanValue = value.replace(/[,.?!]/g, '');

                if (!dictionary.check(cleanValue) && !Number.isInteger(cleanValue * 1)) {
                    notRealWords.push(value);
                }
            });

            if (notRealWords.length > 0) {
                reasonText = 'doesnt has a real word(s) [' + notRealWords.join(', ') + ']';
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

    }, {
        key: 'isStrong',
        get: function get() {
            return this.strong;
        }

        /**
         * Return the reason if the password is not strong.
         *
         * @return {boolean}
         */

    }, {
        key: 'reason',
        get: function get() {
            return this.reasonText;
        }
    }]);

    return StrongPassword;
}();

if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = StrongPassword;
}
//# sourceMappingURL=app.js.map
