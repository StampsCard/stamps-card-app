import {
  MY_CUSTOMERS_FETCH_SUCCESS,
  LAST_PURCHASES_FETCH_SUCCESS,
  BUSINESS_STAMPS_CARDS_FETCH_SUCCESS,
  STAMP_PRICE_CHANGED,
  TOTAL_STAMPS_CHANGED,
  DISCOUNT_CHANGED,
  STAMP_CARD_CREATION_FAIL,
  STAMP_CARD_CREATION_SUCCESS,
  STAMP_CARD_CREATION_STARTS
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  stampCard: null,
  stampPrice: '',
  totalStamps: '',
  discount: '',
  showToast: false
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MY_CUSTOMERS_FETCH_SUCCESS:
        return { myCustomers: action.payload.myCustomers };
      case LAST_PURCHASES_FETCH_SUCCESS:
        return { lastPurchases: action.payload.lastPurchases };
      case BUSINESS_STAMPS_CARDS_FETCH_SUCCESS:
        return { stampCards: action.payload.stampCards };
      case STAMP_PRICE_CHANGED:
        return { ...state, stampPrice: action.payload };
      case TOTAL_STAMPS_CHANGED:
        return { ...state, totalStamps: action.payload };
      case DISCOUNT_CHANGED:
        return { ...state, discount: action.payload };
      case STAMP_CARD_CREATION_STARTS:
        return { ...state, loading: true };
      case STAMP_CARD_CREATION_FAIL:
        return { ...state, error: 'Authentication failed.', loading: false, showToast: true };
      case STAMP_CARD_CREATION_SUCCESS:
        return {
          ...state,
          stampCard: action.payload,
          loading: false,
          error: '',
          showToast: false
        };
      default:
        return state;
    }
};
