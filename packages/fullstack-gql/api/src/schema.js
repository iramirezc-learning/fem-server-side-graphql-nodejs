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

  type Query {
    user: User!
    pets: [Pet]!
  }
`;

module.exports = typeDefs;
