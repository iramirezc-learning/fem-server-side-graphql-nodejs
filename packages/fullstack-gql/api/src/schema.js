const gql = require("graphql-tag");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: String!
    username: String!
  }

  type Pet {
    id: String!
    createdAt: String!
    name: String!
    type: String
  }

  type Query {
    user: User!
    pets: [Pet]!
  }
`;

module.exports = typeDefs;
