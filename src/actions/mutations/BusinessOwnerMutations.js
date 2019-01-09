import gql from 'graphql-tag';

export const createStampsCardMutation = gql`
  mutation createStampsCard(
    $stampPrice: Float!,
    $businessId: ID!,
    $total: Int!,
    $discount: String!
  ) {
    createStampsCard(
      stampPrice: $stampPrice,
      businessId: $businessId,
      total: $total,
      discount: $discount
    ) {
      id
    }
  }`;
