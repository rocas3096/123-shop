import { gql } from "@apollo/client";

export const NEW_ORDER_SUB = gql`
  subscription NewOrder($businessId: ID!) {
    newOrder(businessId: $businessId) {
      _id
      user
      business
      orderDetails {
        item
        price
      }
    }
  }
`;

export const PLACE_ORDER_MUTATION = gql`
  mutation PlaceOrder(
    $userId: ID!
    $businessId: ID!
    $orderDetails: OrderItem!
  ) {
    placeOrder(
      userId: $userId
      businessId: $businessId
      orderDetails: $orderDetails
    ) {
      _id
      user
      business
      orderDetails {
        item
        price
      }
    }
  }
`;
