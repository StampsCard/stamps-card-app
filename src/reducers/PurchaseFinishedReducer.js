import {
  STAMPS_INFO_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  stampsInfo: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STAMPS_INFO_FETCH_SUCCESS:
      return { ...state, stampsInfo: action.payload };
    default:
      return state;
  }
};
