let strongPasswordValidation = new StrongPassword({
    password:     'This is 1 strong password',
    locale:       'en_US',
    dictionaries: 'dictionaries'
});

console.log('strong password?' + strongPasswordValidation.isStrong);
