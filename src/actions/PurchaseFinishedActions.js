import {
  STAMPS_INFO_FETCH_SUCCESS
} from './types';
import GetStampsInfoByUser from '../services/GetStampsInfoByUser';

export const fetchStampsInfo = (userId) => {
  return (dispatch) => {
    const stampsInfo = GetStampsInfoByUser.exec(userId);
    dispatch({
      type: STAMPS_INFO_FETCH_SUCCESS,
      payload: stampsInfo
    });
  };
};
