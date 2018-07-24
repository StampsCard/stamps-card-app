import { Actions } from 'react-native-router-flux';
import { BUSINESS_OWNER, CUSTOMER } from '../values/Profiles';

module.exports.getByProfile = (profile) => {
  'use strict';

    console.log(profile, CUSTOMER, BUSINESS_OWNER);
    if (CUSTOMER === profile) {
      return [
        {
          key: 'customerHomeScreen',
          name: 'Home',
          onPress: (user) => {
            Actions.customerHomeScreen({ user });
          }
        },
        {
          key: 'myLastPayments',
          name: 'My last payments',
          onPress: (user) => {
            Actions.myLastPayments({ user });
          }
        },
        {
          key: 'myStores',
          name: 'My stores',
          onPress: (user) => {
            Actions.myStores({ user });
          }
        },
        {
          key: 'myStampCards',
          name: 'My stamps cards',
          onPress: (user) => {
            Actions.myStampCards({ user });
          }
        },
        {
          key: 'scanPurchase',
          name: 'Scan purchase',
          onPress: (user) => {
            Actions.scanPurchase({ user });
          }
        },
      ];
    }

    if (BUSINESS_OWNER === profile) {
      return [
        {
          key: 'businessOwnerHomeScreen',
          name: 'Home',
          onPress: (user) => {
            Actions.businessOwnerHomeScreen({ user });
          }
        },
        {
          key: 'myCustomers',
          name: 'My customers',
          onPress: (user) => {
            Actions.myCustomers({ user });
          }
        },
        {
          key: 'registerPurchase',
          name: 'Register purchase',
          onPress: (user) => {
            Actions.registerPurchase({ user });
          }
        },
        {
          key: 'lastPurchases',
          name: 'Last purchases',
          onPress: (user) => {
            Actions.lastPurchases({ user });
          }
        },

      ];
    }
};
