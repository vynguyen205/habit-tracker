const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    habit: [String]!
  }
{
  User: {

   Query {
    users: [User]!
    user(userId: ID!): User
  }

   Mutation {
    addUser(name: String!): User
    addHabit(userId: ID!, habit: String!): User
    removeUser(userId: ID!): User
    removeHabit(userId: ID!, habit: String!): User
  }
}
}
`;

module.exports = typeDefs;
