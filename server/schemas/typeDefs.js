const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    phone_number: String!
    vendor: Boolean!
    first_time_log: Boolean
  }

  type Product {
    _id: ID!
    product_name: String!
    product_description: String!
    price: Float!
    quantity: Int!
  }

  type Business {
    _id: ID!
    user_id: ID!
    business_name: String!
    description: String!
    address: String!
    phone_number: String
    email: String
    password: String
    products: [Product]
    orders: [Order]
  }

  type Cart {
    _id: ID!
    user: User!
    item: [CartItem]
    totalAmount: Float!
  }

  type CartItem {
    _id: ID!
    product: Product
    quantity: Int!
  }

  type Order {
    _id: ID!
    user: User!
    item: [OrderItem]
    business: Business
    total: Float!
  }

  type OrderItem {
    _id: ID!
    product: Product
    quantity: Int!
  }

  type Auth {
    token: ID!
    user: User
  }
  type Token {
    token: String!
  }

  type AuthUser {
    authed: Boolean!
    userId: ID!
  }
  type AuthError {
    message: String!
    status: Int!
  }
  input CreateUserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    phone_number: String!
    vendor: Boolean!
    business_name: String
    description: String
    address: String
    newVendorUser: Boolean
  }

  input CreateProductInput {
    business_id: ID!
    product_name: String!
    product_description: String!
    price: Float!
    quantity: Int
  }

  input AddToCartInput {
    userId: ID!
    productId: ID!
    quantity: Int!
  }

  input UpdateBusinessInput {
    businessId: ID!
    businessName: String!
    address: String!
    description: String!
  }

  input AddBusinessInput {
    business_name: String!
    description: String!
    address: String!
  }
  type Query {
    getAllUsers: [User!]!
    getUser(userId: ID!): User
    getProducts: [Product!]!
    getCartByUser(userId: ID!): Cart
    getBusiness(businessId: ID!): Business
    getBusinessByUser(userId: ID!): [Business!]!
    getAllBusiness: [Business!]!
    authUser(token: String!): AuthUser!
  }

  type Mutation {
    createUser(userInput: CreateUserInput!): Auth
    createProduct(productInput: CreateProductInput!): Product
    loginUser(email: String!, password: String!): Token!
    createBusiness(input: AddBusinessInput!): Business!
    updateBusinessAddress(input: UpdateBusinessInput!): Business!
    addToCart(input: AddToCartInput!): Cart
    updateBusiness(input: UpdateBusinessInput!): Business
    addBusiness(input: AddBusinessInput!): Business
  }
`;

module.exports = typeDefs;
