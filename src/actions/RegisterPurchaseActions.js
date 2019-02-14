import _ from 'lodash';
import {
  PRODUCT_CONCEPT_CHANGED,
  AMOUNT_CHANGED,
  STAMPS_CARD_ID_CHANGED,
  PURCHASE_GENERATION_SUCCESS,
  PURCHASE_GENERATION_FAILED,
  PURCHASE_GENERATION_STARTS,
  PURCHASE_CANCELED,
  GENERATE_ANOTHER_PURCHASE,
  AVAILABLE_STAMPS_CARDS_FETCH_SUCCESS
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

export const stampsCardChanged = (stampsCardIdSelected) => ({
  type: STAMPS_CARD_ID_CHANGED,
  payload: stampsCardIdSelected
});

export const generatePurchase = ({ stampsCardIdSelected, concept, amount }) => {
  return (dispatch) => {
    dispatch({ type: PURCHASE_GENERATION_STARTS });
      Client.mutate({
        mutation: registerPurchaseMutation,
        variables: { concept, amount: parseFloat(amount), stampId: stampsCardIdSelected }
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

export const getAvailableStampsCards = (userId, businessId) => {
  return (dispatch) => {
    Client.query({
      query: getStampsCardsQuery,
      variables: { userId }
    }).then((response) => {
        const userBusinesses = response.data.user.businesses;
        let availableStampsCards = [];
        let businessStampsCards = [];
        _.forEach(userBusinesses, (business) => {
          // TODO: Delete this conditional when the user can choose the business
          if (businessId === business.id) {
            setFirstStampCard(dispatch, availableStampsCards, business);
            businessStampsCards = generateBusinessStampCards(business);
            availableStampsCards = availableStampsCards.concat(businessStampsCards);
          }
        });

        return dispatch({ 
          type: AVAILABLE_STAMPS_CARDS_FETCH_SUCCESS,
          payload: availableStampsCards
        });
    }).catch((err) => {
      console.log(err);
    });
  };
};

function setFirstStampCard(dispatch, availableStampsCards, business) {
  if (availableStampsCards.length === 0 && business.stampCards.length > 0) {
    dispatch({
      type: STAMPS_CARD_ID_CHANGED,
      payload: business.stampCards[0].id
    });
  }
}

function generateBusinessStampCards(business) {
  const businessStampsCards = [];
  const businessName = business.name;
  const currentStampsCards = business.stampCards;
  for (let i = 0; i < currentStampsCards.length; i++) {
    const currentStampsCard = currentStampsCards[i];
    businessStampsCards.push({
      id: currentStampsCard.id,
      name: `${businessName} | ${currentStampsCard.discount}`
    });
  }

  return businessStampsCards;
}
