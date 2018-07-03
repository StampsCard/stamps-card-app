module.exports.fetch = (businessId) => {
    'use strict';

    return [
      {
        id: 1,
        amount: 30.0,
        stamps: 4,
        user: 'David Sola', //Get the user who paid
        concept: 'Ticket #1234567',
        confirmedAt: '20/10/2018 20:00'
      },
      {
        id: 2,
        amount: 45.5,
        stamps: 5,
        user: 'Ricard Bague',
        concept: 'Ticket #1234568',
        confirmedAt: '21/10/2018 20:00'
      },
      {
        id: 3,
        amount: 52.3,
        stamps: 7,
        user: 'Peter Joustra',
        concept: 'Ticket #1234567',
        confirmedAt: '22/10/2018 20:00'
      }
    ];
};
