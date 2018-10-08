import gql from 'graphql-tag';

export const createStampCardMutation = gql`
  mutation createStampCard(
    $stampPrice: Float!,
    $businessId: ID!,
    $total: Int!,
    $discount: String!
  ) {
    createStampCard(
      stampPrice: $stampPrice,
      businessId: $businessId,
      total: $total,
      discount: $discount
    ) {
      id
    }
  }`;
