import {
  LAST_PAYMENTS_FETCH_SUCCESS,
  MY_STORES_FETCH_SUCCESS,
  STAMPS_CARDS_FETCH_SUCCESS
} from './types';
import GetPaymentsByUserService from '../services/GetPaymentsByUser';
import GetBusinessesByCustomerService from '../services/GetBusinessesByCustomer';
import GetStampsCardsByUserService from '../services/GetStampsCardsByUser';

export const fetchLastPayments = (user) => {
  return (dispatch) => {
    const lastPayments = GetPaymentsByUserService.fetch(user.id);

    dispatch({
      type: LAST_PAYMENTS_FETCH_SUCCESS,
      payload: { lastPayments }
    });
  };
};

export const fetchBusinesses = (user) => {
  return (dispatch) => {
    const stores = GetBusinessesByCustomerService.fetch(user.id);
    dispatch({
      type: MY_STORES_FETCH_SUCCESS,
      payload: { stores }
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
