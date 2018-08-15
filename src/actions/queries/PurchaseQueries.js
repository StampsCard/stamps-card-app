import gql from 'graphql-tag';

export const getStampCardsQuery = gql`
query getStampsCardFromBusiness($businessId: ID!) {
  business(id:$businessId) {
    stampCards {
      id
    }
  }
}`;


export const getPurchaseQuery = gql`
query getPurchase($id: ID!) {
	purchase(id: $id) {
    id
    amount
    stamps
    stampCard {
      business {
        name
      }
    }
    concept
    confirmedAt
    cancelledAt
  }
}`;

export const getUserQuery = gql`
query getUser($id: ID!) {
	user(id: $id) {
    id
    email
    username
    firstName
    lastName
  }
}`;

export const getStampCardInfo = gql`
query getStampCardInfo($purchaseId: ID!) {
  stampCardByPurchase(purchaseId: $purchaseId) {
    stampCard {
      id
      discount
      total
    }
    spent
    amount
  }
}`;
