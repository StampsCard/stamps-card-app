import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_STARTS,
  CUSTOMER_SELECTED,
  LOGOUT
} from './types';

import { loginQuery } from './queries/AuthQueries';
import Client from '../Client';
import { CUSTOMER } from '../values/Profiles';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_STARTS });

    Client.query({
			query: loginQuery,
			variables: { email, password }
		}).then((resp) => {
      return loginUserSuccess(dispatch, resp.data.login);
		}).catch((err) => {
      console.log(err);
      loginUserFail(dispatch);
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, authData) => {
    const user = authData.user;

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });

    if (CUSTOMER === authData.userRole) {
      dispatch({
        type: CUSTOMER_SELECTED,
        payload: user
      });
      return Actions.welcome({ hasBusiness: false });
    }
    return Actions.profileSelector();
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT
    });

    return Actions.login();
  };
};
