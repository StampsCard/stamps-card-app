import { Actions } from 'react-native-router-flux';
import {
  BUSINESS_OWNER_SELECTED,
  CUSTOMER_SELECTED,
  MAIN_PAGE
} from './types';
import { BUSINESS_OWNER, CUSTOMER } from '../values/Profiles';
import { getBusinessIdsQuery } from './queries/BusinessOwnerQueries';
import Client from '../Client';

export const businessOwnerSelected = (userId) => {
  return (dispatch) => {
    Client.query({
			query: getBusinessIdsQuery,
			variables: { userId }
		}).then((resp) => {
      const response = resp.data.businessesByOwner;
      if (!Array.isArray(response) || !response.length) {
        Actions.login();
      }

      dispatch({
        type: BUSINESS_OWNER_SELECTED,
        payload: { businessId: response[0].id }
      });

      Actions.welcome();
		}).catch((err) => {
      console.log(err);
    });
  };
};

export const customerSelected = (hasBusiness) => {
  return (dispatch) => {
    dispatch({ type: CUSTOMER_SELECTED });

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
        return Actions.businessOwnerHomeScreen();
      }
      if (CUSTOMER === profileId) {
        return Actions.customerHomeScreen();
      }
      return Actions.login({ error: 'The profile selected is incorrect.' });
   };
};
