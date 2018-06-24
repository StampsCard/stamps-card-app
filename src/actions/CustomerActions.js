import {
  LAST_PAYMENTS_FETCH_SUCCESS
} from './types';
import LastPaymentFetchService from '../services/LastPaymentsFetchService';

export const fetchLastPayments = (user) => {
  return (dispatch) => {
    const lastPayments = LastPaymentFetchService.fetch(user.id);

    dispatch({
      type: LAST_PAYMENTS_FETCH_SUCCESS,
      payload: { lastPayments }
    });
  };
};
