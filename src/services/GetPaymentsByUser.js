module.exports.fetch = (userId) => {
    'use strict';

    return [
      {
        id: 1,
        key: 1,
        amount: 30.0,
        stamps: 4,
        business: 'Jumbo Supermarkt', //Go to Purchase/Stamps/Business/name
        concept: 'Ticket #1234567',
        confirmedAt: '20/10/2018 20:00'
      },
      {
        id: 2,
        key: 2,
        amount: 45.5,
        stamps: 5,
        business: 'Albert Heijn',
        concept: 'Ticket #1234568',
        confirmedAt: '21/10/2018 20:00'
      },
      {
        id: 3,
        key: 3,
        amount: 52.3,
        stamps: 7,
        business: 'Media Markt',
        concept: 'Ticket #1234567',
        confirmedAt: '22/10/2018 20:00'
      },
      {
        id: 4,
        key: 4,
        amount: 30.0,
        stamps: 4,
        business: 'Praxis',
        concept: 'Ticket #1234567',
        confirmedAt: '20/10/2018 20:00'
      },
      {
        id: 5,
        key: 5,
        amount: 30.0,
        stamps: 4,
        business: 'HEMMA',
        concept: 'Ticket #1234567',
        confirmedAt: '20/10/2018 20:00'
      },
      {
        id: 6,
        key: 6,
        amount: 30.0,
        stamps: 4,
        business: 'Blokker',
        concept: 'Ticket #1234567',
        confirmedAt: '20/10/2018 20:00'
      },
    ];
};
