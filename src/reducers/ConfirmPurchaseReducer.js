import {
  PURCHASE_FETCH_SUCCESS,
  PURCHASE_CONFIRMED,
  PURCHASE_CANCELED,
  USER_FETCH_SUCCESS,
  PURCHASE_SCANNED
} from '../actions/types';

const INITIAL_STATE = {
  purchase: null,
  user: null,
  purchaseScannedId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PURCHASE_FETCH_SUCCESS:
      return { ...state, purchase: action.payload };
    case PURCHASE_CONFIRMED:
      return { ...state, purchase: action.payload };
    case PURCHASE_CANCELED:
      return INITIAL_STATE;
    case USER_FETCH_SUCCESS:
        return { ...state, user: action.payload };
    case PURCHASE_SCANNED:
        return { ...state, purchaseScannedId: action.payload };
    default:
      return state;
  }
};
