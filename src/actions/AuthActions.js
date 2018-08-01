import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_STARTS
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
		}).catch(loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, authData) => {
  const user = authData.user;

  console.log(authData);

  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  if (CUSTOMER === authData.userRole) {
    const profile = {
      id: CUSTOMER,
      text: 'Customer'
    };

    return Actions.welcome({ userLogged: user, profile, hasBusiness: false });
  }
  return Actions.profileSelector({ userLogged: user });
};
