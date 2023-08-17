import { gql } from "@apollo/client";

export const UPDATE_PRODUCT = gql`
  mutation Mutation($input: updateProductInput!) {
    updateProduct(input: $input) {
      price
      product_description
      product_name
      quantity
    }
  }
`;
export const DELETE_PRODUCT = gql`
  mutation Mutation($productId: ID!) {
    deleteProduct(productId: $productId) {
      _id
      price
      product_description
      product_name
      quantity
    }
  }
`;
