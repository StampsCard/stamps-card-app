import {
  LAST_PAYMENTS_FETCH_SUCCESS,
  MY_STORES_FETCH_SUCCESS,
  STAMPS_CARDS_FETCH_SUCCESS
} from './types';
import GetStampsCardsByUserService from '../services/GetStampsCardsByUser';
import {
  getStoresByUserQuery,
  getLastPaymentsQuery
} from './queries/CustomerQueries';
import Client from '../Client';

export const fetchLastPayments = (userId) => {
  return (dispatch) => {
    Client.query({
			query: getLastPaymentsQuery,
			variables: { userId }
		}).then((resp) => {
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
			query: getStoresByUserQuery,
			variables: { userId }
		}).then((resp) => {
      console.log(resp.data.businessesByCustomer);
      return dispatch({
        type: MY_STORES_FETCH_SUCCESS,
        payload: { stores: resp.data.businessesByCustomer }
      });
		});
  };
};

export const fetchStamps = (user) => {
  return (dispatch) => {
    const stampCards = GetStampsCardsByUserService.fetch(user.id);
    dispatch({
      type: STAMPS_CARDS_FETCH_SUCCESS,
      payload: { stampCards }
    });
  };
};
