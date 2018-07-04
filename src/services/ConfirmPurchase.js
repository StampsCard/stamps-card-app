module.exports.exec = (purchaseId, userId) => {
    'use strict';
    //   confirmPurchase(id: ID!, userId: ID!): Purchase!
    return {
      id: 1,
      amount: 30.0,
      stamps: 4,
      business: 'Jumbo Supermarkt', //Go to Purchase/Stamps/Business/name
      concept: 'Ticket #1234567',
      confirmedAt: '20/10/2018 20:00'
    };
};
