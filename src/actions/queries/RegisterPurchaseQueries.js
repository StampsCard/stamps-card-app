import gql from 'graphql-tag';

export const getStampCardsQuery = gql`
query getStampsCardFromBusiness($businessId: ID!) {
  business(id:$businessId) {
    stampCards {
      id
    }
  }
}`;
