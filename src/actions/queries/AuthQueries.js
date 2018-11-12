import gql from 'graphql-tag';

export const loginQuery = gql`
  query loginQuery($email: String!, $password: String!){
    login(email: $email, password: $password) {
      user {
        id
        username
        email
        firstName
        lastName
      }
      userRole
      token
    }
  }`;
