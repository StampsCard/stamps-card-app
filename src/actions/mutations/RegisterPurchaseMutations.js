import gql from 'graphql-tag';

export const registerPurchaseMutation = gql`
  mutation registerPurchase(
    $amount:Float!,
    $userId:ID!,
    $stampId: ID!,
    $stamps:Int!,
    $concept:String!
  ) {
    createPurchase(
      amount: $amount,
      userId: $userId,
      stamps: $stamps,
      concept: $concept,
      stampId: $stampId
    ) {
      id
      amount
      concept
    }
  }`;

export const cancelPurchaseMutation = `gql
mutation cancelPurchase($id: ID!) {
	cancelPurchase(id: $id) {
    id
  }
}`;
