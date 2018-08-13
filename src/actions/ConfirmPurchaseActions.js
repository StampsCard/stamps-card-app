import { Actions } from 'react-native-router-flux';

import {
  PURCHASE_FETCH_SUCCESS,
  PURCHASE_CONFIRMED,
  PURCHASE_CANCELED,
  PURCHASE_SCANNED
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
        dispatch({
          type: PURCHASE_FETCH_SUCCESS,
          payload: response.data.purchase
        });
      } else {
        console.log('The purchase has been cancelled or confirmed before.');
        Actions.customerHomeScreen();
      }
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
        console.log('The purchase is still PENDING to confirm.');
        // Redirect to home screen
        return Actions.customerHomeScreen();
    }).catch((err) => {
      console.log(err);
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
            dispatch({ type: PURCHASE_CANCELED });
          }
          console.log('The purchase has been cancelled.');
          // Redirect to home screen
          return Actions.customerHomeScreen();
      }).catch((err) => {
        console.log(err);
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
