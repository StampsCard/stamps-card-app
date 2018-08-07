module.exports.fetch = (customerId) => {
    'use strict';

    return [
      {
        id: 1,
        key: 1,
        name: 'Jumbo',
        category: {
          id: 1,
          name: 'Supermarkt',
          description: 'Where you can by everything'
        },
        owner: {
          id: 1,
          username: 'david.sola',
          email: 'd.sola.03@gmail.com',
          firstName: 'David',
          lastName: 'Sola'
        },
        totalStamps: 5
      },
      {
        id: 2,
        key: 2,
        name: 'MediaMarkt',
        category: {
          id: 1,
          name: 'Technology',
          description: 'Where you can by gadgets'
        },
        owner: {
          id: 1,
          username: 'ricard.bague',
          email: 'ricard.bague@gmail.com',
          firstName: 'David',
          lastName: 'Sola'
        },
        totalStamps: 10
      },
      {
        id: 3,
        key: 3,
        name: 'CoolBlue',
        category: {
          id: 1,
          name: 'Computers',
          description: 'Where you can by computers'
        },
        owner: {
          id: 1,
          username: 'peter.joustra',
          email: 'peter.joustra@gmail.com',
          firstName: 'Peter',
          lastName: 'Joustra'
        },
        totalStamps: 10
      },
      {
        id: 4,
        key: 4,
        name: 'Praxis',
        category: {
          id: 1,
          name: 'Do It Yourself',
          description: 'Where you can buy tools'
        },
        owner: {
          id: 1,
          username: 'lillian.dampah',
          email: 'lillian.dampah@gmail.com',
          firstName: 'Lillian',
          lastName: 'Dampah'
        },
        totalStamps: 15
      },
    ];
};
