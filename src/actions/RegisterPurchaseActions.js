import { Actions } from 'react-native-router-flux';
import {
  PRODUCT_CONCEPT_CHANGED,
  AMOUNT_CHANGED,
  PURCHASE_GENERATION_SUCCESS,
  PURCHASE_GENERATION_FAILED,
  PURCHASE_GENERATION_STARTS,
  PURCHASE_CANCELED,
  GENERATE_ANOTHER_PURCHASE
} from './types';
import { getStampsCardsQuery } from './queries/PurchaseQueries';
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
			query: getStampsCardsQuery,
			variables: { businessId }
		}).then((stampsResponse) => {
        // Get the first stampCard
        const stampsCards = stampsResponse.data.business.stampCards;
        if (!stampsCards.length) {
          dispatch({ type: PURCHASE_GENERATION_FAILED });
          console.log(
            `WARNING: You need to create a stamp card before for business ${businessId}!`
          );
          Actions.businessOwnerHomeScreen();
        }

        Client.mutate({
          mutation: registerPurchaseMutation,
          variables: { concept, amount: parseFloat(amount), stampId: stampsCards[0].id }
        }).then((purchaseResponse) => {
            const data = purchaseResponse.data.createPurchase;
            if (data) {
              return purchaseGenerated(dispatch, data.id);
            }
            return purchaseGenerationFailed(dispatch);
        }).catch((err) => {
          console.log(err);
          return purchaseGenerationFailed(dispatch);
        });
      });
  };
};

export const purchaseGenerationFailed = () => {
  return (dispatch) => {
    dispatch({ type: PURCHASE_GENERATION_FAILED });
  };
};

export const purchaseGenerated = (dispatch, purchaseId) => {
  // Generate the Link
  const link = `stampscard://customer/codeScanned/${purchaseId}`;
  dispatch({
    type: PURCHASE_GENERATION_SUCCESS,
    payload: { link, purchaseId }
  });
};

export const generateAnotherPurchase = () => {
  return (dispatch) => {
      dispatch({
        type: GENERATE_ANOTHER_PURCHASE
      });
  };
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
        console.info(`INFO: The purchase ${purchaseId} has been cancelled.`);
    }).catch((err) => {
      console.log(err);
      return purchaseGenerationFailed(dispatch);
    });
  };
};
