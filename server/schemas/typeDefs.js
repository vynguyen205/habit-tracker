const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userHabit: [userHabit]!
    userTodo: [userTodo]!
  }

  type Habit {
    _id: ID
    habitName: String
    habitDescription: String
    habitCompleted: Boolean
    habitCreated: String
    habitUpdated: String
    habitUser: String
    habitPoints: Number
    habitTags: [habitTags]!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(name: String!): User
    addHabit(userId: ID!, habit: String!): User
    removeUser(userId: ID!): User
    removeHabit(userId: ID!, habit: String!): User
  }
`;

module.exports = typeDefs;
