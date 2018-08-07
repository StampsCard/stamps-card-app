import { Actions } from 'react-native-router-flux';
import { BUSINESS_OWNER, CUSTOMER } from '../values/Profiles';

module.exports.getByProfile = (profile) => {
  'use strict';

    if (CUSTOMER === profile) {
      return [
        {
          key: 'customerHomeScreen',
          name: 'Home',
          onPress: () => { Actions.customerHomeScreen(); }
        },
        {
          key: 'myLastPayments',
          name: 'My last payments',
          onPress: () => { Actions.myLastPayments(); }
        },
        {
          key: 'myStores',
          name: 'My stores',
          onPress: () => { Actions.myStores(); }
        },
        {
          key: 'myStampCards',
          name: 'My stamps cards',
          onPress: () => { Actions.myStampCards(); }
        },
        {
          key: 'scanPurchase',
          name: 'Scan purchase',
          onPress: () => { Actions.scanPurchase(); }
        },
      ];
    }

    if (BUSINESS_OWNER === profile) {
      return [
        {
          key: 'businessOwnerHomeScreen',
          name: 'Home',
          onPress: () => { Actions.businessOwnerHomeScreen(); }
        },
        {
          key: 'myCustomers',
          name: 'My customers',
          onPress: () => { Actions.myCustomers(); }
        },
        {
          key: 'registerPurchase',
          name: 'Register purchase',
          onPress: () => { Actions.registerPurchase(); }
        },
        {
          key: 'lastPurchases',
          name: 'Last purchases',
          onPress: () => { Actions.lastPurchases(); }
        },

      ];
    }
};
