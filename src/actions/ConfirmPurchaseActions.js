import { Actions } from 'react-native-router-flux';

import {
  PURCHASE_FETCH_SUCCESS,
  PURCHASE_CONFIRMED,
  PURCHASE_CANCELED,
  PURCHASE_SCANNED,
  PURCHASE_CANCELATION_ERROR,
  PURCHASE_CONFIRMATION_ERROR,
  PURCHASE_FETCH_ERROR
} from './types';
import {
  confirmPurchaseMutation,
  cancelPurchaseMutation
} from './mutations/PurchaseMutations';
import {
  getPurchaseQuery
} from './queries/PurchaseQueries';
import Client from '../Client';

export const fetchPurchase = (purchaseId) => {
  return (dispatch) => {
    Client.query({
      query: getPurchaseQuery,
      variables: { id: purchaseId }
    }).then((response) => {
      if (response.data.purchase) {
        return dispatch({
          type: PURCHASE_FETCH_SUCCESS,
          payload: response.data.purchase
        });
      }

      dispatch({ type: PURCHASE_FETCH_ERROR });
      console.log(`ERROR: The purchase ${purchaseId} does not exist.`);
      Actions.customerHomeScreen();
    }).catch((err) => {
      console.log(err);
      dispatch({ type: PURCHASE_FETCH_ERROR });
      return Actions.customerHomeScreen();
    });
  };
};

export const acceptPurchaseFromConfirmation = (purchaseId, userId) => {
  return (dispatch) => {
    Client.mutate({
      mutation: confirmPurchaseMutation,
      variables: { id: purchaseId, userId }
    }).then((response) => {
      const purchase = response.data.confirmPurchase;
        if (purchase.id) {
          // Notify the business owner with a PUSH notification
          dispatch({ type: PURCHASE_CONFIRMED });
          // Redirect to purchase finished
          return Actions.purchaseFinished();
        }
        console.log('ERROR: The purchase is still PENDING to confirm.');
        dispatch({ type: PURCHASE_CONFIRMATION_ERROR });
        // Redirect to home screen
        return Actions.customerHomeScreen();
    }).catch((err) => {
      console.log(err);
      dispatch({ type: PURCHASE_CONFIRMATION_ERROR });
      return Actions.customerHomeScreen();
    });
  };
};

export const cancelPurchaseFromConfirmation = (purchaseId) => {
  return (dispatch) => {
      Client.mutate({
        mutation: cancelPurchaseMutation,
        variables: { id: purchaseId }
      }).then((response) => {
          if (response.data.cancelPurchase.id) {
            console.log(`INFO: The purchase ${purchaseId} has been cancelled.`);
            dispatch({ type: PURCHASE_CANCELED });
          } else {
            dispatch({ type: PURCHASE_CANCELATION_ERROR });
            console.log(
              `WARNING: The body response is incorrect in the cancelation process of ${purchaseId}.`
            );
          }

          return Actions.customerHomeScreen();
      }).catch((err) => {
        console.log(err);
        dispatch({ type: PURCHASE_CANCELATION_ERROR });
        return Actions.customerHomeScreen();
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
