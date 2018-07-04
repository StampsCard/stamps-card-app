import {
  PURCHASE_FETCH_SUCCESS,
  PURCHASE_CONFIRMED,
  PURCHASE_CANCELED
} from '../actions/types';

const INITIAL_STATE = {
  purchase: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PURCHASE_FETCH_SUCCESS:
     console.log('Reducer', { ...state, purchase: action.payload });
      return { ...state, purchase: action.payload };
    case PURCHASE_CONFIRMED:
      return { ...state, purchase: action.payload };
    case PURCHASE_CANCELED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
