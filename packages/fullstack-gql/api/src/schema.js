const gql = require("graphql-tag");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
    hobbies: [Hobbie]!
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
    user: User!
  }

  type Dog implements Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: PetType!
    img: String!
    barks: String!
    user: User!
  }

  type Cat implements Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: PetType!
    img: String!
    meows: String!
    user: User!
  }

  type Parrot implements Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: PetType!
    img: String!
    talks: String!
    user: User!
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

  type Hobbie {
    id: ID!
    name: String!
    user: User!
  }

  union Favorite = Dog | Cat | Parrot | Hobbie

  type Query {
    user: User!
    pet(input: PetInput): Pet
    pets(input: PetsInput): [Pet]!
    favorites: [Favorite]!
  }

  type Mutation {
    pet(input: NewPetInput!): Pet!
  }
`;

module.exports = typeDefs;
