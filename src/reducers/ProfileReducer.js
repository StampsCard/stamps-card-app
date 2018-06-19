import {
  CUSTOMER_SELECTED,
  BUSINESS_OWNER_SELECTED
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  profile: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_SELECTED:
      return { ...state, user: action.payload, profile: 'CUSTOMER' };
    case BUSINESS_OWNER_SELECTED:
      return { ...state, user: action.payload, profile: 'BUSINESS_OWNER' };
    default:
      return state;
  }
};
