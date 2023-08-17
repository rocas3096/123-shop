import { gql } from "@apollo/client";

export const PLACE_ORDER_MUTATION = gql`
  mutation Mutation($placeOrderInput: PlaceOrderInput) {
    placeOrder(placeOrderInput: $placeOrderInput) {
      _id
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
export const NEW_ORDER_SUB = gql`
  subscription Subscription($businessId: ID!) {
    orderCreated(businessId: $businessId) {
      _id
      business
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
    getAllProdcutsByBusiness(businessId: $businessId) {
      _id
      price
      product_description
      product_name
      quantity
    }
  }
`;
export const CREATE_PRODUCT = gql`
  mutation Mutation($productInput: CreateProductInput!) {
    createProduct(productInput: $productInput) {
      _id

      product_description
      price
      quantity
    }
  }
`;
