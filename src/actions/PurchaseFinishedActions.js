import {
  USER_INFO_FETCH_SUCCESS,
  STAMPS_INFO_FETCH_SUCCESS
} from './types';
import GetStampsInfoByUser from '../services/GetStampsInfoByUser';
import GetUserById from '../services/GetUserById';

export const fetchUserInfo = (userId) => {
  return (dispatch) => {
    const user = GetUserById.exec(userId);
    dispatch({
      type: USER_INFO_FETCH_SUCCESS,
      payload: user
    });
  };
};

export const fetchStampsInfo = (userId) => {
  return (dispatch) => {
    const stampsInfo = GetStampsInfoByUser.exec(userId);
    dispatch({
      type: STAMPS_INFO_FETCH_SUCCESS,
      payload: stampsInfo
    });
  };
};
