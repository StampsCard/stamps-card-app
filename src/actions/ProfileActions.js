import { Actions } from 'react-native-router-flux';
import {
  BUSINESS_OWNER_SELECTED,
  CUSTOMER_SELECTED,
  MAIN_PAGE
} from './types';
import { BUSINESS_OWNER, CUSTOMER } from '../values/Profiles';

export const businessOwnerSelected = (user) => {
  return (dispatch) => {
    dispatch({
      type: BUSINESS_OWNER_SELECTED,
      payload: user
    });

    const profile = {
      id: BUSINESS_OWNER,
      text: 'Business Owner'
    };

    Actions.welcome({ userLogged: user, profile });
  };
};

export const customerSelected = (user) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_SELECTED,
      payload: user
    });

    const profile = {
      id: CUSTOMER,
      text: 'Customer'
    };

    Actions.welcome({ userLogged: user, profile });
  };
};

export const goToMainPage = (user, profileId) => {
    return (dispatch) => {
      dispatch({
        type: MAIN_PAGE,
        payload: user
      });
      if (BUSINESS_OWNER === profileId) {
        return Actions.businessOwnerHomeScreen({ userLogged: user });
      }
      if (CUSTOMER === profileId) {
        return Actions.customerHomeScreen({ userLogged: user });
      }
      return Actions.login({ error: 'The profile selected is incorrect.' });
   };
};
