import {
  STAMPS_INFO_FETCH_SUCCESS,
  USER_INFO_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  stampsInfo: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STAMPS_INFO_FETCH_SUCCESS:
      return { ...state, stampsInfo: action.payload };
    case USER_INFO_FETCH_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
