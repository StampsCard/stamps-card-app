import {
  PRODUCT_CONCEPT_CHANGED,
  AMOUNT_CHANGED,
  PURCHASE_GENERATION_STARTS,
  PURCHASE_GENERATION_SUCCESS,
  PURCHASE_GENERATION_FAILED,
  PURCHASE_CANCELED,
  GENERATE_ANOTHER_PURCHASE
} from '../actions/types';

const INITIAL_STATE = {
  concept: '',
  amount: null,
  error: '',
  loading: false,
  purchaseId: null,
  link: null,
  info: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_CONCEPT_CHANGED:
      return { ...state, concept: action.payload, link: null };
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload, link: null };
    case PURCHASE_GENERATION_STARTS:
      return {
        ...state,
        user: action.payload,
        loading: true,
        error: ''
      };
    case PURCHASE_GENERATION_FAILED:
      return {
        ...state,
        error: 'Error while generating the purchase.',
        loading: false,
        link: null
      };
    case PURCHASE_GENERATION_SUCCESS:
      return {
        ...state,
        link: action.payload.link,
        loading: false,
        purchaseId: action.payload.purchaseId,
        error: ''
      };
    case PURCHASE_CANCELED:
      return {
        ...state,
        info: 'The purchase has been cancelled.',
        error: '',
        loading: false,
        link: null
      };
    case GENERATE_ANOTHER_PURCHASE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
