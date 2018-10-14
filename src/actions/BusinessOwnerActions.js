import { Actions } from 'react-native-router-flux';
import {
  MY_CUSTOMERS_FETCH_SUCCESS,
  LAST_PURCHASES_FETCH_SUCCESS,
  BUSINESS_STAMPS_CARDS_FETCH_SUCCESS,
  STAMP_PRICE_CHANGED,
  DISCOUNT_CHANGED,
  TOTAL_STAMPS_CHANGED,
  STAMP_CARD_CREATION_STARTS,
  STAMP_CARD_CREATION_FAIL,
  STAMP_CARD_CREATION_SUCCESS
} from './types';
import {
  getCustomersQuery,
  getLastPurchasesQuery,
  getStampCardsQuery
} from './queries/BusinessOwnerQueries';
import {
  createStampCardMutation
} from './mutations/BusinessOwnerMutations';
import Client from '../Client';

export const fetchMyCustomers = (businessId) => {
  return (dispatch) => {
    Client.query({
			query: getCustomersQuery,
			variables: { businessId }
		}).then((resp) => {
      dispatch({
        type: MY_CUSTOMERS_FETCH_SUCCESS,
        payload: { myCustomers: resp.data.customersByBusiness }
      });
		});
  };
};

export const fetchLastPurchases = (businessId) => {
  return (dispatch) => {
    Client.query({
			query: getLastPurchasesQuery,
			variables: { businessId }
		}).then((resp) => {
      return dispatch({
        type: LAST_PURCHASES_FETCH_SUCCESS,
        payload: { lastPurchases: resp.data.purchasesByBusiness }
      });
		});
  };
};

export const fetchStampCards = (businessId) => {
  return (dispatch) => {
    Client.query({
      query: getStampCardsQuery,
      variables: { businessId }
    }).then((resp) => {
      return dispatch({
        type: BUSINESS_STAMPS_CARDS_FETCH_SUCCESS,
        payload: { stampCards: resp.data.business.stampCards }
      });
		});
  };
};

export const createStampCard = (businessId, stampPrice, total, discount) => {
  console.log(businessId);
  return (dispatch) => {
    dispatch({ type: STAMP_CARD_CREATION_STARTS });
    Client.mutate({
      mutation: createStampCardMutation,
      variables: {
        businessId,
        stampPrice,
        total,
        discount
      }
    }).then((response) => {
      console.log(response);
        stampCardCreated(dispatch, response.data.createStampCard);
    }).catch((err) => {
      console.log(err);
      errorCreatingStampCard(dispatch);
    });
  };
};

const errorCreatingStampCard = (dispatch) => {
  dispatch({ type: STAMP_CARD_CREATION_FAIL });
};

const stampCardCreated = (dispatch, data) => {
    const stampCard = data.stampCard;

    dispatch({
      type: STAMP_CARD_CREATION_SUCCESS,
      payload: stampCard
    });

    return Actions.businessOwnerMyStampCards();
};

export const stampPriceChanged = (value) => ({
  type: STAMP_PRICE_CHANGED,
  payload: value
});

export const totalStampsChanged = (value) => ({
  type: TOTAL_STAMPS_CHANGED,
  payload: value
});

export const discountChanged = (value) => ({
  type: DISCOUNT_CHANGED,
  payload: value
});
