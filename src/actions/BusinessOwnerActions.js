import {
  MY_CUSTOMERS_FETCH_SUCCESS,
  LAST_PURCHASES_FETCH_SUCCESS,
  BUSINESS_STAMPS_CARDS_FETCH_SUCCESS
} from './types';
import {
  getCustomersQuery,
  getLastPurchasesQuery,
  getStampCardsQuery
} from './queries/BusinessOwnerQueries';
import Client from '../Client';

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
    Client.query({
			query: getLastPurchasesQuery,
			variables: { businessId }
		}).then((resp) => {
      return dispatch({
        type: LAST_PURCHASES_FETCH_SUCCESS,
        payload: { lastPurchases: resp.data.purchasesByBusiness }
      });
		});
  };
};

export const fetchStampCards = (businessId) => {
  return (dispatch) => {
    Client.query({
      query: getStampCardsQuery,
      variables: { businessId }
    }).then((resp) => {
      console.log(resp);
      return dispatch({
        type: BUSINESS_STAMPS_CARDS_FETCH_SUCCESS,
        payload: { stampCards: resp.data.business.stampCards }
      });
		});
  };
};
