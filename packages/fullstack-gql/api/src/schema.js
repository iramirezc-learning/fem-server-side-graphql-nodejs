const gql = require("graphql-tag");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    img: String!
  }

  input PetInput {
    id: ID!
  }

  input PetsInput {
    type: String
  }

  input NewPetInput {
    name: String!
    type: String!
  }

  type Query {
    user: User!
    pet(input: PetInput): Pet
    pets(input: PetsInput): [Pet]!
  }

  type Mutation {
    pet(input: NewPetInput!): Pet!
  }
`;

module.exports = typeDefs;
