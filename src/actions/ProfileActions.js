import { Actions } from 'react-native-router-flux';
import {
  BUSINESS_OWNER_SELECTED,
  CUSTOMER_SELECTED,
  MAIN_PAGE
} from './types';
import { BUSINESS_OWNER, CUSTOMER } from '../values/Profiles';

export const businessOwnerSelected = (userLogged) => {
  return (dispatch) => {
    dispatch({
      type: BUSINESS_OWNER_SELECTED,
      payload: userLogged
    });

    Actions.welcome();
  };
};

export const customerSelected = (userLogged, hasBusiness) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_SELECTED,
      payload: userLogged
    });

    Actions.welcome({ hasBusiness });
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
