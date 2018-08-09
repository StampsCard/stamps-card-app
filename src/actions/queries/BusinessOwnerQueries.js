import gql from 'graphql-tag';

export const getCustomersQuery = gql`
query getCustomersByBusiness($businessId: ID!){
  customersByBusiness(businessId: $businessId) {
     id
    username
    email
    firstName
    lastName
  }
}`;
