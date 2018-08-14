import {
  STAMPS_INFO_FETCH_SUCCESS
} from './types';

import { getStampCardInfo } from './queries/PurchaseQueries';
import Client from '../Client';

export const fetchStampsInfo = (purchaseId) => {
  return (dispatch) => {
    Client.query({
			query: getStampCardInfo,
			variables: { purchaseId }
		}).then((response) => {
      dispatch({
        type: STAMPS_INFO_FETCH_SUCCESS,
        payload: response.data.stampCardByPurchase
      });
		});
  };
};
