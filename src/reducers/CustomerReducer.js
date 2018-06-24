import {
  LAST_PAYMENTS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LAST_PAYMENTS_FETCH_SUCCESS:
        return { lastPayments: action.payload.lastPayments };
      default:
        return state;
    }
};
