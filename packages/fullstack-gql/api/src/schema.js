const gql = require("graphql-tag");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  """
  This is a comment for PetType
  """
  enum PetType {
    DOG
    CAT
    PARROT
  }

  interface Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: PetType!
    img: String!
  }

  type Dog implements Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: PetType!
    img: String!
    barks: String!
  }

  type Cat implements Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: PetType!
    img: String!
    meows: String!
  }

  type Parrot implements Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: PetType!
    img: String!
    talks: String!
  }

  input PetInput {
    id: ID!
  }

  input PetsInput {
    type: PetType
  }

  input NewPetInput {
    name: String!
    type: PetType!
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
