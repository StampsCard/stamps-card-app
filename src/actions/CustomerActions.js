import {
  LAST_PAYMENTS_FETCH_SUCCESS,
  MY_STORES_FETCH_SUCCESS,
  STAMPS_CARDS_FETCH_SUCCESS
} from './types';
import {
  getStoresQuery,
  getLastPaymentsQuery,
  getStampsCardsQuery
} from './queries/CustomerQueries';
import Client from '../Client';

export const fetchLastPayments = (userId) => {
  return (dispatch) => {
    Client.query({
			query: getLastPaymentsQuery,
			variables: { userId }
		}).then((resp) => {
      console.log(resp);
      return dispatch({
        type: LAST_PAYMENTS_FETCH_SUCCESS,
        payload: { lastPayments: resp.data.purchasesByUser }
      });
		});
  };
};

export const fetchBusinesses = (userId) => {
  return (dispatch) => {
    Client.query({
			query: getStoresQuery,
			variables: { userId }
		}).then((resp) => {
      return dispatch({
        type: MY_STORES_FETCH_SUCCESS,
        payload: { stores: resp.data.storesByCustomer }
      });
		});
  };
};

export const fetchStamps = (userId) => {
  return (dispatch) => {
    Client.query({
			query: getStampsCardsQuery,
			variables: { userId }
		}).then((resp) => {
      dispatch({
        type: STAMPS_CARDS_FETCH_SUCCESS,
        payload: { stampCards: resp.data.stampCardsByUser }
      });
		});
  };
};
