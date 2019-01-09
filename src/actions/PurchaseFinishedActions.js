import {
  STAMPS_INFO_FETCH_SUCCESS
} from './types';

import { getStampsCardInfo } from './queries/PurchaseQueries';
import Client from '../Client';

export const fetchStampsInfo = (purchaseId) => {
  return (dispatch) => {
    Client.query({
			query: getStampsCardInfo,
			variables: { purchaseId }
		}).then((response) => {
      dispatch({
        type: STAMPS_INFO_FETCH_SUCCESS,
        payload: response.data.stampsCardByPurchase
      });
		});
  };
};
