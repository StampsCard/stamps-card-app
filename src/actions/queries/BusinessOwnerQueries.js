import gql from 'graphql-tag';

export const getBusinessIdsQuery = gql`
query getBusinessesByUser($userId: ID!){
  businessesByOwner(userId: $userId) {
    id
  }
}`;

export const getCustomersQuery = gql`
query getCustomersByBusiness($businessId: ID!){
  customersByBusiness(businessId: $businessId) {
    user {
      id
      username
      email
      firstName
      lastName
    }
    lastPayment
    spent
  }
}`;

export const getLastPurchasesQuery = gql`
query getLastPurchases($businessId: ID!){
  purchasesByBusiness(businessId: $businessId) {
    id
    amount
    stamps
    user {
      id
      firstName
      lastName
    }
    concept
    confirmedAt
    cancelledAt
  }
}`;
