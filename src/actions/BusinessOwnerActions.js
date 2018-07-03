import {
  MY_CUSTOMERS_FETCH_SUCCESS,
  LAST_PURCHASES_FETCH_SUCCESS
} from './types';

import GetCustomersByBusinessOwnerService from '../services/GetCustomersByBusinessOwner';
import GetPurchasesByBusinessService from '../services/GetPurchasesByBusiness';

export const fetchMyCustomers = (userId) => {
  return (dispatch) => {
    const myCustomers = GetCustomersByBusinessOwnerService.fetch(userId);

    dispatch({
      type: MY_CUSTOMERS_FETCH_SUCCESS,
      payload: { myCustomers }
    });
  };
};

export const fetchLastPurchases = (userId) => {
  return (dispatch) => {
    const lastPurchases = GetPurchasesByBusinessService.fetch(userId);

    dispatch({
      type: LAST_PURCHASES_FETCH_SUCCESS,
      payload: { lastPurchases }
    });
  };
};
