import { Actions } from 'react-native-router-flux';

import {
  PURCHASE_FETCH_SUCCESS,
  PURCHASE_CONFIRMED,
  PURCHASE_CANCELED,
  USER_FETCH_SUCCESS,
  PURCHASE_SCANNED
} from './types';
import CancelPurchaseService from '../services/CancelPurchase';
import ConfirmPurchaseService from '../services/ConfirmPurchase';
import GetPurchaseByIdService from '../services/GetPurchaseById';
import GetUserById from '../services/GetUserById';

export const fetchPurchase = (purchaseId) => {
  return (dispatch) => {
    const purchase = GetPurchaseByIdService.exec(purchaseId);
    dispatch({
      type: PURCHASE_FETCH_SUCCESS,
      payload: purchase
    });
  };
};

export const acceptPurchaseFromConfirmation = (purchaseId, user) => {
  return (dispatch) => {
    const purchase = ConfirmPurchaseService.exec(purchaseId, user.id);
    // Notify the business owner with a PUSH notification
    dispatch({ type: PURCHASE_CONFIRMED, payload: purchase });
    // Redirect to purchase finished
    Actions.purchaseFinished();
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

export const fetchUser = (userId) => {
  return (dispatch) => {
    const user = GetUserById.exec(userId);
    dispatch({
      type: USER_FETCH_SUCCESS,
      payload: user
    });
  };
};

export const purchaseScanned = (purchaseId) => {
  return (dispatch) => {
    dispatch({
      type: PURCHASE_SCANNED,
      payload: purchaseId
    });
    Actions.confirmPurchase({ purchaseId });
  };
};
