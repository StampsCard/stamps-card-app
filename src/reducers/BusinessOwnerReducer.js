import {
  MY_CUSTOMERS_FETCH_SUCCESS,
  LAST_PURCHASES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MY_CUSTOMERS_FETCH_SUCCESS:
        return { myCustomers: action.payload.myCustomers };
      case LAST_PURCHASES_FETCH_SUCCESS:
        return { lastPurchases: action.payload.lastPurchases };
      default:
        return state;
    }
};
