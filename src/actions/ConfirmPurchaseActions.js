import { Actions } from 'react-native-router-flux';

import {
  PURCHASE_FETCH_SUCCESS,
  PURCHASE_CONFIRMED,
  PURCHASE_CANCELED
} from './types';
import CancelPurchaseService from '../services/CancelPurchase';
import ConfirmPurchaseService from '../services/ConfirmPurchase';
import GetPurchaseByIdService from '../services/GetPurchaseById';

export const fetchPurchase = (purchaseId) => {
  return (dispatch) => {
    const purchase = GetPurchaseByIdService.exec(purchaseId);
    dispatch({
      type: PURCHASE_FETCH_SUCCESS,
      payload: purchase
    });
  };
};

export const acceptPurchaseFromConfirmation = (purchaseId, userId) => {
  return (dispatch) => {
    const purchase = ConfirmPurchaseService.exec(purchaseId, userId);
    // Notify the business owner with a PUSH notification
    dispatch({ type: PURCHASE_CONFIRMED, payload: purchase });
    // Redirect to purchase finished
    Actions.purchaseFinished({ userId });
  };
};

export const cancelPurchaseFromConfirmation = (purchaseId) => {
  return (dispatch) => {
    CancelPurchaseService.exec(purchaseId);
    // Notify the business owner with a PUSH notification
    dispatch(
      {
        type: PURCHASE_CANCELED,
        payload: { message: 'The purchase has been canceled.' }
      }
    );
    // Redirect to home screen
    Actions.customerHomeScreen();
  };
};
