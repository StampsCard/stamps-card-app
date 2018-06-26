import {
  LAST_PAYMENTS_FETCH_SUCCESS,
  MY_STORES_FETCH_SUCCESS
} from './types';
import GetPaymentsByUserService from '../services/GetPaymentsByUser';
import GetBusinessesByCustomerService from '../services/GetBusinessesByCustomer';

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
    console.log(stores);
    dispatch({
      type: MY_STORES_FETCH_SUCCESS,
      payload: { stores }
    });
  };
};
