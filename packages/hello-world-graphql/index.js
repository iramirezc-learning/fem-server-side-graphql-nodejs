const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");

const PORT = 4000;

const typeDefs = gql`
  type User {
    email: String
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User!
  }
`;

const resolvers = {
  Query: {
    me() {
      return {
        email: "user@example.com",
        avatar: "http://placeholder.com",
        friends: [],
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(PORT).then(() => console.log(`listening on port ${PORT}`));
