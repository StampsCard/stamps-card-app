import { Actions } from 'react-native-router-flux';
import {
  BUSINESS_OWNER_SELECTED,
  CUSTOMER_SELECTED
} from './types';

export const businessOwnerSelected = (user) => {
  return (dispatch) => {
    dispatch({
      type: BUSINESS_OWNER_SELECTED,
      payload: user
    });
    Actions.welcome();
  };
};

export const customerSelected = (user) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_SELECTED,
      payload: user
    });
    Actions.welcome();
  };
};
