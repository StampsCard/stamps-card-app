import {
  MY_CUSTOMERS_FETCH_SUCCESS,
  LAST_PURCHASES_FETCH_SUCCESS,
  BUSINESS_STAMPS_CARDS_FETCH_SUCCESS,
  STAMP_PRICE_CHANGED,
  TOTAL_STAMPS_CHANGED,
  DISCOUNT_CHANGED,
  STAMPS_CARD_CREATION_FAIL,
  STAMPS_CARD_CREATION_SUCCESS,
  STAMPS_CARD_CREATION_STARTS
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  stampsCard: null,
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
        return { stampsCards: action.payload.stampsCards };
      case STAMP_PRICE_CHANGED:
        return {
          ...state,
          loading: true,
          error: '',
          showToast: false,
          stampPrice: action.payload 
        };
      case TOTAL_STAMPS_CHANGED:
        return { 
          ...state, 
          loading: true,
          error: '',
          showToast: false,
          totalStamps: action.payload 
        };
      case DISCOUNT_CHANGED:
        return { 
          ...state,
          loading: true,
          error: '',
          showToast: false, 
          discount: action.payload 
        };
      case STAMPS_CARD_CREATION_STARTS:
        return { 
          ...state,
          loading: true,
          error: '',
          showToast: false
        };
      case STAMPS_CARD_CREATION_FAIL:
        return { 
          ...state,
          error: 'The stamps card could not be created.',
          loading: false,
          showToast: true
        };
      case STAMPS_CARD_CREATION_SUCCESS:
        return {
          ...state,
          stampsCard: action.payload,
          loading: false,
          error: '',
          showToast: false
        };
      default:
        return state;
    }
};
