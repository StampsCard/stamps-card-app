import { Actions } from 'react-native-router-flux';
import {
  MY_CUSTOMERS_FETCH_SUCCESS,
  LAST_PURCHASES_FETCH_SUCCESS,
  BUSINESS_STAMPS_CARDS_FETCH_SUCCESS,
  STAMP_PRICE_CHANGED,
  DISCOUNT_CHANGED,
  TOTAL_STAMPS_CHANGED,
  STAMPS_CARD_CREATION_STARTS,
  STAMPS_CARD_CREATION_FAIL,
  STAMPS_CARD_CREATION_SUCCESS
} from './types';
import {
  getCustomersQuery,
  getLastPurchasesQuery,
  getStampCardsQuery
} from './queries/BusinessOwnerQueries';
import {
  createStampsCardMutation
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

export const createStampsCard = (businessId, stampPrice, total, discount) => {
  return (dispatch) => {
    dispatch({ type: STAMPS_CARD_CREATION_STARTS });
    Client.mutate({
      mutation: createStampsCardMutation,
      variables: {
        stampPrice: parseFloat(stampPrice),
        businessId,
        total: parseInt(total, 10),
        discount
      }
    }).then((response) => {
        stampsCardCreated(dispatch, response.data.createStampsCard);
    }).catch((err) => {
      console.log(err.graphQLErrors, err.networkError, err.response, err.operation);
      errorCreatingStampsCard(dispatch);
    });
  };
};

const errorCreatingStampsCard = (dispatch) => {
  dispatch({ type: STAMPS_CARD_CREATION_FAIL });
};

const stampsCardCreated = (dispatch, data) => {
    const stampsCard = data.stampCard;

    dispatch({
      type: STAMPS_CARD_CREATION_SUCCESS,
      payload: stampsCard
    });

    return Actions.businessOwnerMyStampsCards();
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
