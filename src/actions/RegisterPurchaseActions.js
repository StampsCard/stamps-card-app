import { Actions } from 'react-native-router-flux';
import {
  PRODUCT_CONCEPT_CHANGED,
  AMOUNT_CHANGED,
  PURCHASE_GENERATION_SUCCESS,
  PURCHASE_GENERATION_FAILED,
  PURCHASE_GENERATION_STARTS,
  PURCHASE_CANCELED
} from './types';
import { getStampCardsQuery } from './queries/PurchaseQueries';
import {
  registerPurchaseMutation,
  cancelPurchaseMutation
} from './mutations/PurchaseMutations';
import Client from '../Client';

export const productConceptChanged = (text) => ({
  type: PRODUCT_CONCEPT_CHANGED,
  payload: text
});

export const amountChanged = (text) => ({
  type: AMOUNT_CHANGED,
  payload: text
});

export const generatePurchase = ({ businessId, concept, amount }) => {
  return (dispatch) => {
    dispatch({ type: PURCHASE_GENERATION_STARTS });

    Client.query({
			query: getStampCardsQuery,
			variables: { businessId }
		}).then((stampsResponse) => {
        // Get the first stampCard
        const stampCards = stampsResponse.data.business.stampCards;
        if (!stampCards.length) {
          console.log('You need to create a stamp card before!');
          Actions.businessOwnerHomeScreen();
        }

        Client.mutate({
          mutation: registerPurchaseMutation,
          variables: { concept, amount, stampId: stampCards[0].id }
        }).then((purchaseResponse) => {
            const data = purchaseResponse.data.createPurchase;
            if (data) {
              return purchaseGenerated(dispatch, data.id);
            }
            return purchaseGenerationFailed(dispatch);
        }).catch((err) => {
          console.log(err);
          purchaseGenerationFailed(dispatch);
        });
      });
  };
};

export const purchaseGenerationFailed = (dispatch) => {
  dispatch({ type: PURCHASE_GENERATION_FAILED });
};

export const purchaseGenerated = (dispatch, purchaseId) => {
  // Generate the Link
  const link = `stampscard://customer/codeScanned/${purchaseId}`;
  dispatch({
    type: PURCHASE_GENERATION_SUCCESS,
    payload: { link, purchaseId }
  });
};

export const cancelPurchase = (purchaseId) => {
  return (dispatch) => {
    Client.mutate({
      mutation: cancelPurchaseMutation,
      variables: { id: purchaseId }
    }).then((response) => {
        if (response.data.cancelPurchase.id) {
          return dispatch({ type: PURCHASE_CANCELED });
        }
        console.log('The purchase has been cancelled.');
    }).catch((err) => {
      console.log(err);
    });
  };
};
