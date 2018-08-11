import {
  MY_CUSTOMERS_FETCH_SUCCESS,
  LAST_PURCHASES_FETCH_SUCCESS
} from './types';
import {
  getCustomersQuery
} from './queries/BusinessOwnerQueries';
import Client from '../Client';

import GetPurchasesByBusinessService from '../services/GetPurchasesByBusiness';

export const fetchMyCustomers = (businessId) => {
  return (dispatch) => {
    Client.query({
			query: getCustomersQuery,
			variables: { businessId }
		}).then((resp) => {
      dispatch({
        type: MY_CUSTOMERS_FETCH_SUCCESS,
        payload: { myCustomers: resp.data.customersByBusiness }
      });
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
