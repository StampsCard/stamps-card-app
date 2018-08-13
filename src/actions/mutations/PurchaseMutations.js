import gql from 'graphql-tag';

export const registerPurchaseMutation = gql`
  mutation registerPurchase(
    $amount:Float!,
    $stampId: ID!,
    $concept:String
  ) {
    createPurchase(
      amount: $amount,
      concept: $concept,
      stampId: $stampId
    ) {
      id
      amount
      concept
    }
  }`;

export const cancelPurchaseMutation = gql`
mutation cancelPurchase($id: ID!, $userId: ID) {
	cancelPurchase(id: $id, userId: $userId) {
    id
  }
}`;

export const confirmPurchaseMutation = gql`
mutation confirmPurchase($id: ID!, $userId: ID!) {
	confirmPurchase(id: $id, userId: $userId) {
    id
  }
}`;
