import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_STARTS,
  IS_BUSINESS_OWNER,
  LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  showToast: false,
  isBusinessOwner: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        showToast: false,
        email: '',
        password: '',
        loading: false
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication failed.', loading: false, showToast: true };
    case LOGIN_USER_STARTS:
      return { ...state, loading: true };
    case IS_BUSINESS_OWNER:
      return { ...state, isBusinessOwner: true };
    case LOGOUT:
      return { INITIAL_STATE };
    default:
      return state;
  }
};
