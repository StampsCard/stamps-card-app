import {
  BACKGROUND_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  bacgkround: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BACKGROUND_CHANGED:
      return { ...state, background: action.payload };
    default:
      return state;
  }
};
