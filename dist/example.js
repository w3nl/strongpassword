let strongPasswordValidation = new StrongPassword({
    password:     'This is 1 strong password',
    locale:       'en_US',
    dictionaries: 'dictionaries'
});

console.log('Strong password? ' + strongPasswordValidation.isStrong);

var weakPasswordValidation = new StrongPassword({
    password: 'Not strong',
    locale:   'en_US'
});

console.log('Strong password? ' + weakPasswordValidation.isStrong);
console.log('Reason? ' + weakPasswordValidation.reason);
