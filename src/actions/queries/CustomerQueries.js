import gql from 'graphql-tag';

export const getStoresByUserQuery = gql`
  query getStoresByUserQuery($userId: ID!){
    businessesByCustomer(userId: $userId) {
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
