import {
  MY_CUSTOMERS_FETCH_SUCCESS
} from './types';
import GetCustomersByBusinessOwner from '../services/GetCustomersByBusinessOwner';

export const fetchMyCustomers = (userId) => {
  return (dispatch) => {
    const myCustomers = GetCustomersByBusinessOwner.fetch(userId);

    dispatch({
      type: MY_CUSTOMERS_FETCH_SUCCESS,
      payload: { myCustomers }
    });
  };
};
