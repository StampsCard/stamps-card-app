import {
  CUSTOMER_SELECTED,
  BUSINESS_OWNER_SELECTED,
  MAIN_PAGE
} from '../actions/types';

const INITIAL_STATE = {
  userLogged: null,
  profile: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_SELECTED:
      return { ...state, userLogged: action.payload, profile: 'CUSTOMER' };
    case BUSINESS_OWNER_SELECTED:
      return { ...state, userLogged: action.payload, profile: 'BUSINESS_OWNER' };
    case MAIN_PAGE:
    return { ...state, userLogged: action.payload };

    default:
      return state;
  }
};
