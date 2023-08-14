import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      first_name
      last_name
      email
      phone_number
      vendor
      first_time_log
    }
  }
`;
export const GET_BUSINESS_BY_USER_ID = gql`
  query GetBusinessByUser($userId: ID!) {
    getBusinessByUser(userId: $userId) {
      _id
      business_name
      description
      address
      products {
        _id
        price
        product_description
        product_name
      }
    }
  }
`;
export const GET_ALL_USERS = gql`
  query Query {
    getAllUsers {
      _id
      first_name
    }
  }
`;
export const REGISTER_USER = gql`
  mutation CreateUser($userInput: CreateUserInput!) {
    createUser(userInput: $userInput) {
      token
    }
  }
`;
export const AUTH_USER = gql`
  query AuthUser($token: String!) {
    authUser(token: $token) {
      userId
      authed
    }
  }
`;
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;
// export const REGISTER_USER = (userInput) => {
//   return gql`
//   mutation {
//     createUser(userInput:${userInput})
//     {
//       token
//     }
//   }
//   `;
// };
