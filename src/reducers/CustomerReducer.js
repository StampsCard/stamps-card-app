import {
  LAST_PAYMENTS_FETCH_SUCCESS,
  MY_STORES_FETCH_SUCCESS,
  STAMPS_CARDS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LAST_PAYMENTS_FETCH_SUCCESS:
        return { lastPayments: action.payload.lastPayments };
      case MY_STORES_FETCH_SUCCESS:
        return { stores: action.payload.stores };
      case STAMPS_CARDS_FETCH_SUCCESS:
          return { stampCards: action.payload.stampCards };
      default:
        return state;
    }
};
