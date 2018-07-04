import {
  PRODUCT_CONCEPT_CHANGED,
  AMOUNT_CHANGED,
  QR_CODE_GENERATION_STARTS,
  QR_CODE_GENERATION_FAILED,
  QR_CODE_GENERATION_SUCCESS
} from './types';


export const productConceptChanged = (text) => ({
  type: PRODUCT_CONCEPT_CHANGED,
  payload: text
});

export const amountChanged = (text) => ({
  type: AMOUNT_CHANGED,
  payload: text
});

export const generateQrCode = ({ businessId, concept, amount }) => {
  return (dispatch) => {
    dispatch({ type: QR_CODE_GENERATION_STARTS });
    // generate QR Code given the user concept and amount
  };
};

export const generateQrCodeFailed = (dispatch) => {
  dispatch({ type: QR_CODE_GENERATION_FAILED });
};

export const generateQrCodeSuccess = (dispatch, user) => {
  dispatch({
    type: QR_CODE_GENERATION_SUCCESS,
    payload: user
  });
  // Send the QR Code generated
};
