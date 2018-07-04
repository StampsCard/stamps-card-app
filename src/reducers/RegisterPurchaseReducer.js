import {
  PRODUCT_CONCEPT_CHANGED,
  AMOUNT_CHANGED,
  QR_CODE_GENERATION_STARTS,
  QR_CODE_GENERATION_FAILED,
  QR_CODE_GENERATION_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  concept: '',
  amount: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_CONCEPT_CHANGED:
      return { ...state, concept: action.payload };
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload };
    case QR_CODE_GENERATION_SUCCESS:
      return {
        ...state,
        user: action.payload,
        ...INITIAL_STATE
      };
    case QR_CODE_GENERATION_FAILED:
      return {
        ...state,
        error: 'Error while generating the QR Code.',
        loading: false
      };
    case QR_CODE_GENERATION_STARTS:
      return { ...state, loading: true };
    default:
      return state;
  }
};
