import gql from 'graphql-tag';

export const getStoresQuery = gql`
  query getStoresByUserQuery($userId: ID!){
    storesByCustomer(userId: $userId) {
      business {
        id
        name
        category {
          id
          name
          description
        }
        owner {
          id
          username
          email
          firstName
          lastName
        }
      }
      totalOfStamps
    }
  }`;

export const getLastPaymentsQuery = gql`
  query getLastPaymentsByUser($userId: ID!){
    purchasesByUser(userId: $userId) {
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
    }
  }`;

export const getStampsCardsQuery = gql`
  query getStampsCardByUser($userId: ID!){
    stampCardsByUser(userId: $userId) {
      stampCard {
        id
        business {
          name
        }
        stamp_price
        total
        discount
      }
      spent
      amount
    }
  }`;
