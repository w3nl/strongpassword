fetch('dictionaries/en_US.aff')
    .then(res => res.text())
    .then(res => {
        console.log(res);
    });

fetch('dictionaries/en_US.dic')
    .then(res => res.text())
    .then(res => {
        console.log(res);
    });

let strongPasswordValidation = new StrongPassword({
    password:     'This is 1 strong password',
    locale:       'en_US',
    dictionaries: 'dictionaries'
});

console.log('strong password?' + strongPasswordValidation.isStrong);
