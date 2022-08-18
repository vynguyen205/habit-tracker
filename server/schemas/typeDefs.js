const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    userHabit: [Habit]
    userTodo: [Todo]
  }

  type Tag {
    _id: ID
    tagName: String!
  }
  type Habit {
    _id: ID
    habitName: String!
    habitDescription: String
    habitCompleted: Boolean
    habitCreated: String
    habitUpdated: String
    habitUser: User
    habitPoints: Int
    habitTags: [Tag]
  }
  type Todo {
    _id: ID
    todoName: String!
    todoDescription: String
    todoCompleted: Boolean
    todoCreated: String
    todoUpdated: String
    todoUser: User
    todoPoints: Int
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
