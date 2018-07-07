import {
  PRODUCT_CONCEPT_CHANGED,
  AMOUNT_CHANGED,
  PURCHASE_GENERATION_SUCCESS,
  PURCHASE_GENERATION_FAILED,
  PURCHASE_GENERATION_STARTS,
  PURCHASE_CANCELED
} from './types';
import GeneratePurchaseService from '../services/GeneratePurchase';
import CancelPurchaseService from '../services/CancelPurchase';


export const productConceptChanged = (text) => ({
  type: PRODUCT_CONCEPT_CHANGED,
  payload: text
});

export const amountChanged = (text) => ({
  type: AMOUNT_CHANGED,
  payload: text
});

export const generatePurchase = ({ userId, concept, amount }) => {
  return (dispatch) => {
    dispatch({ type: PURCHASE_GENERATION_STARTS });
    const purchase = GeneratePurchaseService.exec(userId, concept, amount);
    if (purchase) {
      purchaseGenerated(dispatch, purchase.id);
    } else {
      purchaseGenerationFailed(dispatch);
    }
  };
};

export const purchaseGenerationFailed = (dispatch) => {
  dispatch({ type: PURCHASE_GENERATION_FAILED });
};

export const purchaseGenerated = (dispatch, purchaseId) => {
  // Generate the Link
  const link = `stampscard://customer/confirmPurchase/${purchaseId}`;
  dispatch({
    type: PURCHASE_GENERATION_SUCCESS,
    payload: { link, purchaseId }
  });
};

export const cancelPurchase = (purchaseId) => {
  return (dispatch) => {
    CancelPurchaseService.exec(purchaseId);
    dispatch({ type: PURCHASE_CANCELED });
  };
};
