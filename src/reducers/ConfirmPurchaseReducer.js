import {
  PURCHASE_FETCH_SUCCESS,
  PURCHASE_CONFIRMED,
  PURCHASE_CANCELED,
  PURCHASE_SCANNED,
  PURCHASE_CONFIRMATION_ERROR,
  PURCHASE_CANCELATION_ERROR,
  PURCHASE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  purchase: null,
  purchaseScannedId: null,
  message: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PURCHASE_FETCH_SUCCESS:
      return { ...state, purchase: action.payload };
    case PURCHASE_CONFIRMED:
      return { ...state, error: '', info: 'The purchase has been confirmed.' };
    case PURCHASE_CANCELED:
      return { ...INITIAL_STATE, info: 'The purchase has been cancelled.' };
    case PURCHASE_FETCH_ERROR: 
      return {
        ...INITIAL_STATE,
        error: 'An error occurs during the purchase fetch.'
      };
    case PURCHASE_CONFIRMATION_ERROR:
      return {
        ...INITIAL_STATE,
        error: 'An error occurs during the purchase confirmation.'
      };
    case PURCHASE_CANCELATION_ERROR:
      return {
        ...INITIAL_STATE,
        error: 'An error occurs during the purchase confirmation.'
      };
    case PURCHASE_SCANNED:
        return { ...state, purchaseScannedId: action.payload };
    default:
      return state;
  }
};
