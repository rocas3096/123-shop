import { gql } from "@apollo/client";

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
export const NEW_ORDER_SUB = gql`
  subscription Subscription($businessId: ID!) {
    orderCreated(businessId: $businessId) {
      _id
      business
      customer_name
      orderDetails {
        item
        quantity
        price
      }
    }
  }
`;
export const CLOSE_ORDER = gql`
  mutation Mutation($orderId: ID!) {
    closeOrder(orderId: $orderId) {
      _id
      customer_name
      business
      status
      orderDetails {
        item
        quantity
        price
      }
    }
  }
`;
export const GET_ORDERS_BY_BUSINESS = gql`
  query Query($businessId: ID!, $status: String!) {
    getOrdersByBusiness(businessId: $businessId, status: $status) {
      _id
      customer_name
      business
      status
      orderDetails {
        item
        quantity
        price
      }
    }
  }
`;
export const GET_ALL_PRODUCTS_BY_BUSINESS = gql`
  query Query($businessId: ID!) {
    getAllProdcutsByBusiness(businessId: $getAllProdcutsByBusinessBusinessId2) {
      _id
      price
      product_description
      product_name
    }
  }
`;
