import { Actions } from 'react-native-router-flux';
import {
  PRODUCT_CONCEPT_CHANGED,
  AMOUNT_CHANGED,
  PURCHASE_GENERATION_SUCCESS,
  PURCHASE_GENERATION_FAILED,
  PURCHASE_GENERATION_STARTS,
  PURCHASE_CANCELED
} from './types';
import { getStampCardsQuery } from './queries/RegisterPurchaseQueries';
import {
  registerPurchaseMutation,
  cancelPurchaseMutation
} from './mutations/RegisterPurchaseMutations';
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
        const stampCards = stampsResponse.getStampsCardFromBusiness.data;
        if (!stampCards.length) {
          console.log('You need to create a stamp card before!');
          Actions.businessOwnerHomeScreen();
        }

        Client.query({
          query: registerPurchaseMutation,
          variables: { concept, amount, stampId: stampCards[0].id }
        }).then((purchaseResponse) => {
            const data = purchaseResponse.createPurchase.data;
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
    Client.query({
      query: cancelPurchaseMutation,
      variables: { id: purchaseId }
    }).then((purchaseResponse) => {
        if (purchaseResponse.data.id) {
          return dispatch({ type: PURCHASE_CANCELED });
        }
        console.log('The purchase has been cancelled.');
    }).catch((err) => {
      console.log(err);
    });
  };
};
