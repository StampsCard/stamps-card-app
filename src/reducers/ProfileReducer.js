import {
  CUSTOMER_SELECTED,
  BUSINESS_OWNER_SELECTED,
  MAIN_PAGE
} from '../actions/types';

const INITIAL_STATE = {
  id: '',
  name: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_SELECTED:
      return { 
        ...state, 
        id: 'CUSTOMER', 
        text: 'Customer', 
        imageSrc: require('../../resources/img/customer-welcome-illustration.png')
      };
    case BUSINESS_OWNER_SELECTED:
      return {
        ...state,
        id: 'BUSINESS_OWNER',
        text: 'Business Owner',
        imageSrc: require('../../resources/img/business-owner-welcome-illustration.png'),
        businessId: action.payload.businessId
      };
    case MAIN_PAGE:
    return { ...state };

    default:
      return state;
  }
};
