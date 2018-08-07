import {
  MY_CUSTOMERS_FETCH_SUCCESS,
  LAST_PURCHASES_FETCH_SUCCESS
} from './types';

import GetCustomersByBusinessOwnerService from '../services/GetCustomersByBusinessOwner';
import GetPurchasesByBusinessService from '../services/GetPurchasesByBusiness';

export const fetchMyCustomers = (businessId) => {
  return (dispatch) => {
    const myCustomers = GetCustomersByBusinessOwnerService.fetch(businessId);

    dispatch({
      type: MY_CUSTOMERS_FETCH_SUCCESS,
      payload: { myCustomers }
    });
  };
};

export const fetchLastPurchases = (businessId) => {
  return (dispatch) => {
    const lastPurchases = GetPurchasesByBusinessService.fetch(businessId);

    dispatch({
      type: LAST_PURCHASES_FETCH_SUCCESS,
      payload: { lastPurchases }
    });
  };
};
