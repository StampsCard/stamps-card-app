module.exports.logIn = (email, password) => {

    'use strict';

    if (['ricard@stampscard.com', 'david@stampscard.com', 'peter@stampscard.com'].indexOf(email) >= 0) {
        return {
            'id': '1',
            email,
            password,
            role: 'BUSINESS_OWNER'
        };
    }

    if (email === 'customer@stampscard.com') {
        return {
            'id': '1',
            email,
            password,
            role: 'CUSTOMER'
        };
    }
};